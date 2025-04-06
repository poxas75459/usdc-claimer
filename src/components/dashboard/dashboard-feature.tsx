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
    "5fgDnMNmnyftfUsbvjAkgttpxCnZfSsLxvHWEMto9wgQmtME8z7nW36sh4CyNTECDZ3P5JmCkapfg3kMGcE8DYpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iQam3Sz4SXfH7FSkHAPtWgEhKYNwxwqivmcHSaZhs4t7kvqh7kyzfGEbeFwcWx4LmHgMk7JiLSZNC2po6ddxCTS",
  "key1": "3BhMYEUfF3X4FPXk2xywLYX5bxkbQUz25KZmXcwDxZrqatSU4ttSNaK5oEqrc9gtsh14BAPgrjLK22kkTqEKUpDD",
  "key2": "5JF3TWkyk5yW9eBQZXBtVGsyCcQqUvEjycfuNZUjYVyyPcoMASWQ5panHxbh6N5JiNf7GA49m7zJpFpeJYawTWwx",
  "key3": "5xLv4b3gJuhUvU6q3mF5QFLxqJEEtVHJfYVWJmSGGJjspi42aKCc8HgQFZnv2d74ns7459wAmqUVsMycZcLh4yKW",
  "key4": "yuMpAf1PLWYfrrNDdNDPyVpFKLj6gQSzhikqQre2nWgJe4bfqc5uhZ6PKBbG9eD6JQjirGfFbqgEvmN89awzF67",
  "key5": "58tu35wrkMLUX7MRF3SQFRfEkrGkUSsH53pDGngzL6EmzNJgGFQfD7vtoYFbnGv458jnwgeFYrnLYHjj9tATiE8p",
  "key6": "4akj8u34ued3FeufqRqaHiXWUHpsh8496poREUfUr5KgMJTEEWu4tbeE8XpkwgRf6dfnyq9qUo2xSazy8FaqYebr",
  "key7": "5hjV6rnJhqYrPeh2c7brAbpGAggPCf93w93gatPssZTmJNSpRz8RbauePWvU7EYHtMBpzuNpYH2Rf8m8P77EbBFk",
  "key8": "3yqsaRuQF6ewFBcVj2YRunr8zYTKumh649rKnhjgF9AqjaLZVbQ8iqcDPAnyUHGctx4KWatgVXVnWgt9Ps6uPCMj",
  "key9": "4bUo9T4kisCHtfNXCMTHrqL1UVejdGPCmaZZCphycra4ZyUcvx9v1FeyLt1pbYabKcS1F6e1UzM1W7uGC9a7sBDs",
  "key10": "32dA6LQwcQHGMUrvpNZVxJs1MBsZdhjHijLezcRB5RLmKxufNFYG8FpVC81jUDnoyARfztusSgc93WLnQHQm4Caz",
  "key11": "4C3VN3BZaqHbXXyoES4h9nmK7S59wdCsiqsaPnRZWCwA4cCPxEfxeMiTWu6cSsJm8gQ5XnPHk1mZRXsSzcXyUBBA",
  "key12": "3FLpnTyjr6hnGYeaEN3p3ye9ZD7MQwnhrPdWEs98cNrVyRpdEb79eF9ZHWWBge9nhxhcUrYqm9qasefE8x4dQ2XJ",
  "key13": "trisjGeDfx1Phe3abBp2RZVVgu1ukG8VzHYqYEmpNbHdFsi4tdL9Zc9NsiswdykNLAEYzY2gN5W1oyrMMAmMSMm",
  "key14": "4sk3TPF2zoifXBHEPRVJV8WdfnhznZRH3sYcnpHyMzV26pwYrM7rys3SdRvTydWWDFcgua4KNJuw9BswVsnWGahX",
  "key15": "2GeqiWVnuN9v85MvvV95S1wLgQCKF9xFufyeBqHrhSXpx26K9hpKdqFNtY5NraBZmDRWiH2caNPyAhx8pB8faMqW",
  "key16": "4vgQW75tdNhKMvAEX4MyLLJ1SWEpbuSB51oxhs86sFrUEUtgDMDRkcNWTMso2Lr2nETXeJiarrZNNBKgiQxjsmFG",
  "key17": "3Z4LRJYdJJrYe8qjp8McbsHWwN6Di3vFsSSZaa4EBdSZTrsoCPeAy48tsfjyiNLeMSSD1ZBaN8c1mWcxRcF3cpdA",
  "key18": "32WDBLExJx4NuP2smM6q6f7eFu186atoXkCNaik9CQoy8rnPr9D6hB8CPJxFXaU8bqH4bFDpKMqVF7Sw5QiDzTEJ",
  "key19": "2soNMNd4FamzfQ69XohXXrbgujeSW578GZA1s2yNgfPdRqPMnFdUARux3TCKChoWxzfmtd4vbk2tC2TNLwRw9TD7",
  "key20": "pyQiGWnqTkNNEqWBNm3o1UvS68nACGAVrf6Q2UCKMeKMeGo7mK85KZCotNGXaH8TAPfzwDk7182Aq2i3bXE8PwD",
  "key21": "2BWmHkQPZs3oCrrmMjuxEZQn25TzsjnR344dHt5V1eSQqkB6TRycYa7fTLuaAVcsmAsNTfK6w1dncWBCX1p4CcDQ",
  "key22": "5zYmtVedMu3tLiFNXYt6KdqssDhRLXv87QiAp94Pud7q6uqkd6Hx4GTKfaT4mpiQz45tebyg4BBWbWVSkVkLfvyL",
  "key23": "3BMg8b8xthui2oSE42UNDsvVDYVRp16xhnLwrtLiKMMVPvttm7wFGmLHbMjWfdqpyzmYReWAnoM6oyhDEmShQRff",
  "key24": "65ohw4gfzgB4JfxN6EgwEMedM8YNwjFDWQuP9GtMZqueU5S51A3uWhyeimjWMmdm1wtpextFrGiPSBpNdwVWmH3V",
  "key25": "3i1RKamHBtGMdvtw8NuGa7CTJ9tAviKMSNcV7R8eyxQpfupKx6oxyRQTj1ZzCLmu4amQzNVA244p8Bq3Wzz11CQz",
  "key26": "2CknBc3XcMYymhANKkudkrEJ3MG77DutwaozmxAv77eDPFxAemVupec7SE212RR77XzMCndxz3WdUxJ8Ynq4pfHB",
  "key27": "5N4peXHEVeDaBjJUfi8ka1bjqYs8y5QYPCLuDSFpwTWwEDBLzfMW8YfR2yFDQFTsP1LNdk9gw5MicFnWk17btsNn",
  "key28": "42ahaGeofESgpbmP6VGVXpmUwdYSYdbcf5s3TZg5XXS2sUkXrGLD9k4gn542Pw4J6nDqGKsX2aGLiaRFoXuxRYde"
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
