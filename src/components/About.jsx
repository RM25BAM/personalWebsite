import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full justify-center"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] justify-center"
      >
          I'm a student at Manhattan College majoring in a bachelors of Computer Science and set to graduate in May 2025. I'm actively involved in campus organizations such as CSTEP,  Girls Who Code, Entrepreneur Club, and the Association for Computing Machinery. I mastered database management, Git version control, and Java development, while also becoming proficient in Javascript and the Sencha Ext JS framework. I'm a recipient of the Hack.Diversity Fellowship, which underscores my commitment to diversity and professional growth. My technical skills span Java, Javascript, HTML/CSS, Python, C++, and more, making me well-prepared for challenges in the tech industry.
      </motion.p>
      <div
        className="mt-20 flex flex-wrap gap-10 justify-center"
      >{services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")