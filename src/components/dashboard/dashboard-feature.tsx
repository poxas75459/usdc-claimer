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
    "4tuY2Qju3ZXrfnX6nBp7xDGvXW6JfY7cZDhHEmix2oSqcoC62fB9pFztrmZ7EG3qA2D24SzB8fT98MGNzQLz6cuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ivuCS8zk9xiQ6R7apCYWPRs393Smb7gJ8PvFespRUKr9fXA7aEjdY4AQYMv8yUhe2MQhCgKyg5Cd3cJ8AU65Fi",
  "key1": "5kjNUEEcocLYGw5gqs8cgLDBymJ9UBCENZWzgHL8ZxiEMmoaCuJ93SvQfRjHWhAdBkAqfhZ3PyGY9QQbg9MsKBtx",
  "key2": "kuoaPMpGSZA6WWLKP8QNTzmJSUuza6zitdSLyw84b83Tb9zVEQeeLd2twJKsoxDcqJszYTYk57aaht87M9ybpDH",
  "key3": "5tR9KiyN5xrDKnq4wN5dLV3DoqM1kA3TG9WASj2C3LVAKjaagmAiqgxkgnBA3qJFci4oBUAqjgoKrNstSDbiNV37",
  "key4": "Bo9QQsLBH37Ky72PeWT8bqVjALpXhqXFzemaLP798xVqM6zbL3uL6kAJibEiUQbyHoi2NBcudJp7Ctq1A1WdKUX",
  "key5": "4BcT5jViCYoLyAs6TXgNBejzTLpdLkwauMzvZ9GB6LTsttWpmMcLqyxc6eFUZGH8Q4cMJyZ8G3JRsC4SoE3QieJe",
  "key6": "uqb6GEVT5NCwEAAupe7AcgAGA83kuvYb8sgHuJ5Gy2kAK7VbDVugSbv1LQ1TrfUJPeFpoovbcnu9k1xT7Drpdzg",
  "key7": "vXwBM8SYjNs7pheY5A2NbNagupBtoAoT2dGQ3xw8UMqApLKnmJYNACZNH3Ee3T5Mq3EzwAjNVgeqRmqxsHQwrVD",
  "key8": "4yQTnmeesJfdM4T6pb7EFMWuNTV2oRC5AhmfQxevUao2qL3eDdX9pDvqAn6RKtVMKSsQuieHu96LHhwLj8BxUQut",
  "key9": "4DeG8MiF9zYFjUBaYVrBUFT6wq4JWkJXWeeoXaMWdogFve88tFokGrNnQd3xgnVq9giJMeywHRvgiFUksMRGybnn",
  "key10": "66rNnErqqeA8UcPybuaZfPcgG2Tg4mh7MDXirmf7rbCKUUAi5hHJq2bZNMcR1VfQZrGQmGXRQdvXrvMidrr7tYSu",
  "key11": "39U9x41E5Tf3NpX74phWfqdU8uaFxYQwH6PmGYuL5uf1sLFgLGx65j32rQXGzCGUkuWCCCtPKLzoGrfw3osyHAMq",
  "key12": "435CYinZsRXcL5kqUpa11PAU7nSJcDnf8x9BQK9rpyL9McCmMChHuv3UMLthkiJDTLDHcwJzMaVp2UAmoGnNvtZr",
  "key13": "3QpGtsdEdUQaAKWojaDN3mrw4y4WPnXDpNWVyPTRbwKqcwGPUiay8LVc3Zj9ySzJwLPo37zQWd9FRnkS8B9iezSi",
  "key14": "RnJHhseiWAX33FuBUSu7wqbrbkbBh2JQsbcuNB15fMGBLLJyQ9cUVapxAc4BVKR4niNy8s19A7uBgUxyeqoRePR",
  "key15": "5AzqDuuEe6kJpiV9uq82Lwr5GLFCfvy64YYuydUFQE2mofre1kfGETct23cmk6pHtehYb2dhPKpSNTh489n4WjkY",
  "key16": "tv2AVzERqrxwi6BVQF922dA9mXkD3MsQZrdRmreNqhA9Bbh5tmLGkRLdbk4CdLtJeJ8kYqjYVrvGx5hhtxD97is",
  "key17": "2zHm95Wkv51RDKUciw8X9DcGAem4Xd3xmbtJzimBseNQRfih6Gg42R6G4hwS3H6EMnmDRia5rT5FgCHKvYRr5Ejw",
  "key18": "3b7F2eDZ3m7e3FruLhjia8Eo4doRR3FYcjYUA196YspVCT2z6zdzvwiMrAAuEhoMfQMzFCaPkYgKSKjvnRj3XyAR",
  "key19": "4vrJ63j4KoyAjyFiauhFDfkznXffJsVDHKJx8c7inY4YTrSD5xsHHHC5fwU83MMXD3SrRAhQBQwQwzZSnxXTpJ3n",
  "key20": "3m7iCHr5B6vX5Vvv86ee2g2tKTPK9Ci3bkj99nKAdsY6Eyx9VWDnJguJVAYCTMKiYXPR8W9ht7HevDpfKZsJz8kM",
  "key21": "2i9pMByHzFb4Gwn8itxrK8QjTdy63VwwoTNryxFa7zZSbLv64iZ6NpEeEJAWSnwhi7sx6JHQ66wmLSkjgAVNdyq8",
  "key22": "56vzRioDogioiy8RGPdyHRRNMH29ToQj119w7dkyWG8uQzEUEK8qsPS8yGZLuxgpq7rdvoxKqrGMBh4aYMBx2aSG",
  "key23": "4hT6ExPhYfqkGfDACdWc3nvpo3ZxMgzZ4t8h1MzgTGSzt7GLCJksjaJBaNvVcQaaNVArX33tZqC4dSspU2AU3kJW",
  "key24": "3j59KcQHyNiik4KQcodvYNr4EG9UwBuHanDCE9EDzpmhd7bgFRD72U14LG1GmvZ9gJcCeHAsidrBpbowwVxGK15e",
  "key25": "4sxpet9dr7KFwGZr92n4iyXjuXah2LgS91mxe9yKoYteLBxNv4F6yX6kYrWTSBTh3koVpUzyHoyihdrefPnTYnCx",
  "key26": "2V4L2kgvjtUab1BFvt9ZbEk35V6qabjtY5mi2y9SH3BjCbvXwXzwzVeU1FpRjTvubRoPd2eZD4bCtQjkkcC3p6js",
  "key27": "3CR431Kr7ibCAXpFnrXtip8XTnKqsfDP6msMT995iSnzm8SQN4VzxaaumRnErnJmsMX9cE6J2wCFhi6rT62oecUB",
  "key28": "CrnMFpgovjmEUoDgMevDwfQbtF3R6aJn2URpdzzXjTV3bqj2sbuxbhrqhyiE2ukyT8XT6xBaz6Dg7tcqj8AYMZh",
  "key29": "3WmppeaLowhmPtwpwPAqMmVDkU8Ygja7Q3CU3bQMJAGC88D4rSmxUfm1QcnjuPjdpfuc27qhiE58BmHSKB7cGj66",
  "key30": "rbdiptdx2fXJowcKd643i1LVUP3Xhe6zbd8DraKQSqAoXd6S5nPgDU9Sb8AUysEqyoQfPTHwbmKXiXenyo1BYdt",
  "key31": "3RFTnNWBxkCXBs43EjyW1gPYsq3bZSprvvU2Zdt3Qw2vYXxJm1EAYn5RkU1zjyCi6t4Vjw8ohA18ytYPetuJjYCA",
  "key32": "L3GXwzKQi7gWGtqAFdJ7LhLq34cMScoj8zcZiKc2YZWNjhsvUYRSk25hxsxiDvZer5r9GyybsoaWRwT6teUJzRQ",
  "key33": "48qCEnwJUTea3y82v6c1jQaGv2zqe6CyMVvYwa1iJRVCaTosDPJkCdGAJxeoZXtMgw1v47hLtaRPLBgERSxnShgr",
  "key34": "218fiVgdQPEi3oj68Y15JgTSWfZoDnn1KfGHZQiat6u9S6j5UrPa2nxL56GgXKxmYXduEQmkgJc1CJsUf7bfNxTZ",
  "key35": "5f5jFfHpfe5Zee9kGT9Ses65vswBycytqcJ1NjMArWjRYacp35K1pptcY8TysfPK5dYcr34R1B5Qs7SW2dJHMr5H",
  "key36": "24Qb34zKsY8CNeDJ42EeCd6szHJCzupBvvL7SyDGy4vCGmCr55wCKTmUZ6cu84YJQsCFKK8v1SiixR7QEHk4Wdfy",
  "key37": "2AwVSEZRsNUcEpgoPgVrd2v2rPZASZxmnGZLb3w4LLmSc4oyekyVWQagRmKt61BGBezSoWEomYvuv4B8PR2MvfBu",
  "key38": "3c13dVTsMnCS1JAeoye7Me9roGurjMgcjYCaHMaz9r24fu7mw5QcVEfXmr2mXCqoWCPvfHHeXHVTetEhtxAUj225"
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
