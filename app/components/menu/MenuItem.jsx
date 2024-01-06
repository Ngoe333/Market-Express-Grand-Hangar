const MenuItem = () => {
  return (
    <div>
      <div className="bg-slate-200 rounded-lg text-cente p-4 flex items-center justify-center flex-col shadow-md">
        <div className="">
          <img src="/Modified.png" alt="logo" className="rounded-full max-h-20" />
        </div>

        <h4 className="font-semibold my-2 text-xl">Tomate</h4>
        <p className="text-gray-600 text-sm">
          {" "}
          Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit.
        </p>

        <button className="text-white bg-green rounded-full px-6 py-2 mt-4 shadow-md ">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
