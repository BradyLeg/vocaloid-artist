export default function Header({ toggleGrid, showGrid }) {
    return (
        <header className="header">
            <h1>Vocaloid Artists</h1>
            <button onClick={toggleGrid} className={showGrid ? "active" : ""}>
                {showGrid ? "Hide Album Grid" : "Show Album Grid"}
            </button>
        </header>
    );
}