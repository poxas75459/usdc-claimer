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
    "4zUiJ5eeNdVfoYoNyceeoU9QioTAyMfYMXhmhnuF31wCW42qBGGdW6eU4Nh8UnKLYACC4qysQW23rBxrCnDpC5Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HTcNZa7u2tFdBJ2LiqF2DJoqmrwCzjKWJsFX9LdfipX1HfZXa633QpmGR1UxmpzaFaXYwXeEaDbsKxkxgB33Lsb",
  "key1": "HDZopg67CM15iAqH3oTQ1mxm2spncUVMeaYRAy4nGVyP15N8wYEJJHsmsUtPHirJVN4otpso9gwGrMR26rAeLtH",
  "key2": "59CUT9B8hRvepzarkp3LaGmj4GoLtemuqGwZLWjGVsWujYREauZQCSKVQLPUCq8qTWKW539y5zSjT36Nfkb7sB3s",
  "key3": "2tFit7ysq2Ddt6DbKtFtpzrMbCuGKP6Xua87Cchv7nCZ8NzxDEuwJNyK4D7HgjEy3n68h13v5Qr2wkmC7hJXDEoV",
  "key4": "4zzx1e2VznFSXd8UADZ4ykA4CdDPpYJk2bba7iXPzYJcx6VS1zQZkShXhtPtdMNeMXQDGotQtsEe37fcnvFaGBt6",
  "key5": "4KWDLt38u6n4p9zuJ3LYjTjU33aKDs5igaQMwoH3idDyj1MXm3fuVXfa9tFbeLUNUPX3E1Yo7D5mLsbHVQnojraB",
  "key6": "2JggMGT8Qwi46nc6SrMo6kBGkQqXPU3TZvpLg4EP7mZ2mwWkGANFKfw7RzdeyuveFjH3ZPRWfnByox2cJ7XzScA6",
  "key7": "2Q3TghcHioowARj9kj4bmiJrJkVUL8psa62nbwd1CBkCpMwBYJRzaWUt5CsGPd8FBk4bVhDSsQEUDq4u89Cb2v6E",
  "key8": "qpJvNyYXbQefHcdwMWhXqEWCqYuFzmW6dZSC95Khzxc72ci2ohVFhqi2wnEFoa9QWzSFPvv1TC5trUpA3nvsR34",
  "key9": "3Pih66vePGRtnaRdXBUVE9VnENVAW9roh4B6khoQBTEkv4PWp95pbHamYLaK5SGFSkXgjjSNBAi2TP4KiZ8xrYo",
  "key10": "nomVoc1c3hJaVguKLEhbw8JWdqjPcs89ki7skgUaHpK1fB6yzYaG55me9PKb8yHLoTKZ8zEkNmNFiy4ZeqdsP7P",
  "key11": "wKo5DVUwep9KNNNzU2AXzk9UVvr7PkYTwCEGA6ULc6GG2gmAA4ZcHarHhrFj7ty5QnHpanvjB96iWWHNQRMW1XP",
  "key12": "RMzyWJxxze5YnSX3XnmFvhhG7u3vyFMWVpq7jmXjv2nMXEPBYujrbRfCkMVHqwvdq4YKKQT4qtUQGewxvvWW1hL",
  "key13": "4qZvMC1je1sX49W8YUSiwgcs5PRKj6KjjCXwskEVJdjzWkxVLLWRiz3mhdUaHF4GjXK7WVvt1HDHNv2jTpSuw59Y",
  "key14": "5xucnXXTZNN3pbxJUmjZTSzF9jgfRvwhH333tMZBCFQLcvav7RzzmHCy4tr5q2q8dCzTJkEczm3qLmHpdopj3TZT",
  "key15": "tEw3htGdZbujzhAYXgWE2fVvbgkpPtvEdRmB5A8TE52eqTLTWm5CBUmSdhnazbHXzQe5bJSVZsJWcQ8kT3P9NcD",
  "key16": "2YeUbzhyZNYKCZGcWCXmY6M4DGwDtxqBYeymj92yeyB6ZxBMEN9Wz2cHrxShYz9SjrLJ2pfmfMX5AF7RdHGT1UnH",
  "key17": "4BGra7c6G556xfu9GBsU7ysJwgZGKhfdXokbTaPTQFbDfFLcFUpUAY4qfrCdgNLDB8W2UJf4Xn1o6gWAe4Z6DM3m",
  "key18": "4U1KySikLYTxrJP8epnA53jTAJyDSx2FfPmsSTgDJydiMDn7L5MRGbNzMhF8QnGKHH8cd5dYGJGTsjuRWqtBrNci",
  "key19": "32bhNsmDFxzYeZUG7NdMAazkWj6NNtV4ougn4r8hh628qYWiESVQNyCx8mqKwXA1pXM6CyZxbYb6s1rXaio3ZBL5",
  "key20": "2hU6WnPXEV4YfCLeiBhFFkJMCZD9mLusDdEPnxvc7BsfstLjovbktDNuHtsv8WdSM8jbxCt9Vko112LeuP8RnTqv",
  "key21": "T1GaX1nV4odFDiXk3w9KU5Jcri6G1o9SaDbh5syeB61jLEC7ahHzLZsyjNkJg567P7nSjvDGLckNPGYLXkA4qMR",
  "key22": "4cWQvRQEoHzbwU86BoW2h3o214BGcVGGNMwEyRqc4Fm7eKag59c2tLadcg1VEgzYX4GG4f6XhPKKxztPppPf2Lss",
  "key23": "45pyynfK8ZkgGrKP8aBUfhisBGonKVzVTzaADHY6aNkpUVd8q4v2oNTLCqEHS96SbT4fhS6HYwoke72HeMxESCzw",
  "key24": "tDN7SKxz5FS8Sc9YQ2wWSKE3wN4co61B23nFkbJDgB8MnkwW6jZrR8cGTxT8RBnfrjSEpJ5GqXT9iMMHGrqiWKe",
  "key25": "3rYyjabUtNH17MDKDd34DbuBi9RykjP8fdeaQNhqtidq29ShexUv3TAYhg56gPVosnxWzKBAkt2BNwDnVkw5jwTQ",
  "key26": "N4WEZx523AvDbwhgcGsc4wEZr9wygsW1r7D6c5cxDZduCGKVNL36mJGXArsKusAUetWSAim2zEpJsUj3D4a86bG",
  "key27": "5QzeYV2vX4CS1zKtSBtou7bSJXFzXxKN5NXmm2KfppcNV6iHzSiahZq8LbTMk94WULPiYHJQNyLKFupRAgUe6WzC",
  "key28": "4GLyKdyo6xdTJ1Dk68wo8zP6uduEHvDgDALwnLfedkbJNmG3tbZEoQ5gXU41VHf1tURWt6SELPNwLj2nyMGqVjSk",
  "key29": "2jGbLz4qXrQCYfYirrDeTCEYwPpUkCp3LTrD4X7Nf1bKTe1F1UP24WUMzLuNqf2GdJY28T2KMHEPCJ9ZXpivzRLh",
  "key30": "2RU1UtVE7kKdAKXr2nv2CA6PSrcpjnYuYYDDagRS5kUCrf8RqLRfbFRKvxtZ6QqFPqucKEGmiNNReWoSjNmnQJZW",
  "key31": "2mEVa2vsZjB7tKAMKi1VxckDE9ZQaMqXoW6zEXjfedq7RXnhR2LNrTnzwkbnQpWrFDJbEHrugKCVgJrgvrqN3EZu",
  "key32": "463LoBTgXwBdter5ynAkhTkS43xvGZZZz6wyQD3rWPMeyaFtCr1CkVrntr7H4SMKdz4qE3EUGALoMK7CiPj8KCN7",
  "key33": "ajSB1mN2k2af2qAXNuRNhfCwx2FuNCp6GYSz9TSQ5uUq5b9VRLCSyUTQgEbsuQKzQi7DCYDJfrya6BoGbFMkSbq",
  "key34": "5YwioQ3T8RkrjzN97NXCTxys5i9x8ytxWcVaPHHEDJEyN9TBhsZ5ijbTCK9DHuF1yZMZ9grvvqVjifScwPv8XkJt",
  "key35": "2SERndQ48TtdM5Hduc7V4RSNy3nUjKhZKrBFbczPT4AvgS9ozCxYzrtwMWN7tAsvjHaZkgCzK3Kte6SNtkoYztrB",
  "key36": "34hmFnsPSaWUY1k3ZMi9a6g4kLPs7xg6GViS4sFRzjdGsoFriNDRCBy4FWpUPVHksdnZxZ5LyeY5o8LYFmD1rAro",
  "key37": "4SMuc1XP1L4QoHnYvX5U7cUQ5fCggNeNfH4JP1rXojryAEQZZxxxVzFQZ8iJ6zpBobQMCg1AZMP89ETpERc8Zogk",
  "key38": "42fQGS7CWheJKhsfsAXNKVoozqxgpDfJHYGanNT6x3qBLW8wxQEdmkdA15ZiH6et2uu6HrqfyVPAjWHckCb2fqJV",
  "key39": "5GJAeVVrPtvjwWN14zUbN67BSgu4vnyuSkcPiqjc9SYY96bf7Ad96s7zbyhGeRpxiU3FgJQdhsmGyrgk5BDa9r3y",
  "key40": "5WHHEuSTJEYsGhXCwq6WYe9ussSB4tjJGY4xaSJizLJRB7y8ggtGwY1zMGPBVGTXFuz4PXjqcuUgKDZ5XeL919pN",
  "key41": "2JYfH3WyJUjsLSRrEdVwvChHyx71sWvyrVwUxjKxkEvWrZrxAtN2uqcpo23q35wqA7jkH6rWSeUezVLKLRsQtc2a",
  "key42": "4gecoLADQFDiX3hiWcLMoDAhnW7U1FHejjwdotKpFJ4KuYFrC9ZVPFWNMfE4Utjvxvtyaig1FxoLnrZZSrq6sqKV",
  "key43": "2HmSgX3Hp5jgjiXqQHKEYTeMQE9nNYCUx4cPybXCgGAXDBUvR7ga4VP9FLPcCKzvVeCrxnw2RKy3QPV4xRhCSuAk",
  "key44": "3ViURXdfe8Zwg4Lpqvq9mWFzFvHtMpDkWsftGcdhSGurVkRfgFVrqeUo4GEE1UFuzuHHZanURc5ZWZKMT1nToAER",
  "key45": "QWogRQJX9fUzgss7zdzas7xywmXyk2WyNFyLLRMUFBUi3HKi7wgC97Mp6zzVLjcWzq8ytQ6nAbcvM4PVFJiU2E3",
  "key46": "b5EC2sYP8nohBm7ciFY7XXwh912XgMTBmNHnebWv7ECRTo5oH3UN34BQoxqrYKuHDrx5ZwYVhARRgLtdByiQ7wg"
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
