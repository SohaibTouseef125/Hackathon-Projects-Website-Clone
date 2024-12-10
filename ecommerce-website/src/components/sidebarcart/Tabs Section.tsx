
import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-12">
      <div className="flex space-x-8 border-b">
        {["Description", "Additional Information", "Reviews"].map((tab) => (
          <button
            key={tab}
            className={`py-2 ${
              activeTab === tab
                ? "border-b-2 border-black font-bold"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {activeTab === "Description" && <p>Product description goes here...</p>}
        {activeTab === "Additional Information" && (
          <p>Additional information content...</p>
        )}
        {activeTab === "Reviews" && <p>Reviews section...</p>}
      </div>
    </div>
  );
};

export default Tabs;
