import {createSlice} from '@reduxjs/toolkit';
import {evaluate} from 'mathjs';

const initialState = {
    digits : "",
    total : 0,
}

const operationsSlice = createSlice({
    name: "operations",
    initialState:initialState,
    reducers:{
        inputdigits:(state,action) => {
            if (state.digits === '0') {
                state.digits = action.payload;
              } else {
                state.digits += action.payload;
              }
        },
        inputOperator: (state, action) => {
            state.digits += action.payload;
          },
        clear:(state) => {
            state.digits = "";
            state.total = 0;
        },
        equals:(state) => {
            try {
                if (state.digits) {
                  const result = evaluate(state.digits);
                  state.total = result.toString();
                  state.digits = '';
                } else {
                  state.displayValue = '0';
                }
                } catch (error) {
                    state.displayValue = 'Error';
                    state.digits = '';
                    console.error('Invalid expression:', error);
                  }
        }
    }
})

export const operationsReducers = operationsSlice.reducer;
export const operationsActions = operationsSlice.actions;
export const operationsSelectors = (state) => state.operationsReducers;