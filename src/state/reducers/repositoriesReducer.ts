interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {
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
