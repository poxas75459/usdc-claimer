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
    "4VCrpHcVTuE7wCEmesKwUHBPk5jgxAc7qtd9trKkRDbcBoNaSzupGfRn1vHu6vGVc3CEjXnm12dH9BE5mw6tkjpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tkr2kBTr5AGnEZcCdYTnhUrQmLjrG1KXnQqy4icRaUqXpUY1nMu7XXRYEh4BC5Nn3MEd4kPBKDwYMdmte44xa4",
  "key1": "AKWa53B62oFyrDXEtQHNgocgaUr6m4YPTV74PFr43Zfy8qewyjWTnr8FGxUec7KsuZLdybcicP1bNXQJCKdYwcV",
  "key2": "63sH2SNAVFf87m6czzwgCuAtaXHwzXZTUcp9ooqHTrEoQxH6BcypUeCGf59NYnRz4tsdTddLiowjJkxqk5n6sZh4",
  "key3": "4sbdNUFTmV1uXkuUFrydg46wawLTo1XgNmkk9dBM9YbyxKbV856MNU7fLLQmueJahojBTix4XswSuXJamKVnbpXv",
  "key4": "3YL2G8gynjZmYjwgzhsthxvWZpAP2PxTsrvNLJgvLEyCzCXVt9hSb54EfmWiJdXeud5r7v7wgzwVJVTH1w9312b8",
  "key5": "5fXUNbRz2ZEBrAJo4usX4J54Su7b2WS8Kjj36dUBGdDMaCjb2BTxRLKepzywHZGAJ1epU3R7G16rcaTdA24v4QDi",
  "key6": "tK3GxG3AxKGKfyFgzyGFDVK9yrToXhhJsHsKQL1JCJHrKP6qdhRxidx6Afypk5QypD1i2X5cid71PGDiQ3kodY6",
  "key7": "2awvsSg1xM1zoQjgUjNSdWam42bwNBYcrBj3PhjynfCvAZxFxyKKxEcwCvgUSC3rHh9LmYu4zWdMFVZWBptHtuBJ",
  "key8": "2ND2sFbQnfaCf125cCS7kTGAaFG7oaWJMNgzjyRGUDBdktrRax5TfeR2xpCnkJVguUrv55kK7ivqocPxVWBgYaB7",
  "key9": "2DVBCMrik9AHGckxpV17qMLK2GqQYCFqqFfNs1ttUqsS3NAwokvHs4Baa9YbZiMjAmWHSS4WZTWrTwrT9WJNBRFZ",
  "key10": "34ZqodqT2UbP9MHWxesMp5uhksN9TLnmVDPeRbFg4FDA2r814zP6bPKDfokezRAKEcjLU8nJvBdeSJHEaCPuoBRB",
  "key11": "2pm7VeoZkq8PtmQeytrCJbcHwKrVisk1e9fRHgB3anKK3G3xhu9iTcSnAdMJuWVZLdjWfjgRyjYQ1mDYGZn1zHMz",
  "key12": "i4B9jNLhZmNswAZck5JJv2jyTNagkypmKkRwqgx3Lv2R6DfmF3TaGgbCKzhi7z54qffW73cQMTMdn5iPhJi5U9E",
  "key13": "3G2FbWsgECLykpVwN2xATM9E5tzj4wTenm2n4FZuV46543NYdgirh8UzFsQzz9fmz9d8J2PTXiYurd2B2MHNAg9a",
  "key14": "2hk8ZGmKsMhrriFTF8UXJUwxLo2bTqvu21ZydgwM5mrjdpRQNtYY7HtDHS5Vy5BS5QbTqtGtADVK7BqG8UW9qR6i",
  "key15": "5eAemAZETfEZyoC1KBALKuVSvCH9E6yy3qy89DFS7VZoMZN9q924bpqaFfkHzchp4qARmNgZZyCxkPNC2D2FmaYz",
  "key16": "5M3Y6Vv8ZjH7D3TS2tH4X3Xs6Hn8KFC9VzBeczhS5nGNcXeRt11ZoMoz7fNnvkMgvDgtcoBdjd1wdj95kPLWqSAo",
  "key17": "34GWefNFAvSYvymHvZBGShzQd6uuuByCg3DNDxzFxwMzjmpm2sBNx1Xi6F7SQA16RAUEC1aHGNhFzb787gYAGR46",
  "key18": "4BMhbzSKLhHeL5UC8MahnYfdrFTFgVPZuFLMSw26AkXBQ7NC3b63bDk3tUPQdaf4AEP5r9s4RiN3XLxhNzHGZL2E",
  "key19": "5BTCGbZ7B9vg2xySLXY8DFiD8WEQPaJopA8hHDZ3ByToodPHgyoLGr3xeiLBLcWDy44aVeigrnjsJLz2Y1MPJJoa",
  "key20": "2e5RUCQLSoMhQ57pPvG29Tu98mxEyZK3rnAQ2C9FmzU5wEhULeKRtHWmbEYvc1NaSJC2vkzLLs42aCSHmy4DqDeA",
  "key21": "38yu9mg1E7GgcyfHTSKqnqYaJueMjf3HiWC7vEZoeBfPVR7ZACqqcN2SVSD8ayt1MAy4GeoJw1BpyNmG9oEDgyGd",
  "key22": "ThiWrLCsv5PLGWpybTt52KycUqCmj6mTkrNJMQyyuVXKqAwzBzaFGqxc93pn9F5aEvyKgAxqt2cMPqFHqZVko71",
  "key23": "3DAYevL5EaABVDTYSgD58scraKTEjQ2Hxsr8HdMxBMQvgTCiuAaeNhTjQkuytVydF3dLMc1FruA7YLooW7W4XCi5",
  "key24": "3V1fSxBs4g3BebdiXKRbmRsvmsiCBer8dShTa24FJuaNj1vXjoETD2rA2YScKGrxbtQN64fiDHyutw4DxW4sQgSy",
  "key25": "4VwkKqQ9GgkYi3WjNHAbtVThp92pU9LDLWdQCEQMkpN22E7KTyjJwEKxQFzAk9CvSDpDGYdHzbxGxzwW6T2rWojF",
  "key26": "39PY1PPAsPfXqbcC4e3ajqMhtD1CiDUJR6RMEADJAbk2Z8WweoJ9fJ6Juo42EZcEWZyzr57gLedzXeR592moHURh",
  "key27": "4QyrzGNMnJyPkX6Niz4TLm5kxSPdtq2NvscyUbaY13cztyc9MCZ7B8MxLTFXJ7GWRMJ2we4ZvZy3Eok9GhDxAM9u",
  "key28": "5eMuxHTMSc9KYnVNcHaQAVhtLtTk73yWRgxuUcLGeAnmsuUM1BKfcgu7HWk3uWeM4vnx62ePfwq5nVq3dZNhDuun",
  "key29": "5zsZMbzjAqVUDkH9dU5yhAVnbDdfr9Nv7rv22Ma9E3PouCBsGfZNe59UwPK1Th7JX52VPe2eWNSbKQSVxJapLv4i",
  "key30": "63LLQJ8WjCjehS9CKdFNzqXBfMXLJF4T3E5uF4RrcH4zuovU4RXqc2RouEYn4Dmn3WYncZW2SGLDdHR7hn8he4yM",
  "key31": "aoayzK4s47QuaWUpYaHhCQPrQSjBtWz5cMLt8wtxsusNyM17mRPbKQovLPK5u4QCvedP1QUf6wVPJEuULN3bjBk",
  "key32": "2bL8avjYuL9HFaWqH9YqpYvNhHU6qXtrFd3dF7whNyXSo6ZHXCdBgNf3YR7LoX8KYWXD3axX83jLuVPBUhRzoXFW",
  "key33": "2F5ku2BqauwnvUFEbzjmyaaVCRuwySDccisUX8ZTuBZKxmGZGzhMGEVKrYX445n5nLpiirJke4Bjv9ghUpFW25SH",
  "key34": "2aNaUNHzAL4NJZihwfU81KfVcVPSYLC6FuzMX6QEWvkKbuNRXyQkwjJTAz59X9JpXUVjypTuhUoPagXNVddmnZn5",
  "key35": "5tAXhLPSVUB4hp6ucouQaBZcCbRrFBqBoUmZxYEn3MvjmC6t76dDR1mR6AFd9H5cA6AJddBieUECV2EPGGzkMxxi",
  "key36": "59RCuBmnf13f9ptcjsQcz7Gte6iazDKxJYWDqjXHW1NJRDuWoeWUq5nFFpwuSM7TSWoVPEhYnuAEtDPPHMCvmDdb",
  "key37": "nqQVHS2Qw6as1b8yExktEQWyQfPaBtJadJcNucAbKQbUDYQCKLc4PTiDPY7DkzcYLiqk3Gh5v5Ls5JPWppWVqWR",
  "key38": "5SZRc8MmWzG1fBf88DU39kZRcWQpywuFfNfBAd5yJ2QyvH7aqHyJ24A1XF6q9LhDd4HtQqq4RVKdBz1wJTfdFnN5",
  "key39": "4RWrFXvvJjTed7EWXkYxkZjLJfmt4hoNrfmtLQXLFpqszKQy2Hhmr7BfcwiQ7AddqeTRsjzxKs5bNhSGHA6Gidc8",
  "key40": "6msnvSopeu7oRMDguV8HgmVypxc8TFGzJo3K6yBZXdWvAtUnGY1c3Fann895PNJGyBoQncPhpUMdQH9asMPikge"
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
