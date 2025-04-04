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
    "oS542gAATEtXtDJxEEBb1zv4bZkT1dgvV5G9oNMFY4tCfxaC2MLtwnpXMQ1wJgkhC4fKFbXkGKtZxYZwsJf3duL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5io2Nyh6B3mkZ3kjMGCF1rWsBAuvf88RF7FWi3DPouvdRyVFuQafYhtM8f8NNsASy1ViCrxmgp3RV9mYFgg6NyDc",
  "key1": "59P5KiGc5emrdyz9xKN9mc1aJKVuzi6ftwR2AkvJD5qWV7CzBRVpvUTANuBBR8H6bgXCuTSZoUceBDSacxHa9yfG",
  "key2": "5YvTWufiazNFJZc34NjB9SGRU16ovi2BuPbKZ6RzGM38tAiz7YGHYVQx8xqdMJE15cCrUM4F5H8z8RzsBP5gSz4T",
  "key3": "4Bu1cShTMYNe8ABM1jQVoxi6CpqQ1FVC1LdA1qjyXUJF3qWjLbfLSAtu3mpdTFQJeQJZu1QRg9bhXy7ga5NHdKTR",
  "key4": "5fARM9SyyME5Tk5LNMrHNLHEPE3QYWis18vrGc7RebiB1VDL3S9B9BuBvzZz98Au2KgYWdFqZNkiW6Bf69nhpMD",
  "key5": "56c3Yzgwahj2UomjvVMpvya6ugdDY2Fn47VpdZajx3BckYz9k3CGDcpJKvSkhWjaHQGwPirWEnM58EiPULduRzE9",
  "key6": "5pECtoQdDi7NGv4vQiYDLvScWSAXoBKpYf4CbqGs97sGgKQmFhF1YZBthiEgxm7UrLw1f6NDPgRdW9dHEx2pbLri",
  "key7": "524cVXtPPF37cLG8yz2PgsqEbTs2tKrDeuGXChR6H1fPQ7rHyp5zYwHqG81rnPCMP312Z3DzW5gykiyimkNFiCQM",
  "key8": "5Xucvwqmvd2svp35g4n5aqdmkrmxiexDJj2kuzV7pUVZ51GTKC7FpK8EvKBWmZXsnqsH4XeTQ1D4XHT5aAFgEj5s",
  "key9": "5mZ8VUrUGCURuniLbzxWsWiYkfXxj2A9e4ZkTjj44UmLj9RVNbZ95mGsfTK9sYhtjpp5BtNY6g6kPR8uXWX4FwGJ",
  "key10": "d22kY3H6sobMNJ54Nd5o3MtDkV6Dyzvf7KUfgBGEJ4j7Y6iqsPzJeeFpxs4VwnioPEkxFSYHg96aBGzGGRudLZo",
  "key11": "2Vbd4wGGPXXCNxhRvJ8Ksupp5ZWNa2KLSiBYZcCTLdFnzLk8XNUbzA4LCU6Hi6kWu7YKETqmQJtKZhmE8AHmzJSx",
  "key12": "2JefzxCRbdxVhLZ85vJPuhYnfHMNXHdTVcWA2ReoePyxSFxVhYdHs445gNkuwpJwXw3N7wh63kAgXo6gw2VETpBg",
  "key13": "4er6fDJgREEZzB99tmzmvK2U3Bnxgpq3XU4RMUsCQe3t97PdmZTphpiWcg6h4MjrKpQnAYUiHKLTBaEbni9DUezF",
  "key14": "qrMy1yJjE8SYzwkqW9qyq6FGB2Ab8qcLc6vJAAfNSMP2NdJAgY7nMMSsepVNtUzHqXSt7bq1QpGs2st7bxX1AP3",
  "key15": "3XSCYNWnR43qUa4U7kcY3NzdshtfnYATUVya1J8ZerSPxDtS4Vr8UNKFsWjfg7xcRjdUv2mYwyYSd5Su3ek7mqtY",
  "key16": "3y5s4P2jx8DJtvCZ1wFWquAGjkGGpGvEinByDZBT43gZwypmWiv2PMWBNxeBWWrfrtfjcGd6WrTd49oYibLyfEmy",
  "key17": "FoF9rFcH6kotxTs3Lby7Ygh5ChENSuuauNZagEBeDpKYBsEAF6KTD9WtXcQsnxFcXbSYocT31ZP74HHZr8E9RSs",
  "key18": "3M4iaENwbcBL7xrQaKSGrBrYPJC8mbvsRQeY9MoSKU9TPq8Q61CzW1NARX1Lz8QX7VRY1PWdrjK2oDXTCXth43oQ",
  "key19": "29fXuJmbGkkaAf1i9WAhviDCNbBwsRUgkEhFVVgV7gVXE5fSaqFhpAPYiHK9HD3kNNYFGf8sjGcgMgiQbC7w9Kun",
  "key20": "wRYNq8TFyBs2ZBpvs7GhmNvhpVEPHuDCZmMqUrUemHum1kQgVMHxLh6i9UcAeoWMEpy65UUzx2N5LsBmzDWAmp3",
  "key21": "5EEBZQRaLh4MNVGcjHXDTabdZSvNFuvCRHWoZteLjGKNz9Z7T7DrFybaw1mqXaoynS7UkcVnLDecPNcDhHyMQNoW",
  "key22": "2kCDT1BQxsRN3nCBR75KdbMdyxpmYhdahYJmeg9CYjFMdN6BDcVxA2BRi1dWaCQCHdCuV1RxqdZrVVKWGXca1YDr",
  "key23": "277AFhw29m2cVvGdS8WdwxcqTVA86qvTjrHBnLRXs8DTUDQkywuMdBum18TkoVGFAakB568fheVLPf44qAp4tL4D",
  "key24": "53QkRNZPMXjGGXRbpvV292Q5ib9z5NoZaeuB9ogtPXmuu3KptGk8Ccy7ybSFH41UWK8fN2G5H2B4NbLanrYdzGDq",
  "key25": "3LPkWtm149WbkyzK3rq2YJ2abMstEyKMTo1NSAuksR6uFExMKKFUQUuYW8AZoznvW1PECMb18MuVXHMj4A5xsnqu",
  "key26": "2WFZQtDYiznF4M8cXJKuuKm8EiLvG9Dt6tQGLGVbmf6mTRzGNVQxBrg1cA3V5iQkenh5REc7S8QvyEw4h2bMJxs9",
  "key27": "8gZkKczGWLSjeyfNVqsT3N1uwtwZjZmh7oXMVJdedxTtnfteVpe9wWmmDFNJSB7QFmJ5GJsk6nLmbZm3bSXtsnr",
  "key28": "5DBrthXhDtT98WPijvDMQW1aDVqGAtVeGdyUXo18hZsbkBMdEiNivteRCj1MvtgULPUenpyJvDoBcWapuNecpomW",
  "key29": "5ARzCUJDsD6AomwVCPgdkTZhjQf5kKu4SZtArftH6sG28s8Rq1zhJbEYttkm2rTtJ7NcqEcSdav1q4afJ2sYxoEV",
  "key30": "3vrbn1Qz6LC1nG39MevvHbAwjmjLJ4fFYbpD7wmP1Zrt9HNkTsu5eeCPvSxXRUxKTKSza9uFrr1rYfSp5cypMX7S",
  "key31": "4wY5XMCjE7ohzUb6GFhq5Z7pjXptGC1cZRgzyGunfHJAsHyLSrVexuNYSaxZULGRnWkyQCWoxGBQzC2GhrrmnWJC",
  "key32": "5RrS2KpahB61LTNeU8vpwn3JyfuoywfFgwdtTgRj7gr7W1QJ1AvVXKFcHD59DQW9MNFs7HohUzFLzNtWbXkGRww2",
  "key33": "24HPcmPsy9C47KwcorjEYiF3xCF4EWD8vUyZXMpNABn1MDk6XAH3rLMQ6sztapUu7Qhbe4L9UVgXFCFj14mWhSw9",
  "key34": "5iK57RVvMajEM3B32kHjD2BXpNyKMFBEwusWwd52DjfpAnU7bQguT4vpKVoF2KBbGCEzqv4RCv6TTGJSUV2Jqo8G",
  "key35": "4dxUzvff4ey3oB7saGNCyyFuZoEggwSsgtzkRKcLHGRrXu4TSyweojnJLurU9CkRTUx5EkfnDXX2b6wx72jszt28",
  "key36": "2n9QcFaEwS8XLjEsh7d4ptRb2F6DoGHRjNWDy7kYhwNQfNTGpA7j5aj7yCQDKgdxZiZWXvzA58FWFcWSDw84Y8tL",
  "key37": "2YiH2RNW3stti93UyAYWKPXAJ5SQxUNDhRtokdKvkzViSESRsnbjn4Gw5wayCXq2JgWrLL8W7PLLgTFphCFgw9Pf"
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
