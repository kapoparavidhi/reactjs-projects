import Header from "./components/Header";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div>
      <Header />
      <UserInfo />
    </div>
  );
}

export default App;
// // App.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTwubricData, removeData } from "../features/twubricSlice";
// import { format } from "date-fns";

// // function formatDate(dateString) {
// //   const options = { day: "numeric", month: "short", year: "numeric" };
// //   return new Date(dateString).toLocaleDateString("en-US", options);
// // }

// function UserInfo() {
//   const dispatch = useDispatch();
//   const twubricData = useSelector((state) => state.twubric.data);
//   const status = useSelector((state) => state.twubric.status);
//   const error = useSelector((state) => state.twubric.error);
//   //   const startDate = useSelector((state) => state.twubric.startDate);
//   //   const endDate = useSelector((state) => state.twubric.endDate);

//   useEffect(() => {
//     dispatch(fetchTwubricData());
//   }, [dispatch]);

//   const handleRemove = (username) => {
//     dispatch(removeData({ username }));
//   };

//   return (
//     <div>
//       {status === "loading" && <p>Loading...</p>}
//       {status === "failed" && <p>Error: {error}</p>}
//       {status === "succeeded" && (
//         <>
//           <div className="bg-blue-100 relative rounded-lg flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5 justify-between "></div>
//           <div className="p-10 font-serif">
//             <div className="bg-blue-50 relative rounded-lg flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5  justify-center items-center">
//               <div className="grid grid-cols-1 w-half  ">
//                 {twubricData.map((user) => (
//                   <>
//                     <div className="flex items-center gap-5 border border-blue-500 rounded-lg px-5 mt-5">
//                       <div className="bg-[#f0f0f0]">
//                         <img
//                           className="h-full w-[200px] rounded-lg overflow-hidden border-black-"
//                           src={user.image}
//                           alt={user.username}
//                         />
//                       </div>
//                       <div className="w-full p-3">
//                         <div className="card-item-table flex flex-col w-full gap-3">
//                           <div className="flex justify-between items-center">
//                             <h5 className="text-2xl font-bold">
//                               {user.fullname}
//                             </h5>
//                             <p>
//                               <div className="flex max-2xl:flex-col justify-between items-center px-3 mt-2 pb-2 gap-2">
//                                 <p>TotalFriends </p>
//                                 <div>{user.twubric.total}</div>
//                               </div>
//                             </p>
//                           </div>
//                           <div className="flex items-center gap-5 w-full justify-between">
//                             <p>
//                               <p>Friends</p>
//                               {user.twubric.friends}
//                             </p>
//                             <p>
//                               <p>Influence</p>
//                               {user.twubric.influence}
//                             </p>
//                             <p>
//                               <p>Chirpiness</p>
//                               {user.twubric.chirpiness}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="mt-3 ">
//                           <div className="flex items-center cursor-pointer justify-between">
//                             <div>
//                               <b>Joining Date : </b>

//                               {format(new Date(user.join_date), "do MMM, yyyy")}
//                             </div>
//                             <button
//                               class="bg-red-500 text-white px-4 py-2 rounded-md flex items-center"
//                               onClick={() => handleRemove(user.username)}
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                                 class="h-5 w-5 mr-2"
//                               >
//                                 <path
//                                   stroke-linecap="round"
//                                   stroke-linejoin="round"
//                                   stroke-width="2"
//                                   d="M6 18L18 6M6 6l12 12"
//                                 ></path>
//                               </svg>
//                               Delete
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default UserInfo;
