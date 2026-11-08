from pathlib import Path

import fitz


source = Path("attached_assets/Guia_ECOE_Neurologia_1794099305456.pdf")
destination = Path(".agents/outputs/Guia_ECOE_Neurologia_extracted.txt")

document = fitz.open(source)
pages = []
for page_number, page in enumerate(document, start=1):
    pages.append(f"\n\n===== PAGE {page_number} =====\n\n{page.get_text()}")

text = "".join(pages)
destination.write_text(text, encoding="utf-8")

print(f"Pages: {document.page_count}")
print(f"Extracted characters: {len(text)}")
print(f"Output: {destination}")
