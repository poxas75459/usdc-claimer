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
    "2YGHurNuTxvEBpifCxUJoFTD6JaEEy4PmMf5RDTNKDHLxQF757eRNcZ8zvpegVRXWaTyfJyYqzFc2Ncem2F6NqYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31J44hxBsxVA2rRGeBoVquAjM9rR2gynbU4ZqxCGx6k19JtUnsjEhShQdMrJH8Gt4w413zZ1DrH4Y1NiEQvb4s6n",
  "key1": "3uxkfYpe2jsSjy119q57m1G3vqTTYzoEJvJTJeozrS3YL2XrL5A9Np8fsNbSLomktucGcMEa2gyBjPT8QedVasgz",
  "key2": "rKFfD9MRFHSSUhyCt45foMP4ZJ5pDhrSi6Km4sWHM7QV7PB2M8zDBvkUUbnjT6xgV5qD5kWdnDNbLjArCEvdDs1",
  "key3": "5L5apfkNLUiuQ19kDuCFxsF93H7JVSYWnAbMVn98raVS4P5ARQkuNme34tm2fJTcJSNVxAPECRmpmQEGcAgkL98m",
  "key4": "28XEmtcFQJko1ANhS54J7esyYP7i68rwaDBrMq8hoMLnw3JfH5NXRxZSr6UHnf4swdwWyHVkVxRbok9iARFLuKep",
  "key5": "34F2zvMxq34J1VfWNdQVhf18BVy1wo8S33YzbeQHCGHyy1zPfTjFrgbDSggXHVL93jH1xF36SFEjiPBvwXdiRmvL",
  "key6": "46iRssmiSJUyTksW2SsW3Vq1yAqcChCcXgYNAscBfQ3wyKdQF9XX2N1qB5TbeHSTBzbft8jQuiGTnWozH5khdqfr",
  "key7": "2kDGemDdsGnirdhruGC7dKfiN6N42DTuCpEpL8mhZRqz8sUqPCKgTEQMyxc8XstxRbmoGgQw8BGUmthNeg3Myaf3",
  "key8": "25m9rctMcSMCcuDNiRiuog9qnwBNWuGoERquQM5NTHmzMQEKaWUKZs4cFaoEeqyGkzjANV4kRV8zoHEhKcK2aEB5",
  "key9": "Fahn6ty4k9NNV9RkEfuiJZzVoswAhug1gev9XWAt9kfNHa2gyjsXqwS95WUrMdxNgAjgZwTM3kMRzH6zDHYNiDM",
  "key10": "aKzyXgfoGy9cu8UU4z5buAHxstDFWFVoaBnnoCs8dEoAPSs6M4amKvNXBHxhs8ewgSaM2HBgLPs51M41p6g8D8j",
  "key11": "5RieWLVAkjYG5FdJqfE7N8pSUNBAn6LzqLDPEpjFYQbv8gWv6TRMNReme11VYLvUKNfedQubWtEZkDk4CtQbqvUt",
  "key12": "414wPUhGdX8onAfaytbPTtqtoa1biabHuWTw5ynSTo6cGbBnkBz6zRa84B5wQtcwKQGRS98SdToo9VhNiKzKEQxx",
  "key13": "2wXcN8zR4RRcZATeDt3yzW73mHpDnmzsBW6gcmPnYDiQzFgcL8zMsC9M6sTtRNH2dBRHBLuoGzKUrpRge6v5XozY",
  "key14": "3AHvxWHvxBFT7YzkafPLRruC5dMiegCYb6x2vpQ68qLiDW7GJemnZfwVXzBfdsbXZfpNvHoU4xG9LZpcv6okHeRM",
  "key15": "5KsYGBCz3WNC9GfxA2TqNKUQhSejYCw1LoYcokkXJnpav4YiTmCAsTp1H1CzNipUrqyV2o7SH3HafS2dVtKGuw1P",
  "key16": "xHvpeHzQ1SNrAzFJUTYodB2MKRXsgJwRFWeeF3fbQYBMfAmMYc2qGu82sj2d5Jdj8wkqXrKJzkvPJjM9qeAF5gH",
  "key17": "2qET2ywoapEQQzpMAE18x5ZLFKCPT8YGTq9jRm4R72rA9ktA2SYnqYdyjcu7vcLGjdPd5W71ZtRSqFqULmLKP44c",
  "key18": "4sKwVUTzampGhHF3s3iH83RouFaJWH8qcmnuciHjQ2ASSf4y43ptao2pReWiCg34aSfTzozmL3r4GhK51TUGU5TY",
  "key19": "4yhPbP8oxtfFaN3BteEeZKKmRkLqT4QCm22DGZgb6StCvgQbbsbATiPf6GSJsPafkNisGHPvDNP9mn2Jfze4hYTN",
  "key20": "2HnbTZQvVX8Kc8mueRjLPEiWY1uQA9tuzJQNQwR2C7av7cAiMKwQtzaRsGECpvMkbsC8qAPQusUt2MimGXfd2a3u",
  "key21": "2cEhifjdczci9NbnHB7FALDspME6D8VhoaNUeWQGFpreQUQMM81Ga88LEZVgA9EJqHdzdqvi4pAuJJsmgupwPY9f",
  "key22": "16bMYMdxXPBbkeXzqMA2NfkowT8d2ptZu5TdRZvZuq6jEjTWCoXPBFMTRyN4LXPUr2ezLN1cidDDkvwKE1wmftr",
  "key23": "2wbEZuwcCQFDr5kZzjncKAaTyKt7ixqaeXJrAL63Mmy7gAXPiaC7D6kkM4opq91zCQB1pScZhseW4s7rrWyVER8B",
  "key24": "2RP2389TV1ivresFmvqFsz6SdajPR1dZhrgcTWmUzqPUDvEP5RMra2MqEn4dZTuSFDQPkxJFbEE4n1DVqKsyMhcF",
  "key25": "2sXqaPwE5g7z6xzUPK1mzvhPRnyookwFZcDdZX29vEiaa5JyksBS2ha6gqQ66aGDkZ45srM836GpW2SUueXTmEJw",
  "key26": "4jtcPyUmtxqHvzGZTncQU8cpyjw6Pa4nxjvxwYHZ2kKSeKyuLvsC7tYwsM7uXEBLv7yrdoAWaASdmJLkW3E6ANUs",
  "key27": "2Tr7CqwBPwAQxG2YKD2m8MVgk6T8PsHBzfYdu95SGiErNvjvMpDRFzNWQo9sxerrnT8QZjJNrwWUZ7k4wVcMcoHN",
  "key28": "5wZNvg9NfQDDkdTCg3PcJxmsCTST8BGFBGiYtA231SYWw5UsSbQjgN2N8Xp3sTDVWPM8Gc113sa8xBNrFM71eSgQ",
  "key29": "4whymmzok588Cm1AMcrBAq4GGtttGZmS3VdJgJ11mb9FusbB4ArfYf6jtroZ5dWCf56KJzBse1khiWkuMTcwBV87",
  "key30": "2atDdo9yLHiaCPdmmxsbyUGVJXBnMLJVemFBsRihfbMwyR12uq7G2TpfSY8TJwxZHuDV8WxVsu2J1VSvLbcPrG5v",
  "key31": "2y5RA6XKVRCbzLHaVizmBL5NZ1i1Dpor95W62cpWjePwvwgg2GmDcpWVDnsAoVB8VPkJNCXEk6f4Kb5TNVSajWMB",
  "key32": "4YtCpmfx9sqkPrGxpbqWU67iLykauLf6UeXdC7amtPwXBiHnMnzWKLZL1jGLvRZCRYdzRokywHj3UpoGnBfTAfCa",
  "key33": "4G9u3A2WJxTwizqnH6GxEHDqAp3923SnXuu9ShUSrwu5y4R41NydeWvEiuN18BTPB96Lhyar6tmWzUhzpfDWQcnk",
  "key34": "3H2pJTnvb1MUb5jZztEzgnf2X5mc941B5M4KhGsUkSwvSMrz7dB88MreoZk3FtSQsqduG4i7VVwdF18ZXYH7dNxF",
  "key35": "5F8w3SJC8E6mRNrKz8qBfLTembyCAiE66X2AEzDH9x6haqm7Lmn6zEdWx22cNBckcYMgnht864JFk2YjAGPHmbmN",
  "key36": "67dEmV7eW2zPqA6mVY3dQxhSKxwQhES5fZuaMSXZVx6U96Z3mYgsJEyUudzdaLWi3oUABH3DYgRY3mGaAAJb2Yqh",
  "key37": "4xTHYS4BX9jG3jZbFmHPt7d77HCpd5binEwpFukCCzjVupQGtCGH4fpALdrUX4a3B6JgV1psMHoJsgVqaepj3Fwn",
  "key38": "5sA3ubKrwnnrANixk34ePmDqAStZN4dJehQwfTbDqXZYfAgR4P2VhJeXYUMWzvT8qhR12f8Ko2dpxDewi84U45P2",
  "key39": "ZAXiCnxT7fLcuVMeQeJmYuoKkkTHQn1QzRxQkgsJYoHpf6sg8xsDh3zxaDCKMr4FrTB386JmwxoiVxQ7Aw5wJKQ",
  "key40": "56YuXoEDSwHSe2W8XF86tbj1KSN1d9LsaBRrpCp2CLoXF3aJZSsQhY87dXCSRxHHTEQzSX1Uazm2XzZmM6ueBg9R"
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
