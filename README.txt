Oxygen example
==============

Prerequisites
-------------

    1. Set up DITA-OT 3.3.1 on your system.
    2. Add Oxygen WbHelp plugins.
    3. Run integrator for DITA-OT.
    4. Make sure you have a license from OxygenXML.
    
Building document
-----------------

    1. $ cd /path/to/oxygen-example
    
    2. $ $DITA_DIR/bin/dita \
            -Dwebhelp.publishing.template=template/oxygen/oxygen-tree.opt \
            --format=webhelp-responsive --input=src/oxygen_example.ditamap --temp=temp --output=out
