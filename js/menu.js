       fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;

        // Now the elements exist
        const mobileBtn = document.getElementById("mobile-cta");
        const nav = document.querySelector(".top-nav");
        const mobileBtnExit = document.getElementById("mobile-exit");

        mobileBtn.addEventListener("click", () => {
            nav.classList.add("menu-btn");
        });

        mobileBtnExit.addEventListener("click", () => {
            nav.classList.remove("menu-btn");
        });
    });