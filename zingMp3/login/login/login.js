function login() {
    event.preventDefault();
    let username = $('#username').val();
    let password = $('#password').val();
    let user = {
        "username": username,
        "password": password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(user),
        url: "http://localhost:8080/login",
        success: function (data) {
            localStorage.setItem("user", JSON.stringify(data));
            window.location = "../admin/index.html"
        },
        error: function () {
            alert("Đăng nhập không thành công !")
        }
    });
}