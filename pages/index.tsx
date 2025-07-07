import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { client } from '@/lib/sanityClient';
import { allProductsQuery } from '@/lib/queries';

export async function getServerSideProps() {
  try {
    const products = await client.fetch(allProductsQuery);
    return {
      props: {
        products: products ?? [],
      },
    };
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}

export default function HomePage({ products }: any) {
  return (
    <>
      <Head>
        <title>YourShop | Home</title>
      </Head>

      <Header />

      <main>
        {/* CATEGORY SECTION */}
        <section>
          <div className="between">
            <h4>Featured Category</h4>
            <a className="borderWhite" href="#">View Detail</a>
          </div>
          <div className="between wrap">
            <div className="category-box">
              <img src="/images/category1.png" alt="Electronics" />
              <h6>Electronics</h6>
              <p>8,9k products</p>
            </div>
            <div className="category-box">
              <img src="/images/category2.png" alt="Fashion" />
              <h6>Fashion</h6>
              <p>18,2k products</p>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className="section3">
          <div className="popular">
            <h4>Манай бүтээгдэхүүнүүд</h4>
            <p>Sanity CMS-ээс ирсэн динамик бүтээгдэхүүнүүд</p>
          </div>

          <div className="post-container">
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product: any) => (
                <div key={product._id}>
                  <div className="post-box">
                    <img src={product.imageUrl} alt={product.title} />
                  </div>
                  <div className="between">
                    <h6>{product.title}</h6>
                    <h6 className="nogoon">${product.price}</h6>
                  </div>
                  <p>{product.description}</p>
                  <div className="between align-center">
                    <img src="/images/star.png" alt="Rating" />
                    <p>4.8</p>
                    <img src="/images/Ellipse.png" alt="Dot" />
                    <p>{product.category?.title}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ padding: '20px' }}>Бүтээгдэхүүн олдсонгүй. heh odoo bol gishiime</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
