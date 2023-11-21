import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: " Max and Merrill Barrett",
    designation: "Former Clients",
    content:
      "We appreciate all of the help that Eric did for us. He is kind, friendly, and his food is amazing! He was just the best!'",
    image: '',
    star: 5,
  },
  {
    id: 2,
    name: "The Spaulding Family",
    designation: "Current Clients",
    content:
      "Eric has been cooking for us for several months now, and we are thrilled with his service. He is professional, punctual, and talented. With two toddlers and lots of different food preferences in the house, he has managed to find meals that all of us love. And it has been lovely to have some additional help in the dinner department with another little one on the way. He also leaves the kitchen clean and all the meals neatly put away which makes it so easy for the rest of the week. We highly recommend Eric and his services.'",
    image: '',
    star: 5,
  },
  {
    id: 3,
    name: "Nico Drillis",
    designation: "Client",
    content:
      "We hired Eric to cook for a 50th birthday party.  He is organized and easy to work with.  He crafted a great menu and cheerfully accommodated last minute requests.  The execution was spot on - he shopped, planned, cooked, plated and delivered to perfection. We highly recommend.'",
    image: '',
    star: 5,
  },

  {
    id: 4,
    name: "Kari Borroel",
    designation: "Client",
    content:
    "Eric has been preparing meals for my husband and I for several months, and it has been great! He is an excellent chef, very open to preferences and requests, and he cooks with a lot of variety. Eric has helped us to eat better and healthier with our busy work and lives. I would absolutely recommend Eric to cook for you!",
    image: '',
    star: 5,
  },

  {
    id: 5,
    name: "The Shaw Family",
    designation: "Former Clients",
    content:
      "I’ve had the pleasure to hire Eric on multiple occasions, and he never disappoints! I’m a full time working mom and and wife and the last thing I want to do is come home and think what to make for dinner each night. Eric has been a life saver and has crossed this task off my to do list! He also has made mornings a breeze, my children (and especially me) love his sous vide egg bites! Eric goes above and beyond to make sure our entire family is happy with the menus each week. Currently Eric is putting together a menu for a private 40th event next month, and I cannot wait for him to wow my guests!",
    image: '',
    star: 5,
  },

  {
    id: 6,
    name: "Brian Belley",
    designation: "Client",
    content:
      "We recently had Eric come to our home and had a 4-course autumn tasting menu, with a different wine pairing for each of the four courses. We invited another couple so there were four of us for this amazing experience. Every detail of the evening was taken care of for us by Eric - from the INCREDIBLE food, to the setting of the table and service for each of the courses. Eric and his team even took care of dishes and cleaning, so we had a spotless kitchen and didn't have to do any dishes or take out any trash! It was readily apparent that Eric is very organized, experienced, and came with a very friendly attitude and was willing to answer our questions. He was very prepared and thorough leading up to the evening, and it paid off as it went off flawlessly. Will definitely be looking to do this again sometime soon!",
    image: '',
    star: 5,
  },

  {
    id: 7,
    name: "Carolyn K",
    designation: "Former Client",
    content:
      "Eric did an amazing job cooking dinner for our family each week! From beef stew to chicken pot pies, the food was delicious and made life super easy for two very busy professionals with two very busy kids! Can not recommend Eric enough. Reasonably priced and very talented!",
    image: '',
    star: 5,
  },

  {
    id: 8,
    name: "Alok Solomani",
    designation: "Client",
    content:
      "We wanted something a bit special for my wife’s ?0 birthday and Eric really hit it out of the park for us. From initial contact through to clean up and goodbyes, Eric was professional, efficient and responsive to our requests. Plus, he totally noticed the interest of the teenagers and involved them which was awesome. And the dinner itself - from starters through dessert - huge hit with us and our guests. It was well presented and delicious. We highly recommend Eric and his team.",
    image: '',
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
