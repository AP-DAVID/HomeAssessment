import Layout from '@/components/Layout';
import Work from '@/features/Work';
import Navigator from '@/features/Navigator';
import { TypeAnimation } from 'react-type-animation';
import { GiHand } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { staggerContainer, textContainer, textVariant2 } from '@/utils/motion';

export default function Home() {
  return (
    <Layout>
      {/* my work */}
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='max-w-[1500px] w-full mx-auto my-3'
      >
        <div className='flex  rounded-xl flex-col my-7 space-y-7'>
          <motion.div
            variants={textContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex space-x-2 items-center'
          >
            <motion.h1
              variants={textVariant2}
              className='text-[7vw] sm:text-5xl font-bold tracking-normal'
            >
              Hey!
            </motion.h1>
            <GiHand className='h-[7vh] w-[7vw] sm:h-10 sm:w-10 text-orange-500' />
          </motion.div>
          <TypeAnimation
            preRenderFirstString={true}
            sequence={[
              'I am Adetunde Adetokunbo and I am a Photoshooter',
              1000,
              'I am a PhotoShooter', // initially rendered starting point
              1000,
            ]}
            speed={50}
            className='text-[7vw] hidden lg:inline-flex sm:text-2xl font-semibold max-w-[700px] tracking-normal capitalize'
            repeat={Infinity}
          />
          <h1 className='lg:hidden text-[5vw] sm:text-2xl font-semibold max-w-[700px] tracking-normal capitalize'>
            I am Adetokunbo and I am a Photoshooter
          </h1>{' '}
          <Work />
        </div>

        <Navigator />
      </motion.div>
    </Layout>
  );
}
