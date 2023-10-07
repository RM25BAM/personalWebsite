/*  import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { Document, Page } from 'react-pdf';

 // Import your PDF file correctly as a URL


 import NP_Resume from '../assets/Piedrabuena_Natasha_Resume.pdf';



const Resume = () => {
  return (
    <div
      className="mt-12 bg-black-100 rounded-[20px]"
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>
                    Resume
                 </p>
                <h2 className={styles.sectionHeadText}>
                    Viewer.
                </h2>
            </motion.div>
            <motion.p>
                <div className='main-container'>
                    <Document file={NP_Resume} >
                        <Page pageNumber={2} />
                    </Document>
                </div>
            </motion.p> 
        </div>
    </div>
  );
};

export default SectionWrapper(Resume, "");  
 */
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { Document, Page } from 'react-pdf';

import NP_Resume from '../assets/Piedrabuena_Natasha_Resume.pdf';

const Resume = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Resume</p>
          <h2 className={styles.sectionHeadText}>Viewer.</h2>
        </motion.div>
        <motion.div>
          <div className='main-container'>
            <Document file={NP_Resume}>
              <Page pageNumber={2} />
            </Document>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Resume, "");



