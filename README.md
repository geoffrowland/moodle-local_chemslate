local_chemslate
==============

Graphical Chemical Equation Editor Moodle plugin. Editor plugin require this plugin. 

This is a prototype. Do not use in production enviroment. The functionality will 
change in future versions, and bugs are expected.

Install in Moodle directory local/chemslate

This plugin assumes MathJax, together with the mhchem extension, is already included and configured in the Moodle installation.

e.g add the following to the Within HEAD text box in Site administration > Appearance > Additional HTML of your Moodle

<script type="text/x-mathjax-config">
MathJax.Hub.Config({
TeX: {extensions: ["mhchem.js"]},
});
</script>
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
