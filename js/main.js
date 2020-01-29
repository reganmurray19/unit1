//initializer function calls all functions in the main method
function initialize() {
  tableConstructor(roomies, curChore);
}
//this function creates a table in html
function tableConstructor(arr1,arr2) {

  //create a table element
  var table = document.createElement("TABLE");

  //create a header row
  var headerRow = document.createElement("tr");

  //add the first column to the header row
  var roomieHeader = document.createElement("th");
  roomieHeader.innerHTML = "Roomie";
  headerRow.appendChild(roomieHeader);

  //add the second column to the header row
  var choreHeader = document.createElement("th");
  choreHeader.innerHTML = "Chore";
  headerRow.appendChild(choreHeader);

  //append header to the table
  table.appendChild(headerRow);

  //loop through arrays to populate the table
  for(let i = 0; i < roomies.length;i++) {

    //create a row
    let tempRow = document.createElement("tr");

    //append the array elements to the row
    let arr1Element = document.createElement("td");
    arr1Element.innerHTML = arr1[i];
    tempRow.appendChild(arr1Element);
    let arr2Element = document.createElement("td");
    arr2Element.innerHTML = arr2[i];
    tempRow.appendChild(arr2Element);

    //append row to table
    table.appendChild(tempRow);
  }

  //append table to div
  var mydiv = document.getElementById("mydiv");
  mydiv.appendChild(table);
}

//create arrays for the table
var roomies = ['Meggie', 'Katherine','Isabelle','Katie','Meggie bae'];
var curChore = ['dishes', 'floors', 'windows','dumpster','fluff'];
window.onload = initialize();
