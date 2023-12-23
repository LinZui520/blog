import {motion} from "framer-motion";


const HomeAdmin = () => {
  return (
    <div className={"flex flex-col justify-center items-center bg-[#fbfbfd] h-screen w-[80vw]"}>
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
        首页
      </motion.div>
    </div>
  );
}

export default HomeAdmin;