from django.db import models


class User(models.Model):
    user_id = models.IntegerField(primary_key=True)
    user_first_name = models.CharField(max_length=40)
    user_last_name = models.CharField(max_length=40)
    user_password = models.CharField(max_length=60)

    def get_name(self):
        return self.user_first_name + self.user_last_name

    def get_first_name(self):
        return self.user_first_name

    def get_last_name(self):
        return self.user_last_name

    def get_user_id(self):
        return self.user_id


class Tests(models.Model):
    test_id = models.IntegerField(primary_key=True)
    test_year = models.IntegerField()
    number_of_students = models.IntegerField()
    students_taken = models.IntegerField()
    grade_average = models.DecimalField(decimal_places=2, max_digits=5)
    lowest_score = models.DecimalField(decimal_places=2, max_digits=5)
    highest_score = models.DecimalField(decimal_places=2, max_digits=5)
    grades = models.IntegerField()
    test_date = models.DateField()
    test_number = models.IntegerField()

    def get_high_score(self):
        return self.highest_score

    def get_low_score(self):
        return self.lowest_score

    def get_grade_average(self):
        return self.grade_average

    def get_student_taken(self):
        return self.students_taken

    def get_number_of_students(self):
        return self.number_of_students


class Questions(models.Model):
    question_id = models.IntegerField(primary_key=True)
    question_details = models.CharField(max_length=2000)
    question_answer = models.CharField(max_length=2000)
    question_tags = models.CharField(max_length=3000)
    time_questions_used = models.IntegerField()

    def get_question_id(self):
        return self.question_id

    def get_question_details(self):
        return self.question_details

    def get_question_answer(self):
        return self.question_answer

    def get_tags(self):
        return self.question_tags

    def get_times_used(self):
        return self.time_questions_used


class TestToQuestion(models.Model):
    TtoQ_id = models.IntegerField(primary_key=True)
    question_id = models.ForeignKey(Questions, null=True, on_delete=models.SET_NULL)
    tests_id = models.ForeignKey(Tests, null=True, on_delete=models.SET_NULL)


class Tags(models.Model):
    tests_id = models.ForeignKey(
        Tests,
        null=True,
        on_delete=models.SET_NULL
    )
    user_id = models.ForeignKey(
        User,
        null=True,
        on_delete=models.SET_NULL
    )
    tag_id = models.IntegerField()
    times_used = models.IntegerField()
    tag_name = models.CharField(max_length=25)

    def get_tag(self):
        return self.tag_name

    def get_tag_id(self):
        return self.tag_id

    def get_times_used(self):
        return self.times_used


class QuestionsToTags(models.Model):
    QtoT_id = models.IntegerField(primary_key=True)
    question_id = models.ForeignKey(Questions, null=True, on_delete=models.SET_NULL)
    tag_id = models.ForeignKey(Tags, null=True, on_delete=models.SET_NULL)


class Country(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class City(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name

class Person(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField(null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True)
    city = models.ForeignKey(City, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name






