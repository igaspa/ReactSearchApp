import './Bookmark.css';

const Bookmark = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bookmark-container ${isActive ? 'bookmark-red': ''}`}
    />
  );
};

export default Bookmark;
