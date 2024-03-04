const navigation = document.getElementById('navBar');
const burgerBar = document.getElementById('burger');
const list = document.getElementById('nav-list')


burgerBar.addEventListener('click' ,function(){
navigation.classList.toggle('active')
burgerBar.classList.toggle('active')
list.classList.toggle('active')
});

// Initialization for ES Users
import { Collapse, initMDB } from 'mdb-ui-kit';

initMDB({ Collapse });