const tabsButton = document.querySelectorAll(".tab_button");

tabsButton.forEach(tabButton => {
    tabButton.onclick = function () {
        let current = document.getElementsByClassName("active_tab_button");
        if (current.length > 0) { 
            current[0].classList.remove("active_tab_button");
        }
        this.classList.add("active_tab_button")
    }
});