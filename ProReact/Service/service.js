const STORAGE_KEY = "products_cach";
export const getProducts = async () => {
    const cach = localStorage.getItem(STORAGE_KEY);
    if(cach){
        console.log("returning from cache");
        return JSON.parse(cach);

    }
    const response=await fetch('https://fakestoreapi.com/products')
     const data=await response.json();

     localStorage.setItem(STORAGE_KEY,JSON.stringify(data))

     return data;
 }
 