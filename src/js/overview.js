// read avator image 
const profileAvator = document.querySelector('.userImg img');
// read name
const fullName = document.querySelector('.user h2');

// reading data from local storage
let userinformation = JSON.parse(localStorage.getItem('userInformation'))

// set profile image 
profileAvator.attributes[0].textContent = userinformation.photo;
// set fullname name 
fullName.innerHTML = userinformation.name;

