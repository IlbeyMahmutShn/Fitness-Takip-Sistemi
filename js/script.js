const searchForm = document.querySelector(".search-form");
const cartItems = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

/* butonlar başlangıç */

const searchBtn = document.querySelector("#search-btn");
const shoppingBtn = document.querySelector("#shopping-btn");
const menuBtn = document.querySelector("#menu-btn");

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

shoppingBtn.addEventListener("click", function () {
  cartItems.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(shoppingBtn) &&
      !e.composedPath().includes(cartItems)
    ) {
      cartItems.classList.remove("active");
    }
  });
});
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

const searchBox = document.getElementById('search-box');
searchBox.addEventListener('keypress', function (e) {
  // Enter tuşuna basıldığında
  if (e.key === 'Enter') {
    const searchTerm = e.target.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
      const sectionContent = section.textContent.toLowerCase();
      if (sectionContent.includes(searchTerm)) {
        window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        e.target.value = '';
      }
    });
  }
});

/* Satın alma başlangıç */

document.addEventListener("DOMContentLoaded", function () {
  // Üyelik satın al butonu
  var membershipButtons = document.querySelectorAll('.menu .box-buttom a.btn');
  membershipButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      addToCart('Üyelik', event.target.closest('.box').querySelector('.menu-category').innerText, event.target.closest('.box').querySelector('.prices').innerText);
    });
  });

  // Protein bar ekleme butonu
  var productAddButtons = document.querySelectorAll('.products .products-btn a');
  productAddButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var productName = button.closest('.box').querySelector('.tittle').innerText + ' ' + button.closest('.box').querySelector('.name').innerText;
      var productPrice = button.closest('.box').querySelector('.prices').innerText;
      addToCart('Ürün', productName, productPrice);
    });
  });

  function addToCart(type, name, price) {
    var cartItemContainer = document.querySelector('.cart-items-container');
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div class="item-info">
          <span class="item-type">${type}</span>
          <span class="item-name">${name}</span>
          <span class ="item-price">${price}</span>
          
      </div>
      <button class="remove-btn">İptal</button>
  `;
    cartItemContainer.appendChild(cartItem);
    updateCartTotal();

    var removeButton = cartItem.querySelector('.remove-btn');
    removeButton.addEventListener('click', function () {
      cartItem.remove();
      updateCartTotal();
    });
  }

  function updateCartTotal() {
    var cartItems = document.querySelectorAll('.cart-item');
    var total = 0;
    cartItems.forEach(function (item) {
      var priceString = item.querySelector('.item-price').innerText;
      var price = parseFloat(priceString.replace('TL', '').trim());
      total += price;
    });
    document.querySelector('.cart-total').innerText = total.toFixed(2) + ' TL';
  }
});

/* Satın alma bitiş */

/* butonlar bitiş */
