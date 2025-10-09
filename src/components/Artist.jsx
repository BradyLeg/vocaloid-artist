import AlbumCard from "./AlbumCard.jsx";
import CheckData from "./CheckData.jsx";

export default function Artist(props) {
    return (
        <div className="artist-card">
            <h2>{props.entry.name}</h2>
            <CheckData year={props.entry.activeSince} featured={props.entry.activeSince} />
            
            {props.showGrid && (
                <div className="album-grid">
                {props.entry.albums.map((album, index) => (
                    <AlbumCard key={index} entry={album} />
                ))}
                </div>
            )}
        </div>
    );
}