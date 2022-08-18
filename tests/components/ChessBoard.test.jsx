import { render, screen, fireEvent } from "@testing-library/react";
import { ChessBoard } from "../../src/components/ChessBoard";

describe("testing ChessBoard component", () => {
   test("should show default component", () => {
      const { container } = render(<ChessBoard size={0} />);
      expect(container).toMatchSnapshot();
   });

   test("Number of solutions should be 2 if board size is 4", () => {
      render(<ChessBoard size={4} />);
      expect(screen.getByLabelText("total-solutions").innerHTML).toContain(
         "Total solutions for this board size: 2"
      );
   });

   test("Number of solutions should be 92 if board size is 8", () => {
      //if you put other size it will give error and tell the number of solutions for that size
      render(<ChessBoard size={8} />);
      expect(screen.getByLabelText("total-solutions").innerHTML).toContain(
         "92"
      );
   });

   test("Number of queens on board should be the same of size number", () => {
      const n = 9;
      render(<ChessBoard size={n} />);
      const img = screen.getAllByRole("img").length;
      expect(img).toBe(n);
   });
});
