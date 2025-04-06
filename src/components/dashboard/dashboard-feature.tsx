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
    "q92V4nhTeevLxHfwjFCcJ4frsG4cGNo4CpNTyiaQAx3MxtCxiQHpjtierCFUNEgKkQR5yan63wmcFt6XBubP9KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3La4vLC4WbAo26h4Lpu5VqKYF4C7aaN6bFeBZv5rwvG9mCTYMCz4jKoT7NJA3bLP3W6Gh37W8STZABBnQxFvVtgH",
  "key1": "34jfszb4EEjkN7e2AQaqGsimGuiK3LMDgP62BfJ3mDZ9K1SB2h68oVkJodXFF51MCWWHftsSCuiwT3rtZUVjoPmT",
  "key2": "4DVJY8sqMVaaTWSxQ3xZPZayg8AyWdc4GK86YpXRFEfZQF7vSaU5eWLF6KgSGdFxuUMkzSGVBqSiqghsUA8arnZh",
  "key3": "3Ncmchuo2DVJHLdPERg5HaqB7HXecndZxJVZyYj2uoTfvFxxvFdjJiDZAUnheQJYqkwizgZGSmVd5pQgHcopXkvo",
  "key4": "45kCJqYoBdJYxj8w74ASzwQY9KKdEbVmfZNdKwVUe8kEkKA8jnyG7GGd5jVmob5vpaNCvpXoHc1hZd4n6GY2nSNK",
  "key5": "2B223DWTuP8MRpkkDSLYxkR4DiaCc9mDnJSYW7mCodzMuNkFcSNeWSyGh4GfSdZ54sPeABGtEp857pdR9qYzkpA4",
  "key6": "2VeA1TTtV69eCL2LRcksNWXBfoSfxVK3Uyxk9pEKK5MQetzVG6mMAv825jJmQzHHCMw7DWSbGmKd5ggoPFSFzNxH",
  "key7": "3QnxGsQtHBJanjGDj9L5mS94rHXNgqTV7beX18Lm4SE3hQTgspQUVCtvHy2e5tbjcmeHb376dkczZWhhhSYXAVKe",
  "key8": "2hse9YVYE1S3HRVxLBVQvAcHMJfcHiREUhN3G4eYY91DT58e4uesACUKZVsZ15XqtvsBkJWCkircSzQK1iwtQCqh",
  "key9": "JUQePk4YZ3t44gPhR7TJnrnrofahiYmdJrhxsfAZFbiwMfuYbz6mE8mBrmmXP2pcqDGqEnTJxTrC9HpuQe5W8FK",
  "key10": "5aTrErt8MEKnvqYN1Kg3A35JKTog28T8DfivgvoJgb1rcw4TqanfVaj9MK5ngjs81Ztcd1dYd7AhvAqC6JfHTK27",
  "key11": "3fo1dy18ion1p82UkAVii7irNHdC8EYkbF5NLZavw2xQL9TevqquUHZ5KcF8S1cRovU71EpJnoVA88Xvx1PXeSKt",
  "key12": "2SSWWDfGTHPZV7t2HBCkTFq9wbBRSV5bT4GEDHw7SBiSXCeVz3ksRFDRd6EjeoT6ECkbCK7zt16eZfZKrAz3SZc1",
  "key13": "2fSs8dEKiddG7NaLyhdr5tV7FZXfzeon3k6LDubRTc6RGg4BEqmySrWGRrNteqwqs89bH4YFa6YjvG6aBjaupem9",
  "key14": "3md3FuXzjpNCZb3F6yq7FJUtFq4HYB13kPtQ1Wdpq1eRbmW8ZGkkMqfr9DNYgVAdpX9M42sgrH6a4PrBt7uvxuqQ",
  "key15": "5bBnMQB5bArbHzXwxxNJuPqikSdM7CUWFA6M7nBb3q8vyaTRMsLY4XHXWkGAkjJ2Sw5Ke19WN4joFfkKJHcP7ryv",
  "key16": "5nUtaBh4yLz1BRMMbGKVzVpvp216ADEFa6Gy8WSy2sxwNwvxQk7QBciDLaoQh7o7Fhb353oPWsHCTHvJRM1a6sGn",
  "key17": "24acGvEjydmjeMvXPvBHyzN1LNv73HzGRJU1zSEjYSi2EKm9oeuc8NRfsWLDNBU6m9rxy1AM5SeFZx5jQiBNqvwF",
  "key18": "2t6aPYVjQitKrrxMTgChQMCXMCzb741JCiLSQZsaeWNtbaiAaBbQFmeQbpdqN4vxYczPGoJtgqTMN8Gftk1JJFtH",
  "key19": "5XDWCzoUtutgqxzTJdW7PoRuZoZRiusTJSW2AkEMn67JP72jF5jdYy4zGPdsitTCohAqxuxbEGVDWJmLGM4K4e7M",
  "key20": "48SkSwdBdkxPniYxACsdsbp9iD4gDLWvwMfRRjb5UwvohTs3rY3Tc9RjhVc9Z4WjEEKnydyj8wiZxPwoDUmC467o",
  "key21": "Ky9deEUHT2npZJxnojR7h7MDpxaDbLNZE7khkUb9qjmaTcu4DbkdU7oXSqxTyzRU553MicbnTrQQb234KBUxJi8",
  "key22": "3HD48ASSwwTtmT4m4J4vDZS7RXMibu6K8qMReDijgLR8RWEPbTTcibNu172BYPWbLALVU9MEnqTvtEQGhfNihbyL",
  "key23": "4vJrLnspyZBASo6qy6yC1f47BZuEssbU9NHdNn7cwZ2ZFXJ5YHVZTncbqPCV6mQJNL6vDvjB9gZdcqnaqSnsVotB",
  "key24": "BuqoN9TMi4PDdtfX8CQdV88bfDFJTibJx2AdgJG7rkqKenMoyEAa3qgToyUj8TyzXkSrHtZHUeedmR5K8iKbM8y",
  "key25": "5g9k5EqNVic2neS4oqG1SCU8AqWxKLAeH5Cj6yzqhmhKixwXnuVShte8Af6fnfPuacVSzPj563jPjG4gTtKu4S3h",
  "key26": "3GznRo7v9AaHajXvRsH3SJm5iFZ3my3QdiXRytf5tDYJPkAYEsNorpJCDru8X6HhZdqdPSzcUSTBkUmQe844aREr"
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
