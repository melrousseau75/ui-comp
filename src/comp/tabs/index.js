import $ from "jquery";
import "../../style.scss";
import "./tabs.scss";

function changeTab(tabNumber) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`.tab:nth-child(${tabNumber})`).classList.add('active');
    document.querySelector(`.tab-content:nth-child(${tabNumber})`).classList.add('active');
}
