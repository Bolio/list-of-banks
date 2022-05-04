const initialState = {
  listBanks: [],
  fetching: false,
  success: false,
  error: false,
  errorMessage: "",
};

// Actions
const FETCH_INFORMATION_BANKS = "modules/listBanks/FETCH_INFORMATION_BANKS";

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_INFORMATION_BANKS:
      return { ...state, listBanks: action.payload };
    default:
      return state;
  }
}

// Action Creators
export const fetchBanksInformation = (payload) => {
  return {
    type: FETCH_INFORMATION_BANKS,
    payload,
  };
};

// Epics
export const fetchInformationBanksThunk = () => async (dispatch) => {
  try {
    if (!localStorage.getItem("LIST_PERSISTED_DATA")) {
      console.log("FROM API");
      const urlAPI = `https://api.jsonbin.io/b/604006e581087a6a8b95b784`;
      const responseAPI = await fetch(urlAPI);
      const resultAPI = await responseAPI.json();
      dispatch(fetchBanksInformation(resultAPI));
      localStorage.setItem("LIST_PERSISTED_DATA", JSON.stringify(resultAPI));
    } else {
      console.log("FROM LOCALSTORAGE");
      const resultStorage = JSON.parse(
        localStorage.getItem("LIST_PERSISTED_DATA")
      );
      dispatch(fetchBanksInformation(resultStorage));
    }
  } catch (error) {
    console.log(error);
  }
};
