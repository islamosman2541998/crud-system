

var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productGatagryInput = document.getElementById("productGatagryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var searchInput = document.getElementById("searchInput")

var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

var indexUpdate = 0;

productList = [];


if(localStorage.getItem("products") != null ){
    productList = JSON.parse(localStorage.getItem("products")
);
displaydata();

}




function addproduct(){
   if( validationName() == true   ){


    var product = {
        name: productNameInput.value ,
        price: productPriceInput.value ,
        gatagry: productGatagryInput.value ,
        desc: productDescriptionInput.value 

    }
     productList.push(product);

     localStorage.setItem("products" , JSON.stringify(productList));

     clearproduct();

     displaydata();


     console.log(productList);



   }


}

function clearproduct(){
    productNameInput.value = "";
     productPriceInput.value = "";
     productGatagryInput.value = "";
     productDescriptionInput.value = "";

}

function displaydata(){

    var cartona ="";

    for( var i =0; i < productList.length ; i++    ) {

       cartona += `  <tr>
        
       <td>${i}</td>
       <td>${productList[i].name}</td>
       <td>${productList[i].price}</td>
       <td>${productList[i].gatagry}</td>
       <td>${productList[i].desc}</td>
       <td>
       <button onclick = "setData(${i})" class="btn btn-warning btn-sm">update</button>
       
       <button onclick= "deleteData(${i})" class="btn btn-danger btn-sm">delete</button>
       </td>
       

   </tr> ` ;
    }

      document.getElementById("tableBody").innerHTML = cartona;
}


function deleteData(index){
    productList.splice(index , 1);

    localStorage.setItem("products" , JSON.stringify(productList));

    console.log(productList);
    displaydata();

}

function search(){
   var term = searchInput.value;
   console.log("hallo");

   var cartona ="";

    for( var i =0; i < productList.length ; i++    ) {
        if (productList[i].name.toLowerCase().includes(term.toLowerCase())) {
            cartona += `  <tr>
        
       <td>${i}</td>
       <td>${productList[i].name}</td>
       <td>${productList[i].price}</td>
       <td>${productList[i].gatagry}</td>
       <td>${productList[i].desc}</td>
       <td>
       <button onclick = "setData(${i})" class="btn btn-warning btn-sm">update</button>
       
       <button onclick= "deleteData(${i})" class="btn btn-danger btn-sm">delete</button>
       </td>
       

   </tr> ` 
    }

        }
       

      document.getElementById("tableBody").innerHTML = cartona;
      

};

function setData(index){
    indexUpdate = index 
    
    var curentproduct = productList[index]
    

    productNameInput.value = curentproduct.name;
    productPriceInput.value = curentproduct.price;
    productGatagryInput.value = curentproduct.gatagry;
    productDescriptionInput.value = curentproduct.desc;

    updateBtn.classList.remove("d-none");
    addBtn.classList.add("d-none")
    
}

function updateproduct(){
    var product = {
        name: productNameInput.value ,
        price: productPriceInput.value ,
        gatagry: productGatagryInput.value ,
        desc: productDescriptionInput.value 

    }; 
    
    productList.splice( indexUpdate  ,  1 ,  product )
   
    console.log(productList);
   
    localStorage.setItem("products" , JSON.stringify(productList));

    displaydata();
    updateBtn.classList.add("d-none");
    addBtn.classList.remove("d-none")
    clearproduct();

}

   var nameMessage = document.getElementById("nameMessage");

function validationName(){
    var text = productNameInput.value ;
    var regexName = /^[A-Z][a-z]{3,8}$/;


    if ( regexName.test(text) ) {

        productNameInput.classList.add("is-valid")
        productNameInput.classList.remove("is-invalid")
        nameMessage.classList.add("d-none");


        return true;


    } else {
        productNameInput.classList.add("is-invalid")
        productNameInput.classList.remove("is-valid")

        nameMessage.classList.remove("d-none");


        return false;


    }




}