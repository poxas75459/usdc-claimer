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
    "3jp7ezX8wP7Q3E3iJhaw5DCdBQJm6WTCjJiBnDTbFJjgiJ4XMjE4Z9dj8C5yg7Ldk93BFqLX77bt7u2WFxqMQYwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzeNR7uhwAUpzyewqxpNYz8MrkPEQNTH5B6PsqzfAbNQxhQwuEZDRikjEZi3e2hKSjdp87iiLmhArjZR1C9L6Kx",
  "key1": "3V6R3nNS4jVin8DovzWWPjucdZ9NLxjWVLMo39ACi5oL5pQFEtpPyHT6UaCyz1oyQEAGpGwcT6qqWEoLtYkJD7bu",
  "key2": "3Mx2yZuWX2Kovy7iEVscycDfHaJsudd8JacXs9gn5BfuZL7QFkVkMiycKBq6FTw9CTNDkGiuVxzwQfGn9o4xDY9X",
  "key3": "4NYbmpBqmXgmiET4HBs6xwRbEgK5NBEpngy2gSz1RDuDpsFsdXVCDrmfxt2n4msoLyNzFf7j2jsHdvY7GUBxg3e9",
  "key4": "4D6gbKAJauQ88JyXPpCvFiS2JvL3P8ftaYkAQRHwbXqrVNDDWDHbFaQSfwVgisb2qFHuKQqczKFjp7hGa79LwkPo",
  "key5": "T4ybzQNzAP1J2DbdWZeMCSxc17qF7UNUPP58w2AWGeYuQmH3R71vkza8SXFZJiZxDbJE7L9prbxUYQESV7fhqkm",
  "key6": "61ntuAyDHtMyz3baLHZ42Q7vUexyQU5Q1gwfmSW4mNhgBo7efdZM5KhD9QhvvG8U3Jk2rw5BmJRaZuHE2kDg3T3J",
  "key7": "Bq1MxS8MYFnfkDY2UBSN4B3eySjsdzPJ5smm7fHXHRTeNdGf7A6uUoZ99PbUQpQE2H28qy7Fro4DqWsVR5V7MK5",
  "key8": "rdvF6GdpcjDWnB6yJpoynrjH2yHie9SsJXwJiDmLUkPnAdWVzDwekruheXyeJCMMACDMzMVNcm43Rv9PuMDMXma",
  "key9": "35EFUnHpHtoPFJKARWfbgC8XxJiZkfJ4jhwLQYYGDz5CCzBibnvbpYVo2NomPyeNVDYZWyhKqDTddeGrrhhkB2UJ",
  "key10": "53bCssvKzRfnrK2iUUw56c7bk1Dck6BGzsvLCNyeJ84bKfAGhXCpLeQNjgzUoSHp9JFQpiLAVyYBY7czsDViVuKY",
  "key11": "5SKS1ZiH4NGrHx6pDvsFF8iiGdKP8B5ahgwLTR7rzTq16BbxXtNZAzVkXueanFPyrZPMc3Lt1fjExGoNmn1tNqbx",
  "key12": "64x5crZ2zXeM7E72o85UYnUfp48YWQ5dw85BsH75uzmrarxceLdEHsJjQUjsWnN6AtYYmkYZJv4xoFXKFhgapuFz",
  "key13": "9NChxfHqZ5j8eCpEuRgJTpopNWGUFGCxAWbE69dsqWmBH7Rmb3yitZcMJumiJm44v7egc2yQSqd8DG5oVYCEBb3",
  "key14": "yvAtWGHxFo3zPnfWhdapvDfor8a4n2AHGbPH9mSemSSpQmf5W2MPSoyTmgf2SwSDQpVhyJCbGc2ww2qAAEJXPnb",
  "key15": "2MSEMV2FbcGsGU7uti73hAQarYZfH629Pzdh9SSsDiqmqMBGbur2h9J5j8vZQcvuTzsDxEjhMmuEcfcESn8vxrp6",
  "key16": "2jA1mri62Wq2bwHmgfUUaAWs678cjGLfv9v9VKhi59jYUmpsSn8wuCn3aCJVJzuXGoqiqiFNxCkJwiP1fskpTyRN",
  "key17": "47VdyUn35jyWMLTRcKy5kmNmt24AYFbLfFdUT28w4F1fX4hbvA6um6WAwYDGG3fRzeF6BdD1mFdmCozMQX2mNrCk",
  "key18": "KPY5QbpLAFucHa486xs8Sr8qowZUByPtpW1tB8Qbw3BMTYKxXGnAgSJxmEb6xsy7zT8uNwQ7xXbHGUNDS8ofL88",
  "key19": "2zieP2cYvkv9h8iVv61J2CM1bwMeqydwi7LsjLiet66D4JsKbYdHz9fHfwPhYFequAhUiYywGyDufpGZKRhuQnB9",
  "key20": "ZszvQSyhcQNoKcoisg6wvk3ojx8Ghn188hdnivsaRj1qNghwKk1d5oRR7fjnxaWYEPvK46RDyWqfigJRfh6ZzyP",
  "key21": "4dKEVhBkYE9uw1jYttEbUVqfXUTxUakXLNNGAtxXcjzvoMyoWGN6U8dZBqJGGWnzgdBnf7496beJCpm21Xqr7eyb",
  "key22": "2SvBTD1sFndJ3HaeSoYra7qZ3YWkWAE6Xvbq8xDWHrUPRQjXVfpecvQ9xvuGLsJGNB6LgNzCR5aSnL2qvuwhsAwN",
  "key23": "2w6xEYKv1hfVyYBScP2GMdsJY14UHv1bHyBtMSVC5sYC5CMbbja3UBzER5qHtmfk3rRpr2rKTadrccCJoHgyoq1w",
  "key24": "2p3KkCuof2QTeacD76JoAsNaGiM5L4pUTVTdJ4ZnwX2Z5BHFwrnFTXvtN8w6jpvEinZmVjfkdLkijnLXpAq2SvDr",
  "key25": "5qXgj3NCbjgEWiwu7fjyS3Bik9svNbmhkuvLWPhpXcCap4fcr2X6woxdJMqJFLyUoJB33gvaTKNWTeQQdQKBGziN",
  "key26": "25MR7kncSFjcsLTDACjqigZUesXSYrsbcT2tY4kebrtxeiFPyStcdTzCH6hmrkDCt6X85jwM9zcx5XMY3qegsiye",
  "key27": "5xKp3W1JTPkvRRzwKEVCxggzAgyWk76xwrhYqDk7A1Awy4Mz5WK9YJKkx8iGtdffMjGnRQKjErhxmaLSAFawQZBh",
  "key28": "f6kVHa7KJCjYz2AXgdMQjTVG9TgTExWqk7MFGTf1Nivyn7BKMRSZmbQZbS7oRRePcrettszYW8XM66YK7mSMYmx",
  "key29": "2V2DCGJPSNxkNqMLoDUR6BUf6RX8BLw1fFESPGFvE4vYEDz8ag2SXNQ1MMuFdUgnT4kbWqAYEeQQ7C9JQpKd5DuK",
  "key30": "3ukY62E9GGhydJCBmBncUYuefr8di9JGncUq9AL5L9wuYB6UuMuxzfD5tBUrHp4aMAfFbvZwpPDuXj93jpzmkobU",
  "key31": "54m8pPKYn7RQPTJeQNZaST27PfMKBpB2AXNnReo7NUjrdaFSKQqZizMCJxTVe12mTAA1J9gEfWBa5yKdKWnmU5hY"
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
