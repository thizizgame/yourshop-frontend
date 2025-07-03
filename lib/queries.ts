export const allProductsQuery = `*[_type == "product"]{
  _id,
  title,
  description,
  price,
  "imageUrl": imageUrl.asset->url,
  category->{
    title
  }
}`
