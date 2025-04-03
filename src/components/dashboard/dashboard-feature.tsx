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
    "QF1V9Kbt1FR6j3Dw5fTQzgrHsL241qrykVXkN1yMY3pwaieMNvz2mh2KUaZgKGUrzFtgVsZFGpvZ43udBB8qTLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xEiJqCKSJiyy728rM3xihgvxKw9szQvA4PsBHkgPsHaxUnarEsGLQVZddpgvh6XXrJifks6Q5kPNJXbBwKaDBPT",
  "key1": "rViKwEBK9kv4XzxBKzqEBz2asujPd8FRRynbbY8qtvZ2LZfrrfbcoqRjmsjXEHSPXP82aJCKwsfwfCmvXVyD3bf",
  "key2": "N8cSPhwAfEXJC5tycoHXrRh7YXabAyvdCSEFamAoYUXkZqmE5sBrwMMhPKYMLEkrm4CN48Kmqhn4gSBPEME8Y6U",
  "key3": "doUg1Xt4LxYKGqUkFQgmnRUEifKZ12avZGyTQKLgBtNSotRzjTUPzPud2hVy6FouFZ3wo8UjEcqkzpDwnsV1hEo",
  "key4": "4tK2d6TcbxhE8whZmYPvwrvoytvFXaFBhgU3sR1TuJJGzHoiabaoWc2WWp82JL1PaznBRMeTMTxUCjdfiAPexJfy",
  "key5": "Aoub8jxGQ5NSXiaxBe74ZUdgNQw5bbec1Nf38NMZR6ee1D6iZoM1wK8SUVtHvF7E4PwEY7fKUAZDdmew8XrhmzJ",
  "key6": "3myGKa1tkTUZDzLqcpPbDu6DSYuALwTTTo9KFDunP4uZMNczrTVr9MFbFJDqcmpheDE6edWJBipu2ZU5TigPWFNw",
  "key7": "4ycTA33WkA2sN9BzE419rokMo6vUL3EuG4hEfkHeyVmWmu35TQHHNrCFPQSuBvtZxKcvU1VfJgYLUzxLHc6ogsvt",
  "key8": "4dWScrJSkFPmjxFRx7EiP52zuNjiMwKDWzvaXiqnCBTyhQPhTT7DxbvZSFeiZMydNAbow1QZVkQTvBJSR5eqrMi8",
  "key9": "52yHw3XmYQLBXSL5zoniNY8eUv7Hmvj6SU6RCQcPuhE5gZ31GLjW6fzgU7PHh3Yr7HCteJyDS7eUwnSwwHSzKCt1",
  "key10": "2xX1UsUVnCSy9aq1XykyxNR4QaYn5fvta5W2S9zcJAgPymkBvaLJ1rViECxCKzfDxACG777zfLBeSGdAcK8z87nJ",
  "key11": "2VMfJ5psNxix3MnDaPovoE4ysiEnXCMqDwBaafBWdJBUJHSPgxaSvMm8xCgwMqk5Ds3QpVrQTM71CttikmZibhSY",
  "key12": "2qVSsf8NmrroZANHKAGT9jGzW7oW1YCCzcWrnvtSiJbFG7s3hq8ubkdou6jFGL71x7Ka5zUwaBVk5ynANsgbx8Cr",
  "key13": "5aqZNZh23vKgdemku4YUfGcvnNskBtAeC5y93EVsLLrKz3zQ79ubcbtaNkgKw3YcCEbQrpnqyQ5BinmcuXAKanJP",
  "key14": "5axt5yPw2RzCsAR8g6FQwBS4Ks8YHURohx77FTF4QVKzSAE7RNy4vqX5BNLzmQyMhnNobwzsQP6QZFHU1mEqHzCP",
  "key15": "2iKVT9qCDrabtWgUci7ptq6dbX3KG9beVhRj7zY7spv4CD4gAA5v9wBe15dg9Kt9AC5GvqHvPMSp88ADhNa5AgH3",
  "key16": "31GRJwWJtCA5E2dpeeGSJuT3gUgPvma6diUdYuJ27TrjYhfD7aggo94Waqg5Yfpk1HFAoJB48HyRzWsbbUwx8sZq",
  "key17": "3pf4g9ZVjJA45zLAkTJXfSkTnMhKqPkpZUGAUG6kqxG19uGcpJgQVpvNK55Tuzscmojz6stymyvpNLyKKnDnCGDV",
  "key18": "dBMHV9qfYSxvVCxR9LHpCG2Ac8Qmd8qd3Xha7YxiYwZxjX4hS7Tg7PkbcXFWyyWa3oyLwxoY9YpVKURLAvFrSBe",
  "key19": "3tY1qdGTK4PPK69QNRLNfZpZC1KKwXeE8t1EuZ3jD2xcfS9tceYYSLx9xv5SGrSNWSSfZdfUs1JD9QHimi7fM4h1",
  "key20": "3vhMkFfMbGDJzj1BPSaQa2cy7RDBFCx4vUS8tCTDkBxcuLLFkydEuZctdc87sELQmhfgDWMZEcWXZiGYcz2hvc1K",
  "key21": "5qVjUvDdcq7acB2TJLqSJqq2qeKJ2hGrvvR5SfzjteZsjjGRQjet8ehFgjKFg6mG4xt3gLoAk3VkPXKLottDvNSc",
  "key22": "Muhja9pYmq1CneYYZXxQi9hYuHVEJ5VU67KnWKYyhxE79YQsncDJJYc72g7BKQvgPcjDdALhVhkyFoFruu1CKsm",
  "key23": "24a6d9MvohxvjvNKK3mCAWLiHeGLSdHSpJUdFQaLFFVH11Haspdd7hZ5sBjFkzFim8EFRWYXNghBqpyFkt61YfwP",
  "key24": "3AuSqVBV9MLimF9CHW38bKArKVu1zemqikmcx9cdnDnVXHutw1moxBLNFPoHVMj4pr7A7m8PStB9HLs1naW6teEu",
  "key25": "3MPWvh7PufAtC7Ptswsg1wUrz9DwWpmoUAv78Jv7tZWSyQ63oo8VsukZGNsdFFDgLUvRA77A5cStM9mKqYkLdQuJ",
  "key26": "5hB9CdGK4yG93gRyhkpKNM7KjHn9HCCpFyDtGz6kiqnaS6pgevjKZuMvm5zfh9BSSfC5PGYERjhqtWHVXDBcWU2e",
  "key27": "4gU2qAPRyqQjCsd4ztwP7SanG7Egc4gqSNkDAQbkhwZK8aTggnLbFKJkE6kAzRyMP2XTQ97t31pcrLaTixL4haLj",
  "key28": "5PjgAmapwzXcY17Rt6XaY2Qo9CrYBu6XCbVZ86zBt51kWYfYFj81nEFZgB2LpWBFRSbqWETxTz3yNyiL2dSA2qXJ",
  "key29": "3DdSvubNZ4psKvXYRGxBbz53pGQpHR3pEqcg6PghoaBDjsDEmFoijiCJBiJDTLL5KNnACWmbJCYANCL9MYW2jzg4",
  "key30": "2rEGUtbQ2XZJ8vt77wpVJmAsVdexQSUzF5DUWQvrNK5cjGgQrH32ctVKaMovLvpHt2j23MeA4pSwSRpsrG5rZHjz",
  "key31": "2A4N7ZHdmjLJbmEp6ZvmuehFTJLUajZqApVAmxdHu648Zgf9V8M2vApoDksBY2Z2KxzEjPVGWSZCokivz2Lkg9vM",
  "key32": "2h2xZ9TovY2ejSVEsbXGR7cYooPYTk9tUfMXHLsvibcFbCUA1Ag9BVi5df1gfTb7y1Nw1WDnTc9Hvrcf7LX4AdEd",
  "key33": "WY6KDqZhMFwcDQrLc3wSoTKXtZ4dPLs6kaPMHjBiEM1nN4shbm7JwFvCNS5sEMYvfn45zTwRy8JBJueJu2jvEDq",
  "key34": "4Ltzh11igikzj4FJNvPyYsfFrMeM9vzYj7zU4CsVxLP4rsAzPae1i6TdGnhtKs9Vv5DCp6ZVQVx9D8aFj1JH7vvs",
  "key35": "32eAZpRWZMCVAz6rvSoyLXA5yRopYubNC95i7pLEd599ghJWMUc1db1y4zCfXtD86QdcH9NVnyHYfg3cY8yYpkhD",
  "key36": "3fMd32LNRrCnq1W3kYfUUBaMCRkyAvujv1HugGEDDYzgGUjp2vdK12pnN8n51QUsJD922T7VsuM6u2KLrSF1JdNM",
  "key37": "5DqGXZbqRjZoTTftKnxzsq4qgXDZD6Y3GpRfdfuKEVaP1mQgUYFj9tUkbYjDRU1VKJJPDh5MntZcXCDax4V3dB1P",
  "key38": "3Ab8Qx4Mrgfvr1dwkzZYyHG7bgVLgb4XfSSqHWMTh7haqbz8jnV4iKHvXHKcS7BSgQN7bM4hzWcfWFT2kojx7iur",
  "key39": "3f164cRdCgXMN5Q2y1PeXGcSRTyyzfAHSZkp4BLSrU8HsqUQA9i7RcXedE2zbNgyEMdZ9HhKApGDa3ykQHnGxGrn",
  "key40": "2voETu6JAh33m5mJZ7m25CNXrSf5jw1qhNVGoEN155i6FLfYDooKPiSUNAr4BGpF5XDiVKk5Q9Hk52B9D1ZRh5RA",
  "key41": "3arhzS23gV2278zN1zSeGjN7KSCoMtD8YdYY7dd5o3wMj7SSsUa5ah5MKTotLPqJPgCfpk2QyU6BdkoZrgpcsXDH",
  "key42": "4EWLMdRx6aqYX9KVcg9WWinizn61BKp3z5Fsn2pBvSJVfg7iZ6Hku9JzP3CYh2S1T1s9HuUYS3vVjJQQ8BhjcHU6",
  "key43": "3kjNiutbkLKW1n5EZXQrkiRt2mHxc9BMTcy5nrbmGGZAG8yYUwNJs6Kp1QvtoyZH2dFXQ7RWSQhvoFcRQZyM9QdP",
  "key44": "4D4UHMvsjbqJmrqdAgdBGuQjBWHWfxmz6uzYo6W6Xo4svJaTmwRNFJuUG6BM1HeSMk2wGf8QzEVFSXeWvsdgWuY7",
  "key45": "4gi8SiQVrRg4KFZwCLgQRbVGg1xVXmGzdUuicXK8asz91eECECdHLrtF36KsCwiTLxpFTPUrp1XxtWHvxHMsZB9V",
  "key46": "3oMBieCPD2fib1iDjkfZXJk7AvpknvCkZ7Gzs3ManqaqKLJoupvp56mH96Z6NDhXg4QMA8oJzoUht9Hqr3WzjKYC",
  "key47": "4RaNdH7SxzNG3ty8uyfRvdtkm3A2HwUwUo36YB9CgixUzfy5fQXiVaZb6hRzJZsx5XoBtYZdZE6BWH92uKQoiQKJ",
  "key48": "4c6EKjy2mnXe5RExFd8UEWKqNLkKkvRipy5iFZ9VD8BJjUAWGYKjSQ9iNtiJ2y8u19ETJNaJsgXtML12VqS9gVwR"
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
