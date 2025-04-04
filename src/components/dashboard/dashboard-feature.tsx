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
    "2ZNwcS3zg36hvC7DGmXDw3HRodzriP5f5Qy7PMVw9QrfWDYy71W2zrmeREvjYUrvs2gj7ZfMsM9SuyCv77BwkLXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TR5PqtGp37AdSFPnujVDKjVqEWRK6TLhRfV8QkcRMTZqny4QajfydXugWwWCqaPBdKMa9DRM5qUr62LxaS2iWVs",
  "key1": "2Sq4zt89NnD2xVQTtRwg4odQMebrUDdEhWsfH2y6PUx6dA5PekUugzhAqKkpXLRyfacWGPURbpWxQcN4Kik31YVA",
  "key2": "HfDaP4irx6oD1uWpqkxvXCWUiqsupSsVffiUHKBXXUtV5mi339cnhNdoo5ff3uBJQaLbrz36JD5GJtKg4J45xu9",
  "key3": "5eqvLJRysPa9pBMu7YLaMc2qUQWMGBM25udtiJW9HxLzYY8eooZxx53biqhgEc24yd6t8QD4pYYu4URnHTzCiPaC",
  "key4": "24J4DPAP5qNESd8ETKeuLbnEvwmjQarExsjCgNgvxs4fMw3pT9eyoHkCVnaa6KkU2Vx9tCEPaDSmbH7iaUxKk8eT",
  "key5": "2KHs3nuqmDKqSS9u377XgYLBAjaYdWixsyJQB4EFUUFrSx1JMhcSCiAzFuEQEmqPCmqKTf6gFkEJiqoSxidncJM4",
  "key6": "3H7Gn8ssRh41RQhYpnm5o2XwHhoDKwijwiaM79bFTMQZMCQ2UHGPguk3bwEGA9sDGB7cfZDfPh4uk6rFUUXAGDaM",
  "key7": "3q8Nz6x28nehLPrxLgfgkuzAz2Vt3KJAUXP3sgCsMGjiwiC5SekK33p4SpvgAUH8h4KYFQjzvCuYjws5ifGhKXaF",
  "key8": "2yc1J4L1trwjaGNc7j3RTh5Cad8YfXH2ne5xiMkCHH4USoy3u8yNXZ81MoVA7m1p2G15Fk7KJiFTLKKji5XQirNn",
  "key9": "5W5kn6c6yqKQuVkZEzkz25J4pVLRQjwY75Hn7Y3Qcg7C5MAqe1KFc46gKcE1ZH2KStLJDtESCF1NPEWkxg2APMmr",
  "key10": "3J5fRkhResZc8R2C6nREByHy6m9MiHVfy1hwkNZt5kECHrNx3VvGq3axcjks2HtdccxzWC75fY7N26WbjcL6Fv18",
  "key11": "4oKECTR8ifJYwotqRzbdqE34aefwLDZFWjMNiVkrA9CBL5Poti5LGLs4Z5qhih4iS2Sa1NqpibnoKS1AGXfSF7C1",
  "key12": "4S3SNDgUWq78bzJ1dvK3wxWngXUPd7Ha5L46zCemvQkMqywHH63fPP3f15iJGawRKewPSbArbHkAw8UTro2kuedZ",
  "key13": "5TvF4U1LxQzcb35DTx7TFP8NWqdwNuQ1k5ABb2eDKMq1uQJxzJRBnU3g2A8Vg7AVqXPHm7vP2vsuifkwdL2oTGPR",
  "key14": "2X8sgNqpSDBjJgd92vKYiZHHdUsNzkgJSYfNcnZN934W5pyM42Z9XY36PyKPQeNJCYmqGokbjYeKJ47tzdTgP2cb",
  "key15": "EVe2HpmgFbKsfZ85aAr9J9SgCVQsJzkV8u8dgsPc6pmohofpXJ9pmrz7HeXY7A2DeDU4Xshoiopkdy2Keoy49T9",
  "key16": "4eUHaN9GitRUfmoqKsqX6562hvzF6nkjGoPz6ZQ8zqfhvhM6xhMiQYyPQ7sRavNEB6CpuNEFAbxLr1Z61EPY7448",
  "key17": "29FLnxHmijprphhX3TQm9JEUaLYQdLBSvYXWSh7MxvLWt98dcFJ5m6i8PPZMRRKydNDBXeQgdEkwqqsYjJkH2k96",
  "key18": "2ysKZnEE9bjXN2rwYQ6v91r8hDVZ9CKNdoLKNHaix8wR3kVsyZWcV1epSL77hTTxZEheGdwCGmdCx7cbkYJwuDSW",
  "key19": "35xaRK1mEuvhWq725c65NW5UdSgt63fKRogbqS3nHSsNDeULovJ2VdD6QaykVaFZnoCJLnWRx8TBYoh9oPn476aB",
  "key20": "3t1bnXHeMWWW3LZs8BXAN7skXLvrF4464pdP2ZryJecKXBeqiP6Z9XtYfsKkHFEipUtEY4cUqXa54TQuyVSwQvux",
  "key21": "5Xt9ia2gV9pmwwWZyAb8sJ8Bcmmps76MFEyrVovoa7x6MedbK8XeGAhxy9rew8vdghv1oWAvH7BhYDXhgMAunipU",
  "key22": "4k7je5wKReG1evbr4K2ymftmDTHJ3Lx53vtdNuRKQ9nvp3mBdezK6jHPsatFu8sn98eeEGjsiGEDj5Wd38q1SnTW",
  "key23": "2YooJxRjwHgko9V9vsBWaaaRocgvfCx9nP2eBnCQgWY8c9fNhdTStWbB6LjVgWa3vijN63mJ92kFyakQMpJGNbub",
  "key24": "2JbvrbDfeTA2BJb6JZqjFAdmS9cFmaeJPxHTYirutRKwxyfzRbuqaQe9bgXUdEg7MknRHKYrcM4WPgGsUnpwiNju",
  "key25": "EnkZzZ2xk8S6nccNHDdx8LD7UJGtKzUuVyco5ifH9HbM9CNqGj4cu4s3uuhyTzJ7wVFgxVGgMaJ15FA4kHbDxi5",
  "key26": "4fbUkq4Bk5iTNKzqHrFzxbUrfWQfyv2Ssn2Q2GDpWv2dnEzLUVtoUmyMESwJ5q99UGLDJmWYugR3LpBKYgSuUmd1",
  "key27": "UXsvdu4tmCjceqMXxjqrEotSPkA37M3zMD1q2YJTTT7CwCMwu3cqTDAFLGPo32C3hxsMKf59zgDwSTK5HyK39iN",
  "key28": "qktPrgUSRvBXUut5nJmVuvmU9sSvR3W263ZU4hCXeVV68rpQHHXerCC6d4hW1QukABJt3BxfRc8b6Nb7wC8nvEy"
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
