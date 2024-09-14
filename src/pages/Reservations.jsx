import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jsPDF } from 'jspdf';
import reservationCardImage from './image/Blue and White Elegant Business Card.png'; // Import the image used as the card background



const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  // Define restaurant hours
  const restaurantHours = {
    monday: { open: '09:00', close: '22:00' },
    tuesday: { open: '09:00', close: '22:00' },
    wednesday: { open: '09:00', close: '22:00' },
    thursday: { open: '09:00', close: '22:00' },
    friday: { open: '09:00', close: '23:00' },
    saturday: { open: '09:00', close: '23:00' },
    sunday: { open: '10:00', close: '20:00' }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem('reservationData', JSON.stringify(formData));
    toast.success('Your reservation has been successfully submitted!', {
      position: 'top-center',
      autoClose: 5000,
    });
    // Show the popup with reservation details
    setShowPopup(true);
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel the reservation?')) {
      localStorage.removeItem('reservationData');
      toast.info('Reservation has been canceled.', {
        position: 'top-center',
        autoClose: 5000,
      });
      // Reset the form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
      });
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
  
// Set the background for the image
doc.addImage(reservationCardImage, 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());
  
// Set the color for the titles
doc.setTextColor('#facc15');
  
// Setting font and text formatting
doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
  
// Add reservation content
doc.text('Reservation Details', 10, 20);
  
// Reset color for other texts
doc.setTextColor('#000000'); 
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
  
    const reservationDetails = [
      ['Full Name:', formData.fullName],
      ['Email Address:', formData.email],
      ['Phone Number:', formData.phone],
      ['Reservation Date:', formData.date],
      ['Reservation Time:', formData.time],
      ['Number of Guests:', formData.guests],
      ['Special Notes:', formData.notes],
    ];
  
// Draw reservation details
reservationDetails.forEach((detail, index) => {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor('#facc15');
      doc.text(detail[0], 10, 30 + (index * 10)); // Set titles in #facc15

  
      doc.setFont('helvetica', 'normal');
      doc.setTextColor('#000000');
      doc.text(detail[1], 60, 30 + (index * 10)); // Set values ​​to black

    });
  
// Save the PDF file
doc.save('reservation-details.pdf');
  };
  

  // Get current day of the week
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const { open, close } = restaurantHours[today] || { open: 'N/A', close: 'N/A' };

  return (
    <div className="max-w-md mx-auto p-4 bg-gradient-to-r from-blue-500 to-green-500 shadow-lg rounded-lg mt-16">
      <h2 className="text-2xl font-bold mb-4 glowing-text">Reservation Form</h2>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 glowing-text">Restaurant Hours</h3>
        <p className="text-sm text-gray-600">Current Day: {today.charAt(0).toUpperCase() + today.slice(1)}</p>
        <p className="text-sm text-gray-600">Open: {open}</p>
        <p className="text-sm text-gray-600">Close: {close}</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium glowing-text">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium glowing-text">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium glowing-text">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium glowing-text">Reservation Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium glowing-text">Reservation Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium glowing-text">Number of Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="notes" className="block text-sm font-medium glowing-text">Special Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-yellow-400 text-zinc-800 hover:bg-yellow-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Confirm Reservation
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="w-full px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-2"
        >
          Cancel Reservation
        </button>
      </form>
      {showPopup && (
        <div className="popup fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-4 shadow-lg rounded-lg relative">
            <img src={reservationCardImage} alt="Reservation Card" className="rounded-lg w-full h-auto mb-4" />
            <div className="reservation-details space-y-2">
              <h2 className="text-xl font-bold">Reservation Card</h2>
              <p><strong>Full Name:</strong> {formData.fullName}</p>
              <p><strong>Email Address:</strong> {formData.email}</p>
              <p><strong>Phone Number:</strong> {formData.phone}</p>
              <p><strong>Reservation Date:</strong> {formData.date}</p>
              <p><strong>Reservation Time:</strong> {formData.time}</p>
              <p><strong>Number of Guests:</strong> {formData.guests}</p>
              {formData.notes && <p><strong>Special Notes:</strong> {formData.notes}</p>}
            </div>
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-red-500 hover:text-red-700 focus:outline-none"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>
            <button
              onClick={handleDownloadPDF}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Download Card as PDF
            </button>
          </div>
        </div>
        
      )}
      
      <ToastContainer />
      
    </div>


    
  );

};


export default ReservationForm;
