// Define an array of animals with their information
var animals = [
  { name: 'Lion', species: 'Mammal', habitat: 'Grassland', behavior: 'Carnivorous' },
  { name: 'Elephant', species: 'Mammal', habitat: 'Forest', behavior: 'Herbivorous' },
  // Add more animals here...
];

// Get a reference to the animal-list div
var animalList = document.getElementById('animal-list');

// Function to generate HTML for each animal
function generateAnimalHTML(animal) {
  var animalHTML = '<div class="animal">' +
    '<h2>' + animal.name + '</h2>' +
    '<p><strong>Species:</strong> ' + animal.species + '</p>' +
    '<p><strong>Habitat:</strong> ' + animal.habitat + '</p>' +
    '<p><strong>Behavior:</strong> ' + animal.behavior + '</p>' +
    '</div>';

  return animalHTML;
}

// Loop through the animals array and generate HTML for each animal
for (var i = 0; i < animals.length; i++) {
  var animalHTML = generateAnimalHTML(animals[i]);
  animalList.innerHTML += animalHTML;
}
