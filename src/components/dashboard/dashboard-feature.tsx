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
    "cAEJkHRePkiMAnNUrAyP1ZqFaBLzuLaJMLCcsb2Y59xtAR4WL5vau943J6tuezvSJuPsLScTfgZwPUwSbEJRZJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bJgD69ZBSyeaJNB5PYGvJRBDZhUzDNHWcy1vQAy1DaDWvk46qL9cVRmQejy3XW6D5sJCe8nEMdoHt3ZyqgEFJTU",
  "key1": "3nGWeub4U4kcMo7Z7TbBubfTd1TdM2gZEqspbKFkTxxBUXMAxTuvLXixcwxPTtvBMwxq1LVwFoW5R53Dy1ype7Ew",
  "key2": "5QRYMmeaGyZvDsWGYQmrXW4475H46gBFuF2HD27EzAG7YdSHe8JygaiNfmJ3tRZUBNLuHn95qR3MT197w2LScbnY",
  "key3": "34Mq9fhLJNN61mh1bkBVXansD1gSSzfd3RJKv1CbDmBtduWDf9YzsG1gBUKJK1y9u8G1JeUXHJHDC8AY4JhhQVzA",
  "key4": "33XW5NSt3GSdyBnwuLQpk4YTuryR9XztLzbVHHWqgDtwirtGubeMaquzLTzkMxmAPPH62qobjcYHAvc4mXZJfH3M",
  "key5": "3ndNRjkCcgUvh2xdkdbEQv1F41YXo6b2CiFaRsEVDDeKYyU8cdiLafN9p8j2JgxqRgyhBgXjVhfQ3dsvFt8mF1CV",
  "key6": "3q3DPUnxn43Ru6m31xP5NYhUepHCrMZ2aPtLhsNDBGvKjHaxqL51kHPKgGKSGroZTBggJcHGXmvqrW8C1vhhnn9R",
  "key7": "5AvjyjULRVjitgv7GihVxGAQ8wYnna5Jg9wW6PaqUrNKGQ8xY8tDJaGwBwnPCKwk7jNfp76uCEgXtnWz7o1T1qDT",
  "key8": "5qfwp339ChtKxLo2dow7yg6sdoB3PTLo3TpXyZBGotZyxJr91DbN8xQBkaZtYXcCbuT4BZTYshjXTEFBoa7NGAPZ",
  "key9": "rJ7EBuA5Vteh1pETC5pC24U5UCiKTnCDZUYB7hjEZ1bakj8k6cBWWUJiBAyPzhzP5zNDa13hh8q9EutKY5o6yeZ",
  "key10": "2fNCdP6LsTTwQXn1WhsJ3Th4AmVAtHdsnjY47YizTNWvMSbv4J6aLURueiD2B3BvUo4mT9UFo8U7viG6Fc5gu6ho",
  "key11": "5LDUWe3KP7hnry6rmVyJSrL3tgRNEyDqKUhqKfjSZpUnpR6euge4q4TiekTwxk8FpiWNaTZ9Uahw8HhFByuYhdwF",
  "key12": "2pnqphMi9uNHahDkt9MhE7NuaryVEvpsh2cVWyeLiry569mRrTSH1dqxUdMJZ7ezJnQy1a2DhTWqCBYVmZa45kPm",
  "key13": "2vqXTvo1mKrGzMxiT6JNtgKXh2Hjd6iR5nRtDzExNhZVdQKFXhvvU9ezJiN89AND4GYu46xodqnfksBhWVSFw7t6",
  "key14": "3vHfkToTZucYmVfvj5s4PPxAYp5ueLTxb7qehocsC6TwvhKWjBhu2R3egN6W49jFnTWpv133BM66wBQudH9GQZrM",
  "key15": "256vnyCzEgt2akSBi7rGVU9xx3yg5tkcmNuXsx6BtG8eqdnoGXcmThNADbVko8iqMwLQVB6L3RgueB14KCTFcVcd",
  "key16": "4k3ujddoPmNyKrAXTSmqRabaAMetj8b6mzkiV2Uc6H93hV2skCcr4qTvGKMyxfbyA9guTwjGLvqv1U3aMi4zvuX9",
  "key17": "2axNdAKdj1CjXPrnpWeUat5vHmm5sfhVRAByDd3BH829cXZgdBKMNQ5GT4epU4BN81u91RVQBqyMjf8qH6BaNDRH",
  "key18": "5vCQ4XaduJ8mH38vvqA6b5azxWwAukt1MFnhWu7WY7M5PdBsogGavznoystCm72pQTCWuGeqk1pjSNyzPwBm75zj",
  "key19": "5goQ3ZzmN4fRJmFPYzR67GCNYJBYxRvY8fhFYbpi6axoMJ2tLTaud1RqWsK9NgcmvN7xWqgkBqrB8f6dkzbnn4yX",
  "key20": "4VEsPYgxKURnXKwZUnTpJ55P8RWAY5eDXTg2ujmNQVJtjr2BpAwkRzSBYDbparBFeA5fNR5w9oKpgCF2AnWQAY67",
  "key21": "2hhdfJ5psLkdo3tcY4K1tEne3ERq3F2z8mzDD1HhuxU7cHu1snvkK4PEq7JnBAR39XkdALsUzjLLynMV6ApwTcTj",
  "key22": "UweYnnW99cc4tEmBxNpWgPwLXw3szMe5pQrgrSmDFqii3iEzKUnmxHkxoPQZSBnXdbPmUBS65kMxMnSkmYX1oAB",
  "key23": "4VranjxR2tucoNU1zrhuw45iVDzp4PESDhdjERt8AvFGZCCqsSXR5gghoP1qqErLU9kd6oZkqRVLFXhXAHpxawk",
  "key24": "4fD3X1jNB6KkLTmmgFQ6iH5jVrMd8g4bBCqCNY4yYCYC7rFZLnW6mLvDR3AH7rgnazDTFj3bpGTuKnXozrcirXRu",
  "key25": "4zz12sy8QSU8iWqwNtEQmgDQYGPkS3c6NCg5V8dXApSfCQLNWJKA9FpGEg1dfX8MfDHi6VkQfvm6NsyNm2ixnFpt",
  "key26": "3Eqp3zLKFpBMmqoKm3Q5fLEEUAp6ejSoqsmLzXJH6GXGz3mmyj9PVqy3XpgCZvfA8abNYMTv4RuTLh1iJmQwdtDw",
  "key27": "37i1QbnKjTFiiEoN6QCyNPX2Za7xPifk8bC1q74ZMhycoFoqpcFHUiKk7McGTdg3kUz9mCRjiZyiEN8otasAYQYx",
  "key28": "4qte5TvmsFWBm4rhLypKg9X62EDHCGz8TgXpY42YnVd6kWXNpoqvxGMeierSPjiHC3pjcE9wgkKvB5QicWPbQKh1",
  "key29": "5xtySeo87z28TJ34iJkXnkMwxnxbac1GyUHpyBGHDCRip65Fyjmqu6oXtQu9HQTETEg2rKWqe8KjTFtnnpKUJHeM",
  "key30": "Xo3du4fUD1QVw3mF9P3aUQLvfowb2t8GjTF9gMpEenLjHj7FRq5evTGxV3USLfaoCu1syJYabtmwsssY6EPFjbL",
  "key31": "3xUR6YtUpMWJYA1b6mW4Vifz8vFEo6xcUKD3pHpQDJGErbGehpmoeq6PyUAaxgj7x4p64uyTy8UE2EDAJmSSTEXK",
  "key32": "3977gv9m2BNkwyQoegRZjfXKkUvLZXvFmavaVJ2Y9WBH5bdMgxX3q4vzb9cU63VRg8mPYVjQjvMuCyGmNkAQEpnX"
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
