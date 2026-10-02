import {ArrowUpRight,BookOpen} from 'lucide-react';

const posts = [
  {
    category:'STYLE GUIDE',
    title:'How to Build a Royal Indian Look',
    excerpt:'A simple guide to pairing rich fabrics, refined jewellery and modern silhouettes without overdoing the look.',
    image:'https://images.unsplash.com/photo-1769500801406-d5abac0429c3?auto=format&fit=crop&w=900&q=88',
    read:'5 min read'
  },
  {
    category:'VASTRAAI EDIT',
    title:'Indian, Indo-Western or Western?',
    excerpt:'Discover the styling language that fits your occasion, mood and everyday wardrobe.',
    image:'https://images.unsplash.com/photo-1765436607847-dbbacea6cebd?auto=format&fit=crop&w=900&q=88',
    read:'4 min read'
  },
  {
    category:'STYLE NOTES',
    title:'The Art of Finishing a Look',
    excerpt:'The right bag, jewellery, shoes and small details can turn a good outfit into a complete one.',
    image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=88',
    read:'3 min read'
  }
];

export default function Blog(){
  return <main className="blog-page">
    <section className="blog-hero">
      <span className="eyebrow"><BookOpen size={14}/> THE VASTRAAI JOURNAL</span>
      <h1>Style, culture & <em>the art of dressing.</em></h1>
      <p>Thoughtful fashion notes, styling ideas and inspiration for the wardrobe you are building.</p>
    </section>
    <section className="blog-grid-section">
      <div className="blog-grid">
        {posts.map(post=><article className="blog-card" key={post.title}>
          <img src={post.image} alt={post.title}/>
          <div className="blog-card-copy">
            <div className="blog-meta"><span>{post.category}</span><small>{post.read}</small></div>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a className="text-link" href="#read">Read article <ArrowUpRight size={15}/></a>
          </div>
        </article>)}
      </div>
    </section>
  </main>
}
