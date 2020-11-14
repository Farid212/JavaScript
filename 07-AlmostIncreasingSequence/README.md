# Almost Increasing Sequence
---

Given a sequence of integer as an array, determine whether it is possible to obtain a strictly increasing sequence removing no more than one element from the array.

### Example

- For sequence = [1, 3, 2, 1], the output should be increasingSequence(sequence) = false;

there is no one element in this array that can be removed in order to get a strictly increasing sequence.

- For sequence = [1, 3, 2], the output shoud be increasingSequence(sequence) = true;

You can remove 3 from the array to get strictly increasing sequence [1, 2]. Alternatively, you can remove 2 to get the strictly increasing sequence [1, 3].


### Hints

- None

### Input/output

- **[time limit] 4000ms (js)**
- **[input] array.integer sequence**

Guaranteed constraints:

2<= sequence.length <=105

-105 <= sequence[i] 1<= 05

### [output] boolean

return true if it is possible to remove one element from the array in order to get strictly increasing sequence, otherwise return false
