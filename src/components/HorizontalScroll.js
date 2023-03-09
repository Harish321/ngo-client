import React, { useRef } from "react";
import PropTypes from "prop-types";
// import "./HorizontalScroll.css";

function HorizontalScroll({ title }) {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1599384432245-5be6c9b3f80a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Item 1",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1600706243828-63b1c1de7b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Item 2",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1611832628651-0d7c1584ed4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Item 3",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1623927089946-e1fdd8891fa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Item 4",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1571141659716-1de85f030b57?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Item 5",
    },
  ];

  return (
    <div className="horizontal-scroll-section">
      <h2 className="horizontal-scroll-title">{title}</h2>
      <div className="horizontal-scroll-container" ref={scrollRef}>
        <div className="horizontal-scroll-content">
          {data.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.description} className="card-image" />
              <div className="card-description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-icons">
        <div
          className="scroll-icon left"
          onClick={() => scroll(-scrollRef.current.offsetWidth)}
        >
          &lt;
        </div>
        <div
          className="scroll-icon right"
          onClick={() => scroll(scrollRef.current.offsetWidth)}
        >
          &gt;
        </div>
      </div>
    </div>
  );
}

HorizontalScroll.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HorizontalScroll;
