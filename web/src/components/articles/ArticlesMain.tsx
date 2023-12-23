import {motion, useInView} from "framer-motion";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import useFetchArticles from "../../hook/useFetchArticles";


const Article = ({item}: any) => {
  const navigate = useNavigate()
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <motion.div
      key={item.id}
      ref={ref}
      onClick={() => navigate('/article/' + item.id)}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      initial={"hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {opacity: 0, scale: 0},
        visible: {opacity: 1, scale: 1},
      }}
      transition={{duration: 1}}
      className={
        "border-2 border-white w-[90vw] h-[45vw] m-[5vw] " +
        "max-w-[600px] max-h-[300px]  " +
        "flex flex-col justify-center items-center " +
        "cursor-pointer select-none rounded-[25px] p-[5px]"
      }
    >
      <h1 className={"text-[28px] text-[#fbfbfd] mb-[2vw]"}>{item.title}</h1>
      <div className={"text-[14px] text-[#fbfbfd]"}>作者：{item.username}</div>
      <div className={"text-[14px] text-[#fbfbfd]"}>发表时间：{new Date(item.create).toLocaleString()}</div>
    </motion.div>
  );
}

const ArticlesMain = () => {

  const {articles} = useFetchArticles()


  return (
    <div className={"w-screen bg-[#1d1d1f] min-h-screen flex flex-col justify-evenly items-center"}>
      {articles.map(item =>
        <Article key={item.id} item={item} />
      )}
    </div>
  );
}

export default ArticlesMain;