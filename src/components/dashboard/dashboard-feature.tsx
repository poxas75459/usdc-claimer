/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4aJKZTdmhU1pHDJoJDauThN4yxRhz1Po8Hu6oh9YefUMTgUqxps8vNEQfCTnoXqNhmjUwm48VLyqYsxwYUGSQK7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FDF3i2C7xLhKxqWa5z43Nber5dHaD5bKH234xfVRQ2EU2sCTTVJMjoF3W9tjPnAbrr4ebXiCm8k8Gk6tKPdtfKF",
  "key1": "3zodUTCHvWRpFm82iH3dKj419b7KeJyk17YbyBHbbhm95Bome3HJXRhkZ45SKNPbbRWcDTSfTAXRAzkvNbAcUeQc",
  "key2": "JgBjqPFKbZzWuVbQsWs3VuuriX5ZmwLZj5dJd2hGDgx1VG5qCvcqrNZZ33bUA1u2fxPuCN5tKFEjKvneA3Vp5HR",
  "key3": "itiYVpxHLfiN8CyNrvCzSZupH4cgQMJpLzbrbLGohvqunQoxb3hHY4P5EZFVSUQxs5CB4tQAToNATNdFvqd8iB5",
  "key4": "ny4sJyefMZhhssVWSNXRiGd1TwddPsJQ8h5reYEJ9dhTWvbzjkCynuZHjMqSNmqZytWUfQjVZHRAtdzXpYcVAKw",
  "key5": "53JCqrvLxgz8jstnoLVy4CqeFa2d1rpw41kYwnfChmB4nWSVm83RFmPSHLxNzq4vepicbGTqrWZTVxF781DEbJqU",
  "key6": "PKdvYWmyHJgZmbrEghUBRGUgg5K77CvHpCqnBVPa1NroyxYTVJRXashtcz9s8X4pGoUWebrcUnrVGMvRDvgJx14",
  "key7": "3RxFo64P26dRCN6mB7ybYDLCevYLoGra3cqgt1cgwAhD6p3JLkQxLEwhmpr9Dhc3YFAQBEvpKSWHaY6toeTK6QJV",
  "key8": "4DZzZ6Lb2n8GMze3Xb9UW5cUoWdrw8KWKXvH8CArNYaDmyTNmsmqpa1V2STXMaEZwRHXMfWWDY8dGY86EPw9mj2W",
  "key9": "4zteMMDTYvFGj78vg496BC6SMxaos3CTM4PNF2iCvzTPVbbXDkK5fZqbtsErTEGi1VXFXRmzTXw346PWu2cmCdoM",
  "key10": "3XUJxi8NFjp5F9dPDmoHimkmN2kRMUSSPWBEvv1xRk8YokGTMH3m78tLRgYk7WHQHxShFfzreCJGwqZcaRhHJ7X5",
  "key11": "n7iN8XMVGMvew2XyoQzzEsvPkmPv6GSgyYAQxFhbdGWK3nfPW5ihzMQeGvrnNXAJfV8aTTiKWQSte9vtkfMoqBZ",
  "key12": "29zepLXtXFfr5kup9VoysW7TCH4WHVProBQB3shPaThMR2PtQzsZUNQyjyDxG6PGmqXQmNzeas8wRo3Z5QqTQ7DK",
  "key13": "UPsmuMN6N4arNGjkPzdCCB2VNEvPHbSD9bN6k39DkUypXzXrtyu6aqsgsEUBS5kcpddjFefjvxatgZQuCME9eLh",
  "key14": "33NE1qMaxw2VCa8rbUSRrZ5GwtFZbKR9JH691Xurhz2ix8DSidsu5ZNJYqAheni9SbUcMmRt4Jo9eQfG61y6deGU",
  "key15": "Yt9VBAU8cC3sTNdtmaqnD138HiqBPRuKP6hdYR6rwB6WVoo23cHUrn5CWyiaF8Cqw52anT3SfsXyWvjrRE3abPu",
  "key16": "4CyfevtSFjd4kMskq3377ZYJAQ2DwfTsBZ3N5qhf1SAwcuFd7YjjmALQ6kri3d7yYUwj5v1Jb7VdXbdT5wQ8iTA7",
  "key17": "3Zr7D5SHdvuebC65KSubbKpq7tYDXWfaBjGL93v94JJsVvYoYDgW4qfjofrCRdfNCP6UqEVS8Ghf6iwgnUmG2LC5",
  "key18": "394woqyKBg3e8wLbVCLvM27LhaWXFozjeXcfDG3YrVEPhHWqycHFqkGWSHVrAohp5CjGmJbfTqj58q4FxjiUsXrk",
  "key19": "5n9nESU2TXNzpNgaeyAiiJ7G7LSmEoafg11AduWRtvc8WdjMQW3p662ioBQDuHDbkPwQcweh4LuLZBTJvGPHysXw",
  "key20": "669WTqPCW4viTyZ7MZsCrrgQTH9CVCtCJqx2mUTTSn4MoTRFDbo7pyCWE9gTYKFBc6q1wpXm2JiuuqanP4hvCb4g",
  "key21": "2MxuRCT5X6MXopcdHAZkqhbeif2YGZevHEfFGx8uUQyf2hsFLD4JW6ksCQKwUdLp8R2iQyXUkmJgzYEmpvxrvxqt",
  "key22": "5aU7NcSeBJcfTfFEzXiTgrq3648KAD92r5z1RfBhdTdECgDEzMMQczG9b2tdNwCG18TdLj6f8P3BMStJQdq6ReV6",
  "key23": "3EnS3R15GyCkfVc6AEsVUnNVJrNC1KBqdfFj8j3PUqdR81hPSvMh5bxYeFDRd6Rk5ATWeKR1ziKHr9N9694Auckn",
  "key24": "4s11zhFAcSKbxj5cACrFAM8fZj2GSwK5AAjumSFUHihm1iMqKyJ8qRpCRciQFCHuCdvTr1q3jLMQvqxYWP6VtSkh",
  "key25": "3hKHEt1r7ybzCueGythrNBSFomUPwzy8oW2TyZbL64wg8uiedzPM3jZX6WhoNo9EfyiieDiggyucw2wgm73EBXYh",
  "key26": "4wjMbADzETwTWoMuA697aug3fL9rDq7s7K1rMwmbnPKBs1kKL7BrAaq32y1DW6o2wVqYCLUvRMM8fD3AKCzYR2Ri",
  "key27": "3k3fb9qVSCSfeD4NGypu4eMey6EEqY5iPv874F6mXQn9aQVw56pEnRVXdPNrtPwBhNu5BL6tskEfYAM1VMZ6ePSE",
  "key28": "3N2GApcam1Z5NCqdntdXJjHDDK5VybSuKjZs4TCKEptKzYEgJHJSuPdH4TySKDWARZGoaK7oN1qxayiTyqqW1aHb",
  "key29": "2sL4Z3ujZPjX1h4jSnyyDa7KBXGT4eVVFTHqSWHbnWctxSdkMgjezk1aSSWo35DeByq6sbfXeDn43duDtYoNtbcP",
  "key30": "Q2CZEpL7Eg56isRiH2EvrREgdTaUfrTtjBfHmpPFJSKDAnoydWW1nctXt39gHuw9ewFeWKPk7DSt8P5Y7jewcpD",
  "key31": "5qHiXSjMBatBFvArsbBgNJR2DM87y66XxAXivNcq5byZCHeRgbXRLx6uWhZWBs3VWijyP3XjhiiMsUN3ULAmQfoQ",
  "key32": "5L7quWj3HF9SJb4boNcmgzhCLiy4PPb41aDBxHW7mHKqSVXZA7w3UfQUvs8wGuhRi2ykYy1mKACxnWJKkSysMQXT",
  "key33": "2Fh1ztqdiYqfbgCFvEkNuh6T4JZo1YoG9kRfpXd7qFh2Sp9aafzXSuKQoRVtidR1542rfLrgpHTmiWmyVi629rQ9",
  "key34": "5jk6h4QyxVQUFSgqt22LoLUosBd9mskLzWxWiG8kiTLcp6T8zehX2am5mcA5tVyekyqHmzAngnLvSfFRZKp729Sx",
  "key35": "3uPQrC6uFHSuvr6RfG129piKzvWcPxvF35X2M8gZqQAWNvBxJqWdqr3qFfLFMf7ZmTbfwa6ArymRw1TR7cxD8mYU",
  "key36": "4f9uT8G1D4q9Fbk97MLih5aeDh4GjsLHixaoSphwtW36qeGJK7pQmNwgKDNEX3GoW74R6u9sndzXQnPhVcPXwtNt",
  "key37": "NMpcuVMmNerYK4ALwuzpH9SLUFV7RQSPwKbvXahTxePFZ94ra6tzJjsTbDmsGPu5eyzmHgEF6dszFUbtGDkHEpH",
  "key38": "3tB3i4oeEqFyHWaw9fuHN7sHwah9tkVZF4NixtYzfzmCdzRDgWznYmhodaRJsdxKXiL6MCeZocG534GdHFLK68Ta",
  "key39": "4WKPa5TWQChXqzf3BwhDSukE4ukbUk93t5G6w6o29YshXw1482admWkzQeWrD7w4icKGwdfzaqcK3Dbb1YruUZZv",
  "key40": "2mbDMDsbD68LNNDLsaDCMUJinm5gj7jd2xU4BzPwRR1FtmjgchhyEGtJSs17uWqoPE4XeHs9vrFC3Sn2hbKhkWbp",
  "key41": "2qhftiWokGy2fgRvA26DQmRzJcBTD7ZtyyDhZxDcBEzQ2GiHdZDjwhMqAHPNjS44fYz6eYcTk1LLu8bSVZSRXLge",
  "key42": "5xr4QfuWDgasGGJMjvj8HWLFP7LqC295BaeNiGryS9JzYX27m5eux8D8zJDbAWrDHUhRr9hAm5qDuAqN5TCuPfdQ",
  "key43": "5pgCbPZqoPsPcQkCy2Bwp8sJAQwHNtNfJpCeKGRzMNMpez6Hesnyv5HUgJP3TKmxrRSWQa5pfcZPQD3DqX6S5R2e",
  "key44": "54PjAYWBqXj8R3LNDmW62zapw9a9Lj1gYdKWSup7QctJMHVWr9y9y14KFrfW9EWJwEJkepUdvVNDd1TTsja6RSWS",
  "key45": "3JimZqojspnaNqqS4hcdJnaii3pEQF7pwcCiCCjwW59TTRKFcnPSbCS5MHCvyGmkSxDYASxWaPRC8ZMJfmemYCtX",
  "key46": "5zTkFG4vsXY6GjhUJiPHDW1AaCzotjEuk4FnXDFhTaxeHUZbYn7sx5jhd3CzeZifgVwGawmrvG2H9HmD8RtN3Sis",
  "key47": "gUz55C1kr5btYh6SzecVCr9qufnjhdmMj2jUUs2Z6TSGJ8k7g7x8s29R9kxC9pxeHMeLDZCTxueHir3cNW4GN9S",
  "key48": "aHVpKgtmD1UiDASw9WFDD2nGX1YaSwsWzpr5MvWvLtfEhwaw9mZeoFEG5PPEofQTJGWXSgNzyTUpUVyW91f767G"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
