import React from "react";
import "./AlbumCard.css";

export default function AlbumCard({ album }) {
  return (
    <div className="album-card">
      <h3 className="album-title">{album.title}</h3>
      <p className="track-count">{album.tracklist.length} Tracks</p>
    </div>
  );
}
