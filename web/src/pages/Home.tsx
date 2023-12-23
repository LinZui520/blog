import { useEffect } from 'react';
import Footer from '../components/index/Footer';
import {motion} from "framer-motion";

const Home = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <div className={"flex flex-col justify-center items-center h-screen"}>
        <motion.div
          whileHover={{scale: 1.2}}
          whileTap={{scale: 0.9}}
          drag
          dragConstraints={{
            top: -0,
            left: -0,
            right: 0,
            bottom: 0,
          }}
          className={"text-[#1d1d1f] text-[64px]"}
        >
          朱贵是混蛋
        </motion.div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;