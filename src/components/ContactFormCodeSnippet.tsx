export default function ContactFormCodeSnippet() {
  const highlightJSX = (code: string) => {
    const lines = code.split("\n");

    return lines.map((line, lineIndex) => {
      // Process each character
      let segments: Array<{ text: string; color: string; start: number }> = [];

      // Detect and color tags
      const tagRegex = /(<\/?)(\w+)/g;
      let match;
      while ((match = tagRegex.exec(line)) !== null) {
        segments.push({ text: match[1], color: "#808080", start: match.index });
        segments.push({
          text: match[2],
          color: "#A0826D",
          start: match.index + match[1].length,
        });
      }

      // Detect and color attributes
      const attrRegex = /(\w+)(=)(?=")/g;
      while ((match = attrRegex.exec(line)) !== null) {
        segments.push({ text: match[1], color: "#E06C75", start: match.index });
        segments.push({
          text: match[2],
          color: "#E06C75",
          start: match.index + match[1].length,
        });
      }

      // Detect and color strings
      const stringRegex = /"([^"]*)"/g;
      while ((match = stringRegex.exec(line)) !== null) {
        segments.push({ text: match[0], color: "#CE9178", start: match.index });
      }

      // Detect and color curly braces
      const curlyRegex = /\{[^}]*\}/g;
      while ((match = curlyRegex.exec(line)) !== null) {
        segments.push({ text: match[0], color: "#DCDCAA", start: match.index });
      }

      // Sort segments by start position
      segments.sort((a, b) => a.start - b.start);

      // Build the highlighted line
      const highlighted: React.ReactElement[] = [];
      let lastIndex = 0;

      for (const segment of segments) {
        // Add any text before this segment
        if (segment.start > lastIndex) {
          highlighted.push(
            <span key={`plain-${lastIndex}`} style={{ color: "#D4D4D4" }}>
              {line.substring(lastIndex, segment.start)}
            </span>
          );
        }

        // Add the colored segment
        highlighted.push(
          <span
            key={`colored-${segment.start}`}
            style={{ color: segment.color }}
          >
            {segment.text}
          </span>
        );

        lastIndex = segment.start + segment.text.length;
      }

      // Add any remaining text
      if (lastIndex < line.length) {
        highlighted.push(
          <span key={`plain-${lastIndex}`} style={{ color: "#D4D4D4" }}>
            {line.substring(lastIndex)}
          </span>
        );
      }

      return (
        <div key={lineIndex} className="flex">
          <span
            className="text-gray-500 select-none mr-4 text-right"
            style={{ minWidth: "2rem", color: "#858585" }}
          >
            {lineIndex + 1}
          </span>
          <span className="flex-1">
            {highlighted.length > 0 ? (
              highlighted
            ) : (
              <span style={{ color: "#D4D4D4" }}>{line}</span>
            )}
          </span>
        </div>
      );
    });
  };

  const code = `<form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4">
  <div className="mb-4">
    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
      Name
    </label>
    <input
      type="text"
      id="name" 
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009dee]"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
      Email Address
    </label>
    <input
      type="email"
      id="email"
      name="email" 
      value={formData.email}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009dee]"
      required
    />
  </div>

  <div className="mb-4">
    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
      Subject
    </label>
    <input
      type="text"
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009dee]"
      required
    />
  </div>

  <div className="mb-6">
    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#009dee]"
      required
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full px-6 py-3 bg-[#009dee] border border-[#0089d4] text-white font-medium rounded-lg hover:bg-[#008ada] transition-colors"
  >
    Send Message
  </button>
</form>`;

  return (
    <div className="relative w-full h-full max-w-4xl">
      <pre className="p-4 text-xss md:text-xs font-mono overflow-hidden h-full">
        <code>{highlightJSX(code)}</code>
      </pre>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-200 to-transparent"></div>
    </div>
  );
}
