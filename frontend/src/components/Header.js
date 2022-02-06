import React from 'react';

export default function Header(props){
    const {countCartItems} = props
    return (
    <header className="row block center">
        <div>
                <h1>GRACE SHOPPER - Fresh fruits from around the world, at your doorstep </h1>
        </div>
        <div>
            <a href="#/cart">
                
                Cart { ' '}
                {countCartItems? (
                    <button className="badge">{countCartItems}</button>
                ):(
                    ''
                )}
                </a> 
            
            
            <a href="#/signin">Sign In</a>

        </div>
    </header>
    
        );
}