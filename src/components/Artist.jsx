import AlbumCard from "./AlbumCard.jsx";
import CheckData from "./CheckData.jsx";

export default function Artist(props) {
    return (
        <div>
            <h2>{props.entry.name}</h2>
            <CheckData year={props.entry.activeSince} featured={props.entry.activeSince} />
            <AlbumCard entry={props.entry.albums} />
        </div>
    )
}