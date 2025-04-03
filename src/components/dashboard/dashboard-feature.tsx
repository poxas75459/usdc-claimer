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
    "3FS7f3t7P5sqwUtFF3xiTnVFrLmcB9EppsF746gobXf5oUjvk3wH5TwZTDfKEMfs8XKFrdgqF57r7qn5Vxz2KfmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63FmeBeTM2JNYCP5qJnQ9G8qa2YrnCkjqNc84og4HdspDSdGSWqcKQwPHqWeUsqD9aUTSVoMmn2jMWjCTLuxey2X",
  "key1": "xWoRZQbRWMC3jP6rRLDWmSZUwco7WmkHwiFUyNLio7NUHZKYKzJzH6s6JXD9UiD8jM7DTn1oSjvDXUKkyvfusLp",
  "key2": "3iFPAu4Br4uj4op8Sj3zZZjUiCsHRH4Zi6e7p5uVSUF5CMEXqyZoWnkfKB4gcGhJsSr77ASRVfYRNmWjVenh4hWH",
  "key3": "2HjAMPhUDPDuVxfSVMp1DMBudDMSUVgaUwJLH4sg171qn2Q6zddgYFndaz6YgXSsq4tssXBs2CiXxmUrywK3jmDJ",
  "key4": "5qM8MayUwC7FnJbp76EeuLY2xmCfo8hnN384DRCbTMMBtp3MEdJzS4sFNY8vfCUSimnFh8VxtMLnH5pykqiFDxBs",
  "key5": "43nLgQ8YhAFLnXeXgbAVhMQPpSmnvCd3FwYdRodbQu1KjR2LocwekowFvR9wDs19yMbqTMuodSkaqGGbEv482zmg",
  "key6": "5qqzYiFV6heuUjaeSSG62jZfCs9npfzugZ9bQGjF3ethaaKLzgCYkLYBzCtdoDo65YSZvMXXmqR2ZdVWKgyP9hGg",
  "key7": "st57GeEzoQszAUZhCVTQbcdX7QSkADRxycS45r4viLCy25m4a9XAfmVJjW3wJBteMmRDjmxvnniHaUHWtRXuXqn",
  "key8": "4R6Smk5SjzTfvDWUsSknGbGKcryX2LGFcKG3AnRSqzFjmFryujHyWvPTsQqUYZrwYsWr8Rj56AAWNoswAWrWprHC",
  "key9": "2n8A5xVXA8kqGbJhQRqnrHH2oaXbiHy81N3U1JdtfabbHaPVKJ1AUZyjnjxaXqyw6eFnZJoMJCZ4HTSCmVcMgYkA",
  "key10": "4fHm7ZNeXKtESthzhKrDaJQhkfsXPVJsFdXSD3Nqox2kyqk6NNQ3N8aUBTTa47B3WxtBDDRkftLLPQtFHSAYuEUf",
  "key11": "vYHRWfsQ3r8NW77EUeQ452pQA8J3Fxir57n3rBqMdwNdcQYTbMdDHCmudysJadGE59B5MJHdxLYRPQ1Wh9mXag5",
  "key12": "fk8PmkKBkPBm7DncNCRhy67AAZsKNAecRyW7rwNWgH4y62d2HsV6fn2iZsGvvS1zxy7yV1K5UeCr7H7wQFpqLrX",
  "key13": "33St1cZ9vXY3ySPQ1YT6iM9GrELrd3L75R4SKRgSJMJbXyjfQrEbFLm34dLpUXSayZFDr8pwEoRXhhhDQGAvkeT",
  "key14": "24vDrohAdvo4Urd5xh4YVWVXK4JaGuBDSxVMosW8NvxX78Ebjmqr42F9bmTRMgWwVeAxZAhGnnafk1tXEv76Sh6v",
  "key15": "5ijBwoH1jP2tk3gxA1aQFFjrgqHAMXb2vPHjHKaxi4evzcxDJAyTxH9Rgyqhtzg2sK7fGZN1wi9CrTNj3UEjLwub",
  "key16": "qU1xpspKzzfebJmPLxQ6BThG6WKSpCREMXC5Ye6BZtdGvRWnvqNitW66sUSsY48ScMJ8XJjLt7AqGXTXqa4JzKS",
  "key17": "5BqeXYCtrJcMA23v2PEMqpQqHYLC9mnLk6Efb8C3aiYC9foDL6TmhfvgXU9h8frvVVs85z7nD14nNcVrPJH46bmC",
  "key18": "8iEkCweV1xSdGKWAJw8WAePCpezFZj7v6y73YdjFrVtt9zjmevuQgTw6z3pgNgNZPcmNcijxVoVMQTjMnGpHXM7",
  "key19": "zE2azpS9PoyG23fRA5YPs1Zer4R4Wg2wbmydyg4RuumDVug98XkWdkDEmPwvRFBCGWeuFAJ4NoT9ztn4Ubo2MXs",
  "key20": "42qzd2uj9HSoWMpD6EBqMsv8H2tFNqcuTScPYCQj7ed7zGeqUFmxmyZXgNPLzMtyAJzw3Espc1D9neKNgaVbg8V8",
  "key21": "2B1gyWrzUaqurxzLUr4muGTTTFJ9osV9xHdsDPcC4xLBrB8BRNfWBvr2Cbeq2nJu3aBZ93otTo6E1vGAj5xwNuBw",
  "key22": "3pT9q4TJ8sN3gMkLU5ePaWLXPtPwRWEhCB48t1PzUxzSfjFxRd1MnEzfp3T2T1empC2Hte6Kk1sfEUHKXPR1Ujqu",
  "key23": "4HPiZBJrn2kdnudmJN11UH6mnNoZ4nzNvjgC16i1RrUv5h2EMeSEfpW8nCQ5BisSkEhj8vsTgdgKB8bkHys3M2uR",
  "key24": "BbyF16PNtpQaKgXqK8C1a5Rj34tr1hjHjLyU2wd1NgoN3yTsDuK4tYL6WDLHYnuDsRttNaDknVMVCj6HNgQwCWJ",
  "key25": "2w4WnxvXV6ocQ4xAWZkq3hhWrJnXb5FiXm9UkTQ9wREFMBG9VzHToNDWWqVt5NbpM8Y9hAAbjHuMCseKAvrXxaaE",
  "key26": "62a4EuWwRR9aBpTgxEjtqaNji6uf2BBFzn6yB36UtpRXjSLVdhyFhjzxwDKaDbfvD7wqmE8oCaPMpZzWwUMrEG64",
  "key27": "3nGiJWQoumNimZkM2kgnKh6nrxMfUyQ6SpSk4e24Tu2vBaBsRanmwvWY4JGfpoVKTVFNmrE5GgeT6hgzdmGivSK8",
  "key28": "BMvTjPCYHjjJNEQZshKTv6qTxhVxeQ7MMFvjFCktVbnoTRhy3inZBVi6vZA4NRn4PfiSsUPsSWVcHuGpN2k4vGy",
  "key29": "549NsrADkxNbZAcGJyhzRSGwC4oBXdEPgm9UrFih3ceEppg2SrFEMkievGQJHL4c39C9RxQu9FbVLsQ6pTJfn1xm",
  "key30": "V8W7Ta5DmPJUwVHAHVncxnnXJYVHh9gFHwrC2NKYEG2unXtK3x83ZwdxtfbbUdhBWtfxYgNDWxqdqqhWq7M38bm",
  "key31": "2SHwyidJ6UqnbgQjtaJBY3HPNx4zVWaoUN4fH6tMywNfe1MzN2kVu6SB3AkyfVESU7Bj9GwLJJDnaGUgMqvVPkP5",
  "key32": "45bJauT5AGCWqVPL5YUsuR3WhJttnpAZf3pR9QwpAHT4gSjnH5TBoEyG8XLkB6YwVF2PZw8KYtMZHBDuZXBkMRjU",
  "key33": "zSYKfDwKShj81LZGwA5CDk3zKTTNFj5faFsBWps5csAa6u3FkY3xJ7FM19ByQBSd7nGdcWBixdFwopzTRuuwyNQ",
  "key34": "3aRQ1gyEBCt681d7LBg6e2oYFirNFf99s5r5jD8dZdhQjj5ZfDFGvWUWcMuYwhkT7XQiofg91sathRzHUkrfmf9k",
  "key35": "AqGMSytCyUnu2GUPNrmJd5WNBSaBHJ8Wa1JPeMmdQUVzDkvgDrbxCT19pARa46ABsf7oes8usi3sas891RqcS5w",
  "key36": "4ybwgBnnJYrAwZvUeRsrcQuDgXqxGGXKsSD4ZiAhK4gc5eVnUDFtTEeDTHcCFRg5sfDxccHKhdNvjHYwNtvHKBiL",
  "key37": "237Vkq337TnNJnXABuekFxHutFujfBbFdPBpD9vwe9WSwBKCEUYgMDmMCwEUg3HioKXUbm6YRh8QN4Ksto2SCFVd",
  "key38": "3Gnusy1DE6uNcDfKaQbsn1gK71T67jiMKGgXAaVQeb4oG8Kgnq72doV87QaS9ncQ3bzRnwWGRdkepKWQPkfmeAdF",
  "key39": "5LvMFz78DNQLb4s4rqfq1zBgfW3HVWVsq81gvuFFUpgD6SZiHSyEL8SHJBd6PjiwJsKBhHq1d2uWSqTauVwFGEt3",
  "key40": "3ZuzWCnqt3D6QqyJMHJazKBiT9AC67kYC7Nzo3t6e99bB4JirU1ytvXpTzoJBA2mnGkcdPTLPpTd8bt5EUh4gS69",
  "key41": "3io2UN5rxjTWRKR2ntg1vnhW9dutN8ywJcsG9UUMHSy9yDWSYsSjeDLbw4XPGkcSDV78LeNgDdrqU1nymWqP1WNb",
  "key42": "4gDYgiFqHTyE8xzH3kXgKNJcyo9DvqPYBfVniPMj5PwKzBLRUnRd2XUCve4j3p4hg4zV8ADZJLq5atcJoKBVAWm1",
  "key43": "4sa33BCBrs7JrrdyqFHt6aFexX4TmcTT6yPU5K8xvVhNp3yvKTE3X4RVpXTn3PWpQCYuRaTrsviaRrqt9mD3wmRz"
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
