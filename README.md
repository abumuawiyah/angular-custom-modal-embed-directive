# angular-custom-modal-embed-directive
###anbootModalDialog

anboot is stands for <b>an</b>gular+<b>boot</b>strap.

######modal container directive

Modal container will have the modal header, footer and the container for modal body.
Modal body is the container for directive that will be embedded inside it.

<pre><code>
&lt;anboot-modal-dialog 
                     state="modal.state" 
                     content="modal.content"
                     instance="modal.instance"&gt;
&lt;/anboot-modal-dialog&gt;
</code></pre>

The anbootModalDialog have 3 arguments
- state ( visible / invisible : string )
- content ( directive name : string )
- instance ( data : object )

The anbootModalDialog listen to state property / flag to embedded the directive given inside the modal body

<pre><code>
link: function(scope, iElement, iAttrs){
          
          scope.$watch(
            function(scope) { return scope.vm.state; },
            function(newValue, oldValue) {
                if ( newValue !== oldValue && newValue === 'visible' ) {
                    var directive = $compile(util.tmpl('<div {directiveName} data="{data}"></div>',{
                        directiveName: scope.vm.content,
                        data: scope.vm.instance
                    }))(scope);
                    iElement.find('div[data-container="modalBody"]').html(directive);
                }
            }
          );
          
}
</code></pre>

######modal content directive

Tightly coupled with modal container

<pre><code>
require: '^anbootModalDialog'
</code></pre>

By doing this we be able to get the container scope especially important props like state & instance
