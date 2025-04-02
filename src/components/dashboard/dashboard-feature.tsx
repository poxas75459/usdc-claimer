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
    "21tg5ns6MdxxTNBVfeZUBCzyUjKMD41Pg3v8keAkeuse1Wd34qJW8XSh9SudTXxbik2ZWpVNZL4hNWDjnJ39vX5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XhfDX3B4qJSdm1rM92K4qAnFXQTYbtCFmqJD2uStsXJetzYJxqBwMnZGfiK1FhYcWxq1YA8S3Y2CsGdaDgwkw47",
  "key1": "4DAdeY5EsCLZ3YXTSwDhNDaVb9Mk7SG1KzBNhJPKq35xPV7VZphpa4cphtsBpUU9kb1uDP2T9U7NV7YEd55VvXqH",
  "key2": "2bLHukkDUAWYLZhSFYeFXRoDQYydhdJrzLNzr1fvW8e8eRhxpNLbEBbgB56LHVWu2dutxKpT7g7CWhFJrHKx1wb2",
  "key3": "XL6wE5GCKuJSQ3wKpxh18xDSNmVWCoz8caR7gKN7pRqQDeJMAQf4BygQAYvPqa7LVdNe5oz3zwBDojeeSfrz51b",
  "key4": "2jMRjmWP4B5AprzBgwRTVoKwuF2QFcwmQu2wfgdob5EU5nr7WRm4aA8bVex9o1zpVXTCurs9epESFgQFa7a62QqM",
  "key5": "5Pg2kcSJ4nALzoZ8WWL6XjwZ2GZkKnsx1vcwBynPtrcoXMo8GbU46YwJCAY6psXD5mqBQspR4XZNmMUBnnpwCuMr",
  "key6": "LzajkPjgx5euf6pvtdG4L1BQhNjqcxtzFV7qfnERfHWj3ffJcjGaMtmm4sAGpoh62ktViRykWBUVrF4oL5jzkCM",
  "key7": "5Eqh31qCroo3pvoi12cyqsvSyw3PzcnpND3VxMJsPv1GsBdmwKTef4qzUghjRAH6YyLzK9yAVh1FkVzGA5DuDFtX",
  "key8": "5XKdLFyJVtrERrRMXVrqLC2yxshQ9suuZcf482SGrfC3FDL9ab82MMZScxgDmXDrxfqVcLbA7mSKHDZ6JbesgoRB",
  "key9": "4h7gQNsreNu7eTKxKZE81g53baN7WurMz5uYUneXvJvZ69LHXbbGSFynUK6BfiDzfFemD8sCj8gUw2Q5arAHBaz8",
  "key10": "4j28kNEXG7vMTc3dfrYSWPm1C8aU8xUy2j38zjQaZiad1AD8pJZB3HDg6BYa5RuVs8ee6QQyqy6ayNbUKySjHYhv",
  "key11": "o2y8fxFhzpCM7hJuvjKTLpRL4Y9e3jsHnHxC7MtbE1wFh95ZjqhauPGPNezRiSJ4S6JFBqyeHWT2fo3Ymctgqf4",
  "key12": "3MnqkqZChdtKoBL6RQfyqpTqgjuFG56VT6U7BxKApDjXRbvwGJo7Mkoj7PghUMSQQbC8XJNknLMWaeJGaYKt6Ekw",
  "key13": "4DSYxD455Du5oR7QaBUuD5nmtzcBBWTieDWEStg6iKHGFZnc2DtVdGtf7Y835cmVgAh6AfyFSFZsLYPdyp9qEuvX",
  "key14": "29dj5PjSzMwLNooSxbDwsBxDjfhB7RMF8yRwcoZhWQjJqbPu4wzmHHGv8aUqGzvHfCRoBZ3XaV7CxtquZWr7iG4R",
  "key15": "3ZHZLxP5XGUSmxQ5snnGnPj9tpwhekbMo5hpxj32imqLSR7pczVtX3NKFW7nBNhRy4en4hBncHF2Go31W97okWVH",
  "key16": "97WVFzCwzjAQaDpf3g4aC4cihb8CbJiiHaf54THnVz9oWtW82HW2S268raPJ69vTUSx4iVMU2e4CMogSykXcwA9",
  "key17": "56crXyKdxNCqamX9fNg6oaMKXJDNJfoJwmvid9c8k6iAWFgDroGUjTLmB6X6G3DJJHYicMKyQSmhdsSYWyQBjtW9",
  "key18": "pbp2V8bL8n6YxqwrTdEUeGs1H837i8jQJNKyYVKkheopYFNebT1XqzkkUnjRY5GbT4WNZom6eFsQMENh38icYPD",
  "key19": "3FHV7RKmx1snLw8XwoGSQH6zugxCjLNYf4au7zicQCVkUMMFSDTyvpePcyf784L9Pam7ez3654qAVzzd7oAx8TUW",
  "key20": "2PbqCoXTNrN9xH6nTPkRC87mUJcmQrXqAgBnyrFRGA53JnENqFmAQLb9EJWbYufBYuKsDXDg5QVvbkkqEkhi7VdZ",
  "key21": "4S6sNiEgustEWjY5rVRaKUczCjTZjfk5XniydHy9VQFBtP43r6L8Nvon5U3grRunsMkFx3PpZS5dxfpXz3LxJBeg",
  "key22": "3HNsf77XfzqcMdtPZBk4DBf3WcfQbpCWq9bCrrQUNDaRKPfx9svQ881NfP9xbjHY2QWGd2WF7kyW4wUHDAd1c9k5",
  "key23": "5d3xk1fVSKDv2B3yFZdsYjXnvatz1JqwahFDeEdaNDirkDPs3bSRyRgpzSsSLdzMYuNrRjFNJR33s2za7UBxMp9e",
  "key24": "4og5GsJ22sSAn33DLrqN4BJSTweCSWBq6wb4eRrCFQ6sXWaMxey9Sv64UqPBffLx82GEjfYw8bxmyzm5nRXjpqT3",
  "key25": "48TitJNUrnyb562i96DxxScLReMvpMkFcP7FaphsWoS9CFiDvK4BzSNQuFyihze7uvo2LoYAJiPJj7ihDpeSYrRm",
  "key26": "2Z1Eq8uoqiah92LNsfkNbKco4cugsekFpeWKdLBD7vYppUBmLudxayrAnnb98Zmdr6gDwomLncSknKcbcBUqcFZb",
  "key27": "3WpX6KnZdhTQtsjLFzaWvxYqXoRtCQ2tbhz1w8auqrT5KTirgemuE3izgoK2AdsZhSG9TXsQ7domQbMvnuzfVCpL",
  "key28": "5rpTyekRUyTF4hH5ziVVVkWzzzfuj6oYQ3fQRBg324vzNTpabWahjFJ8EH87fnpLLV7mKqG8neZcmeEfdjHhcksj",
  "key29": "3gmP1jRcRZfHHTN476ZDABKGLsT5TdJAKkhxCGR6GqyUDiyrFbm42DWzXDAZJkiPp2f6Aq7gPDfKMFsAnjphLSPL",
  "key30": "37jbgW8oczfYoQaS54yVCdRMdGpaP4d6cJT9mataFfDmrkXSrRwfYCXnQR6dapXHNBfKWj5sN6buPwtcMubu7acQ",
  "key31": "5trL2XfsG1pKUNdFRCpF6XZLcJNkaSXFKS9iatU4pH39wW9eGWWrtFPEw2s2ZrXsKcKA2JjZ6i5onodECFjfKV3h",
  "key32": "3RTfoJnaJgE323KvZ9c8bd3AvGM939ZhPFmj241Z5DbBuRjsCmmq5AKFfavcpKKp8JfZWMPf5kUZsKUsMXgmA11X",
  "key33": "2KhnB7NueYsEwjBpoge5AardyVZYs885NHBELzbRgaKE8rCC2rdiTZEfs2XaetwnSDx3xJE8QAsGGBdEwTZeNokn",
  "key34": "4JGdugqkiccQmQcdbMETUsGyidUU6eoA3X5aBRtFJPbtA9DqoWLjsN5KnLdq2Whddmr9D3UW87Wg3AcV2a1MwAJT",
  "key35": "5o6qUHdXtzfukL8b8cQj2LhDgLMTR624Q4yqznuSW9UVXh71s3ndJLbeKUh53xJG1k6yHrNmatvH918LbZKhRQ1p",
  "key36": "5bpGLZrifvZCWyRZe544LbYT9WMTtfCBFVuJh5FrfRTGgLKKBraefJbqMTW6StoxJkpSCYb1TSxpfC5HdarDRJ7Q",
  "key37": "43p6YsppcMzWVisxiDnR9tsacT5CNgn4QxdUgzHkvTTyQpKktiZpQM5ETybWcWS29fPGg7ZhZPGcuCcnAXpNGEzF",
  "key38": "5S13PGZEmd4Shco8mzKdMTKBWKR2pPM1sSiTxNuiVS3rG3f1FsJT48xRgq6BJEXX23b1USFrGUVj1kqUfu9rHFew",
  "key39": "VFqDKWsNJaPfL4iRkJxT31waTVic1CjshXyWKzMJ2EWEpCRTbgJkFxGZM8dX4FqVVRejSk3c75e4nFqTXVtSBSL"
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
