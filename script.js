//Bevan Philip
//ID: 1001527799

const images = [
  {file:'image01.jpg',title:'Elephant',description:'The largest land animal on Earth, known for its intelligence, powerful trunk, and strong family bonds.'},
  {file:'image02.jpg',title:'Tiger',description:'The largest wild cat species, recognized by its orange fur, black stripes, and excellent hunting abilities.'},
  {file:'image03.jpg',title:'Lion',description:'Known as the king of the jungle, this powerful big cat lives in social groups called prides.'},
  {file:'image04.jpg',title:'Giraffe',description:'The tallest land animal in the world, using its long neck to reach leaves high in trees.'},
  {file:'image05.jpg',title:'Zebra',description:'An African mammal recognized by its unique black-and-white stripes, which differ between individuals.'},
  {file:'image06.jpg',title:'Red Panda',description:'A small, tree-dwelling mammal native to the Himalayas, known for its reddish fur and bushy tail.'},
  {file:'image07.jpg',title:'Emperor Penguin',description:'The tallest and heaviest penguin species, adapted to survive the extreme cold of Antarctica.'},
  {file:'image08.jpg',title:'Dolphin',description:'A highly intelligent marine mammal that uses echolocation to navigate and find food underwater.'},
  {file:'image09.jpg',title:'Gray Wolf',description:'Add a short description of the ninth A social predator that lives in family packs and communicates through howling and body language.'},
  {file:'image10.jpg',title:'Great Horned Owl',description:'A powerful nocturnal bird of prey known for its sharp talons, excellent hearing, and nearly silent flight.'},
  {file:'image11.jpg',title:'Red Fox',description:'AA clever and adaptable mammal recognized by its reddish-orange fur, pointed ears, and bushy tail.'},
  {file:'image12.jpg',title:'Sea Turtle',description:'AA marine reptile that spends most of its life in the ocean and travels long distances to nesting beaches.'}
];
const gallery=document.querySelector('#gallery');const viewer=document.querySelector('#viewer');
images.forEach((item,i)=>{const card=document.createElement('article');card.className='card';const button=document.createElement('button');button.className='image-button';button.setAttribute('aria-label',`Enlarge ${item.title}`);const img=document.createElement('img');img.src=`images/${item.file}`;img.alt=item.description;img.loading='lazy';img.onerror=()=>{img.onerror=null;img.src=`https://placehold.co/700x500/263047/dbe5ff?text=Add+image+${String(i+1).padStart(2,'0')}`};button.append(img);button.addEventListener('click',()=>{document.querySelector('#large').src=img.src;document.querySelector('#large').alt=img.alt;document.querySelector('#viewer-caption').textContent=`${item.title} — ${item.description}`;viewer.showModal()});const info=document.createElement('div');info.className='info';const number=document.createElement('span');number.className='number';number.textContent=`PHOTO ${String(i+1).padStart(2,'0')}`;const title=document.createElement('h2');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;info.append(number,title,description);card.append(button,info);gallery.append(card)});
document.querySelector('#close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
