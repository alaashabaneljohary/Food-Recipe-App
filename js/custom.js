"use strict" ;
let inputSearch = document.getElementById("inputSearch") ;
let searchBtn   = document.getElementById("search-btn")  ;
let containerData = [] ;
async function getRecipe(search) {

    let httpRequest = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`) ;
    let getResponse = await httpRequest.json() ;
        containerData = await getResponse.meals;
        console.log(containerData)
    displayRecipe() ;

}
getRecipe() ;

function displayRecipe() {
    let create = `` ;
   if(containerData != null){
    containerData.forEach(element => {
        create+= `<div class="col-md-4 item shadow-lg p-3">
        <img src="${element.strMealThumb}" class="w-100">
        <h2>${element.strMeal}</h2>
        <button class="btn"> <a href="${element.strYoutube}" class="nav-link">Watch Video</a> </button>
    </div>`
    }); 
   } 
     let rows = document.querySelector(".row") ;
     rows.innerHTML = create ;

}
searchBtn.addEventListener("click" ,function() {

    let searchValue =  inputSearch.value ;
    if(searchValue == "" ){
        let alertMessge = document.getElementById("alertMessge")
        alertMessge.innerHTML = "Sorry, we didn't find any meal!"
    } else {
        getRecipe(searchValue); 
        displayRecipe() ;
    }
} );


