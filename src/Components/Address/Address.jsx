import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseStep } from "../../Redux/action";
import PhoneIconOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./address.css";

export default function Address() {
  let data = [
    "Nitin Maharshi",
    7046581170,
    "B-107, XYZ Complex",
    "Panditpur",
    331022,
    "Ratangarh",
    "Rajasthan",
    "Near Busstand",
  ];
  let [inp, setInp] = React.useState(data);
  const navigate = useNavigate();

  let total = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    let newInp = [...inp];
    let { id, value } = e.target;
    newInp[+id] = value;
    setInp(newInp);
  };

  const handleSubmit = (e) => {
    dispatch(increaseStep());
    navigate("/checkout/payment");
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="address-section">
      <form action="" onSubmit={handleSubmit}>
        <h1>ADD ADDRESS</h1>
        <hr />
        <div>
          <PhoneIconOutlinedIcon
            sx={{ color: "#E93599", marginRight: "10px" }}
          />
          <h2>Contact Details</h2>
        </div>
        <input
          type="text"
          placeholder="Name"
          id="0"
          value={inp[0]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Phone Number"
          id="1"
          value={inp[1]}
          onChange={changeHandler}
        />
        <div>
          <LocationOnOutlinedIcon
            sx={{ color: "#E93599", marginRight: "10px" }}
          />
          <h2>Address Details</h2>
        </div>
        <input
          type="text"
          placeholder="House no./ Building Name"
          id="2"
          value={inp[2]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Road Name/ Area/ Colony"
          id="3"
          value={inp[3]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Pincode"
          id="4"
          value={inp[4]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          id="5"
          value={inp[5]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="State"
          id="6"
          value={inp[6]}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Nearby Location (optional)"
          id="7"
          value={inp[7]}
          onChange={changeHandler}
        />
        <button>Deliver to this Address</button>
      </form>
      <div>
        <h1>Price Details</h1>
        <p>
          Product Charges<span>${localStorage.getItem("total")}</span>
        </p>
        <p>
          First order discount<span>- $5</span>
        </p>
        <hr />
        <h2>
          Order Total <span>${localStorage.getItem("total") - 5}</span>
        </h2>
      </div>
    </section>
  );
}
