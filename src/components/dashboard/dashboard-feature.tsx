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
    "52CxDgYTducmufAEEsybf4XQgAskUQv6vqxCf1gn4ZL4c9F5kwyMkhKDSLF78ZvgJ7bLBwZRvNdWSF9huUWod7bB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S6gsTbUpSxk46kkKUVRoufQ1kjbwDjW8nrWDoghs7BxbQ5sWGHQgHivJLTHjvpYNFAoEgWji9MsUVAjkFqNHRmH",
  "key1": "2sjGsUnEweLryXTUABJRFqXcXBceJAeswBQ8eu2rT9d9sDCPizVdeu7vTejmBKoJiwdvniXQHk8Zoxf3wkpAScNb",
  "key2": "3NbuK7jVxTbgMfa91EQH5uS4sR5twXv9aepCWH1WcbWnsHCQqaPGo25YyPy9aQte3b8WXU9FaVb4SZefuCcTXpaM",
  "key3": "58BYDHtZUj6SFAWPfS5K2UemyHsTUaDZcnp39Sm48drJd8NomMRWbFhmwkVgYP3GVC1iyxeMeyeKX5os5MymJndh",
  "key4": "2uDi79kJEAp7r1VEhaeDfSyxy7umsgjLXErcX4Z5GgFPDsd1a2Tv2aPBHx2MX4ZyPVvGmGEsuB1J9LvNtzE3Wkdi",
  "key5": "4UoYPueJqm5QLy5dZxzAhKBMJ6LBVCMxPRN36NDUhHt4vizPQPXUAgd9vT79Y2stb5CCUjAr6JWMgKJGrYFaQUFS",
  "key6": "2SNhY7PBAKUKEPFnmVnz9UZfGH8dJ8LDrJDVt346VB8pVVXXzhopS3zDj7CdyHRrc6hGDc3ow1UKNjC5WkMwxSk",
  "key7": "4w3otoz3jrf8UMCEsaDiAtWFuM7DFmm3TYHDd8tHsUDGvtsxUq9EZ943CV5oGmqMLSzf1Mw4GxEwgVxctJEVSDpc",
  "key8": "3vJM4M3NSHPgKnfwMApU1RDFxqFSo3QfKfEuLrUZG6f5LvK4zkYTBsjt5v3kJ9pwGVNaUB72rVeBJCydGayTkB5W",
  "key9": "2NhZ4znu9ucrNnthHzJpZzxVJsu7YWRd6FxBcYRuG3JwNUbqxxTeFfMZCkr6VEhUbRzDg4dTPmc3qs7qtv9GZ2Hj",
  "key10": "2qq5iL1ov1Vz7jfY85GXuJFA9TfughW6VppHbDS9tdruGDKAFiBHv5esHxxYkcX1EJKYZZxUuxx7xkovi24EtPry",
  "key11": "3Ms4ZH6VFkKHmGncMxRAohyX2suNcRKduS68YU6TFiBi9iPQagJ713MyzC3ysqiVhKKrfbcXcTrYc64Br6nyh9An",
  "key12": "5GfpjxohoRZmTKUj1rYu5VVdFp3FbboTEMvBnLZFCB6eAV9FdQqpUUZomifUrAEusPUVU4oamqGdWVuanVCGEWZy",
  "key13": "5tC9644uZP6ygNRKuwQ3et8xXq9p6JT3Xw6u1JHd2RGfmgqPqnebbY3ktRc7wD9djhJWGNHiMbVotCmW7moG1ujT",
  "key14": "5zHraxcCMcQJ1bzP6oUU42b87MAkTfm64tYAxpCMAvM8a4rUZtAHRt1n8tdDKwMneLYtKaBX9jQqN3wm95rR1q1p",
  "key15": "5DVJsvUKsKgtx7iNkWLakLXLgHpEE4yoqGuL4N5bYV8ijRh6EgeqSte97uVRDWoEcLvcRfFSZ4oM3zhEGy2uMzVK",
  "key16": "5kbecjLhMeT4NdmHmDZx8s5NwFHzUukmfxs8fSwpGq5fkrMXUiFgQq3xSwfoqnZyM6wfEHFnBRUCzMJz7gDNuba",
  "key17": "3F9Qh89AudsKCUeWqtFKFTpGiuk23TnUqUiB3q62yHnFF2ChtXbtwoGPLcUuCfUow2aJGsSF7nNDFDeJQCjeVcAs",
  "key18": "578LXWF6sSrvzYK4sHaN2jwMmFwyxEfpPCrsenWLeLsnrXnkBrbcK6D3r9PTGHnkYqu2qSJDNaAUUtw4fRtHjUPc",
  "key19": "4WRc85cXS14sR1obxNFdT3kNdU5mKFL2G9zJFxenZB8JUsvt9SLS2XcEd8umGhJWCr4gRwBP9VpWptY8bJfwE7RB",
  "key20": "5VGgeT9tpMwFa5WQR7LyGjQh8S1tpNyefDcpxospHZh9EBox1PeaBTeEz5AZjzBHwwauZJEJmFEYpStUmL8LPiBQ",
  "key21": "32hi14nPaBosuAhqC5gJqRTfEHX3nK4hoQuEX5VfSZeC7FULokGAKv7QanFhRXT2TjmoVdTrEEGdfnjxSNf3heon",
  "key22": "gw7pAGiWnnE8D2e3qD9y4ZvnS3RZmQ3WUgRHj3BKTH8s12rFkPFXAyfmb5MHVorZ18mVV273LcQJ1W7o7ekaM5y",
  "key23": "2Zy4kch1S9NMxbGSrsNwvH9CuaG7CeidvjSzc8BYFXhX4bVmJLxx1GoyjMwmnkmgBs8mRonSPj1C876iEoikHFAU",
  "key24": "Y6b7QcZnSmesgNoCS5q3BQ7dAwmACsuJbw6mRwf4P2ucy1feNqxRvhrV9VAnR4Lh1aydTGg7Z67r1Z2mikaWw6u",
  "key25": "2mFDRyqiGS1pQnGXG23XXpUHU9HpMqqiovbbui5ANYTwSuPKb1u2VLPQYxDfaUCWRcgnoAyiuSWHcaMRnFqnReru",
  "key26": "TmCzrigqpqXjkszy8Vf4BFtcDKGx2Am7ysQinsBGxnmXktfjrwn4rMLqQ83sg1fZ4RQyhbYwy3ChrQzRw6sZbRG",
  "key27": "4ejy9UsyiywjE1tTdEjBy1y4LEgvDgypybP7FbH8gNqVJ4iz9N8dDdBorWA9vLJ5gYnoiuhJ2LcMEJsLomFAnp6X",
  "key28": "45LvNka1C616XAssfz7eVQ3MzdJ53XTKqe8FyGTFEKxKjzKbsG7VtGqvntxvrY7CvRvhRDhb3QdYACVCQDia78QY",
  "key29": "4cXvhjW5CcqXmmhre1yQhjKgcVkuvyHTo2cTgc8xRU8qXgwmhM4hEnNF6EYxT7ESrRLB8htEQkX2GxJaAqLSowrR",
  "key30": "B6osdhybyvKcE4LeHh6asqBSVHcaTuqkQkWnDHy3kTmX1dqNPgfwDJ81WHiyc9HU5E94LNd5BWFAq25ZkkRkKmh",
  "key31": "3cCJXuqUQguJxepcoKWvpVKmbgS3dyK2eX7xJMNozm9N861apZQHGNX4ShHLfRnAhF2hi1aDGJLZjEibucHtYrox",
  "key32": "2vF7Cvr2ExyngMWFrZbexFFRmQKzBpf3GYF4PGH3zAUSa1kmzF5kAtD3m3bssavYGFkDsFKVRjW43AtUJFJpLqzX",
  "key33": "32hp2RrnhkcxfHJQ7mJutinYckzn91VcjH2Hr5aJPpaizoKN77jXaEo8G91WGMGs736Zv3XCzUDBrQdBmDKbvEbs",
  "key34": "YKjYYQsNc9x3XHEzhtQ2SPhBzpuaBXks6q1Arw3H3QdCohG8mMum3pcYBoxkxALLN4XMcL7iFdJCDURFvaj1sSf"
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
