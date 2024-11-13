document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    if (localStorage.getItem(username)) {
        alert('Username already exists! Please choose another one.');
        return;
    }

    const user = {
        username: username,
        email: email,
        password: password 
    };

    localStorage.setItem(username, JSON.stringify(user));

    alert('Signup successful! You can now log in.');
    window.location.href ='login.html'; 
});
