let object = JSON.parse(localStorage.getItem("object"));
if (object != null) {
    let token = object.accessToken;
    let username = object.name;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        type: "GET",
        url: "http://localhost:8080/admin",
        success: function () {
            let user;
            user = `<p>${username}</p>`;
            document.getElementById("user").innerHTML = user;
        }
    })
} else {
    window.location = "http://localhost:63343/mp3-front-end/zingMp3/login/login/login.html?_ijt=aodr1kr0ed3lrl1q7a62rdhpn0&_ij_reload=RELOAD_ON_SAVE";
}

function logout() {
    localStorage.removeItem("object")
    window.location.href = "http://localhost:63343/mp3-front-end/zingMp3/login/login/login.html?_ijt=aodr1kr0ed3lrl1q7a62rdhpn0&_ij_reload=RELOAD_ON_SAVE";
}