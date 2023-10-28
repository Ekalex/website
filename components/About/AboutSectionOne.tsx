import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="grid place-items-center pt-16 md:pt-20 lg:pt-28 p-16">
      <div className="text-primary text-center text-4xl p-5">
        Eric Alexander
      </div>

      <picture className="max-w-prose">
        <source srcSet='/images/chef_eric_1280.webp' type="image/webp" />
        <source srcSet='/images/chef_eric_1280.jpg' type="image/jpeg" />
        <img src='/images/chef_eric_1280.jpg' alt="Photo of Chef Eric" />
      </picture>      

      <div>
    <h2>Education</h2>
    <p>I polished my cooking skills at Johnson and Wales University, diving into both the art and the practical side of gastronomy. The experienced chefs there helped me grow and really fueled my passion for creating great food.</p>
    <br></br>

    <h2>Work History</h2>
    <p>My journey in the culinary world began in Newport, Rhode Island, a town known for its coastal beauty and lively food scene. I embraced the local ingredients and started crafting dishes that became popular among the locals and got some attention in the culinary circle.</p> <br></br>
    <p>Feeling the urge to explore further, I moved back to my hometown of Boston, where I got the opportunity to work at Catalyst. There, I worked with a dedicated team, and the emphasis on using seasonal and high-quality ingredients allowed me to sharpen my skills and provide memorable dining experiences to our patrons.</p><br></br>
    <p>Later, at Branch Line, I found a new appreciation for the quality of food we could create. The restaurant&#39s focus on rotisserie cooking and farm-to-table practices pushed me to take my skills up a notch. It was a great experience, working with fresh, locally sourced ingredients and creating dishes that were genuinely appreciated.</p><br></br>
    <p>A significant part of my culinary journey was the time I spent at Walt Disney World. Here, I learned about managing large-scale culinary operations while keeping a strong focus on quality. Serving guests from all over the world was an eye-opening experience.</p><br></br>

    <h2>Personal Chef</h2>
    <p>Now, as a personal chef, I bring all that experience to your table. I specialize in creating custom menus that match your unique taste preferences and dietary needs. Whether it&#39s a small get-together or a big celebration, I am committed to providing a dining experience that will leave a positive, lasting impression. With a wide range of culinary skills, I aim to create meals that not only satisfy hunger but also become a topic of conversation, making your event a memorable one.</p><br></br>
</div>

    </section>
  );
};

export default AboutSectionOne;