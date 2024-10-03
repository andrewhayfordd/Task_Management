import React from 'react';
import { Link } from '@inertiajs/react';
import "../../../css/app.css"

const Index = ({ posts }) => {
    return (
        <div className='index'>

            <div className="head">
            <div><h1>Task Management</h1></div>
            <div><Link href="/posts/create">Create Task</Link></div>
            </div>
            

<table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border">ID</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2 border text-center">{post.id}</td>
                            <td className="px-4 py-2 border">{post.title}</td>
                            <td className='px-4 py-2 border'>{post.content}</td>
                            <td className='px-4 py-2 border text-white text-center'>
                                <div className='status' style={{
                                backgroundColor: post.status === 'completed' ? 'green' : 'red'}}>
                                {post.status === 'completed' ? 'Completed' : 'In Progress'}
                                </div>
                            </td>
                            <td className="px-4 py-2 border text-center">
                                <Link href={`/posts/${post.id}/edit`}>
                                    <button className="bg-yellow-600 text-white mx-2 p-1">Edit</button>
                                </Link>
                                <form method="POST" action={`/posts/${post.id}`} style={{ display: 'inline' }}>
                                <input type="hidden" name="_token" value={document.querySelector('meta[name="csrf-token"]').getAttribute('content')} />
                                    <input type="hidden" name="_method" value="DELETE" />
                                    <button type="submit" className="bg-red-700 text-white p-1">Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
};

export default Index;
