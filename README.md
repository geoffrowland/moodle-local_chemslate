local_chemslate
==============

Graphical chemical equation editor Moodle plugin. The TinyMCE ChemSlate chemical equation editor plugin requires this plugin.

This is a prototype. Do not use in production environment. The functionality will change in future versions, and bugs are expected.

Unzip and rename the moodle-local_chemslate directory to chemslate. Install this in Moodle directory local/ to give local/chemslate.

This plugin assumes MathJax and the mhchem extension are already included and configured in the Moodle installation.

e.g. add the following to the 'Within HEAD' text box in Site administration > Appearance > Additional HTML of your Moodle

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
 TeX: {extensions: ["mhchem.js"]},
});
</script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
