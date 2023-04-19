function showPlaylist() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/playlists",
        success: function (books) {
            console.log(books);
            let booksHtml = "";
            for (let i = 0; i < books.length; i++) {
                booksHtml += `
                <tr>
                <td>${books[i].playlistName}</td>
                <td>${books[i].description}</td>
                <td>${books[i].createdDateTime}</td>
                <td>${books[i].lastUpdatedTime}</td>
                <td>${books[i].viewsNumber}</td>
                </tr>`;
            }
            document.getElementById("playlist").innerHTML = booksHtml;
        },
        error: function () {
            alert("Không thể hiển thị danh sách sách!");
        }
    });
}

showPlaylist();


//create
function save() {
    event.preventDefault();
    let code = $("#code").val();
    let name = $("#name").val();
    let author = $("#author").val();
    let price = $("#price").val();
    let newBook = {
        code: code,
        name: name,
        author: author,
        price: price
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/books",
        data: JSON.stringify(newBook),
        success: showAllBook,
        error: function () {
            alert("Không thể thêm sách mới!");
        }
    })
}

// add music in playlist
