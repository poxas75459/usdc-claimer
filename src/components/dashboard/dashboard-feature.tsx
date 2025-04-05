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
    "5TxQV8YKvYWvwJtvtuujf1pJG1cKcPFCkqoCz4J5X7q5Q6QmcCSqDVAvcYjp7xk3WcijXz1W1KoSfGM4Fwo9sUBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32SU34Q2n4KZLGWF5eWFUnAQfLZfraPZUxHwTdarz4iEvQXvFvQ1Bb79cZ7SeWY9wNeaKLxGLLEsnKt9o5Rkqx8A",
  "key1": "3TXNGwseCA7CttizNVm2dyCbLwsqLN3Xjaot9ZrNSPLoA44MgBVTPUu99DLVLwyuPYbQZuk7vBc5cszdjCbofTR3",
  "key2": "2zCCux7AYt6vtCja5nHrwEPqs4EF4UeLeyYLKW84WBNGB1Kk94SCd4yLSYXFjKD9oj47egiw8kbc3iJA9Rhw83cC",
  "key3": "4Nw2mThEDDyr16PFzLmwfu8dYq5F9mWTUciL2jASy7ckKcHW15U7hTsPXwB3XaWYxB8a9Gf21gFfy6DUFJXkgk8B",
  "key4": "4EnoxoHdXB2teVuHAvaWV4RQzijH1isRaxxpAyaJqriaUJxUjdFeRW9oB432yVQmYCMa2gkG6NpGCMux3R2gQSoj",
  "key5": "3qKuniSHst4JPq8sJnfSwgMAnzrxCi6oYQajK498U9EvgVPV55Mm3nhb73C89o84N6qJgfkaBtQSnsrRNtfgfyvi",
  "key6": "Yugg6YRBLd1xzT53qonbSvN8eaKw2d8CaXZW8EsZDvcgXcbtSnHf1LYRaJtTruYGXAFk7cacFnPKy45j37LqtgN",
  "key7": "5iBo4NLQWTm6TZVP1DpJjAjk4wXqRgqTnXbEERme84QSKc556JppF9rN6GbqRALKgcFSNLE8ysNM4tM5BVnuk8fo",
  "key8": "jsWzXd92eLmJcK7U4wRzsZtpabz9em98DkbpEuR9RRqiTzc5CxueWs86DiW9wquK9azmbXi6Th65MxrVvpzbdQX",
  "key9": "HL9z55oP9ZT52vDFwAhneJnWqdqyS8GLv48eJdodxFatdxME499v93qGVTRUdJKyvkL8QE6nHYt76okLzk5dD7S",
  "key10": "3HoKP8kgCtND6MUQUyesZ2PYWdHaMWkoinv6929JVtBr47M29C5bgs8C6YRSYX6ZehEKrRTEjPtyKkWUzbE3WtLp",
  "key11": "Qkr4EPRf6ibQYuJZSvdwdByaQZj9Kxg8HKRm6bKX2JfZb7z7ddqhdnhyXXwjqLDJGnxsajVcS3DVs8uxnwmJKg9",
  "key12": "2KnGcDEVBKDckYBw8bGaNwXKPAxMES5WgMaJeQ49uSknRKNY5TQykwzgduVryisxJt1xxXRjxsjWSqMr79Dgd1Sb",
  "key13": "4Axc5koe9UVbSL3GECfAE7XKRrag1Zf8fQEcK3BroSjM5g58tyqorWTkSiqdw8LFoDRaa5vMzm9ECjvQVhq3wU4o",
  "key14": "3dfVjZFd5QbxzLcy5yFFsxwCVv2gBomWjmcb7CNAR9dwfLmNXiN12KwmG276nZBixkUaJfxbWkqmay4dHrhiZthU",
  "key15": "neCj9YUXHrX1Fh1UNYqqjReCrjCE6vqGkVC9whzF6znmjTrZYRX3fUBp3Qhqd9L5QNhUGUHxLdT7b14RkVwKzGt",
  "key16": "5TnQc9hGXNmxuzPqiQYquXYcQdgdJbNWzPvEu7m3Yxh67cF6YsEGuABRfXwEdiLLe1Xc4yjHpXGBVqTnCLZv6DY8",
  "key17": "2Gr94yV9L2xGya4t4XvakdSTk3hxobhMMg2q61vYVQ21KgrSP6HXzmWLpf3N6nyM6n85kw48GUY4ErCLSdEWJSgv",
  "key18": "5PYgphS3H1TJi4nGBWR1iCmWZv3pVhtsdKtrTUFHSKw1BZQhYrHmtowxG2PqktcJ7JDjQ8werwAhSsWdbvcRU5LE",
  "key19": "e3kTfh9R7BH7c92GsXxt7P1SwLywAsPGU5QmvrrQG8shoTLrxajeLJSUpziER8yL4umxdL6rYscnJejvKGkbBUZ",
  "key20": "4v5czLa93g23a7U5xffahvAd99Qi81rWypBeLRHLWDqhT4MLMWZmHLNGpwkhLYm78Gas6czaJyk6tUwp91ugBHvq",
  "key21": "5A6Gmj3ixcYVeBuudqF9MikREbth5KxDfhvtxNBWGU4dc3Vk7XoDavMnw61CYMjvn8yeWehX6fG2VQqFycaH9WZs",
  "key22": "5eutf7CqGpWEBBi3aBciM1GaZdoA7ZDnshmqvQcyePsgGA5PZAwb2ycRAu9GTUwDVwp7U258DC9uRVUkFoTD6ssE",
  "key23": "4yKaDxT2WiFBJZYAkYB7pmBPRdPRGstXYXkvUpknh58ydZcDS3s85K3shsPAMecLeQ9Dm1XVBqczKpHpt9V5jS95",
  "key24": "2HXCYiS1eVqJ1mFbfZAe4T329VASWr4HNgHAkLYiighHGqijRpP8BSd9eXezfrksH94NSDExrMmcfSExeZFYq637",
  "key25": "5cie8GuL1gMjV9EAA7hb6Uodt6JHMDZuAVXp8qA6eYs3N7ecH8cJT7bkEdp9PErCA5BQvc1S3T8wDNPtJbpZHwd7"
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
