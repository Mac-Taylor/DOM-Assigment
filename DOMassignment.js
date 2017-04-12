// JavaScript for DOMassignment.html

let profiles = [
    { name:'Mary', picture: 'https://randomuser.me/api/portraits/women/1.jpg',},
    { name:'Joe', picture: 'https://randomuser.me/api/portraits/men/18.jpg',},
    { name:'Sue', picture: 'https://randomuser.me/api/portraits/women/72.jpg',},
    { name:'John', picture: 'https://randomuser.me/api/portraits/men/90.jpg',},
];

// Use stylesheet.CSSStyleRule() to create layout/design stuff.
// setInterval() we talked about in lecture, use for hard mode and mark
// as code you got in lecture!!


function init() {

    let parent = document.querySelector('main ul');

    for (let i = 0; i < profiles.length; i++) {

        let item = document.createElement('li');
        item.classList.add(profiles[i].name);
        item.classList.add('modifier');

        let ptag = document.createElement('p');
        ptag.textContent = profiles[i].name;
        ptag.classList.add('text');

        let btn1 = document.createElement('button');
        btn1.textContent = 'Yes!';

        let btn2 = document.createElement('button');
        btn2.textContent = 'Nope.'

        let pic = document.createElement('img');
        pic.src = profiles[i].picture;

        btn1.addEventListener('click', function () {
            console.log(profiles[i].name + ' has been "liked".')
        });

        btn2.addEventListener('click', function () {
            console.log(profiles[i].name + ' has been "noped".')
        });

        parent.appendChild(item);
        item.appendChild(ptag);
        ptag.appendChild(pic);
        ptag.appendChild(btn1);
        ptag.appendChild(btn2);

    }

}

window.addEventListener('load', init);