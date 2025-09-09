/**
 * Random Number Generator (0-255)
 * Generates random numbers in the range 0-255 with various format displays
 */

class RandomNumberGenerator {
    constructor() {
        this.currentNumber = 0;
        this.history = [];
        this.maxHistory = 10;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.generateRandomNumber();
    }

    setupEventListeners() {
        // Button click
        const generateBtn = document.querySelector('.generate-btn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateRandomNumber());
        }

        // Keyboard support
        document.addEventListener('keydown', (event) => {
            if (event.code === 'Space' || event.code === 'Enter') {
                event.preventDefault();
                this.generateRandomNumber();
            }
        });

        // Auto-generate every 5 seconds (optional)
        // setInterval(() => this.generateRandomNumber(), 5000);
    }

    generateRandomNumber() {
        // Generate random number between 0 and 255
        this.currentNumber = Math.floor(Math.random() * 256);
        
        // Add to history
        this.addToHistory(this.currentNumber);
        
        // Update displays
        this.updateDisplay();
        this.updateFormats();
        this.updateColorPreview();
        this.animateNumber();
    }

    addToHistory(num) {
        this.history.unshift(num);
        if (this.history.length > this.maxHistory) {
            this.history.pop();
        }
    }

    updateDisplay() {
        const numberDisplay = document.getElementById('numberDisplay');
        if (numberDisplay) {
            numberDisplay.textContent = this.currentNumber;
        }
    }

    updateFormats() {
        const decimalEl = document.getElementById('decimal');
        const hexEl = document.getElementById('hexadecimal');
        const binaryEl = document.getElementById('binary');

        if (decimalEl) {
            decimalEl.textContent = this.currentNumber;
        }

        if (hexEl) {
            hexEl.textContent = '0x' + this.currentNumber.toString(16).toUpperCase().padStart(2, '0');
        }

        if (binaryEl) {
            binaryEl.textContent = this.currentNumber.toString(2).padStart(8, '0');
        }
    }

    updateColorPreview() {
        const colorPreview = document.getElementById('colorPreview');
        if (colorPreview) {
            // Use the number as a grayscale value
            colorPreview.style.backgroundColor = `rgb(${this.currentNumber}, ${this.currentNumber}, ${this.currentNumber})`;
            colorPreview.title = `RGB(${this.currentNumber}, ${this.currentNumber}, ${this.currentNumber})`;
        }
    }

    animateNumber() {
        const numberDisplay = document.getElementById('numberDisplay');
        if (numberDisplay) {
            numberDisplay.style.transform = 'scale(1.1)';
            numberDisplay.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                numberDisplay.style.transform = 'scale(1)';
            }, 200);
        }
    }

    // Utility methods
    getStatistics() {
        if (this.history.length === 0) return null;

        const sum = this.history.reduce((a, b) => a + b, 0);
        const avg = sum / this.history.length;
        const min = Math.min(...this.history);
        const max = Math.max(...this.history);

        return {
            average: Math.round(avg * 100) / 100,
            minimum: min,
            maximum: max,
            count: this.history.length,
            sum: sum
        };
    }

    getHistory() {
        return [...this.history];
    }

    // Convert number to different formats
    static toHex(num) {
        return '0x' + num.toString(16).toUpperCase().padStart(2, '0');
    }

    static toBinary(num) {
        return num.toString(2).padStart(8, '0');
    }

    static toOctal(num) {
        return '0' + num.toString(8);
    }

    // Generate specific types of random numbers
    generateEven() {
        let num;
        do {
            num = Math.floor(Math.random() * 256);
        } while (num % 2 !== 0);
        
        this.currentNumber = num;
        this.updateAll();
        return num;
    }

    generateOdd() {
        let num;
        do {
            num = Math.floor(Math.random() * 256);
        } while (num % 2 === 0);
        
        this.currentNumber = num;
        this.updateAll();
        return num;
    }

    generatePrime() {
        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
        const randomIndex = Math.floor(Math.random() * primes.length);
        
        this.currentNumber = primes[randomIndex];
        this.updateAll();
        return this.currentNumber;
    }

    updateAll() {
        this.addToHistory(this.currentNumber);
        this.updateDisplay();
        this.updateFormats();
        this.updateColorPreview();
        this.animateNumber();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.randomGenerator = new RandomNumberGenerator();
    
    // Expose some methods to global scope for console access
    window.generateEven = () => window.randomGenerator.generateEven();
    window.generateOdd = () => window.randomGenerator.generateOdd();
    window.generatePrime = () => window.randomGenerator.generatePrime();
    window.getStats = () => window.randomGenerator.getStatistics();
    window.getHistory = () => window.randomGenerator.getHistory();
});