# Minimum Information About Field Phenotyping Experiments (MIAFPE)
## *Harvest Knowledge from Data*

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Project Structure](#2-project-structure)
3. [Background: Metadata Standards in Life Sciences](#3-background-metadata-standards-in-life-sciences)
4. [MIAPPE — A Metadata Standard for Plant Phenotyping](#4-miappe--a-metadata-standard-for-plant-phenotyping)
5. [Ontologies](#5-ontologies)
6. [PPEO and SSN/SOSA Ontologies](#6-ppeo-and-ssnsosa-ontologies)
7. [The MIAFPE Metadata Template](#7-the-miafpe-metadata-template)
8. [From Checklists to Knowledge Graphs](#8-from-checklists-to-knowledge-graphs)
9. [Research Questions](#9-research-questions)
10. [References](#10-references)

---

## 1. Project Overview

Plant phenotyping datasets — especially those derived from sensor-equipped field experiments — are increasingly central to precision agriculture, breeding research, and environmental science. Yet despite the volume and value of such data, much of it remains difficult to find, understand, reuse, or reproduce, largely due to missing, incomplete, or non-standardised metadata.

This project addresses that gap. Building on the **Minimum Information About Plant Phenotyping Experiments** (MIAPPE) standard, it proposes an extension — **MIAFPE** (Minimum Information About Field Phenotyping Experiments) — that integrates concepts from the **Semantic Sensor Network / Sensor, Observation, Sample and Actuator** ontology (SSN/SOSA) to provide richer, machine-readable metadata for sensor-driven field phenotyping experiments.

The ultimate goal is a full pipeline from human-readable metadata checklists through structured knowledge graphs to graph-embedding-based dataset discovery — making phenotyping data genuinely FAIR: **F**indable, **A**ccessible, **I**nteroperable, and **R**eusable.

---

## 2. Project Structure

```
.
├── metadata/
│   ├── MIAFPE/
│   │   ├── examples/               # Example instances from the Benchmark data collection
│   │   │                           # https://doi.org/10.26165/JUELICH-DATA/3F6OFJ
│   │   └── MIAFPE_template_v1.1.xlsx  # The MIAFPE metadata checklist template
│   └── MIAPPE_1.2/                 # Fork of MIAPPE (https://github.com/MIAPPE/MIAPPE)
├── ontology/
│   ├── miappeXsosa.owl             # OWL file of the merged MIAFPE × SOSA ontology
│   └── miappeXsosa_dm.svg          # Data model diagram
├── web/                            # Website with project information and documentation
├── docs/                           # Project documentation
└── scripts/                        # Utility and conversion scripts
```

---

## 3. Background: Metadata Standards in Life Sciences

### The FAIR Principles

The **FAIR Data Principles** (Wilkinson et al., 2016) define a set of guiding properties that scientific data should fulfil to maximise their utility:

- **F**indable — Data should be assigned a persistent identifier and described with rich metadata so it can be discovered by humans and machines.
- **A**ccessible — Data should be retrievable via an open, standardised protocol, with metadata remaining accessible even when the data is no longer available.
- **I**nteroperable — Data should use a formal, widely applicable representation and reference other relevant datasets and vocabularies.
- **R**eusable — Data should be richly described and released with a clear usage licence.

Despite widespread awareness of these principles, a survey of recent plant phenotyping datasets has revealed recurring problems:

- Missing or non-persistent dataset identifiers
- Datasets that have become unavailable over time
- Missing variable descriptions in data tables
- Insufficient or absent metadata files
- Use of proprietary data formats
- Experimental workflows absent or described only informally in an associated paper
- Missing links to related datasets and publications
- Missing or default licences
- Data accessible only via specialised tools or custom scripts
- Confusing or partially redundant dataset structure
- Inconsistent naming conventions within a dataset

### Minimum Information Standards

**Minimum Information (MI) standards** are community-defined checklists that specify the minimal set of information required to describe an experiment or dataset in a way that enables reproducibility, correct interpretation, and reuse. Well-known examples include MIAME (microarray data), MIMARKS (marker gene sequences), and MIAPPE (plant phenotyping). A general overview of MI standards is maintained by the [European Bioinformatics Institute](https://www.ebi.ac.uk/training/online/courses/bioinformatics-terrified/what-makes-a-good-bioinformatics-database/minimum-information-standards/).

The strength of MI standards lies in their dual nature: they are human-readable enough to guide researchers filling out a template, yet structured enough to enable machine-readable metadata when combined with an appropriate data model or ontology.

---

## 4. MIAPPE — A Metadata Standard for Plant Phenotyping

**MIAPPE** (Minimum Information About Plant Phenotyping Experiments) is the community-defined standard for documenting plant phenotyping experiments. It provides a structured checklist of descriptors covering:

- **Investigation** — the overarching project context, title, description, and licence
- **Study** — individual experiments within an investigation, including growth conditions, geographic location, and experimental design
- **Biological Material** — species, accession, and origin of the plant material used
- **Observed Variable** — trait, method, and scale defining each measured quantity
- **Observation Unit** — the individual unit (plot, plant, leaf) at which observations are recorded
- **Data File** — references to the actual measurement data files

MIAPPE's structure is inspired by the **ISA model** (Investigation–Study–Assay), a widely adopted framework for organising experimental metadata as a graph that links entities at different levels of abstraction.

MIAPPE is accompanied by a formal data model and is supported by tools such as [AgroPortal](https://agroportal.lirmm.fr/ontologies/PPEO) and the [Breeding API (BrAPI)](https://brapi.org/), which provide pathways for metadata exchange between databases.

### Limitations in the Context of Sensor-Driven Field Experiments

While MIAPPE covers the biological and agronomic aspects of plant phenotyping well, it does not provide sufficient descriptors for experiments that rely on complex sensor systems operating at multiple spatial and temporal scales. In particular, MIAPPE lacks dedicated concepts for:

- **Sensors** and their technical specifications
- **Platforms** (UAVs, ground robots, stationary towers) on which sensors are deployed
- **System Configurations** — assemblies of sensors, platforms, and deployment procedures
- **Measurement Quality** — precision, accuracy, and calibration status
- **Procedure Inputs and Outputs** — computational models or data-processing chains
- **Conditions** under which observations were made (environmental co-variates)

MIAFPE addresses all of these gaps while remaining backward-compatible with MIAPPE 1.2.

---

## 5. Ontologies

### What Is an Ontology?

An ontology is "a formal, explicit specification of a shared conceptualization" (Gruber, 1995). In practice, this means:

- **Formal** — concepts and their relationships are expressed in a logic-based language, enabling automated reasoning and inference.
- **Explicit** — every concept, axiom, and relationship is declared unambiguously.
- **Shared** — the ontology represents consensual knowledge accepted by a community.
- **Conceptualization** — it models an abstract, domain-specific view of the world.

Formal ontologies are grounded in **Description Logics (DL)**, a decidable fragment of first-order logic. This formal basis allows ontology reasoners (such as HermiT or Pellet) to check consistency, infer implicit knowledge, and classify instances automatically.

### Why Ontologies Matter for FAIR Data

Ontologies underpin machine-readable metadata by providing:

1. **Shared vocabulary** — unambiguous, URI-identified terms that datasets from different sources can reference.
2. **Semantic relationships** — not just labels, but formal links (e.g., `is_a`, `part_of`, `hasProperty`) that make the structure of knowledge explicit.
3. **Reasoning support** — automated checks that a dataset is correctly annotated, and inference of additional facts.
4. **Interoperability** — a common ontological foundation allows heterogeneous datasets to be queried together.

Ontologies are foundational to the **Semantic Web** and the **Linked Data** paradigm, and are widely used in biomedical informatics, environmental sciences, and agriculture.

---

## 6. PPEO and SSN/SOSA Ontologies

### PPEO — Plant Phenotyping Experiment Ontology

The **Plant Phenotyping Experiment Ontology (PPEO)** is the formal ontological backbone of MIAPPE. It formalises the MIAPPE data model as an OWL ontology, defining classes such as `ppeo:Investigation`, `ppeo:Study`, `ppeo:ObservationUnit`, `ppeo:ObservedVariable`, `ppeo:Trait`, and `ppeo:Scale`, along with the object properties connecting them (e.g., `ppeo:hasTrait`, `ppeo:hasScale`, `ppeo:hasFactorValue`).

PPEO is available via [AgroPortal](https://agroportal.lirmm.fr/ontologies/PPEO).

### SSN/SOSA — Semantic Sensor Network and SOSA Ontologies

The **Semantic Sensor Network Ontology (SSN)** and its lightweight core, **SOSA** (Sensor, Observation, Sample, and Actuator), are W3C standards for describing sensor systems and their observations. Key classes include:

| Class | Description |
|---|---|
| `sosa:Sensor` | A device, organism, or agent that performs observations |
| `sosa:Platform` | An entity that hosts one or more sensors (e.g., UAV, robot) |
| `sosa:Observation` | The act of measuring a property of a feature of interest |
| `sosa:ObservableProperty` | The property being observed |
| `sosa:FeatureOfInterest` | The entity whose property is observed |
| `sosa:Procedure` | A workflow, algorithm, or protocol used to make an observation |
| `ssn:Deployment` | The act of deploying a sensor on a platform for a purpose |
| `ssn:Property` | A quality of an entity that can be measured or inferred |
| `ssn:Input` / `ssn:Output` | Inputs and outputs to/from a procedure |

SSN/SOSA are the W3C recommendation for sensor metadata and are widely adopted in IoT, environmental monitoring, and smart agriculture contexts. The full specification is available at [https://www.w3.org/TR/vocab-ssn/](https://www.w3.org/TR/vocab-ssn/).

### The Merged Ontology: `miappeXsosa`

To bridge the two worlds — agronomic experiment description and sensor system description — this project merges PPEO and SSN/SOSA into a single ontology: **`miappeXsosa`**.

The merge is performed using **injective mapping**: classes and properties from both source ontologies are mapped to corresponding terms in the merged ontology without loss of identity. New classes, properties, and OWL restrictions are added to capture relationships that neither source ontology expresses on its own (e.g., a `System` composed of multiple sensors and platforms, or `SystemProperties` characterising measurement quality).

The data model of the merged ontology is visualised in [`ontology/miappeXsosa_dm.svg`](ontology/miappeXsosa_dm.svg) and the full OWL file is available at [`ontology/miappeXsosa.owl`](ontology/miappeXsosa.owl).

---

## 7. The MIAFPE Metadata Template

The MIAFPE template (`metadata/MIAFPE/MIAFPE_template_v1.1.xlsx`) is a human-readable Excel checklist that operationalises the `miappeXsosa` ontology for researchers documenting field phenotyping experiments.

### Relation to MIAPPE

MIAFPE is designed as a **superset of MIAPPE 1.2**: all MIAPPE 1.2 sheets and fields are retained, ensuring that a MIAFPE-compliant metadata file can be used wherever a MIAPPE file is expected.

### New Sections (MIAFPE Extensions)

In addition to the standard MIAPPE sheets, MIAFPE introduces the following new sections motivated by the SSN/SOSA concepts:

| Section | Description |
|---|---|
| **Sensor** | Technical description of each sensor used (type, model, manufacturer, spectral range, etc.) |
| **Platform** | Carrier or host system (UAV, ground vehicle, tower) on which sensors are mounted |
| **System** | An assembly of sensors and platforms configured for a specific measurement campaign |
| **System Properties** | Quantitative or qualitative properties of the system (e.g., spatial resolution, accuracy) |
| **Deployment** | Description of how and when a sensor/system was deployed in the field |
| **Procedure** | Measurement protocol or data-processing workflow used to derive observations |
| **Procedure Inputs** | Input data or parameters consumed by a procedure |
| **Procedure Outputs** | Output variables or data products produced by a procedure |
| **Conditions** | Environmental co-variates recorded at observation time (temperature, irradiance, wind) |
| **Observation** | Individual measurement records linking all of the above |

### Example Instance

Example metadata files filled according to the MIAFPE template are provided in `metadata/MIAFPE/examples/`, drawn from the benchmark dataset collection available at [https://doi.org/10.26165/JUELICH-DATA/3F6OFJ](https://doi.org/10.26165/JUELICH-DATA/3F6OFJ).

---

## 8. From Checklists to Knowledge Graphs

### Motivation

A filled-in Excel checklist is human-readable but only weakly machine-readable: relationships between entities are implicit in the sheet structure rather than expressed as formal links. To fully realise the FAIR potential of MIAFPE metadata, a conversion to a **knowledge graph** representation is needed.

### JSON-LD as the Target Format

The target format for the converted metadata is **JSON-LD** (JSON for Linked Data), a lightweight format that embeds semantic annotations directly into JSON documents using the `@context`, `@id`, and `@type` keywords. A JSON-LD document is simultaneously a valid JSON file readable by any software and a Linked Data graph interpretable by semantic web tools.

A sketch of what an Investigation instance looks like in JSON-LD:

```json
{
    "@context": {
        "miappexsosa": "https://example.org/miappexsosa#"
    },
    "@id": "https://doi.org/10.26165/JUELICH-DATA/EXAMPLE",
    "@type": "miappexsosa:Investigation",
    "miappexsosa:hasName": "Wheat UAV Campaign 2022",
    "miappexsosa:hasDescription": "...",
    "miappexsosa:hasSubmissionDate": "2023-01-15",
    "miappexsosa:hasLicense": "https://creativecommons.org/licenses/by/4.0/",

    "@graph": [
        {
            "@id": "_:study1",
            "@type": "miappexsosa:Study",
            "miappexsosa:hasStartDate": "2022-04-01",
            "miappexsosa:hasEndDate": "2022-08-31"
        },
        {
            "@id": "_:sensor1",
            "@type": "miappexsosa:Sensor",
            "miappexsosa:hasModel": "MicaSense RedEdge-MX",
            "miappexsosa:hasManufacturer": "MicaSense"
        }
    ]
}
```

Instances are nested according to the restrictions defined in the `miappeXsosa` ontology, preserving the formal structure of the data model in the serialised output.

### Conversion Pipeline

The planned conversion pipeline operates as follows:

1. **Parse** the MIAFPE Excel file and read each section into a tabular representation.
2. **Map** each row and column to the corresponding `miappeXsosa` class and property using the configuration file (`miappeXsosa_config.json`).
3. **Resolve** cross-sheet references (e.g., linking an Observation to its Sensor and ObservationUnit) to construct the graph topology.
4. **Serialise** the resulting graph as a JSON-LD document with a `@context` block referencing the `miappeXsosa` namespace.

Scripts implementing this pipeline are located in the `scripts/` directory.

### Knowledge Graph Embedding and Dataset Discovery

Once phenotyping experiments are represented as knowledge graphs, **graph embedding** methods can be applied to project graph entities into a continuous vector space. In this space, experiments with similar metadata profiles will occupy nearby positions, enabling:

- **Similarity search** — given the metadata of a new experiment, retrieve the most contextually similar past experiments from a repository.
- **Dataset recommendation** — suggest related datasets to a researcher based on their experiment design.
- **Meta-analysis support** — identify cohorts of comparable experiments suitable for joint analysis.

This approach moves beyond keyword-based search by capturing the *semantic structure* of experimental metadata, not just surface-level term matches. It represents a promising direction for making large phenotyping data repositories truly discoverable.

---

## 9. Research Questions

**RQ1 — Metadata Extension:**
*How can the MIAPPE standard be semantically extended by integrating the SSN/SOSA ontology to provide sufficient and standardised metadata for sensor-driven field phenotyping experiments, without sacrificing the minimum-information principle or user-friendliness?*

**RQ2 — Knowledge Graph Construction:**
*How can tabular phenotyping metadata, documented according to the extended MIAPPE–SOSA data model, be systematically transformed into a structured, FAIR-compliant knowledge graph representation?*

**RQ3 — Graph-Based Similarity Search:**
*To what extent do graph embeddings derived from the knowledge graph enable more effective retrieval of contextually similar phenotyping experiments or datasets compared to conventional metadata-based search?*

---

## 10. References

- Wilkinson, M. D. et al. (2016). The FAIR Guiding Principles for scientific data management and stewardship. *Scientific Data*, 3, 160018. https://doi.org/10.1038/sdata.2016.18
- Papoutsoglou, E. A. et al. (2020). Enabling reusability of plant phenomic datasets with MIAPPE 1.1: A checklist for plant phenotyping experiments. *New Phytologist*, 227(1), 260–273. https://doi.org/10.1111/nph.16544
- Gruber, T. R. (1993). A translation approach to portable ontology specifications. *Knowledge Acquisition*, 5(2), 199–220.
- Haller, A. et al. (2019). The SOSA/SSN Ontology: A Joint W3C and OGC Standard Specifying the Semantics of Sensors, Observations, Actuation, and Sampling. *Semantic Web*, 10(3), 617–627. https://doi.org/10.3233/SW-180320
- W3C (2017). Semantic Sensor Network Ontology. W3C Recommendation. https://www.w3.org/TR/vocab-ssn/
- AgroPortal PPEO: https://agroportal.lirmm.fr/ontologies/PPEO
- MIAPPE GitHub: https://github.com/MIAPPE/MIAPPE
- Benchmark Dataset Collection: https://doi.org/10.26165/JUELICH-DATA/3F6OFJ
