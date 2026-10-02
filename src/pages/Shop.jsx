import {useEffect,useMemo,useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {SlidersHorizontal,ChevronDown,Search,RotateCcw,ArrowUpRight,Sparkles} from 'lucide-react';
import {api} from '../services/api';
import ProductCard from '../components/ProductCard';
import {categoryMeta} from '../data/fashion';

export default function Shop({category}){
  const [params]=useSearchParams();
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true);
  const [q,setQ]=useState(params.get('q')||'');
  const [sort,setSort]=useState('popular');
  const [price,setPrice]=useState('');
  const [cat,setCat]=useState(category||'');

  useEffect(()=>{setCat(category||'')},[category]);
  useEffect(()=>{setQ(params.get('q')||'')},[params]);

  useEffect(()=>{
    let alive=true;
    setLoading(true);
    api.products({q,sort,category:cat,maxPrice:price||undefined})
      .then(r=>{if(alive)setProducts(r.products||[])})
      .catch(()=>{if(alive)setProducts([])})
      .finally(()=>{if(alive)setLoading(false)});
    return()=>{alive=false};
  },[q,sort,price,cat]);

  const meta=useMemo(()=>categoryMeta[cat]||null,[cat]);
  const title=meta?.title||'Shop Collection';
  const subcategories={
    Indian:['Sarees','Lehengas','Anarkalis','Kurtis','Salwar Suits','Sharara'],
    'Indo-Western':['Saree + Blazer','Saree + Sneakers','Kurti + Jeans','Lehenga + Crop Top','Dhoti Pants + Top','Ethnic Skirt + Shirt','Jacket + Saree'],
    Western:['Dresses','Tops','Jeans','Skirts','Blazers','Jumpsuits','Co-ords','Shirts','Trousers','Jackets'],
    Accessories:['Earrings','Necklaces','Bangles','Bracelets','Rings','Watches','Bags','Clutches','Sunglasses','Shoes','Heels','Sneakers','Ethnic Footwear'],
  };

  const reset=()=>{setQ('');setCat(category||'');setPrice('');setSort('popular')};

  return <section className="shop-page">
    {meta ? <div className="collection-hero">
      <img src={meta.image} alt={`${meta.title} fashion editorial`} />
      <div className="collection-overlay" />
      <div className="collection-copy">
        <span>{meta.eyebrow}</span>
        <h1>{meta.title}</h1>
        <p>{meta.desc}</p>
        <small>{meta.mood}</small>
      </div>
    </div> : <div className="shop-hero"><span className="eyebrow">THE VASTRAAI EDIT</span><h1>Shop Collection</h1><p>A considered collection across every style language.</p></div>}

    {meta && <div className="collection-intro"><div><span className="eyebrow">CURATED FOR YOU</span><h2>Explore the <em>{title.toLowerCase()} edit.</em></h2></div><div className="collection-chips">{(subcategories[cat]||[]).slice(0,8).map(x=><button key={x} onClick={()=>setQ(x)}>{x}</button>)}</div></div>}

    <div className="shop-toolbar">
      <button className="filter-btn"><SlidersHorizontal size={16}/> Filters</button>
      <div className="search-mini"><Search size={16}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the collection"/></div>
      <div className="toolbar-right">
        <select value={price} onChange={e=>setPrice(e.target.value)}><option value="">All prices</option><option value="1000">Under ₹1,000</option><option value="2500">Under ₹2,500</option><option value="5000">Under ₹5,000</option><option value="10000">Under ₹10,000</option></select>
        <select value={sort} onChange={e=>setSort(e.target.value)}><option value="popular">Popularity</option><option value="newest">Newest</option><option value="price-asc">Price low to high</option><option value="price-desc">Price high to low</option><option value="rating">Rating</option></select>
      </div>
    </div>

    <div className="shop-layout">
      <aside>
        <span className="eyebrow">CATEGORY</span>
        {['','Indian','Indo-Western','Western','Accessories'].map(x=><button className={cat===x?'active':''} key={x} onClick={()=>setCat(x)}>{x||'All products'}<ChevronDown size={14}/></button>)}
        <span className="eyebrow side-gap">PRICE</span>
        {['1000','2500','5000','10000'].map(x=><button key={x} onClick={()=>setPrice(x)}>Under ₹{Number(x).toLocaleString('en-IN')}</button>)}
        <button className="reset" onClick={reset}><RotateCcw size={14}/> Reset</button>
        <div className="stylist-side-card"><Sparkles size={17}/><b>Style it with AI</b><p>Upload a photo and build a complete look around any piece.</p><a href="/stylist">Open AI Stylist <ArrowUpRight size={13}/></a></div>
      </aside>
      <div className="shop-results">
        <div className="results-meta">{loading?'Loading…':`${products.length} pieces`} <span>{meta ? `Curated ${title} selection` : 'Showing the latest VastraAI edit'}</span></div>
        {loading?<div className="skeleton-grid">{Array.from({length:8}).map((_,i)=><div className="skeleton" key={i}/>)}</div>:products.length?<div className="product-grid">{products.map(p=><ProductCard key={p.id} p={p}/>)}</div>:<div className="empty"><Search/><h3>No pieces found</h3><p>Try a broader search or reset the filters.</p><button className="btn btn-dark" onClick={reset}>Reset filters</button></div>}
      </div>
    </div>
  </section>
}
