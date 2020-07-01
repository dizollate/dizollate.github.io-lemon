
let firstNameId = 'first-name';
let firstNameEl = document.getElementById(firstNameId);
let lastNameId = 'last-name';
let lastNameEl = document.getElementById(lastNameId);
let adressId = 'adress';
let adressEl = document.getElementById(adressId);
let citiesId = 'cities';
let citiesEl = document.getElementById(citiesId);
let hobbiesId = 'hobbies';
let hobbiesEl = document.getElementById(hobbiesId);
let avatarWrapperId = 'avatar-wrapper';
let avatarWrapperEl = document.getElementById(avatarWrapperId);
let avatarId = 'avatar';
let avatarEl = document.getElementById(avatarId);


firstNameEl.value = 'Andrey';
lastNameEl.value = 'Kamasutra';

lastNameEl.classList.add('error-input');

avatarEl.src = '../img/Signature.png'

citiesEl.value = 'Minsk';

