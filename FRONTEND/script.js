document.addEventListener("DOMContentLoaded", function () {
    const questions = [
        { question: "What is Java? Explain its main features.", keywords: ["object-oriented", "platform independent", "JVM", "robust", "secure"] },
        { question: "What are the four pillars of OOP in Java?", keywords: ["encapsulation", "inheritance", "polymorphism", "abstraction"] },
        { question: "What is Selenium WebDriver?", keywords: ["browser", "automation", "web application", "webdriver"] },
        { question: "What is the difference between findElement() and findElements()?", keywords: ["single element", "first matching", "list", "no such element", "empty list"] },
        { question: "What is the difference between implicit wait and explicit wait in Selenium?", keywords: ["implicit wait", "explicit wait", "global", "specific condition", "timeout"] }
    ];

    let currentQuestion = 0;
    let answers = [];
    let isRecording = false;
    let availableVoices = [];
    let currentUtterance = null;

    const startBtn = document.getElementById("startBtn");
    const micBtn = document.getElementById("micBtn");
    const submitBtn = document.getElementById("submitBtn");
    const answerInput = document.getElementById("answerInput");
    const questionText = document.getElementById("questionText");
    const questionNumber = document.getElementById("questionNumber");
    const questionPanel = document.getElementById("questionPanel");
    const resultPanel = document.getElementById("resultPanel");
    const visualizer = document.getElementById("visualizer");

    // --- 1. Speech to Text (Mic) ---
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = function (event) {
            let finalTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + " ";
                }
            }
            if (finalTranscript) answerInput.value += finalTranscript;
        };

        recognition.onend = function () {
            if (isRecording) {
                isRecording = false;
                micBtn.textContent = "🎤 Speak Answer";
                micBtn.classList.remove("recording");
            }
        };
    } else {
        micBtn.disabled = true;
        micBtn.textContent = "🎤 Mic Not Supported";
    }

    function toggleRecording() {
        if (!recognition) return;
        if (isRecording) {
            recognition.stop();
            isRecording = false;
            micBtn.textContent = "🎤 Speak Answer";
            micBtn.classList.remove("recording");
        } else {
            recognition.start();
            isRecording = true;
            micBtn.textContent = "🛑 Stop Recording";
            micBtn.classList.add("recording");
        }
    }

    // --- 2. Text to Speech (Female Voice + Visualizer) ---
    function loadVoices() {
        availableVoices = window.speechSynthesis.getVoices();
    }

    if ("speechSynthesis" in window) {
        loadVoices();
        window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    function getFemaleVoice() {
        if (!availableVoices.length) {
            availableVoices = window.speechSynthesis.getVoices();
        }

        const preferredNames = [
            "Microsoft Zira",           // Reliable offline Windows female voice
            "Google UK English Female", // Chrome
            "Microsoft Neerja",         // Indian English (Edge)
            "Microsoft Aria",           // US English (Edge)
            "Microsoft Jenny",          // US English (Edge)
            "Samantha",                 // Mac
            "Female"
        ];

        for (const name of preferredNames) {
            const match = availableVoices.find(v => v.name.includes(name));
            if (match) return match;
        }

        return availableVoices.find(v => v.lang.startsWith("en")) || null;
    }

    function speakMessage(message) {
        if (!("speechSynthesis" in window)) return;

        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();

        setTimeout(() => {
            currentUtterance = new SpeechSynthesisUtterance(message);

            const femaleVoice = getFemaleVoice();
            if (femaleVoice) {
                currentUtterance.voice = femaleVoice;
                currentUtterance.lang = femaleVoice.lang;
            } else {
                currentUtterance.lang = "en-US";
            }

            currentUtterance.rate = 0.98;
            currentUtterance.pitch = 1.05;
            currentUtterance.volume = 1;

            currentUtterance.onstart = () => visualizer.classList.add("active");
            currentUtterance.onend = () => visualizer.classList.remove("active");
            currentUtterance.onerror = () => visualizer.classList.remove("active");

            window.speechSynthesis.speak(currentUtterance);
        }, 60);
    }

    // --- 3. Interview Logic ---
    function showQuestion() {
        questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
        questionText.textContent = questions[currentQuestion].question;
        answerInput.value = "";
        speakMessage(questions[currentQuestion].question);
    }

    function evaluateAnswer(answer, question) {
        const userAnswer = answer.toLowerCase();
        const matchedKeywords = question.keywords.filter(k => userAnswer.includes(k.toLowerCase()));
        const score = Math.round((matchedKeywords.length / question.keywords.length) * 10);
        const feedback = score >= 8 ? "Excellent" : score >= 5 ? "Good" : "Needs Improvement";
        return { score, matchedKeywords, feedback };
    }

    // --- 4. Event Listeners ---
    startBtn.addEventListener("click", () => {
        startBtn.hidden = true;
        questionPanel.hidden = false;
        showQuestion();
    });

    micBtn.addEventListener("click", toggleRecording);

    submitBtn.addEventListener("click", () => {
        if (isRecording) toggleRecording();
        const answer = answerInput.value.trim();
        if (answer === "") return alert("Please provide an answer.");

        const evaluation = evaluateAnswer(answer, questions[currentQuestion]);
        answers.push({ question: questions[currentQuestion].question, answer, ...evaluation });

        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            questionPanel.hidden = true;
            resultPanel.hidden = false;

            const total = answers.reduce((sum, item) => sum + item.score, 0);
            document.getElementById("resultMessage").innerHTML =
                `Average Score: <strong>${Math.round(total / answers.length)}/10</strong>`;

            const answerSummary = document.getElementById("answerSummary");
            const evalSummary = document.getElementById("evaluationSummary");
            answerSummary.innerHTML = "";
            evalSummary.innerHTML = "";

            answers.forEach((item, i) => {
                const p = document.createElement("p");
                const strong = document.createElement("strong");
                strong.textContent = `Q${i + 1}: `;
                p.appendChild(strong);
                p.appendChild(document.createTextNode(item.answer));
                answerSummary.appendChild(p);

                const card = document.createElement("div");
                card.className = "eval-card";
                card.innerHTML = `<strong>Score: ${item.score}/10</strong> - ${item.feedback}`;
                evalSummary.appendChild(card);
            });

            speakMessage("Interview completed. Check your results on the screen.");
        }
    });

    document.getElementById("restartBtn").addEventListener("click", () => {
        if ("speechSynthesis" in window) window.speechSynthesis.cancel();
        visualizer.classList.remove("active");
        currentQuestion = 0;
        answers = [];
        resultPanel.hidden = true;
        startBtn.hidden = false;
    });
});