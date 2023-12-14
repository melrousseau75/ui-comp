import $ from "jquery";
import "../../style.scss";
import "./popin.scss";

function openPopup() {
    document.getElementById('overlay').style.display = 'flex';
}


function closePopup() {
    document.getElementById('overlay').style.display = 'none';
}