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
    "4UNAheM8CcyiP4NzNpBUgCkfzutrdKxRezFY643qDTQZM3HKn87uv7s5HEYnEX7XLbGgcbJMGPoPTqPqLj4sfSGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dP8QoLQxkwpwzdz4AKqp2mEvm8x3srr7AMiXu7GWatYLCtgftNX9rKtfebUB2Ktk1yLpp4DPTqDPC8LrAgL2Xtp",
  "key1": "5KzfBwEcKCtYsr2F7ZaVFvG7Q66c7XSsXnEdHa58GQh6CyNRpitNCanPAJQScojzBvfMJSVCREdfeiJ72MWMbRfn",
  "key2": "6oGxXyEUMJXsemuoAec2cox3GDzX7WnzP1F1PXcLAWhriaWphrfVvNXHg9sReTiL8qJbvrRGJEmxq2jkZciv4TF",
  "key3": "4sgRYpnXzdTfysuzQmgXCyLyBrH1PWcUVeUtvrq5m52r9yAG7QvKSCrnj8Ua5oXWCfs43AaFnfPjuMBGg1PiyC9z",
  "key4": "44rC17VbJwgaDekb9ntcxNt8LDmD3gb7tkBXF8pWRVPKMfJUkw2jRgbw4qPfQEFFBDX2TGkyWbYhwbnLVkVPQfi",
  "key5": "5SNhkaa1HsYvqh7QKSnQXxyHdFz5RX3MstwJYHkLPAVTd1oYNowqGc4GhYQNi1HLf2PRqrhqGMCwvJWDUCMoVPz9",
  "key6": "55Q6HfdcUYLF1S25Ajzjt4rELMkmyaSicoLPc8dGsyU5LcNbupSD8Ud2sUL1GiCYHea883nAuhEpqhsTnd33iieF",
  "key7": "4vSrdZZbTAA8sENjwVrYSqq2K24NUSfvNKPibDUwbr4zW4QtRhuD63n6DZAX8aGz2cpNet6Qh5BhrHQmiHbkTESf",
  "key8": "2JxnpF4hEvuSujdmTMiXj1o5p9fnBxbm1TRRgukgHjnKdi6FjQuYRJcLuwF9uhiAjzVogLnkBeLisg1kWJ8T1e5V",
  "key9": "WmH3n9eg5Z5JXK6XHGoWHfCrnjPcK7QfKPJu1PzUm96XvJmQobTjDrtJWPXXGmCyEX7Vd8NJQcVKrAik2XmEpRX",
  "key10": "4G9xfnTmDPEzeWJwPX5tNogUxkhduaNPuRPCVTZjKDX5AvWugoS2vZyALemWW3XP7oVKZmTacA3aUXwiTN1x7Cd6",
  "key11": "2M3NLDPj4ALnWSVqV7Fd8pH1q6dWvSoe3inc13F6TXQYF43zYSQEuL2n1s7Jh4jCvv7fct8N45ckWyCniSSqAF63",
  "key12": "37cp7coBBRivwV62TrPgeQUQqvsFs8G1jhBtvGNmJDRKuPFwDhbF8fKM8zQ76Akza9pZ8D9Yopwnk7YvAcbuBZcy",
  "key13": "2rAxbL7nHycSfM3VmrVkwsgVLQCEdTtexZxY1PdMhJFHBEUeGNzUTMrmv7MUpb84jtCnqocTWGQhmDuRmXGhf6mp",
  "key14": "5CLQhoYETvgVKUFuoLx4FS9QtDNb16ewkip1ai9xykyes4tgj2EM2EHd2YceXPV59vwL2hVHBWF7XwkD8wAhFVgW",
  "key15": "4AfrgXQZews3G8SbNzVMVDd9N15tUSPyobZg3foTbr6bpHa4kuo1rNXnavLJMZFzRXi9h7hbaPeEWDR8r3io1ESA",
  "key16": "2wCFVvQsMHpKPNGYmbXGAeUSCs2ftarqZ4KiSkeq4BabkXfAPgR1wsnNhciWPUgq1jpSQFqhDMyZqV8sdX3Ss8e8",
  "key17": "5RrwinZYx3ps6kbDpUrrfYcWcj3DcpEMPBd2jCwCHDbQDxUyXH6GkC2t174iMa9aCXhSpWaqax7zRuFPdhcSYeAc",
  "key18": "3BA1q2uhp5aNs3MVpuBREV4291TByzYGxFDHYJpTEWAQF3Q5KzswgKPM9d3gwnDmr1rychp4gCbrjRQ2EmJiwfoc",
  "key19": "5fbtg8QhGxiwVD4jJ74DPVpTj4mFyb4XxbWiZxD28Tbk1U1nABAgsMTmGVWMdgbxBCVTQ72yG65HgA29dhfcnJfm",
  "key20": "31AyULHBsaH6Gh8eDod4LHtXEfWTuqxu2sUa1JhGKLrkrMj2jviW4m6JftacJj2Q2wWT74vXJjyBxpmWEykLNEFU",
  "key21": "4NPcJrLUzBn1NWAHGMComvzzeFxGoLakxVPaDuNtirsjdUXoN6gayeAi1hfebuoR18sjhCYJipwah58arFhpAJRr",
  "key22": "557P9W6LryQUKLKVoBTek9wMnv4e4XTQRjzsvBbA9DpTt5Xt1Nx88nxuHo4fTAMkVEv41Mg3xqYzRSEsabyr6gQ7",
  "key23": "najs3G2LBcXmaSceeLhXXS5iE2Ex8i4MEfwiDfEULriuB2a6StneCBkK1m4ZbFXYqiYQkDvgVhGDe5wYG6XuAzU",
  "key24": "4buApQGbcPCPKaajSbXhmJnicjda8GbEWRcb5a799cvogoAJJhjmkvLN4qLJJaw3NeZFNCgeofZPrQX8NpWFH4Et",
  "key25": "51thW3VLVsZyhq2zmfaCuuGakVySKCsPUW2H72N7n1J7xWUg1N9JSfk2TVnGLYeGwLy9AUouWzzvDdtEzUZ2pYGk",
  "key26": "3RHT8RhWdDSyWAKFqUpjBBs4FL34KArFEftDzcHQrRt1bgL531bscyoxEr1oK3YNQkYVLMdWRwsMdmTrR7bav78r",
  "key27": "2cQjoo6c9g66N3EV1A5iS6n6Nn3LaXkF5gLLcQvsdN63yGxA4AVtWU7jF9qDGNefE7C9JGkUDc9kPqE3aF8Fz17G",
  "key28": "UnFe95LPvScAsPEz9EDBor4wiL14f6APsWRHNDsDEX5eduoze8x6MG6cpJrJb7SSNV3C8NhptGQKcTNZmFLgAqZ",
  "key29": "3KJFbJ1S5dA6DgueGKJcEPSaMsQQQxErih1gw8cEvQyxbAWT5XWZA1yvwuUkeobu2pep5FcTn3U4jJKpohqT4Hrf",
  "key30": "5xsh4SFRZWjNCzVTtUfegD3SDsmpGZRRVuVwpqHSRbD7WEc5pLnK23rt6nBgVgjrRTmJesf9VivJDQ5KctCZjTTE",
  "key31": "5PQTttejGSsnyArk4WJNLxaXs7kagJdt2aoA7wN6LstsBBMFzHBsnBEPdvVwLcLcFyPcRbZu1sDbcDYamcK8imKm",
  "key32": "4QKT5A21ANiFt15EXp9MxSMRumJbw4xE8hBqA3a6M5iwi9eKxmfM4smMVrdgeNEvv9PGEDwaYrfMZ2XkxEJDCkXj",
  "key33": "3coAi3o9TN2P6SFdXKtHz74nR8mHjkLB7ASjZuVpwUwoo9yDp2pUdmziEUXMPtAhKWAymUj5vsBBVA2EBdjTGB7u",
  "key34": "27gsgPh28PXfH2vfyVRDL2U5ycv8SwersYK2wBuT5mrZJZjWk85qqfyiMytzJpBixNX4g5Ndo53R8uJDT1E499tA",
  "key35": "2QaJDxSzk6UcqJLfnpQ4FnUUwp3t1pfzGt4ZcRemPMmdXiUpdVfbfitCXRvxMCPeWvZQKH7By9ea5DK8eeLQAVgR",
  "key36": "2ut9Qb77LHFz1VJFeyiHALSaLtSLMoW5PbXQZp5DaJHNZuhP9LpFwxZu9fsWd9GcWLQhY6sSKRLUR23pd8nnvkzs",
  "key37": "2U2VtZtYsRfU6iSfkzq7PQvNb9oySUdQqaAs3ZVFA6eCniMAo2YjVSS8xyScNB6DJHufLAKAWmazatSqZEwq2eDa",
  "key38": "2esYK8y8to2AF3Nzs669YKvE6GU8xc1Ss8oUggdX4857gd6pTAgG11NRscRx4HMy2vf9LHyzwH29dUFq54c43LDd"
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
