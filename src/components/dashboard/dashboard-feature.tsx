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
    "3tQgBFzP1fLgPtbfMG3LQpsVjGAznqWg1bHzPJLkUuULcbJSZWYNA12jkhvM6GqrAHQs3U4CGujJwXJ3Z6NiTLsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3egZ7gHGu28ZfXhuALk9jcoYZq8LXDcsmSu1Fh1m2dx7mR3MKuKgu19HpetYyigs9UjDB3cJrkyJjzmA9hurK85H",
  "key1": "5b4kX6gkZvonkHJmojVuYvp4DmGtLWv3Az5tqLsxWpPkVVEumBDm87pAFaFyghfUhbvB5JdAuTpkeS3NP54dJxbG",
  "key2": "4JpeJPwGeE1cw1Bw1PzhetRhpNzuT6tgX8kvCcjCjoiUjJKXjrhWB9wKAo1WLqYTedzQA8E49wCNrJKopyq28qne",
  "key3": "6FRCAyoXQp1CQLhZ67MEBVmjdQmcDgf8AiRaqy9BrsAMgFKfyXPFYAHLJtSXAUFhfLqzDVQQb7JmVF1vwmnBD7u",
  "key4": "3DvduoufVFznE2pgPNAT8fcLYqtdMkhRB9TgxMSQDijtkmeNQV98wdfBTc15fKkyLBF99D2cc3b9VzqoYUeMti92",
  "key5": "2HBwiXerKBhnJWeCwNkK4DTtN5owES3ZpBe4D6oYXB1otPrkm8wDKHdoUXbFuTZjBx7dzgdx3Ge98aaUEkvYKFJT",
  "key6": "4172DJR2stgw17vy6pvb6iJKjDApcD7kskDXHTiyoiPUiEzy2yUsGLfguoY3psUMSnJGENJ2acfuCVQwK4bLmmT8",
  "key7": "2jF4WXACdyszJKuBdHH2Sx7GfDDVFR3RMF3ty7QurVZryJuVP2cmRC6GpHDwq9z1QhQsoZ1wAQNRTxcE3V42mzGm",
  "key8": "37z72px7TqRFLHLkbp9wwL8R4txmjSL988hGioWukG4cdS7FN32GzUzH5AMrL8UAAkj784hEbmzxVLr4WJVjCiFS",
  "key9": "4saufbv2wysr8eN5yZ3dbosgroR4R3ah2A4UV1LjvNeYWb7CUX9trusiWXMAaA8CPyqn48bW6sRMDByF5oAe5x2s",
  "key10": "3gUNUQtbdTbDaSzng9e5xbGdqFMfSSWB29rZKXVj9grSw91Wg1NUTukKufhS7B6Sqotzr5xd8SnJ9EBsZGfwvTMp",
  "key11": "58AyiYysJKDHS4QevTKQYqS5R3t8JumhSwnR9KtLkZWWhQVabe14nMcUZ5AnXPqLLNCkMDHtDc4Uw2A6XAnAGymk",
  "key12": "3SabAJm58oWjqYCgjcSddnKfj8Tos5GkkG7YMGVhqskPVeYHGGZ19tkkXjEWqJ6kg7WiqxZ8ftBAzszohsTjCJGJ",
  "key13": "2CpJadBoZTNuGnhAja4GTHBtX5YVJGJxPWVEFoTHgmzzV54bi48uoAQo7ajgF2FpU5agJXuvdhbyCYcUzCeo8NBQ",
  "key14": "5dPexv7eQvnnWLz8g3xGNCQW1QQBbRnMdBpUZErMieDbxZ4KXJc7QsvRCVFWGRWPmR9SfQu1n1oPrM7KULL9NYY9",
  "key15": "26q7gjrrVQwz7dUJCJsvZveCGXoZ4TpxyEd4LVUYX2Xkc7LEWfMndoVoYhudEiQUJ92KTrHg2n5o2bJ8D569SBVt",
  "key16": "3RnjbFjx1KxZQXaGGSs49aUSRVUoRT14MFbbN9dMuhZnCXXCyREsZvCbNw2fVAsou3VsBXEPaEJnJmFtP2EyyWfy",
  "key17": "2dLh57djaULxJpWbXBvfQTDA9fdnvmsCqVUM1GAfTBQAT1fgLG442yRP6B1axse1DXTz9sLs4Ea5BKo1a8M3SXnZ",
  "key18": "58EUnRf1jVvcKJneCejP5uPM9pwmYH4tX8n3VzFU12PQwWc5sYHg8DNFqtFsrPvXNZcHaJKc5BsBUS7WfCcpPjDA",
  "key19": "2Tb6VvrYn6i7sUoEwF2x2Mj4MVXydrAWLBjxCu4rJM4VRSMqPTgw2vhavoPS9WABdt1hKUw3aAKgPU9mUkq5Yy2R",
  "key20": "5iosrq5WsdtpuxowPmTe24HnmV7vQjutAYP6QreEXXDQZF54AN9jJECdModWe9JeArDfg2S2gzUqKujaCuGAxAt1",
  "key21": "2zdcgtCtJmWQgGZbduNYsi365ciUb8ikgUsUPSb79Y6t2bbbWeAZxK3HxbCyQtf5bjdwsR7MhuMKzy8recr3haZG",
  "key22": "3FyTDocD2rqgKqJ2s1dRsq4vZo3JtuYuXoWKaP365ARq1wxQH1fhTZhCnPZ1m3WAhVvCgw13x9mFnUHBga4tM7Mt",
  "key23": "5ysNoJm6d45jzXbCod1rnrwg51dqgnhVy9QNt1HWWRhL3sqbq5nxEocjBtQiUUixBLGLHZQeq4H9KwAYUAe4wbm1",
  "key24": "2nMZzh2nyR3vYKyMrptguYMJ6dyxfZBP14XtWDNjdrDt6BeNw2Uu73ccfEztYxCffEmmp4H5TYH3w9nN58e2DV7E",
  "key25": "3Y4Qgp9L68befAhYHq7aEjmHCK3tfXcJFhfsMAh2FhSZCZQgZHZuGwG8wsUQcJe1UdZQKQhqKgcqy983vPDtUgC7",
  "key26": "5zYo5nW1UUExPM18BoBVTfHVLU3dGGcntjV1NmFS6a8zP8ZEZEwHnigjS5At6aTwd8tzWEa56AhJMrmnfWCqYfy4",
  "key27": "4qD3PNgXTfbVdKXZTnJbEYtDWuSNvaqqch1nCNVhtVYwjiDzhi7QuxScfJe2Yb3HcajdzV9XPyxbksPB5TwmaqEb",
  "key28": "37xZHSvmpKizWqfNPWKLtf5LpZzFGughiuYyBRv2obmW1Yrx198MX8vzc85P8GCboCieGnyEdqWzRXnHTWmbebnw",
  "key29": "5a49t8dGDsgxvh3vZGzSHUVaEMwXs2kcdywuuJuB8aMb6mDjrPC4CfzDUpJT4cUzcvK67BPZnfYHdjP8U8TaafsL",
  "key30": "48kYFTVP2QWKJYP29CTVCg9bkBY7uRTgWhqNTui6vajPwR1byLM6GzEgPbDVf7zKbgDFPb4xjg5YKbFXfWTcjhcV",
  "key31": "xWrgT2hWJr2qYfs3LhsroEeKTFHGrN68BLroSSZ7JjiRYBUv5vGuKsxzbBkEaTKmBsfEkRK3roBGttarHBdj8Xz",
  "key32": "5bt39d6A6conJb4SQu2REqDbM8FkPhw4wuA2L6uMCk4FT8WU6SE459qL8dkX8rXzGCMJeZkF17ZmVjLEq3vhbG3k",
  "key33": "26ck5RaPmBWyMzVqFhfCbodmAi5D5oAQjPQCbfoGMzKWGbbUKQgB3oKXVhx1EddRDHZtSH2pXfdF67Ln9Cep2FSD",
  "key34": "434GytNEHMU9GuhQhjq77NWJzfNQLxaaCfKefbqNd3YUiR2F8BcsqbPRV728TEkzBFVeakUdckEDXcTtr9aj1trK",
  "key35": "48ejRWL4yAvYtutmNAmg6poVTNgQd3E3L8Hft5pyiq5B7rPBjy3FuQVUo1fhxBEymq8giVFZt3nFjkFAWvYzghMw"
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
