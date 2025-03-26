import React, { useState } from "react";

const TextAnalyzer = () => {
  const [text, setText] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeText = () => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const characters = text.replace(/\s/g, "").length;
    const sentences = text.split(/[.!?]/).filter(Boolean).length;
    const vowels = (text.match(/[aeiouAEIOU]/g) || []).length;
    const consonants = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length;

    setAnalysis({
      words: words.length,
      characters: characters,
      sentences: sentences,
      vowels: vowels,
      consonants: consonants,
    });
  };

  return (
    <div>
      <h2>Text Analyzer</h2>
      <textarea rows="5" placeholder="Enter your text here..." value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={analyzeText}>Analyze</button>

      {analysis && (
        <div>
          <h3>Analysis Results</h3>
          <p>Words: {analysis.words}</p>
          <p>Characters (without spaces): {analysis.characters}</p>
          <p>Sentences: {analysis.sentences}</p>
          <p>Vowels: {analysis.vowels}</p>
          <p>Consonants: {analysis.consonants}</p>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;
