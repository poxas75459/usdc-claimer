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
    "5sojJ8MBPvL1fB6p6wgctVJh7HVcoRR5XkQmtgoABhsCeStMG41F4UUt4Vs33eHs3z8dKeohaWaA5d112N43NuCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjrPzxTQU2odhAhXAq58QBjSzJ5F9hGMmX8z2LSk5Lonhw5Rphr75Xs3AChrZCxLM1PyzDzTZjtp6aXVdtEjyQb",
  "key1": "ya2Tc3w9JXymFkMMzv4JfpCppB8Dzf8sSKXqQ4igAnjXQEJhyPZ2hbSZ2sBBw5HmFeH5uVYeBuCXYT6Lx6aTtzs",
  "key2": "51pgkwtLe1hAbagTcE4x2oQsRrUKCjTwdkgGqkXykNZ27Czf3AW9UKc8Pyk4ub35uMtyVwQoMCHKsDfJ1e7i8uc7",
  "key3": "2ZtnZi7jijYsXPnA6LCnTvdbkAFSntCEmAm2CodGpwSWkSC1vMvJpVQSEtocdDcvK6QCzH7ghhPprw8Z7LvC6yGz",
  "key4": "2wKy1tMxXg1qYgEMaiLt4mCgw63Csqi5HhkiFLy26vdMnEc2rYdzybfpPZFqFmaw9Uq1TdbrYqe8v5V2qu6m3RjP",
  "key5": "4QQ2T81wG95Pc96aLdMwWCoMQthmdQtSLrCT6SpBJaUfFP2XnBMdDS3GmG4dQyNecXkGPUP5TUmmXirCoagCdH7L",
  "key6": "3ThnLch862q9EY9V9cJjGBTu5sC9JHbq25JtK3TuF3DVo8ZfUwo5sCFLnMcRuTkGbftJKD8GyAdDjdhmq7SfKPW",
  "key7": "Jtq3RJcCbYjubHGwor5FbdzKSNz4iHUti4Z2rin1dvspWYVhUZWHAn88qg28m1f8YSxr5U65u7Symk5owBdWAi7",
  "key8": "4adoFk9wymi4eycpEi7GtLwccGZP7LrQW8AXmWinatc1efi6PSmr5cA7Uv4bGMAAyHChq2cABPB2st3oZprZnNAu",
  "key9": "p6nnHZsubfN2ptxV8VcgJJRxVaX4pQdQT5PWBLYqXL4pKq1dR39SJrWQSyx1yReGYTy4QyxKZUcHzg8GouoWaeP",
  "key10": "3ifb9UDXUDL6GFma8YQ5sQRgQ7rywTfvGAzg8APpeqjNkvouEQPQaqEzKe8Q3nKiokE72AjHBVciCA8kmbErBaPT",
  "key11": "2WT15rbYNakuL6zXSCSi7ujsxck3Yg9dhSJ66pnDpskdqiQigR9pkw6m94RBSN81HwsCfnECCJcfgbY8bqWAoEtJ",
  "key12": "4RMJwgEpyYijeenovhJB88v4jnUMvrL7RsZqcHgiM8rJCm29iuFikM2UivKtGKHnYBkphxEKjwXNRpvsDvpv8ULL",
  "key13": "4JsAKmGcz94UCAPmjb61BNUj1aEeneqzUTPM9KAujbBCDuRVCGaQe5y5QJLyeqFfarzGJME5DLe6KnQsrZMchQWY",
  "key14": "4QUizhMHykuzh6TJLhJSNZAqdnqhXrQa2gGKLEVWxvFuFmF916QYa16f7Fu42MJb1dkDaaKyfns3U77VeaPKRMTw",
  "key15": "2SMo18YaaCQf3n9UdK6ieYiwJnfE25EpLkxV3PUSLCwvAEk9bu9fgTETjF9aaZT1rFbHqm3ZjTuqH9otwotpY4A9",
  "key16": "5mpGj4eQ6jA8dyaiwXX1GfayAXqMwVnHqJXhLMYus6HpruSSSGFC3DTBwcjVmc4BTUFKcKjs518L2ZgMiWfbEL1s",
  "key17": "38qDHLVXfvoC6nETStLjjZTGo9MceK1PeU7prhuxk3VskLUpHQPihtvx8miWrLGDkYbwfVKK2hPZ7zSJVF94Zxu",
  "key18": "4C4kT667nXq3kjCZpeVjXYw6dhRBjMHJ9QyQEYQwmLkh2F24HJhmJndYcQ2yjzfNEMsqWowUCaP168VJGm2iwUxW",
  "key19": "447jrYYwdWWA1VouWVNyeMNWkmSWK289uT3aasz6kdTRYshEsbQj7P3QsLh3yWuDSf3j59BEpAssdJ1tBjA9J341",
  "key20": "4vqarZXnMNAZFELMvHFA3V2uqVi56raTZJenHRZdYyJap2pK9eQxgqXEtA8qceQnnv2JmrMDzH33ZxCoLz6ST7CL",
  "key21": "qakoatjqpWR5SZ6ktZUaL6y2uwF6eZz2LaDrGYQhLhez8GanjoDMTtCt3mRJ5d2CDrvqU6QURtMZnjr2qx3LAna",
  "key22": "NG37wWR1ah1qKDPygM1DrTxLWqVbj1sgFRi4Lm9XrpWApvFmJjjdgLrc1wiTuqZD9bvqckRZ3YxfRVYPzrr8Skg",
  "key23": "34fYWb81VQVg8JSPDMJ6tsTQEgjxiViZUKMqeaS9fEjDosB9ZrKdsCQkMmVyzsg4YC87JRsqFZR7vZbnS5atK7Pm",
  "key24": "3UV3bE9LK74N43Zj1EeJCywrKmSgCgMR9XwZYXmdAq73C4mibHTTXKvSMPcMmkFKEvPbYqXVuZnbDQ1HAdqKJba3",
  "key25": "3WahafK4JEtQD2mBUPUT8PiTjJJ2ndwZ9uSrMpZfxGi5oYmUq9zBAz524b1xduKhdLc8LJuuGFcQSfNwGcBhmUiL",
  "key26": "p8DRBcEcJFHSA7J8RbLrJA4G53xB9Ah94wUikyDSjU4LzJstyDeep8AnVn4zHZp3XqUiWc4UDihVjjbn9Uoyeqx",
  "key27": "3EZyH6bRBUStyz3mfHuddiSTf13gyQkFYXDGVTuQJbZQFwVpjzeM7Ddq1vBu7Rgo5FQqGcqfpEi1E1mKVnZmYPBk",
  "key28": "qdeY7sUVyaESnaoa3PKbFjHSWrk1GwgY7YPx5ziQZp4zBE3P9S76PLKXxs5u5GyN6kMmdJWrfxf1knNXyNudagq",
  "key29": "45WRK1grTvNsUAyq8934oSBrDevqgjcJXGpEautvYxm7oxchbZmsCnHD2T4hZFZTc991zhpiHsbTsQsEnqTTsFpS",
  "key30": "UsWcL9EjipVq9QWDHnN2itoUecJUS61rhcb23LT15jxEDzb9mcu6UFHdL3HEzXwRi72eseGAumGg7r9a3bwRgb8",
  "key31": "5dPembcKBTWq3DjgqNCzmPBDwcevrz4ywJ3YrAmsDEAkkNtpygi4APXt3Gp5AE1jh9bsvkunstgjKgagTQCrvr2v",
  "key32": "5jFMtMJnWQKA8wuTononKGAdnDmzvjnwBHf8FQ2MZmqDPHgHH1VFJXV93BPbvZgH4njHjkQ2f3gfzaDPfrnax91s",
  "key33": "4y4QjWtmaFDfAwJRQEUL7965cAUNVQkvn2PNapv62U5hTHiK9T3TmLWRDhkpbpj9mXtnfTSEPUTACJudyh3rNm8L",
  "key34": "4j7VzjjchUBeLWf3szkkNjHUWeRSWifc2nV1BnxzNrQgVTihtz9pvdRYdGbrMcRwN5v2ATNqSQsqeiHFJNREa7BU",
  "key35": "2JwGr9Fv8NmmbamAycticZawYyD9VhvHqaNz6muEPZAfiBDA9CL9BLfmxRpkdewazMzPhiJithR3RXmHs12DDsKC",
  "key36": "4Prh1TmXGYmj4KetWiLujhrSGWkF2dKkosJHbieavaoVZTWT29iQ6ATvPm2KTQQXiWibtsuVVZJG4ftC9R5wRYkR",
  "key37": "3SqyukWi1FGv2j6CicFkjxHkPEfFTyqnpHgujMrx1Y8KXNvDmWqkPVxTTQqBnicoyV4EGd9XKVScVtuxSJmJ5uDh",
  "key38": "TDbssA1J7W3znCA1JZH93nMuci1HZR2aQykkmcGko641PYsYFHtUh9oX132NxBbSVYF6XWujLqKu12ztb8E9r5C",
  "key39": "5ihuhFff4QTGSuZag6UvyzZrfTau8MNh6yVzJqD4AnGPcKdF9yMReN8afub2r7JKDan3hS8EReGyEgitPtdVtigY",
  "key40": "349M5uG73QbqYMTmytpprW1w99ketiov4Jro9Hjvqw68D7uLMMGXqv5D6sk2TjoMkobVhreMfUYvKQVQEsNyxyUc",
  "key41": "4h44yeuV2VTw71ZUTS49AKQJ68TQ6SyNAiLDNigvt5B88BHo2HNQgo3BdQvqPWXxGf3wiMv671LNAurjz9Uvht93",
  "key42": "bKd9uec156CE5VmQjJiKXtLw3mtixhTrdSSyY2fVAxz9SRZiFkhKRudkprhaYpYjBJKhdVgN1NxCFo8pAM5Zpah",
  "key43": "3A7992DBu1bnKJRQpy5x9Rd2Mci6wFKB9R4oJy4wuiWnxX5k9H5gHjvSBZUoUNvgJgtMM6HhGh6F8YCbwwPqqsNV",
  "key44": "4uBj93APry5akkU5WignAzcWQVsChoTm4ZvsR8bjCr93sMc3kkuA6i9ZR3daASXZbVdsEamVfY4GdrQjgETypC9J",
  "key45": "4ZmzkvYuJoiNrsaxZqxWDFrmyqgsghnrF1rhv3PUC4ypsyKi9uKZK7opipWTPVDZk4tGxGwjTAG2cQShkPsu4mBj",
  "key46": "27ci7tn99fbqgxqEC1gr8oDsNhbxoKJPFRbRWXRcbBG7t6pEi98SqyU9gaHydZ5bRNM29ubmGkFvRvQ5iJn8nYzH"
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
