// main.js

// Run the init() function when the page has loaded
window.addEventListener('DOMContentLoaded', init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  const ret = JSON.parse(localStorage.getItem('recipes'));
  return ret;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  // A10. TODO - Get a reference to the <main> element
  const ma = document.querySelector("main");
  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  for(let i = 0;  i < recipes.length; i++){
    let ex = document.createElement("recipe-card");
    ex.data=recipes[i];
    ma.append(ex);
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
  localStorage.setItem('recipes', JSON.stringify(recipes));
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {

  // B2. TODO - Get a reference to the <form> element
  const ff = document.querySelector("form");
  
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  /*synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('lang', voices[i].lang);
      option.setAttribute('voice', voices[i].name);
      voSelect.appendChild(option);
    }
    console.log(voices);
  });*/
  const b3 = ff.querySelector("button[type=submit]");
  b3.addEventListener('click', () => {
    var ra = document.getElementsByName("rating");
    var raa = "0";            
              for(i = 0; i < ra.length; i++) {
                  if(ra[i].checked){
                      raa = ra[i];
                  }
    
              }
    const FormData = {
      "imgSrc": ff.getElementById("imgSrc").value,
      "imgAlt": ff.getElementById("imgAlt").value,
      "titleLnk": ff.getElementById("titleLnk").value,
      "titleTxt": ff.getElementById("titleTxt").value,
      "organization": ff.getElementById("organization").value,
      "rating": raa,
      "numRatings": ff.getElementById("numRatings").value,
      "lengthTime": ff.getElementById("lengthTime").value,
      "ingredients": ff.getElementById("ingredients").value,
    }
    const recipeObject = {
      "imgSrc": FormData.imgSrc,
      "imgAlt": FormData.imgAlt,
      "titleLnk": FormData.titleLnk,
      "titleTxt": FormData.titleTxt,
      "organization": FormData.organization,
      "rating": FormData.rating,
      "numRatings": FormData.numRatings,
      "lengthTime": FormData.lengthTime,
      "ingredients": FormData.ingredients,
    };
    const el = document.createElement("recipe-card");
    el.data = recipeObject;
    const ma = document.querySelector("main");
    ma.append(el);
    
    let ret = JSON.parse(localStorage.getItem('recipes'));
    ret += recipeObject;
    const str = JSON.stringify(ret);
    localStorage.setItem('recipes', str);
  });

  const b10 = ff.querySelector("button[type=button]");
  b10.addEventListener('click', () => {
    localStorage.removeItem('recipes');
    const ma = document.querySelector("main");
    ma.innerHTML = "";
  })

  // Steps B4-B9 will occur inside the event listener from step B3
  // B4. TODO - Create a new FormData object from the <form> element reference above
  
  // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
  //            make this easier to read), and then extract the keys and corresponding
  //            values from the FormData object and insert them into recipeObject
  // B6. TODO - Create a new <recipe-card> element
  // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
  // B8. TODO - Append this new <recipe-card> to <main>
  // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
  //            then save the recipes array back to localStorage

  // B10. TODO - Get a reference to the "Clear Local Storage" button
  // B11. TODO - Add a click event listener to clear local storage button
  
  // Steps B12 & B13 will occur inside the event listener from step B11
  // B12. TODO - Clear the local storage
  // B13. TODO - Delete the contents of <main>

}
