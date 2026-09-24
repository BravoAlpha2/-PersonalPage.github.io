---
order: 2
title: "Biodiversity intelligence platform for a protected area"
subtitle: "From scattered records to an open atlas, a WebGIS and a decision tool"
organisation: "MontObEO research project"
role: "Research Assistant · MSc thesis"
years: "2021–2023"
summary: "An R Shiny WebGIS mapping 1,312 species across the Montesinho/Nogueira SAC, used by 40+ stakeholders including ICNF and local authorities."
theme: "platform"
location: { name: "Montesinho, Portugal", lat: 41.93, lon: -6.75 }
scale: "region"
metrics:
  - { value: "1,312", label: "species mapped in the WebGIS" }
  - { value: "40+", label: "stakeholders supported (ICNF, municipalities, local actors)" }
  - { value: "2", label: "language versions (PT / EN)" }
challenge: "The Montesinho/Nogueira Special Area of Conservation (PTCON0002) had a biodiversity knowledge gap: records existed, but in regional and European silos, in different taxonomies, and nowhere a manager could open and query."
data:
  - "Species occurrence records from Portuguese and European sources"
  - "Conservation status information (national and European)"
  - "Satellite-derived environmental predictors from Google Earth Engine"
intelligence:
  - "A compiled, standardised biodiversity dataset and atlas for the SAC"
  - "Satellite-based ecological niche models (SRS-ENMs) for the main taxonomic groups"
  - "Species richness and suitability surfaces, navigable per species and per group"
  - "Stakeholder workshops translating outputs into management measures"
technology: ["R Shiny", "Google Earth Engine", "MaxEnt", "QGIS", "Leaflet"]
outcome:
  - "An open dataset and atlas published in Biodiversity Data Journal"
  - "A public WebGIS in Portuguese and English, still online"
  - "A transferable framework reused in later work on richness trends and functional diversity"
cover: { src: "/images/montesinho-webgis.webp", alt: "Montesinho/Nogueira biodiversity WebGIS interface" }
gallery:
  - { src: "/images/montesinho-lizard.webp", alt: "Lizard photographed in Montesinho Natural Park", caption: "Montesinho Natural Park, northern Portugal." }
  - { src: "/images/msc-thesis.webp", alt: "MSc thesis cover", paper: true, caption: "The MSc thesis (18/20) that produced the platform." }
links:
  - { label: "Open the WebGIS (EN)", href: "https://nunogarcia.shinyapps.io/MN-SPA_WebGIS/" }
  - { label: "Abrir o WebSIG (PT)", href: "https://nunogarcia.shinyapps.io/MN-SPA_WebSIG/" }
  - { label: "Atlas paper — Biodiversity Data Journal", href: "https://doi.org/10.3897/BDJ.12.e118854" }
  - { label: "MSc thesis (PDF)", href: "https://repositorio-aberto.up.pt/bitstream/10216/150720/2/632904.pdf" }
publications: ["montesinho-atlas", "msc-thesis", "functional-diversity", "maxent-gee"]
---

## Why it was hard

A biodiversity atlas is only useful if a non-specialist can use it on a Tuesday morning. That meant reconciling taxonomies across sources, deciding what "conservation status" means when national and European lists disagree, and designing an interface where a municipal technician and an ICNF ecologist find what they need in the same tool.

## What it changed

Conservation discussions for the SAC now start from a shared, open map rather than from whichever spreadsheet someone happened to have.
