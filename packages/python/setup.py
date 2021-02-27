from setuptools import setup

with open("README.md", "r") as fh:
    long_description = fh.read()

setup(
    name='b3api',
    version='0.0.3',
    description='Uma biblioteca simples para consumir dados de ativos da bolsa de valores brasileira, B3.',
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/mariotaddeucci/b3api',
    keywords='B3 acoes stocks bolsa brasil api',
    author='Mario Taddeucci',
    author_email='mariotaddeucci@gmx.com',
    license='MIT',
    packages=['b3api'],
    zip_safe=False,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    install_requires=[
        "requests>=2.25.1"
    ]
)
