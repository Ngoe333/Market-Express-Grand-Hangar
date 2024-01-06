import Image from "next/image";
import MenuItem from './menu/MenuItem'

const HomeMenu = () => {
  return (
    <div>
      <section className="text-center mt-8">
        {/* <div className="w-full relative top-0 right-0 justify-start h-full">
          <div className=" absolute rounded-md shadow-md left-12">
            <Image
              src={"/peppers.png"}
              width={200}
              height={200}
              alt="peppers"
              className="rounded-md"
            />
          </div>

          <div className=" absolute rounded-md shadow-md right-12 ">
            <Image
              src={"/peppers.png"}
              width={200}
              height={200}
              alt="peppers" 
              className="rounded"
            />
          </div>
        </div> */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
            Check Our Items
          </h2>
          <p className="text-red uppercase tracking-wide font-medium text-lg">
            {" "}
            Menus
          </p>
        </div>

        <div className="flex flex-col justify-center items-center  md:grid grid-cols-5 gap-4 mt-8 ">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </section>
    </div>
  );
};

export default HomeMenu;
