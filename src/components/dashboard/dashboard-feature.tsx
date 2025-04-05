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
    "3jKutmxfGGaGT1JXesNy5wcvCdHwvYmW6RexodWqnYKoXCYUnf7AEPz2HbdhEQ61QHhy6JXyXMbxW6KprQRD4ttD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VujuAei1MeJkkGKJgNEiRfqMTCjfnFThVdmK8THXoct4Xeas8gMmTnW8vqitM9XgtgFqNAHeUMaQm1wU78y4d5w",
  "key1": "3SZD32nY46B3qChb7K6GQyzgyYVUC1GyGFfnZ5KGyzdWBmm38KBBYqaRQRniGjuvwUU1qr8G4xQM5VJeFAwmGARP",
  "key2": "2qfXNrWRTSzGBdSNVKP7kDzvERxHE52896QDQhcGburc9L3GSB1WcXD2kdtWiB7cJPCNfgHsMiyTvZtUxWziMc1g",
  "key3": "jUSPEKosda5LzAdyv7YWxEp6CTwJpPieEnpyrB5fJcBtNhwETUDcGkvBGC6eHet5Qej8UN7emX6qcnpSmmVzBHB",
  "key4": "4hjkDbtH5b1jVYf49GkguqjcdZ6DzvZbGW6excMttwuuCptGbT989VXWKPuu4a1p6Q4SSUBuedypoEGvAbP9FTJh",
  "key5": "qVYTwPsSMcrPTe7vPBCynBm7C6WExPo3tRpr5w3i7kHNMfJvZ9EHSeuxxLZuGnEpqcfnYS8bSGxMrCLzrE7JufD",
  "key6": "4YFCfqYz2JUuRobrvRG5LA24FbuYZwFX3uwmio5A6d96ZgmCaKCggAJLqHLsoCZsSkvmCazLP4FT1uFXGgdpK7Zd",
  "key7": "5FokUq4bBL211QhaESEJEvhgTxCZcnp8hTW2cdCdJcAEzBWRFCHAjFY6Ejeo5jHkgwWZiYtogpjTxBzF2wCSMiJa",
  "key8": "3L6k1mQssHkPUhTAbDHrVoKu3fXjS7qScXyVT3qxvdrJRdyqVq9dsLKMeRYQGyRvsnxCCgUakazZohrdbNMn8o8K",
  "key9": "51UQp6EgPg2HyPChRGWwqC879PHf6cfiGSp6ev9SQXLFyRUZdhFVXgQMZ1KEQCNYMqPTm2m6xo1KWddiSJXt6i3D",
  "key10": "6duG6Kr2dtEA2ro8yGJrbSBiJhV6yrCNNZhvQmEdnk18tVa2YL2VaYxJj98fb5qsdAnkFXVmVQ1W6TbeAThtcnb",
  "key11": "i9Tg54bFHH9zicH6MqCopLXUfUFSs2tF5LGhzTPkEu3fGaCXCYPKLRHhgjCzuavfxeemEwEJof4vazipYqBmFhx",
  "key12": "4P25sTeiq9bPuVq98qXnX2FjXaVxg7cA38jjFz9zvxFPUP5rVpxWXNYfWuUgkHaDZRXMkPsrBKgLWcoxzjNREV2A",
  "key13": "3S8ueyixHLkkC5tE9wfDmc6zo9uf43nELkUowocTyb8RfmSiC6WxG5NZmtu9oAUJtptNXTQU72cigj2enopVsK6j",
  "key14": "5W9YqDTpAj21eMmmQTgrCzptEKJTKFEqkYSRPfqdLWWD5c2HQmce6oCPiknFNqurQvtMURwTgAgMgNPZrFirW5xz",
  "key15": "4nKbdScRhAkN5jCp6styskLYqFzYTxcTkxPBDD5NmEWke17jnaG7PY8g41u9a8tAF9RH3wKhGref94mgQPwPCBw4",
  "key16": "TiMb6Wf83TaJDZad3uB7zay3dpepu2ygQzz2VqwYy7TqKh2hZgSGef2WKkHzjeGx8X5zXgDz6z9iuzMCs8FJ1Fw",
  "key17": "3gH9bTcdRDWnTRrmvwe8uSBoCnc1kYx6ba6NDsCrH3y6gh84jLhiaWi5CWTKg1fit4v8abiUUcDk445DPMW9Jmdj",
  "key18": "ZJN7h9cNQy6aLSMSkkEaPBdcaBHgAV1j2iTJq5VpJXpWhHNRBDmNPkUnBF4YM3JSRjXGH4quiN23dQwtsM32GXG",
  "key19": "4sHRdu6vcr616SbsYpXTBuhdCpJEUdNBYJn2iEhhxmYGYukcPtBjj16ve7UZbfbzTS2AckVbkUPb2Tx6cvb5bHYo",
  "key20": "2X4QH5wn9uJb7BsZEP7MS5YaKuGRbx8LbVDPmUhu855rf4oZRR6gWXFTKiPxHt4LbbpzE3j4zwCGdthzhXMJewcV",
  "key21": "3HM3EcUrXdqhv7eUaG3yPgWxwuPUjZgL3QYfb21CmyeyYqviGAS7G2kgL6yXHExa5Qsny2VRrkURMxBYBXKkoAHn",
  "key22": "3eL5YU2vA4vQDF91nKUQb33GxWVqA3xacu62c4Z76ifvmUhZufFRU2Xepodt9yUJzwyLPTQiuiEbazBjSfoLz5nW",
  "key23": "32MpdpEPbLqAY9A4uVowjn53LPLZCjL5msTyTCLAqriVrPMCbT4nztxstJoA5woNNSJiV4ccxTJxKRPRkTSNZpzn",
  "key24": "3Z4m9anuAQrgDYdT5XBrTMuYLe3aohc7iKZJpU6raNDHfGdtYU76QwR2CBM5JMf9UMfF4Ge3ZiW9FgvJ36Yxzezk",
  "key25": "cLqHP9ARNfNFb8mzciCL3tGkPg6xeBs8JVQaqbkaMjxSR8LzTL6FGtRfUGfdhq1FbGJooVhJggP4eJH432wS7eE",
  "key26": "3BVxzQfhgMxcs18mXed5kGNtGiPSz2cDbCKQ2NJUpzymWKrmBeboFudLY63dvZz2FWYKLDa7ChTXieHTyVoPTw7f",
  "key27": "3pU7LGWoxjNr9RYKLF8qepqD6UZCjkui8NfCJjLMPsVXba6MvupYwdNDWHfYb1y1TpS88PJoJKsoV1fQGm6p7sBt",
  "key28": "4s1sMAUaTsrRRwmg5sy2wbPvu3P1XeoXXEigf1t7mt7qfB1Ki92ZfegSWwWZKmkVa1o1BNwTL5h4LsR3xh3T3ZC3"
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
