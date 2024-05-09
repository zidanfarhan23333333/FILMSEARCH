import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Silakan isi email dan password");
    } else if (email !== "admin@example.com" || password !== "password") {
      setError("Email atau password tidak valid");
    } else {
      localStorage.setItem("token", "your-token");
      window.location.href = "/";
    }
  };

  return (
    <div
      className="container "
      style={{ minHeight: "100vh", justifyContent: "center" }}
    >
      <div className="row justify-content-center">
        <div
          className="col-md-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            className="card border-0 rounded shadow-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="card-body"
              style={{
                display: "flex",
                flexDirection: "column",
                background: "gray",
                borderRadius: 10,
                padding: 50,
                width: 450,
                height: "auto",
              }}
            >
              <h4 className="fw-bold text-center">LOGIN</h4>
              <hr />
              {error && <div className="alert alert-danger">{error}</div>}
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div className="form-group">
                  <label for="exampleInputEmail1" style={{ padding: 10 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Masukan email anda"
                    style={{ padding: 20 }}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" style={{ padding: 10 }}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    style={{ padding: 20 }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block form-control"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
