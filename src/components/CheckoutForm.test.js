import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // renders form
    render(<CheckoutForm />)

    // retrieves header
    const header = screen.queryByText(/checkout form/i)

    // Expects header to appear
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    // renders form
    render(<CheckoutForm />)

    // Getting all queries
    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)
    const button = screen.queryByRole('button')

    // Filling out form.
    userEvent.type(firstName, 'Michael')
    userEvent.type(lastName, 'quint')
    userEvent.type(address, '123thisisnotthepastramiiaskedfor')
    userEvent.type(city, 'yothatsabuilding')
    userEvent.type(state, 'doyoufeeltheterror')
    userEvent.type(zip, '340592')
    userEvent.click(button);

    // Expects message to be in document
    const message = screen.getByTestId(/successMessage/)
    expect(message).toBeInTheDocument()
});
