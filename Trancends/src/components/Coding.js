// import React, { useState, useEffect } from 'react';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/ace.js';
// import 'ace-builds/src-noconflict/mode-javascript.js'; // Include language mode
// import * as ESLint from 'eslint'
// const Coding = () => {
//   const [code, setCode] = useState(''); // State variable for code content
//   const [suggestions, setSuggestions] = useState([]);
//   const [activeSuggestionIndex,setActiveSuggestionIndex] = useState(-1); 
//   const editorRef = useRef(null);

//   useEffect(() => {
//     const editor = window.ace.edit("code-editor"); // Get reference to editor instance
//     editor.setTheme("ace/theme/monokai"); // Set theme (optional)
//     editor.setOptions({
//       enableBasicAutocompletion: true, // Enable basic autocompletion
//       enableLiveAutocompletion: true, // Enable live autocompletion
//       enableSnippets: true, // Enable code snippets (optional)
//     });
//     editor.session.setMode("ace/mode/javascript"); // Set language mode
//   }, []); // Run effect only once

//   const handleChange = (newCode) => {
//     setCode(newCode);

//     const editor = editorRef.current;
//     if(editor) {
//         const cursorPosition = editor.selection.getCursor();

//         triggerESLintAnalysis(newCode,cursorPosition)
//         .then((extractedSuggestions) => {
//             setSuggestions(extractedSuggestions)
//         })
//         .catch((error) => {
//             console.error('Error during ESLint analysis', error)
//         })
//     }
//   };
//   const triggerESLintAnalysis = async (code,cursorPosition) => {
//     try{
//     const analysisResults = await ESLint.analyzeText(code, {
//         rules: {
//             'no-undef': ['warn'], // Example rule to suggest existing variables
//             'react/jsx-no-undef': ['error', { allowNamedExports: true }],
//             'react/prop-types': ['warn'],
//             'import/no-unresolved': ['warn'],
//             'semi': ['error', 'always'],
//             'quotes': ['error', 'single'],
//             'no-console': ['warn', { allow: ['warn', 'error'] }],
//             'no-shadow': ['error'],
//           },
//     })
//     const extractedSuggestions = analysisResults.flatMap((result) =>
//       result.messages
//         .filter((message) => message.severity === 1) // Filter warnings only
//         .map((message) => message.suggestParts?.[0].label) // Extract suggestion label
//     );
//     setActiveSuggestionIndex(-1);
//     setSuggestions(extractedSuggestions);
//     }
//     catch (error) {
//         console.error('Error during ESLint analysis', error)
//     }
//   } 
//   const handleKeyDown = (event) => {
//     if (suggestions.length > 0 && ['ArrowDown','ArrowUp'].includes(event.key)){
//         const newIndex=Math.min(
//             Math.max(activeSuggestionIndex+(event.key==='ArrowDown'?1:-1),0),
//             suggestions.length-1
//         )
//         setActiveSuggestionIndex(newIndex);
//     }
//     else if(event.key==="Enter"&&activeSuggestionIndex>=0){
//         setCode(code.replace(/$/,suggestions[activeSuggestionIndex]))
//         setActiveSuggestionIndex(-1)
//   }

//   return (
//     <div id="code-editor">
//       <AceEditor
//         placeholder="Enter your code here..."
//         mode="javascript"
//         theme="monokai" // Match theme set in useEffect
//         onChange={handleChange}
//         name="code-editor"
//         value={code}
//         editorProps={{ $blockScrolling: true }}
//         onKeyDown={handleKeyDown} // Optional property for handling large content
//       />
//       {/* Display suggestions here based on suggestions state */}
//       {suggestions.length > 0 && (
//         <ul>
//         {suggestions.map((suggestion, index) => (
//           <li
//             key={suggestion}
//             className={index === activeSuggestionIndex ? 'active' : ''}
//             onClick={() => setCode(code.replace(/$/, suggestion))}
//           >
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//       )}
//     </div>
//   );
// };
// }

// export default Coding;
