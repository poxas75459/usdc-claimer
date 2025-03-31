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
    "kwYrZ2Bkjk77SjHk8rCSrq1wkx4nkeoRn1zBNLGtebmc7AqR1BcM6vCUPATnob9ideAEpAPzyuSPpN7Mp26BxVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CiTgZUZfUyzVPUnVwWZxN2t7Yzhh3VgV1LPRkCs9YQc6TeCEzCe6tXgZkKN4gGD4p4tsWpCYGLnuQFf4Ed8wkur",
  "key1": "5G4zh7SMbZLXnPvHRryZywXrVhHjBCTbjfDdBsxBAuJ82E73ysew7AgFUMuvQEbSxt3frgHgYoVYviCkWgcyeZH7",
  "key2": "5dcwxeVqbAKxpLKYcioafqxKRDy9Lt5Q33A61tRFz9RKP2iqNxYKUE2RxVNXCja2mGZMZ7oJG2fP4Gj1XJhLj5hH",
  "key3": "2SAeHzfqXYwRk9vVKvWPYMdP3cRWY9sT2FjE7t6rGeLWsppGVQHmLPoE5rSggHeMPwJHgxW99tKGR54oca4ijB3w",
  "key4": "3KGViA2MCyLQVLMvY3FNrde4sA2gxzXb64NZrbfThqfmzbt5FUq5q2Bsb2u4XytAECEdmg9Lhnb3s2ehLDf5Tbxc",
  "key5": "5ZpiVUeDghKivVyh5aVjbd5V3XnJkBRNG1M7MRZMxGiZsFHtKX1zRazN9abUDLoqaRVLaMc24yiyNpDKN3rwTTyF",
  "key6": "rg3x4ZNApZJyLCSLEcnhuRHeNPimrJuVKtEpUuVFeCW1oRofd7bRASHDaUDm7VmeA7cFmvuUWyXTXUpkNkh2QDb",
  "key7": "3SYLvEteAF5RRj9my1P1pYSYnKcpKBPnLWwrEB8Ai8o42TsFQcxaZYgzDeFRzxhxxNWv5VEhL6QigMrGAuqrLdZL",
  "key8": "2MZ5bAXyab84mWn8MFMxUf9LcNEkPzeouSYA2nxA8x5Bc2S9Yt2brELPtH4u2EgfYtbiCRcWYiTJBQboSpoxKPNr",
  "key9": "28tYku4xma4SiWZRyFvQqmmzKeJrwhnj2VnoheFYnwWBQcix95a4WpREhRwahwHpYNnJaoyLgdCKcgE3C9wT46Tg",
  "key10": "2k8pFSYzPvqFgvXkUNhrN3GSxD3hvUaMtafdUYx1ys6wyEMPFHHUubJAa2iq6YVZrkcyBqpXUQMj58BhHyZXzCzm",
  "key11": "4Ntt6kEKqfg2xNT3KkpYE45vCgE9Dz4EJ1j5WEw2cwbcU2UDKPNcyuerfb3TBzXz4QzHv24JKzeTioQu9d7DHh3S",
  "key12": "591xSetCov18xjw9sCjYDcccgJg5QgydzWMCE6Bh8UPbdvZWAwr2EbDnyRH3NroTpZBAihBf3Bw5jYC8AFdRef5N",
  "key13": "5e81tmovmWZjZvcj6ifF9UYVV7CmP8chxQV7jmTzLenLDcpKfHXpbmME8FsTrNT6Q2pXiV66buZBjgaZfZWdF9f3",
  "key14": "5yp2VQdhKFhfZhLQFxtXjXd55aNAXbQbhEE37btLGC3nSXMxVKZY6iv56yPC9PWuo2z613JuFB4PUkDA6dKgsNcw",
  "key15": "2A7qweEGrm7NNsJSb3C7NwQEcPDdk6rQyo8qAbU9DPSKXBnsuxyBSdZhDbEZLKmtro8CvyB9g7q7rwEbdqF62DRM",
  "key16": "5KjhTCpjRbWQa5gYZzJEx6FtdVK9drFW6gyMTabxsdz1E2G2URT32pWh6UGaQsxKJwq5FxnWZ6YZ41Qjo5cqjHcN",
  "key17": "5GkytxfDSTBSaknbBjK2a7RzqcQcbNVZbutcpcJJFPbLbczWvhj8qYNuvtUrVJELtxUh4ecx5xh4KCq62JWmprv5",
  "key18": "74tGQDq14e7MrxKjMs9ijspJy4TxMQWVfGgKyLHDMKJSDW8hEcsmBXAYxwEX3gVCLbk3eVQmjnkEUWd8mHyLDGi",
  "key19": "CoVu46DnroT31J6YvX4wrzXZPZQB1iVkVjWNtbejVVfpGScB2pgFar7SQfXHeGQA5xmzgX9Ntp4SeksosnmGLUc",
  "key20": "57nMviYKFu99enqQUp6jhuHjiBj58eiVmR5gnLdGkxwSvXWkqttGqGxB1s9Zq8cubdUZLJtNroLYK9NcJUgW7nL3",
  "key21": "2wz7EiqdKXtfUwLmAaZwrwvcZZWm9iKNWcovW6WDT8cQhza4kyTG96Akma4FJWjq4NAmY54wGvLH8pns9z3Bq1Je",
  "key22": "5Z6dGrEh7hooaiv9npXe3wCXvvPp9jYgetjo4wmeMbtXDfBzZhk4W6pr6BbEbpa5XrCCT55sHdCNfRAq3fiXLLa4",
  "key23": "4EMT6WW1NnZv2kxd4CcuQ7FnFESJtWRGZ5FQFtrbHszgLzXrkp6MiJGihUpiUV3Sok2KWByjtJWxWF9zxkrakjzq",
  "key24": "2GSEswLnW9wp2T1pibUArSdodoJCMJbWjvV46mhc23FFVwBdEGwkw5bVQPxp7Nd57atCQuvEUM4v2zRLrVeZxaAj",
  "key25": "DnwVjsq5SCosobht9qBiEqxozDTnoo44neXMFhPDQgRNpA7jXMBLaA3qrexAQTXHNFwSNHCFTcYkZNtJdWPSDJi",
  "key26": "3H6SMkLTprEYw8rkZTqfNhZjmoc2kBFzab2yJtUfy5izp5JZUuMCz1tFimDQpfds9T4BcNoLrwT2MjGHPNAAeqpo",
  "key27": "3n5YkPj2PUfyu4RWeM3bLjsM7eEB3uFLPERmfmCcJBJDsoA9YBoUfY91xubssXHsmNdWFmehVUdVSCfWGpRX32sH"
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
