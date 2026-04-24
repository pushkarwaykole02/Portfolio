import "./styles/Blogs.css";

const blogs = [
  {
    title: "The Stealthy Tech Conflict: Why Black Friday Won't Crash Online Shopping",
    category: "Technical Blog",
    tools: "Distributed Systems, System Architecture",
    image: "/images/blog_distributed_systems.png",
    link: "https://distrbuted-systems.hashnode.dev/the-stealthy-tech-conflict-that-you-dont-see-why-black-friday-wont-crash-online-shopping?utm_source=hashnode&utm_medium=feed",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-section" id="blogs">
      <div className="blogs-container section-container">
        <h2>
          My <span>Blogs</span>
        </h2>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <p className="blog-category">{blog.category}</p>
                <h4>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    {blog.title}
                  </a>
                </h4>
                <p className="blog-tools">{blog.tools}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="read-more">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
