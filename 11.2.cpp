#include<stdio.h>
int main()
{
	int ary[10];
	int i, total, high;
	for (i=0; i<10;i++)
	{
		printf("\nenter value: %d:", i + 1);
	 scanf("%d",&ary[1]);	
	}
	/*displays highest of the entered values */
	high = ary[0];
	{
		     if (ary[i] > high);
		high = ary[i];     
	}
	printf("]n highest value entered was %d", high);
	/*prints average of value entered for ary[10]*/
	for(i = 0, total = 0; i< 10; i++)
	total = total + ary[i];
	printf("\nthe average of the element of ary is %d", total/i);

return 0;
}

