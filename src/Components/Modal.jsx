import { useGlobalContext } from "../context";
import Confetti from "react-confetti";

const Modal = () => {
   const { closeModal, isModalOpen, correct, questions } = useGlobalContext();
   let score = ((correct / questions.length) * 100).toFixed(0);
   return (
      <>
         {isModalOpen && (
            <div className="absolute top-0 left-0 h-screen w-full flex items-center bg-[rgba(0,0,0,.5)]">
               {score > 40 && <Confetti />}
               <div className=" text-center bg-white p-8 mx-auto rounded-lg max-w-[600px] w-11/12">
                  <h4 className="text-3xl pb-3 text-center font-bold">
                     Your score is{" "}
                     <span className={score > 40 ? "text-green-600" : "text-red-600"}>
                        {score}%
                     </span>
                  </h4>
                  <p className="py-2">
                     You got {correct}/{questions.length}
                  </p>
                  {(score > 80) && <p className="py-2 text-xl">You are genius!!!</p>}
                  {(score > 60) && <p className="py-2 text-xl">You are smart, no doubt!!!</p>}
                  {(score > 40 && score < 59) && <p className="py-2 text-xl">You think you are very smart, but you're NOT!!! </p>}
                  {(score > 20 && score < 39) && <p className="py-2 text-xl">You are very close to Idiot!!!</p>}
                  {(score >= 0 && score < 19) && <p className="py-2 text-xl">You are idiot!!!</p>}

                  <button
                     className="bg-yellow-600 py-2 px-7 rounded-xl text-white mt-2 hover:bg-yellow-500"
                     onClick={closeModal}
                  >
                     Play Again
                  </button>
               </div>
            </div>
         )}
      </>
   );
};

export default Modal;
