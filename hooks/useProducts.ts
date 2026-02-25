import {useEffect,useState} from "react";
import {getProducts} from "@/services/api";

export default function useProducts(){

const [products,setProducts]=useState([]);
const [loading,setLoading]=useState(true);

useEffect(()=>{

load();

},[]);

const load = async ()=>{

const data = await getProducts();
setProducts(data);
setLoading(false);

};

return {products,loading};

}