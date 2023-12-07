document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier: 3 // Adjust the speed of scrolling
        // You can add more options as needed
    });

    // Function to animate the  elements
    function animatePl2Elements() {
        anime({
            targets: '.pl2,figure,pl3,pl6',
            opacity: [0, 5],
            translateX: [20, 0],
            duration: 500,
            delay: anime.stagger(200),
        });
    }

    // Call the animation function when the page is loaded
    animatePl2Elements();

    window.addEventListener('scroll', function () {
        var element = document.querySelector('.content');
        var bounding = element.getBoundingClientRect();

        // Check if the element is in the first section and halfway visible
        if (bounding.bottom < window.innerHeight / 1.5 && bounding.bottom > window.innerHeight / 3) {
            element.style.transform = 'rotate(180deg)';
            document.querySelector('.oval').style.backgroundColor = 'red'; // Change color to green
        } 
        // Check if the element is in the second section
        else if (bounding.bottom < window.innerHeight / 1.8) {
            element.style.transform = 'rotate(340deg)';
            document.querySelector('.oval').style.backgroundColor = '#red'; // Change color to red
        } 
        // If the element is in neither section, set a default rotation and color
        else {
            element.style.transform = 'rotate(0deg)';
            document.querySelector('.oval').style.backgroundColor = '#000000'; // Change color to blue
        }
    });

    window.addEventListener('scroll', () => {
        document.querySelectorAll('.section').forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isVisible = sectionTop < window.innerHeight && sectionTop >= 0;
            if (isVisible) {
                section.classList.add('show');
                // Call the animation function when a section becomes visible
                animatePl2Elements();
            }
        });
    });
});
