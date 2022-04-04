const navigation = document.querySelector(".navigation");
const navtoggle = document.querySelector(".nav-toggle");

navtoggle.addEventListener("click", () => {
    const visibility = navigation.getAttribute("data-visible");
    if (visibility === "false") {
        navigation.setAttribute("data-visible", "true");
        navtoggle.setAttribute("aria-expanded", "true");
    } else if (visibility === "true") {
        navigation.setAttribute("data-visible", "false");
        navtoggle.setAttribute("aria-expanded", "false")
    }
});