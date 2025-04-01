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
    "2okUqjc3E3FgPzVpmVqmBbkHutCddGM4ocNrJkYDQNrdiKiW4rCDBqatU1RiA7G2suXNnMJWvnSTYxr3j3E8q5Vr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oVztcKrQdvRVqLgdEH4JtUNPjxrF5L5rGwyqnqGUrvdjmSNB54vNLU6oSA6CkgmWFZdtfc489Lm1WhKyJq2MVhu",
  "key1": "oo7NfbyiZ8WP2rNkMDyYq6vMHD7FMoz26bK8qGddiNA3u8k5KTn4Ap9172f7xp5CGNLJRKv8G6ivfETqvdJGUu7",
  "key2": "42SZNH1LmJVkjzih8PPWSteFgobxpe8Aan3QEn4Zy8aRMSYCgGCbEdjhDkkv58v7FsdvniD5NuPyGat8wYeTvnob",
  "key3": "5NTzkvK2UAJMdpquzeSSTSDq356fbPJnUenhR3exVA38JGZfCk4ZdP2kwEA1C2HFxuR3WK4dYMN37XgG38ybnZuL",
  "key4": "3myi17B68pDrS9yyJnmgy8h9DEdrXyUrNChktoBoGqtemtS3s1KhwDTjaem7PKHkxFtNSxQKWYUpdXy2asJZr8rH",
  "key5": "4Edtc7iUs7TKn5CR3gQY71Wez3sTJw65sHcxa26HZAFbx8HVScpftGkhvLteDRUx4Qe8wxDvqerKhRtqCF76NTFX",
  "key6": "4fAa6QjicEdJCcZhTE4oVJpisNBsm7qhxt4t8vAGfawqjVGy9TPVLDm79yUFY1hDXcJSpjtjkxSUzCuM2aFw911y",
  "key7": "2fVGMqPn96ZDGBdMAwHdLjnAB1BLq7LLffpUP5E1xk8NDUa2xA2ke5exErmSh6U4Cp7GGZyTnk8EErZjRSKi4xhw",
  "key8": "4h2adquX3fdnf9aE6M9nVU5zYoXQoY2Qsz72zxUbdW4EUXtJJjukpaPrkyovGMpdcwuUkjuxJY5Q1Lk8YWeRdnHd",
  "key9": "uTM2A5F4LG59rQdsBrBk9tGfmo3ce7bGqSB97Y4JYhNhW3GhEDR3Q7miEzv7hmKiUV1mdjxNneUBzc1jUmLMvwR",
  "key10": "Zx1GTwDNYpKCx6funoznHaRWgo4U3XL2UYCUzZovBxDac1cuAAGrrLtvFaXd97GthYH8k8JfqU4aViSp8b8Cw8j",
  "key11": "4T2Zaca8oNLpCZvseUWdhKsgrZvHj6x6uL4WzKtaEPQiTXj3a7knCQwVym3f4yVPmjMTsUwxfWNnu5FDzV6bzKni",
  "key12": "4PpDuuewU2bQSVQyY7BSRhBQCMFi98sGfzjdZmLfXrbe5CebpAVy55cScVErDxuU4662537yjHU9tgJi5Mpurjt",
  "key13": "567e9E5haq75LScGVHv4WjXf9EgpQ1iB2SAWgDvYEBgrRipgGa5WaVX4XMqzDVnwzPbyZJ7AqHJq4RULwuaGYUw9",
  "key14": "5krsXpAbqx9C8HrYocQcMswn8aEEnxL3YEYd6zanY3mi3F1DVscFy6osJEnPTBJvJukjNA6WAmn3wa4kj1SgoSHj",
  "key15": "62euHRecBw39VXabx3ju1vc7YZxHV926Ew4N4WVz85uAYH4b9PsM69Y6GBehEmNc2kP1Ekh742TgQkSryp92NV3d",
  "key16": "2jkABeBxu8UDdE4sfVLxGf8K9fqLzHajURibrWdv9BY5WgwWfT11cQsvsZ6w7JcsDDQ1WGYhVQodrsEfrijVoQJL",
  "key17": "EsuR1n1KhZppGSaABtYuoqgmkc6hr8eAHFr7ckwmQERGEyBVU1kpnCoasd7Dhmy5pAUsjfcharWD8RaDrQ6bRDY",
  "key18": "KZKiWeL67FEUynwZ7L58mddDCsRyyWcmnVjPM6Q4EV5rV7uE1oMG654YRppZdURhxAgCdpAaLRc3b6uSdA6VQ5e",
  "key19": "2QpvNf5tU5P9h4uuSLnGHeAsEatRAC1ibG89Uxc9NCJeMXZJwmWFPyP5UDVb85BTv7D8HrdcWSEZ4F8WjWz5cZ6S",
  "key20": "mnptAJbVWYaWyeBFwgLsZAAxu5MURXHadQYGfCK9ZKZSZXyQTRrSbDd6VKKsKgdzuqyeugRGZvLCdyi8QNoDJa3",
  "key21": "3VQRfqRcaRmfnK7kJGvwMu7PUNB8Qiiw6YAphdw4Hgcf1hbG7LCNiQPVePdcDBggu9WfUgj7B6WVPDH1SUWCK2ry",
  "key22": "5AMecXLKnk8KNSxRkxgN5XnPBADAtB44aiZVkQCy7LKrUhrEGUdJ15ANDM4RCxm8gwQPfpPtcbs9ubJzsRG6Dc83",
  "key23": "5muLTX7vrchPfHttHpmWNT6GK3wXZrKZq4YvBcQsLJYPaYpj7Pvpn6u59bPkC2C4TD5VnwcujHhEUeLBJ2nJarPD",
  "key24": "c2h5iByGdRKMHDFg1TsJSapeRj8Vm7RZWoXonhhGpEhDoX45JZzeRX3NcaKiLjmLshKmCygmzB8MpW212iEpXFP",
  "key25": "5pDhv5VGx6U5zi1t8LVHNAFfRWUkikMcs3pwWbnMfYg5JVFwAqN7rvM2rsj8gTnB54fgQsH1JPtPBfBkG2cbefu2",
  "key26": "2ratTExJyGtk7365JYKfjDVBY43ASUJUvibvwbDgorD4Fo1Wpm12EBD5GMLSiqXhTKBtRusjwTNEcVw7aj3HLeKU",
  "key27": "5DuGjRep8oSQo5VTsFU8hGsJLKvJod4KdBuyCpH91PcRtSdzKxRm5P3Y8EAykZ2cTXFSm2XynAoQZyaMG2tgUB5N",
  "key28": "5eC23QjhfNZHNVhH7YSZMyuUWutbZyMyUkdAb7r95mXARahEMA27MsWa1RpvisvnKUn8M3LZee8H8t3Ss2S3RJyF",
  "key29": "4iWFaBT4z16KPs6TjEVgp6RbFP2CwpKvTwzYDng2pWGCVKBG7sstD61NQAdVd4kZud7UtL5tecuymVNzKtzKqs8Y",
  "key30": "fi7zVnq2btwr2BVv15QC3zLAtd9wk1zgpRoXxbATqdDBciShyENJQtKoh1zssP3xa6f7Gjtu8yD2F8CBhUrASLB",
  "key31": "5AaY4rvax2gXcr6zb8gKJUC9DrQVvY8NymwttwtTioTeVCirrtabizmX2JM3U3N7Y9YPjHnzudHuePgvuK4uAfYc",
  "key32": "28ce4kwRT2sCa8ZBBHbuu27WrT2SZ6xHq1mu5FX1rXhrzPD2KYzkAewMgH5VGcHYa8yuGyMDks33WaPZ3vT2RAhx",
  "key33": "VzSdXiJDog6ZDwDp2c8Ftujsv1tnpAX5xAkwzTjXcVusSmgbEbtDChr9H6MPrWT2qCYkUBVuk1JTiF5PU3xGVfJ",
  "key34": "r3zrqJC5s3Dci2Q8VoJkiTwB1YGqEJ9hoKnE7eNob4HxubRG2gLpbmWZrCASw65DCsKos587XtdCEeJNdy7PJm2",
  "key35": "GyCfsPPVri67YwmaERCyR5a8mgYfTTuzkNLmCu4rQ4bQWLqnFnbogwTkRSqgefGrUUmvi72pF43iYKucjyqvE6Z",
  "key36": "37Xva7b1ZH5F4AwXnWvU7gnxAKpTwMVwGHPt6QiK6hBqPgzA9GUDKqKu7P4Mty6WSCw5u67sgt4tCHQryiQ4qej3",
  "key37": "5nrkibjMCuroqSYSfZnbL5irmTLnQaVZVnWqGdNmxZT1SyrjYW2xeH3GfCRYiRxr1XBBXek83ZRZypvCX5LRfWH",
  "key38": "7XMAEDnDkanz37M1WTexydqXxaA9nFt6cqhkwAjUs5VcRrgGLbSkM9uiTKx1wXcFJaS6PpevUhHoui8PJWAoaVM",
  "key39": "sSSCoE7JcPmUTmZ45t8j8tHDJ85TA6m462wZ4VxxnnBKm8QXGzTh4pWxsy4xdKUL1xbqBKv9KULjBdRmBYuXKL5",
  "key40": "2qoXhFfak9J2WFdDDVUNHzaV8srcJ4EKZLQwDS2gwgfLXcY4eWpnc5W4ZDXFSPBdwjVfWsM1LsQAiLo5UrKWsSGt",
  "key41": "5frJqyZf1WW5TGo1m6Z4HUKYRsupSTuJSWyDbVb3QtmktTqrpQxi6D3S7NKXeasLUq2CMP7gvhQcpJdVPKWBwKBz",
  "key42": "uzyEcLZXrs3RqeRkL6aUvPcjnfChUbd3DTawGpwGELEHEjdYA5Uee29zRAp8qxgYCHbnUSfXSAhWnveK1NpWQwi",
  "key43": "5gBcvMbVAxTgarPChnKakk3Uxjo2ygEW5u4G2jxmScbDzKooR799h1MsTDFnqJoe48EFk3KBpZUjpkzVdtHyWgyi",
  "key44": "3xyQJHWAhctaKWhiBzzrqH7gGetCxyvZtUWJu3dqrMnQCVAiRn5nTuTzA3jvZNDv12b693vmQXHVFfkntXVUcGrm",
  "key45": "dLMn2LW1rQFhPtnwKEpmsU9Xv8mtTWkDfiqSdWBbwnrgKHcLQ49EuFn9A7UtsU9UNAvTv7wud8NRgb3gME2mTQF",
  "key46": "4YshJjmGMNxSMWZ83TtQETM2UEnzr3DCmUfb5PZ67kEJd9E1gEGkx2NsK3EHENZzG4p5SEfKNmAnEadSaPjsRjp9",
  "key47": "mEPpq4bd3UJsu55NQMNg46rypxmRc2AxcqYpfj3PqeGVcAwkB5R5pcCNFx1oggQ8ShEx9QcHCfuRCdVegbuTGbm",
  "key48": "3jZnk3nRFMuMxz2NwwsiAsxU67jA4utMDd8Q4nuL8T1AokgTd9qFdpKbkaeKF5kfUxhCTvng18ZBJFwJLjD2dmj9"
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
