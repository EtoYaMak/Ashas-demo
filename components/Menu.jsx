import MenuItem from "@app/menu/MenuItem/page";
import { menuItems } from "@public/menuItems"; // adjust the path based on where you saved the file

const Menu = ({ onVideoSelected }) => {
  return (
    <div className="z-1 flex flex-wrap sm:flex-1  w-full gap-4 mx-auto md:pl-4 pl-0 content-start  md:items-start justify-center items-center py-4 h-[90vh]">
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
