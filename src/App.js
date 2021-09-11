import React from 'react';
import './App.css';
import Button from './components/Button';
import Product from "./components/Product";
import Tile from "./components/Tile";

import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {

    return (

        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button text="to the collection"/>
                <Button text="shop all bags"/>
                <Button text="pre-orders" disabled={true}/>
            </nav>

            <main>
                <Product name="the handy bag" image={bag_1} labeltxt="Best seller" prijs="&euro; 400,-"/>
                <Product name="the stylish bag" image={bag_2} labeltxt="Best seller" prijs="&euro; 250,-"/>
                <Product name="the simple bag" image={bag_3} labeltxt="New collection" prijs="&euro; 300,-"/>
                <Product name="the trendy bag" image={bag_4} labeltxt="New collection" prijs="&euro; 150,-"/>
            </main>

            {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores enim harum, non praesentium quibusdam quod ratione reprehenderit sapiente sequi sit ut voluptate. Ad assumenda eaque omnis quisquam veniam?*/}
            <footer>
                <Tile image={null} title="THE BRAND" paragraphs={[
                    "Een-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores enim harum, non praesentium quibusdam quod ratione reprehenderit sapiente sequi sit ut voluptate.",
                    "Twee-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores enim harum, non praesentium quibusdam quod ratione reprehenderit sapiente sequi sit ut voluptate."
                ]}/>

                <Tile image={brand}/>
                <Tile image={our_story}/>

                <Tile image={null} title="OUR STORY" paragraphs={[
                    "Een-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores enim harum, non praesentium quibusdam quod ratione reprehenderit sapiente sequi sit ut voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad dolores enim harum, non praesentium quibusdam quod ratione reprehenderit sapiente sequi sit ut voluptate."
                ]}/>
            </footer>
        </>
    );
}

export default App;



