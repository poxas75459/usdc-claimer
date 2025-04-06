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
    "4eiR3Dg9R1bzbUF7QLBUEHkZbMXJKrwNfh4mut9xdconj8GUajEGA7BNNK4uxCybVFTEFEEWito2QhbUW6e4fhAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YfLwJmmTAxoeeU5nARBF7Z8yFrjqWwKEgvSccmXXnbxV14mYExFiRmem2U2LcTdPb47yjEhyjSeDkbsTcNte2TC",
  "key1": "4uwXXRoy4Vn7yNpu3PshTgXRBoMtabKRyZ2ZkUUVDp8Ktn79LF6pZGDpbW4m7L3RUzvjGYSM6F4Dm4GyuqB68sqv",
  "key2": "2dXwsWuziKRTB434twgSfR91LUY787XPQaQ9Nas5YDkkKBHaayKUn2s6DXVr6TBWyQSVL6aaWAj76BeQDSeFMehL",
  "key3": "SvfmLe9AyLaUSC5vH3XfrjNhg47qiw7hGQUCGpm6h2d1ojNwEjW5Qx6J45GB8Kk9PxkByuAscjwCRftjtJV5hdA",
  "key4": "5Bmex9a3rN5N79NrmwzmkPWpjTguehajyrd2SPU7YLWMBY5jpTuRWuxYoFkduZUXzGccGNHG9x1CWgKPrHKCYtq5",
  "key5": "3gEqrkNLRipivLduU6dKQMUbAHdNZ7b2VcUSqwnG8JURWj9JEeK7dVj3crAULrCxAp7C82U4MD4QAuHfTQ6Cmyt4",
  "key6": "67UyaTSSqVdmnsppscmiPUKVFXCJ9MuUeTfQVtaSEaX7hEb94XiPrhCAYijdUz4zFLi3zFC8GdeaQW4ngV3WVV69",
  "key7": "4QK89CGYnu6gtZJHmgQBTvwwtL81KC7PfATK14F8jiZ6iTKKBAp25rEHP9GwhStUVyi2QVThBrMyRRE2j3pTZeWn",
  "key8": "4roVsUo2i6NtCWu4puxEAhmPaZcN2jyZzfw7PqqFXvz2Zf1FbFXwL4Ca7Ef1i11CCF7idySx8P1XiDoQmbZwGupu",
  "key9": "4QcDptVFoyxAbsHAA7Ux81BoUMxTYQVhEyEbw4JQ9GqpiyYKVwdHWGrPmfRPFZTNTJooCEZNJvU1583a8T5Bwzj3",
  "key10": "2jT3DDyhUm36QtTLBwZcEEBdy6TXtUjqGuvwF9VGSLw26YemkzvdffYcq8tRLAUWF1fZoZEY7PeYBRzUMxPMqaKG",
  "key11": "VdSidkPJQQnQpMDC3ztCkVGF4P2j33xWyP9ZpL2NdiLBi9CCACiCc2veJG1ZLuRTLXaMtqA6iQ5qnLZn5umjDEQ",
  "key12": "2nGTZWuSGNeVVb41YcDL9fehPgf9ZpxrrX5pE2S51K4yE98x47Ze2MYCjqexGLfozCgMrHfrfJ7L2WGrV7eJ22xx",
  "key13": "5XaYSJP62ZmBg5wfkcTkMibSXGxvpLoPiWQFR7J2EjChEjd5DgqLgLuPGnaBCntKUiADFcaEHnZcVa2akCEbxK2d",
  "key14": "32BRqJT16kLgeJaUteTob424PyHKkzVAo9KvYrnuDGFtHZoGYNzdi6gtTUu8Bf5MzQMrUaCqnfwyen56AshgzbDe",
  "key15": "5jdqpZ1R1U49YemUFTyBfLynKPkErS7jKJ5MYyjAtWHKW7AEEVHJfrUGRK5sEWWXRBiV9u1E5JQ1eUaPj2rubN5s",
  "key16": "3bne2vSFMq5pB5DLeXtXSKBjzme2pxqGHFVFrU3kQSnuzbo2uXGFUzUJah4iKCU2VqLdLHJb84hppUiUZ3UuRBjP",
  "key17": "4m8jTPvLEm87myoqHY8Se8Gn7wFcVU4qXSKiYJz2M3825WChJZeGxp4UFE2gCjEXSHL22zmVWh7GAgvUbzArmXMW",
  "key18": "4VZWAzVGQQdT8ghQ9dwJzLpCcJDXiivPgu3J14jy3azqu9XdyTpL6UnYTuAbx7FtRXySq34ohBH1fsDerCzxwoB5",
  "key19": "39PdT6KjuL5YWLTHTbL5LYoujQLL1oSoxcMZtqaTtLHC76Bu17VV8LQdGCVWhhPARgiM1UQTGpkny3C3t1K1o2ZB",
  "key20": "PpwfrFtN1nGq2ejnvEAs56bRHHeeHU8vPXqyL4v2ouPJUqFHou6aBXfFJCR3WyHAVm47xhEhosFxr3AyxbtRCXR",
  "key21": "enC5KKE4qudcvyBJc4BLFW5YxURmeUXy9NmFPYNdkphRNaufgkZRSCbzdRrfGfdAu8Vub9Rdjgkx8XLFqcG6rXr",
  "key22": "4AkwWFvgGZCniFPLED3sC4SsZC9HsTA3U2Sb681ztQPjoBXgPCn3nmsmBMX8jTcCGPKL8GyxNpiTbjdf4Huib4Uf",
  "key23": "5Z9yig8BadAKEyAVMoP2FJKFiEbwN6FNz7WqYgAqnJPFuTsq2XLYgGcXZRugj8t7bMxjLzPVWSDUB9qDP2MVLHzR",
  "key24": "2GnTELajwpyWHU2Yh8wqgngA2zX5DUwfajxg4pZP3iasbLX4awN2Efeza8gw3gBWnwGPYyCiB8pfU8DT46pRdE2d",
  "key25": "2ekjVBnWhqhWAsnKYz2wDdtV5kAZU3LfVQGcwArZEEKzZrWNYL7rxNXjvD1LGrc237wAzMSheKgqWu35RzB5o8FL",
  "key26": "66UCmAyehG6qridHrn6NsVzgg9JcuHJBACEJY9i8AifxsTwLha6jJWVXiS6KuSKM5Ja6rT9G5nvuLqFKaS1jeRaQ",
  "key27": "36xjueBCX1CCyQq9RaGdDaQLPgsyMvCwDf2FTKySse9vuY3rKxka4JJPCJjGRWXngDEZiq6ZPWmao946gnVkPbpc",
  "key28": "oE9iD5WrZzWn9obzuy18yPr7LZuWBzYF5Li5iWtXY7cxb557FA4dMauFuRWCPM3b3zKwVVsDMfiae3UdiJVY5gY",
  "key29": "47farjcVcFgSyjW9yxK5Vs42Ez4KMUvVifcw75tJedDKE8gBUqRWyYjU2wPz1zkTBm9so2veGLjJbCZk2WwZ9kfd",
  "key30": "3Hk5Njrr8Q2DKSa1v5amgyejKhUitRMgSVJcjbDQf44rYHz2binLbT1KCcj4tF1GV4rboF87TU3FqLtPbJdevNEM",
  "key31": "2WfEN9qs95D5xxR93Hobxcdct8krbLEzwXecPrsyP5fodpLugbzqewiXSzqgXmLMmSHFfpwDQbubqLAUo2j6xntC",
  "key32": "4QUC9n791YTMTv1ToKKYgc4d9YMAh1ozg6ndpGQW6Tn78D8kDN4uCcAAtgjncKgTgNcLrXu4ebM8DfzVND3MdxfF",
  "key33": "3qo8GXUKV91wRS4pk6UyYmrcEfCcgeeon39EAfkFhNqRSjpBuYnb4TKxhK8nTsd213pYJbwc62W6RdXWuiTpoaFr",
  "key34": "3cRX1zuV4mo6yhARtiKG2Mi9fgVR6XjuX5AbM8EPW8NEhqob34L1X9zW6rbd2GU3VYcKkVqmDGPkCQD9Xfb8FQxt",
  "key35": "LafpqgHX3idyccFj2RzmDrKsT4cbmFQdW6mHYDfHJM3nr5PCDcuDVMqfHPZYuH9zKuAyeyJPxSPQeFNGXgSEkkf",
  "key36": "5n8Eka4GtKGP7Wfcvm1tx7Dgr4wim5BnLhwCGyiLwU9NRGqEXBoiejsZ4K5T5XN2z9L7nar7hCPJuWUUAtd5pWVG",
  "key37": "5b1FNc8wqeH8hBzfuVVZL44TDceZcarEFhzoz1wmuNxjodMmMbsqEyaWu8rrwXKBn9QNKEPbnjGBAcT1bHixnGBB",
  "key38": "2jmrRefnvCM2rLA4SZGuwQepRQeuwZTeRuhg2fYFpwyRJKojrcFQG3hAyAigwQyesEpuCfA7sf2f659dat9JReZv",
  "key39": "4nyGQPGwKJ94RnM5Ywzh7TZU53StKvnmAf63MtKtkrTFkZ3R6LJyg4Wzxi7FMtENfJBTZ3yRY6FB8hx4WrPmAxuW",
  "key40": "5VAf3whbQdFDzgnQKhMw7RsZg7kqrzHqFFVBbwSmhaMUr77dWPi3okMtCPBZb8XXz315kcFjkp4vpfUrqsvouZtr",
  "key41": "2oUZsdYei6JKUiyvQw7PjjT7T1VPqhgeA5XfLYWF9ffjUhsk7n42imyNrcWucFUGSgrcZcDbfp2WVyfosKGfVzc5",
  "key42": "2DPEyTmG9DS51tqdNNvcon7XiXmPZtX4Nxj4kgpubRdkD3pbzb6fTzM6FxGcG9pe6YyPnxqQF9rwV6p8e1nJYgTS",
  "key43": "23nVmqFEbQphNjJFaxuRDGcH3qoEE42565a7A3B3cfwbfr9PQtJWLnbRaPPyz3FCmuBUPbHpjRQSt1A9CcGPBYjk",
  "key44": "2jckym6Qx3c1hHa4U19pVGn4fmN2fmCCarkhDFmJLuiqRBQRRgotFrHHoVtKRHTgPXNDoFCjxjvXDRDu2otxNdyD",
  "key45": "5bBQHno4kwe6NGV78XVECZUybBtM4G4zB7W2NhSFu5JFUQxkugmC7wY7WSpMTg5NPuy59WSWu526yc318TCJUDwc",
  "key46": "3ioUznMeYdC6yDTfVRWjqCShnQL3RTzAxwP77kk5kUw98qgYjbmxev5BDAEo2R3zqeDJFTnPp4P24CPKGoWvFKg2"
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
