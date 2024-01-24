export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Zenith
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Zenith! This blog was created by Amaar
              as a personal project to share his thoughts and ideas with the
              world. Amaar is a passionate developer who loves to write about
              tech, fitness, anime, futurism, and everything in between.
            </p>

            <p>
              On this blog, you'll find daily articles on topics
              such as tech, fitness, anime, futurism. Amaar is always learning and exploring new
              innovations and ideas in these fields, so be sure to check back often for new content!
            </p>

            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. We believe that a community of optimists and scholars can help
              each other grow and improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}