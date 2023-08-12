import { highlightsCircleImageInfo } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main 
    className="">
      <section
      className='py-16 ext-center relative overflow-hidden'
      >
        <div
        className='flex px-6  flex-col gap-6 items-center text-center'
        >
          <h2
          className='text-2xl font-extrabold text-onBg-dark'
          >
            <span className='text-primary text-3xl inline-block brand__anim'>
              Empowering Curiosity
            </span>        
            <br />
            Explore, Learn, and Analyze
          </h2>
          <span
          className='max-w-[250px] text-sm'
          >
            Fueling your quest for knowledge through interactive exploration and insightful analysis
          </span>
          <Link 
          href="/"
          className='button-primary px-6 py-3 rounded-md font-bold text-2xl max-w-sm '
          >Get Started</Link>
        </div>

        {
          highlightsCircleImageInfo.map((val, index) => (
            <Image
            style={{animationDelay: `${(index+1) * 0.15}s`}}
            className={`absolute z-[-10] select-none  highlight__circle-anim translate-x-[-50%] translate-y-[50%] highlight__circle-${val}`}
            src="/images/circle.png"
            width={val}
            height={val}
            alt="Circle"
            />
          ))
        }
       
      </section>
      <section
      className='px-6 py-2 flex flex-col gap-6 items-center'
      >
        <article
        className='bg-onBg-ltr py-4 px-6 rounded-lg'
        >
          <h3
          className='text-xl font-extrabold text-onBg-dark'
          >Unlock Your Mind's Potential</h3>
          <p>
          Discover a new dimension of learning and fun with Quizlytics - where quizzes evolve into insights.
          </p>
        </article>
        <article
        className='bg-onBg-ltr py-4 px-6 rounded-lg'
        >
          <h3
          className='text-xl font-extrabold text-onBg-dark'
          >Quizzes Reimagined, Knowledge Amplified</h3>
          <p>
          Elevate your learning experience with Quizlytics, where quizzes fuse with analytics to provide you with meaningful insights.
          </p>
        </article>
        <article
        className='bg-onBg-ltr py-4 px-6 rounded-lg'
        >
          <h3
          className='text-xl font-extrabold text-onBg-dark'
          >
            Quiz, Learn, Analyze: All in One Place
          </h3>
          <p>
          Dive into the world of knowledge exploration with Quizlytics, the app that transforms quizzes into pathways to deeper insights.
          </p>
        </article>
      </section>
      <section
      className='bg-primary-lt w-full text-onPrimary py-8 px-6 flex flex-col gap-3'
      id='contact'
      >
        <h2
        className='text-2xl font-bold'
        >Contact Us</h2>
        <p>
          Have questions, suggestions, or feedback? We're here to help. Feel free to reach out to us using the contact information below
        </p>
        <span className='font-bold'>Contact Information:</span>
        <br />
        <ul className='list-disc pl-6'>
          <li>Email: contact@quizlytics.com</li>            
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 123 Quiz Street, Cityville, QZ 98765</li>
        </ul>
      </section>
    </main>
  )
}
