import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <Image
                src="/images/logo/png/colorLogo-noBackground.png"
                alt="No background logo"
                width={1168}
                height={362} />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
