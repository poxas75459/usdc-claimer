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
    "323hrnGwfgLxicqrkrGuLgyJkFBK8pvPyt4J9GT8AQ7gZsnFSvGsN3PwejM9kS3gSdMfoHgo42KaUTPToaooCiQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KVYgbkFVuydkFyeHL7q86ghAHDhqksmp6Wd7FYY3xK6i42CYAKF1F5quXTDkTqwTzFN6HXR1KWkLoh79ioPpcBz",
  "key1": "3NVVhW5wpNpxqkJf443jt4KkVHQdJVWQJ5ruvCu1Ax9rfsybC6JGrcnJJ4Q1bGn1FYjJBrB8YzKcHr4AfbG2mATA",
  "key2": "33FLbAazi3RKPyQZy2FgKV27g9x6dJMyfvw6VXzAo9Mjwoh1pevAn386auoQDcR8Qpu6N5HtzZBET7a8mRho4jUK",
  "key3": "2FqajqLUvq9PzSYVcZj8LJvnXXArjVqDGF5Ez15h959ag9GMZb37SbXriD3zweKEvFa81k1j6pqmfKvzovEC27Ze",
  "key4": "4wi3YxW1njD79sya1xtd4jzZeMDkLk3YVd9MLv4gJAR7sHwt7EYekVqd83WKAjsTJ7ZKZGXNEPYMM622Gsnyqaxk",
  "key5": "3SzTqF3RzASUuGXDk5NhxhJDc3LXJRu3hfRmHpuuyg3fhYs1dTJYmwAe3jEHsD6FF1Rf1BwYr7kbJhWyvZbErmfG",
  "key6": "576LPvSNp8xBx9vnHqmW64zyqz9Pgzfjc3TgffnmXuWiBQZqFVEcP9Hzg4VzXURdVrMkGY4vSvX4QZzXJM2LXJPt",
  "key7": "2qwmSNmqwQQEzAK9haF9bHg1qEJUEUBLGPNMm1pC8o8s8MNr6N1tVSweQAVakJzsDKCTyvQSJQUcq3aRBBi3ptjs",
  "key8": "55S2zgTnZDb22PTHcsjUezhi8FqARsWFqFr6sHRgKnRVPy4mT7ZZw9tX6PSWEJKGAp67V8xBzNmtv3MkWXyhmUai",
  "key9": "21GLnyR4Vv1opqwRTSQy2QnzmRNKXqmhAoZSpqYCyix9BXBhLoiYLWPRtfZMTDPtGkRuedqoo9V8gtkbkWtcfUcc",
  "key10": "37pLaFZtxFjeRNcke8LX28fdyW9yCvxsndZUK3DegA7QcgT2wPzfT3uqzBj9N9Mi6M9xPFCjPDrdpY5R7qiQ7zBL",
  "key11": "5FDgCsuz7jM33F5tqEcw12JDyJrXPRNxgT2zdRpammRU5W6ByMQvqGg4NKpBVpDnW9h6qM9a7C3GKaqSfAcconvA",
  "key12": "29U1E22mbR4KbSV7XgcNruaFvKvVBbDQeuewSZKZtd5DyhmvykJNrVYxHngPqEfxCgZvvBZjNZrj8HWxJDeMzsVD",
  "key13": "2rERE8aN2nupjpKLR3zDKuCtxUXxf92XxP73KuK15wkP7Au1LZdMgNXgHHXwbsce9Bsw1ceenvjq5WHrCZZh4pAq",
  "key14": "4L7tp5g9EbhdyiKDNzYfxw6NnJsVXpRh6xGg4Ap2sUZd3s7usb6aXCS73gP7eQJGy7HCiK93ZY8dnGps14nfnfTQ",
  "key15": "5qV4fa2Z9EaJH5fU2yCgZu98LKi4AHSwL1N1D92YmSDVr9fBmk6jLT9Zr1HunDH8N5yYaVWapVueTeRzS4AtFRzZ",
  "key16": "3cVWrz6TfXxfvcnd9bfPHLijVTDdbKTYEjoXz7LFZFJdTgnMzSFYeZKddVyyTk3B8ARjhQ7xmhJJfwpauBxtAAk8",
  "key17": "5f2sgvQvLCgdraLGQRGUGDRuyNwmxaomYfenMwDfsEeaqC37TvmMbAcvWh7cnFiap8yf1h7QfQ4DxJ8M7ETSHnpc",
  "key18": "LewtpBQha6aN1G7er4RRMMHeFPXmzVY8XD9ZQDQpXQezs3ZnKYTooNYFvRkB6JDCDJL4bPZX1rcbic6XSo1rnW7",
  "key19": "4sKhBvgxeqrkjdnassKa5DR29jRug7z8fdxomUv3nFhaDxFSxpY2kMNCSLwfZZrajbDKcc6pAjKw5UcrykjuGGEr",
  "key20": "CZzorGLmfdoLz2ikoy5P2kFCUanb88teg9wd58YzbecxTGJiBDaDWp7sFt8ACnyxgCxggfmM7s7NeUh5mFtKcGr",
  "key21": "2CpDFQ6zUdtn8UpHNy3teLYS9Rh15nEGhFcvD1fK6j7ArWpczKPDFbNEP5kKkhscWyT4oUpXt4QWkJpoXG4PtCKd",
  "key22": "4tDWYBdiwJHRgZfAjJwnafsZfpTaVZTm1NPnghpswniZPDEVEEWUc1no6fPPX1GD3iNvBTw1ubRnxXAVoYxSLcA8",
  "key23": "4oG5rLopbYUBg8HZJkG3hMHRNFuGEB9sJotg68VpUxzMrHmoGfQEDVQNwdYPwwNFXjf5QovsYXGbmfMho1ucf83d",
  "key24": "5Yskp8qUub9QKG6K9MKZN2fw3er9gD9R8aNgm7uS6Meyxb86W7EqoUbTohTgPNpAwE4WtFm6XLMux29vJGH8ubjD",
  "key25": "5xBUwUc9xcG9nQ7N9DmkR1HDZrUvMBKbybmRi36PYnVRGR556kXRnPKWJ1rasJPMm7hdt4ogNHTFHbFzEePntF3U",
  "key26": "fnhUwAU9Qzmkf97ZwVFQtt77Vo8Z8VXudNTgSpwQEtSDhgnLWCVNShBUxt4SbyhFFFGxS55c9XB45s22jEWjJpP",
  "key27": "2nXAiya1cEdB766QTW6MNUFN5THxiCYtLocJ8opT2xPuwZneVHso8aE9FGTkiuFCLJmeD7Zwp5YGgG37Wp8bfmah",
  "key28": "kDSD1Q9q9VydasKqruvSAJLyAcU34ZFLTztKdPhFUk1HRs2FNR2MAVk89QSzuSHD96G6GLeLkVRr9hJ4i3e9sHC",
  "key29": "uGaCFd1TiKZ9BBvTrxd9TxszKjnvmecAoXSwTREtcjQAFquupp77CxjVHo4mC93gr5U21f41MC8tfQGq2JJoSpo",
  "key30": "3xKorwD239QcVtGLoBiHc94TR6zxWHvSoYKNHSWM5vkeFFm368GMsqMJUbvXbDAQdNch7nnx3omNZXhNz5Jg8pT7",
  "key31": "5ktc3hhyFRQzN5pFhZXqaEk6cQipXdZ3wty2RDcG1QkoSmqXBa51VbqArqXavTfJ3xaLshg7i8EaEKAAWZAXQRiS",
  "key32": "4MS2SKemRSWgZfYRr74vmBwuv2zL8AzfnrYFscbNndmdyyL6QKZkyRpeswzHvuQRctgDd4n3Ya8rGXFt4ateS1iN",
  "key33": "5FByap6h15ZoE23AfNqYrS7P7fxMAqwiYHYQo9RoEq7mpwnk4wc318atboC4UYscFiRhLP97tyHWcoNTiE69eZbA"
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
