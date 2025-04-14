import os

to_replace = input("Substring to replace: ")
replacement = input("Replacement substring: ")
valid_path = False

while (valid_path == False):
    dir_path = input("Directory path folder of files to check: ")
    if os.path.isdir(dir_path):
        valid_path = True
    elif os.path.isfile(dir_path):
        print(f"'{dir_path}' is a file, not a directory (folder).")
    else:
        print(f"Directory '{dir_path}' does not exist.")

def renameFile (file_path, new_name):
    """
    Rename a file to a new name.
    
    Parameters:
    file_path (str): The path of the file to be renamed.
    new_name (str): The new name for the file.
    
    Returns:
    str: The new path of the renamed file.
    """
    
    # Get the directory of the original file
    directory = os.path.dirname(file_path)
    
    # Create the new file path
    new_file_path = os.path.join(directory, new_name)
    
    # Rename the file
    os.rename(file_path, new_file_path)
    
    return new_file_path

os.walk(dir_path)

# Get the list of files in the current directory
files = os.listdir(dir_path)
    
# Iterate through each file in the directory
for filename in files:
    # Check if the substring to replace is in the filename
        
    if (to_replace in filename):
        # get the new filename
        new_filename = filename.replace(to_replace, replacement)
            
        # rename the file
        renameFile(filename, new_filename)

        print(f"Successfully renamed {filename} to {new_filename}.")