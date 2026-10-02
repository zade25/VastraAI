export const categoryMeta = {
  Indian: {
    title: 'Indian',
    eyebrow: 'THE ROYAL INDIAN EDIT',
    desc: 'Rich Banarasi weaves, jewel tones, heirloom silhouettes and modern ethnic dressing.',
    image: 'https://images.unsplash.com/photo-1756483492198-8ca91227489b?auto=format&fit=crop&w=1400&q=90',
    mood: 'Royal • Heritage • Festive',
  },
  'Indo-Western': {
    title: 'Indo-Western',
    eyebrow: 'TRADITION, REFRAMED',
    desc: 'Sarees, tailoring, denim and contemporary separates styled with an unmistakably Indian point of view.',
    image: 'https://images.unsplash.com/photo-1765436607847-dbbacea6cebd?auto=format&fit=crop&w=1400&q=90',
    mood: 'Fusion • Contemporary • Effortless',
  },
  Western: {
    title: 'Western',
    eyebrow: 'THE MODERN WARDROBE',
    desc: 'Editorial dresses, tailoring, denim, co-ords and everyday pieces with a polished fashion-studio feel.',
    image: 'https://images.unsplash.com/photo-1762343287001-b5c8ed1bf773?auto=format&fit=crop&w=1400&q=90',
    mood: 'Modern • Tailored • Editorial',
  },
  Accessories: {
    title: 'Accessories',
    eyebrow: 'THE FINISHING EDIT',
    desc: 'Jewellery, bags, shoes and finishing touches selected to complete Indian, Indo-Western and Western looks.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=90',
    mood: 'Details • Polish • Personality',
  },
};

export const categories = Object.entries(categoryMeta).slice(0, 3).map(([id, meta]) => ({ id, ...meta }));
export const outfits={Indian:['Saree','Anarkali','Lehenga','Kurti','Salwar Suit','Sharara'], 'Indo-Western':['Saree + Blazer','Saree + Sneakers','Kurti + Jeans','Lehenga + Crop Top','Dhoti Pants + Top','Ethnic Skirt + Shirt','Jacket + Saree'],Western:['Dress','Jeans + Top','Blazer + Trousers','Skirt + Top','Jumpsuit','Co-ord']};
export const occasions=['College','Office','Casual','Party','Wedding','Festival','Date','Dinner','Travel','Traditional Event'];
export const styles=['Minimal','Elegant','Trendy','Traditional','Royal','Streetwear','Chic','Festive','Bold'];
export const colors=['Black','White','Ivory','Beige','Blue','Pink','Red','Green','Purple','Gold','Silver','Burgundy'];
export const budgets=['Under ₹1,000','₹1,000–₹2,500','₹2,500–₹5,000','₹5,000–₹10,000','₹10,000+'];
export const accessoryChoices=['Earrings','Necklace','Bangles','Bracelet','Rings','Watch','Bag','Clutch','Sunglasses','Shoes','Heels','Sneakers','Ethnic footwear'];
