import Card from "../../Card";

/* Import data */
import rooms from "../../../data/rooms";

const Facilities: React.FC = () => (
  <section className="space-y-4">
    <h1 className="text-2xl font-bold">Rooms</h1>

    <div className="grid grid-cols-4 gap-8">
      {rooms.map((room, i) => (
        <Card
          key={i}
          image={room.image}
          title={room.title}
          price={room.price}
        />
      ))}
    </div>
  </section>
);

export default Facilities;
