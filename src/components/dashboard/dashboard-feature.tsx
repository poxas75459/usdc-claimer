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
    "2fd3rAJqyhrpwUcYfZoUtnQReH6g4gToN6U89rW9Q3JBkcnoSy8TB314HKXwRJorzRrRoYvwgnSpCJCG6TjETUCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SsWH46QUwFbqDJ71H6Y78XfBGPqY2sBNRgd12fxBoSXjiCsJNG3F5jeTtnNE67PHyfjeQZ29dr7SFJ1GtiBbw3",
  "key1": "557W3NmHXLY4UbzxR2MdTWR2hT9Ce7CCeBRNiChruUyHF5BHQhgBgb7mjsXMAnwNRgZmq6JGXds3h4BdGTE3Sz4d",
  "key2": "441hmgFirEpunYezzMW752hbrHxuYDf353JG1DHuAT8BTMq1YAY8sQ53U2ogjeQXzwubP5auKA67p1qZq39EmXyc",
  "key3": "5Rw1TgCz7mHgtv29ThGsap51uuhRyNZQWjeEGPf3Bf7S1qA8aKvC1RZPzL9sPSZbSwwRMf4ea4ctm5RX7jAuqZja",
  "key4": "3UxHiCvEDUvbGLnu2MHEuB5mCXErHVJNAY6Ccc9PK7VmCGXJm9sgNRh69iCebcVyaLtBkEtvw3sZbduqUC4nP8LX",
  "key5": "24F1nmRsLPMZzW8UN4vkyi4tgExJfEuiqxghViucnkvZ7qpBmy8uYQ4x1GZSrvbK1sZwDWxXasNVMcFzJUC61ZU1",
  "key6": "2B3uewW2g7gs75ArpswfH4iHrkqekcfprnDXkYoUiWtwQzusxTguoJ4ewK2o1xKFhqeutYDqyFKYzoo7Td2gPcvT",
  "key7": "afF3thEyJYtc1XkXQyeQhPtB6bNpLKhpM6Wzc95rFvC81K85SHbJByAHFkz1GvkC7jxCgnrVQyoFU5WU2oDYRyQ",
  "key8": "3YA6pDmHvRZsuXUqsJeAsWBMHEgwW6xxGHwqUgWVPtiNEGcZYRxGwuHbtQkiuvJapH6WkRgt3A1n9UjYcJmdG7DG",
  "key9": "64hjoQHM6myxm8WnppUUVKqzGJKZf4Vo6DjoyNWDdWf5TK4BLWcZwyQJJPuVHssxf2CcMLGaLjfp7UA8JAp7cyiN",
  "key10": "4PbtvZVKgPhNtLJHGgBvvT3eqLJGrMsz6V2cF4c6EmiT9XfoR7dJHpLdziXFbNDMfxxfZ7ZYbx4UMBSdzEe7ReF3",
  "key11": "5K6QWLjt3Pzk4DumdbDyqQtMims6PpHBDoaY2qWhW58fE9djTMpeDeUkGR9gKDz4WeKP19F4VSR62fwGYUjeABeT",
  "key12": "5Tyw4a2etVxrd3Pr5VmUYCqg5cF7XzwP5PmMotqNm6cUHT6X6YhxxvQNNwNRquiGe78ZeeMMqqyTnmDRqwxtfbQf",
  "key13": "2LXFGCuEuZ2ij6XQdnaHkYsNXZizxLX6HNBnFVoWjJ97CZWQiTegA3jFVvbiUdLRugqhq4pjpH3NyoekJWYx29FL",
  "key14": "HhnmMkMfmZVDNYs1h3z3UkxYH6Nzso1xjm39CLrFiFWqoaSA6pVNnHKFmcDew1H4eMCHEdgz8Mg7Swzghx4hAQx",
  "key15": "GTLWoRW5vnoNu5T8R7pso7qRgZfLwZZCNN4tNVi5v5L6dhz8UpFHSpZMj4dVpCtd1Q2sfspUV3biFv3VdGHopxx",
  "key16": "64T2neUwbqCMT9mo9eKqK2VK2xjAoQJCDuDnaTcsZ7CXcezxWgrQvRnwaJSUgAcBJYgqxycXkkZWweJaq9xEBfhS",
  "key17": "2DYrLa3oNT3zJvy3X4JB1xoYHXUnLXR8YHyVioms891Nmc3VLN33CwyxqmU5QSTJ6ycEiVtC4tMgU3CZRPGQenr7",
  "key18": "2u4trseDtFvC4nK71UxxgsSt1tinTcmq2rjc2hZP61JMQRhYuwsCiKCX7BWAwN697xDU8Kbq5asNsUR9zjDHVGFY",
  "key19": "45EqCTESWwqrvrGxG3LuDr1HfM2uU6eXEjj4WeZkAWSnrnZhm8FGQ5Q4xT5iiZhHFVUrWLqDU1GXDh7PhVLXUcbG",
  "key20": "5VqGtpYfzKjBeA4EFr1nkFDQVzFTJFcAshXEBFiaCFDyaxQWRK1kvYzPdfX1BVzFyWVHQGZf97gqGwCQWHERmw5f",
  "key21": "2xALchseAUQS1kqK6RXcZ87tGva6sPxFe1VvfLkvXJBvhHgGtYhctr94goAEwC31BUH9cLRtxV8TjYkJHQjem2ts",
  "key22": "5Gwd8sWpARx6DjCb6Z8pZy6yHnhoKPFGHbWchqvgnXNY3duR6stkYx91hrhR1HhLio3Y5U9HDHwSaH5L5umBskM5",
  "key23": "3RTTgfxJUuyvN25yGd6iWyeBLt6YcErFkUuqHAzfDhgcYmbtewtSMwyu4zNYhqRc2i194mtwgFCqFnDtATwT4xVV",
  "key24": "4BKqtPnme9qJA4mUe7yG8v59aoVz2HP7TZ1PCzsRADedjhJMa7wUAxhmD5u8VZ5aH1535cbdnZtLJuGXkXsJtEQ2",
  "key25": "4g6FgQcBBWsbHxyienwypYWTCaXintLcTvJvRrnkFxf7wkJT9tid1kqLGhFac2GbW1ZuQbocQNqbHLq84edc5KMY",
  "key26": "2EfT33TyJpambeju65sCJQyXd81KDGyCzEtgjLXfc61J9xzPSmxogz2tZkMgJK1ZLBP61AcseiYLbV74DYVbHzJX",
  "key27": "2pjB7V4ARvEbMjzuDzxvCWeAwhtfYyUVutBTkf5e3wNgSB8UTrjK9v3R7L3hiNpp3EkzCrtu7EXw9rTDSiP2pm5e",
  "key28": "49axjASvyLqURyzQi4QtzYYo6BubCJWo7rJK7mJVLAmzZiSqoLhhbDjT7ACEvif6nXEXddT3jX7HKMjQLHLwJcCg",
  "key29": "3y9ccLhBfdceeAhmoPcvTGXz5t44UiBa5nvvKqUgfn4jEA7wr45EDK1ccmL2erngZUMh99NXBEzsJpbLXGN9Jjas",
  "key30": "5NeXYAxz2zWiD6GBwACN8sG3YWzNQjCdS4mduDwqqHhysVcZJwUdQmmgk6y6SnShrjffthrLWxtgLKM1NvocpKdP"
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
