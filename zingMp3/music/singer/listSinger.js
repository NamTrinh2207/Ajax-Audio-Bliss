// function showListSinger() {
//     $.ajax({
//         type: "GET",
//         url: "http://localhost:8080/admin/singers",
//         success: function (singers) {
//             let listSinger = "";
//             for (let i = 0; i < singers.length; i++) {
//                 listSinger += `
//                 <td>${singers[i].singerName}</td>
//                 <td>${singers[i].gender}</td>
//                 <td>${singers[i].birthday}</td>
//                 <td>${singers[i].story}</td>
//                 <td>${singers[i].otherInformation}</td>
//                 <td>${singers[i].image}</td>`
//             }
//             document.getElementById("singerList").innerHTML = listSinger;
//         },
//         error: function () {
//             alert("Không thể hiển thị danh sách ca sĩ!");
//         }
//     });
// }