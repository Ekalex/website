import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current text-yellow-500">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-primary">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full p-4 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="rounded-md bg-gradient-to-b from-Charcoal to-Gray bg-opacity-20 p-8 shadow-lg">
        {image && <Image 
    src={image} 
    alt={name} 
    className="rounded-full" 
    width={50} // Adjust this value based on your image's size
    height={50} // Adjust this value based on your image's size 
    />}
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-Charcoal pb-8 text-base leading-relaxed text-body-color">
          “{content}”
        </p>
        <div className="flex items-center">
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-Charcoal">{name}</h5>
            <p className="text-sm text-secondary">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
