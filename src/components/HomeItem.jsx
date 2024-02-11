import { bagActions } from "../store/bagSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const HomeItem = ({ item }) => {
  const bag = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const handleAddToBag = (e) => {
    const id = e.target.id;
    dispatch(bagActions.addToBag(id));
  };
  const handleRemoveFromBag = (e) => {
    const id = e.target.id;
    dispatch(bagActions.removeFromBag(id));
  };
  let Count = 0;
  let id = Number(item.id);
  for (let i = 0; i < bag.length; i++) {
    if (bag[i] === id - 1) {
      Count++;
    }
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name"> {item.company}</div>
        <div className="item-name"> {item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">( {item.discount_percentage}% OFF)</span>
        </div>
        {/* <button className="btn-add-bag" onClick={handleAddToBag} id={item.id}>
          Add to Bag
        </button> */}
        <div className="btn-add-bag">
          <span
            className="spanPropertItem"
            onClick={handleRemoveFromBag}
            id={item.id}
          >
            -
          </span>
          <span className="spanPropertItem">{Count}</span>
          <span
            className="spanPropertItem"
            onClick={handleAddToBag}
            id={item.id}
          >
            +
          </span>
        </div>
      </div>
    </>
  );
};
export default HomeItem;
