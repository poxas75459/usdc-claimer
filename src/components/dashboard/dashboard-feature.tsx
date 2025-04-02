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
    "4WDPS9y1bRdN5Hp9sbSkh6FUGiGNPY4H37cneBb6NGM5aLHioAwyP2iMU6bRnpe5KFuG4kCvhtwBFE7ZEVb9W66v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5bmvHtAyRgqbrJrNTuVtnyjHJgWRZhy7k4RwXpbJevGKkXXkwk2yN4ya45Nge9X8gLN7NwZopkwXVzh8rke2uZ",
  "key1": "5B2ARQjBwjQ441bbTuyNhryTj1AXGU5wRSeo8GNkEgBw2LtRTBmyxGgU8eGcgQjAW96BJVgi4y55E9WEHK1CC5ng",
  "key2": "4qHh9SJU2bHqdCuEDP5NJYF3WVHECB1J9HyWsfHFWdHiJoiBVxmzgPyYLJHnantEwxJwr7D8iyxdG4MzAcpHMtfU",
  "key3": "2RCbH1uY7s5ax3RjYdqNy4pastb5hH9c9sPUaRGqNHqdX6x8WRb4jyLoNjDki2ud3RcCQiypz2XukpKhSzeJ9FWP",
  "key4": "Qgi4eCcLfjCCXm1dvFZui3G15zs7pDa1WriJHEauXv1GQi5d9JiZgfBXqbNa3tu8LEdtK9AawLd3oUyv3pudPPx",
  "key5": "27h7CWfL5hN1F5U6yRNMCqZRUMApfTcgz2wzeZERVSn8gj9SmYQcgWtCFX6utQSbDKNAN4bAzgbshjqXjAwFihCT",
  "key6": "2uD7uyBpQeBvefvR7QNEz2ncRBv8t6maF2DAiRkiDYgnDvArhTAby5PDA15qQpLeN1r1qopSEXbrTJ5z9Vti5nKR",
  "key7": "44cp2eVRWgUFt6KauYoM64i5geiAAD9a9iogVjvuJRWs1RWkHz39fQWXQwHejayLuJG7Yw4ZxkmjcT5pcHa5ys4Z",
  "key8": "5KgiYmCiWcvQEJbTAMxZDcjbrQqynQN73viERKjiUHxGU6CDvTjmRCYXkcQRJrMCvY1dA634imMi6FPhjwpQ4BAs",
  "key9": "5nNP6TnR22QUWHRWXNjE2Q8LSayrNK1JuuHYu1ZYu8oGmv59qzJYqWwHxMu87WPTJrn59Lm8Vu1xv1KuVpcEBjRN",
  "key10": "2sWyfnAiNiJ8m3shVbmwXgJKoB17MNJowbcEQfoyNQGMGdyAFt3A7tUJYLn8gx9cwHh5KNvat4utT3YhagLeqpdd",
  "key11": "5v7ru2NXnzDGmaXAmr4MKj928DMcmNWwah8379ri8215JYsKJcQxWCva26Rm1jXecqkRyNeN7M8eLSUU87fRqcpj",
  "key12": "4B8fw2dYccWasY4Hzz4RXoDp2gcNtJsM3CbUXvhhAp1zLdMkkzcuR6cnR3PLJgEjMwt4sq3wE7cu47UaFMoXdHK4",
  "key13": "5jVKR6V3JCuMTijuWyv72FQvR5nLGx6JeBbizZThYJHoC5nfRb4eexpXNdqSPoJc5wjY6GYYp2g17aEJjyJPxdU7",
  "key14": "5yfRYyPRakBZ4rqgjgveSpWbQ6vWVyWJSVDr2o9r8LrnXbfNxBHpZgTp8ywjjtrsPpy9wJCchckFgMVn95pj1vKo",
  "key15": "5cvjWAgsMFSLjRGBV268g25jLEm4CBM1dFTHEHDDw5bHMMgviRmnriFsYis3YTxQ3Xrz1AytUhUFjeXjp4zudbWT",
  "key16": "BJDwuBiYhkhqdEzQDwWuXzvQzVWSki1kpE8V3aiwPpmJF2pKx12G78qXzPPm2NKoV7BXd7HdNayDPCEp7SzuFcH",
  "key17": "2dUuXVFetYzbBt8x3GeaQwnfaS7JXAADnkn1QCUfKdXX9CuDMep8iXYCgzQydpUwrg3bCjUUZ8amnVnbZsWeFJoU",
  "key18": "5LKPzqd75EzjHQRdYdjH9KDViYKGguVA7EFU6d9AkhSqmgCiiosvqrmxtTm71Z1vEFRp6N1ED7VzxXmMi543A2VV",
  "key19": "4wpz5UwFXsus2Dak95oH6cVDTmqbQD4RywHs9Dmjwce3XtfL5gjW5utynZ1Eu1RR1nFVmRAT3CNuoSGYp9qSDt1G",
  "key20": "5R16ZsUNNCHS2kDgiL49B7Pu9SsTj2F1qBGN93V792RAPXMxqdm6faYxKFEp8z9BmPz6EAZCfMJCQajVj8myG15e",
  "key21": "4mfetzMVFWRGdC7qbrhoC7B8M13nbxdFYfazkCv7BFBxskTkkaPVSDcmeQjKLytxkWZe3Se56ggdfCEPSrdhR2zg",
  "key22": "2rchprFUVipSxDozDLNeQQYrvgPteEpsdTtrdRj1QhPei12KXCf9xHc3y4PjwHoth7CG56pf5bdeGAMheXRBRs3x",
  "key23": "247RPJpXbkcY9UwVrhmtvt4QgVwWkJbEgdCwcFUf9U3wcmzUrM7f8n5EzPcNKGUJtq9z8iaPQwvytpaW6g53Xboy",
  "key24": "3kaKiugKEDCZcsRVyXigkUNr4wBfwtKGRGVPR29VwAyf2ALSeSpesSAGHczBYmiJigZGarrktNYvJEEgAULYbQ6k",
  "key25": "3wBv4ky9RhWiy8DzYYKyLraYP9yfNHHZoP1hDBtq9y7C4AddH6rABaMzD12bjAdZi7o2unM6Mh4nWPfTx6ufQctm",
  "key26": "5qgY3hv9eosEQabZcWELwAXqfZpEdkqJLHQkxezy7Te8S1GhmnPJWE7sAAf34XcN7B6AhVma7UbZ8Mu8Bk8yAwfC",
  "key27": "42rfVYvaXv2AvsP5ewTeE7RX3CyUgFJ8QHrPQ6WE6HFvMDyTA8x41QJqobbquB1aXN9EtXnHYZLUH5BvsfszQKxx",
  "key28": "267eMTxeySy2zJ5dRKPHFP5JsCbJ42kfsdcCedHgfwTsdREHSv3VaYbuH3cazCty1CsV83JVKi1NTP6Xba4rwRdA",
  "key29": "3PmqtLs8HyafVyEja3LpLfBxkke6NjvrjKkzN3x7ecX5A8skLMMDVWxFdsf3vJBzvojrCXvvhooLqmEFXBEAQfyB",
  "key30": "44jncBBqLtC2tddXrD9uTv5VLeuhiWBqvLox9e5ycPuhUjDjYs8Ztsdqgw64Ty7yVVjuSrY7b2FqnvNF5VoCWfFt",
  "key31": "2rAktvTJLRkN7Z5wyXbN3ckmDygD88ptdtrRQ22MyNK4c3Wi9CDU3b9xo9Tfd3tgxxdQabRJFw3JRpUbyPZ9X64n",
  "key32": "2EqV7Ys2hEHQrG4cnUzhGbD1CxWmcPknpztMA5oZydE8JugNqEBiUu8bTFJ3LpAXd9uhLMBGceUwrACAiNfQY1qY",
  "key33": "2tRd3nzHfAHHs1LX9dEBbC72qfQ9u7cGEwhdd1Zy1JoaVuVMWwJ5wRvHb7125L6AY5dfP426kBCGasqPkwqB4uSP",
  "key34": "3izMgLEoLCuZcxJ6ipZ9Y6xtpXEuNSMYc7YPz2j5CaQM4X5WZjgyYCJX3JGVxMrUUNmKf2baXx1gSVVFsMeutDu",
  "key35": "5tDXAqf4LoRWquqYg1WNuVGAPq7vS3qX6Trg75GV4y8SFDN74W4tfVe21m7a8PhGcsUW2sf2gg9nhTsKjqvUi627",
  "key36": "49MimY54QHrb1RVhguYztzmqHSr4zZCtjooaptPbvoBiDp9v4MqnSEPU9j9CgKEWb8Y3F1wNUG1AoCgfhfxZYsm8"
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
