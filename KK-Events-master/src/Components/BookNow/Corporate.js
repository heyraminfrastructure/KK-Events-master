import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./Booking.css";
import { toast } from 'react-toastify';
import swal from 'sweetalert'

const Corporate = () => {
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
            <div className="btn btn-secondary" onClick={() => setShowForm(true)}>Corporate Events</div>
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
                                    <option value="Conferences">Conferences</option>
                                    <option value="Seminars Team Building Events">Seminars Team Building Events</option>
                                    <option value="Tradeshows/Expos (anywhere In India Or Abroad)">Tradeshows/Expos (anywhere In India Or Abroad)s</option>
                                    <option value="Corporate Dinners">Corporate Dinners</option>
                                    <option value="Product Launch">Product Launch</option>
                                    <option value="Annual Functions">Annual Functions</option>
                                    <option value="Charity/Networking Events Fashion Shows">Charity/Networking Events Fashion Shows</option>
                                    <option value="College Or School Fests">College Or School Fests</option>
                                    <option value="New Year Parties">New Year Parties</option>
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

export default Corporate;