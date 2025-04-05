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
    "2ApE2q8DWzc2d5b8cSMFxdQTzr4scjH337Qg7JKALv2jD3aUmZ7oKeXCXzhaSD5DZvYp9tp1dBPPJddtJvQ5fCsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zcM4rzMFisGy3ktF1bBzjzaD3zz2PsfPz5ECfbH9YtQxvVPcPMgjbXPHDAfQzH3VLY1qvi9HTcMWXpqXUSPwELk",
  "key1": "23r2Qp3cenzdoPiPtY9kdTe6tSz9yY7TTH7weAQj2yJmuD4dFk6Smgmyjk6VzRFTC64tYZMMjvnZTYmLWFibAF8b",
  "key2": "2fywJtKcz7dBnPLpDgyAofGw6qSYFtSd1kWNpTcenAWv12iuXYheqaVp97mL45Vgpfcnh8w25HMFcVsaKnmBNk1m",
  "key3": "4WcMbF2Rb8f3FDkntUPzhPFx3dXhmaaTsYJYCVeKg6bGqGrerWCJ5obQSfp93y5h1USeFMhZRLBEoAfyMbsLx3ab",
  "key4": "4Va9sutXMErkMGYLydWge3xzgJdLGZQRofSjhP4hAEea75v67kz1FMzu2HBMPag9ZA3zL45JHt8UdnDdq66DYRmz",
  "key5": "3JC9Sffd2uBFmzPNu8Nqg3QLeFC8Qg5TE9fM7n62cYXWabxtSNtMcJst6ouGKs2gtCppq3v4BXKqPaoVa67KNo1K",
  "key6": "57Wds7r4bH7MuR6ojoXnMcGPEbjUgdsnGGmzGKwsKNMdbc9ynU5QkqjZPsz8wRGSEocFqKuXNUahb9do6xGwTS3W",
  "key7": "2xwmpnG7sXriyTCsmFkVXZxULJVoxeZo99mHVuHmnQVn3VgpzYxVzPbaiWdnUdcGs9KHvzVe1iddXMP3DmFxX6hf",
  "key8": "F3X5fDQu2MUAPLT1We8PX2kgVXwasBfAEuTQNtpi56BAdp1iBw46ZVVXEkPDQBW5HUua4gu45oPk6JnCoqkXuSg",
  "key9": "4KqaL2djyGTrpe3pxytSotpmZTZyoAErXdcFhkEoEuovJhpMBk9s8BChuMf1vAUuV46FeZHxWG66q1EFe8ooJ7v3",
  "key10": "UBdQGagZZBeuMNGY9GfXxTLVQmrf6Vb3EzPEuWfGLE3z2rC9hehDZcNuZPZMuEjkE1kNjupbEemSTk6xres6Q2p",
  "key11": "2R1Q5tnn9JGguv8fGEzxJr8kHUJ538PVXyisAEry8zAfKyY8zL2qqCqW6jc7TycQxXn9V3jdH6j1ForftL9KjkU4",
  "key12": "mfqE52qp75S9mDLUztvWexsAv1TEk59J3WDHEx7RenThQMwcbGiofuLjAfMjNR6Bor1tT2hdzGccq4i7be6xH82",
  "key13": "3iqmdbyvTtUe8KEtpHD22dwDwEp1V51kxM6EdGf5ozMbqwKuNYjdyASxRjBndGBu9tCsJ7HEgPaanQ7r79zyRpw1",
  "key14": "5x6z2Hu3oc2QyEczKG1fV3sq5SJG6dDgDQsfRqwvecEcL6kXJKphNTk4EydCXCCrsQ6hsmj5mGa38V2YnjrqKWVH",
  "key15": "5pRRZkhpqv5bJXq1kT9RStGVPRugkiztraNUVmRZQQ4Ewb8BjDaZokfE1fwfGiduLKdHBWR6JeEhSXuv1rWcwNP9",
  "key16": "78jfPuKqNiys9o3ETCD82pWVqVj6WGd1D71nTrczjRVFzyBy4jH2WSNyx1RjoTk5yfDCrfd9Sd8oXPhZLgHaPf2",
  "key17": "4GhgWjsrF3ShCPE8LLE1zYY3VSMCjYADKUypQ9danmb1d4AqcyqyZ1M4MRSz1YueQnSRvumngLdvxbfE1oa4G97q",
  "key18": "nBdP8ynfwxyx52wRwWZqpnYkFhHZvymmP7y8Y28KyN5MXFceMEua4jUbSKHrv5AqPDVQB24MxTxtE4d3hZmaEQn",
  "key19": "3MKSdunFo1xYJkjY3UgEw1GhnCA4PoByw8gKXeudi7buuTQDTFi5MjiNZmKxKk5oo43MFcYTiPgUz7bfYrzcTiqW",
  "key20": "49jPfcvPz3VNUQu2T7Mau7bjmPP7WUL2tyX2UrEWPCRmgM8XgMcb3KbPYH4QYaqhN9j7w6ubqUDPd34SZ1bE3XKC",
  "key21": "2NN4joZYYqFWY3PGLYyJ1jYUAXC4zEy5RXGyzKP3KDG2q9Px86698CJsUNrzELbVJhLUPiWbHv13uBz7Yv5bfuST",
  "key22": "KQsqe9qpxKEiKCcrzf75sXu52AfDX4NxjSwuzbk5gActc6PDN6UjHBwFf2hN5yVhs5LVjPUX8KmZFYZefPt7aXW",
  "key23": "61QFSQYgzGj8pESNPcUTEPTF4fD8BckdQKg3WhnByfYGepVDjYkh8tfQ7xuNkMJJVyVdwkbaNYLRDnnsJdjBhbCr",
  "key24": "324c1Gy1QK5YbnK8tPADY7LQUipkkqiFqM1PhSCShKLe8KLwfyP5Vau5mcRzo7QjYwVZmACizpxvy7u7GvJzx71",
  "key25": "5JrVpvHtLZqXqNtDakg8fKp9BYj2hNg5qDa22uRw235bhMWCHoVYzo8DffyXaRRrXv34yoSLbbnKc1ddann7B1wp",
  "key26": "rhSA2fVixXV4ychHNfCyh8xGLZmSEePFKwPfy6FgfzdH9wzE6JEk4c81kmLCLzUFYgHEebz5y8xhuFE4Rt4qMbQ",
  "key27": "Ayf7BGysiMz2JYA6QiA2iVTbPhXdGSEobHofPDwwD4YxPu2FshAxft7XHg9mkCtGRnkNo2GaoYYZhtmvUKLZSLw",
  "key28": "2ASADTxWWqhcEAVe3134BAZitscYJtY2m57B56wcQ6hAEenRQdYHsVYJ7r9pmnJb4mxpoKRWeNDDeGK6b5TVVH71",
  "key29": "hf3ZYqMoFj3ygvtSN8SJYjJpmp26wwermu4rZBf1rHDAGRrvsLJWer1nnmBX7gHMb5wgS5NXixTULcpPZTLpEhv",
  "key30": "2a6HymU7psdHe8uMo1oMfqYD6YXMVZCMrudzMKtrFQWFcJX3CEVUJFYRsu4xhVhJJFFAbwMzohNFtoTynN4ZHSKq",
  "key31": "2kz7JhEzsYpH8URMiJzUgdzXR7E9FBdUrLVrzaPhra67aR2VDPPus2TinYTGirkgrbFgcofUcgv5MK5TWmgyKuJd"
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
