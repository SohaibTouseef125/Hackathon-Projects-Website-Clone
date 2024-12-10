import React from 'react'

const AdditionalInfo = () => {
  return (
    <>
    <div className="mt-10">
      <div className="flex gap-6 border-b">
        <button className="pb-2 border-b-2 border-black font-semibold">
          Description
        </button>
        <button className="pb-2 text-gray-500">Additional Information</button>
        <button className="pb-2 text-gray-500">Reviews [5]</button>
      </div>
      <div className="py-4 text-gray-600">
        <p>
          Embodying the raw, wayward spirit of rock n roll, the Asgaard Sofa
          combines style and comfort to give you a premium experience.
        </p>
      </div>
    </div>
    </>
  )
}

export default AdditionalInfo