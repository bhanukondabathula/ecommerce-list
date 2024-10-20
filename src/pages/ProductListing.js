// src/pages/ProductListing.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import AddToCartModal from '../components/AddToCartModal';
import Pagination from '../components/Pagination';
import './ProductListing.css';
import plant1 from '../assets/plant1.png';
import plant2 from '../assets/plant2.png';
import plant3 from '../assets/plant3.png';
import plant4 from '../assets/plant4.png';
import plant5 from '../assets/plant5.png';
import plant6 from '../assets/plant6.png';
import plant7 from '../assets/plant7.png';
import plant8 from '../assets/plant8.png';
import plant9 from '../assets/plant9.png';
import plant10 from '../assets/plant10.png';


const ProductListing = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartModalVisible, setCartModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      id: 1,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__", 
    },
    {
      id: 2,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    },
    {
      id: 3,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    },
    {
      id: 4,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    },
    {
      id: 5,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    },
    {
      id: 6,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/5b18/a5fd/8150f68f85e80b39ed12017b8222dd1a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJEMdDt63Ic-AZhILS7rtSPXp~mLctW5OcS-6xQlJzZWv4ojnH8bvAJvZvqhnUj9prGamLSkO43C~YZavmZzx2YhF7Pb30i85Bv46q~529q6O9K-OOyA6tNw1BhEdNEo8vYaKGLQtxcZqjynXVeQgje6ZHcuGPs5EiRAeYjS5SBTJ3cCeHX6pglqDK-D~7~aPUCLUjfIySX82h2a18V~8xTsWXaGd-5zrmSgyOE9IbBjelMqJBQ1TVKkw9BWx1uM5LCXv4NJKM-IUjy3LbvQpVN4JS1CElh5A4JZIEl41DhtoA9XzlXbGnhDZ6urCG2kHuUcjmi9E~1alns-YT7lxA__",
    },
    {
      id: 7,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/5d1d/9008/57a26487b27ba64aecadd2f4d7e83e50?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1A-3swJ4YwcthBXqQLR~ciyuOmL1IZ7P40M1OLsKF~FiZA34DrWU36boYoYS39-CmQ2643Z76YmysIYXJTyGYJC7gKvauhhtEIvwaFnEh6hX-VZOn6tPtc9zViNZW5xgIRwcOagH7KwRYkrejo4XHzU8cO7qMPAsZab-4~j9jovvBM5g4Ttp9oTJX4iMtc8vEYTH1OY~vQ~FUvl~ABA2hbBHewQ8MqnQ-ihVEwZr9OFGJfsGAh7mWjVdNsUyvSmnaInIqMdOaXI7EJtH6oKjwtKZx5CBodSzI0o~gnW5wzkD8geFmhWKPiZ0eC4gIsnwZ9yi0BAg1M5oReXw8-jKw__",
    },{
      id: 8,
      name: "Monsterra",
      text: "Indoor Plant, Low maintenance",
      price: "₹299",
      image: "https://s3-alpha-sig.figma.com/img/6dd6/6981/e3d2febe446efa4b8f13ccd187d266f5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n7jT9n2DM7j~L0LbU5K78ODjnCjgLq~pJN3hkI9LKIWVuP696UDEjHo4TwyefwevvVMCQM-Dhrq9R1WkvyiEy-lJG7v3kwe6dgXxb18ncMGtmP0tSyhyYTw-D3XYbGQ29WLMtZyDLR57mGF4IL~1j1pQlRyoiuC02LYVuKty3U3Dt2SdbGAUFRV6brWKgfjZLvnV-bwIxXHWvXFzrgPuPe0eGCtmkUwvuXRXtJLbUdo1m3FJEqAjCVQaP0nDMz8FbZAdMVFB6W8w0APtXkk5KWDH608VDIuDzhpJMNx~mihSEPj8CgbAIz6ZkTk99aWX2dmQteWm9QKewphON1nOfQ__",
    },
  ];

  const handleViewProduct = (product) => {
    window.location.href = `/thank-you?product=${product.name}`;
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setCartModalVisible(true);
  };

  const handleCloseModal = () => {
    setCartModalVisible(false);
  };

  return (
    <div className="product-listing">
      <Header />
      <h1 className='nurserytext'>Nursery</h1>
      <div className='nursery-plants'>
        <div className='nursery-plantdetails'>
          <img src={plant1} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant2} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant3} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant4} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant5} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant6} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant7} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant8} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant9} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>
        <div className='nursery-plantdetails'>
          <img src={plant10} alt="nurseryPlants" className='plant' />
          <p className='plant-details'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   </p>
        </div>

      </div>
      <div className='product-page'>
        <div className='filter-box'>
          <div className='filters'>
            <p>Filter</p>
            <p>CLEAR ALL</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Type of Plants</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Price</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Nursery</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Ideal Plants Location</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Indoor/ Outdoor</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Maintenance</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Plant Size</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Water Schedule</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Color</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Seasonal</p>
            <p>+</p>
          </div>
          <hr className='hrline'/>
          <div className='filters'>
            <p>Light Efficient</p>
            <p>+</p>
          </div>


        </div>
        <div className="products">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onView={handleViewProduct} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className='viewmore'>
        <button className='view-button'>View More</button>
      </div>
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
      <Footer />
      <AddToCartModal product={selectedProduct} isVisible={cartModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductListing;
