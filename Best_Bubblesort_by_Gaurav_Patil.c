#include <stdio.h>
#include <stdlib.h>

int swaps(int arr2[], int n)
{
    int swaps1 = 0;

    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr2[j] > arr2[j + 1])
            {
               
                int temp = arr2[j];
                arr2[j] = arr2[j + 1];
                arr2[j + 1] = temp;
                swaps1++;
            }
        }
    }

    return swaps1;
}

int swaps_desc(int arr3[], int n)
{
    int swaps = 0;

    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - i - 1; j++)
        {
            if (arr3[j] < arr3[j + 1])
            {
               
                int temp = arr3[j];
                arr3[j] = arr3[j + 1];
                arr3[j + 1] = temp;
                swaps++;
            }
        }
    }

    return swaps;
}

int main() 
{
    
    int m;
    scanf("%d", &m);

    int *arr = (int*)malloc(m * sizeof(int));
    int *array = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++)
    {
        scanf("%d", &arr[i]);
        array[i]=arr[i];
    }

  
    int result = swaps_desc(array, m);
    int result2 = swaps(arr, m);
    
    if(result<result2)
    {
        printf("%d\n", result);
    }else{
         printf("%d\n", result2);
    }
    
   

    return 0;
}