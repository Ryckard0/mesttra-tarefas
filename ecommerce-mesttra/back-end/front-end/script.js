// buscar o elemento lista que vai listar os meus produtos
const lista = document.querySelector('#lista');

//URL da API
const apiURL = 'http://localhost:3000/products';

// busco os meus inputs para pegar o que usuario digitou
const nameInput = document.querySelector('#name')
const categoryInput = document.querySelector('#category')
const priceInput = document.querySelector('#price')

const getProducts = async () => {
    lista.innerHTML = '';
    const response = await fetch(apiURL);
    const products = await response.json();

    products.map((product) => {
        lista.insertAdjacentHTML('beforeend', `
            <li>${product.name}</li>
        `)
    })
}

//POST
const submitForm = async (event) => {
    event.preventDefault();
    // Monto o que vai para o back-end no post
    const product = {
        name: nameInput.value,
        category: categoryInput.value,
        price: priceInput.value,
    }

    //Contruir a minha requisição de POST
    const request = new Request(`${apiURL}/add`, {
        method: 'POST', 
        body: JSON.stringify(product),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    const response = await fetch(request);
    const data = await response.json();

    alert(`Produto ${data.data[0].name} cadastrado`);
    getProducts();
}

getProducts();