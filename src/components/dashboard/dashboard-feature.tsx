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
    "3UQzZfEow8xVi17M38cy6edTNehoF1uiK8zo4Lo7Lb8AqhFZJYEtmJfBoWd1bTuN14TSFQVFH1VRsfMkRRfVbaXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9wY32UmP8cD7Xc7xmyCdpkSXyKvYFNBsHfJ78H1r7MZpGkLhsuXfsr7Z3oTuiCSD9NHUi3xFcGXmdRvGzz6c87K",
  "key1": "2a9KhddhV4J3cdywZwMLkzdjoyNXFtJVHL1oTyhC1RNwReQqmU5khHPQgmFxT5ojNRhhHhZDpV8g1TRFugGf1969",
  "key2": "Ejq3FomBsKFyJzRuULfXZEJrMESd6QoqV2JEUZpsM7MzN6PtWCfxAecLGxwvqbcVqNGmksA8dFKSzu23h5JmziK",
  "key3": "4MH4jWxQpvX4AtTUNDXu6NdFtFqBNbRjVdtnQ2ErsT44oBmr7iMEDxGqPcWE1i2dZbSXvzJxiYQmv7ZFF91YGTRR",
  "key4": "5qvJhG4tkngeSsdTbu3EbTuSHjAMJnaF41pq5ByiE3t9SSVuinwCPc86kbrKQ58d6Qbh7bVY7iBrY3EPUmv5gFi1",
  "key5": "2Jmy1A8UjffmCicEK21sVBMzSBk6uLZtPBZthAApj1ob5CpTSQScdZdH99EEJq9WBEvBRpqyTY2zM3xYeN2PpXSC",
  "key6": "2DZWedfC4SLGawVvFP7PNACqbdFacn8HCVj66qkRr7kzY59EW5LPyEwWwnXHAjJfUPNabMdB1wN65eAXiWCP67zn",
  "key7": "2GQtPRMQjmeYwqwuasFcWJwR567cgcMP3ZCkmyE9SFvhLCX15PaZ2eYBiVrvtPYsi3FMg1vUonHqaajdHBPKdbVu",
  "key8": "2bxePhzavufPw7Ttpfi3ezZ2hG5cSHuM9D9Fe7CDNyEqAKKK2iDRdQ4kwXcKJYnJ4ZteGUSgxQ1vbGvBXrU2uSCV",
  "key9": "3C1qc8HC8HjxoffUYq64CyKadkVGuJtFK8pZxSZ7W6x86ZrMuootsLKX5kdemx37Z6GPeiUnmrwEUwhY1dckb8Ud",
  "key10": "4tL1yXATfA3fqvUzXC7hbkvxW54tS7jFVpKwyvzzubfE6PnoKTgxyZSa1mWjgNqe4tLKWzEncnK8psc9vMsZtS8z",
  "key11": "3b9pYfyFG2rB7sAr2VwYVHWqNvFnC6tHCXC5uZ3Ebt1hXxUGg1Z4JpJVJbHbqQ5GyTTRsWzNDFeCvfqEKTxpekot",
  "key12": "4QZTS9vDjPSBbYgJoASh9cj6sitC6gthhDQSZTof7K1aYZZPHoifV6UrH8Ncb9dcvKHjdtWVARpQNQx9LYBQe7CA",
  "key13": "2xXWQRpwge7WnvNaDge7ZcjBdB2HNgZGqqMTpLgCWMvM8grYrqxdzqfeXB7zxZvD7gMhSpFopsQZCW9q2tDwXPgV",
  "key14": "3USEfo8JGC2w2gUFS5PC2AVdxZ5enubo322wH13jmzMRPcyCYJf17sjW6ssdZmzab81Ykt3f6Qm8YDeZ9p95GBiX",
  "key15": "4KdDTkroXnLKvZwVYHpZF8EcTUsfx9mwjN4j9LtfFSsQRioW9oN6KoQxGjHNEo6wzUMSvFTVXBnQusf6hUhMCuzu",
  "key16": "8if3xcRoSuovm2BzpxkVUoL8DBNExC5YxEXputp7iimavhuFY51NofDK7jhBn7XH9uGXfMvsGFMHM17hF3zZuXK",
  "key17": "3XN8tswWRtMWzGd5iyE9XNXxqmS626kTfS7pzTx3sQDcBfFrgNJAwC4T65csAbEfVLEKsQmaVnUFt3sqEXj3bbRd",
  "key18": "uzRt22zJqp3fJKMncbzh7fRS66SXVknr1NwuS6gFT4qvjXF2jJGYeohj2Jd9WobKD12BSQcAgfYhnHUW5jdrLtx",
  "key19": "eseti6dViDc4gNu3tuJ8qt1kiLn8ixuWSXKVtuBiS2iTNj81KbYUWsotZEgJfqpZ1wVknppuXiXcPk3J9tWvUVk",
  "key20": "4ErfPocvE7Qray1fEKzNqe7UpAWmUUqS7VvxoZaatzWaaaM6mRg3KN8R2bYTVTF2yLnqsQgVA3ocPP7RnkvJDYKC",
  "key21": "58YB5wASgpRQfjZ4KtTkFRV6zNtcDVv1Q9jqUxuegjPJjzmkn9JssVX3RnrX5dAHX3D9uCosQSSJoEJG6dAUqvez",
  "key22": "3WqJ1tWsGcZb7NiUh7XK3k8ccsTcEbYffpqLyafyaCPM4MrmjX5WhUeePn9M4M6FKxsLbf2KowWxZUPcoVzCQKDT",
  "key23": "RMgfq55XhvBDfMtuZzDC4VPW3AcUXURWB1WA1pnfN8WmkPaHd4pZ6NQGUTmetbxMRw6CefHSSFxAYneRqfMYHL4",
  "key24": "2wFCXJu56dCeR4G6UwZPtGQRhfVENxawATE7XqvC1ES5pLmU7tGXC9fc3STngVmqrV2fzXwpj9K1Pd9oYQYuWWHP",
  "key25": "5EDNsR9r9vJp43q5Ma3SnYHQEhFpHnsQMaohJtkAArjdo6Fw5kvchZdRcfdtSYxjpWSnpsQsbca94qZqrxeaAvso",
  "key26": "4gX6RHjJMEZWcF2xjEUE3xF12258Df3rcEdHLWeQrXthiT48FL572PgvyKR1H5ktrkQj7r9dwtUNrDcnUXPePwgf",
  "key27": "A72FvrzdWZTn8wUCN5r3uFg8gYnpsPHCFQWSEcgFYWeaRVa52Ahta946sx8VDgMh6sE7LSTmnTcDH8RZZeuch4L",
  "key28": "4zTNDaFkQFhikLZP7TrBZBk4BLaBSx9VwZTEBgAXbxDVTyeUXWKWrDzuoSpwXrn21vU3PUyMPqeDZ7rvDmfJwM38",
  "key29": "5qnnQnhCvfxEZBMusvSUK8Y51RGxfpYQWwnjmatRPymM9hqTrrE8RMwSbCasUxQq7HeSkrf2mDaWKVUw9YzsN5cU",
  "key30": "3cKzs5VYs9Grg726G7JrETj9CBuQxZNrjXAqcHZE8kEQCbWML7954h22UTyXHyMtfrhkbi7zMSN1qaEM8Cbd33L3",
  "key31": "5WSLT7hzKyTzue6FYchtnu2fWzYccFyWsjc37bHud1nHFmQn6e53dALrKC4e3Z5UQffrqfRUjUtR2gpkhJianBH6",
  "key32": "9DNFc6ELBhpf5eGGfzRTkt1G2eLu1xLd41uqtho44rk5BJmdpBgeFnkCr1cLEQVcbXLcXgQshHL5C8JgSga9NbA",
  "key33": "42HHiDh2v1TaxkNSs2PpxTLwSe7wWzqr6V9tiMsd2xbP8iYUAfgJCo6aoATLHjDWoLo2kgEbe4yS3ebiLhCnAkZW",
  "key34": "2d4B9ggWpavQF9ospQooKGpKcVx8e5JQeb1R6S1sTKKF36HhUyKwwM4fMv367Jk4FiZFjvcdU6rt6BCBiTfJ5qVR",
  "key35": "5xPCsm8kH9VwxzdiV5tPfnv4STUHC4x9xfuxDDMJSwH87h6CCjYLMkfcBpgGPw6MBVgfiyEnYMZtbtii2GZCqoWW",
  "key36": "3HYB2XBrSumNLKoAa9WiQ71vnATExhjGPLq6b4nbLhNnnwkgAk5e2yFuN97cwGcUuwmfpaz73DbGBeiEYFSPsZ8X",
  "key37": "KjV7gtjPhNmixoc76xJfr3qdqH4zGpZKX3TtMLyfFc8aLLb1YP6hG9paA1HtFfEXfSd3adGXAJVLPSxt5uCLaei",
  "key38": "2CR91JhrCk6ikxUrMyNqG8XvUs6GLwMgV5XbjhuUaGwQ4qckHew8ryyWkmE9HJ4DnstnKaLm7fwNdEmi8Ns1UgMB",
  "key39": "4pMe16yhjQuSEEP66SLofy6jNTrixvZB9z85NZuqmFTVmahPK9rJesHpwuA7P7zdT6nGsW3MFzSKFTREu7wzM1D8",
  "key40": "2vnBUk4Xk6sEMH8rf7Tn3PKygMdyre9tYQrD5bHmivXdFQkMDmkGDK44ufJBdbqF2GPppYX1h8zUAffqrUuVw7Su",
  "key41": "64fyKCGqN8mxFiTQCv3JVHFrJ6Ca16ctq5Muappt7dAyeqsXU3xdkex2mUemz86GLH26khp544qeZhompoCxjjPh"
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
