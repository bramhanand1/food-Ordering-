import { sum } from "../sum";

test("sum of nom ",()=>{

    const result = sum(4,4);

    expect(result).toBe(8);
});
