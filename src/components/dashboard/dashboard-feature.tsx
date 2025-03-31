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
    "2FoarBAjMJ7qCH7wUFwJB1ECasq6Fn2wTuNV8doDFjUmEXpRuNxJ8mCEWqUAEfZNpfXSnnpSCKTK6iRaq1Yjon5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WZp9yQGFXGiE5snv8dE6eQwDGdGcGPttt3orZ7otLoTWwZEcRhd79u9G2EVfdBYmZAHTPbA8d1DQqRPNdwQfq8M",
  "key1": "3GJnq4UUPH487SMLgerMjWg1LsVp524QBjPgKaTFYzXQrAVzu2c66xMjHvQkUFNnU6f4bvxzaruH9a3cfpEVXZQs",
  "key2": "2JKM1tWnu4gJiFTFT8V1sgUikrs1Wv9x7fu5rcNizEt7Cn2a3nanC88AjwKk5vm3fCz3W5nGU4776Y4ByMK9rwWM",
  "key3": "8xiVJin6bfc3UruCewXkmAfipYXPwrTEjSsDx7RUMmk55TMQ6B6N9TqBhDMJbNGgxwzHExgRJjRcpbxYYCPz773",
  "key4": "3aPLNU1MRyhwNBA5WqxPc4rLrLB1cYggk8QzmcMLmGDZCWhPwpXs8j6qYWrW1TwH5bqHiS74Rz22MnQQchUjm5iX",
  "key5": "5eeic3AbBHmgsBd1Juunpkc3CtTN4TAV1nYC5ffbmNY31NvZuv1rr6qPDY4Z4b1iqssVMPVa4gamDGACVJUsMxto",
  "key6": "4RTswCzxKoXxHTnTnJwLhz7fw2Qt3hRAu8wKGkr9QtvodpF4inrQaMACAy4QXEYRdMmPptCZ4kumv3wwRsHpove7",
  "key7": "2hA7XWEpPa4dwm3QLVe5tyz94YxMv3sjCx9XHZgMpt4Vi6YNUm9CxCjBgVMLpRLNWX5MLQ8USRZGnSYBSsJbu1Gs",
  "key8": "3crjYJ6AUUSn8eYuCifJ7kLMNspWgmrRAUQHiG2iZgeKCEybPWHr3Rm1XtZ8bB4uAXY33S4z8kLDinwB4UtSJwQT",
  "key9": "4tRvGSGVzF8YZnHuZ9xk922uwmXH62ztJ8P216pVs2wKPmG4LKcLLqcRYg1zJtYKn64gML55YN3TXV6ikm6DGTQ5",
  "key10": "5W6FYkm6386hmwzZ4XtynoYohEeC62eoKfhaXjTH3qu9MkNahTGnVhMWqe1xzp8WtyaAkD3VsSfqdv4XbEMPMFC9",
  "key11": "3TbmWHFJSFjbChgp1MigKBHsKz4pMf7C72JHKPxWERAqwG2WG5BG3garndYD78827DVygihPXsE4ZdwjTzNQqX8s",
  "key12": "4kJkJTo3znLB4PQWyvg6Pazd8gLU8rv98LS1ZTMPPBiyipio7bcNkPVXB8NJ3nh8i9j3wSSyoLVZqrmBYeW5wK45",
  "key13": "53mBGsQprPRbaWDHzMZHi1vozYvYvUw23bAXrtPTzMfsEFBXCQx3F6S7txmr6pZHc3kfURWHowfvSchijaNCbStY",
  "key14": "23auVESLmG8GzU5S748C13NCsJ4iCcbFKHhiMxqK7mtCKfHhBscMhrGVfFDmRcvcZVfHyngLRr4N5nuKzuJ6P3Zy",
  "key15": "3HgkVZBwQN6nYNjXFL2ATYTZiaNvHYqSdqURq5abr6g94X71myK7pXCFQXxZNjuMpj34VhGNHt92K5HnkQRGDmDd",
  "key16": "4j2iXrsfVRu44kS9RQfXPh22rkL1xJcP7ZWQekfy1SFJ3ZyN4aqE3nkkgjiX5oKCYyxXUKCWpVWXYiGKH9aBcpXC",
  "key17": "38gHq7S8PsxBqJcQhp25UmWQHY65eHDZWd8wwBGkqL54VV1XaM57h3oLoxjBLuuK1xb1w7BP986PRUszkUaWbjjd",
  "key18": "rrK3dYtUQwJGPpBXcZ8HTC6F7ND3GNUCUFUk5FhWbcAyhJm2DVVuzjkLWJcX5wkF91k2bQPz2owydousAVTCHv3",
  "key19": "2dcCHKJqaHfsNyzjw73UrjNUz8qs3nckqZa1fwPdVzCbzgbwSjZk5agfBWBv3UccymVpgutKgFQ2sBYiBPx3j7NN",
  "key20": "579Lgdf1tXhzAszHnMAvThACNKctJkjS6hpQnPjDcAVUgJ9TjCkFb1w5GRqvLssstSapkwfrdUrJyEH4fF2gUwZV",
  "key21": "2uDgsYyuQr6xPFtLiPygWhDy1Dh5J32Ld5p5hSEurb6LjZbnjtXB3mfQhTB1q8GH884iMJzU4L5ze8jg9JEfoBYn",
  "key22": "4RNfcYj4Kk5F2bzeSSBBktSGHKMkHB9p42SWAbiJfo77oMnRjR8GPjAa48snyiHW37yoa81fNecBPzGWuyqcq2s6",
  "key23": "3JE88WzT4sYyxPeRSfKG1UfT5ENz6Tqi8jKd6RFjbArbWEev4TkJrswFncvnmKBYZySH3kxCMGSL93ZgYNnQa8bP",
  "key24": "fRU9nGEFYvnFg6pkBjBSdjY6djoZwWSjX4XwNgc5fx84538RFxSUa6aNvzoRhvqH7dy6pLuqQwzePgHwox6zJET",
  "key25": "4xr2T549GUQvatVmQGYfLAGmnLNGj3sQ3sHrDzpGwSThFTPuroH6VY2TLmkDJTz4yz2DR1S8vVFVZgWxpRTpgLBc",
  "key26": "4ECy7Xb9NdNJWQnk9ngaSfEJqUHx96o1e57WkZjsctBUW1fUkiGuNmDF9qKN3ucoJGA2Jxq2pYvQVfpmPnX3oBvz",
  "key27": "ka6voKQQ3a1JZqVzST6DYXrvhruVxpRGomQxbUFK3BcfDTtNnpYsMAsTrMFjFsgAZqsMqh45iWxna52UhsCcDrH",
  "key28": "5Auy2D7tQqzpxAihAjLf27B8b3RkUBvFBZbCTDkTYMTyLu8ZmMxeQvjVyJeuobPLcG4pgwSRjr8xwDJTeNb5ueJ6",
  "key29": "2vqojq52yz2Z8MHCGBSMjoxyTnJx2tM39UGj6gEBVFYsF5Y7Kw4ms6dfh9PF99Duq1pcaroQYHtB5wPCRQggnQdn",
  "key30": "3VyehhXg1RCbyUnwSK1tm194EJ6jLTLEda6j3kEwaWgZDg1zPKvHargFYcbceH6RLJdzZSC4UAXm33mbrMmDxC85",
  "key31": "9UQDLx85Tu8P3rnjdxuVkv9o7Dg4cV2DCEY2W3bx4JuPTh9txnwan2s7nsL8KS4ZaEmJsWmyU9U9dDbjfFg6baM",
  "key32": "3Eia2X2VawTBAFFvoX6sU9GK6pzQJQsYarVWhCLEm6DMdWq4Q8CCkb8Laefqx9B1WWF6WN32uFqYXkYKi8FPknz7"
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
