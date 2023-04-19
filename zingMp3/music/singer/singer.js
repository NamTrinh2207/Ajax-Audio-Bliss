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
            let imgUrl = 'assets/img/singer/' + result.image;
            document.getElementById("image1").setAttribute('src',imgUrl);
        },
        error: function () {
            alert("Không thể thêm singer!");
        }
    });
}







