import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { useEffect } from 'react';

const ContactPage = () => {
  useEffect(() => {
    // This empty useEffect will mark the parent component as a Client Component
  }, []);
  return (
    <>
      <Breadcrumb
        pageName="Contact Me"
        description=""
      />

      <Contact />
    </>
  );
};

export default ContactPage;
