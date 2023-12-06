'use strict';


const button = document.querySelector('.button');

button.addEventListener('click', getInfo);
// console.log(button);

function getInfo(event) {
    event.preventDefault();

    const email = document.querySelector('.input-email').value;
    const password = document.querySelector('#password').value;


if(email !== '' & password !== '') {
    let span = document.querySelector('.message');
    span.classList.add('message-green');
    span.innerHTML = 'Form has been successfully submitted'
    console.log(span);
    console.log(typeof email);
    console.log(typeof password);

    const data = {};
    data.email = email;
    data.password = password;

    const json = JSON.stringify(data);
    // console.log(JSON.stringify(data));

    const stringObject = document.querySelector('.string');
    stringObject.textContent = json;

} else  {
    let span = document.querySelector('.message');

    span.classList.add('message-red');
    span.innerHTML = 'You have not filled email or password'
    console.log(span);

}
}

