document.addEventListener("DOMContentLoaded", function () {
    // Function to check if the network is slow
    function isSlowNetwork() {
        // You can adjust this threshold according to your preference
        const networkSpeedThreshold = 500; // in kilobits per second (kbps)

        // Check if the effective connection type is slow
        return navigator.connection && navigator.connection.effectiveType === 'slow-2g' ||
            (navigator.connection && navigator.connection.downlink <= networkSpeedThreshold);
    }

    // Lazy load images only for slow network devices
    if (isSlowNetwork()) {
        var lazyImages = document.querySelectorAll('.lazy');

        var lazyLoad = function () {
            lazyImages.forEach(function (image) {
                if (image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0 && getComputedStyle(image).display !== 'none') {
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                }
            });

            lazyImages = document.querySelectorAll('.lazy');
            if (lazyImages.length === 0) {
                document.removeEventListener('scroll', lazyLoad);
                window.removeEventListener('resize', lazyLoad);
                window.removeEventListener('orientationchange', lazyLoad);
            }
        };

        document.addEventListener('scroll', lazyLoad);
        window.addEventListener('resize', lazyLoad);
        window.addEventListener('orientationchange', lazyLoad);

        lazyLoad();
    } else {
        // If the network is not slow, load all images immediately
        var lazyImages = document.querySelectorAll('.lazy');
        lazyImages.forEach(function (image) {
            image.src = image.dataset.src;
            image.classList.remove('lazy');
        });
    }
});
