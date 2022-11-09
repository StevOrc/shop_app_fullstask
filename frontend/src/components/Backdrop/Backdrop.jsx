import "./Backdrop.css";

// This component is just for css issues
// When we are in mobile or tablet we will see a showdow css beside the sideBar
const Backdrop = ({ click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;
