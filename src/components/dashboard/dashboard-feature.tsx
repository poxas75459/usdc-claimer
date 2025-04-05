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
    "33C7W4Wiy2Tj7bL5sXhUJujDdQx24GAYKHCpdiFku7exJMUUnD6e9jvqd9pWVdaP36sH3HnB23dYtH9UJ1ogctWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1MqbXFuAEXrN7oWJNkwjxPQB2nQPFNiKYd2psiRcMpsUivLBnVUatf3QNNSiTNRprWQ7mdUYoyUMDqZWCuujyE",
  "key1": "4hjLpKUivMB4eTVSQKSriPsttNiQwMvb3D7fDWgPV6X14oR3rCAF1cfNssmoxiz5D3WGkjVLeAzqU2p1d77tLvQN",
  "key2": "56BY4AGcQ3K1tpCQSB7droRRDeF4SxGbvUFvuDfq8TzbzeJ7TTy7qyyLJgCy7ZMQ26B4UdT4QGGF9AwgWNgZjpTc",
  "key3": "vkVWTiJRxcZWDzVckNjaBxCL52CJvHxpHuDSLmGMfkpUj2GwLqHyhXMx2ERLQ6pTTB5Xn1PjtFdLrjvQrtukgS5",
  "key4": "Ej4bgYkuK9DvmCtFyi56z9BJWZWUgfk6sbR8qPTyHRsn7iZShhnukivS4xKwvZtAAXLXCrrQtmHxG6GGuPRdYnj",
  "key5": "3iNEf5i1ua5D7AWvnGmU7MGCSk5zL2kNSRxJNRbPa1tB4tKDYiz9nc7GPsSwsBAYQTjn99zdn6MXG3tXp4GkyefW",
  "key6": "2gF3wpiaLEY2HffwhRxKBVAnBTjJAoAi7Bk7J4rMWuN3qR6GJZcgq3Pw9WFu5EzZdBrirFdiaoTUNBhZVB8hJKwr",
  "key7": "2xDg1gjo4vAeKoLHjEZNr52DKG2kXEMGDfC5xFUnRT8Q7kcwJAYycdCTCX9pujLcU6DHGqmFNR5w4c5SkqSHQhc",
  "key8": "2mjtAPse5diSFZpXGqS1GznnixtfQgRBKEGnGmc2Cky6XZTp2fP14rxD54JcdoBwAz4sh35taXfMSZDTRiUY1woW",
  "key9": "4LaJaRd6PYnPPxoBuo7HGzE82aVJ4UGnX9rbfQ1TJhySdabgfwN5ikWVQ7qEDDbjUJoazDZes8tJfFAPuyTcVEX8",
  "key10": "4vmew7JAc4Kh5kB5jWiMvPvzEvkua7yFaqe9xLHCLdsKvJPUiCQVPjyu9d8Rskwhcd4F9DkTPUSNmGuCRL4uUQGN",
  "key11": "2kNm32DoCD11SXwHH8fVMXWpUCkUPakwAX7xx7dCbBB1pDvNbSZz2oMEeQsTtRC3AjZNewStf5cqvkXTSXMdsCKB",
  "key12": "4DRF9SLDjMwyFTKjhcYamFQCXoM6g44SXTbWbwfyNYVEsFfDbySovCgFnVRHSRVvw8MYmt3YeRqAv1yJvEns5S7d",
  "key13": "2oo9f2xqVMprUkWWSm9BxeXG2Z46dzSuS1nV2ovKRkuiXgCnGzJ5wxqkoFrrgkZvH3pXm5BithcTRMiPhnAzE3H5",
  "key14": "8RJMmKm3a625a8ANe7Vp8WeqFSvFooBy36Vig2xT76FqvYz5zJznfXtmasHkxJDjFZwPpWuyLQsrtvZKzJjRrAo",
  "key15": "KiUEFkTRYPARbF9sfng6iyQ8SYcyqqkmHXBwcCBnKudrE4XzhY9U35Nd1PtQ2xQuXLutrt1r2jBqa8aQFWorKEQ",
  "key16": "DpdZ36fWbZXgcSJSweNqK8HTXSQvfdr3nsZZtik5WxAaH2AyHRTFEp1dsdMXxvMYDAdYB9HQvyEJ9nsdjY5SiH6",
  "key17": "QVVrmZeR2rmXF8W4JDC7ABcj1HJvGhGDYs4Fc2CG89EfnjrL2N1PjZStFBdACf7MHzXuGMzBaiyL4Em1HJHTc5R",
  "key18": "3y8wneGoFLRwdLrm9eawDfrWGErgUFXLLhrwD2bsQMj694qc8hCKDA31wDwgzvfan4HyXjpyJRwgWt7DjBc1ognf",
  "key19": "HXF4dFv9LfD5dpP6FTcibvYikGo4mmuqFe4WrYWcZA5ViLbEt6pYHfm19B1rqBeJ45rYXSYQZXDnT8AQ7T5Lror",
  "key20": "5V9junRY7QVbNr9wwnP4EMHHuhcXCz7iUSYY1gTts6NbGZMBsVvUQm9UZRWQBfBmbzLEtxqyjiarkY5FLgSFL6a",
  "key21": "2hmY7FKgKw4LahWk7J9Nqy5BYBbr8t2EXDag9wTVnFNGR52EPKkKq7ZoCLxGFyhvCBrtARai1zaEhw2UduzHjMo3",
  "key22": "zJjK6XnjC2nUWu4k3EXSBoRSRkbGtdBQUULNPEyUqnzFyQj3X7goTpHNdPWV29NK3XEwS2KADLtyFrgUfdbKWdh",
  "key23": "64zWCDh3pf9ZkC7D7V5m3SeY7Hm8GHuoLvUwR527xAgaipzShSYi92XYjPMR35fYcPqR5mugpTXEY1wPZcA6vRiE",
  "key24": "55Uyp95Pqt68MKj7j2t2xo7ew5wdreUWXba494t6yC82rXfd92kN93soNuBEFcyTCDeMcLdfbSN6mE3hP1xbJnZz",
  "key25": "3zZ8HScN2cXnf7CKRfYcHKLc6mgvxmc3M2JMNcHaCmUUxdeQwfqEaMVHED6Tka9qusRGaCNADXQP5ancwihMVk6X",
  "key26": "5SSx4vVY6UEGZECShhRhVFWn9sHfveZVWiXXvK4xKp1bRRrcevMnfYLz9Z2AXtaxLKZ1KeD1gEpZrNG8fNoYpHK5",
  "key27": "3QxHFnF1ENeNUCwR9Cx4v4J3eBWtszrqVHJYViSPPyMbWyt6QVk4kHieo82KTSoLZEYiPjuszZRLfxrMmQptWwtW",
  "key28": "4aYPVUCoFUEzhfhhTk7UXZTvRQptXEkS369gAncKorTSyfGJGrHEdojaMmWwC7uuUKCKSk1BEXvAbWvQfxUTVC4p",
  "key29": "5zWtnV4kSsNqzu5ir5FR69WTSytU2mzK5zv6YMfx5VbWT6L8oYgt4KsKXQ1nG764sxG9M1Wx15MoRDvY3AL66HLT",
  "key30": "FuZUWAFeFvfHmUp5Hyt3n7S1P6hABmZSN5HzQ63st4CpRU94GpGJB81hFVhFJy1CMJ2zKTYteknvJ52Sp7H6DXu",
  "key31": "MwnMXzuiAV4zhVWNV1A4yuDjYyPefKddLw6Hv4tYxHDGVd5vFJjFFXzxWf2T6PcjHcoFUrdiYmpGWVhCSMi4FaD",
  "key32": "678Zwgudde1tQV24Pn2gEbC2JFvLexzV3CJndKxy6FJSsq5sq7r4fVs7oXDFyxcKEV6xSvoXupx3z9dtGwePWFSY",
  "key33": "4Li4VU99op4qr2yessBNpVcbSgwbYXb3uB2iHrSzoGrJ5XgPP8x1dotvjKv8sH884VTJNAiZNMncBhoZTf3JpM5h",
  "key34": "iUoAk1MCxqu76RVgoh6k4yQKFJ4qmkBmfg9BZVkfiwfrkiZx8c5FdT3HW4ycRE1FaupniHbAmH2kJEGWVEMs7uD",
  "key35": "3GuEa5KV89mphVrW3zfbRyoYREG3F4ADs9A5zowuvE32wgaBMBn7KcL2QU5PaffYqms4AJPS4Qc9V5yrBddZqJRP",
  "key36": "2gEHdzmipMYseHZqCrUQMqZTEQqtS35DmbRbPEYLquYb1iw8WRkYAjkr4o4miA5SX4MGxpq1dvHgVR29XpowpNMs",
  "key37": "5my1yTPDhjFQqvpYuGEUHUDhG1uTj5ECovLYbg1W3vctcgqZhADov5db2vYPzpHYzZ5YaVZU3ZWGriaodkwzZmwX"
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
