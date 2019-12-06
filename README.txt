Oxygen example
==============

We are trying to get our build system to work with the new Oxygen WebHelp
plug-in. We are using the new page tempaltes, and have added a call to
our requirejs module(s). Although we can access the jquery module, we
cannot access the jquery-ui module. (We are creating some modal dialogs
to show tables with syntax information for the users.)

I have factored out all extrnenous stuff on our end. We have assets that are
not in the oxygen-webhelp dirs od each document (we have quite a few docs, and
this allows us to update assets (css overrides, Javascript, etc.) without
hacving to rebuild the entire doc set.

Prerequisites
-------------

    1. Set up DITA-OT 3.3.1 on your system.
    2. Add Oxygen WebHelp 21.1 plugins.
    3. Make sure you have a license from OxygenXML.
    4. Run integrator for DITA-OT.
    5. Set some env variables:
       a. export DITA_DIR=/path/to/dita_ot-3.3.1
       b. export WEB_DOCS_ROOT=/path/to/httpd-docs-root

Building document
-----------------

    1. $ cd /path/to/oxygen-example

    2. $ $DITA_DIR/bin/dita \
            -Dwebhelp.publishing.template=template/oxygen/oxygen-tree.opt \
            --format=webhelp-responsive --input=src/oxygen_example.ditamap --temp=temp --output=out

    3. cp -r web $WEB_DOCS_ROOT

    4. cp -r out $WEB_DOCS_ROOT

    5. Open document in browser:

        URL: http://localhost/out
