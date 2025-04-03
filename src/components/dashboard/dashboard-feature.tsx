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
    "5QY2qzwkuy2cPK33pgFLEamYBBUJaGWCJcEVN2MoPZc4VzosEBWXhVCsPLUc5VBnSBCdg2JDbjM98S5jDaNC85eG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "279KP2yTDS7u9Y7ACxx2axAVExUoH6PDR41aVSYdvuYx4P6cwv3HMcBbJ4nwphpZhrFf2x8mRAh7xF5SnvUN2mZW",
  "key1": "3m5ibU99QkHsfVM1UPCJdcHFnHyyaUhCUfPfz1T9QMfxke1x5nyHdyHem5egmvYwWFcmFYnP81oSCBoX728EUtoq",
  "key2": "5cbpE4TC2uWkbz1K4eSnWSqviLDjyQHHktnR7wCkBP4yiWcnQYs1JKCgUwDWKBtU8DMbvS87CwxHa52mKwHxpwjR",
  "key3": "4k9KMoK6xqBPKgYkpsQiZPt8fBmEu7Ji6FMXWhhWmAtfmsjPGLMzgvWc1gJzuWtEKkwEmpoQYDSMsgeKUs4yPggu",
  "key4": "5bv4KbggoKYL7w7eJocy8fhDeoWJTsCkj6jmA3su2RzchSLyfXvwJUe4JsMX94akH4EyeyFHNg3vyKLyDnE4RaY1",
  "key5": "62jaC4xA93eHkXx2y4vYTnfev2hEukiMvGWz6m7mpC8UzAhTJDJbhf32tQqKGmGo9LMNSdZRS9tkLghJ58sBSQBM",
  "key6": "4cooikiyDhvjN78F9PHUDwMkgUEaYL66YDdwjyXu6QVJf6BBPjKx2NNcWRz1mdxAjVmrQHqza95G8j9Mbsj5xRGv",
  "key7": "41HcwX7uy4GD3VC28mzmxHhwPDkVxNYWYH9gwvDb7vEnGVGbXtXpVWYf9A3eUU8Wv9Fq2eRA21gk4db9X9XM3uzK",
  "key8": "2ceAvn6WzAPQHgzqg91bL2XV6P4FHnnwhPWmrBVL5D4R8k7GVh8boZwWQtgCHpsQthb6pWdbvpddCu1ekdz5LgVi",
  "key9": "3B1avLGheqhwxZpt1nW6zTq1bm1AvZJiK8QoyzWx29qLUCH1hgw7bBByeNjzdNUKonMKphNsB22kkBuEzWSxtNpB",
  "key10": "3daPmKEozFjKMUEn6jB1ZficAGDuPSiJ7u6xVbFQ2BMFhSWazA9NDmiH8TiFW3vJQ4i24SkREVUSCZXXz9srzn8A",
  "key11": "3wL9ujnjn7ht3PFfsqZeik32waZsUGmh4F86jMht7ewrkmkf2CYnrcgjrbp4YS55dsjjNrc1B6xYT8zF6jKSxYY4",
  "key12": "2SHJYo7N7mmPjWi8JxqsH4oCNznPax3ioA4SBtmbFcZuxj32SqC9cS2pkexCUmvHxPwGurMfsMamiFr43WLQbAVH",
  "key13": "5JQKSg7vNWosu6mGVZBnAGXec4oenR3gYLgc5A2bc2ZUpGtPo9XMVUhPndfUWPbYCBRwKJgvTt8CRLsHQyA1mqrH",
  "key14": "48cBeDRjH7BG96Cm2NWTQgZBRWUQ7X2Z4J5o65t47xpXqJuhiSLWs7S7PhKfDqCHNQfaCGsaRqc7y4Ndx1AxFW4s",
  "key15": "3BhZciSfVU8b88PZ1FsJyb29MLffwExvaUJXXTPoyN1jpXXpNyi6B7c3CFqXtzYch99jDLYj9bGiiK5cvqE9xArY",
  "key16": "5nCjcN2zEogFatAvUTgfTStKQ1xMaMVTRqxj17djAF6kStD1ni6K2uhUjfDAGMSbiwLbcLTY8Bsg1aNH1QjA8yGM",
  "key17": "53J5mq1NEwauk3erS98MrvFkBzS2tnZhgML1ZtLvzPiyF8ooYeyyuhZRDkjvdkrFZTvU5u6d9ejUPdtV1opoRhKE",
  "key18": "3jangkyT8ZGKupjV5c524M18Pr3zJGgXDGdN1skrsSUhhcC9uQAs6dVWEXYsUhMgZXru1Z4xjgBvpyd6ZwYogJAy",
  "key19": "5rEzStd2sksahmsZn8b7o1qweFYHTY6t9oBTi4y1uba2pXdo8sgvveN2uLQewiZcYVvbCWsY3JgwY9s4ej6Jxqdw",
  "key20": "HdyADvqKFy6221CoynmAEr7t6gWB1NGJ4576KDF78mvUrgJJq6T483nXCocUd5AvdrS9f2oNfy5Uz34wxE2bbFy",
  "key21": "3ofw3uJMf3qwkH7LrA2J4N6E98EZ1awEmhUCPqBfCrcJUrPVzdEYMM56mHhXTSLTbyfU9S2UbA3vkgVayyDVJHcL",
  "key22": "2yHrRgwYwHgsyr8UNzaUahgYLQXAMxEVPdeTL5egVocW225zWwN89h3Hkb6L5mrVFtmfYSNYhAag9VmjPa8dVzLX",
  "key23": "5JHUQ3igmt2csP5ga6QQwFu2s4web4bS9kbUs82ViaDMoQmzxp6aomNB8azWMwP1w1Ae7vunLMUZfd3AVBanh7tf",
  "key24": "YQfyJ1EvNi9zZjyor7aRsr8jKEArV4scLX8UV98BQecmn23vRShHXDAHVWm3sqSngvqKC4bJnJ6FeRseRJB2hNA",
  "key25": "5bbSpypmno1DfY2crhTEbT4i5AMbyQmrXX3e2RTW8Xtr8wD3V3aZ1hKXjfnctaR7PQAKim3KMYTTTGWpFQLmi5NQ",
  "key26": "2udUu47Rxg8yQ9qXqw3QC4M3eyciH32opThfQAyMQC5qTVBvJzN64Ljv7euNp4yd2f9NrZ1CS4bNUUjVsgjXX9Ca",
  "key27": "4fWWXY1YTphGcFofkteXAgwp5oh4wDeFZ6hJMZhsUY72dsV84Y8ZiaMrwBhRpAzridVvkdic4ZRpzR6yBiSUtkW3",
  "key28": "2RmexxrwJAqezbdd7GvMKiqTADF5ZJGWSnHfeuWzHZ11PjrkuupaSUfy1nhj8Ys5cSZsgMmm2AGR8yXiSYos6g98",
  "key29": "5Rn8fmQ7aQu79p2rJutDMDrZdfoCdFNA8DBJrtRFuAycYkcdKnkRu7kh7qnxw1hEhp3PWLh5i3N8BgLz9JrWXwZk"
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
