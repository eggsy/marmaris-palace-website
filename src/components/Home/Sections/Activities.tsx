/* Import data */
import activitiesData from "../../../data/activities";

interface ActivityProps {
  title: string;
  description: string;
}

const Activities: React.FC = () => (
  <section id="activities" className="space-y-4">
    <h1 className="text-2xl font-bold">All About Our Facility</h1>

    <div className="grid grid-cols-3 gap-8">
      {activitiesData.map((activity, i) => {
        const Icon = activity.icon;

        return (
          <Activity
            key={i}
            title={activity.title}
            description={activity.description}
          >
            <Icon size={30} />
          </Activity>
        );
      })}
    </div>
  </section>
);

const Activity: React.FC<ActivityProps> = ({
  children,
  title,
  description,
}) => (
  <div className="flex flex-col justify-center p-6 space-y-2 bg-white rounded-xl">
    <div className="p-2 text-blue-600 bg-blue-300 rounded-full w-max">
      {children}
    </div>

    <h3 className="text-lg font-medium">{title}</h3>
    <p className="line-clamp-3">{description}</p>
  </div>
);

export default Activities;
