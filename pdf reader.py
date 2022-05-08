#install PyPDF2
#cmd: pip3 install PyPDF2

import PyPDF2

def convertpdf(origfilename):

    #create file object variable
    pdffileobj=open(origfilename,'rb')
 
    #create reader variable that will read the pdffileobj
    pdfreader=PyPDF2.PdfFileReader(pdffileobj)
 
    #This will store the number of pages of this pdf file
    x=pdfreader.numPages
 
    #create a variable that will select the selected number of pages
    pageobj=pdfreader.getPage(x+1)
 
    #create text variable which will store all text datafrom pdf file
    text=pageobj.extractText()
 
    #save the extracted data from pdf to a txt file
    file1=open(r"C:\Users\Alexander Gong\Documents\Local\txtfile\%s.txt" %origfilename,"a")
    file1.writelines(text)