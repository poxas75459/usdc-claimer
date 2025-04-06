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
    "474fuQJ3cAbLf5DyKn8UXnqA4r9PKAUbogygRfe32pbL5iZ4uYunTXdrQw6MgkkF7od3FcJWoEgoGosU8QUdy1Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMGm71BcGrJuCb1fAaNjCjiUReYduzPi6BADfiKHctMy8kQPSkMKiGDunPGz2PtFWUxJZDDpmtrZYU3DxjeqxXq",
  "key1": "56Fbx52wc1hQ242318hZU7zBTffwBDETDKf7fjJiZeqvJnKYd2d9QDKf5cZiujEzeqL1veQ3tH3VA6Z88s19vbC1",
  "key2": "otjoER91JXRpjmS4oW5AZQXDSCMv5Vvo5JEYQZ8PJG8DWGb7uuPPj88xrw1Ruw35ih8FaaCQgYhxr6A8AL4W5av",
  "key3": "4tRcqtPVS4FaD17SQ6t7dZAhnSVC6DJ7C5XwMEhqb3S1M36m7mYeZd1y9XZA92wcaA5G5eng2yXP7pQB9gxNrYNs",
  "key4": "2MBXZnEpcyjgUDn1ddyMKQRomdUFqwQXxf78Jtgi4eormHv6a6VBoGigTp1Ug48TVhBt919ufrcijuTWSsN5FhAo",
  "key5": "5CdVt9r9chz1d5iwK8r5UvtSvyjp6hD5nhhTSQ76DHwGx3RTxGpkLPFVfV3vhjSzBVToWRuKnkc4UM99VzLWU2q2",
  "key6": "4B1nWJwsKrhJTEv8au772eey3n2QmyvTWsaosZQULPxuxHVAxGKE1sLn35VybrV5Zsu81a4aKaLY8KyPy9XzDnFh",
  "key7": "4mvV1t4sKsctuA8swTF3T7zFA9BiEkp7yHqg3zju1WkrvYpQe2vPae5aiqNcd7twwjBCdasgJDbBZxHXjno67ek5",
  "key8": "3py6owe27XvX6ad8RwfQxbrQR9GQjG6unxqK9oMMMeHnKQoxbskz5kzvQpBLCq1BpzAwJPb2hyDLmzNcqkoMd7FT",
  "key9": "2dhjMVVgXmpDqDtxvzN7nhF1YhNAyXc3H9T3nprXBq3GajxxzK5mPdnTAmSS49jvWYvgFQbpN7jAE3LpFcDrH57E",
  "key10": "iYG8GFGbzZUhBCbZ5WsFTsGtkCijrRRPJYMWpe8jh2TU4rZK3S1QndF2c3qKspAiBKRJcnqsSJ1EmKLZQ4oQUzr",
  "key11": "2seGNdACivkvpvt9fePXduEPSfnw8B1DuPxj3BJ1vXLgxoztV5JqTwgnBAXnWS7T76ogtmunWvbnpkWSxHbzByCB",
  "key12": "2pR9czhELQ47Gnadh19BoeMddbZ7MzLCfsM1kYiaJTVFSie7hsBVhA55PFoEEQLUyb4XcAA1SkmzpdPoSsxYjBHz",
  "key13": "43woKnQpGvFc5DPgSZQfEJdC3xKsDmGXwcddqDe48ojY4XcdFDPUMh52vGXnz5dLXrVus4oQq7LeL7wg5XbovyHN",
  "key14": "4LdcnayhscsL3nfAsK1jqHUrZPhQ6r2FQVr4yn1xv5kCFGBVkS1LWkP5tm1sWbLiyjUNK9Y7G4Y3J2kmu1FtWE9R",
  "key15": "wwsMsQ6mTh5waVzAoEZXpoaP4BYgDfeudrxiNgw68Anw6HwfmJRU4f1fJZ4UwXuepZtoimQ7Tnxyk99MnibNv3B",
  "key16": "38nRLKskv31wXzBYYVzytN9oAt6S8tVRVjhAj7pRji17XwMfXJaYLgxpxgFphAYpXsEpXG5AfWG9ZtWQsFvLTdNw",
  "key17": "4H96DW6ajs9mpv4dMJiJy9gZy5p4XQ9wgywc5Yfys5qCJWVfWkcu1iv52z3K1LD5F5AVbjRo3hRBFy9RBGNqyuXf",
  "key18": "2UjciN3zjcDEyiKkJ7DBED9FzCmd4TNSy3LgoLx5C99PCfukGEveq4QW9jiKzSwBkQRG8rB2apCt5MKowMimtrtU",
  "key19": "5R6FsrP4my1CDBE4BJ7JcT3dRCU4ZtxJMq2dsqPtriyGipYTyT57mURR6U25n4xZuAt9R9WY95Yzv6PSjrdY79EN",
  "key20": "42FNzesjDamxSJxctbjK7VkN4WfLSFZ3TAB2dmtoQGTb6NLpmwMmQEKxw1kUeew7cFcU8VmxUqVPMZDp8HFhatGA",
  "key21": "4TNeZEuP5xgkFFwjdJehuY9yzAugMHN67rrXVw8SMygcxaz16QobeqXR8MDVDDazZT5k1fs1PGLaGWAEKFPxce3a",
  "key22": "51EV3PcW52Qnaa8d68KQNPPQNsMXR4p37HyNDrkzrzG3kFdRTwfMLMmf7oRx2J9vL5YvN6hDrrHJZBei5muVhWcD",
  "key23": "4iQXJBWXXdntELAv8BcJPpbcienj3UuxxBnFLnybSpSt2ygdCiQT2TVfNfUb13PVNEjXwY7VZUDNNRxxix7xZGkV",
  "key24": "5pUWZ5y8m6ZMMWYTz2zgxt7kPa7LXfTRq28dXD2UuumNygmkxKZC1ZaGqnYWntirqvnZyWikjLWsKnYmCgzcsAAx",
  "key25": "5mkd2hxGjaCqZA8Zxh3upTTLUzRf5DEqQtiGnYBFUfiPARDqBoYZQKoiMqUxgW6MXpQdtgSwBWmwFvxaQA2nZvgc",
  "key26": "3L82Bg1159qFJ6ejHi1vTbWbQL8GrbNhvcvWif3BE8amBF67uuvCa3oxvmybYFaKMq86jG37u3SPJAp6RFRkHm5q",
  "key27": "3sRe6XeA51d4JMwTrz1CrYg26sFSHgbm6ZVHYP6hj793X8tGx5b4wzdrJeWiJpGnAA5geranJHKGb9sKWaFGS2v1"
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
