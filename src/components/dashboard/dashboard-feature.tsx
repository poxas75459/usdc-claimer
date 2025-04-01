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
    "1AVQcFjhSt5sUPdUzjJjmnGgo1aMxLxg6EbtD6zsSuToZwrTZp5JZ6bj6wqvPe3jV3ncTuczBKyDe5feB1779Ce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651sVLgJc4PmBHjLeeUKy3giVLZgbmmJwL3w2oTDTvg9H9mN4YtLAAdRTU9uHTco5dX56D2XU1TyPWf4N2gJtiNc",
  "key1": "Bo384FKTa16ZQ3f4U5kkV7xWoHjm6Z1MHDkJLRygpkmr1S4wajiEM2eGaAp9MwK18TNximjVz5naLujdASrDBqx",
  "key2": "3UDHe97YuDD68D4czH6NE4Ex1RBHd1JMPEw4eHEgXywoLXoxGsncBRwczgSSEThjL7rg3rkKNraHe5ijQr3dycoX",
  "key3": "2zrwSZai7fgYmovvxNmBTMixG5FFdUgUP4JSfmuSEthe74gkUbvPjz4uEYQ4ppLkG7vS6Drdwcgsxg2NUmmP78U7",
  "key4": "aDrBCfGVHR8hsKLdbw3R2ZGtKrYhSiARRD5s5xxbMk48xcQuYXEYhVQLQMeBgqmWLGdn8fDfMfF71EVEX1xDWjh",
  "key5": "4otGXKJ2UdH2f4oofWpXYMvMXbLUkGsX9nagreorghZjxmrQGqJvSTaWXBbZJeo6ZiseyQNTVfbah1F5HTYJgrBk",
  "key6": "4W9a1ArMXc1onr6tcb9RCFz3w3oW6j9HQtqxEYjJrJLtpKmd2ho8a2y9YoCJQ1q5D138STCewDHVmCsEmx4amMMr",
  "key7": "52MLSHp1ofKoJnAvcTUDCzaK7xtLTJRk9gWUxGDCRg7mM5KpR3ZZynwWoxNY9pTF2GoCqLZEf34bt3jcy8DhfEA5",
  "key8": "C1uw856KMmHYkea5ovVnYUFkacjvYR67RmWWXDASBzA3PFdY4aymog8Q6Hrum76Ub5aWRNZbeDee8dpo62gDUcQ",
  "key9": "2haxK4zpoc3swRodBmJkgeitsekrZCbJXzsQ5MyQVxsvsxqGBy9eMs33YCFFLSByb1jyhxwbNUegCoFQrHnDnDZT",
  "key10": "64LiwphFjK41h4KLqHytkzSpPppeh2Z51KGAQZM8LAhfaU5sWNuDimRgdGeJuXnpaJmgccQVZWEJ8AM9HoJ1rUXd",
  "key11": "43o2MwwS63auXXYUrV43NW3ga2JzNM9d7yfygZKR4yrnrAfo9dD2pnVgDiaTsPqRUT6PGbnHndHsjWaRef14jGhY",
  "key12": "22DYRzie9f6gikexWxmGZ461DfAcEY5nJsrW46Ep3VAZfWcXc4DZrwVsnfg7qMznLutkDPMWCwLdTUjAi9VHSrUh",
  "key13": "2RSuuNFWvefH6ELP2rJ5n9wCXTWQ9ZgQ2DYr9nYeBVCssPKwyzsg6oJrYtyPMKmjQNKRwsAkYVAKtF2AacNVDQXP",
  "key14": "5REYEdr3k8NGAD7WDq2aCW3JsM9pnzueG9YdBKnhD1ncUXhgCpAMgGSvXhuHpzqy9gtD12WobYB4u3gJdDgSHGqC",
  "key15": "KQ13kAQia2P2U1mhbE8qyrHHCh93WippTdNJ98aJLdRUDUE3oFjbidaWo5jZ65oa5QN9ShHRaNCDXRfEMKsLhCM",
  "key16": "3DidzwEHmdMn1KJFeCFAGWYd5snKpgzH6gg8hdDMKVf9tE8TYTrkBm1sWoRE5ZM6oWPE56qNbc8GTgWGNfbGzENJ",
  "key17": "5ucizy1wtdnumByu91BSeY6GtC9259TmgvcS7aykiw9WGdJ9EeLpW6iprk5MHGmZGhUayoDfrDkt1BCF2GiH2shm",
  "key18": "3hGz55z2tf6pgDKKb2DjzesBR7c68WHu6yaHJZJtnWre5byRdcpSq57ALkLw3sYeCxU5N5xqvj8zcncLyka78yoc",
  "key19": "4kbiKvuTi8aVWTv2Lz7nmUzkdWCve3m6jHdBCYEtdvi5oQd6f666XqnXtXXz37B2weSQyjN8adxaMBCxDb3JJ4oh",
  "key20": "3fA4vhTLW2YJYCcNVKL4eE6jeNNmHLgSmu6JJ8jAxwToZ2AY5DMS6SYESzVdSEWbjkEYKqu2AZGmG9P4vCXCdtZt",
  "key21": "2eCRKGn5tEiUVVDnTFiS4SPm27FNryDosYPf5pkmbCitPqNZUhy5mBgDoWX3GJeZddBdVfRQFm641yZ1y9SumvtS",
  "key22": "4TZs4UWtXmUr47SSpzuKRjaGb5h5CjVSAoX4Nv5z6VYfSS6gteMa35bQrHpNDHy3Vy8uv8cUQKgG6PfzzMqhooRC",
  "key23": "VPxH5eqcxGWkS8xTDKi7JsDzPHH5BfSPsRPHtnEbhQnq22i1Fatre8XSRtLMSNdX3rfiaoaVaesxGaRS5MCTnd9",
  "key24": "4UwQ92A13YXsitTC1FnV6cC83zehF3KNFLPt4cVuesTmVBxKRHF3WNYFqw8jCCjx1Vhg6wo2XfygRUABgsDaxRyh",
  "key25": "4QtcTaJq8gM5xA6N3JxBxjtFkLYFrxMzHYBReroYKPA7QrGcRzm8TWgkJMhrdHPQdXGjnBVK6Cj9pAJBWSw8zG3n",
  "key26": "rvgeLV4kvKKPdD6KZ4f8nYijH9pkpKLGrtKSAjthgUfVXp2V4NMB1Myzk1S24pA4NzodxT9iQ5zRNRy5esAMXZx",
  "key27": "58eGKpqxjZAGio9dzDtuoC4ba4Pci9dJi7EW1dDRMba3WxLxJAmhpMxSYBMhfrAdfQNjwBtP9ajzvXQTKJ3iAF2E",
  "key28": "4wEsaWgc8bLnZde1YC1KS3VMSttJLk7Nio619CqLu93CQpYry8bS6b2eEK7kX1RmJgGFsUL3QH8ThSwMqYkmL4oB",
  "key29": "3EYzBtYHYusazUNW4hBttPUaHwbderHewwC4gH7vUbf51NKFGCu1EVYBYUrrfVyrB9ZrWzWHyho8cf4nyeDwcM8A",
  "key30": "4pB2hZ6sT6YArsp1UL3eqTAQAJjSYLZZQk8VVWGCByJrrCcE3T1zyNj3jUk9iV2S412SMYkEvxM4X56mfiDuy8jG",
  "key31": "4bcXnrxTiuBbZjR1GPcEj41j7FVD1zut387Fr3zJCcV1z7hjfURqdnojCfq7he5rhxVXzHhhwSTh9PtqfXZuPycg",
  "key32": "2gM5LEPsyR73u9kesp7k9MPBTpWtkSfobUq4rPoDCaBGJQojdQAApg87AvipDmc1SbZpCQ7HqZB91HDSyszj4qW2",
  "key33": "3vMRc9CgxH7k4AiYRNgS4NvuVRtYyaLowvvJ2aTPCs9FQGwQ8KDLuBYYXKQia91j2toy7sfUUqWWa5wcpq8pq324",
  "key34": "5CpiQrHSg8Wh4kxgsvv2QpnxsN6KSv25GA9DzV8mVxXaCgtxzZ3oTVL3FTuADgPhKNtB1A68xAEZRGTo21nF29Wh",
  "key35": "4vMMzsxAaMJ6eFAi2hbPrxMZBnbfz3zQfpg2xJigzK7juGbm2WHMGrCQmEo2HFwTNHGX4Dr4SyvE3JR4WhM9w3AB",
  "key36": "5fM9DMyv2JTCwUKvRMNZD66Vcn8L8sugs9q4pZCU9AaY8yQ1rWRKRy4xSBbfQpaAqkRG3GZemwQxDQDPCN4ZVnQn",
  "key37": "5sG9z5kMCGYjA8i36gBdBGZ65df1jPEpNFwPPngJ6FeNStjCUGYp8dpkCEMEML4SozTT3tapevM3o3cFjSurvMDj",
  "key38": "nF1DgiPUvu1UAf8sA8S91aNbDhCeFzTvCutzR4NY1vpotesQJo579dMUgNawouQNdUA6Eyy89kuKHd1RTBkkLzD"
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
