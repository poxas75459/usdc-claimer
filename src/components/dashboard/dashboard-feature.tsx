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
    "42Vw4qAXMcp6MUGQNcVvxZH13ND8TzdsEsViPPLGK6hYs1hN5BvRZwgDWNjBusMwHr3tifjvzV1df9JachJonAVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41bfNj2HM4kakXks5G1XfHHBpDgZyGpgpU9RYDraBVLjpSarzn88tvMw6142paPSqTgsYRGnYDTEYaNquqNTaVhQ",
  "key1": "3HRDX6t1UWnr9FaZtEmPXsWA9CKsz2oT2FQLcM1A1GXNF6XqpdpzzcaQd5QndvXWWFVPSUQ2U9ZtUHLbQZWmTa7c",
  "key2": "2N3tf63cXTyMWf92Vchhjai5WKezQzKLBs764QrzhfecS8MUC7gapGEXM2yNk88PZhCdeLA5Q9yK7g6obnn6v4b9",
  "key3": "5qfR1V3PryjBsKRfTr4nq68pwas1cRyJbuz4Jmj99b4nDPcQfjoWiZp72szEAx26grgcFxkERpp6gXdUp2SwndXy",
  "key4": "3d7pMc4cHr6DCj5hJS8jvs9kjPu1sS9pnfmSt9cCRXTcDdkJu1fbBPpBUVHGk7WvpUJKXXyx3nguAp8tzdeVqCsR",
  "key5": "4gTgCJjM3X2oe5q223a4qNkXwBAFAxaH1WEc7Eu5qBgTa3uVvK3v8SYFyk2oH4Sszj5AsCj7KHMiDPs24v8jaW2L",
  "key6": "MPADCtUKhzW7bAn3s9kFG2n9HVVVESuuDt1KknnuqJr5FwTvMzMAompu9LEcQr32sRqTbXFiipLg7rLXMXPRR2A",
  "key7": "XT5dRY3Tf7fB97Kbcwe25ZgqnmABTQKjvKD9T9GgpXeVyYJdjATfb6mCX6kp3GSAkPTMaG7oKMaPKcXy84mKfg8",
  "key8": "4zbX6M7b5FrUri8uUreod3gZMGCevPxRGKb9VTYwQa9XY7aCUmA8cBWjQjSqDE1bs3UZKU4cE8XdwbZvyDtUwpaY",
  "key9": "4n56HaEuYSpucYP12S58pUrRgRGjT7YXKSRzYJdDdTwH154wpzdKCzZ3yKFzJdoYJCyBC88cKyFhWEoHDW1duxUc",
  "key10": "3p2vNmYPbzjnsMTFEKCkaXCZiNzJtDS9CpUDAQqFbhhNEmUemmjQemUgDiXFjQ1Y5CCDsVc9MKTgUkgqfDUhQ99B",
  "key11": "3CU7JtqK8vx3sPisMk7SQid1NBW8x9UsQuSg1f6rcAWGWr8Y3ZpB2r86taDUdpeierGAgMmBseAmFEqXgr34Cf7X",
  "key12": "2gYWJ8ZwDu4YnWuAnuufsYfSSERXbzpTTCcUHyrrondeyW3PeAcahjhZrKUHp7vKd791W835wKkquB8Cze49P9FM",
  "key13": "5etyhWvP6SSyP6FssDTMB8JfQ5CAhtSKeoRSvUCRubwZr4JzTV8MiXwNcSWPecaWXWXQmhfbkKGk1z75Cq9KyiSC",
  "key14": "4G5mtZgRY7bXCRLcvWJKwjyEoKuBcmz9jh5nCqiYDjcZ1Hk1gnhW9mQEjzPVpAyoP4se152BK8GFx6XGqvZemU6L",
  "key15": "Cq6aEMKTsdiwFRYNt6EwJubbYZNd4Cs3msCZQfGPeBqcSc5XGcLi71QKJyJRPcEqLw2SXxjupLtecb6YqPB5Q6X",
  "key16": "5jsBe1an5Tp97kMEBJ4ChDa715u2NRywUFfNdLgqkp5gsM22eFwMCL5yhcXo6353cCvqJ2rrSCN84WvRFKAYA4fh",
  "key17": "4ArQHSku462TkZpCZrBwpgpskeZ1e7xX8ErS7ThfGf26SMT5v5ojnnYGR9ktTVeRYb1FeAkDbeRvJK5GVT3uZkiV",
  "key18": "3v2VZCgdPp7zZFE2AHfh4CPcGuKFpjTK8pWDeprtEYu5PZJfUQbnoMuiGSYmotgBFrzi7rGaFUdhhKk1sJdPnaSQ",
  "key19": "4ewL9zYgVezKKmcDPwLHysb7RPWV6JoqMfXcg1qdbzNtoFEWDgSY9KJ8rTsUXZ63bXdwkBkjBSnYmM2CSt9aFfwg",
  "key20": "5pVgpB8B7GU3DjJSyYzWRaA8TTZD8qYBC8VpTmNwNjAb97uqHBESdmvY5APQ4HP1mydLLevs7Lu5WHxQahETb6u7",
  "key21": "PVTBogcEjLtWeyk4eEqff7uLx8PPkjaWchg7KVx6tmiM7BRqv2AnqRbkch2T5vJNQHZUghZbb5PPtBfE24KXVxH",
  "key22": "4P4s9itdsbEmyC3EB3HyiffhQJERkuPyZMi614NxVAF6KGopJ4JPhMShnEEioTuQ6whDarBmfBJq1Eb2fEizy9hd",
  "key23": "3S3RRechShuyUyrKvtbxeiJQAeWSBQUoi3asKufmKwfC9iFkd4KUpjNivAtE7Qvu4ATmwkmmWG3QB97Qd8AQUZqw",
  "key24": "3LqX5WQzW7WL97WRwq7bHMmbP4YbLXckTFfVjLsGtihJ4QZ5WQeAqhjCVqnsSq4xYBzzKNaXxGnDW5DA3ZnXgvMb",
  "key25": "3tTJ5ehjsNdRCkK89RTXV2VT2CCsGiaC6S9C26qh53HR7ruiqvgpuunCHGZkF5QXu8M593V3GsofG9DsUfmpdzfU",
  "key26": "5m3LrgZq5vsuMWvCmxqSATFZLZ3n5ReXu9gxy11DykKP16RjBGg6hH9vB1JSjx7mcBZihL6sZHuWMoC5qwkEAUb2",
  "key27": "5XXs4Cb585Fyzs3yg3pC3kSNVpFwSWiJ7niAbswoAjns3nvFPmHJz2L8MCn2gk6vgM3J82Jf257YV1AuSB7YGehs",
  "key28": "262LeqseCamKNwCHPqZTUUT9RJwjQ4E9BaAssVkyGMr6rFPHaS97ajbcpqF7qz2Z2wB5Pm8iFiTGkq74uPWgwisg",
  "key29": "2GrmXJx2uhkkQogLVKxzfB6KRR4YzWd9jkotcz2TsgwWRGerDxJXmGEdSQEsBRwzCCx8zr2uY9KPR1TVNH3jkovu",
  "key30": "5rjxpxkYAYSpisyn11Su1yXTz5S6aiGtNc4rPtCnqKmij6dZedbd66xRY2aK5ciTcGYJgx5kDZDfUUmYXGyE47AR",
  "key31": "4eVp8z6ny9J1ifyisqjLFyxBSCmML1XRwyME6TaYJEpMJQofAT6zAcn5ijASghSwq5GVStQ5pUDuPBh9zxZUXkY4",
  "key32": "5uFySydybTbSbetFEtXna2QxoTAAXX394PppVY4MruwvgMy9pQKZMCkWak8Wac5HiRSQkhYYYR3rQ3E8A4VfkGxF",
  "key33": "3TA9nTG2z1hctap9hC4uHT5W7mm9YF6HrLtuRBgZrKAveabfU8JNLMaCQN8rBmXMbCYGeFWaZ42SLqxXkv8pYyf",
  "key34": "AyHLcq8iNGFhc2A7PgBAKZw5WgmVXNcHYN6YwM3uLGrTKoFgAqFLb3XcV4S5rkKquWWHMcQqEpuLR19312D68Hz",
  "key35": "25Lv88pGDe5Wfp5hkZgV1wCewb9N8q5u4GXRx3JkzBwTxXxMy5oFWsgcMejRqYdPXtBptP1WZigJAiKTbogssBLm"
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
