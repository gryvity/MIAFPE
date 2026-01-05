# Project Plan
## Minimal Information about Field Phenotyping Experiments Overview

Here, the central planning stages are documented for the project. This will guide me through the project step-by-step. These steps include a schedule for:
- Literature Review
- Protoyping
- Paper Structure and Writing

This document will track the progress of the project. Furthermore here I will provide some space for loose notes and ideas that might be useful for the project.

The goal of this particular project is to create a standardized template for documenting field phenotyping experiements, building upon the existing MIAPPE standard, and adopting further metadata standards to cover terminologies and concepts from the domain of remote sensing and computer vision and robotics. The final template should be simple and userfriendly without sacrificing semantic expressivity and FAIR compliance. To do so, I will merge relevant ontologies and vocabularies into onde MIAFPE ontology, generate a data model and finally implement the template in a user-friendly format, e.g. as a web application or a fillable PDF form.

Furthermore, this project aims on tranforming the documentation into a machine-readable format, e.g. JSON-LD or RDF. These machine-readable formats will be designed to be in an appropriate shape in order to allow the development of embeddings for machine learning applications in the future. Since the datamodel resemble a graphlike structure, it is likely that graph neural networks (GNNs) will be a suitable choice for such applications.

For March 2026, I need to have a working protoype as well as a knowledge base.


## Schedule 
| Task                          | Start Date | End Date   | Status       |
|-------------------------------|------------|------------|--------------|
| Prototype Planning | 2026-01-05 | 2026-01-07 | Started     |
| Prototyping                   | 2026-01-07 | 2026-01-09 | Not Started  |
| Literature Review             | 2026-01-12 | 2026-01-16 | Not Started  |
| Paper Structure Planning      | 2026-01-16 | 2026-01-18 | Not Started  |
| Writing First Draft          | 2026-01-18 | 2026-01-30 | Not Started  |


## Paper Structure

Prelimary structure of the paper (2026-01-05):

- Introduction
    - Background emergence of interdisciplinary research in plant phenotyping adapting new technologies from computer vision, robotics and remote sensing
    - Motivation of standardized documentation of experiemental data
    - Minimum Information standards in life sciences.
    - Ontologies and Vocabularies for metadata standardization
    - FAIR principles and the advent of machine-readable metadata
    - Aim of this work: 
        - Create a standardized template for documenting field phenotyping experiements, building upon the existing MIAPPE standard, and adopting further metadata standards to cover terminologies and concepts from the domain of remote sensing and computer vision and robotics.
        - Implement the template in a user-friendly format, e.g. as a web application or a fillable PDF form.
        - Transforming the documentation into a machine-readable format, e.g. JSON-LD or RDF.
- Related Work
    - Overview of existing MI standards in life sciences
    - Overview of existing ontologies and vocabularies relevant for plant phenotyping, remote sensing, computer vision and robotics
    - Overview of existing tools and templates for documenting field phenotyping experiments
- Methods
    - Ontology and Vocabulary Selection and Merging
    - Data Model Design
    - Template Implementation
    - Machine-Readable Format Design
- Results
    - Finalized Template
    - Machine-Readable Format
- Discussion
    - Evaluation of the Template
    - Comparison with Existing Standards
    - Limitations and Future Work -> here I would love to discuss the potential of having machine-readable metadata for training machine learning models, e.g. GNNs in order to find patterns in phenotyping experiements, that could help identify 'contextual' similarities between experiements, which could be potentially useful for machine learning tasks, meta analyses or even experimental design.


## Prototyping Steps


- Step 1: Gather existing Ontologies and Vocabularies relevant for the project



## Literature Selection

Within this section I will collect relevant literature for the project and give a short summary which mainly focusses on the reasoning why this paper is relevant for the project.





## Notes and Ideas

- Potential Project Partners: WUR, APPN, Fraunhofer, Roland, Pommiers, Björn
- Try to emphasize a focus on data file contents and relationship between data files within an experiment
- Try to find a significant list of usecases that are already implementing MIAPPE or similar standards and identify interdisciplinary components within these uescases and their documentation needs