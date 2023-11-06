function projectHover(element) {
    element.classList.add('active-proj');
}

function projectHoverOff(element) {
    element.classList.remove('active-proj');
}

document.addEventListener('DOMContentLoaded', function () {
    // Function to scroll to a section with margin
    function scrollToSectionWithMargin(targetId, margin) {
    const targetSection = document.getElementById(targetId);
    const offset = targetSection.offsetTop - margin;
    
    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
    }

    // Event listeners for each navigation link
    document.querySelector('a[href="#home"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSectionWithMargin('home', 0);
    });

    document.querySelector('a[href="#about"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSectionWithMargin('about', 0);
    });

    document.querySelector('a[href="#portfolio"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSectionWithMargin('portfolio', 0);
    });

    document.querySelector('a[href="#contact"]').addEventListener('click', function (event) {
    event.preventDefault();
    scrollToSectionWithMargin('contact', 0);
    });
});