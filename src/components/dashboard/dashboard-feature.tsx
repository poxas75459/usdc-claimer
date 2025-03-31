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
    "4DyHgP2aRhDQXjxijtaYhr5DbAwtBaFuCoNt72BG1v6uHDMPHWSFDD4f8jvxbm7tQwNnpK5HX1n7HfyuLigt6rN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HJpjh5eitckmVuL1BDGPVcsamwhSCphKzwapDiSDyezVEDQaceL7n9hvbJEJv1muWw4TuuGA4btDd9UkLUpEWqH",
  "key1": "5wRRdqgTH1QAQ7ZBSPjGkvbnLEYRQP3q4pUEgBU8ZPfKBhy4C7qZqLGTfmj5kQhHW6dXjtcLyUS4CzFV9obuBeTP",
  "key2": "5ZeV82D5azV7ne3iEGJhEhUgXxy8Gg8JMLKA7rFcSK9ZFeh2DfvzQdQAy4egf2LqBE3a5LvN82wdkYkRx6i8xuSE",
  "key3": "pSs9rn5TYeXfBkzB9oqhEEAdqpKmWzbGBoZUqcVTz3FDteEFBrYPZAZZoSZrWRBYooNtGFWAvDi6txuVASYZsPz",
  "key4": "yVrz1sQbrMc7uFxokj4y6LEgKedVH3HcxBpnMGj9sATRdKCzUmzaCLrzz9fFNXzffyjmxaf3adu8K3GYWDd4rAY",
  "key5": "559D9QFdz7pAdmPoa2VvYeiadrx1pnEqjT31Hr4N2mXBkKiHMV79cRpxwExkR9cAayF7KhvjYoWEypJBsRdFobFL",
  "key6": "T3qVYe5qjf4mrqZ665KuenR7VoLysuiD6NpEZTsAL6TMTz54npTNzYLmmvFjN8VjHJLeS5V8RuoMnVtVZLZKsjS",
  "key7": "3r2H85yTAi3MYzQybETJ5QtPfw8Q49hu6R4dPKjP4XupnSZihJfK46PCmvvTs4UhGS1HmYnK2pxhggQBE5ovoSzg",
  "key8": "4z5QMs9VAnaZqSaSAKVtndchNQsNU7rScxHaQyRStm2LLszZ82hn5wRKaShbVGWr1tTYXbZ82JWZ3S8UHZe8gy83",
  "key9": "4h87EoXF3xbF3cTZMG77Mb8GV8Add581jUgGDbfYsoQDSATS7gAnpdy8LdYRonEi394Ywvg8fN7HeVbk7FdgLq7m",
  "key10": "ZHfpKmTnXRtL9pMzsRqK8n5AMyTCaEZPjTRoxfSmbkwofJaRFh8b3KRnByFD3sRc9NJyAfUYUswhzRnkqCbvWa8",
  "key11": "5t3y8woWcMPtHJHFPiQMG8LPj3dH3xtFsdGi1zDtNhDNFKiyP9PzSW3Mu4LhWR74qu7S1K4wSGpmevTkjtUpgY5i",
  "key12": "3PvZo5UdGpFmEdoyW2LUoUmsZuhDAqewxb3JfFzJHpCK28Cd2UAHWHTvhLNLm9v3rTKCGBGcWdpTsDs3bEv68PBx",
  "key13": "3xgwoACsGVC9TQ4dnwwU6vL38fZPPD11tAYRTfoEmUk8jjuZAWnupmYjMwGrpsGRmaAoPDTzkrgFxf68RZYt6ywm",
  "key14": "5BXMXMNoSVJJWbibDxffQoU3JKTsPZ6X76H5kG5rYLGkJaLWfawBAT7HDZfw6zFU6hwj4JonfySpQgBQcxdmoqTE",
  "key15": "3AD6r3G36JUnH1eKNrysV6kWRjsmbRnPUk2sB5FZDYGUD5QaKKH3XZHHMVrhVyovysRAcpG864ZPgrePQTzZqgqu",
  "key16": "2Yi2ES3y35MsThvGKWH67qMsJrexHVZNbbjy5HcdVKcYLbHibE8tENQmjUq4JEPDyWf9v2hQ5ceQrR1zmu9BkgSE",
  "key17": "F2HXQXgBHiWUSY86u51G43qzdieDj9TJc4A2bbMuCakEt4CPMDh3Z7apQxEjWGjFtuV1wbA1TkpjfosJ8wjcyYc",
  "key18": "3d9QSNLsZAR4c76hz5GwofeSchCG95DGg4ueiAjEn18xY5ccvFpqyFGC5LiwJEW2qUtETph45AYcQifkJvs2c1JB",
  "key19": "4HCgBEKyZtLNctveUxMKvDZzgnNTrvmazu4TLBWLhRLhH3ALsXpT11DZoAxKUWj6Rzn9zge5TVoR8WFcbUbfDFAg",
  "key20": "2dnffzTgZjBooXXrjYyV7uUw5Df5PNq6LPwXcVqB34oz3B4C5tp9nyvVLP8ZnpNYt2LW2pTGNwrBavAZy5mtRky9",
  "key21": "4BAabAsXDoP46bGQt31EWV2zKxTWZWYyE7jQjoQnMDAocjPytjTvmToPuJf8wouJ2vkN7GU9YsRpmpnaW8xtx6DR",
  "key22": "5XBZ2E9bGCcW2affvVGjpQ8EpKkY9pVk6qLWfr4YBhkkewG8D2YXBP4dyVYdqGEWkjmMVegXH7AgD7FzJ4GjqwZS",
  "key23": "xryvVi5LPuXGwFN5jEBZL8jZfRoyp3oL8LB6EudrtA6nt9PJLzq3hwLjfDeiogVHz1rKMJ735RLvCfupjHqdMxX",
  "key24": "3Eisnb23BhpM1nuNgHNRQgEoPDp3JNEBUuWigPuPVdCYszGVoeRmbgK4c2pHPd8c3kJwQ66kNwe1bKA6UHH1UjJ9",
  "key25": "2C633RakNmVmEiSEgktmj28bZjLeWFubhxs9AcAWnsnzqQKMMgCHtRkgHkXEvv1nJXp5BqPWKyiGVH62CgxyCaVS",
  "key26": "4eUbSHcPnKYaGV8YpVU7EEBUjxr36oNwwmRFRfACu5TAC9ARuozwMZUuwMz9jm5ByC3a8ggWsw2KWa33aAuifWzY",
  "key27": "4Kvao4erre2GU2R7P9cAxCQTDFN1ZgHSkwHjyTin1RoYa7zbiabVwt7eNwXwfji3dqHL2toC4YxXsTUCJkWuh5y3",
  "key28": "pvyaWE718b9Mh1LVzCZ3xo5EmVXWvjJocq8ezBHMEc8mxVv4JkqqVdC9wSwygcVyRKp6Zmp4ZVR2M1s24GxqT8S",
  "key29": "2TntuNVrPjF83fjXs7w35mjDRz66gyxruNUkrFETzjjdQa5iucYhWA8PyFXQcozi9mjSYRaRzycw6FmkJxoM1EzA",
  "key30": "38X8Zw1BJ95z76WZmqLeG9aZrDqG1r5QsBbg51J4zhSuywqnrBtdEmk6LE9yXrbsGWQ6CM9Z9grVS5N5qp7LUywZ",
  "key31": "5QAZzFZfSud5fmkzoqqWnfZVvyoLBvNTgE33uRyDgY5wFE7oU191YiS9zLLiZpJPYvZSHnqP7dLFE3XoYie4HHPw",
  "key32": "E9McjS7919BRQSPjzuV7N37rcB3ZawT2tC2MQau2ww3RWC1eHtwK14MuZHo1hJUhgDDPvUbRAyw3xRZUZxJT5xX",
  "key33": "3uzZ3BtZ9TgWcnkWtzyWynCRAiJYbSYi23Q8FhR4N6N2n9nqm468tpk18hEoRnE52kn6BbahgPHUSkvU7Zri7uTp",
  "key34": "4CWP5XjYMuLnaiMsLm5NyKXGdoauMeVr1GxX5fh3u5vE9Fq4VUcRU4ETtaExrrkkswfjXtCM9DxmFrWLhzCqeLZn",
  "key35": "7BaHghdxpcoRsLZ2KsFqtEaqYpTKJRecZSCWTPot1G76ERuFcSNxMLNMcHXfo2aKDiTXTa8MRHykQyPBXNDvX79",
  "key36": "4zUigHyHtWoBRv4kqe2mKuJpU1wRxuLe8qXSX1CVZHP3hPPFKZeKVuyWtMoV1S5SoMVTn4PoLsdJyXYv8VUXmdCk",
  "key37": "3Yk7M8nwbR61KAHC9asrhw6ksKiwxNjAv9XP6EN3iiSu2JCrxFFW4UVaG8ZgE42atqJKtF6iBoyPGPkp37NAUDhB",
  "key38": "43F9XwXybXgW2F6pZuSex5vn4rkDoAdQmY4rieo6EU5y1DTzomULLF8kEm36WbNBz5Y193HvHGEDaMYzpNwWqJvr",
  "key39": "2GzhDHDEMZ2wymw327x3nB2hKcCS8irgJeTqYTtm7a7m2REAhxdPL2vXD92hqMK1hDQHhowLbRVqa3i9L1uAQh6",
  "key40": "5r3jaUMp44woCjc53thGNpbgP9bne8WkL4SvPEhC2mFcNk6Q99RMSFRZqPjE8Ubf5XM5HNPhFXeEoQDfhZi1XL8N",
  "key41": "S9jtLWyeaNJgYrK5GKdqhnVUDWFsUG9ANrhZCNWpqDzh2V2L3dyLagMdR2rHr8ymTrUYgxrUPRPSTyKJXR3ESC4",
  "key42": "3SnzP29QkGfB6D7CUTdPc3CMQjCfTprjCJo97sVkHWvfecneyKDG4DXpKhdhkbXmHroutPHFrbBVxLYG66EmehWN",
  "key43": "YX4xZvDPczq1MgKGE76FKFuqhxzzqYF94YKrNK5fwTot8qabFUgUfNbTaZEJ8PSr8sBbaFs66TpJ9LsHMSFaH8u",
  "key44": "4xg37K3uzimEdfVsY7tWezwtDJX8fTMpS1YMLA3C3RNSgp6T3JWX7wXRoVabWGsJVHxpkftUTsz8FuWg2ZhEtiZR",
  "key45": "28qZZdRsKorfwsGnz98Xx4JzzhoiirT42tsdapb6pCY5q6z41NbdFS5Fk9o77cavg1UYhhQg7q2QK7LtmGa1vGys",
  "key46": "46ydTUyg43gonXCiGtYVY5AgAB2scJJ7WerRes9o8f3hKG4Vpm8W7SL3XwuvE1DcEDNUtQB6LfLSKLsj2pdHVkmb"
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
