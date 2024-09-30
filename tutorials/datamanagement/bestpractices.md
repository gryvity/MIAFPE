### **Good Practice Guideline for Publishing Data in Field Phenotyping**

Publishing data is a vital step in making your research accessible, reusable, and visible to the broader scientific community. Proper data management not only ensures that your work is recognized, but it also allows others to build upon it, increasing its impact. Follow this comprehensive guide to ensure that your data is structured, understandable, and prepared for long-term accessibility.

#### 1. **Understand the Benefits of Publishing Your Data**
   Publishing data brings measurable benefits to both you and the scientific community:
   - **Visibility**: Your experiments gain recognition, and others can see the valuable work you’ve contributed.
   - **Collaboration**: Others may utilize your data to ask new scientific questions or analyze it from different perspectives using new methodologies.
   - **Contribution**: Your data becomes part of a larger body of work, advancing scientific knowledge and innovation.

#### 2. **Ensure Human-Readable and Machine-Readable Formats**
   Data should be easily interpreted by both humans and machines. This dual accessibility makes your data more versatile for different uses, from visual analysis to computational tasks. Here are key considerations:
   - **Human-Readable**: Attach clear, meaningful metadata and descriptions to provide context.
   - **Machine-Readable**: Use structured formats (such as CSV, JSON, XML) that machines can parse efficiently, ensuring reusability in automated systems.

#### 3. **Structure Your Data Meaningfully**
   A well-structured dataset is essential for ease of access and reuse:
   - **Hierarchical Organization**: Organize your files into folders and subfolders that represent logical relationships (e.g., by experiment, date, sensor type).
   - **Relational Data**: If your data refers to external databases or APIs, provide clear instructions on how to retrieve the external data, including API endpoints or query examples.
   - **Consistent Naming Conventions**: Use descriptive file names that include key information (e.g., experiment name, date, sensor type). For example, **“WheatPhenotype_June2022_LiDAR.hdr”** is far more informative than **“test01.hdr”**.

#### 4. **Label Variables Clearly**
   - When working with tabular data, ensure that all variables are named descriptively in column headers. For example, use **“Leaf_Area_Index”** instead of **“LAI”** if the acronym is not widely recognized.
   - Include units for numerical data where applicable (e.g., **Height_cm**, **Temperature_C**).

#### 5. **Describe Data Processing and Decisions**
   - **Document Processing Steps**: During data processing, you likely made decisions (e.g., how to handle missing data). These should be documented in detail. If missing values are represented by **“-99”** or **“NA”**, make sure this is clear to the end user.
   - **Data Provenance**: Keep track of the history of your data from raw files to polished datasets. This transparency helps future users understand how the data was transformed.

#### 6. **Attach Comprehensive Metadata**
   Metadata is critical for understanding the context of your data:
   - **Choose a Metadata Standard**: Depending on the domain, there are many standards available (e.g., MIAPPE for plant phenotyping, Dublin Core for general datasets). These standards guide you in describing important aspects like:
     - Experiment details.
     - Variables measured.
     - Sensors or equipment used.
   - **Metadata File**: Create a separate metadata file (e.g., in XML or JSON-LD format) that can be attached to your dataset. The metadata should describe the dataset structure, key variables, and methodology.

#### 7. **Avoid Proprietary File Formats**
   - **File Formats**: Use widely accepted, open formats whenever possible. Proprietary formats can be a barrier to reuse, as not everyone has access to licensed software.
     - For instance, prefer **CSV** or **JSON** over formats like **Excel (.xls)** or **MATLAB (.mat)** for tabular data.
   - **Document Software and Tools**: If specialized software was used, provide clear details, including the name, version, settings, and license. This ensures that others can reproduce or understand your processing pipeline.

#### 8. **Openly Communicate About Your Data**
   - **Engage with the Community**: Reach out to peers, collaborators, or data experts to discuss your data. They may provide insights on how to improve its structure, clarity, or relevance.
   - **Feedback Loop**: Sharing your datasets can lead to constructive feedback and discussions, improving the quality and usability of your data over time.

#### 9. **Ethical Considerations and Data Licensing**
   - **Data Ethics**: Ensure that your data does not violate ethical standards, especially when dealing with sensitive information.
   - **Data Licensing**: Choose an appropriate license for your data that specifies how others can use it. Open licenses such as **Creative Commons (CC BY)** or **Open Data Commons** are common choices, depending on your sharing goals.

#### 10. **Plan for Long-Term Data Stewardship**
   - **Repository Selection**: Choose a suitable data repository for publishing your data. Examples include **Zenodo**, **Figshare**, or domain-specific repositories like **Plant Phenotyping Repository**.
   - **DOIs and Citation**: Request a DOI (Digital Object Identifier) for your dataset. This provides a permanent link for others to cite your data, contributing to academic recognition.

