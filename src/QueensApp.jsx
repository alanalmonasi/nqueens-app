import React, { useState } from "react";
import { ChessBoard } from "./components/ChessBoard";

export const QueensApp = () => {
   const [size, setSize] = useState(0);

   const handleSize = (e) => {
      const value = Math.round(e.target.value);
      if (value <= 7) return;
      setSize(value);
   };

   return (
      <>
         <h1>N-QUEENS problem</h1>
         <hr />
         <div className="container m-2">
            <div className="row">
               <div className="col">
                  <div>
                     <label>
                        Enter board size
                        <input
                           step="1"
                           onChange={handleSize}
                           type="number"
                           className="form-control mt-3 mb-2"
                           id="board-size"
                           placeholder="The minimum size is 8"
                           min="8"
                        />
                     </label>
                  </div>
               </div>
               <div className="col-9">
                  <ChessBoard size={size} />
               </div>
            </div>
         </div>
      </>
   );
};
