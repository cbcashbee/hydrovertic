const users = [
    { username: "Iris", password: "pass1" },
    { username: "Karsten", password: "pass2" },
];

function loginFunktion() {
    const username = document.getElementById("bruger").value;
    const password = document.getElementById("adgang").value;

    let isAuthenticated = false;
    for (const user of users) {
        if (user.username === username && user.password === password) {
            isAuthenticated = true;
            break;
        }
    }

    if (isAuthenticated) {
        document.getElementById("login").style.display = "none";
    } else {
       document.getElementById("fejlbesked").style.display = "block";
    }
}
