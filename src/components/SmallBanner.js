
function SmallBanner(props) {
  return (
    <div className="small-banner" id="home">
      <span className="small-banner-icon">
        <i className="fas fa-envelope"></i>
      </span>
      <span className="small-banner-text">{props.email}</span>
      <span className="small-banner-icon">
        <i className="fas fa-phone"></i>
      </span>
      <span className="small-banner-text">{props.phone}</span>
    </div>
  );
}

export default SmallBanner;
