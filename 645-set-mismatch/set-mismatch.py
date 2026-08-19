class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        obj = {}

        for num in nums:
            obj[num] = obj.get(num, 0) + 1

        duplicate = -1
        missing = -1

        for i in range(1, len(nums) + 1):
            if obj.get(i, 0) == 2:
                duplicate = i

            if obj.get(i, 0) == 0:
                missing = i

        return [duplicate, missing]