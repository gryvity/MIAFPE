# [meta]data for non-invasive Field Phenotyping

***Author:** Lars Grygosch ([**IGB-2**](https://www.fz-juelich.de/en/ibg/ibg-2) Forschungszentrum Juelich)\
**Contact:** l.grygosch@fz-juelich.de\
**Project-Background:** [**FAIRagro**](https://fairagro.net/) - Task Area 1 - [Use Case 5](https://fairagro.net/mitmachen/unsere-use-cases/use-case-5/)\
**Project URL:** https://github.com/gryvity/MIAFPE/tree/main/MIAFPE \
**Disclaimer:** This Project is a living Document and is meant to provide transperence of my ongoing work. Please feel free to reach out to me with your thoughts, critic or questions. Also be aware this project is still under developement, therefore is missing some content*

***Metadata:** COMING SOON*

#### License    

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)


---

## Table of Content

- [Motivation](#motivation)
- [Project Overview](#project-overview)
- [How To...?](#how-to)
- [Use Case 5](#use-case-5)
    - [Abstract](#abstract)
    - [Fostering a Data Culture](#fostering-a-data-culture-within-the-field-phenotyping-community)
    - [Benchmark](#benchmark)
    - [Minimum Information about Field Phenotyping Experiments](#minimum-information-about-field-phenotyping-experiments)
        - [MIAPPE and SSN/SOSA](#miappe-and-ssnsosa)
        - [Linked Data](#linked-data)
- [Enhancing Findability](#enhancing-findability)
- [Literature](#literature)


## Motivation
Recent advancements in non-invasive sensor systems have revolutionized plant phenotyping field studies. Proximal sensing technologies along
with remote sensing from satellites, aircrafts, and UAVs, now enable non-destructive measurements at different scales under realistic
environmental conditions. These technologies, however, produce vast and complex datasets, making sophisticated data management strategies
critical for enhancing the findability, accessibility, interoperability, and reusability (FAIR) of data. To address this, we are developing a benchmark
dataset that exemplifies typical field phenotypic and remote sensing data, supported by templates and guidelines for effective data management.


## Project Overview

This is thought to be the global Hub of my project within the FAIRagro Use Case 5. Thus the progress to meet the milestones is documented here. I will try to give me best to keep this project nice and clean, but be aware you are visiting a construction site. That means there might be some mess for the time being.

The Idea (Content to be) of this Project is:
- Share and discuss good data practices and foster an inclusive data culture (see [tutorials](tutorials/)) with Texts, Data-Examples and Talks.
- A catalogue of Datasets from the Domain of Field Phenotyping as a Benchmark for that domain (see [benchmark](benchmark/)).
- A Metadata Standard with MIAPPE as core Standard. It is thought to extend the standard Checklist with Information about Sensors, Platforms, Algorithms and Models to include the minimal amount of information in order to archieve increased FAIRness (see [MIAFPE](MIAFPE/)).
- While the checklist of MIAPPE provides an easy approach for Metadata Collection, the Document itself in form of an Excel-Sheet lacks in Machine Readbility and does not serve the spirit of Linked Data. Therefore the Idea is in addition to the extended Checklist include a conversion to JSON-LD utilizing [PPEO](https://agroportal.lirmm.fr/ontologies/PPEO) and [SSN/SOSA](https://www.w3.org/TR/vocab-ssn/) as Ontologies. This part of the Porject is embedded within the the MIAFPE-Project (see [JSON-LD](MIAFPE\JSON_LD)).

Furthermore I will seize the opportunity to increase the visibility of Data. Within the [reference](references/) section I willprovide you with a list of references for papers and additionally a list of published data.

### Open Questions [!]

- Compatibility of ARC and MIAPPE in extend format?
- a MIAPPE turn away from xlsx?
- Is a converter from MIAPPE to Linked Data with the high flexibility in choice of Vocabulary needed?
- How to ensure FAIR data or at least how to increase FAIRness?
- Is the given Format of use for the differen [FAIRagro](https://fairagro.net/ueber-uns/unsere-task-areas/) Task Areas
- How to increase findability of data sets in field

## How To...?





## Use Case 5

[**FAIRagro Use Case 5**](https://fairagro.net/mitmachen/unsere-use-cases/use-case-5/) 


### Abstract

Recent advancements in non-invasive sensor systems have transformed field studies in plant phenotyping. Proximal sensing technologies like the Fluorescence box (FLOX) and the light-induced fluorescence transient (LIFT), along with remote sensing methods from satellites (FLEX), aircraft (HyPlant), or UAVs, allow for non-destructive measurements under realistic environmental conditions on different scales. The widespread use of these technologies, combined with the integration of automated systems and machine learning algorithms for data measurement and analysis, has led to a significant increase in both the volume and complexity of data. In response to this data surge, it is crucial to implement sophisticated data management strategies that enhance the findability, accessibility, interoperability, and reusability (FAIR) of data. These strategies are essential not only for enabling access by human researchers, breeders, and other stakeholders but also for improving machine readability and facilitating effective communication among automated systems. To accomplish this goal, we are developing a comprehensive benchmark dataset that showcases typical field phenotypic and remote sensing data. This initiative is supported by advancements in research data management, including templates for data organization. Additionally, we are committed to enhancing FAIRness by creating guidelines to educate researchers and data publishers on effective data documentation, structuring, and licensing practices. By establishing these standards and contributing to FAIRagro, we aim to significantly improve the reproducibility and utility of field phenotyping data for the entire community.



### Fostering a Data Culture within the Field Phenotyping Community

Here I hope to create a Catalogue of selected short tutorials, which could be utilized as fundament for workshops and as a source of reference when dealing with unfamiliar terms such as "ARC" or "Ontologies". The overall goal is to...

- understand the importance of FAIR data
- start to communicate and to act inclusive when talking about data
- providing workflows or strategies for polishing a good quality data publication


The Material carefully crafted for the Field Phenotyping Group

- **Data Management:** Lorem Ipsum...
- **MIAPPE:** Lorem Ipsum..
- **FAIR Principles:** ....

Links to Material of other NFDI-Groups



### Benchmark

Lorem Ipsum...


### Minimum Information about Field Phenotyping Experiments

[MIAFPE](MIAFPE\README.md)

#### MIAPPE and SSN/SOSA

#### Linked Data


## Enhancing Findability

## Literature

