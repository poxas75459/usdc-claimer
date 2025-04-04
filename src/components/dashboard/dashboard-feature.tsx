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
    "3RY5Cwb8j6oeLoSvUVQMAEuicVdCmKqEvNfLcWfztmUyyvB4aKStBwEjMEj1w1syyjxhjUdC6bJ5M1CFxkRL9vqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KsKzP5qh8EkDT2gs7CFtdxA83DKLSLmTuTtp6vgoJZFrFUUZt5AKebnk77s5xuGuC6AiAqvAUddZfdM2FR2dQ4H",
  "key1": "ApoGfB6iR5F7ioXpBQRg4eTY3qBcEPqfSSkDQgZ3GAhK2uPzLoTZSXJZ7SgbLg3YpV59NuNBG2tWj5Hc7X9qa2K",
  "key2": "5T3VpscJMB3Zvb6WESssAeykQyyzyjA2uyiw8BDjYGLrfMK2tx7dpsNVGhsdiYwqTMdtT2HBhUFZ7APXPKXHdzhY",
  "key3": "2o6iM7A3SnuWyn6eFK1FtsP3TaZC5U6ARi3DLH3DXdpyStkMUtAaGWZWaT7k35hEfGgSKfWGnxg62wziGXDJE72",
  "key4": "4WpS631AmiJgvWQqiG2nj4FpNKzfPadfpc4zSeSzuZoqxpyS7ydxNtAmYsbmecynFGNJjMZY9f3xJ9adcQkGKrH5",
  "key5": "64FnVPkr7VELNRta8NDqxGhsr86DjW5ZLHzMvxc2hLsA6Youv3efWsEigHZU6KtdsqL2cbbEmeJqzZkjiRVMxqTc",
  "key6": "2gYHaazbVb2tPyKzmFARNADdqMgrgteLhD3Lf8Kire8shdapZqaNCRo6Y7xuu8BiTzVQxTNPwCfmkc1vkcDKKjPn",
  "key7": "3mjaknmvhe3DPJm8CgovipUzEJa6356ymHmF3d8w7vHaHgVn8mGXxSyexqp21srNs8zaohbwRJm4tzKX7NLz2r1z",
  "key8": "Ka4tjFW9gLKyz8rrTQjCB5GQgC6sdeRoZRxQppfPo5dyc4TdmYzvPeqS49oaS9jGkRfSBrcf8VPeTuY3CGLYEjY",
  "key9": "4cPPwggKwzjaVkL3v1HoLccxiBy4baMMoFB5Ln3XWTkP9rCU6msMQ1GmYQoGxy6CieqtSz7E2nmUt59GVhKG1cU3",
  "key10": "41FfLVkwSjRE8EMme9GdeDoQorN4Ji3xZaYbBj7s9DrzveGJo5mYeyxiYtsa5MRuroBMcJf8TVMjB5qT6djimXRm",
  "key11": "2ikFwxXMCVhT2KSNg6k3Ee9FN5rsx5wkwGhvMi6mD7vuRki7kKn1CminWgKuHLuWR6aurFeV9dAY7iAe5tARLkfY",
  "key12": "XYt1gidpBhxnpxnDDc6SuLqVkHHp3N1zWHnb8f9q2X7xZXVrzL1NReX3YEYthJWoQHM7AJEpV4YCndgEQPXKFma",
  "key13": "3PSVSt9w6vmM3ZzRn9Pwf3eYyQTL5jNdsBSTTxyBRGfNcuYRM9FPnw5vCU3FR9YiTDBaqyEJ8SWnVuyUFeNzAV54",
  "key14": "vBj2VQMkuovijMdPKW7WWLZRQp2GWSApeckdQsDajsS2FkswwCQgkp5pxe16re6TP7ygQJcUTPqti5JeDBQnZLj",
  "key15": "3heTXk5R8uQ11oBJbjGUGRSGt4As32UxmcQLNghLF8QBigXxe1m9iQt7XKtf9cjb1qXTc62KwXrtpKjFQQFvqZK",
  "key16": "46Xz2ZQDvZGwQ5RNRN8bFeQgkXS8bzbA11hb5N8nPXthfdYcuh4qnBPMvUgjjCn63Az4t8DnHpdaaB9wixdLkdj9",
  "key17": "2gsGJPo4jYt5QMCgT8M29aJzn6HZq5mb82xvSbHeiRE5w75cEkmWbFB3dsyB3ZTxgCv86U8FJYwRWV3vCcwDBVP4",
  "key18": "sZurNGtLqfbThe5T396x4Fh3cCWNaHQRjA7gDGdVorLXc21SgGbKrhukjbkMZPi5D3b7qM2KePD7BquhxC7K4vP",
  "key19": "5q6HBuwbYcxRyzCvkwT8K2Ma2yRgfyWmZCTB5xF2GcpChjexDkZkN461LGxsm6Q6pP21iGbDWD9REQW5PMJi3EKC",
  "key20": "3mDgYLGVHyG42S7SDmG791fHocEhQSKBFQgU3vTPJ4SRg3dGHjhLrsxH8bKarnSEZREcSRndTeJHf419t7DnQF3F",
  "key21": "38CztUyhTWkjVbSzoBreG2XyJ7xpRV6YfyfMSSPz59U7XwZW7AAWUdGyMm51HFo8WEdpUDpmXLChJJFBH7a2cZkD",
  "key22": "2RQWKhzc79xMZub6QPPg4yzu26yNmwUTTGzMPt1tAWJWjsjvaGrfwQw3yejvre8jxCC2q9CaVYojewkq7q18bWVC",
  "key23": "8ySh1NdSrVrZZGGH2sskrnkmSDRMxuWusMWFGCGGj6YTMHcwFt7Dh7WSZ8TKr7fJWuuRfjHYot85mjVWrKqoVG3",
  "key24": "2pr32ifXrFHiSuocGPWTHb4UYZG1Xk6cJZ94engXDER3ZzKjEPkNUVYfkr4mGRpDfHxiqu6Kb5f9RbXWf7KsmTWm",
  "key25": "3RkRhJ5CHwDmqwgmhRBtEvCyyVuCsiQZK1r5SfBv3hkxTrgzFsTV8qZqor5oEtDgYbzFZSMvFSs5LM4vBCjxRWnR",
  "key26": "26Z53RisdLt8vMpQmxNpoEqbPjErvJkXut83h5kQsYXML76MJjCBXif7bqPF5icqPaFBA3oQroEn2KJZrK5WJnLY",
  "key27": "4mHVL1Gagob3HEEwaUBXtZi4Rp1pYKi1Tf2vWAAvgRSrypWj21nUNzfdp7SaUDUmKkv3hEuBLTniPdrFqrPheS18",
  "key28": "4ZAvGgZxXKkVDdQUwWJTrJFtTyibGjfbX1jx43vbksGY3Ed3x6XjqWFtypgrwT4dQHK6bZSVM5hVKcpCpC1P7FYA",
  "key29": "5QQSXE4zpU5YVDxsh9vEZYiKmhvduj7618yrW6U82Ar2T4Ey91Smq8CiVfmigTojQwFFC6LjUd8HqMgZq6MFHTfm",
  "key30": "3kZBoB9SfkshpyFwe8kyseJiLrgDdqwnXDv7Ug3hBs6giyEv8vCUd78qzDTDqXjHtU6Q9tYp9pKVYFgn9f79St9k",
  "key31": "5oNJBy4jgsVKrqdmHXx88K5iunzSmu15m3LdUF6AqpkuyPK2kR78CznEqBHSRgQFZGUaxZh9obYk489Vm3iQRpPZ",
  "key32": "5d7VGUkcHrwpbLCdC6uvooJMFTEwrxuESVJ4Djc8ThB7oe6UnvdPDkuaBc6LPDQfiUZAoF7j3SjPnfcJhNHbfnpe",
  "key33": "64ZeLNt67jR47T8iSzXHN2u24zKXitdk6Zkf1NN4PBwJg7PgqK2QzsyK6x3fYjSb7zqBPoHP6gaArRAcUtcX3x8N",
  "key34": "jDPjvNj1z9rQRo8PA4xaFrbY7GuDZ9n8xNgA7QEj7StUT73NyWEh8tAQQVpGeKT5zzxr3jPbaYPLUcYE1PS8cPc",
  "key35": "3yDckcNrzv7njTgznycRxGdpc36Lqr7eLZLGKEcB4CwsJfsgjC9D3tUs77SXtg56JsguWmiuGSvKL4vzcx89wzMp",
  "key36": "RijH98XwE459hWdHkWyxKZcjHANPbxeza8DzLxCjLg8tA2iB9hceUhcTBKUvJE6xz7gEDrUhamBVDYxAVh5Kgqi",
  "key37": "o73aEekwdZffvJCVfFHrSCYmq7ymJ5dVnxCr1KiKqRxjGYHtiYm3mWB41NVjNoiKwzXbqtiXL4xUwmFMSS51W12",
  "key38": "2ftFc9ttPQYPkxVHKtEXXZUTcXkMpFpZp9AkoseNpTzf6EpPEHr9w3iULcWkjCz7MxyCALkXDY8QpTcqQyQaomEj",
  "key39": "2e2LRcqD662JMUxP5w3EpFE7We7QpXgib9WAhaB82TVdBkeAXDcLDNQRtSUF8ghh1A7w9BwNwoa6mr9dXb5DDKuX",
  "key40": "2UDDoLBFMNNreTD9hj7nMyrkYC3eR9eWZ8oS6av89pV5xgEQ7JEEuBLcymJmUunPzCXVYLzJgZoWDCeNa3uu1hxi",
  "key41": "5Xpwi2ZFTixtAkYcK56YCPGjbzgCosoDqeSoAeGcA24fFtZfvQqZgbsgoB5CJmHnPsDQa5ppcCkrBCqHWaUj73Tu",
  "key42": "4wJo68jg8hddadtB2kUadukX5cjtUQUnVitvvAsvJCMckwgF5WAuujNPqZr4vFUdijL4PkyTEcZbX5MwxMuUjs9z",
  "key43": "2S3YFY9W3pZR9mJVkrRe3mkBT28GvWXNsWRCMsCboP4ePx4CWu35wpguomWAt37M4bsB48ga3HGPrYHkTUpaZ8pC",
  "key44": "2d2vZdvf6axKJ9nyXVNYKg6jsa5eRZdrBN55JEBWn5bsSHn99QkmN34Ugh7JUBzbKSznC34AFxdbvBCSrPdzd9aW",
  "key45": "4F9PJwF8HtCnTiL4T3YeHowARuL8rnrTmPVr7jNidewqPgkeab9pTrZLaejWQZ5cQ7aywVYGNtxu9vJrqJFfSZ1q",
  "key46": "4caJCjavwqD9U5emBi32yR9TDVjTUtbFYTpnpYrYXfNvAwdhZqVpAr4B6gwiHT1pBZRnoLz3prSSzAmu5TsDvGqk",
  "key47": "4xSGR3yacfAF9SbeLEQz6eez5nqYXbLCXMxbShYyzGfJH4krPgbdunKRFvUfEU3bFUznZHp2J2Ldyx6zyek6w2By",
  "key48": "3WAZgRfnVAzeCFn1w5zVND2bnmo5txmhvoUwd6XQFAQ4xzSAp4EkUvh9FViyNQScGroqgLj72BmmNpkLS2XYRqh9",
  "key49": "4pJESoC5Pkriatc6y4xAmkPEhySycQeRzFeRPc4EgUjGMpLkjNLasq6eRhSg9paaXCRDdLJYj8kPMo9p9XhUN3CT"
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
