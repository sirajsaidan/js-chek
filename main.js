let products=[
    {
        name:"TENTE DE CAMPING MH100 - 2 PERSONNES",
        img:"http://localhost:63342/siraj/Go%20my%20code/doc/tente2per.jpg",
        price:100,
        quantity:1,
        description:'Première nuit en camping? Nos concepteurs ont développé cette tente 2 personnes simple et facile à monter, qui vous protégera des éléments extérieurs. Une tente accessible qui passe tous nos tests de résistance et d\'imperméabilité. La structure en dôme autoportante vous permet de la déplacer une fois montée pour choisir le meilleur emplacement.'

    },
    {
        name:"CHAISE PLIABLE POUR LE CAMPING - BASIC",
        img:"http://localhost:63342/siraj/Go%20my%20code/doc/chaise-pliable-pour-le-camping-basic.jpg",
        price:50,
        quantity:1,
        description:'Première nuit en camping? Nos concepteurs ont développé cette tente 2 personnes simple et facile à monter, qui vous protégera des éléments extérieurs. Une tente accessible qui passe tous nos tests de résistance et d\'imperméabilité. La structure en dôme autoportante vous permet de la déplacer une fois montée pour choisir le meilleur emplacement.'
    },
    {
        name:"Grand Plaid De Camping Et De Randonnée - XL 170 X 210 Cm",
        img:"http://localhost:63342/siraj/Go%20my%20code/doc/grand-plaid-de-camping-et-de-randonnee-xl-170-x-210-cm.jpg",
        price:108,
        quantity:1,
        description:'Notre équipe de campeurs a conçu ce plaid XL pour vous isoler confortablement du sol durant votre pique-nique, pendant une pause en randonnée ou sur votre camp. Notre motivation ? Vous proposer un grand plaid résistant et compact. Son revêtement déperlant permet de vous isoler efficacement de l\'humidité du sol.'

    },
    {
        name:"SAC DE COUCHAGE POUR LE CAMPING - ARPENAZ 20°",
        img:"https://contents.mediadecathlon.com/p1610942/k$e706c589fd602205160207618db8b6de/sac-de-couchage-pour-le-camping-arpenaz-20.jpg?&f=800x800",
        price:100,
        quantity:1,
        description:'Notre équipe de campeurs a conçu ce plaid XL pour vous isoler confortablement du sol durant votre pique-nique, pendant une pause en randonnée ou sur votre camp. Notre motivation ? Vous proposer un grand plaid résistant et compact. Son revêtement déperlant permet de vous isoler efficacement de l\'humidité du sol.'
    },
];
let productSave = [...products];
// 3mlana variabl product w 7atina fih les donne il kol bech be3d ndour 3llihom w n3adihom lil functuion //
function generateProductUnit(produit,i){
    let{name,img,price,quantity,description}=produit;
    return `<tr id="produit1">
            <td data-th="Product">
                <div class="row">

                    <div class="col-sm-2 hidden-xs"><img src="${img}" alt="tente deux personnes" class="img-responsive"/></div>
                    <div class="col-sm-10">
                        <h4 class="nomargin">${name}</h4>
                        <p>

                            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#porduct${i}" aria-expanded="false" aria-controls="collapseExampletente2place">
                                CONÇU POUR
                            </button>
                        </p>
                        <div class="collapse" id="porduct${i}">
                            <div class="card card-body">
                               ${description}
                            </div>
                        </div>

                    </div>
                </div>
            </td>
            <td data-th="Price" id="product${i}price" data-value="${price}">${price.toFixed(2)} TND
            </td>
            <td data-th="Quantity">
                <input type="number" class="form-control text-center" min='1' value="${quantity}" id="inputproduct${i}">
            </td>
            <td data-th="Subtotal" class="text-center" id="product${i}total" >${(price*quantity).toFixed(2)} TND
            </td>
            <td class="actions" data-th="">
                <button  id="reset${i}"class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
                <button id="delete${i}" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>
            </td>
        </tr>`
}// 3tinha prouduit w rej3t il html te3ou//
function render(){// te5ou tablau produit w tafichihh
    let html='';
    console.log(products);
    for (let i=0;i<products.length;i++){// declartion dune chaine vide w be3d zedna html te3 produit//
        html+=generateProductUnit(
            products[i],i
        )
    }
    document.querySelector("tbody").innerHTML=html;// jebna balis t body w 7atina fih html//
    for (let i=0;i<products.length;i++){

        document.getElementById(`inputproduct${i}`).addEventListener("input",(e)=>{// 3ewdna dorna fil html w 3melna event listner //
            //declaration d une variable et "w jebna bil Id product1price w be3d dattaset jebna attribue"//
            let number= parseInt(e.target.value)// levent 3andou attribu target w target 3andou value //
            products[i].quantity = number;
            render();
        })
        document.getElementById(`delete${i}`).addEventListener('click',(e)=>{
            products.splice(i,1);
            render();
        })
        document.getElementById(`reset${i}`).addEventListener('click',(e)=>{
            products[i].quantity = 1;
            render();
        })
    }

    document.getElementById("total1").innerText= `Total ${products.reduce((acc,cv)=>acc+(cv.price*cv.quantity),0).toFixed(2)} TND`;
    document.getElementById("total2").innerText= `Total ${products.reduce((acc,cv)=>acc+(cv.price*cv.quantity),0).toFixed(2)} TND`;
}
render()