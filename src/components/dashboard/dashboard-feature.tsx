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
    "RcS7t3L2Htc7otNZcN5C63T7UJKvB2dXGtDP5ERZmXc6ZHpsWgAswfes2rYTzEaZrS8YzMy7uXRq2aUzER1txhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bAy4qWNiTBsgwRN7JtAQZnXbqmUbje3vW2VVkyGLWkRNuJwME9ofAqrdSQUWKHH113mgcEZydSjqbMd3FyVagip",
  "key1": "5UG7nZrcKM8Uf8WHbmc6tty2XSYbM9DCBwYFdFY1c1W2khV6NDtGSFEwGKQqK1VswyUSc5vF1k82YL8kGuVhuLHA",
  "key2": "57sTBWdSzmG2h9KKMDCtcxY5qPmkR37ganeCCNjLyxCyTZ9hR1WTMprmsFRToc2RoKkfzzoRNVarV7gyLdG97tso",
  "key3": "66HQCLTbY1bH85BzxZUntySZmwCTEz11TAYnbA58ZkiszKJV9YEfT5zK7XfkV6z4537RcggMQCwugThc1V5bHgb8",
  "key4": "5uMJX827Cp7ZnvxVgXdZ2B6W89nDxqQFTAwPrHzCepkLPh1yvSU5XmKXHhV7T2R2z5obfThC1mrfgb1jALdrQbGw",
  "key5": "5mQ4CKSbaKhmyQHzJnQERVNYFxMc511VaHvnsjzEZqKbjQq8kHYon3c8mHptD833UjxSa3o7Rra4RsqdGoMc5y6D",
  "key6": "CejfPCkvdyhg2cLoKCPyd4eHBdtMxh7kQLzuT5prcLfeuhxQWkxGkAhFjNX4WqFWgvtP4Et2mppw4Kx1peAzFL5",
  "key7": "3WVGThqdGaX6Cc3ZZBdVXmQ5pGxTkukC1Kb1iN4enkNohe4XVur35Fngij7MfqyyQ3gxSBYZj91NqhbDEPhng9so",
  "key8": "2euwJgGTX3qDJ9qdn7n9F3Cm17PuSSEbsbZ849f8nahwvcZ1CigUaQVrDfZoif4exS21cqMz7iVxkDbN6oCshSu1",
  "key9": "27p1QMGHwWjEzxF9Nj5u2yKL2zaNFjqYz9RJbLKG7tKW2LAnqQUrkBi8TsHv8s1KysVrR5DnfuHRpA3EiYHfon6E",
  "key10": "4qkkk59YpNukm8iuu1RTx4vLxnE2AjrLM6vmqKWSH6eKbFmrB4aZ6S7tLoLnNc761hA2rKpoLdsRRfbN6MQpfciK",
  "key11": "5Xrteef1nCmnhYrbCR8WuJ7GeUQZvNYmhuR84GAahDdkci7XPuHuzf3zGdMjMH77qhzQtvnrEwFrZpniYdjJNTYB",
  "key12": "2TcumsipYSXqNgEjiAwD8fCWWnAc26odcaDZ5o4dX2xSsnd8fr4peTb23fjA82xu3JjP1rhfQYnsANThYQTmy1X8",
  "key13": "41gf72YvMvMBSP33SGw57CYWqKHqL5HQJaYgtH2jRq9diEK9iYrupgjvKBfWwGQHUhV3MbW53kJupPEJTzn265Lg",
  "key14": "13ATsdZ4oCkYBBm9MBYsLbLBuq8Nceo3arqT6v9RYX7mdpCS5v28gh7BcqDMu8eNenEy4CYRSXbM3T5dxJp6xLS",
  "key15": "3EavMgBzUfJdHJ2vW4qMbwMaAcvttutbvrMFsG5UpTZ6rfckH5Y3Ebb6CTFyjWcfA8WuTkHNSHnsSaLZsCtjLML1",
  "key16": "3bWAq8i24aQraGkufbDDhzumsd1E2JF6EGs1gJMqXW3rmMjtfy4vVrQ7t6fZLfjp9WhevDwWmP3hAzgoqvWZtRmj",
  "key17": "4mE8dnx3Jy4Nbqs18UdTKVUgjUPfVQfifo9fJAsTsxyBDQpqpVpJafj91Y7zknqDaX9ta1FQJUdfZr98Zs2wEJJm",
  "key18": "5Q3mN5ELNZehA4CKWuBdnQdJs7NZzS1wAc3of82xjPfm9boHxUtejUnih1cX1Cgk36GtAkbZPNEhuQiD1etphZMJ",
  "key19": "CbVoKhq55auzuPUmVKD476R8ba43tKieCNWLUseZhpHU6e63gtR5xwVUtePdCeBBCocg4b5a5UCXc2c6j9jx5WH",
  "key20": "WWvd57aZMBFMUwNB2jy5zN2CivymjL33Z2kvA8Pre2yHhuifAU4jRutPLkyeCpG73ruUDHREcY6zDSbxqfeZbC6",
  "key21": "p9WgFxNGss22LdpeqDy7UeaFNFJjBTq3xEvp28JNDhnzqUfWhwCfswCkvMPyCYNaRHs6gCuqfpHtZ5URY4fEfTe",
  "key22": "4v7Dn9zQwfLzn825LcZPpKkenB47eiENvKrN2W5djG5FT5D1r4PCtBqzHdgG99mUDmkWZdJ5g2ec7Ev5K3N7diW6",
  "key23": "4Zms9vKyYxss6hdvo26xsV2Wc7utfvLQdRZGmEYB7X8TjfSrdf5JMTAr8PFVNGtio4WiRUkubDCGUPhWVgsDLGCi",
  "key24": "XoM6ZZ7Wo2uKX9dA5ysMBUGKkpwoHYz18hEdKs7vF5Ti9LC4hnD9yQZqqt3kfTphuqWMoJhbfm8CoGYKzSBRSwF",
  "key25": "2wB9gCkrftcZXAKFoC1k1zJFXz8W5b9vcUiB873n32hEGAutHWPfu8aMtKVquRWa4auXEAPJZSMVY9RGByhQ3swZ",
  "key26": "4za71FdPbspfVVgmGZQ1pmfxqaa1KCJ5JQuv9DVujjE74urvXGPG2iLFnT26faCberfbpcR4HBn5ehFh7gAM4p8A",
  "key27": "6ftDcSfvNo4L6wEAeGnwgkGydjfRxciUBJQirDg1FXnW9zB1KUsnDJqEbRFaE967PwHM6JpcKqWj96Q4tJa2EWQ",
  "key28": "37xy6S4cKEQGm2i5XJyaJPxWLSFDz41XemeFNEDdKbiw7ySdf6pNksZ9E5uTeauyyxJJAAKaBjNdJWnKeavTAnNg",
  "key29": "38fZBohbwL88s41QMghLUsfdy2Kskp1DypJGpfY9mVQGZHygDPhxFWjPaA1Wi8edZta1BRpeKAJJ4tCVuK5tSnLC",
  "key30": "4MzRjaJFEFAoP5MpZzb2h8GAjTew4FEBnUx4L3MXjV2XxNFfu7cp49cnfqsvaPHU5EA6iNvRnqZx2XkrbRsq3DCT",
  "key31": "2VjhPAQKXFy1n3atpXBgkpr8T3s9Zt4CiropSUoMc53uLGqPs6f7vBsUMBLLzz3VuiUAQ4vTTfp83ork5LFPCQEv",
  "key32": "3Z5TS9DxdnT4gKSfm8SMnyR1rbpPYzcSXoDwoC5hFmvoAySSQatBCnjRN9skNVrmmWGiHeLpoFjm76JJJ4nwQsqb",
  "key33": "2jNeuWXdQubgfy9ViVKANU8G8zeYD4CCZqsmgkPcjWtfkrBSKGsJTEC237y6rj45rRx2zRadfqZDUXk6KqCopXVX",
  "key34": "4RFh4kVoypQqpNdaWT1CX7KGE9EN8vsTKdT8KSMyCfGmf8qPK2HYAxkjcDWPojdG7ndrAXoQEBpwgEk7xgiqqqgY",
  "key35": "CtvmPRdPEwF5uUjFcGnSoif1X5dqmTD9MgZdX4u93jZpFGTMNtgoAnRG7skwZiXnXjXY1mkZAiy34ZHH7R68ueW",
  "key36": "4LeUJLheSV1jk18N6zA9nUYUbf4ZG7Sou6bDbL2yTUmkUfLw935w9hFd46Mr47NoXy3fNhCv2AaaFZLMU1ECziaw",
  "key37": "64sxFJY3KPZtqRLfsUc9jBooD9NR8gNBhdqSbRmjxfUyzvhAJSXFTqW4ioaHDexPGTogJw6GHWtWtPYB8GrVisik",
  "key38": "BFrv9hEQ7FZ5xysCn7Kjov4rpFiB6N24t5xMxKeZGwMunHbTQXcrsywZqDjqp5qHWc6XAB7Vrzh5abxgFNkyThY",
  "key39": "coYa5Qv1mVaCWPXvB5sdHyJ8Dgg1tPK8YmkjhcKFngJzcssAD9VZPE7XuawdmUgSmQaoCFArA884zB9yBKk3WoX",
  "key40": "31KLb8pRqxY9dg6gCVoWjt9uSKLTYYseGj6ZAJt6hSHSkqSHPz4PpW4tzAbFK6b74HX6S84CmCuiSth1kiHb3ZMp",
  "key41": "dWYhdAx3uefZRGkYfSAVSmWTR2h5FRVP73UACifufQyjMUgB7cYwFSse9PwZBsD1kW2KydEoW6PoTSdBNTMoBhH",
  "key42": "3HVSrzjCMwj7zi1c29F575zX1C2wviMLy8ByjWAJr4mgYMoMbXDgyWKRGuUJVLZnCTxgSAmXw23LqViJhRfbuLvC",
  "key43": "5Yc3LxDnF1biKL25zsjWvUYTqH94WkozNn5wQ6WfYKCXSsNimuifGjkgVwBeMnDrQGiijVcLES9unAXXQzcxSMVx",
  "key44": "63DZvVjfkHMFYEttVLTVJfNnQdALnRbwWdd5VEbbcie9H7AJGfD4zzqXdoLmTW4kEAF5yeyyx98yU4aVZDUB3Sba"
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
