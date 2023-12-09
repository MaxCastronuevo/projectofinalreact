const products = [
  {
    id: "1",
    name: "Zapato",
    img: "https://tse3.mm.bing.net/th?id=OIP.fIThf3aG1O1AVcKkDCeDpQHaHa&pid=Api&P=0&h=180",
    price: 15000,
    category: "calzados",
    description: "Zapato de categoria",
  },
  {
    id: "2",
    name: "Bota",
    img: "https://tse3.mm.bing.net/th?id=OIP.y9elURSKe7N1giU8_WKoEgHaHa&pid=Api&P=0&h=180",
    price: 17000,
    category: "calzados",
    description: "Para utilizar con tu Jean preferido",
    stock: 10,
  },
  {
    id: "3",
    name: "Botas Dama",
    img: "https://tse1.mm.bing.net/th?id=OIP.oTU9PmAyiysEOUH2AOtD7AHaHa&pid=Api&P=0&h=180",
    price: 8000,
    category: "calzados",
    description: "Bota Dama",
    stock: 10,
  },
  {
    id: "4",
    name: "Zapatilla",
    img: "https://tse1.explicit.bing.net/th?id=OIP.s5uEhD9_VU61WywmhkmXSwAAAA&pid=Api&P=0&h=180",
    price: 45000,
    category: "calzados",
    description: "Zapatilla coloridas",
    stock: 10,
  },
  {
    id: "5",
    name: "Remera",
    img: "https://tse4.mm.bing.net/th?id=OIP.L3GAAZWnT_UN9aoiC7kzogHaIA&pid=Api&P=0&h=180",
    price: 10000,
    category: "ropa",
    description: "Remera algodon",
    stock: 10,
  },
  {
    id: "6",
    name: "Camisa",
    img: "https://tse3.mm.bing.net/th?id=OIP._QCOyygp6CQ_TFJYnzKMdwHaHa&pid=Api&P=0&h=180",
    price: 15000,
    category: "ropa",
    description: "Camisa Hombre slim feet",
    stock: 10,
  },
  {
    id: "7",
    name: "Pantalon",
    img: "https://tse1.mm.bing.net/th?id=OIP.ffPakzBW1ypLwZd4bQo1CgHaJ4&pid=Api&P=0&h=180",
    price: 12000,
    category: "ropa",
    description: "Jean Hombre ",
    stock: 10,
  },
  {
    id: "8",
    name: "Campera",
    img: "https://tse4.mm.bing.net/th?id=OIP.NfWaAA8iALEG8AnSMjQ-3QHaHa&pid=Api&P=0&h=180",
    price: 17000,
    category: "ropa",
    description: "Campera Impermeable",
    stock: 10,
  },
  {
    id: "9",
    name: "Sweter",
    img: "https://tse2.mm.bing.net/th?id=OIP.oLouzUdfR08TqMXw7NNymQHaHa&pid=Api&P=0&h=180",
    price: 16000,
    category: "ropa",
    description: "Sweter Mostaza",
    stock: 10,
  },
];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };