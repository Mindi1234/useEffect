import React,{ useState , useEffect } from "react";
import { getProducts } from "../Service/service";

const StoreItme = () =>{

    const [items , setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const products = await getProducts().then();
          setItems(products);
        };
        fetchData();
      }, []);

    useEffect(() => {
        console.log("Items changed:", items);
    }, [items]);

    return(
        <>

        </>
    )
}
export default StoreItme;