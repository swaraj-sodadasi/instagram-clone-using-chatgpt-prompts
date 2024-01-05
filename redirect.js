// This script handles redirection logic

// Redirect to the home page
function redirectToHome() {
    window.location.href = 'home.html';
}

// Redirect to the login page
function logout() {
    // Clear user information from localStorage (simulate logout)
    localStorage.removeItem('user');
    // Redirect to the login page
    window.location.href = 'index.html';
}
