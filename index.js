// script.js
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const recipeList = document.getElementById('recipe-list');
    const recipeDetails = document.getElementById('recipe-details');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeImage = document.getElementById('recipe-image');
    const ingredientsList = document.getElementById('ingredients-list');
    const stepsList = document.getElementById('steps-list');
    const printButton = document.getElementById('print-button');

    const recipes = {
        'Spaghetti Carbonara': {
            title: 'Spaghetti Carbonara',
            description: 'A classic Italian pasta dish with creamy sauce.',
            image: 'images/pexels-polina-tankilevitch-4518844-removebg-preview.png',
            ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Pepper'],
            steps: ['Cook spaghetti', 'Fry pancetta', 'Mix eggs and cheese', 'Combine all with spaghetti']
        },
        'Chicken Curry': {
            title: 'Chicken Curry',
            description: 'A spicy and flavorful chicken curry.',
            image: 'images/pexels-zi-s-food-natureart-76108785-8992836-removebg-preview.png',
            ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Garlic', 'Ginger', 'Spices'],
            steps: ['Cook chicken', 'Prepare sauce', 'Combine chicken and sauce', 'Simmer until cooked']
        },
        'Beef Tacos': {
            title: 'Beef Tacos',
            description: 'Delicious beef tacos with fresh toppings.',
            image: 'images/pexels-john-guccione-www-advergroup-com-1874301-7904958-removebg-preview.png',
            ingredients: ['Beef', 'Taco shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Sour cream'],
            steps: ['Cook beef', 'Prepare toppings', 'Assemble tacos', 'Serve with toppings']
        },
        'Vegetable Stir-fry': {
            title: 'Vegetable Stir-fry',
            description: 'A quick and healthy vegetable stir-fry.',
            image: 'images/vegie-removebg-preview.png',
            ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Soy sauce', 'Garlic', 'Ginger'],
            steps: ['Chop vegetables', 'Stir-fry vegetables', 'Add sauce', 'Serve hot']
        },
        'Chocolate Cake': {
            title: 'Chocolate Cake',
            description: 'A rich and moist chocolate cake.',
            image: 'images/pexels-piotr-arnoldes-7862031-6025807-removebg-preview.png',
            ingredients: ['Flour', 'Cocoa powder', 'Sugar', 'Eggs', 'Butter', 'Baking powder'],
            steps: ['Mix dry ingredients', 'Add wet ingredients', 'Bake in oven', 'Cool and serve']
        },

        'Caesar Salad': {
            title: 'Caesar Salad',
            description: 'A fresh salad with a creamy Caesar dressing.',
            image: 'images/omar-taha-P65bvHgcgyY-unsplash-removebg-preview.png',
            ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese', 'Chicken (optional)'],
            steps: ['Chop lettuce', 'Add dressing', 'Toss salad', 'Top with croutons and cheese', 'Add chicken if desired']
        },

        'Pancakes':{
            title: "Pancakes",
            description: "Fluffy and light pancakes perfect for breakfast.",
            ingredients: ["Flour", "Sugar", "Baking powder", "Milk", "Eggs", "Butter"],
            steps: ["Mix dry ingredients.", "Add wet ingredients.", "Cook on a griddle.", "Serve with syrup."],
            image: "images/none-other-1aV-dbXWoiM-unsplash.jpg"
        },

        'Grilled Salmon':{
            title: "Grilled Salmon",
            description: "Delicious grilled salmon with a lemon butter sauce.",
            ingredients: ["Salmon fillets", "Lemon", "Butter", "Garlic", "Salt", "Pepper"],
            steps: ["Season the salmon.", "Grill the salmon.", "Prepare lemon butter sauce.", "Serve salmon with sauce."],
            image: "images/farhad-ibrahimzade-D1Rez3AjeVo-unsplash.jpg"
        }



    };

    function displayRecipes(query) {
        recipeList.innerHTML = '';
        const filteredRecipes = Object.keys(recipes).filter(recipeTitle => recipeTitle.toLowerCase().includes(query.toLowerCase()));
        filteredRecipes.forEach(title => {
            const recipe = recipes[title];
            const recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');
            recipeItem.dataset.title = title;
            recipeItem.innerHTML = `<img src="${recipe.image}" alt="${recipe.title}"><h3>${recipe.title}</h3><p>${recipe.description}</p>`;
            recipeItem.addEventListener('click', () => displayRecipeDetails(recipe));
            recipeList.appendChild(recipeItem);
        });
    }

    function displayRecipeDetails(recipe) {
        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            li.addEventListener('click', () => li.classList.toggle('purchased'));
            ingredientsList.appendChild(li);
        });
        stepsList.innerHTML = '';
        recipe.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            stepsList.appendChild(li);
        });
        recipeDetails.classList.remove('hidden');
    }

    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        displayRecipes(query);
    });

    printButton.addEventListener('click', () => {
        window.print();
    });

    // Initial display of all recipes
    displayRecipes('');
});
