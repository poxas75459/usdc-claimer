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
    "4MxEgwq2GWQMy9uvhX41yDYT1Fnr1m1vLaEu7XuFP3E5nDyvbhosVf3byP1d5H3z6knea8G6j6SzBPepGH81kfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PsBDgV2a91yaiTRtHXQb7Db8sdA4urHajNeNRSaqvSigWk5MXXmSpjpk3BX9v5T2rZ778L27HsD17SX9qT4fXZk",
  "key1": "2UMNYCyXiSkQj7p1X54fqkTYTowTAaddeX7nHiAVs334X9oahUw3w7CGv5rgo29QXqUyEy38pT9bxDWrya21tPu4",
  "key2": "4k4sEBk6vwXzKmex2LzXNKbR6jTptPr38SbpBEbAQ2XfMch1zXQwo7akteH79SiXzME2AK7WFZbcSX3wEY4Qeisz",
  "key3": "2inyCe5p6JKsHFzPRZGbmf6bZSR5qjqJH4dfbX2BxwZA7r2T9nkr1qd8Equ3m7dZqX5F8QsjYGN3yoUSBuLMUyXy",
  "key4": "2gMs51hNcjJemcp6YEW8vkPprqWKWLVg3gVn1z1VC5k8foFDaJq1J8XFdXdFEkobEecDM2pkv5BHjzzVrozWvQf1",
  "key5": "2pWfnwyaq8rkL4LZqkY1mNRF723SPCbN4UAXjKqmCJA9jqGY3uXiHeaditNPKA24YfJou3MuCyVahGryV4bfyAkk",
  "key6": "NtSw4kgu7uuUaT9DD2hjv6DZd84vgwLyj2vRHw7hG5RLZ4RrJcj9RnsxQRd15AsgqD4iPXhiJjPCEQNXZX3gyhs",
  "key7": "28e1tU6HWim3CRfbsfu4oi7RXB9gJ9NGpGGPY4bc6fWbrRyFNmKL3KzWRRbQxAX8DLKB8ahKicw3enuaPerhrFKo",
  "key8": "4sAsrykB4NCMWr66cH9Grpw9e7ZCg3AXBMVHNKtXYxNZozzSNhANgsPJXwwJTyZ2MgTMsXhY3dn1JVa8eto9ENEh",
  "key9": "4WKbkMZs3wvdZmQKnb4UiG2vZYFTPZ5UyFfjpFyr3r1Fkw3TyooftmocN3WqR3jHMDt1w97vY2DqFFcAFQfag3PS",
  "key10": "2xS4G7wbmp5iAwfSpytBXAHh5d3wQ2x5JyZV5nK61kfsJW4x4LoxEpaCgSLN76rjBZoMyLxatACW8Yb56qkD62C7",
  "key11": "3Zi9aYyf7aDmAwiGvAiTrR2kCpcYc4y2SY8zvyGcbAmQgFzzGWVJdgqAKxB6PfZRcGjJR3DJAdEPZ72M3xxRgP3D",
  "key12": "4XM3kUvAaJikhqM8FSjJRsBViVVNdyJD4HKYYEoac1tDygZr7cjDCfKuDXAdSUGzogzbeQdBXaXtKh3UvJf4z22V",
  "key13": "5FEZnjvEC4Z5dXzhnGaVPkTePrcJigHGvRMUJD14uj6a51YgXcFkGSUC3GzYSZQdWDes7HprJU2dvBQUgtKnXA7a",
  "key14": "4G36bYKAzrgcCobTXsyiKxEU2rSMD16g6hbP3EMkcDwXcXboKXGtaAkMmRvfkobRjRbaZuFdTvDJXyVih9CeFTEo",
  "key15": "izHDitbbFXzhSrtExJpSnh4MdyHPXzvEYktQtYNsitiRr12DAVKwb3YrcWW3CLYBCHdzAr8FW8UR6wKeC8MjLWc",
  "key16": "WE6J1eGPbuGRSGjYmXURUqBfGgZZcUxcjggnzYJwMUpCqRy7udrcab2KYv5J6aFNYPGgAwKgZ316UHtvt9AjEo6",
  "key17": "5eLsKvrzGh8JYayNRZBSJdjvaCnvoQhxZnwHwcc8QfwCn3D6Bg9i5V4ij3v9BfjkxkADx7bgJupecvWXtCBq8G5P",
  "key18": "R5Qv5zJUYwK8QgLJ9nEbDP5dpzTTbWRgDpV1TN5i1tsHend1r77KX3BtRMJgQq7TNNPKb1YAP24zNMwJeotPkGz",
  "key19": "5cfa3H9NwLrLt2Q2x769Zbt9cZ4sg1B4cPpu8zFGabjHHayNXKM7G2WbKa2oLWJgEvx6Y49ENKox7PzBiHmawF5j",
  "key20": "4XQCM8ii2ju6zB9Fu38n5B9wCZ4DySavYXzvjpVJyaBDXwnzwCL3K3muYC1s4FyWboEAm9NdHscw9AB41VA9C6ZA",
  "key21": "29pXfEjsBfs979PgeRJB9YRyqLCAzLwsfcUpPqasiD6nESpCUJw4nsYW6kJC3vLRzM9Rgd2K769wc942xLE5stAe",
  "key22": "3kTMzpkvb45iMk4exMFvCvEJt8PZEiYzHZ43oHcAhVevCdbRnbYWTJtfC8svMPD9pEXttSTVAUc5vz3i1hFi6qa9",
  "key23": "2En4iYJte366D9XBpXRXqYoEb5D8uaLwTs3Yad1dm9p6YnvJMQJmNmmo5kBqn2i25oZhfFPZ7CcukLaha4seUF5m",
  "key24": "5r1GrKrdJiVXL1URApTduJwy2PvmPHqtUKRBTjnoiwa9KJAMWCxDqZ8xggXPvWZg1ZuwQ48G4g3FkSzQHNqp45AL"
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
