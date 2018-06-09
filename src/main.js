// import $ from 'jquery';
import 'bootstrap';
import './styles/styles.scss';

let scrollPos = 0;
const navBar = document.getElementById('nav');
function navbarScrolled() {
  navBar.classList.add('scrolled');
}
function navBarNotScrolled() {
  navBar.classList.remove('scrolled');
}
window.addEventListener('scroll', () => {
  scrollPos = window.scrollY;
  if(scrollPos > 10) {
    navbarScrolled();
  } else if (scrollPos === 0) {
    navBarNotScrolled();
  }
});
