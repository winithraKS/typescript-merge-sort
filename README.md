# typescript-merge-sort

### setup dependency
use ChatGPT to generate these following config file
- tsconfig.json
- jext.config.js

### execute code
merge sort
 1. reverse collection_3 to ascending order.
 2. create an result array with starting index i=0.
 3. create index variable for collection_1 (a) , collection_2 (b) , collect_3 (c) as ai, bi, ci respectively, starting with ai=bi=ci=0.
 4. compare value at the index (compare a[ai], b[bi], c[ci]).
 5. insert min(a[ai],b[bi],c[ci]) to result[i].
 6. increase i
 7. increse index of minimun value. For example, if a[ai] is minimum value, increase ai.
 8. do step 4-6 again until ai,bi,ci exceed it collection size.
 9. return result array.

 ### unit test
 1. test with all positive number
 2. test with negative value and empty array
 3. test with duplicate value
 4. test with one-element array and duplicate value
 5. test with all empty array

 ## thank you for reading