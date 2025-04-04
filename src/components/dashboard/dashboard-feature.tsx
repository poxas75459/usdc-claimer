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
    "R3wxUAE38zAzNvxQK5qGg3fEQ34PpzbgBXCvSazienBG2aKFMmWeRu88deCgW36kvV9HbCZN69QM6mjH4sZMjQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkaopPg25qcxf7Zecqj5GLiP5gckYj1zQhXtf3EtXuciFBEZV4U7egmCpL4Q928P6AT9oa8mRF43G6gy9SbZVVu",
  "key1": "Gi3R4SjCqUQPqnsXrTz9tAL3dqLE74Aj4KkFCjGSFUq4FfUmZy9AdACs2QJrxo6UFHS4KtZh3AEQhdN7aiZ5LMh",
  "key2": "p2cqCXro1AkT4E9AWZuRuiZWTg4TDcrXXeTA8WX46bdxo8ix99KzAj8BNkzz7HBgb5y87JLznsSs15mNWZqdCGv",
  "key3": "4dX95vitbVihabwakdZr3YowbpydsjM1sck3ifepyiqeB7Wokr9zfW8XnKkAQyMNSi6SyvX41PZScYmrBar2uHmJ",
  "key4": "3VgvbKRCA5fTFsciZys86jWKQ4cGTsJYpzhTQ3Ji2n7Ht7mB7pLZK1jiFmo54Ca5MdfBBSZn7U78sYtFTMmZoucp",
  "key5": "4tY7NtrFRhZLgJ5VwpxcTFCGvmWojH5BXPP3wtR1WHnaFFUDYGKFVNxA4ZcY4gmUZryx6pwxcpg1jbh1pnTZEgXQ",
  "key6": "cZ5nDvZMoSeM8YZJtm9TKuTPWdGbBpGijxCVW7Ja8R2jyG17u9xtEvathZZ6t6TTLzt4ZM5YAVSggdbQdEtWwqv",
  "key7": "5b7cCX5Rf5E7tmwEYPRqbb8fVKkEytieRmheZGMnPVXXZjF2iTL5h8xkYWrAZb41PwENPzGr4hPntVWgWV5EX6Z6",
  "key8": "3HdWq9QVNSqo2EkfTwxEHGE3bkcuSGDfL3ZNMCk2P9LSbTRxg6KBsrN1v3psjzpfeHu29bZeeD4RwEKGVZxXwfu3",
  "key9": "4YF61tobTLQaE4xYFqaH2LyWN1wRpvRrHjA2BngBh2eGXjZThtCPyAPrwJFEWFYVeHPXw4Bdt1LyfzLjZwScNMEV",
  "key10": "4JDyoujCenQN1WnVyEULkw21BEsTeHZCtXvfUebfx9jLUQxzFdnkr4WdN9625W7q8QSxskWCzv62xW64FZwBVn2d",
  "key11": "4wurCnD5E24TfkDzuPoQgyzxktKow7TaTv6pZC1EbohGwub14mGsDZdRjHFeMSrpHq984JvPTKG89vC217EyoLUK",
  "key12": "4J79yiDuC3MzymfmWvUj41Tr5pe9RR7S14VroXWGUtoyUBHz1gxKPwpnX7gg7sNmDHy9meyaRTb11cVsBSgkQwJh",
  "key13": "2EVhWudae2LeTgFqNBQQit31GweSZscGoFcBCr7mSYTZtVourCUqRE7uxRZRcvcvTFFAiBtTKT8CZhp79EDYoqGX",
  "key14": "4WiCwCwdjMPG1miB8KUf9em8YmfpbVeoXYRcGw4oRa6p8ZFmN69RyJ3RXF4VKRbsaf1kt82RZLwTs199EQ9ZvDXv",
  "key15": "5fZWYHZQdKWkZMP4FQVaqBATPbxm9TxdXkcXCaJsvnEvyt35xhgX5oUygKwW3rvGK75EPEHP6oi956pFPQNYqHgV",
  "key16": "2ddsM4qjcr7Ko9Gdb5EdWLNoRJYWUh82V87G7J1MmovjuckzzdPxVRRPBcypjFXrhpbtxosSpb84vhwwzZUea8VK",
  "key17": "2PVmc9uiEXueVWQptssLhJibHX2JLg4rwPsJFMr3CD65AYFM9k9q31HAS4K4kZQEB1PvBUgfdZiYQcAPWH8G9BCB",
  "key18": "63H8Qg8jfSUNDCJ7KPZVn2xBzVuCsLoptoX3SvsgxLA3ZoJnLBz9ZYN5e2Gqg1TWitsrB1WUsTSfPSw5jNLzRJ2a",
  "key19": "2orC6dc78FkSajA6HgGkp1wdmou4tv3h7RE2N4aFRxxqT5WHPrVng2xzRwj3ddgcWCwgrEsaginsq2YHkcDjLzGp",
  "key20": "4SSLhCcNb6FBHAhRtcyC8KAxgtdbDPYmQ95BEgFTGQzyNvPnJk4yeenNb5B7CfSBBtVbkUfSd4MEiP4N1Ne3nDEk",
  "key21": "5p1w69hvMqvhScBjLj5Ag1cEcnW7gkH8yAZgF5m6nhL3TwKXZBkpJuDFoPiKBfJSWVj75LzLkp1hiBgfperxYKKJ",
  "key22": "qyMbixX6NorQYncNsW7s9sb1MNqQaSGaup27tPtx5X6mR2ZcWi5ccTUrnVtp5Q3KPJBZ7J3AFYzQnTwaF1GrM3P",
  "key23": "3P6DSsrArHfa5oYtNegzv1ntq7DaeZevRz3SPNM1HqoPrR57gfNuUjFYkiJmK24i8MwbnBnaBVVP1GzAMUjTLd4x",
  "key24": "3mCHz8Hu9yWjTWBo7fTNaA1cqWHcN6qG9fyxQ1nbuYEb3QgRxWNSvicSpXRBjPrKsPx7DiKbt7s7AxM9dZTRHfwn",
  "key25": "62msKkX6uiG4YcqHZQuj62DYqwD8CWSCtiYjxAN2aHdXdhYoqVPqYDUcbyEQ157RAYhA8xaVemreTHNZjvZLaXYH",
  "key26": "66HCRYnzbqdpKxfQC5MJZ9ePu5KRGpvP4vqccXUu13WDMN82jLhoWTbhA1w4uutdTNocMEm7NJgDcUeVE2aA2ani",
  "key27": "uS6VJke4fzAQVCJwKrE93SSz5F7jw6YV1b4BhC4rR3asy1PLKS7chvzpkdPVYzRyTxnwG4R1K3AQpXsxGbQdJWH",
  "key28": "4CXigpjadiRgUK77w6ipUgd1Pn5mudin54an15r5Rr9hAvuezbdVNpKk8Bo2DUdffZYtWNyuk29yF3WYrx9raoMM",
  "key29": "32YqgwsQvRXzU3NGKHYGDeoYCni1pdHhS1pceuBA1VjUAh2mWAczkKj4uk4DLJH6cjfk6aqDSNEn8XaXwtDbSRAe"
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
