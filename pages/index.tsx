// pages/index.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section1">
        <div className="slider-text">
          <h2>Upgrade Your Wardrobe With Our Collection</h2>
          <p>
            <br />
            Eget neque aenean viverra aliquam tortor diam nunc. Dis pellentesque
            lectus quis velit fusce aenean nunc dui consectetur. Eu lorem est
            ullamcorper nisl amet non mollis.
            <br />
            <br />
          </p>
          <Link href="#" className="borderBlack" style={{ marginRight: "16px" }}>
            Buy Now
          </Link>
          <Link href="/products" className="borderWhite">
            View Detail
          </Link>
        </div>
        <div style={{ position: "relative" }}>
          <Image src="/images/img1.png" alt="Main" width={746} height={600} className="slider-image" />
          <Image src="/images/img2.png" alt="Overlay" width={300} height={300} className="slider-imageP" />
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="between">
          <h4>Featured Category</h4>
          <Link className="borderWhite" href="#">
            View Detail
          </Link>
        </div>
        <div className="between wrap">
          {[
            { src: "category1.png", title: "Electronics", count: "8.9k" },
            { src: "category2.png", title: "Fashion", count: "18.2k" },
            { src: "category3.png", title: "Action Figure", count: "4.1k" },
            { src: "category4.png", title: "Electronics", count: "22.9k" },
            { src: "category5.png", title: "Book", count: "128k" },
            { src: "category6.png", title: "Gaming", count: "89k" },
          ].map((cat, index) => (
            <div key={index} className="category-box">
              <Image src={`/images/${cat.src}`} alt={cat.title} width={100} height={100} />
              <h6>{cat.title}</h6>
              <p>{cat.count} products</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products */}
      <section className="section3">
        <div className="popular">
          <h4>Popular Product on Lenny</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Integer cursus cursus in</p>
        </div>
        <div className="post-container">
          {Array.from({ length: 10 }, (_, i) => ({
            title: [
              "Spy x Family Tshirt",
              "Green Man Jacket",
              "Iphone 14 Pro Max",
              "Oversized Tshirt",
              "Brown Woman Hoodie",
              "Airpod Pro 2022",
              "DJI Mini 3 Pro",
              "Ipad Pro Gen 3",
              "G535 Gaming Headset",
              "Logitech G713 Keyboard",
            ][i],
            price: ["26", "49", "1200", "48", "49", "459", "1200", "338", "179", "89"][i],
            img: `post${i + 1}.png`,
          })).map((item, i) => (
            <div key={i} className={i === 8 ? "box9" : i === 9 ? "box10" : ""}>
              <div className="post-box">
                <Image src={`/images/${item.img}`} alt={item.title} width={120} height={120} />
              </div>
              <div className="between">
                <h6>{item.title}</h6>
                <h6 className="nogoon">${item.price}</h6>
              </div>
              <p>North Purwokerto</p>
              <div className="between align-center">
                <Image src="/images/star.png" alt="rating" width={20} height={20} />
                <p>4.8</p>
                <Image src="/images/Ellipse.png" alt="dot" width={8} height={8} />
                <p>1,238 Sold</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view">
          <Link href="#" className="borderBlack">
            View All
          </Link>
        </div>
      </section>

      {/* iPad Section */}
      <section>
        <div className="ipad">
          <div>
            <Image src="/images/ipad.png" alt="iPad" width={400} height={400} />
          </div>
          <div>
            <h2>iPad Air Gen 5</h2>
            <p>
              <br />
              Lorem ipsum dolor sit amet consectetur. Integer <br />
              cursus cursus in sapien quam risus sed diam.
              <br />
              <br />
            </p>
            <Link href="#" className="borderBlack" style={{ marginRight: "16px" }}>
              Buy 900$
            </Link>
            <Link href="#" className="borderWhite">
              View Detail
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
