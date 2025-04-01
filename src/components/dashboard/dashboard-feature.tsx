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
    "45zxQjQiZFogZFAVoKrFpbSCgS9sYyKfUUhe1L2ZVkGEZHdnK3m72FfiusVdvsjEQjTY9HurxHAsExzYXkyc7QVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TFf7skacUkcUBJcReeVpUjJ6mw3sfFTW3G523nz4C3wPE2cGt8FaRQDFU9uXWADAiF9eAWUt6GWD3ezvL8WCGDX",
  "key1": "4ofFi2j6z3RtVHCted6QJ3BurhP5kQ48sws7PcxrLdtkQ66aTchPaSUTSqoN1oZXEQKVi97MnRnTumSaMCTFE72w",
  "key2": "5w8kHXeGRBhtGYaez57LfsodTfxyVCdNLgwqg4nctnSqEnmxQ8T3hBk181zPUP5vckGpfLrfESzrvJicmS7Ftqcq",
  "key3": "2BJyAp4fTYNGcTGg3sDeK6EYp4PmCVxFWiDZQ5F7zsXP5BCjvFKZ6SPctQFz4M2Q12qrLkYyJDpgUtDPnmia3BeT",
  "key4": "2mkhiZoUu9tU5vbwjfggZSiq6s9TozMFy5HfquaG1yWiYzjXhCNrFNE1n9LjegNheMkd5qYshHVnKH5vw3mtwYKj",
  "key5": "5GoZDbRHk2YqwmUvTs47JVXvypsQgTnRLaqxphMsmjnhWjnUFsu1HBfwQfHgWRNYe5XTFf8QpXNPDaby3fo3NiN4",
  "key6": "2DGxqxbf5RfijC2fr25kGBhSZpW9Lsuhb4xj6QEBZsedQdAscHeNs3FAvZTQCz1ek3R8YqQYJTyDf6GuN4ydXfp9",
  "key7": "4gzyqmrPf99hzkAYAzK5zkyz1pXrhSo6ouRt9JtemsUkgtpsu6NW6Ntj1JRSyCueL1PbZaC1N8BKqytZiZWiWxHX",
  "key8": "2AXSNHydFUPx3jZjPP7mZPAz1HW6vRMs7NKHRKXJ6zJriTcdhtUU78rAx7G9gkjDoPAfyc121ecoFS4nExavAmGe",
  "key9": "PVH2h1PoxwEyprzBbwN1w7aibJL1VFV7BgE2vudiwPrpBawUzU3iDLZxEr53KGK5YFfurSrk2s7M9PPT6QpPMcd",
  "key10": "3NwWHhm755mdxJiTespJynXhn6dpByM7jtxQSY44NdjpeRygKiZtS3rGbhuK9K9FM7MGgNAze7Z49jZjxi2mVUTb",
  "key11": "4zApGTABmZnuWjywWJ1d9E1EGWfmh474WdCQfDqqwPwjuFtarACVENLpA8KMAcHTfVFQz9c9oZXM2fHucoK4UFAi",
  "key12": "3qcMcor6bhLxNzU1KcRqWgTeKdY7aZeLL5wgQinJfY1N1PFcuPTmc3qVkPW7aL4ZFQJ2uiZEX3nWPKFniEc24cGZ",
  "key13": "5hYX4gXtjLPtM3w4WPFKMVdmzWKto9SQv7V2EFPG5kqkUzJMNS8uJnJnuDHreaoNdJzVEnKuMekUbqKDAru4Knxw",
  "key14": "5vpTdpHTPkLtondtKcFfjERehL3ocEjbJV9eohc4sKFaymnEce5yeVLdxxj92YHkfoNYoR1R4E2J3tiu56cVrQfk",
  "key15": "3YsX74Y9QSwMChF9KvN3BXtbHn3rzEpvWeaUncEH1uQbT8iWFcS4XsaY9bmKzHrHRbtVLQjdMG8Tpk4a13ohybbS",
  "key16": "56H5rhmXETAg7xAAXNn1PxFaxr4km5hkqTipsf5FmSVtQyEaUQFGhpuqeiREQsPfU5ff559W4DMPYY4yM8bhYkoW",
  "key17": "2X6etp5VHJB2nWhDZyTbhA7B7NMH8VAg1zEnc5p5AGSuSgDc1n3iLZ7EqWX1WzXdFCEjaLX9PMCustfaxek3uGVt",
  "key18": "35knbaHqhaDJhYM367ryHbU7Lhhx86rm22QXDrUkjoBw7w2donxKStLVuGBnQYWZSf4RZMfWpZEHETsSqy6d5N3",
  "key19": "43163gJYuZUY55iwpNs8UssGWxrkJXRQE28y2ajk861gCkZc9WNswWXcMn8h2vQBYW8X4sNbLRFea5N5V7SLekw6",
  "key20": "2WDicpBv6LMPL1NZz3r5SycuZt2MNw5KAkLPprNvoGW4D1AivFSzEZ92aCdRxoYC9gKjMMpjgh6GfVg1czWngG7u",
  "key21": "5LE1k3J7EVR7BXeNXXAEQummDo5UQ3GpwYPXhuTKMptor2FbkBgq4LQhrov73RtuX8ejTKA5uQYhEyPXCYhQZJhc",
  "key22": "3WyGWzaR43LGfaejexHkzegUhuCnuGmmqyomWWpW8FrdDt7ipuECLS3tYBUYcxEqnqDZTH58GPHqegJdUd327QAS",
  "key23": "4wVBtPEhZ2nLT41jt7JvGV8Gu2Lj2X9GSES2rSHLXrjeLGdLFpRKdYC6CeKcqYJsqAACvFP1BXEozTwPLXNxJy12",
  "key24": "3FZBzrkZQgWV9TtNWHEykKD24zpPepDQEQbWD4Mc9yD7SNCwg69g3DLCFHJQd5h9EHDc7wmMjP91NnRekzjVKtd4",
  "key25": "2NbvdEGQHn615fJwimwKMWYj8dGTZHmvvxfJtWoczJqdundeYB4MNwfhcrhV7FccCCVdjon7ZjpyKYpXL1h34hyN",
  "key26": "xJSunWignqarRigPX95w19VEhhsHStqvwQsns1wdKSpYs5kbSkiF5Xb5g59r3hVFd9Wq2jWwn2h25U3q9muTgKg",
  "key27": "5M84Q8H3w538Mtzzwzr5MgcsfDqtKuoa996eQVYuJRHgzQnpSPVjCpMMu4VzJub2sVfrCcxDfi9bCKjhSbBgo4Np",
  "key28": "3g58o77bqnFj2sCFrbL9jJwa2nbdJEoS8KxABfq1mJsjZ2ZFgiKyCphDjbXr18FhUTP1HBgyVwMWdMzdppec5wrd",
  "key29": "3f6kaCVgCjqNP7wB8mKEkn4rXaz3dTSmrk3JwWgFAaBdrCPxRCKGY2Tpxr5dpPZa2DahndNewRWaNtVBxsj1Q7bA",
  "key30": "B3JLe8RJmT9oUPkJ5vihikcfgGLUQQiYtoSP8otubGZqJ7dgXKBUsn4KZPoR3ADEsUk5v6Z3AvKW8qYwbpY9rdi",
  "key31": "4hszrtT2ncMrMeqM6kQTRaNvvBpR7KdCnWqxZSGBcVvqZvbYrQYiK6YKYqeR1Woy2WLxaVjDZMCfWHufrrN7Bc8Q",
  "key32": "5esTjLeoCJy9RSqzjcnunCjYgyQCTCTXPqcNQha7Y6KcaLDEG42nMvdjXVmN88FayC93wwXhn3Z4m3ia4B5vVUdA",
  "key33": "FUkysKz4jCwANLfpMVUchCEd3gkh8uN3wB6TmKuizfauq81sA1aKFCfLqMh2o5E3XDSxPZFtZ9WqLfy7C2sQ2QS",
  "key34": "289Wfr4NyH3Xwvw1dbFeYAip2h5S2d9oqV4tVGMYCcsSx3EWgYAj7L5r7RQccqD2vcoZFKJwW5ooR43ks37t59zP",
  "key35": "61f39eTZUeCjMJpgryYWxf4qx6N2BMv5Eqp4gJFyi3UH5BeLTqcu3DQkBuWmfPXoCGJUpAfdSwjq4WmNYQ5QZpgk",
  "key36": "e7TkrUgRVKczjdsaUWyZLBNjpigB2YWD33MzJkK2nSJtEQcgPgQaUvku7rEpr9qakdJUu4rsnh3KkNYkB85A3Ng",
  "key37": "5R4GrXbSFN9a9Wkb71c4ShmpGZ94GrRxWBzXzcmY6B1HTxJQisr318pS5T7Z34RYC23sA3VxSiazBV8aQEWQTTZf",
  "key38": "4W6znbLqkHNsnK1WYTHqkhNLmsV2qXJ7is95FRwSLbUfiT1MX4M8Ejf5mHy8MG3RQZxNiMiLCVFDmLf8FtVzCWuZ",
  "key39": "2McGe2duZRiPbMahH427cXv58MxkH7ViSSt9G5atNv1qivqdJVNMtFVpS929gPhVL7XrrdXZQEumJBAJgbMYwHhp",
  "key40": "3q6oqKdLGGBnABCuwkZhpwWKoHuxWhAHcuviDM6XSqvDAbB7699gpdfuUmAnwUjTz6rNFMXbMKUCM4tdxSrUwy8R",
  "key41": "mYvc2jzFCkz7bU5oo6cTdUGDt9Lp9pXBBZfu4aZwz3BB4jD1RJ3dEoM3w4Pt5e1Cp9Dj2CbLCB5B7zxkqG3Z38A"
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
