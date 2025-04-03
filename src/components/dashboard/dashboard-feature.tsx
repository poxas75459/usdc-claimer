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
    "2CRfuV9xxx3oL7veRLg3Dw7JfPa4Ra8R1sN94dqsJsAcCgLyqeLu3KdxQgbbvzZPoxSzKfmpzsx5QeNr5LP417u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5inYst3wuRGZkW7ttnhZ85MyNrmk7orpwdWMGZ3gmoCCAUdA5qKYvgFqEdwffbMNXsYQSgPGsS3jQSNFFGknAkg9",
  "key1": "EG2uavrjUzSLz694JYT9gJnEcKZuuWmMe4Zt4UzgXvg5Wn3GFwFMNKSaPkLGWptTMDbGkQxTzknoXhrchmLFeQ7",
  "key2": "2HvfsZCyXDC3APk6WXx1uJ5nFvXSjL1HTaL9TF23rtzV5pFvgPpDoCVCWeSAP3BDa5zp2FpVznLjMiVSu2KBhg9L",
  "key3": "eAqNyTgpLFCvVx2CR11M5f1Gz1F45AGujtDiM81B8hZyXMVpTw5VgYyfMtVsM9DPQLfFq8VdBJKoyiH5DLvyBNj",
  "key4": "wuHHAww72sAeUF99xYehfK6GPRhRJM1kyafKPTAfDjP93kaoykU28LjJZzkgPJqb2LFhHNutH3rKUtirex3KBG7",
  "key5": "4Rxb41U8WfsAxCycmyBo5VswBPBkrNiB6dkqffxVk9QktrYBfTSXn3EECYDXAhhohxXjRwfzqLbyDoeBze1WojHb",
  "key6": "3uGq3sRpYuCiiPQjHQuC7qXGHDeqByAC5WqswR4mHTH6jAm6k5xRAyNuJxeEHfc1PTLvMz2GSDM8PDiW7NQ19L5X",
  "key7": "v2qi1BFaSscWNH6ub7CiH3y7SjiLbQmBLKMmChuEeHc7REQLaz6GNdUhsfiWMy5A3vfGFBsEiVsk6EusPY9easv",
  "key8": "iuEmvERp2981j9wTh7aZHqQqFR5ibqFntb2GbwK6w1uChRyH5tJE8i5pZU14gYXiEAd29oEE4dCX4U3Kfs2z2KU",
  "key9": "64qkzCEEzZVz72AmT2kEHHxZEhTKTbK4xFghLibybQzGCKjFWKt593hqY4B46rinScqz41ipAWJvBazF8QtgTd5E",
  "key10": "5fosEESvzKV7oxfsx6wfUdR1kiJVp8HW455nDgsfLfUL5BmeczPRDQAj5181ZDhGFMi2CfBSSMGUNYNktRRQ63HE",
  "key11": "3FQRxRB6jdqNV7WmG5G8P8dUb7AP7K4dMUr4UTJKBUmQ7X1s92uWtkUvcmrdo7FzTZiWENUpZMvG3uHE44RSVsLa",
  "key12": "5BkspMLx9Sqqqdr5Y6LKsmwvUwRDQiMyyDuyP1R7TphMBmLFubZZPS7c1YNNkrXz1bpyM8xyjGm98JgcqMvQBrUJ",
  "key13": "2DVmic6D3hhQmUrcabu7DUiS43EHDnq7bGi2LXDzxzjdYcNv7JbA8uWCY2w51WiknssVfNpAWyRiLMvKHsHqAz8J",
  "key14": "3b5d2qgd9uFnD6wfBT3EBdmMKdvmqaX2caMQYTNuZP27JqBsuPNoTAofVEg8LVkyDALWxJwjokwwDrYFhagPM3sE",
  "key15": "3oWiPbs3BCL8GzhwU1YckgUjvwx7mUfJU43DWSuoohbhSBXPjdjH2ZjMibiDQhMU1aWWuLHxaDXFFEWV8oVQmbBR",
  "key16": "5mwV35c1EqH2HSAGqNLyZrqvncZLHR3Rn5YdJvKmNHV22p6LXBbxsbqDrxVZLwQ435fjU4G5iC9aEJJEQHcpQmFY",
  "key17": "29qd69fqkmcPbsb1kxurf4DD6hM2kDMEuBkadarKzUbvj58N1WYffk3QD319fz224bjxYe6JVTLJRKUZw9X4vCt8",
  "key18": "5Ucs6SsCD3TNYh8Vx6dU4dLQUN6eADQMLYxXLFaxTaqbjdsS8CrAY1jnL3V7yBStHBz8knu2nc8HJRGLTqHTiLo",
  "key19": "H7fPUfM9nkiSK6GwmcFGeUX2tPRGFMhnZRCs7m3heoWfS766FCdGuBAiWsjwV7hH3aRfJXsDBiBKAj4tfPWfZDU",
  "key20": "59iYPqFoqumgtFBGoNqhhwMUJqPCmWEdnqgqaZFzVJTMwpV9SjwBARuEJNGKw8K5A8faWo97UrEdgTCPF9EsdmQd",
  "key21": "3kAb6XiKuthFgiDn7EdkEGFJBqwfwUv5ZRNyhr1iyjYKGV6ozvGTigKMcmMn8PQSQtmGwsXwJyfiDDvfaaswg6gJ",
  "key22": "62ZKC3Zn2hdUo4gvLoEmFfAUggWmbijoemM6nJhkVd5u7zAUbCBVimS37ezDKqxWFSo5F1eqCN9Gg861HjLu64TQ",
  "key23": "2MudPZL21TbsV45qtcKFS66pzcNSGWhXzJ9nPQh92b8Wzypp4LJtW7CAdwiW8JrAR5Hs4cR88gg1qCT7uBZUoPKq",
  "key24": "3ZNeqZbM46XFqLxP6ZBvdAs7CLBVMEqE32DLP217FVcSftBC7ERzcZpXrEushVmFtmmZmLE6MLRXuZpEk3YNEjdr",
  "key25": "575knPnb7nb2ighgkDnsJUzjsmxtifugCtZVi2u6E25TLVSGvKQXg4Cd2YKP2tMz6WUnpShogMoTxBHjDp6sWGE4",
  "key26": "3GGFfgUZ7NtXufjT41W9NMYdqVBLo7epfyvadyKYqCRe2yLbHSHjUfpQDtTmSSBedPxnMqYi9fBzgWbdUk6CvGyj",
  "key27": "28v8eXe8t4cE3K8oHFxYAdgifx6BZtANWnXLKmRLJokjNEDwcFssQZPoSFxQmWBFxbhQ2VtpWtdiyBAR7TWtRgu2",
  "key28": "42SL3TQUTPXqVE7CpjkZLgWUEaqMsv5FA5CKGPCUB13jWXwms5MPhmoRZBwf4ri2zBs8DSsqGABvBvGLbs25AgBQ",
  "key29": "2kFdQfNezBEuUZHC23SNd1zAqje59bXWBCimjPeV6esaL7gVcEzizBE8MRXrWwgQj4Qjem5HX7ub3iMranZdHvcn",
  "key30": "5g332EayBPxRERLySQ9i4PUkbr17UcjMZwtwbrHFkhX4hnPwdwQQv3vGcF8aB8q1LMmTJkdYFMJs9TjT6bVUsNSt",
  "key31": "3PrNbQs4XvQLMzEL38GXACySoMbFy2t9qzuVa384G5goJsCbjuzyrNuteRG6zgK7JgaBUoVtWgdJPAKeoYVxAEU8",
  "key32": "5UJrWeD4RkvccXDXTt1EHkVhCG56WEeG5h2f76Twr4c3nts5iptPuZ1AR1aFqCS7EsvRTiELLQ5cEiggTtG9iQjc",
  "key33": "31nMxSRXwVwXNpYPy8csenpeQoJci1hhcvLcurBynvauS8zAg1zoA5cBs8MfGxSU5gCcbEKz1vaQz7macHRWJrsP",
  "key34": "2nkaev9sYawvAjQZfXqrFD4JUboyiinYnHnnQ36Z9fAvUNzUwwRYb6Bbw3VhrH69RAuFjnD1Ua8U2MoPyf5Tikpw",
  "key35": "2SjLqF5NW5r683tqnzEPhGbop9BMkbgRnduPqRm5TTifrE4jNQEaRYvmsHwCn87ax8qLcgvFAAydDBpLhAF6vNg8",
  "key36": "2cmB167EQKoj8KDtxkFjUZz7yV18AWbXb6Dzp7HMn99aiicQ54dAwxCrn9ZgTRk2jYB5cr9nLozUKypkaJXM6bkC",
  "key37": "5rxeR17vNghPqtPSTmXNRXGh171E9HgFsJ5TENBTdntr7v2U7MAAgbHfbs16udYBExkdBsonbxDLBU1yaWmqUxPF",
  "key38": "2nwHPkbhzMupj1u8tP7SCULQjQ4u6MQXDKxrdAAgZF8yBgk98UPhCSyZJUNfzQ5H8uXCqWF3W7DBtMx2TJc4b3qQ",
  "key39": "2hXQD3KbEWNRnn6xL3zG8N6XuB5j8ZCiQPDYCzcoofDZscmXmsvtXbsh22CYhPGDNgLVPRmTgupGUqpM5Ev2i7LC",
  "key40": "5nrfHNTvLUJUmg6BRG7zPYUuGzCzwvnaLynBQpV55mf5ouny6ocvQfVrryS5NKhDDfDS1WhTaqqo4zYf22556ZA4",
  "key41": "YWCTucfej6iurvN8WMMWwkoeNaUro5NQGhcXUxWebQVaZewyT3Cm8de4Uhgo4ZXvTVAPbjSSycmmNBuMCSi2S8z",
  "key42": "5VutsPEUAxNz4tT8zvgnHnGphvPHkEpkfcyoC2153qMPM5h4h5M6p5CX3j8mjJsQXf97Lk5NWCUbnX42uksrAxNk",
  "key43": "4KoXFgaGbykwCh8dCguXvJ35LfGoSGwyc1nCDQfhkoDqZK47NaUe4FrJdpWiPSmycMW7qASBTBfeUYT27DCxFqi2"
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
