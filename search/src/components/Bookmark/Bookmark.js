import './Bookmark.css';

const Bookmark = ({ isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bookmark-container ${isActive ? 'bookmark-yellow' : ''}`}
    />
  );
};

export default Bookmark;
