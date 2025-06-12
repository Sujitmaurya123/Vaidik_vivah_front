
interface AicardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const Aicard = ({ name, description, imageSrc }: AicardProps) => {
  return (
    <div className="h-full w-full  flex gap-3 max-w-5xl  rounded-t-3xl bg-[white] p-2 text-[#231F20E5] lg:p-10">
      <div className="mb-4 w-1/2 rounded-3xl">
        <img
          className="w-full object-fill h-[50vh] "
          src={imageSrc}
          alt={`${name} Profile`}
        />
      </div>
      <div className=" w-1/2">
        <h2
          className="left-7 mb-4 text-xl lg:text-2xl font-Proxima-Nova-Bold"
        >
          {name}
        </h2>
        <p className="md:text-xl text-sm text-gray-500 lg:leading-6 lg:tracking-wide font-Proxima-Nova-SemiBold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Aicard;