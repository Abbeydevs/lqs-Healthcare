import blogData from "./blogData";
import { BsDot } from "react-icons/bs";

import "./blog.css";

const Blog = () => {
  return (
    <div className="custom-container blog-container">
      <div className="container-title text-center mb-5">
        <small>OUR BLOG</small>
        <h1>Latest News</h1>
      </div>
      <div className="blogs">
        {blogData.map((data) => (
          <div>
            <img src={data.image} alt="blogs" />
            <div className="d-flex align-items-center mt-4">
              <p className=" fs-5 pb-0 mb-0">{data.title}</p>
              <BsDot size={30} />
              <p className="fs-6 pb-0 mb-0">{data.date}</p>
            </div>
            <p className="fs-4 fw-medium">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
