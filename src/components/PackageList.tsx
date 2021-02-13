import { useState } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";

const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { searchRepositories } = useActions();
  const { data, isLoading, error } = useSelector(
    (state: any) => state.repositories
  );
 
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setSearchTerm(event.target.value);

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    searchRepositories(searchTerm);
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
      <button type="submit">
        Search
      </button>
    </form>
  );
};

export default PackageList;
