// import "./AlbumCard.css";

export default function AlbumCard( album ) {
  return (
    <div className="album-card">
      <div className="album-square">
        <h3 className="album-title">{album.entry.title}</h3>
      </div>

      {album.tracklist?.length > 0 && (
        <p className="track-count">{album.entry.tracklist.length} Tracks</p>
      )}
    </div>
  );
}
