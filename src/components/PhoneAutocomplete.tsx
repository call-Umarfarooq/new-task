'use client'
import { useState, ChangeEvent } from 'react';

const PhoneAutocomplete = ({ data }: any) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<any[]>([]);  
  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleInputChange = (e: any) => {
    const value = e.target.value.replace(/-/g, '');
    setInputValue(value);

    if (value.length >= 3) {
      const matches = data
        .filter((item: any) =>
          item.phone.replace(/-/g, '').includes(value)
        )
        .sort((a: any, b: any) => new Date(b.orders.created_at).getTime() - new Date(a.orders.created_at).getTime());

      setFilteredOptions(matches);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (item: any) => { 
    setInputValue(item.phone);
    setSelectedName(item.name);
    setSelectedCity(item.orders.address.city);
    setFilteredOptions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter phone number"
        className="border p-2 rounded w-full"
      />
      {filteredOptions.length > 0 && (
        <ul className="absolute bg-white border w-full mt-1 rounded shadow-lg">
          {filteredOptions.map((option: any, index: number) => (  
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option.phone}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <div className="mb-2">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={selectedName}
            className="border p-2 rounded w-full"
            readOnly
          />
        </div>
        <div>
          <label className="block text-gray-700">City:</label>
          <input
            type="text"
            value={selectedCity}
            className="border p-2 rounded w-full"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneAutocomplete;
