import pytest
from titlecase import title_case


def test_empty_string():
    assert title_case('') == ''

def test_lowercase_word():
    assert title_case('semaphore') == 'Semaphore'
    
def test_uppercase_word():
    assert title_case('CAMBRIDGE') == 'Cambridge'

def test_lowercase_sentence():
    assert title_case('hello, world!') == 'Hello, World!'

def test_mixed_sentence():
    assert title_case('ACTA non verba!') == 'Acta Non Verba!'

def test_raises_exception_on_non_string_arguments():
    with pytest.raises(TypeError):
        title_case(42)
