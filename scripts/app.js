
// sppiners function
const showSppiner = () => {
    document.getElementById("loading-sppiners").style.display = "block";
    
}

const hideSppiner = () => {
    document.getElementById("loading-sppiners").style.display = "none";
}

// fetch all pets 
const loadCategories = () => {
    
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => {
        displayCategories(data.categories)
    })
    .catch(error => console.log(error))  
}

//load all category items
const allCategoryItems = () => {
    hideSppiner()
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => loadAllPet(data.pets))
    .catch(error => console.log(error))
}

// load category items

const loadCategoryItems = (category) => {
   
    const itemsAllDiv = document.getElementById('show-all-item')
    itemsAllDiv.innerHTML = "";


    const itemsContainer = document.getElementById("show-items");
    itemsContainer.innerHTML = "";
    showSppiner()
    setTimeout(() => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then(res => res.json())
    .then(data => { 
        displayCategoryItems(data.data)
    })
    .catch(error => console.log(error));
    hideSppiner();
    }, 2000)
    
}

const displayCategoryItems = (itemsData) => {

    const allItem = document.getElementById("show-all-item");
    const itemsContainer = document.getElementById("show-items");
    itemsContainer.innerHTML = "";
    itemsData.forEach((items) => {
        // console.log(items);
        const cardContainer = document.createElement('div');
        cardContainer.innerHTML = "";
        cardContainer.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure class="flex-none h-72 object-cover">
                <img
                src=${items.image}
                alt="" class="w-full h-full object-cover"/>
            </figure>
            <div class="mt-5">
               <div>
                    <h3 class="font-lato font-bold text-primary text-xl">${items.pet_name}</h3>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=IpokVO4fcZu6&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Breed: ${items.breed}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Birth: ${items.date_of_birth}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=7696&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Gender: ${items.gender}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Price: ${items.price}$</p></div>
               </div>
               <hr>
               <div class="flex justify-between items-center mt-5">
                    <button onclick = "likeBtnFunction('${items.image}')" class="px-4 py-2 rounded-lg border-1 "><img src="https://img.icons8.com/?size=100&id=82788&format=png&color=000000" class="w-10 h-10"/></button>
                    <button onclick = "adoptBtnFunction()" class="px-4 py-2 rounded-lg border-1 text-lg text-btnColor font-bold font-lato bg-[#0E7A8126]">Adopt</button>
                    <button onclick = "detailsBtnFunction(${items.petId})" class="px-4 py-2 rounded-lg border-1 text-lg text-btnColor font-bold font-lato bg-[#0E7A8126]">Details</button>
               </div>
            </div>
        </div>
        `;
        itemsContainer.append(cardContainer)
        itemsContainer.classList.remove('hidden')
        allItem.classList.add('hidden')
    })
}

// display categories button

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories")
    categoryContainer.innerHTML = "";
    
    
    categories.forEach((item) => {
        // console.log(item.category);
        const newContainer = document.createElement('div');
        
        newContainer.innerHTML = `<div onclick="loadCategoryItems('${item.category}')" class="p-4 flex items-center gap-2 border rounded-2xl justify-center"><img src="${item.category_icon}" alt=""><p class="fon-lato font-bold text-2xl text-primary">${item.category}</p></div>`;
        categoryContainer.append(newContainer);
        
    });

}

//display all pets item
const loadAllPet = (allPets) => {
    // console.log(allPets);
    const itemsAllDiv = document.getElementById('show-all-item')
    itemsAllDiv.innerHTML = "";
    allPets.forEach((allItem) => {
    // console.log(allItem)
    const itemsContainer = document.createElement('div');
    itemsContainer.innerHTML = "";
    itemsContainer.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure class="flex-none h-72 object-cover">
                <img
                src=${allItem.image}
                alt="" class="w-full h-full object-cover"/>
            </figure>
            <div class="mt-5">
               <div>
                    <h3 class="font-lato font-bold text-primary text-xl">${allItem.pet_name}</h3>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=IpokVO4fcZu6&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Breed: ${allItem.breed}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Birth: ${allItem.date_of_birth}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=7696&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Gender: ${allItem.gender}</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Price: ${allItem.price}$</p></div>
               </div>
               <hr>
               <div class="flex justify-between items-center gap-1 mt-2">
                    <button onclick="likeBtnFunction('${allItem.image}')" class="px-4 py-2 rounded-lg border-1 "><img src="https://img.icons8.com/?size=100&id=82788&format=png&color=000000" class="w-10 h-10"/></button>
                    <button onclick="adoptBtnFunction()" class="px-4 py-2 rounded-lg border-1 text-lg text-btnColor font-bold font-lato bg-[#0E7A8126]">Adopt</button>
                    <button onclick="detailsBtnFunction(${allItem.petId})" id="open-modal" class="px-4 py-2 rounded-lg border-1 text-lg text-btnColor font-bold font-lato bg-[#0E7A8126]">Details</button>
               </div>
            </div>
        </div>
    `;
    itemsAllDiv.append(itemsContainer);
   })
}

// sort button function



//like button function
const likeBtnFunction = (image) => {
    const imageContainer = document.getElementById("like-image-show")
    const imageCard = document.createElement("div");
    imageCard.innerHTML = `
    <div class="image-card">
        <img src=${image}>
    </div>
    `;
    imageContainer.append(imageCard);
}

// adopt btn function
// const adoptBtnFunction = () => {
//     const adoptDetails = document.getElementById("adopt-btn-modal");
//     const adoptContainer = document.createElement("div");
//     adoptContainer.innerHTML = `
//     <dialog id="my_modal_1" class="modal">
//         <div class="modal-box">
//             <h3 class="text-lg font-bold">Hello!</h3>
//             <p class="py-4">Press ESC key or click the button below to close</p>
//             <div class="modal-action">
//             <form method="dialog">
//                 <!-- if there is a button in form, it will close the modal -->
//                 <button class="btn">Close</button>
//             </form>
//             </div>
//         </div>
//     </dialog>
//     `;
//     adoptDetails.append(adoptContainer);
//     my_modal_1.showModal();
// }



// details button function
const detailsBtnFunction = (id) => {

const details = document.getElementById("show-moadal-area")

fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
.then(res => res.json())
.then(data => console.log(data.petData))
.catch(error => console.log(error))

const detailsContainer = document.createElement("div");
detailsContainer.innerHTML = "";
detailsContainer.innerHTML = `
    <dialog id="my_modal" class="modal">
        <div class="modal-box">
          

        <div class="card bg-base-100 shadow-xl">
            <figure class="flex-none h-72 object-cover">
                <img
                src=""
                alt="" class="w-full h-full object-cover"/>
            </figure>
            <div class="mt-5">
               <div>
                    <h3 class="font-lato font-bold text-primary text-xl"></h3>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=IpokVO4fcZu6&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Breed:</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=60611&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Birth:</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=7696&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Gender:</p></div>
                    <div class="flex items-center gap-2"><img src="https://img.icons8.com/?size=100&id=85782&format=png&color=000000" class="w-4 h-4"/><p class="font-lato font-medium text-[#131313B3]">Price:</p></div>
               </div>
               <hr>
            </div>
        </div>

          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
`;
details.append(detailsContainer)
my_modal.showModal();

};




loadCategories();
loadCategoryItems();
allCategoryItems();
