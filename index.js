//It doesn't make sense that newInventory() doesn't actually make our inventory div anymore. Try to move
// let inventory = document.createElement('div')
// back inside the newInventory function but define inventory as a global variable using return values.
//Refactor the code so the logic for adding an item to the inventory is in its own function.

function newImage(url, left, bottom) {
  let object = document.createElement("img");
  object.src = url;
  object.style.position = "fixed";
  object.style.left = left + "px";
  object.style.bottom = bottom + "px";
  document.body.append(object);
  return object;
}
function tileImage(url, top, left, width, height) {
  let domDiv = document.createElement("div");
  domDiv.style.backgroundImage = `url('${url}')`;
  domDiv.style.backgroundRepeat = "repeat";
  domDiv.style.position = "fixed";
  domDiv.style.left = left;
  domDiv.style.top = top;
  domDiv.style.width = width;
  domDiv.style.height = height;

  document.body.append(domDiv);
}
// function newItem(url, left, bottom){
//     let item = newImage(url, left, bottom)
//     addToInventory(item, url)
// }

// function addToInventory(item, url){
//     item.addEventListener('click', function(){
//         item.remove()
//         let inventoryItem = document.createElement('img')
//         inventoryItem.src = url
//         returnedInventory.append(inventoryItem)
//     })
// }
//--------------EITHER WORK-----------------------------------------------------
function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  item.addEventListener("click", function () {
    addToInventory(item, url);
  });
}

function addToInventory(item, url) {
  item.remove();
  let inventoryItem = document.createElement("img");
  inventoryItem.src = url;
  returnedInventory.append(inventoryItem);
}

function newInventory() {
  let inventory = document.createElement("div");
  inventory.style.position = "fixed";
  inventory.style.bottom = "0px";
  inventory.style.left = "0px";
  inventory.style.width = "100%";
  inventory.style.height = "100px";
  inventory.style.display = "flex";
  inventory.style.flexDirection = "row";
  inventory.style.alignItems = "center";
  inventory.style.justifyContent = "space-evenly";
  inventory.style.border = "2px solid black";
  inventory.style.backgroundColor = "brown";
  document.body.append(inventory);
  return inventory;
}
let horizonHeightNum = 47.7
let grassHeightNum = (100 - horizonHeightNum)
let horizonHeightPer = `${horizonHeightNum}%`
let grassHeightPer = `${grassHeightNum}%`

tileImage("assets/sky.png", "0px", "0px", "100%", horizonHeightPer)
tileImage("assets/grass.png", horizonHeightPer, "0px","100%", grassHeightPer)

let returnedInventory = newInventory();


newImage("assets/green-character.gif", 100, 250);
newImage("assets/tree.png", 200, 450);
newImage("assets/pillar.png", 350, 250);
newImage("assets/pine-tree.png", 450, 350);
newImage("assets/crate.png", 150, 350);
newImage("assets/well.png", 500, 575);

newItem("assets/sword.png", 500, 555);
newItem("assets/shield.png", 165, 335);
newItem("assets/staff.png", 600, 250);
