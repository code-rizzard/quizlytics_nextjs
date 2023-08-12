import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main 
    className="">
      <section
      className='pt-16 px-6 text-center pb-6 '
      >
        <div
        className='flex flex-col gap-6 items-center'
        >
          <h2
          className='text-4xl font-extrabold text-onBg-dark'
          >
            <span className='text-primary'>
              Empowering Curiosity
            </span>        
            <br />
            Explore, Learn, and Analyze
          </h2>
          <span>
          Fueling your quest for knowledge through interactive exploration and insightful analysis
          </span>
          <Link 
          href="/"
          className='bg-primary text-onPrimary px-6 py-3 rounded-md font-bold text-2xl max-w-sm border-b-4 border-primary-dark'
          >Get Started</Link>
        </div>
      </section>
    </main>
  )
}
