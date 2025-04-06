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
    "3VoRfHQs27osNLkjt5BUKmBQbUZ8VzM6tGx18Zq1Soh3jLumQ7Nm8ueF5sn5zZrcND1aY9bGynsxdDncgeKEWhPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aXEz4hQK3DD2nVjnjJAvacm7NAZFPyRhqGioPMTa2NxsWwLNtz8P5yqvJk7ehyhygK3hR66uH2ZSR6X4rEo7i7w",
  "key1": "NhMXmYkc9jYMJNWDW9GTotrC3Gbx8VpbaaRzzy8KQAhs7QxBPMS66QzwRxjwKH6USbUbCm8NvMTmo4bfXccDoAa",
  "key2": "5ydDdg5FaFbgvVLcjjQTKZPmZxZrkwid3BrKmN64jjX5wjejwJc4wC12M5TznZaiG3Xm57ZfA14yPb3CeKpXGPDz",
  "key3": "3PUChi6xBACuxAt2enPFJhyqzAFd6cSoLAZHgvACtKvbgRcLnpUBcuP13N4Lva1323HiUPqGrM7nd9gQgDUF5S9K",
  "key4": "3vXNcd8kJaWJQB5cyvovHf1GhT44fim5sukLpbQ8CTvRdz5jvj2rA76CDxQPFC4MpudBZpKHK23JkL6Y1mTeEaWH",
  "key5": "2YhYD2aTi5ANWJ86yu3KJ1DYQVnRiexhtXXYtP3gGLxQiBmeDanSNGccWRmz1XSx9cZMK5KjFAKBfHzcWaGYkjpX",
  "key6": "4adu1JZ6FY5ykUim3TxcENYZhT3tpMc6PYxvSUACNdSnVscJAyNaspUC88FcPRmcCqpaKKH2MUALb4AXfvFqPxdC",
  "key7": "5Tg8BX7jnGVMCnbqjZdKEfH69W7Hu8wUiEqbueuV1tu8XESDNNYLRtuWprS7VBmBvgM3AVVGTt5b8Qc9HK9eFtUB",
  "key8": "5icQFodKCxqSorPJoMxieC3w8miNUiyULksxJxYPReRAwr77u4jEFzs3EBLFKk4FYWuYCeCG9T6pzejapyAQWpnD",
  "key9": "3uBzW6y98dCVsd2wVakHLNWCmanKCth763GvtX8JYFTk9A6oU92XFp3rEWhHrPihvc5tcRryGXJVAC2bW5dsazAY",
  "key10": "Yjpt56YrV1DVyUSn2HEVNkK6fAW2dAWbkQHUZhH9nTezFvJJa55mKJfqRqBGkh8sQ6XhWdN8zMBCTbJBSSbs8Ax",
  "key11": "45RT5oFfu1peNky8cPJcC8nDMASEFkd12yhrDRGVd352s2aoVXyJmRrZwzjnmLmdbvcZiEYJGRZAaZnjwUgFuV1q",
  "key12": "y1k3YPio7zV1J1hVgFx33UDMfBTGQa2fmtSAx9VVN9KtZcP3hgtwn9KSpuT7DjgaN8co4y7aszbNEt9xeUcEvEU",
  "key13": "3enKgCMwagzevfTYtqQDft8BVRy2epHYdLcSSWJyQbmrqfYiNh63dKQmRdLyQ5LJtYg6g8ZBfRhQAeunLdmW3fev",
  "key14": "8PTVzRejmP6hv4fJdhmKKE4hHUxwvAZEGLn9L898gMFXnqFMvGga6DLS82PzF1y5BxY323CE23Q26hCyQ4abaAw",
  "key15": "5vTeVEm9nXHtpwjxqkX55wN7bifM32EamFEjz9uHzhDkH1K7HyfDceBiwPSK6DreLuionv9pbEnVetLGrMFWgQXF",
  "key16": "2jYZwRDK4FL3e7XK51PZfwhwqvWmJK4ePFj3BWVaqLMzFbpbSRgW4zmTE8kx1yijDHi1PE4gMf7bG62skFwPH1qQ",
  "key17": "5hxmzkMSRn2k3unETvCFYBhUB94P4LrPKE3niPdxYRf4YjhT3ErGvcskZYLsXS6TKRGrhXQeTkKBDC7ZnC5fkvyW",
  "key18": "47JKu8D2gKTsxGjNWsBN3N6w9AAUdDP8UxdacLkTfcEmPMgmKmqifPRCR3NwqyLFGGWnw19QvKXzEUvU1rg2y9xr",
  "key19": "m3bhAiLz4ChwqzaTHY3wmnoiXnD72KYrgdHiqwgRTbrHdykdk69RLLFqLA4Gn1dg8eYAVyFoYKszn7eVGVqfrC5",
  "key20": "3GpgmhbMoMPew7KfyDwuNyHyPqcVmpVLFPgAumjJkAaoenbSiStPp6pzu7NSco8rstxgFbVKegh27poX7BEa2gLC",
  "key21": "4wxvPjcH7v6fbPhtswHQ9HKFZcsuMxoVRyamRUBKgQoXDcKvshdGNdTsX3qPQY6L3P1KxHkuXM2srd63E6reVv61",
  "key22": "3DNQr9C8aT7F5vWEcnTXiWUzPQxWpFrhCFY82e4pAs6W5vZVk6ikGS4UDTNAGaTSekRpKqvToykhydmzpDGgMSYS",
  "key23": "5ZNsHtPbsWrtMh25gH6XHXSs1TrKnuU9xzdkDso2AttwxW7g5nFMdnBx5wbJuQyLQociLh6h61ecZNWTH8Urgqi2",
  "key24": "2t3Z2xyN7BddAZ5FfY1wWTHNuVtkpdwV5EeSFHwejMQWiwGFjWPG4jMNrH247CwHMDEoiZBUUxbuzy154LGB9A5Q",
  "key25": "6Zpvgb56GEeKqtpHnEHuxQ9g2eYr5Z5RifZw64djyFXmYpsdkz6qEuHR3AgR8FSGcvypzVhHzKxSJvZuUiGftgz",
  "key26": "KZ9nUzpwSmyxH5z7RmCCeGfBDtYXwpQ6wngm7NrujZS5kMuMP6tqf938dwSnoKSNwGZKNjoxdXxJyo1RcJLkDtY",
  "key27": "5tupRzfEGicwuoZvEJHS9EAwAdJahEtTdzpVfGrrdQBEHaGzEFG6JD84PVSXUkf7KZuEtWga4nznoQaQdFeesKH9",
  "key28": "65DgwraUUXArnVfAUyWXGGC2kdWbZv6MHxJdmGTBxGej9vH1uxcfCrqB7e563wNB38obSivjwS3xDoqZkr54K6Fe",
  "key29": "54Bri3VUzN2Z1SkLSQXDGN7G9Nniu7N87bw3MCs9rnC3dXte5NoyaYrUpvGtHjk11XSmM9gaK2wNutHZgiP7TXDG",
  "key30": "35if8LGzGewrb2MsqVbdo5dxkncXQkHPQmy5ecGLeL9WoqxnNeQjvXg6CcTUYfs1f4W2VbQsQCuoNXiXfrrJguq",
  "key31": "5qJKte3z27ghQEYnaubfwJabLfheGj3d7pbMFKcjEdbac1YCpCT12CfnL8cBp5vbyMtFZTRRfJXmi43sk5nRvtpE",
  "key32": "FGs9hnxJCTwUpfiUk2zm8QXD6BY2FKdsqNthurcsUQNDHk968mKP5mbMsndwMg6defWpXRkioSDy9UgABYAEdyP",
  "key33": "4Nu9fGyNRjvGSwm7dFohk8bEvqCQ5FepU2HqbgCrdSQ24cwyVyErUj85hFKYdN6291dea876s4HLRbWkGkpJQ6B",
  "key34": "2A9ir66g9thW7KtpwFA21y4xx2ZtBwuDYFcuTfnRjdkQdTRNUsfnW7FVFPuCi8MhAvc13afUqqQbERi9ZxGhHPFo",
  "key35": "2FCRFp6FJH4nm8C79h4XgXLi22AYQx4SpwoHMLY1TKcgzyXPByqS3oP92zA817guZgDMKnNvmriXpsCjNsruqtgn",
  "key36": "jcUetnH3xn3suNHXtmB2wrxXXSxoG3RgRmYg7DmexSv6stN4yh9Pcs7Rubs4UjosRNNPgGQhkS79ZSxuJvXSkxR",
  "key37": "4Kipvb9m1ccrkZ7k7ppxwSR259TR9TFPBs6mwNdhuR7bX63hW4WPPjLbQMQ71DUx4ugufi2BytdD9DXEUtyxMpi",
  "key38": "2tuNzqA9Xd5fHpq85mFfyZE9NdkecN7ETQsKUhiQ2NUNjHExMC3jZkt5dScbxiN2uG89BSabqSiEd3EyCNfMgWUb",
  "key39": "3RE8zcArWNvvDNbryiLb9YDgVtPFGuG6RWF7t6LkKyGHPe5vpC5bsJdjLZ3zqyF4nvw9ciyUKEdShDCWqijr2HEd",
  "key40": "5E3KqFZkRULDtbw9geheK9VbncLmMjgqQwdBE1F9s97RB1VJb2KkTSUA1mh5EDK6sv3mFwTJCov4kfprgwZM3N5c",
  "key41": "3DiSKjyFKMAeQkXitYnxdrd1WbxfhWJVfugVvvyZCK6U8yNV4n5tJVWrM9XJsqpfPzDR9xNPsuw9U91c9CqNS74y",
  "key42": "4TXhmegpM32NepmCReXWBmQJne31eCyNJpWyvp23tZi8HtgwdGnRjK4xKqD4Uwd2NWYSwSe8pvp1PyfR3V4Z7T27",
  "key43": "2wjDggUYSs9bGYqVJJeqytLFRy2vba3mBPG5n7ny5u2KDzWaYY2ZN6fVSxWAPRevEmMqgJg9dShBDgrAoLRf3QKn",
  "key44": "55XERydFbHgVoMH1fYdpKkiMkubyffmyWftJebx4MbD9wggCJamUD8ABrXZ9ARmUpe7DsrYLPKXY4FafuexjUnZg",
  "key45": "5wwtUqvp782w75XJcLUsUBiVG6ECkeCfziE6hnCDz1pRfhG8HHA5pNoFXiWZsoAiKHZdHPRc4BKPtWGarZSooTdv",
  "key46": "amsqfuEUaoZSKwu1AzLbFnTN5FNEpJzRAnzvaLYMtZAsXptGzqNRYRgz1uMKo3wv41EM8UYzNaufUnug9TUWRnJ",
  "key47": "3oiRDJkjeAVqZdzStx4KxbVshEmXf6fsjfsDQmCLcxadaJnPann6xB1kRFDdoeqk1Mj75TZ3ijeW6KyLC3beJNcf",
  "key48": "4oaV5E11RCDAqJPTWmUSAVKf7x2ggWmkhsZTGCKnyDDqhrcjVoCgu6zAmeBHf16LGfVJRDjj8ConyPAhq6ib5Gq4",
  "key49": "sH6bdeP2DjYx4ZrMBkz9WVgCYJJFVu3y6fvmnKATSo5rSuQzUH27QuGhw9yyNMSknKNj1W9tGith6FwQ3o2qD6X"
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
