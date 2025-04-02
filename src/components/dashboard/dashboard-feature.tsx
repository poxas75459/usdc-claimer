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
    "4hZTEueS6PvZgPYqCnYwTr1M1DQHAuhfTrEckLYT63N3y4AWScMMjdwk9tMFjP5fdcEooM8JZvsf1XgazLkK3kGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hA4nsHchB9bkeZb4mzpZ2Dq2a2HdiFrjnRaUoq6Mzvna82sVDFcjBq2xLAc4BzLMERhkR1yT3teXVPdpkVnaNEa",
  "key1": "3LuoZ6jFvQqaaHfg96DBf3qRcEvbhZmf6NrWSwJPaKZ6C13r2hzVkQ8W972xyvZ9F6LTm1MWHSjC3nycdv8BSUuR",
  "key2": "3XvYsr38HZct28uCbZvuX7wehmbHW7whfhE7UwbqoX2xQ4u9qB7Fydq4PUoDFqEw2wg2oPT22mhCy8TXh3oqQ9Ko",
  "key3": "5y3QiUC1MRvEdBB3YHTkWmhZBmmF2LPQdAYYc8Hno6s6c1fmmoMaxZ6v4FVVvan727FxcfhDyws1WzE5kPYxMiW1",
  "key4": "3rzF7DYHT9huGjRF4DkeK34rCVvouBi8f6ixkg65Q1RFK6x6TGzZTTeBdaLRp2ADsD1abEQRGvZfhgZmNxY1tqxR",
  "key5": "22XeYNEz9ocx8UP6fLwMcSfCTw17XUpGmetQdbwnJXsW7vKeyvJL3ynbPxam53TWke5oHcxk8wrfMTfpczpucBoj",
  "key6": "3JUvk2J72e6TLpm3aewSc53AsDemxC8Xm4d6ZUaJUympLhqz9dS8ZC6bbdV3HnPoqqir9eECFFDgyiPmry5eqdzv",
  "key7": "rmdrBtxP2i9ByT9VakQGA3eoVrtqwriCWxhRd19FFKZj8FgsLbsEcJcZd28VrgwBdEdSNQuSujY1evQ6N5dCv79",
  "key8": "2j6RVLjzS3o1Jdz2ArKKBuUGwG4My6VgQHkrqUV84W9gpCS6zuTu6m5NMXS9UHfAjhGTbvWKrhJZzPCysLq4HVfU",
  "key9": "v7uaent2yzMVnkdsgH43JSAHQuBbsRgWx9xcGe4TrBL73Aq2qZbepDXnATar39PxGXuAsBmoSf7eQwo6y1H65pv",
  "key10": "3ZTZDvJw4kDATVB5mEiJPpMJCcsR3vwcQ6z3Ti7XWK6J5kurCb99bS7DtVobCvRBZSX3usJNcWzLtx5qFWykMvMx",
  "key11": "2c3sZjNtjW5jDpvkeLTem3PDQFZsbZWV7mNRSChXeYP3X2AVFjBp1YWpRtJjhCp1TkoEjAmoEvvuKCjrCbayjsiK",
  "key12": "5Y8dApk3hCEGS6mDfWsFCeJ5PBuSH3zMLF33fLo4YppbLUWmTTEurA86NWURar1UUCTNr12U4pmUcu2bz2EDs43p",
  "key13": "3sfDThTL9Ee61HwG7yk6DfkUzBb78rvJ7KDKLkFo9XSAqtdUr8uJez3Av7n2LjCefSEQi4GDrVmyy2eSwHKFcXdL",
  "key14": "F9gF6RGroQ5uZYWEaCLDku1TwUHkE1kUTfjveSgxQ5zwC33m5dAp4rW9btaG1rynWdiqn6WX9u21M9m1WaS2HnA",
  "key15": "5LUtxNFrtDoV5h8Vwbuz7nU1d1Wwj2LVmynnRZhYktLb2caWyQQJKYdM1wnCBhnghXRdBjqDWz1iiLBrS97oqgL1",
  "key16": "4Lkksp8AtdLfFuMqsmyjkZH5X2rLEGUhjLZ7q5T7B2v1yYbHjR6aBbk4SZM8Bd5cWnDVeVDobPe1ehWCzzqnK6m4",
  "key17": "2zGrsTPJdFU1HrLm6cZSBE1LvVwoCWreTMyMEruJxjp2ygfPh2F3yuZfZn82ioMXCZ5guPz9uQavM5tG2quEMVfF",
  "key18": "5RNTpKar5nAZKbUrcjgCX6GNCuWPUA2oqZsRePQWiYNVxyaFAak1Xroa9jU5qPrtH3MYFZu9HZ57j7wv5sq1z911",
  "key19": "oPeWxS3x1MBZKHgTNAwbuy8CMuGGSSPZP3yU1cdhCdDtM9zLnzFMDUyeoC7QQpnDqn8eaCB1YMS9hTD31ky2tra",
  "key20": "zeGqq62PUnQvJD8qLhhMZuxjbPa1nxxakftB8JNi5ytBjs6gipu9nFzfDArvyrXmE7pNS75WJVR5ywGwUfFXZiy",
  "key21": "27orAmWRKyE17gayC9PPcCaLBLtygmcsh8LjpL71mzDV8ZJqepsGXakpbrvq1xPazJFGvGDBPNJgnCyzmnVSaZaX",
  "key22": "5Dr7tCCV7Uhr5zTJ2pzfPzUvrK4AUh1rk6eVwXEMmK35upz8ZQ6e8eYXnKj215JUnpj5VzqEE4UDubhrn1bQas1t",
  "key23": "4ub9sCARaQ6DtJ8VGNyGcK13Cc874eL833ce5jeVXamkxpVrKdKbukSGsuWvBDWEopz7AqpJxK39epdjn2cT7ir3",
  "key24": "67gyqt8pWC7tgDGWjoDFQPjaLpbU36PCokXCBTzpYA6RTfmPjgVmKSK9nX8xm99MgZAstfetQ5PpwZjFUQNvwvfL",
  "key25": "T5ed4xVff7Pjy8nXnQqsW1QbQSM91BDynfXa29FGqResbNBtVZxSy3hkTQhnetBQ69u8tgzqLCEaoLoNNJALCDU",
  "key26": "2hDUcxcUFvD1WYmLRVRNunretvnxEkba6go8HD5jGr3ZSqwaPFdpr1mz9jdz4tfHsgvDBYcJtaLXzhZXygVQaz7h",
  "key27": "466obehF4zczHW4bDTXf19aMKJpzN5abtNe6CvCiqsxgATaHrbihCgkcoXwLyt98CsweAryywPthBESi1Ev19DXd",
  "key28": "3jsMTWEFSCpy7kuBRbRdqa1dpC2oUsJnT8epbbHfmxYfyujvs8PZAr6tRqeT6QrfardVFAvS4t5SQtu19S2MMSnS",
  "key29": "33ez2yHwApunexPBcDzjU9ez2ChFhsXAHm1ekTXUFvKCkAUh8vn1zYZDa7fhgZkN9jFykX8zVL4SwKHU8C1o7HXy",
  "key30": "3egNMLLM9A1fhbuxgMhFg3gPdxFyrxzhMa53HF3S9SBNZxKxSnDPRZ6v9BXn1LoevyNDy7za1covUM5dYzUR1N7",
  "key31": "3mkN19Feue9RYf7im1fzpoAu2WeZuWAEfFc4DvRPb6E5nwEdPGbbuopE67qQP7qsp1ytxMyey4nofHaKfXAu4F8z",
  "key32": "3qtQWsrTKZDM6zfGFEdj5UTpxJSJ2KESEnsg1HW8q4QQsEtEqSKmWfEuePtXzdNBeecFvpA9rSsfQoikPtCna5Lg",
  "key33": "492f8fgXKAkFF7jZkYHcR63RUmpn3VCG9TeBmunVYirUdYNAeG3zrHiTRvScxa3bcdbgxKW1oBUvn9YY32qP8Pft",
  "key34": "QNjnJDWsfJfFVRRGX8FMvfCuXMTPsh7YM5kyTCgKCmhj6yvwccxUGLMwnBaa5W77mvEVqSQSoXTLtnpFPB5jAjE",
  "key35": "5FUromeFfNLTR5szDxqNjjcbq2j8if61gEFxo2ADTULFhXuTtq2RSr1FevyvHUik48peeeTsv6ULv4tZvZ5uMZxc",
  "key36": "62wphm1EtVJjqWTPBetZ1GwgyvdT4D8HMNKsHJfJjgqQBFw9AMF5LSuP3twbXXXk8bMWqQq5BKhhV5aNBbWCTVj4"
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
