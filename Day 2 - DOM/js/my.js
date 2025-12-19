// function addElement() { 
//     // Tạo phần tử cha
//     let listElement = document.getElementById("list");
    
//     // Tạo phần tử con - bao gồm input và button
//     let newElement = document.createElement("div");
//     newElement.className = "div-element";
    
//     // Tạo phần tử con của newElement - input và button
//     let inputElement = document.createElement("input");;
//     inputElement.type = "text";

//     let buttonElement = document.createElement("button");
//     buttonElement.innerText = "-";

//     // Gán sự kiện onclick cho button để xóa phần tử
//     buttonElement.onclick = function() {
//         removeElement(this);
//     };

//     // Thêm phần tử con vào phần tử cha
//     newElement.appendChild(inputElement);
//     newElement.appendChild(buttonElement);
//     listElement.appendChild(newElement);
// }

// function removeElement(button) {
//     // Chuyền vào button để xóa đúng phần tử cha của nó
//     let elementToRemove = button.parentNode;

//     // Xóa phần tử khỏi DOM truy cập thông qua phần tử cha
//     elementToRemove.parentNode.removeChild(elementToRemove);
// }

// Sử dụng jQuery để thực hiện cùng chức năng
$('#btn-add').click(function() {
    let listElement = $('#list');

    let divElement = $('<div><div/>').addClass('div-element');
    
    let inputElement = $('<input/>').attr('type', 'text');
    let buttonElement = $('<button>-</button>').addClass('btn-delete');

    // buttonElement.click(function() {
        
    //     alert('Removing element');
    // });

    divElement.append(inputElement);
    divElement.append(buttonElement);
    listElement.append(divElement);
});

$('body').on('click', '.btn-delete', function() {
    // $(this).parent().remove();
    let currentElement = $(this).parent();
    currentElement.remove();
}); 