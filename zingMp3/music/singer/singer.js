function createSinger() {
    event.preventDefault();
    let singer_name = $("#singerName").val();
    let gender = $("#gender").val();
    let birthday = $("#birthday").val();
    let story = $("#story").val();
    let otherInformation = $("#otherInformation").val();
    let image =  $("#image")[0].files[0];

    let singer = new FormData();
    singer.append("singerName", singer_name);
    singer.append("gender", gender);
    singer.append("birthday", birthday);
    singer.append("story", story);
    singer.append("otherInformation",otherInformation);
    singer.append("image", image);

    $.ajax({
        headers: {
            'Accept': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/admin/singers/create",
        data: singer,
        contentType: false,
        processData: false,
        success: function (result) {
            alert("Thêm thành công")

            let imageUrl = URL.createObjectURL(image);
            localStorage.setItem("singer", JSON.stringify(result));

            localStorage.setItem("singerName", result.singerName);
            localStorage.setItem("gender", result.gender);
            localStorage.setItem("birthday", result.birthday);
            localStorage.setItem("story", result.story);
            localStorage.setItem("otherInformation", result.otherInformation);

            window.location.href = "singerForm.html";
        },
        error: function () {
            alert("Không thể thêm singer!");
        }
    });
}







