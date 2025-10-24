// Tap Drill Lookup Tables - Pre-compiled chart data

// Major Diameter Lookup for Imperial Sizes
const MAJOR_DIAMETERS_IMPERIAL = {
    "0": 0.0600,
    "1": 0.0730,
    "2": 0.0860,
    "3": 0.0990,
    "4": 0.1120,
    "5": 0.1250,
    "6": 0.1380,
    "8": 0.1640,
    "10": 0.1900,
    "12": 0.2160,
    "0.25": 0.2500,
    "0.3125": 0.3125,
    "0.375": 0.3750,
    "0.4375": 0.4375,
    "0.5": 0.5000,
    "0.5625": 0.5625,
    "0.625": 0.6250,
    "0.6875": 0.6875,
    "0.75": 0.7500,
    "0.8125": 0.8125,
    "0.875": 0.8750,
    "0.9375": 0.9375,
    "1.0": 1.0000
};

// Major Diameter Lookup for Metric Sizes
const MAJOR_DIAMETERS_METRIC = {
    "1.5": 1.5,
    "1.6": 1.6,
    "1.8": 1.8,
    "2": 2.0,
    "2.2": 2.2,
    "2.5": 2.5,
    "3": 3.0,
    "3.5": 3.5,
    "4": 4.0,
    "4.5": 4.5,
    "5": 5.0,
    "5.5": 5.5,
    "6": 6.0,
    "7": 7.0,
    "8": 8.0,
    "9": 9.0,
    "10": 10.0,
    "11": 11.0,
    "12": 12.0,
    "14": 14.0,
    "15": 15.0,
    "16": 16.0,
    "17": 17.0,
    "18": 18.0,
    "19": 19.0,
    "20": 20.0
};

// Imperial Threads - 75% Thread (Soft Materials)
const IMPERIAL_75 = {
    // Format: "size-tpi": { drill: "drill_name", decimal: decimal_inches }
    "0-80": { drill: "3/64", decimal: 0.0469 },
    "1-64": { drill: "53", decimal: 0.0595 },
    "1-72": { drill: "53", decimal: 0.0595 },
    "2-56": { drill: "50", decimal: 0.0700 },
    "2-64": { drill: "50", decimal: 0.0700 },
    "3-48": { drill: "47", decimal: 0.0785 },
    "3-56": { drill: "45", decimal: 0.0820 },
    "4-40": { drill: "43", decimal: 0.0890 },
    "4-48": { drill: "42", decimal: 0.0935 },
    "5-40": { drill: "38", decimal: 0.1015 },
    "5-44": { drill: "37", decimal: 0.1040 },
    "6-32": { drill: "36", decimal: 0.1065 },
    "6-40": { drill: "33", decimal: 0.1130 },
    "8-32": { drill: "29", decimal: 0.1360 },
    "8-36": { drill: "29", decimal: 0.1360 },
    "10-24": { drill: "25", decimal: 0.1495 },
    "10-32": { drill: "21", decimal: 0.1590 },
    "12-24": { drill: "16", decimal: 0.1770 },
    "12-28": { drill: "14", decimal: 0.1820 },
    "12-32": { drill: "13", decimal: 0.1850 },
    "0.25-20": { drill: "7", decimal: 0.2010 },
    "0.25-28": { drill: "3", decimal: 0.2130 },
    "0.25-32": { drill: "7/32", decimal: 0.2188 },
    "0.3125-18": { drill: "F", decimal: 0.2570 },
    "0.3125-24": { drill: "I", decimal: 0.2720 },
    "0.3125-32": { drill: "9/32", decimal: 0.2812 },
    "0.375-16": { drill: "5/16", decimal: 0.3125 },
    "0.375-24": { drill: "Q", decimal: 0.3320 },
    "0.375-32": { drill: "11/32", decimal: 0.3438 },
    "0.4375-14": { drill: "U", decimal: 0.3680 },
    "0.4375-20": { drill: "25/64", decimal: 0.3906 },
    "0.4375-28": { drill: "Y", decimal: 0.4040 },
    "0.5-13": { drill: "27/64", decimal: 0.4219 },
    "0.5-20": { drill: "29/64", decimal: 0.4531 },
    "0.5-28": { drill: "15/32", decimal: 0.4688 },
    "0.5625-12": { drill: "31/64", decimal: 0.4844 },
    "0.5625-18": { drill: "33/64", decimal: 0.5156 },
    "0.5625-24": { drill: "33/64", decimal: 0.5156 },
    "0.625-11": { drill: "17/32", decimal: 0.5312 },
    "0.625-18": { drill: "37/64", decimal: 0.5781 },
    "0.625-24": { drill: "37/64", decimal: 0.5781 },
    "0.6875-24": { drill: "41/64", decimal: 0.6406 },
    "0.75-10": { drill: "21/32", decimal: 0.6562 },
    "0.75-16": { drill: "11/16", decimal: 0.6875 },
    "0.75-20": { drill: "45/64", decimal: 0.7031 },
    "0.8125-20": { drill: "49/64", decimal: 0.7656 },
    "0.875-9": { drill: "49/64", decimal: 0.7656 },
    "0.875-14": { drill: "13/16", decimal: 0.8125 },
    "0.875-20": { drill: "53/64", decimal: 0.8281 },
    "0.9375-20": { drill: "57/64", decimal: 0.8906 },
    "1.0-8": { drill: "7/8", decimal: 0.8750 },
    "1.0-12": { drill: "15/16", decimal: 0.9375 },
    "1.0-20": { drill: "61/64", decimal: 0.9531 }
};

// Imperial Threads - 50% Thread (Hard Materials)
const IMPERIAL_50 = {
    "0-80": { drill: "55", decimal: 0.0520 },
    "1-64": { drill: "1/16", decimal: 0.0625 },
    "1-72": { drill: "52", decimal: 0.0635 },
    "2-56": { drill: "49", decimal: 0.0730 },
    "2-64": { drill: "48", decimal: 0.0760 },
    "3-48": { drill: "44", decimal: 0.0860 },
    "3-56": { drill: "43", decimal: 0.0890 },
    "4-40": { drill: "41", decimal: 0.0960 },
    "4-48": { drill: "40", decimal: 0.0980 },
    "5-40": { drill: "7/64", decimal: 0.1094 },
    "5-44": { drill: "35", decimal: 0.1100 },
    "6-32": { drill: "32", decimal: 0.1160 },
    "6-40": { drill: "31", decimal: 0.1200 },
    "8-32": { drill: "27", decimal: 0.1440 },
    "8-36": { drill: "26", decimal: 0.1470 },
    "10-24": { drill: "20", decimal: 0.1610 },
    "10-32": { drill: "18", decimal: 0.1695 },
    "12-24": { drill: "12", decimal: 0.1890 },
    "12-28": { drill: "10", decimal: 0.1935 },
    "12-32": { drill: "9", decimal: 0.1960 },
    "0.25-20": { drill: "7/32", decimal: 0.2188 },
    "0.25-28": { drill: "1", decimal: 0.2280 },
    "0.25-32": { drill: "1", decimal: 0.2280 },
    "0.3125-18": { drill: "J", decimal: 0.2770 },
    "0.3125-24": { drill: "9/32", decimal: 0.2812 },
    "0.3125-32": { drill: "L", decimal: 0.2900 },
    "0.375-16": { drill: "Q", decimal: 0.3320 },
    "0.375-24": { drill: "S", decimal: 0.3480 },
    "0.375-32": { drill: "T", decimal: 0.3580 },
    "0.4375-14": { drill: "25/64", decimal: 0.3906 },
    "0.4375-20": { drill: "13/32", decimal: 0.4062 },
    "0.4375-28": { drill: "Z", decimal: 0.4130 },
    "0.5-13": { drill: "29/64", decimal: 0.4531 },
    "0.5-20": { drill: "15/32", decimal: 0.4688 },
    "0.5-28": { drill: "15/32", decimal: 0.4688 },
    "0.5625-12": { drill: "33/64", decimal: 0.5156 },
    "0.5625-18": { drill: "17/32", decimal: 0.5312 },
    "0.5625-24": { drill: "17/32", decimal: 0.5312 },
    "0.625-11": { drill: "9/16", decimal: 0.5625 },
    "0.625-18": { drill: "19/32", decimal: 0.5938 },
    "0.625-24": { drill: "19/32", decimal: 0.5938 },
    "0.6875-24": { drill: "21/32", decimal: 0.6562 },
    "0.75-10": { drill: "11/16", decimal: 0.6875 },
    "0.75-16": { drill: "45/64", decimal: 0.7031 },
    "0.75-20": { drill: "23/32", decimal: 0.7188 },
    "0.8125-20": { drill: "25/32", decimal: 0.7812 },
    "0.875-9": { drill: "51/64", decimal: 0.7969 },
    "0.875-14": { drill: "53/64", decimal: 0.8281 },
    "0.875-20": { drill: "27/32", decimal: 0.8438 },
    "0.9375-20": { drill: "29/32", decimal: 0.9062 },
    "1.0-8": { drill: "59/64", decimal: 0.9219 },
    "1.0-12": { drill: "61/64", decimal: 0.9531 },
    "1.0-20": { drill: "31/32", decimal: 0.9688 }
};

// Metric Threads - 75% Thread (Soft Materials)
const METRIC_75 = {
    // Format: "size-pitch": { drillMM: mm_size, drillUS: "us_drill", decimal: decimal_inches }
    "1.5-0.35": { drillMM: 1.15, drillUS: "56", decimal: 0.0453 },
    "1.6-0.35": { drillMM: 1.25, drillUS: "55", decimal: 0.0492 },
    "1.8-0.35": { drillMM: 1.45, drillUS: "53", decimal: 0.0571 },
    "2-0.45": { drillMM: 1.55, drillUS: "1/16", decimal: 0.0610 },
    "2-0.40": { drillMM: 1.60, drillUS: "52", decimal: 0.0630 },
    "2.2-0.45": { drillMM: 1.75, drillUS: "50", decimal: 0.0689 },
    "2.5-0.45": { drillMM: 2.05, drillUS: "46", decimal: 0.0807 },
    "3-0.60": { drillMM: 2.40, drillUS: "41", decimal: 0.0945 },
    "3-0.50": { drillMM: 2.50, drillUS: "39", decimal: 0.0984 },
    "3.5-0.60": { drillMM: 2.90, drillUS: "32", decimal: 0.1142 },
    "4-0.75": { drillMM: 3.25, drillUS: "30", decimal: 0.1280 },
    "4-0.70": { drillMM: 3.30, drillUS: "30", decimal: 0.1299 },
    "4.5-0.75": { drillMM: 3.75, drillUS: "25", decimal: 0.1476 },
    "5-1.00": { drillMM: 4.00, drillUS: "21", decimal: 0.1575 },
    "5-0.90": { drillMM: 4.10, drillUS: "20", decimal: 0.1614 },
    "5-0.80": { drillMM: 4.20, drillUS: "19", decimal: 0.1654 },
    "5.5-0.90": { drillMM: 4.60, drillUS: "14", decimal: 0.1811 },
    "6-1.00": { drillMM: 5.00, drillUS: "8", decimal: 0.1968 },
    "6-0.75": { drillMM: 5.25, drillUS: "4", decimal: 0.2067 },
    "7-1.00": { drillMM: 6.00, drillUS: "B", decimal: 0.2362 },
    "7-0.75": { drillMM: 6.25, drillUS: "D", decimal: 0.2461 },
    "8-1.25": { drillMM: 6.80, drillUS: "H", decimal: 0.2677 },
    "8-1.00": { drillMM: 7.00, drillUS: "J", decimal: 0.2756 },
    "9-1.25": { drillMM: 7.80, drillUS: "N", decimal: 0.3071 },
    "9-1.00": { drillMM: 8.00, drillUS: "O", decimal: 0.3150 },
    "10-1.50": { drillMM: 8.50, drillUS: "R", decimal: 0.3346 },
    "10-1.25": { drillMM: 8.80, drillUS: "11/32", decimal: 0.3465 },
    "10-1.00": { drillMM: 9.00, drillUS: "T", decimal: 0.3543 },
    "11-1.50": { drillMM: 9.50, drillUS: "3/8", decimal: 0.3740 },
    "12-1.75": { drillMM: 10.30, drillUS: "13/32", decimal: 0.4055 },
    "12-1.50": { drillMM: 10.50, drillUS: "Z", decimal: 0.4134 },
    "12-1.25": { drillMM: 10.80, drillUS: "27/64", decimal: 0.4252 },
    "14-2.00": { drillMM: 12.10, drillUS: "15/32", decimal: 0.4764 },
    "14-1.50": { drillMM: 12.50, drillUS: "1/2", decimal: 0.4921 },
    "14-1.25": { drillMM: 12.80, drillUS: "1/2", decimal: 0.5039 },
    "15-1.50": { drillMM: 13.50, drillUS: "17/32", decimal: 0.5315 },
    "16-2.00": { drillMM: 14.00, drillUS: "35/64", decimal: 0.5512 },
    "16-1.50": { drillMM: 14.50, drillUS: "37/64", decimal: 0.5709 },
    "17-1.50": { drillMM: 15.50, drillUS: "39/64", decimal: 0.6102 },
    "18-2.50": { drillMM: 15.50, drillUS: "39/64", decimal: 0.6102 },
    "18-2.00": { drillMM: 16.00, drillUS: "5/8", decimal: 0.6299 },
    "18-1.50": { drillMM: 16.50, drillUS: "21/32", decimal: 0.6496 },
    "19-2.50": { drillMM: 16.50, drillUS: "21/32", decimal: 0.6496 },
    "20-2.50": { drillMM: 17.50, drillUS: "11/16", decimal: 0.6890 },
    "20-2.00": { drillMM: 18.00, drillUS: "45/64", decimal: 0.7087 },
    "20-1.50": { drillMM: 18.50, drillUS: "47/64", decimal: 0.7283 }
};

// Metric Threads - 50% Thread (Hard Materials)
const METRIC_50 = {
    "1.5-0.35": { drillMM: 1.25, drillUS: "55", decimal: 0.0492 },
    "1.6-0.35": { drillMM: 1.35, drillUS: "54", decimal: 0.0531 },
    "1.8-0.35": { drillMM: 1.55, drillUS: "1/16", decimal: 0.0610 },
    "2-0.45": { drillMM: 1.70, drillUS: "51", decimal: 0.0669 },
    "2-0.40": { drillMM: 1.75, drillUS: "50", decimal: 0.0689 },
    "2.2-0.45": { drillMM: 1.90, drillUS: "48", decimal: 0.0748 },
    "2.5-0.45": { drillMM: 2.20, drillUS: "44", decimal: 0.0866 },
    "3-0.60": { drillMM: 2.60, drillUS: "37", decimal: 0.1024 },
    "3-0.50": { drillMM: 2.70, drillUS: "36", decimal: 0.1063 },
    "3.5-0.60": { drillMM: 3.10, drillUS: "31", decimal: 0.1220 },
    "4-0.75": { drillMM: 3.50, drillUS: "28", decimal: 0.1378 },
    "4-0.70": { drillMM: 3.50, drillUS: "28", decimal: 0.1378 },
    "4.5-0.75": { drillMM: 4.00, drillUS: "22", decimal: 0.1575 },
    "5-1.00": { drillMM: 4.40, drillUS: "11/64", decimal: 0.1732 },
    "5-0.90": { drillMM: 4.40, drillUS: "17", decimal: 0.1732 },
    "5-0.80": { drillMM: 4.50, drillUS: "16", decimal: 0.1772 },
    "5.5-0.90": { drillMM: 4.90, drillUS: "10", decimal: 0.1929 },
    "6-1.00": { drillMM: 5.40, drillUS: "4", decimal: 0.2126 },
    "6-0.75": { drillMM: 5.50, drillUS: "7/32", decimal: 0.2165 },
    "7-1.00": { drillMM: 6.40, drillUS: "E", decimal: 0.2520 },
    "7-0.75": { drillMM: 6.50, drillUS: "F", decimal: 0.2559 },
    "8-1.25": { drillMM: 7.20, drillUS: "J", decimal: 0.2835 },
    "8-1.00": { drillMM: 7.40, drillUS: "L", decimal: 0.2913 },
    "9-1.25": { drillMM: 8.20, drillUS: "P", decimal: 0.3228 },
    "9-1.00": { drillMM: 8.40, drillUS: "21/64", decimal: 0.3307 },
    "10-1.50": { drillMM: 9.00, drillUS: "T", decimal: 0.3543 },
    "10-1.25": { drillMM: 9.20, drillUS: "23/64", decimal: 0.3622 },
    "10-1.00": { drillMM: 9.40, drillUS: "U", decimal: 0.3701 },
    "11-1.50": { drillMM: 10.00, drillUS: "X", decimal: 0.3937 },
    "12-1.75": { drillMM: 10.90, drillUS: "27/64", decimal: 0.4291 },
    "12-1.50": { drillMM: 11.00, drillUS: "7/16", decimal: 0.4331 },
    "12-1.25": { drillMM: 11.20, drillUS: "7/16", decimal: 0.4409 },
    "14-2.00": { drillMM: 12.70, drillUS: "1/2", decimal: 0.5000 },
    "14-1.50": { drillMM: 13.00, drillUS: "33/64", decimal: 0.5118 },
    "14-1.25": { drillMM: 13.20, drillUS: "33/64", decimal: 0.5197 },
    "15-1.50": { drillMM: 14.00, drillUS: "35/64", decimal: 0.5512 },
    "16-2.00": { drillMM: 14.75, drillUS: "37/64", decimal: 0.5807 },
    "16-1.50": { drillMM: 15.00, drillUS: "19/32", decimal: 0.5906 },
    "17-1.50": { drillMM: 16.00, drillUS: "5/8", decimal: 0.6299 },
    "18-2.50": { drillMM: 16.50, drillUS: "41/64", decimal: 0.6496 },
    "18-2.00": { drillMM: 16.75, drillUS: "21/32", decimal: 0.6594 },
    "18-1.50": { drillMM: 17.00, drillUS: "43/64", decimal: 0.6693 },
    "19-2.50": { drillMM: 17.50, drillUS: "11/16", decimal: 0.6890 },
    "20-2.50": { drillMM: 18.50, drillUS: "23/32", decimal: 0.7283 },
    "20-2.00": { drillMM: 18.50, drillUS: "47/64", decimal: 0.7283 },
    "20-1.50": { drillMM: 19.00, drillUS: "3/4", decimal: 0.7480 }
};

// TPI options for each imperial size
const IMPERIAL_TPI_OPTIONS = {
    "0": [80],
    "1": [64, 72],
    "2": [56, 64],
    "3": [48, 56],
    "4": [40, 48],
    "5": [40, 44],
    "6": [32, 40],
    "8": [32, 36],
    "10": [24, 32],
    "12": [24, 28, 32],
    "0.25": [20, 28, 32],
    "0.3125": [18, 24, 32],
    "0.375": [16, 24, 32],
    "0.4375": [14, 20, 28],
    "0.5": [13, 20, 28],
    "0.5625": [12, 18, 24],
    "0.625": [11, 18, 24],
    "0.6875": [24],
    "0.75": [10, 16, 20],
    "0.8125": [20],
    "0.875": [9, 14, 20],
    "0.9375": [20],
    "1.0": [8, 12, 20],
    "1.125: [7, 12]
    
};

// Pitch options for each metric size
const METRIC_PITCH_OPTIONS = {
    "1.5": [0.35],
    "1.6": [0.35],
    "1.8": [0.35],
    "2": [0.40, 0.45],
    "2.2": [0.45],
    "2.5": [0.45],
    "3": [0.50, 0.60],
    "3.5": [0.60],
    "4": [0.70, 0.75],
    "4.5": [0.75],
    "5": [0.80, 0.90, 1.00],
    "5.5": [0.90],
    "6": [0.75, 1.00],
    "7": [0.75, 1.00],
    "8": [1.00, 1.25],
    "9": [1.00, 1.25],
    "10": [1.00, 1.25, 1.50],
    "11": [1.50],
    "12": [1.25, 1.50, 1.75],
    "14": [1.25, 1.50, 2.00],
    "15": [1.50],
    "16": [1.50, 2.00],
    "17": [1.50],
    "18": [1.50, 2.00, 2.50],
    "19": [2.50],
    "20": [1.50, 2.00, 2.50]
};

// Size name mapping for display
const SIZE_NAMES = {
    "0": "#0",
    "1": "#1",
    "2": "#2",
    "3": "#3",
    "4": "#4",
    "5": "#5",
    "6": "#6",
    "8": "#8",
    "10": "#10",
    "12": "#12",
    "0.25": "1/4\"",
    "0.3125": "5/16\"",
    "0.375": "3/8\"",
    "0.4375": "7/16\"",
    "0.5": "1/2\"",
    "0.5625": "9/16\"",
    "0.625": "5/8\"",
    "0.6875": "11/16\"",
    "0.75": "3/4\"",
    "0.8125": "13/16\"",
    "0.875": "7/8\"",
    "0.9375": "15/16\"",
    "1.0": "1\""
};

class TapDrillLookup {
    constructor() {
        this.form = document.getElementById('lookupForm');
        this.threadType = document.getElementById('threadType');
        this.materialType = document.getElementById('materialType');
        this.imperialSize = document.getElementById('imperialSize');
        this.imperialTPI = document.getElementById('imperialTPI');
        this.metricSize = document.getElementById('metricSize');
        this.metricPitch = document.getElementById('metricPitch');
        this.results = document.getElementById('results');
        this.errorMessage = document.getElementById('errorMessage');

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.lookup();
        });

        // Thread type change
        this.threadType.addEventListener('change', () => {
            this.toggleThreadInputs();
        });

        // Imperial size change - update TPI options
        this.imperialSize.addEventListener('change', () => {
            this.updateTPIOptions();
        });

        // Metric size change - update pitch options
        this.metricSize.addEventListener('change', () => {
            this.updatePitchOptions();
        });
    }

    toggleThreadInputs() {
        const isImperial = this.threadType.value === 'imperial';
        const isMetric = this.threadType.value === 'metric';

        document.getElementById('imperialSizeGroup').style.display = isImperial ? 'block' : 'none';
        document.getElementById('imperialTPIGroup').style.display = isImperial ? 'block' : 'none';
        document.getElementById('metricSizeGroup').style.display = isMetric ? 'block' : 'none';
        document.getElementById('metricPitchGroup').style.display = isMetric ? 'block' : 'none';

        // Reset selections
        this.imperialSize.value = '';
        this.imperialTPI.value = '';
        this.metricSize.value = '';
        this.metricPitch.value = '';
        this.results.classList.add('hidden');
        this.errorMessage.classList.add('hidden');
    }

    updateTPIOptions() {
        const size = this.imperialSize.value;
        const tpiSelect = this.imperialTPI;

        tpiSelect.innerHTML = '<option value="">Select TPI...</option>';

        if (size && IMPERIAL_TPI_OPTIONS[size]) {
            IMPERIAL_TPI_OPTIONS[size].forEach(tpi => {
                const option = document.createElement('option');
                option.value = tpi;
                option.textContent = tpi;
                tpiSelect.appendChild(option);
            });
        }
    }

    updatePitchOptions() {
        const size = this.metricSize.value;
        const pitchSelect = this.metricPitch;

        pitchSelect.innerHTML = '<option value="">Select pitch...</option>';

        if (size && METRIC_PITCH_OPTIONS[size]) {
            METRIC_PITCH_OPTIONS[size].forEach(pitch => {
                const option = document.createElement('option');
                option.value = pitch;
                option.textContent = pitch;
                pitchSelect.appendChild(option);
            });
        }
    }

    lookup() {
        this.results.classList.add('hidden');
        this.errorMessage.classList.add('hidden');

        try {
            const threadType = this.threadType.value;
            const materialType = this.materialType.value;

            if (!threadType) {
                throw new Error('Please select a thread type.');
            }

            if (!materialType) {
                throw new Error('Please select a material type.');
            }

            let result;

            if (threadType === 'imperial') {
                result = this.lookupImperial(materialType);
            } else if (threadType === 'metric') {
                result = this.lookupMetric(materialType);
            }

            this.displayResults(result);

        } catch (error) {
            this.showError(error.message);
        }
    }

    lookupImperial(materialType) {
        const size = this.imperialSize.value;
        const tpi = parseInt(this.imperialTPI.value);

        if (!size) {
            throw new Error('Please select a thread size.');
        }

        if (!tpi) {
            throw new Error('Please select a TPI value.');
        }

        const key = `${size}-${tpi}`;
        const table = materialType === 'soft' ? IMPERIAL_75 : IMPERIAL_50;
        const data = table[key];

        if (!data) {
            throw new Error(`Thread ${SIZE_NAMES[size]}-${tpi} not found in lookup table.`);
        }

        const sizeName = SIZE_NAMES[size] || `#${size}`;
        const threadPercentage = materialType === 'soft' ? '75%' : '50%';
        const materialInfo = materialType === 'soft'
            ? 'Aluminum, Brass, Plastics'
            : 'Steel, Stainless Steel, Cast Iron';

        // Get major diameter
        const majorDiameter = MAJOR_DIAMETERS_IMPERIAL[size];

        // Calculate thread specifications
        const pitch = 1 / tpi;  // Pitch = 1/TPI
        const threadDepth = 0.61343 * pitch;  // Depth of external thread
        const minorDiameter = majorDiameter - (2 * threadDepth);  // Minor diameter
        const crestFlat = pitch / 8;  // Width of flat of crest

        return {
            drillSize: `#${data.drill}`,
            threadSpec: `${sizeName}-${tpi}`,
            decimal: data.decimal.toFixed(4),
            threadPercentage: threadPercentage,
            materialInfo: materialInfo,
            isMetric: false,
            // Thread specifications
            majorDiameter: majorDiameter,
            pitch: pitch,
            threadDepth: threadDepth,
            minorDiameter: minorDiameter,
            crestFlat: crestFlat,
            tpi: tpi
        };
    }

    lookupMetric(materialType) {
        const size = this.metricSize.value;
        const pitch = parseFloat(this.metricPitch.value);

        if (!size) {
            throw new Error('Please select a metric thread size.');
        }

        if (!pitch) {
            throw new Error('Please select a pitch value.');
        }

        const key = `${size}-${pitch}`;
        const table = materialType === 'soft' ? METRIC_75 : METRIC_50;
        const data = table[key];

        if (!data) {
            throw new Error(`Thread M${size}×${pitch} not found in lookup table.`);
        }

        const threadPercentage = materialType === 'soft' ? '75%' : '50%';
        const materialInfo = materialType === 'soft'
            ? 'Aluminum, Brass, Plastics'
            : 'Steel, Stainless Steel, Cast Iron';

        // Get major diameter
        const majorDiameter = MAJOR_DIAMETERS_METRIC[size];

        // Calculate thread specifications (metric)
        const threadDepth = 0.6134 * pitch;  // Depth of external thread (metric)
        const minorDiameter = majorDiameter - (2 * threadDepth);  // Minor diameter
        const crestFlat = pitch / 8;  // Width of flat of crest

        return {
            drillSize: data.drillUS,
            threadSpec: `M${size}×${pitch}`,
            decimal: data.decimal.toFixed(4),
            drillMM: data.drillMM.toFixed(2),
            threadPercentage: threadPercentage,
            materialInfo: materialInfo,
            isMetric: true,
            // Thread specifications
            majorDiameter: majorDiameter,
            pitch: pitch,
            threadDepth: threadDepth,
            minorDiameter: minorDiameter,
            crestFlat: crestFlat
        };
    }

    displayResults(result) {
        // Update drill size
        document.getElementById('drillSize').textContent = result.drillSize;

        // Update thread spec
        document.getElementById('threadSpec').textContent = result.threadSpec;

        // Update decimal value
        document.getElementById('decimalValue').textContent = `${result.decimal}"`;

        // Update metric drill if applicable
        const metricDrillRow = document.getElementById('metricDrillRow');
        if (result.isMetric) {
            metricDrillRow.style.display = 'flex';
            document.getElementById('metricDrill').textContent = `${result.drillMM} mm`;
        } else {
            metricDrillRow.style.display = 'none';
        }

        // Update thread percentage
        document.getElementById('threadPercentage').textContent = result.threadPercentage;

        // Update material info
        document.getElementById('materialInfo').textContent = result.materialInfo;

        // Update thread specifications
        if (result.isMetric) {
            // Metric specifications
            document.getElementById('specMajorDiameter').textContent = `${result.majorDiameter.toFixed(2)} mm`;
            document.getElementById('specPitch').textContent = `${result.pitch.toFixed(2)} mm`;
            document.getElementById('specMinorDiameter').textContent = `${result.minorDiameter.toFixed(4)} mm`;
            document.getElementById('specThreadDepth').textContent = `${result.threadDepth.toFixed(4)} mm`;
            document.getElementById('specCrestFlat').textContent = `${result.crestFlat.toFixed(4)} mm`;
        } else {
            // Imperial specifications
            document.getElementById('specMajorDiameter').textContent = `${result.majorDiameter.toFixed(4)}"`;
            document.getElementById('specPitch').textContent = `${result.pitch.toFixed(4)}" (1/${result.tpi})`;
            document.getElementById('specMinorDiameter').textContent = `${result.minorDiameter.toFixed(4)}"`;
            document.getElementById('specThreadDepth').textContent = `${result.threadDepth.toFixed(4)}"`;
            document.getElementById('specCrestFlat').textContent = `${result.crestFlat.toFixed(4)}"`;
        }

        // Show results
        this.results.classList.remove('hidden');
        this.results.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    showError(message) {
        this.errorMessage.textContent = message;
        this.errorMessage.classList.remove('hidden');
        this.errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

// Initialize lookup tool when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TapDrillLookup();
});
