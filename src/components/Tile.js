

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
            {paragraphs.map(tekst => <p key={tekst.id}>{tekst.id}{tekst}</p>)}
        </section>
    )

}

export default Tile;