import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        {
            id: 1,
            name: "Stage",
            value: "stage",
        },
        {
            id: 2,
            name: "Emploi",
            value: "emploi",
        },
        {
            id: 3,
            name: "Stage",
            value: "stage",
        },
        {
            id: 4,
            name: "Emploi",
            value: "emploi",
        },
    ],
    companySize: [],
};

export const employerSlice = createSlice({
    name: "employer",
    initialState,
    reducers: {},
});

export const {} = employerSlice.actions;
export default employerSlice.reducer;
