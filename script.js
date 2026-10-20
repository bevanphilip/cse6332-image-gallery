const images = [
  {file:'image01.jpg',title:'Tropical Paradise',description:'Tall palm trees overlook a white sandy beach and crystal-clear turquoise ocean beneath a bright blue sky.'},
  {file:'image02.jpg',title:'Bird in Nature',description:'A small brown bird rests on a flowering branch surrounded by vibrant green leaves.'},
  {file:'image03.jpg',title:'Starry Night',description:'Thousands of stars illuminate the night sky above a rugged mountain range.'},
  {file:'image04.jpg',title:'Hot Air Balloons',description:'Colorful hot air balloons float peacefully above a vast, rocky desert landscape.'},
  {file:'image05.jpg',title:'Pastel Sunset',description:'Soft pink and purple clouds stretch across the sky, creating a peaceful and colorful atmosphere.'},
  {file:'image06.jpg',title:'Cherry Blossoms',description:'Delicate pink cherry blossoms decorate tree branches against a clear blue sky.'},
  {file:'image07.jpg',title:'Pink Rose',description:'A beautiful pink rose blooms with delicate, layered petals against a softly blurred green background.'},
  {file:'image08.jpg',title:'Misty Mountains',description:'Thick fog covers a rugged mountain landscape filled with rocks, trees, and lush green vegetation.'},
  {file:'image09.jpg',title:'Underwater Jellyfish',description:'A graceful jellyfish floats through clear blue water, displaying its delicate tentacles.'},
  {file:'image10.jpg',title:'Hummingbird and Hibiscus',description:'A hummingbird hovers near a vibrant red hibiscus flower, preparing to feed on its nectar.'},
  {file:'image11.jpg',title:'Orange Roses',description:'Two elegant orange roses bloom among green leaves, displaying soft petals and warm colors.'},
  {file:'image12.jpg',title:'Water Droplet',description:'A single water droplet hangs above a calm surface, creating beautiful circular ripples.'}
];
const gallery=document.querySelector('#gallery');const viewer=document.querySelector('#viewer');
images.forEach((item,i)=>{const card=document.createElement('article');card.className='card';const button=document.createElement('button');button.className='image-button';button.setAttribute('aria-label',`Enlarge ${item.title}`);const img=document.createElement('img');img.src=`images/${item.file}`;img.alt=item.description;img.loading='lazy';img.onerror=()=>{img.onerror=null;img.src=`https://placehold.co/700x500/263047/dbe5ff?text=Add+image+${String(i+1).padStart(2,'0')}`};button.append(img);button.addEventListener('click',()=>{document.querySelector('#large').src=img.src;document.querySelector('#large').alt=img.alt;document.querySelector('#viewer-caption').textContent=`${item.title} — ${item.description}`;viewer.showModal()});const info=document.createElement('div');info.className='info';const number=document.createElement('span');number.className='number';number.textContent=`PHOTO ${String(i+1).padStart(2,'0')}`;const title=document.createElement('h2');title.textContent=item.title;const description=document.createElement('p');description.textContent=item.description;info.append(number,title,description);card.append(button,info);gallery.append(card)});
document.querySelector('#close').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer)viewer.close()});
