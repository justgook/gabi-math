// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Add event listener to theme toggle button
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        
        // Add a subtle animation effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    }

    getTheme() {
        return this.currentTheme;
    }
}

// Practice Problems Functionality
class PracticeManager {
    constructor() {
        this.currentTab = 'algebra-practice';
        this.quizScore = 0;
        this.currentQuestion = 1;
        this.totalQuestions = 5;
        this.quizAnswers = [];
        this.init();
    }

    init() {
        // Initialize tab functionality
        this.initTabs();
        
        // Initialize quiz
        this.initQuiz();
    }

    initTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const targetTab = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showTab(targetTab);
            });
        });
    }

    showTab(tabId) {
        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Show selected tab content
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        }

        // Add active class to clicked button
        const targetButton = document.querySelector(`[onclick*="${tabId}"]`);
        if (targetButton) {
            targetButton.classList.add('active');
        }

        this.currentTab = tabId;
    }

    initQuiz() {
        this.quizAnswers = new Array(this.totalQuestions).fill(null);
        this.updateQuizNavigation();
    }

    selectAnswer(element, isCorrect) {
        // Remove previous selections
        const options = element.parentNode.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.classList.remove('selected');
        });

        // Mark current selection
        element.classList.add('selected');
        
        // Store answer
        this.quizAnswers[this.currentQuestion - 1] = isCorrect;
        
        // Update navigation
        this.updateQuizNavigation();
    }

    nextQuestion() {
        if (this.currentQuestion < this.totalQuestions) {
            this.showQuestion(this.currentQuestion + 1);
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 1) {
            this.showQuestion(this.currentQuestion - 1);
        }
    }

    showQuestion(questionNumber) {
        // Hide all questions
        document.querySelectorAll('.quiz-question').forEach(q => {
            q.classList.remove('active');
        });

        // Show target question
        const targetQuestion = document.querySelector(`[data-question="${questionNumber}"]`);
        if (targetQuestion) {
            targetQuestion.classList.add('active');
        }

        this.currentQuestion = questionNumber;
        this.updateQuizNavigation();
    }

    updateQuizNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const finishBtn = document.getElementById('finish-btn');

        if (prevBtn) {
            prevBtn.disabled = this.currentQuestion === 1;
        }

        if (nextBtn && finishBtn) {
            if (this.currentQuestion === this.totalQuestions) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
            }
        }
    }

    finishQuiz() {
        // Calculate score
        this.quizScore = this.quizAnswers.filter(answer => answer === true).length;
        
        // Show results
        document.querySelectorAll('.quiz-question').forEach(q => {
            q.style.display = 'none';
        });
        
        document.querySelector('.quiz-navigation').style.display = 'none';
        
        const resultsDiv = document.getElementById('quiz-results');
        const finalScoreSpan = document.getElementById('final-score');
        
        if (resultsDiv && finalScoreSpan) {
            finalScoreSpan.textContent = this.quizScore;
            resultsDiv.style.display = 'block';
        }

        // Update score display
        const scoreDisplay = document.getElementById('quiz-score');
        if (scoreDisplay) {
            scoreDisplay.textContent = this.quizScore;
        }

        // Show correct answers
        this.showCorrectAnswers();
    }

    showCorrectAnswers() {
        document.querySelectorAll('.quiz-question').forEach((question, index) => {
            const options = question.querySelectorAll('.quiz-option');
            const correctAnswer = this.quizAnswers[index];
            
            options.forEach(option => {
                const isCorrect = option.getAttribute('onclick').includes('true');
                const wasSelected = option.classList.contains('selected');
                
                if (isCorrect) {
                    option.classList.add('correct');
                } else if (wasSelected && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });
        });
    }

    restartQuiz() {
        // Reset quiz state
        this.quizScore = 0;
        this.currentQuestion = 1;
        this.quizAnswers = new Array(this.totalQuestions).fill(null);
        
        // Reset UI
        document.querySelectorAll('.quiz-question').forEach((q, index) => {
            q.style.display = index === 0 ? 'block' : 'none';
            q.classList.toggle('active', index === 0);
            
            // Reset option styles
            q.querySelectorAll('.quiz-option').forEach(option => {
                option.classList.remove('selected', 'correct', 'incorrect');
            });
        });
        
        document.querySelector('.quiz-navigation').style.display = 'flex';
        document.getElementById('quiz-results').style.display = 'none';
        
        // Update score display
        const scoreDisplay = document.getElementById('quiz-score');
        if (scoreDisplay) {
            scoreDisplay.textContent = '0';
        }
        
        this.updateQuizNavigation();
    }
}

// Answer Checking Functions
function checkAnswer(inputId, correctAnswer, feedbackId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);
    
    if (!input || !feedback) return;
    
    const userAnswer = parseFloat(input.value);
    const isCorrect = Math.abs(userAnswer - correctAnswer) < 0.01; // Allow for small rounding errors
    
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? 
        '✓ Correct! Well done!' : 
        `✗ Incorrect. The correct answer is ${correctAnswer}`;
    
    // Add animation
    feedback.style.opacity = '0';
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.opacity = '1';
    }, 100);
}

function checkVertex() {
    const xInput = document.getElementById('vertex-x');
    const yInput = document.getElementById('vertex-y');
    const feedback = document.getElementById('vertex-feedback');
    
    if (!xInput || !yInput || !feedback) return;
    
    const userX = parseFloat(xInput.value);
    const userY = parseFloat(yInput.value);
    
    // For y = x² - 4x + 3, vertex is at (2, -1)
    const correctX = 2;
    const correctY = -1;
    
    const isCorrect = Math.abs(userX - correctX) < 0.01 && Math.abs(userY - correctY) < 0.01;
    
    feedback.className = 'feedback ' + (isCorrect ? 'correct' : 'incorrect');
    feedback.textContent = isCorrect ? 
        '✓ Correct! The vertex is at (2, -1)' : 
        `✗ Incorrect. The vertex is at (${correctX}, ${correctY})`;
    
    feedback.style.opacity = '0';
    feedback.style.display = 'block';
    setTimeout(() => {
        feedback.style.opacity = '1';
    }, 100);
}

function toggleAnswer(answerId) {
    const answerElement = document.getElementById(answerId);
    if (answerElement) {
        answerElement.classList.toggle('hidden');
    }
}

// Global functions for HTML onclick handlers
function showTab(tabId) {
    if (window.practiceManager) {
        window.practiceManager.showTab(tabId);
    }
}

function selectAnswer(element, isCorrect) {
    if (window.practiceManager) {
        window.practiceManager.selectAnswer(element, isCorrect);
    }
}

function nextQuestion() {
    if (window.practiceManager) {
        window.practiceManager.nextQuestion();
    }
}

function previousQuestion() {
    if (window.practiceManager) {
        window.practiceManager.previousQuestion();
    }
}

function finishQuiz() {
    if (window.practiceManager) {
        window.practiceManager.finishQuiz();
    }
}

function restartQuiz() {
    if (window.practiceManager) {
        window.practiceManager.restartQuiz();
    }
}

// Interactive SVG Animations
class SVGAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.animateOnScroll();
        this.addHoverEffects();
    }

    animateOnScroll() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSVG(entry.target);
                }
            });
        }, { threshold: 0.3 });

        // Observe all SVG containers
        document.querySelectorAll('svg').forEach(svg => {
            observer.observe(svg);
        });
    }

    animateSVG(svg) {
        // Add a subtle fade-in animation
        svg.style.opacity = '0';
        svg.style.transform = 'translateY(20px)';
        svg.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            svg.style.opacity = '1';
            svg.style.transform = 'translateY(0)';
        }, 100);

        // Animate drawing of lines and paths
        const paths = svg.querySelectorAll('path, line');
        paths.forEach((path, index) => {
            if (path.getTotalLength) {
                const length = path.getTotalLength();
                path.style.strokeDasharray = length;
                path.style.strokeDashoffset = length;
                path.style.animation = `drawPath 1s ease-in-out ${index * 0.2}s forwards`;
            }
        });
    }

    addHoverEffects() {
        // Add hover effects to interactive elements
        document.querySelectorAll('.topic-card, .problem-card, .tip-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Accessibility Features
class AccessibilityManager {
    constructor() {
        this.init();
    }

    init() {
        this.addKeyboardNavigation();
        this.addAriaLabels();
        this.addFocusManagement();
    }

    addKeyboardNavigation() {
        // Add keyboard navigation for tabs
        document.querySelectorAll('.tab-btn').forEach((tab, index) => {
            tab.setAttribute('tabindex', '0');
            tab.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tab.click();
                }
            });
        });

        // Add keyboard navigation for quiz options
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.setAttribute('tabindex', '0');
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    option.click();
                }
            });
        });
    }

    addAriaLabels() {
        // Add ARIA labels for better screen reader support
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 'Toggle dark/light theme');
        }

        // Add labels to navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            const text = link.textContent.trim();
            link.setAttribute('aria-label', `Navigate to ${text} page`);
        });
    }

    addFocusManagement() {
        // Ensure focus is visible and properly managed
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });
    }
}

// Performance Optimization
class PerformanceManager {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.optimizeAnimations();
    }

    lazyLoadImages() {
        // Implement lazy loading for SVGs if needed
        const svgs = document.querySelectorAll('svg');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                    imageObserver.unobserve(entry.target);
                }
            });
        });

        svgs.forEach(svg => imageObserver.observe(svg));
    }

    optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0s');
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize managers
    window.themeManager = new ThemeManager();
    window.practiceManager = new PracticeManager();
    window.svgAnimations = new SVGAnimations();
    window.accessibilityManager = new AccessibilityManager();
    window.performanceManager = new PerformanceManager();
    window.languageManager = new LanguageManager();

    // Add CSS animation for path drawing
    const style = document.createElement('style');
    style.textContent = `
        @keyframes drawPath {
            to {
                stroke-dashoffset: 0;
            }
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid var(--accent-primary) !important;
            outline-offset: 2px !important;
        }
        
        .loaded {
            opacity: 1 !important;
        }
        
        @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    console.log('Math Learning Hub initialized successfully!');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
    // Could implement user-friendly error reporting here
});

// Service Worker registration for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment if you want to add offline functionality
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}