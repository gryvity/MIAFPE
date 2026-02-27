# MIAPPExSOSA — Project Overview

## Project Summary

Modern field phenotyping increasingly relies on sensor systems, robotic platforms, and remote sensing technologies adapted from neighboring disciplines. While the **Minimum Information About a Plant Phenotyping Experiment (MIAPPE)** standard provides a valuable community-defined metadata checklist, it lacks explicit constructs for describing sensors, observational platforms, and computational workflows. This project proposes a semantically extended, ontology-based adaptation of MIAPPE — provisionally called **MIAFPE (Minimum Information About a Field Phenotyping Experiment)** — that integrates the **SSN/SOSA** ontology to capture sensor-related metadata in a standardized, machine-readable way. The resulting data model will serve as the backbone of a knowledge graph representation of phenotyping experiment metadata, enabling FAIR data practices and laying the groundwork for knowledge-graph-based similarity search and downstream machine learning applications.

---

## Research Questions

**RQ1 — Metadata Extension:**
*How can the MIAPPE standard be semantically extended by integrating the SSN/SOSA ontology to provide sufficient and standardized metadata for sensor-driven field phenotyping experiments, without sacrificing the minimum-information principle or user-friendliness?*

**RQ2 — Knowledge Graph Construction:**
*How can tabular phenotyping metadata, documented according to the extended MIAPPE–SOSA data model, be systematically transformed into a structured, FAIR-compliant knowledge graph representation?*

**RQ3 — Graph-Based Similarity Search:**
*To what extent do graph embeddings derived from the knowledge graph enable more effective retrieval of contextually similar phenotyping experiments or datasets compared to conventional metadata-based search?*

---

## Project Phases

| Phase | Description | Key Deliverables |
|-------|-------------|-----------------|
| **1 — Metadata Standard Extension** | Identify and map relevant SSN/SOSA concepts onto MIAPPE's existing checklist structure. Design the extended checklist (MIAFPE) with sensor, platform, and workflow metadata fields. | Extended checklist (Excel/table format), field mapping document |
| **2 — Data Model & Ontology** | Construct a formal OWL data model merging MIAPPE and SSN/SOSA. Define classes, object properties, and their domains/ranges. Create a master OWL file as the canonical integration point. | Master OWL file, data model diagram |
| **3 — Knowledge Graph Converter** | Develop a Python tool that reads the extended checklist and converts it into JSON-LD / RDF following the MIAFPE ontology. Validate against example datasets. | Python converter tool, example knowledge graph outputs |
| **4 — Knowledge Base** | Publish a documentation website explaining MIAFPE, the ontology, and the converter, with a worked example using benchmark data. | Online knowledge base / documentation site |
| **5 — Graph Embedding & Similarity Search** | Generate graph embeddings from the knowledge graph and prototype similarity search to test RQ3. | Embedding model, similarity search prototype, evaluation results |

---

## Schedule

| Task | Start | End | Status |
|------|-------|-----|--------|
| MIAPPE–SOSA concept mapping & checklist design (MIAFPE v1.1) | ... | ... | done |
| Master OWL data model construction | ... | ... | 80 % |
| Online Documentation / Hub - Template | ... | ... | in Progress |
| Literature + expert aquisition for knowledge graph design | ... | ... | in Progress |
| project presentation | ... | middle of march | ...  |
| Python converter prototype (checklist → JSON-LD/RDF) | ... | end of march | ... |
| Review Paper revision & submission | ... | end of march | ... |
| Apply converter to benchmark dataset | ... | ... | .. |-
| Knowledge base content & web deployment + DOI (zenodo/data in brief?)| ... | ... | ... |
| Graph embedding prototype & similarity evaluation | ... | ... | ... |


---

## Priority Tasks (Immediate — This Week)

1. **Finish MIAFPE ontology selection** — consolidate the list of ontologies (MIAPPE, SSN/SOSA, PROV-O, OBOE, DCAT, Dublin Core) and document rationale for inclusion of each.
2. **Complete MIAFPE checklist template v0.1** — map SSN/SOSA sensor/platform terms onto MIAPPE sections and draft the extended Excel template.

---

## Potential Ontology Assetst

| Ontology / Vocabulary | Role | Link |
|---|---|---|
| PROV-O | Provenance | https://www.w3.org/TR/prov-o/ |
| OBOE | Observations & measurements | https://github.com/NCEAS/oboe |
| DCAT | Dataset catalog | http://www.w3.org/ns/dcat |
| Dublin Core / DCTerms | General metadata | https://www.dublincore.org/ |
| AGROVOC | Agricultural vocabulary | https://www.fao.org/agrovoc/ |
| ENVO | Environment descriptions | https://www.ebi.ac.uk/ols4/ontologies/envo |
| AGRO | Agronomy ontology | https://www.ebi.ac.uk/ols4/ontologies/agro |
| Plant Ontology (PO) | Plant anatomy & development | http://purl.obolibrary.org/obo/PO_0025131 |
| EFO | Experimental factors | https://www.ebi.ac.uk/ols4/ontologies/efo |

---

## Experts

WUR · APPN · Fraunhofer · Pommiers · Björn

---

## Notes

- Each checklist field must carry its ontology concept URI alongside the value, enabling deterministic RDF serialization from the table.
- The graph structure should be designed with GNN-based graph embeddings in mind from the outset — node/edge feature schemas matter for downstream ML.
- Consider ICASA data models as a potential additional integration point for crop modelling interoperability.
- The Knowledge Base website doubles as a dissemination channel; prioritize a worked tutorial with a real benchmark dataset.