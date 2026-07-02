import os
import re

src_dir = "src"
public_img_dir = "public/images"
src_img_dir = "src/components/images"

# 1. Gather all file contents in src/
used_strings = set()
for root, _, files in os.walk(src_dir):
    for f in files:
        if f.endswith(('.js', '.jsx', '.css', '.json')):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
                # Find anything that looks like a filename
                matches = re.findall(r'[a-zA-Z0-9_\-\s]+\.(?:jpg|png|svg|mp4|heic|JPG|jpeg|HEIC)', content)
                for m in matches:
                    used_strings.add(m.strip())

# 2. Check public/images/ and src/components/images/
def clean_dir(d):
    count = 0
    if not os.path.exists(d): return count
    for root, dirs, files in os.walk(d):
        for f in files:
            # Check if f is in used_strings
            if f not in used_strings:
                file_path = os.path.join(root, f)
                print(f"Removing unused file: {file_path}")
                os.remove(file_path)
                count += 1
    return count

c1 = clean_dir(public_img_dir)
c2 = clean_dir(src_img_dir)
print(f"Removed {c1 + c2} unused images!")
