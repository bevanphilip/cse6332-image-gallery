const animals = [
  {file:'animal1.jpg',name:'African Elephant',habitat:'land',region:'African savannas',description:'The largest living land animal uses its versatile trunk to gather food, drink water, and communicate with its herd.'},
  {file:'animal2.jpg',name:'Bengal Tiger',habitat:'land',region:'Asian forests',description:'This solitary big cat is known for its distinctive stripes, powerful swimming ability, and stealthy hunting.'},
  {file:'animal3.jpg',name:'African Lion',habitat:'land',region:'African grasslands',description:'Unlike most cats, lions live in social groups called prides and work together to protect their territory.'},
  {file:'animal4.jpg',name:'Giraffe',habitat:'land',region:'African savannas',description:'The tallest land mammal uses its long neck and prehensile tongue to browse leaves high in the trees.'},
  {file:'animal5.jpg',name:'Plains Zebra',habitat:'land',region:'African grasslands',description:'Every zebra has a unique stripe pattern. These social grazers often travel in herds for protection.'},
  {file:'animal6.jpg',name:'Red Panda',habitat:'land',region:'Himalayan forests',description:'This tree-loving mammal uses its bushy tail for balance and warmth and spends much of its time eating bamboo.'},
  {file:'animal7.jpg',name:'Emperor Penguin',habitat:'air',region:'Antarctica',description:'The largest penguin species survives harsh Antarctic winters through insulation and remarkable group huddling.'},
  {file:'animal8.jpg',name:'Bottlenose Dolphin',habitat:'water',region:'Temperate and tropical seas',description:'A curious marine mammal that uses echolocation and complex social communication to navigate its ocean home.'},
  {file:'animal9.jpg',name:'Gray Wolf',habitat:'land',region:'Forests and tundra',description:'Wolves live in family packs and cooperate while raising pups, defending territory, and hunting.'},
  {file:'animal10.jpg',name:'Great Horned Owl',habitat:'air',region:'North American woodlands',description:'A formidable nocturnal hunter with exceptional hearing, powerful talons, and nearly silent flight.'},
  {file:'animal11.jpg',name:'Red Fox',habitat:'land',region:'Woodlands and meadows',description:'This adaptable predator uses keen hearing to locate small prey and its fluffy tail for warmth and balance.'},
  {file:'animal12.jpg',name:'Green Sea Turtle',habitat:'water',region:'Tropical oceans',description:'An ocean traveler that grazes on seagrass as an adult and returns to nesting beaches to lay eggs.'}
];

const cards = document.querySelector('#cards');
const count = document.querySelector('#result-count');
const viewer = document.querySelector('#viewer');
const viewerImage = document.querySelector('#viewer-image');
const viewerTitle = document.querySelector('#viewer-title');
const viewerDescription = document.querySelector('#viewer-description');

function openAnimal(animal) {
  viewerImage.src = `images/${animal.file}`;
  viewerImage.alt = animal.name;
  viewerTitle.textContent = animal.name;
  viewerDescription.textContent = animal.description;
  viewer.showModal();
}

function renderAnimals(filter = 'all') {
  const visible = animals.filter(animal => filter === 'all' || animal.habitat === filter);
  cards.replaceChildren();
  count.textContent = `${visible.length} ${visible.length === 1 ? 'animal' : 'animals'}`;
  visible.forEach(animal => {
    const card = document.createElement('article');
    card.className = 'animal-card';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'photo-button';
    button.setAttribute('aria-label', `Enlarge photo of ${animal.name}`);
    const photo = document.createElement('img');
    photo.src = `images/${animal.file}`;
    photo.alt = animal.name;
    photo.loading = 'lazy';
    button.append(photo);
    button.addEventListener('click', () => openAnimal(animal));
    const body = document.createElement('div');
    body.className = 'card-body';
    const region = document.createElement('span');
    region.className = 'card-kicker';
    region.textContent = animal.region;
    const heading = document.createElement('h3');
    heading.textContent = animal.name;
    const description = document.createElement('p');
    description.textContent = animal.description;
    body.append(region, heading, description);
    card.append(button, body);
    cards.append(card);
  });
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    renderAnimals(button.dataset.filter);
  });
});

document.querySelector('#close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
renderAnimals();
