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
    "5L8AC4QnaZoCx23kMTM131vHKBhNDpSCtjfMvdZGfe4M1xTsHuxx2mhpyzuHJFpqQH7Rv7xQ36TxTCnZR1SZxMR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KZyjhrvyRZ35vXc8jZ3s9kU4bp7AGg9akQQNaBg4WmYpQo1qFoFFdnZcQxZg2Wnuh3SYehoyKkeSmQA2VFxXHcV",
  "key1": "4zydwYEsLJ25h2fR44dyZF6SnorYdXMWm7yEHxTDj4gbTXj9Q8zp9JVMqBijZB4UBKb1MpHFdnsfSgTkorhhoMVP",
  "key2": "3JZ3X2CwChqbhubtsEweSKeXzc1LAnpt91T1tXZib4vLjAbu9MtX2RXkhNvCHD44nvCrMi2WhhHKr3owkUrhLa2n",
  "key3": "5HzYR4SHQnNnDaq3xeGhFuEDbJtoF9wxJmHWnHCKp3KYLnJ8mtu42fQGBdgt1TLsyMLxZfBJvUB9EuiW3Ah1YuSk",
  "key4": "5mARXAR2hVThymwzvtBw3oy1qih78Mvkuyks1sE1WpgvY415xYEf23ky9MdBdxTi71kDnRqNQY9LiqveqMYRXg8h",
  "key5": "2jCgjcPkWnJ7eAceDd8XWxrp8PtUVVE9SchRAPh39yf443ZBHNWbhoQq2kDjZ12YstfyLWd2a8qvpqnMrWp7NQvJ",
  "key6": "5oz5W8gvipPG1ZcaAbYpeKECQL1izX64Z1MKdQT5CL74GHbCkSUjzQzpYsLqMuNDY82bW7LANRCcu29GhXDGXjw4",
  "key7": "5rpxMf8WfZCfG9ZZn6JbZGdYxZAgehmUqA1utzmbovH5mJcWvqVg4APUzhy6tjtDLa2FuN2NzDgnjR4Fw6weZo4V",
  "key8": "5VR3RMFxxWyxRb4z7nCbiYb72qnciJ6JzqLLjYAkUSEUcSfjYbK7mfruybQ8sDhAGFhzcydvV83kXfAGbfvBNrac",
  "key9": "5ts38e3Q8HqhzqisNwxAtyKpKMixgARAgvoXksQTEy7okyxhVZvAASt2m5wLBao7i8UFKSNXgEF2VyErDdidDn18",
  "key10": "zmnvFeAETkAnBsZd7hghFsTJhrNSi21vBM94CtEFyrWJysL2AMfC3Z2teKhM8aDrPhEkEQKAWUmDy6ppVgvJB2T",
  "key11": "4HGqDQrB3PLQpmp9Daxj3WvQKV5Q5sTWY4ZeUirnUfSVDoLzbtPBdgmUsFZ4T1b6xtG77G29qUfqNtGhRyQdjQY1",
  "key12": "2nN37tHNHKv3GSocM4R8dNjgbUsrW7nctLvdgCyB9UrU2DcifPfvFeAUchhoQhyNx8P8qVZCw1bApfBpsPs3LPCP",
  "key13": "6fc3pjc2EFPXqpaAm5CbhFQJktojZ41oWpxcKLeyCvYej51tsvA3Wjxi11su2xg7T9iNFrD7cJndA6b2S6ptMmR",
  "key14": "3iA9EAKSoNGWf7rxhgEXKxt8T8N387S3NVY4nTp43bkfs9wemjyrwa6oUqVqaiXZta24U3DiMFkh3GKwEi9AE5TX",
  "key15": "uC6JnReNdsAkcM9f1iCXmwoABLT8SKC9Swq17Twvc6ViCzAnMTW8HHnbdnXfJqAFF4h3vRDNLxzFd3FYeW2PMvU",
  "key16": "3opksw5YyUx55ahGVk5kB8sVFopPSPAEBQrWKJg4FbKHm1s1LzHAj7MeCSQZKKnFxp34JPhGugySAGXipHWVaFaE",
  "key17": "4b36yNcgJ8zR6NWfaYaYBLUkZGPy9HowDKxNvvccqag4RYXSNVQQW5RmVyASmzCz3Le4DF2vhRwtjo8LUaiUUCQN",
  "key18": "3dTeh3tj3wNjfdNHB9Yp3BbJYkse8vxELYGXEavASs7VGoHaPLpvKJJiCVTc4RwkMpQaj5nQbw7jNAcYt4jPoqss",
  "key19": "jj1gApCgPY4jb6u7zeEzMGu4PVBxZqZFftNx5ruVpB6BiXURSVD4xo73BQ9SxWfLZQGCM1YmHADwVypGk7LTZqn",
  "key20": "3dvwVGnGZh817mQEbSVLUCZPaAPgeCr5Q3QnrqmPRKzSsDBCQjnnZ1nK2ZQgSQKJvtkPJMkiwFJCV45F3Bviw6xU",
  "key21": "3LANo3dH3mY4pcGvWX6BmLegJsnkajRsSvxYPQpHs4fRduEwg1Kn24gZWZDWeTDJ4dGAbwJbmAJXWJFh3vZQhEDj",
  "key22": "5piELufkfsUFTLSb7BcP5mVt1rUd47JrDW5Wp8XR5H5HfMMVpXqMuwvV4NELTj6Zk9Fh5x3ZBpE4HG5ZzSQRXak1",
  "key23": "5zjVzjkphX9ss2RQiudyKHBk4FbBXv68foxq8dBXgHhutwxbwnGiqY6MkiruQh6VJDtS16iZhGhMXuLEZvRnbSj8",
  "key24": "2rMmz2KzJy5pMJ78xFp8oqe4T1i5TYx2rbW19mibQEXDKcwQjCMKEKH8zpXPtF2oGyNBByXcfoLs4j8DypXsSwbR",
  "key25": "rfBRb2nTfBaa374umTAqWYh4CuZw3bcLiSjTzPdWpQvTMn8jHz2aK6ssaU5ws7GoSVvXJBEWyriTCRtnBBeiyFV",
  "key26": "4gD9qj1iFEtS3dTPLGYvtNG7VGMjcncxutPytefNzftoaRtFQsuCF2KfzV8iU5Y4Tmzrrs6oHTq9p68u7EJ8QTsM",
  "key27": "2f3fZDghhSTeRg3LuuyvbiAAEKoQd5Vh1dud1fhogCxSYckWjGydxgodMw3ToKL4Mj7CaqGijnTGGP2zMcQPyhRL",
  "key28": "3VYjgLmf2TD2KmEzi47hHTrrpDK7wH5o4SS5cLKM4v1seULRbH3nLGhKQgKCnoZtCdp2y3Au9Rr6f5zewWdP5g2x",
  "key29": "BBMudt3iBw1onzn7FZRJ2UKLiGgRS243novLqTUMi9QeztovsQWeY6Z1rS8avXJXHQXRG5CYVVjQsnZB5Wyd9zK",
  "key30": "3A3LsqwFL4aWjz39sevzcMLcznzbVr7qZiGSDpF14CS4uhUmXVLUrhFQUMjod2AsMfCPZDjw8ha3TUvTDHahQnsB",
  "key31": "myLFCzYkEAGq4u4v6LEojMJZPTLA6R4ZYUUjU26J9P7X1AM5Zyw2HdgVRon3i1nENdUueDXXavAC9NSaJFJ9wVW",
  "key32": "5DzaHKXKocMw9yjV9qaRinZwLU9uNHiVtgrM12wX9ww99ZyoLtm91nQNzpP6pfVAAkZnU4Lcip26SvCw3FoqH2Z7",
  "key33": "4Dq2DTuzSEUuQLYfnfcGBBhi8nRKttNAfebyTJgnUJ8HxwBdXnWo8uveiP8KzfjWEDw53oKQPgJAmAL9LgBjg8s3"
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
