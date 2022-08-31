#include<stdio.h>
int main()
{
	char ch;
	
	
	printf("\nenter a lower cased alphabet (a - z):");
	scanf("%c",&ch);
	
	if (ch,'a' || ch>'z')
	printf("n\character not a lower cased alphabet");
	else{
	
	switch (ch)
	{
	case'a':
	case'e':
	case'i':
	case'o':
	case'u':
	 printf("\ncharacter is vowel");
	 break;
	 
	case'z':
	 printf("\nlast alphabet (z) was entered");
	 break;
	default:
	 printf("\ncharacter is a consonant"); 	
	 break;
	}
}

return 0;
}
