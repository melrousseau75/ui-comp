import $ from "jquery";
import "../../style.scss";
import "./tabs.scss";
const $tabLinks = document.querySelectorAll(".nav-link");
$tabLinks.forEach( (link) => {
    link.addEventListener('click', () => {
        link.classList.remove("active");
    })
});
