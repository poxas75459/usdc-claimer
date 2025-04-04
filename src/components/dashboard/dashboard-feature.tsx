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
    "4m8i938kz7zPu8fnWvn6FCAvHYJbocc1ABZs6tfw8Cj19QiAoVCKAbyFfKPygStYr6pWYgh3VMjm9yqoGyjaHggQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFFfK94WZkB1w2sXHZq8oGcBuKDookuPTcM19fJpc3o7ze7hLWtJywdE29s5ENDhnGtjMUTa5n7ijKtqB38w66M",
  "key1": "4Cd37fhk3S1aVXwnSzaH5iFpbnrBbuEZ4zxgYGy7hFMs6H5yKfHwJKH7e6S3HrWmTYxLw2Eufg9VUhPQSisjNPKY",
  "key2": "4fW4xjD5MXXupdCpYqUNtYJT2JXXWphAnoLksjpMqvMHS2E1Q3vUy7xJNQneDNH1NtZGVGCADYfyVLQSiGVc8NXL",
  "key3": "5iJCDVmwY1oNSvg5qfRZPJSuGuGEghSeMSkb5euMi6ak5e5ifqe6K1i4maW8J9fd3MTHwNNaiu6Wp7wo6hmbfp4J",
  "key4": "5RJGfhx8xzrYPWaotS6ZnXEAnyg6G88rRWe6a3u2Sh9khZE24nEHKn3XBMrU1MKjZowuibzjfHWrx1gFjxVpKxck",
  "key5": "2iZLzvPZabL94oWYhkXG8ZczBUh5eGvPTiHwdBWbTEW9cYjCbfdGBa6hXL6rVjKaVxj4qTD9w8AbqCcwCsPxjXs8",
  "key6": "4CgfbsqtgffEJs8MpEZdP1WFkQovGcqWN6oY6ztq5ozizxm4pkUvGuaZbra1sUHiXXiLqaHRPkDSCuLVMTPaTyDq",
  "key7": "2UJ13fgiUA6S1s7yBLFgD1Q1EoSh81xbj1yNA7xLBhjmnn9quqE1VKBVXiXyEiF9DeNs6HZSVCSaAr9rYYjMz7DJ",
  "key8": "57mfoPAqXibcixg8kom8e8PcLZsJHQbuArVih55PvgHn5mrWaCQL95Cjpd6mmGQ8aQSyeXcM6u7GdF9pXQYH4A6Q",
  "key9": "5Gb9pfwgYMyrEv1t43mNpxxLQhrrDmRHznTDpTAmuirBeZMKmBPV4DNhrYugxRmpYacooLwkxZmARCzv4e7ZTu1R",
  "key10": "3wkHUuhy6VrFdkQQd1CADRTopbjn1K6P6S58D7khQJNWeU92JSuCm9foBRUdZDF1dB3gX5PY9Ta5zENC1eXeHHZH",
  "key11": "54tzAmQ9p5W4aX1uqMNa1xPCF9LLQQm3e8rUa1uYjw3ZatmvvGvjSYpyJRD9PeQ1ust1AiaUZHKvbA9iYFDgB2A7",
  "key12": "h2K15sr2NvKpcrcT64LdAAyjCbhoG7jRSuY8uJaDMLpC6y4JpEeE7rCdNqvCFBkzR8tD14R9K9PCY1rW1PT5jmH",
  "key13": "554R4BnQGzykHQgHvxLbQyD5UtW3Ce6Ee7ME9YtRBm7Xz1ETwd38ZoKEaU9ta9J4tpUhy4N7hGBRrNinQKKpDA2w",
  "key14": "3gTNPM6TSzRLa48qFTcZL8kojNb2TQBb1VRWLeyj6Zeu6w9cZBjbuytQGXkUAxVqyLmVcg1zmkr5whk2y7fVHBgD",
  "key15": "4axnHwG8J8fBFweL4yoA53mgjgQnWLo9WqSqWyc8jYdgpYKHra5KYcmDX8MnhSxUud3HvRjhpJgv6tSiKYCHxsSu",
  "key16": "5hHDQnpruZq4JgcPYuGWsqS9W8tsLEG4wNMweZipcUvkhkvrxWLAqHNUgk98b5wVepfDQbhRrkyjJGF3M6L8g8A6",
  "key17": "5SXfoG5bv9LWqU3ZzMCB9uDCvwfJ6PoM9K32xy5GLTjUDKsFXdKkPx9RedSXH7u84Njbr1vPfCZnqNAkPc7gCeJH",
  "key18": "3ds9Gm8dvHyyPYrhYbMmVh5RCKo3QoC2u3pmUfHqv7UF2FHUNxxQ18cTFEw6LeZciRi7rYhsGDotXjYQTD7RQ7rt",
  "key19": "2jMAL5ZMskJtxYMP57cLVzhGDLQFTYxzAj3ygZMUNS2uuggWzdcR2Yd7ykxwZ61hwSFWeZsfj4HnuyZ8a5kVqeuL",
  "key20": "3irPx52mu9K8pa3Wktf2VBWWKk5uNk2tab9avwwWWmn8cXjpLA2EYmVzRLtZAF8MwJXoBEhgQHxCb2yNSLC73QCN",
  "key21": "2RyYd5BQ6SifgFeCK28JGe9a6tj9h2aACcVv2YnEyB1kFehG9A2z9mzS71UtRVxTcEDonYt3oYxzwR3iMh8tov9S",
  "key22": "672NnmkdJ4R5wjV8YrSxzJEb6zfKssJavM93EMCecUMaC24y9RC2WPQJTbFtXHFA27eJAZphGKaQoirFtqTyxu32",
  "key23": "2Q5mYXPgofZr9CdQPxSk2ZmcnQnJGE6wcrY8nXB6Bjk4McjgsAwCxRYE8eHrTfmqdUQDg2cAyqxhN4FNSgRgYZJY",
  "key24": "65UXwaxrSfSE8Emc9C8qgiTmjXrmUB1daVbuzhSGT3TdzpxA2v8fijJDDCzxvjsQBudayGcp2BzEA7Nr9rG4B6pG",
  "key25": "5wpbK2DQaybrU4LXUr5oG5wNASaLwHSuAHNFi15RmwndvcQCRVhauzpcpFtvqEKVu2MwKoKwingBrvsa2H2xKnTY",
  "key26": "3VYbAkrv4osHa2j5qFX8mFveWgjkARj2kQi8rjwHUadwKnzMgP22CWwTUe1Y6sZNmQgzdhf9bKMxvJNr2pgTpGEG",
  "key27": "4AxZjKVJkJ332gQwbKJNWjR7JS8NeFYxbayjwQYsy25kfq2uvBRUdPzS532e3SbtnPy4kage1Mrd2c7cuvr6Gb1y",
  "key28": "U58ABxmH953b2hcRTh6DAZ8LsKu79hABJ4Po2WeAq34nnkWGY7GUtcJ5BZmiXXp9aBpfzyjHa25CqRs8rk7fJ94",
  "key29": "4wL9ipPyHHqukBkriTUwwGfnfGiS2wMhRWEZbUSXDnfPHxQ7JgDefi4yMkM8SxU6455so5AZbnXvTRPKJCPgoJww",
  "key30": "5W1za13wE8udgPMxkq7kWhn1S7hvUV4Hr5ZwJcEf72Zuq5bTkasoSnprTdB3hPsZvEmMFmJn2FLFxJzNuwYzFHht",
  "key31": "uE6RxSXAGivaPDH5eATUkqnbAYjTfy1hKPn95e85DwB4Y9CZ5knBPCiNyXxGnnmHLgXmjn5MGHqi1Che1GhYU8a",
  "key32": "3zqLhwDGbUp4UeiR7YR9tqaQswnrNrSrmbW4zWeLGnDRYQG8AgRhGNgjMvjXoFXD5VHuqyGXo4pWbpCxnTJAZYcJ",
  "key33": "2EE2UKbS4zowsFtXERNTvz6DS4TMeZLo6aWGYXzyDm6r5EVufFFcUuF3hkLTLkamfCTFJ5UiHZHJ45dj8onZvUJS",
  "key34": "5KFfgkAtZyei2dbSZjAptQvzdpWFj1QwnjadCAb5PBM9Aa3qRp8yDzEjVv9PabHkSAA3qgWVrx267giZNk3HxwBW",
  "key35": "2s2M2GppvKZqNJdM4pCi969T1aoYmDz2weVXTPsb2RCvzG4uVvEm6nAxmL8HBRQFYc1C5gPZUaFHYitMfpqAadAj"
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
