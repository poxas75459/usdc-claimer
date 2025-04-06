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
    "25R91p5CTTodn913FecTKoR63w4EhGZmtUSusTQ4UF5X9tiBZm6MA3XFigc12ixixRM8QMHHXqzvE58ktVGPZi9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vrj4pojm6aVWZkxih5qgr7t5ZjyRYCpH59aqoFRAbSh1CLhqPj1AzxU2UxjfKyPYoTw4D2dYfdZWnzYXoY4K2Ef",
  "key1": "2YwrJNgBRvUs8KbetvZjaDvVPrV6ssDmbxRmszfNAJ8MrzX3Adw7sFQ1tT1a7SGDTP7ZSUuTs6zJF3HedtqmqRRq",
  "key2": "heDvXJ2bVWXaf5swyiBTXYVrYpUdVivGLD7EKiXFK99Ye6C7fjkuL7xSdAFiK4a1oQUArCVPZz1hEHzhT6N4DQK",
  "key3": "3jS3dsvVLJtwMik9Npyz3p7RtpoyVHuXoEb7S6NRjZUtgGhQsAKoyhWjtgBrtaNmhsG5nRXabuQT1A96ELcscHvq",
  "key4": "2nfAgiPJCbmmCd7Z8uXzDxrd1Z7Hb6vo6XqiG9GRHVXDnv8m7cJZ6RZ2MVziRPn4JvF2rKLJbeK3TS1Fq9kwgADM",
  "key5": "4k2zgGrVS8X4xPBqvMP2JaGHzBPyjTv5e1JMVqNLqXUJWXbsDFFqVMEk355BH45yVgbxpigFzL5TU3K2qpmMPSs3",
  "key6": "UBkEWegDNddYqV5xoJryPKtmxWUtsDAV2PbSJk6H3hjVu1eCqKHBZUzUCQupSNWsXVN5QvdF5Dxa5ZyneZTMQWo",
  "key7": "37rBnj4GgpwFLjx3oThZLzJA6aFczuyrU93UnGQ57p4GE9e8fihSzKTf41tghEXYKhdDaRPdguHaFKr3bY8hoPV9",
  "key8": "DXu6jBGZeP2qZrnzeEH6T9zP3uYvJVzKDBw1uQr2v6jstUWvx2Zn1yTuzzFNFKUEgeRwiA3zBLvExcWipNHFx5K",
  "key9": "3oVJq5UUgBLSYXKKm46Esz6ziaH8oMr4jbhidAF7FJ2RPVG99o3tQz1iXecHYLhAPNw41RvdxxwRZNSHhTujU1bq",
  "key10": "5uDyUkuHv1dZbfMjn2nif3asx1Z6VWCCiF6cYrnAfBgbx5w63vYZfjq6fPjPsGq6EkpsGMqYbM5cZHtEGiHbgteP",
  "key11": "ZQhEsF6xqUL48fhvHpeSVdjNX8dGuwQsRqHYVtKERYRwdDQGUA1Wp16FPPLWcD9scsyjLpQfTb1vnj8UFq5Jce4",
  "key12": "bh8XPeG43yuzF1miDfJeb1A9UKuvEC3XUqDbXXj1H9k92TL3PcYyhCtADVatucmtswfF1NsNMwvYv8CpWCxycFa",
  "key13": "2Y6QNFj5yJTEsfE9msEAXd2eGxgyKQfHBMnv1eD3bP8r8KryosXyeG6S2LrFKNsbbu9AofAkzdLZnsphy5dK8AXV",
  "key14": "icHuy2XRszPFJ8y39f6eokau3GR3uyBwj6d7MCXKz9vfLZsTVVroS7Fy2HQaY4zwKxfxXPCmp5fVhA5cmMqRDc2",
  "key15": "4mHi8DNShKobCLG5i2DpzUG9GwFDeiXJSvFhCMXvimGMFVchLH2HsnUButBuAcPnmAZoCDhoWotEcoRYZD7rkWUH",
  "key16": "AH9FDjLmyueoAWjEwRUKyGqSxBUXPLBv2U23sqtyqoN3D35nphCzpmur9NetC6bBK6GPdaGVrKsbKdjqxDviJP9",
  "key17": "jSw2pyjg6qpEtykLPUB4FvcQNrpSZK6ugPjQ8wpzrXjsgtamii9bWEseCohTjxHAcQTWNLHETGuqHtuwzKJFJoB",
  "key18": "bHRdxv22DTTJvTXa4VaYVKhLzM3me5ze6QHUb7eeu3aTgZXzA8veYHUZ6ykS9yEj5ZmSpsuLQx1gb39bHgauHAV",
  "key19": "3jZUErPCcTpZD5Ai8AnU3cPDQh78CChqW6JGxRzh1bG6GpGr5jWXGoF4p5tB1Qq7wzac3fwecqbmWC9pSJP7JhKU",
  "key20": "3u3tRotDBrpumsEQcBuf8XLZFeodcgBPmnqGY3Uo9eqzSDREBL9qAQDrNLxUCi6BUVnoQUnzAcr6e7CPxzoNrQ5x",
  "key21": "7R9hpCoaABZXMr8iZt11chHdHxugAmWKEkD6v53Zuj4newHAZugF2UQgx8oWA2VG8FNBUi6gdDUiGruhiVjqU9b",
  "key22": "4pLdni3s2UKi13nKH4r9rhPD24RvSbmvxDvmk2fyWkAo9Ju45vkjUcfypHTUmYXs65tcYdenLLCe9RCR9WdGkULw",
  "key23": "2AUV2uWTqm2tuVEtQx3oaYeZERaAFMuBz63aFX1NjNTw9wPfrWh9kesSjbSxDr3mmXhkrCmr41TdnSMVoeDui4wX",
  "key24": "2EEeeNguPNd9gpWCyEoUBXY9n9yJEpaQhr1JezWfGVx7RHqarSYYQRK1UiyGhKbZiCgjkwUCzkMJGzR6DGsJTMNx",
  "key25": "2KAkWxbRPXpcWUiuHB8y9EuXWNWCMowuqdbmXWuh5gcQbj1qbhHaNogVvqwb7CUzfYmxQ3XxocjS9EifvtHubw3h",
  "key26": "5Vs34PdXyDmKwRvEjonbsVhccbKYP5Ua1LnN5a6NQZF5N25Yw3ZBM2oeY9XvS7KzbxWqj1J2uHhBCFQLofjmvK2M",
  "key27": "2EK8GMYNzMA6X8ZWG2q5aKYsqhe4hVuokfHjPToRtL3of5SzTivHpaDRVFputTvRCtaDMUJMrC8cgunHDZjV5bfn",
  "key28": "3e6dMhjCpBsnMouPkVFA3VramCoXfkcVPCwbVbr2bLZcyyHkBB1EMu5sJLgHc26yDgtjnzRJJsznwxA5hGbrPCub",
  "key29": "2TEJrX54soHsVCUUvAs13RvhU64ijMsV1jmQ8c2Lr1WKeeMhWKhmTG9cU88mxnGV3P1EQVkpU4qzMqTDuTgMsCs6",
  "key30": "4DFBFdcqCzsd6vHxZWCo6sGzqJkDuZZHGgSi5a8FjaGoTBSLSfMWRqpHsVcCsbYfSx37TbWGok8nFHagf1LMaKVy",
  "key31": "5UoHKx4PyeFDycHMrBrnX23PhGnTf8m3KQUWNp3wiqzZmEd8hBBfk4u4AzUcg4r4Ntm2qSTfRr8MacWPdDJZK5ZQ",
  "key32": "5w2jBHEEEXcgXuiHTYYS3PtTm5cQpwLH9xRXC64VE8N4zHGp3pFEWCgMXtkCJPUisvfxec6Ugys7d8mEv4kw8E82",
  "key33": "2wUx4yNC1MH9nfBemseh1BeygvqMCjT17jUsu2gqe6n6rYBmUkRRXm2bxSimUE1x1noPFpcCJcXymM2KivrJep9Z",
  "key34": "2HsFm19Fk6Rd3g6hniBZgGbaSCiuSY3AcQhWZMmj6REjGNy1HmdCKrwncvTJinWiwp8uPcZmpKyKpouMoGuNJU3w",
  "key35": "3ciuMpd5wB8L7ZB7U196deiG6XazDgMf3ZHysXdgxYDQuGfuYzGfiAapCygDrqutixgD14BK6Q22juS2UFB4URP3",
  "key36": "5KFopNegmcFumxGsHqEYymH23fN46BAJFygcZW8bqWVuFhKTLkH5nL6X9TaHr28Nohq422T2hZZ6HHsWg5W1GMnS",
  "key37": "LMgt6upLykAbgZ73PA8nSJrtdMkUGjkdtnA2fELiwyC6qaEKogRZE6wdooppChQ1EdbKLmC7LvK5iEXoFc7FGyB",
  "key38": "5MBf8sB8oVuMkJKaq3BrtLmVMqFrfdnohN7sZUPydd1iioRWQCkBQ2B1Di91gymBst3escM1W8kVyWnfTjy5rHuy",
  "key39": "5CcEYxaMJGgSGUWMSC5egLYEH4XsyR1gz8kitCKTLZuuqg3VkPYibJbwcaGThe91jsPfpzuA9aXwRT4qJwvkiQdJ"
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
