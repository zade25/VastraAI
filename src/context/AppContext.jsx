import {createContext,useContext,useEffect,useState} from 'react';
import {api} from '../services/api';
const C=createContext();
export function AppProvider({children}){const [cart,setCart]=useState({items:[],total:0,subtotal:0,discount:0,delivery:0});const [wishlist,setWishlist]=useState([]);const [toast,setToast]=useState('');
const refresh=async()=>{try{const [c,w]=await Promise.all([api.cart(),api.wishlist()]);setCart(c);setWishlist(w.products)}catch{}}; useEffect(()=>{refresh()},[]); useEffect(()=>{if(toast){const t=setTimeout(()=>setToast(''),2600);return()=>clearTimeout(t)}},[toast]);
const add=async(id)=>{try{await api.addCart(id);await refresh();setToast('Added to cart')}catch(e){setToast(e.message)}};const toggle=async(id)=>{try{const r=await api.toggleWishlist(id);setWishlist(r.products);setToast(r.added?'Saved to wishlist':'Removed from wishlist')}catch(e){setToast(e.message)}};return <C.Provider value={{cart,wishlist,refresh,add,toggle,toast,setToast}}>{children}{toast&&<div className="toast" role="status">{toast}</div>}</C.Provider>}
export const useApp=()=>useContext(C);
