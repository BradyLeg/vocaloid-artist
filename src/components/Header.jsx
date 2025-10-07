export default function Header() {
    return (
        <header>
            <h1>Vocaloid Artists</h1>
        <button onClick={toggleGrid}>
            {showGrid ? "Hide Album Grid" : "Show Album Grid"}
        </button>
        </header>
    )
}