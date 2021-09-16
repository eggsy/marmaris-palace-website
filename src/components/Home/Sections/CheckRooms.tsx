import { HiCalendar, HiTicket } from "react-icons/hi";

import Button from "../../Button";

const CheckRooms: React.FC = () => {
  const date = new Date();

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Check Availability</h1>

      <div className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl">
        <div className="space-y-2">
          <div className="p-2 bg-blue-200 rounded-full w-max">
            <HiCalendar size={30} className="text-blue-600" />
          </div>

          <div>
            <h3 className="text-lg font-semibold">Date</h3>
            <Input
              value={`${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="p-2 bg-blue-200 rounded-full w-max">
            <HiTicket size={30} className="text-blue-600" />
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Room / Guests</h3>
            <Select
              options={["Economic Room", "Villa", "Family Room", "King Suit"]}
            />
          </div>
        </div>

        <div className="flex items-center">
          <Button>Check Rooms</Button>
        </div>
      </div>
    </section>
  );
};

const Input: React.FC<{ value: string }> = ({ value }) => (
  <input
    className="w-2/3 py-1 text-gray-700 transition-colors border-b-2 border-blue-400 border-opacity-50 focus:outline-none focus:border-opacity-100"
    type="text"
    defaultValue={value}
  />
);

const Select: React.FC<{ options: string[] }> = ({ options }) => (
  <select className="w-2/3 px-0 py-1 border-b-2 border-blue-400 border-opacity-50 focus:border-opacity-100">
    {options.map((option, i) => (
      <option key={i} selected={i === 0}>
        {option}
      </option>
    ))}
  </select>
);

export default CheckRooms;
