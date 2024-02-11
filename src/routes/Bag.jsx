// import BagItem from "../components/BagItem";
// import BagSummary from "../components/BagSummary";
// import { useSelector } from "react-redux";
import { BsFolderX } from "react-icons/bs";

// const Bag = () => {
//   const bag = useSelector((state) => state.bag);
//   const items = useSelector((state) => state.items);
//   return (
//     <>
//       <main>
//         <div className="bag-page">

//             <div className="bag-items-container">
//               {console.log(bag.length,)}
//               {
//               bag.map((id) => (
//                 <BagItem key={id} item={items[id]} />
//               ))
//               }
//             </div>

//           <BagSummary />
//         </div>
//       </main>
//     </>
//   );
// };

// export default Bag;

import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  let finalItems = [];
  for (let i = 0; i < bagItems.length; i++) {
    finalItems.push(items[bagItems[i]]);
  }

  return (
    <main>
      <div className="bag-page">
        {finalItems.length === 0 ? (
          <div className="emptyBag">
            <BsFolderX size={100} />
            <h1> Your Bag is Empty </h1>
          </div>
        ) : (
          <div className="bag-items-container">
            {finalItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
        )}
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
