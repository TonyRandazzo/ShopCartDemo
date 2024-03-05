import React, { useState } from 'react';

const Elements = ({ addToCart }) => {
    const [cart, setCart] = useState([]);
    const products = [
        { name: 'Pizza', description: 'Delicious pizza', image:"https://png.pngtree.com/png-clipart/20230412/original/pngtree-modern-kitchen-food-boxed-cheese-lunch-pizza-png-image_9048155.png", price: 10 },
        { name: 'Panino', description: 'Tasty sandwich', image:"https://pngimg.com/d/burger_sandwich_PNG10529.png", price: 5 },
        { name: 'Kebab', description: 'Savory kebab', image:"https://static.vecteezy.com/system/resources/previews/025/268/633/original/kebab-with-ai-generated-free-png.png", price: 8 },
    ];


    const [quantities, setQuantities] = useState({});

    const addToCartHandler = (product, quantity) => {
        const parsedQuantity = parseInt(quantity, 10);
        if (!isNaN(parsedQuantity)) {
            const existingCartItem = cart.find(item => item.name === product.name);
    
            if (existingCartItem) {
                addToCart(product, existingCartItem.quantity + parsedQuantity);
            } else {
                addToCart(product, parsedQuantity);
            }
            setQuantities({ ...quantities, [product.name]: 0 });
        }
    };

    const updateQuantity = (productName, newQuantity) => {
        setQuantities({ ...quantities, [productName]: newQuantity });
    };

    return (
        <div className='contenitore'>
            <div className="elementi max-w-screen-md mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Products</h2>
                <div className="flex">
                    {products.map((product) => (
                        <div key={product.name} className="w-1/2 p-2">
                            <h2 className="text-2xl font-bold text-red-500 mb-2">{product.name}</h2>
                            <img src={product.image}></img>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                            <input
                                type="number"
                                min="0"
                                value={quantities[product.name]}
                                onChange={(e) => updateQuantity(product.name, parseInt(e.target.value, 10))}
                                className="border p-2 mt-2 w-20"
                            />
                            <button onClick={() => addToCartHandler(product, quantities[product.name])} className="bg-yellow-500 text-white p-2 mt-2 transform transition-all duration-300 hover:bg-orange-500 hover:scale-110">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Elements;