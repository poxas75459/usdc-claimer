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
    "3qKJCVCuCyKisZnTeVWRMgmDynGqw1Ha76eqXXAzt4VAed1JLbtx6YJDaGnM7hC8RwaHyrumBawvgyogqBRcisvN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mBaYCeJvo4x7c5U2msNXbUr2KCW6om1852qRSftkNgybriuRhHPinkSVw9fbEEZ1s4LhHZrJZXRxae4bbPzYKuX",
  "key1": "2iQ114drmRFYdpLbFu3ao1kHDk3yBvocTFy7nBixjBAEdDLCj6J9HnmkDhLN7m72pipBfaxiT8Z5YGk1HY4MB3h8",
  "key2": "4FwCssEqFSXJU1WBFqgGnThKgyKmMEB7YSia2J2k2VQP9pnJA6ssVj6egJ1t19fcw4qZTKHBvHWhoXY5DkqAFXAY",
  "key3": "4U98fMZkwzW6Zui25aiaFBUxaQvYi4nDwWV8tLYFX1SAG1Sg3qniM1Q9FpTSKGL7AfptBhBH27cRRNrrBL1o4Ua2",
  "key4": "2Qj7s49eaU7JMPvVHoLeKJFMDtEDJKmLp1ksptvA7vRKFZCrMMSEUPMK4Szvsmkc9osStbWGtbRAg4GZYHkqCyGL",
  "key5": "4NfsdRxsgSxWUPazZp2WfRk3Gmr2W9ZnDJG4cQ4aQqoM6VwJNL9MT454ykXZA1YSmN2Meg162nqpyEZjJ1Syb8sF",
  "key6": "31qBFHdW7vWj6MhNzrXyDeq1ta98afUx9Pc4sTdHrkf3DDuYwYiXCcZ95owNhdUEuxsvn7ayLGi5SeaBYfNbW4Jy",
  "key7": "4T6fzfBaNJzpbRbhhARYgTi2uYZwd6DtkEVKAe6q53GzKk9jHbYrT7iwh6H24XafSQA85yZrKsQRwFmATAfZRdnQ",
  "key8": "mmp7FnZQgwVs3DdCrckXmUSa1pXjuj5sHrKMTo21ibqWyjRHfonxb96Xhp2mxzoV1t2gZ2J3iPsXdHeE9dzVwe6",
  "key9": "3Y8rGxbujt7MJ8DbBzMeFWpjBYioyFc47NqFe5sDK5kpNYmEgsmfb5D5Upx5gBBpgzTzMyDHXYPNeLSnFdjuKKoF",
  "key10": "4K5Bvy8NiDxwn9nV3URKYEGBkTwtNpNBezD6fvpkauqQpxzJbo1o8DiGuBLV15MRxXsHJhpdiqBjt98ZPnjzoCKR",
  "key11": "2i88okLvvXZ4yWXAdReuRxc2ynKGGyQAVcEjnGJAwb3sRFfHEhTf3oVhDcsFPCQWScYgrGJDTGFfpYjKseRBxMKN",
  "key12": "2VrgmJXc1V1d5gSKYHaEgbuVF1xKcK1ZcYzwUH5asmJ4EtGw9CnQXtniAmguYhhbDkv3Sq8z7N4F7hV5faQioqLQ",
  "key13": "2dGkHm2rGyVprKwaBrx23GMJL4NcitERzrJdBECFvJhgvXQ1tZv5cxZeTsKjxtSuVriqoT4a32E3foMKexC3tsey",
  "key14": "5cLtj762uhFmWh9fnmzwV8S6MnNdAb95m6tBKzGtVFF8ZWn4cXu5pgkvRucTp8F2HEaW5t4tDWf3Ryr8rEeiY7zx",
  "key15": "35ky3YogRrgxaHHLwmo1kHbEzbaCAKwXSkgsLPD3YX9CZjLsWHMjTPVdBTvYzQt99fSfEWEa3jTjdXVTkF6Z6wni",
  "key16": "2X9B6XYBS3Z84PQhZYF3N7QqyJiDnikLWu2po6FBJsQdrLTb8T4XmbUE9wVmo1m4nsGKGAXLY4X7JqK1KqaVFCpk",
  "key17": "4aaFYzvR5482WyUQ8XFznR7f8wU4JThnmNf6oqdAciy1M1W2e98RTLiYSPBobHe2NBZQJTeNXhwnzRWJwwrdfKsn",
  "key18": "3Do8XoqwtxyrVptovaQio7z3FYxb1t83wzaHHq7pcbj9cLvsi4VicWWMHXRqpHjjY5ArgzCHm9o4hDGgVPLtSJFi",
  "key19": "5CkurgzaZUG7XZaNwAy8H2nhYyiTEg4vgukSfCv6YXvmGJecPz4buNYSqiBEERCG2fjVtZyvXbpo5FkV6RCvFRrp",
  "key20": "2c2NdZ6YrVBEhCovCvRU3L8jKM9TUaZEE5tcj1f83MDXvzDPmJQoG62LrS4mS7bwsWY1mJj9rii2YbmEK85o4Vps",
  "key21": "5Faea49aY2SrcwLks8iDrEfgakaPTwpFzVkyyRxfDEV3Ln8Ft4pRgMHm1zzmAzavoWFNCkuY6B6e9nuAFYW5zdVi",
  "key22": "4V8KkxB1UwpFb3GF8LCRWQCu5rZbb5gbkQSLPi87wgVaBzZEnoiTupbGANxL2tD3hzLmc3PM3xmWiu3jMfSAKJjN",
  "key23": "VhNUqZdNedoDnEgrGXWikfC8eYdVdjFW7jG2j2ek1Ruyis8oa8tyhJxy9oNbm6kWY3SXDPyXWqshJQ1Np3438jU",
  "key24": "22wZEbZa6x1NvvwSvcJWQEhozDEAXqXBtkrZfXPA3ApsETUxGvcpPB7Cm2LTovKg1QKbfawSiaW2qa3TmLBwFEpR",
  "key25": "4oKh6QRT4eUgoePe7gEc3s85LAEBtvnVJUGbk1K43YBK2vgSQ8RRfk4BXMp9q7tJB2bfFUFEsvzzE4VhJtq9iU8Y",
  "key26": "2Jp8ZkxhAjbPvuzxDqucCgoj5Fuin2gGvAKhdixLHxmmgAFdzPJNmrRqBagDqCjiyoezHCoVR8224GLEgZgYc7Vi",
  "key27": "54yMsFkraVhvjc45SsoZNamS7Kre45vyVHgaUUnzb3sfA93qL5P4ndHJ1pzLKJiDhg5WxnKGi7uLbH4uRgbDMBcU",
  "key28": "4FLmBApgpKovJLpKuGBMMrNV1XuLJESB4y85rTzgV986zJGYoQLCo6MUktHCe79i1nT1crnbWXRDyTn6tLMkT9GS",
  "key29": "4wjyrb3jymbpLLaVRvFw1yt6bwGwZQ2YnbhoTR4ErG6SyHSbBUc92dTtn4UrX9sKWtU88xnmES5NA5bKYx1e3pTJ",
  "key30": "32S6Nr5ijoqK2AVZbjqGG2iyjndYpJzjzXftKGpdEiXM6WV8qpjHUZfj9HjLcqohcwRWSdgs8F2GLnonoy7nrx9T",
  "key31": "4jc2hR8UXVfepEdV6RVXimsy5KgFBk9HVE2s4mfku3zoJwMYVg6mysswsis4A4861UMQJGcWc2UxjhPEtNAjjGe9",
  "key32": "4e3hGhzwmjU9bvxh13v55eso2wpK9m1HJ5bByKW7pBk74PcJxSaUnzQrcCB3etFAS7efYM8E79yBV6bP3d7nbqCH",
  "key33": "3pkaNfuLgD1SPgY2Q7DDSwzz14aTrhfqwhsLJhEtfEBYyoCiwTF2xAffwXecPFejtcr59yjDjpQHz5tjSJcuxoda",
  "key34": "nEN4r4WAUZCHzCEo8v3xGQm2wf6KHmkXQNBGHqoXtuttuVPudXSNiorjnM21b5KbgLoteR8Qrsvt2DL5xw1UKUT",
  "key35": "2gsgqg3XJiApem2SnUVQNSqCBBEuw57UYijVFgFk6unENiy7TUxM7kMe6fJXuWWLQTYLKAEox5dmSpdCfSRTuCju",
  "key36": "4B687t3zLkFXYmyaeERvhVZTQPxPoFXpdV6TPaLzE9sohVJUAEsBhyYCjgQR975WMGJvimpNoNpbwTybdZaLnSRo",
  "key37": "3QinSUtDPqYGBKaPvCskhJauwEVG5dCSPXpHwKYvG1JJGnCAVnmZZTTzQvps5H2HMNL3KA6kn9YQe3beCaZ2ZWVH",
  "key38": "4XFgtDkUWMYcqiDKX3SCSUTbtQqxzKdamZUCtkH4U9bVmb2TNVcKu3aif19xLt6idU67CZFWfJcwyUuUpN6h9hWv",
  "key39": "5FRUUYuwBDLS5cQ4Bu8bHgRCNuoQth39zY2CwmT8hhgYz3z29JBizGs8BAPy5TficpzRzSxJsEKNrPLzPQxcSGCN",
  "key40": "mmqZarsEuhbN9FhpaazLiyvdNHJRmf8iVgw6C68tjdX3JNNdgHf9w411AqigzUE6uarRBTiefTNZiCLMo1a956U",
  "key41": "3EMuuAGiEKUkjGdw9VAwoZZ8FGiUnabUSF3a4sokp7VcXzzLn4gW27fuNTyAKjh2oeGxF2dRnUmrszcjn7RAuVbX"
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
