// declare module 'dompurify';
// declare module 'd3';

declare module 'dompurify' {
    const DOMPurify: any;
    export default DOMPurify;
}

declare module 'd3' {
    const d3: any;
    export default d3;
}

const DOMPurify = require('dompurify');
const d3 = require('d3');