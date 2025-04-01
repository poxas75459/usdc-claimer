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
    "2PnB3w7grPrWBTCi7Prn1FoUWTm6DviN7zhCau1ag3i8PoaZxzeubBZPPXetEXwU9Mb3qM9i2boa5v8SnsdQKVYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YaMgVphY31NSciXDYVWW7gaAwW1ictSvmNxD3iCSLYY1RigBbyjBHYaSKhmKmaoGvER5Jb4bL4AqoBgTbQstiWD",
  "key1": "9TycLVju9ev1qpNmGYoQUry9hnjbfpqpZZiwi7eNhrhyGGwz5ZG3Jww4t91vPgfqgYjtqbD41LWuzf7xYbcAjYE",
  "key2": "5euTegjaRrzHLfUAF3x5DzpESZVSQWe3nXtHDJhxjxWZ71HWvhvJoxtTd5k69UPxA8GcGH6Jx52Ms9Mzz43KZJ39",
  "key3": "4jvZBV9WmoCsxby13umcQiJXrq5jMiRXERVamCxo8dJ4YzAFVPSj15eNXHTHLcEjbyqutW6uJZrEp6DmLQctaynV",
  "key4": "5TqXU34FgK92Bt6carm5AWL1RDoyDxekzjP38hJ941mXg6J9xhVYNG4gjVcccdms2ckdw6BwAVf3GQv5ZgWEBm1x",
  "key5": "2HYndL65aqhu9LH64XsYR2R51MhAVczH8jDA2uxcQ3ugv1K8yX6VxsPsc24ehjQtLvs3Xd8bHmMbKuG7bjQd8oyw",
  "key6": "E3vCenUa2TTT4YCJqfVNz4NsHGmWe7LwR3YSNAu8XSPkovoe42SmC1dM5wyhHUgxVK6SmtSE38QBun4zGSxZTm6",
  "key7": "qZxHTfHacert8cBybHcCAFDkwNR7fzs4DV61yooqTtjDDgoNVnXpGdV1DQkGj5gvYuyALoggatD83xhdxR6KPtB",
  "key8": "3sa2ieZY76Aht2scEUTWekFjFEcUMXZcT7s33wgUziobu7Nyzobj3dBTq2Xo2ev7ZzvJACWt4jgHsMnBjqrLTy7u",
  "key9": "25McKBBgVJuWmqz3oEt4ZBkDiaSwX64KR3je1xfsbGRDCYufLoL97U8wWTB7b7i2wLv7P74zuvKN8rhRojKtN9sQ",
  "key10": "9i59Dv2FdFGQ2VeVTZ543fE4c4vsp9n96V9teX7TUaZ6CHiehLZYPLAuoADVoqDMxninWut794AE8ZmVFeSbsMu",
  "key11": "2RqXu2VAbwznJPEQq8WaGBNqDAujQRduX5JVNGbCwmMxj4njkp78PgmM5SmsdpG3JxjnaXpFMpXrQjFTDwbzbTEZ",
  "key12": "42hodVu3aNVmrU9ZpQ2iTmh6wenswDibpqUUgDyz32XSgvNZ61B7Wdu7STEEnSCWfeoducFRLvXyj3RXDbYoXqLb",
  "key13": "4bLQJ2f81HJWbq8isVMpBfSLUgu5fA2ms2xAE76QoMwHH6B6CMY4t44Z7wiEZVddPocQcGevNHsCHpedSjyDnr3w",
  "key14": "4J6qtaTYNzrK88XNqUbnV6WV3WH9nQNcHKCVAuJr16noU6nABYQGZXd8e6PtZuBebMS9UeWxyns8Sk7jU9JdmHxa",
  "key15": "zwYA6rti5YCaSfmQNAa6g5fAiYqxk7F7f19A41JJuGx7soyNruVC7656zNtLr2pSv75RKrq8j5C5ENKesuJANfd",
  "key16": "q43wbXjFFgcYHH6v9iMD2RmPnL1FWXCpLykxG39LUCJwJNVV8Cas9YCe7kS48VeySrbmWjRQ4jcQUn8g2WTKRS7",
  "key17": "kteF3X2qb27RAGc2Tfbfo3iuWKXw7WtX8hd2bKyNrBa5twSKzmt1mnBGSo3nCkmLVir64txGCTQhD6nSbWNkaiC",
  "key18": "Dr4mgHmmZc1WvBucJRUwP4XrvnLqk3gDdBS1rgTgMpTG4DqaYBKot77U3dtCCm5k3TVqoqJfmayibC5uEwu78EV",
  "key19": "4KeXL9KZ7MSHXiXcpoeSG3LKAQSQRgQWf5zG124J4gfLDhfmwLvtY3XU3XrNToi5j73WN67yqBfhT876h8KUZbM8",
  "key20": "zPtWp8w83nJbkD4t7z4eJaciZMLQySqnAUezumdyNph9hc8nSrYcHDgzdLyrBwsFZNT3mT18ZcEJGtUnYNMCPJR",
  "key21": "2nkDqJfGp4uByis4HbMnSpr55JbJ4iVqACYX1kPyqLq3436oAwgfSKDyaX8VaNpvHpMxpSnwinsZg67rz7hf3Xqs",
  "key22": "473VtoNtJMQA4TSvqucVs8qwqZKegKinGUBXwW858EDwUq29Zsf7KReRdCPLtprhQP8VREq9zLfYUyrNPpN1hLZ6",
  "key23": "4FRTZz7b1zyWePjbA9ogSu5qNR9wRcm7B49RkmpWfodoLCroYxVsYjkGt2yFUC8axzRqT1Nhzi4vQvVh8SWWJtky",
  "key24": "5mGWR5vAaYKyBbGqJaLx2nvXpXTgbr2ZGMuQrWN1De1Vbgi4om3Gozxo3FqpShdNVsNXpo74h1RKuCB6u5hDJmDD",
  "key25": "2163EcemMyWYu8j5GzgEDGSWoSR4FKCVLcAvJPmcpeGkhEmY8LVDBdzn69q6sS88mV4sNzVWJ4ifFfqo448tQgHT",
  "key26": "3VemGaC93azArFyfzFHAA3UMn9gsYd7YyGw3nvEMs1MKmH99WAKq7LD4CMxf9qhmERsaHJCHGWQCak15H3p6ny5V",
  "key27": "5UTkfZoo9t5S2sXy4TDbFKYhvUGkcnMPw4ZVUi4XfwrDBAv3U7pxCa1aJZztFL2g217dThyimrhW9Y5hzpXikLqN",
  "key28": "62NXaBz5zjWy2cNb3n6E8Yi6bywwbxDFaz5Wd1ZcNxVoud6M9eJzwyTE9ch9uJLokuDiSNrp4yTBrFz3ZUzeVuVg",
  "key29": "3sYLZf2pA2QvxW9eFWaLMqaXciA5QjwTrcZLhWSwhTBwJvRXrtPtqebyvh5CqguD4an5pETu1xd6fvvGbJJLmxhE",
  "key30": "44QUFSKzc8ux9KSbxqiVzAVdwn8eZLpyM8qWhLxsm8qjKyD9yKnhHR3pN3eCBxbzSEDjfN5C8AJmzLhdLBekya4Y",
  "key31": "42DGjXzgoHbAiaTi3fnGdjZrwZEFYFrXUHQkqswGToBxoG5RiayqwNKYBPA85MUo7Tp6pSPMnmNCjMJ2DcfCJ4Qc",
  "key32": "4ziJgXGM8c8fpkcGS3mYQXe7vbHd837i3Ank7tSgC5Qk1Sn9twk3Ris21uVQauZ4mLKHxSvcKzfQ2NaUMsvb59zA",
  "key33": "5F1kQXXvUDeb1ShKFWKMnwMQAyVP9aJmPKBNVmMn5naqAEh8EoHKosvx1pqJxQhhgGTwmZnMF3EcAaxggT8ShqAv",
  "key34": "5RgkP5B93X6ib6zjooopNiGShUQaZUmJWsgFh3LY5Y9cwXbo15Ekr3H3uAynWsmYKQsCMUkTCLCJcrxSPGCPRUv1",
  "key35": "gGbjCSSL1YiTBo7ud2KAMX7Pb1g2qGvLvjFNs61eGUUFTYAZhB7zc3pVV9uS7zun9Jj2TL2mynBysEDGQSEi3Qx",
  "key36": "3C8toUjj635Z4Td5ofCTBULiWAdLnEpBsbYNLKzuNZCHKQ5BpUY3NnzdNeKtAag1Mt9Xh1Baiudppc3HQ2eVFAzo",
  "key37": "3GPZTxwKk6iSKpsfCtqTLuurySUzVKBPHjEVQCj6AJsFhAA2P5vmYiyqoM4MGViYFSvJ8ZW1CP1gkFr7St7Vb6RP",
  "key38": "3LAc6wBYB9f4EUfUFCTxEWS3GFd4ghxYd1tVHUiuXbjsMq9GonfLwaTVh4EDXezqVCQd6aY7z75Why6Zz8EGfvMZ",
  "key39": "4V24S4SS9ow24BFG1zDhDQkQ4mbYWhjoPVUU8281pbGtuwKibipSdLADqPsN5izYhTVWgzNGQSSJvuCxBcwTS54U",
  "key40": "4t4eWBQTrKVeufZiJKemCozbTmj5TJ4KFntDh5LQNcK6kvGYwsRFqmfTRwhTMFSCuVP8BRvmQEtV4zS46M5DfgUP",
  "key41": "5YAJVKWGDeiefKZEZEsnsQbudmX3WZ9qEbyRBz26nHWk43u5zmrKPzvboRkXLzAWTqwWZTegUUDDoLbosJxdZRbm",
  "key42": "5Ry5Eu24qytcPcGq4mZCpfbbu6B8VcVfnesga4r4iCBxKzjR4A8qsVnhSwZNKoASBvSP7aYDanEvHVu5JcjDCWNV",
  "key43": "3SPWRZPRYiep6qhDTZ1aXmkCPkK1PANpZRZMAv43EcwDa3oUVyHfDtxLo9rHoAWnLQFuRLbnDsMSDAZf7PgNsoiW",
  "key44": "3KwB8je2cSr7Dh4iMf627iJpNAVHD3xrdM5Nk9Y27AME4TZ9fFUHEQ3954hqno3ayEwAAtTxWhaxUYq5tC9QsiPY"
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
