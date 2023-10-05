<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Employee Information</title>
            </head>
            <body>
                <h1>Employee Information</h1>
                <table border="1">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                    <xsl:apply-templates select="employees/employee"/>
                </table>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="employee">
        <tr>
            <td><xsl:value-of select="PersonalInformation/firstname"/></td>
            <td><xsl:value-of select="PersonalInformation/lastname"/></td>
            <td><xsl:value-of select="PersonalInformation/dateofbirth"/></td>
            <td><xsl:value-of select="PersonalInformation/gender"/></td>
            <td><xsl:value-of select="EmploymentInformation/position"/></td>
            <td><xsl:value-of select="EmploymentInformation/salary"/></td>
            <td><xsl:value-of select="contactinformation/email"/></td>
            <td><xsl:value-of select="contactinformation/phonenumber"/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
