// Meat Cut Profiles
const meatProfiles = {
    brisket: {
        name: "Packer Brisket",
        usesWeight: true,
        defaultWeight: 13.5,
        workPerLb: 1.0,
        defaultRest: 2.5,
        restHint: "Recommended: 2–4 hrs in an insulated cooler",
        defaultP1Temp: "180",
        defaultP1Hours: 4,
        defaultP2Temp: "250",
        defaultWrap: "paper",
        defaultWrapTemp: 165,
        defaultPullTemp: 203,
        targetTemp: "Probe Tender in Flat & Point",
        wrapTemp: "Once dark mahogany bark sets"
    },
    beef_ribs: {
        name: "Beef Plate / Dino Ribs",
        usesWeight: true,
        defaultWeight: 5.5,
        workPerLb: 1.15,
        defaultRest: 1.5,
        restHint: "Recommended: 1–2 hrs wrapped in butcher paper",
        defaultP1Temp: "225",
        defaultP1Hours: 3,
        defaultP2Temp: "250",
        defaultWrap: "paper",
        defaultWrapTemp: 170,
        defaultPullTemp: 204,
        targetTemp: "Probe slides in like warm butter",
        wrapTemp: "When bark is firm and deep red/black"
    },
    chuck_roast: {
        name: "Smoked Chuck Roast",
        usesWeight: true,
        defaultWeight: 3.5,
        workPerLb: 1.25,
        defaultRest: 1.0,
        restHint: "Recommended: 1 hr wrapped rest before slicing/pulling",
        defaultP1Temp: "225",
        defaultP1Hours: 2.5,
        defaultP2Temp: "250",
        defaultWrap: "foil",
        defaultWrapTemp: 165,
        defaultPullTemp: 203,
        targetTemp: "Pulled beef (or 195°F for sliceable)",
        wrapTemp: "Braise or wrap tightly through the stall"
    },
    tri_tip: {
        name: "Reverse-Seared Tri-Tip",
        usesWeight: true,
        defaultWeight: 2.5,
        workPerLb: 0.45,
        defaultRest: 0.25,
        restHint: "Recommended: 15 mins tented before searing/slicing",
        defaultP1Temp: "225",
        defaultP1Hours: 1.5,
        defaultP2Temp: "225",
        defaultWrap: "naked",
        defaultWrapTemp: 118,
        defaultPullTemp: 132,
        targetTemp: "Sear over high heat to finish Medium-Rare",
        wrapTemp: "Pull off smoke to start reverse sear"
    },
    prime_rib: {
        name: "Smoked Prime Rib Roast",
        usesWeight: true,
        defaultWeight: 6.0,
        workPerLb: 0.48,
        defaultRest: 0.5,
        restHint: "Recommended: 30 mins tented before carving",
        defaultP1Temp: "225",
        defaultP1Hours: 3,
        defaultP2Temp: "250",
        defaultWrap: "naked",
        defaultWrapTemp: 120,
        defaultPullTemp: 130,
        targetTemp: "Carries over +5°F to Medium-Rare",
        wrapTemp: "Optional high-heat crust sear trigger"
    },
    pork_butt: {
        name: "Boston Butt (Pulled Pork)",
        usesWeight: true,
        defaultWeight: 8.5,
        workPerLb: 1.0,
        defaultRest: 1.5,
        restHint: "Recommended: 1–2 hrs before shredding",
        defaultP1Temp: "225",
        defaultP1Hours: 4,
        defaultP2Temp: "250",
        defaultWrap: "foil",
        defaultWrapTemp: 165,
        defaultPullTemp: 203,
        targetTemp: "Bone wiggles clean & pulls effortlessly",
        wrapTemp: "When fat cap splits and bark is set"
    },
    ribs: {
        name: "St. Louis / Spare Ribs (3-2-1)",
        usesWeight: false,
        fixedWork: 4.02, // ~6 hrs at 225°F
        defaultWeight: 3.5,
        defaultRest: 0.5,
        restHint: "Recommended: 20–30 mins tented in foil",
        defaultP1Temp: "225",
        defaultP1Hours: 3,
        defaultP2Temp: "225",
        defaultWrap: "foil",
        defaultWrapTemp: 165,
        defaultPullTemp: 200,
        targetTemp: "Passes bend test & meat pulls back 1/2\"",
        wrapTemp: "Wrap w/ butter & brown sugar"
    },
    baby_back_ribs: {
        name: "Baby Back Ribs (2-2-1)",
        usesWeight: false,
        fixedWork: 3.35, // ~5 hrs at 225°F
        defaultWeight: 2.5,
        defaultRest: 0.5,
        restHint: "Recommended: 15–30 mins before slicing bones",
        defaultP1Temp: "225",
        defaultP1Hours: 2,
        defaultP2Temp: "225",
        defaultWrap: "foil",
        defaultWrapTemp: 165,
        defaultPullTemp: 198,
        targetTemp: "Tender bend test",
        wrapTemp: "Wrap w/ butter, honey & brown sugar"
    },
    pork_belly: {
        name: "Pork Belly Burnt Ends",
        usesWeight: false,
        fixedWork: 3.2, // ~4 hrs at 250°F
        defaultWeight: 5.0,
        defaultRest: 0.25,
        restHint: "Recommended: 15 mins to let glaze tack up",
        defaultP1Temp: "250",
        defaultP1Hours: 2.5,
        defaultP2Temp: "250",
        defaultWrap: "foil",
        defaultWrapTemp: 165,
        defaultPullTemp: 203,
        targetTemp: "Pillow-soft glazed cubes",
        wrapTemp: "Transfer cubes to foil pan w/ butter, sugar & glaze"
    },
    chicken: {
        name: "Whole Chicken",
        usesWeight: true,
        defaultWeight: 5.0,
        workPerLb: 0.55,
        defaultRest: 0.5,
        restHint: "Recommended: 20–30 mins for juices to redistribute",
        defaultP1Temp: "250",
        defaultP1Hours: 1,
        defaultP2Temp: "300",
        defaultWrap: "naked",
        defaultWrapTemp: 135,
        defaultPullTemp: 165,
        targetTemp: "Deepest breast (175°F in thigh)",
        wrapTemp: "Bump pit temp to 300°F+ to crisp skin"
    },
    turkey: {
        name: "Whole Turkey",
        usesWeight: true,
        defaultWeight: 12.0,
        workPerLb: 0.35,
        defaultRest: 0.5,
        restHint: "Recommended: 30–45 mins tented before carving",
        defaultP1Temp: "250",
        defaultP1Hours: 1.5,
        defaultP2Temp: "300",
        defaultWrap: "paper",
        defaultWrapTemp: 140,
        defaultPullTemp: 165,
        targetTemp: "Deepest breast (175°F in thigh)",
        wrapTemp: "Tent breast w/ butter if browning fast"
    },
    turkey_breast: {
        name: "Boneless Turkey Breast",
        usesWeight: true,
        defaultWeight: 4.0,
        workPerLb: 0.55,
        defaultRest: 0.5,
        restHint: "Recommended: 20–30 mins wrapped in foil with butter",
        defaultP1Temp: "250",
        defaultP1Hours: 1.5,
        defaultP2Temp: "275",
        defaultWrap: "foil",
        defaultWrapTemp: 145,
        defaultPullTemp: 162,
        targetTemp: "Carries over to 165°F juicy perfection",
        wrapTemp: "Wrap in foil with generous butter"
    },
    salmon: {
        name: "Smoked Salmon Fillet",
        usesWeight: false,
        fixedWork: 1.1, // ~2 hrs at 180-200°F
        defaultWeight: 2.0,
        defaultRest: 0,
        restHint: "Serve immediately or chill",
        defaultP1Temp: "180",
        defaultP1Hours: 1,
        defaultP2Temp: "200",
        defaultWrap: "naked",
        defaultWrapTemp: 120,
        defaultPullTemp: 142,
        targetTemp: "Flakes gently, no white albumin",
        wrapTemp: "Brush with maple/honey glaze & bump temp"
    }
};

// Relative cooking speeds for different smoker temperatures
// Baseline: 275°F = 1.00 unit of work per hour
const tempSpeeds = {
    180: 0.50,
    200: 0.58,
    225: 0.67,
    250: 0.80,
    275: 1.00,
    300: 1.18
};

// Wrap method multiplier on Phase 2 duration
const wrapMultipliers = {
    paper: 1.00, // Standard butcher paper / foil boat
    foil: 0.82,  // Texas crutch speeds up Phase 2 by ~18%
    naked: 1.20  // No wrap takes ~20% longer through evaporative stall
};

// Smoker insulation sensitivity to weather penalties
const insulationSensitivity = {
    insulated: 0.35, // Kamado / Double-wall
    standard: 1.00,  // Pellet / WSM / Drum
    thin: 1.65       // Offset stick burner / thin steel
};

// Live Weather State
let cachedForecast = null; // Stores Open-Meteo hourly response + location name
let lastCalculatedTimeline = null;
let completedSteps = loadCompletedSteps();

function loadCompletedSteps() {
    try {
        const raw = localStorage.getItem('smoker_completed_steps');
        return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (_) {
        return new Set();
    }
}

function saveCompletedSteps() {
    localStorage.setItem('smoker_completed_steps', JSON.stringify([...completedSteps]));
}

// Initialize Form Defaults on Load
window.addEventListener('DOMContentLoaded', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(17, 0, 0, 0); // Default 5:00 PM tomorrow

    const tzOffset = tomorrow.getTimezoneOffset() * 60000;
    const localISOTime = new Date(tomorrow - tzOffset).toISOString().slice(0, 16);
    document.getElementById('serveTime').value = localISOTime;

    applyMeatPreset('brisket');
    renderSavedLogs();

    // Restore last used weather location if saved
    const savedLoc = localStorage.getItem('smoker_last_location');
    if (savedLoc) {
        try {
            const parsed = JSON.parse(savedLoc);
            document.getElementById('locationInput').value = parsed.name || '';
            fetchForecastByCoords(parsed.lat, parsed.lon, parsed.name, false);
        } catch (err) {
            // Ignore malformed storage
        }
    }
});

// Handle Meat Cut Selection Changes
document.getElementById('meat').addEventListener('change', (e) => {
    applyMeatPreset(e.target.value);
});

function applyMeatPreset(meatKey) {
    const profile = meatProfiles[meatKey];
    if (!profile) return;

    const weightGroup = document.getElementById('weightGroup');
    const weightInput = document.getElementById('weight');
    const weightHint = document.getElementById('weightHint');

    weightInput.value = profile.defaultWeight;
    if (profile.usesWeight) {
        weightGroup.style.opacity = '1';
        weightInput.disabled = false;
        weightHint.textContent = 'Cook time scales with weight';
    } else {
        weightGroup.style.opacity = '0.55';
        weightInput.disabled = true;
        weightHint.textContent = 'Cook time based on thickness/method rather than weight';
    }

    document.getElementById('restTime').value = profile.defaultRest;
    document.getElementById('restHint').textContent = profile.restHint;
    document.getElementById('p1Temp').value = profile.defaultP1Temp;
    document.getElementById('p2Temp').value = profile.defaultP2Temp;
    document.getElementById('wrapMethod').value = profile.defaultWrap;
    document.getElementById('wrapTempInput').value = profile.defaultWrapTemp;
    document.getElementById('pullTempInput').value = profile.defaultPullTemp;

    updateWrapMethodUI();
    updatePhase1FromWrapTemp(true);
}

/**
 * Computes thermal work units from fridge temp (38°F) to target internal temp,
 * accounting for the evaporative cooling stall zone (150°F - 175°F).
 */
function computeThermalUnitsToTemp(tempF) {
    const startF = 38;
    if (tempF <= startF) return 0;

    let units = 0;
    // Zone 1: 38°F -> 150°F (steady rise: 1.0x per degree)
    const z1 = Math.max(0, Math.min(tempF, 150) - startF);
    units += z1 * 1.0;

    // Zone 2: 150°F -> 175°F (evaporative stall zone: 2.2x work per degree unwrapped)
    if (tempF > 150) {
        const z2 = Math.max(0, Math.min(tempF, 175) - 150);
        units += z2 * 2.2;
    }

    // Zone 3: 175°F+ (collagen rendering to finish: 1.35x per degree)
    if (tempF > 175) {
        const z3 = tempF - 175;
        units += z3 * 1.35;
    }

    return units;
}

function updateWrapMethodUI() {
    const wrapMethod = document.getElementById('wrapMethod').value;
    const label = document.getElementById('wrapTempLabel');
    const hint = document.getElementById('wrapTempHint');

    if (wrapMethod === 'naked') {
        label.textContent = 'Phase 2 Temp-Bump Trigger (°F)';
        hint.textContent = 'Internal temp to switch from Phase 1 to Phase 2 pit temp (no wrap)';
    } else {
        label.textContent = 'Target Wrap Internal Temp (°F)';
        hint.textContent = 'Internal temp to wrap meat & start Phase 2 (typical stall: 160°F–175°F)';
    }
}

function updatePhase1FromWrapTemp(autoSetHours = true) {
    const meatKey = document.getElementById('meat').value;
    const profile = meatProfiles[meatKey];
    if (!profile) return;

    const weight = parseFloat(document.getElementById('weight').value) || profile.defaultWeight;
    const p1Temp = document.getElementById('p1Temp').value;
    const p1Speed = tempSpeeds[p1Temp] || 0.8;

    let wrapTemp = parseFloat(document.getElementById('wrapTempInput').value) || profile.defaultWrapTemp;
    let pullTemp = parseFloat(document.getElementById('pullTempInput').value) || profile.defaultPullTemp;

    if (wrapTemp >= pullTemp) {
        wrapTemp = pullTemp;
    }

    // Update top info banner with user's custom wrap & pull temps
    document.getElementById('targetTempText').textContent = `~${pullTemp}°F (${profile.targetTemp})`;
    document.getElementById('wrapTempText').textContent = `~${wrapTemp}°F (${profile.wrapTemp})`;

    // Calculate work fraction required to reach wrapTemp
    const totalThermal = Math.max(1, computeThermalUnitsToTemp(pullTemp));
    const wrapThermal = computeThermalUnitsToTemp(wrapTemp);
    const p1Fraction = Math.min(1, Math.max(0, wrapThermal / totalThermal));

    // Scale total work if user adjusted pullTemp relative to defaultPullTemp
    const defaultTotalThermal = Math.max(1, computeThermalUnitsToTemp(profile.defaultPullTemp));
    const pullTempScale = totalThermal / defaultTotalThermal;
    const baseWork = (profile.usesWeight ? weight * profile.workPerLb : profile.fixedWork) * pullTempScale;

    const estP1Hours = Math.round(((baseWork * p1Fraction) / p1Speed) * 4) / 4;

    if (autoSetHours) {
        document.getElementById('p1Hours').value = estP1Hours;
    }

    document.getElementById('p1HoursHint').textContent =
        `Est. ~${estP1Hours}h at ${p1Temp}°F to hit ${wrapTemp}°F internal (or enter custom hours).`;
}

// Listen for Wrap Temp, Pull Temp, Wrap Method, P1 Temp, and Weight changes
document.getElementById('wrapTempInput').addEventListener('input', () => {
    updatePhase1FromWrapTemp(true);
});

document.getElementById('pullTempInput').addEventListener('input', () => {
    updatePhase1FromWrapTemp(true);
});

document.getElementById('p1Temp').addEventListener('change', () => {
    updatePhase1FromWrapTemp(true);
});

document.getElementById('weight').addEventListener('input', () => {
    updatePhase1FromWrapTemp(true);
});

document.getElementById('wrapMethod').addEventListener('change', () => {
    updateWrapMethodUI();
    updatePhase1FromWrapTemp(false);
});

document.getElementById('autoP1Btn').addEventListener('click', () => {
    updatePhase1FromWrapTemp(true);
});

// Re-render timeline immediately when toggling "Expand every individual spritz & fuel check"
document.getElementById('showDetailedChecks').addEventListener('change', () => {
    if (lastCalculatedTimeline) {
        calculateAndDisplayTimeline();
    }
});

// Weather Location Search & GPS
document.getElementById('searchWeatherBtn').addEventListener('click', async () => {
    const query = document.getElementById('locationInput').value.trim();
    if (!query) {
        setWeatherStatus('Please enter a city name or postal/ZIP code.', true);
        return;
    }
    await searchLocationAndFetchWeather(query);
});

document.getElementById('locationInput').addEventListener('keydown', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = document.getElementById('locationInput').value.trim();
        if (query) {
            await searchLocationAndFetchWeather(query);
        }
    }
});

document.getElementById('geoWeatherBtn').addEventListener('click', () => {
    if (!navigator.geolocation) {
        setWeatherStatus('Geolocation is not supported by your browser.', true);
        return;
    }
    setWeatherStatus('Acquiring GPS coordinates...');
    navigator.geolocation.getCurrentPosition(
        async (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            let locLabel = `GPS (${lat.toFixed(2)}, ${lon.toFixed(2)})`;
            try {
                const revRes = await fetch(
                    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
                );
                if (revRes.ok) {
                    const revData = await revRes.json();
                    const city = revData.city || revData.locality || '';
                    const region = revData.principalSubdivisionCode || revData.principalSubdivision || '';
                    if (city) {
                        locLabel = region ? `${city}, ${region}` : city;
                    }
                }
            } catch (_) {
                // Keep coordinate label if reverse geocode fails
            }
            document.getElementById('locationInput').value = locLabel;
            await fetchForecastByCoords(lat, lon, locLabel, true);
        },
        () => {
            setWeatherStatus('Unable to read GPS location. Try typing your City or ZIP code instead.', true);
        },
        { timeout: 10000 }
    );
});

async function searchLocationAndFetchWeather(query) {
    setWeatherStatus(`Searching for "${query}"...`);
    try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
        const res = await fetch(geoUrl);
        if (!res.ok) throw new Error('Geocoding request failed');
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
            setWeatherStatus(`Could not find location "${query}". Try a nearby city name.`, true);
            return;
        }

        const place = data.results[0];
        const parts = [place.name, place.admin1, place.country_code].filter(Boolean);
        const displayName = parts.join(', ');
        document.getElementById('locationInput').value = displayName;

        await fetchForecastByCoords(place.latitude, place.longitude, displayName, true);
    } catch (err) {
        setWeatherStatus('Could not reach live weather service. Check your internet connection.', true);
    }
}

async function fetchForecastByCoords(lat, lon, displayName, recalculateIfReady) {
    setWeatherStatus(`Pulling 16-day hourly forecast for ${displayName}...`);
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto&forecast_days=16`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Forecast request failed');
        const forecastData = await res.json();

        cachedForecast = {
            name: displayName,
            lat,
            lon,
            hourly: forecastData.hourly
        };

        localStorage.setItem('smoker_last_location', JSON.stringify({ name: displayName, lat, lon }));
        setWeatherStatus(`Live hourly forecast loaded for ${displayName}.`);

        // Immediately preview weather for current planned window
        calculateAndDisplayTimeline(!recalculateIfReady && !lastCalculatedTimeline);
    } catch (err) {
        setWeatherStatus('Failed to load hourly weather data. Timeline will use standard baseline speeds.', true);
    }
}

function setWeatherStatus(msg, isError = false) {
    const el = document.getElementById('weatherStatus');
    el.textContent = msg;
    el.style.color = isError ? '#ff8a80' : '#aaaaaa';
}

/**
 * Evaluates the weather conditions between cookStart and cookEnd using cachedForecast.
 * Returns { multiplier, avgTemp, minTemp, maxWind, maxPrecip, summaryText, badgeText, badgeClass, matchedHours }
 */
function evaluateCookWindowWeather(cookStart, cookEnd, insulationType) {
    if (!cachedForecast || !cachedForecast.hourly || !cachedForecast.hourly.time) {
        return null;
    }

    const times = cachedForecast.hourly.time;
    const temps = cachedForecast.hourly.temperature_2m;
    const winds = cachedForecast.hourly.wind_speed_10m;
    const precips = cachedForecast.hourly.precipitation_probability;

    const startMs = cookStart.getTime() - 3600000; // Include 1hr margin
    const endMs = cookEnd.getTime();

    const matchedTemps = [];
    const matchedWinds = [];
    const matchedPrecips = [];

    for (let i = 0; i < times.length; i++) {
        const tMs = new Date(times[i]).getTime();
        if (tMs >= startMs && tMs <= endMs) {
            if (typeof temps[i] === 'number') matchedTemps.push(temps[i]);
            if (typeof winds[i] === 'number') matchedWinds.push(winds[i]);
            if (typeof precips[i] === 'number') matchedPrecips.push(precips[i]);
        }
    }

    if (matchedTemps.length === 0) {
        return {
            outOfRange: true,
            multiplier: 1.0
        };
    }

    const avgTemp = matchedTemps.reduce((a, b) => a + b, 0) / matchedTemps.length;
    const minTemp = Math.min(...matchedTemps);
    const maxWind = matchedWinds.length ? Math.max(...matchedWinds) : 0;
    const maxPrecip = matchedPrecips.length ? Math.max(...matchedPrecips) : 0;

    // Calculate raw thermal penalty
    let rawPenalty = 0;
    const reasons = [];

    // 1. Ambient Temperature impact (baseline ideal ~65°F)
    if (avgTemp < 32) {
        rawPenalty += 0.14 + (32 - avgTemp) * 0.004;
        reasons.push(`freezing temps (${Math.round(avgTemp)}°F avg)`);
    } else if (avgTemp < 50) {
        rawPenalty += (50 - avgTemp) * 0.005;
        reasons.push(`chilly air (${Math.round(avgTemp)}°F avg)`);
    } else if (avgTemp > 85) {
        rawPenalty -= 0.03; // Hot ambient weather slightly reduces heat loss
        reasons.push(`warm ambient temps (${Math.round(avgTemp)}°F avg)`);
    }

    // 2. Wind convective heat loss
    if (maxWind >= 20) {
        rawPenalty += 0.12 + (maxWind - 20) * 0.005;
        reasons.push(`high wind gusts (${Math.round(maxWind)} mph)`);
    } else if (maxWind >= 12) {
        rawPenalty += (maxWind - 10) * 0.008;
        reasons.push(`breezy winds (${Math.round(maxWind)} mph)`);
    }

    // 3. Rain / snow evaporative cooling on smoker body
    if (maxPrecip >= 60) {
        rawPenalty += 0.06;
        reasons.push(`high rain/snow chance (${Math.round(maxPrecip)}%)`);
    } else if (maxPrecip >= 35) {
        rawPenalty += 0.03;
        reasons.push(`possible precipitation (${Math.round(maxPrecip)}%)`);
    }

    const sensitivity = insulationSensitivity[insulationType] || 1.0;
    const adjustedPenalty = Math.max(-0.05, Math.min(0.45, rawPenalty * sensitivity));
    const multiplier = 1 + adjustedPenalty;

    let badgeText = 'Ideal Smoking Weather';
    let badgeClass = '';
    if (adjustedPenalty >= 0.15) {
        badgeText = 'Harsh Pit Conditions';
        badgeClass = 'warn';
    } else if (adjustedPenalty >= 0.05) {
        badgeText = 'Cool / Breezy Impact';
        badgeClass = 'cold';
    }

    return {
        outOfRange: false,
        multiplier,
        avgTemp,
        minTemp,
        maxWind,
        maxPrecip,
        reasons,
        badgeText,
        badgeClass,
        matchedHours: matchedTemps.length
    };
}

// Form Submit Listener
document.getElementById('smokeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    calculateAndDisplayTimeline(false);
});

function calculateAndDisplayTimeline(weatherPreviewOnly = false) {
    const serveTimeInput = document.getElementById('serveTime').value;
    if (!serveTimeInput) return;

    const serveDate = new Date(serveTimeInput);
    const restHrs = parseFloat(document.getElementById('restTime').value) || 0;
    const safetyBufferHrs = parseFloat(document.getElementById('safetyBuffer').value) || 0;
    const prepHours = parseFloat(document.getElementById('prepType').value) || 0;
    const preheatMins = parseFloat(document.getElementById('preheatMins').value) || 0;

    const meatKey = document.getElementById('meat').value;
    const profile = meatProfiles[meatKey];
    const weight = parseFloat(document.getElementById('weight').value) || profile.defaultWeight;

    const p1Temp = document.getElementById('p1Temp').value;
    const p1HoursInput = parseFloat(document.getElementById('p1Hours').value) || 0;
    const p2Temp = document.getElementById('p2Temp').value;
    const wrapMethod = document.getElementById('wrapMethod').value;
    const wrapTempVal = parseFloat(document.getElementById('wrapTempInput').value) || profile.defaultWrapTemp;
    const pullTempVal = parseFloat(document.getElementById('pullTempInput').value) || profile.defaultPullTemp;
    const smokerInsulation = document.getElementById('smokerInsulation').value;
    const applyWeather = document.getElementById('applyWeatherFactor').checked;

    const spritzInterval = parseInt(document.getElementById('spritzInterval').value, 10) || 0;
    const fuelInterval = parseInt(document.getElementById('fuelInterval').value, 10) || 0;
    const showDetailedChecks = document.getElementById('showDetailedChecks').checked;

    // 1. Base required work units (scaled by custom pull temp relative to default pull temp)
    const defaultTotalThermal = Math.max(1, computeThermalUnitsToTemp(profile.defaultPullTemp));
    const customTotalThermal = Math.max(1, computeThermalUnitsToTemp(pullTempVal));
    const pullTempScale = customTotalThermal / defaultTotalThermal;
    const totalWork = (profile.usesWeight ? weight * profile.workPerLb : profile.fixedWork) * pullTempScale;

    // 2. Baseline speeds
    const p1Speed = tempSpeeds[p1Temp] || 0.8;
    const p2Speed = tempSpeeds[p2Temp] || 0.8;
    const wrapMult = wrapMultipliers[wrapMethod] || 1.0;

    // 3. First-pass cook duration (before weather multiplier)
    let baseP1Hours = 0;
    let baseP2Hours = 0;
    const p1WorkDone = p1HoursInput * p1Speed;

    if (p1WorkDone >= totalWork) {
        baseP1Hours = totalWork / p1Speed;
        baseP2Hours = 0;
    } else {
        baseP1Hours = p1HoursInput;
        const remainingWork = totalWork - p1WorkDone;
        baseP2Hours = (remainingWork / p2Speed) * wrapMult;
    }

    const totalHoldHrs = restHrs + safetyBufferHrs;
    const pullDate = new Date(serveDate.getTime() - totalHoldHrs * 3600000);
    const roughStartDate = new Date(pullDate.getTime() - (baseP1Hours + baseP2Hours) * 3600000);

    // 4. Evaluate Live Weather over the estimated cook window
    let weatherMultiplier = 1.0;
    let weatherEval = evaluateCookWindowWeather(roughStartDate, pullDate, smokerInsulation);

    updateWeatherUI(weatherEval, baseP1Hours + baseP2Hours, applyWeather);

    if (weatherPreviewOnly) return;

    if (applyWeather && weatherEval && !weatherEval.outOfRange) {
        weatherMultiplier = weatherEval.multiplier;
    }

    // 5. Final Phase 1 & Phase 2 hours including weather factor
    const actualP1Hours = baseP1Hours * weatherMultiplier;
    const actualP2Hours = baseP2Hours * weatherMultiplier;
    const totalCookHours = actualP1Hours + actualP2Hours;
    const weatherAddedMins = Math.round((totalCookHours - (baseP1Hours + baseP2Hours)) * 60);

    // 6. Reverse Timestamps
    const p2StartDate = new Date(pullDate.getTime() - actualP2Hours * 3600000);
    const meatOnDate = new Date(p2StartDate.getTime() - actualP1Hours * 3600000);
    const preheatDate = new Date(meatOnDate.getTime() - preheatMins * 60000);
    const prepDate = new Date(preheatDate.getTime() - prepHours * 3600000);

    lastCalculatedTimeline = {
        meatKey,
        meatName: profile.name,
        weight: profile.usesWeight ? weight : null,
        prepHours,
        preheatMins,
        prepDate,
        preheatDate,
        meatOnDate,
        p2StartDate,
        pullDate,
        serveDate,
        p1Temp,
        p2Temp,
        actualP1Hours,
        actualP2Hours,
        totalCookHours,
        restHrs,
        safetyBufferHrs,
        totalHoldHrs,
        wrapMethod,
        wrapTempVal,
        pullTempVal,
        weatherAddedMins,
        spritzInterval,
        fuelInterval,
        showDetailedChecks,
        targetTemp: `${pullTempVal}°F (${profile.targetTemp})`,
        wrapTemp: `${wrapTempVal}°F (${profile.wrapTemp})`
    };

    renderTimeline(lastCalculatedTimeline);
}

function updateWeatherUI(weatherEval, baseCookHrs, applyWeather) {
    const card = document.getElementById('weatherCard');
    if (!weatherEval) {
        card.classList.add('hidden');
        return;
    }

    card.classList.remove('hidden');
    document.getElementById('weatherLocName').textContent = cachedForecast.name;

    const badge = document.getElementById('weatherBadge');
    const impactNote = document.getElementById('weatherImpactNote');

    if (weatherEval.outOfRange) {
        badge.textContent = 'Date Outside 16-Day Forecast';
        badge.className = 'weather-badge warn';
        document.getElementById('wAvgTemp').textContent = '--°F';
        document.getElementById('wMinTemp').textContent = '--°F';
        document.getElementById('wMaxWind').textContent = '-- mph';
        document.getElementById('wPrecip').textContent = '--%';
        impactNote.textContent = 'Target serve date is outside the 16-day hourly forecast window. Standard cook speeds applied.';
        return;
    }

    badge.textContent = weatherEval.badgeText;
    badge.className = `weather-badge ${weatherEval.badgeClass}`.trim();

    document.getElementById('wAvgTemp').textContent = `${Math.round(weatherEval.avgTemp)}°F`;
    document.getElementById('wMinTemp').textContent = `${Math.round(weatherEval.minTemp)}°F`;
    document.getElementById('wMaxWind').textContent = `${Math.round(weatherEval.maxWind)} mph`;
    document.getElementById('wPrecip').textContent = `${Math.round(weatherEval.maxPrecip)}%`;

    const deltaMins = Math.round(baseCookHrs * (weatherEval.multiplier - 1) * 60);
    if (!applyWeather) {
        impactNote.textContent = `Live weather adjustment is unchecked (would adjust cook time by ${deltaMins >= 0 ? '+' : ''}${deltaMins} mins).`;
    } else if (Math.abs(deltaMins) <= 3) {
        impactNote.textContent = 'Great smoking conditions during your cook window — no extra weather time penalty needed.';
    } else if (deltaMins > 0) {
        const reasonStr = weatherEval.reasons.length ? ` due to ${weatherEval.reasons.join(', ')}` : '';
        impactNote.innerHTML = `<strong>Weather Impact: +${deltaMins} mins</strong> added to smoke time${reasonStr}.`;
    } else {
        impactNote.innerHTML = `<strong>Weather Impact: ${deltaMins} mins</strong> (warm ambient air helps pit recovery).`;
    }
}

function formatDateTime(date) {
    return date.toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}

function formatDuration(hoursFloat) {
    const totalMins = Math.round(hoursFloat * 60);
    const hrs = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    if (hrs === 0) return `${mins}m`;
    if (mins === 0) return `${hrs}h`;
    return `${hrs}h ${mins}m`;
}

function renderTimeline(data) {
    const timelineList = document.getElementById('timelineList');
    const summaryPills = document.getElementById('summaryPills');
    timelineList.innerHTML = '';
    summaryPills.innerHTML = '';

    // Summary pills at top of results
    const totalStartToServeHrs = (data.serveDate.getTime() - data.meatOnDate.getTime()) / 3600000;
    summaryPills.innerHTML += `<span class="pill">Total Active Smoke: <strong>${formatDuration(data.totalCookHours)}</strong></span>`;
    summaryPills.innerHTML += `<span class="pill">Rest + Buffer: <strong>${formatDuration(data.totalHoldHrs)}</strong></span>`;
    summaryPills.innerHTML += `<span class="pill">Meat On → Serve: <strong>${formatDuration(totalStartToServeHrs)}</strong></span>`;
    if (data.weatherAddedMins !== 0) {
        const sign = data.weatherAddedMins > 0 ? '+' : '';
        summaryPills.innerHTML += `<span class="pill">Weather Adj: <strong>${sign}${data.weatherAddedMins}m</strong></span>`;
    }

    const events = [];

    // 1. Prep / Dry Brine Step
    if (data.prepHours > 0) {
        const prepTitle = data.prepHours >= 12
            ? `Trim & Dry Brine (${data.prepHours}h Advance Prep)`
            : 'Trim, Binder & Season Meat';
        const prepDetail = data.prepHours >= 12
            ? 'Trim excess fat, apply kosher salt / rub, and rest uncovered on a wire rack in the fridge.'
            : 'Trim meat, apply binder & seasoning rub while you get ready to fire up the pit.';
        events.push({
            id: 'step-prep',
            time: data.prepDate,
            cssClass: 'step-prep',
            title: prepTitle,
            detail: prepDetail,
            badge: `-${formatDuration(data.prepHours)}`
        });
    }

    // 2. Smoker Preheat Step
    if (data.preheatMins > 0) {
        events.push({
            id: 'step-preheat',
            time: data.preheatDate,
            cssClass: 'step-preheat',
            title: `Fire Up & Preheat Smoker (${data.actualP1Hours > 0 ? data.p1Temp : data.p2Temp}°F)`,
            detail: 'Dial in clean thin blue smoke, fill water pan if using, and stabilize grate temp.',
            badge: `${data.preheatMins}m preheat`
        });
    }

    // 3. Meat On / Phase 1
    if (data.actualP1Hours > 0) {
        const hasP2 = data.actualP2Hours > 0;
        let checkSummary = [];
        if (!data.showDetailedChecks) {
            if (data.spritzInterval > 0) {
                checkSummary.push(`Spritz every ${data.spritzInterval}m after first 2 hrs`);
            }
            if (data.fuelInterval > 0) {
                checkSummary.push(`Check fuel/wood every ${data.fuelInterval}m`);
            }
        }
        const extraCheckNote = checkSummary.length ? ` • ${checkSummary.join(' | ')}` : '';
        events.push({
            id: 'step-p1',
            time: data.meatOnDate,
            cssClass: 'step-smoke',
            title: hasP2 ? 'Meat On Smoker — Start Phase 1 (Initial Smoke)' : 'Meat On Smoker — Start Cook',
            detail: `Hold pit at ${data.p1Temp}°F for ~${formatDuration(data.actualP1Hours)}. ${hasP2 ? `Target wrap trigger: ${data.wrapTemp}.` : ''}${extraCheckNote}`,
            badge: `${data.p1Temp}°F • ${formatDuration(data.actualP1Hours)}`
        });
    }

    // 4. Phase 2 / Wrap Step
    if (data.actualP2Hours > 0) {
        const wrapLabels = {
            paper: `Wrap at ${data.wrapTempVal}°F in Butcher Paper / Foil Boat`,
            foil: `Wrap at ${data.wrapTempVal}°F in Heavy Duty Foil (Texas Crutch)`,
            naked: `At ${data.wrapTempVal}°F Keep Unwrapped (Naked Smoke)`
        };
        const isStart = data.actualP1Hours === 0;
        events.push({
            id: 'step-p2',
            time: data.p2StartDate,
            cssClass: 'step-wrap',
            title: isStart
                ? `Meat On Smoker (${data.p2Temp}°F)`
                : `Phase 2 — ${wrapLabels[data.wrapMethod]} & Set Pit to ${data.p2Temp}°F`,
            detail: `Continue cooking for ~${formatDuration(data.actualP2Hours)} until internal temp hits ${data.targetTemp}.`,
            badge: `Wrap ${data.wrapTempVal}°F • ${formatDuration(data.actualP2Hours)}`
        });
    }

    // 5. Optional Expanded Mid-Cook Spritz & Fuel Checkpoints
    if (data.showDetailedChecks) {
        const cookStartMs = data.meatOnDate.getTime();
        const cookEndMs = data.pullDate.getTime();
        const wrapMs = data.actualP2Hours > 0 ? data.p2StartDate.getTime() : cookEndMs;

        // Spritz events: start 2 hours in, stop at wrap (unless naked)
        if (data.spritzInterval > 0) {
            const spritzStopMs = data.wrapMethod === 'naked' ? cookEndMs - 1800000 : wrapMs;
            let cursorMs = cookStartMs + Math.max(120, data.spritzInterval) * 60000;
            let spritzIdx = 1;
            while (cursorMs < spritzStopMs - 900000) {
                events.push({
                    id: `step-spritz-${spritzIdx++}`,
                    time: new Date(cursorMs),
                    cssClass: 'step-check',
                    title: '💦 Spritz / Mop Check',
                    detail: 'Mist dry edges lightly with apple cider vinegar, broth, or water.',
                    badge: 'Spritz'
                });
                cursorMs += data.spritzInterval * 60000;
            }
        }

        // Fuel check events: from cook start to pull
        if (data.fuelInterval > 0) {
            let cursorMs = cookStartMs + data.fuelInterval * 60000;
            let fuelIdx = 1;
            while (cursorMs < cookEndMs - 900000) {
                events.push({
                    id: `step-fuel-${fuelIdx++}`,
                    time: new Date(cursorMs),
                    cssClass: 'step-check',
                    title: '🔥 Pit Fuel & Temp Check',
                    detail: 'Check wood splits / charcoal / hopper level and verify water pan.',
                    badge: 'Fuel Check'
                });
                cursorMs += data.fuelInterval * 60000;
            }
        }
    }

    // 6. Pull & Cooler Rest Step
    const holdBreakdown = data.safetyBufferHrs > 0
        ? `${formatDuration(data.restHrs)} planned rest + ${formatDuration(data.safetyBufferHrs)} safety buffer`
        : `${formatDuration(data.restHrs)} rest`;

    events.push({
        id: 'step-pull',
        time: data.pullDate,
        cssClass: 'step-rest',
        title: 'Pull Meat & Rest in Insulated Cooler',
        detail: `Verify ${data.targetTemp}. Vent steam for 10 mins, then hold warm (${holdBreakdown}).`,
        badge: `Hold ${formatDuration(data.totalHoldHrs)}`
    });

    // 7. Slice & Serve Step
    events.push({
        id: 'step-serve',
        time: data.serveDate,
        cssClass: 'step-serve',
        title: 'Slice & Serve!',
        detail: `Slice against the grain and serve your ${data.meatName}.`,
        badge: 'Dinner Time'
    });

    // Sort chronologically
    events.sort((a, b) => a.time.getTime() - b.time.getTime());

    for (const ev of events) {
        const isDone = completedSteps.has(ev.id);
        const li = document.createElement('li');
        li.className = `${ev.cssClass}${isDone ? ' completed' : ''}`;
        li.dataset.stepId = ev.id;
        li.innerHTML = `
            <div class="step-check-wrap">
                <input type="checkbox" class="step-checkbox" aria-label="Mark ${ev.title} complete" ${isDone ? 'checked' : ''}>
            </div>
            <div class="step-main">
                <span class="step-title"><span class="step-title-text">${ev.title}</span></span>
                <span class="step-time">${formatDateTime(ev.time)}</span>
                <span class="step-detail">${ev.detail}</span>
            </div>
            <span class="step-badge" data-orig-badge="${ev.badge}">${isDone ? '✓ Done' : ev.badge}</span>
        `;

        li.addEventListener('click', (e) => {
            const checkbox = li.querySelector('.step-checkbox');
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
            }
            toggleStepCompletion(ev.id, checkbox.checked, li);
        });

        timelineList.appendChild(li);
    }

    lastCalculatedTimeline.events = events;
    updateProgressUI();
    document.getElementById('results').classList.remove('hidden');
}

function toggleStepCompletion(stepId, isDone, liElement) {
    if (isDone) {
        completedSteps.add(stepId);
        liElement.classList.add('completed');
    } else {
        completedSteps.delete(stepId);
        liElement.classList.remove('completed');
    }

    const badgeEl = liElement.querySelector('.step-badge');
    if (badgeEl) {
        badgeEl.textContent = isDone ? '✓ Done' : badgeEl.dataset.origBadge;
    }

    saveCompletedSteps();
    updateProgressUI();
}

function updateProgressUI() {
    if (!lastCalculatedTimeline || !lastCalculatedTimeline.events) return;
    const events = lastCalculatedTimeline.events;
    const total = events.length;
    const doneCount = events.filter((ev) => completedSteps.has(ev.id)).length;
    const pct = total > 0 ? Math.round((doneCount / total) * 100) : 0;

    document.getElementById('progressText').textContent =
        pct === 100
            ? `🎉 All ${total} steps completed (100%) — Enjoy the BBQ!`
            : `${doneCount} of ${total} steps completed (${pct}%)`;
    document.getElementById('progressBarFill').style.width = `${pct}%`;

    const resetBtn = document.getElementById('resetProgressBtn');
    if (doneCount > 0) {
        resetBtn.classList.remove('hidden');
    } else {
        resetBtn.classList.add('hidden');
    }

    // Highlight the first incomplete step as "Next Up"
    let foundNext = false;
    const items = document.querySelectorAll('#timelineList li');
    items.forEach((li) => {
        const existingTag = li.querySelector('.next-up-tag');
        if (existingTag) existingTag.remove();
        li.classList.remove('next-up');

        if (!foundNext && !li.classList.contains('completed')) {
            foundNext = true;
            li.classList.add('next-up');
            const titleEl = li.querySelector('.step-title');
            if (titleEl) {
                const tag = document.createElement('span');
                tag.className = 'next-up-tag';
                tag.textContent = 'Next Up';
                titleEl.appendChild(tag);
            }
        }
    });
}

document.getElementById('resetProgressBtn').addEventListener('click', () => {
    completedSteps.clear();
    saveCompletedSteps();
    if (lastCalculatedTimeline) {
        renderTimeline(lastCalculatedTimeline);
    }
});

// Copy Schedule to Clipboard
document.getElementById('copyTimelineBtn').addEventListener('click', async () => {
    if (!lastCalculatedTimeline) return;
    const t = lastCalculatedTimeline;
    const lines = [
        `🔥 SMOKER TIMELINE: ${t.meatName}${t.weight ? ` (${t.weight} lbs)` : ''}`,
        `Active Smoke: ${formatDuration(t.totalCookHours)} | Rest + Buffer: ${formatDuration(t.totalHoldHrs)}`,
        '----------------------------------------'
    ];
    for (const ev of t.events) {
        const mark = completedSteps.has(ev.id) ? '[x]' : '[ ]';
        lines.push(`${mark} ${formatDateTime(ev.time)} — ${ev.title} (${ev.badge})`);
    }

    try {
        await navigator.clipboard.writeText(lines.join('\n'));
        const btn = document.getElementById('copyTimelineBtn');
        const orig = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
    } catch (_) {
        alert('Schedule:\n\n' + lines.join('\n'));
    }
});

// Export to .ics Calendar File
document.getElementById('exportIcsBtn').addEventListener('click', () => {
    if (!lastCalculatedTimeline || !lastCalculatedTimeline.events) return;
    const t = lastCalculatedTimeline;

    const toIcsDate = (d) => d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const nowStamp = toIcsDate(new Date());

    let icsLines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Smoker Timeline Pro//EN',
        'CALSCALE:GREGORIAN'
    ];

    t.events.forEach((ev, idx) => {
        const startStr = toIcsDate(ev.time);
        const endDate = new Date(ev.time.getTime() + 15 * 60000);
        const endStr = toIcsDate(endDate);
        const cleanTitle = ev.title.replace(/,/g, '\\,');
        const cleanDesc = `${ev.detail} (${t.meatName})`.replace(/,/g, '\\,');

        icsLines.push(
            'BEGIN:VEVENT',
            `UID:smoker-${Date.now()}-${idx}@smokertimeline.local`,
            `DTSTAMP:${nowStamp}`,
            `DTSTART:${startStr}`,
            `DTEND:${endStr}`,
            `SUMMARY:🔥 ${cleanTitle}`,
            `DESCRIPTION:${cleanDesc}`,
            'END:VEVENT'
        );
    });

    icsLines.push('END:VCALENDAR');

    const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `smoker-timeline-${t.meatKey}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Print Button
document.getElementById('printTimelineBtn').addEventListener('click', () => {
    window.print();
});

// Save Cook to Pitmaster Log (localStorage)
document.getElementById('saveLogBtn').addEventListener('click', () => {
    if (!lastCalculatedTimeline) return;
    const t = lastCalculatedTimeline;

    const wood = document.getElementById('logWood').value.trim();
    const rub = document.getElementById('logRub').value.trim();
    const notes = document.getElementById('logNotes').value.trim();

    const logEntry = {
        id: Date.now(),
        savedAt: new Date().toISOString(),
        meatKey: t.meatKey,
        meatName: t.meatName,
        weight: t.weight,
        serveDateISO: document.getElementById('serveTime').value,
        meatOnFormatted: formatDateTime(t.meatOnDate),
        serveFormatted: formatDateTime(t.serveDate),
        totalCookFormatted: formatDuration(t.totalCookHours),
        p1Temp: t.p1Temp,
        p1Hours: document.getElementById('p1Hours').value,
        p2Temp: t.p2Temp,
        wrapMethod: t.wrapMethod,
        wrapTempVal: t.wrapTempVal,
        pullTempVal: t.pullTempVal,
        restHrs: t.restHrs,
        safetyBufferHrs: t.safetyBufferHrs,
        wood,
        rub,
        notes
    };

    const existing = getSavedLogs();
    existing.unshift(logEntry);
    localStorage.setItem('smoker_cook_logs', JSON.stringify(existing.slice(0, 25)));

    document.getElementById('logWood').value = '';
    document.getElementById('logRub').value = '';
    document.getElementById('logNotes').value = '';

    renderSavedLogs();

    const btn = document.getElementById('saveLogBtn');
    const orig = btn.textContent;
    btn.textContent = '✅ Saved to Pitmaster Log!';
    setTimeout(() => { btn.textContent = orig; }, 2000);
});

function getSavedLogs() {
    try {
        const raw = localStorage.getItem('smoker_cook_logs');
        return raw ? JSON.parse(raw) : [];
    } catch (_) {
        return [];
    }
}

function renderSavedLogs() {
    const logs = getSavedLogs();
    const section = document.getElementById('savedLogsSection');
    const list = document.getElementById('savedLogsList');
    list.innerHTML = '';

    if (logs.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');

    logs.forEach((log) => {
        const card = document.createElement('div');
        card.className = 'saved-log-card';

        const metaParts = [
            `Smoke: ${log.totalCookFormatted}`,
            `P1: ${log.p1Temp}°F / P2: ${log.p2Temp}°F`,
            `Serve: ${log.serveFormatted}`
        ];
        if (log.wood) metaParts.push(`Wood: ${log.wood}`);
        if (log.rub) metaParts.push(`Rub: ${log.rub}`);

        card.innerHTML = `
            <div class="saved-log-info">
                <strong>${log.meatName}${log.weight ? ` (${log.weight} lbs)` : ''}</strong>
                <div class="saved-log-meta">${metaParts.join(' • ')}</div>
                ${log.notes ? `<div class="saved-log-notes">"${log.notes}"</div>` : ''}
            </div>
            <div class="saved-log-actions">
                <button type="button" class="btn-small load-btn" data-id="${log.id}">Load</button>
                <button type="button" class="btn-small delete" data-id="${log.id}">✕</button>
            </div>
        `;
        list.appendChild(card);
    });

    list.querySelectorAll('.load-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-id'));
            const found = getSavedLogs().find((item) => item.id === id);
            if (!found) return;

            document.getElementById('meat').value = found.meatKey;
            applyMeatPreset(found.meatKey);
            if (found.weight) document.getElementById('weight').value = found.weight;
            if (found.serveDateISO) document.getElementById('serveTime').value = found.serveDateISO;
            document.getElementById('p1Temp').value = found.p1Temp;
            document.getElementById('p1Hours').value = found.p1Hours;
            document.getElementById('p2Temp').value = found.p2Temp;
            document.getElementById('wrapMethod').value = found.wrapMethod;
            if (found.wrapTempVal) document.getElementById('wrapTempInput').value = found.wrapTempVal;
            if (found.pullTempVal) document.getElementById('pullTempInput').value = found.pullTempVal;
            document.getElementById('restTime').value = found.restHrs;
            document.getElementById('safetyBuffer').value = found.safetyBufferHrs;
            updateWrapMethodUI();

            calculateAndDisplayTimeline(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    list.querySelectorAll('.delete').forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = Number(btn.getAttribute('data-id'));
            const filtered = getSavedLogs().filter((item) => item.id !== id);
            localStorage.setItem('smoker_cook_logs', JSON.stringify(filtered));
            renderSavedLogs();
        });
    });
}
