import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center container mx-auto bg-gray-300 p-3 rounded-md">
      <button className="btn bg-pink-500 w-32 p-2 rounded-md">
        Latest News
      </button>
      <Marquee pauseOnHover>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
