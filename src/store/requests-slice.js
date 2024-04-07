import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  andrew: { id: 'andrew', requests: [] },
  bob: { id: 'bob', requests: [] },
  kate: { id: 'kate', requests: [] },
  russel: { id: 'russel', requests: [] },
};

const requestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequestToUser: (state, action) => {
      if (action.payload.userId in state) {
        state[action.payload.userId].requests.push(action.payload.request);
      } else {
        return {
          ...state,
          [action.payload.userId]: {
            id: action.payload.userId,
            requests: [action.payload.request],
          },
        };
      }
    },
    editRequest: (state, action) => {
      const indexOfRequest = state[action.payload.userId].requests.findIndex(
        (request) => request.id === action.payload.request.id,
      );

      if (indexOfRequest >= 0) {
        state[action.payload.userId].requests[indexOfRequest] =
          action.payload.request;
      }
    },
    deleteRequest: (state, action) => {
      state[action.payload.userId].requests = state[
        action.payload.userId
      ].requests.filter((request) => request.id !== action.payload.requestId);
    },
  },
});

export const { addRequestToUser, deleteRequest, editRequest } =
  requestsSlice.actions;

export default requestsSlice.reducer;
