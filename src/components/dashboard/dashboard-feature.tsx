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
    "3GyXAk3uoGaFXhejBNwAQMYJviKvqVRuSkmaC8c9aNcWsgmi6ok8wsDAzc5Wy7MJkLGJUdqnGA3yZm9srPoohG8E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35sQoihoLX73qe22YQd6JmMEZFDWFBZq3L5qMtwrFqkXQkUApH5KPqmm1PouJp9FkyB9G6xxWwkGsAmk95nsYXQK",
  "key1": "4qq41XboJrugwLoLCMi3gMdDFdZ31w2qKn7NTdZpktX96RXrRKhwb98BGieGfiuqM8KR6AtVokmu6vcRBiUceGCw",
  "key2": "4wjdJjwuR5gaomgz9dRu3rXQ7cfdgzDCprdD2RU1QCKoKRXzfNHV1KBeXYDxDsfnqahUQ3eVjNJV8Hjw8XDjJHv6",
  "key3": "2JeUv6gvQSy5ajmR6YTK5q6ufMZDQCkc4W911m88MVMxwDjchMXyk6ovZLWr4sozeqorDnGZfV97Au7Bu7QKbxtL",
  "key4": "3Kqp9mTYNyceKZ9Zk9HLuLPGooQxtbRsnYzVoxEXfpUjx381kTpq535P6k7F3JCMcPdAyhRVAXMsZxpYJw7fwdpZ",
  "key5": "5bWo5oaCfd8mY1ZZ21Mt1DXA5yVMF9A1Ao6cM4T22bGntkVhRxC9fy5gGtgRXd8Xs3U2vetb1rZdCLPQkoAmGcrN",
  "key6": "5oi4HATFhEfGGhyC5nfE31YDzAX381wgGhFozYyu4puTB23LQdent2xLLofhBeyd8dGNzBYeoGZqqkCGbRvmhpUZ",
  "key7": "5FdL8S4zfcsHuaDYu2tTRHU3qrtaLEZtZAEiFBVzi1VSs36z1qEqKXe5XxX2qc4Ze1SLVjkmYmHG5sdPaD7xJEJR",
  "key8": "4k4tqpb94enc4ag1bJeE91hvxHHEy7kAcvhs5suzKYriSouWYfhENJYCras2gkHwmJJmaExGJTZwzs4bKxeUciwS",
  "key9": "3KdfKYUCXzK2X1AWEhZ8QyVoCXKed6XcbgdVpsZuGKgfkHp8PrVT87NoDP8CVDaCeXsB44FrxNBdB4xihnybBxn2",
  "key10": "hKxQNPWtMTqp1tVhTavwdYtoEyYp1spgrATTkLrqcRTBdjEU3pxiCQ3736CDycmRt9LGF3qS5NHZ4GBhMo1sUJG",
  "key11": "55rMFHVQzwHaXKC2JMGth3bJJ7fn3NcVuxrHyw47ZEcyysXGrbAk5AAtGpF2izWVY7VEXszwN8Q7iQ3RAn14KxVv",
  "key12": "4ZF56u3U77EmouK1AQVLkTA2e6FiimxD8NWf4phjaXtBGigzK5UEfyVsrSB3yaJWpH6PZU3W3FPtGYk4EAy1bjFY",
  "key13": "22977RMhgt66zicqY5YvxfT8Zak6uHp5nX7yNaeW2mn6X1ZY5JGSyLTcY3WEPJMwPDfLAEfQJ5EQX6Cn1drpfxpo",
  "key14": "3g6eoRoBs5zMQY2SfBrqMfmv3k1LpuuE3LpYd8TH8KgXh1K9hrmiKQUgBBoq3HqJDV6SEiSPhxDbiRji7FNC1R9G",
  "key15": "3p4wn9s6H4viWiZfEVVcoTwRYpwCEs2XAGy1MixAgFsKYoUXtPMsu3TcKnZ2QLcdLcrU9LgZFKfH2RcTPvumiMiS",
  "key16": "5xVzm8CSnpF3ZQNfj5GHz4Qa9sGvK4k6UJj3A8euN2KnmWQrdz9BXVx184Lujy4XbzTdqJUsmLeXoP7PfUB2irNp",
  "key17": "5pfJaua79V56fdMhDUGMudjodTS3RpGy7jVCVz2f3ZLMdz7CFWrSg4ZdJmqnZUaaPhJWqfDQMF1zVBKigwExktQ2",
  "key18": "5WELDwxLYpXygg9GPXhKxT41s9XjDTuY25hqYpxtwVhCJHQdqgKkZoEdF5hhpVui1vrapRyNnwzU6c8oZqrUJwmP",
  "key19": "3fwAHwwEccNciTfHQ1kqdro5SwYUxHGRJLBQ15RhEpNsUQALQsTNp7pbN2WTJSEzeHR2s5jSsyts92wQdH3N2Joj",
  "key20": "3xycmJ7EC5qdAYS9LKqRVJ79wgL81M4gMu8HJvUBxMN8jKVkdBZENHkCBd6GkNajBXiKvCirSbMs8Wwu7KgRvdBZ",
  "key21": "4SyEZ4JNkzvnHyN88adQCZ1YVrpNrkAFLFA6e7FXvswgyyJxUTh5qwQoTDPe9JKyBskzLaEFFASqQ57Xoi52RQeL",
  "key22": "2t3Emzv7A5E94JwdhofR9c1QNcKj22S9VVhVcsRoWqE5CKdkFxBVTW7ZqfvAVb8Qw8hMVQjAer6jhXTq3aPv4sKY",
  "key23": "4qzJ2KBJAuTPNcaBRAdyqnMjebaHMNUzpy49TGgAY7iBPu5FmiT5aLiTWAveDpAGruY6tZKv4TcxJXqrZX5GuSPA",
  "key24": "4haF2LVzQXvuFFp79FZcsW98zD3x3YK6zj3Jvj5b82QCvR9jLeyYC6GBS9h43NkU7xn7r99DBeuB4Tq1Rv9iQyoQ",
  "key25": "5q3DzZJZsft5GvuTFgy6JXxK7LcRLbGNh9kvbfWwkBagj6KqQLX4c5AAF659Q4EJSxwqeVuqVkAXo1mY2c79sqeP",
  "key26": "3c8rdZFjLFsTTwrH9kwKTDFJLhokk4pcY3M2dgwzh78hqNSe4hApkS3jZUGqJRT6XM2xNfwevwMG1x8BoDKux6aq",
  "key27": "5BMG1cVAWchBzsA76jsbCaNrxVWN7FqaeXizd6W28WeoxBGADCLczSc5R5GB6wt7PVi24NhqDomgrw4Tu5DAa9mM",
  "key28": "5bNAesK5P3WWMGzMxixmYbJttMmYCHH7cU6hgsR6eok1pGA8H8pnyLUNK2iPPYrtxUoakgD7ZhwvT6tptEx23Es8",
  "key29": "5TUeQgewNWTAsZ2utrFnHYdAViDEuiyHbUTfot6ph8cjALxBYNLPunS9gwxVrih6HLafBAVgSenQvzfc8dizDafN",
  "key30": "2EJJTdGRrih8dyAUwbo6cD2TNHcDDRBQK7AWf1McjbznpBZwiYPofqWy8fiZgeeCM32ew1G3N2U7QVEamMXV2jeC",
  "key31": "3sa5gpvVLtJGXUmGMGt5Z3p6Yj8FoF6wy1f6pPghmJG8MrJYCmPRoNpR64tdmNYSgeku6NrqJeqmt7xZmibZ417p",
  "key32": "BFh46XDHvVrAknnV5tTa1rcwBA65vP3MH3LDMZVu72j2DgS7dcgHbER6m7vRzboXSJnjShiojU3FRAWrpLjN4Fm",
  "key33": "5Qyh9GwtjdrypyF7sTpv2iX5KWSTj63DPjHFPZQPoS1FiTaRTeQBoUPRc5fL8j9fPUni4FfsBVfhudrWfyX4jiiw",
  "key34": "39vCos6e59ANjq8tTERPzNJJuHkeF1YDusdmVzo1ipRp2YnPRXksrWV2JjujtvAq9CDmqBia3ak5ZXUbb6pBLgxj",
  "key35": "Kkev5xhp4QMZpvrfLm6AjbPfgh2enuUGVk2VZLFGmNoWDHGdxNv1YMCaEGnqez6ivDFEvQnq6qSSu9oyiN4zHvt",
  "key36": "2QwqxZftDMPNDsdvw41vhSwYky9mAURCDsxbjsTASUCC8tyW6aMDP5q4Ps7VyVWnZekxQDH3mT3njQhyDWvwHnrU",
  "key37": "52bQdKr2jKj8NpY5rRTmYRPVTsoj2KCHZdnWsPK86UMo7qXNmEyVqTkUnmx53EXd1c5GfkZcCTbqhboj91jfGjZy",
  "key38": "24yaZuRNrDcq3EyYEMzdARkoauvkXmdovBeNzViX7mzZjezbiNDgCBmx1fTvtoCFPqe5B822JgE9ovETFztQATBx",
  "key39": "43yYhPkQ2Yqan2bXHLBjTd4YUStdEwkn7Cswq1UziZhL9KUYqCPxkMKxyhSptnhK2hMb1vR77tEW8i4EVEaQr8ri",
  "key40": "38VDjY9Noh8WjHZHn6RGVAfuPzevUZP8YVHkK1v92Z3QnAJtuzKcbg1XvXLwernfRzKtQcL1kbHghtW69dEu9Wv4",
  "key41": "hPGkGfkzEwD4NXLfs3DCD6X7iBR5jXu79CCzrgW6aVqN7dMxBXipbcaBTVfShSbDawvy2q348W4M7s4kiA7GFfH",
  "key42": "2rRe2LfWiGz9Wsj9ouvSAvYWQQw1MBKPPvy2dx967Ru1eYB7zFkjfCTjSXsnZ25i2cBHVaLZRV9xJUoxr7wDezNi",
  "key43": "5aV8izSWYPjiY7qJyfGB5BWWLArBWPeoxiHJEwuqxuj9y57cj8ijMaUqHuvwU9NFQJXkaqHuzmaYGohZgzw1Wyks",
  "key44": "q2kKjGib48JyYi4UNQ2UJhAxXMoWtkmdTk4m4JzD8z51wG5J3zeK9sVQL9wb8wfskNC6C2Q8YXtuGLuWThoKiAZ",
  "key45": "66mKBKBJdWErcLhzRVMXEtT9Cb98biHBiQNJGjApCHHUnBQoqxcLAg7McgYQ8SGoukHhNn4LcUBWnDcnFcSLgcCh"
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
