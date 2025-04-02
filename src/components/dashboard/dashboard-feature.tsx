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
    "TeAgdQqJHLU91zkQUnzdsBV6nDq1zvtvWGY7TnmRmfDKA3Je6mAGPSrf89K3aUL3aH9DFL7MJgcrNBsVuXecCir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJiay6N93YZKqqCBqedi7pTFGBxixyJR6wYy6mfAtUQiRt79Mkh69gCajK2rqMm175gWVnSfjSvdK7pAextB7qy",
  "key1": "fVS5C8N1ZkuFqbwgYsj1PTENtTE2dNchdw51xS2zGmqVxS1YEWTchQnvzSaBWr3PdpPbeRYHAr8Z7fUX6yNB2yG",
  "key2": "2x3inmPdmPV1o7nttKucf7eVipK8dyn4e7H7utHZ4MXmvoFkAYFXGBbRgnRck5UKf1Kc6gk1PgXkh17i46jUj1HN",
  "key3": "yNR1UszvvWjFjvixS3QWxRcmpBUjVgFW5AENDGgKMY7ceZZWznZ964Wcm9SYcuBG5fmr168LG4XiVJ8FZy9rXMV",
  "key4": "23dxvwrnWpoTijn7CrhKRPxng2LvHwLMYq9hHjZSfGg4Ho4bG5r8SZbEuyhnsAMkoiWbCSDXf1N3LZEkEu7z4DhJ",
  "key5": "211oWvgfwi1FcBFZnd7W2bmSrEf6p8rwMMPVdFjnt915crQbG56JLPrrReNSppCMXfLBBhh3nUFZuVWpeaPN9f1m",
  "key6": "3KxbU1wH2a5Y6e5VQBAjyveiMomJhWhRgU31ZWjLRER4iDQ2Nuq9hj3so6tcinHwkS5pSpSDMKk9zAkxdPKRpMTv",
  "key7": "28VfZdXxPNfYgLThzQNjSBjasmTfgww4zGKRdaxWEXvwegraFyd4ivS8wA2VStFy9RbKhX9s7uPW8ndJQWw6W7Sd",
  "key8": "2Cw9qLntpzL1BPQ9uvghmKjGtLxcGcqvpZ178zK7s9ZANcreTiS1H1fuc8jmhXo1pKQQY1VvBCq7ZbKRWeZgc1Q7",
  "key9": "zoUMhPb4rcCjxdMadt2KZVMps2YzB8rCvLhueq4ZGVLGqoa6hEuytPuqXM5qrEb7TMfQq7uC7227a7aF9x3yvcj",
  "key10": "mrL3AXJ1v6FajNkbJRRKhhUXeKix9v6ZghzDN784UiNbt4LaDieBbb8gmSgS1FjQW294inQKDkS7W9jGaRvVsxD",
  "key11": "264YzLzBooMth8wG6o6c2YMFXHbVGE2BUAMKbz6uveyvXUewY2J4pWtswsrLfJ6vetJY8KQbjSg5mrFxJS9RPSTv",
  "key12": "4YJaMFtHWvjNgAesVC9VNxJ9Ett1dHHxmv49DWtqRfx6iNTt28AHRh525hDoy8Lkqhcox5vNZ7dApRPzUDumvjZG",
  "key13": "4ob3Y5zcsjY8rXzaSnq8KnnDbW9cViGMyCSfQMJgRjUvsoobXB6c9S4kw6xZWzTFd5Mmwa3PicFM4dLMbQNGteKs",
  "key14": "Lgg22W3deugD1DHBhNHrQd8EQ1AemAJMXF1jHpgFzK41QCJkuwtyqKbj1GR1T7xNPdmb3NxHCjUEnMKn5PsNK95",
  "key15": "314jpi5Z9nnXhycTYog7raXAzLyJuLGkurNjA8RH8FMGD9kxvLLtHfP51CFrN1n1cxXWrKWwii4cDmusNyxca8B",
  "key16": "2kpYYfJTPVQmMxozWrgKyaE6NpwxrPbCLbBAgfd97BDeB6QFqzVapFUENnGC3RJqZNTDTSxknBBvpvKmxJcdWJi3",
  "key17": "858nhszu2JRSQfFL9aCe8Hyqzcv54ARbEEnZ5AviCZCgsepYaXsqV7VkpAGwnbojUfbyZ9Cw8Fcckdhz2LMefaB",
  "key18": "dX9FrJLmFRJwVmovq9L33gZXyN88zNTQHyFfCaG49zy5BWaYGVnBrNJJQemREu3yY5cJ21EwPhaMhbEMwJJuemM",
  "key19": "2tTbAqMKzsLQpXpHQmoeXmhi7Z94GUBdkrUWqWxme3fQRTjibG7KhAUjB7nsDM4oMeG5oWnEjEAdgJpD3gzxbdcP",
  "key20": "2AXVHMSUPpUNURkgRBJHmPW4A91YbcvoypZqJkXyRT12qsKrfYiCuw1ppDSm6pCi8L9mdqdD1aDdUa9wuuYBByfN",
  "key21": "5rAdBF3WZgghRSx655r3KEjufZKvw5UnBxPCVn4nfnRkoFup74npqsA6gEBYCwp7QkSQEbHEB8o2Mw9yJa6Pm67p",
  "key22": "2QouPNzjoQhuJEowNduGdECf7fFQDsjFXDq6d6tUyzYi85CBMKU8FCjhdC6j752HstZeudT3ZGXEixBjGwr8kcjJ",
  "key23": "e7CVYkXQqzBF9sio7msiqJy3pNNYupQVbPwLq7vb4Lv9K6W5yAiaNMQz1vec22Yh2zvWxQ8TpP173n6dWjBoiCo",
  "key24": "JvYeRHsqGFSLCPH8Z8yJ2xDJgJgpWUrraKrjYY1PDQyDEzuA3fmSuZ4ZaoJXj5g4Ly8fuRwPef6vKHpwPP8EihR",
  "key25": "5gDmPifjr4FbwDd8VTq6DyudLu9yscmkuU7cjieU5LM7exqbRDq8bL3SGwDsPXNKy1Ksfxmn8QK63CLCvTwsBv35",
  "key26": "2JPibgcTkjRbygmaYWxL22o2HURrH8nNAcrNxE3edGCFwzAoe2KSCpo6xNcJppJDuwzWXUPbnqYPTqhYMwy6HkEE",
  "key27": "4Hi8EUFe7mjSBBVAGNyjLN4W14nn6YAnQnBjb6gf4bjYpT2dtaQgb5T2nUJupGC7GrGV715KugkH5cw5Ea2m8tWe",
  "key28": "3Qdzzydj3keBhKdnmy8nXRysof1MttZtB3vRUaLMekbsm2XT1p8MEHtVCJw41xsZqBkCJEayZFi76zs9Vma7Rrs6",
  "key29": "52aeCEfsQYdHeVygxM4Nqx8B312ncvhAzqAkt2L79V3Ru73pCCrVcHkZZC6JWv3S1PAhwxuK1GcoWS6rsi3wZ5a",
  "key30": "e9AqPDggxpETLTyTsEBufNFSyxbYCEJTEKMHYrJiD2DYbNTcHgp2v32WFtpiEXa2Sj4bGbjme5poCuuLTTx39sF",
  "key31": "5bvJhVDf816A1ipmVShZvP17QBh8YYDa7utYjVsai4tdZsrTjZziR5pQYNBLoXgAWcC3Xa43GAo84yNGb8sc2dM5",
  "key32": "4TfADGju9YLQoBPrY1XxKfm8fmnzkrt4iKyUEWrRAxweb1k57QnPUVjwG1XSheZp79me67RjA94gC2jHiy8WEcc5"
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
