 import { render, screen} from "@testing-library/react";
 import Contact from "../Contact";
 import "@testing-library/jest-dom";

 test("load",()=>{
    render(<Contact/>);

    const button = screen.getByText("sumbit")

    expect (button).toBeInTheDocument();
 });