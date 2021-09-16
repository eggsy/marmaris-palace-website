/* Import data */
import social from "../data/social";

const Social: React.FC = () => (
  <div className="flex items-center space-x-2">
    {social.map((scl, i) => (
      <a
        key={i}
        href={scl.url}
        title={scl.title}
        className="p-4 transition-colors bg-blue-500 bg-opacity-0 rounded-full hover:bg-opacity-100"
      >
        <scl.icon size={30} />
      </a>
    ))}
  </div>
);

export default Social;
