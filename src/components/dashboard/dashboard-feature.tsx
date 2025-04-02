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
    "4Dd9xbA1LMWyKBqQn4LGRTwjf2aPqMXTRT2WarnPwgBVPVK9f22sU5npNJS2Ldyey7hhtbEGZwcaUF3Z4eLGPoUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39HQce4EVbzWXyRSi9fd5WoMvUZuHkWXinQSnVzA3E49NJPCpA4oQstxqATngJhnwYw2dYTVgaFattFYCkk6eQQq",
  "key1": "6e2Mj7Fiyhf5sWcbockuvHtBfYPTbSRF7UAW9MFbo1JqfkDTFty1kJT2Rs7Q1kMK5LBCRooAcCct6wLkZhy8Erq",
  "key2": "2nEHtY8ZJy8rhnLFXGYoWH4v4ZaZmkD3ShsDRhnjVhsmDYu7zxDkxdTeXS7CzE47S9StvmF5SAWTX9KR1cfoKMET",
  "key3": "2WJVDzuNaPtWyJtt21S4545L2at3vmKimyevqyvwsHEPcdZFB2oUMeZgbx9B1jQCaq5o45AcLKqWrHmvEg875nuN",
  "key4": "38G7Pkz9fN5pQSYTYvQC49SjEaA86mveuK3LVwWx7bocavx58Y2v3Nyv7ThBdhofwLPcHLrgqx3h44fHQEZczFHY",
  "key5": "2q6SGVh5nP3Y6gL1jTvje525LujD4kiz5dMVJ6wY9GsMuvVKH9DHH3FmAVGPBnrjAnpdV8GKmnHTHJZdWe6c128i",
  "key6": "5eHNfotGLwBKPTEr3J4aj9BvCyfaf4qT3WLMvtMvE5KnfAwP3Z15cKZeMXdLTPsMjTVAmqhhJQapiE5Kt68Pj68n",
  "key7": "EkAU5QwJ7zsem1rcbUqdrn8LBbMyaqCrE5rYEHvzXvTny4m5oPwTxRw1f7zgUqXbutv8ZKWacmGzUZbF5Dqdxya",
  "key8": "spXc8txxWyYA44fvjin6rbyLYxYZ9koAyCRhjzBaiAPaWWxZG1PNSTS67iEvuVc5xjRmWb9EvkMppf75JFPHymU",
  "key9": "3c3ztuA6zKiWPJTYUqzb4fu6eCn6inZyXQKh78NX5dud4xzt5xzYUe5Xyw34NMVwhAG3q7nW1WzrFhbBWRiEAWdW",
  "key10": "2QMcCNkFy6PZVqXCYu3acWf1bWdKCSe3BWVcTwzZVwatxWvXZ56aQ7fSAmB3Sb9byn3HwMEDGKMMGbqdW7w1aong",
  "key11": "3QYskWP63u8yrKUt5wn38FiT7thaHdCPyCnHhgiRZej1wBMiT7ynxMJfwQZ3xVpDvdBWS5Cmas961MmvVfQbGTbY",
  "key12": "5xxVftBNnSz1buDcL8wDSM2DGYP3BcUgjuQS5DoRhwbok8wJGf125sjMbhkwF3E5D89jfs1pxUKugxqMPb1SREqu",
  "key13": "29QJ4ghfxf4E7U5yLu5EGTw6xE88dbHY8QXSJkcmehyVNgM7Mm6nqomqERVsS89pJEjCagEYGZaBcBnD2hgo1VpD",
  "key14": "4AqNMvMvgc5Nid3nmxH1jUD6u89Wfgdjt2YRx12cU9qk6dstF5fRQTnKYdJ98wkuKPxKf5xXpiYwbqLwBbZv8DUU",
  "key15": "ZSmgnXthUBiNi1AkRd5xBTYBLBpFG3R5wu8LazMTAL4eEzpVwivipFAdDnP3XA3ufeFjkQA5tfhMj7VRHMRE5kE",
  "key16": "4ZQGpE4fCYfuXk5a3jQQKtcRNEpPP5FJVVUPbTnvASPZy64YR7UnqeQT79DJPync3KXxNhBUwc7qhVCxx4ioJ4oj",
  "key17": "5g2nuSnyV79hLzFUQS4V2hKi17UpvwTyH1nFoWKarjHhi2oiirjbZo3z4rujMeJjhAb2tE1BVnm1czmARxmKy5XB",
  "key18": "4J6fTfg9ZbjPFvMf1pfxQw4TEZSQqWcBC3ci53VB99nnaRaaMLqzDMp4Fva66Hcn6R7PM4CPMPuK177FLEAAZ2ML",
  "key19": "5c5vwhyrW1vQ8zFGoaMtaKX4Na2hJZSmZc2BrZD2bsMtws7A5YoHE8TEKHxuuVUpYVh8qtEvsQJmzxhSg7j464Dp",
  "key20": "2xVVU6cjTKRRNX9XNDGMhL9vqd2uxQeM8XiUwha3gJB1nLaC2MLcVjfa8TdBHhgV6bB7ww3SCftiMYE7iEoafDhv",
  "key21": "41daQEUcYmDLL3yeAdxp9KGgQU6Y1yPJSyVf4EkhdADmHCe6iixUAY12k4smx4vStrkeNPrHx1EbGdgCk1vizrn5",
  "key22": "66UbFWUTjxGcaLhJUYgAFigfvGPcZd7VdoG1Ep2HvjzjuocKVdXbsfkAEVAGJzy2U5G4kh42YroLZQhrCjfgBnK3",
  "key23": "vRdHhuvrxYu687irjwLeR6v7UJAK2ZFzR9PYRNFAhu4X7VBoQBdAe3mcApe3TBvTDGWBXUZQhfeRRajaKTxMhj4",
  "key24": "4oA5kWQ8WRp9Wh3RLr3zmPU3JeejYPfgkymeoTLzpSk9CuZXsXV4qdnsHPSfakmwYSPv2unBCReoTmPP3ENgSfv8",
  "key25": "2MLsHeQSGqmht3NQxeCPMzvSfAPTajAU3tzvZAyx9sY4h1gbNUgGp8wpg8e9M8sgskqUJE3neEQRfbibES5GsbgJ"
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
