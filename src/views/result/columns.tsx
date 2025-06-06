import ArrowRightSLine from "~icons/ri/arrow-right-s-line";
import CloseCircleLine from "~icons/ri/close-circle-line";

export function useColumns() {
  const columns = [
    {
      cellRenderer: () => {
        return (
          <div class="w-full">
            <div class="flex items-center">
              <iconify-icon-offline
                icon={CloseCircleLine}
                width="18px"
                height="18px"
              />
              <span class="ml-1 mr-4">您的账户已被冻结</span>
              <a
                href="javascript:void(0);"
                class="flex items-center"
                style="color: var(--el-color-primary)"
              >
                立即解冻
                <iconify-icon-offline
                  icon={ArrowRightSLine}
                  color="var(--el-color-primary)"
                  width="18px"
                  height="18px"
                />
              </a>
            </div>
            <br />
            <div class="flex items-center">
              <iconify-icon-offline
                icon={CloseCircleLine}
                width="18px"
                height="18px"
              />
              <span class="ml-1 mr-4">您的账户还不具备申请资格</span>
              <a
                href="javascript:void(0);"
                class="flex items-center"
                style="color: var(--el-color-primary)"
              >
                立即升级
                <iconify-icon-offline
                  icon={ArrowRightSLine}
                  color="var(--el-color-primary)"
                  width="18px"
                  height="18px"
                />
              </a>
            </div>
          </div>
        );
      }
    }
  ];

  return {
    columns
  };
}
