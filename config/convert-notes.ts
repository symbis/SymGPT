import * as fs from 'fs';
import * as path from 'path';

/**
 * Converts GitHub links in the text to Markdown format, and saves converted text to new file
 * - Converts PR links to [#pr-number](pr-link) format
 * - Converts user mentions to [@username](profile-link) format
 * - Gets file path from command line arguments
 */
function convertGitHubLinksToMarkdown(text: string): string {
  const prLinkRegex = /https:\/\/github\.com\/([^\/]+\/[^\/]+)\/pull\/(\d+)/g;
  let convertedText = text.replace(prLinkRegex, (match, repo, prNumber) => {
    return `[#${prNumber}](${match})`;
  });

  const userMentionRegex = /@([a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38})/g;
  convertedText = convertedText.replace(userMentionRegex, (match, username) => {
    return `[@${username}](https://github.com/${username})`;
  });

  return convertedText;
}

const inputFilePath = process.argv[2];

if (!inputFilePath) {
  console.error('Usage: ts-node script.ts <input-file>');
  process.exit(1);
}

try {
  const inputText = fs.readFileSync(inputFilePath, 'utf-8');
  const convertedText = convertGitHubLinksToMarkdown(inputText);
  
  const parsedPath = path.parse(inputFilePath);
  const outputFilePath = path.join(parsedPath.dir, `${parsedPath.name}_converted${parsedPath.ext}`);
  
  fs.writeFileSync(outputFilePath, convertedText, 'utf-8');
  
  console.log(`Converted file saved to: ${outputFilePath}`);
} catch (error) {
  console.error('Error processing file:', error);
  process.exit(1);
}