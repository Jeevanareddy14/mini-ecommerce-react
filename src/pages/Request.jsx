import React, { useState } from "react";

export default function Request() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [item, setItem] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    // Make POST request
    await fetch("http://localhost:3000/requestItem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, item })
    });
    // handle response as needed
  };

  return (
    <div style={{ width: "90%", maxWidth: 800, margin: "0 auto", marginTop: 40 }}>
      <h2 style={{ textAlign: "center", marginBottom: 30, fontWeight: 500 }}>Request Page</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <label htmlFor="input-mail" style={{ fontSize: 15 }}>Email address</label>
        <input
          id="input-mail"
          type="email"
          data-testid="input-mail"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            width: "100%", padding: 8, fontSize: 15, border: "1px solid #ccc", borderRadius: 3
          }}
        />

        <label htmlFor="input-name" style={{ fontSize: 15 }}>Name</label>
        <input
          id="input-name"
          type="text"
          data-testid="input-name"
          placeholder="Enter your name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{
            width: "100%", padding: 8, fontSize: 15, border: "1px solid #ccc", borderRadius: 3
          }}
        />

        <label htmlFor="input-item" style={{ fontSize: 15 }}>Request Item</label>
        <input
          id="input-item"
          type="text"
          data-testid="input-item"
          placeholder="Enter item you want to request"
          value={item}
          onChange={e => setItem(e.target.value)}
          required
          style={{
            width: "100%", padding: 8, fontSize: 15, border: "1px solid #ccc", borderRadius: 3
          }}
        />

        <button
          data-testid="submit"
          type="submit"
          style={{
            width: 88, marginTop: 10, padding: "8px 0",
            background: "#007bff", color: "#fff", border: "none",
            borderRadius: 4, fontSize: 15, cursor: "pointer"
          }}
        >
          Request
        </button>
      </form>
    </div>
  );
}
