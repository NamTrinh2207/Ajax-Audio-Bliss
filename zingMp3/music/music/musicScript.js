function uploadMusic() {
    event.preventDefault();
    let musicName = $("#musicName").val();
    let description = $("#description").val();
    let fileName = $("#fileName")[0].files[0];
    let imageName = $("#imageName")[0].files[0];
    let albums = $("#albums").val();
    let authors = $("#authors").val();

    let music = new FormData();
    music.append("musicName", musicName);
    music.append("description", description);
    music.append("fileName", fileName);
    music.append("imageName", imageName);
    music.append("albums", albums);
    music.append("authors", authors);
    $.ajax({
        headers: {
            'Accept': 'application/json',
        },
        type: "POST",
        url: "http://localhost:8080/musics/create",
        data: music,
        contentType: false,
        processData: false,
        success: function (result) {
            alert("Thêm thành công")
            console.log(result)
        },
        error: function () {
            alert("Không thể thêm singer!");
        }
    })
}