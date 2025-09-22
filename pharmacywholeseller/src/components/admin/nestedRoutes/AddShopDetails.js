import React, { useState } from "react";
import noImage from "../../../assets/noImage.jpg";
import ServicesList from "./Service component/ServicesList";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";
import { getAuthSlice } from "../../../Redux/Slices/AuthSlice";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";
import { message } from "antd";
import { useEffect } from "react";
import Loader from "../../Loader/loader";
import axios from "axios";

const AddShopDetails = () => {
  const [image, setImage] = useState("");
  const [saveImage, setSaveImage] = useState("");
  const [services, setServices] = useState([]);
  const [state, setState] = useState({
    serviceName: "",
    price: "",
    description: "",
    serviceImage: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const [messageAPI, context] = message.useMessage("");
  const notification = (message, varient) => {
    messageAPI.open({ type: varient, content: message });
  };
  const authID = useSelector(getAuthSlice);
  const id = authID[0].id;
  const storage = getStorage();
  const storageRef = ref(
    storage,
    `Professional/${id}/Services/` + saveImage.name
  );
  const dbRef = collection(db, `ProfessionalDB/${id}/Services/`);
  const onFormChange = (e) => {
    const { name, value } = e.target;

    setState((data) => {
      return { ...data, [name]: value };
    });
  };
  const getServices = async () => {
    const data = await getDocs(
      collection(db, "ProfessionalDB", `${id}`, "Services")
    );
    const get = data.docs.map((res) => ({
      ...res.data(),
      id: res.id,
    }));
    setServices(get);
  };

  // const services = "s";
function ImageHandler(e) {
  const file = e.target.files[0];
  setSaveImage(file);

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 Data URL
    };
    reader.readAsDataURL(file);
  }
}


  const SubmitHandler = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    // Upload image to Cloudinary if one is selected
    if (saveImage) {
      const formData = new FormData();
      formData.append("file", saveImage);
      formData.append("upload_preset", "foodplanet"); // your preset
      formData.append("folder", "foodplanet");

      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dh7kv5dzy/image/upload",
          formData
        );
        imageUrl = res.data.secure_url;
      } catch (err) {
        notification("Image upload failed!", "error");
        return;
      }
    }

    // Save data to Firestore
    addDoc(dbRef, {
      ServiceName: state.serviceName,
      Price: state.price,
      Description: state.description,
      ServiceImage: imageUrl,
      Category: state.category,
    })
      .then(() => {
        notification("Service Added Successfully!", "success");
        getServices(); // refresh list
      })
      .catch((err) => {
        notification(err.message, "error");
      });

    // Reset form state
    setState({
      serviceName: "",
      price: "",
      description: "",
      serviceImage: "",
      category: "",
    });
    setImage("");
    setSaveImage("");
  };

  useEffect(() => {
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(image);
return (
  <div
    className="d-flex flex-column"
    style={{
      minHeight: "100vh",
      background: "#fff",
      padding: "20px",
      overflowX: "hidden",
    }}
  >
  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    {context}
    <div className="container py-3 px-md-4">
      <h2 className="text-center mb-4">
        <span className="border border-dark py-2">
          ADD{" "}
          <span className="text-white px-2 py-2" style={{ backgroundColor: "#ff7e00" }}>
            PRODUCT
          </span>
        </span>
      </h2>

      <form onSubmit={SubmitHandler}>
        <div className="row align-items-start mb-4">
          <div className="col-md-5 mb-3">
            <label htmlFor="addServiceImg" style={{ cursor: "pointer" }}>
              <img
                src={
                  image
                    ? image
                    : "https://static.thenounproject.com/png/3445536-200.png"
                }
                alt="Service Preview"
                className="shadow-sm"
                style={{
                  borderRadius: "20px",
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            </label>
            <input
              id="addServiceImg"
              type="file"
              accept="image/*"
              name="serviceImage"
              className="d-none"
              onChange={ImageHandler}
            />
          </div>

          <div className="col-md-7">
            <select
              className="form-control mb-3"
              name="category"
              value={state.category}
              required
              onChange={onFormChange}
            >
            
              <option value="">Select Medicine Category</option>
  <option value="Prescription Medicines">Prescription Medicines</option>
  <option value="Over-the-Counter (OTC)">Over-the-Counter (OTC)</option>
  <option value="Vitamins & Supplements">Vitamins & Supplements</option>
  <option value="Personal Care">Personal Care</option>
  <option value="Baby Care">Baby Care</option>
  <option value="Skin & Beauty">Skin & Beauty</option>
  <option value="Health & Wellness">Health & Wellness</option>
  <option value="Medical Equipment">Medical Equipment</option>
  <option value="Pain Relief">Pain Relief</option>
  <option value="Diabetes Care">Diabetes Care</option>
  <option value="Cardiac Care">Cardiac Care</option>
  <option value="First Aid">First Aid</option>
  <option value="Herbal & Homeopathic">Herbal & Homeopathic</option>
  <option value="Daily Essentials">Daily Essentials</option>
            </select>

            <input
              placeholder="Enter Medicine Name"
              className="form-control mb-3"
              name="serviceName"
              value={state.serviceName}
              required
              onChange={onFormChange}
            />

            <input
              placeholder="Enter Price"
              type="number"
              name="price"
              value={state.price}
              required
              onChange={onFormChange}
              className="form-control mb-3"
            />

           <textarea
  placeholder="Enter description"
  className="form-control mb-3"
  name="description"
  value={state.description}
  onChange={(e) => {
    const value = e.target.value;
    if (value.length <= 300) {
      setState({ ...state, description: value });
    }
  }}
  rows={3}
/>
{state.description.length > 0 && state.description.length < 150 && (
  <p style={{ color: "red", fontSize: "13px" }}>
    Description must be at least 150 characters long.
  </p>
)}


            <button
              type="submit"
              className="btn shadow-sm text-white"
              style={{ backgroundColor: "#ff7e00" }}
            >
              Add Medicine
            </button>
          </div>
        </div>
      </form>

      <div>
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">
            Recently <span className="">added medicines</span>
          </h5>
          <button
            onClick={getServices}
            className="btn btn-sm"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "5px",
              padding: "4px 8px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            <span className="material-icons" style={{ fontSize: "18px" }}>
              refresh
            </span>
          </button>
        </div>

        <input
          type="text"
          className="form-control mt-3"
          placeholder="Search medicine by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />

        <div
          className="overflow-auto mt-3"
          style={{ maxHeight: "300px", border: "1px solid #eee", borderRadius: "8px", padding: "10px" }}
        >
          {services.length === 0 ? (
            <Loader />
          ) : (
            services
              .filter((doc) => doc.ServiceName?.toLowerCase().includes(searchTerm))
              .map((doc) => (
                <ServicesList
                  data={doc}
                  noImage={noImage}
                  setState={setState}
                  key={doc.id}
                />
              ))
          )}
        </div>
      </div>
    </div>
  </div>
);

};

export default AddShopDetails;
