import { productsData } from './data/products.const.js'

//products
const productGrid = document.querySelector('.products_grid')
const productFragment = document.createDocumentFragment()

//modal
const productModal = document.querySelector('.products-modal')
const productNameModal = productModal.querySelector('.products-modal_info_content--name')
const productPriceModal = productModal.querySelector('.products-modal_info_content--price')
const productDescriptionModal = productModal.querySelector('.products-modal_info_content--description')
const productFigureModal = productModal.querySelector('.products-modal_info--figure')
const productImageModal = productModal.querySelector('.products-modal_info--figure img')
const productModalClose = document.querySelector('.products-modal_info .close')
const productModalNextButton = document.querySelector('.products-modal .arrow-right')
const productModalPreviousButton = document.querySelector('.products-modal .arrow-left')
const productModalIndicator = document.querySelector('.products_modal_indicator')

let currentProductModal = 0

productsData.forEach((productData, indexProduct) => {
  const ProductCardElement = generateCardsProducts(productData)
  ProductCardElement.addEventListener('click', () => {
    currentProductModal = indexProduct
    openProductModal()
    updateProductModal()
  })

  productFragment.appendChild(ProductCardElement)
})

productGrid.appendChild(productFragment)

productModalClose.addEventListener('click', closeProductModal)

productModalNextButton.addEventListener('click', nextProductModal)
productModalPreviousButton.addEventListener('click', previousProductModal)

//functions
function generateCardsProducts(product) {
  const { name, image, delay, price, fillColor } = product

  const productCard = document.createElement('article')
  productCard.classList.add('products_ctn')
  productCard.style.setProperty('--delay', delay)

  //product info
  const htmlContent = `  <h3 class="products_ctn--name">${name}</h3>
      <img src="${image}" alt="${name} - Pepsi Product" class="products_ctn--img" />
      <div class="products_ctn_hover">
        <svg class="product__hover-background" preserveAspectRatio="none" viewBox="0 0 1366 560">
          <path
            style="fill: ${fillColor}"
            class="product__hover-background-polygon"
            d="M1366,0 L0,0 L0,560 C0,560 195.7478,522.504464 514.786857,488.758481 C833.825914,455.012499 1126.55971,423.766218 1296.334,227.556243 C1324.27188,195.400148 1347.65642,160.534137 1366,123.685276 L1366,0 Z"
          ></path>
        </svg>
        <h3 class="products_ctn_hover--name">${name}</h3>
        <p class="products_ctn_hover--price">${price}</p>
      </div>`

  productCard.insertAdjacentHTML('beforeend', htmlContent)

  return productCard
}

function updateProductModal() {
  const currentProduct = productsData[currentProductModal]
  const { name, image, description, price } = currentProduct

  productNameModal.textContent = name
  productPriceModal.textContent = price
  productDescriptionModal.textContent = description
  productImageModal.src = image

  productModalIndicator.innerHTML = `<span>${currentProductModal + 1}</span> / ${productsData.length}`
}

function nextProductModal() {
  productModal.classList.add('back-transition')
  currentProductModal = currentProductModal >= productsData.length - 1 ? 0 : currentProductModal + 1
  animateAndUpdateModal()
}

function previousProductModal() {
  productModal.classList.add('back-transition')
  currentProductModal = currentProductModal == 0 ? productsData.length - 1 : currentProductModal - 1
  animateAndUpdateModal()
}

function animateAndUpdateModal() {
  setTimeout(() => {
    productModal.classList.remove('back-transition')
    updateProductModal()
  }, 500)
}

function openProductModal() {
  productModal.classList.add('active')
  document.body.classList.add('overflow-active')
}

function closeProductModal() {
  productModal.classList.remove('active')
  document.body.classList.remove('overflow-active')
}
