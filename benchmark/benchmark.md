# [meta]data for non-invasive field phenotyping - a benchmark data collection

## Abstract



## 1 Introduction

Alterations in regional temperature and precipitation patterns, coupled with the increasing occurrence and intensity of extreme weather events driven by climate change, pose significant challenges to global crop production and food supply chains (Davis, 2021). Addressing these challenges requires a deep understanding of how plants respond structurally and functionally to changing environmental conditions. Field phenotyping, the study of plant traits under realistic environmental conditions, has emerged as a critical domain for generating insights into these responses.

Traditional field phenotyping data often include measurements such as yield, biomass, plant height, or leaf area. However, advancements in technology have expanded the scope of field phenotyping to include spectral-level data, enabling detailed insights into the physiological processes driving photosynthesis. Spectral sensors offer distinct advantages: they are non-destructive, scalable, and adaptable across spatial resolutions. For instance, hyperspectral imagery can be acquired using unmanned aerial vehicles (UAVs) to study individual plots, aircraft to monitor larger regions, and satellites to capture data at a national or even global scale.

The integration of technologies such as remote sensing, machine learning, and robotics has ushered field phenotyping into a new era of precision and scalability (Watt et al., 2020). However, these advancements come with substantial challenges in managing the increasing volume and complexity of data. The diversity of data formats, analytical approaches, and metadata requirements necessitates robust solutions to ensure that datasets remain accessible, interoperable, and reusable. Notably, field phenotyping metadata must incorporate detailed sensor information, a gap that existing metadata standards have yet to fully address.

To tackle these challenges, we have consolidated a collection of datasets as benchmark part of the FAIRagro Consortium initiative. FAIRagro aims to establish a comprehensive data infrastructure for agricultural research that adheres to the FAIR principles—Findable, Accessible, Interoperable, and Reusable (Wilkinson et al., 2016). These principles prioritize machine-actionable data formats to enhance the discovery, integration, and reuse of datasets across various applications.

Our benchmark synthesizes four diverse datasets enriched with detailed metadata to provide a holistic representation of the field phenotyping domain. This benchmark encompasses a wide range of temporal and spatial resolutions, technological methodologies, and research objectives. By addressing the challenges of data heterogeneity and complexity, this benchmark aims to advance the field by offering a comprehensive resource for research and application. In the following sections, we present the datasets and their potential to drive innovation in field phenotyping research.



- Wilkinson, M., Dumontier, M., Aalbersberg, I. et al. (2016) The FAIR Guiding Principles for scientific data management and stewardship. Sci Data 3, 160018. https://doi.org/10.1038/sdata.2016.18
- Hasegawa, T., Wakatsuki, H., Ju, H. et al. (2022) A global dataset for the projected impacts of climate change on four major crops. Sci Data 9, 58. https://doi.org/10.1038/s41597-022-01150-7
- Davis, K. F., Downs, S. & Gephart, J. A. (2021) Towards food supply chain resilience to environmental shocks. Nature Food 2, 54–65. https://doi.org/10.1038/s43016-020-00196-3
- Watt, M., Fiorani, F., Usadel, B., Rascher, U., Muller, O., & Schurr, U. (2020). Phenotyping: New Windows into the Plant for Breeders. Annual review of plant biology, 71, 689–712. https://doi.org/10.1146/annurev-arplant-042916-041124

## Dataset Description

### HyPlant



The dataset comprises solar-induced fluorescence (SIF) and associated radiance measurements collected between 2018 and 2023. It integrates data from the HyPlant airborne sensor system and the FLOX top-of-canopy reflectance systems, focusing on the retrieval of SIF and its relationship with plant photosynthetic activity. In addition to raw measurements, the dataset includes derived products generated using spectral fitting methods (SFM) and a neural network-based SFM model (SFMNN), facilitating advanced computational approaches to SIF retrieval.

The dataset was collected, processed, and curated by the following contributors:

- Buffat, Jim (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Rascher, Uwe (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Rademske, Patrick (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Siegmann, Bastian (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Junker-Frohn, Laura (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Emin, Dzhaner (IABG)

The dataset has a total size of 1.6 TB, comprising 3,748 files across 16 distinct file format types:

- txt (295 files): README and navigation files providing organizational context.
- csv (14 files): Fluorescence data collected using the FLOX system.
- xlsx (1 file): Metadata, structured based on the MIAPPE standard with additional sensor-related enhancements and modifications to observation properties.
- hdr (1,347 files): Header files describing the spatial and spectral properties of hyperspectral data.
- bil (460 files): Band-interleaved-by-line files, storing hyperspectral data with bands arranged line by line.
- bsq (393 files): Band-sequential files, storing hyperspectral data with bands organized sequentially.
- dat (866 files): Binary files containing raw spectral data.
- opt (287 files): Optical calibration files detailing specific sensor and acquisition parameters.
- atm (7 files): Atmospheric model files for correcting spectral data under varying conditions.
- dbf (15 files): Attribute data files linked to geographic shapefiles.
- shp (16 files): Geospatial vector data used for geographic information system (GIS) analyses.
- shx (15 files): Index files for fast access to spatial data within shapefiles.
- prj (15 files): Projection files defining the coordinate reference systems for spatial data.
- qpj (13 files): Extended projection files used for precise spatial references.
- cpg (3 files): Code page files defining character encoding for shapefiles.
- jpg (1 file): An image documenting the experimental procedure from the initial campaign.
The dataset is accessible through the following platforms:

Data files: https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO
Metadata: https://data.fz-juelich.de/dataset.xhtml?persistentId=doi:10.26165/JUELICH-DATA/QKJKPW, including an enhanced MIAPPE-based .xlsx metadata file.
ARC structure version: https://git.nfdi4plants.org/fairagro-dataplant-deepdive/HyPlant.
The dataset is published under the CC-BY 4.0 - "Attribution" license, enabling open access and reuse with proper citation.

### BreedFACE


### UAV Data Workflow


### PhenoRob



## Methodology


## Results



# Drafts SHORT



## 1 Introduction

Climate change, through shifts in temperature and precipitation patterns and more frequent extreme weather events, poses significant challenges to global crop production and food security (Davis, 2021). Understanding how plants respond to these changing conditions requires robust data and insights into both structural and functional traits of crops. Field phenotyping, which studies plant traits under realistic conditions, plays a critical role in addressing these challenges by leveraging advanced technologies such as spectral sensors, remote sensing, and machine learning. These advancements enable non-destructive, scalable measurements across spatial and temporal scales, providing insights into crop growth, photosynthetic processes, and yield potential.

However, the increasing complexity and volume of field phenotyping data demand solutions that address challenges in data standardization, integration, and metadata management. To meet this need, we present a benchmark dataset collection as part of the FAIRagro Consortium initiative. This benchmark adheres to FAIR principles—Findable, Accessible, Interoperable, and Reusable (Wilkinson et al., 2016)—and integrates diverse datasets enriched with detailed metadata. Spanning multiple temporal and spatial resolutions, sensor technologies, and research objectives, these datasets offer a comprehensive representation of the field phenotyping domain.

This benchmark aims to address data heterogeneity and support innovation in field phenotyping research by providing a valuable resource for understanding crop responses under dynamic environmental conditions. The following sections introduce the datasets and their contributions to advancing agricultural research.


---

# Data Description

## HyPlant

The dataset comprises solar-induced fluorescence (SIF) and associated radiance measurements collected between 2018 and 2023. It integrates data from the HyPlant airborne sensor system and the FLOX top-of-canopy reflectance systems, focusing on the retrieval of SIF and its relationship with plant photosynthetic activity. In addition to raw measurements, the dataset includes derived products generated using spectral fitting methods (SFM) and a neural network-based SFM model (SFMNN), facilitating advanced computational approaches to SIF retrieval.

The dataset was collected, processed, and curated by the following contributors:
- Buffat, Jim (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Rascher, Uwe (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Rademske, Patrick (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Siegmann, Bastian (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Junker-Frohn, Laura (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Emin, Dzhaner (IABG)

The dataset has a total size of 1.6 TB, comprising 3,748 files across 16 distinct file format types.
- Data files: [HyPlant Data](https://datapub.fz-juelich.de/plantsciences/HyData-HyPlant-FLUO)
- Metadata: [HyPlant Metadata](https://doi.org/10.26165/JUELICH-DATA/QKJKPW), including an enhanced MIAPPE-based .xlsx metadata file.
- ARC structure version: [ARC Structure](https://git.nfdi4plants.org/fairagro-dataplant-deepdive/HyPlant)

The dataset is published under the CC-BY 4.0 - "Attribution" license, enabling open access and reuse with proper citation.

---

## PhenoRob

The dataset, titled *Multi-scale field phenotyping of wheat-bean intercrops: Integrating spectral and agronomic datasets from a three-year trial*, was collected during a spring wheat–faba bean intercropping experiment conducted at the Campus-Klein Altendorf (CKA) field site from 2021 to 2023. The trials were implemented using organic farming practices in a completely randomized design, comparing intercropping systems of three spring wheat cultivars with two faba bean cultivars and their respective sole crop controls.

The dataset integrates a heterogenous collection of remote sensing and agronomic data, encompassing 6.3 GB across multiple file formats. Remote sensing parameters include high-resolution imagery, leaf and canopy reflectance, and both active and solar-induced fluorescence measurements, providing insights into vegetation performance and plant photosynthetic activity. Traditional agronomic measurements, such as biomass, leaf area, chlorophyll content, and grain yield, complement the remote sensing data to offer a comprehensive view of plant growth and productivity in intercropping systems.

The dataset was collected and managed by:
- Julie Kraemer (IBG-2)
- Bastian Siegmann (IBG-2)
- Kevin Warstatt (IBG-2)
- Patrick Rademske (IBG-2)
- Antony Oswaldo Castro Rivera (IBG-2)
- Michael Quarten (IBG-2)
- Ireneusz Kleppert (IBG-2)
- Uwe Rascher (IBG-2)
- Patrick Hostnik (University of Bonn)
- Magdalena Theissen (University of Bonn)
- Ralf Pude (University of Bonn)
- Thomas Döring (University of Bonn)

The dataset is openly accessible under the following storage and metadata repositories:
- Data storage: [PhenoRob Data](https://phenoroam.phenorob.de/geonetwork/srv/eng/catalog.search#/metadata/2388c9c0-7baa-4bf3-b258-b848143b2d0e)
- Metadata: [PhenoRob Metadata](https://data.fz-juelich.de/dataset.xhtml?persistentId=doi:10.26165/JUELICH-DATA/XWRNHR)

The dataset is published under the CC-BY 4.0 - "Attribution" license.

---

## UAV Campus Klein-Altendorf

The dataset consists of RGB and multispectral UAV measurements of the PhenoRob central experiment conducted at Campus Klein-Altendorf in 2023. It contains raw image data, products derived using the structure-from-motion method, and additional materials such as README files, ground control point coordinates, and processing reports. The data are divided into 13 individual flight days throughout the vegetative period, with each day containing all necessary data to reproduce the resulting models. Key products include a digital elevation model (DEM) derived from RGB data and two orthomosaics, one with reflectance and the other with radiance information.

The dataset was collected, processed, and curated by the following contributors:
- Warstat, Kevin (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Bendig, Juliane (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Pude, Ralf (University of Bonn)
- Rascher, Uwe (IBG-2: Plant Sciences, Forschungszentrum Jülich)

The dataset has a total size of approximately 309 GB.
- Data files: [UAV Data](https://datapub.fz-juelich.de/plantsciences/PhenoRob_UAV_Data_2023/)
- Metadata: [UAV Metadata](https://doi.org/10.26165/JUELICH-DATA/2BYDTH)

The dataset is published under the CC-BY 4.0 - "Attribution" license, enabling open access and reuse with proper citation.

---

## BreedFACE

The dataset contains results from an experiment conducted as part of the BigBaking project, in which 10 wheat species were analyzed under an artificially increased CO2 concentration. Measurements were carried out using advanced sensor systems, including the Light-Induced Fluorescence Transient (LIFT) device mounted on an autonomous platform (FieldSnake), as well as RGB and multispectral UAV data. Additional environmental sensor data are also included.

The dataset was collected, processed, and curated by the following contributors:
- Knopf, Oliver (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Castro Rivera, Antony Oswaldo (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Bendig, Juliane Viktoria (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Warstat, Kevin (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Pude, Ralf (University of Bonn)
- Poorter, Henrik (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Rascher, Uwe (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Muller, Onno (IBG-2: Plant Sciences, Forschungszentrum Jülich)
- Kleist, Einhard (IBG-2: Plant Sciences, Forschungszentrum Jülich)

The dataset has a total size of approximately 4.2 MB and includes 19 `.csv` and 8 `.xlsx` files.
- Data files and metadata: [BreedFACE Data and Metadata](https://doi.org/10.26165/JUELICH-DATA/QJIY7C)

The dataset is published under the CC0 - "Public Domain Dedication" license, enabling open access and reuse with proper citation.

## Benchmark Metadata

All Datasets are linked in on DOI: https://doi.org/10.26165/JUELICH-DATA/3F6OFJ

---

