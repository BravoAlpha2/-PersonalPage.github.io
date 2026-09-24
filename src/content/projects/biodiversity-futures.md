---
order: 1
title: "Forecasting biodiversity futures"
subtitle: "Where European species go under climate and land-use change"
organisation: "Vrije Universiteit Amsterdam"
role: "Junior Researcher"
years: "2023–2025"
summary: "Multi-scenario models linking climate pathways, land-use allocation and 10,000+ species to forecast biodiversity across Europe."
theme: "forecast"
location: { name: "Amsterdam, Netherlands", lat: 52.334, lon: 4.866 }
scale: "continent"
metrics:
  - { value: "10,000+", label: "species in the nested SDM framework" }
  - { value: "~1,200", label: "European species forecast at high resolution" }
  - { value: "1 km", label: "land-use model resolution (CLUMondo)" }
challenge: "Policy needs to know which development pathways are friendly to both biodiversity and people — but climate, land use and socioeconomics change together, at different scales, and species respond to all of them. The Swiss Re Foundation modelling challenge and the NaturaConnect project both asked for defensible, spatially explicit answers."
data:
  - "Global and European species occurrence datasets for amphibians, birds, mammals, reptiles and butterflies (10,000+ species)"
  - "Climate projections under multiple RCPs"
  - "European Shared Socioeconomic Pathways (SSPs) and economic-model outputs"
  - "Nature Futures Framework storylines (NaturaConnect Task 5.1)"
intelligence:
  - "Nested Species Distribution Models (N-SDMs) combining global and European data so each species is modelled at the scale where its data are strongest"
  - "Land-use scenarios allocated with CLUMondo at 1 km for Europe, parametrised from economic modelling and SSP scenarios"
  - "Species distribution and risk maps per scenario, plus trade-offs between conservation, socioeconomic priorities and ecosystem-service access"
technology: ["R", "CLUMondo", "Species Distribution Models", "GEE", "Climate & SSP scenarios", "Spatial statistics"]
outcome:
  - "Biodiversity forecasts spanning continental to regional scales across Europe"
  - "An operational multi-scenario framework linking climate, land-use and socioeconomic change"
  - "Land-use model outputs published openly on Zenodo for the NaturaConnect consortium"
  - "Part of the VU project selected in the Swiss Re Foundation biodiversity & ecosystem-services scenarios modelling challenge (2023)"
cover: { src: "/images/europe-present.webp", alt: "Modelled species suitability across Europe, present-day baseline", paper: true }
gallery:
  - { src: "/images/swiss-re.webp", alt: "Present and RCP2.6 / RCP8.5 suitability maps for Europe", caption: "Present baseline and two climate pathways (RCP2.6, RCP8.5) from the Swiss Re Foundation project.", paper: true }
  - { src: "/images/naturaconnect.webp", alt: "NaturaConnect land-use scenario maps for Europe", paper: true, caption: "CLUMondo land-use scenarios for the Nature Futures Framework storylines." }
links:
  - { label: "Swiss Re Foundation — challenge winners", href: "https://www.swissrefoundation.org/what-we-do/projects/natural-hazard-and-climate-risk-management/Modelling-biodiversity-loss-to-boost-resilience/Biodiversity-and-ecosystem-services-scenarios-modelling-challenge--Winners-2023.html" }
  - { label: "Project report (PDF)", href: "https://www.swissrefoundation.org/dam/jcr:5715926a-113e-45d8-b924-150147bdb587/ZRH-25-16308-P1%20Foundation%20Modelling%20biodiversity_FINAL.pdf" }
  - { label: "NaturaConnect land-use models on Zenodo", href: "https://zenodo.org/records/14228230" }
  - { label: "NaturaConnect", href: "https://naturaconnect.eu/" }
publications: ["ncp-one-earth"]
---

## Why it was hard

Three systems move at once. Climate pathways set the envelope; land-use allocation decides where agriculture, forestry and cities expand inside it; and every species reads that landscape differently. A model that is right about one of these and silent about the others gives planners a false precision.

The nested SDM approach solved a data problem, not just a modelling one: European datasets are dense but partial, global datasets are complete but coarse. Combining them per species kept the strongest signal at every scale.

## What it changed

Instead of a single "business as usual" map, decision-makers could compare pathways side by side and see where biodiversity loss is a consequence of a choice rather than an inevitability.
