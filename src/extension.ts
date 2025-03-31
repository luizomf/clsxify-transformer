import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "extension.clsxify",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor) return;

      const selection = editor.selection;
      const text = editor.document.getText(selection);

      const trimmed = text.replace(/^['"`]|['"`]|,$/g, "");
      const transformed = trimmed
        .replace(/\,/g, "")
        .split(/\s+/)
        .filter(Boolean)
        .map((str) => `'${str}'`)
        .join(", ");

      editor.edit((editBuilder) => {
        editBuilder.replace(selection, `${transformed}`);
      });
    }
  );

  context.subscriptions.push(disposable);
}
