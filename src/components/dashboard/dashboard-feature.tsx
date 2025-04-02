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
    "5XvTMfrHLUg6iGxMsAQHZuJMcZ1PHpgYSkphheMmxZVoXAsKsdpH4ai2ePcL1pGDgCpm3yPC2xvF49Uh2NFtnmYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ScuADgxXyNoPasA24HakGcrtkL5v5uHMtuS2bzPs9LF7f5PoDtn6Sg5vemTisUrtypjU62Ts6ArGJBSLAp35wGD",
  "key1": "3dTuLcqYJe775McXFgLWN9LLY46QbZwxDirCixMmSFQA2ReK9mfDm5QFRARWJLmgBpBgFN17ZWVKXHKBBt8yJ6WV",
  "key2": "2yFSUW33ffM57dtUzAkRtGZ9xDQg2LErMcf2ABtJJUdZ5zu7nfE1iv5Kh3uZcJQqNGbggutm3sksVdTVn189zKCK",
  "key3": "2kdVv9TixsgokgX3NggLH1doKDdhLDHUCDgREduXVWkVj6qvnCUTbY4p8YJnwBAdjDkspa5BKDz5rizjuscJMJv8",
  "key4": "pk8dEskStJrapvk9Hnk4AWbSr8JzUmE3LnHs96TB2k1mNojWaZmcE9SeiLbRBwnnzsQgEhLYywWkhEsp2dNagbS",
  "key5": "2nBeqrdugcvCefj8RtRDm1v9nvMidHCNrkL6gqH3za9RvKHSqKxzNpwB67Sf4rGb1j2xb6EG2Lk4hbsn6oXTL2vF",
  "key6": "2ezuQr43Wwi8toEEudbfjgeTwuR6WcMLtRXaQwDXKSn5ZoG1nPv1Uw6nhGFdMmiYYdZpaauaPc663DwmEbUn12EF",
  "key7": "61E2sWfFoPd3tnM4GKBvP4wYKtKiARFcuHThg9qevPFtVboW7rL2AbYNFsrDZ3sMi4Ws84ePYfrsT5XMQkCRDtnY",
  "key8": "7ADZbjiuMcpCtj9beojDR3gxBNxUE1Lm1J8gzh5Fvuhzv1Y5fBL67S3Tex9quhdhDY3x9WEweY64yfQDHQDZ7no",
  "key9": "B4eTy7dK5Qn4x8tqhGnnctYW11iwNTEzMpj9mkdcVNaCEXbZ5PumR9jCJqTLLENs4nowKYWnoXL2UZx3nscrBLt",
  "key10": "4BXqdjqvKyeK6p4Lz3qBoi6RLcRakQxLV3riGhs6S168eYkgXjfCP5RzYuCXvLWYKuv4U5SDvW9G8HHemCgnpcB5",
  "key11": "5UdRjYgzSruYEH6icLj4oS8yvMcW5RuGxfb53Wwf384KQY5oAMtu9EjHmGPAC3sJyVgk9R5HA4MjzRHnELx7kvws",
  "key12": "4zAKXYr6XLF8gsVCRWm3pGZNqsTafiafNATqqNqxTLMMwjT94fcTbFx62DqRmitgRFSHtTKF8b5ArwarnXEX5hBh",
  "key13": "3JGH77p3v7WNfaWhphd7s9Sr8RWg7D3J4P3yBYv1vNp9JrMur6QLUUr7UA6a4FwEFqqqUTdGWmLuwqgGH6LyUdTb",
  "key14": "2d9wCKNf2DeQjhfruvug4SPHbo5oWf9Xxe8sK5WH35ycWNEdeBxJfcm6nEgGVTnDs1LuciT97j9GKFQhWrQdGw8B",
  "key15": "25oXZb8MisHBuHxszMbEbR4LGMxG3kUJeAQ3TxaycDCS48o67hwS1jNCnH36dvHMJJoMnd8YH2TFS4oeoB5HeCbZ",
  "key16": "5sZnGsGvFyatN3iAbdNUYGwWBv1SC23q7KaskNZ78pCEhK94ZLkwmaebh7EBcqvpnVynoKoE4RqQrKPoaJsq3KJK",
  "key17": "DGShmjTLsqYXoSQmnFDteEySgTC1C9ZuLFVMnmdGREQu8a4GyvLK3Pppyk3kv87BQXHRs4ioY3WALhDABGKBacR",
  "key18": "3u3iACfCr7ax84jCXowRnnY55c9bvs4BUYbjya3uhghnGKQUg7QzWEv75eMDf8H3YrXEtbdadPmsy9HSLiUjwaYs",
  "key19": "3hpiu2nWVNqaKzrQXCPkb3hcWcaD8qhTaZ8pGUWD21dxYfGpge5zmcJ5P1LQXWR1U8raDdExXgzEL2ynLtmjfQiW",
  "key20": "2ZQbS8yP34ueQ8Tc9s27VMZoEauxWt3QWhHKmyPTumtKt8qtAzETeNzpbQvtW4u6xYAgzTS8GnqrVkdCavDsXrJT",
  "key21": "3EBeRpQDiFtuUoMi4WKm9NpFv3yaiuf61FV4mSTQqNveHBabMK3tW29cLqTgwtydoVG1XnXyzHBWM9RnQS8VeMv1",
  "key22": "2VVhvrcgQWJXntZsB7t9CHQdLZL38Xhvn2yGsk8ExMsrJKxH6V581tRsLS5uDY7tk4sSdbPwsDeTTmfgL7Xnjkxr",
  "key23": "2fpD2kcLgJzvTyZq82QqmuXkDTqqS4VapV6tWVhQT2mySYcQWECgUEuf9GVdAQo73PswoESYB4RGFx9g8hXrYwzT",
  "key24": "5GwwNZYiuUErhmLUKFrhz5nDpzZRxiPULJHy2DYfKf8QsQZfDSZPwQGc1QUxU5eFHmTREmPi4i1yqr8psETY52gv",
  "key25": "4SUt3vShp9FdN48KAYRuW3XxqM8iegD9CUZDd2c2nMAHziqFj7qXrroPFTz4xZ6Pb1gSbuDeKh9Dd8MEq8AanMDd",
  "key26": "ZPnNUiMeLFa78H51grjhCqBwracmyJ2JgnmXYjxvos9gntaDpEZzdqEVkQqfqYG4RqiFbV2uk72VXu2iGqds4oX",
  "key27": "3MHWcHhs49RH3xdnTid5oUFdkSYXxdewUVLRt647mnp6RAg3cZa75w4DFWSWuFRapHn5yYCwVTqT6R2nnHDeQKJt",
  "key28": "3hh9mVAtHAwPnpES3x945EnxCE8mrhwEaNYRQHphVDbj3uUVDUdBoi7AWMkT77g6e2d7GB1u3XnU9TSR1MEtKTHC",
  "key29": "4fqZocBTF9ow8gsmxo31EVpJEfZB3kUXZErqeFij7pjRk8PKN7qpyZ4yNN6arhtYNYJkxym5MZyLCZG9rePTKCQ8",
  "key30": "RN8Kf6QC9EnMbFumF5HBC4jsbRvQsZohU5QR7BfWPn3cwWpSTff1biuA3WFKLscTzgYYN5YG3hKt9F7vLE6sBUV",
  "key31": "342GnrziasEjY93fqfMSDFqutWveH7GnBbBNyxcG8mvkyDWe9jkB8kLaHJgYHabGE5LGEBWxWgpJSDPDDB3qjUm6",
  "key32": "42dW3L2r9Kw48QexGSoKPLpBbz1XMkXRhiNceN8Fs5A9FB8ncFd5Ny1wcdyHk2mEux3Kia7CeBuWCtVL2FE6vHmA",
  "key33": "5a56pwKWQQmHW2DbSgebAYPV6wtchxq3Gk4kwURhEtavccytRhe1nb7ynMfJwzurLmdL2r2G5NXsUxd8H5rjCjjN",
  "key34": "471fNsn2dJq2aF7cP4dCk1EipxHr3GB5YUKPgfKT6fEJiyj1kTnt3EQkWX486ZNH6UUZEGXCpzPpJuU5ZZz8Nweg",
  "key35": "3FiYVuLzKDz2eC4TRVaKyKApKiBVZU8JyV722CnQWXWCarH2mSuvqd2h1jHHYQhuq48p7YRHNWbmYbjD1UuRjGWd",
  "key36": "aesF7uqTLSmNgwYFUrhZZnY9qDWwyhkgjqi8pxJjEqSgYpvApxSNSEApmiV3S1JaqgGk6ok1VCbYJ7qFGnCz83r",
  "key37": "4VT1BNcDZtbczTMXbjvhAkcV1g9UPBgwbLsufJjxobaKBhLWYiEZHYQpfdX1ZJAiy2rgvk82y6bi18xQncW4pfRB",
  "key38": "5YMynpMqN4xJCY8Jqkkahw5XfnMYqkAN7xDVN5UMKSrsy5LtWUVKkyVtm9hgXxCDvsE94WMRUVGLpXeDy9cp2RdN"
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
