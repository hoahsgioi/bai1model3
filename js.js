// Hàm thay đổi nội dung và ảnh nền khi di chuột qua
function upDate(previewPic) {
    console.log("Alt text: " + previewPic.alt);  // In ra alt của ảnh
    console.log("Image source: " + previewPic.src);  // In ra src của ảnh

    // Thay đổi nội dung của thẻ <div> với id 'image'
    document.getElementById('image').innerHTML = previewPic.alt;

    // Thay đổi background image của thẻ <div> với id 'image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm khôi phục lại khi không di chuột nữa
function undo() {
    // Khôi phục background image ban đầu
    document.getElementById('image').style.backgroundImage = "url('')";

    // Khôi phục lại nội dung ban đầu
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}
