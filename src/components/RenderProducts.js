import { useState, useEffect } from 'react';

export const RenderProducts = () => {
    const [card, setcard] = useState([]);
    const [loading, setloading] = useState([]);
    const fetchCards = () => {
        fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()).then(data => {
            setcard(data);
            setloading(false)
        });
    }
    useEffect(() => {
        console.log("Reloaded")
        fetchCards();
    }, [])

    return loading ? (
        
        <div class="container"> 
            <div class="row">
                <SetLoading/>
            </div>  
        </div>
           
    ) : (
        card.map(e => (
            <div class="card col-12 col-lg-3 col-sm-6 col-md-4 m-2 ww">
                <img src={e.images} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{e.title}</h5>
                    <p class="card-text">{e.description}</p>
                    <p class="card-text text-danger"><b>${e.price}</b></p>
                    <button class="btn btn-primary custom-width">View Detail</button>
                </div>
            </div>
        ))
    )
}
function SetLoading() {
    const [loading, setloading] = useState([]);
    const fetchProducts = () => {
        fetch('https://api.escuelajs.co/api/v1/products').then(res => res.json()).then(data => {
            setloading(data);
        });
    }
    useEffect(() => {
        console.log("Reloaded")
        fetchProducts();
    }, [])
    return (
        <>
            {
                loading.map(e => (
                    <div class="card col-12 col-lg-3 col-sm-6 col-md-4 m-2 ww"  aria-hidden="true">
                        <img src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="card-img-top" alt="..." width={'100px'} />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>
                            <button class="btn btn-primary custom-width"></button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}