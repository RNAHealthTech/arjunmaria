import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

interface AppointmentModalProps {
  isOpen2: boolean;
  onClose2: () => void;
}

const OnlineAppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen2, onClose2 }) => {
  const [state, handleSubmit] = useForm('xovagdyp');
  const [formData, setFormData] = useState({
    type: 'Online',
    child_name: '',
    child_age: '', 
    parent_name: '',
    phone: '',
    email: '',
    date: '',
    text: '',
  });

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        onClose2();
        setFormData({
          type: 'Online',
          child_name: '',
          child_age: '', 
          parent_name: '',
          phone: '',
          email: '',
          date: '',
          text: '',
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded, onClose2]);

  if (!isOpen2) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-orange-200 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-[1000]"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-center font-fraunces-slab text-blue-800">Book Online Appointment</h2>
            {state.succeeded ? (
              <p className="text-blue-700 text-center font-work-sans">Your appointment has been booked successfully!</p>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-4 font-work-sans">
                <div>
                  <label htmlFor="child_name" className="block text-sm font-medium text-blue-700">Child's Name</label>
                  <input type="text" id="child_name" name="child_name" value={formData.child_name} onChange={handleChange} required className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="child_age" className="block text-sm font-medium text-blue-700">Child's Age</label>
                  <input
                    type="text"
                    name="child_age"
                    id="child_age"
                    value={formData.child_age}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="parent_name" className="block text-sm font-medium text-blue-700">Parent's Name</label>
                  <input type="text" id="parent_name" name="parent_name" value={formData.parent_name} onChange={handleChange} required className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-700">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-700">Phone</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-blue-400 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-blue-700">Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent" />
                </div>
                 
                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-blue-700">Message</label>
                  <textarea id="text" name="text" rows={4} value={formData.text} onChange={handleChange} className="mt-1 block w-full border border-blue-500 rounded-md shadow-sm p-2 bg-white text-zinc-900 focus:ring-2 focus:ring-blue-400 focus:border-transparent"></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                  <button type="button" onClick={onClose2} className="px-4 py-2 border border-blue-300 rounded-md text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors duration-300">
                    Cancel
                  </button>
                  <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-900 bg-white  transition-colors duration-300">
                    Book Appointment
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default OnlineAppointmentModal;