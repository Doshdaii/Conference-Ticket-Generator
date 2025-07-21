import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import icon_info from "../../src/assets/images/icon-info.svg";
import icon_upload from "../../src/assets/images/icon-upload.svg";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [fileError, setFileError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    file: null,
  });

  const handleIconClick = () => fileInputRef.current.click();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png"];
    const maxSizeInBytes = 500 * 1024;

    if (!validTypes.includes(file.type)) {
      setFileError("Only JPG or PNG files are allowed.");
      return;
    }

    if (file.size > maxSizeInBytes) {
      setFileError("File too large. Upload a file below 500KB.");
      return;
    }

    setFileError("");
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
    setFormData({ ...formData, file });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!formData.file) {
      setFileError("Please upload a valid file.");
      isValid = false;
    }

    if (isValid) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result;

        const dataToStore = {
          fullName: formData.fullName,
          email: formData.email,
          github: formData.github,
          image: base64Image,
        };

        localStorage.setItem("formData", JSON.stringify(dataToStore));
        navigate("/ticket", { state: dataToStore });
      };

      reader.readAsDataURL(formData.file);
    }
  };

  return (
    <div className="content-form">
      <form onSubmit={handleSubmit}>
        <div className="upload-content">
          <p>Upload Avatar</p>
          <div className="image-content">
            {preview ? (
              <>
                <img
                  src={preview}
                  alt="Uploaded Preview"
                  className="preview-image"
                  onClick={handleIconClick}
                  style={{ cursor: "pointer" }}
                />
                <div className="change-file">
                  <a
                    href="#"
                    className="anchor"
                    onClick={(e) => {
                      e.preventDefault();
                      setPreview(null);
                      setFormData({ ...formData, file: null });
                    }}
                  >
                    Remove Image
                  </a>
                  <a href="#" className="anchor" onClick={handleIconClick}>
                    Change Image
                  </a>
                </div>
              </>
            ) : (
              <>
                <img
                  src={icon_upload}
                  alt="Upload Icon"
                  onClick={handleIconClick}
                  style={{ cursor: "pointer" }}
                />
                <p>Drag and drop or click to upload</p>
              </>
            )}
          </div>

          {fileError && <p className="error">{fileError}</p>}

          <p className="upload-text">
            <img src={icon_info} alt="info" />
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>

          <input
            type="file"
            accept=".jpg,.png"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div className="inputs">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            onChange={handleInputChange}
            value={formData.fullName}
          />
        </div>

        <div className="inputs">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            onChange={handleInputChange}
            value={formData.email}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>

        <div className="inputs">
          <label>GitHub Username</label>
          <input
            type="text"
            name="github"
            placeholder="@yourusername"
            onChange={handleInputChange}
            value={formData.github}
          />
        </div>

        <button type="submit">Generate My Ticket</button>
      </form>
    </div>
  );
};

export default Form;
