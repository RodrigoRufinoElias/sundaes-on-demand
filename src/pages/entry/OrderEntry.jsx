import { Button } from "react-bootstrap";
import Options from "./Options";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../utilities";

export default function OrderEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();

  return (
    <div>
      <h1>Design your Sundae!</h1>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button onClick={() => setOrderPhase("review")}>Order Sundae!</Button>
    </div>
  );
}
