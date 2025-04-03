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
    "5wLuc8Q7uHzCjjCJyangk5zWJ5bDvdeSa7ZpHKfm9R7pyEvtLsvSfE2Vmj4RmAM1WaPnLR5AvXdRyTS9KJMDjczX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34DTAMG3Dsbenv4LM4512cHSk7PbFnHqEv46yDXHgkFGtipzTJPCcRQ7NdsjsAKQ1VnLGZbTBrzakd9XfL7h8ENv",
  "key1": "53C9pFazJ9yBcnVvyQM7XuhsDba27PMa2EyrgVk9AzaeC9DMJKrniJmeoWUHVQTQTDtG4uDLvdCBEBaW9uKtWxeK",
  "key2": "595fjpV97d1UwfXVHcT3S8sMaufMAMzNRGu9b5kkJ6xEVkM2RWkNTSFynvvHe1K74AD2UnyKCouie2sztT9M1pgT",
  "key3": "2zRwH99f81A1wjzokYCdDHBvCxVBby2BFvGuzywdtRbBvZafpexzvpQ7xGooZcUNpZDXNyirx8JHyp8wWJdtVe6S",
  "key4": "5UVnPErfvyjqj9NQ9x3iD56wtbFoFZbf34dvHWiQdsGmPKR6jXu8uhuSiTvvGkarmhs3zQFRy2WU1U5xMYBsmnk4",
  "key5": "f1ZyYMEXG3FiW3KgkDd2pEQnKG3qJZz2X1YECZgvBEWmiBdQQLnfvdQpf5fJvz3FiEmdf221DQA6GhzLiCgPKTE",
  "key6": "5ZJoyANR1sQnH5dnR5zJPdx4EY2WtZVQoGWAs5WZ9GSZWVuc5HjdHuPdhdrMHWej4P3JCjRxYUUwdubNuFNoJu9t",
  "key7": "N8MggvCvTHdTKa3TgyNeEHuMJAsLHVPJbPAbtKYeDrz3GjhbwHycsdW5EYixYhCw1WszQZcRScB72HbiA8qLzz6",
  "key8": "g1pUyyCggBAXCvTzTrnsbBdYVFAjQuLKaawBu7hPiAGJRvUyHtzi5ftkPYKMVeaA4cxVoGeFeS3sMegKkhKC9D3",
  "key9": "3R3f9otX1DQU9ozGMd7rvPRWyMmsnQfnQg1mUjkBwBXNvSub14sKLyAk5K9yynzxXrbKC66vLpxbvGQdtYmdMy1E",
  "key10": "4hsRi8vx3CnnJJGQuBeMNuvi24MmhvwYNRZ5JqESEURnC5bS7iZdv4sgKsAFYRRca45gX1p46dERTTj5C3hZGv7R",
  "key11": "4B22EJUkWeQVuk9nicTdtPYjBDSgRJ8A5R7Lfo8B46XhUkgJkt8Z7uDGJxRDfZesRVUKiC3Rs1wTALiGfSj6kYAn",
  "key12": "4M8oEETvaEM9DvcnmXojuU7aYFvcrNr3ey8iAXEhPgpjkkE8dCb7UqxzE2YeLx69dgEX8PcEwA1bGfhaMdwCAB58",
  "key13": "5S67MamCUPLivDHEM1YQv97CfpJam41kf4cFANb2car4tjcah9k5BZaP5d959EYZUmjXAZZFLCqT5CDRVoNLUxM4",
  "key14": "LAyJk4LL7sckDLBx8MQATwjSTMx1LCNk5k2A3WD3s4zisz61yrdYPFSnr89pkuwKauAoQEGpLpA5fQBWqQSXJVA",
  "key15": "4bR38jfbkhSvqz9s7HhNqsZbjCJcEReo8K4Dm45g6R5VoqpjxdBLTX7wDAhbRSuFJeSkiwjg2UhEpvNBMm1oMJvb",
  "key16": "2yMnW7iN5oBfZP54Qkpz4gfNV5vK3ZheBmNUu6tAwAPZkExD8Ti3SfpGSnVLJcKFL7zZ7ugYxDV4Da15g8XZRVWR",
  "key17": "MxvnSQ1MZH3HAe8MogiofS2TpxP3FLB7uGNYCMQBXfjX6JstaBzuH2oiSEoS5XrtveNsQDCRPRWb4zD4LF5iwGs",
  "key18": "5kPFWeVBQDfMvqDdmqWuXHhDSt9Zt7CWtnysxxdZUz6dvZea7tmx8S4yM3nWYrAiX1gYYRfeDf1YUwL9Pe9fQfwj",
  "key19": "2irxa2GSqfCJHt3GrVse4g9iY5w9PuANZuEoZSokE8dzUPhKBWHnKtTPVDB6hDBs9Q5AmamnhfYA95wrhybMNopL",
  "key20": "59KsmhteZQqC2Kc7C5BMLXL7oDx2o9XYH4vhwzbyUifwir18jJQEuzVPYZUyHPCiw3n9qDWYg1KoFtjZZF9ciC5c",
  "key21": "wDBfUcRwbmqUdq4pMMjWs4TUo7gRMPs5WWSmqd7jnJ2k4vFKgRcKtqKE5uLYUxbZ1s6k7nqz833mk937i1keBF2",
  "key22": "4BWX1jdGZ3yNQYKPYx1GWcdpPM2DUaj19qcVzdmZZJpUKREE7rgvPNstcjsiszbtpTKkyLGWZHmztrxBXwRDDW38",
  "key23": "5d4oFsUKHJAMP93CdyVHtcQPnkZUoqFmibnDNA7xuxN4bznYHsN6Z4rPTY7VcY1FC1mx6rDUZkFgd3waortVUAsK",
  "key24": "3tJqfL2eWxxKHdaL8gARtpR4ADbWNJbXf4Dff1GdX74cMhtcUJgKPo4GzQuVVmQZstSzk8dvXkJTwvyKChy9qgpS",
  "key25": "4quLNwCK77fJCFrsNTV1gcRgQMUmywUhCtTa93PdSKnt81vAN6mGn9xcoWwMgQjE48cJVrcLYzEWdXGYwVa774Y7",
  "key26": "65v57P3HwD9wHLcKFM8yPM8jiKY7S3Ds7yuj5nSrXbc25w45SYrbVVeFazx6bQ1RaeDPA3yTi95YkXCt7Wqb7DAw",
  "key27": "3UuDMmk4YDDtX8FpVGBFD5zcWbYvrv2VsTsHAWtGPEAhdn3J51Tmxk8cMuvo2Q4jsBUPzxYXR1P6qwYJxXfsAA6C",
  "key28": "5d9tnYd7un7YMga7phSuaEF2jtPDHQ6rig63oexZeoU3m1DwTZBjUfeJf2vT8PwMPpKeMpuXodAAxzXWBFbauxdi",
  "key29": "4JUwcHJiM2qME7bpehLLRL9GeCsw4zHy9PLe1FfYQPMPjrtggYWpNf8A9KeuhsWFsReBpm39Q3k2v5UDWDsPhtxX",
  "key30": "478NhpnVCLz823d58FK284M6N7HUbw94Wpnqns5b5jCJU6rjFnpDEPaJCWwGpPvGuMvkVNFuEn2pyntB2dqHvyc2",
  "key31": "4xyuirdSdJ2QvPz5t6JDVSViYD5RGViGE6KErrR4oHTA2P65er7ESnZcyGPNhNcEkn3FvMmcLS49m7nnmSZUuCqG",
  "key32": "2njAb6bZmzvY1NoiZxu8STyCmWKoEk9G4vsDtrcb2BekN7ULRkdJo1YXfRmorHUkfxF44XFuS7ma8oBL5QL8Ruf4",
  "key33": "RSsB87VMk9wPyvBvUgVdCXGF8dwE3UQ9ijR971PG1C4jgsKG7EZfmKQHhdhyRyWL33FgFRgcJ4i8KqvimFzStqz",
  "key34": "4nRFodKB3vZXhQvCqKoiy34Sd52mw3tgvtZwpqS15h2vzpz7ieWYZbxQjq3Dd3Mia1qqMJB2fGxTUYr1bdijo6J",
  "key35": "2DuX2beJHbB5q8UqncjUoiBRKS6fu8UZt77jGeqL1A8fgaU8tAAakH6LJRou45pGuTmFvzxeNrjmaq6BnekM3yLJ",
  "key36": "3BjC87ViFnAtyLtHdjA3xS4Lf32jfj18pgeafk3dGo7YYnCaFoxsb6HXr8cCVAh9ktC2maAvkHgPeNZUeHCfjMbG",
  "key37": "5sPUqMQq2Sh5Gq9ZFDNJVaeje5dN7iTeasNDCJsLRU8abA9jfRGmayVwLXs4rRS9bjDS45MUppwKaekiN1iH71jq",
  "key38": "2k2Fvnat81gfXD7fjbZw9xgnKg57aByKVnZvMdx9Ua9VCUBRZgNfy4QMg4eXAgoENGrsodtYEHFDQ9vEP5zQCtbs"
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
