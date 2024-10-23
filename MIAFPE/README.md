# Minimum Information about Field Phenotyping Experiments

## Personal Notes

CHeck
https://github.com/w3c/sdw-sosa-ssn

## Motivation
While MIAPPE provides a good framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.


Minimum Information about Field Phenotyping Experiments is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. 

Therefor MIAFPE just builds on the existing MIAPPE format as a core.

## Integrating SSN/SOSA

### SSN Semantic Sensor Network

The Semantic Sensor Network (SSN) ontology is an ontology for describing observations, in terms of the procedures executed and sensors used, the properties observed, which relate to the features (entities) of interest.

[Open Geospatial Consortium (OGC)](https://www.ogc.org/)


| <img src="..\references\imgs\miappe_extension_v1.png" width="350"/> |
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




## Sensors

http://www.w3.org/ns/sosa/Sensor

Additional useful Resource for using SOSA
https://w3c.github.io/sdw/ssn-usage/

![miappe extension version 1](..\references\imgs\miappe_extension_v1.png)


| Field # | MIAFPE | Desc | Ontology Ref |
| - | - | - | - |
| 1 | Observed Variable | list of study-IDs | |
| 2 | Sensor ID | just any identification of the sensor in use (e.g. inventory-number,  Serial Number, or a given unique name) |
| 3 | Sensor Type | Describes the Type of Sensor | |
| 4 | Manufacturer | | |
| 5 | Model/Version | | |
| 6 | Platform | Links the Sensor to a Platform | |
| 7 | 


Some Notes for me

- How is the Observation in MIAPPE linked to the FeatureOfInterest and the Procedure
- Is Procedure a missing Link for the inclusion of Algorithms
- Namespace for Sensortypes is yet to be found

## Platforms




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

