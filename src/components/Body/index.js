import React, { useState } from 'react';
import Card from '../Card';
import Activities from '../../assets/activities.json';

const Body = () => {
    return( 
        <section class="body">
            <div>
                {Activities.map(activity => (
                    <Card
                        id={activity.id}
                        movie={activity.movie}
                        dinner={activity.dinner}
                        dessert={activity.dessert}
                        drink={activity.drink}
                        game={activity.game}
                    />
                ))}
            </div>
        </section>
    )
}

export default Body;