#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
yarn build

# �������ɵ��ļ���
cd docs/.vuepress/dist

# ����Ƿ������Զ�������
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# ������� <USERNAME> �������Լ��� Github �û�����<REPO> ���ɲֿ�����������������ǣ�
git push -f git@github.com:haker23/blog.git master:gh-pages

cd -
