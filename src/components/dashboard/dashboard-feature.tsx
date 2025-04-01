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
    "5vYJMdVznVi1SsXm3c1WdNr5eWrsKt1MaB7DuDzLFefg2CTHa8EwtjhaFVpc8BTivp8L4s791DWMM7Zk62XFCp3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63H7HRfdZrz7ePgm4JuHGVLqX58Te8vhfyZxJXGpvfPgMaKq9qwfqX8NDfMefmuBb8MpNx2kge73RRM3RAs4Atce",
  "key1": "34a46joZsk1BMFcFNmHqQLL6yZBHTUjsdqyqtwUEanJUgPrYCjHkH984qz9B2K6bGpxa86NBTywz6zStABygcgD4",
  "key2": "HaFJB6daEnFkrmgNk9F5n328oquSTrmuk5Ra8H8UK2sf9GGZJeaBeFDdCdG7BCUCokbc6ryGRmgzKTUEeDa5G9G",
  "key3": "YPd7bwiuo4LzeHuwb6GQGpRYZu9f4VWjPqx7Up7u6Uvsz1GC7BBeoti9wsL84GiGU1AEwgwXPUvoNqqjdqR69bc",
  "key4": "3678JhSCZAdcFr8LBZCbEetzNhFepaWi9YqKv1gCmfETRAKqASUgtuX89XR7yKg3qrqEB76SqU6SaDMdMzLARzTx",
  "key5": "4Tj4A2Bi5rsEj8rtExvpg9Scdk4w26rUjbq3uLgdBTrfJAFEmcQKgnDXPe2VKLizciCvhu5WqQAoZCZBaTx5XncU",
  "key6": "4p7DpE3s1zTt3QKTSUSHvHmhbppReVaPKYqBtN9uYPev5VFnJGmVAbqAG7fvo4pAN2N7tE2bQ7NFJp4moMydtCxN",
  "key7": "2bFNDj6sZ9NqMqXn1ghRZge8tnq9Hb1mTrfHAJuMN1aFj9P7xDWviSk9GGDsgvyjWVkmnrLu93mjAfwinDxQnn25",
  "key8": "4U9N8yo8NzA5pkbjfHCgUEo1Uer9PyYarN3gNvakTfhjkqAWvQYwiCLz3JKA6ZPEYeJ7VuMcV6BLb9ELpo2Mecor",
  "key9": "3AV2dEwGFxvSq1xRqNe2ShGxx4367QgxVXra45fokDmkJ9tGHHzUeiVezeD444ySgYzM41PStc3pSbAMXpMENRgZ",
  "key10": "3URvRDLMiWXBw8WWaK5CxVHUERvETtHAWWkC9no6oiaW7EJhWhbfAKFHApcMyivuu3hunJFjiRnxrsX8u8JJvCA",
  "key11": "4kV3VzcWFoFEtZPgbqEaDUVSwXDaZ49L3oMKqj5NfQm1wfEiPCoUUMZUmKGQjMkQevkYB7hCBy27oDQzMQbiugWn",
  "key12": "63Q6kpd9fZcthBjQXvfeerYuHQs4C68hJerxfE8kLxgVjasYLvfp1sUxRXY8Wzuxxfh75tMFewMGmCChxo488Yif",
  "key13": "3koeDMcxn9pjH1oArpSjUKbxhiuTiosriuLZzNQaKVHUKmo9iNarfLs7KEZMKw67YQmKRUe1QRDVyssfef3uLV6t",
  "key14": "xDQqqKvAXMsZSjD8YCp1ggXoHmJFFcMnJYMkfkthihdiAEehsD3YCKaUMDTmC186bQQTHEH5ZKz76kLzQviG85z",
  "key15": "2AhkVYnAzN1YXspnffsVhxas8XfhneB4ucHwF64LoAAqZRqqgrGPk49m3URjdE26yvh6GfVsnqWPkj8PVDrQn22Q",
  "key16": "2SxoSyVXXiLhZdz1trnLTKyapT7b7izdFWpucnvqeyQLYM9AEjghuTSpUteWHxLkMUM8qK8Yrs33DMSffTfyniSe",
  "key17": "5hea2JKW6zYSaHyR4Ns2Q2wukHeCSdFL3zhY5hH7bwEiq2snfX6VVrxRKgbBMEgeoTh24hopvqEYfGzHEHKs9Stw",
  "key18": "4qadKtL4MRnUt5R7DFxbhCqQLGcghJGh6XSGGiUfYj5pvFp2fm9kjNBextqtShh3D7P8UwHd4vaUeQoSzQULefjr",
  "key19": "2na538BWhJ6u3BgtfqSVRxnwq7Nh13cHuwjPFJjeAwioNk2dzwLsYb1f7uHDTMQY8roUfwr4nXgkXcyDoi3G1HDc",
  "key20": "o5VHqMaGNfKWrP428vREvQGdyn2Q6QXc29krGHwmA7hruExmLAXbrUsdq5NkUPFpj3gy8v8MiZncSWGtVjk4cqg",
  "key21": "4i1fJopxko48FiNLkmFCGdrjsfVfe6SmxPqV6JXKmP8XsWN6gGKHhX39zW8S1VvdRqN7cHBQmz8mHC4SSsu3UAG1",
  "key22": "4QxkxRw7sf1bgHpe2BtBihaydJEKeUYLup6hGw8Q1bNLvxuSPdt9NHeCLYYN6UbjhKvjwVrBBHkj9DgehZNSfSBE",
  "key23": "3dnFjzg3eeVnFCk4zh64N3HdAPYer8aZVnzmqSg4TDsDYedBWggPhRHNndsotYtpBjHhySP2YY92zMX11Cmwzhzu",
  "key24": "BypwTSxr39KurmzMBdss7kDpVv2dgzAJPaq6rACvmdTmUfYcLe5EwcWREWXcqYiBPtwVcGQupJZZCdTWL9ryijx",
  "key25": "5BqPMP5pKA7LDsAewqeNa3U6MBfcATBcKr4BnqRPpDngNxyNQ9gV5CEvF4bpQiwAsT72Gzcd1Z1jDoR2RFDeTHFA",
  "key26": "ARMiQD2yJmAka1ct7HZccQ1ykSbXYmb2zjGKZHVTfdec3JGiAY5dKe8GUH4Pd6VR6HnMfKn388rptWx496KxtcF",
  "key27": "4xjeeycnmdpzDmJgJxfN1EiMWEYDoFD95fxSiRcXGrPnfXj2xCx6yT3XT6KD8JTUymf3vjnjmKJcLrTCKnBAi9Qx",
  "key28": "4wo2SYpD9GLREvaEKCkmEakw7sd7hShjarFEueTBnzrMwFhiBmyGkFx7SKcFxBTDZv3ZHHptjRhg9W9AsDfp8Tkn",
  "key29": "2bHJhf96Kb2nCu54a9yuy5D86yDwDXmTpg2fYveWZe6jjfLxRHuQPpJEQAzswJjgpBoTAwqtECiTxxQ2WivmVT4M",
  "key30": "5aKWyY1reaYqPKzwCkDb5ZQCoxqecxumb3bTZDh39y1Ug2exfK8Bj7WZhWA1bCHHoYm8NCwuUkcN9AwBG8HgtVTw",
  "key31": "4sVFerQhmeUGje67tG9CgyfejrWwygEA1d96VfYrYHd65J2AVWckcVi95HpdcdWPwgAJ12gexyXD98uMgNsXyQeV",
  "key32": "3dnuDmMMsZBVL5Qi7JceqJ1PLBwsd35T1LoUJwznRVJkvYBa369S8EZYoVup4JtPUScuFys2NXvKy7NfeXmyMY6U",
  "key33": "2nCp7c7RiWoRLn34yhJKY3vRhtgRfjAgbBK5eRcCCufyszYfBKxa9iaVb7PrPZ7MhxuwDFzTGduyJPTBcmPmR9R6",
  "key34": "BteGDELsM8UjVU1stmxqxSx2HH2e4kDdmM6ZPguvYCgZ2bsSB7mh3wufXsiJP6XN22NLimRfU1e8Rudm2LtDpSR",
  "key35": "33ENPDFYkb1g4EJweGy6u8y78R1Dk9QRQpDiQ37M2McX2G79jtegK4jAKdfjX2FG8aBFRzgtD26GjwPSUgX6GdN9",
  "key36": "4vZQHNBwwns1poYLd8b5oHVPVVsTTWEY4gTQUyrgtRbmhzYdWTyCyoMbpk3YGDLvCLV5RNwE6kYrHNHHjPEzGB5o",
  "key37": "5F2QoSD9qnXx2sUJ7ixUEbWMtnWPeiGP57Qc1sGV9JZ9WffFTovjqSCEutvUkFz13hPiVkLrHcWkR5ZP2LqChgoW",
  "key38": "5oQf6FsBttWhgDc1MCqA9e2w6bzDLgLPzmmZHpRHi1oa7dqUCKWNjCB4aBC5Mb2VdeT9iCV2QMQGRGRm48qkGQRo",
  "key39": "3p4tFKPkqwNjLPXU5y96P8kttjyuJN4NhDKKigwEXjVbvhgVdn2CyqUDmxSnbt6Zh7FzVY1C6JUSgPSSWVnzb1Hf",
  "key40": "oALw2co9Y1rcW5VQLMLFCc7xiMXTN6J5LbQhh4n9hTGQwXQhhwZrGggewZA7oLTZiJhgyf6HjLSs6Afd71u7Kgt",
  "key41": "53ho3nAwvfaHyxNxLarWxrBKyf2GWt99PeJ5YuLJLmTHiKVggKVHdh3TnxXdPF64w74Ms2BYvPtYgHGbLGHhFj2Q",
  "key42": "5TzJN2YdvV7pAGUvr6PkTcryd2rSsAj3FXwPYK2JPRzJvDMfiUFYUw4rpkEh8QvjdfqXYM2WGA6Pb8zpiGTjYw4z",
  "key43": "23ABsT7ySdFxtiYuNgya2xS9PKZmEsLiwuRFco66ePTgomTwu3nnrNZZK61qzPeLNXUx3Q1s5RmvzdrDrnFfAVVT",
  "key44": "67UMk5HzihQhjuhSpHYTqNEEMUrvnVeie3fnnijwSRjxPkiQtfy9LVTMfxBRSQGqTL4cMy42VHBJZTpxPB7ZyHUr",
  "key45": "rSdqwR4Us5Bu8Ry6VRZRyPmEKKAVV9y3AK8tAp17dDtc9b1uToRqQEftrv3WcTQNdGSLEGJVb6rjZsEXXvR5rDh",
  "key46": "56R1d5iYdQLceBah8J92s3mupKnicuEkuXxUJPEgDZb3qH4wCezvVUttwskJt6HXKq1Tv5Vr33i7Qf9YXv5Gtj9r",
  "key47": "PpJayikqRPUdufH8QATojZPt6ZAuPy9txDaoG2NLMJJN9JDKe8eeom2YTnDSasK1eqqSRhUmqtmekueWxKS4LRf",
  "key48": "4i3j854BWoqg6jBmXgsvKD72eGctK3EdqbHHAVZjgGFJAA3N2gq7aW7NcvhrEWfLzYUBj8vZKeXSKcnFnWFiWZhQ",
  "key49": "e2f2PUazRJ65k3NqJ5EzGSLMYkp7Fr2gDUhLhkWHLyW9e2jsymyu6LWWC6DUur6G5yENYbxDN84SyhC1BNGenmp"
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
