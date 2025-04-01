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
    "31ipTYwAgCQxK144iteXcRtWNMNZmtdpaZTEgcvXjfNk8ukVAb5NkyAhfbp8G1Gu4pa6Tn1f8nwqFPA8XBt6WBhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKRLwhDuk2v7E6yfCXBkaz5Xn2PgGDmWpFDVg62sAuU4TJoxtMqUndFRFUNVMNTBJMr6iMBBUwCJfwRPJmDaZrj",
  "key1": "3jmCfPJQh3oBvs11XPonLYkvXFxnpP4GVUg1d31L14dLyZCnkqQ8qVriJDYXAggRT7SEExoKCVsGUnNgrz4UMQNC",
  "key2": "2PLTiM4j2cvYJFsF6GdLE5uATRP2PrD6ycFwccosZ9LrCnFteYxYfSVa1hNp2D67ecsNx6DTq29AwzW6vszq5tiH",
  "key3": "5dR9k2E9hmSawDrpayPHTTQU1qo2HtvjM57ApsXmnvzAPTjp9A434x7nrgCsJyB8QdYMXwf2E4cvA2zzgiinYxm4",
  "key4": "5gaAYoYPgmbLDeQt1NaoinFq61KCGjPngwxkytrEjaZ5z2bQDs7QbSfU55bjU9GBCVEMvMzCrdkePnnfhwFhNppq",
  "key5": "5EtNYicaX5LFUHukqVLGFmL6PsMCWtQLZdTLfjY9enhWH7NfPwPBnAtvPDxFd6x7pYBGHSmESnvx3FJFWvvDgDy7",
  "key6": "5smy3Ns69z73RqJvF5TNHjvRgNm9E43KuHup4RxR8ZiC8eJ6MMVCmCnqcdenR5gRJzqTnVDxaBfN2gE6h2jaLZrt",
  "key7": "5BdBuWtbM21T1tNvPVTWr9XmhYNFX5X7SavAq37M5VKKA32HLtfy3bpc41y6KSdKXBxFc4etaUJHd8RbtC2fLcin",
  "key8": "7eBKtu75AQncdmfbGQ9SXUpfx2KenBi3Zc3PJmNmZ59bSgzbkqDqV4ZyaURz3jpdepuBv2fXWrzExeePJ5gaF51",
  "key9": "4FgqwfmrMgD4NFnrZrmmCCKzVArgCzFfjztmnnz2VpCYjkeQBSp4tsTmBDaCdWsYF5XLRFy2eZ8xbZoPRvSWsfTR",
  "key10": "4UcfXSjwsoghKK3ExVJP8ZsuUAHKcAWBzfXjCqkakFjNsfe7on1XVWfkcanLrdvduKEZww7YjCPVSCiBbL6VqmnK",
  "key11": "3SvShAv7TTtHMJVrZEtP5S2Uf9uRHd31J5vDUooEM7aXE6AznWrXupAhMKwhWCV3riFvz7j82j9x72B68rKhdXVX",
  "key12": "3Fbg93XPeoRaK3JQ6MDyZxqw88EhSpHJcUqvyyc771KgkzWpsiwkVHVDPVNdEZrfSNZZ32RLBbpSoccRvuWNGCLi",
  "key13": "odLMfJE4opatcPw9jLxdKFqizHHEAsPq3K5WoEEziU5HRaUKccwSMSiox66UxL1qAymJa2hucM6qQ5Q3i84zWsr",
  "key14": "5vWKYtn7iy2bkMwBDY5JFAsaAknqwv7w47YC1SQiTUcG1eVazYV224vUoc4mKxA99tvVTkduGu7JSMeuzJcxWDSa",
  "key15": "4vSZGJDFHqr9juka4Q1dymqNfCnuj6EkfGqgw1czKvbPJx9JxZZmz68FXuWNsqchGdJkXhc4THjY8x3kKmRoTtSK",
  "key16": "2vu4aSSDNcrGY4tesLr1XdRtUJzdfXaX54YsBr8HJssXzi5efp2fY9i4Mc6muZv5KyyWneznbrmd8PxxmnXZChEU",
  "key17": "3akUP3hcVUHKGa54N3iGbN1HVmofvxQ9oFNbNUJUZ4znvD164b6izyQRX2Ys5yHxtD8iyPFvrganE7sVawEhzdfp",
  "key18": "4tmgch17ATfVddisLiJ9kSNcme6S4vwMfRirmf4HfEJqVYQyfdAHMF6kFxXZUd1LptdtfczMFWfiU9AMyogscx2j",
  "key19": "44yFP3YbuJymyGbsi8ax1G2eQGeozGjPTHSNiGCRwtuC6L1HMTPx7mMRcGsjPjjA71NwzidGVHWbNMfK2E1BL8qU",
  "key20": "AxMh2wLQftLCcTpEXpyTC3518tCpFKo6rk6TdFefUdF7VKbc6zCgGQVVWiXiqjcnvjzBTzoJ6XPEEj8YNVkdnNJ",
  "key21": "4WnUMJjF6RBRyQWd3PUFE3vz64oQzfJG67dqLRq2waX8J1Py75tt646SXuythm2xAmBwPSuEbJbNFyuKAVpRKJ4J",
  "key22": "47FeSsj8VhjsourZmimzzxdAnB3pYWKQeyNNoTk873SNXCxDwKF2kQ6UfaJ7DPXihYuMHzLeGwPjmPLQrPgW9rcf",
  "key23": "oNzLTHMEFooh7LKwhiaB2QuB7zfmfQoCLUur6CveGxGnMMzKcrApZ4g7ZvKnTrz5aY6tvAMCrNACg1fXSznZDRw",
  "key24": "3PdLhA18mNKcUhxgH8fwEKPJbKqDXVrAwDsRXDgqZzceAmYrNTwVCt77S3qBaaGouPD93ayEFdENTvTwnGwUc8Qi",
  "key25": "5oBhW3SDHUfZ3bJSHrCAVkZsLWnXLeeYRrFdqwHFu9aH11iNk3XcR3vjJFEbNHzsvCy2K8kmxAHzAdhgSgL7v7ga",
  "key26": "4UwSpF1G5fwWsr1LkZeVdgYrnkEknDhJNwJSfy3fPztsSmGT9uRi4Wc2tSVaBPkJPP5uwG9d4tU7yh5Njtn7kQtk",
  "key27": "62YJEf9SXtpBMgXUYy2hPahoC23Fp6rySsXitjk2NqAchVu7TaezwrT9MvRYcr5J8ybPkRniA95D9KT8pzkeXvkJ",
  "key28": "3VNGWFSHdXt4PsFDTCdmx1NQnaNypL6F6Z1trDK1aLn8BhZMffB5gVjXH7Wed55ELKEkwskd5RimzRXX1Em2vBC2",
  "key29": "27PhL2FhtBe5XwATsW5pXTDwtwyGvk1HYptVpRtGiKqxHiQp2buXtnvrR8J8Bpgf1zUKkfQT6hq9ws5yTr6WNP8b",
  "key30": "jFWBJfBQt23WmE2WxbzMab7GMjhrpn2cz1vPwTEKs9K3F2cgANCH2gpQAoUpREYRg4Fw1RKVv5cVgfvwwazeCB8",
  "key31": "eZZ7NTbVWuvssck9K4nVfh8PSqddYSCjae5K75VJsgYNwTEZudtrTr2e2uoZ8f8X6foQfBBP6XuMch8LqHzRFVj",
  "key32": "4abRZuotmFA5tP8mTJo9HQiTgfekVwZEBcwwF49uemQ62CCZGKs8Hpd7XR7uZ7Yop9RVg2X3gKeyy6SoHKCSCa2p",
  "key33": "4iCbdXcXdip2e1vCXgZaw1ZNQ4qGaz3rGjkbF87ZreANWkDqA2dJ1h85R1LzkpUCUsjeAacwqpDbnf5BGJiZGEfT",
  "key34": "5SjwaQxfWWwKLJqj81dq5zHSwUeTXsX7gZe3mzph1mJT7KMAui6h59gc7MyZ7nr3umoHB5ryEQ2KMTbFMuP5VPLq",
  "key35": "4wPj92S8oW5auiKBA9w1Sn4rM4Cp9ey3d1Vm3b8xAWNJVcLNdfhWqHt538Pkhnj9ebH5Ncz3KUFRntvbqtQH1mdG",
  "key36": "47xNCfVpQrRzaW93zGsCoj9qFYtSNqwFgKn5aDJhbNaAWGrSGpHikFUMWfd1toz3XUuLJmMK8nxnGjV8YHxBsDq",
  "key37": "q5YuHGZJ7KaUHicjL3tMNpnwoHT94ohtqsAeJEaE4V7cDEofZF8gVPQfYicXfQuBdnDfzhhYkq2DQUT2SThNjBd",
  "key38": "4Zw3T4QYR7q7c5SBYUYSSX2i5oMnEVk3UySLesMKrQXkFwT7R86nEkRB2wsh9Q4SmWm8obxJoJFCzoKcVAApR4R",
  "key39": "2KQFw15G8ZHLXTv5K6KHdDuFhqGQsu7uiEABtZH4moYzmLPjv9gbbC1U6SZfnJYg4QdATZ5v4bHLBm649hAZWJRb",
  "key40": "3Zadr6wcS9URRkQEzCGGgrqM84xwPZqfTaFg8XENcqoQzt6k4MuQP9oqxqGC7uN7S9FRVNcgANZBKYijb94iQ69Y",
  "key41": "4Fb1zVuUGtEyhk8JYL5PxTvrXtWyzQoBbGkEHJDhBx6ZikDTpwnwSmvxxQZYsSYvXWdL6yvWcpdd4YNreffEHebn",
  "key42": "3cNQ1RhW97rRHG3NeRj6hspBKpjv9BeTw6tcHePvw4Av8neeLjBexouN4gm4v4vHC1Mrv71qkdHDKuK8aCG9ic2d",
  "key43": "3DmtSLozX3SsyvaU7ewu8NbZFjcUsoCUYzCMK6nA34iw5EbWXafi33rtKbVbdci81F37GD3vKSg27AbNed7rcd71"
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
