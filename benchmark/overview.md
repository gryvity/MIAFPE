# Benchmark Dataset Collection

Benchmark Dimension:

- Spatial Scale
- Temporal Scale
- Meassured Variable
- Method
- Feature Of Interest
- Utilized System
- Quality
- File Format


# List of Datasets

An ever growing collection of Datasets associated with Research at IBG-2 at Forschungszentrum Juelich. The Purpose of this File is to document the process of developing a benchmark dataset for the field phenotyping community. Each Dataset is Documented regarding a list of keywords (see [Legend](#legend)). Here Metadata about the Datasets Data or Metadata are collected which are essential in the context the Investigation terminology within the ISA abstract model, the Annotation Research Context or MIAPPE Investigation.

For the purpose of clarification a few of the keywords as part of the Dataset Information will be described in detail as follows:

- **Metadata Description:** The Metadata Description could be seen as an indenpendent Documentation about Metadata Provenance itself. It is sectioned into paragraphs. The first Paragraph  describes briefly in what form and content Matadata is provided by the original Author/the Repository, including urls if available. Beginning from the Second Paragraph onwards follows a description of synthesising metadata in order to achieve FAIR Principles and certain Metadata Standards.

- **Dataset Text:** A short text, which describes the Datasets content, so this does add up to the general Description, which does focus on the scientific Objective. The Dataset Text describes the size, the amount of data, the dataformat destribution, the dataset structure, name spacing, etc...

- **Benchmark Candidate:** Here s short assert is describing the reasoning if and why a certain dataset is selected as a candidate for the benchmark Dataset. The factors which are influencing can be the following:
    - Spatial Scale: ...
    - Temporal Scale: ...
    - Meassured Variable: ...
    - Method: ...
    - Feature Of interest: ...
    - Utilized System: Sensors, Platforms
    - Quality: ...
    - File Formats: ...


### Legend

    Responsibility:         object(Person)
    People:                 list[object(Person)]
    Time:                   datetime / range(datetime) / list[datetime]
    Location:               string / list[string] 
    Data location:          url
    Dataset Name:           string
    Description:            string
    Dataset Text:           string
    Keywords:               list[string]
    Subject:                list[string]
    Dataset Size:           tuple(float, object(Unit))
    Dataset Publication
    |   isPublished:        bool
    |   identifier:         object(ID)
    |   PublicationDate:    datetime
    |   depositionDate:     datetime
    |   accessibility:      string[open/private]
    Version:                string
    License:                string
    Paper
    |   hasRelatedPaper:    bool
    |   paperidentifier:    object(ID)
    |   paperURL:           url
    Metadata Description:   string
    Benchmark Candidate:    string
    Comments:               string

## Dataset Overview

- Jim's (HyPlant)
- Julie's (Different Methods compiled in one Dataset)
- Kevin's (UAV Data CKA)
- Oliver's (Breedface)

Eventually:
- Jana K's (Purpose for Machine Learning Tasks)


## Jims Dataset

### Responsibility

Buffat, Jim

### People

- Buffat, Jim (IBG-2)
- Rascher, Uwe (IBG-2)
- Rademske, Patrick (IBG-2)
- Siegmann, Bastian (IBG-2)
- Junker-Frohn, Laura (IBG-2)
- Emin, Dzhaner (IABG)

### Time

2018-2023

### Location



### Data Location

https://doi.org/10.26165/JUELICH-DATA/QKJKPW


### Dataset Name

### Description

### Dataset Text

Total Files: 3748
Total Size: 1817975698561 bytes (1.65 T)
Format Distribution: {'txt': 295, 'opt': 287, 'dat': 866, 'hdr': 1347, 'atm': 7, 'csv': 14, 'dbf': 15, 'prj': 15, 'qpj': 13, 'shp': 16, 'shx': 15, 'jpg': 1, 'cpg': 3, 'xlsx': 1, 'bil': 460, 'bsq': 393}
Label Distribution: {}

### Keywords

### Subject

### Dataset Size

### Dataset Publication

    - isPublished: True
    - identifier: doi:10.26165/JUELICH-DATA/QKJKPW
    - url: https://doi.org/10.26165/JUELICH-DATA/QKJKPW
    - PublicationDate: 2024-07-05
    - DepositionDate: 2024-05-24
    - Accessibilty: open

### Version

### License

### Paper

    - hasRelatedPaper:
    - paperIdentifief:
    - paperURL:

### Metadata Description


### Benchmark Candidate

### Comments