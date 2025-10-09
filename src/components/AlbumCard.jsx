// import "./AlbumCard.css";
import "../index.css";

export default function AlbumCard( album ) {
  return (
    <div className="album-card">
      <div className="album-square">
        <h3 className="album-title">{album.title}</h3>
      </div>

      {/* {album.tracklist?.length > 0 && (
        <p className="track-count">{album.tracklist.length} Tracks</p>
      )} */}
    </div>
  );
}
