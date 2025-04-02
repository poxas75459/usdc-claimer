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
    "3cipNdG2E5VsZA7k1UYcdeDgc1whq83GUpYexp6GkgUfFj6gdyz78Pmjs38qXdPw8eSAL8t3JWj3EczrxW1oDrXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rdTAhFVsdf935DvxaXaiUpkPxTKmEBMf8kB5NGK7YiZxWfDuurcY8ufwZN4C7Zm58tApZQjMP4Wred3DztCZcCC",
  "key1": "exmFgoKYm2P3LgfHTyRfK5g9G1G48iZf15hp7EdsV8HGUtsFWW2WSqnkanxNunbtyLJEPj73eucgVV4SsT2rEvv",
  "key2": "2gqA4YGqCsbqpu3EpLkG2otaLupuFDuqNqx9cgeNP4C8sHrgxTSLCJduRA9yjELArDWTDJ9LDqvRuHkuM7w35sbn",
  "key3": "25RkCDz82nDobCfE49cGYiEzkWY3kVJEYe4wCvLqVTYcfdCbh2Li1FPJMtcfRVjRrcZRaReik74oop6WGDzFbjS8",
  "key4": "538WbYEi9MotFV9hLxieZ47tb8kk4zMRhQ77SXnkuwTviVsDq3aTthHyAmA72TYnvNESV2nuEzDsTwR76PqSzV4Z",
  "key5": "4jFmbnXHanKbk9T9fsVFDvyDj9V9q4QPXwWHMTcSsjcPD94ntYrTi7GV193X67wn5Aq1H5Ap6yisZJXFS71u9MNd",
  "key6": "4zjmUWbzBYyArzHZFxDP3tKGiRWTtpqgtX7jYp9uySYdGfzCnZws1h8cE3kuqpFQh8yc5LR6g9WYoFSGyUQw3M3W",
  "key7": "4GBaX66BdQsGYfW74X2eWvvq4Ui55Zec5YiSR5JmFp5aQeDeU7e32MuBM2KGYkubEfVgg5th4Loqjj8XEqMR3DPE",
  "key8": "5Q8Lgvr2GLUBDzUckM3hTYfp3PPXFwCASPhvtZk6LJzDKJA8gqsJ8MqnBJ2E79bt8MjZeDpH2U3tLoPKv46Pk4yr",
  "key9": "64KUPQTAVKkLiHRWCQNbi5hAYdDqLhbbFHbsJHPCTxnf61uynb3djS7ak2QNCNrCgSt1neFDix2T6S5KABaDjjwn",
  "key10": "2dg7gDAcGL7UTHyB7ESZnx5RRbrii8WsyZHTkxnQ1QGkEsMz5oAPPZmS54JF4SrZz9qYrbmzyHWEFRLjJ8MJC1CZ",
  "key11": "4s9nHKf6tLMkmWEJbxTGTq6xEjGnbP1QoF1xGJgX3stW9wVon1e5Lj524JPmngoXB2NNmF5tSb6Da84XBJPHPqTw",
  "key12": "5gmEcZD21WZNR3Wo6EHjtPKUfnEBzV1Kq1gkefqktcNkz7QM3WrfGLz4m6aKLSih5uzLN8FtyVuVTi9UDdfPfFkE",
  "key13": "4MEs7P2GMu7FqvSXaD8PE38dE7toa3eDfHjwZRWxn7iTiWW1JDqQ3KsB66ceJAfmixXbhZDyevDK2LTbqfF7aaoo",
  "key14": "3fTCLGBHjW3GTQuSR3ZADvUEETybwBmGHkfubBSwtAZqTYhxSj4xDfmvapUCLPATf74B7GZw4xfLfAW6FnuQ1xLE",
  "key15": "4ioGwWgFW1Fy9tbxUyuZ7QZmEwitx8Y1ZygKNoTHsFpsoRmUSGKuTFoWU9iGKvyf1cscwKVnRSFTeqs5ikJGSVMQ",
  "key16": "5fjoq2NGwcgCUCxU8YZRFzT49PMLBvQUVc8C4efnoH6JFVwyuexQLgZvzKvcvxE2ms9M8WcA1pR865p6NAmUTegj",
  "key17": "58RhjYF281GV3QcQKypZqGQggp9EeekyhtuwgJ8ppJwbBTWkLeKBbgT58CRn99419MvzskM59CpJArsC1JdK6NNw",
  "key18": "3gFwG4fuexX4rtZtZMJzTyFhY9tnCZHvESCQyMZWfdv1Q9Yows1XodawRS68uinNRDzTc93V3SwU4dkv5fbiFULT",
  "key19": "pxKyckYUkDXJyjKikegjMB6QMyYXzvmER2JU3NsZxqjyMRpjQiugk2miDSGiHgB2sd7RgWQBjDQYCLeMmGLPj47",
  "key20": "2bnFg5XfSqgvFgESvJtW6mYPxGKi1LaqqojfX24EERvLHMyDAEpgfk6LmbLRqQXQvXzhNKvXhGWnhG4oeEura43t",
  "key21": "5Wbji5bx38g61jgRWhFasNYMKVVtANNTJd5pU4u8nif37WohDaszpkERjkTAGJvffECWMNgcqTZD4yBqdyoMJaVY",
  "key22": "oUrCEUmfq4B6akrpnDAZ8LrpBLQo6c2CRkxaJTAxyUV3q3qARVJpMoSw3qXN3fCHNT6kGUhZEHac2cwjDUnmjLf",
  "key23": "2J63jRw4xF1z9SbLQ9Co5LRozEftkFGvnRdMBqdcVX5wDFocRVmMC3mS9FuxWLKtX6HaNqEJmn1ycR2V7mVMRn2",
  "key24": "28L71ggNbpRLtQgaZ1AFnjgNfiaHR3kUZCadcUetNSjRhrPa32cqfpJeqVrr7t6khTJxwCYRDLRRf3dWcrdi9Ezi",
  "key25": "3qAtByWjVVNY54VwmeHoNNh8mkBCQyChLfcgjZniEpdtXGMfT8g3P9imTmRbCWif9D57oLfJqMZPij9ZSoxB1ZX4",
  "key26": "5mNsF5dGiu7nMb5ckWU2wFr7J7yf9uzbFob9FqCZFxGMyPCdRYPPbnUonL4Kw3oAyYNNVWWRg54LQsZhUFB9Q6bT",
  "key27": "4Vzqk3aKo8ozLBWquUQvY7U3TPMsTF8z7ti3J69WMJE64q1858DCaHDYjMGMJd4A7sCHVvWEgh6U5srZk9Eck4J",
  "key28": "59NqQbFtwG2DVFTm6b4i9H9SzgZ8bV61sb7bqgvQJhNMXChz6ABeMrhTyaKeDfgYpvm5R7khmexvgoX2G7H1r1TN",
  "key29": "2PMmnH8WQWPzrBbzopMKuuMUrjWxUkbdH2HoxVjbwZzrLrfLMQy86zxiktxu5zY7eZzJoWQqkZATikrczvmLBFVv",
  "key30": "3RPJpkDTiDvjhGVMWdu3gbLsZW7E1gJAG8PbCSqmDoGq6zRVoxSnmAG6SSHxR9dA9WZwftzmWZoopmK7sqhrhAPQ",
  "key31": "4ERdfxpUpgWajFc6fdRtA5LhNPB41cuNpQhikiQwU8AwsPH3WWjP6NiXyXdnsBNkvpnuVgZSHWmUq3T1Fzb8wDQ6",
  "key32": "59ccyVFqyZFMXFprEH7iKiNgAU6de3MmR894GM2Nh1FRtYSqGwSYKaPH72scpShcFQBePK3N6cGdGpq51r3HAGx5",
  "key33": "7kuYP3eEKEdqdcg1wokNZtrUVyjrqSYmXNrBUfe63QPiqLEp3VbTYZgecweqkd2hVEtnejnLpz3riSPHFBzY2wu",
  "key34": "5Xn7XtZ3Kq7EVZ1DBUyvrEdd51FEk6G31d9paQ2kAgq5Yozx2YCXvQP4GPca1PhDvW33TGxwD7XHD9BWhq7wD7EC",
  "key35": "46p4KirZ71EmgBPirTmjNo2SUG4fyStJ4Wck944Ai5UkF23XDFZ7w3rX19xor8soqiSN8sfCJSTtsRp6AnUHCpVZ",
  "key36": "4w1ADqz1xQUB2CX7kzGDYHWDq43xtGgektQ2QNtBdu5Ac14H8FK48gRuYb2aRurMDamPD5et9pZWwchmmTA8egLi",
  "key37": "3SkqXnDaSRrxqGJek7i3YGBeziJ7CwVktezERDgtMsEuyfztoDWRoqRDDHnZH4nu9eDddqquBermyB6NDzoX7qvj"
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
