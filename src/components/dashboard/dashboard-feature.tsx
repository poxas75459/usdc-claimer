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
    "2uKWnoPxLkS2NEQmQNLRxzkj34kNVYiLKvoLh3ELkEDiyFq1pHdntGL6PjjuC7MVxXNxJMfEDNXqtDSGYorCLbPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk73zqWqvZm53LC4RYzX3bdD7Em8YGrSgUVmW11fZ6WC3v35eTnYdVECUu6aJHE1b4dv44FeANoHNdkZRUT5KH2",
  "key1": "ME8d6sQc2SPuNdjCy4wrkoVxfLTQD64L2Nmrxb27LaCXSj4ZJSAjnv2dziSpvpjhMpKZEQbDLTvPeFqihyKzNPS",
  "key2": "3annDLTUUasVu2yD2nu7w9k6GGC7HUknP1W2gq5om2iZZqaHHvS7wV3rJavnhQiGsoVFjgKMWKHAmCHZozFZD12L",
  "key3": "4cfW61aKDwQNuSBmu5PPKSjJerxoW8UPvdU7FVuDK6Qk5wpX33ZpuZzdjY5aFr6DAfwDdKkfWb8d28EoSw15mMSt",
  "key4": "55Bgjtxz4ppbEarnjMU6S7oBvXGTBWEUeqFwZ69iCgfRm5X4GYqqbmQabd4pQiMNG9MQB9i8tL8vbNi64W8ARkdi",
  "key5": "3Q44xYB2gVQqrHHhXtKfy2BJLSrYjKv3pGAkzBJqwQtfN8DRT7MSS2zQub6iJZ2b48JwUgvdgHcvfacwtELk2g2W",
  "key6": "9ezH5bwacjGbYbJfaeNA1zKHn4yRqiTKYhhUzAc3hffqFWFnfM8mQdiEV8gHSGnDujHEKyc9fesjVX8rNQ5JgvM",
  "key7": "4xzozMmbtYApEqokDtgdRUA4gfyR7tckniyCeZn3pmGaEH6LHpVH7b6ms7rUWgsbrF8NwMDbijfXnYLQR98sM729",
  "key8": "4uDN6XTUKGjymLXj65eHGUiDntBHxPyKey2vFD9D1Gn4ERY68vRyYDQz2JFF26EGCVLq7vKV9VaZ63zqFV6jak65",
  "key9": "3y6PShiDGqLVARhiG5SdBphT2k6aD442mxKhmpPUeDST93zGYv2Ch5BUxLnghVoec3FzKJSL7ZLdBF1Zo5s3t17w",
  "key10": "3WdRW1kVJNdi2uGhsmnjUkPVggspSjJqbNMq3745iTaovhubmrQ2pxKanX7B7W3fUWn1GEXANSwHZ14XHwsBAQcR",
  "key11": "njLYL7TXAvdBEASsG4va6PeVZibcE5SoEgvNor4vfs61bsCgvvvRQMsJLCSvKW8yjK8BzFk4g4ckpUDTNsiym3J",
  "key12": "2b2UuY1STu1f1i4U1h6kyRiBzBB5obNGSB3YtvyaGyyQzNUwHBeD75dfZY8ZVSyFq6gr8fsszwZapzvDeBK67cJf",
  "key13": "36cKU1juNzFhaw3BrbBFuAd8fAGJ6kyPeArUM7o9ujfrgvqAvKb217K9Bx6CoKRkrZTi1MgEvkSwsYvoVsZaKXkg",
  "key14": "uXeGWbcUPBdeqwsRGot5SbqKpKygnjCZUqbMcwNvxyxc4QN5UZL2PZr41dNNc8XSFsRLc2xx5Zc7VJfR7wP64Bg",
  "key15": "4e1ZFsKKwwvx2w5UijHMnG6WGRRvKazY9jBA2snCxaNWrUiLGUmx8beZ2VzgnKCHbxDhEGdFAVGhh5fxLtrKnbYS",
  "key16": "4qvbTLewXubpUw5uVZnm9KRwMStnRKdEvSUsjFExzKCgkjkyNZUBAxGaADXHNX3mRcMLxD5sRWDcGKDsqBi4NgWa",
  "key17": "xBwCTe5BfN7z8K8eGrtrFK62vQ6kk8WjQg4BfqYyb7UyvuXAm8C4CUZFFhiqEKGghoDt2pu5CxaT61B4se95gfS",
  "key18": "4WLNYdgEkArmmy9y84oS1F29Gd75Q8N1cLXuM48V8Gp8VAUawnbFbv5fLwoWEU1vW9EP2FUXhtEmoyQMGNdz7q1W",
  "key19": "5bgjEM7Snx1rQ23GBZGmH34JMAPupurw7YnHbSSRpj7EQqge6yVi5TpCxU9VfuFsG6qGXonpQbwFFw6xSmAc1qEF",
  "key20": "3hbeNo7ftqyU6XMUuTojd9ggtFHaafxicCyEAJVrzgMTNiXZNFQdNks789wJg1maQNgQXpG4Q4o5dqeWZ1JyGhm7",
  "key21": "Dr2bBzp6b6dEkXNzBio3qGLTe9UkXVzZtyFnDtpHVKVTHxMLVPiJdwvLby6Y6pbARzxrYMC4TVuhtZq5W22jzxe",
  "key22": "4L34vgvVuYrHn1Yf6hx5JjZSsVn1f7CBQSRBifi66vrLsPHK43bDRgvP5VXUZoHCiY4JW93ijPmPaghMSqXizHhi",
  "key23": "2NrB6H7maMrX42KR17f1oroYdUdXcKbvSVug32JAm15eimG58gi7dFpXcueUjjhHEhFoim6ZSVoEginTYoEjV8Z8",
  "key24": "d2do9ovYU417fS358xsQXLxYqpC5YBBfC8rkQLum1pgZEkiiYDdGiaeiBf9twMGiLGccZRfkeForuDXMTA9RgU5",
  "key25": "5oWwJCvEMTzH9HVi5FzZ3NWWhBBBEEQWFr2PJqaUmkb4EteoH6PZSqXnGyc3PjNckUoZHo5v7LNn7CKQ7e21whtY",
  "key26": "5bgoZ7oiBt5gJSSGHnPb3uYorB22N53KAohvZbqdFWzUNeJFzryiC51Lr6RF8J1kjW6f8eAvggqLpebK2xm3zoFj"
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
