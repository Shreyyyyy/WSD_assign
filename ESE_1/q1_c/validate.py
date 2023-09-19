import lxml.etree as ET

def validate_xml(canine.xml, canine.xsd):
    try:
        xml_schema = ET.XMLSchema(file=canine.xsd)
        xml_doc = ET.parse(canine.xml)
        xml_schema.assertValid(xml_doc)
        print("XML is valid against the schema.")
    except ET.DocumentInvalid as e:
        print("XML is not valid against the schema.")
        print(e) 

if __name__ == "__main__":
    validate_xml("canine.xml", "canine.xsd")

#For Transformation

import lxml.etree as ET

def transform_xml(canine.xml, canine.xslt):
    try:
        xml_doc = ET.parse(canine.xml)
        xslt = ET.parse(canine.xslt)
        transform = ET.XSLT(xslt)
        result = transform(xml_doc)
        print(ET.tostring(result, pretty_print=True).decode())
    except Exception as e:
        print("Error transforming XML:", e)

if __name__ == "__main__":
    transform_xml("canine.xml", "canine.xslt")
