import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const PackageList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setSearchTerm(event.target.value);

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    dispatch(actionCreators.SearchRepositories(searchTerm));
  };

  return (
    <form onSubmit={onSearchSubmit}>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
      <button type="submit">Search</button>
    </form>
  );
};

export default PackageList;
