$('#inputPrice').mask('000.000.000.000.000,00', {reverse: true});

var products = [
    {
        id: 1,
        name: "Computador M1-TX",
        description: "Intel 17, 16GB, SSD 256, HD 1T",
        price: 4900,
        category: 1,
        promotion: true,
        new: true
    },
    {
        id: 2,
        name: "Computador M2-TX",
        description: "Intel 17, 32GB, SSD 512, HD 1T",
        price: 5900,
        category: 2,
        promotion: false,
        new: true
    },
    {
        id: 3,
        name: "Computador M1-T",
        description: "Intel 15, 16GB, HD 1T",
        price: 2900,
        category: 3,
        promotion: false,
        new: false
    },
    {
        id: 4,
        name: "Computador LENOVO",
        description: "Intel i9, 32GB, HD 500T",
        price: 4800,
        category: 3,
        promotion: false,
        new: true
    }
]

var categories = [
    { id: 1, name: "Produção Própria" },
    { id: 2, name: "Nacional" },
    { d: 3, name: "Importado" }
]

//Onload
loadProducts()

function loadProducts(){
    for(let prod of products){
        addNewRow(prod);
    }
}

//Salvar produtos
function save(){
    
    var productNew = {
            id: products.length + 1,
            name: document.getElementById("inputName").value,
            description: document.getElementById("inputDescription").value,
            price: parseFloat(document.getElementById("inputPrice").value),
            category: document.getElementById("selectCategory").value,
            promotion: document.getElementById("checkboxPromotion").checked,
            new: document.getElementById("checkboxNew").checked
    };

    console.log(productNew);

    addNewRow(productNew);
    products.push(productNew);
    
    document.getElementById("formProduct").reset();

}

//Add new Row
function addNewRow(prod){
    var table = document.getElementById("productsTable");
    var newRow = table.insertRow()

    // Insert id product
    var idNode = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(idNode);

    // Insert product name
    var nameNode = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(nameNode);

    // Insert product description
    var descriptionNode = document.createTextNode(prod.description);
    var cell = newRow.insertCell();
    cell.className="d-none d-md-table-cell";
    cell.appendChild(descriptionNode);

    // Insert product price
    var formatter = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency: "BRL"
    })

    var priceNode = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(priceNode);

    // Insert product category
    var categoryNode = document.createTextNode(categories[prod.category - 1].name);
    newRow.insertCell().appendChild(categoryNode);
    
    //Insert product options
    var options = '';

    if(prod.promotion){
        options = '<span class="badge bg-success me-1">P</span>';
    }
    if(prod.new){
        options += '<span class="badge bg-primary">L</span>';

    }
    
    cell = newRow.insertCell()
    cell.className= "d-none d-md-table-cell";
    cell.innerHTML = options;

    // newRow.insertCell().innerHTML = options;
}