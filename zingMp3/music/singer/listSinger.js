function showListSinger() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/singers",
        success: function (singers) {
            console.log(singers);
            let listSinger = "";
            for (let i = 0; i < singers.length; i++) {
                listSinger += ` 
                                    <tr>
                                
                                        <td>${singers[i].singerName}</td>
                                        <td>${singers[i].gender}</td>
                                        <td>${singers[i].birthday}</td>
                                        <td>${singers[i].story}</td>
                                        <td>${singers[i].otherInformation}</td>
                                    </tr>
                              `
            }
            document.getElementById("listSinger").innerHTML = listSinger;
        },
        error: function () {
            alert("Không thể hiển thị danh sách ca sĩ!");
        }
    });
}
showListSinger();

