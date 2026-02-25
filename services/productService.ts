const BASE_URL = "https://dummyjson.com";


export const getProducts = async () => {

 const res = await fetch(
 `${BASE_URL}/products`
 );

 const data = await res.json();

 return data.products;
};



export const getProductById =
async (id:number)=>{

 const res = await fetch(
 `${BASE_URL}/products/${id}`
 );

 return res.json();

};



export const getCategories =
async ()=>{

 const res = await fetch(
 `${BASE_URL}/products/categories`
 );

 return res.json();

};



export const getProductsByCategory =
async (category:string)=>{

 const res = await fetch(
 `${BASE_URL}/products/category/${category}`
 );

 const data = await res.json();

 return data.products;

};