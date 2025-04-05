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
    "3qjKdkzgajGsuWZvdAQAPbPnEAsZt3c8uZNDExcyNPTJw7qg6VHCAjgLBdJzXfSwcS3b8nFXo9AWEuFnyJvWDLVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y7NVfgfTS5w7xwQQ1g9Ad5UxBRjxtTYU5ttdzfqRSi8McFRhqX8a4295p8BvxT9tLZSibKseoDHAiXRbqmhbJNw",
  "key1": "2hS3niembVhBd9EX7sLEuTgD9pAefePnFhJ1gDW3Uv7ZwhcFngrUpH7fiUSpkGcC6VwYERpdp1xPY3zgor3oBwxe",
  "key2": "5f2MoEgnL3WoF6u5XdJB2PN2FcM5BcgmquWHVodrzKc4RUnMiANAWVEMqSn9yPgCyfGrYVDNi3o4rUC17nnhuo7q",
  "key3": "5FKH9spNkYBV5stRGR6nDBGReu7U6LJCsY9awKVBnTQHB5SQT2ZWhukeoMtLTuiuwnEwFuwqCZmh8ibpb6pVc2iJ",
  "key4": "5Ayx7x9iQMkHM8CDBqXiNizWpCe8rFybhVhF46d9ZK2HaRRPAE7STrPQnVXPsbES2D2Lk7RRof6rXnGqzn9ANVvC",
  "key5": "4eZRucS1WHmTuspWrpPrAZxPXgBhGob496PhA7LjzMLw7UhbqXuMtV2js6mAijsX3s4tZgroZP1LecyNyVMUfDM2",
  "key6": "5Tksgxg3YoWTqJpytRGCMv3A2gS1ZtwdnZBETyjL4xGcoC6o62MCkFtynDrrrR1hbzqZvVfabwPu3JwTEjPhbFj7",
  "key7": "5ruTSdn88mZM757hjHL4JFXKpJhcnBQLeJRMmEUQmQJRexWFxoFwWj5dqCYRpVcRpyEGFUVUpm2N18LUX1iZH1sE",
  "key8": "3p2VdfFBh62AmZGeFut53r8SuDB3CqWgUGyi6fZetwKqgdhXp5h7Ziu8EbrcUPXSVJbqax4yC2XDgwbkUh7jFpEA",
  "key9": "2iKNiBnKQnv7jnmh3bqAxuiQcwWRR2HgEJ8KGhpq3Jb1U6tSPwxdsBuuZs7hPHFP3MfouA8L2BjTioWaAGAuQBnN",
  "key10": "LvWx2xRAwGnmi7yrvhnnbLP1P88USMhvygtJ65dGLJUx4rK3xn535re9KbWDvgxtwofFGxVwhg2vMFup2wtviSY",
  "key11": "4j56fAuj7QDS2xWGiqqr5MWTGtNn6puUAeAmjCgcGhJsiCdrhpRZV2UbWCXNatLXWda1b1kZGAvJTBrWZ6jLWD6u",
  "key12": "2ARb5fofrDtDy74XNj5judvxmhXeBUrZrGxw1fozUKGy2KoiJJ256tHB8jhD5wvcyBWCRBi1qDJxjWDrvK7r8iwT",
  "key13": "tVHcbrdha7pqRF9tmVqzF4ci8Hpatm3QJ1PytfgSK1mahyhqUGBEhGBQfM278zQM4ZiaqhWj9ikevigSkyPJh1L",
  "key14": "2ryTeZmhU5JX66n9c61t2CzEV6Ko1jMXN1kTHuBjeszndMyrg44J5V7rLB6hb6wP4cwMrcmmCgHYqnx6EQV9eGtq",
  "key15": "NcEWVJfVRPjXP1CQCuya7j4JpvzY9Bpykgjp4UqKb7mHCAsnZtuVKkhtkbq8HaRcN7imVsWEJL5SDdbc9CHAJrM",
  "key16": "2Nie1R8XV7WzjuALcQcZf2SeXAZowBem3dSQB8Rx6Z74UsJsypiioDcjmehiqJw96TW3UpZi73yc317Vo9Z9oBdQ",
  "key17": "2YUYWAmJjGP3fGJB7Bd1vcyw1tpxEmeCtBQyc8PJtRDSrM2DVvPbwp8QpnQnsgcsemkgQHYRs5h1xQQcgzVgkx8x",
  "key18": "4HYxqwNTzJSrQDKQ6ZwgCPUhA2c3rfvUToB6ri5GFg1gYqRitUtSXvUQaneUhou6316VattJVdrdHEAXHkETJQZw",
  "key19": "2h4pUR6KUXiKjHYgoFtpRnMenNbyAK5tQF9CPEvxCfsoHqQVMDmurpPrNnPfS51DchRhXCFgyJ7h5gnh9zedMw5g",
  "key20": "3ayjExVzBqJ8ZnHVKqnDVRM4evtjGGqvDAsLocRLNB7fDWfHMXaBUYfGJUASMaZmgJxBreft2RLuYEXfujPcNMW9",
  "key21": "2FsSiyQi61A2s5SpMSX5n13S57BRbFJ5UByk4o45HceCtqH4AQ96q1bR1CgxNaMnc7fh5azWL88o5i3AEWAKsekL",
  "key22": "3SMLPLEQWmXYah9FSrtceF3zbrNhjzezq8mA2VMs2t3rvyvDiPE6djF9ixzGWDyVGxHhV5syDRinzQCZGhLi6CuY",
  "key23": "3VGFdi8iARPNX9bFL4bmZHbY3v5GLcLqZKmRdXUbxBTc7jLk3jEf2M1xQyhjage6QPvu7FkBym9HRkfmXnppWdJc",
  "key24": "3a95dsoKvJsAxmUJQwNGdCmPQypUC5wF7CDMGELbpmZAFC3A72KqwjRVWCzcxqr55VTvSrJxUBJrTYwqEeV6vZ5G",
  "key25": "3hG1J9mttKhGLhyKkDHfySvorSnemRWn9ULHL4z2MLVi6vrRjbW8BnmsCQk28wqPYHghp8EaqunNUALVnz5iaZH6",
  "key26": "4fEWurVh4yu7Dsb9yqfo6mo1osXnxNNcYjWfb25W9sqSKSwsJgR7kkPnjDNFpaAciqKWQ5YXdRd1qtNq8UPzyXAo",
  "key27": "66tvALqBYocz4n8jCS5BuNVSyqxALS8i8xppdmLAynbzeCixcvykozd98hPFU7wqBsc3n4MuPAzn9i56mZkxkkM3",
  "key28": "w43kt8JrkwB7p6y5U2EmSEh4NfAYy2MYWrrxtkAD52xjEs2B1L39wyGWtTJJBZvVVx1a9rTGTYvrJuXZDid41CX",
  "key29": "5X5da6vxMU5fqrRNe5ZDUyFEov3knDyfXXrZEaD4e4estL1gDAiGgDFmmQQMdwqHnKBRcyRzeuAspkm6cbQnqteo",
  "key30": "2ot5ruSjaLoBG7k3QmK3NogAA6qbatLce4Uy56WKJkKghHZ8dKKcgT6ZZE4yTa3d1jhgYXnjBF1eRU3vAhtTPvV6",
  "key31": "iG82SiiVmp3sR2PioKsE1He4krJD3c7os7sEGhWTp2JwVkKp8Apu3q6Qb6R8wHTkc252sr1MK7bHT6jEXe78fLk",
  "key32": "2G7J7yCsHLBGhp9nM9KHpq3xb68qW3BXv9asfNjxwpWsxB1RGpTjErVk8J1Ka99dHGmvmjZssJNh8LWXVYDnzd94",
  "key33": "4Me2uuG18je9wpiCjrUpkKa9MBA8jmXntjotTGoY9ShHSsT5GdnPF2esQxHFqsMZcx2foq27YjWBRM6gMefoY8G4",
  "key34": "5zHk2Cvubiq4qjAiAYF5gLx1YVZ3ygsuwKQr3mLjCXBUtjweRpqnc32jfQB64HneiQyBhj9nt28Qeur6hNMCh2uH",
  "key35": "5oHMj6snHpkmVrzkB6KpqRTQpCcbjc7JREUX42vK4f6H6iVvM6xEdeKGdMHmZ9hDECq3qdLDJQbSS7iJcXYN1jCP",
  "key36": "2ZPX5RMQcsMeTu9pqqA82P9WUdbZ8inEWxbWzvYCz6K8YnEFjpe4fbUfj3mysBi9xMNdoCMpLAVRoGfHUD5LQtp6"
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
