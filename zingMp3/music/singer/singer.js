function createSinger() {
    event.preventDefault();
    let singer_name = $("#singerName").val();
    let gender = $("#gender").val();
    let birthday = $("#birthday").val();
    let story = $("#story").val();
    let otherInformation = $("#otherInformation").val();
    let image = $("#image")[0].files[0];

    let singer = new FormData();
    singer.append("singerName", singer_name);
    singer.append("gender", gender);
    singer.append("birthday", birthday);
    singer.append("story", story);
    singer.append("otherInformation", otherInformation);
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
            localStorage.setItem("imgSinger", JSON.stringify(result))

            let imageUrl = URL.createObjectURL(image);
            $("#singerInformation").html(
                "<table width='270px'>"+
                "<tr>" +
                "<td style='text-align: left'>Tên ca sĩ:</td>" + "<td>" +result.singerName + "</td>" + "</tr>" +
                "<td style='text-align: left'>Giới tính:</td>" + "<td>" +result.gender + "</td>" + "</tr>" +
                "<td style='text-align: left'>Ngày sinh:</td>" + "<td>" +result.birthday + "</td>" + "</tr>" +
                "<td style='text-align: left'>Quê quán:</td>" + "<td>" +result.story + "</td>" + "</tr>" +
                "<td style='text-align: left'>Thông tin khác:</td>" + "<td>" +result.otherInformation + "</td>" + "</tr>" +

                "<img width='350' height='350' src='" + imageUrl + "' alt='Ảnh đính kèm'>" +
                "<table>"
            )
        },
        error: function () {
            alert("Không thể thêm ca sĩ!");
        }
    });
}
function goBack() {
    window.location.href ="http://localhost:63343/mp3-front-end/index.html"
}

function showListSinger() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/singers",
        success: function (singers) {
            let listSinger = "";
            for (let i = 0; i < singers.length; i++) {
                listSinger += `
                <td>${singers[i].singerName}</td>
                <td>${singers[i].gender}</td>
                <td>${singers[i].birthday}</td>
                <td>${singers[i].story}</td>
                <td>${singers[i].otherInformation}</td>
                <td>${singers[i].image}</td>`
            }
            document.getElementById("singerList").innerHTML = listSinger;
        },
        error: function () {
            alert("Không thể hiển thị danh sách ca sĩ!");
        }
    });
}
showListSinger()
