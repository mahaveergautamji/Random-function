# Random-function

A simple random number generator that produces integers from 0 to 255.

## Usage

### Running the script
```bash
python3 random_generator.py
```

### Using the functions in your code
```python
from random_generator import random_0_to_255, generate_multiple

# Generate a single random number (0-255)
number = random_0_to_255()
print(number)

# Generate multiple random numbers
numbers = generate_multiple(5)
print(numbers)
```

## Functions

- `random_0_to_255()`: Returns a single random integer from 0 to 255
- `generate_multiple(count)`: Returns a list of random integers from 0 to 255

## Range
The generator produces integers in the range 0-255 (inclusive), which covers 256 possible values. This range is commonly used for:
- Byte values
- RGB color components
- Basic cryptographic applications