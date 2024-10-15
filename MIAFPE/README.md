# Minimum Information about Field Phenotyping Experiments

Minimum Information about Field Phenotyping Experiments is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. 

Therefor MIAFPE just builds on the existing MIAPPE format as a core.


#### Update notes

##### MIAFPE
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