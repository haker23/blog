#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

# ����Ƿ������Զ�������
# echo 'www.example.com' > CNAME
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/haker23/blog.git
git push -u origin main

cd -