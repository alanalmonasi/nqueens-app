import { useEffect, useState } from "react";

export const solveQueens = (n) => {
   const nQueens = (n) => {
      let result = [];

      const queens = Array(n).fill(0);

      function makeBoard() {
         const board = [];

         for (let r = 0; r < n; r++) {
            let row = [];

            for (let col = 0; col < n; col++) {
               if (queens[r] === col) {
                  row.push(1);
               } else {
                  row.push(0);
               }
            }
            board.push(row);
         }
         return board;
      }

      function validPos(row, col) {
         for (let i = 0; i < row; i++) {
            if (
               Math.abs(i - row) == Math.abs(queens[i] - col) ||
               queens[i] == col
            ) {
               return false;
            }
         }
         return true;
      }

      function solve(row) {
         if (row === n) {
            const board = makeBoard();
            result.push(board);
         }

         for (let col = 0; col < n; col++) {
            if (!validPos(row, col)) {
               continue;
            }
            queens[row] = col;

            solve(row + 1);

            queens[row] = -1;
         }
      }
      solve(0);
      return result;
   };

   const [chessBoard, setChessBoard] = useState(nQueens(n));

   useEffect(() => {
      setChessBoard(nQueens(n));
   }, [n]);

   return {
      chessBoard,
   };
};
