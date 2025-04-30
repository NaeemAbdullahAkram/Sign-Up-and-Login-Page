const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const forms = document.querySelectorAll("form");
const inputs = document.querySelectorAll("input[type='text'], input[type='password']");

// Add floating animation to input fields
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('active');
    });
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('active');
        }
    });
});

// Smooth slide animation for signup/login switch
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
    document.querySelector(".wrapper").classList.add('signup-active');
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
    document.querySelector(".wrapper").classList.remove('signup-active');
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

// Form validation
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const passwords = form.querySelectorAll('input[type="password"]');
        
        if (form.classList.contains('signup')) {
            if (passwords[0].value !== passwords[1].value) {
                alert('Passwords do not match!');
                return;
            }
            if (passwords[0].value.length < 6) {
                alert('Password must be at least 6 characters long!');
                return;
            }
        }

        // Add success animation
        form.querySelector('.btn').classList.add('success');
        setTimeout(() => {
            form.querySelector('.btn').classList.remove('success');
            alert(form.classList.contains('login') ? 'Login Successful!' : 'Sign Up Successful!');
            form.reset();
        }, 1500);
    });
});

// Add password visibility toggle
document.querySelectorAll('.field input[type="password"]').forEach(input => {
    const toggleBtn = document.createElement('i');
    toggleBtn.className = 'fas fa-eye password-toggle';
    input.parentElement.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        if (input.type === 'password') {
            input.type = 'text';
            toggleBtn.className = 'fas fa-eye-slash password-toggle';
        } else {
            input.type = 'password';
            toggleBtn.className = 'fas fa-eye password-toggle';
        }
    });
});