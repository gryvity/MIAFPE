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

- [HyPlant](#hyplant): This dataset consists of HyPlant FLUO at-sensor radiance measurements from different campaigns in the years 2018 - 2023, FLOX measurements corresponding to several campaigns and matching SFMNN and SFM SIF products.
- [BreedFACE](#breedface): The experimental data consist of the LIFT, PhenoCam, UAV, yield and environmental data.
- [Phenorob](#phenorob): 
- [CKA UAV](#cka-uav): A collection of RGB and Multispectral images and GCP captured with a Sony Alpha 7 (35 mm lens) and MicaSense Dual 10 channel multispectral camera mounted on DJI Matrice 600 Pro

## HyPlant

### Responsibility

    Buffat, Jim

### People

    Buffat, Jim (IBG-2)
    Rascher, Uwe (IBG-2)
    Rademske, Patrick (IBG-2)
    Siegmann, Bastian (IBG-2)
    Junker-Frohn, Laura (IBG-2)
    Emin, Dzhaner (IABG)

### Time

    2018-2023

### Location

    CKA:  Campus-Klein Altendorf, DE
    SEL:  Selhausen, DE
    WST:  Braccagni, IT
    NRS:  Braccagni, IT
    TR32: Juelich, DE
    HOE:  Hoelster, CH
    JIM:  Lindenberger Wald, DE
    INN:  (near) Buergewald, DE
    GLO:  Mollerusse, ES



### Data Location

    https://doi.org/10.26165/JUELICH-DATA/QKJKPW    


### Dataset Name

    HyData: HyPlant FLUO at-sensor radiance data packages and FLOX measurements for SIF retrieval method development from selected campaigns of the years 2018 - 2023

### Description

    This dataset consists of HyPlant FLUO at-sensor radiance measurements from different campaigns in the years 2018 - 2023, FLOX measurements corresponding to several campaigns and matching SFMNN and SFM SIF products.

### Dataset Text [EDIT]

Total Files: 3748
Total Size: 1817975698561 bytes (1.65 T)
Format Distribution: {'txt': 295, 'opt': 287, 'dat': 866, 'hdr': 1347, 'atm': 7, 'csv': 14, 'dbf': 15, 'prj': 15, 'qpj': 13, 'shp': 16, 'shx': 15, 'jpg': 1, 'cpg': 3, 'xlsx': 1, 'bil': 460, 'bsq': 393}


### Keywords

    Solar-Induced Fluorescence
    Spectral Fitting Methods
    Deep Learning
    Neural Netwoks
    Hyperspectral Sensors
    Remote Sesning
    SIF Retrieval

### Subject

    Agricultural Sciences
    Computer and Information Science
    Earth and Environmental Sciences

### Dataset Size

    1.65 TB (3748 files)    

### Dataset Publication

    isPublished: True
    identifier: doi:10.26165/JUELICH-DATA/QKJKPW
    url: https://doi.org/10.26165/JUELICH-DATA/QKJKPW
    PublicationDate: 2024-07-05
    DepositionDate: 2024-05-24
    Accessibilty: open

### Version

    1.0

### License

    CC-BY 4.0 - "Attribution" 


### Paper

    - hasRelatedPaper: True
    - paperIdentifief: doi:10.22541/essoar.172411876.66031071/v1
    - paperURL: https://doi.org/10.22541/essoar.172411876.66031071/v1

Cite as: Jim Buffat, Miguel Pato, Kevin Alonso, et al. A Multi-Layer Perceptron Approach for SIF Retrieval in the O2-A Absorption band from Hyperspectral Imagery of the HyPlant Airborne Sensor System. ESS Open Archive . August 20, 2024.

### Metadata Description


### Benchmark Candidate


### Comments

Candidate has interdisciplinary character between agricultural science, environmental science and computer and information science.




| FLUO: Year_Location_Altitude | FLOX Data | Notes |
|-|-|-|
| 2018_SEL_600 | Yes | iFLD and SFM values close to HyPlant overpasses for 12 Images |
| 2019_WST_1500 | Yes | https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO/01_data/02_FLOX/22-%20FlexSense-%20June%202019/01_data/ALL_INDEX_FLOX_JB-0103-ESA.csv |
| 2019_NRS_1500 | Yes | https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO/01_data/02_FLOX/22-%20FlexSense-%20June%202019/01_data/ALL_INDEX_FLOX_JB-0103-ESA.csv |
| 2019_SEL_0600 | - |  |
| 2019_TR32_1800  | - |  |
| 2020_CKA_0350 | Yes |  |
| 2020_CKA_0600 | Yes |  |
| 2021_CKA_0350 | Yes |  |
| 2021_HOE_0600 | - | |
| 2021_GLO_1150 | Ves | |
| 2022_HOE_0600 | - |  |
| 2022_CKA_0350 | Yes |  |
| 2022_INN_0600 | - |  |
| 2022_SEL_0600 | - |  |
| 2023_JIM_0600 | - |  |


## ARC-Structure

|- Studies
    |- Meta
> Might contain Metadata for all the studies
    |- 2018_SEL
    |- 2019_WST
    |- 2019_NRS
    |- 2019_SEL
    |- 2019_TR32
    |- 2020_CKA
    |- 2021_CKA
    |- 2021_HOE
    |- 2021_GLO
    |- 2022_HOE
    |- 2022_CKA
    |- 2022_INN
    |- 2022_SEL
    |- 2023_JIM
> Holds data about the experiment design. For now it is empty
|- Assays
    |- Meta
> Might contain Metadata for all the Assays
    |- FLUO
        |- 2018_SEL_600
        |- 2019_WST_1500
        |- 2019_NRS_1500
        |- 2019_SEL_0600
        |- 2019_TR32_1800
        |- 2020_CKA_0350
        |- 2020_CKA_0600
        |- 2021_CKA_0350
        |- 2021_HOE_0600
        |- 2021_GLO_1150
        |- 2022_HOE_0600
        |- 2022_CKA_0350
        |- 2022_INN_0600
        |- 2022_SEL_0600
        |- 2023_JIM_0600
> here all the data found in https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO/01_data/01_radiance/ is sorted into the respective folders
    |- FLOX
        |- 2018_SEL
        |- 2019_WST
        |- 2019_NRS
        |- 2020_CKA
        |- 2021_CKA
        |- 2021_GLO
        |- 2022_CKA
> here all the data found in https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO/01_data/02_FLOX/ is sorted into the respective folders
    |- DEM
        |- 2018_SEL_600
        |- 2019_WST_1500
        |- 2019_NRS_1500
        |- 2019_SEL_0600
        |- 2019_TR32_1800
        |- 2020_CKA_0350
        |- 2020_CKA_0600
        |- 2021_CKA_0350
        |- 2021_HOE_0600
        |- 2021_GLO_1150
        |- 2022_HOE_0600
        |- 2022_CKA_0350
        |- 2022_INN_0600
        |- 2022_SEL_0600
        |- 2023_JIM_0600
> here all the data found in https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO/01_data/03_DEMs/ is sorted
|- Runs
    |- SFM
        |- 2018_SEL_600
        |- 2019_WST_1500
        |- 2019_NRS_1500
        |- 2019_SEL_0600
        |- 2019_TR32_1800
        |- 2020_CKA_0350
        |- 2020_CKA_0600
        |- 2021_CKA_0350
        |- 2021_HOE_0600
        |- 2021_GLO_1150
        |- 2022_HOE_0600
        |- 2022_CKA_0350
        |- 2022_INN_0600
        |- 2022_SEL_0600
        |- 2023_JIM_0600
    |- SFMNN
        |- 2018_SEL_600
        |- 2019_WST_1500
        |- 2019_NRS_1500
        |- 2019_SEL_0600
        |- 2019_TR32_1800
        |- 2020_CKA_0350
        |- 2020_CKA_0600
        |- 2021_CKA_0350
        |- 2021_HOE_0600
        |- 2021_GLO_1150
        |- 2022_HOE_0600
        |- 2022_CKA_0350
        |- 2022_INN_0600
        |- 2022_SEL_0600
        |- 2023_JIM_0600
> here all data from the products are sorted into the folders        

## Sensors and Platforms

HyPlant imaging spectrometer consists of two sensor-modules:

- The DUAL module records hyperspectral data in the spectral range from 400-2500nm, which is useful in deriving biochemical and structural plant properties.

- The FLUO module acquires data in the red and near-infrared bands in the spectral range of 670-780nm with a distinctly higher spectral resolution and sampling interval. 

Hyperspectral imaging has the benefit of cost-efficient and non-destructive assessment of structural (e.g. leaf area index, biomass) or biochemical (e.g. pigment or water content) vegetation properties. [

    2. Jacquemoud, S.; Baret, F.; Andrieu, B.; Danson, F.; Jaggard, K. Extraction of vegetation biophysical parameters
by inversion of the PROSPECT + SAIL models on sugar beet canopy reflectance data. Application to TM
and AVIRIS sensor. Remote Sens. Environ. 1995, 52, 163–172. [CrossRef]
3. Vohland, M.; Jarmer, T. Estimating structural and biochemical parameters for grassland from
spectroradiometer data by radiative transfer modelling (PROSPECT+SAIL). Int. J. Remote Sens. 2008,
29, 191–209. [CrossRef]
4. Schlerf, M.; Atzberger, C. Inversion of a forest reflectance model to estimate structural canopy variables from
hyperspectral remote sensing data. Remote Sens. Environ. 2006, 100, 281–294. [CrossRef]
5. Siegmann, B.; Jarmer, T.; Beyer, F.; Ehlers, M. The potential of pansharpened EnMAP data for the assessment
of wheat LAI. Remote Sens. 2015, 7, 12737–12762. [CrossRef]

]



[
8. Alonso, L.; Gómez-Chova, L.; Vila-Francés, J.; Amorós-López, J.; Guanter, L.; Calpe, J.; Moreno, J. Sensitivity
analysis of the Fraunhofer Line Discrimination method for themeasurement of chlorophyll fluorescence
using a field spectroradiometer. In Proceedings of the 3rd International Workshop on Remote Sensing of
Vegetation Fluorescence, Florence, Italy, 7–9 February 2007.
9. Julitta, T.; Burkart, A.; Colombo, R.; Rossini, M.; Schickling, A.; Migliavacca, M.; Cogliati, S.; Wutzler, T.;
Rascher, U. Accurate measurements of fluorescence in the O2A and O2B band using the FloX spectroscopy
system—Results and prospect. In Proceedings of the Potsdam GHG Flux Workshop: From Photosystems to
Ecosystems, Potsdam, Germany, 24–26 October 2017.

]




**FLOX Systems:**
FLOX systems are used to measure top-of-canopy reflectance and solar-induced fluorescence (SIF) using high-performance spectrometers

The FLOX was developed by the IBG-2: Plant Sciences of the Jülich Research Center and the Remote Sensing of Environmental Dynamics Laboratory of the University Milano-Bicocca. In 2015, two members of the partners founded the new start-up company JB Hyperspectral http://jb-hyperspectral.com/wordpress/. The commercial versions of the FLOX Boxes are distributed by this young start-up company.
FLOX is measuring the sun-induced chlorophyll fluorescence (SIF) of plant canopies as a measure of plant photosynthetic capacity under natural light conditions. A QEPro spectrometer from Ocean Optics covering the Red/Near Infrared region (650 – 800 nm) measures chlorophyll fluorescence of plant canopies in the wavelength region of the two atmospheric oxygen absorption bands, O2B and O2A (689 nm and 760 nm, respectively), with a high spectral resolution. SIF of plant canopies can be constantly monitored by the comparison of sequential measurements of light reflected and emitted from the plant canopy using a downward fiberoptics and solar irradiance using an upward directed reference fiberoptics. The spectrometers are embedded in a temperature controlled housing to maintain a stable level of dark current of the spectrometers. An accurate automatic optimization of the measurement duration of both channels to prevailing light conditions is applied to maximize the signal-to-noise ratio and minimize acquisition time. Thereby, FLOX can be used to constantly monitor SIF under changing environmental conditions.

The Shoot group at IBG-2 currently operates 5 FLox systems, some of which are used as stationary systems to continuously record solar-induced fluorescence (SIF) and hyperspectral reflectance from selected study sites and which thus produce time-series of vegetation functioning over the season. Other FLOX systems ae integrated in sensor positioning platforms and are operated within various projects to measure SIF and vegetation reflectance across experimental field systems. One FLOX system ist currently being modified in cooperatin with the manufacturer to be mounted on a UAV platform to enable SIF measurements from low flying plattforms.

Additionally, we are operating 2 ROX systems, which are smaller versions consisting of only one spectrometer. The ROX systems measure canopy reflectance but cannot be used to retrieve solar-induced fluorescence. The ROX systems are used as small weight field spectrometers to record canopy and leaf reflectance.

FLOX and ROX can be combined with the leaf-clip FluoWAT, which is a custom made leaf clip to measure leaf-reflecance and transmittance as well as upwelling and down-welling solar induced fluorescence from single leaves in the field.


Problematic for downloading! Needs simple Solution.

Attached Files might help:

- [Structure of the Dataset in a txt file](metadata\HyPlant\allpath.txt)
- [Collection of Information about the Dataset with ARC labels in a csv](metadata\HyPlant\data_csv.csv)
- [Dataset information in json format](metadata\HyPlant\datafiles.json)

## BreedFACE

### Responsibility

    Oliver Knopf

### People

    Knopf, Oliver
    Castro Rivera, Antony Oswaldo
    Bendig, Juliane Viktoria
    Warstat, Kevin
    Pude, Ralf
    Poorter, Hendrik
    Rascher, Uwe
    Muller, Onno


### Time

    Start: 2020-11-10 ; End: 2021-08-04

### Location

    Campus Klein-Altendorf, Rheinbach, Germany.



### Data Location

    https://doi.org/10.26165/JUELICH-DATA/QJIY7C
    


### Dataset Name

    Experimental data: Field Phenotyping of Ten Wheat Cultivars under Elevated CO2 Shows Seasonal Differences in Chlorophyll Fluorescence, Plant Height and Vegetation Indice
    

### Description

    The experimental data consist of the LIFT, PhenoCam, UAV, yield and environmental data.
    

### Dataset Text [EDIT]

COMING SOON


### Keywords

    CO2, 
    FACE (Free-Air CO2 Enrichment)
    chlorophyll
    climate change
    fluorescence
    phenotyping
    senescence
    wheat
    

### Subject

    Agricultural Sciences


### Dataset Size

    3,246,290 bytes (compressed)
      

### Dataset Publication

    isPublished: True
    identifier: doi:10.26165/JUELICH-DATA/QJIY7C
    url: https://doi.org/10.26165/JUELICH-DATA/QJIY7C
    PublicationDate: 2023-12-11
    DepositionDate: 2023-11-26
    Accessibilty: Open

### Version

    1.0

### License

    CC0 - "Public Domain Dedication" 
    

### Paper

    - hasRelatedPaper: True
    - paperIdentifief: doi:10.3389/fpls.2023.1304751
    - paperURL: https://pubmed.ncbi.nlm.nih.gov/38259917/

Cite as: Knopf O, Castro A, Bendig J, Pude R, Kleist E, Poorter H, Rascher U, Muller O. Field phenotyping of ten wheat cultivars under elevated CO2 shows seasonal differences in chlorophyll fluorescence, plant height and vegetation indices. Front Plant Sci. 2024 Jan 8;14:1304751. doi: 10.3389/fpls.2023.1304751. PMID: 38259917; PMCID: PMC10800489.



### Metadata Description

NONE -> Needs to be synthetesised

### Benchmark Candidate


### Comments

METADATA within some files. Need to contact responsible person for furthre data.



## Phenorob

NOT PUBLISHED!

### Responsibility

    Kraemer, Julie

### People


### Time

    2021-2023

### Location

    CKA:  Campus-Klein Altendorf, DE

### Data Location



### Dataset Name

    
### Description

    

### Dataset Text



### Keywords


### Subject

    Agricultural Sciences

### Dataset Size

        

### Dataset Publication

    isPublished: False
    identifier: 
    url: 
    PublicationDate: 
    DepositionDate: 
    Accessibilty: 

### Version

    

### License

     


### Paper

    - hasRelatedPaper: 
    - paperIdentifief: 
    - paperURL: 

Cite as: 

### Metadata Description


### Benchmark Candidate


### Comments


## CKA UAV


NOT PUBLISHED!

### Responsibility

    Warstat, Kevin

### People


### Time

    2023-07-07

### Location

    CKA:  Campus-Klein Altendorf, DE

### Data Location



### Dataset Name

    
### Description

    

### Dataset Text



### Keywords


### Subject

    Agricultural Sciences

### Dataset Size

        

### Dataset Publication

    isPublished: False
    identifier: 
    url: 
    PublicationDate: 
    DepositionDate: 
    Accessibilty: 

### Version

    

### License

     


### Paper

    - hasRelatedPaper: 
    - paperIdentifief: 
    - paperURL: 

Cite as: 

### Metadata Description


### Benchmark Candidate


### Comments