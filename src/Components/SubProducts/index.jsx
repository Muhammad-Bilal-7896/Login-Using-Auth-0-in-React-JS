import React from "react";
//Importing History for Routing to Sub-Products of Products
import { useHistory } from 'react-router-dom';
//Importing the All Products JSON
import SubProduct1 from "../../data/SubProducts/1/SubProduct1";
//Importing the product component which is to be looped
import Product from "../SingleProduct";
//Importing the stylesheet
import "./style.scss";

const SubProducts = (props) => {
    const history = useHistory();

    const MoveTo = (path) => {
        // alert(path)
        history.push(`${path}`)
    }
    return (
        <div className="container">
            <h3 className="pHeading">{props.infoText}</h3>
            {/* Rendering the Products */}
            <ul className="ml-4 mt-4">
                {SubProduct1.map((JSON, i) => {
                    return <li onClick={() => MoveTo(`/Products/bio-plus®ProcessComponents/ProcessHoseAssemblies&HoseFittings`)} className={`AllProductsContainer`} key={i}>
                        <div>
                            <Product
                                index={JSON.id}
                                text={JSON.text}
                                url={JSON.url}
                            />
                        </div>
                    </li>
                })}
            </ul>
            {/* Rendering the Products */}
        </div>
    )
}
export default SubProducts;