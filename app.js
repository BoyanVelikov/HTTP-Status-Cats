import {
    html,
    render
} from 'https://unpkg.com/lit-html?module';

import {
    cats
} from './catSeeder.js';

let allCatsSection = document.getElementById('allCats');
let catsUl = document.createElement('ul');
allCatsSection.appendChild(catsUl);


const catTemplate = (id, statusCode, statusMessage, imageLocation) => {
    return html `<li>
    <img src="./images/${imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id="${id}">
            <h4>Status Code: ${statusCode}</h4>
            <p>${statusMessage}</p>
        </div>
    </div>
</li>`;
};

const differentCats = cats.map((cat) => catTemplate(cat.id, cat.statusCode, cat.statusMessage, cat.imageLocation));

render(differentCats, catsUl);

let btns = [...document.getElementsByTagName('button')].forEach((btn) => btn.addEventListener('click', showStatusCode));

function showStatusCode(e) {
    let classStatus = e.target.parentNode.childNodes[3];
    if (e.target.textContent == 'Show status code') {
        e.target.textContent = 'Hide status code';
        classStatus.style.display = 'block';
    } else if (e.target.textContent == 'Hide status code') {
        e.target.textContent = 'Show status code';
        classStatus.style.display = 'none';
    }
}