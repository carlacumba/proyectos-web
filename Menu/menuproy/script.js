const menu = [
  {
    id: 1,
    title: "Tigrillo de verde",
    category: "Desayuno",
    price: 4,
    img: "../imagenes/desayuno1.webp",
    desc: `Trigrillo de verde de queso o mixto, acompañado de huevo frito. Con café gratuito.`,
  },
  {
    id: 2,
    title: "Bolón con huevo",
    category: "Desayuno",
    price: 3.50,
    img: "../imagenes/desayuno2.jpg",
    desc: `Bolón de verde de queso o mixto, acompañado de huevo frito. Con café gratuito.`,
  },
  {
    id: 3,
    title: "Desayuno Americano",
    category: "Desayuno",
    price: 6,
    img: "../imagenes/desayuno3.webp",
    desc: `Pancakes con miel y mantequilla, pan tostado, huevo frito y bacon.`,
  },
  {
    id: 4,
    title: "Moro con proteína",
    category: "Almuerzo",
    price: 7.50,
    img: "../imagenes/almuerzo1.jpeg",
    desc: `Moro de lenteja con proteína a elección (pollo, res o cerdo), acompañado de patacones con queso`,
  },
  {
    id: 5,
    title: "Arroz con camarón",
    category: "Almuerzo",
    price: 9,
    img: "../imagenes/almuerzo2.jpg",
    desc: `Arroz salteado con camarones y vegetales.`,
  },
  {
    id: 6,
    title: "Cordon Bleu",
    category: "Almuerzo",
    price: 8.50,
    img: "../imagenes/almuerzo3.jpg",
    desc: `Cordon Bleu de pollo acompañado por vegetales.`,
  },
  {
    id: 7,
    title: "Encebollado",
    category: "Almuerzo",
    price: 5.50,
    img: "../imagenes/almuerzo4.jpeg",
    desc: `Caldo de pescado con yuca y cebolla encurtida, servido con limón y chifles.`,
  },
  {
    id: 8,
    title: "Jugos naturales y tropicales",
    category: "Bebidas",
    price: 2.50,
    img: "../imagenes/bebida1.jpg",
    desc: `Jugos tropicales de dos sabores a $2.50 y jugos naturales a $2.`,
  },
  {
    id: 9,
    title: "Milshake",
    category: "Bebidas",
    price: 3.50,
    img: "../imagenes/bebida2.webp",
    desc: `Milshake de fresa, chocolate o vainilla.`,
  },
  {
    id: 10,
    title: "Agua aromática",
    category: "Bebidas",
    price: 1.25,
    img: "../imagenes/bebida3.jpg",
    desc: `Aguas aromáticas de hierbaluisa, manzanilla y cedrón.`,
  },
  {
    id: 11,
    title: "Batidos",
    category: "Bebidas",
    price: 2.50,
    img: "../imagenes/bebida4.jpg",
    desc: `Batidos de banana, frutilla, mora y mango.`,
  }
];

const sectionCenter=document.querySelector(".section-center");
const filterButtons=document.querySelectorAll(".filter-btn")

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu)
});

filterButtons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const category=e.currentTarget.dataset.id;
        const menuCategory=menu.filter(function(menuItem){
            if (menuItem.category===category){
                return menuItem
            }
        });
        if (category === "Todo"){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory)
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} />
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                 </p>
          </div>
        </article>`;
   });
   displayMenu=displayMenu.join("")
   sectionCenter.innerHTML=displayMenu
}