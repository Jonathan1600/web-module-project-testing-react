import React from 'react';
import { getByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchShow from "../../api/fetchShow"

import Display from "../Display"
import Show from '../Show';

jest.mock("../../api/fetchShow")


test("renders without error", () => {
    render(<Display />)
});

const mockData = {

    //add in approprate test data structure here.
    image: {
        medium: "",
        original: ""
    },
    name: "Stranger Things",
    seasons: [
        { id: 0, name: "Season 1", episodes: [] },
        { id: 1, name: "Season 2", episodes: [] },
        { id: 2, name: "Season 3", episodes: [] },
        { id: 3, name: "Season 4", episodes: [] },
        { id: 4, name: "Season 5", episodes: [] }
    ],
    summary: "Great Show"

};

test("fetch", async () => {
    fetchShow.mockResolvedValueOnce(mockData)
    render(<Display />)

    const button = screen.getByRole('button')
    userEvent.click(button)

    await waitFor(() => expect(screen.getByTestId('show-container')).toBeTruthy());


});

test("fetch", async () => {
    fetchShow.mockResolvedValueOnce(mockData)
    render(<Display />)
    const button = screen.getByRole('button')
    userEvent.click(button)
    const seasonLength = mockData.seasons.length;
    await waitFor(() => expect(screen.getAllByTestId("season-option")).toHaveLength(seasonLength));


});













///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.