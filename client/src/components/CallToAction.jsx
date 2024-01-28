import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to see more about Futurism, Progress, Tech, Anime, or Fitness?
            </h2>
            <p className='text-gray-500 my-2'>
                Check out my portfolio!
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://zensconsulting.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    Zen Consulting
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2023/03/11/22/21/ai-generated-7845459_1280.jpg" />
        </div>
    </div>
  )
}
