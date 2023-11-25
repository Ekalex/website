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
      const logoRef = ref(storage, 'path/to/logo.png');
      const insuranceRef = ref(storage, 'path/to/insurance_seal.png');
      const facebookRef = ref(storage, 'path/to/facebook_icon.png');
      const instagramRef = ref(storage, 'path/to/instagram_icon.png');
      const linkedInRef = ref(storage, 'path/to/linkedin_icon.png');
      const emailRef = ref(storage, 'path/to/email_icon.png');

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
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/colorLogo-noBackground.png?alt=media&token=83d207a8-5003-4cb5-8a62-f88bddbd5b77" 
                  alt="logo" 
                  width={280} 
                  height={60}
                  className="dark:block" 
                />
              </a>
            </Link>
            <div className="flex">
              {/* Social Media Icons Here */}
              <a href="https://www.facebook.com/profile.php?id=100093953964804" aria-label="facebook" className="mr-6">
                <Image src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/icons%2Ficons8-facebook.svg?alt=media&token=fb577d60-5771-4ae0-949f-9528987f30d8" alt="Facebook" width={16} height={16} />
              </a>
              <a href="https://www.instagram.com/onthymepersonalchef/" aria-label="instagram" className="mr-6">
                <Image src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/icons%2Ficons8-instagram.svg?alt=media&token=e0135163-75df-4e5f-acbe-ef335e77ac83" alt="Instagram" width={16} height={16} />
              </a>
              <a href="https://www.linkedin.com/in/eric-alexander-08289665/" aria-label="linkedIn" className="mr-6">
                <Image src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/icons%2Ficons8-linked-in.svg?alt=media&token=045c70c8-7775-4104-90d4-7121a1aded68" alt="LinkedIn" width={16} height={16} />
              </a>
              <a href="mailto:eric@onthymepersonalchef.com" aria-label="email" className="mr-6">
                <Image src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/icons%2Ficons8-email.svg?alt=media&token=d7b7b229-44b5-4535-857a-67628cc10e9d" alt="Email" width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Insurance Seal */}
          <div className="w-full sm:w-1/2 lg:w-2/12">
            <Link href="http://www.fliprogram.com" legacyBehavior>
              <a className="flex justify-center">
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/website-211bf.appspot.com/o/icons%2FFLIP_insurance_seal.png?alt=media&token=37365077-dd38-40d8-82d3-f9ed795a1217" 
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
