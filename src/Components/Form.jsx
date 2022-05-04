import { useGlobalContext } from "../context";



const Form = () => {

   const { quiz, handleSubmit, handleChange, error, table } = useGlobalContext();

   let tableArray = Object.keys(table);
   Object.keys(table).map(function (item) {
      return table[item]
   });

   //console.log(tableArray);



   return (
      <div className="justify-center flex items-center min-h-screen ">
         <form
            onSubmit={handleSubmit}
            className="bg-slate-200 p-5 md:p-8 max-w-[500px] space-y-8 shadow rounded-lg w-11/12 "
         >
            <h2 className="text-3xl font-medium">Set the Quiz schema</h2>
            <div className="flex flex-col space-y-2">
               <label className="text-gray-600 font-medium" htmlFor="amount">
                  Number of Questions
               </label>
               <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="bg-amber-300 p-2 rounded-md outline-0 focus:bg-gray-300"
                  value={quiz.amount}
                  onChange={handleChange}
                  min={2}
                  max={50}
               />
            </div>
            <div className="flex flex-col space-y-2">
               <label className="text-gray-600 font-medium" htmlFor="category">
                  Which Category
               </label>
               <select
                  id="category"
                  name="category"
                  className="bg-amber-300 p-2 rounded-md outline-0 focus:bg-gray-300"
                  value={quiz.category}
                  onChange={handleChange}
               >

                  {tableArray.map((tabl, index) => {
                     return <option key={index} value={tabl}>{tabl}</option>
                  })}


                  {/* <option value="sports">sports</option> */}
                  {/* <option value="politics">politics</option>
                  <option value="history">history</option>
                  <option value="science">science</option> */}
               </select>
            </div>
            <div className="flex flex-col space-y-2">
               <label className="text-gray-600 font-medium" htmlFor="difficulty">
                  Level of Difficulty
               </label>
               <select
                  id="difficulty"
                  name="difficulty"
                  className="bg-amber-300 p-2 rounded-md outline-0 focus:bg-gray-300"
                  value={quiz.difficulty}
                  onChange={handleChange}

               >
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
               </select>
            </div>
            <div className="flex flex-col space-y-2">
               <label className="text-gray-600 font-medium" htmlFor="type">
                  Type of Answering
               </label>
               <select
                  id="type"
                  name="type"
                  className="bg-amber-300 p-2 rounded-md outline-0 focus:bg-gray-300"
                  value={quiz.type}
                  onChange={handleChange}

               >
                  <option value="multiple">multiple choice</option>
                  <option value="boolean">true or false</option>

               </select>
            </div>
            {error && (
               <p className="text-red-600">
                  Can't Generate Questions, Please Try Different Options
               </p>
            )}
            <button
               type="submit"
               className="bg-orange-600 rounde-md w-full p-2 text-white hover:bg-yellow-800"
            >
               Start
            </button>
         </form>
      </div>
   );
};

export default Form;
