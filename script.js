   
   //a map of recipe steps
    let recipeSteps = new Map();
    recipeSteps.set('Step 1', 'In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce, and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.')
    recipeSteps.set('Step 2', 'Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water. In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2 teaspoon salt.')
    recipeSteps.set('Step 3', 'Preheat oven to 375 degrees F (190 degrees C).')
    recipeSteps.set('Step 4', 'To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13-inch baking dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to prevent sticking, either spray foil with cooking spray, or make sure the foil does not touch the cheese.')
    recipeSteps.set('Step 5', 'Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes. Cool for 15 minutes before serving.')

    //display the recipes in the recipe section
    displayRecipe(recipeSteps);

    function displayRecipe(steps) {
        let recipe = document.getElementById('recipe');
        for(let [key,value] of steps) {
            let step = document.createElement('div');
            let stepHeading = document.createElement('h2');
            let stepBody = document.createElement('p');
            stepHeading.innerText = key;
            stepBody.innerText = value;
            stepBody.contentEditable = true; //the paragraphs are contentEditable
            stepHeading.classList.add('stepHeading');
            stepBody.classList.add('stepBody');
            step.appendChild(stepHeading).appendChild(stepBody);
            recipe.appendChild(step);
        }
    }

    //array of foods to search for
    let foodsInRecipe = ['salted water', 'mozzarella', 'noodles', 'tomato sauce', 'sausage', 'ground beef', 'onion', 'garlic', 'tomatoes', 'tomato paste', 'water', 'sugar', 'basil', 'fennel seeds', 'Italian seasoning', 'salt', 'pepper', 'parsley', 'lasagna noodles', 'noodles', 'ricotta cheese', 'egg', 'meat sauce', 'mozarella cheese', 'mozarella', 'Parmesan cheese', 'cheese'];
    
    //my jQuery plugin; when you click on something this plugin is attached to,
    //the paragraphs of the recipe show highlighted words that match the words in the 
    //foodRecipe array
    (function ($) {
        $.fn.highlightFoods = function() {
            //when the object is clicked
            this.on('click', function() {
                //for each body paragraph of the recipe
                $('.stepBody').each(function() {
                    //a var elem is set equal to the text of the paragraph
                    var elem = $(this).text();
                    //iterate through foodsInRecipe array
                    for(let food of foodsInRecipe) {
                        //for each food, create a span with 
                        //word equal to the food
                        //then add a class of 'highlightedWord'
                        let word = document.createElement('span');
                        word.innerText = food;
                        word.classList.add('highlightedWord');
                        //now replace all instances of the matching food
                        //within elem paragraph with the new word span
                        //we have to do this for each food for each paragraph, which is why
                        //elem is assigned the preplaced text for the next round of 
                        //the loop
                        elem = elem.replaceAll(food, word.outerHTML);
                        
                    }
                    //set the innerHTML of the recipe paragraph to be the 
                    //elem text that was generated containining the 
                    //spans with class of 'highlighTedWord'
                    $(this).html(elem);
                });
              
            });
           
        }
    })(jQuery);

    //my jQuery plugin is called on the only button in the app
    $('button').highlightFoods();