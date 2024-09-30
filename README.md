# MIAFPE
Minimum Information about Field Phenotyping


## Abstract


## MIAPPE 1.1

MIAPPE is a metadata standard designed to ensure comprehensive documentation of phenotyping experiments, providing researchers with a structured checklist to capture essential details. Developed in 2016, MIAPPE received a major update in 2019 (version 1.1), with a focus on improving data reusability. [https://doi.org/10.1111/nph.16544]Work is now underway on the next version, MIAPPE v2.0, which is still in its early development phase.



## SSN/SOSA

SSN [https://www.w3.org/TR/vocab-ssn/] is an ontology for describing sensors, their observations, and the procedures involved, as well as the features and properties they measure. It includes SOSA, a lightweight core ontology that defines key elements such as sensors, observations, samples, and actuators. Together, SSN and SOSA are widely used for applications like satellite imagery and large-scale scientific monitoring.


## MIAFPE

While MIAPPE provides a strong framework for documenting plant phenotyping experiments, it currently lacks the capacity to include remote sensing data, a key component in modern large-scale phenotyping. By integrating SSN/SOSA, this prototype introduces Sensors and Platforms into the MIAPPE format, improving the documentation of non-invasive methods like drones and satellite imagery. Although machine learning models are not yet implemented, there is a plan for their inclusion in future versions to fully capture the complexity of automated phenotyping workflows.


## Future Implementation

- Algorithms and Models
- A tool to convert to JSON format with extended Information
