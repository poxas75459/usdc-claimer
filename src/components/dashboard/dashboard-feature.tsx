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
    "3uBDcupjUSgYXFfMFzKcMddnHr1GrxvMQxg68RcGhAuqTf2RvZFyCJdLrv7doTrrT4UJ17niND92AKBVp2k5y1Wp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gfeJdAtHQaHBzejzaGBvfpEKVp91YmTnSmYQzYWdXjZKdFa2Rd8HkFnowyL3pAuZCyHagL1ny3hwGgJPvj4qRCb",
  "key1": "2kBfbkFbA4XPnAZYW2JxP12BJCEU5ojNdyTtpC3tZbrsXUJ1CrnwrHdT3vUGLLcg5Bcv39dN5NgZvSuVjNFGfeHc",
  "key2": "5kAN8uzu8vzxejkbAzSyGjfAv9yMmTaKQexFukLpLbfC86UWemiMSjPayZ9taUGTVTwmn4zZQor4EYTtHa4x1cAU",
  "key3": "489h9N7gt9UcJ9m1ZeD4NzBRbn1AwibptXG7NzFgrhwskAWV8dLHB3PtyzwEfxJYwg2mwN54oSBMeBoaFi9ba4n5",
  "key4": "4FTytDjLj5jrvqqDaJUYGMDzFUbBjAMc46rTCkb4KtmetttsVXBkAU68gWfTsK4bCUJxQhHs6fi73g7gcmQ67nGc",
  "key5": "33zNf9wnubGSdLjFdgFaV7fsfMV1YxHshi19mN2rua7WEuVrJsaQYLjMUgBq6RmaJX7CMAcmwamFd4hM9eGNWL82",
  "key6": "3ZwZr9yHn5NQpJiE2WedXAoHvqnrQmCNRsjVh5Trykr6bLKpH1nuUNHSzNpp6cd3WPwNFHeusviwi5UkiT4xyQJR",
  "key7": "4fyLQSeibuiJGhXD6MBUG2KdFKaeA4kzcmbgQDW9f8B3zqjNVhb7kMaf27pQKnXvbJGwtnxMxVpCJZ7fhqjikbAm",
  "key8": "hUkaScGCTyB8tJEadMauUh78cnYCFUPThrJjgP4xRyMi3rQEbcxbeDMfjLMegwhbvpxP5ggiTqit6kJKRyrD8fq",
  "key9": "38tMD4W8iHrS1m2q7xToWbNiiv3AJmA2bhY1qg4bLN4xeGcLfyALX1QKR9shQSUKikTXYV8AnswAXxnLc86yaJVj",
  "key10": "5MQJXjsdun6U6uYSkkj6bgR9VyaXtCGAGcZQRoaCRt6TP4hNFcEethQFvtMUisx1rxKgKWaW1sNijwRpCsKNDXaJ",
  "key11": "3kgJFhyZW8AHmg3DZg7UQCPTfY3o8fBqQfrshCkQ3bZsiGuARQQ3799xKgzbXM8PejnHoyHtx4dk3eqHughN9xT7",
  "key12": "Yh9XdiKtERCxPuin5VF4XjBREeaYWJUHQJdCHEF36ZXe321hait77WbUAWwC2uucYkxxRpzvW4NCLhjuTLAHmqV",
  "key13": "4xRRNHDBpE4Lojz1YYbCcxs5DpwqkkqWN1E4fxN1pZ71cMS83hh6mESanK1ES5ti8tfVQPFmKVFPJY8F7mxzMCs7",
  "key14": "22W9cju9JfLQU6FCMKbLS7jZqc68wnYirVAQ83hAZrHB2jmoWEobf13LJoYxX9Pqt6AfGYDcav5mk2SBm5tcKm55",
  "key15": "dLbUYLXD7Kdn8WzwEirTWJttRvHJzDpWkKbyGg4qmLuMR3Jto1WAMGx6m9i3byEEP2X1UtHsLCozPtPgAkxWKHU",
  "key16": "3cSo1RZH5gE7pQSJfzsY6iEzpJMnzCD8BDuN7w77a4ytkNuUtot2uor2Zg7cdfT8yznhKVhHh1tZhNdecCT9zQhf",
  "key17": "3Z2dqzmBURHRb9PE7YQtVoTig1DhU5rDoSDkH4y96gnAe1PjCynsDLhC3gMjYouvLef8NF1Ai65eVPJhW8CfBK8T",
  "key18": "5x1EubqMYfjdB8Brj9GaeSCCekBJeuX7cCkA8KeYyEb9VW4Y8v9qihQY398vbYPN2QJrRgXXgGafLFVasmUL5ATu",
  "key19": "487xp4NHBGtAexQ9qZ7QKjW6UidY6pJYXma7c2Pvea2an2poExLXAY7BiEZ1XLuwYiJb15LayQT3WRp3uJrVBgUD",
  "key20": "5sA5RLWJycKQE7WqzbQSqN5xrRvL3Y4CcgwZsDj2KtuQtyz9YJt8bbajarVt6VtDvdCmaTp7NmNjpe29xdLb8zhq",
  "key21": "nA4wwo4SFhsx2sZc8XgC5rALFfvRZsZx7fLdZKwrg6gR2wWAgPozjChLvqtZ7PpG4TtZ4L2woJ56oQ5Hk6VxSgW",
  "key22": "4ahXtBLquVTnXqW44rd2EtBium2JEi15McUm3oyBgp5BDii6PnyRdAe5BoVeLRqBmF3SLZGrrLi2fwoQDEagq3U6",
  "key23": "UJ85txaJknPFFsTd8gXBb35qBeweqPoxczmZrsQY896LkXZmYWjCtm6huArExVnYP7XrXEMGHMGMY9Vdk4dC71M",
  "key24": "3dvsBjS14A21gRZWapeyZEFEeDLRXyBdZDsbmHbR4KjgXw2LJXD2ditphW5HG7xQrg3qKGRkeAhzUZgR8pcEec6L",
  "key25": "2LbjqEMK2wdtWqv4AS1zsLyT6jsQb5nh6GCSgTnvDXSQBdEkkJ4eXwPC3bh5ChPZHtWXFzKbAvJ178vhMqR8HVy3",
  "key26": "52HockgKxtAe7DvaFGEcB7NT4Vhh1HQzRQ21mU1NUFoe9FVYWwFmrSsXL8u8Uo4UTq6fK8RarKiG4N68qJL9VsML",
  "key27": "PTMyhWHtaC6hxYG9oyhLAvJYETs58HMXZ6wxXm8qgpr5yGcogrYmUkBnZJSJ1vcT59LrVaCHY1hn6X4zK8VZLq2",
  "key28": "di6feof2xgUXyFpfgEjfgBAoaxsR4aHiQJ5YWKXYAycVDwAVpdqtfwSncxin6vCmofezkgQKXeWuGGhC3WQqMNR",
  "key29": "4X6GWY1VUZvFaz5qMxYWWn1MLECe3k58KycP9mWrEjsXyaH2S2dMhfagygJYHJMDDebPqRJZJcFGaML6uazNuBM8",
  "key30": "q88bKsK46sjTjLMraT9fMVNAGY8ekANDX5MJtq5aUwz2kNSmVNyVmwxXcXAh4bA2rdwWsggrEHwFu6nh8vawcbW",
  "key31": "da5XQFfTzrT36WZf4RvoBVaULAPnvkpZd3dLTaWCA815Lrd4WnGgZsY2kHkCCkguPVBb9jCqJo7f8SmS1ReuA6t",
  "key32": "57wQWi3aAxsz36RZAQKAJaChv2Qv1dz1ELPmmKjfSoRZYk9sgZat2rGqDWEzs4BbrPERkm4qFDTHnVHTfiE8pwMd",
  "key33": "5AGG1U3avFGkio9xpzqRUCaWK67vn5iPSebYaUyYVeracziT39kD79PbLDxijJBdP2ndjQ13AbRx97mstxahTPcj"
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
