let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
const packages =[
    {
        _id:  "612f057787e473107fda56aa" ,
        services: [
            "612f008d506de80045c0334b" ,
            "612f00a7506de80045c0334e" ,
            "612f00b3506de80045c03351" ,
            "612f015f99d6b200456d3ac0" ,
        ],
        image: '2.PNG',
        name: "Express",
        price: 100,
        extras: [
            "612f030f26a4b900463c1ba8" ,
            "612f0367fc76940045079152" ,
            "612f037cfc76940045079155" ,
            "612f0388fc76940045079158" ,
        ],
    },
    {
        _id:  "612f067387e473107fda56b0" ,
        services: [
            "612f008d506de80045c0334b" ,
            "612f00a7506de80045c0334e" ,
            "612f02c526a4b900463c1b9c" ,
            "612f02da26a4b900463c1b9f" ,
            "612f02e226a4b900463c1ba2" ,
        ],
        image: '3.PNG',
        name: "Basico",
        price: 200,
        extras: [
            "612f0367fc76940045079152" ,
            "612f037cfc76940045079155" ,
            "612f0388fc76940045079158" ,
            "62b5538161a6f66a03f0bf24" ,
            "612f030f26a4b900463c1ba8" ,
        ],
    },
    {
        _id:  "612f1c4f30b90803837e7969" ,
        services: [
            "612f008d506de80045c0334b" ,
            "612f02fd26a4b900463c1ba5" ,
            "612f00a7506de80045c0334e" ,
            "612f030f26a4b900463c1ba8" ,
            "612f02c526a4b900463c1b9c" ,
            "612f0367fc76940045079152" ,
            "612f02e226a4b900463c1ba2" ,
        ],
        image: '4.PNG',
        name: "Ultra",
        price: 300,
        extras: [
            "612f0388fc76940045079158" ,
            "62b5538161a6f66a03f0bf24" ,
        ],
    },
    {
        _id:  "612abcd1c4ce4c141237a356" ,
        image: '1.PNG',
        name: "Supremo",
        price: 400,
        services:[
            "612f008d506de80045c0334b" ,
            "612f02fd26a4b900463c1ba5" ,
            "612f00a7506de80045c0334e" ,
            "612f030f26a4b900463c1ba8" ,
            "612f02c526a4b900463c1b9c" ,
            "612f0367fc76940045079152" ,
            "612f02e226a4b900463c1ba2" ,
            "612f030f26a4b900463c1ba8",
            "612f037cfc76940045079155",
            "612f0388fc76940045079158",
            "62b5538161a6f66a03f0bf24",
        ],
    },
];
const services =[
    {
        _id:  "612f008d506de80045c0334b" ,
        name: "High pressure rinse",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f00a7506de80045c0334e" ,
        name: "Pre-soak",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f00b3506de80045c03351" ,
        name: "Single top brush",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f015f99d6b200456d3ac0" ,
        name: "10 blowers",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f02c526a4b900463c1b9c" ,
        name: "2 top brushes",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f02da26a4b900463c1b9f" ,
        name: "Single foam",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f02e226a4b900463c1ba2" ,
        name: "15 blowers",
        price: 0,
        canBeExtra: false,
    },
    {
        _id:  "612f02fd26a4b900463c1ba5" ,
        name: "Lava Soap",
        price: 50,
        canBeExtra: true,
    },
    {
        _id:  "612f030f26a4b900463c1ba8" ,
        name: "Triple Foam",
        price: 50,
        canBeExtra: true,
    },
    {
        _id:  "612f0367fc76940045079152" ,
        name: "Super Wax",
        price: 50,
        canBeExtra: true,
    },
    {
        _id:  "612f037cfc76940045079155" ,
        name: "Ceramic",
        price: 60,
        canBeExtra: true,
    },
    {
        _id:  "612f0388fc76940045079158" ,
        name: "Tire Shine",
        price: 70,
        canBeExtra: true,
    },
    {
        _id:  "62b5538161a6f66a03f0bf24" ,
        name: "Buff n Shine",
        price: 80,
        canBeExtra: true,
    },
];
const memberships =[
    {
        _id:  "61344ae637a5f00383106c7a",
        name: "Express",
        package: "612f057787e473107fda56aa",
        pricing: [
            {
                _id:  "61344ae637a5f00383106c7b" ,
                name: "1 month",
                price: 500,
                time: 1,
            },
            {
                _id:  "61344ae637a5f00383106c7c" ,
                name: "3 months",
                price: 1450,
                time: 3,
            },
        ],
    },
    {
        _id:  "61344b5937a5f00383106c80" ,
        name: "Basico",
        package:  "612f067387e473107fda56b0" ,
        pricing: [
            {
                _id:  "61344b5937a5f00383106c81" ,
                name: "1 month",
                price: 650,
                time: 1,
            },
            {
                _id:  "61344b5937a5f00383106c82" ,
                name: "3 months",
                price: 1900,
                time: 3,
            },
        ],
    },
    {
        _id:  "61344b9137a5f00383106c84" ,
        name: "Ultra",
        package:  "612f1c4f30b90803837e7969" ,

        pricing: [
            {
                _id:  "61344b9137a5f00383106c85" ,
                name: "1 month",
                price: 800,
                time: 1,
            },
            {
                _id:  "61344b9137a5f00383106c86" ,
                name: "3 months",
                price: 2350,
                time: 3,
            },
        ],
    },
    {
        _id:  "61344bab37a5f00383106c88" ,
        name: "Supremo",
        package:  "612abcd1c4ce4c141237a356" ,
        pricing: [
            {
                _id:  "61344bab37a5f00383106c89" ,
                name: "1 month",
                price: 1000,
                time: 1,
            },
            {
                _id:  "61344bab37a5f00383106c8a" ,
                name: "3 months",
                price: 2900,
                time: 3,
            },
        ],
    },
];

window.onload = function () {
    window.addEventListener('scroll', function (e) {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add('is-scrolling');
        } else {
            document.querySelector("header").classList.remove('is-scrolling');
        }
    });

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let listCarts  = [];

function getServicesNames(serviceIds) {
    return services
        .filter(service => serviceIds.includes(service._id))
        .map(service => service.name);
}
function initApp(){
    packages.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        const servicesNames = getServicesNames(value.services);
        newDiv.classList.add('item');
        newDiv.innerHTML = `
                <div class="price_item">
                    <div class="elements">
                        <img src="image/${value.image}" alt="">
                         <h5 class="title-cart">${value.name} $${value.price}</h5>
                         <div class="price f_700 f_size_40 t_color2"></div>
                         <ul class="list-unstyled p_list">
                              ${servicesNames.map(service => `<li><i class="fa-regular fa-circle-check"></i>${service}</li>`).join('')}
                         </ul>
                    </div>
                     <div class="btn">
                       <button onclick="addToCart(${key}, false)">Add To Cart</button>
                    </div>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCart(key, isMembership){
    const selectedItem = isMembership ? memberships[key] : packages[key];
    const existingItem = listCarts.find(item => item._id === selectedItem._id && item.isMembership === isMembership);
    if (existingItem) {
        existingItem.quantity++;
    }else {
        const newItem = {
            _id: selectedItem._id,
            name: isMembership ? `Membresía: ${selectedItem.name}` : `Paquete: ${selectedItem.name}` ,
            price: isMembership ? selectedItem.pricing.find(price => price.time === 1).price : selectedItem.price,
            quantity: 1,
            isMembership: isMembership,
            image: isMembership ? 'image/1.PNG' : selectedItem.image,
        };
        listCarts.push(newItem);
    }

    reloadCart();
}
function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        totalPrice += value.isMembership
            ? (value.price * (memberships.find(m => m._id === value._id)?.pricing.find(p => p.time === value.quantity)?.price || 0))
            : (value.price * value.quantity);
        count += value.quantity;

        const newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div>${value.isMembership ? '<img src="image/1.PNG"/>' : `<img src="image/${value.image}"/>`}</div>
            <div>${value.name}</div>
            <div>$${(value.price * value.quantity).toLocaleString()}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>`;

        listCart.appendChild(newDiv);
    });

    total.innerHTML = `$${totalPrice.toLocaleString()}`;
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity === 0){
        listCarts.splice(key, 1);
    } else if (quantity > 0 && listCarts[key]) {
        listCarts[key].quantity = quantity;
        if (listCarts[key].isMembership) {
            const selectedMembership = memberships.find(m => m._id === listCarts[key]._id);
            const selectedPrice = selectedMembership.pricing.find(p => p.time === quantity);
            listCarts[key].price = selectedPrice ? selectedPrice.price : 0;
        } else {
            listCarts[key].price = quantity * listCarts[key].price;
        }
    }
    reloadCart();
}


function getServiceAvailability(serviceId, packageMembershipId) {
    const packageId = memberships.find(membership => membership.package === packageMembershipId);
    const packageServices = packages.find(package => package._id === packageId.package)?.services || [];
    return packageServices.includes(serviceId) ? '<span class="check">&#10003;</span>' : '<span class="xmark">&#10005;</span>';
}

function generateComparisonTable() {
    const comparisonTable = document.getElementById('comparisonTable');
    const theadRow = comparisonTable.querySelector('thead tr');
    const tbody = comparisonTable.querySelector('tbody');

    // Membresías
    memberships.forEach(membership => {
        const th = document.createElement('th');
        const price = membership.pricing.price;
        th.innerHTML = `<div>
                                <h4>
                                ${membership.name} <br> 
                                <span>$${membership.pricing.find(price => price.time === 1).price.toLocaleString()} mx</span>
                                </h4>
                          </div> `;
        theadRow.appendChild(th);
    });

    // Servicios
    services.forEach(service => {
        const tr = document.createElement('tr');
        const tdService = document.createElement('td');
        tdService.textContent = service.name;
        tr.appendChild(tdService);

        memberships.forEach(membership => {
            const tdMembership = document.createElement('td');
            tdMembership.innerHTML = getServiceAvailability(service._id, membership.package);
            tr.appendChild(tdMembership);
        });

        tbody.appendChild(tr);
    });
}

generateComparisonTable();

function generateFooter() {
    const footerRow = document.getElementById('my-table-footer').querySelector('tr');

    memberships.forEach((membership, index) => {
        const td = document.createElement('td');
        const cont = document.createElement('div')
        const button = document.createElement('button');
        cont.classList.add('cont')
        button.textContent = 'Add to Cart';
        button.onclick = () => addToCart(index, true);
        td.appendChild(cont);
        cont.appendChild(button);
        footerRow.appendChild(td);
    });
}
 generateFooter();