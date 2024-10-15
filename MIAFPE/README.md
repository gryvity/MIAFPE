# Minimum Information about Field Phenotyping Experiments

## Motivation
While MIAPPE provides a strong framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.


Minimum Information about Field Phenotyping Experiments is going to extend the [MIAPPE](https://github.com/MIAPPE) Metadata standard with additional information from the Domain of Remote Sensing and Computer Science in order to be well suited for Field Phenotyping Experiments. 

Therefor MIAFPE just builds on the existing MIAPPE format as a core.


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




## Future Implementation

- Algorithms and Models
- A tool to convert to JSON format with extended Information