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
    "5Cw6d7xn2DSPzdr2iUbXheXV9YWLZKRZgpGoz1NZ87bvtX1HqoXjncppu7WpfPjU3H59bCFsfTxREbad6E3Cn3gU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNqWWprHLgeKo6sVtbPqFkFv9BCWz8fipaFCDm6mMLGogHXY9xcWNjhEUQqyxmsZgH4TVysqSbZRnRjmAzHjBQ4",
  "key1": "ck8TSdmWB1YS6roW2ZVnFDfYuPK3FjZhTH74TDfZxakY84qtW7osJWrZn5KHKMRx2dJHuvRShuv1xy9YzhXbwpK",
  "key2": "2Wvx4ZvTu4JwuQ9wfQcJ2GpQZj2cDg5pcQr2HnpVydSHcPKGeB3frGDQKE11saVt6AyESQ2vhi579YsWT9Y71DRZ",
  "key3": "4Kr5GZfVE7f3fQR3VhSScq5TrafhptE4ktzUSk31z8S9qQLkf4sNnpse9GnCk3SMWt1bwS1UBDfNTJT4pQYjsCxQ",
  "key4": "3JF5irnKjp59vGoVoyzkeTcv7QqX6v6FkBAV5NnfzqRoXLXycZSWRSU7HNMteKLa4HYMWZHv5Thw9pdX1jAXmQFo",
  "key5": "3AjMxvQ6Uqqhb6FAHN9mC8APgUZEh29CKeSs6TTuLzQ6HQZ4fSyVo3Dh8KmxAaRPvvMUKyb2o9FaBuP8ik6scm2M",
  "key6": "LJxMJJbD9zDyMErLjiX8KhsbMfLxEjQHumbQMWnwPjVPTGTZvYu7j89zLmFKEhr8zFD32dRJgoQ67Nt1R5yKGSY",
  "key7": "3ry2p7a1iLTBjVXs1ophRtVwX1X9kqk9Mfi4DSd9795GnB9wZ4p6RrZJ5M71Ru6ddrcNe9qJ4uAa6oFfBGTPyJ22",
  "key8": "2fBCjx4PvANaKN6sZHmb4bUHS8s3raYhY5VbvFMxvVCJEimss2JzRfJZKvE14oFx9RV9gxVZ5EASXk9UC1M6fHDe",
  "key9": "JEV7A2WefzXN2qktPEkXD7csUL3AtxK1UAjGwm3EwnKXG5TDiLq1GJqV89Wr5E95uS3GGLsc7URUdfh33GCTeq8",
  "key10": "5hLVJc5RKJCpyVnQ6CmUtMrQDzjVb8KMj7J1Eb24hxXnJFo1T4XFhEfVv7M5fdpKgC35uNzuCsxUFTu2ZRzKZ3Y1",
  "key11": "3FD4WWz39dDvjP1pCzeivt4ySyZ9nnhJ7DAs7o8XRtRLW9kRhASdgduPTwg6aAKt5XShrhtPjBXFVf4kLUaGkC89",
  "key12": "5pg8wE2YeMXde2aRcaSsKdX3bF5LU2aPnqfRSuRXixdaFHgcdFUyDX5Ycm3o3G279ekUEhNwYrWchyjCAesFdUdU",
  "key13": "3Fcoz3CwJLocwTRJ13GZMNPqTyebYwR99wzbfxWMgDN7hdAMBQb5PWXhqvmUEGgeA1RzFrhv1HnjTYpkUHKj99Hb",
  "key14": "5j7YGm2gCkkHWr36Nnig5gxj22rZ4Yy6Tue1QXT548jDvzXK7mDnuwQN6hpLGdH95osAsCZfU3aszAmqSueXRQpY",
  "key15": "3fT2AkkNcLCuZJSLx5eR8x6CPqdu5FCKDWATqDc84uG1sZA29xzdHx2aK55UFeu767gxtcqM1jhgTU1k67RgDVcn",
  "key16": "2upRmrvtb4P2vCPB9vEteEQU4TC9jjYADZhT6143xMH5mAXaTFtv16dj8WVMS17oaTuXzmPSoq5CMXpGuLzRj1ci",
  "key17": "4X4pLKW4EfQGaRQrznQo36hKcNnTVzUAdjvPJPiATFmvq3dHmNChfxg1VQLSpnSbJohs11QLHBJWE1a8USkUDsiQ",
  "key18": "4zM5XLZDpxM29e9SenRR8N3BfkP2LzLXSqFXphQUtidCEHF4LMbGgXhtbode84CUHLakxi6V5Uw6nSR3CqzUXWtd",
  "key19": "sxvaDNaxJa4QJ8drFCWZzxyaMph4J9r1auK7mY8XuWDnAAUyavcnRhrUSGgowRXLiz8TCjPLboBi9zjwbnGhPqZ",
  "key20": "4fWYCVFJ4kYnVJhUaYNaL7QqSp9dVL5E6HBYeA3yQPAtVe6J7Xy8u7HWd2vRG1JiBpapZsRXvZQkjpqgU4SNP4dF",
  "key21": "2YabDsD9bh9NvmCv5jDBGfqsntKcjm7hJhbGAtVq8BRm2K19DJ1UHtJ1fzrDd7k3NiQwzb6gd6pZQG2A2yP2MDhR",
  "key22": "48BFW8cgjwwT3TuPYgjR3i2ZGGRTUgdGvjUovdZXekZsmmzqRwkn3rHbqNXX368uCTJrMzAGdxZnCK5Kb7qWnZ1V",
  "key23": "3ZGj7b7AyXcstJMx8ZDvKxGxfh2wxfrjAV8VJuwWQWgJAteEbyZJxKPMAzordrkVYdVXhetv98AVdxpsAsmw8FhW",
  "key24": "4rfXk2m9Rmh39xkxHa3CtA4mLuTYbajfZ8gqmn4mMpouadBXPu9coX5Jn1r1JmnTcDNqo33v1padB6pc84iaGf8V",
  "key25": "5R8CLyVvtVcAjX32RpPJccuzK1bTzYPeGjLLRpTU4RytE2jdJkxzD8xY7WG5WFZ5A8hFPbNVuHp2CxS6s4JZ1j8y",
  "key26": "3qWV2icFHS9hBjpxjXTWySR5aJS6Hv8zFmi68ugjybpb1FepRgee7UQQe9Z9voSsQZrkFXQyc2L5SmziA1CXuZZc",
  "key27": "5wKTZroQj4yTk5u5gLtqAgPncLS3K5Cb52gqJXjfmMj2cBaaFN8XR1xWV4R8spt6WaQkJwPdTjwuZxDg7Xm7aNPJ",
  "key28": "2z1T3DEwdrUWhmWnsp4zZHEDWQYgYRuXWyztSE3nXsiA7uiZfVrcShtXZrgeWQKXrPuRRzoCoJ8vjvaEDbA7BPnf"
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
