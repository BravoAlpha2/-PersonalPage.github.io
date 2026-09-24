---
order: 3
title: "Reading twenty years of habitat change from orbit"
subtitle: "Satellite time-series turned into species richness and habitat trends"
organisation: "MontObEO · University of Porto"
role: "Lead author"
years: "2021–2025"
summary: "MaxEnt niche models driven by satellite time-series in Google Earth Engine, revealing where potential species richness rose or fell between 2001 and 2021."
theme: "earth-observation"
location: { name: "Montesinho/Nogueira SAC, Portugal", lat: 41.85, lon: -6.85 }
scale: "landscape"
metrics:
  - { value: "10,190", label: "species records used to train the models" }
  - { value: "2001–2021", label: "years of satellite observations analysed" }
  - { value: "2", label: "open tools produced (Montrends app, Ecotrends R package)" }
challenge: "Field surveys tell you what is present now. They cannot tell a manager whether a landscape has been gaining or losing suitable habitat for the last two decades — and for which groups."
data:
  - "Satellite time-series (MODIS/Landsat-derived indices) from Google Earth Engine"
  - "10,190 species occurrence records across taxonomic groups"
  - "Land surface temperature time-series for the mountain region"
intelligence:
  - "Satellite-driven MaxEnt ecological niche models per taxon and year"
  - "Potential species richness (PSR) surfaces and Mann–Kendall trend tests"
  - "Habitat-suitability trend indicators automated into a GEE application (Montrends) and an R package (Ecotrends)"
technology: ["Google Earth Engine", "MaxEnt", "R", "Time-series analysis", "Spectral indices"]
outcome:
  - "Richness increased in eastern and western parts of the SAC and declined centrally — with taxon-specific trajectories"
  - "A repeatable monitoring approach that runs in the cloud, not on a workstation"
  - "Two reusable tools published for other researchers and practitioners"
cover: { src: "/images/potential-species-richness.webp", alt: "Maps of potential species richness trends by taxonomic group", paper: true }
gallery:
  - { src: "/images/montrends.webp", alt: "Montrends Google Earth Engine application", caption: "Montrends: habitat-suitability trends per species, computed in Google Earth Engine." }
  - { src: "/images/ecotrends.webp", alt: "Ecotrends R package output", paper: true, caption: "Ecotrends: reproducible habitat-suitability trend analysis in R." }
  - { src: "/images/lst-time-series.webp", alt: "Land surface temperature time-series", paper: true, caption: "Land surface temperature trends in the same mountain region." }
links:
  - { label: "Richness trends paper — Biodiversity and Conservation", href: "https://doi.org/10.1007/s10531-024-02979-7" }
  - { label: "Montrends — Ecological Informatics", href: "https://doi.org/10.1016/j.ecoinf.2025.103201" }
  - { label: "Ecotrends — Ecological Modelling", href: "https://doi.org/10.1016/j.ecolmodel.2025.111426" }
publications: ["potential-species-richness", "montrends", "ecotrends", "lst-time-series", "spectral-library"]
---

## Why it was hard

Niche models are usually a snapshot. Turning them into a time-series means building one model per year with predictors that are comparable across two decades of sensors, then asking whether the differences are a trend or noise. Doing it in Google Earth Engine avoided downloading terabytes, but MaxEnt-in-GEE has its own quirks — which is why the earlier evaluation paper exists.

## What it changed

Managers got a map of *direction*, not just state: which parts of the protected area are quietly losing habitat quality for which groups.
