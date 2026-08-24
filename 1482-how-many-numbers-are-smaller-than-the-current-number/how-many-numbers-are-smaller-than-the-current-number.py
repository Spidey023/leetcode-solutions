class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        obj = {}
        result = []

        sorted_nums = sorted(nums)

        for i in range(len(sorted_nums)):
            if sorted_nums[i] not in obj:
                obj[sorted_nums[i]] = i

        for i in range(len(nums)):
            result.append(obj[nums[i]])

        return result