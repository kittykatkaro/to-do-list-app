
function newItem() {

    //1. Adding a new item to the list of items: 
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    }
    else {
        $('#list').append(li);
    }

    //2. Crossing out an item from the list of items:
    li.on("click", function () {
        li.addClass("strike");
    });
    function crossOut() {
        li.classList.toggle("strike");
    }
    li.addEventListener("dblclick", crossOut);

    //3(i). Adding the delete button "X": 
    let crossOutButton = document.createElement("crossOutButton");
    crossOutButton.appendChild(document.createTextNode("X"));
    li.appendChild(crossOutButton);

    crossOutButton.addEventListener("click", deleteListItem);

    //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    function deleteListItem() {
        li.classList.add("delete")
    }
    // 4. Reordering the items: 
    $('#list').sortable();

}
