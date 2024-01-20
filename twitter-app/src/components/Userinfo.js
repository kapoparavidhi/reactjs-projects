import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const Userinfo = (user) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="p-10 font-serif">
      <div className="bg-gray-200 relative rounded-lg flex shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-5">
        <div className="grid grid-cols-3 w-full gap-5">
          {data.map((user) => (
            <>
              <div className="flex items-center gap-5 border border-gray-500 rounded-lg px-5">
                <div className="bg-[#f0f0f0]">
                  <img
                    className="h-full w-[200px] rounded-lg overflow-hidden border-black-"
                    src={user.image}
                    alt={user.username}
                  />
                </div>
                <div className="w-full p-3">
                  <div className="card-item-table flex flex-col w-full gap-3">
                    <div className="flex justify-between items-center">
                      <h5 className="text-2xl font-bold">{user.fullname}</h5>
                      <p>
                        <div className="flex max-2xl:flex-col justify-between items-center px-3 mt-2 pb-2">
                          <p>TotalFriends </p>
                          <p className="mt-1">{user.twubric.total}</p>
                        </div>
                      </p>
                    </div>
                    <div className="flex items-center gap-5 w-full justify-between">
                      <p>
                        <p>Friends</p>
                        {user.twubric.friends}
                      </p>
                      <p>
                        <p>Influence</p>
                        {user.twubric.influence}
                      </p>
                      <p>
                        <p>Chirpiness</p>
                        {user.twubric.chirpiness}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center cursor-pointer">
                      <b>Joining Date : </b>
                      {format(new Date(user.join_date), "do MMM, yyyy")}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
