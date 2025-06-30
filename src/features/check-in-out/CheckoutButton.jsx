/* eslint-disable no-unused-vars */
import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

// eslint-disable-next-line react/prop-types
function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => {
        checkout(bookingId);
      }}
      disabled={isCheckingout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
