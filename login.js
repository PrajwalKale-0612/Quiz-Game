function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let upper = password.match(/[A-Z]/g) || [];
    let lower = password.match(/[a-z]/g) || [];
    let number = password.match(/[0-9]/g) || [];
    let symbol = password.match(/[@$!%*?&#]/g) || [];

    if (upper.length < 2 || lower.length < 2 || number.length < 2 || symbol.length < 2) {
        return false;
    }

    return true;
}

function login() {
    const user = document.getElementById("user").value;
    const pass = document.getElementById("pass").value;

    if (user === "" || pass === "") {
        alert("Please Fill All Fields");
        return;
    }

    if (!isStrongPassword(pass)) {
        alert("Weak Password!\n\nPassword must contain:\n- 2 Uppercase\n- 2 Lowercase\n- 2 Numbers\n- 2 Symbols\nMinimum 8 characters");
        return;
    }

    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
}