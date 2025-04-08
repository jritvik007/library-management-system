import React from 'react';
import './Modal.css'; 

function Modal({ type, form, onChange, onConfirm}) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{type === 'login' ? 'Login' : 'Register'}</h2>

        {type === 'register' && (
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={onChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={onChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={onChange}
          required
        />

        <div className="modal-buttons">
          <button onClick={onConfirm}>{type === 'login' ? 'Login' : 'Register'}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;