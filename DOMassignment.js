// JavaScript for DOMassignment.html

let profiles = [
    { name:'Mary', picture: 'https://randomuser.me/api/portraits/women/1.jpg',},
    { name:'Joe', picture: 'https://randomuser.me/api/portraits/men/18.jpg',},
    { name:'Sue', picture: 'https://randomuser.me/api/portraits/women/72.jpg',},
    { name:'John', picture: 'https://randomuser.me/api/portraits/men/90.jpg',},
];

function init() {

    let parent = document.querySelector('main ul');

    for (let i = 0; i < profiles.length; i++) {

        let item = document.createElement('li');

        let ptag = document.createElement('p');
        ptag.textContent = profiles[i].name;

        let pic = document.createElement('img');
        pic.src = profiles[i].picture;

        let btn = document.createElement('button');
        
        parent.appendChild(item);
        item.appendChild(ptag);
        ptag.appendChild(pic);

    }

}

window.addEventListener('load', init);