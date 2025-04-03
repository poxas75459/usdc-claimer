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
    "2UBjprqsxYUkD5EnXRKVPmpxbLrjRrir2h6g39KZK5xVa5WQgzo9Q5QPKrKn2zw6siXSdkXSdBhHXpG4DQupA1nE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXqiNac2933uZdGTH9XRqx4mGkkT8fcbqE45DKryS87NDj9o95mFf999hFSXguou4N7Sdy3SBuGxprPBSs7VuyG",
  "key1": "2biPe42uAmkLiMkhiYm9JtKf8Gfuc3RJzj4ekv3wowU5qtRxnPgqhDzfNuU1tfDBtbcXx68QRQHUHs5e9MQ12Yab",
  "key2": "2cKR5Q67BcM68E8nKztYYjHDVqcZRHLekGtCejbnhnfedzuiByK7Fzj3ggqZ4TW5bGRCPd89qRQhppk7KHVUWfcu",
  "key3": "4uNZUm4jtGe78w64SWBZMA7s7jmBeyQGotT5uY6raKLniEJfzrUWsi5VyGjJ1dnYwMQt6QVVi6XNuC7FvnsVSvx6",
  "key4": "2x5okBLd8iPL4BEtwQjQXQCNeDKxVXaYfHChovuTyCQv9Dn8agDkDdNRnSBztBAxtPVfFMepV1kwdD2RypbZpQRm",
  "key5": "5czU3sjf3AiyuuVkFo4Q7ZdPE7EFTe23co9RUPHKgQu2dWvDg3U7gn6eQanNvfMEENDJ4hk9h744zzbGMG3wgbus",
  "key6": "ZY9LzZFzBJV4s2ESVMVyjyP4j8KPz2bYuH4bW7mMzWBY6U4RKKcfBQGpQ1EkcUDoobY45d2MAAsgRJcyqTEh9eJ",
  "key7": "51RnXPK9LT5jyrz1fkSuN89ypyk5457bYZvd6SmwYJ2msDz8nCEvVZrbhUCtVCDsxDyJ6N1C7v8X4J6Yw54XbPg8",
  "key8": "3pbZUomDdq5FtFddNUXeWVz3dv3MxhCBiyxhPxhvvJXxRWoYCttKPp5QvizzDp3vF9Uw9iYgiRYQn33pUDQtzv4G",
  "key9": "5Ku7VmG34fSf6QL5zWxdGBfiGtum7Eg9sBjn3hZMXJ2uiGEd7Cvq42bE2VDvnCpv5Y4UT6PPnADHQ6FkgujYUXgv",
  "key10": "hBcc8vuPNCbMXvTBwT2Lp6Mq4vCA9HxQUppFdpC9WS5YMQdBwzPfB2XGQWBcNmvcDkXDEvsmTwkGq79NWe6iPxZ",
  "key11": "3qrahBXzVkdegfKZUQWgMjFNunsNCjyaP6ViRnK5fspB2RfrtjKS7hBj6aBFB444fXBRD6pEecRqAShJGHo6cmpE",
  "key12": "3b13ZVPMfo9NBFh6RzvgvcMkbMEp1LbP71jDk9f3UhqrEVxzrg9vv2us7qbaxpMyJ9vvNRr79n5LwAdSsi5tJddR",
  "key13": "2moj8AYGxRNDWuAMPnLRRZAo4whhM3SN5vCuo8F9WXtUYgmnJ6YTWHbK6cw5tRnZ157qFp5MMDydXATuJ5dx82j9",
  "key14": "Q6ZSoxJGjJMYsBxdjgGFdYAdNqsxYyxqfgJeZP8eZJffbwCo5GQG8wsUDbhia9tMnyUMhtSjcBpiYxqsEYhff7M",
  "key15": "ecfdyBiK2iEJaAHhtsMaWUGVCMkrGGeBtmtmcrRoqL9Ese3ynS4QeTmHuUZXhBhGqmb3ppB95FdNFkEoCCVdAAN",
  "key16": "mxGPX7Rc9cQkwwLpTWAjTogDTwyxQnWoKEA5CsFNgrp6xqppMmK8yBJRSgUoUXkEC26r4nXHBnyjNX1h8S52rB1",
  "key17": "4MGTAgow8D1hELwkoShesjTRZbG2ccvpPViP2bdHZqphsCnzANHaHjTwHweWsphdpSKaKeRQaBdi28bxGFaErBdS",
  "key18": "36GCmgyoc7RQKbp9xh6wuDq9CgGeWst3iASBENGSGEbBpC7jXekkVaMzZdUTojP6MoFpezMUrzh5b24LZBWu6dmK",
  "key19": "3cMDJ6P2rcWmX2rK6qwtaq2wj8fawUE7VBS5dQQxiCtH3CGzgaUcpLVvjz7k2fyR4HnMqAPbaD5D4f8wsRtovvsT",
  "key20": "3HAhCzdsMu3yhCXXPeJy3UTDK3aBBrnXhLpsya9Merkg82H3fhwiNVNt3cTkLFs7NhcN9bjBVAXH2eCUzWPRH59B",
  "key21": "2NSTFr2RvYVozmMbcYDoVUgfXMFbi5bcoY5BnHHQRCpkDwfU7sy4ztwktSSmGPQDixBqv1Y7B4NgvLf9qpQoiRcu",
  "key22": "3t48hvoG1a98rKJo5KrhPFENwEqqoYWLytYVrFcn2bL6sGB7YvcEDMVY7WmxCXSounwka8MytFoUzumeusqjk9Q6",
  "key23": "W1EUnpZSNZJnfzuConRN3wfZVXZs4kgYsLqEUwLg7SkR8RjdzhYUjY4LqenxTzqa56uyHtTKugdDs7YGNJZULJ4",
  "key24": "3VcW71FEdzvTP2jHMUA3vwnovD4vFHtKnRLRLzCSf6Duw6sBh6141BUNaEtFyMdZevqyuP3UD7hKw9j2WpPo6nBB",
  "key25": "2zHbc6a4TJEBRBRuKZhetUb5E4MbFENSXTCe3nqqmF953mmhxNrNob7ffonGeyviYbXbpC45Hng8dLykmetYKVyw",
  "key26": "4gGQBEGSNgGN5oyEdQoAtvaMFQLEvNhk4BV7Gr7JZQM7HPtj2R6U8wRofUJMwTCjKZ2ssPqnjfSCa4UXmssCZFre",
  "key27": "4j188dGXAbfSiQhAySuqycnzQRV79DVa6h9uJdCMvpavB76KxjZ5qLLpae3xZpWPbUUfm1a3JSuEiYLh9QdcyryX"
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
