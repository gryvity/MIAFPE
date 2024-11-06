# Minimum Information about Field Phenotyping Experiments

**Author:** Lars Grygosch ([**IGB-2**](https://www.fz-juelich.de/en/ibg/ibg-2) Forschungszentrum Juelich)\
**Contact:** l.grygosch@fz-juelich.de\
**Project-Background:** [**FAIRagro**](https://fairagro.net/) - Task Area 1 - [Use Case 5](https://fairagro.net/mitmachen/unsere-use-cases/use-case-5/)\
**Project URL:** https://github.com/gryvity/MIAFPE/tree/main/MIAFPE/MIAFPE \
**Disclaimer:** This Project's README is a living Document and is meant to provide transperence of my ongoing work. Please feel free to reach out to me with your thoughts, critic or questions. Also be aware this project is still under developement, therefore is missing some content*

## Version Infomation

The current Version of the MIAFPE project includes the following:

- Investigation
- Study
- Data Files
- Observation Unit
- Observed Variable
- Sensor
- Platform
- Data File


Recent Changes:

- It is the first iteration

Planned Steps:

- 

## Abstract

## Table of Contents

- [Introduction](#introduction)

  - [MIAPPE](#miappe)

  - [Motivation for a New Standard](#motivation-for-a-new-standard)
    - [Limitations of MIAPPE for Modern Field Phenotyping](#limitations-of-miappe-for-modern-field-phenotyping)
    - [Advances in Remote Sensing, Sensor Technology, and Machine Learning](#advances-in-remote-sensing-sensor-technology-and-machine-learning)
    - [Necessity of Expanded Metadata for Comprehensive Documentation](#necessity-of-expanded-metadata-for-comprehensive-documentation)
  - [Outlook of the Work](#outlook-of-the-work)
    - [Overview of Upcoming Sections](#overview-of-upcoming-sections)
    - [Key Challenges Addressed in the Work](#key-challenges-addressed-in-the-work)

- [Integrating SSN/SOSA to MIAPPE](#integrating-ssnsosa-to-miappe)
  - [SSN/SOSA](#ssnsosa)
    - [Introduction to SOSA and SSN Ontologies](#introduction-to-sosa-and-ssn-ontologies)
    - [Relationship Between SOSA and SSN](#relationship-between-sosa-and-ssn)
  - [SOSA Datamap and its Inclusion in MIAPPE](#sosa-datamap-and-its-inclusion-in-miappe)
    - [Overview of the SOSA Data Map](#overview-of-the-sosa-data-map)
    - [Approach to Integration with MIAPPE](#approach-to-integration-with-miappe)
    - [Key Challenges in Harmonizing Structures](#key-challenges-in-harmonizing-structures)
    - [Ensuring Metadata Completeness and Usability](#ensuring-metadata-completeness-and-usability)

- [MIAFPE: An Extended MIAPPE for Field Phenotyping](#miafpe-an-extended-miappe-for-field-phenotyping)
  - [The MIAFPE Data Model](#the-miafpe-data-model)
    - [Overview of the Extended Data Model](#overview-of-the-extended-data-model)
    - [Examples and Use Cases in Field Phenotyping](#examples-and-use-cases-in-field-phenotyping)
  - [Investigation](#investigation)
  - [Study](#study)
  - [Person](#person)
  - [Data File](#data-file)
  - [Observation Unit](#observation-unit)
  - [Observed Variable](#observed-variable)
  - [Method](#method)
  - [Sensor](#sensor)
  - [Platform](#platform)
  - [Sample](#sample)
  - [Environment](#environment)
  - [Experimental Factor](#experimental-factor)
  - [Event](#event)
  - [Biological Material](#biological-material)

- [Reflection and Interoperability](#reflection-and-interoperability)
  - [Interaction with ARC (Annotated Research Context)](#interaction-with-arc-annotated-research-context)
    - [Introduction to ARC and FAIRagro Consortium](#introduction-to-arc-and-fairagro-consortium)
    - [Potential for Integration with MIAFPE](#potential-for-integration-with-miafpe)
    - [Future Directions and Interoperability Prospects](#future-directions-and-interoperability-prospects)

- [References](#references)



## Introduction
### MIAPPE


- https://doi.org/10.1111/nph.16544
- https://doi.org/10.1038/s41597-023-02364-z
- https://www.miappe.org/
- https://doi.org/10.1093/jxb/ery006
- https://doi.org/10.1186/s13007-016-0144-4
- https://doi.org/10.1016/j.tplants.2013.04.008 



With the development of high-resolution sensor systems, data acquisition became faster, more efficient, and increasingly accessible, as compact sensors could be mounted on various platforms, such as UAVs, aircraft, or satellites. These innovations have enabled large-scale observation, making high-throughput data acquisition feasible and more cost-effective.

Plant traits are influenced not only by the plant’s genetics but also by complex interactions with environmental conditions, resulting in diverse and heterogeneous data. In the modern context, “phenotyping” encompasses any quantitative or qualitative measurement of plant characteristics, spanning levels from single cells to whole ecosystems ([Dhondt et al., 2013](https://doi.org/10.1016/j.tplants.2013.04.008)). This breadth of scope requires a range of experimental designs and data collection approaches. As noted by Krajewski et al. (2015), while various standards and controlled vocabularies were developed to describe individual plant traits, there was no standardized framework for documenting phenotyping experiments as a whole. The absence of such standards hindered the integration, comparison, and reuse of phenotypic data across studies and platforms.

MIAPPE (Minimum Information About Plant Phenotyping Experiments) was developed to address these gaps, inspired by the "Minimum Information" approach used successfully in other biological fields, such as MIAME for microarray experiments and MIAPE for proteomics. This approach defines a checklist of essential attributes that need to be recorded to facilitate data deposition, storage, and reuse, without mandating that all attributes be filled in every case. Instead, the checklist serves as a guide, ensuring that crucial information is not omitted, thereby supporting interoperability and data discovery. As Krajewski et al. outlined, this “minimum information” framework is supported by a number of bioscience standards registered on platforms like Biosharing (now FAIRsharing), which provide centralized access to metadata standards, including MIAPPE.

In 2016, the initial version of MIAPPE was released, consolidating best practices for the documentation and organization of plant phenotyping data within a comprehensive metadata framework. MIAPPE v1 introduced a structured list of metadata fields spanning key aspects of phenotyping experiments: investigation, study, biological material, observation unit, observed variables, and data files. Additionally, this version provided compatibility with the ISA-Tab format, facilitating integration with other datasets in the life sciences. The ISA-Tab Phenotyping Configuration, designed specifically for MIAPPE, enables researchers to organize and structure metadata for plant phenotyping experiments in a flexible and adaptable format. Ćwiek-Kupczyńska et al. (2016) demonstrated the practical implementation of MIAPPE in multiple systems, highlighting how ISA-Tab-formatted data structures could standardize metadata collection and enhance data interoperability across platforms (https://doi.org/10.1186/s13007-016-0144-4).

With increasing recognition of the importance of the FAIR (Findable, Accessible, Interoperable, Reusable) data principles, MIAPPE was further refined in its 2020 update to version 1.1 (Papoutsoglou et al., 2020). This update incorporated controlled vocabularies and ontologies to improve data consistency, with extended fields and refined descriptors to better support a range of phenotyping studies. Version 1.1 of MIAPPE not only addresses previous limitations in documenting metadata but also enhances compatibility with platforms such as the Breeding API (BrAPI), ISA-Tools, and other widely adopted data infrastructures in the plant sciences. The updated standard facilitates precise annotation of traits, conditions, and experimental setups, enabling datasets to be more seamlessly integrated into phenomics research pipelines. Today, MIAPPE is utilized across a broad spectrum of research projects and is actively embedded in several plant science databases and analysis tools, promoting the accessibility and reusability of phenotypic data.

As MIAPPE continues to evolve, it addresses the challenges posed by emerging data sources, particularly from remote sensing and high-throughput imaging. The development of v1.1 marked a substantial step towards achieving FAIR compliance, fostering data sharing and reuse across the plant science community. Through a community-driven approach, MIAPPE has become a foundational standard for phenotyping data, empowering researchers to document their experiments comprehensively and consistently, ensuring that datasets remain relevant and valuable for future studies.



### Motivation for a New Standard


While MIAPPE offers a solid foundation for documenting plant phenotyping experiments, it currently lacks comprehensive support for remote sensing data, a critical element in large-scale, modern phenotyping. Integrating the SSN/SOSA ontologies within MIAPPE enables the inclusion of Sensors and Platforms, facilitating more precise documentation of non-invasive data collection methods, such as UAVs (drones), aircraft, and satellite-based imagery. These additions enhance MIAPPE's ability to capture a broader range of observational data, which is essential for high-throughput, field-based studies.

To address this need, the new MIAFPE (Minimum Information about Field Phenotyping Experiments) Metadata Checklist aims to extend the MIAPPE Metadata standard. MIAFPE will incorporate remote sensing and computer science advancements, creating a metadata framework tailored for field phenotyping applications. Additionally, while machine learning models are not yet integrated, their inclusion is planned for future updates, allowing MIAFPE to comprehensively document the increasingly complex workflows of automated phenotyping.

### Outlook of the Work
#### Overview of Upcoming Sections
#### Key Challenges Addressed in the Work

## Integrating SSN/SOSA to MIAPPE
### SSN/SOSA
#### Introduction to SOSA and SSN Ontologies
#### Relationship Between SOSA and SSN

### SOSA Datamap and its Inclusion in MIAPPE
#### Overview of the SOSA Data Map
#### Approach to Integration with MIAPPE
#### Key Challenges in Harmonizing Structures
#### Ensuring Metadata Completeness and Usability

## MIAFPE: An Extended MIAPPE for Field Phenotyping
### The MIAFPE Data Model
#### Overview of the Extended Data Model
#### Examples and Use Cases in Field Phenotyping

### Investigation
### Study
### Person
### Data File
### Observation Unit
### Observed Variable
### Method
### Sensor
### Platform
### Sample
### Environment
### Experimental Factor
### Event
### Biological Material

## Reflection and Interoperability
### Interaction with ARC (Annotated Research Context)

https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/AnnotatedResearchContext.html


#### Introduction to ARC and FAIRagro Consortium
#### Potential for Integration with MIAFPE
#### Future Directions and Interoperability Prospects

## References

- Minimum Information About Plant Phenotyping Experiments, Website last visited 2024-11-06, https://www.miappe.org/



# 
## Introduction

Early MIAPPE - recommendations to address three different aspects of standardization. 

1) definition of attributes that may be necessary to describe each experiment appropriate for deposition and storage in an archive or publication in form of a checklist. Not each attribute is mandetory. it follows the "minimum information" approach such as MIAME (Minimum Information about Microarry Experiment), MIAPE (Minimum Information about a Proteomics Experiment), CIMR (Core Information for Metabolomics Reporting) or MIxS (Minimum Information about any Sequence Specifications).
2) Rely on annotation with respect to publicly available ontologies and vocaubularies, such as Plant Ontology or Crop Ontology.
3) To ensure proper use and interoperability of data sets the proper format is needed. Formats that are used in similar applications are CSV, XML, RDF, MAGE-TAB or ISA-Tab. 

## Motivation
While MIAPPE provides a good framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.


The new Metadata Checklist MIAFPE (Minimum Information about Field Phenotyping Experiments) is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. The MIAPPE Checklist format will 

## Integrating SSN/SOSA

### SSN Semantic Sensor Network

The Semantic Sensor Network (SSN) ontology is an ontology for describing observations, in terms of the procedures executed and sensors used, the properties observed, which relate to the features (entities) of interest.

[Open Geospatial Consortium (OGC)](https://www.ogc.org/)


| <img src="..\references\imgs\miappe_extension_v1.png"/> |
| :--: |
| MIAPPE extended with SNN/SOSA. Observed Variable is linked to Sensor in a new Sheet in the MIAPPE Excel Checklist. |



#### Update notes

[MIAFPE.xlsx](MIAPPE\MIAFPE.xlsx) in the current version is a reducesd version of MIAPPE. It includes the following sheets:

- Investigation 
- Study
- Observation Unit
- Observed Variable
- Data File
- Sensor
- Platform

| <img src="..\references\imgs\MIAFPE_DataModelMAP_Version1.2.jpg"/> |
| :--: |
| MIAPPE extended with SNN/SOSA. Observed Variable is linked to Sensor in a new Sheet in the MIAPPE Excel Checklist. |

![test](..\references\imgs\MIAFPE_DataModelMAP_Version1.2.jpg)
## Future Implementation

- Algorithms and Models
- A tool to convert to JSON format with extended Information


## MIAFPE Data Model

### Investigation
Investigations are research programmes with defined aims. They can exist at various scales (for example, they could encompass a grant-funded programme of work, the various components comprising a peer-reviewed publication, or a single experiment).

Values in Excel Sheet are alon 1-axis

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Investigation unique ID |  @id | Unique Identifier | 1 | Identifier comprising the unique name of the institution/database hosting the submission of the investigation data, and the accession number of the investigation in that institution. |
| 2 | Investigation title | ppeo:hasName | xsd:string | 1 | Human-readable string summarising the investigation. |
| 3 | Investigation description | ppeo:hasDescription | xsd:string | 0-1 | Human-readable text describing the investigation in more detail. |
| 4 | Submission Date | ppeo:hasSubmissionDate | xsd:datetime | 0-1 | Date of submission of the dataset presently being described to a host repository. |
| 5 | Public Release Date | ppeo:hasPublicReleaseDate | xsd:datetime | 0-1 | Date of first public release of the dataset presently being described. |
| 6 | License | ppeo:hasLicense | xsd:string/LICENSE? | 0-1 |  |
| 7 | MIAPPE version | ppeo:hasMIAPPEVersion | xsd:string/Verion | 1 | The version of MIAPPE used. |
| 8 | Associated publications | ppeo:hasAssociatedPublication | list[Object[Publication]] | 0+ | An identifier for a literature publication where the investigation is described. Use of DOIs is recommended. |


    hasPart: [Investigation Metadata, list[Study{Studi Id}], list[publication{DOI}]]
    
    isPartOf: []

Comment: Investigation Metadata could include to identify Vocabulary, Prefixes and References to Controlled Vocabularies and/or Ontologies


### Study
A study (or experiment) comprises a series of assays (or measurements) of one or more types, undertaken to answer a particular biological question.

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ... |
| 2 | Study title | ppeo:hasName | xsd:string | 1 | ... | 
| 3 | Study description | ppeo:hasDescription | xsd:string | 0-1 | ...|
| 4 | Start date of study | xsd:datetime | 1 | ... | 
| 5 | End date of study | 
| 6 | Contact Institution
| 7 | Geographic Location (country) |
| 8 | Experimental site name | 
| 9 | Geographic location (latitude) | 
| 10 | Geographic location (longitude) | 
| 11 | Geographic location (altitude) | 
|   | Experimental Design | 
Observation Unit Level Hierarchy
Observation Unit Description
Growth Facility
Cultural Practices
Map of Experimental Design


### Person

- Person Name
- Email
- Person ID
- Role
- Affiliation



### Data File 
(Linked to `sosa:Result`)

- Data File Link: `dataFileLink`
- Description: `dataFileDesc`
- Version: `dataFileVersion`
- Result Type: `resultType` (e.g., numeric, image, etc.)

---

### Observation Unit 
(Aligned with `sosa:FeatureOfInterest`)

- FeatureOfInterest
- Observation Unit ID
- Type
- External ID
- Spatial Distribution
- Factors Applied
- Observation IDs (Links to ObservedVariable)

  
Note: The Observation Unit represents the `sosa:FeatureOfInterest`, which is the entity being observed.



### Observed Variable

aligned with sosa:Observation: sosa:Procedure and sosa:ObservedProperty

This Sheet does maybe need some improvements

- Study ID
- Observed Variable ID
- Variable Name
- Variable accession number
- Trait
- Trait accession number
- Method (link to the Method sheet)
- [Method accession number (moved to new sheet)]*
- [Method description (moved to new sheet)]*
- [Method reference (moved to new sheet)]*
- Scale
- Scale accession number
- Time scale
- Sensor ID*
- Sensor Location*
- Platform ID*
- Platform Location*
- Observation Unit ID*
- Results (links to Data Files)*



### Method

Normative

Does Calibration or Platform Routing belong here?

Might think about extension with vocab from https://www.w3.org/TR/prov-o/


Not Implemented Yet



- Method ID
- Name
- Description
- Accession Number
- Reference
- Protocol
- Applied to Sensor
- Applied to Platform
---
- Calibration File
- Ground Control Points
- Software used?


### Sensor 
(Aligned with `sosa:Sensor`)

Normative

- Sensor ID
- Name
- Type
- Sensor Accession Number
- Description
- Manufacturer
- Model
- Files


### Platform 
(Aligned with `sosa:Platform`)

Describes the Platform specifics

- Platform ID
- Name
- Type
- Accession number
- Platform description
- Manufacturer
- Model
- Files
- Sensor IDs
- Sampler (For future implementation)


### Sample 

(Aligned with `sosa:Sample`)

NOT IMPLEMENTED YET

- Sample ID
- Observation Unit ID
- Development Stage
- Anatomical Entity
- Description
- Collection Date
- External ID



### Environment

NOT IMPLEMENTED YET

- ID
- Environment Parameter
- Environment Value



### Experimental Factor

NOT IMPLEMENTED YET

- ID
- Factor Type
- Description
- Values


### Event

NOT IMPLEMENTED YET

- ID
- Event Type
- Event Date
- Description



### Biological Material

NOT IMPLEMENTED YET

- Study ID
- Biological Material ID
- Organism
- Genus
- Species
- Infraspecific Name
- Material Source ID
- Description
- Observed Variable

# Links and Literature

https://github.com/w3c/sdw-sosa-ssn

Further Links:
- https://www.ogc.org/
- https://w3c.github.io/sdw/ssn-usage/
- https://www.w3.org/TR/vocab-ssn/

Example of usage:
- http://www.w3.org/ns/sosa/Sensor