import os
import time 

def clear():
  os.system('clear')

def read_words(filename):
    with open(filename, encoding = "utf-8") as words_file:
        words = []

        for line in words_file:
            words += line.split()
        return words


def start(filename, speed, index=0):
    l_words = read_words(filename)
    l_actual_words = l_words[index:]
    time_between_words = 60/speed
    for word in l_actual_words:
        print(word)
        time.sleep(time_between_words)
        clear()
