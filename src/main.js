// import $ from 'jquery';
import 'bootstrap';
import './styles/styles.scss';

let scrollPos = 0;
const navBar = document.getElementById('nav');
const mobileNavClicked = () => navBar.classList.toggle('clicked');
const navbarScrolled = () => navBar.classList.add('scrolled');
const navBarNotScrolled = () => navBar.classList.remove('scrolled');

window.onload = () => {
  window.addEventListener('scroll', () => {
    scrollPos = window.scrollY;
    scrollPos > 10 ? navbarScrolled() : navBarNotScrolled();
  });
  navBar.addEventListener('click', () => mobileNavClicked());
}
