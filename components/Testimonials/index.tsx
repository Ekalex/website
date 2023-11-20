import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: " Max and Merrill Barrett",
    designation: "Previous Clients",
    content:
      "We appreciate all of the help that Eric did for us. He is kind, friendly, and his food is amazing! He was just the best!'",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "The Spaulding Family",
    designation: "Previous Clients",
    content:
      "Eric has been cooking for us for several months now, and we are thrilled with his service. He is professional, punctual, and talented. With two toddlers and lots of different food preferences in the house, he has managed to find meals that all of us love. And it has been lovely to have some additional help in the dinner department with another little one on the way. He also leaves the kitchen clean and all the meals neatly put away which makes it so easy for the rest of the week. We highly recommend Eric and his services.'",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Alok Solomani",
    designation: "Previous Clients",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },

  {
    id: 3,
    name: "Alok Solomani",
    designation: "Previous Clients",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },

  {
    id: 3,
    name: "Alok Solomani",
    designation: "Previous Clients",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },

  {
    id: 3,
    name: "Alok Solomani",
    designation: "Previous Clients",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },

  {
    id: 3,
    name: "Alok Solomani",
    designation: "Previous Clients",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Reviews"
          paragraph="See What some of my clients have to say here"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>      

    </section>
  );
};

export default Testimonials;
