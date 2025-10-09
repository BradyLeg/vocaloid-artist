// import "./AlbumCard.css";
import "../index.css";

export default function AlbumCard(props) {
  return (
    <div className="album-card">
      <div className="album-square">
        <h3 className="album-title">{props.entry.title}</h3>
      </div>

      {props.entry.tracklist?.length > 0 && (
        <p className="track-count">{props.entry.tracklist.length} Tracks</p>
      )}
    </div>
  );
}
