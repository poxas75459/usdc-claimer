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
    "2737wUTSb47xJ1fSe7dES5fT6Vk2PfpsQm4CgZdr7QCy4BKVj5VSSy49WnnqcBSBT5M99orj8xQnfr14Gs5DjuJk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yyAjAp46Y6k7HocjpptXLy66TjyKc1S9BW5Sp5epbeWmVTmpteRtt4MYrbYeqZLrqC5ZiE9Sq4C2y6wr2KBLVXV",
  "key1": "5duCCKigCt5oyBWuS9VR8H4q2UJcwJ6pH1tdApTwUH31ZBDaEp4VbhsBCZjQe3a4vCVVLQUrv3ZAXZUJkts2YNqT",
  "key2": "3CcHPAnk8yocrHeDFYpjiFZkWMxVnHWmWZ9QXruks8NmJGdCKbT45DwrNASdBsE277Yghf2uwDrMuPs2LjadLku9",
  "key3": "5B8zotvkLryAnRH1XgeKUo8YToGhkFtWNyo2j9pwhuiZ4hqn4yuwnY4ejhpYErKQx452Ln7obvZEiWSeEqJUmv4b",
  "key4": "4dD2Z6MbUNMrN9R93FVEof9Bq5T265dMm88gHjnc3V422t56QgtcokcDPpdrtH8BMLhRTfzrk8RNgDKkALkcm4pm",
  "key5": "BA2nfu5SpJSGoCdifjr47aBq5BHYBngEEmcm9RMtuJiKuJHt1wUd3r96AmK5hZpV1cGzjbbKbpyiR1TQU7ywcMv",
  "key6": "ertfVVtjGnknTVHn5QPhUCQGJKYE1CsFkDM5zftvZdMncsgfbY4FQywEc7khuzG3fPVmYSiE2S52HohePbPVkup",
  "key7": "2iiqnTAgWbaYqHWFjetS9SkfUaF6Nep53dAx7qaJA442VKvBjHZC5hr7sC8P5quut1SynkacTAjLzswsDFoJNa8n",
  "key8": "HfRV3MCgHRoYRi2efuCgWhPKqcUE7nGYsXcDuf9KWHvSkjvtf4EuDHVUSUb1YVDwukiQcxSUttmGiM9bEk6HCCc",
  "key9": "EaEhvtXKHncmmyGMa3844PwhBAJ7Ry51kkhLZcm1KN4CnEwe6kszD2SgqZ6FFSaSBoDEZVV2WgYf8dUyDzdeVne",
  "key10": "46PWM69EbZvjNH1CPsKP5MQwsfJvDYYfgCghuQ4VDpncRBHFcgUwHU1qhmRfwN6XpTVnSni8kyM5KLM8Png2x8FF",
  "key11": "5EeshWJPNbgc8GgMjhdmMYHmjWb1JCLRJraixyPHyVkPBqxJzXGHhEKmQ51NMia11ScyFSQKyTR4ZCZtzet2QftT",
  "key12": "iSFgZ8hqbYFgeBsfw4QD6KjLctC9XmCkjTiNaEyA6j9TovfxntzksT7cgiFh2fUgbBmJYoFXK5mp9vj4gYj3Y6v",
  "key13": "4UGjJrpZVjqZLPepAmn9dnNALwzwcRjnPbojFu3srHv3gL3UZXgwDm5txCf9xh4d3bNezsEz8qeXHR1WWrGdrG5D",
  "key14": "3hVB1ZX7hee6eWiyhgwxypMiqQEad5VUpNpy8LXUCCXXEuZVDuxsYg6VXwNFBNYCt6mfaWKDQkpLfDvPhAzF1CUX",
  "key15": "fjK8tWawbuMc4P8JAJPznyXr1qoabokXQkEGUXdJ8Qebx6jP6tnrNoqk4RQcsN2qceJXTWY9aYazCXu8nr8FJkB",
  "key16": "FcDvUWDsmGY4i6n963tu4BWB8W6r95gKRPo97rpN4G3rS25zjqxuo5mKZkmn8PHGCRJh9TM9kkmvTUGN9J3iP6o",
  "key17": "3ErBYu5Hsre8dhYkQ1WL78jJvT8xGqz3E1RCynYAH9UuWUvJPTeouRjbSNfXGUpYWYz4JiJCzYBwrVKSRKjuPCnR",
  "key18": "jnhzvmTkXjLsvewRqzBMvpa1GteiHBLHN9R9ewjy96XqDdpQr5hAEat1e3SuNNu16APxxaaVjiSicE5MH92KmJh",
  "key19": "2KvMaCMeFBcr67HmzSuGMHyzigAruoed3tF8q6e1q3BLC4x9suHVhL3PeQ2CLUHbn4iYWLzGrPKRMQAocnkJthED",
  "key20": "2U9HDckFNyREpi1JSTyiR5maYeUSDN1p6mvDMCHvLPBpzKd3wfpdYQ8KtWv5cgRUgRC7hYD1iqZDpyruXoPe3jSn",
  "key21": "66UeNMsRP5fDuqc51feDsEBKRMeWw5jqSgMJYAoGDu24FczQyJbtT3Gn7KgSHSudEPsjce6z2Nci8RjGPY5oUHFD",
  "key22": "5kLr7DVR2coFxmXx5vadQT81AKVirvPcvNyFdMA9UeWarewvFhpFj1hMNcGyaJ48dcwLFE4doWRyWH6fupabDzD6",
  "key23": "37F865DenSvo2U3s9uH8JF6gxx1TAZ6ftUB4oAfc2doLodNdxnYsaQAwMSdMq7Jhtuw83t4uNucu1RWrzegqhwYt",
  "key24": "2pvxr1AMrzZnaz3J2NZZz6UhUvPssHvYEXza5phJ3cDuezavZ6VmWTNz9m27Mpk8zm8raM9BwxpeM5wTQdxpnyMD",
  "key25": "3YoSGk2xMdrrqsMsqAzk5WobvyZYCBihZKVNUCo6ck6nknKUspsvoLDf4KQK4PHkDhasWzYpeAnp9xJzXCnZbqK9",
  "key26": "2sZkJd3PuqFtVCXYTnQ5VJz7KWaKQvQJUNBr2xkA1J5mYDa9oYt8b6p4o9RXKSPkHnNHzsTnzaxWavUwztqxVHQ2",
  "key27": "4djNQX3Q3hFLundqLhMThMeUsMrCH8kzMX4Np9NzDsgCKJUvp1evSQ8xutSJGoGVRbwAwQcSh99sAqynUwibM2pi",
  "key28": "5J34vFAmNaGWNJ2PyU5v25Yft9wZSYPCSSDwBKAgRayg9UJwTUVyDRHGxZsEobpQbLfNZCZYTvMVWrJjTSPHvJiu",
  "key29": "3ddM7y6dqSE4PaPc4Sya4qjL9z56gLUAAcC1TgyVmDck4uw5qwxzXispGjhHRHAwD2SuESQP5GGG7L6QLMNSZWGg",
  "key30": "37nMvPnsoJL6z9qHGNTHfnZoJiGwKckCWerdXEzjWDHS97KLwyptaAXNfhR4LDDtiCvEVaxdFENm1aceo1Uo6FXo",
  "key31": "4MTb57v2mNHbmM7xniP5ugAnejPiMmniRDXedkfjNhhx14QdyWtbSqyULqiQpGdTj5ZR5JfhKgPxpZ9vV1K1zk8x",
  "key32": "5PbwpcRhyXcj7VagmKs8PHvXsfdPGjrw6QP2fAvk5h89zcAeqGcVkTbGL7NmyC4pjRz8THCS4p7nDHxtkQ98718S",
  "key33": "4N1Dqq2bcu75L1BUrs6sDFuqeJDMMQB5G5UCfYLszisv5YNsdxp4U9QuPPHTjFyhnmB2R1cbegCayyqt86Q3ujUy",
  "key34": "23jCT3hjoa2R6ZmafTKzyn5A7h4ZPPPLLfLvSFU4CzWWZP2n2d7Dazvt3qst7oParj5XvQKXk4Rx5mcKD9HKstWe",
  "key35": "41VhF8dCizF87euS3G6jJUcAAKdYcg2PZoxG19oNct6VGJBcjQuX1UWqK5LZgMmsppVJ11rjH4AraN4WYvXifbPC",
  "key36": "2cNpeY5Y29uNynCQSAES7DP7NWiDha35FTQjJW8HHUWsiDQ6ibPV92x9zLZfQs2q6ShNnTzGmiVHRG3v9gXbe6Yk",
  "key37": "31gAyWvv3UFTQbkrYg9t97JASY66gPJWUJYT6GZCgVom6pE4Z7CrqDQLm3pgt9zUNj6agefimVCNkkj9P2ehLQX3",
  "key38": "MZjicjo9EbQxcRvuS18aBUGLhYR5vxFTQD6PmoqDsUXTdE6RRdmbX38cFiyApK2MJz7eJiCBJ6Cf43f692XjoJf",
  "key39": "4Vr4aa9P6zC3VKFVKFDYRSZiBMpPepvZcyNucZhYeP7aAbNu6X2F5i8J2QuM2QbW7a1WbrnyMvNm9UmFqGybtE9e",
  "key40": "4qECxs7ZhLZAgtjSyS5embmZjkqbmc9V6LSpYmEi9kfraHNNAsBWSuYzFiEoAHNspTrEkmvbP8uPbr7H4iT7maKY",
  "key41": "5ZSZMw3kM8akywotSgxcWW6zksp5EnfwtqnPCD3VgAZMGT6VE93UWyoDAq9ZL1fAV8yfp8iW6rTXej6bmMGyJQRM",
  "key42": "zwkExFbBifSRTwbhsgdQ2RuvUZCKy4kFSo9wpRX9RRCvp7iQhWqPEhpVmggHoMcYREANZNKay2NaxVWNTeUwugo",
  "key43": "2cACTXLD6aRQ2tLeptaohj1XfSjrma51q3W7cvA4cgAYReL5gVAoEHgJC1odggd4igAtbELBHPnxew1DNvBJTxQF",
  "key44": "pqBiEPjsbfmu2mUeRHhEjMF7nxcAz7ftEErDqnLPdSTfq9nj8TnV8Ux4nJP75DcNeRhbZMpLhBHW32MpK3HQK8r",
  "key45": "3MXwfePnqeC8EB2vAtZiN91H5191vfbpWhYvdo6bUWMgL8MDDBseYtd9D7h3jA3Ve9LS3Ddt17zfVvecV1ztF3S6",
  "key46": "4ZYpcUy9HgbY54ZKJwj9KkvfQ4uDZzezDTpmoxkWCmLbZ2xT8sjgx6ALpNmkD7PfUh8Xn383tayrLoN6MQZnjdmt"
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
