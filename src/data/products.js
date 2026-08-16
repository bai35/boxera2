export const brands = ['Todos', 'iPhone', 'Samsung', 'iPad', 'Watch', 'MacBook']


export const products = [
  {
    id: 'iph-15-pro',
    brand: 'iPhone',
    name: 'iPhone 15 Pro',
    spec: '128GB · Titanio Natural',
    price: 4599,
    oldPrice: 4999,
    tag: 'Nuevo',
    color: '#8a8a86',
	
  },
  {
    id: 'iph-15',
    brand: 'iPhone',
    name: 'iPhone 15',
    spec: '128GB · Rosa',
    price: 3799,
    color: '#f2c9d1',
  },
  {
    id: 'iph-14',
    brand: 'iPhone',
    name: 'iPhone 14',
    spec: '128GB · Medianoche',
    price: 3199,
    oldPrice: 3499,
    tag: 'Oferta',
    color: '#2b2d33',
  },
  {
    id: 'sam-s24-ultra',
    brand: 'Samsung',
    name: 'Galaxy S24 Ultra',
    spec: '256GB · Titanio Gris',
    price: 4399,
    tag: 'Nuevo',
    color: '#5b5d63',
	
  },
  {
    id: 'sam-s23',
    brand: 'Samsung',
    name: 'Galaxy S23',
    spec: '128GB · Crema',
    price: 2799,
    oldPrice: 3199,
    tag: 'Oferta',
    color: '#e7dcc9',
  },
  {
    id: 'sam-a54',
    brand: 'Samsung',
    name: 'Galaxy A54',
    spec: '128GB · Violeta',
    price: 1399,
    color: '#a99bd6',
  },
  {
    id: 'ipad-air',
    brand: 'iPad',
    name: 'iPad Air',
    spec: '64GB · Wi-Fi · Azul',
    price: 2599,
    color: '#9db6cf',
  },
  {
    id: 'ipad-10',
    brand: 'iPad',
    name: 'iPad (10ª gen)',
    spec: '64GB · Wi-Fi · Plata',
    price: 1799,
    color: '#d6d6d6',
  },
  {
    id: 'watch-s9',
    brand: 'Watch',
    name: 'Apple Watch Series 9',
    spec: '45mm · GPS · Medianoche',
    price: 1899,
    tag: 'Nuevo',
    color: '#2b2d33',
	
  },
  {
    id: 'watch-se',
    brand: 'Watch',
    name: 'Apple Watch SE',
    spec: '40mm · GPS · Starlight',
    price: 1199,
    color: '#e9e4d8',
  },
  {
    id: 'mba-m2',
    brand: 'MacBook',
    name: 'MacBook Air M2',
    spec: '256GB · 8GB RAM · Gris espacial',
    price: 5199,
    color: '#5b5d63',
  },
  {
    id: 'mbp-m3',
    brand: 'MacBook',
    name: 'MacBook Pro M3',
    spec: '512GB · 14" · Negro espacial',
    price: 8499,
    tag: 'Nuevo',
    color: '#1c1d20',
  },
]

const imageFiles = import.meta.glob('../assets/products/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
})

function findImageFor(id) {
  const entry = Object.entries(imageFiles).find(([path]) => {
    const filename = path.split('/').pop().replace(/\.[^/.]+$/, '')
    return filename === id
  })
  return entry ? entry[1] : null
}

products.forEach((product) => {
  const found = findImageFor(product.id)
  if (found) product.image = found
})