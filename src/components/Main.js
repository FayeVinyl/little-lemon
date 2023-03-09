import React from 'react';

function Main () {

    return (
        <main>
            <section className="heroSection" style={{backgroundColor: '#495E57'}}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>

                <p>We are  family owned Mediterranean restaurant focused on traditional recipes served with a moden twist</p>
                <button>Reserve a table</button>
                <img></img>

            </section>
            <section className="Specials" style={{backgroundColor: '#EDEFEE'}}>
                <h2>This weeks specials!</h2>

                <button>Online Menu</button>
                <h2>Specials</h2>
                cards x3
            </section>
            <section className="testimonials" style={{backgroundColor: '#495E57'}}>
                <h2>Testimonials</h2>
                user/rating cards x4
            </section>
            <section className="about" style={{backgroundColor: '#EDEFEE'}}>
                <h3>Little Lemon</h3>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
            </section>

        </main>
    )

}

export default Main;