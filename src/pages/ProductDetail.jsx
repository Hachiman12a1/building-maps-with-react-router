import React from 'react';
import { useParams } from 'react-router-dom';

ProductDetail.propTypes = {
    
};

function ProductDetail(props) {
    const params = useParams();

    return (
        <div>
            <h1>The Product Detail</h1>
            <p>{params.productId}</p>
        </div>
    );
}

export default ProductDetail;