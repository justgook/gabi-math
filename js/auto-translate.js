// Auto-translation helper for common elements
function autoTranslateCommonElements() {
    // Common translations mapping
    const commonTranslations = {
        // Navigation
        'Home': 'navHome',
        'Algebra': 'navAlgebra', 
        'Geometry': 'navGeometry',
        'Practice': 'navPractice',
        
        // Common buttons and actions
        'Show Answer': 'showAnswer',
        'Hide Answer': 'hideAnswer',
        'Check': 'checkAnswer',
        'Next': 'nextQuestion',
        'Previous': 'previousQuestion',
        'Finish Quiz': 'finishQuiz',
        'Try Again': 'tryAgain',
        'Score': 'score',
        
        // Page titles
        'Algebra Fundamentals': 'algebraFundamentals',
        'Geometry Essentials': 'geometryEssentials',
        'Interactive Practice': 'interactivePractice',
        'Welcome to 9th Grade Math': 'homeTitle',
        
        // Common sections
        'Study Tips': 'studyTips',
        'Learning Features': 'learningFeatures',
        'What You\'ll Learn': 'whatYouLearn',
        
        // Footer
        '© 2024 Math Learning Hub. Designed for 9th Grade Students.': 'footerText'
    };

    // Auto-add translation attributes to elements with matching text
    Object.keys(commonTranslations).forEach(text => {
        const elements = Array.from(document.querySelectorAll('*')).filter(el => 
            el.textContent.trim() === text && 
            !el.querySelector('*') && // Only leaf nodes
            !el.hasAttribute('data-translate')
        );
        
        elements.forEach(el => {
            el.setAttribute('data-translate', commonTranslations[text]);
        });
    });

    // Auto-translate navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.trim();
        if (commonTranslations[text] && !link.hasAttribute('data-translate')) {
            link.setAttribute('data-translate', commonTranslations[text]);
        }
    });

    // Auto-translate buttons
    document.querySelectorAll('button').forEach(button => {
        const text = button.textContent.trim();
        if (commonTranslations[text] && !button.hasAttribute('data-translate')) {
            button.setAttribute('data-translate', commonTranslations[text]);
        }
    });

    // Auto-translate common headings
    document.querySelectorAll('h1, h2, h3').forEach(heading => {
        const text = heading.textContent.trim();
        if (commonTranslations[text] && !heading.hasAttribute('data-translate')) {
            heading.setAttribute('data-translate', commonTranslations[text]);
        }
    });

    // Auto-translate footer
    document.querySelectorAll('footer p').forEach(p => {
        const text = p.textContent.trim();
        if (commonTranslations[text] && !p.hasAttribute('data-translate')) {
            p.setAttribute('data-translate', commonTranslations[text]);
        }
    });
}

// Run auto-translation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    autoTranslateCommonElements();
});