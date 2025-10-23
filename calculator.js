// Tap Drill Calculator - Enhanced with Standard Drill Sizes

// Major Diameter Lookup Table for American National Standard Threads
const MAJOR_DIAMETERS = {
    0: 0.060,
    1: 0.073,
    2: 0.086,
    3: 0.099,
    4: 0.112,
    5: 0.125,
    6: 0.138,
    8: 0.164,
    10: 0.190,
    12: 0.216,
    0.25: 0.250,    // 1/4"
    0.3125: 0.3125, // 5/16"
    0.375: 0.375,   // 3/8"
    0.4375: 0.4375, // 7/16"
    0.5: 0.500,     // 1/2"
    0.5625: 0.5625, // 9/16"
    0.625: 0.625,   // 5/8"
    0.6875: 0.6875, // 11/16"
    0.75: 0.750,    // 3/4"
    0.8125: 0.8125, // 13/16"
    0.875: 0.875,   // 7/8"
    0.9375: 0.9375, // 15/16"
    1.0: 1.000      // 1"
};

// Standard Drill Sizes - Numbered Drills (Descending size)
const NUMBERED_DRILLS = [
    { size: '#1', decimal: 0.2280 },
    { size: '#2', decimal: 0.2210 },
    { size: '#3', decimal: 0.2130 },
    { size: '#4', decimal: 0.2090 },
    { size: '#5', decimal: 0.2055 },
    { size: '#6', decimal: 0.2040 },
    { size: '#7', decimal: 0.2010 },
    { size: '#8', decimal: 0.1990 },
    { size: '#9', decimal: 0.1960 },
    { size: '#10', decimal: 0.1935 },
    { size: '#11', decimal: 0.1910 },
    { size: '#12', decimal: 0.1890 },
    { size: '#13', decimal: 0.1850 },
    { size: '#14', decimal: 0.1820 },
    { size: '#15', decimal: 0.1800 },
    { size: '#16', decimal: 0.1770 },
    { size: '#17', decimal: 0.1730 },
    { size: '#18', decimal: 0.1695 },
    { size: '#19', decimal: 0.1660 },
    { size: '#20', decimal: 0.1610 },
    { size: '#21', decimal: 0.1590 },
    { size: '#22', decimal: 0.1570 },
    { size: '#23', decimal: 0.1540 },
    { size: '#24', decimal: 0.1520 },
    { size: '#25', decimal: 0.1495 },
    { size: '#26', decimal: 0.1470 },
    { size: '#27', decimal: 0.1440 },
    { size: '#28', decimal: 0.1405 },
    { size: '#29', decimal: 0.1360 },
    { size: '#30', decimal: 0.1285 },
    { size: '#31', decimal: 0.1200 },
    { size: '#32', decimal: 0.1160 },
    { size: '#33', decimal: 0.1130 },
    { size: '#34', decimal: 0.1110 },
    { size: '#35', decimal: 0.1100 },
    { size: '#36', decimal: 0.1065 },
    { size: '#37', decimal: 0.1040 },
    { size: '#38', decimal: 0.1015 },
    { size: '#39', decimal: 0.0995 },
    { size: '#40', decimal: 0.0980 },
    { size: '#41', decimal: 0.0960 },
    { size: '#42', decimal: 0.0935 },
    { size: '#43', decimal: 0.0890 },
    { size: '#44', decimal: 0.0860 },
    { size: '#45', decimal: 0.0820 },
    { size: '#46', decimal: 0.0810 },
    { size: '#47', decimal: 0.0785 },
    { size: '#48', decimal: 0.0760 },
    { size: '#49', decimal: 0.0730 },
    { size: '#50', decimal: 0.0700 },
    { size: '#51', decimal: 0.0670 },
    { size: '#52', decimal: 0.0635 },
    { size: '#53', decimal: 0.0595 },
    { size: '#54', decimal: 0.0550 },
    { size: '#55', decimal: 0.0520 },
    { size: '#56', decimal: 0.0465 },
    { size: '#57', decimal: 0.0430 },
    { size: '#58', decimal: 0.0420 },
    { size: '#59', decimal: 0.0410 },
    { size: '#60', decimal: 0.0400 }
];

// Standard Drill Sizes - Lettered Drills (Ascending size)
const LETTERED_DRILLS = [
    { size: 'A', decimal: 0.2340 },
    { size: 'B', decimal: 0.2380 },
    { size: 'C', decimal: 0.2420 },
    { size: 'D', decimal: 0.2460 },
    { size: 'E', decimal: 0.2500 },
    { size: 'F', decimal: 0.2570 },
    { size: 'G', decimal: 0.2610 },
    { size: 'H', decimal: 0.2660 },
    { size: 'I', decimal: 0.2720 },
    { size: 'J', decimal: 0.2770 },
    { size: 'K', decimal: 0.2810 },
    { size: 'L', decimal: 0.2900 },
    { size: 'M', decimal: 0.2950 },
    { size: 'N', decimal: 0.3020 },
    { size: 'O', decimal: 0.3160 },
    { size: 'P', decimal: 0.3230 },
    { size: 'Q', decimal: 0.3320 },
    { size: 'R', decimal: 0.3390 },
    { size: 'S', decimal: 0.3480 },
    { size: 'T', decimal: 0.3580 },
    { size: 'U', decimal: 0.3680 },
    { size: 'V', decimal: 0.3770 },
    { size: 'W', decimal: 0.3860 },
    { size: 'X', decimal: 0.3970 },
    { size: 'Y', decimal: 0.4040 },
    { size: 'Z', decimal: 0.4130 }
];

// Standard Drill Sizes - Fractional Drills (in 64ths)
const FRACTIONAL_DRILLS = [];
for (let i = 1; i <= 64; i++) {
    const decimal = i / 64;
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(i, 64);
    const num = i / divisor;
    const den = 64 / divisor;
    const fraction = den === 1 ? `${num}"` : `${num}/${den}"`;
    FRACTIONAL_DRILLS.push({ size: fraction, decimal: decimal });
}

// Combine all drill sizes into one sorted array
const ALL_DRILLS = [...NUMBERED_DRILLS, ...LETTERED_DRILLS, ...FRACTIONAL_DRILLS]
    .sort((a, b) => a.decimal - b.decimal);

class TapDrillCalculator {
    constructor() {
        this.form = document.getElementById('tapDrillForm');
        this.threadSystem = document.getElementById('threadSystem');
        this.materialType = document.getElementById('materialType');
        this.screwSize = document.getElementById('screwSize');
        this.majorDiameter = document.getElementById('majorDiameter');
        this.pitch = document.getElementById('pitch');
        this.threadPercentage = document.getElementById('threadPercentage');
        this.results = document.getElementById('results');
        this.errorMessage = document.getElementById('errorMessage');

        this.inputMode = 'standard'; // standard or custom

        this.initializeEventListeners();
        this.updateUnitLabels();
    }

    initializeEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculate();
        });

        // Thread system change updates UI
        this.threadSystem.addEventListener('change', () => {
            this.updateUnitLabels();
            this.toggleUNCSpecificFields();
        });

        // Material type change updates thread percentage
        this.materialType.addEventListener('change', () => {
            this.updateThreadPercentageFromMaterial();
        });

        // Screw size change updates major diameter
        this.screwSize.addEventListener('change', () => {
            this.updateMajorDiameterFromScrewSize();
        });

        // Toggle buttons for input mode
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.inputMode = e.target.getAttribute('data-mode');
                document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.updateInputMode();
            });
        });

        // Percentage preset buttons
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const value = e.target.getAttribute('data-value');
                this.threadPercentage.value = value;

                // Update active state
                document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Update material type to custom if not matching
                if (this.materialType && this.threadSystem.value === 'UNC') {
                    if (value === '75' && this.materialType.value !== 'soft') {
                        this.materialType.value = 'soft';
                    } else if (value === '50' && this.materialType.value !== 'hard') {
                        this.materialType.value = 'hard';
                    } else if (value !== '75' && value !== '50') {
                        this.materialType.value = 'custom';
                    }
                }
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

    toggleUNCSpecificFields() {
        const isUNC = this.threadSystem.value === 'UNC';

        document.getElementById('materialTypeGroup').style.display = isUNC ? 'block' : 'none';
        document.getElementById('screwSizeGroup').style.display = isUNC ? 'block' : 'none';

        if (isUNC) {
            this.updateInputMode();
        } else {
            document.getElementById('standardScrewGroup').style.display = 'none';
            document.getElementById('majorDiameterGroup').style.display = 'block';
        }
    }

    updateInputMode() {
        if (this.inputMode === 'standard') {
            document.getElementById('standardScrewGroup').style.display = 'block';
            document.getElementById('majorDiameterGroup').style.display = 'none';
            this.majorDiameter.removeAttribute('required');
            this.screwSize.setAttribute('required', 'required');
        } else {
            document.getElementById('standardScrewGroup').style.display = 'none';
            document.getElementById('majorDiameterGroup').style.display = 'block';
            this.majorDiameter.setAttribute('required', 'required');
            this.screwSize.removeAttribute('required');
        }
    }

    updateThreadPercentageFromMaterial() {
        const materialType = this.materialType.value;

        if (materialType === 'soft') {
            this.threadPercentage.value = 75;
        } else if (materialType === 'hard') {
            this.threadPercentage.value = 50;
        }
        // For 'custom', user controls the percentage

        // Update preset button active state
        const value = this.threadPercentage.value;
        document.querySelectorAll('.preset-btn').forEach(btn => {
            if (btn.getAttribute('data-value') === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    updateMajorDiameterFromScrewSize() {
        const sizeKey = parseFloat(this.screwSize.value);
        if (MAJOR_DIAMETERS[sizeKey]) {
            this.majorDiameter.value = MAJOR_DIAMETERS[sizeKey];
        }
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
            let majorDiameter;

            if (threadSystem === 'UNC' && this.inputMode === 'standard') {
                const sizeKey = parseFloat(this.screwSize.value);
                majorDiameter = MAJOR_DIAMETERS[sizeKey];
                if (!majorDiameter) {
                    throw new Error('Please select a screw size.');
                }
            } else {
                majorDiameter = parseFloat(this.majorDiameter.value);
            }

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
        steps.push(`  Tap Drill = ${majorDiameter.toFixed(4)} - (2 × ${adjustedDepth.toFixed(6)})`);
        steps.push(`  Tap Drill = ${majorDiameter.toFixed(4)} - ${(2 * adjustedDepth).toFixed(6)}`);
        steps.push(`  Tap Drill = ${tapDrillDiameter.toFixed(6)} ${units}`);

        // Step 5: Validate result
        if (tapDrillDiameter >= majorDiameter) {
            throw new Error('Calculation error: Tap drill diameter cannot be equal to or greater than major diameter.');
        }

        if (tapDrillDiameter <= 0) {
            throw new Error('Calculation error: Tap drill diameter must be positive. Check your inputs.');
        }

        // Step 6: Find nearest standard drill size (for imperial only)
        let standardDrill = null;
        if (!isMetric) {
            standardDrill = this.findNearestDrillSize(tapDrillDiameter);
            if (standardDrill) {
                steps.push(`Step 5: Nearest standard drill size`);
                steps.push(`  ${standardDrill.size} (${standardDrill.decimal.toFixed(4)}")`);
                steps.push(`  Difference: ${Math.abs(standardDrill.decimal - tapDrillDiameter).toFixed(4)}"`);
            }
        }

        // Format thread specification
        let threadSpec;
        if (isMetric) {
            threadSpec = `M${majorDiameter}×${pitchOrTpi}`;
        } else {
            // Format screw size for display
            let sizeStr;
            if (this.threadSystem.value === 'UNC' && this.inputMode === 'standard') {
                const sizeKey = parseFloat(this.screwSize.value);
                if (sizeKey < 1) {
                    sizeStr = `#${sizeKey}`;
                } else if (sizeKey < 13) {
                    sizeStr = `#${Math.round(sizeKey)}`;
                } else {
                    // Convert to fraction
                    sizeStr = this.decimalToFraction(sizeKey);
                }
            } else {
                sizeStr = majorDiameter.toFixed(3);
            }
            threadSpec = `${sizeStr}-${Math.round(pitchOrTpi)} ${threadSystem}`;
        }

        return {
            tapDrillDiameter: tapDrillDiameter,
            standardDrill: standardDrill,
            threadSpec: threadSpec,
            units: units,
            threadPercentage: threadPercentage,
            steps: steps,
            threadSystem: threadSystem
        };
    }

    findNearestDrillSize(targetDiameter) {
        let nearest = null;
        let minDifference = Infinity;

        // Prefer drills that are slightly smaller (for tap to cut into)
        // but also consider slightly larger drills
        for (const drill of ALL_DRILLS) {
            const difference = Math.abs(drill.decimal - targetDiameter);

            if (difference < minDifference) {
                minDifference = difference;
                nearest = drill;
            }
        }

        return nearest;
    }

    displayResults(result) {
        // Format the tap drill value
        const formattedDecimal = `${result.tapDrillDiameter.toFixed(4)} ${result.units}`;

        // Update result values
        document.getElementById('tapDrillValue').textContent = formattedDecimal;

        // Show standard drill size if available
        const standardDrillItem = document.getElementById('standardDrillItem');
        const standardDrillSize = document.getElementById('standardDrillSize');

        if (result.standardDrill) {
            standardDrillItem.style.display = 'flex';
            const difference = Math.abs(result.standardDrill.decimal - result.tapDrillDiameter);
            standardDrillSize.textContent =
                `${result.standardDrill.size} (${result.standardDrill.decimal.toFixed(4)}" / Δ ${difference.toFixed(4)}")`;
        } else {
            standardDrillItem.style.display = 'none';
        }

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

    decimalToFraction(decimal) {
        // Convert decimal to nearest common fraction
        const tolerance = 0.001;
        const maxDenominator = 16; // Common fractions

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
                return `${simplifiedNum}/${simplifiedDen}"`;
            }
        }

        return decimal.toFixed(3) + '"';
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
