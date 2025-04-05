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
    "33zyyMcBrrxZTh4nqefDJ4vW6SpneTnsZXP3G9e1sY9AHFUNd7G4aSmMc2wiSR1Nzpzi3BBpfaFJPsnYGVxTEY9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JLZMi6RMVVyopSz8RCmAxo3jzz8WC859k4WrDvPv6FLFwaRTDDz1MwLr3X42JszJvTigQP4YMGszpDnQXPckmdN",
  "key1": "4523aQZYBveybFRgju4xozsusj9Y7icgHACp8LfUewhKeh8SatzPwhTJ7RD7Jo4gvoPigjsvoTHiGxG2mhYPQNhS",
  "key2": "2sTenKah5NAaGWyYmuYLqCp8mNiU3MJznLEQtN5GSUManyARg2rHvqnhq7AZb17j1QY5dXAHeTpDBgoFkQsVuef",
  "key3": "4DdjtW9nFxY7h5ipTdeCtMSQqy9Hy1GokJKVNiVidsBXbhgTtq3NwUsn8r5QgE4BVp22hS3fDgoZGnKLtLo7gzGx",
  "key4": "357xGJSrDfJFgJorqpTgC5ZFaeLGWyabUtJfG5SPM9iFV1JUc5qcr3uZc94Z4jG4Uf2XKPX8pdsGfFzWu5kKS6zX",
  "key5": "5ood6EzrMEXAqq4bfmCxM97CUYGD45gksT6fHMYueoeAGGuVANHx9YqZCi55xSsG4SF97z4rw4SRTJAffmZYoqre",
  "key6": "RzygUjsATBHdhSGbX9BvwxTUwb1CeQJShAZv2bAbqZgyS39Qr3C8G8FNVhZwbRwhXPpqbHc4xcph21dSLMKFAK3",
  "key7": "KUNFqi7EAgKvTmGXUmpJk23vf2acK7FJymdUcfzhSqmHWUhMECyRkqMxYpQMzFdnNVBAD73kkQUs7fJTcMAFENP",
  "key8": "3UShRuUaPxi1MzBVY5hAcUr2Zzhewi7Eitd2CCyzrxuETWWrFPqt4v6FcmWjU6orWpNiYRYauqKmk7ocdjzqhUr9",
  "key9": "xGP1kco9fjBQqDTzndeE6GQeU176CKfwmBwbFc9beskTYwnRaaYWXw2GkTN6To8A8gi1KEeJVVbSEgF7NgxxFwa",
  "key10": "48nk8DcobCwPBQVHb2a6vyaJxWTfGbJhCWDwT9dZ2vA9qUWsf2nEgLTusCHgUMS5Hk35ZRWBsRQ7kUzBGohjAePH",
  "key11": "YtjE6DobqyEJfGQmWeeufik3k7BFE2ibZPXYqmoVDhg5eUGnNUUYcNdw8irhNnnVbahRDMYcU6UJ7vQXrxungv3",
  "key12": "4HR3WWyH4P9d1ES3xWDY5qPAZUU9aSnqrGi6bG3kBswRHU4KCzzKKULdnHNCD5jybKSon9niw4KQva2sAp3YB8qD",
  "key13": "8vRbN55NrbnvYjAKte64rnXZQtjjTzxdxjmVWjzdZKrt9SSLXCvCx8v3YupMUrhGTpCzKUxrYZ3x6LJV4UkXb5A",
  "key14": "4tmYWzTZ9YNFyTUwRAA1jbrvY5MkKV4anEfEPuPumrMbQnnSrrP9J3JNv6DZXH7fgPzxj5RrVRSAdkUGLsMwRCTb",
  "key15": "UcnmebCEyP42cbhSAPSMswA5dXQbUwf5wwo3aZsSQucL2ZNMVGkb5XSJFnQ31mRGFhHfbvds3dqj3fSgKJ8Vrjj",
  "key16": "5UqgiwHARyhXyXAp8TTDa2qfeibJrP8xVesFJ9zEhEWUs18mUDjcPkCemdrtvZyiR6W3uGPENG6bFGJRMx49QUaQ",
  "key17": "5bwxnvtryQ2uh8ZP3gB9DcxPzG3PYQtskvGPQrCMAYu6tjKoEfasTEJAVfYXWSLmZGKzcQFNu3Vs4GD95evTgBQr",
  "key18": "NfBaWvSLneYzuv58C6H751D2xLHKvaXFCNbstRz5eLmM8WsGw7J8Ns12daPr4ZY1EnXNU4SaumFCtNTYeeySUxo",
  "key19": "3G2kET2pwfbTx4pNFEQsjQHK2LkhiDRdwy3prHRPdbvbbubEZD2nGBBnyH9AKFsz8YpdwgfMauKgMYgLeMmtgGJM",
  "key20": "3beQdk7AWmLwrRW6CtphNJ8FXMnEontAyiPnijV47MLLpswSkhmKBCUoe9Ufz3qv82pyjWq27XTFecW4n969VQwc",
  "key21": "Yo8nFA4xLveBsg93LnrsvTJmiy8EgAeYYQXikGWtdqwHTGCwsr97iBUS42aXMGrw6Uhy9ogL4Lsj3pAz7YCGWwx",
  "key22": "3F6jMmybsNhKbB6gAEwNBZ4X7xyxTQ2vNoJe1Q6ZWBEbQYC3Rz5hY2bZHCJqyht7Tj4eTdjzMuwGyjMMTj2ZrHZr",
  "key23": "3FyMs7FdfvopVFHns5B9fXS8oUmbd8ishkqNUcwk6mYdCmnwqXAfjfbAfJW4Zc4YHBVujXZoBzfz9rYE7kG28qSt",
  "key24": "2GBhVb4C5gxye35cGjrY5wJTFmnsmBmhqHopNJvuqFFbaRfAd67bfvJvzTEamJQp5dQgw7dHkN8rPfGYawnJfmSk",
  "key25": "53SCUH1WmowuZcFEPQXZedavHKNwVbx3iNuay7HfuyFSaaNZn8V3R9dJYrnx6aWLq14Zh2CQy67BRWQwnChwBVhR",
  "key26": "51HYwdzqpNGtgercHGfQqaaLHLiSPDscRbb23eJT7qc1j5WNv2QRPZfrmhVqsaq5oiWqLSkuGEB54prDdJMSX7nz",
  "key27": "rJehmoYBdD67rFaf39S3pUzRoF8bVrTKkWU3SycWh3HpBpJteUPHyh39zxY9FdQJc3Xz8CYsdRwHAGxjmN1TPEP",
  "key28": "xhike1MpXWo7mXV7gnmwxCrXMyFLmuZAezF4nBuV5XqbGQtHiYpKHJkfNdtnePG98fR7ug8EgoXr9QbvG1VpaaV",
  "key29": "5gCo3y9M3S3rLMLkfHt1E2AVhB1YJhaQr7ooDpZJCqJPukAtHHN3fnktvFSohteGPx79xpBuC661sJGePrVG33ge",
  "key30": "3QVAEUxiFQ89r9Rt34gF3jj69EJnZZdfzCzeQuVFkzoRoScUB6MLJgw9tesEEfBGRhjCtQLqvdDfm7u1o7X5hknR",
  "key31": "5JWsxvKNLUF4hcvwDuD8jMU2u8wxfSXrUwc59dNkbEVnLsv3SGCG4KPEnZKqWFmFGm8yBifSCsiW7AFsKQyWwufG",
  "key32": "2PkY16N4x39fY83BBAs8FgdcntwJADwe85jfre88GMfhqJWtupbApwuRnFEB84TQ3hhozVeS9s4q78Qyu7rVhrtT",
  "key33": "eM9rxhYFruFA7m2ZEuJXhybhGiEJJNKWaS3Mtggx1NTQkzeSxy9i3yL2uqFVJsVcZio2gyTABqx9JMnhTVAiWMA",
  "key34": "4dehNHm31BPWjT2pswk1NM7hS5arYSb6Qa3Xt4sj9gc31uRRRHE4LzNosZuyAi4LCLPHW2uDgSqcZuR8VFJcrjhv",
  "key35": "4rDwX26HjLku8QxJkKXcQpj1VR48csUBBuroMFn5t3eZmUW8wFL2epSQ8DicfpQjyZR5ADra42d3GFkY7daVSjy3",
  "key36": "5sWhy88SRLGpDK6c5RZqkBWF2soof4JTYtSfGGVsSFEgmDuhwQ7JtQtryNPRgfR9SPs8MgEaadJG9tYTYNE3xt3T",
  "key37": "eJoWLNFLrdQdexKdaJKYtgbYWTqN2bLqdNbn2mHPpkiQbrh91wRMDv3ggLctkDWekqWJwVf14Fa5zs5ERs4as69",
  "key38": "jJUFUMn2aWsiHmfTDNRvEbYSrLNKqZv5qALYcW9nFayumRCxTpCvvX4eEh8ED4uP8zcsyLiUPBUqXWzJjvCt6vD",
  "key39": "QNEf4XJumUtDihAfzUdT6R9tfiwrRCUvCw89hjrMQRsoheFexsGbPYdBGxpjcF5B7nAnzkbFciFMpS2AVfe2848",
  "key40": "Cx6QyWCx4tKHZr4ZtjCuryLGtasA8q3n6MAhVfcJWCwBVJwsbaMxrefgWAYgkGLHK97mENdEbx4tH7QHaBcDYpd",
  "key41": "4XJFgtrHedLGq3q46xctqzyCjw65AkaLn3BQHgVCiVyP418xxTQsZDaJGG1TzkZoY3EYSUvj6jQgPzN3XnZMw98H",
  "key42": "5zd9rNRQXm9UCZ4QqWf1amHwHWp68fG6TD7m1xt3YkF6f2rfuWWnDsXTeARhVzYxQuJwLcccujr6T9fvbwwpgdLA",
  "key43": "5WXXT3dBJbSCAcjZSdLze3igziRCH11Ea2wVVEkjv14uaBBru5kh2rYuQpSXg9HM2izewzz811jbbgxpMFawoJEN",
  "key44": "3a8RtafsPrTmzw6A3Y2awdzWSScvT65XubspqE2ijvbhRwgqdtbYrAsG6ETUZsJGJEnFF5ehc2EFFapSDdcbfjQo",
  "key45": "5iN4tofG98JkDs7ezWpGNFSWRi5dAF9r1n2ZAk23J4pVFzCLg8GBvHnq5rHbQhVN4SQ6T19pYkLhC8BHiCuzdEwA",
  "key46": "5UE7PJJ4kF1pApeSYDEiYjJCG5obumw9LMb5vnPegkJSywEHYkWnfn1NFQM9gD2YtLvexvmr2iYGr5vnPt4uV8nQ",
  "key47": "4wegDWMT6zv1ivhHVyeoxj6q1QMqeNDnEbuAJ2az8TvKWPvKWhnLUi6VYGA1RB8Cbj3b2qAGWxrZRodrMvJ5sbyZ",
  "key48": "2yfwTbCepie1YRHMMP2RhPc8P2DALkr7q3HFjtxoXMNjqYuXmgJRocNVxDHFD8TQN997pXeLZH8yJEk2DXpJVQMu"
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
