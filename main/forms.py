from django import forms
from django.utils.safestring import mark_safe
from .models import Tags


class QuestionForm(forms.Form):
    all_tags = Tags.objects.order_by('tag_name')

    question_details = forms.CharField(max_length=2000, label=mark_safe('Question'))
    question_answer = forms.CharField(max_length=2000, label=mark_safe('Answer'))


    def clean(self):
        cleaned_data = super(QuestionForm, self).clean()
        question_details = cleaned_data.get('question_details')
        question_answer = cleaned_data.get('question_answer')

        if not question_details and not question_answer:
            raise forms.ValidationError('You have to write something!')


class TagsForm(forms.Form):
    tag_name = forms.CharField(max_length=25)
    print(tag_name)

    def clean(self):
        cleaned_data = super(TagsForm, self).clean()
        tag_name = cleaned_data.get('tag_name')

        if not tag_name:
            raise forms.ValidationError('You have to write something!')



