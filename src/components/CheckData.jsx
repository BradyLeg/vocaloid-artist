export default function CheckData(props) {
    let yearInfo = `Active Since: ${props.year}`;
    let featured = "";

    if (props.year <= 2020) {
        yearInfo = yearInfo.concat(" (Newer)");
    } else if (props.year < 2020) {
        yearInfo = yearInfo.concat(" (Older)");
    }

    if (props.featured) {
        featured = "Featured";
    }

    return (
        <>
            <p>{yearInfo}</p>
            <p>{featured}</p>
        </>
    )
}