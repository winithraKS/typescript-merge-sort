import { merge } from "./merge";

describe('merge',()=>{
    it('three positive arrays', ()=>{
        const col1 = [1,5,7,9,13]
        const col2 = [2,6,8,10]
        const col3 = [12,11,4,3]

        const result = merge(col1,col2,col3)
        expect(result).toEqual([1,2,3,4,5,6,7,8,9,10,11,12,13])
    })

    it('one empty array and negative value', ()=>{
        const col1 = [-10,-5,0]
        const col2:number[] = []
        const col3 = [86,42,-1,-3]

        const result = merge(col1,col2,col3)
        expect(result).toEqual([-10,-5,-3,-1,0,42,86])
    })

    it('duplicate value', ()=>{
        const col1 = [1,1,3,5,7,9]
        const col2 = [17,51]
        const col3 = [17,11,9,8,5]

        const result = merge(col1,col2,col3)
        expect(result).toEqual([1,1,3,5,5,7,8,9,9,11,17,17,51])
    })

    it('duplicate value and array with one element',()=>{
        const col1 = [1,4]
        const col2 = [1]
        const col3 = [2]

        const result = merge(col1,col2,col3)
        expect(result).toEqual([1,1,2,4])
    })

    it('all empty arrays',()=>{
        const col1: number[] = []
        const col2: number[] = []
        const col3: number[] = []

        const result = merge(col1,col2,col3)
        expect(result).toEqual([])
    })
})