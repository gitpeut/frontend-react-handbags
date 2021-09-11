

function Tile({image, title, paragraphs}) {

    if (image) {
        return (
            <section>
                <img src={image} alt=""/>
            </section>
        )
    }

    return (
        <section>
            <h2>{title}</h2>
            {/*for some reason this works too, but I cant find any docs on map inputting an object with the id attribute */}
            {/*{paragraphs.map( (tekst =><p key={tekst.id}>{tekst.id}{tekst}</p> )  }*/}
            {paragraphs.map( (tekst,id) =><p key={'tekst'+id}>{id}{tekst}</p> )  }
        </section>
    )

}

export default Tile;


