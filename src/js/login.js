let username = document.getElementById('username');
let password = document.getElementById('password');
const formLogin = document.getElementById('login-form');
const loginBtn = document.querySelector('.btn-login');




formLogin.addEventListener('submit', async (e) => {
    e.preventDefault();
    username.value = username.value.toLowerCase();
    password.value = password.value.toLowerCase();
    loginBtn.value = 'Please Wait ...'
    try {

        const response = await fetch('./src/data/users.json');
        const data = await response.json();

        const userCheking = data.find(find => find.username == username.value && find.password == password.value)

        if (!userCheking) throw new Error('invaled username or password')
        loginBtn.value = 'loging ...'
        let userInformation = {
            username: userCheking.username,
            name: userCheking.fullName,
            photo: userCheking.photo
        }

        localStorage.setItem('userInformation', JSON.stringify(userInformation))

        window.location.href = '/overview.html'

        console.log(userInformation)
    } catch (error) {
        alert(error)
    }



});