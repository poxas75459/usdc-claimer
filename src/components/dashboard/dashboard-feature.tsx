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
    "3eShPyezbzgE7H7KZ1wb4aQCuGiRNAtjk4YoWbV5eAWp87uqHbCe9uEb82a9U4H9E6tLHGaPs69WKSjwj6HL6ZtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HHA2uvhEezwrfSaLZZiV3wfz8YaJ4GL22XEbbuPgfo4VAGWbhAWjKRXcw9t3k9bt7DM4FBjYSzYpJymN51z2ug",
  "key1": "hvBP8QAtbdrfEFAHXZ3UdiUjvRC9HcS4HBTuDxQqDoi4pvUNXVtfQetQnwU4GKrY2b6zsBQh4c9oYMPfx2tF9SK",
  "key2": "5rpDcF9Gskjj3w68kKT7DKSEcsrShyqwbSyWZFG9vbPfA6S3GyQE37rciuQ2dBBgJRu36whnKJG8QJauTZCEkFuK",
  "key3": "47ECqi8yauiSuQuqtv7fD6iE4jhhbp6n1pnvaCGGQQ3z5HUZ52ZbGqF3GGKSZmxFCZWtVuoxZ5YJVWUjcjnFC1Do",
  "key4": "65a1cWg8vdGxLMRKosx2wyxzcFNRoCf5TDYVPsS9f4ewKHUrhsW4yhSMgJmEVZReUG8qDvyBYk6P1GKBtGQnE7Bv",
  "key5": "5aLFW1VjMCSAvb1PZneWcWuFJ3kNAaXnSAfLfcsmKP6aex71Cgv2Y9gHixbARVtAGb8Gc3cPL2fSGcSqiiW6qSbT",
  "key6": "2XzWnX7bkTjSdXdtitL4AVxWZwzFC1DyFjW2nMcu4a4KPMm3ZVr3YsLJkj7N6qVjXNgxQqbHHaAwxhJ32kZ36ABS",
  "key7": "3KuaZLfPSHyy5ksKfFqEML2WJHjZFGnKkWzt3cTvNWybvFQvwELTMWZQxuLKEjwY8o6dPnwumGxKgTBVApqGtMQL",
  "key8": "3ixtMKXnQSe8FUvo67HkBrKsrQiTwbM4SPLVqiKLwU7BCd4CGFDwpkRgY4CUcN8imSNFDRQP1L1YHkgZnPDPQ97i",
  "key9": "2p1QSjXhRtSgqX5apgjGocv9CeTdcBuFa3ttLJsaKuB1z63dDpjU4m5LcEjSH3n8AGT64bupzmjUBAaV46xZh4yz",
  "key10": "3gWsjDouKBwEUomhnDnvp7CQTTPnZ61GghBrjqy5gfMbfscNayQhc4LDtc37Jc4UhU12vkFUHASQza7g68q5THo6",
  "key11": "51yHmq9bw3vRvkqnG4WDw2dRoghtKVLHpvjzKsicbivTWv5vJqRnU9gLhjRpPYnrY54HBE8iR5Uiwq9ZQijQG4xE",
  "key12": "325c4qs9tyHeRtSeaHjzqRqAcwT9ZYPSXtWjuxFU2VuvEiPikZBDjPwWLd8rR86zjjDwjWd6N9bLYQAj4nBAKPY5",
  "key13": "52C9gnqX1FYnbrBSJgUoZTp4LixAhNirttJKktpkKKqYfHdw5Y6SjjMnAhsfY5KwnsMShMMi1zFVDhuGDJ84NoN5",
  "key14": "2FvwNutNwqe15H2YLw1PoG73FtRf5P7tXSofhwZMPnJc7P9ivgxPEt3ZfwHWDt2pog9tUBQCd4ahNVNdAftfjkx3",
  "key15": "p4BqmUZuHdxa4G3tddXxGzTS987sSi919HyFmvioBLCS3aP9TFf6rbbjJZx8tCp2kApfSu8Mefwrc2463VBHgR8",
  "key16": "4PkpDrtNicaWtZfJz58ppHJRq2LAnqXaqxfiqBzis8ovY4S2Vi51YSreEsDN39F9XK8dMTgxDCUtSBUc2cYVm5b5",
  "key17": "2GAYUx2bm63w2cJZm7eu8CJ2APip4FqZqvi56t6H8d3hTbb82aBMcCCy3qBNtJSUxdQcSr67RD9TB9hNyZR1WjYq",
  "key18": "2bSv6NQzaoR3Y1LFyLtn44Z41rnHhW9HXiEV67Cq8FoUAkjiVavsV9SgB5Zsh38ZLPogUDsV5aaviKdAzMhU2Sis",
  "key19": "4jNrPfLug4QZjD6eA1mo3NRFJuMmAX83E1ckyLZBztEn9gLYGe75Hoz9tZrHdNnnzTXX2UTW5wGPWKW2CTziLX1k",
  "key20": "wNHZ1BR5RpQ4pevezfpQRm2hVNxxL3UCz9vM7STxRfQe1rsvYpS2CNvUStuUAQ3ocrb1jpbFb9zPEkYCGbpyjJq",
  "key21": "2oop9pgZvfVpc3KxUisgeaqZRFMh7ZoFZtPRwKDhf8aXsKGdf1kWB9PVebj7PL4geuGnByzwu168Yyzxzoo7bjWL",
  "key22": "5kyZRevg727dBq49BGHhoUTiFED6kJAYUv7zzaGt5LhXat8TY2hAf8j4aSAnPRKpWjk4WE6HRdAhXCKLcYqiDbSR",
  "key23": "2nNpro2tWhMSzdnWX36q6d5Fk3qMQbrdbeH9MVGi3gCxt78i8erdjypJD3chyDyxaWkpVDAvGLpA3h7tVk6E9Y8h",
  "key24": "3J9yoZCP9DH6gWv9Babb9ejZZUoa2baBWJ2YeTSrQfAwPvFNWqNk6jo1aQqvEb5RRJJkSnu6ZTsspxikBuDwchtc",
  "key25": "49d9DUobNC7PBBRYeMauyNU1FWu2Bdzx14viqmaw7maNZJyV3vAAcc7pBrokn6weCM3Y6BQrye3fAK6ntLH98sex",
  "key26": "2YrEHWWEiparuzmYSYpFFWCSkzcZCouURL8cmnrLEUMSy4qteR4odesdtC2t9ZTgnkCTwDa7t9QyrvCHUmyN5gof",
  "key27": "3MjRCNeDLwsM6f6EfTfbgkYAyCQbBFcxBKzgbJGWu98K4EJoiJirccs7SFTYgBWQiY37wipqiY4N4v8xvZQ2A2S8",
  "key28": "qDsf6B5JDNvbAZfx15NyoFaDmUrmsf8KoYYQuHTNwpHxYavbeE6jnMYMaW9T8xsEzDCcHEK9o1QkBnhoCSujEhf",
  "key29": "677jNF6WuN1e425uKpV5uB6cPzZSyJzQ4aFsjJuWrmNtXpDgsUH2KvG2d1CjQ1ZhUvcwaJCK8qLbHN5RJFJHPxcS",
  "key30": "2C8hazoCjHiQwoQ4561CHXRfqcuXT9A12TqE1CjwsjoPjcZFZDpyrA3biAbGHPsRbcUyVnmkgqcTXkrmrX5hwGVL",
  "key31": "56jYAcDfqFDNj1FJziA9pMabXgSAAXHWC9uk3YccBKdiqvAey1rFBLe5F533ZVuDgZEYauab9UtUhLERH9CCci3N",
  "key32": "2tgJffoEKk4sV99ZvgkKSpu8AJ5eyhNvksgT2kN3VBnWAVpPFsjCRbLukZPKwfB7FGQdbpA5UmW5FCDxXgkdHrZi",
  "key33": "2tTcRC8L8rR3ojzPFz3KgRWmdcFJxgmeHd7TnGKJdsm7Nfej6U9banW6BgP4eiJ5mhmpxa4nXBSGwo9MdY6txueA",
  "key34": "5MFRnRKEAhH2Bj5Q8D4uwB1omvdU1xk3hNo5w41JLZnPFWSCvbNo4vhCGYP5nUe71pNsuVe52AtjsPpDZ9M7REYD",
  "key35": "46hXezva3x3ZRBpyiWRkV1rMnfZR2tGUcaMvQdKKiRTswPnVQXhDroYaXnc3wHcJ4RcTpa765vKwUJP8U22Ehcyk",
  "key36": "2QBgrtgbdKnCMvV6MdQpXLPtNDrUShZ16CyWzbPoobKPHciKHRnCW8hKTBB81ftRR1UQpMi2EacWQ4j3zfXDMzok",
  "key37": "sX6TkKqFjbih4SYmNiYnDNDUU49vi9EbJSk5rjXXNXUygq4d63FBY4u3Ap2NtsNiUwXSHZgztQ4nVJRECcMV8bo",
  "key38": "61YJJNHDqkQFRfRGS9G1G82vfKWwQ6HaYS9uUtH8hUTimtMRRsyFRAwegSSfQvLrFZeD58Gk4ioLQWTD7tv5ok4u",
  "key39": "3n7mY5SDxQv1w6amXZ4uGZnrYBtAbNfBawTvWTppEJJk1QDR4eedbYHXUjKJj3PWiMD39seoU85pMZZqaRHJtrnv",
  "key40": "49UiZBi5NtuDZbZE1kW6HDLhKdYGLLyqpSujdcr7CTnX99jBMiCWD5QAv6P9XpSViKGRKJ9UUqijbNjb9RR1d5mf",
  "key41": "5mseBophtr8J54ku9mgSyAmrdN47AXTZRPfrZeHvuJnCpV8edK4vUovo9zvQRqHAAb13Q4G8T69BEffCZ5Uc2A5Y",
  "key42": "2LboGL7Pr4FcLqyagkA16H9tUbMz3oscXpfTwAmc9pKqY468izEFiuH5UkAhNKcv3iheMRmv6BL7BXiYMA9StJyU",
  "key43": "3htKYnPXLkpj9jV2gsifPmXoABiWgmPaoerXqQWttAWrhQDW83KTVRN9iEsbYQYn9JDNRWSKZ3bpRSyFqNfCQuSs",
  "key44": "5SYqZusJH85rHVAjgmcNFb9vRkrvB6TRhP1q3XThgEBMQ5dcrBZtVmgPaG755qPjSZY2Yz9rTkBamyieRVMSHK9j"
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
