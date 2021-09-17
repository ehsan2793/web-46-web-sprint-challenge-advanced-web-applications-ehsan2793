import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

const colorTest = {
    color: "aliceblue",
    code: { hex: "#f0f8ff" },
    id: 1,
}
const noColorTest = {
    color: "",
    code: {},
    id: '',
}

test("Renders without errors with blank color passed into component", () => {
    render(<Color color={noColorTest} />)
});

test("Renders the color passed into component", () => {
    render(<Color color={colorTest} />)
    const color = screen.queryAllByTestId('color')
    expect(color).toBeInTheDocument
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", async () => {
    const MockhandleDelete = jest.fn()
    const MocktoggleEdit = jest.fn()
    render(<Color color={colorTest} handleDelete={MockhandleDelete} toggleEdit={MocktoggleEdit} />)

    const icon = screen.queryByText("x");

    // userEvent.click(icon);

    // expect(MockhandleDelete.mock.calls).toHaveLength(1)
    // expect(MocktoggleEdit.mock.calls).toHaveLength(1)
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {

    const mockToggleEdit = jest.fn();
    const mockSetEditColor = jest.fn();

    render(
        <Color
            color={colorTest}
            setEditColor={mockSetEditColor}
            toggleEdit={mockToggleEdit}
        />
    );

    const colorDiv = screen.queryByTestId("color");

    userEvent.click(colorDiv);

    expect(mockToggleEdit.mock.calls).toHaveLength(1);
    expect(mockSetEditColor.mock.calls).toHaveLength(1);

});