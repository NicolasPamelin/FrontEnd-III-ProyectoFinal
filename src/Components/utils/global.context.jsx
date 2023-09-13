import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ContextGlobal = createContext();

const themes = {
  dark: {
    theme: false,
  },
  light: {
    theme: true,
  },
};

const initialThemeState = themes.light;
const initialFavState = JSON.parse(localStorage.getItem("favs")) || [];
const initialApiState = { dentistList: [], dentistDetail: {} };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK":
      return themes.dark;
    case "SWITCH_LIGHT":
      return themes.light;
    default:
      throw new Error();
  }
};

const favReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return [...state, action.payload];
    default:
      throw new Error();
  }
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {
        dentistList: action.payload,
        dentistDetail: state.dentistDetail,
      };
    case "GET_DENTIST":
      return { dentistDetail: action.payload, dentistList: state.dentistList };
    default:
      throw new Error();
  }
};

const ContextProvider = ({ children }) => {
  const [details, setDetails] = useState();
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState);
  const [favState, favDispatch] = useReducer(favReducer, initialFavState);
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    initialThemeState
  );
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favState));
  }, [favState]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => apiDispatch({ type: "GET_DENTISTS", payload: data }));
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        apiState,
        apiDispatch,
        favState,
        favDispatch,
        themeState,
        themeDispatch,
        details,
        setDetails,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useDentistStates = () => useContext(ContextGlobal);
