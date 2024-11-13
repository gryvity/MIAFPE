# Minimum Information about Field Phenotyping Experiments

**Author:** Lars Grygosch ([**IGB-2**](https://www.fz-juelich.de/en/ibg/ibg-2) Forschungszentrum Juelich)\
**Contact:** l.grygosch@fz-juelich.de\
**Project-Background:** [**FAIRagro**](https://fairagro.net/) - Task Area 1 - [Use Case 5](https://fairagro.net/mitmachen/unsere-use-cases/use-case-5/)\
**Project URL:** https://github.com/gryvity/MIAFPE/tree/main/MIAFPE/MIAFPE \
**Disclaimer:** This Project's README is a living Document and is meant to provide transperence of my ongoing work. Please feel free to reach out to me with your thoughts, critic or questions. Also be aware this project is still under developement, therefore is missing some content*

## Version Infomation

[MIAFPE.xlsx](MIAPPE\MIAFPE.xlsx) in the current version is a reduced version of MIAPPE. 

| <img src="..\references\imgs\MIAFPE_DataModelMAP_Version1.2.jpg"/> |
| :--: |
| MIAPPE extended with SNN/SOSA. Observed Variable is linked to Sensor in a new Sheet in the MIAPPE Excel Checklist. |


The current Version of the MIAFPE project includes the following:

- Investigation
- Study
- Data Files
- Observation Unit (change of Attribute "Biological Material" to "Feature of Interest")
- Observed Variable
- Sensor
- Platform
- Data File


Planned Steps:

- Complete Sheets. Final Version should consist of:
  - Investigation
  - Study
  - Data Files
  - Observation Unit
  - Observed Variable
  - Sensor
  - Platform
  - Data File
  - Algorithms and Models (maybe within SOSA-Conform Method-Class)
  - Sample
  - Person
  - Event
  - Experimental Factor
  - Biological Material

- Despite a few extra classes some of the older classes need to get extra attributes
- New Examples
- An overview site guiding through the process of finding Terms in Ontologies or controlled Vocabularies
- A tool to convert Checklist to JSON-LD format with extended Information
- Link to ARC

## Abstract

## Table of Contents

- [Introduction](#introduction)

  - [MIAPPE](#miappe)

  - [Motivation for a New Standard](#motivation-for-a-new-standard)

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
  - [MIAFPE Checklist](#miafpe-checklist)
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
  - [Future Directions and Interoperability Prospects](#future-directions-and-interoperability-prospects)

- [References](#references)



## Introduction
### MIAPPE [EDIT]



With the development of high-resolution sensor systems, data acquisition became faster, more efficient, and increasingly accessible, as compact sensors could be mounted on various platforms, such as UAVs, aircraft, or satellites. These innovations have enabled large-scale observation, making high-throughput data acquisition feasible and more cost-effective.

Plant traits are influenced not only by the plant’s genetics but also by complex interactions with environmental conditions, resulting in diverse and heterogeneous data. In the modern context, “phenotyping” encompasses any quantitative or qualitative measurement of plant characteristics, spanning levels from single cells to whole ecosystems ([Dhondt et al., 2013](https://doi.org/10.1016/j.tplants.2013.04.008)). This breadth of scope requires a range of experimental designs and data collection approaches. As noted by Krajewski et al. (2015), while various standards and controlled vocabularies were developed to describe individual plant traits, there was no standardized framework for documenting phenotyping experiments as a whole. The absence of such standards hindered the integration, comparison, and reuse of phenotypic data across studies and platforms.

MIAPPE (Minimum Information About Plant Phenotyping Experiments) was developed to address these gaps, inspired by the "Minimum Information" approach used successfully in other biological fields, such as MIAME for microarray experiments and MIAPE for proteomics. This approach defines a checklist of essential attributes that need to be recorded to facilitate data deposition, storage, and reuse, without mandating that all attributes be filled in every case. Instead, the checklist serves as a guide, ensuring that crucial information is not omitted, thereby supporting interoperability and data discovery. As Krajewski et al. outlined, this “minimum information” framework is supported by a number of bioscience standards registered on platforms like Biosharing (now FAIRsharing), which provide centralized access to metadata standards, including MIAPPE.

In 2016, the initial version of MIAPPE was released, consolidating best practices for the documentation and organization of plant phenotyping data within a comprehensive metadata framework. MIAPPE v1 introduced a structured list of metadata fields spanning key aspects of phenotyping experiments: investigation, study, biological material, observation unit, observed variables, and data files. Additionally, this version provided compatibility with the ISA-Tab format, facilitating integration with other datasets in the life sciences. The ISA-Tab Phenotyping Configuration, designed specifically for MIAPPE, enables researchers to organize and structure metadata for plant phenotyping experiments in a flexible and adaptable format. Ćwiek-Kupczyńska et al. (2016) demonstrated the practical implementation of MIAPPE in multiple systems, highlighting how ISA-Tab-formatted data structures could standardize metadata collection and enhance data interoperability across platforms ([SOURCE](https://doi.org/10.1186/s13007-016-0144-4)).

With increasing recognition of the importance of the FAIR (Findable, Accessible, Interoperable, Reusable) data principles, MIAPPE was further refined in its 2020 update to version 1.1 (Papoutsoglou et al., 2020). This update incorporated controlled vocabularies and ontologies to improve data consistency, with extended fields and refined descriptors to better support a range of phenotyping studies. Version 1.1 of MIAPPE not only addresses previous limitations in documenting metadata but also enhances compatibility with platforms such as the Breeding API (BrAPI), ISA-Tools, and other widely adopted data infrastructures in the plant sciences. The updated standard facilitates precise annotation of traits, conditions, and experimental setups, enabling datasets to be more seamlessly integrated into phenomics research pipelines. Today, MIAPPE is utilized across a broad spectrum of research projects and is actively embedded in several plant science databases and analysis tools, promoting the accessibility and reusability of phenotypic data.

As MIAPPE continues to evolve, it addresses the challenges posed by emerging data sources, particularly from remote sensing and high-throughput imaging. The development of v1.1 marked a substantial step towards achieving FAIR compliance, fostering data sharing and reuse across the plant science community. Through a community-driven approach, MIAPPE has become a foundational standard for phenotyping data, empowering researchers to document their experiments comprehensively and consistently, ensuring that datasets remain relevant and valuable for future studies.



### Motivation for a New Standard


While MIAPPE offers a solid foundation for documenting plant phenotyping experiments, it currently lacks comprehensive support for remote sensing data, a critical element in large-scale, modern phenotyping. Integrating the SSN/SOSA ontologies within MIAPPE enables the inclusion of Sensors and Platforms, facilitating more precise documentation of non-invasive data collection methods, such as UAVs (drones), aircraft, and satellite-based imagery. These additions enhance MIAPPE's ability to capture a broader range of observational data, which is essential for high-throughput, field-based studies.

To address this need, the new MIAFPE (Minimum Information about Field Phenotyping Experiments) Metadata Checklist aims to extend the MIAPPE Metadata standard. MIAFPE will incorporate remote sensing and computer science advancements, creating a metadata framework tailored for field phenotyping applications. Additionally, while machine learning models are not yet integrated, their inclusion is planned for future updates, allowing MIAFPE to comprehensively document the increasingly complex workflows of automated phenotyping.

### Outlook of the Work [REWORK]

The Next Sections are dedicated to the classes, attributes and their connection within the 

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


### MIAFPE Checklist
Some of the Sheets and their representive attributes are unchanged from the MIAPPE version 1.1, but are mentioned above for the sake of completeness. 

The examples in the MIAPPE might differ from versio 1.1 give researchers operating platforms and utilizing remote sensing a feeling of what to fill in.

#### Investigation

Investigations are research programmes with defined aims. They can exist at various scales (for example, they could encompass a grant-funded programme of work, the various components comprising a peer-reviewed publication, or a single experiment). This section is mandetory.

Note: *Values in Excel Sheet are along 1-axis*

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

Examples:

| Field Label | old Example | new Example |
| - | - | - |
| Investigation unique ID | EBI:12345678 | doi:10.26165/JUELICH-DATA/QKJKPW |
| Investigation title | Adaptation of Maize to Temperate Climates: Mid-Density Genome-Wide Association Genetics and Diversity Patterns Reveal Key Genomic Regions, with a Major Contribution of the Vgt2 (ZCN8) Locus. | | 
| Investigation Description | The migration of maize from tropical to temperate climates was accompanied by a dramatic evolution in flowering time. To gain insight into the genetic architecture of this adaptive trait, we conducted a 50K SNP-based genome-wide association and diversity investigation on a panel of tropical and temperate American and European representatives. |
| Submission date | 2012-12-17 | 2024-10-01 |
| Public release date | 2013-02-25 | 2024-11-07 |
| License | CC BY-SA 4.0, Unreported | CC BY-SA 4.0 |
| MIAPPE version | 1.1 | MIAFPE v1.2 |
| Associated publication | doi:10.1371/journal.pone.0071377 | |

Connections:

    hasPart: [Investigation Metadata, list[Study{Studi Id}], list[publication{DOI}], Person]
    
    isPartOf: []

Ontologies:

    ppeo :
    xsd : 


Changes:

    - some new examples

Comment: Investigation Metadata could include  Vocabularies and Ontologies, Prefixes and References to Controlled Vocabularies and/or Ontologies. MAYBE via an attached external file, e.g. like [context.json](JSON_LD\context.json).


#### Study
A study (or experiment) comprises a series of assays (or measurements) of one or more types, undertaken to answer a particular biological question.
Attributes within that class are highlighting the experimental design.
This section is mandetory.



| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | Unique identifier comprising the name or identifier for the institution/database hosting the submission of the study data, and the identifier of the study in that institution. If the study has no official unique ID, assign your own following the schema: study_1, study_2, study_..., study_n. |
| 2 | Study title | ppeo:hasName | xsd:string | 1 | ... | 
| 3 | Study description | ppeo:hasDescription | xsd:string | 0-1 | ...|
| 4 | Start date of study | xsd:datetime | 1 | ... | 
| 5 | End date of study | 
| 6 | Contact Institution |
| 7 | Geographic Location (country) |
| 8 | Experimental site name | 
| 9 | Geographic location (latitude) | 
| 10 | Geographic location (longitude) | 
| 11 | Geographic location (altitude) | 
| 12 | Description of the experimental Design | 
| 13 | Type of experiemental design | 
| 14 | Observation Unit Level Hierarchy |
| 15 | Observation Unit Description |
| 16 | Description of growth facility |
| 17 | Type of growth facility |
| 18 | Cultural Practices |
| 19 | Map of Experimental Design |


Examples:

| Field Label | old Example | new Example |
| - | - | - | 
| Study unique ID | 
| Study title | 
| Study description | 
| Start date of study | 
| End date of study |   
| Contact Institution |
| Geographic Location (country) |
| Experimental site name | 
| Geographic location (latitude) | 
| Geographic location (longitude) | 
| Geographic location (altitude) | 
| Description of the experimental Design | 
| Type of experiemental design | 
| Observation Unit Level Hierarchy |
| Observation Unit Description |
| Description of growth facility |
| Type of growth facility |
| Cultural Practices |
| Map of Experimental Design |


Connections:

    hasPart: []
    
    isPartOf: []

Ontologies:

    ppeo :

Changes from v1.1

    - New Examples


#### Person
A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:



#### Data File

A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:



#### Observation Unit

A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:



#### Observed Variable

A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:


#### Method

NOT IMPLEMENTED YET


#### Sensor

A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:


#### Platform

A human involved in the investigation or specifically any of its studies. This section is mandetory 

| # | Field Label | Key | Datatype | Cardinality | Comment |
| - | - | - | - | - | - |
| 1 | Study unique ID |  @id | Unique Identifier | 1 | ..|
| 2 | Person Name |
| 3 | Email | 
| 4 | Person ID |
| 5 | Role |
| 6 | Affiliation |

Examples:
| Field Label |old Example | new Example |
| - | - | - |
| Study unique ID |  
| Person Name |
| Email | 
| Person ID |
| Role |
| Affiliation |

Connections:

Ontologies:


#### Sample

NOT IMPLEMENTED YET

#### Environment

NOT IMPLEMENTED YET

#### Experimental Factor

NOT IMPLEMENTED YET

#### Event

NOT IMPLEMENTED YET

#### Biological Material

NOT IMPLEMENTED YET

## Reflection and Interoperability

### Interaction with ARC (Annotated Research Context)

https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/AnnotatedResearchContext.html

NOT IMPLEMENTED YET



### Future Directions and Interoperability Prospects


## References

<a id="1">[1]</a> 
Minimum Information About Plant Phenotyping Experiments, Website last visited 2024-11-06, https://www.miappe.org/


[EDIT]
- https://doi.org/10.1111/nph.16544
- https://doi.org/10.1038/s41597-023-02364-z
- https://www.miappe.org/
- https://doi.org/10.1093/jxb/ery006
- https://doi.org/10.1186/s13007-016-0144-4
- https://doi.org/10.1016/j.tplants.2013.04.008 


## Introduction

Early MIAPPE - recommendations to address three different aspects of standardization. 

1) definition of attributes that may be necessary to describe each experiment appropriate for deposition and storage in an archive or publication in form of a checklist. Not each attribute is mandetory. it follows the "minimum information" approach such as MIAME (Minimum Information about Microarry Experiment), MIAPE (Minimum Information about a Proteomics Experiment), CIMR (Core Information for Metabolomics Reporting) or MIxS (Minimum Information about any Sequence Specifications).
2) Rely on annotation with respect to publicly available ontologies and vocaubularies, such as Plant Ontology or Crop Ontology.
3) To ensure proper use and interoperability of data sets the proper format is needed. Formats that are used in similar applications are CSV, XML, RDF, MAGE-TAB or ISA-Tab. 

## Motivation
While MIAPPE provides a good framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.


The new Metadata Checklist MIAFPE (Minimum Information about Field Phenotyping Experiments) is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. The MIAPPE Checklist format will 

## Integrating SSN/SOSA [EDIT]


The Semantic Sensor Network (SSN) ontology is an ontology for describing observations, in terms of the procedures executed and sensors used, the properties observed, which relate to the features (entities) of interest. 

[Open Geospatial Consortium (OGC)](https://www.ogc.org/)

As a co



| <img src="..\references\imgs\miappe_extension_v1.png"/> |
| :--: |
| Plan:  |


The Problem with the MIAPPE terminology and SOSA:

- Certain classes are not one-to-one mapping on SOSA classes.
- MIAPPE links Instances via Study ID
- Observation Unit


















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