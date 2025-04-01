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
    "5zH9aSfvRaKLaoUzv7e5pgqQhDGDDQq3ZWLNbEbTNW9SkKmW8Rx4NyHkk5rReQXcF7LZcQ3FmPebMV2yJhsbZGJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAeEZGPXmSd3c6VAvuFWXBpLfrrMJ8JBTPLqkTHAyRQStgFCguGSUrY5csPzJW2f6gRA7MttCTUd8pLWaQh8xRc",
  "key1": "3Urrij37kpH5QJ2WTXCGLv3JGfCXYpvKC6RepbhppFKf9cqo2VvE4nTpiubVeeq13ndeHqcdHM3bLrom7KwVuA93",
  "key2": "5Qs8ijh4RrawPLPKUUhjBukYMnuoRBWKyYGqhQTgeux7XW3ekAy7MpHUfbsS47rEMZ2sAsQtz5LzhTAw6KZEUHEb",
  "key3": "3Ti51BDhwYn49yMNQJpt4hP7hSPYnRfN4BRVNcF7rBkAX8W5SiknYrNvPsbf3v1nYM2PdWuSmfxKArc5qsaF3zTD",
  "key4": "uvfZrBywd61EcHUVk5ne39FfPgNMFE2PkvELNZEUxDhAL7busNgUThceuWfETRBeVMpvPZEkLVhesqDxpXQRxwy",
  "key5": "3VfcrxLqrZR2v9UxkN97K2W8rGf8cUer1w8iSMX1Qu8pqLyPc3vgJbMHbkpvDp9bZ4t1oMx9SRAN8NNzFvD3bzX7",
  "key6": "4t7aSMLX15XkppsZdzFrHN77y9MCj6TdkRLupdDDbq71is3DRjFX7SSZG2auxFJ8vVpaNNkG5kPeXqFTnQeVjLSx",
  "key7": "2Gda2vGEKAHe8kL1bYcZQkziCnc182gJy5KYE7PSQzYkhtpPtKAhWLQFSiYzhnYDxG3i67Ltki3gBW1eGjFqVVXp",
  "key8": "2ZPa7Hye7TrhdzNGSd9QttDRKGSDdKxinPWB4ktd3mftJ8akGCgwp8wdNGnRm1t6Nwcy9dbtTByBELfNPGNzaVaZ",
  "key9": "22Wp9HsTsJrWcJqhadCWMXGr7iYc1WvGqnQbj6X7fDwkfuiQuRyn5dGzbzr1WBoA6xsRmTSf8RwpDMsW6CmLBh8Y",
  "key10": "2VTVpCMdsTRgm7LHFKjSMMa5oQ6pF89o2XQm5b8CdYcxVGt8DUzPXxi4qLCdzuCTMf3PEEkRp6yqgv9Zaa78yhuy",
  "key11": "4Pv22xf4d7ntDD6UUGRw7D1UV76jen41MydnegPpmYnpZE1cW9hkYwuVd3EiXJL5SxMRz15riHH1XhFV3yzwjRt6",
  "key12": "5dR37RUwYVoByAS6akSMR6bjqFSZ5eJdAog7TrAbb66kX4fazBs33HgAkD4vNa6m7h4ZUQ1xLDsYRftvNZQt87QM",
  "key13": "sdMmvJZ1hpKJyWVowTbGcdsAHzCZPKAYYCRrnEKnLFXTB6sBnnfjysYCQmcE9aicGak6Tc4rgLeFfA9mqbgpfyu",
  "key14": "bX3469WdURA7WzMjifSBVcRfw2wJn3D4XYF6VZ5Ua8bd143P7ADfL4BHCtCezMAQFmXy7P6do1y1mhUgsyxJrGh",
  "key15": "4pZ3zb1WKRNyhEeG6NsStGJZbyNp4eB6cVXpo99vY5VUHTEe1yK2cYurcAa2SfZmyWbpJGm9L2US5ZYWM2JvJTP",
  "key16": "27piDLStUo4g464ma5vk6JoAnktGiez35SDJyKSCFGZ3c9kcDiexyU9LwUJX9efrZ3ydHUVeBsLzKHnBRpN7tq1e",
  "key17": "3FT9Sbt6Qz8YTDA2htTBTFvVn3zM3wTyhgFCi2wzbLymfXH1SoERMoiRv59uMXqFK4fLXykHSbDN6eLewsCLQpkk",
  "key18": "5QFVtWoLMPv7T1sBmsdSrfg3yWPSLR8c5tnHmqTXmK91s6k1iEUNNyn4qGFwYkD2JkuisXEgAdwCBXqLCfzB1CGZ",
  "key19": "2D3YsKJdNmh43XTWKJWJdBhES3qBNNocoWce1ajK1rG145Ujp1R6L3Ekb9HVNBoYZj5fLqEMYo9Aw5sbcJ5X5oGn",
  "key20": "3DzFYBgFzpaXHSvVwWvBYq8mzbHHjjqnM4qxhckrCUSyHcEbMxeoitr5K8i5AChxS7zC3ztudXvPDuZ2Subaiuta",
  "key21": "3fQ7oT5FcjBtPNzAacsWZREKsea49KjDmDkycWz3ePhmUQTR3oBAVBRmkzH1oNDLGoYf8SujbY9SG5vGe6GsKmQL",
  "key22": "iMxZFdTsFPoHmQbpSdwjak79FRACRdi5kQW5anMy7ZSBeJm1kbriwawbChi1G8fsLtprqectjYzDRhhArfXyKTE",
  "key23": "waRMPFm3o5rgNmiDYqoWC1vke4budpH49dJVhANvWznNgWfJJaTWqeE9xM516vEJywQxbqa1sSsCFihwrbU15cE",
  "key24": "42kXSckCp6nUG7BGRoovZWkjFrVNGJ3PRw355F9zGbCtvPpzFo5Zjuz8Nh9Zco7tcYVjznfi24q7UyobrCh6xY7Y",
  "key25": "5nJP27qLm2CDCopYAaovhQ36VG7SDvY7Fx6emFki83CMxrcQKMqXaUQPcC8e3qbSKVNcikVbSkrPQqmQPb5pcf4k",
  "key26": "4ek1DzhHMfHXjxS8C6U6VQLhwrbP6SBrtVAWiGfkSmtvxjT3iWhnN3z9Ff2NTHKBoojzbZDhzt7AvGF1qViT53ko",
  "key27": "4WASywWHYoqyutA91TCykvTpGXaL8TXv6Z4aX9Hxb3xoRHfWbgs6Zrs4zAQMXVEaknLQHXqHBBjpxrjpgHqZpYWK",
  "key28": "5Gcp81SCaDfgT1t83ovkq3ZS31yxJL7ZzieFjJcBx4TpW9etRCaHVLz6UXqkfAKosGhfEr42hmaEF3WSbTBXhZUw"
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
