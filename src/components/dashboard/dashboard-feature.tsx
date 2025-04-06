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
    "5UebGMcxHVciUEFgfdGNC7Ju24RuWbZesQjuxcGnMfNwCYBrgyVnaYup4JC1J3bHhzg5gmYevrfk8Vb7rStgQzPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46XDh6Kua6kAAMDmRWCdCtUmqbGZDmZbsgfwjjQJXXuxTdBWMwuAyvhekAdoPpSUNrMzuC5JWfust2Ki3M6pw6cB",
  "key1": "3ShjijFdSYbwBrnxefN5tgzRobYYjaHkzY9jzFUZHECzrPGsupGbLGLwhHqPqCLqExB1yH4GZHr2zQ5usiwWFQPS",
  "key2": "2JmC6u8uk1fqYJuuumZfe1eBMnQtXBu9LeL4aRPwKgwd9jL7cziuEGTJZxwdnHSzCoKXLF7S8speGfWdRagLzs4W",
  "key3": "4LbZLMnZVQgPDNqQSsZHbMCrTbqMM5uMWi6w5BTbg7dbrsmrpMw92SbTbQvPEYm72MfcV8husaAph46ujbi9TUy",
  "key4": "5KPpXdHNvGfXLGRVhmHnoWE9X1i9nr3wPx7rSGXBmPDuE8o5x7nCMuBftuhQrhQKRQFdZ8noqMEshMQZZsWprrta",
  "key5": "4ayFWQbnRJMxRez19w6FDtpekw3Qo7NzwhMmXtYQc3EepQnAVTh1Xg7J8J4712wwhYgtd7jCTxcvyyb6kTrWwDuP",
  "key6": "3DdcAk9d655Yrk8ExuL16erc4eqGiK8vnyoH7qwm84heo1BcGxEmwSNqYyiCmLLBhDUKXYDhKAsdKPZCzpf8CfmU",
  "key7": "1NANVuwhCppLQGXKDbTmVu6tkwNQmKWZpFAHKCvJfxwPsTtmJ6b1iy68FTwA699jPPPesHx2F3HhLq8Tpt22pp7",
  "key8": "56HF2eNWguubCh1yKKoqJ7zekGYJkeBiHmWGdjRt1SJHZkzf1ETsWcnb3dbnt84y8rtdt6zcjUNuz2ATbYgfRSfh",
  "key9": "4shNEd8iGR87TbYrrXAwsWEaE1jUaYJaBX175qrBe4oGM3xUydrEEWV4jbC2jvNKjwvwd9Q4BoYz1Dw8fUZcvDrd",
  "key10": "2WF62TcwNTfQ6nERrc6sZFKR39ZzkBPu4qDDDFRKueASwgRX18YiNvDiyZBhBZonkAt4ce8MacdZefV3RvYHNYAJ",
  "key11": "23tTPi7YsECwBNiQmrGvRGbJrCG1LArvdXPkWp4XB8mKM96BbAMcBHcajj3M8bwBBFY43YVKSohmzAwmTFJokiV2",
  "key12": "4zXtcwn2aPRy5VAdi3q27W8DCV2FmhXJzu6QuUBkq43rv3cXaLYxMxNJEDLud4EsoEoAx5gK3PvAKZEFN9fb5Udd",
  "key13": "53Js36BZzBY2knihZpxDK6BZwcLMD798jNMuDEzX2Sis4SqruQxuym5CYXvWyUzYhVUY3715jrtNHtAuDnGmTaiq",
  "key14": "3MqXw3GYEu8T4yDbke2bxTKhsGj6L2iepqXkNf1UgQA8wQbYECkCDJHhCWXJnpRdMwcLagahBKnrWpijx22m6kyT",
  "key15": "Z4cX9qRtUbz9EQbjedA752Qk19svMaVMdX47UYXF7dY2Y6btDotgdtsVAwdzBLWTdUVHVFiqxa9srYhR3ecq1ZZ",
  "key16": "5CyjxwjLW8b4MFPopwF9oVj1bTbni8x2VePrtwJAo7ee2rJwbpqxt9UCLrCTg9g2smagLSGTo6JRnEfq6LL8qvU3",
  "key17": "2433VsdiRM29xozaQNR8ru6L6UYw9CzKMmjEuQ67Cdzx9oT6bMMu8TGxbyXiJbd7tGFEKkD6YKobYrs1XyCZ7Wzg",
  "key18": "53YtLrvdXqgrnj85cmBYeJp3GRG6Q3Q98ntXAtbp5KKCg83HXwo5ySJTpYGova24PPSVBULq4818ppqfkmADFLsd",
  "key19": "3JyfNVcLMXNcTMrZ2Kg7cczGehhYAuW9nt6PyLW4XZcpdxkKGNhoKAy38UrxSn5iPboGocs66pYS3GHbYMxQXes9",
  "key20": "3VVoFaM6pPvnVDqM12RrURgTimWhTre44PrpyUB3ySbZJ81WXrFFN35HS2xapbyXPkzLoNL9RNAac6Ndc3sLUviV",
  "key21": "eSZGLHghvmpzeccmb5WoQkQ3y7Y4zZpkJva4vmi6EePLHo3bQ6Fiov6W3ZjUAy4cwKjub7pSQsx5DSJfKjfyTUg",
  "key22": "5qcexFL2PdZJxDFPYCmZJgUFxDPV2mABva7X3sQtDY7YWYh2pphX6sFb3Q3F3Pr7KW2yHdyoDH4tuJbBQ5hBtFU5",
  "key23": "4647sMExJqLeoV3bwqyHXA4uy1Qao2w7x1R6jMDuksEf7KbJLGoRTKGiNqbsfYM3N5oF4nePAX36JBzdarcQaUdb",
  "key24": "4SNT6U5fnGSA3NCfcmhq4azmLB25ZkoVb1vZKrZbFerZqYo8poJNYvm2iEot1fHGN7dVyLzsZJvrBkCF1rSVnw8",
  "key25": "2gidTnu4BY6ayVNLkwLcHLVA7x3jjznqhVD8cJdDhyv9DiPMQCwhRQGyFJEBWT5b3PCQ6YHtkci88MT55r4viWKX",
  "key26": "2ZyHca1W3pq9bjrMqkHv1ZN5jEArC67bwjiRwTY7pzhxZF5vFRgd8aKSkLy9827MV93BRQXLyaYmk3eFvGVEYsGE",
  "key27": "3qV3ZRZWpGMLhiB2XMY6NZqv2CEt6nB5YVYfYm6quYT5nmroj7wmVyiGe9FJetjdGhcZBdDVqducEw1CWe5Xq2yS",
  "key28": "5UcocszyS3gQUeXiGmaGBqTYXVui3bYAFCzQVUpHNDEwHXcdvWkZhGJCgX2iAVoPaiZp6h73Sbw6czdBR1aU6HXM",
  "key29": "4BaK9muWxDC2m3MiUPMJvX2pZ31vZGngsnfeF7Q2ohbtoD7xXSwpufK7LXQC3V81LWEeBxCLUqBmJevWUaH5cyhR",
  "key30": "25txpcxqCdgLyRpdD2xC47h4JzCx4FaCGSVJR7RiaJngZwuGcupFpRjuN3ize8ucMRDPdjQwTn4DomhF53jibNpE",
  "key31": "tsdUeRpyY9eU3gKNnwwMsSnVKjBZeqSx8f6cHNrZLrnWpJsVDRJjP3uCy9jbo9ubffm5fBbTz3bF1JPGFjGfWkN",
  "key32": "21aTCX3jHRr8bCPpmrks5RfTkKvzUkV9RT64DLoZv9iXikGU37s7hvGSkXWUsSP1gAxmPBALzN62Y7yCRu8DqAke",
  "key33": "35oK5MMughUDrxqJrbFRA2UJMLeXL8FJt6PBERM6nMUS14qnpd22HxSNNNZQrXpLDziqX9z8JreXbCXPmyeXkys1",
  "key34": "3XZptv1LWtJpXfhUNVjn51VPLuEb5vWpe1LZWbez2NtcbZFUfu4e6P4421MZRuuw9J6UBVA3siDEEvwMYdqUNx2z",
  "key35": "5KBw8necvjZYEHWaPAHtv3vnS1ggKduy5sT9s4tAwAkDBAPqujNTFtVyA1VymB52ztm92zP95KnPQmVX9tnPrD4h",
  "key36": "3isR4AVDBrXKcVvbZxSCMN85Wsu1rYns5rbLY9U4oAqHti2gLGQHi33NRi1AX98R3Q8Z3MaYLjC4PCWZWLJtRVfh",
  "key37": "2kgndV3NV8KMkgmKgVUVd1jSqPkWHL4hDrsG8K3G6xDkDFzxzonbQj6RtWCMYdPPYDM7d8T5cxxnPL2bKvbX9GXz",
  "key38": "2hbDXzSr65P5Ty982NBjqdd6wmb7vvQJmDCudsKo6Exuyv6Mr6hqFyn5z6uzM4s4Ajia175DeZuHfr7HhAbeDaR2",
  "key39": "fUZqomTyq3pNeiwdipbB2SaQ7hSg9VMhkqMpQngUNzvmNRQ9XeHoh27ueQNsBFK6t5EYktNJronNpYouYbbqMXQ",
  "key40": "2SdcmS8r9yMfMf6pa45a5F9CkcHNoWhjAzfSe57SFBmKo8XUwbUjWJWndpLWdCSsoBXxyXwZnnaqSz4KpRvG8mnE",
  "key41": "61p8fGCAhz3Y3zHdQPfgv8zaWriEmurPj1rMWtLcG4JvUBBpKoWXG6K5sPAnPFCSWEwg7CJj4mNerYi9vocd2yaU",
  "key42": "5zKMKDx98dXPKSFu7PwxZoefo7jRVqMMgekCWERYXcgQXkAmQBnuh8pSWCmZCVd5TKWDfdZXsYscgzbvtmfu7UHx",
  "key43": "4eJXXfW8MNMm6JPbG3KoxcR3VCfGm6jjXZRkWMBAqgZkrLUQYHK5NLWBBswQpT3ewTTrUeLZEdTP4fAoRsVT5DWB",
  "key44": "5A2y4TpgTrV2ydZegD3sC16f3xVg57S3VfR5T1UuRuuXME1NqQpstnMb8gbNwKAQvV7WqQPJNxsatL3T9bmhQxrf",
  "key45": "cMypyHgxekpT4C3EkzbXkhYuYe8VArYyhzGHQkKtthtsRn8oQpUyioFzmDERYt9tZTByWbZHrBEfSXjYHA8EjG5",
  "key46": "qLyZKL7iTpqgc2xLWyxu9dPWaVbop78gQyK919ZqUaoJhTN8WgtqAxBMGPU4BHfo7mWHSJBzUbs5WDybLAmcsNw",
  "key47": "5chm5nHHn9Gg2V6WQf4J6N9GR9yCP7seS3fEobk7794nHriDG3uHb6fKNjciBCQ9YQJ3zzJYe3qbnTN29kbNoy7H",
  "key48": "5Z5uD1F3iA7R7irfGVbihzvzjKcVQky7VW1qwimwW39wfMtMnpexERKuy8om2ouPm6Ks1s2ZkcraRq2NsooEowUZ",
  "key49": "4QNWZtRdQLxiYx1E8cLwU9KAYKXcY4JgeW3ntLbE6jT6zAysn9EHt2LZST3fUyXfyP1MAAdFAGeyNVKsT3GeiF9y"
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
