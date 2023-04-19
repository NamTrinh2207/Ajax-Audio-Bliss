function save() {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let username = $("#username").val();
    let password = $("#confirm_password").val();
    let avatar = $("#avatar")[0].files[0];
    let roles = $("#roles").val();
    let user = new FormData();
    user.append("name", name);
    user.append("phone", phone);
    user.append("email", email);
    user.append("address", address);
    user.append("username", username);
    user.append("password", password);
    user.append("avatar", avatar);
    user.append("roles", roles);
    $.ajax({
        headers: {
            'Accept': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/signup",
        data: user,
        contentType: false,
        processData: false,
        success: function (data) {
            alert(data.message);
            window.location.href = "../login/login.html";
        },
        error: function () {
            alert("Đăng ký không thành công!");
        }
    });
}
