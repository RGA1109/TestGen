import datetime
import random
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.db.models import Max

from django.http import HttpResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.shortcuts import reverse

from .models import Tags
from .models import Tests
from .models import TestToQuestion
from .models import Questions
from .models import QuestionsToTags

from .forms import QuestionForm
from .forms import TagsForm
from django.contrib.auth import authenticate

from fpdf import FPDF

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)


def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # form.save()
            # log user in
            print('should be saved')
            # return redirect(reverse('index'))
            return redirect(request, 'main/index.html')
    else:
        form = UserCreationForm()
    return render(request, 'main/signup.html', {'form': form})


def index(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if form.is_valid():
            if user is not None:
                return redirect(reverse('creatingquestion'))
    else:
        form = AuthenticationForm()
    return render(request, 'main/index.html', {'form': form})


def homescreen(request):
    return render(request, 'main/home.html')


def creatingquestion(request):
    all_questions = Questions.objects.order_by('question_id')
    all_tags = Tags.objects.order_by('tag_id')
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            obj = Questions()
            obj.question_id = all_questions[len(all_questions)-1].get_question_id() + 1
            obj.question_details = form.cleaned_data['question_details']
            obj.question_answer = form.cleaned_data['question_answer']
            obj.question_tags = None
            obj.time_questions_used = 0
            obj.tests_id = None
            obj.save()
    else:
        form = QuestionForm()

    context = {
        'all_question': all_questions,
        'form': form,
    }

    return render(request, 'main/creatingquestion.html', context)


def generatingtests(request):
    ValidQuesitons = []

    # Looking at checkboxes and then number of questions:
    if request.POST.get('True') == True:
        questions = request.POST.get('TrueNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('True/False')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)

    if request.POST.get('MultipleChoice') == True:
        questions = request.POST.get('MultipleChoiceNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('MultipleChoice')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)

    if request.POST.get('Mathcing') == True:
        questions = request.POST.get('MatchingNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('Matching')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)

    if request.POST.get('FillB') == True:
        questions = request.POST.get('FillBNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('FillB')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)

    if request.POST.get('ShortEssay') == True:
        questions = request.POST.get('ShortEssayNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('ShortEssay')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)

    if request.POST.get('FillF') == True:
        questions = request.POST.get('FillFNumber')
        QuesitonObjects = QuestionsToTags.objects.filter('FillF')
        if len(QuesitonObjects) >= questions:
            looping = questions

            while looping > 0:
                ValidQuesitons.append(QuesitonObjects[random.randint(0, questions)])
                looping -= 1
        else:
            ValidQuesitons.append(QuesitonObjects)



    # creation of test
    Test = Tests.objects
    if request.POST.get('Year'):
        year = request.POST.get('Year')
    else:
        year = datetime.datetime.now().year
        print(year)

    if request.POST.get('Exam'):
        number = request.POST.get('Exam')
    else:
        number = 1
    TestObj = Tests(
        test_id=1,
        test_year=year,
        number_of_students=0,
        students_taken=0,
        grade_average=0,
        lowest_score=0,
        highest_score=0,
        grades=0,
        test_date=datetime.datetime.now(),
        test_number=number,
    )
    TestObj.save()



    return render(request, 'main/generatingtests.html')


def extract_information(request):

    all_questions = Questions.objects.order_by('question_id')
    request.get

    pdf = FPDF()
    pdf.add_page()
    pdf.set_font("Arial", size=14)
    pdf.cell(200, 10, txt="This works", ln=1, align="C")
    pdf.output("simple_demo.pdf")

    return render(request, 'main/generatingtests.html')


def questionlibarary(request):
    all_questions = Questions.objects.order_by('question_id')
    questionTag = TestToQuestion.objects

    context = {
        'all_questions': all_questions,
        'question_tags': questionTag,
    }
    return render(request, 'main/questionlibarary.html', context)


def tagcreator(request):
    # TODO make it so repeat tags cannot be entered into the database
    all_tags = Tags.objects.order_by('tag_id')
    top = Tags.objects.annotate(Max('times_used')).order_by('-times_used')[:10]

    current_tags = []
    form = TagsForm(request.POST)

    for tag in all_tags:
        current_tags.append(tag.tag_name.lower())

    if request.method == 'POST':
        if form.is_valid() and form.cleaned_data['tag_name'].lower() not in current_tags:
            obj = Tags()
            obj.tag_id = all_tags[len(all_tags)-1].get_tag_id() + 1
            obj.times_used = 0
            obj.tag_name = form.cleaned_data['tag_name']
            obj.question_id = None
            obj.tests_id = None
            obj.user_id = None
            obj.save()

        else:
            form = TagsForm()

    else:
        form = TagsForm()

    context = {
        'all_tags': all_tags,
        'top': top,
        'form': form,
    }

    return render(request, 'main/tagcreator.html', context)


def tag_delete(request):
    all_tags = Tags.objects.order_by('tag_id')
    current_tags = []
    form = TagsForm(request.POST)

    id = request.POST.get('id')
    Tags.objects.filter(tag_name=id).delete()



    for tag in all_tags:
        current_tags.append(tag.tag_name.lower())

    context = {
        'all_tags': all_tags,
        'form': form,
    }

    return redirect("tagcreator")


def testlibarary(request):
    return render(request, 'main/testlibarary.html')


