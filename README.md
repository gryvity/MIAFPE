# [meta]data for non-invasive Field Phenotyping

***Author:** Lars Grygosch (IGB-2 Forschungszentrum Juelich)\
**Contact:** l.grygosch@fz-juelich.de\
**Disclaimer:** This Project is a living Document and is meant to provide transperence of my ongoing work. Please feel free to reach out to me with your thoughts, critic or questions*


## Motivation
Recent advancements in non-invasive sensor systems have revolutionized plant phenotyping field studies. Proximal sensing technologies along
with remote sensing from satellites, aircrafts, and UAVs, now enable non-destructive measurements at different scales under realistic
environmental conditions. These technologies, however, produce vast and complex datasets, making sophisticated data management strategies
critical for enhancing the findability, accessibility, interoperability, and reusability (FAIR) of data. To address this, we are developing a benchmark
dataset that exemplifies typical field phenotypic and remote sensing data, supported by templates and guidelines for effective data management.


## Content of this Project

This is thought to be the global Hub of my project within the FAIRagro Use Case 5. Thus the progress to meet the milestones is documented here. I will try to give me best to keep this project nice and clean, but be aware you are visiting a construction site. That means there might be some mess for the time being.

The Idea (Content to be) of this Project is:
- Share and discuss good data practices and foster an inclusive data culture (see [tutorials](tutorials/)) with Texts, Data-Examples and Talks.
- A catalogue of Datasets from the Domain of Field Phenotyping as a Benchmark for that domain (see [benchmark](benchmark/)).
- A Metadata Standard with MIAPPE as core Standard. It is thought to extend the standard Checklist with Information about Sensors, Platforms, Algorithms and Models to include the minimal amount of information in order to archieve increased FAIRness (see [MIAFPE](MIAFPE/)).
- While the checklist of MIAPPE provides an easy approach for Metadata Collection, the Document itself in form of an Excel-Sheet lacks in Machine Readbility and does not serve the spirit of Linked Data. Therefore the Idea is in addition to the extended Checklist include a conversion to JSON-LD utilizing [PPEO](https://agroportal.lirmm.fr/ontologies/PPEO) and [SSN/SOSA](https://www.w3.org/TR/vocab-ssn/) as Ontologies. This part of the Porject is embedded within the the MIAFPE-Project (see [JSON-LD](MIAFPE\JSON_LD)).



## How To?


## License




## MIAFPE
Minimum Information about Field Phenotyping Experiments is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. 

Therefor MIAFPE just builds on the existing MIAPPE format as a core.


## Update notes

### MIAFPE
[MIAFPE.xlsx](MIAPPE_extension\MIAFPE.xlsx) in the current version is a reducesd version of MIAPPE. It includes the following sheets:


- Investigation 
- Study
- Observation Unit
- Observed Variable
- Data File
- Sensor
- Platform

## Future Plans




## MIAPPE 1.1

MIAPPE is a metadata standard designed to ensure comprehensive documentation of phenotyping experiments, providing researchers with a structured checklist to capture essential details. Developed in 2016, MIAPPE received a major update in 2019 (version 1.1), with a focus on improving data reusability. [https://doi.org/10.1111/nph.16544] Work is now underway on the next version, MIAPPE v2.0, which is still in its early development phase.



## SSN/SOSA

SSN [https://www.w3.org/TR/vocab-ssn/] is an ontology for describing sensors, their observations, and the procedures involved, as well as the features and properties they measure. It includes SOSA, a lightweight core ontology that defines key elements such as sensors, observations, samples, and actuators. Together, SSN and SOSA are widely used for applications like satellite imagery and large-scale scientific monitoring.


## MIAFPE

While MIAPPE provides a strong framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.




## Sensors

http://www.w3.org/ns/sosa/Sensor

| Field # | MIAFPE | Desc | Ontology Ref |
| - | - | - | - |
| 1 | Observed Variable | list of study-IDs | |
| 2 | Sensor ID | just any identification of the sensor in use (e.g. inventory-number,  Serial Number, or a given unique name) |
| 3 | Sensor Type| |

## Future Implementation

- Algorithms and Models
- A tool to convert to JSON format with extended Information



# Literature

