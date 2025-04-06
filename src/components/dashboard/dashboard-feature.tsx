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
    "5X3CDKtvAh7PDpRYqUVZ46HRvG8JUordLTDjs4mfoYuH78geGhj975GzKxXfRaDYs9ZJeUGmdWGD7c9ukELEyneR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDqxygtC7vsQd1c6k1JGtKYmwmMaWc3x5jgVkA6QC4M8JyzkUeRxvzfHJ6irg25MbwUrrkSYWFeYt4tdk6L2tRY",
  "key1": "cfcmfqC2AMKBURR6AwsTArWX6kyFKvUanF6QZk8FkEYDsQwXqsPLBqyNjMF94zxHcgSG3jPXBy5jVFAPTXkVbrD",
  "key2": "5epUXHvWztiQWaLbFgsDTDAZU95x2dc1x9STCL9YeAQDjip8WayM1gEtvMdJU1ZcSN3ZkykX3q7u9eTh2Muigh3y",
  "key3": "2gjwpGAAe34qgTuoWgcnRDes8ih6N7nrNEbzkw15zhMxtRXpDMb5f7rg6FzLmocxJPtVXZUUCYRwsAvFduAjRdTt",
  "key4": "9AF44Z2UFN7E53p3Y9TCGYnMSZXnp8VHfti3Df7vdY91mq6Y8ZSMzkef4fXUS4Tw2sPYZmG2TgoJQKeR3JUsEfH",
  "key5": "2wE13yrYx5iCD2fq5WTgkrc4NgX5F2AWja4JzBCL59Newoaw3gcBraBqAqGo9Svzz7s17J8b2S7Vr16v2ZiN8768",
  "key6": "3KEzmdQoPMwD2kXC8HBDU8cVruhTw8pHy1iHxWMfMLa93X98pSR8UbiQvtvFoqXEwSrWML9MztVjz3KciZ4rSS2e",
  "key7": "3MSrAV65LmEJ4caH4CpJXycjPkmZiHicpjNbwhfNAwp5WcjKQszs18ZYzZTGtoK6pvcUyA1H3tp699giK6JXCRRt",
  "key8": "2Hz4uNnGnyUaUbD8G9ebvP8984tJZ8fgG23Nhn8ojGv7PaYkoyYmqRnbwhNn9iAHrTJFabAyr9ewbkCDQDrfztCT",
  "key9": "3CTwFX4GTDJiWrNjrKcAqvT7f9Kn5fcz9Pk8qTnvkRuFZnMHrKns8CP42wBUznWp5BbPG7rVjJxEJPPrEafTB8H4",
  "key10": "4XBHPTSekaAgn9p6R4pv5CFBpgorR9fNStmNydirmUByJML46zPXnkMcFEmeJuLy4TBoieT12ZHTxzahFCUqBpEZ",
  "key11": "2cwNRBrjXvtg2EG388FxJoWUtpiiMZS4a5S1G4vJPpjfJUzkKeeJ7Ak6vpeHDEezMCUtSYpSXfWVcLdTizNeNX1Z",
  "key12": "26GCNW6vdW8xAFMvedxyK9MCcUBK6z2xidgXYsACxVU3Z9Nam7c8XDpsSZubSFPtBUAJpwLnpkUWGPrzeB6MAmcJ",
  "key13": "2qFRvXZkB3xoZPxcp4z3ae8m6Mdtfd4Ddv7KKYqUTdg1kc9Mge3Cbftzyg7YC9ZRnAYJmh2EYEHtgTRwRtEx7pNs",
  "key14": "4UcVeAkWswrfAmn7SrMq8LjZYpTXgbSAew3P4JuqgjxSn1uMkXYCjY5E6yPCMXWyTj1BkB1b39tt5FES7MELQSu7",
  "key15": "585Zxm3Ajj3iT15eyhNB4YYZ4bXUaEx5iaKBnuNGmyo5Cw5NXuC3qcCDSNbiourcuBRBnVmM2YRxdC5gAxKUUBWu",
  "key16": "2ujLJWLV38NRETpp9SoDmDymaQVTAKpQPFR2AkAoxbxW5sHBY9tTwyQVcRU5wxK6zKWzgTqb8wePEoJGbBverRbN",
  "key17": "5tQzmJrifqQD3XJZq9HVaN6jYbdV3gPS4etdjvjebsB5q2qA5Jo8o6KjhyH5y86cVULaQAmthGXHgUzEzFnNjBES",
  "key18": "43gEFvPsRbhrvmDamLtgPrnr2zYddVKcL88PHdHpnKCigcLJWW5ZM7jFFM2RKK3jkbAwcp8hV3Mfn4Z2CSuiFPdm",
  "key19": "3NrqoG4HS1UbakqAaAryKrbNDJEHEMmDnDTqHspURuCPMo1kSW3ryhjFAbL3VhQmHdoncNxAwn6uJCrmCXVW8KuV",
  "key20": "2jHDiUw7Ln3YvDn7hU8RZc36bqeeGmpcM14CGHVaRaHWd1zw4TU1mLaYmZPH9CghzLocbKEQazH8bfh5N7UiBFmC",
  "key21": "4a8Sp63c8m5dcYNqUtHvJjB4fGhxBKXgYdDTU9iB6ZuGkuMHLH46cAEb3iEgXu2muEDbtEzYJZr6pZDVfYuD8ZkV",
  "key22": "4RDPJiaLiSjk4M28uTwsK6GmTsXfP9G4idgJDQYmxw8dVKHWyAvdnstGosx9raBpaDcrYQqiNuX6ZqMmQEWjaPC1",
  "key23": "37iCi7UsopFBX9HZwUVznKsUBdc8fsaQb3kR9bCpcdMs1VdTZgmWtKQL7TMwHRi3HAhfAjgdHFjetjxEQ1dFpthW",
  "key24": "sjjBeUb6zUCQwgAAUgVsdtmUBjdDYuD6tZ2dWNNmaD7wtAY7Bgun41KYUm2Sq3nTmoFBbXJbLBrAiysfRBeLGr5",
  "key25": "2PPrDQdcm84XsNQ7P4pnS4U6UdXSCcUKidJryZATxMH4cV51GtWQPiYkmwDXRrzCyQmQapauft6oWV87W4eGicnw",
  "key26": "3YFiZhiUBViK6QVCYT2ASXBFnQJMUC3QHfdrafDvoHkj8a8u5FWsLfiQ3CpUx6EQ5Jq4qySHwqPnsKSHctwivvsy",
  "key27": "3k8JW5Nr8dqhkNcfhMf8STkNMGzNkTUkZfrHgcnXsNNr6SKreotd6VBYg3TcjvwsMQb3RLFNv34Ja6RSyxEwWzcG",
  "key28": "M3SUtmrRsJHd6Gzo3EQVpCGUXwrt1iusLZFtfi9oHAfieQm83bdXu6ygf5Tr3HgkKkVVPcRYL7ppCTBugcnRaDH",
  "key29": "KrRKpSjmZsLSE9HF1Ce57isGfuQmKToFQJBt6wdf9dxvG4uLhk7FZHxS4pnVKTE1xsfLegAUszv9nrYTV8qmimr",
  "key30": "59Z1vrMz9rsXoz6e5p9ahVcnKK33apb4Z5R5FEDTgJsnAPxJzPedZWHCfk2wGKi4SZneMCv97Z7SSi6QYk4cGCHe",
  "key31": "56YMD1c9ZELxC1gPGRgJ7XB3WQmQwCt1CyU6sfiRRiWaeoQkfXsDsKQTZbyLcjeb9AuDVd17vjF6udRAcP1PWYbw",
  "key32": "4P9j2JpZXbknmBkE3p2bD3nM2EnyQ6s4eAmBjhxnALcbfE1h7mZSkMGSgq9bJ2k61nunnCjQXBMMoqoM9vVLbbHe",
  "key33": "66DwzSjgDATbNAtAUnguFh8ZRXkQSjr12G2HmSiBhTVTnPmLcvcC9Ze9g4ya1LxJzAtEwQQ6rtJjrVY17NnQLwSu"
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
