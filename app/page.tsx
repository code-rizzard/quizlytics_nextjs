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
            <span className='text-primary'>
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
          className='bg-primary text-onPrimary px-6 py-3 rounded-md font-bold text-2xl max-w-sm border-b-4 border-primary-dark'
          >Get Started</Link>
        </div>

        <Image
        className='absolute top-[0%] right-[0%] translate-x-[50%] translate-y-[-50%]  z-[-10]'
        src="/images/circle.png"
        width={156}
        height={156}
        alt="Circle"
        />
        <Image
        className='absolute top-[35%] left-[90%] translate-x-[-50%] translate-y-[50%] z-[-10]'
        src="/images/circle.png"
        width={36}
        height={36}
        alt="Circle"
        />
        <Image
        className='absolute top-[55%] left-[80%] translate-x-[-50%] translate-y-[50%] z-[-10]'
        src="/images/circle.png"
        width={12}
        height={12}
        alt="Circle"
        />
        
        <Image
        className='absolute bottom-[30%] left-0 translate-x-[-50%] translate-y-[50%] z-[-10]'
        src="/images/circle.png"
        width={128}
        height={128}
        alt="Circle"
        />
      </section>
    </main>
  )
}
