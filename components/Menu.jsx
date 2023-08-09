"use client";

import MenuItem from "../app/menu/MenuItem/page";

const Menu = ({ onVideoSelected }) => {
  const menuItems = [
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenBiryani.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenDhabaCurry.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/MuscatGosht2.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/PresidentPlatter.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenBiryani.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenDhabaCurry.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/MuscatGosht2.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/PresidentPlatter.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenBiryani.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/ChickenDhabaCurry.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/MuscatGosht2.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
    {
      title: "Chicken Biryani",
      imgSrc: "/assets/images/PresidentPlatter.jpg",
      price: "£19",
      videoUrl: "/assets/vid.mp4",
    },
  ];

  return (
    <div className="z-1 flex flex-wrap sm:flex-1  w-full gap-4 mx-auto md:pl-4 pl-0 content-start  min-[960px]:justify-start md:items-start justify-center items-center py-4 h-[90vh]">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          imgSrc={item.imgSrc}
          altText={item.title}
          price={item.price}
          title={item.title}
          videoUrl={item.videoUrl}
          onLongPress={onVideoSelected} // Passing the callback to each MenuItem
        />
      ))}
    </div>
  );
};

export default Menu;
