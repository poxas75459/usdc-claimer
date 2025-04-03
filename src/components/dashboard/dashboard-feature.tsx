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
    "57AmMJbuWZZTRp5cnRkobRRiZEFT9JqsakVpzSW6WMzk2irJNWczQ6bBA6EjTXoT4GrCGoQ3P2cGZdM4wA1JtXRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DwBHpygbS1Vm7EK2GfSFrM4d3LJwcKXyrNzdLzQFS34sAuWCMDq4QQa2DR7wWW3LyHxd8BrpsArgtTfGMWMNgnY",
  "key1": "BAiMzjbgpuZu3sX52LxAkciXQTq136funxKDVuvvSh6MJctdtwJuQWJBqs5UGvaqVrWD7Renf7hjPbvzQgGxE3U",
  "key2": "33yK66J247Uav9LmpxTMYp5Bky2a2QDTb34sbmo6WoCMn22CzRxRZdZGGPYfgEERAncyJoEjXD9WcLFPjJrB6rH6",
  "key3": "4vNTL2uiq9EYUtMRsfwoEDn8U9Tezgr2DKNeJLYcXLfQpxWTEUFbkkycZho3xDREzyJ16Vgjeih26rFZXYpFRSmx",
  "key4": "27pWX8dCZfRX1hoFkqFFcpZ3PShQvQjP9xNXAC5WyNbzappkmQ828RWtQUDzDha5GcxJcAoDD52e6VLFNDCVkQCS",
  "key5": "2v8qXvMqzfbiNJw4zB2A16YpwSGgmwnTs5x8sJi38MkZMuGJ1x2vMwWHM7THxHf8wusyp5F68sTbpRMt5Y9cXxvp",
  "key6": "gRPNrHu5pF49cakcqhEA44tzvwyTu74xNNERVLCDp1LoeyBTbfE45K4wbP5uvAPMoTA5Ko54MB78FaTbwkAG2Ai",
  "key7": "EciF2jicPXSduq3jqRYi5W4Tbiejkj959Ke6EVDxmJGj2jR4tGF5Kum4HQM73LqXfa1jXWQ7aWtpwVUw2PgFmzX",
  "key8": "28MbJjJxyH9Ae1kmaYasqxkBTFCd9TjNzHHBvuVYMkUnaj8GPQDGmhWRi7RuVdvqNdjqiz5cDtJ1Z2yYRdFuqjm9",
  "key9": "37eyMXzj322jE3HnV5kC6CqvK7eUaJW8YtWLhtBTWkQqEvsLVceVRDE8FGNEmkmwYPdpStSbpYQBboQ422XvEDC6",
  "key10": "5uxUyGH481tY8PKLzsZ7nPh9LNmTpXBRgL5ATv5j8BQ3R8HSoZrGDX1QCuGbo93ZS91SaMn6jcbxP3mFVA5Bbjix",
  "key11": "5dGsHTEoQtsqPtTUq42rjgiHSAB7MAeBMooi3GDM5jwgTPsupi4iEhZhVkJznymmJcSUoiQp522kkhXHkA9Fjsun",
  "key12": "5fhAFQgMkrxy6oxWzMGKgGYfnq4CfD7wHP6rdm5iVmafsbtZDzV97r74MocMNbByrFWLqBTFKqTi7qqoquL8PHDW",
  "key13": "48orxJaTPjTafVnnHSn5WDinAgzgh7mL6b3PStNjgYUDh4XFzuE9ZPBgYV93vjAs5KMDmddgHL7wJBya3yC7n3ek",
  "key14": "md9Mk5yszBYD314bDSWvcV1Ke7RvAy4R1e3hGDwGu8UKMkz4JPJFXeu7VKWSR98LNnKqst7s9qBHgXMReQTi7kw",
  "key15": "4aPwVmLceUrB3yhE9Et1MgqNJNzrUTnUSYTvdrRQZRotS1f4HZv9HysxnBL7p4eTJFXirzupjACVFX3p6sShrBhF",
  "key16": "56gvdN5xh6YUm39kp7wa6jontpjA2GNdYRWhyB9ah6ZX6oUdKsmjmgSsJg4xHwt469SHNwE9LF3rjwXnjVw7NyJ1",
  "key17": "26uYw5eby5nvtG6X2HVVfTdsGdG4NcpxTGGC6QdtL49uku6qNatsJtVUquNvtXx8iofbJe4if28dvG6p8abd26vW",
  "key18": "2d2CppCd3aDNiBfQ8RiBaa6JWxJYzg8NtzDTcy6cB11FTrY3BFzGYCNoGtCEWTMFPKT5SYZz5WbaW5X5fXfo7Jdh",
  "key19": "3xWQ9ntcfUCRSPBGqankizWb6pnnbmt3CFKNMSjmBZwPDnuw9eT8LG8prBHLbDL4Uy6Z5TSChMAJpy1Z6746EtzP",
  "key20": "4KoMnyRd41hisVWrKwSV3toHmUnXDKvS9x1T6R4ABjKN6cZcy1fVcLLRj9bC7QoPogdcAyYXfkr1msU8hnsxw7D2",
  "key21": "5TJFLN5j3ZiFtTZovkgysGoNxKJa5uGBHrcjHaVGuqXt2PA9BoRE89FRAP17GsGnaszi41Wxdv7Ec4j9eCuKhAK7",
  "key22": "5DrTYt9y9mCHjVLTL4gg7ZfTRhmdsv3vQ1iUMTYuDdR4HqVk6xoZC4XhD8meNkJsbFwrLaFZ3Caz15MWTABq7Arc",
  "key23": "4z1KVdV1mUNErcPNZyBgEYxRapobmHDeMbTWfGYCZ8FcMMfFEgWUMTPR8evfSiq3cJyXDraVB4o8qW9pw11Yjgwi",
  "key24": "tXrhHHQwAvno5qLB787iixv6LntkxY1MoE8PaUZhizFQvT78LMyYQrHPCxsViaT8jJcygvY6bCrN1TFr5aJXm9x"
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
