import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import BubblePage from './BubblePage';
import fetchColorService from '../services//fetchColorService.js'
jest.mock('../services//fetchColorService.js')

test("Renders without errors", () => {
    render(<BubblePage />)
});

test("Renders appropriate number of colors passed in through mock", async () => {
    //Keep in mind that our service is called on mount for this component.
    fetchColorService.mockResolvedValueOnce({
        color: [
            {
                color: "aliceblue",
                code: { hex: '#f0f8ff' },
            },
            {
                color: "limegreen",
                code: { hex: "#99ddbc" },
            },
            {
                color: "blanchedalmond",
                code: { hex: "#ffebcd" },
            }
        ]
    })
    render(<BubblePage />)
    // const colors = await screen.queryByTestId('color');
    // expect(colors).toBeTruthy()
});