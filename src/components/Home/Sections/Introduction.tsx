import Image from "next/image";

const Introduction: React.FC = () => (
  <section id="about" className="grid items-center gap-8 md:grid-cols-2">
    <div className="space-y-4">
      <div>
        <h3 className="font-medium text-blue-500">#WakeUpToDream</h3>
        <h2 className="text-5xl font-semibold md:text-7xl">
          Comfort and amazing view of Marmaris
        </h2>
      </div>

      <p className="text-gray-700 md:text-lg">
        What do you expect from a good holiday? Let us guess: To balance your
        mind and body, both feeling and looking good. In Grand Yazıcı Club
        Marmaris Palace it is our primary mission to make these happen. When you
        step into the untouched nature, spread all through with pine scent, of
        Marmaris İçmeler, you will realize that you are full of life energy. We
        are waiting for you to relieve the tiredness you feel for a long time
        within a comfortable world.
      </p>
    </div>

    <div className="flex justify-end">
      <Image src="/family.png" alt="family picture" width="450" height="450" />
    </div>
  </section>
);

export default Introduction;
