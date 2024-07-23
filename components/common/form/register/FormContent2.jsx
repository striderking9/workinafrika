"use client";

import { useState } from "react";


const EnumTailleEntreprise = {
    SIZE_0_TO_10: "0 to 10 employees",
    SIZE_10_TO_50: "10 to 50 employees",
    SIZE_50_TO_100: "50 to 100 employees",
    SIZE_100_TO_200: "100 to 200 employees",
    SIZE_200_TO_500: "200 to 500 employees"
};

const FormContent2 = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  const [nom, setNomCandidat] = useState('');
  const [prenom, setPrenomCandidat] = useState('');
  const [lienFacebook, setLienFacebook] = useState('');
  const [lienTwitter, setLienTwitter] = useState('');
  const [lienLinkedIn, setLienLinkedIn] = useState('');
  const [pays, setPays] = useState('');
  const [ville, setVille] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
        email,
        password,
        confirmPassword,
        nom,
        prenom,
    };
    //167.86.125.178

    try {
      const response = await fetch('http://192.168.1.179:8083/afrik-connect/api/v1/users/saveCandidat',
          {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Handle the response data
      if (result.status === 200) {
        console.log('Submission successful:', result);
      } else {
        console.log('Error:', result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
      <form method="post" onSubmit={handleSubmit}>

          <div className="form-group">
              <label>Adresse Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          {/* email */}

          <div className="form-group">
              <label>Mot de passe</label>
              <input
                  type="password"
                  name="password"
                  placeholder="Mot de Passe"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          {/* email */}

          <div className="form-group">
              <label>Confirmer le mot de passe</label>
              <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Mot de Passe"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </div>
          {/* email */}

        <div className="form-group">
          <label>Nom candidat</label>
          <input
              type="text"
              name="nomCandidat"
              placeholder="Nom"
              required
              value={nom}
              onChange={(e) => setNomCandidat(e.target.value)}
          />
        </div>
        {/* nomEntreprise */}

        <div className="form-group">
          <label>Prenom</label>
          <input
              type="text"
              name="prenomCandidat"
              placeholder="Prenom"
              required
              value={prenom}
              onChange={(e) => setPrenomCandidat(e.target.value)}
          />
        </div>
        {/* siteWebEntreprise */}

        <div className="form-group">
          <label>Lien Facebook</label>
          <input
              type="text"
              name="lienFacebook"
              placeholder="Lien Facebook"
              
              value={lienFacebook}
              onChange={(e) => setLienFacebook(e.target.value)}
          />
        </div>
        {/* lienFacebook */}

        <div className="form-group">
          <label>Lien Twitter</label>
          <input
              type="text"
              name="lienTwitter"
              placeholder="Lien Twitter"
              
              value={lienTwitter}
              onChange={(e) => setLienTwitter(e.target.value)}
          />
        </div>
        {/* lienTwitter */}

        <div className="form-group">
          <label>Lien LinkedIn</label>
          <input
              type="text"
              name="lienLinkedIn"
              placeholder="Lien LinkedIn"
              
              value={lienLinkedIn}
              onChange={(e) => setLienLinkedIn(e.target.value)}
          />
        </div>
        {/* lienLinkedIn */}

        <div className="form-group">
          <label>Pays</label>
          <input
              type="text"
              name="pays"
              placeholder="Pays"
              required
              value={pays}
              onChange={(e) => setPays(e.target.value)}
          />
        </div>
        {/* pays */}

        <div className="form-group">
          <label>Ville</label>
          <input
              type="text"
              name="ville"
              placeholder="Ville"
              required
              value={ville}
              onChange={(e) => setVille(e.target.value)}
          />
        </div>
        {/* ville */}

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Enregistrer
          </button>
        </div>
        {/* submit */}
      </form>
  );
};

export default FormContent2;
