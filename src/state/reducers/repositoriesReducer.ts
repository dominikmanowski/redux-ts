interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

interface SearchRepositoriesAction {
  type: "search_repositories";
}
interface SearchRepositoriesSuccessAction {
  type: "search_repositories_success";
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: "search_repositories_error";
  payload: string;
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case "search_repositories":
      return { isLoading: true, error: null, data: [] };
    case "search_repositories_success":
      return { isLoading: false, error: null, data: action.payload };
    case "search_repositories_error":
      return { isLoading: true, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
