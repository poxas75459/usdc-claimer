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
    "2mudCv4p2upJU93PJVrudX44HbY4JXKNtiUfw3FrHyPzRwQQ9gaKNBk3EVJMbQFSyYnKxi7iH2LYN4NyR7zFCyjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PogLgWAnkK8EeaWWL7CCsTSZP6kAsoZ3CL1KhybH6Bj2vLZLaVJ25nZB1gvc2ZihxZoX1aq7kmV9eh9Z4yzyBp1",
  "key1": "3yqMVQR5ERPEutkgSKkWszKWfoMCAcSjjTzivN7qJMA69BCN1DyN4eyeKACbFaQE1ayMYCXVkmw53F95qaV7vUWB",
  "key2": "3Lm1r7sgNJEuncxE4pecJpcakK1wSxWzywAKTCP6qWUQFVyziSN7X7CEhm7qRHtKmk8Ut44ZwYwkECSz7T59QzK7",
  "key3": "3EmxFQiW3e7tbRsNZnQLMfwTw7r1ZXAAvNz1WHAk8fTvQKn1XBxM3eQjHPoHyYbmTPG4TzercBWwP8eQLqy77yyW",
  "key4": "49spnZqpjRoHDmJHMgiJTm6CbnzNhjEcaMoUN29pFrhcWV2ZRxMP8XqTG46ZTuvennac7RLVGDboKsqzPHLugofi",
  "key5": "5tTnygsP1cpwrp8s1CrtbiRbo3AEckRo192tkspb9ArzbQJv1bh5CngbsSYxjJqa2PGHdf26iKSbca84EdViTC4W",
  "key6": "5QmRVisT3QEGt4ijJsG1gr7pmfPDWUe7wtdisKsus5vmScPq8yMjybAF8kb4fyti4cpPbMfEYXN7PFz8DaXwirr7",
  "key7": "3ttdytUKtbifnFf6giTCsC57bcjZ9gh5o65oHCaHJ6LtkyRy4T1L8H2fWbbuEjUZvoLKY3F3KzzErM7km8pyCJn5",
  "key8": "29sPU8UC3WL1yYGEvZAuvMY9MevkfvwWdzQoSPoDKEt75LWJV1cazn3PxR5da7TiUckacRSsKs9MEbLrF429aJHP",
  "key9": "2HcbtNYVRs8aWhqXfDqP2PjprwUXZGUSgx79LF7qMDNuZYam52PXnssXeVBbMTht1n3DXLCwxiQu23d8zj67D66A",
  "key10": "5b7vDsKgGyEFJT2GNMWnn8Rhy6dKs87xmRBQZtDgVpv4osR615eqL1zFxf96fyQHpE9xsuHmacZoamYem4WEuJLc",
  "key11": "5sEec44MCfX2o4d694Lyojj8Ai7cJ7ZT6JZUAMq7knLfkwspAMfEScCruMCytZFm3aRsGnpTTmLGKyd25B1XR86C",
  "key12": "4SsELhCuc4rpuz4GEnFfmTAWaUPUedR6VWkDEViATFnZRHHBAEk8HDgwzE1z3zajcZKkAHcgLQYNs1d5kKL2XNQS",
  "key13": "5HVrCpJjNi5LgaV93dcLZu4rHDyCxydoutMovJcydcHqN8RqcZsL1YAGG2WQ3RDEgDE5t2K65kw91nQRHJ8opuJ3",
  "key14": "32YCe9bfU9HDAm8E3VzccSwoAErkmRRsy9YHbzCRQShQjYYJN1wRyvJvCLFWQg7FFAfuPqiHmVJx6mbKcdFiTomA",
  "key15": "3PNwE6oKqzQYt8k47dBRZQCvByFkZJ1SWHZceExARTCgWmXvmTJVapW9PCy7Tr4b7Acru5zPkrWeFLhvkMeWUQjP",
  "key16": "3AeB3gkugYX1NTqPdKRiwtwHRYeR5nXtbfH7Zrh3psQ251xyDUGdu58hXvP4C7Kp5UH4wbcEr1cxeq6KVEmh5Xb8",
  "key17": "34VmWb4kK2dcvx5qUiDFes2qPr4aHM2u3fQGittiX5z53B2tL1G5GAeMauBq92CD8eoF8V7yQBLBiRNs91UFvh2g",
  "key18": "4CRRcsjeTLjtQCC9J7uWWUWcFF4TnmoBfsBEedgdr4o3J1HoxzH4WaA9bKGCR8gGJ9n8N3HFKrpkS6fg2vDnCmG5",
  "key19": "2QfDCh8STykQ6Mxp57SV7dAAc5gAYaRnjFvRsobTzXQrUqEXbEk9gzqB3MXHimhHnVGfnJgkve37PRATKBLzx6a",
  "key20": "4v9PaqDDxFBHkZxEAfyj9putMmoaD7v2zZNFeVcc5hKQgUapB7QSxW4qTCtTVBtQt6JvN1t7Xs1VSmUdYdBogeGZ",
  "key21": "HTa3k5xNNVkuLPAhRshuq1P31qwHQA9bKJDcDB7inXfA7QQhHMcNZEBXM584be8SoMf9SndFi5xWPj9hiJkPn2U",
  "key22": "4o7geKFfZTLUENix5ZnEHBnpocKmNrMFc87dcrnBzGMZxqFbvGNnXFNfTFS6u8cpG7222Ah5wKRAiDt9KFXXx4zL",
  "key23": "33hgPY4zwxHUyuRp53XNo9zx9f5NvE8Yrgo3XfT7VMBQvrzamY6SrY2gv8pwt6ftneSwPKUpcmsNRCQuoapAV5sG",
  "key24": "4uo5k22kEfWxTPJhhBKdchrkfTugMj8ApGMPTchvyy8bHsn8CgksYrVtCCve8XnEi9rNmTQuvGuXr6aRgXdswR7A",
  "key25": "4WA8MPShapnj2oYQT3FRT9NSVWrjWXCDdDkaadqCkcpPTyBww8qr7nYVZi6zY2G9X3fcX8fn8Xo8az6oFVdyBJMK",
  "key26": "8X6G8EWFoqtKbfmJKr6RSzybegXje1DX2ADeXcmSta4d9NbvHka45dZoUoeHusRccznLCJeZQAJ1wHDgKH7JHTy",
  "key27": "73iYyY2H3Kddi8DfwpRaAqZyLaf1c8P7AnzPCWaNP26WFdw8HCTxLrTtBo5e3XuSrtVSAxkwcCLDdjY5NA18Jko",
  "key28": "3u7AeDLg4yXGTHXXSb4t1yrUbghxugfHFox8ckaZqafMC5QGyLDhiXT2SW2t2QoGvGeMGrchTzVcDMHjr4b8p435",
  "key29": "ChxMc61hJXfxb4iJkCfgetNFYC77Dco8ZiaZKhj3UYQLjbVPC2fhzg4XXoS1he2x27rSNuGKdyThxmdg8Z7sfbR",
  "key30": "57ZLJAG1wqGY3ZP6C8SCPPGDWWt8pbci2zQ28owhXAnL2KXNhorMtSQQ6df2udGg2SXQvkooL4tZsEYXCCTGi7Kg",
  "key31": "DrPRWGdPYxDBaw9hWqp5XZmYEoaQstbYdWRAk49zLCYGQDdM55E64B9PB2H9ChRKTX7EBCaWBKmrRwXDbwJZYr6",
  "key32": "61ogixMrVNktdEotQoZX7BLYVkuruFQDw3dWExTA3jYeTZGGuxzcpCgzbLz3ook2qLhj7Fz2ba1gCnkYEZfsqxo1",
  "key33": "4QzzNmcn1PvdmxA8JumjxwVtAonJQ6Zw32DDPz4GvHga99ZVpnUdPw2bSPABTMbRpjTiGEqse14wDgqW8jq3MK9T",
  "key34": "5TmfiqebrjWRe5Z5AvfX3gQZqGRymo7cW4PxvKR2AkZsoaRspABwQK9QFU3qeaDsBviwmbdp68fNuxQvGgUgge2M",
  "key35": "31UVijuSYrrbcXH3BpyGu5ZzcKPgkHniM5y4G7V6o31PLivZy3rQAojsDmms13MmsWWU9mGnfzzWN2YrQK74tjm2",
  "key36": "4AFuDkYhuYrYWbUwN9j9PLdYY2Gr9R54MBRQ1UUqFLAzuaGkkQSmVvLqHCPq3f9AGRdk8Qc6yzeScLBTYzVeeB7n",
  "key37": "38tifu1J8srUKJhz5AmbstGqjXzv2F7wD8eYnniV8eJH47jXyyVAL3ybEaJp32U7w5pWCN9RCjgHn2KMXsPURMZ1",
  "key38": "5AH7ab9M5tMyXn93qzAwS6Dm6kxp6PhE7YB6NAg3yvrKQZAfsTrmJxvGZ22cXdyCrQHysM8KbbmGAdtDpER9Ldtg",
  "key39": "2zNyoT2jLwp7vBLSiZ2EBak1Hvk7bELfyfPqHTGY78F3H4bL8sKcGVy69zWYBWi8wi9SctHK1KH1tpQXDxccnXxs",
  "key40": "2s8bH8AbKowx9hnGHGY4Rcv91jRsQSuDaTot69CYkcQHDqUxmp3mZ1svHs6S56sq9PNTXLidkzH6iB8xBJdCKusJ",
  "key41": "3dz3ijw3gs5esUWySD6mGEFzNXE32bG5mVaqzynLYJtQqq6RdBQ4U77pxDcfk544bL7gUjNCn6qcxDwvrGpGiubV",
  "key42": "5AUEEkJX7Vp3TAY9ENzVmmyQXsTrJKfKdGbm2fYqsXD8bSz8nxnrdbkd4fusb4YC9FDxFPYn1rxWFMpyFjR8shjA",
  "key43": "THbxNyiwu97h5PgBYBaLy8VgETQAT36vBwpZAS8bkboPyLfc8m8eAzToYAu8qB9rj8HzF3T2YYeC2x3a1Aon1a2",
  "key44": "2zkMxPdZFHdKMn1js86KMJdNXKWVq5mhiW7VwBVjfMi2SnDcdYHh3zyHD9KehXz4HWYdu95FRbi76ocuAAMpZjRS"
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
