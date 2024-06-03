import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Booking.css";
import swal from 'sweetalert'

const Social = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowForm(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formRef]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/book-now",
        formData
      );
      swal("Good job!","Booked successfully:", "success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        event: "",
        location: "",
      });
    } catch (error) {
      swal("Please wait","Try after sometime","error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="btn btn-secondary" onClick={() => setShowForm(true)}>Social Events</div>
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content" ref={formRef}>
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <label>
                  Name <span className="mandatory">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label>
                  Email<span className="mandatory">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>
                  Phone<span className="mandatory">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

                <label>
                  Event<span className="mandatory">*</span>
                </label>

                {/* <input
                  name="event"
                  value={formData.event}
                  onChange={handleChange}
                /> */}
                
                <select
                  name="event"
                  value={formData.event}
                  onChange={handleChange} required
                  className="select"
                >
                  <option value="">Select Event</option>
                  <option value="Wedding Events">Wedding Events</option>
                  <option value="Wedding On Cruise">Wedding On Cruise</option>
                  <option value="Destination Wedding">Destination Wedding</option>
                  <option value="Birthday Events">Birthday Events</option>
                  <option value="Saree/Dhoti Function">Saree/Dhoti Function</option>
                  <option value="Shastipurthi">Shastipurthi</option>
                  <option value="Get Together">Get Together</option>
                  <option value="Upanayanam">Upanayanam</option>
                  <option value="Retirement">Retirement</option>
                  <option value="Surprise Parties">Surprise Parties</option>
                  <option value="Surprise Proposals">Surprise Proposals</option>
                </select>

                <label>
                  Location<span className="mandatory">*</span>
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                <input
                  type="submit"
                  value={submitting ? "Submitting Application..." : "Submit"}
                  disabled={submitting}
                />
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Social;