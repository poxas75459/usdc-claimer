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
    "5F74dxYX6vueBrYgnwDKHpMfeGHkTGfdXuhkkbtRVN9PmqjF8uXnRFDAbBKJMZeHUQEbHqTqPz94Tm9Br9QzBSjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7n5JdUKCxcQjqKoeJZboPHaUTmzUNeQ1ATa4B8fuvxBXyxubPvCrFYrmMBMBEPK4JuizpuzMToGE1AW9ieAiPTf",
  "key1": "67UkqLw9iJzcFLDfk6Tb7f5gGEy193iMnhAqznRyTbqnTxXXVf8JqVNcdADTYWTXtbJZokWDr54j7vYjScA9QCfF",
  "key2": "3rJPxkgTsPdhEjmdE4ZFaus8ZGWn9KeCWceKYNjbz25x4GaTxxQ5abTFrb7hxpxCEFWu1MgTS7kiRRFkVjXK3Aso",
  "key3": "38QX65zF7W5MACB1vuaGpnM5mCVTseYgz9fMkny2JuZM9fFjq2PjZjaCDEZZXWbmYZHERpoTqXxSRjdLGq3JAMF8",
  "key4": "3E9FVnpBnhsS52zbwQKjR7LwmEE3BWuTma8Q5k8cNpUWft34uMBHQzXQdaNfBkH5CvBytVxxZRKPsaTcmzAG6XTN",
  "key5": "MmtYa9gUzrGPdCFZmYGqRGyGxJARKA2A6GnUYYXCitmu2dMAGRuFML8FVVhtT7ixYFXsGtNPxM5dx1QHAW4oMTd",
  "key6": "KdKh8FMt7GdAwehxhBWwS9HyHVSrj7qCDCK39afcQgNy49AsfWoG8nYkRDRos5KP46YgAx8PVaQpieeR5AHBkdn",
  "key7": "MTM6s2dQt1HWAVViwYN2mkMZkqJHRbpbhovMuRwt67UcDYZk9nT3pWNg7fP4FDvX2q3q3H2SMohGkhLBWgkMGZn",
  "key8": "9Ma3hZPKDJf2FXNrsdpYGPNjGcyKYMVkrvjn4onA9c9EVdv1BWADsKWt5wVCq7y6ZtYb9EPuM9HQ8Lm1uE1KjFh",
  "key9": "4qWgLLZ5C7ExjP7ZDJ4cp25YuY2ns9WUfhzvPcjK9XBXunGKDRVh2sqZ8zgbnNb43PDaekoXDBviQWMykVuuNCNR",
  "key10": "4HQAUMkHN2pooW253XmhoK1oGjMcm4j7qHbwo5Y6t2SXH79RZ7dQRd7baS9covGXBHMHDeiph7C4XbtWJFeXYPak",
  "key11": "4s4iP8ybN8CReeazt9DLLWjHZAtAAAEMGX3i8Qnu5nACBRLki5fTn53a6hAVmMbfkgF7RouxW8a4usSQbnsFD2DQ",
  "key12": "4aYQ9LrNq4MDWAWAbBsqAGbKDx8v1Aknb1D4HMLR1LNtsWLULHytfY1vWRzqEL3XiAUPRG1AxrwShys4mqVfFHAC",
  "key13": "2PrdS39KzGTtqHNHWidhCJFMq8U6tYdByu19vDmtHHzesMKJx5Q1YThvwz5rTpVPo8DxjaWqPY5DW7Rsd3KKifWB",
  "key14": "2QDMzRy42M964h2deBfh2dhqYqgsiXWWj9Q4SknY9BXtwg2QpvAVcdXEamP7DEex8ofvmSZfaaXtoWKrTah6PLa7",
  "key15": "48ApaqjbkbRZEDNdnqK8jWEKFjrTALw1TT1cQ2ZzgK95HuJ8bzML3GFQttvEpuogQDJmsSg3RxghUFCtpq7K1Hrk",
  "key16": "61PHQbDQpZnCgkCCNY5XjXp9Yaa5RuxBStYqXEhdHQjYbRkZz9PiRKjEx7LfBgZmjA4G1j9x4ZpUzLcArrmBAQHg",
  "key17": "2YuK2mp7YthX1nQiUbLdp4mxanBxDyABPYtLQmqcCerUXeMedrjnANBdU24ApTWJH1cQNZUwJDDDSFtBiUNpKExt",
  "key18": "UHnwEuFU69KHX8QoFUr9WQF7GecTNJVdvMG4dqvJoxYKQWk6cKbiYWSEstLLKAHp9K65zjUj2xmGMRDRKgxzCdT",
  "key19": "5sUwMhsmvGz6xHb9ADQxrKyRuGE3pZ97JJPYG5gFEdMtaUMsZgAzYoC65zQ1396H7dfk2Hi7rMdoussAm2SSRK2d",
  "key20": "3Yj6wvTP2CqmtpkgnyChAnHdHDi9C44eao5kRjWzLhae5TfqTixcGzKgYH9dvzi7rmRzhWonsGKAVnjKdyULpPdX",
  "key21": "5s6eB7suuoLha9uuWhHjAYxxUqaVKcyiu7cduoNav6LwDCi7s8Tcmryv1sPrEjbRWDAfFii99arS6RgyPJc6AVZ1",
  "key22": "xoZWpuYXPaw7h7g1AttvWV6jGKxUJ3jyM8t8pKz26RK93ahvj1ELkXq6Lgr4XqmwXJDvV2m2PWhFDfjqfYMqfiT",
  "key23": "tYJZUAixaYG5StQjcc2nHWjXM6UJHHhqU1PGVUdP4b7xyuCXZHez8H72xkCCRdCxkfbC9ALbLTqV22K4FHgzQoT",
  "key24": "4AwjuDSuGyeWUbtLnFKjz6tEbVd9P2CyuQzZy9SB4rzwgxye7rJHmRaXPkyu76pzc3R9hsvNgRK5mmioKwcUS4VL",
  "key25": "3fasFuVxA2rZSMKYxgpf4hqg76TsyHaBHky4n7h3qkNXQPHqKKYxxfyf13YDzp5SnCkJmWgAmzV8FzDZGminPGkB",
  "key26": "4iX7iPpNNHRCEJdX2XDvxtmFfXTqCc4RBTFAW61qLjgrcjSDXppnPg3PswFWeRG7KbV9Jci4VXcV5Pdwsoa6F9gN",
  "key27": "S74A4FETcw8uQMbAUwGKtKefPF8hSDSNnPFV5k7yXJpjj1mwpBFZk4A6CZAjrsaCNgwbKvQ4VBhSUckm3dbMuuH",
  "key28": "3WWjAsVwrXKUyPDeWv3wSmwsSjmovSinspkStchbPqehK6E5S1VXR2GCHvJByH2VS3ZqfvfR9nN99J1spzcemzPx",
  "key29": "4872zzK5MVGsFzRboR859hf5f9V4DH3AM2zdFJgHufuqgktNQab1myKdEuqm3SsThhmykYVhbRviNccM3QeAdbJQ",
  "key30": "38tgK8oTuj2gWTF7iqNC2PqcYVpkqdRKxnvSFzBvFZyJiagh5xG4PVtmPMzGy6n2NaWj7VBUjCYRR3c7dUQfJZKJ",
  "key31": "3YTbUS6i2jUQj7L44oBW4us6cJS2RxziwmCVPzetFDZKv7EL84bmL3PMQVBUNv9szdfBTecM6Qr517Y9j5YUdJKh",
  "key32": "5kWmmg7dwsYaMaPL3k1qn4sHdjkjAYzmqsF2Kih8zaaixkuz5JWw2b4SiEELFesXwyU3ybX7pNd2eHEhmEH9nM5L",
  "key33": "4zzmjrGUpZtSfzyEqxS4hrc5yDYemfhaaLb4eScGKGpN5N8iRYzFSWjqjGgdkwVCumBEvrUbjdCbD8UyXFPBPkM4",
  "key34": "66PJnK8GVeXfyPUvEtmPYPwAUs7QQXboQEAPznwCH1E7as7GbHPDNu93vza99PZzKcVc8zmqa3t297MaDV2Qf8sb"
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
