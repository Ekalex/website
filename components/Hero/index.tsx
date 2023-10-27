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
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <img src="/images/logo/png/colorLogo-noBackground.png"
                alt="no logo"
                width="1368px"
                height="424px" />
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
