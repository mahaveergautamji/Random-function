#!/usr/bin/env python3
"""
Random Number Generator (0-255)
A simple random number generator that produces integers from 0 to 255.
"""

import random


def random_0_to_255():
    """
    Generate a random integer from 0 to 255 (inclusive).
    
    Returns:
        int: A random integer between 0 and 255
    """
    return random.randint(0, 255)


def generate_multiple(count=10):
    """
    Generate multiple random numbers from 0 to 255.
    
    Args:
        count (int): Number of random numbers to generate
        
    Returns:
        list: List of random integers between 0 and 255
    """
    return [random_0_to_255() for _ in range(count)]


def main():
    """
    Demonstration of the random number generator.
    """
    print("Random Number Generator (0-255)")
    print("=" * 32)
    
    # Generate single random number
    single_random = random_0_to_255()
    print(f"Single random number: {single_random}")
    
    # Generate multiple random numbers
    print(f"\n10 random numbers:")
    multiple_random = generate_multiple(10)
    print(multiple_random)
    
    # Show range verification
    print(f"\n20 random numbers to verify range:")
    test_numbers = generate_multiple(20)
    print(test_numbers)
    print(f"Min: {min(test_numbers)}, Max: {max(test_numbers)}")
    print(f"All numbers in range 0-255: {all(0 <= num <= 255 for num in test_numbers)}")


if __name__ == "__main__":
    main()