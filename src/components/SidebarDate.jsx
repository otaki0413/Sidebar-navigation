import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AddCardIcon from '@mui/icons-material/AddCard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SettingsIcon from '@mui/icons-material/Settings';


export const SidebarDate = [
  {
    title: "ホーム",
    iconImage: <HomeIcon />,
    link: "/home",
  },
  {
    title: "メール",
    iconImage: <AttachEmailIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    iconImage: <AnalyticsIcon />,
    link: "/analytics",
  },
  {
    title: "友達追加",
    iconImage: <PersonAddIcon />,
    link: "/friends",
  },
  {
    title: "お支払い設定",
    iconImage: <AddCardIcon />,
    link: "/payment",
  },
  {
    title: "アップロード",
    iconImage: <CloudUploadIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    iconImage: <SettingsIcon />,
    link: "/setting",
  },
]
