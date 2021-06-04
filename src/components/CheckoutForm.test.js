import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.queryByText(/checkout form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    // Getting inputs
    const firstInput = screen.getByLabelText(/first name:/i);
	const lastInput = screen.getByLabelText(/last name:/i);
	const addressInput = screen.getByLabelText(/address:/i);
	const cityInput = screen.getByLabelText(/city:/i);
	const stateInput = screen.getByLabelText(/state:/i);
	const zipInput = screen.getByLabelText(/zip:/i);

    // typing inputs
	userEvent.type(firstInput, 'its ya boy');
	userEvent.type(lastInput, 'the painter of sorrow');
	userEvent.type(addressInput, '123 do you feel the terror');
	userEvent.type(cityInput, 'an area');
	userEvent.type(stateInput, 'in a place');
	userEvent.type(zipInput, '219381420140');

    // Expects success message to not be true until submit button is clicked.
    expect(screen.queryByTestId('successMessage')).toBeFalsy();

    // Gets Button and clicks on it
    const button = screen.queryByRole('button');
	userEvent.click(button);

    // Checking if success message is in the document
	const message = screen.getByTestId('successMessage');
	expect(message).toBeInTheDocument();

    // Checks to see if the words in the success message are printed
	const success = screen.queryByText(/You have ordered some plants! Woo-hoo!/i);
	expect(success).toBeInTheDocument();
});
