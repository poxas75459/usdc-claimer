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
    "3Pb5vum7pM93Qvqzf75wWJrX8sTSgS8Pffbrm1d7L3GvTdyQgg7gHEwBd3vcLLx1kyyrrXnPcJ6NEpJEWpRAoqEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhcvG6ibQcuxyLTYB7BoWGLe93KUo9ZVf2CV42trttzhiRR3NgxYWE69s8AcAsFZDCRDwjxGu68Nqj2QJXYLDMn",
  "key1": "RuzKLTbvQDXATrnFMSvbrCTfo18sUtwbhJKA34iE2fuAAc9JE7DrAEwq8pLyt2sC7fzDnTKseork8Ty8hc9Moii",
  "key2": "5VzfR6CivpVD845RL1WzXbY9NLKJMzQESaNXh6dRisc5nMkmjEJcPYJkmRVp6cubHcJbnnNXwUKhkD7qgheSb7QP",
  "key3": "rK8jZVrkuvfSrVUvPv73HYQQyDRsCzrasX4NxH2bRnsqDuMmYzaNLKfTyCznnpGnXmn1p8ir4zpLzDJZGYDTcp6",
  "key4": "5fWrPmQ6pJuyh66VoMpLHLqq8QYFQX4mh2m3KEktgjJnF4EnR3Vev9QBVe8wespNXSk43W6YySV4EUC4YVp6e8WL",
  "key5": "2zp4v4ShYwEhJUycdwWENJkpyxcsZJT6BN6FowVaZveLjHPsHfc9P9x9x2vWbnUkYsoZ5MhTRQqDEwNG3tVHcokV",
  "key6": "3oS8LGMW2uQsBmQt67ByMu33bb1w9mZDBvGZoxB6xwVUVtyxSAUEdg6d3QpQ2nFTPpMqZCLq3q1Sh6eq8hifDpZe",
  "key7": "2noJgFFafj1QueyMnAwAfxDvU91dgHUAvXKVV3u75T3jrJVarQ4doPTxJhwPJB5AnPjDKD7Do6KgXQouMm8hgZcF",
  "key8": "4Dx7mPVaDAW3XzLLhGwKYdBfwiTDNzuEgx911UdEuKNcrkA6Su3NuZNqDx63JLpuJMBDg19mNArKENyJ5qnFVqM5",
  "key9": "52tB5XJe5yPBkgmtFZK7WyiaKpXGRH7e568an6AetiwhjmWFQswB14kuNDofULnoiYPQsNKDdZd7UexatxLwBRxu",
  "key10": "8toi1Hu6kwF1YzWZQamCp9hDoJvGXxNA3owKCEUqMK8toCbpQKQEWBnbNDUo3Ak5mD2juXVcvSvRnZNSeBapGTc",
  "key11": "4wnnKHDHGWrw9YRkz6WbZ9bqT4AVmw6yxwaHcmjtm1twbCwgfgarM2Voxc3MsakGtXW2WFbjzpNteu2w7fwyoqH4",
  "key12": "w33TfoDchzzg7PoNGZi1Vrxh3p7xna8EcdgPDgunf5wjUVoBPaCFeheM859xgfp9GqG6o1wvTUYq4As8yqq6uzc",
  "key13": "xwyJXDni3149kyAur3aDNaRQyYgztURWg1FHK2u6tPGUGEPN8mUdEjG4SBmJ55h4xjfjxvMdAd5ab668Xc8v6zu",
  "key14": "mrYBRmuKFjGuWC2zT3QjAsWmm38GXmqAgekmLiuCdxAmz5LgGtGPSPQH8uhYZtvmn8CFBpThjgf3hFm1CMuE5Yw",
  "key15": "4BJLqEbmk5rp55gEyQeK7iDxJVcZWGX4ho2yHcbA4X66asMJkP37U8qKKfcCCYaf5dUfDddQLET61vZWkKbJhqyK",
  "key16": "RJzPQsymviaa1sngU8Gaw7eh1yvsGepnQXWm63ugBJ4T6YxhhTXYzpYQAfpt6icGhPeyhHVFK6kmFvztzyA2JBA",
  "key17": "4Lp6UYXkWsY3SuiHNS9PA5sUmcXvuixyhU9EE4nPtgFJDm2Yhbh6Q7SL462pziCw4XgqpDGAFn6J2mpu6nhJiJy4",
  "key18": "5XbNKasN2WQrFMtnhSZK4UZxgpR9yDE9mNonbumAzPpNnVs5y1wsb76tWngPhgxKPyKbMNjNs15QtNHHqLVAMqbd",
  "key19": "5Mn7qW5C6GAUnbmZUfKS3ZPYiEd4GUc41sXPX81ikhiMat12mnxkMzmujo6QJuzMotJk6hxMq8utXz3UFto84e4d",
  "key20": "23EpHnbqCRJRdB8wHpDzfoHR9WuNzo2Nn7AU2Hnq9EVB2vFe1DfmxcAAbNnrd9znQK2DbRgw7P8UGan57GJagt4i",
  "key21": "4GLy7TNA2Y1Qyd5Utkgs6uaN48woQJUoyc8dmSJtrx6Evb9T1pYiQj1Gkgiauvg8Udi1bCjF4HvVFCmKnp6CCYjd",
  "key22": "2Kv4xtnkHk58zpUQRj8fgkD5UkABgN4SCAAXjij7JHfjiyWMZGzogA7fyGcrTgBnKsBRJpQh4i6NhTJRTVxNszVs",
  "key23": "47PuLdbKFWfkDTz2k3zPMtTjbTj63pYGmkPPeopZ2XVnyKaAXExkQ79vzxXhzky2iBq7bXS8uAWHzVDsRz2Ysycc",
  "key24": "5wP7LunqQWquW1yRYbk1DhnHP4vB9DU7CpFMuNmWGKfZ3XfR7TShHQhDZKocuF9xXwbc4Xd56jEszUtdUiZgBpEW",
  "key25": "2bmqDKnD81FbwpnYTueyagTDphG4ZoQeCWUBBU3V22Ug86GAbECrG9ES2mfqfNLZ93tDM9onz2C3rbZCMyN5MycU",
  "key26": "39pGRNm8LZ1m8wp2AAyDTHXZdSMNd35majWaatKLfNstPsxdCFs3hmnEKri7RG87SLDvgqGFzaN26H4NjAqxPDNV",
  "key27": "4svUU6tq5mmhuCqX79Regs5rAi1vXEH53oqsVgrJsZ8vwy6sC4w6gApkp5N49dovYB74gYHAZu851XMpGvoiied2",
  "key28": "fgx5TF4USM33ujb3mFqWT8G1T4QSUSxjTyYb5zu4cWBnJd2BoBMzr5A9znnMvHyuZwZ1im2pQyrXnEDviwH8jFJ",
  "key29": "2rRe6APi1m3yNbZDzv4rjVxJyVu9oHGbr8pF5ZDBKw4hJFiS8D9o1gXsv1bNCkK9yrJYeGjgGX15FWhbAyCSE9Pz",
  "key30": "4RaHUyF25bDb2o5TAXVZC2n2bfCA7SE3KZNvANchFtDuTwRcWiTxA1J5VVEed34k1ierY5UrEcfGNiLnD68cB1nc",
  "key31": "31pDz8GqTe7xiDAGQFtsvQ6eEVgGaPEUddpNCD31hkaGadLYUVBPdWVErJFmgjuAGQhdLMRL6n726GHgeu6rM5yq",
  "key32": "5uLm6vdvaTTrWvNqiKWe93rZMxh3LqhXEy9i16fyB4j3bTQD1QPu7Ci2W4oUnHwEfPTuAsD41TaxSVFt6BPE8YQA",
  "key33": "5G9zhCDWt1CnUv7ApohY2MUf9NKfSifuc7CHXxUDjQBchJNbLUY7CNftqyfVNvUiH6x2nRNvJfTRBvLCQitzZskd",
  "key34": "56wnbBYe2uQD15GtbvH7Qs28TzjvpbQWrADAZLMYyD98sdDkvnVpBg27QRvADACqR6xYeoBM8nDD43RiYopAC4FE",
  "key35": "3vPm76ZuFSJby6nkJi7zswJKTuRzDLfsgvodfNqC8NCPXS7tUqgSaAQ8teZKtmLXkaeDd8Q1SSB5Agj3CZdWknt5",
  "key36": "4VStSFE52fKFL99MiQeEryN1BQ4fGpcjXHTqNXLMjrinMi99rVEroDDHn8VQXpYqSFKLgiBxq4fpy955HRXp77fQ",
  "key37": "5QdtjKj4NdGegXid5VtoTnwcFQrR3P7Q5V9qLzXE3oWgF1E4xb7PqfMoHCrNg3DyWpwZVW5CQBHYNh2j2kDERMpf",
  "key38": "3MBhvH6h24zdcKNia2za4Tkb6KsM1RuTzUUv44Xk7pEZC4C4pUiuaQc5XwZr9upE89WKbpWciDWa82VGbgpXUyRf",
  "key39": "Ry9fnAQSjGkotyJkZ3YzK2xmZ5cgeZ5ADxBxq4v4Ct4zeq2VW3UBbNJWDqUe1dE4CJxCycDQvbMPwuDkz1Z1ENV",
  "key40": "75xx89ShM2m6rcE5fmr6SZqN2MhHBwzmfAkYPLTFQeGGGhbsNbHUwcjEMuxEwmTyqJAnyE17U8Gf1nZCUwTTpyW",
  "key41": "4cvHKthyMj4joVAqA7MUEjmjBmQyQsVmLGT1DjvpRqVS5hmmjwxm5XdDzqGgmR21h1hukuA3j3LCgxt3wMtWgsiF",
  "key42": "4zH5bJVA3zkcetaVZBuPQB2GHRJr5D1RQG5gauESXuwipLi4caTntDhnFLiX4dodJ1ycxbSnVRTPtjmqvzmmSD2a",
  "key43": "467Uz8gLFYfi4R7cGk6x5pQHX2hToe47Qvc5xuwQFD2VWzccKDZZZAJfUyXT97EJK5d9iEg5UWpZu2BXsEJUyahV",
  "key44": "5mSMHtUHgmgMhK9fbjtr531ux4nk3ydKdLWRUY869K4ncw48EqUfPbu5i1ZLCch6BtFN2iaHedCDU7SnCxoGdEgV",
  "key45": "3sFtzaMt344yMDedLm8ABnLLUAA8m95BRsZD5k5BmceVp12bPM2mM11jwvxfkpcnuKwejxExJZHYKuUggDwcaiiJ",
  "key46": "57wHekeyUdyMn8tAcpjwaLt3ZBqj9yNwfqXk5zEQJYda4mqT9FPabuQvmG8ZE51gms48SnG24JLvQFdfGMaPhPUt"
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
