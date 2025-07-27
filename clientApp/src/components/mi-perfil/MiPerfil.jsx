import React, { useState, useEffect } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import './miPerfil.scss';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Link } from 'react-router-dom';  


export const MiPerfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [userId, setUserId] = useState(null);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSaveProfile = async () => {
    const adminToken = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${adminToken}` };

    try {
      if (userId) {
        await axios.put(`http://localhost:3000/user/${userId}`, { fullname: name }, { headers });
      }

      if (profileFile) {
        const formData = new FormData();
        formData.append("image", profileFile);
        await axios.put(
          "http://localhost:3000/user/change/profile-image",
          formData,
          {
            headers: { ...headers, "Content-Type": "multipart/form-data" },
          }
        );
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
    }
  };

  const onDrop = (acceptedFiles) => {
    const image = acceptedFiles[0];
    setProfileFile(image);
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(image);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  useEffect(() => {
    const adminToken = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${adminToken}`,
    };

    axios
      .get("http://localhost:3000/auth/profile", { headers })
      .then((response) => {
        const userData = response.data;
        setName(userData.fullname);
        setEmail(userData.email);
        setProfileImage(userData.profilePicture);
        setUserId(userData.id);
      })
      .catch((error) => {
        console.error("Error al obtener los datos del usuario:", error);
      });
  }, []);

  return (
    <div className="perfil-card">
      <div className="profile-image" {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="profile-image-inner">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Imagen de perfil"
              className="profile-image"
              loading="lazy"
            />
          ) : (
            <div className="profile-circle"></div>
          )}
        </div>
      </div>
      <div className="profile-info">
        {isEditing ? (
          <div className="input-container">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Nombre"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Correo electrónico"
            />
            <button onClick={handleSaveProfile}>Guardar</button>
          </div>
        ) : (
          <>
            <h2>{name}</h2>
            <p>{email}</p>
            <button onClick={toggleEditing}>Editar</button>
          </>
        )}
      </div>
      <Link to="/registrar-producto">
        <button className="add-product-button">
          <FaUserPlus />
        </button>
      </Link>
    </div>
  );
}

