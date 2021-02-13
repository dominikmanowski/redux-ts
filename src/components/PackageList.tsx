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
    <form onSubmit={onSearchSubmit}>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
      <button type="submit">Search</button>
    </form>
  );
};

export default PackageList;
