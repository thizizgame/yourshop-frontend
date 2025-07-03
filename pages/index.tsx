// pages/index.tsx

import { client } from '../lib/sanityClient'
import { allProductsQuery } from '../lib/queries'

export async function getServerSideProps() {
  const products = await client.fetch(allProductsQuery)
  return {
    props: { products },
  }
}

export default function Home({ products }: any) {
  return (
    <div className="container">
      <h1>Манай бүтээгдэхүүнүүд</h1>
      <div className="product-list">
        {products.map((product: any) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.title} width="200" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Үнэ: ${product.price}</p>
            <p>Ангилал: {product.category?.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
