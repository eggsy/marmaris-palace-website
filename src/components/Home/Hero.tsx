import Image from "next/image";

/* Import data */
import amenities from "../../data/amenities";

const Hero: React.FC = () => (
  <div
    style={{
      backgroundImage:
        "url('https://agcrqpqxen.cloudimg.io/width/1890x1058/q75/https://www.tatildukkani.com/assets/hotel_pic/l/pic-grand-yazici-club-marmaris-palace-1551079429.jpg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    className="relative w-full text-white rounded-xl"
  >
    <div className="w-full h-full space-y-4 md:space-y-8 bg-gradient-to-r via-transparent to-transparent rounded-xl from-blue-500 p-14 md:p-28">
      <h1 className="text-4xl font-semibold md:text-6xl text-shadow-lg">
        Wake up to a Dream
      </h1>

      <p className="text-sm md:w-4/6 text-shadow-sm md:text-base">
        Best place to balance your mind and body, both feeling and looking good.
        It is our primary mission to make these happen. You will find yourself
        into the untouched nature, with amazing scent of pine trees of Marmaris.
      </p>

      <div className="flex items-center space-x-4 transition-all opacity-75 md:w-max hover:opacity-100">
        <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full">
          <Image
            src="/grand-yazici-icon.png"
            height="40em"
            width="40em"
            alt="Grand Yazıcı icon"
          />
        </div>

        <a
          href="https://www.grandyazicihotels.com"
          rel="noreferrer"
          target="_blank"
          className="text-sm truncate md:text-base"
        >
          Grand Yazıcı Club Hotels & Resorts
        </a>
      </div>

      <HeroAmenities />
    </div>
  </div>
);

const HeroAmenities: React.FC = () => (
  <div className="absolute left-0 right-0 grid items-center h-24 grid-flow-col gap-6 px-6 mx-4 overflow-x-auto text-black bg-white md:gap-4 md:mx-20 rounded-xl -bottom-12">
    <h3 className="font-semibold">Amenities:</h3>

    {amenities.map((amenity, _) => {
      const Icon = amenity.icon;

      return (
        <div
          key={_}
          className="flex flex-col items-center justify-center text-gray-700"
        >
          <Icon size={25} />
          <span className="font-light truncate">{amenity.title}</span>
        </div>
      );
    })}
  </div>
);

export default Hero;
