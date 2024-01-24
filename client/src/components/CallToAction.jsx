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
            <img src="https://www.flycer.com/wp-content/uploads/2023/03/AI_singularity_and_the_Importance_of_Human_Capital_fantasy_wo_0.jpg" />
        </div>
    </div>
  )
}