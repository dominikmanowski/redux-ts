import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useTypedSelector";
const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { searchRepositories } = useActions();
  const { data, isLoading, error } = useSelector((state) => state.repositories);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setSearchTerm(event.target.value);

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(searchTerm);
  };

  return (
    <>
      <form onSubmit={onSearchSubmit}>
        <input
          type="text"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {error && <span>{error}</span>}
      {isLoading && <span>Loading...</span>}
      {data.length > 0 && (
        <ul>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PackageList;
