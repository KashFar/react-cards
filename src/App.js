import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
// make sure it never changes from the original
const CardGroup = (props) => (
    // these are mostly just styling components
    <div className="cardGroup">
        {props.children}
    </div>
);

// copying components and pasting them into new projects is recommended and will save you a lot of work.
const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
        {/* // curly brackets tell the js that we're about to push some js in here. */}
            <div className= {`icon fa ${props.icon} card__descriptionIcon`} />
            <div className="card__descriptionText">{props.description} 
             {props.hint && <React.Fragment> <br/>{props.hint} </React.Fragment>}
             
             {/* remove this '!== undefined' from props.hint */}
             {/* {props.hint == undefined ? null : <React.Fragment> <br/>{props.hint} </React.Fragment>} */}
             {/* // we can get rid of ternary because it's too much code. */}
        </div>
        </div>
        <div className="card__price">{props.price}!</div>
    </div>
);

const App = () => (
    <CardGroup> 
        <Card price = "Free!" description= "Trial" icon = "fa-thumbs-o-up"/>    
        <Card price = "$10.00!" description= "Basic tier" icon = "fa-trophy-o-up" hint= "(most popular)"/>    
        <Card price = "$6,000.00!" description= "Advanced tier" icon = "fa-bolt" hint= "(only for enterprise-level professionals)" />    
    </CardGroup>
);

export default App;
