// import React from "react";
// import logo from "../assets/png-transparent-the-zakat-foundation-five-pillars-of-islam-muslim-islam-trademark-logo-mosque-removebg-preview.png"; // Adjust the path to your logo image

// function InputField({ label, placeholder, value, onChange }) {
//   return (
//     <div>
//       <label
//         className="block text-sm font-semibold text-gray-800 pt-1 pb-1"
//         htmlFor={label}
//       >
//         {label}
//       </label>
//       <div className="relative mt-2 rounded-md shadow-sm">
//         <input
//           className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3 sm:text-sm"
//           id={label}
//           type="number"
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           min="0"
//         />
//       </div>
//     </div>
//   );
// }

// export default InputField;
import React from "react";

function InputField({ label, placeholder, value, onChange, name }) {
  return (
    <div>
      <label
        className="block text-sm font-semibold text-gray-800 pt-1 pb-1"
        htmlFor={name} // Use name attribute for htmlFor
      >
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3 sm:text-sm"
          id={name} // Use name attribute for id
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          min="0"
          name={name} // Add name attribute
        />
      </div>
    </div>
  );
}

export default InputField;
