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
    "2euLb29uAzmB87LfT7p9cwuvEgXMQ9zsLU1Xg7qXmWMC8RBWQ5VCNyp7AqezU4S6HANT7dKTSevhrGS4HxeRRme2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNwGgB4TzZVy8dcJpQMvGWaDTqBnK5RwnqQndYXKBdUTyWQGTXpVXC663WCV7XnxuZ7mb9GyEidgQNuierS2cZo",
  "key1": "4gqV7wDeM6qLf4XyjqgkVXQK6sxCwnVCeCMjzW6nYLfX8rvnQ17ggnmHi329ru6zT61rrK8ysrKBfSgDkFdjYCot",
  "key2": "5xA938iszSNWDZq4oeC2cEn92ddK9tBn9cT5dPct6FgwVrRJbyD6coi8aU9bTjVP2keYRNyKR327no6quBbTfZ3c",
  "key3": "36uNPMnddU9DdxCYMJMaJN1epSE6BgK6UJnv2mvx4GTDUzu6eENzdZcJm818V356QkfSebqATrwKo8VZDp4k3D7S",
  "key4": "56FUwdhhrrCo5htDB43wfuY7c8awuWyeT594Nb3dNpLq7PZZ24MTPAXj5ECSRrsiibcTDSqYsAyd9f7AKnXGCtGr",
  "key5": "ySdr6d2mY69vM7gtBd8yL9MSbUezCk1tokJXZf4ZDa5AqsNkXU5U8jGQpRu438hG3jHPf7M4ssqEijum9spz56g",
  "key6": "2V12t75FFfSqL3uQnyLPQQvna99gbaYrp6pTn9xQW9oZP57GtxPJLv8sxwEP6LSN3tjcxZehwas9CkMVbTsU5xAX",
  "key7": "9Xq2L82H3oQRuUu6LJcxS759miYhx2iy3rtXU4qzc7zeA3jsK8jWyt4oJ2aSbXKwsrjPgKqecFNnd9dZ7X3yYqP",
  "key8": "5wvkbrfcXN6CJE1eCP1HPKjwxPMmTH9jzdXMe6P261JcipEigik5s7fza93pyCJBBFyGsKkE9HcqupfQWES2CPDH",
  "key9": "4WHw3NRGZMaUEkjDnaLicvErhz9yE7sCBmW9THNLPAx9ipRTsLe7E3U82TfpgcPUGYxkDNd8GnQc1RN3RJ1Up2zw",
  "key10": "FMfH15FYSBNKBCBvkhGHu5fPNSvKXCBSkEft13rss42QsTmwpKNPDZJ7GswU6kS6T3cVaLxjUfzS4vf83NJtZ2S",
  "key11": "KZ2kQbAbfXyUxUzeCyGkp9aaPTq5i5FymXXBvE7f3k7nvrZqDpiay2GcUqKcEhoQUCd1XcYH1keg2pfXDX48WPe",
  "key12": "4wRhEY4ytkMRYLfbeLWL9U5X79aUAvqdpwhECopLSgBZQBCSLB32Q6vcZ8t79ANGAfSLu9qFzuAehaMkyxnLYdHh",
  "key13": "3poqU8PYHgYYUzZpH8zGBkMwd5Kb1HTiGbc8DXsxLYcGr3PYDrMG4rZZY11k8LUnUFHS7j6868cwJeV2JeF7TBkK",
  "key14": "3v2QDhSkmZz3RjHoC5SXjh6qHQsqQtfsXxAB2CD2Ain7kHqzzkWFC2N4G8YyMptp1jeZQ1Yvd9fr76Rrsnz6xGkf",
  "key15": "4hQVB5NF6S6hweijp1f6W8v7oWFQHC3BWdzMJY3QufVRFrFePRVfMWKdLBCT2CJqceM1PFVTEfbt6EChUHfhum37",
  "key16": "5HgJwd7Vs6H7K8LiSMsYfCfKqvtG22DgVw3pEe1QBFaymada8cZtsuuWeo2HGZCrA4YcBQLL2jWYhVji7JMpUQ32",
  "key17": "3sCY4jwjnTquTBWAgQXt4Lrh3uLkt2Car4x9TaSpNS8mNz5d1Gg6MX9kfjpchnYyUfpfA6vLQhPsStUDqGhorEnw",
  "key18": "5nktRGGjgT26GcccMUmr7VnEj6e7MQxdHMNrrrHRJiwSNVcwWutjDA51rb3Jr3PCmax9wJoxnvp4iGc36qqstfvA",
  "key19": "5ZVduwYNtn7XvvjY11rhyyCij7rPRcWBJwHeNX1ZNH1tVVL7iHnfgjwwfqt6nbyeQxtzQT7WK2mJRxeYC9yAwiVq",
  "key20": "4tgMkTrkYZRkxAU9nc4mFU2yKYfFKMPa3UW8myjSo5G9q7NYVC7ZiK5YwQ2uy5HDswaTbjk6Emx6SkURKktrFUok",
  "key21": "5WR1fzcQToQbHq48rRohBskm4fEP6DiRaJHr8vLiRafUwWHyQwhTQ1GTPC9NsWmMMjfYuKJRT2rSLytqwYoRnAMb",
  "key22": "4aKLUG6PhbJdHEczjL7vXSqsyVD8Pmn8e8nUXjJae21WubwPzQ3SFht4N5sPwwFb6WrAZyNTSZiifK3wEzQMKYsf",
  "key23": "66KJMBErUkVvUACNVoDAtuENfT5y8hNK3Vu2sbGRRXf92oUxsHSE1DBNKaup1d9yrHA6xm46UoLopisPnRmFA7xP",
  "key24": "5bi8uTUfw2JBpe3q5HBnZPmanVrYXuTju4d4YCTtzh2TcAHQNC9k4HiwCAM2NYGHXuAazDo2oq7i19nseshfWaBx",
  "key25": "4dJ23RDDiu84bk1FnEy2LEMZ7sL9JLaeam285WRiVwNmPPcwCEsarFEpjPJdkvtq7ga6erKm3q5aUgKfAccDSPes",
  "key26": "R9DaZEX5bbvwctp6sp98v4NT1GT5r4Y3kyf8idvAdxiRcL3yxvHRdgmQyzmbpLpoStd9EvNXUvKFpy8x4KMiVTW",
  "key27": "5UL4W3tv1kS93SKoeBPWoQw5i7Ddo5oUTThQXZQnoeYxtCH8qSFXWNp5PhdKNCr5SxNYghpmB6tme1tBDnCctEEc",
  "key28": "58rvv4zek8nZc83HLuvjVUTEG4nDTBxaQhqfbDR84GzV88CYYMSajg5QyFer1dohz1Ke448n9bmjz3SzRZRQuBoA",
  "key29": "2fLXe2KGSjTornE4ufE3v28oPXEReRuDpdHKMBszniT9QKmsWZP27i6gzot17YtbfF7aQrvqwp6aRHm9PJ2BdXFc",
  "key30": "3XH5aGjz1246KLQWXQ3wXuAsHVDQpWULfKKfnt6LyXtr46MFwYVmcgFKK7EVF5e4f4rrxXyXUHi9Xjw7xHA9SdVL",
  "key31": "2gxrYu6cnHnU2K3cFSqJY9T2LPXfuBwouToKB63pMtefp9WL1R6kgBoUcZzoCYggmbzmHsZ7bjv2syh4JRaJRegD",
  "key32": "WhoxnL8YaJ1VrP4o8AbinK6WGQQvvV6Ltspn6ZTPz5XLQsFBfZkkzuTdA1DWa36a758TqUwBcYJAWxnpMA9ZqyW",
  "key33": "2fxxj8k19UuorzwD5HZEZbHZy7qLUQNiAYLvpeGrio6eYYnYqavirHRrrXxiR4SL55YhxftDoUhCcaM1Sx3ZvLuT",
  "key34": "62hPmFZ8r9wDAoG9ECyznsQc28SbVHuaNTWcV5P8afqRddB7yCidpuSV1uNuJq5XGYXXM8eWro8YEL1pp4XVJE9A",
  "key35": "348DypmYXAeBPyAus6LZCqSwZxVXfHuD7omW21xuCHQw3o6iNWwNXc8uUTacEq5aHEF8ksvfyLqmpZAfkkSuEWBW",
  "key36": "CW1Q5fB6F7yh2be7nQu6RqT8pm9jEaAoPjQQ6fSnyWxAghG6EEjaE96ZQJXojaU4gTXpGDgEVhZHuF49bktPY9T",
  "key37": "4PTQidP7r7zqY9zYnNfazfr7m1MVaRgCn3xzKsSrWenRpvMmntbEMyV6iDZD7UbDSfZ9uUaMXdKq3PAxw3R2StH8",
  "key38": "3edB3N4Pdd4aGUYwophd5Uz4BvKUkA1CJEwj3oavEhxfFGoQdokSGULP6svaNf1VSAK7Khkq8pdEpQNTPyZ4hbAd",
  "key39": "46jDgLBa2q7xKgZwJ1PZHXjCij3L7CsBCo4C9WM5YDuZvnU77uT8WNLyrwQdStnXso7ueyonvoYgMJavb9NpMSLf",
  "key40": "5TxLLwZyZbKp7YtPo8BXUuyd5AXvbuoxJ67xpGimXMmTjR817hXAYrsfs2wFyUGBmL8BL4SZn7TLxMkMycGypnme",
  "key41": "3EeNfEpfYqrCMQPVTM3i78xmP8CneHEAbeJszwwaNRKnQ6Tuoekrj6YCbEaL9JHRg84ujGsymV7hi6YJjaq5JoNT",
  "key42": "645RqmfuXBs3EPoqAvSsyEupBXchSjPNgEvzWSrhyQ8b7Xdf5gbWS1PCPVbs79DDZniAfpuWhDWaoofL3W2XhmeD"
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
