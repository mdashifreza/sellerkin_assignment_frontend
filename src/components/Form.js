import { useState } from 'react';
import axios from 'axios';

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [msg, setMsg] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use Axios for the HTTP request
            const response = await axios.post('https://sellerkin-assignment-backend.vercel.app/api/subscribe', {
                name : formData.name,
                email: formData.email,
            });

            // Check response status and handle accordingly
            if (response.status === 200) {
                setMsg(true);
                console.log('Subscription successful');
            } else {
                console.error('Subscription failed');
            }
        } catch (error) {
            console.error('Error during subscription:', error);
        }
    };

    return {
        formData,
        msg,
        handleChange,
        handleSubmit,
    };
};
