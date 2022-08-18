import { useEffect, useState } from "react";
import Cell from "./Cell";
import { solveQueens } from "./solveQueens";
import axios from "axios";

export const ChessBoard = ({ size }) => {
   const chessBox = {
      width: "max-content",
      gridTemplateColumns: `repeat(${size}, 1fr)`,
      display: "grid",
      marginTop: "20px",
      boxShadow: "12px 12px 3px rgba(0,0,0,0.9)",
   };

   const [nextResult, setNextResult] = useState(0);

   const increment = () => {
      if (nextResult === chessBoard.length - 1) return;
      setNextResult(nextResult + 1);
      saveSolution();
   };

   const { chessBoard } = solveQueens(size);

   const currentChessBoard = chessBoard[nextResult];

   const saveSolution = () => {
      const newSolution = {
         sol: currentChessBoard,
         solved: true,
      };
      axios.post("http://localhost:5000/", newSolution);
   };

   //Reset the iteration of results if size changes
   const reset = () => {
      setNextResult(0);
   };

   useEffect(() => {
      reset();
   }, [size]);

   return (
      <>
         <h2>Chessboard</h2>
         <div style={chessBox}>
            {currentChessBoard.map((r, x) =>
               r.map((c, y) => (
                  <Cell queen={c} key={`${x}${y}`} color={x + y} />
               ))
            )}
         </div>
         <div
            style={{ display: size <= 7 ? "none" : "" }}
            className="solutions"
         >
            <button onClick={increment} className="btn btn-primary mt-4">
               Next solution
            </button>
            <hr />
            <div>
               Current solution: {JSON.stringify(currentChessBoard).split(",")}
            </div>
            <div aria-label="total-solutions">
               Total solutions for this board size: {chessBoard.length}
            </div>
            <div id="remaining-solutions">
               Remaining solutions: {chessBoard.length - 1 - nextResult}
            </div>
         </div>
      </>
   );
};
