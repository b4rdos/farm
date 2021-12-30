FROM python:3.9

WORKDIR /code
COPY ./Pipfile /code/Pipfile
COPY ./Pipfile.lock /code/Pipfile.lock

RUN pip install pipenv
RUN pipenv install --system

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
