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
    "4b1JnrjgewXAvd9LMtKHHgL6HVmosG6BQT6UqpABcnMhX9ArvCZhhD7qdqwbqmuz8tcKDxnGsxpywzZtojLDRdfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SUoJQgy4aPUDGhTcGUAgQzpWMhEyRwmTwh7j8ksALxKjxgPxqBS8AgoNXhycaPzFvRAuTTEtC2bmb2sV78f3v78",
  "key1": "37DfYb3aqafyKRc12Z9oa7N8p8qr6GcGL1QAZZLWQU4ArLezm8GmFhyBqusgZES3PU1rX6Vf54kFEMKyMYiyQa5L",
  "key2": "5FydcaD2dXmyLYPHbiBWynTavhGHGajaxR3KkqLuuZzUYNWVFDWRCRsjfNSjczcEWWN6u8W9rqZZmvJBTxCUu6Q7",
  "key3": "35gzgMePF5SW3GtoMok2DAtbHds98Q9L9YyDJVfsUiQBqucSkZy6ADtheZdYC9BdXHCXxj1kuJANTJUgxCU9duhp",
  "key4": "34Ey1LFDPD3yqfn5RFsKDXuSZB3epK3waHPyJXRAJmxaVApscLRJAyjvFXMuCwTkA3p5EFWpttMDMn6Tmr7KM29X",
  "key5": "24uBzx7njrvTXGgyFzvhNhGQSumCGTcyqPeqp3JqAvfr1ZULPxbwnDi5mz4uESAmurfVTRhK2vDJSRNY9qBCx1Um",
  "key6": "3Xb6So7fYaxyr6hk9FFVYe2C3W8wGSP4BXfLaDEz13Mv5a8LwkHJXHSWDLBRP1CanubyeNHncWBm9FjXb4LhptQn",
  "key7": "3S41Kj2j2JfU3oo33dPvPdb4UNn6sHWt9HkcAyx9ixLk41AG6SEnc6oZd6vBAEPnzcd4u3uBynonwJYwZ2WnFjqq",
  "key8": "3yY1x4c57EPdbZp6CbYnjRrtLqzZtUQpAegoekuzoGxdRcVNquXEn2A3zdfnd1mGkdvCbuxQL7rANDatkwjocEvx",
  "key9": "5Bjpq5q5zyng9JgNZjXgcKXt9bZKewMSp4Y7XPnShtQMw9uM5JUk8N8MnDyfeBqXR9GNVr8fjqNnnjqrMNpAwhEU",
  "key10": "62DRfPe13XCMdK29dAtM1RH8ZvSi6Ap47uSbBFF6ErA5qUtMSexFkBiyyxZ6piA4SAjwzGuQu3qBXPECQg3Z66w8",
  "key11": "3z7z7ozGiYHBimMvzpc4fnshr6UQXGS6rfJgaKR5Yd4vHisWbvYjUEvPca32ddmcfMHWwTMeCBpPEDkBP9haNqei",
  "key12": "26aM6esCFNYPR3jeyzkyWBhytg8GPbqhfkmLyPn3YyLQK2mYzfrQJk7kjyS7nGUDhygXwk8cjHt1s99VXPPKGouG",
  "key13": "3D1fxz8R7cz1GE8JXW5rEfTGHQAPaeCkKQj9tdJJzpYPWS5pTugNPyMigCYydUCjdbTqA8Fkg5ZvxdMTC3RD7dNB",
  "key14": "3F8uZbcvaLZ34m4NSRRPbUMcLPJFi3hGw576bwHfXgv6YzNP9Ni8inAg9LbgfLApPFrPBH4hCNzfsYStLqhsndM6",
  "key15": "485sTqD1LeYSnrFrAmoFy9qoDJvQxz4Gr5D6FjPDAvjrQnQXg5wiaXaHbEZQva4HTXatPAnNHg415JxKJTuRmxiw",
  "key16": "4NQj2768tALz3YuDda497WgrCbfP4jAaFnE61RKUjH7shEZsWsBn8vcoWfkt1QJVGr7WYDWVLaa45kaKvFJxkKJ4",
  "key17": "3yKMTEts7rUqrHuaAtWniXaHbzoAy5JMH4iMXDocQe1yKGLqbXphufuBDNEGauCffXG9rSNZxLN7YLbRgTsZzmMy",
  "key18": "3vZjueRt7ssejYzamWrsFqLHVDy1dnLYV2RNvHuvjGhT9nCTq1HTXRjU45WjHPVT4PwLrrsTTKqLH7RrmW3jkSxg",
  "key19": "4bhiHSzGD1g8my1aTPqPnrmb6QJ8SMHPNV94dGVfZGGPD5wPEYY7wj3kd9xmewScNhHfTtXHjQrHuE6kbt68ULnQ",
  "key20": "24CEEETpjFrWmBWHWzmJovBfELMiNyH3QTaZoMm3CG1QTz79PMvt5cUGB3z6ME5DVgFswkYKLDHmuS5PUMdNwkS1",
  "key21": "3rkAwvTNGgmoSPXGKaPYtUF6GiTHf25sJwoirMN57wpatv8bNat3pKjPM1mkZAacGXgQAzhEjgDzm9RixHtRtemU",
  "key22": "3BF1wJvJUMb1vqLjHWoShpaPRM8yyREH3ruyX4srZ4iZBpcJPqYhto8EFeBG77c4mhmnCWdJvCBXP3iG3NLfRYen",
  "key23": "3eChDNyvwepWymi2tTCJzUZkxUUmY5jgqwBdsvZYWUE3ENe8dFvZVSbVmugSrCKDQ9VXRMcjTQjXRjm6TKYPTGvj",
  "key24": "5f9jfSP2rH2Z9k1d7pxgqUzxHvL4yDXtfVRK5S8YqAAQtzx2KHxyJZdxsXJcqNQnaUKFDN9vxNwJLdtvmLZV5P6K",
  "key25": "3qoTijPweRmogCowNG9qSE5DsiFFymRBBpSdLihYa1m34tbjhNsANiGuRoTsrVyY7UeK6iQEf2FeZ9tkDZbHgdyb",
  "key26": "443vubKrGSxnDsAqX2PooKktM5JMCB33ti4J4MTWnrAwd5ueV7ugEM6endmmdmFDHQmiBWpotDRHNhhvDttS9LK2",
  "key27": "pUjtV16W5WydneVbW8H7HGBdCY3V6yUdzTfsC6hMrq9LviG83GzSzH81V8etiKCmDvE5Q3PXHAouBxyEUh6JZYA",
  "key28": "2Z8JXMgjnbRjjbdKKhCQBA9zB6u4itJRezVk4F9iepb2LF4LTYS3LHapZ2UWfrGU3FYs4rfPnDDi92jrip9R799j",
  "key29": "4eR7CFp9T6UqdyQujn8d8b3aEF6PXnxuCuZansoWG9KKqCfFCVSq1mDBAoNQ4KHjGMcyGbwsYYTtuCNdZ3EvMZUJ",
  "key30": "PWCoaTuaQY9zFV4YfcGefs2PW1Vd82APiUwhqgDo2t4VtPeww7zEDwBis4Fcqu9fPeutHxP8Yw9vsfkRj11hBmG"
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
