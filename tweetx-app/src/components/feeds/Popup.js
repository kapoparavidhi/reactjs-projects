import React, { useState } from "react";

const Popup = ({ onClose, onPost }) => {
  const [text, setText] = useState("");

  const handlePost = () => {
    onPost(text);
    onClose();
  };

  return (
    <div className="popup">
      <textarea
        placeholder="Enter your post here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="gap-5 flex ">
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handlePost}>
            Post
          </button>
        </div>
        <div>
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
