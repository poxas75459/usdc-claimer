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
    "2FtoNFeC7DMhj7VxMgWoeVLpwp5JtF1SQn8HPbUyksBpyQJxKxvuTMHFt4WPK42h5z4tR26v6x84hErj63RHTdXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gyQPsiPcrxAfVuqMMrn7QAamUEzL44Gyo4yabFUBEbh471ygeSNYhG3yyJjTNTze3mZQYkX5VhAc8JLC5QyCd7h",
  "key1": "5Wa6u2mnMnk2vBBzPNaqf2WuPgrtJ7naniZBZ3w7RuNR3RgzZhEJMaSHsyXhwZmft278HhGZGmQ3xaLJdthUU9f2",
  "key2": "2jJwX1TeQQozYQFQ4rKeTCc5Yopf6W8Vt4EUWrLy7nN6WnCgXzENTVseotjfVqZ7nVoKnuK5NnZbqn2CnW9YfKrR",
  "key3": "3FWt8ygEF8xDY4vzwcJPsM1Mo9EPZ4NNGWzQkmXWQ8nu5rSuRo47Bn7rFQ9D7Xwq14RJhnW9v53NKGkw52s8GYK5",
  "key4": "Txii48cq7uHCTp58ZJmbFvWTo6CMBkUL7u3E7EVKR92k1pkMqpaGhqTXqMse2R6MP3PTBGL4YBvTpfuo5dfJn5z",
  "key5": "3qDpic4P22vJM9Q2e5Gmn5FcaDF4mCKQo2iFscYxfKXQcxTqrPm5ZE35bJkvazn3fsNzGnMZiyWLZ9m2q9TviooD",
  "key6": "3CWbmX8RpByv2c3uJD1vmXzjxqcYvp1Eb8uu2JJVCbUgckx83xat47EEs9vTM7Z5n6GURBXdXVeHCPcU2qtxV1WJ",
  "key7": "kvDAaXrAzv4QiMX5THtjQQARZS4CkWdnwdP5SaxejNdPiYEM6g1KW1kiy13EYQ5PpW5bc4akuq8AQcafJ9yVVNK",
  "key8": "3VuNZwoh4hiBsKV1NNMV1SSUXtz3HvQ7UjzcQGoWG7s2hDuxSaX3tVYqbwhzewhDkSr3jUktkfVA9pscFca2bidL",
  "key9": "5rHgeHDnnFAmD5snpiaazo7SEoYvEZpLYX2gvqJ2TsXF6rAEqd4iaNhMzFwFmCztUZDiRvCPaScbc2jHQswVAbiL",
  "key10": "4ncZN6FaEFVmd5FqgWTwNkKrAsCpnLJAei63xWa3QxJAyjAsGPfLdAuCMFa1X1eowU9TwvJZrWZBLWTK6euWSnvf",
  "key11": "5RnYPamNJQg6cT3MdT1Pe6zbW9wCCri3uRpqHsQStzbnFnYW9qYSxxdLQzTg7r6x6bDgUtkUDSdSS25ufFrp3xdU",
  "key12": "39rN6MZY55kpHcKsxASnXtRLkFz9uPzdfPcamy69hKSUmhoDdsboWrrfLwFWCpgVcezXsHaG9KzeNQm38zZeypvU",
  "key13": "PbbBXVLZdWStHgJRqMAdmQGemjB5WbswEHexzaMuDDX7R45XXmWjD9j3KS4uRytxy645qJ97j4Sx8usnFngb89h",
  "key14": "65NVmyotFf5BT9iNBm5dJ121iz7FS6Kj4aZ14f3xX694qyWAo6HhmKU6VFiFySkZSsirqBsGT8jeJy5Wkh4ibEyK",
  "key15": "5R5UQAHXJNg5gAPQPP1iqgKybSw5GdPwSTzetMNYGCcjrymHdu7F5YxFke54XnXojHe7hfSzrqjFdkiKcgyeCHwR",
  "key16": "4Pcz4cRnNnuLSCstnxE4EsP93NtoYfJHSGZciKJ4kkuz7miPVdM34iBnrJskdB4GrJjFzienZbYv1UJebtYKfazW",
  "key17": "37QVfeKmYyGeqzn6Q3PHCWEj83MuCoGB3ZjDqX2rkBQbu3Gc72HmHnYUVjsMJnqgxgftfCSJPRGcJ2fMkd7ofVu7",
  "key18": "tULbRxxfCzKZJtZY477hhpfpW6iWf31r8ZqLAyfjzqiocHP12mKsLkUmXceWMyk316Raxv9XVPcJh7xYpxoZuTb",
  "key19": "4ynrfupNAm5e55fk1VNMvvMQqnuiCTiWCJbEnmVeAgcTNieLbB2MnLgyT6nv8UzmxRFTLM8NJrBbdMgD73kZR8Ph",
  "key20": "2L6sucSHGJfQecxpYzy5zJMND9HrohdYW9mmeRoHCnkCHFS6YHFbaNur9vra4yvC3wWzgQYsWs99cce1AeHQnazZ",
  "key21": "3CbuLNBC2Wee29dTtzfBzWm5mPTeP3Fu3WLjCdFjXBsyhur3TDvw1k6rYK2N3UxS6qKdLmpEqe7yYPAcwV4vz11Q",
  "key22": "2kpwJdndpTQcYroWz2XMwBC8GyzGkhpQZB9ryCEAUo1epxVtnjvGhqnS8FCNKQNxTa9XDzbSAZGqXk5F1gKnsJLe",
  "key23": "3pGJV31gA1GaFaKwp68WXHqDT3vCLyf4JfazR5ksXzrdu6wWNqMFFB3xgbqh4j6R8HDsUkhMG5RqT2krt1gt3eLB",
  "key24": "3Drrc9BqSjQigf8ryoXZvwfnPpXn9EvcLY4RvgVrzXu5SGA5FvHT986biCHQTDYWHpWpFuAhxxGgmnRb3AzZvYvJ",
  "key25": "4YZuQdqFfCAg7Q6RBhpSXRzyDyvmzmMdo3hJHjfczf1PaK7brFwnv68PY6F1iu2h6M4qw8V2dktnrMicMm4V5gjX",
  "key26": "5MKyPMNUr1WeTLKS8sndoZBAPhJsqLjW2YYfBXGKDe83obsKyYT634gc48MYw5fjZ14So86KmjnEAj1ZrzQS6WU7",
  "key27": "5g9Xt8kxAJvoWBhFYZBQpUhr2rAKJtBT9Rh6Qv4t8VgY32V5vdcy9Jk6ebdSyUhQpuBPjdcQFHTYnamasErohXYf",
  "key28": "WzabLCpqUKJvMJvqBGwMq71rAWFDbEVzou3zjN8DJoq18P3VHD86DQftRkFXRW2QzUNzuACaoJNJfHnYtWGHkxd",
  "key29": "cygtfUXVNLcYS4CSCDFctMGD5qexBUTGW4HmcoZKhFVyfMkFfcYpibvLNMbPfWEXFWmd1Nim9JpdqMo3u2yjbje",
  "key30": "52Tqncs93K4ihvyEDTnsZYoY1RWcistt9YucHk3L9te7yYgMzh8psBoPYTpYB6zwGenEKPq6ppo7sSiZ2TrMXCy7",
  "key31": "D4WQFhoG3ERJyCahwZSkB7eSffq7ABXudZE9tD9mA2j219oxbeGctNnn9peTqhsbZgBendKtZrwictTQRnyFtnd"
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
