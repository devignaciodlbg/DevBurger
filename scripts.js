const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')
const info = document.querySelector('.info')
const list = document.querySelector('ul')

function formatCurrency(value) {
  const newValue = value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })

  return newValue
}

function showAll(productsArray) {
  let myLi = ''

  productsArray.forEach(product => {
    myLi =
      myLi +
      `
        <li>
          <img src="${product.src}" />
          <p>${product.name}</p>
          <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
  })

  list.innerHTML = myLi
}

function mapAllItems() {
  const newPrices = menuOptions.map(product => ({
    ...product,
    price: product.price * 0.9 // dar 10% de desconto
  }))

  showAll(newPrices)
}

function sumAllItems() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML = `
        <li>
          <p>O Valor total dos itens é ${formatCurrency(totalValue)} </p>
        </li>
  
  `
}

function filterAllItems() {
  const filterOnlyVegan = menuOptions.filter(product => product.vegan)

  showAll(filterOnlyVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonShowAll.addEventListener('click', () => {
  info.innerHTML = `<p>Mostrar todos os produtos. </p>`
})

buttonMapAll.addEventListener('click', mapAllItems)
buttonMapAll.addEventListener('click', () => {
  info.innerHTML = `<p>Todos os produtos com 10% de desconto. </p>`
})

buttonSumAll.addEventListener('click', sumAllItems)
buttonSumAll.addEventListener('click', () => {
  info.innerHTML = `<p> </p>`
})

buttonFilterAll.addEventListener('click', filterAllItems)
buttonFilterAll.addEventListener('click', () => {
  info.innerHTML = `<p>Filtrar somente os produtos veganos.</p>`
})
