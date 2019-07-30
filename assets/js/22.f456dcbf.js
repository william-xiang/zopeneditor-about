(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{182:function(e,t,s){"use strict";s.r(t);var a=s(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"submitting-jcl-to-compile-link-and-run-jobs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#submitting-jcl-to-compile-link-and-run-jobs","aria-hidden":"true"}},[e._v("#")]),e._v(" Submitting JCL to compile, link, and run jobs")]),e._v(" "),s("p",[e._v("After you complete coding changes, you can test your changes.  To test your changes, upload all the necessary files to z/OS with Zowe CLI by following these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("To ensure that you have a working set of files, switch your local workspace to the "),s("code",[e._v("tutorial-complete")]),e._v(" Git branch that has the final updated set of programs and support files through the branch icon at the lower left.")])]),e._v(" "),s("li",[s("p",[e._v("Allocate the data sets on z/OS. Sample JCL files such as  "),s("code",[e._v("ALLOCATE.jcl")]),e._v(" are provided to allocate the necessary files. Alternatively, you can use your own existing PDS, or create new data sets in the Data Sets view or with Zowe CLI commands.")]),e._v(" "),s("p",[e._v("Before you use a JCL file, adjust it for your user name with these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Click the JCL file to open it in the editor.")]),e._v(" "),s("p",[s("strong",[e._v("Note")]),e._v(": Language support for JCl is unavailable now. But JCL syntax highlighting is enabled.")])]),e._v(" "),s("li",[s("p",[e._v("Review the file. It creates data sets in the format "),s("code",[e._v("HLQ.SAMPLE.*")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Modify the value for the symbolic "),s("code",[e._v("HLQ")]),e._v(" to the high-level qualifier you want to use and save the file. For example, replace "),s("code",[e._v("TSOUSER")]),e._v(" with the wanted value.")])]),e._v(" "),s("li",[s("p",[e._v("Execute the JCL with one of the following methods:")]),e._v(" "),s("ul",[s("li",[e._v("Zowe CLI command:")])]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v(" zowe "),s("span",{attrs:{class:"token function"}},[e._v("jobs")]),e._v(" submit local-file "),s("span",{attrs:{class:"token string"}},[e._v('"JCL/ALLOCATE.jcl"')]),e._v("\n")])])]),s("ul",[s("li",[s("p",[e._v("The "),s("code",[e._v("Submit Job")]),e._v(" option in the Zowe Extension")]),e._v(" "),s("p",[e._v("Take ALLOCATE.jcl as an example. To execute the job, take the following steps:")]),e._v(" "),s("ol",[s("li",[e._v("Switch to Zowe Extension.")]),e._v(" "),s("li",[e._v("Click the "),s("code",[e._v("USER1.SAMPLE.JCL(ALLOCATE)")]),e._v(" data set member you created to open it in the editor.")]),e._v(" "),s("li",[e._v("Copy and paste the contents of JCL/ALLOCATE.jcl in the file tree into the PDS member, and save the member.")]),e._v(" "),s("li",[e._v("From the Zowe Extension view, right-click the "),s("code",[e._v("ALLOCATE")]),e._v(" member of "),s("code",[e._v("SAMPLE.JCL")]),e._v(", and select "),s("code",[e._v("Submit Job")]),e._v(".")])]),e._v(" "),s("p",[e._v("After you submit the job, a message box that shows the jcl was submitted and a job number in the lower right corner.")]),e._v(" "),s("p",[e._v("You can go to the "),s("code",[e._v("JOBS")]),e._v(" view in the Zowe Extension to see the return code of the job. If the job does not exist in "),s("code",[e._v("JOBS")]),e._v(" view, you might need to set the job owner to your USERID by right-clicking the "),s("code",[e._v("zoweCLI")]),e._v(" line and selecting "),s("code",[e._v("Set Owner")]),e._v(".")])])])]),e._v(" "),s("li",[s("p",[e._v("Verify the creation of these data sets using your user name by refreshing your data sets view. You might see the following lines:")]),e._v(" "),s("div",{staticClass:"language-ascii extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("HLQ.SAMPLE.COBOL\nHLQ.SAMPLE.COBCOPY\nHLQ.SAMPLE.OBJ\nHLQ.SAMPLE.LOAD\nHLQ.SAMPLE.CUSTFILE\nHLQ.SAMPLE.TRANFILE\nHLQ.SAMPLE.SYSDEBUG\n")])])])])])]),e._v(" "),s("li",[s("p",[e._v("After the data sets are created, upload the sample files to the appropriate data sets. Replace the user name with your name. Take COBOL as an example.")]),e._v(" "),s("p",[e._v("For COBOL and COPYBOOK PDS members, right-click the data set and select "),s("code",[e._v("Create New Member")]),e._v(" to create files in MVS data set. You need to create the members as follows:")]),e._v(" "),s("ul",[s("li",[e._v("Create "),s("code",[e._v("SAM1")]),e._v(" and "),s("code",[e._v("SAM2")]),e._v(" members to "),s("code",[e._v("USER1.SAMPLE.COBOL")]),e._v(".")]),e._v(" "),s("li",[e._v("Create "),s("code",[e._v("CUSTCOPY")]),e._v(", "),s("code",[e._v("SAM2PARM")]),e._v(", "),s("code",[e._v("TRANREC")]),e._v(" members to "),s("code",[e._v("USER1.SAMPLE.COBCOPY")]),e._v(".")]),e._v(" "),s("li",[e._v("Manually copy the contents of the local files in the editor and paste into the newly created Members of MVS data sets.")])]),e._v(" "),s("p",[s("strong",[e._v("Limitation")]),e._v(": Drag and drop support to upload files in MVS data sets from the local file system is unavailable now.")]),e._v(" "),s("p",[e._v("For sequential files, use these Zowe CLI upload commands:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v(" zowe files ul ftds "),s("span",{attrs:{class:"token string"}},[e._v('"RESOURCES/SAMPLE.CUSTFILE"')]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.CUSTFILE"')]),e._v("\n\n zowe files ul ftds "),s("span",{attrs:{class:"token string"}},[e._v('"RESOURCES/SAMPLE.TRANFILE"')]),e._v(" "),s("span",{attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.TRANFILE"')]),e._v("\n")])])]),s("p",[e._v("After uploading to the data sets, click the COBOL data set members to open them in the editor. You see that the extension recognizes files as COBOL based on the defined files.associations preferences. Based on those settings, the editor is now using COBOL syntax highlight and provides all the other language server features mentioned earlier. Making changes and saving writes back to the MVS data set member directly.")])]),e._v(" "),s("li",[s("p",[e._v("Before executing the "),s("code",[e._v("RUN.jcl")]),e._v(" that contains the COMPILE, LINK, and RUN steps for the program, modify the data set names again by following these steps:")]),e._v(" "),s("ol",[s("li",[e._v("Click "),s("code",[e._v("RUN.jcl")]),e._v(" in the File view to open it in the editor.")]),e._v(" "),s("li",[e._v("Perform the same modification to the "),s("code",[e._v("HLQ")]),e._v(" symbolic, replacing "),s("code",[e._v("TSOUSER")]),e._v(" with the same value used previously.")]),e._v(" "),s("li",[e._v("You might or might not need to modify the other symbolics depending on the compile and link libraries your host system uses.")]),e._v(" "),s("li",[e._v("You might or might not change the "),s("code",[e._v("SPACE1")]),e._v(" and "),s("code",[e._v("SPACE2")]),e._v(" symbolics, and save the file.")]),e._v(" "),s("li",[e._v("Submit the job with this Zowe CLI command:"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe "),s("span",{attrs:{class:"token function"}},[e._v("jobs")]),e._v(" submit local-file "),s("span",{attrs:{class:"token string"}},[e._v('"JCL/RUN.jcl"')]),e._v("\n")])])])]),e._v(" "),s("li",[e._v("Verify the completion of the job with Zowe JES Explorer or using this Zowe CLI command:"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v(" zowe "),s("span",{attrs:{class:"token function"}},[e._v("jobs")]),e._v(" "),s("span",{attrs:{class:"token function"}},[e._v("ls")]),e._v(" js\n")])])]),e._v("A response showing your job ID is displayed.")]),e._v(" "),s("li",[e._v("Check the job status with this command, replacing the job ID with yours:"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe "),s("span",{attrs:{class:"token function"}},[e._v("jobs")]),e._v(" view jsbj JOB03772\n")])])])]),e._v(" "),s("li",[e._v("Refresh the Remote Systems view to locate the data sets created by the "),s("code",[e._v("RUN.jcl")]),e._v(" file.")])]),e._v(" "),s("p",[e._v("If the job succeeded, you can examine the results directly from the data sets explorer. Click the "),s("code",[e._v("USER1.SAMPLE.CUSTOUT")]),e._v(" and "),s("code",[e._v("USER1.SAMPLE.CUSTRPT")]),e._v(" data set. They are opened in the editor as text files that you can inspect.")]),e._v(" "),s("p",[e._v("You can use Zowe CLI commands to download the files as well. Get the contents of "),s("code",[e._v("SAMPLE.CUSTOUT")]),e._v(" and "),s("code",[e._v("SAMPLE.CUSTRPT")]),e._v(" with the following commands using your user name:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("zowe files download ds "),s("span",{attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.CUSTOUT"')]),e._v("\nzowe files download ds "),s("span",{attrs:{class:"token string"}},[e._v('"USER1.SAMPLE.CUSTRPT"')]),e._v("\n")])])]),s("p",[e._v("These two downloaded files are now on the left in your editor and ready for review. You also can open these files directly from the Remote Systems explorer by double-clicking each file or dragging these files to the editor.")])])])])}],!1,null,null,null);t.default=o.exports}}]);