import avatar from "../images/avatar.png";

export default function Main(props) {
  // console.log(props.data);
  return (
    <div className="d-flex justify-content-center align-items-start custom-card">
      <img src={props.data.imageUrl} className="card--image rounded-3" />
      <div className="m-4">
        <div className="d-flex">
          <span className="card--location">{props.data.location}</span>
          <a href={props.data.googleMapsUrl} className="ms-3">
            View on Google Maps
          </a>
        </div>
        <h3 className="fs-1 mb-4">
          <strong>{props.data.title}</strong>
        </h3>
        <p className="card--dates">
          {props.data.startDate} - {props.data.endDate}
        </p>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
