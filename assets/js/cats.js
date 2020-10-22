// start getting data
var getMainCats = new XMLHttpRequest();
let catItems;
getMainCats.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    catItems = JSON.parse(this.responseText);
    var catsCont = document.getElementById("catsCont");
    for (var i = 0; i < catItems.length; i++) {
      var htmlContent = `<a href="${catItems[i].id}" class="catItem flex_cl_center"><img src="${catItems[i].img}" /><span>${catItems[i].name}</span></a>`;
      catsCont.innerHTML += htmlContent
    }
  }
}
getMainCats.open("GET","../assets/data/cats.json");
getMainCats.send();


// console.log(catItems);
// end getting data
