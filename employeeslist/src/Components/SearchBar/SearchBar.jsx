export default function SearchBar({ searchInput, searchChange }) {
  return (
    <>
      <input
        type="text"
        placeholder="Entrez un nom"
        onChange={searchChange}
        value={searchInput}
      />
    </>
  );
}
