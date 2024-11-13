document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    let userFound = null;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        let storedUser;

        try {
            storedUser = JSON.parse(localStorage.getItem(key));
        } catch (error) {
            console.error(`Error parsing data for key "${key}":`, error);
            continue; // Skip to the next iteration if parsing fails
        }
        
        if (storedUser && storedUser.email === email) {
            userFound = storedUser;
            break;
        }
    }

    if (!userFound) {
        alert('Email does not exist. Please sign up.');
        return;
    }

    if (userFound.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    alert('Login successful!');
    window.location.href = 'indexafterlogin.html'; 
});
