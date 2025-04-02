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
    "5wmsxQZE7TvnrZBBz5d1JqktDXQQrdnHJMtGr1oJmVCEFgUHgCL9fjBdhaMAhLpDuFfWCM1v5mb3RnP2yx29FesY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fUkqh4TTyq267P16E5z5TN41q5ZxFXRh1tdEpPqYgaWPoh9SAjvStZe5rmG9bJtjY9k4qz3PtT5K8E28d3y2ARi",
  "key1": "4GjqBYckawEzqAQEa29gY7jZviBbuiT1JWQeXRHVx7L2v2GpMHVBFyT7AY9V15N8x1iDjVwqnfYLvGMkYUWguE6M",
  "key2": "3g3JZN5M2ForpCdsU4yxeFYSfc6TJgmhXmBughzYaAzqhzsXHbCZLo6CgiQF9XA1bEoHPJaHhtgBFGYGzP2UxmyR",
  "key3": "5PzujQUASzr5uB2i8ykLyndP36AFHWHcA8qkyuXQkdaN5vSb2Gu8BZ3ZnEzqk9CU9yhnR4jWhhj6MUYCw2ge8Kbh",
  "key4": "hiQHRsTMEtge5aumiVzxrVjeVSY9uXV7LuuvfwWTr9VCtVjK6udiYraqBRxs1yfH9fJExsRgtbA6734ckmtAcfT",
  "key5": "f5qJtsJ3XPtcAN441eeKR4X76UMk83GumC2hXAQwJh4h6hsWJV56UVbocGEjzYEK9fRWYo12SrQ4eT4sbu5LSot",
  "key6": "5RK9y79NeSkFsv4CCjBeRY4bFvsqnwv5B9AJxvbZDqpZ6zveXPLceUrofYv2FfLapU1mopCwJAtjWL4a8u9NiRmw",
  "key7": "42tNLUB9anJhfMGLcEQLh6FXZC4fVUN2UY5hVx5nRAZp771n8L4dTn1ZSTk1X1hbpdUNZ3PFNBdiA1Pj87xtowny",
  "key8": "4uYo66uMsrbnH6wQZxortNQRvysy4N7HihU3kiCqx4KkUukJXPoJjH6evz63YPSwhgPUE84a1hv91wmxRShS542g",
  "key9": "zr7aUsHv4oycn5wwp2gZZK5HdjUUymTpVrnM63icUMVtZr2ueQQ3kn4JMm5m9WBnMfWpaWSTn5sVB6TQuMTkxKM",
  "key10": "5KYDg71f6gnA6cKGWP7pa4fNNQpRdVeePfd8mC4gyQN8C7QFrYWk3j8getHRFRjBtrDNqMqPzarZ8r7FZf6H5Fp8",
  "key11": "4ssusDxoT8i5HGLDkNHpJb8L3ZdQgJEieTe92s8C5NFGCpBzo9wDLkM44EUKw5mVmZCeKxN7UsUuFHnAZWZjZCS6",
  "key12": "3f8cXBkXR7Sb2vpRyTEUp2ngVQkrZPsExdhvBiRgrmMwgTEfkBMFWUix566qjaodX9vsxvvj4JSWpAxeHG84gtxv",
  "key13": "3qg9C2UDFkcGGk14fZvZxoA5zPwcJqYfvAPuMkF4BubvGaZXMxEb3DqTqQiB3rZX8j5K5QdhK8VBqHpwLqBnTQyK",
  "key14": "4ndSGpFFJKJJZwcEaasnjQdgNjhP3zFT1EBzo4RLkWTFjQzbLzeJ6h69v2Bpd5QixC6QFcvodukMDcYt2pYw2QAF",
  "key15": "4cpUf5awEeuRTMN84aqFY6DmVSPzGu3DAqaYZSw7mMBoYoruRufg9qAFEbaM5AoEX5gRG6NSbUg9kJD8bYsat5m5",
  "key16": "3ddj6k8eDevr5EeGkSEke7HPv8HtmaUYhPzeKyt3y6cucGLgZpqqXZaTq4M28yoc7mEFyHmDwirTYEQq3vYzpDBt",
  "key17": "4pD83fbE1f73g1V6kQpMeCDEU8QkMrGgonJWbdATFoeSPkG94bsuBP2LSCQE4p9ZGkq1758JawhXVwagppBANDQ5",
  "key18": "2ah1QfJMNHVv2Pqn3tx7L9puhrx3KHeZX3QWfQMHiut4SAyv421qiosRhyaRbJR2NHo1zyumj1rn6pJFt7npPgGi",
  "key19": "4ZMXgK2pyX8DUCb7E8wf7NpAB1aEm1hoyz3on1NcJsHHQfbkeLx8nWKUCRkDLnbCBcuDueDHEhjEuMR9PowtQqaS",
  "key20": "4SpYEJM4R6nSHWKPJ4ZeTta2kF4bHKjAKnnR6iLoXhd9QMnq2AoH5inqeMbkyo37Y8Xh2tKkfD4Fx21PDdn8oGAR",
  "key21": "gUyMwzPKHyViR3metQkNj1kK5z1pRmL6JqUxHG9trYudYWVFx5ABP5ejePkW4viD5BgYAfr4w1CpHG5y7JcpSgt",
  "key22": "4CkTaasjDjZWM6zGGAn6BhrytbRbHMgVronQ5XcZZWTc6ZHjCDVr4R3uPL6rHTpg1qdvdfKUABrWj5SQyqNUF4NG",
  "key23": "4Jp9MstGMpCQ9giGhJEvRRjkmy4ZzRufRUg6HS7HKM9xPuB9BS32EH1quKSEyLp6XyEEPF56KE6N69YA1i1HJHh3",
  "key24": "3XX37zfQZgQjeghzMQdKavFGftAHAcyiALwERbCQUr7DPKMa5PuHNzichy6WLtr4NshPtQVWRnVuXH1X5HBpMqib",
  "key25": "cnfenmp2kDzRH9sArxN7Quni8b5dVe28aQAtGHSUQmG3YW2X4bAxoGQRhpmUxkkUia3P1vwrtR9v1ifD3m1cXDR",
  "key26": "376vbLMCbYwbBhofsp5J4Uf7Jtph9yKj7H2u43nJMm5gTh4DedC4qNCk2jy8y23mydPXebaDK1vuvbNYmGg9Sh7q",
  "key27": "3gxSCzJMk5VzfWe4qMXNNPVSLYu16UJvwWWx1u8VPWgic4ZdSKXWaYYmK6r8TTxfiDrcrWDoRA3V7pWYVsRFVCYc",
  "key28": "H4oDXPCMu869CFGogWBLrUJZhV9dG1qXCTwczh7mNhSg3GBq4ayQNWMYRMF1bv4oemj9SmgFFRjtZCsGm69TbS3",
  "key29": "4UHTuo6G19BkUNSeFSXNsmcWv55QuZpDdpxYbxCieJpp4XsiTewvtxPsGgaQvJBu8sVwMcrdcL24evLoFEcaApQT"
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
