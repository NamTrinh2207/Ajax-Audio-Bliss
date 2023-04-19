let object = JSON.parse(localStorage.getItem("object"));
if (object != null) {
    let token = object.accessToken;
    let username = object.name;
    let avatar = object.avatar;
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
        type: "GET",
        url: "http://localhost:8080/hello",
        success: function () {
            let avatarUrl = 'assets/img/user/' + avatar
            document.getElementById('avatar').setAttribute('src', avatarUrl);
            let user;
            user = `<p>${username}</p>`
            document.getElementById("user").innerHTML = user;
        }
    })
} else {
    window.location = "zingMp3/login/login/login.html";
}

function logout() {
    localStorage.removeItem("object")
    window.location.href = "http://localhost:63342/mp3-front-end/zingMp3/login/login/login.html";
}
