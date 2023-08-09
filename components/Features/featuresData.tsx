import { Feature } from "@/types/feature";
import {
  UserGroupIcon,
  CalendarDaysIcon,
  SparklesIcon,
  HomeModernIcon,
  PuzzlePieceIcon,
  CakeIcon
} from "@heroicons/react/24/outline";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <CalendarDaysIcon />
    ),
    title: "Weekly Meal Prep",
    paragraph:
      "Experience the taste of convenience and healthy living with our In-Home Weekly Meal Prep Service! Chef Eric will come to your home, creating delicious and nutritious meals right in your own kitchen. Say goodbye to cooking and cleaning – we've got it covered. Indulge in custom menus, tailored to your dietary preferences and cooked with the freshest ingredients. Enjoy the luxury of homemade meals without the effort. Elevate your dining experience with our In-Home Weekly Meal Prep Service. Schedule a consultation now and savor the flavors of a professionally cooked meal, right in your own home.",
  },
  {
    id: 1,
    icon: (
      <UserGroupIcon />
    ),
    title: "Private Dinners",
    paragraph:
      "Treat yourself to a personalized culinary journey without leaving the comfort of your own home. Chef Eric will create a bespoke menu tailored to your taste preferences, using the finest ingredients. Immerse yourself in a luxurious ambiance as our team transforms your dining space into a private restaurant. Relax and enjoy a gourmet meal prepared and served exclusively for you and your guests. Experience unforgettable moments with our In-Home Private Dinner Service. Schedule a consultation today and let us curate a remarkable dining experience for you.",
  },
  {
    id: 1,
    icon: (
      <CakeIcon />
    ),
    title: "Special Events",
    paragraph:
      "Make your special event truly unforgettable with our In-Home Chef Service. Sit back, relax, and let Chef Eric create a culinary masterpiece for your celebration. Whether it's a birthday, anniversary, or intimate gathering, we'll transform your kitchen into a five-star restaurant. Indulge in a customized menu designed to tantalize your taste buds, using the finest ingredients. Experience the luxury of having a professional chef curate, cook, and serve a gourmet meal exclusively for you and your guests. Elevate your event with our In-Home Chef Service. Schedule a consultation today and turn your occasion into a culinary sensation.",
  },
  {
    id: 1,
    icon: (
      <HomeModernIcon />
    ),
    title: "Cooking Lessons/Demonstrations",
    paragraph:
      "Unleash your inner chef with personalized Cooking Lessons and Demonstrations by our skilled culinary expert! Discover the joy of cooking as our experienced chef guides you through hands-on lessons in the comfort of your own kitchen. Learn essential techniques, master new recipes, and elevate your culinary skills to the next level. From basic knife skills to advanced cooking methods, our one-on-one sessions are tailored to your specific goals and interests. Gain confidence, ignite your creativity, and impress your loved ones with your newfound culinary prowess. Experience the art of cooking with our exclusive Cooking Lessons and Demonstrations. Schedule a consultation today and embark on a flavorful journey of self-discovery in the kitchen.",
  },
  {
    id: 1,
    icon: (
      <PuzzlePieceIcon />
    ),
    title: "Menu Customization",
    paragraph:
      "We believe that every meal should reflect your unique taste and dietary preferences. Our dedicated chef will work closely with you to create a customized menu that tantalizes your palate and exceeds your expectations. From accommodating food allergies and dietary restrictions to incorporating your favorite ingredients, we take pride in tailoring each dish to your specific desires. Whether you crave gourmet delicacies or homestyle comfort food, our Personal Chef Service ensures that every meal is a true reflection of your culinary vision. Experience the luxury of a menu crafted exclusively for you. Schedule a consultation today and let us bring your culinary dreams to life.",
  },
  {
    id: 1,
    icon: (
      <SparklesIcon />
    ),
    title: "Kitchen Management",
    paragraph:
      "Sit back, relax, and let Chef Eric take care of your kitchen, while you enjoy gourmet meals in the comfort of your own home. From meal planning and grocery shopping to meal preparation and clean-up, we handle every aspect of your culinary needs. Our talented chef will transform your kitchen into a haven of delicious aromas and exquisite flavors. With meticulous attention to detail, we ensure that your kitchen is organized, stocked with fresh ingredients, and maintained to the highest standards. Elevate your lifestyle and reclaim your time with our Personal Chef and Kitchen Management Service.",
  },
];
export default featuresData;
