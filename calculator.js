// Tap Drill Calculator - Main Application Logic

class TapDrillCalculator {
    constructor() {
        this.form = document.getElementById('tapDrillForm');
        this.threadSystem = document.getElementById('threadSystem');
        this.majorDiameter = document.getElementById('majorDiameter');
        this.pitch = document.getElementById('pitch');
        this.threadPercentage = document.getElementById('threadPercentage');
        this.results = document.getElementById('results');
        this.errorMessage = document.getElementById('errorMessage');

        this.initializeEventListeners();
        this.updateUnitLabels();
    }

    initializeEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculate();
        });

        // Thread system change updates unit labels
        this.threadSystem.addEventListener('change', () => {
            this.updateUnitLabels();
        });

        // Percentage preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');
                this.threadPercentage.value = value;

                // Update active state
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // Update active preset button when percentage input changes
        this.threadPercentage.addEventListener('input', () => {
            const value = this.threadPercentage.value;
            document.querySelectorAll('.preset-btn').forEach(btn => {
                if (btn.getAttribute('data-value') === value) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        });
    }

    updateUnitLabels() {
        const system = this.threadSystem.value;
        const isMetric = system === 'ISO';

        const diameterUnit = document.getElementById('diameterUnit');
        const pitchUnit = document.getElementById('pitchUnit');
        const pitchLabel = document.getElementById('pitchLabel');

        if (isMetric) {
            diameterUnit.textContent = 'mm';
            pitchUnit.textContent = 'mm';
            pitchLabel.textContent = 'Pitch';
        } else if (system) {
            diameterUnit.textContent = 'inches';
            pitchUnit.textContent = 'TPI';
            pitchLabel.textContent = 'Threads Per Inch';
        } else {
            diameterUnit.textContent = 'units';
            pitchUnit.textContent = 'units';
            pitchLabel.textContent = 'Pitch / Threads Per Inch';
        }
    }

    calculate() {
        // Hide previous results and errors
        this.results.classList.add('hidden');
        this.errorMessage.classList.add('hidden');

        try {
            // Get input values
            const threadSystem = this.threadSystem.value;
            const majorDiameter = parseFloat(this.majorDiameter.value);
            const pitchOrTpi = parseFloat(this.pitch.value);
            const threadPercentage = parseFloat(this.threadPercentage.value);

            // Validate inputs
            this.validateInputs(threadSystem, majorDiameter, pitchOrTpi, threadPercentage);

            // Calculate tap drill diameter
            const result = this.calculateTapDrill(threadSystem, majorDiameter, pitchOrTpi, threadPercentage);

            // Display results
            this.displayResults(result);

        } catch (error) {
            this.showError(error.message);
        }
    }

    validateInputs(threadSystem, majorDiameter, pitchOrTpi, threadPercentage) {
        if (!threadSystem) {
            throw new Error('Please select a thread system.');
        }

        if (majorDiameter <= 0 || isNaN(majorDiameter)) {
            throw new Error('Major diameter must be a positive number.');
        }

        if (pitchOrTpi <= 0 || isNaN(pitchOrTpi)) {
            throw new Error('Pitch/TPI must be a positive number.');
        }

        if (threadPercentage < 50 || threadPercentage > 100 || isNaN(threadPercentage)) {
            throw new Error('Thread percentage must be between 50% and 100%.');
        }
    }

    calculateTapDrill(threadSystem, majorDiameter, pitchOrTpi, threadPercentage) {
        const steps = [];
        let pitch, threadDepth, tapDrillDiameter;
        const isMetric = threadSystem === 'ISO';
        const units = isMetric ? 'mm' : 'inches';

        // Step 1: Calculate pitch (P)
        if (isMetric) {
            pitch = pitchOrTpi;
            steps.push(`Step 1: Pitch (P) = ${pitch.toFixed(4)} mm`);
        } else {
            pitch = 1 / pitchOrTpi;
            steps.push(`Step 1: Pitch (P) = 1 / ${pitchOrTpi} = ${pitch.toFixed(6)} inches`);
        }

        // Step 2: Calculate thread depth (D) based on thread system
        steps.push(`Step 2: Calculate thread depth based on ${threadSystem} system`);

        switch (threadSystem) {
            case 'ISO':
                // ISO Metric - Internal thread (tapping)
                threadDepth = 0.6134 * pitch;
                steps.push(`  D = 0.6134 × P = 0.6134 × ${pitch.toFixed(4)} = ${threadDepth.toFixed(6)} mm`);
                break;

            case 'UNC':
                // American National Standard
                threadDepth = 0.61343 * pitch;
                steps.push(`  D = 0.61343 × P = 0.61343 × ${pitch.toFixed(6)} = ${threadDepth.toFixed(6)} inches`);
                break;

            case 'BSW':
                // British Standard Whitworth
                threadDepth = 0.6403 * pitch;
                steps.push(`  D = 0.6403 × P = 0.6403 × ${pitch.toFixed(6)} = ${threadDepth.toFixed(6)} inches`);
                break;

            case 'ACME':
                // American National Acme
                threadDepth = 0.500 * pitch;
                steps.push(`  D = 0.500 × P = 0.500 × ${pitch.toFixed(6)} = ${threadDepth.toFixed(6)} inches`);
                break;

            default:
                throw new Error('Invalid thread system selected.');
        }

        // Step 3: Adjust for thread percentage
        const percentageFactor = threadPercentage / 100;
        const adjustedDepth = threadDepth * percentageFactor;
        steps.push(`Step 3: Adjust for ${threadPercentage}% thread`);
        steps.push(`  D_adjusted = ${threadDepth.toFixed(6)} × ${percentageFactor.toFixed(2)} = ${adjustedDepth.toFixed(6)} ${units}`);

        // Step 4: Calculate tap drill diameter
        tapDrillDiameter = majorDiameter - (2 * adjustedDepth);
        steps.push(`Step 4: Calculate tap drill diameter`);
        steps.push(`  Tap Drill = ${majorDiameter} - (2 × ${adjustedDepth.toFixed(6)})`);
        steps.push(`  Tap Drill = ${majorDiameter} - ${(2 * adjustedDepth).toFixed(6)}`);
        steps.push(`  Tap Drill = ${tapDrillDiameter.toFixed(6)} ${units}`);

        // Step 5: Validate result
        if (tapDrillDiameter >= majorDiameter) {
            throw new Error('Calculation error: Tap drill diameter cannot be equal to or greater than major diameter.');
        }

        if (tapDrillDiameter <= 0) {
            throw new Error('Calculation error: Tap drill diameter must be positive. Check your inputs.');
        }

        // Format thread specification
        let threadSpec;
        if (isMetric) {
            threadSpec = `M${majorDiameter}×${pitchOrTpi}`;
        } else {
            threadSpec = `${majorDiameter}" - ${pitchOrTpi} ${threadSystem}`;
        }

        return {
            tapDrillDiameter: tapDrillDiameter,
            threadSpec: threadSpec,
            units: units,
            threadPercentage: threadPercentage,
            steps: steps,
            threadSystem: threadSystem
        };
    }

    displayResults(result) {
        // Format the tap drill value
        const formattedValue = this.formatDrillSize(result.tapDrillDiameter, result.units);

        // Update result values
        document.getElementById('tapDrillValue').textContent = formattedValue;
        document.getElementById('threadSpec').textContent =
            `${result.threadSpec} (${result.threadPercentage}% thread)`;

        // Display calculation steps
        const stepsContainer = document.getElementById('calculationSteps');
        stepsContainer.innerHTML = result.steps.map(step =>
            `<div class="calculation-step">${step}</div>`
        ).join('');

        // Show results
        this.results.classList.remove('hidden');

        // Scroll to results
        this.results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    formatDrillSize(diameter, units) {
        if (units === 'mm') {
            return `${diameter.toFixed(3)} mm`;
        } else {
            // For imperial, show both decimal and fractional approximation
            const decimal = diameter.toFixed(4);
            const fraction = this.decimalToFraction(diameter);
            return `${decimal}" (≈ ${fraction}")`;
        }
    }

    decimalToFraction(decimal) {
        // Convert decimal to nearest common fraction
        const tolerance = 0.001;
        const maxDenominator = 64; // Common drill sizes use 1/64" increments

        for (let denominator = 1; denominator <= maxDenominator; denominator++) {
            const numerator = Math.round(decimal * denominator);
            const approximation = numerator / denominator;

            if (Math.abs(approximation - decimal) < tolerance) {
                // Simplify fraction
                const gcd = this.gcd(numerator, denominator);
                const simplifiedNum = numerator / gcd;
                const simplifiedDen = denominator / gcd;

                if (simplifiedDen === 1) {
                    return simplifiedNum.toString();
                }
                return `${simplifiedNum}/${simplifiedDen}`;
            }
        }

        return decimal.toFixed(4);
    }

    gcd(a, b) {
        // Greatest common divisor using Euclidean algorithm
        return b === 0 ? a : this.gcd(b, a % b);
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('hidden');
        this.errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TapDrillCalculator();
});
