import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../components/Product";

const Products = () => {
    const [searchParams] = useSearchParams();
    const searchQuery = (searchParams.get("q") || "").trim().toLowerCase();
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [ratingOrder, setRatingOrder] = useState('');
    const [pageState, setPageState] = useState({ query: searchQuery, page: 1 });
    const currentPage = pageState.query === searchQuery ? pageState.page : 1;
    const setCurrentPage = page => setPageState({ query: searchQuery, page });
    const [productsPerPage] = useState(4)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    const matchingProducts = products.filter(product =>
        `${product.title} ${product.category}`.toLowerCase().includes(searchQuery)
    );

    const sortedByPrice = [...matchingProducts].sort((a, b) => {
        if (sortOrder === 'LowToHigh') return a.price - b.price;
        if (sortOrder === 'HighToLow') return b.price - a.price;
        if (ratingOrder === 'LowToHighrating') return a.rating.rate - b.rating.rate;
        if (ratingOrder === 'HighToLowrating') return b.rating.rate - a.rating.rate;
        return 0;
    });


    const totalPages = Math.ceil(sortedByPrice.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = sortedByPrice.slice(indexOfFirstProduct, indexOfLastProduct);


    const PreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const NextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <>
            <label>Sort By Price :</label>
            <select value={sortOrder} onChange={(e) => {
                setSortOrder(e.target.value);
                setCurrentPage(1);
            }}>
                <option>Default</option>
                <option value={'LowToHigh'}>Price: Low To High</option>
                <option value={'HighToLow'}>Price: High To Low</option>
            </select>

            <label>Sort By Rating :</label>
            <select value={ratingOrder} onChange={(e) => {
                setRatingOrder(e.target.value);
                setCurrentPage(1);
            }}>
                <option>Default</option>
                <option value={'LowToHighrating'}>Price: Low To High</option>
                <option value={'HighToLowrating'}>Price: High To Low</option>
            </select>

            <div className="products-heading" style={{ textAlign: 'center', margin: '20px', fontWeight: 'bolder', fontSize: '30px' }}>
                <h2>Discover Our Products</h2>
                <p>
                    {searchQuery
                        ? `${matchingProducts.length} results for "${searchParams.get("q")}"`
                        : "Explore our collection and find something you love."}
                </p>
            </div>
            <div className="card-prod">
                {currentProducts.map(prod => (
                    <Product
                        key={prod.id}
                        title={prod.title}
                        category={prod.category}
                        image={prod.image}
                        price={prod.price}
                        rating={prod.rating.rate}
                    />
                ))}
            </div>
            {matchingProducts.length === 0 && (
                <p className="no-search-results" role="status">No products match your search.</p>
            )}

            {matchingProducts.length > 0 && (
                <div className="pagination">
                    <button onClick={PreviousPage}
                        disabled={currentPage === 1}>
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={NextPage}
                        disabled={currentPage === totalPages || totalPages === 0}>
                        Next
                    </button>
                </div>
            )}
        </>
    )
}

export default Products;