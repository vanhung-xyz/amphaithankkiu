#include<stdio.h>
int main()
{
	char c;
	printf("please enter a character:");
	scanf("%c", &c);
	if(c >='A' && c<= 'Z');
	printf("lowercase character = %c", c + 'a' - 'A');
	printf("character entered is = %c", c);
	

return 0;
}

