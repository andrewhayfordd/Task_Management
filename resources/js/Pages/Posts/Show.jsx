import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Show = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link href="/posts">Back to Posts</Link>
        </div>
    );
};

export default Show;
