import React from "react";

import { useTranslation } from "react-i18next";


const LogIn = () => {
  const { t } = useTranslation();

  return (
    <div >
      {t('home_maintenance')}
    </div>
  );
};

export default LogIn;
