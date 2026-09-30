import React, { useState } from 'react';

const CreatePost = () => {

    const [title, settitle] = useState("")
    const [body, setbody] = useState("")
    const [status, setstatus] = useState("")
    const [submited, setsubmited] = useState(null)
    const [loading, setloading] = useState(false)

    const submit = async (event) => {
        event.preventDefault()
        if (!title.trim() || !body.trim()) {
            setstatus("please fill all fields")
            return
        }

        try {
            setloading(true)
            setstatus("")

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    method: "post",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        title,
                        body,
                        userid: 1,
                    }),
                }
            )
            if (!response.ok) {
                throw new Error("Failed to create post")
            }

            const data = await response.json();

            setsubmited(data)
            setstatus(`Post created with id${data.id}`)

            setTimeout(() => {
                setstatus("")
            }, 2000);

            settitle("")
            setbody("")
        } catch (error) {
            setstatus(error.message)
        } finally {
            setloading(false)
        }
    }

    return (
        <>
            <div>
                <h1>Create New Post</h1>

                <form onSubmit={submit}>
                    <input type="text"
                        placeholder='Enter post title'
                        value={title}
                        onChange={(event) => settitle(event.target.value)}
                    />

                    <br />

                    <textarea
                        placeholder='Enter post body'
                        value={body}
                        onChange={(event) => setbody(event.target.value)}
                    />

                    <br />

                    <button type='submit' disabled={loading}>
                        {loading ? "Saving ..." : "Create Post"}
                    </button>
                </form>

                {status && <p>{status}</p>}

                {submited && (
                    <div>
                        <h2>Last Submitted</h2>

                        <p><strong>DI:</strong>{submited.id}</p>

                        <p><strong>Title:</strong>{submited.title}</p>

                        <p><strong>Body:</strong>{submited.body}</p>
                    </div>
                )}

            </div>
        </>
    )
}

export default CreatePost
