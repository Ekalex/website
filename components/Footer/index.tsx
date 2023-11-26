import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Footer = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const [insuranceSealUrl, setInsuranceSealUrl] = useState('');
  const [facebookIconUrl, setFacebookIconUrl] = useState('');
  const [instagramIconUrl, setInstagramIconUrl] = useState('');
  const [linkedInIconUrl, setLinkedInIconUrl] = useState('');
  const [emailIconUrl, setEmailIconUrl] = useState('');

  useEffect(() => {
    const storage = getStorage();
    const fetchImages = async () => {
      const logoRef = ref(storage, 'gs://website-211bf.appspot.com/colorLogo-noBackground.png');
      const insuranceRef = ref(storage, 'gs://website-211bf.appspot.com/icons/FLIP_insurance_seal.png');
      const facebookRef = ref(storage, 'gs://website-211bf.appspot.com/icons/icons8-facebook.svg');
      const instagramRef = ref(storage, 'gs://website-211bf.appspot.com/icons/icons8-instagram.svg');
      const linkedInRef = ref(storage, 'gs://website-211bf.appspot.com/icons/icons8-linked-in.svg');
      const emailRef = ref(storage, 'gs://website-211bf.appspot.com/icons/icons8-email.svg');

      const fetchUrl = async (imageRef) => await getDownloadURL(imageRef);

      setLogoUrl(await fetchUrl(logoRef));
      setInsuranceSealUrl(await fetchUrl(insuranceRef));
      setFacebookIconUrl(await fetchUrl(facebookRef));
      setInstagramIconUrl(await fetchUrl(instagramRef));
      setLinkedInIconUrl(await fetchUrl(linkedInRef));
      setEmailIconUrl(await fetchUrl(emailRef));
    };

    fetchImages();
  }, []);

  return (
    <footer className="bg-primary bg-opacity-5 py-16 md:pt-20 lg:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-evenly items-center">
          
          {/* Logo and Social Media Links */}
          <div className="flex flex-col items-center mb-12 lg:mb-16">
            <Link href="/" legacyBehavior>
              <a className="mb-8">
                {logoUrl && <Image 
                  src={logoUrl} 
                  alt="logo" 
                  width={280} 
                  height={60}
                  className="dark:block" 
                />}
              </a>
            </Link>
            <div className="flex">
              {/* Social Media Icons Here */}
              {facebookIconUrl && <a href="https://www.facebook.com/profile.php?id=100093953964804" aria-label="facebook" className="mr-6">
                <Image src={facebookIconUrl} alt="Facebook" width={16} height={16} />
              </a>}
              {instagramIconUrl && <a href="https://www.instagram.com/onthymepersonalchef/" aria-label="instagram" className="mr-6">
                <Image src={instagramIconUrl} alt="Instagram" width={16} height={16} />
              </a>}
              {linkedInIconUrl && <a href="https://www.linkedin.com/in/eric-alexander-08289665/" aria-label="linkedIn" className="mr-6">
                <Image src={linkedInIconUrl} alt="LinkedIn" width={16} height={16} />
              </a>}
              {emailIconUrl && <a href="mailto:eric@onthymepersonalchef.com" aria-label="email" className="mr-6">
                <Image src={emailIconUrl} alt="Email" width={16} height={16} />
              </a>}
            </div>
          </div>

          {/* Insurance Seal */}
          <div className="w-full sm:w-1/2 lg:w-2/12">
            <Link href="http://www.fliprogram.com" legacyBehavior>
              <a className="flex justify-center">
                {insuranceSealUrl && <Image 
                  src={insuranceSealUrl} 
                  alt="FLIP Insurance Seal" 
                  width={256} 
                  height={256} 
                  className="bg-white rounded-lg" 
                />}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
