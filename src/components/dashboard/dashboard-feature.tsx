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
    "2o4J5VK4qGV5KjKTcsnW7Zqu9XYA3hjR4JVQ1Fz2AjmncjpVgYKLCfFd56sYtReNJdzTJu3Wza2M8gg7i8uXM2TQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fe71MqVdKz2BoakPoRr67fppcepi7zWBXN4UQ7rQMDyWMiG3h9LcfdSJGPYZah3JjKZhgvB4HgrP1h8S4E2oxYt",
  "key1": "2nUGiEQz6xNFG6sjWK3SPohvjRMNXiyxgcAwxCRHHh1wu1acdqMTsTf1usunm5p1LsF9QsCn4EWMYuVH7AZoPqqE",
  "key2": "2pX6zka7nx2o78xmjGRwdE8mPWP1sYfPFSUi2975zfaSrqQrHhmdTscRy6aW8QH9ef4ZU8mhbiTtGdyrGYbTpcxm",
  "key3": "5LfjSgMb747Ta1SEXNi1ftjHnH2gQeF76F7YagFGfpsBF9fYsihR724Wir1AnSbbUihKqqED225HrbmaxJjPboLi",
  "key4": "2rUEisB4iY2kuUYCsmf4hfGYAnitVDrUCvZkThASkJonKZ8J7Kj83z3uFd8rPiGjMgZbB5rWeYYyjfpcjPczMzpF",
  "key5": "4obRjrsGJm1bPA5HxGxBDhkFNFiPi5PKeQLyaF4yG2Fcg2LV6V2gL5YeGtxgvRjiqsMqr61TWgYpBfAVtDX2ff6J",
  "key6": "34XVR1R2LhKG84PtgcTRciMFimRUQbH3EgkmBcgXySkDjTwqrpo25ZGFGXiycv7S2DrCHoHzMBXQZyYhnEgyq8yw",
  "key7": "4mzsGBDBpTuUc65AZzSAFU6zetCQjfrN5b69RcJnzVFYZzRmjMjiQWz41GtgTjvGxC5ArBMesxUBqL2W1v7KXjdL",
  "key8": "38tpPU3tLm2fwtupn9JjCb1QbyYGJnWFZj3djogaWXgjtn7XTAu62RRWwzSG7C5FYbaWG7PNde74Uz6FfBswKCtK",
  "key9": "5xHMcYsPdzVeYhabFCe2LcsRn71sgD8fe7YvYGha2QabnW8Z7ZupbjokEDw8K9erPvQjzmMQM5oiVR4pRbJhYJwL",
  "key10": "32wFRtu4eE8FSpkBVHkXdo5wLwqxfNCJGYAfzcAdPpeq2VqEeukGpvgKNcAFieezAVmiCZYMXuxF3aeW6yAjMJVL",
  "key11": "26fcwFhubrL7axFX1EPnDA2Jc5SJFzHoJPgkvjewvxoQS5myyUi4MgcmZHryyQw83WJkaPjFidRChNuPb7goRWVK",
  "key12": "3L2VHrHRfGiMfkraUSZEq9byeqJSNNLrzdmKsUSKuHe6RkRzje3qKH93qK5B2f2Q7QXyPxpZJBk7ZaF4QLKfbej1",
  "key13": "5pgJf6rkuzUZBGXHZSunP4R5uaeoioNXwnSXz3bLk9L2Z7vgUPe3yP5A45sNEnjiZir46YrXUZenpX37aafwwVco",
  "key14": "3t2wE9xiuxuA28hfcmiXzEUcDr3yhDXUAgVjpixGQfCrV6R1ZnExezHnCMXZ7BaGWEmk3X6RVQJDMNA9oLq22jg2",
  "key15": "3P88a6HjE3nH69qLJqBoEEvb9ZECXZVVjsQFymEWNuYD1Dk1LujDx57MxcDWA3ZdsZ1pBBiVW8uuJLsczcG5WLHy",
  "key16": "2Z7R7xSHp72JzYWYHPUzb1Psc7GvSBFvRd6yqKSfnG15DnuBsNycyE4ZsC1sEbQcPivRm2Unt7eA1zJWcQtd8FU2",
  "key17": "63z2WDhssWqM1JzdZd4KEFfRf1t3WwNnAcjcEcFFiEQj5gXnnnZN3RTPsjyQxUQHh9dztGnFW96s6qmA3aL3SfKf",
  "key18": "4YbsKU1X2S8DScaMkKZ51pgX5P2r9Pbcq2tq4Q8fQ2B9sPLPBFAuk4xzcTB6A9vNtpBszbprhosiJug4hNJUeysb",
  "key19": "3F2hqFvjvd1PK6LxXVzfATuFx82eWHgNUvDkv3nNUxNvyChCYipc4KRHbGbLtXd2W5vE5jn8dUYPee9N15UkoWi8",
  "key20": "47pLMXdgpzM67UsWUcuuAtvHystqLsZke4hsjXSg72ZL93e7ahETFtESHjb7FgQKW423fNhesX6q6ngCFkEcKat5",
  "key21": "5dYN5HjDz5NqxjGNkb9U5oN8jj1LPN3vAhP9wLUo6yyRBVzFX6KKxUHFTc3NPhx2XXcuf6xWw7GMH4JF6L4LdFWg",
  "key22": "5SUwXVTtuM9Kt6JFhdpeB4UGL7kz5DNo9jX1SvbtdGEdobQe7DKV1kDet7aKiHw59sdkW1dDs1u3T4o4FhrC4eGf",
  "key23": "5ji44VBWqVZ81DrhVcLb9XgaDWismSu98XJnggGH3X8fonX27p1EvSNqtKffhpmYi3VHAgNnESXrSkzouzJa7z6P",
  "key24": "36UsGDxfnX3C8fKspMTuKyaHT8nYNfRt9jsMYJKryKYUGcKjUqU6gdyXLFtj7jDhNLRa3dndqbosEcMC7NEjaUWe",
  "key25": "4JzC15yZd5UjKU6Cpr9YP4DJrkbtdZxUhZ6YCweWuagqoa1gHEABSy92wjPzssza3o5s8WiJQUHHanLyK1x6WHve",
  "key26": "2CfFQXEH9zgdYxMmP9rscurm9Ab4E1y29sJ6fJNcxGeiQRCJz5Ew7gCEBuknjrdYJYwpkTXx8mXg4ivW5T5sko5R",
  "key27": "4xgJozxSJtZHEs72LzGu59cBkYikTSwn7EmcG6JkJCGVW4CgLXyVcUj4CfnLLicYFHa17etZxeFunZSMykNYtnjC",
  "key28": "2pQKzZCmGXkQDSct1WUJZkdfN3j5L2EVpxrbwys4BSbdZbSWnD51wiPsRV6CsAzUQbw4Y5pTDcu1QweXi9Sy2vDS",
  "key29": "2atvKr8g1ZFWxXRjTbFTyzjhrEF5WA7ixpLRpqswKxP8jgfr2upg9er2HuUvEPq9GehvVozrejj9gdQLkQBkYJQB",
  "key30": "4g4tnAgd4g6HpZxuuNbELnz1n2pGLEVJ6CwreQoRdvbixhtZaubNyz4bdPShky7watDXzASL4Cxus8JwTRy745CQ",
  "key31": "Hgnw36c9RbCuLx2cAEWstwnBmpJhB5rJSaLbWdwZztjgLNUZCEnBiNpSMzPhRV2zAYkHvpNSf8cakASnSurB36K",
  "key32": "3vLASa3Yr3iUD59tJ31xHkLZYFRuLFx93UGi7rtonxihKiTnPUsv95TPnXvM6BBzAHwL2v5hu56T7rVqV5Gyvwh5",
  "key33": "4QwDzsbUZpwLs2UtpoKB1gjMFkRikzGRmHNoT1LNkqqd6gYrMKUzYGyKPJN3kW7g3bFe5Z4oTqpj6BYJUyR8Do2R",
  "key34": "2dGyPpRPqDs8Scw5QVfdTwiwFbHLFbL18j6vLCQMbkQ84Dk5oskriEAgb1e6PB4gKmRGymporPzFb5iEtuF58MJY",
  "key35": "4W88HPQWu8bjQ7Gryn4Ac8qUoKWjqu1uP856Hdogk8cYSdXvbfWDU5YCtwGkYue5wZRUYMbquuCJ3WTwRhYZpGmt",
  "key36": "3zbMW9SdJgQau7Jdzb6e4ambRPrxLVAeqyT6GpB1aGruopQpjMAQH7a5gopmgene5YKBNYYPmC1pCyAq1RY42Su5",
  "key37": "5B53ayHPWNHhwf9JVbGZrBseQGw8J9fZGRxLSjWhtUtxGZK7o4xbNpEMH1opudsJ7HvRe2ea1wxZPS4JcbyFEDuG",
  "key38": "3GkYwvGciwq6hs96tCXaQ1zajhvT8DasdMoq5zBM9omtvvB1Y2dm6JNzdvTY85oT3rCmfp1rNo1e5cyRe5K7wUNA",
  "key39": "2vZRCUVsFdxWZgpgX3bGpQAhBKjCBioENJwDG2shnoWihL3QWThUfSpc7nepspWjFHsy4PWnck5iqsDo9CFg1n6Q",
  "key40": "5AbVBZ8anPWwHM1qfpYeqJVNai7ESWmxLqPxvMaLx4VQS9F9f5FmknCnDFoES1yuCytW86ahttcs3h11F16Grmam",
  "key41": "5gBFkEGkqSkDATuqjy98FUDRLeFR7pPX1JmUJppj5LukXNA84hKxJNoxzQBLCwVz4wV6szjTzHyyYfkz1WnDHvZM",
  "key42": "473Gx7PNUopK1oXUxKPaSMFfnSAVLbd3KyiDtPv8NtPEknWCAQb6tWhUJvXCFn4XxcNCBWuwTUpkpaxFftSdy9L1"
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
