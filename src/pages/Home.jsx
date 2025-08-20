import React, { useState, useEffect} from 'react'
import { Container, PostCard} from '../components'
import appwriteService from '../appwrite/config'

function Home() {
    const [posts, setPost ] = useState()
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts) {
                setPost(posts.documents)
            }
        })
    })

    if(posts?.length === 0) {
         return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-3xl font-bold hover:text-gray-500">
                                Create new Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts?.map((posts) => (
                    <div key={posts.$id} className='p-2 w-1/4'>
                    <PostCard {...posts} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default Home