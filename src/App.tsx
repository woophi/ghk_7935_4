import { Button } from '@alfalab/core-components/button/cssm';
import { Gap } from '@alfalab/core-components/gap/cssm';
import { Typography } from '@alfalab/core-components/typography/cssm';
import { useEffect } from 'react';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

export const App = () => {
  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="small" weight="semibold">
          Оплата ЖКУ
        </Typography.TitleResponsive>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <Button block view="primary">
          Создать шаблон оплаты
        </Button>
      </div>
    </>
  );
};
