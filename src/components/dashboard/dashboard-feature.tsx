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
    "4BCog5Vh7ZMAfewDRZWJgs9xshNrbcWBqBzMDffjvBzgTf55ES1o4Tokz2iRYeBW8zTvbdChaaZYk5LcbJ6qjgos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p8sgcubgoah4BoBfgx9vjs7vCXYahryurf9vtWT2SJQwbWQZ7hCw6X7DbMWzyy2K6hf1cvexg76z9C4qHdGsgNY",
  "key1": "zicerxZkB2EaRafRdHy3mTVuBXgqgngyEJj19bR5kFmfJir1Man3fRScijo5en7Nd3iCbv4ocxvbx1nSEh845i1",
  "key2": "4coJMUXfJJ5YhkmzdWuv8TmXUaYJzvkfZ6Cw2WiR793nFAN8PkjrEKnnYcs5B8MUX8WaVZbAFt3pPcDixwPcrk3H",
  "key3": "aD9ndSBPm55uGFeu9M7Vp2B7mcG6b98iPUTkiby8LNmZYhqfGmcUDWg1xsJsp1Qi7qKWxs193TFCJE2bdE5D95i",
  "key4": "3KPEo7Av1Z5j3tzaQEGjH9sX87P9bxPLmRMBaRt2AV8gu5HmXQfWnQ75XAaqqSrKawS8oAkXZT5dYsAxvRbWytya",
  "key5": "41UbujrscdMyZKwgnJv115ecYNzAFoWCT5R2yHn57EK2LjR9mTLFxBj6Qvf3AeGqaaW6L9UmXbRhB9R2JmchTQxz",
  "key6": "4EwFmZeQdYWeckX8zN6pSvnEwPN9UUoZ5Wg8srgTSYivnTbh2aiHXZGBfGmVhmrWvkSrVSGRuNLcP8N4drTY7TQ",
  "key7": "RtPEeScgAwrjWorMUAmn3FdZvwm7NkrAxESnbMB2SnbURuQRUzBnHmfjfHnVSpMjnxqUm1jcKeKzig8L9VUhmVE",
  "key8": "32JyozahSHF7wUUFeYWVnmQpidMkqZc5hheww3dq4GFbz1du2BHR3aBGGN7HPmePjYZtNX4hNjq9aG9VNm2n2zqN",
  "key9": "46ZbvTsKzb9UYva9ZQZuU24ffUnDhXjUkYVWbCDWwdvFgHE4JSvNKy91yJEiULEqEyrce1rLkjQ62cXkzrWEwJto",
  "key10": "3eyPiCe15ytigjAgJyijFg3CAWkazwGxtrcfdmeaWvuE78k1dZFdpZracgqLhX3bBnxNavjoUL4sfdv7XcV3Xar8",
  "key11": "389PPFr3kGEmerBSqUjXCAwVQVTNjm59WSyyU4cXTe9Rm83hziaMaCf7WsS779eJbUyL5Td5SmkGs6wxULkMYapd",
  "key12": "tvdXuK9TRu8HW1dJAD2czvEXUSS2VaCotWhPMa7FvhYzF8Fn16zXH9TZ5CtRPQHULZWLGH94sc8uJzP6eyJ6xMj",
  "key13": "4ysbPfdBpZSKUPTuxPxCtF2ZmMFMrxofv41oymUHZQjt5xvprdf3ih6u61jADSjfqCDVMszj141s5hz5xk5ANsWa",
  "key14": "3RG7ppDAEFV75HsKqcNTkyvMXVUL4CGzqE4VSYfwbHYWeujpkJgqPi9YSx3rGAnVZ5hdWCdGrf3YpbkgXMB3nHa2",
  "key15": "4bU4tJP28EXNccgrsSY8eyMkKw9q8QbvoegM26sUaenatGVDJsaskem5ShFewuGM8ahDAvL84hDAD8h8rrqGfnmQ",
  "key16": "3c9Qb9L8buxWuJKWT8o9cXpJo1uXgjTj75Zc3wbKrrzWAXDioPtFfZHr6PQsgE9tNPKevPTEyxDqG8zuEiaHzLFw",
  "key17": "2SRjTssoaNkxwchRMZC1e2XcjB3dke18zS5YQZKjrytc8NwXEPoP8ncvWtB1rdjApU1xeFMizALrdm9o8J5dQDGj",
  "key18": "62RpWYoeZuKd9cpnaqDnVfhvu9F66si1Qh13A3bD5D7JwdDFGeZTEsDEoYGtT9LxEQVVWpqezVGjNX1NS2nPrMq3",
  "key19": "2DSa2QhqrnsU6QEWJjvgcv4VrQ4GBPrvWBBWN5n5XpzKZZSnaCLg68484Hd2NDe215PsPG5FNKXMeEHnbMg6qp2p",
  "key20": "3d1apg43PBHbRb9rQubrKbBrJckT6hCjy6jVrKDM9ByHUTn7u8DUS4JUWi5yN4cSSKEn1nuUrakvrRwhdtnYZBkG",
  "key21": "5V58bUbegBCBYjWZfqFc3dB8bZUCuKqR3kM2zaaYTwXLbmVqFo7YDKC9kSLrHFBrKjBLEKKWPvmgNaLS23y6fbNy",
  "key22": "31rEiinUrutoSJ7mh3bs6ckbqteQMGK1NM4zwN2XbAG5TYA1Uk7t5kkGuWgHwnriWdT6p1KjCZHunJYyYPE3BQEt",
  "key23": "46v4681ZaP5aWW3cqVFAJgJdFNAFSpPFd2NtHHfqJ5D2HdggnnWoQtLj5EdEfAWsfEYkV4EABKZJUQm3Hz37f1Du",
  "key24": "5dgHZK8WsGT1qnDhVFjjQYkSRFEYcyuzpcm3eXJYv9s41BYxRXKVrRptMayUefkCBvBHoAzSGPb1vZi1dc8j7nTz",
  "key25": "5mk9VdeQaD1hKWbCthY8ui58KysuFbSaYoCqnYmciNayw14moQWGKNJtRdPdMEWdYTWZG3yUgNz7PTX7Wtz64AWm",
  "key26": "v4KKfcSNYmMJzaZ6DaJxUYdUWv9duFtZrVtomF6my1w2HEkxurd28MbQaopf7wo2AWRyt1QKtrXmrtAXtzjnZi2"
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
