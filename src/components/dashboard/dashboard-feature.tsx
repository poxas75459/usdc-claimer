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
    "3Wj9a99vZa1SELdte1vNiPsVxg4vC6uqBBiLiujyM8ZQZQPoXKGziZcrNrxAugVeXYLVWRDyPEzB4L1h6a8EM7Gp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaovpHxqmdZ5W9Qg3S4MP5WG6KdUuiniv4eVKkci4BB5ZdV4gHcq4XKH9KHExBQnfL2n7tbrmSWkZKZZVDpm5Rf",
  "key1": "6AqFKGPpZsGPotuCbU2p66XPTg3RcidecggMD2raziBRmekAJvFc24ZZno2LEdaQBWg1hbyAF9v8XBpdnuX2Gf1",
  "key2": "587KjWFGp7dHDoGzZtdkGjFm5bsaCUYETX25tmHPjaEMUcdGyfBCtFfg82Jz9WRyZeoKD3gJf62kukZHiwtFPeeq",
  "key3": "3iuQBuPwUeS1J6hmH9YgwKvnvD5es7SfWUkwEWwncmibVUw9S4LkQmVB2cYo1hyoTJQmVAxZvzyCjTLWfrkaorjE",
  "key4": "fWUvtDdWDgm4ULs2gBGrVM3KkkVq2wz3gS38L9ixmX7ZmES7Sx4bpsWt7puupuquwkC4zTvW7KHcVYBgFZkMQcq",
  "key5": "24fpnkTg9B2L6WpdtYBYbdHxxEpRBmHMUS4144Zv8uXJibW838ZQojY5xjFGMm7qL2fn3dmsWWrrU8WfwtPbfHPk",
  "key6": "32YhLRHR4zKv1rpkQFhFAsU8C9BgzcY1cubPpqzmLC9sv26ecyDmhYNLrbTos2V2BXcCBr6foYTQCkRLr626oymb",
  "key7": "4A7eWFU2DHuiBpJ5tqxYsSZmzg7P1QPpvKPPJ58EtG9qjao4RfWP2TWDmKsJmMzDKfnJd2naogQuyu18g2f64DrC",
  "key8": "5nDYcwkmTWhy69wvFQ37ecZ2vhyc3q69w6KpYRVvyf1WmCMGBJ33NDCbWjCY17Paf2qa6Vk3HPpjn6Kxgk1nFhG8",
  "key9": "2VsUq29UuLpjAdPhtQvJWbrFZV9w5qS4gdebmSy9XTAcquKtATRUR6qEBG6mF5fap9rpS8LvX2td7eDRYNJbjfwM",
  "key10": "5mAwgrcDBCXScFqG8BaeLEQwjjYfMwsccCKxjNhZcGkwSRyHrLH9C6J4cBtAAoqHvjyGJ5Sjpw9T7LdfPdH9Aq8h",
  "key11": "4Ty5MgJvLxazuA6K8U22ELVy8dfNAUg9zzA6EedqEu2PsdMgUM3Keg1oMqFvbgBehN1EemPfzJALk8TqQPjv9MR6",
  "key12": "2cFox4vEwYNDFQxERWHNN6GovfrmZAvxq7SsLiTpyfC8tcRR7pmaRok2GaVZE4mEgmWe1vSBVeQTXCh9x4AFcsoL",
  "key13": "2DLMN2BZaimdk6VggeZpaBXsjxhBEFMoKfTp1oApDq9q4aKtcqG8ygBEXGxbu4YqWxTu3hmYEX7xSFT1TnWCt9jR",
  "key14": "5VHNhCKm6xvfeCJnFHMQaeGDb5qXNET8GkxHE4nP9umvGuyezSY3ySEwGX7dEUjsmnxxSzZWs6p4Zu5sd2QBktEY",
  "key15": "4e3EEYxEVLxyTRtcBEjgSS8ueGvzh3kKKFz24HJX5eQA86DWNtVQDjMzD83z26AkVde1KLXKANcGctQ4G55z7GcU",
  "key16": "5cN3jJy5vCL9oL9y9iUAxik9XvVAvFXCpgRVVA9cN1abKz5A62HR2aRnbS6uMn1823KUEsXmWzkX16G8YPtLS9oE",
  "key17": "2wR7TijNNaRBqpWCrzArGDWW77EN2qogbfyDonhwR7fTpTRJFUypjVVxkWYh5jRHKBwNwEhcELVGBR9gt78of4vQ",
  "key18": "4PbZ3zPA2MoRiqKmUjGey8Jpp65Am7cwBNtZxjnWmJJhyu6zPqQnLdwzYd5kfcxdfts9q1qGi8UUryy3AzF4r4cn",
  "key19": "3fQ8VS67MTUGiKWKMBLZ3auxqoRsjfDcigKBmKWDGzEZxhYrnecqkuZnPPC5A4QAqF9DSyu1fXx9Zi6KDNSh6PAh",
  "key20": "2EC8zeFRrRenzc7zubvH2vCdDXNrAS6NLHdoNdUL4EieWHE58rpE2RtuS9BFB1UsSSyG8qwifSWLHxHCuREwByEd",
  "key21": "3wh8q4jVhrETQvsfBxEmqDEwYbVxcBDawGeFi58Zir4bKopEzTiUAT7jgLjGpZry297bvQ8QoHUdPeznTRFPf9is",
  "key22": "4o7StfDKPJuQg6Y37KtB9zutsN6TeZ9ASktY297R4tADdvicp7AUfNdtcNC53pHHpVn3GotWszkPtDtCcdVnNvLD",
  "key23": "8MXXu8r8EF7k9rxxaY1S89mtj5exRkSJgEN2JAzMc9j91UpzYujG3diohauE9A1RruVn1zp81o6KvFP6gpwR7mv",
  "key24": "27cCT5ieCX5GXfQfGe6td3KpDp4xrSVKA1Afde5t44NVHDmsucaUdsNc7cNMBuNRyN3iAhYLBTw5Q2mdp9zt8trD"
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
