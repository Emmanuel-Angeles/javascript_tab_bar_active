const tabsButton = document.querySelectorAll(".tab_button");

tabsButton.forEach(tabButton => {
    tabButton.onclick = function () {
        tabsButton.forEach(tabButton => {
            tabButton.classList.remove("active_tab_button")
        })
        tabButton.classList.add("active_tab_button")
    }
});