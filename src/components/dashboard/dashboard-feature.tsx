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
    "3PeFos9R7FbS7u2g4zMVt3F3PXZtng27iX32YqLGSYkzAz4esGZJ8dQqksT8kxHQn2aMZARyWhHDzwoWWPLbSLBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aGgShjwfg9qKA3SDtsd11bPruA3r91kKUUBxXRPjz52vWdrikzgTCSzJjat1oCYcTU1BaMj9aPP1w39hvvyH5Jx",
  "key1": "3xWCfLPnfsFzHc5XrVrKfr8h5DvYpbE476K9fEZbFxWKMuRXbaHjJiJch93tXfhdADbDC8uHxHbUabGwU97DBKVB",
  "key2": "2LHwLDFvFyDF4Qskav2KcYH4DgTv2QrnqUzXGC4MJY3XkYaY2m9XAVTVSZS1zVdEa5FpFS6uSHdjrVKCzMopW1hF",
  "key3": "5fw9TNUDGFpadmbKZ7ZzRbSiWXyhf1N3bNFJD5DT25woHvb3KbRzhM1NMoycF6Gnx2iLpzkdEPP6DyH5SMWTqJtW",
  "key4": "3A6sTJMLQ9RoBLGs1nSBEZFQmXS2xj515XzP3hLbLmgYpwhGX267QHBguu76bdfrRfWvCZyz8noQ78UUHosDFqWn",
  "key5": "5G9DQZXNKcRZbb8YGRRZc6RUKrtb3sNSKU4D9BYPUBEKckQpzjeswW7krJgCDw4Gmqiq9GoLJigyo87sJMXXDezc",
  "key6": "4nqzUm1CvmzNuDQz6m1wniwHQf8DBfuh7GyXmd2qoq5NtXKLoyL23ARuEy1v5vJPuY8R6i1QuLoi6YTHFDCeWXUv",
  "key7": "4VXNHUmeDx3iAE8aKyM51ntAEKCHbaQ2JkPD7cTisVbFzfoHCx4eWFfcXDLmM7SUBhpYDFAuiaW4AmHknm5CibKC",
  "key8": "2tEXyDBomCyM56YmYT63t1HNMnwpAAWq6GDDrAhUe23ZQtSgmsj2o4bwWX21ZrvHNpQpqZUxXj38eF8AW97ioaTm",
  "key9": "2vaLVQg5QhSoBuKJEt7Aeax5ZkZyjcUcH3U1jkctepnPywW73KYibt7JNvQv1zZU3dQYiyGg4rQHJMjzwzHu9Whv",
  "key10": "2UQjT5L9Gv84sqNd7qhvPLg9U71C4WoCGyLwToxP1YNWUJrVPdLjqnP5Wdz6Zs9iCVEpjvqYwEreXTwfuv1YaxgE",
  "key11": "2oboSM4iS3fCxVNzxnBpAGwPvbvLmXu32fBHmWJ3RVXdcpUFtLG4utWpujL65R3FdwgsDLsMqaUJ4JWP6T8B2fu6",
  "key12": "5KJXurw2p1iUMenwUnoo3SrZonNHLUfJay4hioRJgzimtrodshQr6X1qfaVo1ErjMEQ4Z1p72Pi4B6n5WnDhm3YL",
  "key13": "3CgfbKa4DHbsKjUwd5Z3jarjrvekK1g11ncB18dtjoFAv26b4W7YfGTXSJUbsfFYpLhrxTwR1x8HLeKYzgVfJDzF",
  "key14": "3DmtcrNnei7LsvWwzHLFVwLbZVgek5AkiEdtU7faQpCsGqFNS2PnVfpW9aZP4wJoCQJeFJofop4TyyJ6DTKRKxhe",
  "key15": "2XyuZtvoHXeBJBvHt1Nr9VBjdRwsfAWXj17UmKtYEWhDkz1BjsJcRqvPS8kC7seniVLjirSbSECAerTLTZkh1JiN",
  "key16": "26F19mwDLsWqzUCfJKqbS1E4VJbC8LnXVySL7z6sWh5rHYBXJMYVTpUEpsCpmdmnssNBj6K5CHHWowq8Yqx2FevC",
  "key17": "4a1BLs6ZrvFT7JGnxae3Y5bgKhVEoi67g5gaPQZb733mZG6atb6HHuDHLeh7XHt8x8aZdL3XqneoJPSjpgTZ8sYG",
  "key18": "NM2vqNqgY853CtYsTn6SZeWYpofR7SKq8UedP3zrZah8B5XZdeMjcWzNh8Rgc9sPuz4U47nhKtekm6TZF4iMXfg",
  "key19": "4VppPZsjLQhMw6pubgPLpiyc3awfBowj8WFVrfp1M84o24x6FeA1CHAYPCETRGR7fHxQHvBNewxZQ9R9itxUWzWe",
  "key20": "4YQE83Fczo7D92qAxucC1mY7ENYVGKkS3hRwjhP26rEpxktocvGuN6H3a5cf7QSpjFQommZH26U3ZrpGYpUnHqH",
  "key21": "44cLpzJVQqJ4KjDjwMfVNZ9oHct5b7cGFJwHC5tvFiMJLqHfWDYmbsrJxB2Y1nFguxcprCrErJoinQfsSrUXrbsE",
  "key22": "5RjMJhFsHgAwBxSVz3hg9aw6Kp2aFxvYs5wWbwVgUJ79bv3hPSr4oPeLN2KdfazJQAamkRhRDbwTM5US9jYUHudJ",
  "key23": "5RrUxtDdPfKbviLG2dhyUSGMZAwQn5t7tFyC3qndzjqTjcMPsGXKEjT121hdGcg9U3TFgy2q6LEByKJxdr31keGh",
  "key24": "3ht3LkTAhHF21MzzeRShP6SV5vQnS54urZ9XRBVWjU9o72YqgNHfpvAiLyWU2QBnSW4WRPTxFRJKNph2XV5fCTqd",
  "key25": "KmdTKvaMaFh2P7yW8S8iW21GQRSuSfgKPrNeV6mRu74W62R96avNVq7Cv1VVfbtrWz5XdxFoU128Gi2cJphxVg4",
  "key26": "u1Mz3vP1CwNx6vQj4QHmDeMHzB9xP9MzjM7jsodBMbuWEGzfbzjqEhpizmrZo4pGtocYsk1gTgjjQxKfS1cp4nH",
  "key27": "41nqiy1BWN1m7FsQrQBake4V7HWsbpf4qor8VJFN83P2mnhMNKxZVYLX6xJvrEJJNsiDQc6Gw2YDC67bSqS7YBzR",
  "key28": "3SJKtvR7dzDhUpopNRFEmSGmeLaiAw3F2MfTY8HinPAxNPuB25wpcmecwHzkLafTBgRMVgCWy6NHMr8hfVYDhF4z",
  "key29": "3JHgozrDr9fnvfSxq4yhBwenhBSxjLS8FGTbxTTnBeD5ErFC8QhrEmBrqdbm67TCg1Cqghz1NPcLCtUHsby6uUCy",
  "key30": "67rRyVzMoCYVfU7xBDzhBx9S4ZW7ZMNXNBkP8A3ybQg8L5B1YafHVUuEtuY2uub3kqZppvDBVqdRQbLGddfQ3g3x",
  "key31": "2NPHgeXNMUSxkcCBosAcKkgj33FreXytFY7F44ZfXNTXPGydEJ5ciY6pJHQzaxC2Y62bSBUR2m4S4nGhb5dzsTkY",
  "key32": "4xcD7f9TfcVpMTo55nD7geHLPGz6yhMJvA1Jkau1BxFyHDFAZoNH6krT2xF1LiQuwcUE6v5ha1gLjE16o5m9AGWV",
  "key33": "3NWZFMjibiJGYcJ1H4bv7QsThhyiwgyEKXn8ZLk8pYXb4WhMTvaBpz11Zbj7DJYUAywBoiw75YRvSjNDNGnKjdbo",
  "key34": "5xipDRWaqQRxLzLFksMqhBre5MKLHAVC6Du6XPq1iTbYJy9kTZZFJBDbf1auNhGfqp8LkE1tgGzqxKCVzSjVW4wD",
  "key35": "eXqXf9SmYYtrn6MUQ6cZCfViqsGP3Zy3AuF3TxiueMWMmNoerDUPGzDTX9T6pe5HPv2arTXWvLXcJynNBuz6uqW"
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
