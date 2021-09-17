import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from "@testing-library/react";
import ColorList from './ColorList';

const testColorList = [
    {
        color: "white",
        code: { hex: "#FFFFFF" },
        id: 1,
    },
    {
        color: "white",
        code: { hex: "#FFFFFF" },
        id: 2,
    },
    {
        color: "white",
        code: { hex: "#FFFFFF" },
        id: 3,
    },
];

test("Renders an empty list of colors without errors", () => {
    render(<ColorList colors={[]} />);
});

test("Renders a list of colors without errors", () => {
    render(<ColorList colors={testColorList} />);
});

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
    const { rerender } = render(
        <ColorList editing={true} colors={testColorList} />
    );

    const editMenu = screen.queryByTestId("editMenu");

    expect(editMenu).not.toBeInTheDocument();

    rerender(<ColorList editing={false} colors={testColorList} />);



});
