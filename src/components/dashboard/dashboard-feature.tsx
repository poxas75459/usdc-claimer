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
    "bk3v1tsrbayfiCiFiAdnst9gA3TPxTEswmocbs6vwBJw3FGPAR6JWte7mHaBh7LcPVezB7yTaZuGViNzamPCF2X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VSC3zaN58xJ3Y8x8WaYLyKAVF3YCjw1x62jEuKVe48vWv4jnJsnFKgFEis4tzRNVWdmiGdiKz3SGtXH4Qyztmo",
  "key1": "HGhsjE5STASda2NoYWhJq7vkph9APHqc1rGTqUzMDVGmmGUGxAq6kLd7Z46kRLNcknZw3hbNbSS42QuvdrshAqA",
  "key2": "3bZjfotNLeEHBZ7sfo5Ka9nJGT9DPpE79pFp6UgXC3fAiEPg9Azdbrv6fBPKDjg3wVoUfRBdUnH5vzZdPMz5FB7E",
  "key3": "2j7XL7iXbjkseB1iBZQjChHR5SRfMM5ACbgyCkWjQK942zLvxrSLt9X6nay8TLK1LjaMSPvzMoLerDxQG9krN4tz",
  "key4": "2zVo6S7ypTQ5P9bvDrnPZhppdyp9GdeqFtQ15tXx3epxpW8TmbiVobDHLDKFBWp9zUd5ZjZbimFoVGZn87uMz932",
  "key5": "3gbuvASHqu4mJSuBewoLEbuubVnRwUDNixPv1HyDRZmaBJnwsu1BiWqA25MbqSFygz3JY588q7Ao7RuGupe2DyYn",
  "key6": "2Sh3mPX2Wu6EqGXgQntu5VxivedDTdhkqY3eMLSDMkaEe9SpXWbTywiPQzx65hu5zBH9ncgNRhx9ZNca5BL24GMV",
  "key7": "5cPWPyeAZ2Am9dkWRENH6FKv2yDsBEthoC5G3HkMNg3kKiWoAgGfPsLWkPss2Fsae5T9AyjzuCcfsBB5t9pRjMg3",
  "key8": "4PVypHKyjhFWCDrk1Tvsq11AqXo2QZJZArHM5ERGH1PeuVVnzgqMhruhHK5mhj1B5s8PKsSKDppTZmz8FiUn5gWw",
  "key9": "4E4nSs6ioN8dcBsZGH5fSSHmZy1newUBigopLgom4tRaKTMPqnvukL3iWad7G98SR34qruJt1VpGj5mAgyHSCeKT",
  "key10": "5ePB8mcwiR4qsdU6bQZTzBZNwEWCxYUJZyj3rv9eKetxwu3XLsKvqdvAwmkxPtn4wTi1gCVYjYz1NeBwyjGhsvPb",
  "key11": "5TrMcCZNyGs5TsuEgj8XDxKg3N8qnL1LhB92h2Vt9yYXAn8SSRKTt3pEA2zyB1YgHVtjpfJUMSSh8RVjfCbADH9Y",
  "key12": "2iXgjUn4oJfeNMeJvT3pzrZ4ZwTQ71SRcGPwVvNMgn8TkrANWRXPjzuTdPAwL5PErT3Pc7YCD9ZotavRBtPHYAhd",
  "key13": "4nZjUuPokhUeyfYrW5AeX1BNA8EJM4ygabinHcMj1YkHXFEoaYFiCaB1SC1vKfcKizyXmys75yzdPpoXNzxto3F8",
  "key14": "57uhKfKCUQciW6CZqa6QmTjgyrWHQc4hxvx6SDBaUt4bGDGCxskV2zdiMp4P1svSY2Cjjnma8MrUceuKHCctb7gH",
  "key15": "3GY53EorKBtHUt6oBy5673sLwgjzTEYyfkhsAuULJLGEBjY2XkUknQCNq1RUCQjMNFWStXY5Rg5eXopeEeWWAdo8",
  "key16": "23xki7rrrRbTszy2yAC3tkE7ZRaTWtKQVsdBLgF6EmidxZ2NVVCTo2RLJmdiNLcG3ejKGZqshL1p22TbKHNfweVM",
  "key17": "4Z6xtZvBDFfZMsosJF7rXtLP1MWoiEBshgv3MAFbduABbazUyQAuDAXeKejyAXUP3grq17B6A7M8xGHWWc11KZMH",
  "key18": "4k77cjJxCKCNdaJ7DoRqJwhtNfRZxqA9ibgUXXWUJrbR8pbwDR4zX8WN2eeVVKCJ4YuzBDCqWUxboa5WXrL79TFp",
  "key19": "4GAktNLzJi3YgUTqVNTXi2GV6wTErUBQadkZ34rF71giwpQ8siKAcEpj6nxA8GM9SeBx7FFR2To9CciujhapWu5z",
  "key20": "2DBjrpLYcYPFoL72HEs251gEFFhwyzXDuToypjRz1yXk2dJShh5xz4vBR1u67pfxSNDqUBN2WTmnEVQ2EneN4WXy",
  "key21": "52GXNFGWZ1gR4rXD4RQXJKgbMEukkJ2y7t5fUggBuM8QL4Ka4Tbx88U4jm95HRaKchnNwWq1U1M6R1HnGgBZh9VQ",
  "key22": "4bfpMDpNtzqbZcUtsJvhUvWo5EEcprR82sTKRhfxRjpNVtLxdv4no5ZNPv2kKeQV2w6PWnahBbAmdtf8P7JBnPxn",
  "key23": "3FpVRR3EHLr5UQzHSe9HkTvkRCnKcDhaVcZqqwxbwhjx5aE9c4mPbWH6aJNNtaovBJDXLcei6ccM2fu5TcZYMwU3",
  "key24": "2BwzKxayLcGxpC9xdUQrweb5oWLfbkxTan1HmW8SGteBDRMuxuEzNU3nDBfZrMk3JQrewYERBVXWm4rthVhsmynQ",
  "key25": "44E3y6TMejK7B3qybkVjLZm4c9sZNpse6SP6dhi2LVHcYFy3hhtoyMdYZryM4BJYcQL9dn4VV4ckKUqXhAX5cQGX",
  "key26": "4yF9kZ64hb9zsk2BisQpGjjBvEJ1QuShNHb48QZ6SrqUUmXryA15PFpvn8EQb9wBVt3c6J3npdb5qjPvNuDGgvqK",
  "key27": "4k24JgWg6HU7KDavjSThMHwTCkSfBwsuJs8tb3wNF9xAqYnMTkyjubd7UCgwwPwPCqoeW64vkQfZuveNFNmfkLNN",
  "key28": "3hJYycCQsPUoPL4szpcir8roKms4B1qWtHuuw9A1bqA8U7zKW3XAeHqRccwihwin8p4fYecktKcZdyJfjfyFRqEw",
  "key29": "2CSXeAcMMFVmcTV89HKBhDxHE3tnqit1nFLhVVx3keAEEHqjh7KzwgGH9rVjkBbCBQXFTA1f8jKEEzi2az5ZyakC",
  "key30": "2Vwa6XPza4F2bphm9pdMmTh7nzhUN4KfPFfSVmj4aDuiJYhCwUEgdgwH2VQVSGimTwnHjDm1tAiehLPiihxS7gMW",
  "key31": "5vz4cNoR4ruhKN5VTrLtojau5xuHcw8szFZi5a48QWQNFcBttVzMHrCa3e5vq6WFDwRHvPYjgu5GqYyUcyCMwWka",
  "key32": "28CUf1HGtvYiBUrLZEhebsHRXZp32T7tXeU7SPvEmEiKNcuGzZABsH7DyDK3BnkaNDLusgq9gTyLVRXjF9BoDVgR",
  "key33": "GEzpgPC5kHXuRQybBH22XNNomML1wRGLXMrsJp2rdhMVsoEXhkRugY5mPQexnHnk4AdGpYyauLG3uXXD1UvFhP4",
  "key34": "3zzqT54Zjg9b2qfJ9veTnf6sL1DjpbqcSjkkTdPMKrFV2uCyU1wmVdsHfkTpWWt5hhP9nUJHMzbsZTEJi7sab7eN",
  "key35": "4xNFxmRYTyGoVvZypR1Z3Gak3MACjgzp5xGysgVXBzd4t6WBrsfhgQrP94v9357uSwDoZyCMibLm7dvDMuPmqGTc",
  "key36": "t7TrzwDuB9ddQjQ1xX9HZYcvnRAzsTc1MU9LzdpQRnw9bnqjgkxNSbZS2FreX9ntYUjnAS58GPHvXTZBVgJQhLh",
  "key37": "bPE8eZ3iCPLS3dLBXVQD5xcsprRiWCA5DaKBkRQz1nngGYfcxzxt9GjP8H6TypupqtTdFJFxyt2FdMPKQBbKDHT",
  "key38": "2qc6FyNN8NeXZip9ndveLqRj7qwzmYnJfaXZ33KkGZtZAiwBKm3HNmZ63zXDLyp1bj2ercMMnxK92pn1DaAS8eP8",
  "key39": "2NUhibjgJpmEttXDFiECu9jGdT1TbScXKYzKEuCQPdZU89wES5BZVtoTEfVxHSY4TGgtBAvWNDGTjY2B9dxbNgap",
  "key40": "BaFLzFdtFb4bFJoJkUfKRHkVDii5snz4kTCReAgDWfqux6JKJKgtaUHqrXYY8P5cfSXVL7ubAPhJ8xrscHY6G6A",
  "key41": "3be83MAiQ55ZYfZC7PJZ6i3EnH9XfJFufQPXUmSHU6VhK2PBwrVEcgifY2imQNAwohJ4sQA15PnTwR9Gfx2T5kJJ",
  "key42": "4178ujpEvxuGCkMTYp88A1rNH78mboaazbBrEatA8pxPeKKAR6J7dUv1tnJk6uS46ZxJFx9abWU5fJt7F3oMLAKp",
  "key43": "3VKEnWaerag1oh5sbAt9AsrkBCCzefW7oq6jTJX1kE23VvWj6y3gmL4f7CW4tQ54sMoCUdJDSdbiqcSH36RbFpVr",
  "key44": "3rxi3GYfK3bUgXcYQvYxTLa72nKePFFpSeDEnrMBY6V2h57kRjYcNQoZxKvBVx2Sc6ic8y5UP7vQRNf4T6xvCx1e",
  "key45": "5MmJrru8GWFUgcbjmezhVYKNn2bTQyPGgirC9Mdoq5eQD4qBq6giJXRQ3it1KL5CgS8eR5FppBg6TpfbSSvLjr4g"
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
