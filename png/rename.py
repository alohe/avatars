# rename .png files with a random 4digit string
import os
import random

for file in os.listdir():
    print(file)
    """ if file.endswith(".png"):
        os.rename(file, str(random.randint(1000,9999))+".png")
    """
