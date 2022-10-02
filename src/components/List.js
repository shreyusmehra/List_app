import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import SingleListItem from "./SingleListItem";

// List Component
const WrappedListComponent = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState();

  // useEffect(() => {
  //   setSelectedIndex(null);
  // }, [selectedIndex]);

  const handleClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {items.map((item, index) => (
        <div key={index}>
          <SingleListItem
            onClickHandler={handleClick}
            text={item.text}
            index={index}
            isSelected={selectedIndex}
          />
        </div>
      ))}
    </ul>
  );
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ),
};

WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);

export default List;
