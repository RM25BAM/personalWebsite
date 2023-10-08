import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import NP_Resume from '../assets/Piedrabuena_Natasha_Resume.pdf';
import download from '../assets/download.png';
const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = NP_Resume;
    link.download = 'Piedrabuena_Natasha_Resume.pdf';
    link.click();
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Resume</p>
          <h2 className={styles.sectionHeadText}>Download.</h2>
        </motion.div>
        <motion.p>
          <div className='main-container'>
            <div
              onClick={handleDownload}
              className="black-gradient w-15 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={download}
                alt="download"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </motion.p>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "");




