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
    "47CNpLSNxVuKbfF6VygRcFDaPbTeJJxJLxqUuSepA2ggYodYWq94nehVGos3e9MWaHiV9ZNAyHMifZRxuL1wHFdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Agr1GtX9MkvbTAnBQarFSTpA5VMndnntSusgS22UNsigSyx9y9PMaGFg1sZpjPyEwjd9s32aQNzPtimFMhgo23v",
  "key1": "2UkVHd6gDHw4wEyF4aDPxxdAePU4H89J5AX5oUaKUBmpPfESLwNeLpnsF8Bx97ahmZUm72YvtvQ5HLWJrZqo5XPR",
  "key2": "4gX21SJBWaDvDqYxRzyAfCia4hpeRrFJJtpmyQx6nb23jWXGU3HGCxyiiXipzj1TaDi1U2WtfXxDTabsjUNZi9xT",
  "key3": "3dBoVZRrRmvGioGEYVrT7HzTCJ2LZtPbu2eqSKgKk2CLxXArV2tLRGyxWsDp1FYbQTUSAggoSbCcLS6zjxRdr1Yx",
  "key4": "y2aQbqSzFCLq5MBHszXaGbXKd8AsSJJeE1NN29pqNAF5GtV1R68jtuiSg7R6Zhs6aCjNDdi6CyMdks24YEespfp",
  "key5": "35AhBkfUGDyAaqRXyR7Jv6ER8g2KeW5oTXERyGKJcHSVZSxzgussQiaaBpDkSwiE9b2DTSPUWnn4mEbQcZ654obT",
  "key6": "4Xxon2oDzKyD1edgFEHpNsUp7C3PZfsqDcW3KntCAtj65kBpaj2SmiPVjsdQ3ZwxdQzdu6FpNTda5YELa2jRwWZi",
  "key7": "2Bmu2YusXmQnRX75yBdK2WydgTtRDmicNczfS3AbG6w9HpSWEEHUU47DEay7DDRZVrM89S16v4k7ia9S5qsJ3F2k",
  "key8": "5QDhAW9AaB25YRWQkGzoFDa6r5MadFUfPbdenc2E3GCvSYMeBDArBBboA57DnT7d2tqZKfmWZmmDgbSQecWJVGQH",
  "key9": "2tA9Dcp1sCLVWj1Ep5Ds7RKjQMF3GjHWZUML7sdRdzwXmqLgmwg3xHJUFdXcQCbYhy13f9QzwepAqCfNyuJhxWud",
  "key10": "3eVWgGeckkPHXNDyLQbDKsWRQVyBKCjrKFN1LWXt4iqxuGwi3dU49199LEKUq4t4FJxEiQVQGaEQ2sbgmryyvfvS",
  "key11": "5QAivbtNqQNRhA75pAZ61NQKj2d56wkTNAK9in9eNidPED5h1ju7CjJJEM7ueviQzBtqNievVxqP2PdKbcvgqArn",
  "key12": "3Q7czKrwkTQzsyJx6cJdpbd1CoUH13G2qxisxTPjsFLhJduQmzU4Jpiu5rM5aozQfiyKGz6jkMUceTGuEFNBx1hk",
  "key13": "4AJZaT3a5QLJaSHBMUbzmjdV1oPSvtJsoBjiFj9qUbvYtfV3J36tehwrQPV7re2yVVZuizWjgPoLPm9Z1VuVwzWQ",
  "key14": "arxDY5997Dr2hcAhUPhYjxr9GbzVGFbdM29ThQTWoVQrRBuTSQjAnvNn8UGCfk3CTteASS7rRbxJwHh4vw4a5aE",
  "key15": "2HXhpru1Bb4VtGs435Q2vQubtbG7P4fbDknLjb7EY1YdZoaQN4rrvExxqAzWo5DsVWaPbLfmb9VZc8EftEyMfS12",
  "key16": "2cepPoicqXobthk4GTY1HKUgG9MSaZi3Z4kDAXLyA5UC59QA5ExDvPRPc9Lr65Tpy1oKdQqJA1DDsWcwYptTeRBv",
  "key17": "jBQa9USTh3kYYk94K55nBiDd4qnNjjAuPVn1osCWTMpDP7PwkJ9nnhFiiA9sKWTBm1nVoixtMud5PT4A4gRtVqy",
  "key18": "5yu79Bdr6XYYDWT1jjGEmtyeNTvtiWgAZF8gDeBeDjarJtoVeCe4W6rtxDLZR9ahxTP4Ssy6Gn6pVBy9RSn32hbT",
  "key19": "4waWPyDuQBKjmFCZ3oac1LtYNn3yxWLBzxTvBqbuVyjmEBVmbyYUoEi3pYJGRmL8ouYV5vuA1dJCzfMFpj2qQUZE",
  "key20": "3PBB6RhKTphFtEL2BKM1FZJy7DL4oBARVfKV9ovDduyjzWvE85uugCHrxwwEC6Yr3SnD6pBwKqSXYc6dqXzYxZmV",
  "key21": "5jriWUhNiPRCrmjNLbyEVgsRvmDJ7LC3C6Y2kfFJmmxHcp3QLqZHV51mkVUekE7pVYHL6gYYS3MZnExYrSNmtGyR",
  "key22": "4VUG2wL48NrTdc5RKt9iVugnR4e5Q2raEJ4WLEmXtDkYkEKguFBFiVT16g1ncfkbkfyCHzhnj3MjSrLXcMLXMmAp",
  "key23": "43DYCYgeqTL6iZziyGS3UndbsRvoRvFBEoiqYH4pC6zmqdhEr5QhfLiYcbYbN34c9RbfbFHGvppxNUPPb8QvN6R9",
  "key24": "Sg9smgGNaPX5gzYqoFBQHScWNG1B5U7K9jqFbFabVhqCEjS52bokRjMEBzZqkWqpz3xqRV5bhFS8NBgTYc4KYYD",
  "key25": "5hZ9SUPSgtDXadioZgvs6KGo4emDXtNJEaoMJZbU7U8TV2Qp8fBHeT6FFajhgtfzCBAcpApanLjEvd2KAePJ4rTp",
  "key26": "4S8yje3fijmneUP1QhGkVXrY2AVoA8XJDnyCHC2Gb4ke3VW24Y7Mm4QSG7tR32yg7KKe2AZjgTWc4kWge3grE9Fd",
  "key27": "4sHwsQz7cJdRGosYETB9tNFi8YjYbr6bzi7FnHVcQQ6dhbLHzoMGKDVKr2c3Xju4DCcEBBfySCxakGCj7cPPydC3",
  "key28": "yNnK6DUqktDz2PvHHHvmCcewbEGKek9qJnUCrT9KhFLKyywPvCQiPC3qTBtqZe1tPHX9Y41t2FczgZtHQCPGEpr",
  "key29": "3qmB8pHhQq56ZLc4LQmQdkAus8SjueqPBiHGCkCgHY3ovXLtDXjKe93y8w4LZSXGrimfV9honyDHEvjetuZV8f5o",
  "key30": "3GZ9pdWVwpan8tvXJHeWP8MThW6HkLzRLvqdQWm1MD6pS9gQobKs6V3UJHNk71YUsX4F6G2TrKwEZDCpyEUT73pu",
  "key31": "44jQdNqkKf8iK8oJjB6jQz4TJWFdG6HKSe9msvJQYEXLvAM9rsdq8HYmvpdH6NcJiRxGd3otrL3bMseRistQmRJ",
  "key32": "3rxvJBvomcZqT9XjRzuxYnAkkfxHRYANjtFw63Rq5qZuSVtUHKMyfN69KM3CRhWZ6aRvGo8ywoS4jqPkJ1FsH9VU",
  "key33": "24aYAbU3wQN8UjGJ5DmWED1LCHwQvCQXCZ5D82mkomuZWeua7QUYXFpAxVczwDgqQrchsGBWX9rDWshNePXXE9ky",
  "key34": "3YETXwrVDo6PBqFAQusJLwVC7FdknEgcaQgTdsFhrrFEkimRJeqWP2C5DBPamktMuFqshnPNy16vYLfwqDko8ZpE",
  "key35": "5FTXPxa7rzvT2DPcHVhDg9Tqn89FYf1pJCbb2moUsgmySdznCzsAGqSAhu83XB4JdCCftyDhKmxftEoUJ9CpSKpS",
  "key36": "46NWEjSpxhkXUFxApwSubjeBrNENpKgj7BFrd3x9W9xunXfN2ey2JQYvgDyQFq9CWn1M9f9dnDK2KqpAjqzKG3qh",
  "key37": "5xMsCn8V3ZDLKwV8RcrnP6TasxvZ9hdor9YoTqkYwh74Pawm4dFACJiyg2Ph9PyHBVjBBz85M4VoHUHatUJXpW6N",
  "key38": "613BvJq1tZgUh9f5Lx5UruqeHiVQmzupppnjPGhPGsttnC2385wMeN5nHDg9MHu4wpaZ18fmBeGhmDQiSYESmbbW",
  "key39": "tqPLmxCcw1mUH68qaCGwjE5XJfXEqEJyUvGabYXrWQLJtqRJEmSrQP8tDuY8Cf2rbTvPS7Xa37KkgbBMJJqjAwf",
  "key40": "3bDrPxvj6yZWyfAhxKpojs37sfjRPsabo1sQBom1oUMxnQPwDJUibikn2j4GSsWkDXb8W8SGfnmriM9FsjbYGJE2",
  "key41": "5D5WpHKKv8ERhRhsg9ZxqoK7F2ENTULEXmjBFeLnGFjFrMgz3QxtkX1Edw4w436XEo6UvFSbRFtRkTuKD1NiQQgr",
  "key42": "44StQxHwRquT7HrPJE1XpTegMxtmhw4dsoG6oUqbDSXEMPKsDi7xKxtxhHsD372idXzRZG2py7ee2VrXxEi5xb3o"
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
