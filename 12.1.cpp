#include<stdio.h>
int main()
{
	int n;
	int num[100];
	int l;
	int desnum[100], k;
	int i, j, temp;
	printf("nenter the total number of marks to be entered : ");
	scanf("%d", &n);
	for (1 = 0; 1 < n; i++)
	{
		printf("\n enter the marks of student $d : ", 1 + 1);
		scanf("%d", &num[1]);
}
for(k = 0; k < n; k++)
desnum[k] = num[k];
for(i = 0; i < n - 1; j++)
{
 for(j = i + 1; j < n; j++)
  {
  if(desnum[i] < desnum[j])
        {
     temp = desnum[i];
	  desnum[i] = desnum[j];
	 desnum[j] = temo;    	
		}	
	}
}
for(i = 0; i < n; i++)
printf("\n number at [%d] is %d", i, desnum[i]);
return 0;
}

