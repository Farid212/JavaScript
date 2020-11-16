# Are Similar

Two arraus are called similar if one can be obtained from another by swapping at most one pair of elemets in one of the arrays

Given two arrays a and b, check whether they are similar.

### Example

- For a = [1,2,3], and b = [1,2,3], the output should be areSimilar(a, b) = true;
The arrays are equal, no needto swap any elements.
- For a = [1,2,3], and b = [2,1,3], the output should be areSimilar(a, b) = true;
We can obtain b from a by swapping 2 and 1 in b.
- For a = [1,2,3], and b = [2,1,1], the output should be areSimilar(a, b) = true;
Any swap of any two elememts either in a or in b won't make a and b equal

### Hints

- toString()

### Input/Output

- **[time limit] 4000 ms**
- **[input] integer.integer a**