import React, { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    // Get user data from the backend API
    useEffect(() => {
        fetch('http://localhost:3000/users') // Make sure the backend is running on port 3000
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-primary text-center">User Management System</h1>
            <table className="table table-striped mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-success mt-3">Add User</button>
        </div>
    );
}

export default App;
