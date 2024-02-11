import { useSelector } from "react-redux";
const BagSummary = ({}) => {
  const bag = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const bagSummary = {
    totalItem: 0,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  };
  for (let i = 0; i < bag.length; i++) {
    bagSummary.totalItem += 1;
    bagSummary.totalMRP += Number(items[bag[i]].original_price);
    bagSummary.finalPayment += Number(items[bag[i]].current_price);
    bagSummary.totalDiscount +=
      Number(items[bag[i]].original_price) -
      Number(items[bag[i]].current_price);
  }
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ( {bagSummary.totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.totalDiscount}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{bagSummary.finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
