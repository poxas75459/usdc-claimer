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
    "57qucvNt3r9Hcs2jiTmhyyF9AvvByj6sRL4Ph45gw9NJ25h9F3YxuSAdmYN7uHNCr7dC6p2FrwnWYmvxfZRGQj3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4moJvNoGQbW7nypuV8sNdyMmP7vuzQsyu9zZ1pTGerEoJEbtb1XUdisLhRLkf6hmeh3PkND1S28gTm9iyqREddrW",
  "key1": "49RBrBYZCxGoakTx9cUXTPw3L5ajhocVv8G1qtXsgXpDR7PL6zpGArXBzLiuJ5ygYNudgvc3VgfnG87rZf6MsVLp",
  "key2": "oEBU834ea9RdGXg6xpfEXZLz48wUGQBznQFecizqEBJNSnSdrTFRKuUuEMXsvKCg8tdcBFyfNJaaV26wnyaAVE2",
  "key3": "wxGjdLU8w6jc7ttj4XbCbAwjkRsUbfFkzoVBjPBZW4d737TMwtyeSmpFu6LDkahpZg548QqoNAj93Xx9DiUwzwx",
  "key4": "3dnakg3hz7gN4Xc9R5pu2CaxZBAFgaG1Evp84HBbQwqdZSCPH4PrhGPMCcdbsDPWEx8pFQC39pgHJAj2aNWPHaHX",
  "key5": "2f63gSWGgegvTrpQH3tFdSp9PT6CKZaVtD7zPLd7zD3Jz8SsvpVsUNhPJGvu4y2NbM3jBVeBfxLvBZkPj2wByWSd",
  "key6": "3P5aNrh29TRVekJApWyQqono1rMooTt8fcKQxhqzpf3mwhR4CFHQ9tQsp2rMBHk6ZFqwBwHPryWLGAM3hsiYDHzf",
  "key7": "3YZxM3dFVZfXG6yzg5HqFeqz4uCgCw4KdZmVfcjt9K6v9wry2bNCux45HfP1pzCNrozbFpkphbXWxPv5EUk4huJS",
  "key8": "2vq4un4SLzJY1vrrNfUAqqZD1ZVsszLiWw8yQXLQ8cCnXMrCVEc8uerdjZtEuWSt5X3cKWrUDVMwKG7nGKhwG3Nh",
  "key9": "2tYF7bWdRaG7y7ZwuFMDwxb9ZrZUz7UDd3LAvSG1wEcqnw73oe2FdnWirp68ddopbJ6rRorTuHb4p6WaxT8xREGS",
  "key10": "4RQ2SMKvLQJbudqi39TtweSkwnP1SDyhSnTYwmMkvraSS8ifrQ5eDt7KDVd9chjpea1NvpHUyTEKi4GCvjmbq8Kb",
  "key11": "5Ko3hyrVoJRC5PeKGnfvfbYZuF5KboVBLx2EjZrWpM4LYBs5S1CzUCUQsP88mhZVbnTTTA8nnT5yuvPmSpirH436",
  "key12": "2UsmotJwdiKo74WTKh2zhL2Qx8Q4BjpQDRFdn9jvs85dr2rTbV3bEibuAatKZhuiLALNV4seh4ijpwtsxPNsiptN",
  "key13": "3FPbUo8X5tvk3rDna2krdGFpyUzKHeEVKpT83beTMAkZZTuBmtv2RUMtc8YoS5EkaZuRGQtBrfX3ihZnj4FVJcwg",
  "key14": "2nd6abXgaCHUuXPFhkC6yjzY425wWCuPGhjHya7rZBo86HyJmN1AabbB8mfFMeWyvdqxoYqK11x1tR83GujX3fiD",
  "key15": "4SUEGCQByoWZF8ST8sonhHXHJdn4gxBNLUPKJsFvdDqNDk7KNw3cQ1zDZA4gQXhfUhr7AZS2kQ6vQn1t8mFnDS1e",
  "key16": "2cmTvaZMa65mM8zayX4vuuK7yMgUxeh8C6TukXDcD2Pof1hD1p85t4faisshC38EBWxUWVDkA3Y2xRmTRhRQbLxR",
  "key17": "5TWdSoTUXXtKzyaBoXs13vxDL7X9vo3hWmviPjZhd4EHiCzsXncq6oa8mWDEevoFGj85wzxAEyjJFGZc31zcq6gE",
  "key18": "5q31Kf2X3axShcz3jMPvPFoGaM2D8VMafLo9X4ara9kfpBbDxuWTwnbndc3xnTo35j9CqLh7SEPNJcQgJHpe1PKa",
  "key19": "2AByzXJHJesx8G3DfT3S9miLqDwSqSc44AUZMR7HaKZrBYgoJ3b6By5HzBrwMggLyT1L3rwYe1G4JV94A82W6x4B",
  "key20": "286er8EGfxjJfKJdTZBR9UxaBehtcGxZezhARnUVgBRykicgV1vhm5f9zQJm6xPjwjLSCGbiJcouc8rTNn7QeyNA",
  "key21": "67isWPW9WjT9JpqxmEybXsxQYrW67RCGYn3hjCVGm8Jrs1AGA6cnRunspEDCZfudMXm7UDVqZSeY5FpuVJ8E9WR6",
  "key22": "4bQ9cwRMxFnExRDEjw6tFSLyj9TsXv5jLhpttg475zQnoue5AReqineCFJ61uBAJXVqtyTGCxJ7wV93xRLSEyTHN",
  "key23": "52WpvtjibpsSZxD32NpRcUxVyJo7Q63vcHF4op8NpZeo9PQz1rcY8KEhWpLs2rDYpuxZ7bNfLUWbfAtWwbHBMse1",
  "key24": "5uwKTnTTZ2fsGa9HRPLkMq1kX2tKYm2vSV9Chpz5QAJoPX2WTuaJuMKDUnYV8osuEcDneBKippuUS4G1t27kixXh",
  "key25": "3PSkZ41hQLis3XpcG9VBwXEdt6sgTEtYw9i1zZwHs9Gee8oo35Q6paKdLGF5CzYxJUo8JB3ES1C8W4mLZ9cgkdRN",
  "key26": "7hHWBrwS8Pf39aChBQMbtTfxSkpeY6D1Ckm6MaXYT1kz6cQ48ze7YQRkADugW2gqYkSvrFKu8oEVQ43w1krN3TS",
  "key27": "4SauctJHRMeEQHLFZ8ZvbzbF3AXkeuDmNc2erJvRCM5ARnyq9v9y15XbAVGkCNEji3CyLBYpRY8pRaFtDVKDgstb",
  "key28": "3ZzLYJJEpnfGgcEewxT4L2AuD3q3rBEcQTWi7oyJRtNqPvzR9fuw8txVfui3tkzmHZpCdjjMzq2cd9f1uqzmwm1G",
  "key29": "4u98oVrDwvtu9t9obt75Utp8suTCKF6nLqfma8fT8ptmneKJVhbGbYW3FSSARMZ6cLbrTYcaboYTYaxsh86HX8BJ",
  "key30": "VaQkZB1LQtk5HVrWEX8NmNh71f9GssXoGPhLG72qDFmAt7UdDNa4CHF2iCMR8AADFj6psG1pDnd1zguDCxVANVy",
  "key31": "5wGSpFKYLF6j4oiXCCsnQTg88pvVwFFvTC6Ty6z7VCwC67xR6483fwMcxmyFBdGxBqGGbSod1YqotkbYex9gHu1G",
  "key32": "zYLXoufVVeyGzu47Sqas7eEYNBwWkpcMf9tPMs7Cj5RJGACjG7KYzt3Ptxniphn5viqQfLMvLPPcoUiRjZXnpFE"
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
