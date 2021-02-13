import { useState } from "react";

const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(event.target.value);

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void =>
    event.preventDefault();

  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
      <button type="submit">Search</button>
    </form>
  );
};

export default PackageList;
