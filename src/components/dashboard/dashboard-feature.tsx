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
    "5fyTeHKrgfDSmF6vWwSTAHN7VbXAtvpADh5wjYYXZu5Hr4pXrXUZMVqZvyqwCyVL5LBri2nuHofCo8PxG7FRQHJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yuGjLZqHcZjQ3Gxs6KAVS3VY8ULuuCBNhviPFjskcfYtFvMsDY5R9bWHpkwHAVSkEyGFyJGM9b9B8T8RT6q2CjB",
  "key1": "3J9QeDXqhwHvAmfBJHoUQffs5ru4SPfCi4RvdDydxucHMUh2nt6xVWcG7ZkeZPffamkYxtVZ1e9R3LjS79oXLrCT",
  "key2": "5GCTVRQCAHn1PkUtdH4SNJK4xTJHbSV8YbaFz27KxEqMGBDThgxGMWXF1pApoVZJqB1m4FashUqdZ1oHeewgWSE2",
  "key3": "3fPBsvsaenwj91U3t5gohN6yBJxF5JfkCFLTfYbpZkJEX4L4Qewz3DMbn9GrkKRhXRaBw6aTy7ed52TeXRhMALCt",
  "key4": "5BK5ZQN1hJQNntydefpBhphCASHBghXpbzGqBh2Nw1qGDVSeCmiz8P7wWFAGTmTTTYSyNXsgQ62Qze2JLGF5ZPdY",
  "key5": "2qwYDHFUtRqx5p9k6QHAXfByEX1G3L9ouzFvXxFM3EsHQFGXzGkftFx3M2SZvNo55Df6jJT5A7N9VqSqc8BoBnFU",
  "key6": "5mkpSyLRvDrmTPfLi8RFhUP5NofNTutPe7mfTgbVXEv35LLPbWFzz4xftCF5GSffwrsETjpwKUqRdVorkFQ521g7",
  "key7": "2gP7awMRfnW5hydu4JKhUF8MMBB9vKKxSEBjrGhBAXfFWe5r73wQnGcgi3Qi7gLsBAgf1QdC3Li3uVwyk9wnqCD8",
  "key8": "9mBDdrWcv2egyAWcVNpP32dxCn6c2xKa2mRa4NLk39MTACLhMyKKNiSGfac2FDHMEdavwKbNtyK1Sh2FbL65PoK",
  "key9": "5hTnYL4tLm9hfJF8Tx6RhZ94ye35zPBEUczFj92UdkfBxZtRjkZYhnadt8Sp2wxtfdNLDJwK7LjqNaEh7oAc9FFn",
  "key10": "3mT8XP2ovKb4qRJqXE7NEvGHBb9fKGAaAZNyVLhijpAw8oh2jTNWicRTQxwJ9nQXdxEzD8PM1SMmZPdcBgHfWJiQ",
  "key11": "2WxXeyWB1vNZHH5odyWQ7Yjux3v8zcEKrPGj9UPQbZdFNs5T5xxieduZhfqp7W6iTPgMLejxYDmoi6RaPjm6FUpC",
  "key12": "3iB1AjHjqYqMqZi1XPoh4fVqUXRb5FYkSH5AbwxQ6Bh2Y6RtyUvFsKdTbDf2HqULCWHzuPBbFCNVWMpFkrmLMZW4",
  "key13": "RRU4kvybDCge4fYVp4EPPeR9NnpGmH1Wojqz5xTR94g3p9oG9dEiAQz4HDzJ6LkbMYzo1QqzPF6WnHo6ZAHnjJN",
  "key14": "5hcw9TmuZhqn1tjNsPbvCCKtajeUdcsMV82CAbEdVW5mrSWi8YmRbhx4yuHxWFe2Cbkm2nCvTHoYCPcpdWaU7oZW",
  "key15": "SEvrtMzAhGoQTKkeGEJBpxfL6AkQsvzkemDQi895NwWFosgHDURTbmPYtggW6yJeMAiRCBhfmXRJgrrDTtLEMX4",
  "key16": "5ATiq2A1icRa3uWxxQ5xULt1gbYz4Kp4TWReXjr3raquMujEMnP8yZd1Bzk3ZLeW1aB2tRd1tRKyZw1EYSJ62hPt",
  "key17": "4pbDUsUjr361g5GXpwBEzAv2gAAXMUEfEuri2Rndkg1wTJnDbqejkZ1r2D4yzRMVjSZCEGUoNizTyZuHR9NGVkSR",
  "key18": "2idBzQ8ZVf8tieHDoJPmeKYeoFajV7phxruJp9LbMsPDkm7aDrWKtJpHhS5H5meWYB1nxhPEZo8uijHW6ZkzgoPz",
  "key19": "3hvbmirKxU6b4MjXs5DxCaAxGTjU36cMkzKJjbPZYspsJ8HX1C3ysALnuvRpvt43yJBX11gxjoGA76ixgg7WEWBF",
  "key20": "51vvh5DrphBkg89PRawhQQViacmqTSGJB4St9326M3mHQNobJujmBDvC8iFFm9rU2DvE5TJf5NuzcSvDEMpQncH9",
  "key21": "HxtV7ZdeCopn9J9MT8gvBF3ALsG3FyGXjUgoJRmZhjJWds6cAVRsALKDY8skgzVyVwQqKCG76xDPnP7cjTVuFo3",
  "key22": "5gNFPNkGSPQs4CnpwwyFCGKmeC64F7GjxEodkmy1qnEE9fb1ER9hxfQiLvv5gEc3wxbxzusCXSUDhoVS4WKmw6y6",
  "key23": "3x2yJv8Vc7pRxdLGompXrEvMEMbhq7qtwB9RPQSDhhCVz2c6tYVPuU7tnjbbcTKmW6sv6aJDCCivR9GydkDAQsPQ",
  "key24": "2g1xSReN6PkTPDRF4Di9onZ1vYu8G8sdkXy1QyTSqAu5izaaSxnpy3adkYvDsohztgBfxW1wFhfTFM4exvvd4ADS",
  "key25": "4J7aNLJ8NHsHrvXmw8KgvTc7zL65tSaZQboBAhrYsHxTVhuouRb2gkC8R4sCcNep6Q61niUrs264icoXF9Fb62m9",
  "key26": "46SMy9Z1Rzpm8B6JPnQYzXhfkTVDCLbBN7CaCidZUNTmPVwiWkXFAyGu6hvY2CdVTK86mNqQpaVezaQd9dJr6VtJ"
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
