# Abhishek Sharma: Portfolio (v6)

A static site for GitHub Pages. It has no build step and no framework.

```
Portfolio/
├── index.html                  ← homepage
├── case-studies/
│   ├── food-kitchen-ops.html         ← 01 Food Ordering & Kitchen Ops
│   ├── preventive-maintenance.html   ← 02 Preventive Maintenance (8 PM categories)
│   ├── audit-management.html         ← 03 Audit Management (UL, CM, CX audits)
│   └── housekeeping.html             ← 04 Housekeeping (daily rooms + common areas, in progress)
├── assets/
│   ├── style.css               ← all styles (shared)
│   ├── main.js                 ← menu, scroll effects, review mode, hides missing samples
│   ├── og-image.png            ← preview card for LinkedIn / WhatsApp shares (ready)
│   ├── img/                    ← abhishek.jpg (add) · food-kitchen-ops/ (cook-plan-screen.png, waste-analytics.png) · other screenshots (add)
│   └── Abhishek_Sharma_CV.pdf  ← ADD THIS (required)
└── samples/                    ← OPTIONAL: sample-prd.pdf, rice-prioritisation.pdf, ops-dashboard.png
```

## Step 1: fill in every amber box

Anything in a **dashed amber box** is a placeholder (`<em class="fill">…</em>` in the code). Replace the text with your real number or detail, then delete the `<em class="fill">` and `</em>` tags around it.

**Quick way to see what's left:** open any page with `?review` at the end of the address, for example
`https://abhishekk0425.github.io/Portfolio/?review`. A badge in the corner counts the boxes still on that page.

Rules:
- Use only numbers you can defend in an interview. A range or a relative change ("~40% less") is fine.
- The case-study stories are a **draft structure**. Rewrite every detail (who you shadowed, what you rejected, what went wrong) to match what actually happened.
- If a module didn't move a metric, replace the result with what you learned. Never invent an outcome.
- Only mark a product **Owner** if you wrote the spec and were accountable for the result. Otherwise use **Contributor**.
- The testimonial must be a real quote, used with the person's permission. If you don't have one yet, delete the whole `<figure class="quote">` block.


## Estimates vs placeholders (v4)

There are two kinds of marked values:

| Marker | Looks like on the live site | Meaning | Action |
|---|---|---|---|
| `<em class="fill">N</em>` | **Amber dashed box** | Still to fill in (counts: properties, residents, assets, team size…) | Type the real number, remove the tags |
| `<em class="est">52% → 89%</em>` | Normal text | A **realistic estimate** from a consistent co-living model, not UniLiv data | Check it against real records. If it holds, remove the tags. If not, recalculate using the rules below |

Open any page with `?review` to see both: amber = fill in, teal outline = confirm.
**Don't publish until every teal estimate has been checked against real data.** In an interview, every number has to be one Abhishek can show a source for.

### The model the estimates follow (keep these relationships when you change a number)

| Area | Before → after | Why they fit together |
|---|---|---|
| Food waste | 18% → 9% of cooked food (−50%) | Before ≈ 15% padded counts + ~3% normal plate waste. After ≈ normal waste + forecast error on the 28% who don't pre-order (72% adoption) |
| Dispatch errors | 14 → 3 per week | A small share of ~21 meal services × properties per week |
| Food complaints | 6.1 → 2.4 per 100 residents a month | Falls alongside dispatch errors |
| On-time PM | 52% → 89% | No schedule existed before, so "before" = first month after launch |
| Breakdown complaints | 9.5 → 5.8 per property a month (−39%) | Falls less, and about 6 weeks later, than on-time PM rises |
| Audit score | 68 → 81 | Old audits re-scored with the new weights (151-point checklist) |
| Repeat audit failures | 42% → 17% | Auto fix-tasks close the loop |
| Cleanliness complaints | 4.8 → 2.9 per 100 residents a month (−40%) | Smaller drop than the audit score, which is realistic |

**Dates:** Data Analyst Jul–Sep 2025, then APM from Oct 2025. Food rollout Jan 2026, PM Mar 2026, HK May 2026. Every rollout + 90 days ends before Oct 2026.
**If the real APM date is later,** move the project dates so that each "after 90 days" result is in the past.

## Step 2: add your files
| File | Required? | What happens if missing |
|---|---|---|
| `assets/Abhishek_Sharma_CV.pdf` | **Yes** | CV buttons lead to "page not found" |
| `assets/img/abhishek.jpg` | Recommended | Shows the "AS" initials instead |
| `samples/*.pdf / .png` | Optional | The card hides itself automatically |
| Screenshots in case studies | Recommended | A dashed placeholder box shows |

To add a screenshot, replace the `<div class="shot">…</div>` in a case study with:
```html
<div class="shot"><img src="../assets/img/cook-plan.png" alt="Cook plan screen showing totals per property"></div>
```

## Step 3: get UniLiv's approval
The case studies describe internal problems (food waste, padded meal counts, reactive maintenance). Get sign-off before publishing, and blur resident names and phone numbers in screenshots.
If sign-off isn't possible, find-and-replace "UniLiv" with "a multi-city co-living operator" in the three case-study files, and keep the company name only in the Experience section.

## Step 4: deploy
1. Replace the contents of the `Portfolio` repo with this folder.
2. Commit and push. GitHub Pages serves `index.html` automatically.
3. Open `https://abhishekk0425.github.io/Portfolio/?review` and check that every page shows "No placeholders left".
4. Paste the link into a LinkedIn post draft to confirm the preview card appears.

## Module boundaries (keep these consistent across pages)
| Module | Owns | Does NOT own |
|---|---|---|
| Food Ordering & Kitchen Ops | Orders, kitchen summary, dispatch, delivery proof, waste | — |
| Preventive Maintenance | Everything on a schedule: Electrical PM, Electrical Servo PM, Water Tank Cleaning, Curtain Cleaning, Vehicle PM, Deep Cleaning, Pest Control, Horticulture | Daily cleaning, audits |
| Audit Management | UL (Room), CM and CX audits, scoring, review | Doing the work it audits |
| Housekeeping | Daily room cleans and common-area rounds | Deep cleaning, pest control (these are in PM) |

## What changed in v6
- Removed Laundry Management from "Other products". The sample PRD card now says Food module.
- Four separate case studies and cards: Food, Preventive Maintenance, Audit Management, Housekeeping.
- `housekeeping-audit.html` renamed to `audit-management.html`. **Delete the old file from GitHub.**
- Preventive Maintenance rewritten to cover 8 PM categories in one scheduler. All numbers unchanged.
- Housekeeping page is now daily housekeeping only. Deep cleaning moved to PM.
- Each case study has a "Where this module fits" note, so the boundaries are clear.
- Waste Analytics screenshot added to the Food case study (Impact section).
- Share image chips updated: Food & Kitchen Ops · Preventive Maintenance · Audits · Housekeeping.
- Hero numbers you filled in (9+, 50+, 400+, 10,000+) are now plain text.

## What changed in v4
- All X / Y placeholders replaced with consistent, realistic estimates (marked `est`). N values left for you.
- Review mode shows amber (to fill) and teal (to confirm) separately.
- Fixed: case-study tables made the page scroll sideways on phones.
- PM measurement note now explains that "before" is the first month after launch.

## What changed in v3
- Experience: UniLiv is now one employer card with two dated roles (Data Analyst, then APM), which fixes the date contradiction.
- Module count: the hero and experience now use the same number, and owned vs contributed modules are split.
- New testimonial block, plus a photo slot in the profile card.
- Case studies 02 and 03 now match 01: specific headings, a root-cause callout, 3–4 options compared, a "left out of v1" line, and a measurement note.
- Section labels no longer repeat the heading underneath them.
- Share preview image, canonical and Twitter tags on every page. The logo link has an accessible name.
- Sample cards hide themselves when the file isn't uploaded, so there are no dead links.
- `?review` mode counts the placeholders left on each page.
