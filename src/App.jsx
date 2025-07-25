import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { name, email, department };
    setSubmittedData((prevData) => [...prevData, newEntry]);

    setName('');
    setEmail('');
    setDepartment('');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light"
      style={{ minHeight: '100vh', width: '100vw' }}
    >
      <div
        className="p-4 shadow bg-white"
        style={{
          width: '90%',
          maxWidth: '600px',
          borderRadius: '8px',
        }}
      >
        <h2 className="mb-4 text-center">Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department:</label>
            <input
              type="text"
              className="form-control"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
              placeholder="Enter your department"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>

        {submittedData.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-3 text-center">Submitted Entries</h4>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-dark">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.name}</td>
                      <td>{entry.email}</td>
                      <td>{entry.department}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
