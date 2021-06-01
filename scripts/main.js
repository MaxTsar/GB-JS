'use strict';

const link4 = document.getElementById('four');
console.log('Link 4', link4);

const oneListNodes = document.getElementsByClassName('one');
console.log('list with class one', oneListNodes);

const cardLinks = document.querySelectorAll('.card-body .card-link');
console.log('Card links', cardLinks);

const ariaValueNow = document.querySelector('div[aria-valuenow="50"]');
console.log('Aria value node', ariaValueNow)

const titleNodeList = document.getElementsByTagName('title');
if (titleNodeList && titleNodeList[0]) {
  const title = titleNodeList[0];
  console.log('>>>', title.innerText)
}

const mt0 = document.querySelector('.mt-0');
if (mt0) {
  const parentMt0 = mt0.parentNode;
  console.log('>>>', parentMt0)
}

const h3 = document.createElement('h3');
h3.innerText = 'hello world';
const body = document.getElementsByTagName('body')[0];
body.appendChild(h3);

const btnWarn = document.querySelector('.btn-outline-warning');
if (btnWarn) {
  btnWarn.remove();
}

const btnDark = document.querySelector('.btn-outline-dark');
if (btnDark) {
  btnDark.remove();
}

const btnInfo = document.querySelector('.btn-info');
if (btnInfo) {
  btnInfo.innerText = "Кнопка";
}

const ul = document.getElementsByTagName('ul');
if (ul.length > 1) {
  const ulist = ul[0];
  ulist.classList.add('one');
}

const navLinkNode = document.querySelector('.nav-link ');
navLinkNode.classList.toggle('active');

const dropMenu = document.querySelector('.dropdown-menu');
dropMenu.classList.remove('dropdown-menu');