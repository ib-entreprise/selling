 const buttonOpenFiltre = document.getElementById('buttonOpenFiltre');
const buttonCloseFiltre = document.getElementById('buttonCloseFiltre');
const contentFiltre = document.getElementById('contentFiltre');
const openModalButton = document.getElementById('openModalButton');
 
// *******************************************
// ************* filtres  ***************
// *******************************************
buttonOpenFiltre.addEventListener('click', function(){
   contentFiltre.style.display = 'block';
   buttonOpenFiltre.style.display = 'none';
   buttonCloseFiltre.style.display = 'block';
});


buttonCloseFiltre.addEventListener('click', function(){
   contentFiltre.style.display = 'none';
   buttonCloseFiltre.style.display = 'none';
   buttonOpenFiltre.style.display = 'block';
});


// *******************************************
// ******** modal product item  *************
// ******************************************* 
const productItems = document.querySelectorAll('.product-item');

const modalImage = document.querySelector('.modal-content img');

productItems.forEach((productItem) => {
    const productImage = productItem.querySelector('.product-img');

    productImage.addEventListener('click', () => {
        const imageURL = productImage.src;

        modalImage.src = imageURL;

        const modal = document.getElementById('myModal');
        modal.classList.remove('hidden');
    });
});

// Gestionnaire d'événement de clic pour fermer le modal
const closeModalButton = document.getElementById('closeModalButton');
closeModalButton.addEventListener('click', () => {
    const modal = document.getElementById('myModal');
    modal.classList.add('hidden');
});


// *******************************************
// ************* modal tab ***************
// *******************************************
   // Fonction pour activer un onglet
  function activateTab(tabId) {
   // Désactiver tous les onglets
   const tabButtons = document.querySelectorAll('.tab-button');
   tabButtons.forEach(button => {
       button.classList.remove('active');
   });

   // Masquer tous les contenus d'onglets
   const tabContents = document.querySelectorAll('.tab-content');
   tabContents.forEach(content => {
       content.style.display = 'none';
   });

   // Activer l'onglet spécifié
   const tabButton = document.getElementById(tabId);
   tabButton.classList.add('active');

   const tabContent = document.getElementById(`content${tabId.slice(-1)}`);
   tabContent.style.display = 'block';
}

// Événements pour activer les onglets
document.getElementById('tab1').addEventListener('click', () => activateTab('tab1'));
document.getElementById('tab2').addEventListener('click', () => activateTab('tab2'));
document.getElementById('tab3').addEventListener('click', () => activateTab('tab3'));

// Activer l'onglet 1 par défaut
activateTab('tab1');


// *******************************************
// ************* declinaison image ***************
// *******************************************


// ******* image declinaisonImages change on MouseEnter *****
// Récupérez toutes les images dans #declinaison
const declinaisonImages = document.querySelectorAll("#declinaison_image_products img");
 

// Ajoutez un gestionnaire d'événements aux images dans #declinaison
declinaisonImages.forEach(image => {
  image.addEventListener("mouseover", () => {
    // Mettez à jour la source de l'image dans #openModal avec la source de l'image survolée
    modalImage.src = image.src;
  });
});



// *******************************************
// ************* Reseach item ***************
// *******************************************
const inputSerachButton  = document.getElementById('inputSerachButton');
const inputSerach  = document.getElementById('inputSerach');

inputSerachButton.addEventListener("click", function(){   
   inputSerach.style.display = 'block';
});



// *******************************************
// ************* slider products ***************
// *******************************************
// const slider = document.getElementById("slider");
// let position = 0;
// const slideWidth = slider.clientWidth;

// setInterval(() => {
//   position -= slideWidth;
//   if (position <= -slideWidth * 2) {
//     position = 0;
//   }
//   slider.style.transform = `translateX(${position}px)`;
// }, 1000);
 // Change de diapositive toutes les 3 secondes (3000 ms)

// *******************************************
// ************* slider products declinaison images on modal ***************
// *******************************************
 