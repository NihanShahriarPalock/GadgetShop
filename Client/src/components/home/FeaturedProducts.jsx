import ProductCard from "./ProductCard"


const FeaturedProducts = () => {
  return (
    <div className='container'>
      <h2 className='text-center font-bold text-2xl'>Featured Products</h2>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-1 lg:gap-4 my-2 lg:my-8'>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default FeaturedProducts