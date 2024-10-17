export function merge(a: number[],b:number[],cr:number[]):number[] {
    //convert collection_3 to ascending order
    var c:number[] = []
    for(let j=0;j<cr.length;j++) c[j] = cr[cr.length-1-j]

    //merge sort
    var ai = 0
    var bi = 0
    var ci = 0
    
    var ans: number[] = []
    var i = 0

    while (ai<a.length || bi<b.length || ci<c.length) {

        if(ai>=a.length) {
            if(bi>=b.length) ans[i++] = c[ci++]
            else {
                if(ci>=c.length) ans[i++] = b[bi++]
                else ans[i++] = (b[bi]<c[ci])? b[bi++]:c[ci++]
            }
        }

        else {
            if(bi>=b.length) {
                if(ci>=c.length) ans[i++] = a[ai++]
                else ans[i++] = (a[ai]<c[ci])? a[ai++]:c[ci++]
            }
            else {
                if(ci>=c.length) ans[i++] = (a[ai]<b[bi])? a[ai++]:b[bi++]
                else ans[i++] = (a[ai]<b[bi])? ((a[ai]<c[ci])? a[ai++]:c[ci++]): ((b[bi]<c[ci])? b[bi++]:c[ci++])
            }
        }
    }

    return ans
}