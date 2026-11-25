
document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. SECTION-WISE INTERVIEW QUESTIONS
    // ==========================================

    const interviewSections = [

        {
            section: "Java Fundamentals",
            questions: [
                {
                    question: "What is Java? Explain its main features.",
                    keywords: ["object-oriented", "platform independent", "JVM", "robust", "secure"]
                },
                {
                    question: "What is the difference between JDK, JRE, and JVM?",
                    keywords: ["JDK", "JRE", "JVM", "development", "runtime", "bytecode"]
                },
                {
                    question: "What is the difference between == and equals() in Java?",
                    keywords: ["reference comparison", "content comparison", "object", "String"]
                },
                {
                    question: "What are primitive and non-primitive data types?",
                    keywords: ["int", "char", "boolean", "float", "String", "objects"]
                },
                {
                    question: "What is the difference between static and non-static variables?",
                    keywords: ["class variable", "instance variable", "static", "object"]
                },
                {
                    question: "What is a constructor in Java?",
                    keywords: ["initialize object", "class name", "no return type", "default constructor", "parameterized constructor"]
                },
                {
                    question: "What is the difference between a constructor and a method?",
                    keywords: ["initialization", "return type", "constructor", "method"]
                }
            ]
        },

        {
            section: "OOP Concepts",
            questions: [
                {
                    question: "What are the four pillars of OOP in Java?",
                    keywords: ["encapsulation", "inheritance", "polymorphism", "abstraction"]
                },
                {
                    question: "What is encapsulation in Java?",
                    keywords: ["data hiding", "private variables", "getters", "setters"]
                },
                {
                    question: "What is inheritance? Explain its types.",
                    keywords: ["parent class", "child class", "extends", "single", "multilevel", "hierarchical"]
                },
                {
                    question: "What is method overloading and method overriding?",
                    keywords: ["compile-time polymorphism", "runtime polymorphism", "parameters", "inheritance"]
                },
                {
                    question: "What is the difference between abstraction and encapsulation?",
                    keywords: ["implementation hiding", "data hiding", "abstract class", "interface"]
                },
                {
                    question: "What is the difference between an abstract class and an interface?",
                    keywords: ["abstract", "interface", "implements", "extends", "multiple inheritance"]
                },
                {
                    question: "What is the difference between this and super keywords?",
                    keywords: ["current object", "parent class", "this", "super", "constructor"]
                }
            ]
        },

        {
            section: "String and Array",
            questions: [
                {
                    question: "Why is String immutable in Java?",
                    keywords: ["immutable", "security", "string pool", "thread safety", "memory"]
                },
                {
                    question: "What is the difference between String, StringBuilder, and StringBuffer?",
                    keywords: ["immutable", "mutable", "thread-safe", "synchronization", "performance"]
                },
                {
                    question: "What is the String Constant Pool?",
                    keywords: ["string pool", "heap memory", "memory optimization", "string literal"]
                },
                {
                    question: "What is the difference between an array and an ArrayList?",
                    keywords: ["fixed size", "dynamic size", "index", "collection"]
                },
                {
                    question: "How do you reverse a String in Java?",
                    keywords: ["StringBuilder", "reverse", "loop", "character array"]
                },
                {
                    question: "How do you find duplicate elements in an array?",
                    keywords: ["array", "nested loop", "HashSet", "duplicate", "iteration"]
                }
            ]
        },

        {
            section: "Exception Handling",
            questions: [
                {
                    question: "What is exception handling in Java?",
                    keywords: ["exception", "try", "catch", "finally", "throw", "throws"]
                },
                {
                    question: "What is the difference between checked and unchecked exceptions?",
                    keywords: ["compile-time", "runtime", "IOException", "NullPointerException"]
                },
                {
                    question: "What is the difference between throw and throws?",
                    keywords: ["throw", "throws", "exception", "method declaration"]
                },
                {
                    question: "Can we use multiple catch blocks in Java?",
                    keywords: ["multiple catch", "exception hierarchy", "specific exception", "parent exception"]
                },
                {
                    question: "What is the purpose of the finally block?",
                    keywords: ["cleanup", "resource closing", "exception handling"]
                }
            ]
        },

        {
            section: "Collections Framework",
            questions: [
                {
                    question: "What is the Java Collections Framework?",
                    keywords: ["collection", "List", "Set", "Map", "Queue"]
                },
                {
                    question: "What is the difference between List, Set, and Map?",
                    keywords: ["ordered", "duplicates", "unique elements", "key-value"]
                },
                {
                    question: "What is the difference between ArrayList and LinkedList?",
                    keywords: ["dynamic array", "linked list", "insertion", "deletion", "access"]
                },
                {
                    question: "What is the difference between HashMap and Hashtable?",
                    keywords: ["synchronization", "null key", "null values", "thread safety", "performance"]
                },
                {
                    question: "What is the difference between HashSet and TreeSet?",
                    keywords: ["unique elements", "unordered", "sorted", "performance"]
                },
                {
                    question: "What is an Iterator in Java?",
                    keywords: ["iteration", "hasNext", "next", "remove", "collection"]
                }
            ]
        },

        {
            section: "Advanced Java",
            questions: [
                {
                    question: "What is the difference between final, finally, and finalize?",
                    keywords: ["final keyword", "finally block", "finalize method", "constant"]
                },
                {
                    question: "What is multithreading in Java?",
                    keywords: ["multiple threads", "concurrency", "parallel execution", "Thread", "Runnable"]
                },
                {
                    question: "What is the difference between Thread and Runnable?",
                    keywords: ["thread class", "runnable interface", "extends", "implements"]
                },
                {
                    question: "What are the important features introduced in Java 8?",
                    keywords: ["lambda expressions", "Stream API", "functional interface", "default methods", "Optional"]
                },
                {
                    question: "What is a lambda expression in Java?",
                    keywords: ["functional interface", "arrow operator", "anonymous function", "Java 8"]
                },
                {
                    question: "What is the Stream API in Java?",
                    keywords: ["filter", "map", "collect", "reduce", "functional programming"]
                },
                {
                    question: "What is the difference between Comparable and Comparator?",
                    keywords: ["sorting", "compareTo", "compare", "natural ordering", "custom sorting"]
                }
            ]
        },

        {
            section: "Java Coding Questions",
            questions: [
                {
                    question: "Write a Java program to reverse a String without using reverse().",
                    keywords: ["for loop", "charAt", "StringBuilder", "reverse"]
                },
                {
                    question: "Write a Java program to check whether a String is a palindrome.",
                    keywords: ["palindrome", "reverse", "equals", "String"]
                },
                {
                    question: "Write a Java program to find duplicate characters in a String.",
                    keywords: ["HashMap", "character", "frequency", "duplicate"]
                },
                {
                    question: "Write a Java program to find the second largest number in an array.",
                    keywords: ["array", "largest", "second largest", "loop"]
                },
                {
                    question: "Write a Java program to count the occurrence of each character in a String.",
                    keywords: ["HashMap", "character", "frequency", "iteration"]
                },
                {
                    question: "Write a Java program to remove duplicate elements from an array.",
                    keywords: ["HashSet", "array", "unique", "duplicate"]
                },
                {
                    question: "Write a Java program to check whether two Strings are anagrams.",
                    keywords: ["anagram", "character array", "sort", "equals"]
                },
                {
                    question: "Write a Java program to print the Fibonacci series.",
                    keywords: ["Fibonacci", "loop", "previous number", "next number"]
                }
            ]
        },

        {
            section: "Selenium WebDriver",
            questions: [
                {
                    question: "What is Selenium WebDriver?",
                    keywords: ["browser", "automation", "web application", "webdriver"]
                },
                {
                    question: "What is the difference between findElement() and findElements()?",
                    keywords: ["single element", "first matching", "list", "no such element", "empty list"]
                },
                {
                    question: "What is the difference between implicit wait and explicit wait?",
                    keywords: ["implicit wait", "explicit wait", "global", "specific condition", "timeout"]
                },
                {
                    question: "What are the different types of locators in Selenium?",
                    keywords: ["id", "name", "class name", "tag name", "link text", "css selector", "xpath"]
                },
                {
                    question: "What is XPath? Explain absolute and relative XPath.",
                    keywords: ["XML path", "absolute XPath", "relative XPath", "DOM", "elements"]
                },
                {
                    question: "What is the difference between driver.close() and driver.quit()?",
                    keywords: ["close", "quit", "current window", "all windows", "browser session"]
                },
                {
                    question: "How do you handle dropdowns in Selenium?",
                    keywords: ["Select class", "selectByVisibleText", "selectByValue", "selectByIndex"]
                },
                {
                    question: "How do you handle alerts in Selenium?",
                    keywords: ["switchTo", "alert", "accept", "dismiss", "getText"]
                }
            ]
        }
    ];

    // Flatten all sections into one question list
    const questions = interviewSections.flatMap(section =>
        section.questions.map(q => ({
            ...q,
            section: section.section
        }))
    );

    // ==========================================
    // 2. INTERVIEW VARIABLES
    // ==========================================

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

    // ==========================================
    // 3. SPEECH TO TEXT
    // ==========================================

    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

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

            if (finalTranscript) {
                answerInput.value += finalTranscript;
            }
        };

        recognition.onend = function () {
            if (isRecording) {
                isRecording = false;
                micBtn.textContent = "🎤 Speak Answer";
                micBtn.classList.remove("recording");
            }
        };

        recognition.onerror = function () {
            isRecording = false;
            micBtn.textContent = "🎤 Speak Answer";
            micBtn.classList.remove("recording");
        };

    } else {
        micBtn.disabled = true;
        micBtn.textContent = "🎤 Mic Not Supported";
    }

    function toggleRecording() {
        if (!recognition) return;

        if (isRecording) {
            isRecording = false;
            recognition.stop();

            micBtn.textContent = "🎤 Speak Answer";
            micBtn.classList.remove("recording");

        } else {
            try {
                recognition.start();
                isRecording = true;

                micBtn.textContent = "🛑 Stop Recording";
                micBtn.classList.add("recording");

            } catch (error) {
                console.error("Recording error:", error);
            }
        }
    }

    // ==========================================
    // 4. TEXT TO SPEECH - FEMALE VOICE
    // ==========================================

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
            "Microsoft Zira",
            "Google UK English Female",
            "Microsoft Neerja",
            "Microsoft Aria",
            "Microsoft Jenny",
            "Samantha",
            "Female"
        ];

        for (const name of preferredNames) {
            const match = availableVoices.find(v =>
                v.name.includes(name)
            );

            if (match) return match;
        }

        return availableVoices.find(v =>
            v.lang.startsWith("en")
        ) || null;
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

            currentUtterance.onstart = () =>
                visualizer.classList.add("active");

            currentUtterance.onend = () =>
                visualizer.classList.remove("active");

            currentUtterance.onerror = () =>
                visualizer.classList.remove("active");

            window.speechSynthesis.speak(currentUtterance);

        }, 60);
    }

    // ==========================================
    // 5. SHOW QUESTIONS SECTION-WISE
    // ==========================================

    function showQuestion() {

        const question = questions[currentQuestion];

        questionNumber.textContent =
            `${question.section} | Question ${currentQuestion + 1} of ${questions.length}`;

        questionText.textContent = question.question;

        answerInput.value = "";

        speakMessage(question.question);
    }

    // ==========================================
    // 6. ANSWER EVALUATION
    // ==========================================

    function evaluateAnswer(answer, question) {

        const userAnswer = answer.toLowerCase();

        const matchedKeywords = question.keywords.filter(k =>
            userAnswer.includes(k.toLowerCase())
        );

        const score = Math.round(
            (matchedKeywords.length / question.keywords.length) * 10
        );

        const feedback =
            score >= 8 ? "Excellent" :
            score >= 5 ? "Good" :
            "Needs Improvement";

        return {
            score,
            matchedKeywords,
            feedback
        };
    }

    // ==========================================
    // 7. START INTERVIEW
    // ==========================================

    startBtn.addEventListener("click", () => {

        startBtn.hidden = true;
        questionPanel.hidden = false;

        showQuestion();
    });

    // ==========================================
    // 8. MICROPHONE BUTTON
    // ==========================================

    micBtn.addEventListener("click", toggleRecording);

    // ==========================================
    // 9. SUBMIT ANSWER AND NEXT QUESTION
    // ==========================================

    submitBtn.addEventListener("click", () => {

        if (isRecording) {
            toggleRecording();
        }

        const answer = answerInput.value.trim();

        if (answer === "") {
            return alert("Please provide an answer.");
        }

        const question = questions[currentQuestion];

        const evaluation = evaluateAnswer(answer, question);

        answers.push({
            question: question.question,
            section: question.section,
            answer,
            ...evaluation
        });

        currentQuestion++;

        if (currentQuestion < questions.length) {

            showQuestion();

        } else {

            questionPanel.hidden = true;
            resultPanel.hidden = false;

            const total = answers.reduce(
                (sum, item) => sum + item.score, 0
            );

            const average = Math.round(total / answers.length);

            document.getElementById("resultMessage").innerHTML =
                `Average Score: <strong>${average}/10</strong>`;

            const answerSummary =
                document.getElementById("answerSummary");

            const evalSummary =
                document.getElementById("evaluationSummary");

            answerSummary.innerHTML = "";
            evalSummary.innerHTML = "";

            // Group results section-wise
            interviewSections.forEach(section => {

                const sectionAnswers = answers.filter(
                    item => item.section === section.section
                );

                if (sectionAnswers.length === 0) return;

                const heading = document.createElement("h3");
                heading.textContent = section.section;
                answerSummary.appendChild(heading);

                sectionAnswers.forEach(item => {

                    const p = document.createElement("p");

                    const strong = document.createElement("strong");
                    strong.textContent = item.question;

                    p.appendChild(strong);
                    p.appendChild(document.createElement("br"));
                    p.appendChild(
                        document.createTextNode("Your Answer: " + item.answer)
                    );

                    answerSummary.appendChild(p);

                    const card = document.createElement("div");
                    card.className = "eval-card";

                    const scoreText = document.createElement("strong");
                    scoreText.textContent =
                        `Score: ${item.score}/10 - ${item.feedback}`;

                    card.appendChild(scoreText);

                    const keywordText = document.createElement("p");
                    keywordText.textContent =
                        "Matched Keywords: " +
                        (item.matchedKeywords.join(", ") || "None");

                    card.appendChild(keywordText);

                    evalSummary.appendChild(card);
                });
            });

            speakMessage(
                "Interview completed. Check your results on the screen."
            );
        }
    });

    // ==========================================
    // 10. RESTART INTERVIEW
    // ==========================================

    document.getElementById("restartBtn").addEventListener("click", () => {

        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }

        if (recognition && isRecording) {
            isRecording = false;
            recognition.stop();
        }

        visualizer.classList.remove("active");

        currentQuestion = 0;
        answers = [];

        resultPanel.hidden = true;
        questionPanel.hidden = true;
        startBtn.hidden = false;

        micBtn.textContent = "🎤 Speak Answer";
        micBtn.classList.remove("recording");

    });

});
