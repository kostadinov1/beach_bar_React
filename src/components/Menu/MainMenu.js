import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMainMenu } from "../../services/menuService";


export default function MainMenu() {

    const [products, setProducts ] = useState([])
    const [cocktails, setCocktails] = useState([])
    const [alcohols, setAlcoholss] = useState([])
    const [beers, setBeers] = useState([])
    const [iceCreams, setIceCreams] = useState([])


    useEffect(()=>{
        getMainMenu().then(result =>{
            setProducts(result);
            setCocktails(result.filter((item) => item.category === 1))
            setAlcoholss(result.filter((item) => item.category === 2))
            setBeers(result.filter((item) => item.category === 3))
            setIceCreams(result.filter((item) => item.category === 4))


        });
    }, [])
    console.log(cocktails);

    const ProductCard = ({product}) => {
        return(
                <article>
                    <Link to="/" class="image featured"><img src={product.image_url} alt="" width="auto" height="400" /></Link>
                        <header>
                        <h3><a href="/"> {products.name}</a></h3>
                        <h4>Price: {product.price} lv.</h4>
                        </header>
                    <p>{product.description} </p>
                </article>
        )
    }

    return (
        <div id="down" class="wrapper style2">
            <div class="container">
                
            <section class="carousel">
                    <header>
                        <h2>Ice Cream</h2>
                    </header>
                    <div class="reel">
                    {iceCreams.map(product => <ProductCard key={product.id} product={product}/>)}

                    </div>
                </section>

                <section class="carousel">
                    <header>
                        <h2>Coctails</h2>
                    </header>
                    <div class="reel">
                    {cocktails.map(product => <ProductCard key={product.id} product={product}/>)}


                    </div>
                </section>

                <section class="carousel">
                    <header>
                        <h2>Beers</h2>
                    </header>
                    <div class="reel">
                    {beers.map(product => <ProductCard key={product.id} product={product}/>)}

                    </div>
                </section>
                
                
                <section class="carousel">
                    <header>
                        <h2>Alcohols</h2>
                    </header>
                    <div class="reel">

                    {alcohols.map(product => <ProductCard key={product.id} product={product}/>)}

                    </div>
                </section>





                <header>
                    <h2>Morbi ullamcorper et varius leo lacus</h2>
                    <p>Ipsum volutpat consectetur orci metus consequat imperdiet duis integer semper magna.</p>
                </header>
                <div class="row">
                    <article class="col-4 col-12-mobile special">
                            <a href="/" class="image featured"><img src="ice_cream.image_url" alt="" width="auto" height="400" /></a>
                            <header>
                                <h3><a href="/"> ice_cream.name</a></h3>
                            <h4>Price: cocktail.price| floatformatlv.</h4>
                        </header>
                        <p> cocktail.description </p>
                    </article>

                </div>
            </div>
        </div>
    );
}