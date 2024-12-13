#include<stdio.h>
void main()
{
    int i, j, s;
    for(i = 0 ; i <= 3 ; i++)
    {
        for(s=1; s<= 4-i; s++)

        {
            pritf(" ");
        }
        for(j=1; j<= 1; j++)
        {
            printf("*");
        }
        printf("\n");
    }
}