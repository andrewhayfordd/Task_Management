import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import "../../../css/app.css"

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [status, setStatus] = useState('in-progress');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/posts', { title, content, status });
    };

    return (
        <div className='create'>
            <h1>Create Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Title</h2>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <h2>Content</h2>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div>
                    <h2>Status</h2>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Create;
