# typescript-merge-sort
---
## How to run
1. setup dependency
```bash
npm install
```
2. execute code
```bash
npm test
```
### expected result
![alt text](image.png)

---
## logic explanation

merge sort
 1. reverse `collection_3` to ascending order.
 2. create an result array with starting index `i=0`.
 3. create index variable for `collection_1` (a) , `collection_2` (b) , `collect_3` (c) as `ai`, `bi`, `ci` respectively, starting with `ai=bi=ci=0`.
 4. compare value at the index (compare a[ai], b[bi], c[ci]).
 5. insert `min(a[ai],b[bi],c[ci])` to result[i].
 6. increase `i`.
 7. increse index of minimun value. For example, if a[ai] is minimum value, increase ai.
 8. do step 4-6 again until ai,bi,ci exceed it collection size.
 9. return result array.
---
## psudo code
- collection_1 = a
- collection_2 = b
- collection_3 = c
```
int[] merge(a: int[], b:int[], c:int[]):
    int ai,bi,ci,i = 0
    int[] ans = []

    c = c.reverse()

    // loop this until all collections are empty
    switch:
        a[ai] is min: ans[i++] = a[ai++]
        b[bi] is min: ans[i++] = b[bi++]
        c[ci] is min: ans[i++] = c[ci++]
```
---
## unit test
1. three positive arrays
```ts
a = [1,5,7,9,13]
b = [2,6,8,10]
c = [12,11,4,3]
```
2. a is empty and other arrays have extreme numbers
```ts
a = []
b = [10, 1000000]
c = [5000000, 2500000, 1]
```
3. b is empty and negative value
```ts
a = [-10,-5,0]
b = []
c = [86,42,-1,-3]
```
4. c is empty
```ts
a = [1,3,5]
b = [2,4,6]
c = []
```
5. all arrays have the same values
```ts
a = [1, 2, 3]
b = [1, 2, 3]
c = [3, 2, 1]
```
6. duplicate value
```ts
a = [1,1,3,5,7,9]
b = [17,51]
c = [17,11,9,8,5]
```
7. duplicate value and array with one element
```ts
a = [1,4]
b = [1]
c = [2]
```
8. all empty arrays
```ts
a = []
b = []
c = []
```
---
## thank you for reading