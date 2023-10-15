document.addEventListener("DOMContentLoaded", function () {
    const modeSwitchButton = document.getElementById("modeSwitchButton");
    const content = document.getElementById("content");

    // Check if the user has a preferred mode set in their browser
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    modeSwitchButton.addEventListener("click", () => {
        if (document.body.classList.contains("light-mode")) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });

    function enableDarkMode() {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
    }

    function enableLightMode() {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
    }
});
