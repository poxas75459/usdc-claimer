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
    "4Qu5EN2hbBygKnL4VL9TDh6FE9jsHCzyJdtWdRhDShpo1nf63PLKrFPid567kUsEWFj3Via5vg7Kvn3vDTKvXgew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65hbeUKpGeZ7MQnWhMPzaGVjAvHfBVRXvxoY2atTocj9AYGFs9KUBqVGwC6A2aKCnP5QUtZKnUBfPT6MPmQXrY6u",
  "key1": "54MbLMuAJqhQwHMsUFLXr1bubrbWVuv2q52S1kEhX2VVme9bPVLR4Q2dxc2GxnLdy5cftpxingTKT8hpwbV2s16z",
  "key2": "65GZDyMwTPBWvBN7GKgMB4vanSUs5UjfDRmQBv2DMiqVW27K6RQhPVQx2hB1zsRqmX3mEwSzAoAvAH1bdcad2uRp",
  "key3": "3oajMpatHjn11Ke57tyMFmJkVQPRfE84S6bnxQLHE9oQpym2na5YyRww1FA7stDSp7Z2e54UExq3qMExqcgySzAu",
  "key4": "bCK8NmGRWwKSkzSwV1tppbjrAfotFMe1nqMZN1H7WWcnEHyryaWhQqVKdjPiuwJkjLKHtAJaQuXSRAmwXzo3rVX",
  "key5": "3HoTo6NX1QN7KUG6WJkbQGboxYfzM48Hq1aqP9iQWubHg3SpbTnap2ncdoCqEddWoHAp56GgC5N8dVbauvofdhjV",
  "key6": "2NJtt5bR4XEmvTUs9CFypLUdPHVZtZCEEuFDmBHYNZWxE3vus47NS5XCfJUeZmyohraA3SrnJm8tUZwBQDzb6hFR",
  "key7": "4fHiUbHYLezpgpy29b2mscjMMJVrMV5aevvZ56RyiQqWWFD61c44adGrjqMjkAeAxoY6WWTaQ8ipryQXzsXoavPV",
  "key8": "kP1KuzzWzZ7ZHbALTnAqbeTt8J2m3rBPY4nFvupES3aTosv6QR3FZqYi9VYEQUjSoP3PxQXxzN1gGWP6QUrhfoV",
  "key9": "481wdVQ9oQLXrnazKV9QBF8r9bD4FEGj7zhBc7WUzYgocFPqu5iHH123ZoC8zkB4DMKKUDSNDpJUzvrwscTssXKM",
  "key10": "53tdFHDLL9j15NzkdSBdZAaozBdiXwCxEjQwb32vQ3gFZX1sFH8eN4ie9GjmuwtyK6RWQcgWWrYjvy6thBCHkicW",
  "key11": "5AueCnwRuSqm193sT6WNQKFnDZ2mHkLoCM1GEbi7qkTz1XmSpi5AjnhBudw2knRcot1qdy6L5bbJ2SDpGi4y7Que",
  "key12": "4rK1GErBFbSoCwuZhXENJi9poS2TEfMTysv28zYKyQf88mobBHSbs3eDGfKFHNHwrvhJV6dsLVSDcSRwd4opaemt",
  "key13": "2dG7vDBnuDJ2PRYhj5eWQ3VXizrgdhTAZEAsaKx5A1ekrgtUkZTWgmfq8MCKTvrfqVVYYS2VrzHQkjTbNJngMNLB",
  "key14": "3VcvCWCuAPuNbKnZPUJvTVfUUZayMp871esnVc5wJ25JiiNuEDZ8qLkbY5ZTGeYY5fBKfddQraMQadnngrSDG5Ky",
  "key15": "5X3B9FgrgruqiQBnZTBZV8sE7yJaybmGZszQP3HyVQUUgTjoEXbkzhFcoedPAiDjJzaJDsGXkeZ7xj2KGFtGHRAd",
  "key16": "4FKvu8Ax6yNdt2qQyQamkTuU3qvNVQbeMBFf3zB4zCKnZQTW7aYbfPFEbZwBWzcEGPZeuRgErzCCSwzaiD6cWUUt",
  "key17": "5FfysXXUbAaSynUC3Xne43W1rWcW6p1NcC1UMsXe7Z9awMrvQYyaC8aNTjHn5ivTFAjm3hZahp3M4DhfXyrXef7P",
  "key18": "5hLtrgSabbWyCXhLMe5hdwobfUXnBRRdyKgxHjVojvtrZPigZc1vDycUYYKKFuWsFWFcvg6mhWbrZMWabAFMiFzX",
  "key19": "4CmkAL4oQ96apHnu6CU7cWCRDn7FXRTVEB2J6wcrASv2mFDoQ1Z856sTVZRzhC1ejxQVsL4B1XTfu7FzTrfR2sqH",
  "key20": "654HHRA9XYfHgA6uU2VJ6tc7vnNQ1b2KqSSeSQUwTWzWrGmkKosLKceRRcadP2Ums1N7Nt1CjSfZgDRqbz8uEyug",
  "key21": "2gdAGeXtJakCqthSksecrgMmKbKKRnaFErFXJT5YSS5z7DmHxXW2qaj3w9ho9mLviXXxmHxVH5QH63urCX2bemsB",
  "key22": "qftns9u3HUgNVGnRGpt7dL17D3wmV6YTzRt6kdQR1XtyvB1AqbJMmYjtEeB8nvbAxo1QQXB46TVkVHkLtA7XG8y",
  "key23": "sAcsq6WnyTKTzQacEhz4BLrEWZchpmjuuLy4WforzuDYF5NcGvBrodYTM7oZBECTKETiztoC8KJR5ok4ytqookH",
  "key24": "4eqr2HBxgay4RNHNeEoKnRB7LZC8km6XuUFqkk2DRekxCEdZboHEP5wP4xLsUbGFVsfNSDPUKV4tM52CxHCTZXnp",
  "key25": "4QjH5p2eutDLEhQTb513dZhbj44xCoyKSD5dDWqNNkb4N1HgBTCNkj8vPXhhFkwR8GghsFMqtXjHK6RtxugMiK4E",
  "key26": "1TzWRm9gZ5PkyMKAtMgFjDtfxVo6W7FLizq4macc87Yzot2EciHnTVAS78YEH5Nu6dAsgZ5XjSK1wDZwMCm28wC",
  "key27": "5dPFt37bFefNwxPB1UESm3jbwDCK2VSNNGbFQMgAiAGM8KNTdCWiDpLVAH7UKmVUzJbyNjUPho4Z7mFaMJqRfBHh",
  "key28": "61y2m8UgT6fiSNY6HATrPGkf2WCkmgVVTPq9gakGAPyWXcM4jBCbussGNkMuFSPYCv5Uv7JYFbhVNJRji64RdB57",
  "key29": "47YMVhNLNsLsgvaKZya5B2XzbGo4qr85ZYdNXWFEArbzsVMvve6k7yoYUViFDyQW8jpGNQJ2gCJKQUc1JvANpjL6",
  "key30": "AcEq3nPLLo7WMcUymXSeebdptQgo3tTUk6sChBqp8N5dfoLvXVGaMppbtwRr8PKHkPb8dkH88zEawHHphPzMzUp"
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
