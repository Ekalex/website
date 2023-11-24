import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary bg-opacity-5 py-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-evenly items-center">

          {/* Logo and Social Media Links */}
          <div className="flex flex-col items-center mb-12 lg:mb-16">
            <Link href="/" legacyBehavior>
              <a className="mb-8">
                <Image
                  src="/images/logo/png/colorLogo-noBackground.png"
                  alt="logo"
                  width={280} // Increased size
                  height={60}  // Increased size
                  className="dark:block" // Removed 'hidden' class to always display
                />
              </a>
            </Link>
            <div className="flex">
              {/* Social Media Icons Here */}
              {/* Replace placeholders with actual SVG content or image tags */}
              {/* Facebook */}
              <a href="https://www.facebook.com/profile.php?id=100093953964804" aria-label="facebook" className="mr-6">
                <svg width="16" height="16" viewBox="0 0 16 16" class="fill-current"><path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z"></path></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/onthymepersonalchef/" aria-label="instagram" className="mr-6">
                <svg width="16" height="16" viewBox="0 0 16 16" class="fill-current"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/eric-alexander-08289665/" aria-label="linkedIn" className="mr-6">
                <svg width="16" height="16" viewBox="0 0 16 16" class="fill-current"><path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z"></path></svg>
              </a>
              {/* Email */}
              <a href="mailto:eric@onthymepersonalchef.com" aria-label="email" className="mr-6">
                <svg width="16" height="16" viewBox="0 0 16 16" class="fill-current"><path d="M 2.5 2 C 1.675781 2 1 2.675781 1 3.5 L 1 11.5 C 1 12.324219 1.675781 13 2.5 13 L 13.5 13 C 14.324219 13 15 12.324219 15 11.5 L 15 3.5 C 15 2.675781 14.324219 2 13.5 2 Z M 2.5 3 L 13.5 3 C 13.535156 3 13.5625 3.011719 13.59375 3.019531 L 8 6.890625 L 2.40625 3.019531 C 2.4375 3.011719 2.464844 3 2.5 3 Z M 2 3.953125 L 8 8.109375 L 14 3.953125 L 14 11.035156 L 10.859375 8.40625 L 10 9 L 13.574219 11.984375 C 13.550781 11.988281 13.527344 12 13.5 12 L 2.5 12 C 2.472656 12 2.449219 11.988281 2.425781 11.984375 L 6 9 L 5.140625 8.40625 L 2 11.035156 Z"></path></svg>
              </a>
            </div>
          </div>

          {/* Insurance Seal */}
          <div className="w-full sm:w-1/2 lg:w-2/12">
            <Link href="http://www.fliprogram.com" legacyBehavior>
              <a className="flex justify-center">
                <Image
                  src="/images/FLIP_insurance_seal.png"
                  alt="FLIP Insurance Seal"
                  width={256}
                  height={256}
                  className="bg-white rounded-lg"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
