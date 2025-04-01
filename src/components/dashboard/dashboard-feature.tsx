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
    "55zpNfmmdpsXRvJ5GaRLEwWb9MW6oipPusxdCe6qMSSsQK1KqGS5aZgm8XVQnzvLy6Wq8RuaNsxVKhDnPY1jP36M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZhWnaKq2BGEKDLw4nZEwc3k3B6PDZdZLypnGF7s2GfZRKiAto3vwhhorNLrz9qVv5uYpqSVdoGVG1ycVcvNrwy",
  "key1": "2kSwKn4JiWsYwhGJ7i6n3Nsc9D4DmcCWe16tHvuFDDeT5AiQ6F6tFjkQknjcdF9TcdHAB3L7VvwzLUnixZqPsGxG",
  "key2": "wSgnvB5bmLi8bKsKGS8TdTSVSdDm6vukbF4zzm2ubgu6H83kc9rCJ9FgJxbhWdEeayZFnVyEdqeJ5Smra1XFV64",
  "key3": "4tGqnqgYjVpkFUdxWCJuMsPSgy8FoSn1uYKTm9quxFoXhcKb6bFwrDARkdUaevF1dSSd7fmF6DPqU59vT6aEqgbV",
  "key4": "okoUjVp2uRwjzDbGWb7FKq7Y8BqB7TgtyBWzCNvUwpUr8xkbX5RQeuT2DzurTe71JVNaa4tiXpSm7T8PAi3Busu",
  "key5": "4qJ2n65Pe8D2fFaiuDwm9zrANWw7GoupsKbyvU1ZYgg15CkfmxUBFuHkTS74kdVqcLc8RZouYfXDUtnumoyFhzXg",
  "key6": "4UGmvHKHyt92vy2cbZJuMrzJ9w2UE62AxpUyg5KadXh67LnJHkCPEcf5jjG5ALftCBF9wryKCZNZVeDKiCz75vWL",
  "key7": "EGsErJ9pSQjcj2Lfey5rNTX4krbed46a1CB7JjMpuUsRt7s7VtWUQHsKX56EVzWdQ9sfnt8Az69Scs2NxqEs8Yh",
  "key8": "5oR5Etsvpu1C6NrBZa4w333FwmhdUjosex1XTWRiSaRuvJPAK6cUHPWrdABsUBTspGYu1rdjuYS7FTrbcWqmh6xA",
  "key9": "5WCMrLaUZ42TGqeHihSW1uxyBX9wm3Ghu1XoBQtyh4ByW1vxAvD7FSbbrpiGymwd4r3RjGuLZnvb8tL99HHyMYqE",
  "key10": "4T6DnfHJuxVzmMdshxJyojzoGmb4obNqkgqPohjM8TtmW6hHbjKWcjD8sLz8NW5g11ZBYPo7BRgxeHSFQ5xncQZX",
  "key11": "3E4MyVZwM8qwUGqC1L6qJvRnifqrGutEP55VFn66kipZBJ41PRnvrTLPSxLdqNkS7koaxJiWxWyvUzNH8f6VdWVY",
  "key12": "3XwjDoWWBcA5kZ6kR3oHst9ZjWnL5c2XQpSvuQ4wynFr5Hm7SbrVrr8WMADS6FonkKayPrM97cwRw7G62b4EiZt6",
  "key13": "2riX7Au84ieXrPermVvJuf7Gb3bsyQZKTjmbsUqXMsJuQmnjCAdBEJh1Hw446g6vmTr87W7xcr7PEHfU4xFe7Fcq",
  "key14": "b6ySpmeG8AeBGmdJASh2eLhAfa2LLSFEhmgG8hZWG54daSeDSsf6DGTbbQN5A6orTP6M4MFg8tHZaUJYaGdcNDn",
  "key15": "54qcXZHAhx5NurmjBWoRJYbPXMYFW7XPBoyEmLdb67ynN9Bge36cnmbVK9eKKuQN4KDA1fauTHVruhHmxb3SLxDJ",
  "key16": "2Uem4zMa92pjCrZi1RzsvgaNA1kq5ms9YbRbQDj59qg8RxCE15nwrxZnzWabeidH9GTKdaAzVyXEATnCbUsEKAdR",
  "key17": "56RjWCPqDdzX711Q8v6jSsrxGJimea29pFxJEagR4nLGQWrKzvQtZAFyVobbVMFJkbq8B9F4MafkbCmyWsnTihRp",
  "key18": "3HkfABNzUJu4RdTa5V7QLV6Hbtr5rwJM4WN2PuBi6DSHW1epeqd9FnEwEiihW3zF3CmVm52g4eYCVDxDcNevVQy",
  "key19": "41BPp4PtmRiH92qNLqo69scFbnAksrnqEWk2gcCWuEq8UsosHGBbZdBSdM9MQpBnsuhndAo6WmbBFyFQKVE14JeJ",
  "key20": "5ht3L7V8paQcXK5cVhSgoJ9FaaW2PLTmxJCfiX7SQLDbJhSp7usGbMPms82U1jLZNL4Yj2Bi2jDyVUhHPXUxfd86",
  "key21": "3kh8ZLWDPqKRQ4sdKLPpeW9rznwMQyScDBac87Wc5UxDYSvDakhGQhqnPuXq8CZTVXSnevBQM3pvXcDXg5MAJBCP",
  "key22": "5wsJgo8PRywC6MNg5fPFMQS5d3i8TERn6BmhM1ffgBSVfhDpux8vmTh7LVPjTfe65oqo4YJXFbMKMWZk2pcfowzX",
  "key23": "2r24NAj9mMTCZoLXebwRv7tjwP62mU2GHWHshR3ziZAvShchoi96hx4CjesvufRhxZdd5xzWYog4QfgN9sT562h9",
  "key24": "5xQRv59X3kijtGp7r2k9kjcXnLqaGMTwEtwLjaJQQDyzJdE4snfakR2NQz2knoVL91BuEZkHbaBHFgjSUDho6WX6",
  "key25": "47V7pEzpR67tmmmnJ9XT8GFLs9UAnjNNBRUnWhJz26yqmV57pi9WPRotEQsmg2qqY4aczyasXzNjKCqzRSSe2Fny",
  "key26": "4RuPZg5LtPYVpCskVeTnMFvmG9tGYc6YVXgbtjfvXkPmNA8PkbVMNiSm2m3qty6sYcmXSavQWq4DP9V6TXAc7nNg",
  "key27": "5bENi8WnRqTY1ykipYYJpoPwEw1VoAGVpGBSh5oJ3wMMXHZiGB8eXVjPo5Qk2ZSkbs6wG6pM4rWnySq77HcKQsQ2",
  "key28": "41q3v3xRDoaKkqBRW8ycVHjDDdnutpyyFLD1TqN34M3HABKeSo6U8Vd9L6NsEUiDppDKePQ9y7BByuMszdAUkdca",
  "key29": "5hoAhUWBhjUg4pQthNKMLjGt1NjQAthPE7d86vYRJ6rPXnhLoHXc3BxxcrsZLqHzdefPDKP85y79wxQyNX7eKzCg",
  "key30": "5zLqWDWPndNLaAQSyfaSLsgBYTCyp7YhxgDF3eNBHDJX3bt6cRjLzVPKT4FMwLL2mc9H7tCupjbWiDMSfiTCkEu2",
  "key31": "4HKyDU6SFC5krGk4ZtfF13SiwkqVETK2utz8T5hYd7VK3ommLrjYTjcUBVNiuL7v6jERT81dU25vk4yxVLnAfg5o",
  "key32": "2tKVLAw8FCi16p5jrZfbb1sJpdV436BCC7T3zYX6AuAruVHxiw2tjKcPkMgxmx7wDxzmV3abVxL81T5Fdspgt1sc",
  "key33": "4Us8Ci3RytVvmYCKnuof7Mxvt8Eymaf2fzFtvQZrQePrLLsoixP8pv6TuANxJ6ToF5p3TneuoAW4G7MaqzBbz78H",
  "key34": "5Xau5tqJdCc26z7B7LXMiwaD2PrBchcN4rsMMBvmgLvFJBJrxRP3F4drqHS7UtQ6hQEZSLLTJRWmLc5RsGVFyqwD",
  "key35": "4aX4pxxzfNZgFG6pf6LHXNJpL2YiGgh8r9EVhRdDVv6r6j3ZKqqhS68Z42C8GevRj71NgwxFn54PXd7U44BVyv7S",
  "key36": "2ic9sFk9SkviDdPzbCJuK1kmJZ3vNMXbgFgQMrs313pmUoju9nJPxdzNb6bmRpdT1F5fXndnEqC1QzvSw7ngCm99"
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
