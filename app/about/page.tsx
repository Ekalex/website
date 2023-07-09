import AboutSectionOne from "@/components/About/AboutSectionOne";
/*import AboutSectionTwo from "@/components/About/AboutSectionTwo";*/
import Breadcrumb from "@/components/Common/Breadcrumb";
import useFirebaseStorage from "@/useFirebaseStorage";
import { useClient } from 'react';


const AboutPage = () => {
  useClient();

  return (
    
    <>
      
      <AboutSectionOne />
      
    </>
  );
};

export default AboutPage;
