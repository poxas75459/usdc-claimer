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
    "2SVrJo9Dxj6P4PrgSdyY64ZVQuquSjTKnJhNCT7y6oHBqeqFkbdmRHGiGJ6NATZkGHFrm8NLnYiTY6GgK5qy1dNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42x6RYXFGvkDJnK6U1Ew7KdYPtpAipwrxwUfQ4zseqNapmCtEWAieU9MvT1FVH9hRrpzECgdFpgvtk4S2JQrgNNX",
  "key1": "4H9NMqyFd4hsZ952eZH3gDmVXC8REqBb2JSWGDYLirYnTQb1B1YdsY2w3aKgCWVj7YKwSmpxfunArzX4o5wwWPpx",
  "key2": "61p1XvUYYJM9CHvK5RiEJKhE6UpbvtSFCP64hUqwMCqMfADMk5fR3iXR3scVzwykxxYVGp45UaA8t2xnKTwtPYkL",
  "key3": "5bkaCdjZwukQ1amSfua8Dfuoq8SLPptz3Yj37wtvErhWHtehRxi5qRhkVHw1unNCy6RhB88dQmQXEj9oYM6rSbEK",
  "key4": "482Cvpu4hoanFFEijzYmgfYXD27ADo8TiKuR8GrW7yGWejeLUTUcYkz8DL8v7naJguva3ejUjeW4ty1sMxMdcfc",
  "key5": "3WtuN1BA2zCCo3YV9r4mjB9Lt1GA5FHxSfGFDzTqHNtr3BfMxfkCCZuaQj2xTvB6zG9ji5RB2D3YM6HNjqdDTGcw",
  "key6": "4CxPJ9VVRHTSkmXmFYpFpq95z5bXF39ytmkd9TCPjSa6oB4JNF8d2ZQRq2mhffRBXnPRnbdnu9Aiex61hUoDFKzp",
  "key7": "3of7Hs4jUsRUnXAnFawVULosUcREi7Ud2MqwA64j4LThYx6KpBezSGKoa4htDZJhAR9VxcaDUCR66oJhauQyob3J",
  "key8": "5FwD6MXhj5caYbAMdLjV5K5enduVGZ7k2zkT3dfWFVmL9hPym5JbekRWHRitxPxRvesUYLDWJ99qGDxRiyaMYLsx",
  "key9": "3SnCSb95yd7aFEML6aJ3XZYX5EdmgpjfvqXhEPPJgeNaELonwi9UUkZSqzGkg9QCg91CZH6a4wHHnBR1W9JcdNV3",
  "key10": "DD32Gx7MD7WyG4d4iGeGSXNguT13kczXGZo8jjr9TPTFEXanKsqQCXmpaZ4pR4vNCwXrALLeSVDtq2cVnrdeVZP",
  "key11": "626eRoXcoRPhN6SmBrekqatfrfGia9knLj1YwBVLCon4de5PQqyT1SZ9rDvyrJK4YXyqxFU3aatLBaFzEbm7s69u",
  "key12": "i9z5iRmosJnej8KUJzt4G2RhaXFnybwUmNhzgbw9Bbq4fwC5LmqzhUTomXRFKDUxtxfj7wp9TW13jFafPdhKvjE",
  "key13": "44UcR6g8Wvt166Q9dcJTvmMKKAAU1ZUTJwrdbtryKr3MC5XPCfxETv4H97JFBbNjCJXU9EfSReSpgj9mNphhjEYx",
  "key14": "2ousjuy8JqhpR6LDdfRhBMWoVQZn7Pu6sENWgv4rCG7DUiQK7rd7cdh1g5zFPKQXY5QCE5d7XmqG58Q9yNdUb9Bz",
  "key15": "37Rb9jpAvBn9gXUdLCQQQ1hFyjNoS8buhhfN2oWkAH3waMoxqHxHt3kFs7uinrqL8NMD3U4SmvJbC5su3dexezhr",
  "key16": "2qtumnKpnq9nd3sG5apdVLxmDUEoeNzjNShw99JPN1RM6b9ZYC7SzPaYRzCKkG52tNfzP8k9MqFte5JaCfEK9i9g",
  "key17": "4xkDqdN6o53LaDJTpVYdSLoQxu3REhjgNWqMkGKgpZuJGSg1V6jPr6Eqc7DJnUYPrUARod6snvfwPWa2CW8DokTV",
  "key18": "2FZjHRa7oP1yVLoBqWvV4gvJdLURb1gwkTDSfAfprxKT3o3pNeDRHzVdCN2c9jcJmJh3773P7bWp9uAVza5FkRqr",
  "key19": "3BijBVW7aFzqXi7s6YgUFMQTSd2x7VqSVKy2GmGZjKEbU6TZNwohzvgmQGy8TcRUGPrv3C9E6ZvjCm8cL6YYpwh4",
  "key20": "4VuWrsNaWH8yFomhEw8D3KRtJVdWdxAXaB4oijRAJ9x7ZCoLhDgTMQsnhWcJ79KnvQmaJp6Afd2gRf4JFaG5W8TU",
  "key21": "4UYyNBNRtNExNonTvALCC2B1uUcfvMyuJNWWgghE3n2c3urt5JZpwRUdKhrgW62puZV9kjE3ZrinM5Vkdr2ytLHR",
  "key22": "YMNQ91s61HjET9UYT5jGef3MWkaYcks4z7wVKDHBLVMu592VS2hbadck79HVfZf3ykBoTyBuCGXWiR5XepWrumo",
  "key23": "3cm3zSqGiRk9nmEpDX1qs41GSmLdcpuygqPdE9ST5ozUuAVeesgqLk86G4ir27yp9P33RivTyY2kJW3qaFjjJ18L",
  "key24": "3e5R3mSN1DNxQ3NGAhb3Z9xAU74CE1uBxKy534dd7Z8xBTKtrYom84NkyGRxWJ6JN6ekmAnUnzSmwttV5ZDXPspM",
  "key25": "38or6Hki7SD62eZyWVUmmRZCdBJdUFCvL76NGao7uQbs1jZCnEJPWTbpEgve198JT1q8B9tzkocqbFa5FQnHrbka",
  "key26": "2EgsW4xHndyHNAMcjrXbUJejeDUtqQBmS9MswTZoDsryQYfpo9YNWmaBifsYpgWNiZzB8e8G1ARSsqZYDsAtSw1r"
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
