import Form from './Form';

function EmailFeatures() {
    const { formData, msg, handleChange, handleSubmit } = Form();
    return (
        <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 ml-[40%] text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                >
                    Submit
                </button>
                <p className='mt-5'>{msg ? (<span className='font-semibold'>Email sent successfully from: <span className='text-teal-500'>ashifmd9@gmail.com</span></span>) : ("")}</p>
            </form>
        </div>
    );
};
export default EmailFeatures;
