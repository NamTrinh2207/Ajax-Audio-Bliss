//create
function save() {
    event.preventDefault();
    let name = $("#name").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let address = $("#address").val();
    let username = $("#username").val();
    let password = $("#password").val();
    let roles = $("#roles").val();
    let user = {
        "name" : name,
        "phone" : phone,
        "email" : email,
        "address" : address,
        "username" : username,
        "password" : password,
        "roles" : [roles]
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/signup",
        data: JSON.stringify(user),
        success: function (data) {
            alert("Đăng ký thành công")
            window.location.href = "../login/login.html"
        },
        error: function () {
            alert("Đăng ký không thành công!");
        }
    });
}
