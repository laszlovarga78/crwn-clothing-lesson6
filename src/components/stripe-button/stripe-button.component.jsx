import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KJLjOLI6mwdPWJ7WAKSHZ0osXcga4jmcnBwXivwLYVu4fQkpOnwla1O4lmNuFLgfGXHnHrqqibocqGHnUocPlY400jecXKXkc';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    // https://github.com/azmenak/react-stripe-checkout

    return (
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;