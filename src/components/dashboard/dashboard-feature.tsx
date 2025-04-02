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
    "66TuXFEdP3unC86ohKFs4LP8xEZqP7mfvN5MNdT5Zo5pr8LNMWQfnGdFWbhE32HFzXUizEXRgKH7CgxUNn9nKC1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RuKsmVF2FBupihvcjbHZwVDGxnx5Ahq3gMtGhaNbj2SzeW9eL7Dkum6UV9abcX3LtWHZMVm96wFezK2hrAUjAQm",
  "key1": "3wWU3mFPDRzDZgca8s1hvqtzdyqGMgPfks6Y5mnFUiiLtHuqQ9L2a2LLPJH43AQnExLa8CB68YvAufaCSx8fboU5",
  "key2": "32ayXyZPjQ7CvRhr7YhLePMvLa5QGMWhPJAhyTV7hCJcLGShHdmzzr8593h7Kt2AxVP6UxoSBxJkSabNEDtWFL1o",
  "key3": "2GBikkQDQSh92CsBQfbV5pXvebFoijhV2kUSCCRDk2SyzYvTQbUQmawkPp93eUVhir6QZ774BZ2BArnWZfVUNWNP",
  "key4": "625u6YNDtrS2WvHK19gxQfPh7Vdzb7WiD4GzXwQeRFKU9njZN5jKviGLUKmqGi2kcavMjxhTpJz4Poyyh6fgP59h",
  "key5": "2heTqpBqyhKse8v2tnEL6hbtTQFS1A3eqrE2X5WkCkxLNzKGcxs2WRKQQ54LAmoBduHWFihSVsHkG3aaBLjXmwCi",
  "key6": "4VtzQtUYgXWWRDoLP5KbfdgaVqgWvYx8cxrj39t5uySAstenJYBwBsxcy8Dm6rqtY2U3HuRSBShpDku3BoZmPJxb",
  "key7": "2MrzuyAGdESGedYwhCYcNime6C9ZewX8bTaVyWTAyfL9TbT3Pd23EmhRVaTDLmpcvqTBsuWTYWNpkJs2KnEM4gJZ",
  "key8": "2ZcVkJ4AByNsJiGKymAk4cjWa1mHbeFWwHsM2My54vzquAfLMREC4YrJcKMnKXBcP3WiWe2nKuc3nkkzBS67JXZm",
  "key9": "4hreNvPispz9s7uRvYBFLXtNAfH9VYEFPRHyrwVtJTR65kshPsqz44mREH11pMeduUWQ3scMpxsMFuhJsfGF6gyJ",
  "key10": "2mhLaDbiMbNmYCeXb2gzdchrtkaLBtHARCZJmUz63bSTRgXgM5W462jWmn65zeY96AR2BMuunZD1MJbnFDUCqXdt",
  "key11": "2PvBiw3pJacZRRuEmnMaBNLnudbPtt45veURze4ETb9qyLLRWg3hcxspos8rrQ1GP36bniomzczWaicDgHciuZS5",
  "key12": "5VonxkfLUdZd7K53FK7nGbWLdqtZGjAnUptDNbLpoB9sSx3cp98i9P6LSYm8ryVrXnejMh4za43XtNsMxbgptoEE",
  "key13": "n1JXtvn9EDmsV77ftLgzQiTQwojxRHJeoLuoZsWSDBALWE64XLLcGfiHM6cRe9jbzBpHpLufRHpQ82vijTDLckX",
  "key14": "5cAiwcN6uLkEjTVdLN6mBgg4sZxcjY3ioJUj26557EwwJxBp4uXo2nyT6BWvEmjU3TkmazxPW9sxsuL97AiZ1gYa",
  "key15": "5x1kF11utrjPsVVGXPVyXWrHtFCC8PW49bQ2959E3BjsrvvUfVZXJRKpXpoA7J8FEZgEaKKTedSUVKcccAbYEczL",
  "key16": "2pBG3xB2RpUURmYagRFaaMhrgnBz3wRxHKmVsABm1hqcdFh2QqM6JNt4CZXPzggNfjzxg3wSprFyPhedynFpjqxy",
  "key17": "2QdcNiF3LKVyhR2KLPot8rWcyzivkRQx2Sy1T9So7bDKTf2Ycp127jL5uj5LjspjPkFMtosgAw69yC2XWXdDANz3",
  "key18": "3WQ65rRNGRQuTWDhZ1m6THc42BBdKuGG7xqNfLZwnRGybq6Q2eWTaDKT72HHBBXWBYiuuXZGChx2XK2X6Gp9mJtQ",
  "key19": "3TavqCVUYipxcD9cHEPMvZCwnMoPjLyvUEdHHHNHccNFwfFkDS5HN2yRBrg8UwapXEVk8iChnGtv2rPFwqZbxTFk",
  "key20": "4WdRRbSRQ57VZEXy35nqGGb4ZgmomDq7udrtP69iWBvChLrtbQu7jdWHNL1TUMFgDvxaFoY5pySrudjDANfVXTMh",
  "key21": "35aXjEJjK3vtcui5skrk7eNxG2izPKpRK8o4mE3Giv9nN6WRhfqsL1ysqkjidUE6vz3o3qKAmM5itQwpTXcwDBV2",
  "key22": "MrXPhLWjfpYZ4RpooLDuB7W1XHbqNjCaymK6kXtRHXzmCg95C1AYXisevT5iwyy7SXFDQi3nbMFN5dWh6T1y3Yt",
  "key23": "4s51P1vUmVHPtB7zNgETckAMnAfnBfpkinn2S4ik4FAvBvoxT6Atc3ZMo8szpSpN7z4LXvXz54LcC2badoma7oD8",
  "key24": "3usTNjNiySoxPZfdk4MbvLh3DcnFNHbvvyB2VxMar4gwN7xMjtaBEaS9cZPxjFXCugfLq8qebAA9T9RvgjKtfny2",
  "key25": "3LjnvocspFooRx181UvcAD1QH1mr9y9bQovCS3kCK7bWfitnVuVBPkerCxfYKUpzn8WXcjS2QJAUS4gpT6J7S3Be",
  "key26": "4Mnsdd9THVHVVPXjzxgDQ5G3tSpgZkGX4VSvStvYbomow2LbQuPHGmKm5vjsyjoA5ZgprLXSASbyia6TeEfXpQy3",
  "key27": "5eAHw9kmNidADXJADN95BhdH3KbJLnibcn6kyFgHj14yoczGACpvGBqXvoPavuFBSeW2VuUCpo9WRKvxtVfDVQjj",
  "key28": "4qFLMmz4UPFhuC6FxYCruccvXM6jPF53RnbSFnrQ99Mkippyyu4E3VwL3xKVZQogTk1fD54GSY3SGqZHPmB1y1Wp",
  "key29": "4pCPjBuAPDSqPkW72wx4yyTTT6jB3NCqCjUSTdSVBbdnqsQQtrZ8SG3sv4bqVCxUdvMPnXifovJ859YqBCt1mLCq",
  "key30": "4vhS5Br5nQu62nVtMNT7sCoAYg6FiqjPLC5Xuy6kSDjEcCNYc5Sbynq5Y8FU7VUDhRBniBh1W9duzZvz8J3PBj3i",
  "key31": "38t4kax94TeAgRy3KpbBUppkS6TDhr82aBd5e5KRa96VrBBz5x6qzu5uVPoWnAcdcCeT6H41yNh7e9si4MPhHZjC",
  "key32": "YHWdkQg3S4uuTgFTSRFhKXDEdpsaATmtSxYJvAXye8rZGkCGNcQsPfjiJcpgGPdWVTyixfEYyNXmUc82LbwHdiU",
  "key33": "5vsVWPX6vQ54sthw5uypdqZdXcn26v1SQnZJLMePZdQj8hwH4qPfBzDoeGU9YuvAuxheYYqYLGe3yBBC6VGwJpjs",
  "key34": "5h1zKf7oCdSGdWvyn5ZscfkRn8KTeQkTQAffSz3UbuvfeDAk4P7VghFvNfrCJi5h3mQf2Kv7zgwGbx68GUxgA6uN",
  "key35": "41PeoS5YS3epSXD4MQKBueKQZLnfWWKixLWuNQuGkC2oAWE1ANJKHDJ45s1sEgfhff28m47toLrLEc4WbnpY6d6b",
  "key36": "52tanyAmBXE61yvwiTCPQBoSLU7BPuHnyq7MuuXynvQdyDvKGWeU73Thcz9UMTqHbi7G3o5KEW2XxkB1E6T3SVwY",
  "key37": "3kAqSyUCBshXHakZ9BJPBXc3QmcwTnmbazyRdfQWtsbEJwDecSjWWBG5QKMzsXbKJNsFNqruM1J29qKG25tNQBMH",
  "key38": "36wTMmh2yq2gtNx7s7fbGhXfdTJK46RRFX2rYwtGm6Crt9fJBkyi6oA3hgNZNtU9ahUFiD331zAYFqfmmj31RHXJ",
  "key39": "3jzHe1pf81hKbyNvRwL3PKv1Mtjys8KdeXJxzp3cERjLTgUGeyz6dLEzPJpHpCSMXaxmc8FFkXurxkX8LUy8k97M",
  "key40": "sCdUyMAUkNTq2tjazu8zMiCs7KtZixXjoHc4RakjRZDU396scihWesqwuXtX52nwsugJB3cC54BKr2NLGzgkanH",
  "key41": "me3XbwAzXbytMUHBpcdEeo6ZZCXuAg8PoJRMGxk5iaXYtdJy21de63EBczYiecgN9rcne7RM4WAx6FAFsnp5Ms3",
  "key42": "3qHjJJuzY4pevNoRx22WG22eFxCtEBQZg155URiAfvXTxnDGJ1TXvYaYCxht9r1vaLDed8qXFkPqf6MXQzEqLCSX",
  "key43": "4zKfcBqptz4HoFfz7BtCLVEbcNu23jMVFJr9ts53w2q6vazb2K28oTzndtmN45DnNb2T5NM3Li8y2MqyXhDwWgm9",
  "key44": "RrRqu6VRv6bgmqLjZwpmaVVr5zUg3byxSdGjJS8P2CxMvmGDAGn5sK78t6KX9vR44U44T25BBtzUf1haszSKc79"
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
