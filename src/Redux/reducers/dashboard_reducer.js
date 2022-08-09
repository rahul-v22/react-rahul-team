import { DashboardTypes } from "../action_types/dashboard_types";

const initialState = {
  UserDataRequests: [],
};

export default function DashboardReducer(state = initialState, action = null) {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case DashboardTypes.USER_DATA_REQUEST_SUCCESS: {
      return {
        ...state,
        UserDataRequests: action.data
      };
    }
    case DashboardTypes.PERSON_REQUST_SUCCESS: {
      return {
        ...state,
        Persondata: action.data
      };
    }
    case DashboardTypes.POST_SUCCESS: {
      state.UserDataRequests.push(action.data)
      return {
        ...state,
      };
    }
    case DashboardTypes.DELETE_SUCCESS: {
      state.UserDataRequests = action.data;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
