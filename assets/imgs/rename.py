import os
# import tkinter as tk
# from tkinter import filedialog


for i in os.listdir():
    print(i)

# def rename_files():
#     # Create Tkinter root window
#     root = tk.Tk()
#     root.withdraw()

#     # Prompt the user to select a directory
#     directory = filedialog.askdirectory(title="Select Directory")

#     # Check if a directory was selected
#     if directory:
#         # Get the list of files in the directory
#         files = os.listdir(directory)

#         # Create a Tkinter file selection window
#         file_selection = tk.Toplevel(root)
#         file_selection.title("File Selection")

#         # Create a listbox to display the files
#         listbox = tk.Listbox(file_selection, selectmode=tk.MULTIPLE)
#         listbox.pack(fill=tk.BOTH, expand=True)

#         # Insert the files into the listbox
#         for file in files:
#             listbox.insert(tk.END, file)

#         # Prompt the user to select the files for renaming
#         tk.messagebox.showinfo("File Selection", "Select files for renaming.")
#         selected_files = listbox.curselection()

#         # Check if files were selected
#         if selected_files:
#             # Get the common prefix for renaming
#             prefix = tk.simpledialog.askstring(
#                 "Rename Files", "Enter the common prefix for renaming:")

#             # Get the starting index for renaming
#             start_index = tk.simpledialog.askinteger(
#                 "Rename Files", "Enter the starting index for renaming:")

#             # Perform the renaming
#             for i, file_index in enumerate(selected_files):
#                 file = files[int(file_index)]
#                 # Construct the new file name
#                 new_name = f"{prefix}_{start_index + i}{os.path.splitext(file)[1]}"
#                 # Rename the file
#                 os.rename(os.path.join(directory, file),
#                           os.path.join(directory, new_name))

#             tk.messagebox.showinfo("Success", "Files renamed successfully!")
#         else:
#             tk.messagebox.showwarning(
#                 "No Files Selected", "No files were selected for renaming.")
#     else:
#         tk.messagebox.showwarning(
#             "Directory Not Selected", "No directory was selected.")

#     # Destroy the Tkinter windows
#     root.destroy()
#     file_selection.destroy()


# # Run the script
# rename_files()
