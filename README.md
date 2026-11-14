# 🔥 Smoker Timeline Pro — Reverse BBQ Calculator

**Smoker Timeline Pro** is a zero-dependency web application that reverse-calculates your entire barbecue cook schedule from your target serve time. Tell it when you want to eat, what cut you're smoking, and how you like to run your pit—and it builds a step-by-step countdown from dry brining and preheating to wrapping, resting, and carving.

---

## ✨ Features

### 1. 13 Built-In Meat Profiles with Dynamic Presets
Selecting a cut automatically configures recommended weight, cooler rest duration, Phase 1 & Phase 2 smoker temperatures, wrap method, target wrap internal temperature, and target pull internal temperature:
- **Beef:** Packer Brisket, Beef Plate / Dino Ribs, Smoked Chuck Roast, Reverse-Seared Tri-Tip, Smoked Prime Rib Roast
- **Pork:** Boston Butt (Pulled Pork), St. Louis / Spare Ribs (3-2-1), Baby Back Ribs (2-2-1), Pork Belly Burnt Ends
- **Poultry & Seafood:** Whole Chicken, Whole Turkey, Boneless Turkey Breast, Smoked Salmon Fillet
- *Smart Weight Handling:* Cuts that cook by thickness/method (such as Spare Ribs, Baby Back Ribs, Pork Belly Burnt Ends, and Salmon) automatically switch to fixed method timing rather than scaling by weight.

### 2. Custom Wrap & Pull Internal Temperatures
- **Target Wrap Internal Temp (°F):** Set the exact internal temperature where you want to wrap (or bump pit temperature).
- **Stall-Aware Phase 1 Estimation:** Changing your wrap temperature automatically estimates how long Phase 1 will take by modeling the slower evaporative stall zone (`150°F–175°F`), while still allowing manual Phase 1 hour overrides or a one-click **Auto P1 Hrs** reset.
- **Target Pull Internal Temp (°F):** Customize your final pull temperature and automatically scale total cook work accordingly.
- **Wrap Method (Stall Factor):**
  - **Butcher Paper / Foil Boat:** Baseline Phase 2 speed (`1.0x`)
  - **Aluminum Foil (Texas Crutch):** Speeds up Phase 2 by ~18% (`0.82x`)
  - **No Wrap / Naked Smoke:** Extends Phase 2 by ~20% (`1.20x`) for maximum bark

### 3. Live Hourly Weather Forecast Integration
- Powered by the free **Open-Meteo API** (no API key required).
- Search by **City / ZIP code** or click **📍 Use GPS** to load a 16-day hourly forecast.
- Analyzes the exact hours overlapping your planned cook window (from **Meat On** to **Pull Time**) to calculate:
  - Average ambient temperature & low temperature (`°F`)
  - Peak wind gusts (`mph`)
  - Precipitation probability (`%`)
- Scales thermal heat-loss adjustments by your **Smoker Style / Insulation**:
  - **Kamado / Double-Wall Insulated** (`0.35x` weather sensitivity)
  - **Pellet Grill / WSM / Drum** (`1.00x` baseline sensitivity)
  - **Offset Stick Burner / Thin Steel** (`1.65x` high wind/cold sensitivity)

### 4. Full-Cook Prep, Preheat & Safety Buffers
- **Advance Prep / Dry Brine:** Schedule a 1-hour trim & season, 12-hour overnight dry brine, or 24-hour dry brine step.
- **Smoker Preheat:** Add 30, 45, or 60 minutes before meat goes on the grates.
- **Extra Safety / Stall Buffer:** Add up to `+2.0 hours` of cushion to your cooler hold so a stubborn stall never delays dinner.
- **Mid-Cook Checkpoints:** Add recurring **Spritz / Mop** and **Pit Fuel / Wood Split** reminders, either summarized inside Phase 1 or expanded into individual timestamped checkpoints across your timeline.

### 5. Interactive Progress Tracking, Calendar Export & Pitmaster Log
- **Checkable Timeline Steps:** Click any step (or its checkbox) to mark it complete, update the live completion progress bar, and automatically highlight the **Next Up** step. Progress persists in `localStorage`.
- **Export & Share:**
  - **📋 Copy Schedule:** Copies a clean text checklist (`[x]` / `[ ]`) to your clipboard.
  - **📅 Export Calendar (`.ics`):** Downloads an iCalendar file with alarms/events for Apple Calendar, Google Calendar, or Outlook.
  - **🖨️ Print:** Printer-friendly stylesheet that hides form controls and prints a clean pit sheet.
- **Pitmaster Cook Log:** Save your favorite cooks with custom wood/pellet varieties, rubs, and tasting notes in `localStorage`, and reload any past setup with one click.

---

## 🚀 Getting Started

No build tools, dependencies, or API keys are required.

1. Open [`index.html`](index.html) directly in any modern web browser, or serve the folder locally:
   ```bash
   npx serve .
   ```
2. Set your **Target Serve Time** and select your **Meat Cut**.
3. *(Optional)* Enter your **City or ZIP** (or click **📍 Use GPS**) to factor live hourly weather into your cook window.
4. Customize your **Target Wrap Internal Temp (°F)**, **Phase 1 / Phase 2 Pit Temps**, and **Wrap Method**.
5. Click **Calculate Reverse Timeline** and check off each step as you smoke!

---

## 📁 Project Structure

- [`index.html`](index.html) — Application layout, form controls, weather card, interactive timeline, and Pitmaster Cook Log UI.
- [`styles.css`](styles.css) — Dark-mode pitmaster theme, responsive 2-column grid layout, progress bar styling, and `@media print` stylesheet.
- [`script.js`](script.js) — Meat cut profiles, stall-aware thermal work calculator, Open-Meteo geocoding & hourly forecast integration, interactive step checklist, `.ics` generator, and `localStorage` persistence.
