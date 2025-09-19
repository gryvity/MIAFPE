# MIAFPE_Link-Transformer

While MIAPPE provides a community curated and established standard for metadata in phenotyping experiments, it focusses on the user friendliness with its simplistic design as a checklist but lacks the machine-actionable potential, due to its tabular structure. Furthermore, MIAPPE does seem to miss some aspects of high-throughput phenotyping experiments under field conditions, by not catching metadata related to sensors, platforms and software. 

In order to overcome this limitations we are developing a modified version of MIAPPE for field phenotyping experiments, without disrupting MIAPPE v1.1 basic structure, and transform it into a modifiable Meta-Data model, allowing to link it to existing ontologies and terminologies.

We are developing a tool in order to transform existing metadata into a Metadata-Object coorperating the idea of linked-data and ontologies. 

# Lose Draft for deployment
## Intra-Dataset-Linkages
- Define Classes, Individuals, Object-, Data- and Annotation Properties as templates
- Build on these templates and integrate MIAPPE terms
- Define an Ontology Entry-Point Strategy
- Build on the templates and create instances for SOSA terms
- Inject SOSA Model into the MIAPPE Model
- Transform Model into linked-json
- Deploy transformer on example metadata

## Inter-Dataset-Linkages
- Inveastigate existing entry-points between datasets



# Prefix

# baseURI: http://www.w3.org/ns/sosa/

@base <http://www.w3.org/ns/sosa/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix schema: <http://schema.org/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix vann: <http://purl.org/vocab/vann/> .
@prefix voaf: <http://purl.org/vocommons/voaf#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .


# JSON-LD Draft

