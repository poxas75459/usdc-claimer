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
    "3bQoQT9Y7Se5F2v2SgwmK1AZre9ER1Eoibt6RqiQw7NXmG6oL2mUq1GBehfn1vFvWouAEHdYoiHnmrTvpjkqDnE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zjWFMK4woRSoqnVzBMu6M9J9ZKZWLo4SM4LFFWq1YL5aYuU7vTYpj5zy5cxWWmhrVwASuykjZujJk4hDmpQATN9",
  "key1": "2LueAUENbex7a5TF6dLrGmDCo7NLgd46zGFkaPT1iPKcbC2C8kZLKzNzpafcRgFrit1i2sH6no5LiWZSDKtrUqzw",
  "key2": "2LbodQbQEkQE3KgHAsqcXqJoRa89KJSDszZePQT6onjG6LGWQM1M6mYx65XMniUWd9Qv4wSfuonJiAbW7uPGZp2v",
  "key3": "39LXZMyVaEHvjC45eyo1Fu4p1HiDN6XZ2CvLj5kFtcJRyrFp78uGrzsaXQbsUk16arQCoYBueqRsYDN4dLCZQLHU",
  "key4": "k6jLurX5DpV9E6MXEsW9drhpSYX4gRSWygeZ78zKmFdSVWkcJkeoXRgMgduqD8Bin997tKiFBU2sVKgSH6fKgEo",
  "key5": "2q2WyPwWkgGQ3qnpNE5Bxh7Trw3iTKsuAWGSqXBkvhfX5UsBxSdcDYz7H9t2w3bvaMNkUeKtWnXEw9K37cX3mxM7",
  "key6": "Yo9yrVJVGL4ws5bFf3ySPAMeK5Rbnsjmcako7D1jyVtLfbW4ygCS9zkWNrDxcmdD5nzBbGDLZf1mUzybsqpM7HN",
  "key7": "3Ugk3sw7xQMDJFh18MfvogvgKS7wNp3FyYFi48dZtz3W37FDzFTgVJDPTwQAJfbYBr5RfCQLTAmRmaFaThQKT6nh",
  "key8": "2AHPEoxefENxcAspvcTaoeYyq9xe4xyDj9sAoevsLLHjsCSGVojRrMaLmKvAuhzn2gTFNkvA85bqEUAwoJhe4WBf",
  "key9": "28zqswVX325Pn4pTLzDTmdLPkaiWarcBmKQaqrB6TeFPdtwhsyi4s7X5j527hGNSwzzNgRypLqnCK53K42ugqfMz",
  "key10": "2Ss1YncQWzn6uLxnh5ThXKJF6fZVfW3LHWkH1zsSDtYAxa2Pj51C9W9ussjx7tbENQFrrf4htn8bU9NHHCMNKxcY",
  "key11": "2DDX4HGnnbRNiGj9CB735Sz3wjwaQNuXbGtRycApksv8Jzdu88zLm5SD3yZq81rqYeeuYZSJYjwnnZHn5hh9k1xA",
  "key12": "4MwnBC3tf6fMqHzKdDX817qAeALkjWV6Wgh8F6xGMTePy6psrQbcJGrHda39q28dEGG1QYxDBX9cVDDkpbyEXJPg",
  "key13": "5GYQrLRzLMXgM37CNEzVzWPerM96dVhJQYD1xM5j8FL5zAxMKKxoxFAqvnz7HCuoVuendoYZyWXSvAC2i7gAMhgJ",
  "key14": "2LRK9VfHqCgaaTSrfg9M1dc5nPUNbcUzgZ8SJ8R8ZnmLC4ELy4cp1mUUk3dguD4vrwgn2H2TH21eNnjCXgp9Qa2x",
  "key15": "3ZzEJnCjdgFvzjYxQy8GYXB55h1SmfMRURvmT1EVc6KMJuwF1m1sM1dj8gETKEHP95UUvU3GwvLYgeWrzrGRc1SF",
  "key16": "2jSwY6NzcSeMg4MFB6XyGMGTD9363ppA5uPDLh33uTQrWbSHK1eQdAq6SrCHSL6yfRdaCiYz3wZizobXQcecZ1UF",
  "key17": "4WEbaix8ytSoN4VYyPJ1g3PmNuZfgb4EbwWVEDHTEYXiSqAZ5YgaVkRVFnj9SxWDMfSWrEbzE1pTV1WzmbahGAMo",
  "key18": "5jGnmD1N6VJ9F3Dhuz7nMhB2rA6eHewiPHAGHrZU95dGGhSW7JBTNcq5Hma6M7XVY4ZWyE67RJaY8Dp7KkdNM4Bx",
  "key19": "3582KGmLTqjXgu6mXVANyPoipBr4WCDeDiuRYL98kSUKYNUTjfCyCcm3ndwEKAAYQU29U6fDe1NpnAvsjwFsDotj",
  "key20": "33xDPXNi6UeQF63LkK1AgJn6BT5qbBWX1fLoyjqzU27gQM4gBwQL2eP2Zu35qBPWzc3faifx4qjj9fYkrC4XaNpt",
  "key21": "4DXFDbAw2XpNjMysA6MC6aqqjgU5C5eTQ8te9L4gWpwwTcqLBpzMWNAdkEUWLermvjLv7CuUagMNFnYnPwVkM7VH",
  "key22": "3V9to6bK4DhMK2eXCcSBk5U5zBiH42Fe41BaxpPvGEvaFts5QdjZWKfBhKaxzvLkoC9yHKkrR743BnSoRX9LZnXE",
  "key23": "2yMc7e1migrNyqmuwZ4ck5fK4N2HBSMtXRSxanrvnGgsgMQGhtyy3jsGjr2VaG9Nbx92K6M9ZuXzVKf1CgebXX3x",
  "key24": "5F3LdAEHD7rAtzbT42PEhV8a9SdQ3VGEXACfzD5tJ7EhiNYhmp7mS9Ni2QfBzAgqL8YwxJmtA1QfYRhX358aUZPy",
  "key25": "2UgmjET81gkqxwERERkd6CZWjoEcuXjKZHLb2Y5TLR1koYqnHVBaQ6jg4SyXLwkDoGSmhxrdXAB6Jo9UGZ6rHa4v",
  "key26": "5QiXKc1fJMbgjbXY3dw84m84pQaWyCddBkZLU6hRiGygjiuj72SAJp5N3QRuVfVwG4Uq6DS2ssS87JEpoEtk1gQM",
  "key27": "2mnkuxz7cuqSTbuDT2TB3vcTL73QyBYcgG61sVgE7nKVTMPyYA2T1Smm8wokfxVXQD8uCs6yKyNC9CmTVzvue5u8",
  "key28": "GEw4wtit1Kj4BdvSQZknWwsTo49jKVcAAWMTzegU6yskV5Y2gyZqSwPsDnkzS7UHjWw9P9QXKVdc7j1uMnVKtjz",
  "key29": "3D119L2NLLBwMWEUyNbZxHWRMxDzXxyNgf9p3Ht8Z9Cn5Nzvq87MGCv3NGCwkSryBTx4NsuyoKJigkRcKD1mkYWY",
  "key30": "4UJjg7r2zugFB49yhZoSsTK4wENXFRp5jRyPMjFi5JCYZfme2bXt1VEKL1k26C7rWLxPQUehusujwjg2MrKtaT5M",
  "key31": "5vYuk99rCHQQSaNqT7dpYpW75FoZHN9e83vfeoN3kGvbswEd1nhSAvNC4mPhVL5EUoEsLjAcNCPtRFzGGJLWQoXo",
  "key32": "3q6Wtj16wBUfTHdmkVSpdfsqTk5jcKNzEEhj8w82h476o7mxzaXf5TBTXUbMhgFZqutTPycsZgMUtAKAzCzNfG1v",
  "key33": "2F5sLv5yR8yjwhRxgeLxDfPWsE4EREo8K18W16nAzwAWLj4QHFPn6jZEzQiv5de7EDG45xrr4xoHAtXJh4AzZd7K",
  "key34": "46cdj93SK6w3qphdesyy1toxK2J6iShKj2MMiF3CKJdm6TynBN2CEoG8sa8gyvx4r4UD781CP9QP7wLwy8LGPgya",
  "key35": "4XjpedH6hCwXW3gBhgzuzebEJTWMBwPAmedZvg6Uf42UnrBwg8uoi4RPQDJjBpdXFNAEe957EkjrE84C74z6YJn9",
  "key36": "2GsTdnBsa46BwXPvh7YAijsiedXmBigc9wRw3xwtF3r38stYjWFK9pVZkFT85uzB7GCd29X5QvTHw6H7oQ8JSBh",
  "key37": "7SV5LCTQfYoumgpDDX3aBehAVywy4q9U29gUEUdkSTJGiD4JHgKxxTjEEkc4dSYE8TrurHC3tqtNYRXiiiUALfb",
  "key38": "3rthSupS2AKmwT5dSPWCQP8uDEgGxKxoNvoy9DvXmLvvR79oHAq5CxARcnyGuBzXrJN7dnhFq397d8zpFyCSDKZa",
  "key39": "5pGYnZsGVCy1FdGdhxtmWy1NcNNCYsoHNFZdthBmEqYp6WxEpr1HH2uydVyUqjva8MvEuE5u3gXQL7oDHN2k8Bo8"
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
