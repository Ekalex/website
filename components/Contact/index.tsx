import NewsLatterBox from "./NewsLatterBox";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="mb-32 text-center lg:text-left">
      <div className="px-6 py-12 md:px-12">
        <div className="grid items-center lg:grid-cols-2 lg:gap-x-12 p-10px">
          <div className="mb-12 lg:mb-0">
            <h2 className="my-12 text-5xl font-bold leading-tight tracking-tight">
              Are you ready <br />
              <span className="text-success dark:text-success-400">to get started?</span>
            </h2>
            <a className="mb-2 inline-block rounded m-4 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-gray-600 bg-primary hover:bg-indigo-400 hover:text-white"
              data-te-ripple-init data-te-ripple-color="light" href="mailto:eric@onthymepersonalchef.com" role="button">Schedule a consultation</a>
            <a className="inline-block rounded  m-4 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-gray-600 bg-primary hover:bg-indigo-400 hover:text-white"
              data-te-ripple-init data-te-ripple-color="light" href="https://squareup.com/gift/MLSQND4VMTYVV/order" role="button">Give the perfect gift</a>
          </div>          
        </div>
      </div>
    </section>


  );
};

export default Contact;
