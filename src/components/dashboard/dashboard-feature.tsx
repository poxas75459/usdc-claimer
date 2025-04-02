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
    "3CyeKze1zc34dnXrftJToWePYzvCyrujRowxayhXQ1mcMLC1wcmkqwoHTRXFUppo3QWjBpUgXvCrizUuwz6vsRsa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7jJY3YLbV2Ckyqm8nKLCeCGJ2VpFgYykaSTdSDMaeDiqY5DSfdoDqnbm8AqvrBvyArULvBxabrXTV33zrmubC1",
  "key1": "5WzgvdoXrjdLgTKT89G1WPJJqwnoZxysqBDWhrVFjZfg4DnjRgUFHfJENoiZDnZKBE72MRk76FPeSaat4C7vLK79",
  "key2": "3SnD9yJ2R3TT9phEYo9ULa2w6Gk8Q5KRkCWxK436fsYybHFWSUt2F1NHghyX6V7pf1YiGtfdJ25hzkuhaWD8cSWR",
  "key3": "4j5aews9YU5uM9GzjPeqw9hsVNsvDBFx2M6WbkpFtv2wSnzbEMfESw8oU5m3PLYEWmL8BZmbgKvr2tfZbYkL9RPU",
  "key4": "2qjGKYCTnv5vcNPv2VLmt9ohrGxHDae4cCk1rxYtvxnFRME5iyrVpgiDD36TJKz4B683F7ME95ZesHJDdi9ZFk6E",
  "key5": "3XkaHhFtwJj7Ju1FF92pnFjU5YUqgQKC3TzfUqaU5Ei5oaYPUY81WpYiTFzwRxtMQbX6KrZgr7r84GwjkyFFTyfV",
  "key6": "4iQuqCKh4AjmXfiTVDwvisBiYXzDqad1t3LkTds3cVwUwc1S5FzoExDDBhsJuLwZJqKiG91MsqNgLkK5yBrd1wHD",
  "key7": "yhwi62Kq4eW41dubUjdFhKh2gWA2XeKq4jWMhPz7tAYN9qijpv6w1LnwTQJQG7YKg46QCCEfMRXFcZkjyta4Rfc",
  "key8": "61EdRSG6kik9hya84iugp6Ag262dFbwTbK8pSEBztErAfw5RxboAHhoABG4b7yDqeHZtfY8rkdGvtXj5sZPoAJ79",
  "key9": "3yL8HzLZv6d5P5qXifDjoxEQAGvC3C6SWwcjmiipbgHM2RGuu1DkU4pksRnMY444tWdc8SnET9Li7jQcCDr62doR",
  "key10": "4m1fJRzuPtx8Md5QwcNdmg8Bmz26s2RQXP6zDF6y9smApK1LPp7XQ8638Ky4VHEvwZXqyXveM2uAiJtHUmwvjhYi",
  "key11": "3rBFAwKmNGdNSjnjZqkSY3bw6Fk3dp1VgQfRnoX4xsFAMupfvXCmpamkZfVA6xih1mJQvRFJSJmr6ccMGs7Pisd7",
  "key12": "4SmTnsHFpk3aur3KfZs3gMQtbtvxpBvtJ3BdwghZjdhMvq8PrPy4GaQzRkFUswHLfsSd6y9xfQhMav6pJe7Mvxfw",
  "key13": "mHD8f1WkXCpJPGaD8un14TMMw9kHmJPZjVuVJiByf9toTR24L3idGCcbimsUwLwmASQ9EDDpHtw7Q1qtEBtNH3V",
  "key14": "4kt9Mw4PWXBJ2goFYG42d5tiXzaNDXPQPU2JVu7XSBBbSawr6fEUuXcKtBBBvYUeAivmUZAncugvRgYAUw4XkexR",
  "key15": "43KT7MMkR3Fe1iS4suo3HhdNccKFm7BZuMUuGrCyF23ZsHLDHFMZ4RFR1UE7h5LnrjscRUs2dMSLuRkhbyfnM7Lt",
  "key16": "26KgLuq8PKWfhremLqRevJfaNe69dGKQFUoqvkzzm6jg9yUFFvVDX1D519hnBN9ohJn8pybmHqzWYJXEbzeaTR1F",
  "key17": "34UC2AttKopDjBymwoNr951FY5pfK48mKN3N5ChKfuoRn9Uxk3WM38xLaZhGhsdBWLMAfyVAi9Jnccy4PcowpUkX",
  "key18": "5o2MDCZQ5nyanhrLi9w518PdjauT7V2rMUQJVyBsLukgJboLne5ktvt87XBjqsrLq6PPLQPFQpasm9WQ2ZGkCYR8",
  "key19": "2Y7hyjp2SbVjgnu8CT2dZcD43ejKFZ54SBnvr1zw8EmZpLEYTHL22ZAPJGEq8KYaFdi6qm7BrmQW1BqPfA9EUvMN",
  "key20": "45p72zmNqUKxm4QcRQDVjWFYGHXyqv4uUseKwKUW3oyu71Scn5NCjghRsVzYdofhi7UkU53atSgAwuU6JXEDbLvC",
  "key21": "31PVTAFarBXQtDEX5VySBCPGz4zQvowYvRprFZ4dTztpE19VMi2HeZCV8dBqYQqYfaNYsN32aNqGNKs1hA8gkHmB",
  "key22": "2oxKFuDgHYsDLFfnE1xgH7az2QTL4b1t6iUWoQqJt8V8D8wSh6nHNNBzfKR5Mbzj96LpTKyYjRf1wZc4nKUqGaEN",
  "key23": "4GSMj31XSf3L3AQBkMMk9zhxGgdyVQS6nCEVR6zpJUchmF9aq1BPQrgRj2DPSUwKnrahJRjBrhP4U2Sh3a2DXxFX",
  "key24": "2neoMSQqSuKqyLm2cbZJr6tiZ661iQ2zY5EP8QjXLZVtpSUMgK9TbJYUGBHRwqnpqE4qK7SbqDFvQoP1DmsVGj1k",
  "key25": "L6oNfjQ4AUGRym9b2Q8zBfX6K5PXu9jXuRkx9Vzm7WGJFoMzT435LSVejjWwjTanfHn185CD6e9n9TvKT7AitAN",
  "key26": "5D8fQ79Lz8UYUMFCMsdoFTt9xfd2yKQFu92oX1RfiApzJTXe7S2uHcpzs1kLrUfvzA4AStc2Lw2e1s8vsVXSRSS",
  "key27": "3fDKyYiwyXibaNCjoHKdnPi4ze2BUXqR9DvFC4hj4nZV6GgEuqTpk12r4NrrJHjJXdvrJjDmnPcmwWjf8D6RVjcq",
  "key28": "5yizTFGcvQJ1giMRYrp2frUM4HrSZjUQ2PxPjLLcy5aHsJDGJ7bWQnnmt3DSLsD4nYyVVDiwn8oLn2ReGRsEL4yy"
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
