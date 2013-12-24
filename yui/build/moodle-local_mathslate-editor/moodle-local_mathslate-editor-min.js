YUI.add("moodle-local_mathslate-editor",function(e,t){M.local_mathslate=M.local_mathslate||{},M.local_mathslate.Editor=function(t,n){function u(e){o.insertMath&&o.insertMath(e)}function d(){p.tools.forEach(function(t){var n=new e.DD.Drag({node:"#"+t.id});n.set("data",t.json),n.on("drag:end",function(){this.get("node").setStyle("top","0"),this.get("node").setStyle("left","0")})})}var r=e.guid(),i=e.guid();this.node=e.one(t),this.node.appendChild(e.Node.create('<div id="'+r+'">')),this.node.appendChild(e.Node.create('<div id="'+i+'" class="mathslate-workspace">'));var s=new M.local_mathslate.MathJaxEditor("#"+i);this.insertMath=null;var o=this,a=this.node.appendChild(e.Node.create("<button>Clear</button>"));a.on("click",function(){s.clear()});var f=this.node.appendChild(e.Node.create("<button>Inline TeX</button>"));f.on("click",function(){u("\\("+s.output("tex")+"\\)")});var l=this.node.appendChild(e.Node.create("<button>Display TeX</button>"));l.on("click",function(){u("\\["+s.output("tex")+"\\]")});var c=this.node.appendChild(e.Node.create("<button>Insert HTML</button>"));c.on("click",function(){u(s.output("HTML"))});var h=this.node.appendChild(e.Node.create("<button>Insert MathML</button>"));h.on("click",function(){u(s.output("MathML"))});var p={tools:[],fillToolBox:function(t){function n(t){function n(t){Array.isArray(t[2])&&t[2].forEach(function(r){Array.isArray(r)?n(r):r==="[]"&&(newID=e.guid(),t[2][t[2].indexOf(r)]=["mn",{},"[]"])})}this.id=e.guid(),this.json=JSON.stringify(t),this.HTMLsnippet=[["span",{id:this.id},[["math",{},[t]]]]],n(t),p.tools.push(this)}var i={children:[]};t.forEach(function(t){var r=e.Node.create("<span></span>");t.tools.forEach(function(e){var t=new n(e);MathJax.HTML.addElement(r.getDOMNode(),"span",{},t.HTMLsnippet)}),i.children.push({label:t.label,content:r.getHTML()})});var s=new e.TabView(i);e.one("#"+r)&&s.render("#"+r)},getToolByID:function(e){var t;return this.tools.forEach(function(n){n.id&&n.id===e&&(t=n)}),t}};s.canvas.on("drop:hit",function(e){e.drag.get("data")&&s.addMath(e.drop.get("node").get("id"),e.drag.get("data"))}),e.on("io:success",function(t,n){p.tools.length===0&&(p.fillToolBox(e.JSON.parse(n.response)),MathJax.Hub.Queue(["Typeset",MathJax.Hub,r]),MathJax.Hub.Queue(d))}),n===undefined?e.io(M.local_mathslate.config):e.io(n)}},"@VERSION@",{requires:["dd-drag","dd-proxy","dd-drop","event","tabview","io-base","json","moodle-local_mathslate-mathjaxeditor"]});