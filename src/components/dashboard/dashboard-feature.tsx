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
    "fAnDNE3rD3uviXQfToLJ675TXNzrpWs7vNG4DZEubrBP2Xghy5Bvw3FEzckqLJA1bsDwaP1zv8nBKHz5xGKiw8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "548HGust3uaKJVVKkmtJ9ePyajZFrPfLuodi1uTk9rQVbFCBmhkLwJ5k4jyQYY5vURhv826DDFbyp736wvwEz8UE",
  "key1": "2y3ssicTvW9kDVX3V4LF3cZMbJVQck2gbrknJizeCwH6nszo8koQrM8ernGt5f5LPZauC8K5Z2v5P8CmyD3XShv2",
  "key2": "5LN6nEMjHF32npnkMDLPmwHKtYdeGzr8Y9wDtemSVFuhrTfY1Di5nUpaoAKdW4awE5ymaRbHPebcsrGyvzpYn9eb",
  "key3": "3wDjy59mzWKbwVSmMU9hsemTLnY7RyP2VFoZSygwamfAczErXKrC9cGy8eFH6TAbqX3RgZAeqyEeGbSJYc2EGPUn",
  "key4": "4HBXw7N53ZjzU4VCrCUd5pHSB8bKKJSRgSLtQEGxetQMNyModfd1q9YtyTk8pbq2pCDa3nV6rktRT16cdkvXcRzF",
  "key5": "27ErWuQxhaCZahiPoMcDAx3mBaUZGwBzt1GExEyvxUDFNM2gMN2kFn9as2P1bVhAzfcTEGCmbh7dHWgcTJ6A4ZkY",
  "key6": "5vL7uojziPuMwnXLvRkTWApHCXegHVCFa9pBTKbck1QisqJYxvdB5rdzXgqwyyLSzrJ1d2BT2KvH7WuHEjfdtbpW",
  "key7": "Nx912jbE9qp3Wk8JoGwUST3quHmt2pdZrTnVVQxxYSD5LXyoZCWFSQnR8WXviAkmd1gSzmogEzAzwrRqXN1rPnJ",
  "key8": "4LprrCLz6QkdNwUNJtaFKVPMoAce5jKNDm6YUX4aLC1DziWWE831pnczN28bCRSYD8xLYfyPY5n9dX7F4gNDesUo",
  "key9": "5xRZbCf3MSv2cV5Jxv2hKpUzNYMyLsqj6kk7f2bMZhGrDovgn8Qb6nzYo8Ra6WzmXEdt1CQ8wsZwhCWpm5dwsRqe",
  "key10": "3Ma1Wn9pwkTXSChkrTfgbyepsRJghTjVWsmRsKduscWKMRmxu4Vv6nkdyrK13bp3TdTgWeEY5VKWEpW1S4RcH3zt",
  "key11": "XRHrg2TYdaHRK3xSFNUrCiyrjUGDkbHt9Y2tcVjQWGxtsPGgMzpkGhjsdhAAMgTgzzyiGoak9X1qbf1zrjyLtam",
  "key12": "2ALcFUjSAA8qN9NE4Dhc5V9rscZbwo9g41vXmpHZJYXpo4szsFyi3AG7yoqQWAQ2vBzE68CTacGsNV2eGc3s4mw5",
  "key13": "4NkUNfVVe5mFuQPSXqWmyH3rZUSrMoFfMUFwJy2ftBDgQvMBwPcBGCXsPjbYv2J2sHDZyafGeLjEo5HEgxNLgirw",
  "key14": "4Gozo18sPSPFWvJZUoSYV4n3cB9R5AREaQdm6VimyAwciLd8eEFHVQZqXX3n9yQT5TdLQN3RNWtL5cPUJC3YANbH",
  "key15": "4F6Ak1bXJ9oxC5SpNZy5DoUe6PASfJWS1sLXqh3HwmQLE7yQqyPQsYya2Hc4BcbbSUJuRx9eieEgfgbUP3Dz6zjA",
  "key16": "942jaFzYPsB1fMBq8E6ssAzzu9F4dSEq3LPV4k2qEmLCkPZeq5vSXwb2mYmmapVMMjhK55nBkjoTSQSKhyxmnVW",
  "key17": "5s9Q6qX9xqG859pRPMrbhPunFufW2q7nAmGGjLkLjEAchCVVEweaxuifkrvwhfQMoPQ7nfp2PUAQFrfNo5c8yzx",
  "key18": "4GekndD2W5os3s8jJxcqbQZw97XfBHGSgoQjATg1AysmMC5wtzKjRBQJ2or7LzEKFKkLtvizYD8o7d3yhcKRhJnQ",
  "key19": "Psfg2R5fki2zhD4urL6Vm9Yh9iykPmUxYA7pxAKixhMo116WTD1fdLCfo4dbXmBCFqNGFR5NUdZyW3vUsnFqL9E",
  "key20": "2tU49RgF2o3eTEgF8wW2yweVabYVZ1UJsBJmE5oicKz9mREfD1qgpS8rwvTVfFcxJnzNZwxhXWXF2YKcgSjUC2ci",
  "key21": "2NRXAxfBo97byh5uUu5theQ7tY8YiHSQxdtNyu6YVyW5VTVhs7P3TJCcyLgHwPJZu1pzNwC7EmqLwK99wuHqwWvJ",
  "key22": "48BvZswYNYt6w693KCGM5Me4AYrTknjNuEF77HLE8qbmaHa67fsTFRM9R2tror8SyV7DsGN5tuSMddCUBvBFe82M",
  "key23": "2dnYR8ufz8qrfHDjV54HctFiePztPy9d8bjvNE7xxnN3WWQrUGUXCeTjTvXpA4BKTKqHgAYmvfddpmgqn6JfxmCu",
  "key24": "5Ak9vRztWfw4djpGzoq2urAcJ96B9Eg6XadN9nfUorWbBbzKxqkF9Cf2mKAVR74kfkWitYZgrp1u6DKerQKeRrPJ"
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
