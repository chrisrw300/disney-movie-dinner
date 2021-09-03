import React from 'react';

function Card(props) {
    return( 
        <section class="card-wrapper">
            <div>
                <h2 class="movie-title">{props.movie}</h2>
                <p class="dinner-title">{props.dinner}</p>
                <p class="dessert-title">{props.dessert}</p>
                <p class="drink-title">{props.drink}</p>
                <p class="game-title">{props.game}</p>
            </div>
        </section>
    )
}

export default Card;