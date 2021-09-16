interface CardProps {
  title: string;
  image: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ title, image, price }) => {
  return (
    <div className="transition-shadow cursor-pointer rounded-xl hover:shadow-xl">
      <div
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-40 rounded-tl-xl rounded-tr-xl"
      >
        <h1 className="p-4 font-bold text-white uppercase truncate text-shadow-xl">
          {title}
        </h1>
      </div>

      <div className="flex flex-col p-4 bg-white rounded-bl-xl rounded-br-xl">
        <span className="font-bold text-red-600">
          {price}{" "}
          <span className="text-sm font-light text-red-400">/night</span>
        </span>
        <span className="text-lg font-medium">Booking ID: 123456</span>
      </div>
    </div>
  );
};

export default Card;
