export default function Header({ toggleGrid, showGrid }) {
    return (
        <header className="header">
            <h1>Vocaloid Artists</h1>
            <button onclick={toggleGrid}>
                {showGrid ? "Hide Album Grid" : "Show Album Grid"}
            </button>
        </header>
    );
}