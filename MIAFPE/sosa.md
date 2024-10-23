# SOSA

SOSA (Sensor, Observation, Sample and Actuator)



https://www.w3.org/ns/sosa/

https://www.w3.org/TR/vocab-ssn/#Features-of-Interest-and-Properties

## Classes

- sosa:ActuableProperty
- sosa:Actuation
- sosa:Actuator
- sosa:FeatureOfInterest
- sosa:ObservableProperty
- sosa:Observation
- sosa:Platform
- sosa:Procedure
- sosa:Result
- sosa:Sample
- sosa:Sampler
- sosaSampling
- sosa:Sensor

## Properties

- sosa:actsOnProperty
- sosa:madeByActuator
- sosa:hasFeatureOfInterest
- sosa:hasResult
- sosa:hasSample
- sosa:hosts
- sosa:isActedOnBy
- sosa:isFeatureOfInterestOf
- sosa:isHostedBy
- sosa:isObservedBy
- sosa:isResultOf
- sosa:isSampleOf
- sosa:madeActuation
- sosa:madeBySampler
- sosa:madeBySensor
- sosa:madeObservation
- sosa:madeSampling
- sosa:observedProperty
- sosa:observes
- sosa:phenomenonTime
- sosa:usedProcedure

## Classes and Their Properties


### sosa:Observation

class 

![](https://www.w3.org/TR/vocab-ssn/images/SSN-Observation.png)

    sosa:Observation a owl:Class ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:madeBySensor ; owl:cardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:madeBySensor ; owl:allValuesFrom sosa:Sensor ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:usedProcedure ; owl:allValuesFrom sosa:Procedure ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:hasFeatureOfInterest ; owl:cardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:hasFeatureOfInterest ; owl:allValuesFrom sosa:FeatureOfInterest ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:observedProperty ; owl:cardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:observedProperty ; owl:allValuesFrom sosa:ObservableProperty ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty ssn:wasOriginatedBy ; owl:cardinality "1"^^xsd:nonNegativeInteger] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty ssn:wasOriginatedBy ; owl:allValuesFrom ssn:Stimulus ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:phenomenonTime ; owl:cardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:hasResult ; owl:minCardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:hasResult ; owl:allValuesFrom sosa:Result ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:resultTime ; owl:cardinality "1"^^xsd:nonNegativeInteger ] ;
      rdfs:isDefinedBy sosa: .


### sosa:FeatureOfInterest

class

![](https://www.w3.org/TR/vocab-ssn/images/SSN-Features.png)

    rdfs:label "Feature Of Interest"

    sosa:FeatureOfInterest
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty ssn:hasProperty ; owl:minCardinality "1"^^xsd:nonNegativeInteger ] ; 
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty ssn:hasProperty ; owl:allValuesFrom ssn:Property ]  ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:hasSample ; owl:allValuesFrom sosa:Sample ]  ;
      rdfs:isDefinedBy sosa: .


DESC: "The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling."

EX: When measuring the height of a tree, the height is the observed ObservableProperty, 20m may be the Result of the Observation, and the tree is the FeatureOfInterest. A window is a FeatureOfInterest for an automatic window control Actuator.

### ssn:Property

class

"A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity."

    ssn:Property a owl:Class ;
      rdfs:label "Property"@en ;
      skos:definition "A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity."@en ;
      rdfs:comment "A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity."@en ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty ssn:isPropertyOf ; owl:allValuesFrom sosa:FeatureOfInterest ]  ;
      rdfs:isDefinedBy ssn: .

### sosa:observedProperty

class

    sosa:ObservableProperty 
      rdfs:subClassOf ssn:Property ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:isObservedBy ; owl:allValuesFrom sosa:Sensor ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty [ owl:inverseOf sosa:observedProperty ] ; owl:allValuesFrom sosa:Observation ] ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty [ owl:inverseOf ssn:isProxyFor ] ; owl:allValuesFrom ssn:Stimulus ] ;
      rdfs:isDefinedBy sosa: .

### sosa:ActuableProperty

class

    sosa:ActuatableProperty
      rdfs:subClassOf ssn:Property ;
      rdfs:subClassOf [ a owl:Restriction ; owl:onProperty sosa:isActedOnBy ; owl:allValuesFrom sosa:Actuation ] ;
      rdfs:isDefinedBy sosa: .

  

#### ssn:hasProperty

ObjectProperty
  
    "Relation between an entity and a Property of that entity."

#### ssn:isPropertyOf

ObjectProperty

    "Relation between a Property and the entity it belongs to."

  



## Examples
https://www.w3.org/TR/vocab-ssn/integrated/examples/tree-height.ttl

```ttl


@prefix rdf:  <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix sosa: <http://www.w3.org/ns/sosa/> .
@prefix ssn: <http://www.w3.org/ns/ssn/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .
@prefix qudt-1-1: <http://qudt.org/1.1/schema/qudt#> .
@prefix qudt-unit-1-1: <http://qudt.org/1.1/vocab/unit#> .
@base <http://example.org/data/> .

# rangefinder #30 is a laser range finder sensor that was used 
# to observe the height of tree #124 and #125.

<rangefinder/30>        rdf:type           sosa:Sensor ;
  rdfs:label "rangefinder #30"@en ;
  rdfs:comment "rangefinder #30 is a laser range finder sensor."@en .

# rangefinder #30 made observation #1087 of the height of tree #124.

<observation/1087>  rdf:type               sosa:Observation ;
  rdfs:label "observation #1087"@en ;
  sosa:hasFeatureOfInterest  <tree/124> ;
  sosa:observedProperty  <tree/124/height> ;
  sosa:madeBySensor <rangefinder/30> ;
  sosa:hasResult [ 
    qudt-1-1:unit qudt-unit-1-1:Meter ; 
    qudt-1-1:numericalValue "15.3"^^xsd:double ] .

# using SSN, one can explicitly link a property and its feature of interest.
 


<tree/124>  rdf:type    sosa:FeatureOfInterest ;
  rdfs:label "tree #124"@en ;
  ssn:hasProperty <tree/124#height> .

<tree/124#height>  rdf:type    sosa:ObservableProperty , ssn:Property ;
  rdfs:label "the height of tree #124"@en ;
  ssn:isPropertyOf <tree/124> .

# rangefinder #30 made observation #1088 of the height of tree #125.

<observation/1088>  rdf:type               sosa:Observation ;
  rdfs:label "observation #1088"@en ;
  sosa:hasFeatureOfInterest  <tree/125> ;
  sosa:observedProperty  <tree/125/height> ;
  sosa:madeBySensor <rangefinder/30> ;
  sosa:hasResult [ 
    qudt-1-1:numericValue "23.0"^^xsd:double ;
    qudt-1-1:unit qudt-unit-1-1:Meter ] .

# using SSN, one can explicitly link a property and its feature of interest.
 
<tree/125>  rdf:type    sosa:FeatureOfInterest ;
  rdfs:label "tree #125"@en ;
  ssn:hasProperty <tree/125#height> .

<tree/125#height>  rdf:type    sosa:ObservableProperty , ssn:Property ;
  rdfs:label "the height of tree #125"@en ;
  ssn:isPropertyOf <tree/124> .
```

