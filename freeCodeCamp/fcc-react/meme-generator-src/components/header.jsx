import avatar from "../images/avatar.png";

export default function Header() {
  return (
    <div className="d-flex justify-content-evenly align-items-start py-3 bg-danger text-white">
      <i className="fa-solid fa-earth-americas fs-2"></i>
      <h3 className="ms-3">Meme generator</h3>
    </div>
  );
}
