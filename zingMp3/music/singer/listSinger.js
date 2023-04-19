function showListSinger() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/admin/singers",
        success: function (singers) {
            let listSinger = "";
            for (let i = 0; i < singers.length; i++) {
                listSinger += `${singers[i].singerName}`
            }
            document.getElementById("singerList").innerHTML = listSinger;
        },
        error: function () {
            alert("Không thể hiển thị danh sách ca sĩ!");
        }
    });
}