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
    "4QFDHYAon6YRST8e3Yd9qieMGhjzArhZQKawWoAYTiYkv9ysXzhE8eS9h7FgDVLB9qKmjfEHeBLRpHWngdCkvvAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44edGWRyFU7M5sScWUDmjUmJyDBqpFVtLcgjXRBP7UQVGGTMnax7Tub2LMVT4zdJzwPCc1KpPg9WJi7YmqL7sBDk",
  "key1": "E79RaWtD6cSB3vjf9oMYCdhPrMif9c5GpHrnaL7URXu8K5XURDgkPsDwtiXLXQYkwCeXd5rJQic7U726hgB8MQ9",
  "key2": "5fVUKp53efwSSTTjVoPhBarQZ7PWHzPH53UHAXuZAA5jhz9N5YaMzvYae1HUN1ahKEPoEPYQVuTCfmRGrrKnnXme",
  "key3": "3cLaN6ggizeXcYBnpeCPE3YTNk7MRrhUUUZ6NnmiuXeffxpkfoVaUTKUpKhn5SmCUdbz6VFKG4js7ZBfcoAUeo1V",
  "key4": "2FP2NM1xrv14VHUpntDRYBcS4YJLBBdco2N7RFobRb1Zky63jJvqVyo2sQUP175JyUh6Dj49qKAiJq95rzPdgWTq",
  "key5": "2HuvasJRVXHxqGwfu6raAPkjcRadVkjC9UF3AHx1BWDyheYyu9UJm3GdwYDRTM3fRueWBBhE6Ud4pArg5vhe4zFW",
  "key6": "2BBKA9Z8mnCMJi3EwZs8vSCy1FyzusMy6yU9pWfwFwNRzZPqSA7xbQYp4RusDpsNZMdueSW63Ct3AoauQa57uc1h",
  "key7": "5QmgTAbgNQNnB2u83EHhbWr1TfSfoHmqmER6Wqdvu3BpV6ctdkKDZzmxYRxuAxN4YeZjbm9FY8jGFdB2hjKD7mzQ",
  "key8": "3ziWm3TuAEx5oVQxoCfoSazM5yVQNqHqRPQDmWJX6KhEVReBWU8HQ5jAeLwKfwEYyJTBbs5cPBmVHxNvGjA18YLM",
  "key9": "ZRXmvCKWpwggC1QvkGm2zhYnv326fuEu9M3d36LQop4EtvSTokGiDQ4tNE3itXWJdZgXbh5YGdN4MQRb333QvHA",
  "key10": "4TLCqAR46275r6BTjuvjjk1oTLGxxtUdMnHq4bW3w2CvWQETdgqvinTw6JZ9Q2WVrdWshkVxVa7AjnMRfXg296uK",
  "key11": "2akjAbD6Gzjq6EqEvzSyZQoXPjaJVGpGRGQRMhdnryatgc5xkp1JQcfzT5a2gnG52BtM4c8Khxtmnr1dAWrLi55Z",
  "key12": "32QYz4kZJFoB9CdFeJie2TDrtMn1oLhBC2ofSFjsi7WJyYhTarmy7AgRypkvjRnLzn5ps8RHQL2v2MTztqjKZ1Am",
  "key13": "5ZbntDz73HPr3yFc4FVtF25oBng9jk19ti4zJHwZThQqRL42bGKSq1Z1L9CyygHGkznb5dgJMsuWx4zUbC1MiEdS",
  "key14": "4pynyrc9wbzNJmJbJyajJnJFWa97gcgUv5sK6omiKtCQcBxPZ9ANfADFocqfPbwqd6LMFK9t1AtHh4e62wmj9dpZ",
  "key15": "2vf9YwyWCGpnt6vNYuTVbcdMBAx4h1XjfPfgx7rWnK8X33RQToTVqeUtizUj1h2RHiXmwSwPx6yjBAGUK6LYmZeR",
  "key16": "54sJZNwp4SDHGM1BaNmSxvsfQbGk8dfTY4d5RBfvYdsHiUw9hS7i9CVqRnqNww8TJzQnMRsdCvXpfREZtctSRKgm",
  "key17": "62H11KcDPvA9dm63hbK9nGqbG8ok6Ro5Qyrq6E77GsXFTcwCRfgnQtu3LfjJ2mRvAo1UicBYzhJNyoM22fbSJij9",
  "key18": "5tNeH7paxsdioiEjsWLL6CC5BEbUJyxV22eqeGcxbUwjjW2vHo4fwaGQNTHKxyxiEhE86HX6XVyZjnpVvNpKCaku",
  "key19": "5jQNzqdLAXA93xpccdkGMasMqqTqV9K8BP4kcvoNDoncJE56DyWmK3Kdcpcmtt2JAWmEGeNDVG9ZQFZBpCSNNVXu",
  "key20": "2gjEhDZDucj7CNc6rVkknTZpHzB9iKEQQ83jEDwr1jHwqoVYnXP9HVgTzZ4vTNMcNKjdbc4G4aQBjjuZ7hgc1jrX",
  "key21": "4Gt6cp2uPggMas6PpidA1PgykPLgdgCuBzVRH1wRuuy2oWG9yEickzCFm7R5JZoYNo8pgH1sZPwjAUtNfiEFRGKF",
  "key22": "2XD7HBiNjPo256pzNMoYQaJBSg2vyDCuVmRRxM1LhRafx5PbuoBKpkm2xdikipDdL5u5sp9oLT75qARPiBwikUX1",
  "key23": "3oiLceYzd7GTbksjCZdxFsNjyQ4fGgVSnQcP81tyKD1bj4jhwmExazcWKG2n3ubSjaHPDq18N8JAk6L1q741hBeM",
  "key24": "3DDzG9d7zTxqUBDGte4DGj86BgpEfSmVS12PPE9u7wFKje1CHj11hwS6UwyUq8bpimhSeZ1KYiwWPT2bByG27YCz",
  "key25": "4N4BTmSuau3ZJpHcPULUGknhEv1fdLAj3AAyRper8psa4ZgjHB8V3PgknKhoTVSB3ZcYw3BXGVx1zWGTNKnNqXMu",
  "key26": "4naN71doo1nCWkxm27cExEPhvs14z98ED3eZNRk1yALCQM8vjyQh68BfwEu6E4kRYnxfRxuL7aoScM4UCrKRB4Hn",
  "key27": "4qeXV4dPwfquTssGmM6u7BWeNw5CrkqHWxsQLSiphMUGdEBDBxGtGUMs12rkDSzpnFt9SC7kxULWj91i8a9s4gcN",
  "key28": "5GN3M3Lo5Etys9Kxhd7JynfZPvuDXb1swgXUaggZoX71zVdb3KSBwVvSb8AmCGuW7GHJnzXyrMC2g9PHAEbXWmoG",
  "key29": "RBkuYEQrWMcV7Be8Ey1pjuoPf3sNUaisvRQ8iTQHiUbf7VsCh76Bp7nEQNkCoi6B3ZSZTRz7kfpWdsNprNkXJvF",
  "key30": "DkXrrbzL9dCGDrCrHBK8XZsBRcxT3RFx3Skwd6L14cTpja7dZBHUuSBn8nn2nUcTppLkRYhtfBjbMGVL8pzdz6V",
  "key31": "3ajSPDA6FQPhtNBpYk1sYHkRBouWJwB1K52hf8nEVmgaQkGTbNkdXy9Avn4BnSfh2nG1VAMRiA6vLvYwwMhakJZ2",
  "key32": "4fg9w9sR4hrf3SYo2pzwQiSiCL6dE4WPgCuJPQFDAwD5iw6SfsphEZQxDoxSQT5rf6uuUPHgeRqS4RrBayeaxtQ",
  "key33": "25pnkVbvD58NCgsHDqDekeHDfCYpZrKDGk1FRGWKor8ZZFSRgpXrqd7cexaS4frPKqcPTx2jez9z41uWcGXwCDSf",
  "key34": "3x3ApiosCLRkwYXyHJiUyjipw1Xv6XQPv2NMGWb1mYio2fyRwC5mu81DSQrErBYFAW18JSpnvGDDjDzbCYgbZE7d"
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
