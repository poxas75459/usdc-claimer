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
    "3LmiTAMNwsmmAFgGSR46tcEVaen2YMDdspsG5u9u33PtnnP1Cy7nsMRrTYfWfMeVzqF8LjzSjqUgecHY8R2GUnKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wbYREVJzEaaixdxomwRCvzWKjHNssQ235CwHpZG3RRcuJLQbiL3ZUmBDoLRj5mrTHm6gGa3ii9qxFh629o1gZuw",
  "key1": "3scBcc2Jz1mwZfcPjv7BZZkLJx2cyxXfCJWzZf78iYuvn9wVuQgJM2J5DjriRZfMxdxt4i31CZckytytkLCVUBoS",
  "key2": "3jxRPCYibLZu5BF1XyNmsxr6sHGTEVyEtXFrJ1uHDH27TQb1zYahS71bpsxuD2MQdMWJfEBVFWRG6Q8k3csBu49B",
  "key3": "RU7nmw7hCrtZ8Rybq4Haf4EsKxNPhjt6VQLuXxSM2doUhPAC1XbZ4oR93mKJ94YnJwzw3q97Jbje2PZTFEBTWUu",
  "key4": "2yGVzYx4QxSsWbxa9PqGpjjcPUMHahFvKz1vrbkrLxYh5gN3MPdWu2QjgF7V4GdioUme91uCz7z3NV9PBubzSvwS",
  "key5": "5pafPwmLkENxt4KkWZjniRvbquAHh2hHaZQ3SsQCs4auiJAdGrnoGXnYBFGNftxxwGijJv27e6J3UcGdz1qhSdrH",
  "key6": "36edZbnzv4bhaPL164FoH5CrmMQVsesk8S1FjDboEXxW83cBssMr9CQrNmF2oTr8pB7LiRELf1ZMKcjA1whZsaJg",
  "key7": "2EREiscD5ikqUMdShBgoNLzzf4JpHypoGsQyqQkbSySrrZyG85Qg1mGfM5EtAYiFV9wdoJKfM46tM2M6iFxuGXYj",
  "key8": "2NXHgEQftjY9pNT5gLQK1SxSZgb9KuqoqvWfeY8pdpGtsRAPZw1njDApHjsLvkpq6XitkRfFHT8tUbpETnaodgfQ",
  "key9": "2csZa62QqxGgwzdK44uCYEpbPH3tuyCjxvLn5YzGiZhoeuiQJjntsUMggDvyoGnH1YKtCVBbQT9d4TD3aQq43EPe",
  "key10": "M5FjNYoANseyeAKz1apDdr6Bqwm6bRdE7sar5bE3tprt67YnWFkeSoe2yQsCf5dvLGvzQLPpev428pi91iQSYHG",
  "key11": "5tK4JcVU6DBmcaMH1rEN3myfYYr2QrhqMNw4rdemefxFKRtX5f1k5dSb8zBpuoVGoF9ZUcvYigjvrdKCYZhsjnbr",
  "key12": "33od7YE1ejtYw4ZuVKcCQcAcrpXFPffRLQXuDhBZEniDViTGYx1MVh6PHYf9rCmP1L2jGLoUzn1PxNpB48hbKhZo",
  "key13": "3kBAohBDW925MURcTba5sncxBAJHnBwYWA83gVDcW8V9ope5ZMSvzmfd8YfLweoAPkmVjFVFixoFpF8ofQYMP5Ub",
  "key14": "3h6U5vkcH6JbzE9NgjqFVV6V3xJUeiJQ6YTNeCHFEqRhLpqL8mqAixMwA2vbebdNoUPTnUekHw4Q9n8mK5ezU86X",
  "key15": "Dreu8Pzxc89TUyQGJXdsTTMPSZyYa3vxWYQ9mLkDQ68j9tpNbynG7DdLoQNS5UF2L3pTXux3DG6Z1W8fKA35wUz",
  "key16": "XuqYYUWLr3vNUPT52dmy2z7xajgiD15TqhJ6xMS1VUETDNPEHyPBTXgz855dcwLkG4FxNxFfcTPtNP7ZKttiKnq",
  "key17": "4HexhNEeHcbxTc2aQwYweRZnRuBTHh13RDsda3G4DgnEHi1ddoozv84jXFoXFrQurAtytj5ny7DPnmc5ZNKeL4du",
  "key18": "4Y3mH2Ay2Pcv5CgQZyF8YEnk16aQhP75gYrh9t9GonhSZLsAE8FzpyuG1U8pYq9BHg5pN9VxMQeJVMDHgq3ktdiP",
  "key19": "4MpEJtP8thi1JvM2DjcS3W9oW2yuoZ7PS2frN9N9Lfrs4Jcx7oNyNtRqHSTQ7WZ96PgU3qRsEKnMHk1uuumWaKJD",
  "key20": "5SE4m2rDG3L2SGcxX7Nwu97jd1FxkdG2JosApBMA6QLgYLGnWxpkZdFMNRP3yAn6ZadP4y2Gh5ysMUhnDgBxG5Jm",
  "key21": "3wmkW34XAasdV5NKCwi1ZyMjXaVs21bS3Nn2odRh4SstpSy6VHHSEjWLynYczWwBHeUWmzVgQZdR13VLfcaRN23Q",
  "key22": "4by5zBoUivFdGLZpQ2NEms8ZvcTSkDVBtK4gVHD4c5pX9upEyiBGfVvjqjf9W85tt5phsV3tbrbbSn4ZRG2VAbii",
  "key23": "2J31bHgNkaQGnEyg9u1mBKwT9exVg3J5LfaWTSdq6BvsuTVxANLiLrYLioNyNydEfv6369QyqL8JXBiFzfZ7w3E5",
  "key24": "3Zm2gwe8jaNSo1GUeBT9MAhj1bA7LVQrPJ9xvF32SrBVrRFtAsFQH4AsL6mrpCqe37Kz1kMPdHopHiE4B3RGvbbj",
  "key25": "32FjH1FoDFgd3FTtnm8BN3pyFcE1sQb2gJEkE516rBomqioEyppbjZWtyKCNbLouL4JfGq5pvDmjiXuiGM6CFmtN",
  "key26": "2hfoikXm7Aof6FGJXSUdzQpBTcEdbQU2rgZVMKLFoMc7hEHHTBuw18EY96gHVs7DtfZCgdRXH7jghba25SdN3tRs",
  "key27": "51b9ukMmqe9FfxisasdawXNazMf4SpXGaSWZheegoTcKWpH7KmfFyRSLcQ71uhqx5f4tEkYk3TJowFRjxmjcjHJW",
  "key28": "4Cqrqy2kiJVLhuBtrp9Nb4NpWGbb28ywEQDRBdVQMkDfmZRA78NqiGH5wSnAg7wYGpk8p7SP4eP1M5MTkSibdeL6",
  "key29": "2TxRUmU3sQLZRkiQCTErT12cGiyijiS7rb78cyavFsxdZ7ZQSctZgTdkpVNoMvjf8um2ZVzkRuMtpDhUGmaKknJm",
  "key30": "3qN6TxodNjPSxGcZPRs4pVRTur8ny7d7UxEJSN6hrcnju2kKL5N13vPpdHk84cchWm9CieptTUdwDd3KyXKak3Mo",
  "key31": "33RDaSbTv773tfiprCeB4aRYAvzi6GUz7KdnQegjyTju8N9oMyG8iuBZe6Asdst5u4s9eCMWbpJwRfbUk3WZ8apv",
  "key32": "yyhBMYdxRXXWEYC1yizo65MvS8dHGpGyYXx1tUXURJaVVvjmXTTK8GLAKta1rH5DXws96FGQdMDqSoy4bqcUrFN",
  "key33": "2zs8PBXLpKx8cGJyy2nXsosMK6RAshaX4BFgm6S5JigLyUDU68hsupBzWxq268bPeoMJEcVpHpLmZvJPcGqabKs6",
  "key34": "2vQ5jQiYBUqsHiJxpA6Mv9NhBDZQ1K6V4H6qmXQqmxT1HXZmGz7d5un2dJ6wWVCPc65YQQ5GbdQy3cRqCT7PPACV",
  "key35": "24CX9tQBEWgfSSKn3B49yb7BPqNGBGqFuJwq4GzeeDZtJ4Ympdr64CNzuBG9TY2euCzjbHTBXkyh1TDPrELoZ8RU",
  "key36": "4fWdUx1eSdL32yj3bonKknmHw7xoBKZBV6Lfa3rGGzBBueuPa9mUtvAhbTeDxR4Nn3mHvtLkt1fybgHou5kKVX8p",
  "key37": "N1LQeSkr8AZxLVDQsS7nHvuaDsM7YDuZAssehVp3NGVQfKMMRwTUj5q1ozC1TmcXoqQJf8gFoRGwdyscoNCx4MY",
  "key38": "xbQeyxdaj2GXo8ekgqfUEx3GfPd4nLD6uCAuL5ykWLUhjstRdzmmXfg76qex8xKNkn9V5Zc7hDaGyymGnuH3Fy3",
  "key39": "36eEpmNXUD4cfdwmpRtyNbyiNvGJRamnfqyCT9AFZ9rieVivRLewBmtGGosr9aFF9YVCAAQZMBicBZT5gkQW4jgd",
  "key40": "4aNakhQHvEPaF3ThbMXvK2MuuA55sFrsdV6v11pUU7uBHqwWuKCUuhShg1oYv6RoVmwWvUnPTwT8PZRLe6WbbDnQ",
  "key41": "632cqp7hvRwQSF1teuEpjeG2aHHX2bDpUYTbrNGtSWpJ8CYqKsisGYGAtiPBNsvcWgmF7FkFF7hZ8YKL8C9STVa5",
  "key42": "4b3K8hfFwX256aUo2uQFQz76aasiqXg9e4PhsmPYQtKAeRitcbs3Pnsv8QYh1G9RLDjLadtd37x74jPkfdRAunW4",
  "key43": "4FLBP4Xt2gV5h6etT26F3JWQ5MaVu757Uq2Jmpk7QvMET9PVxxyWHTjb7BqqqH6hxrCJNy3JobtLH3nB2UH7fWAx",
  "key44": "2bXKwnZskmYhJcP1M6BPJZh32cDXTecwXxDfJJJMR4PAuBoURUcMcjH9h1YUSp3rob69viZiayTCq3rhm2vPiE3B",
  "key45": "3fevoJEzAoGKsZ9iv5LdNWY1oEiTmNrzPft8Kv2ztK9J3CWtVHfVPu74zSyJxWuUwUx9sJHp9b2XH1wS4GyWgubS"
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
