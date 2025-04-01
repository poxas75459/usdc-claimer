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
    "46YUWBbkAY94R2WRSJh8gxfAB19yQNgx3x1ZcXnzu7QHkGX44CscwD1sEe6FbkmmKYrgr3UZKncm5bCgrnn5XFpx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTSnTzTX4Hr35Rxp9z49nPTfnkk5Yqbf8kmrkCukhonroj1GV6XJkXR8UkjLeLXyWvXwy4NLVJgYed2Szf5YnDh",
  "key1": "4GqZUPx3MUrmqvdobmXgeYamhvL7BwEVSTh9cJBz8NcpCqqMAGKMfQhGUmBNTzgDpQ5H5YgitHNmFDYgiVeDy3gR",
  "key2": "zk8e39gNJzQuSaY7acdohwQyeHeajGgUV1kt7XfDdGGLS4NXBkp8jhVk7h8t1VE2B991VSSPdbhsU1hAc2iEUNJ",
  "key3": "3ChGCjBNtqFtdDFSVKpriGdT5aKpSYXW2iUhKZYxwX5pajRR3MpJbe8vYXRjG77HvMKQxmgcmNcqXm4gBZzRvuXi",
  "key4": "XR8G17r2Bh6MBKMdBYA9ekC1ShpGY46XjraXYbVTuCRBrnXVqtf2ZTwoHHJfFygmsjGWW38zK3adzQrdDD9sz7i",
  "key5": "5UrNyzGmVLzusnLJWrEvjMvMQ713y6AFJsBYJpC816cudDNEt7wvGD3rHbZLwiJa2c9Gi9AhmJoj1E3QdiYbm7GT",
  "key6": "4evKAgqg6MLR2d4WX7rNmHFM8gVY2RaYAGvWvVXiaXu5cuExetvpRHJqQcMTReNqF8neyNZvACTME7aaLVhQdvf8",
  "key7": "58PFr7hRcECvtJQY1hp62zhzvjknuwmx1P3VMeDtBUZbpxv7UKEzA7dBNxxTHuC6Qvfxf7VEvFhqPw8QuJqgrp3n",
  "key8": "4SuTd7Mt4bArXcZsemnN5iByU6XTjAoMgzsJsMutho6UCERtLx4RykcdXNxavU5MikPhbEQGKfmqWbpWWY2BGfdN",
  "key9": "tN6Q2Ls1HvSVVfCUyDE92j3TS5eBEmMFKcHoWVpYenqfZ3gWTB3kbsTPwSz5W2g3eKNssn8svKU9uzkZH4mJc5p",
  "key10": "2pjshtjihT8aMme5DfP2Skas9VCsMBPG3FHuP3Fe5YYNrVee1PAyhQ8S8YwD8TJWiVZ5pMgkJRNZyasj9ivCg5xj",
  "key11": "Uh5gxmhMvyfC7JGsDzDWFugAgKWACvWXrXckXaJkPSdZProstc7o67WJVBK7wTEcnW6vbrJLmfhxk3u5P2bJ3Cm",
  "key12": "3HTLDBDWFW5vATLiQqRrQrBwDoNjnDyTPoeWJGRAd4nJrGZ9AH3qiAMiVZLLTuEWgGFtXM3TMWPuYKW1kDwMvuXv",
  "key13": "2KQTNy332qGBV965rY6QuMd6dyWTs9mGAKa63oJ6jwQpYTCQPKDR543kCfasLwNiowQTXAgNJSMP9v4g65cvrhKm",
  "key14": "SRid3QE4oqQz1KZKU5C1pJS9rLEpzKijm6A9ju9N5z3Dm1idQ7mkCRufkBGxeNbnTVvguRwVwj6jSJx1AHsbsKd",
  "key15": "5Yf8aaj8XTnaU3VyRtrUf4tXvsN8Y7KDu7jT4oeYS44dnrPtfy4SW6WJZtWbpJjBtkyHoFPFPKbsyfip3EZHz9Ld",
  "key16": "aTcgvKWSYhEpgtjaiPAiEgStFwdHGH36mP28U8YrQaLZtujr3GmVV3e1uAnquBQsFXm53fAYoMN1FV7NDGEXJkc",
  "key17": "3JEZK6eNkYVzzxuGkPnB71Fp2P1tBvBtVxgZUyeHGPLCuEaxWt9jZd9WMJkMMw5xRsszVVPEmW7SYGwBuPWBwcZB",
  "key18": "5g95vZLmfysh15rELMMQSWz2yPUvEy3XRhFoSEoDZeKg2seF6Q8Rh3x24Cid5agnHTdP4HYuLJw38keCcpTFn7Ux",
  "key19": "3opYbetKtedJT6e1dvduLbdvrbhwQV2ZwHfUn4K4AwGtZjVXNS4HQFweM3DY5GU4Ty6uUdpxLHTmXSTGeCRDPGn4",
  "key20": "sntn16di2WcSZMRrUijhMobw6Cr6NC7GAG9CHUF2k7xUF5GvsXQHvWViNF2kjBSEphjt1GpWPDjx3YG2PMV7hrb",
  "key21": "4HipgUVXLMVUb6EqHs6dQ4v1JDGiSEC2VYTUXZvJRWTHbu7XkVekVVV5uW2kquMhUJVFTmtaUvCRaA1XSHZhS6MN",
  "key22": "61RxjqgHbrU75FpptHGk2pwDnPPVsT5maFTVnPhFQdKi2kYbxNWBbo8zLVsYV1THkFtWHQb5Uar1pg1hwVJjguog",
  "key23": "4w3aS8pWquW34cmg6d1WNu7de4UBWiaSncfS7NdziT88GrW4JwYvDyo97oXca9dupkxD8aQrqRXPw328gAijSgBh",
  "key24": "4DLZjTbeBMYZs2ExkYs85HBD1JpN77Ze1fgXqYFVDeteqpgHKWjfmi9iwznVY6uh3XumHj3LcT1s4hvaUL2KbRk5",
  "key25": "3frJq5ay5GPqLXjRELhU7yAtqBwLqU34rabGG7JV4Vm9bPW7PRn1VcbJezwLYmTLZaK1b6gYWTxr1syvpizkgJ7h",
  "key26": "5W1ivCc5qGsw8kbhB4AYwV1AbsYu5MbgrM9oxpyQTkVDpZoa9R1n1ocz1YB4L2yEdYMRKgU2pBbiHDaD2ayh23n8",
  "key27": "5VxbDjpoyL1H4eaESKSTJd5x2ycWRif4wPjQTf1LUJQ5hvdVA1V4F9ooEbeWWzQQ4KFENczTCfQ8F1JBYicpYbST",
  "key28": "5aLwGWNhZajjcuhJ8pfHeRyJP6m6on5MRgiuvkDk4ghZVtdmeVp9i58esUokiBypZ3odifeAA11FZbX1WWbZEprw",
  "key29": "6674PJAata9cXtq7tGFWcf4BQqewSNJtwQqJJN8kE2dQk2bBoq8N31ahWCkq7N6Tg7VdpAHZdWv8uMkUXe9obfur",
  "key30": "5aHeVh4Tb9r6CNWmV8hdDTyc7NzfveZSvqcRsQKooiEMXG14uZJRAM9QAcUpH7jK8d8gTXbJhDgxRPpm13Va1piK",
  "key31": "2CuMt8irSeUrqP1o4GzqWBTknmEfjyM7zZBiBSKKn2QUvDEK5MYDfinW4RNgYJWXANNxUGDQGi6MdJNNYzMmfKQm",
  "key32": "5XXy54i1j4nqwrsPi7aDsPnQid73e7za6yeu1RnRKZKs1icupgfeACvk5wSoWgERhbHLU1H4i3xhq1oXDLEPVMjK",
  "key33": "gQN7WNMVYfNs6dm3TCSjJfwMMKJw38K8et4ENFaCaDCcTcz52akdsdnv7EMibRYb4ksXd8qoSM6Kti594SCRUNJ",
  "key34": "5p8AFFD9WcfR5z1N68EZbm7c1MjM2omGtgLLkraYPzAggUteXLhTnp3pqvNiR9HnJU1ZoHzCreJn33qTDoh3cWkX",
  "key35": "CeRGgDwAb5n3Q2hCUwqjpeFQjLCWnfbTYWxioCGq9ANG6UX3yS4TNJ54GzFGbvjmhjvsJw4NRkkxzULkryiCs27",
  "key36": "5SKr8xntkP6EKHoqwiBeFaAhfRWDbV3qNMw7UU7SbdY9sxPYbqNs3uZyg1bHHx4hzznWw6YRyipVKZRwjGAD8FoH",
  "key37": "5tfMasimt9VWfu2VDT9s5t3xRXF8FL9k44BFjVYUpBQCUFTQ3JzppBdP2eEX2CFGrPwM34ne18ozt7DvL22Xaged",
  "key38": "2zrHrvjNnmGWvHKA1D6rgavY5YJCUPYx6mRPQvSqzpsyDFgscXfwV5GvthXxFgoRPPb24hFa4vfkcfPjf3ws4MtG",
  "key39": "4vmFKjoG23yzjzwQUKM21Quz8n51ZZ2MxYYPpZ8NXNWjtdEeg6HEVnEnyfHjtauo7YzGPay8fRnHkZaukCTTcWif",
  "key40": "3Us86pWcwnxVFNLw6aN1h9Viv61LYbXmJuoyim1cdX65j5LXM3wjm97Pz5uLHCER6xVWBVhV781ExAoJ3dYvCFE4",
  "key41": "5NzPMiCppwofU3rvV3isBRD2gCwsm4k8eFWtLWoiR4yNpLwXw6XVTXo9VCU9rbg8KuN39meLRFBN8kcMk8SnLWxn",
  "key42": "5ASHR8WLjAJuaEuJXbQupB9fHdTJKUpJrQaprJ56WpAxTJU5zyjVMJ3AF3nczci5UF4mP33Z9B2ijnv9XLuwXVy7",
  "key43": "2SewEFVtDJJ6E8jrqgyoUg6V4EjCMNQMF64riiHiV7zn4XXmGmFHQtk5Vzhf1R7hYmPcap3K7VLgSff5R3CiPbnR",
  "key44": "ukskSuqRbZk3UBqMhTQxLZ7vG7FhawNkwaypMNR29LdSL7sixBBUxzuQeQthHRUo7SGc9Ds3hwZrHn1SpMtDQHX"
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
