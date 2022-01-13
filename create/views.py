
from django.shortcuts import render

#
# photo = askopenfile()
# img = cv2.imread(photo.name)

def create(request):

    return render(request, 'create/create.html')


