import React, { useEffect } from 'react';
import { useGetPostsQuery } from '/src/services/simpleService';

const PostsComponent= () => {
    const { data: posts, error, isLoading, isSuccess } = useGetPostsQuery();

    useEffect(() => {
        if (isSuccess) {
            console.log('Posts loaded:', posts);
        }
    }, [isSuccess, posts]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            {posts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsComponent;
