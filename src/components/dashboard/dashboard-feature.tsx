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
    "5QbXVQV3FzGjbMbEj7gh7gn7EXVN3B7m2HWUKCozhZMkKmGy4zW4vU99yCxeSjtPUPEFDvMeCUEH6qLjzpQ3kebw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44omRZeAA5JiE5VsnwnxbBiz8Xazx8kmoyf1JhBdGngFbeLbgE2xNDHewhjj8mPBxmRDrH3KrVKHFrdB4xJ8UZ8i",
  "key1": "LPBDA98eyqnfDpuxugi6yxgzUoFRYJcqHtHLAjY627CGg5tiW7PVrjfEXDrUkvd1AkfH3WMJ14oLbBr1YdA8e5t",
  "key2": "268zmxo4P9i47eAnUSWvLSdF9mRawxJWhrgc57y84iMBjiWzdT6GJCbpUsNQYWstJzooDCbFSkhpNRxxxeReTttq",
  "key3": "5SriNDqUz5kq8TRoooFmJ4XBeGNCgdJunTt9iPga6pToVPLSKmioSSpAihkrpi8hQ2ANncA2t5AMzJLFMTbHRH1U",
  "key4": "34AS5ess7FGZeBaQPo9YvTRTja5a3VRJMhNSDizSKBRoDVLpmH9CxJjxzgVgNdYroeiXNiQn7tyPiEWr7oSC6osQ",
  "key5": "3NJCS3dDyYWbz6FKMwtTmEBrvpsA2WEtucj1R2kVz5YEsV7vZE7M4SMcgcMKP4TyK8FVi25Lyy8ngm4qjGebzhLr",
  "key6": "5FhGcnUb41GdSmjBdXTVYbytknXmP9SPNwCdCx6AKFFQhzSfkxsMeCWwtpz9wBG3QsUarwuq8nZb8eRCng99JuzX",
  "key7": "2s1eCuYhPRdwoD1f6i9v6bAVm13x2xqWBLLd3fR7CrbxTe3tBC8Gb7aDfP6atvBZmS2UniaAb7GSno3xRWUKEAN8",
  "key8": "5t9A5nTHfqVXFkfyzyjmDyxJBWBDbfH5EjE1Y8w6orcDQ237ZqbQMjDTGJvDSPouX6rZLphywgxyT1UpWKXydXVy",
  "key9": "5PXBaZNeWY9m6Wc3RXcMXTVhpp8H2uU8Ky84fD13hjiUWjiNKm1Bp7FmTricSeSE56w5sH6Berzo7mURiVJGutsN",
  "key10": "aM6tuTxafR2Vk5P1tfBakw6eAdewgKVy9YEnJU23CJfuahwW3FHtMyY6xD86HuHHbAAPRk8ZV2qpaYsatJXL1ob",
  "key11": "2ipN297ezbtLnLzi9fihjqTxhwcYezrCDjgkiqCdAXxbT5SiHAiCVRnkgYcdgVzK8yEHbnfz3g1AWZ3A2kyEEvnb",
  "key12": "5r8NhA2sZx5xzGTJY4Kciibe89Di4vWFGyKCUeyPtKAY5TaiwgbEdkDSBk6gvAMH5SFLs9BEok71VYqtmRQhhd1K",
  "key13": "2WEQE1AmeqtFzjcYvtH5KMmMScS84hPjKycxLUaG6oEqrRjwLF5hfjmX2E4xNifN8mXEVfKkDVwK73H1ZHtLNLNW",
  "key14": "MLywg1oWQLUG7kKUpNVYNgqnovBGvVaE1FLy3joDDa7VqSRBky8C1bkvegV6zxrVQ7XFcSQairtSatSEFndv2TQ",
  "key15": "2ZGZTApeY7MJWLYoRWUt3rFTLGL3KQby3VLgVwW2HMenbJoDmrQqgGGvQYef53ZDP2YX6XErRP8rAz32NNmUJGR5",
  "key16": "5wDie7RSpDc439EdjF2WLn5StVycviCi1eMXyKMLK72vxds8qrHHJSyb5gbyn3hUxjrEJM4zohKR6egYDT1Ns34",
  "key17": "3Bu1wQ4TrWQsfw6eJUpf3VCpxe9nEhSXFo5MtJkQokPfqNp97nYeZUxCLved3qvRXvR1c115BURUFPgRtc7onJNd",
  "key18": "2g6Za4JfDrcDJxYPZsca6ePX3PwmmQejs1iUvPXhKxHCQGFx6ZkbVCjB8HYhcPNbgCU1bDmvzPYTVwaKcPj7rFZF",
  "key19": "3i2YhPQoHgMcbr4KE52T9oLSRLs642T3H4ctzvmaHj3QVAq5uWfxbmnoeN6XMRjmbJ8Fx5YM3zzjbuvKCnvoE8nV",
  "key20": "4Ck2JmxNHPBVoNpovxhf1wa5TwhxntzDN9cCfMwfHa9tF4EvHKSEMZGC76PyGC56HeLDNoxQmzVwDc6V6ZFhjuVC",
  "key21": "Et4f3xkbVXLgGVm3fQYB2PeBfSo151Fg6NZmeHohXfnr17vwvEa2sCPrLadACcgs9Zhyb1HudBYPTsp88iY1VG3",
  "key22": "2isnZcjBXDi7HmLB1Pb452FmNKn5cXDetoXcbsifkPL1vr9WGjbcvpn23zUBDi19jZyGKL7EhpXarkNnMzZfij8x",
  "key23": "kmoVfdx2PsTYtWHDNhrgvujRgLQ1RwNwFGf7ToyF89TMn6DT6QTdKe9LAmyj4fuoSjDGST2GkuApgXVWRJ7dphs",
  "key24": "WK7j4hoVbrCMtjyAvp1w6wxwLNfvgVG7XgMeziA4daSc1WhYyhi71WQogEhVC6YDp7mXaGYXNmKY7mJTMVePUid",
  "key25": "44wYd2jyi2LpQBZjzSGpNEjX8bRTyssmDQ8UC6sgdDvJrTZrf441Ticu6ny4vLZckWNZVwv8NqhwWEJseB1aY1dh"
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
