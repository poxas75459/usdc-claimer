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
    "2VsVQ82jCvb73AAFfmnNtAoTs1vtxpG458QsZQpZttQaSVq8R1deAfyxhUuWHWgvA8BZnyQenFFgZstLPWSW2t7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V6qXogDssbwntChXUwUV8o5iu4TaFcWhhZgoWwTz1yaad7qvDTNEszcCrsQyRXMzc5ujXKamN4kVB5woByaernw",
  "key1": "5U4KBsAXRTDwLYfS3Kikkj6Jgd8gsxdq5dSkEXwDbCjEnbs9r6Lb8bsysfR9bTM91JVTpGAfnMm2BpdrZjJftgW1",
  "key2": "YJ9KXgCpc9LKxh16UVhenqP8FdyjUvHpyvE6qK8krCFmFiSSekjHdq6TAx4rWGNm2KePuSc2fHqE5hRFSdziXP5",
  "key3": "YCd7ySKhA6UCqTUgDzbLbx6QHpU1eY3sz4HowWsrRTiHeaf6w3KRJrBQQW8345ViAXQRKRtPvAJdsvnhmuEcGgG",
  "key4": "4JtW4LnTcyeVfS4UoTbEHCDTSVap7KPyQYkmMNBW9DSk6zr8xtpttzYT7wn4wq729YSGxiA38Qb835J34c5khowY",
  "key5": "63pjkMSJTtnv9Grhz5apMzC7rEqpBxEmuxaaCGbuHRJu8R1tqGBVeGzY4VsDCVQHj4HhWGZQyWrQMfFYiWxhnL9x",
  "key6": "PQJFCR3NTWbt6q9qyhBmoKmMMKJi7kHWGfhbBakofwMBxTcw54rhVDakB5PbgeobwppdGDpBJBVqvSWTnLzxiLZ",
  "key7": "3mykjBdbzBsvutPBYViXBgUW4CwnbbUXUaK9DS1Fdg6bjNLBtDWvjd6xNwFhbySbEkAoUkHmofAvqhgTqkhEdeKG",
  "key8": "4EdtwBCMVr1wX13THuJs7ujywbPcif2jRPUKVGguhCR2o3tSeqiUcBqvTJkpiH3PnMhpb1WBxgSXyeEefaJLuduh",
  "key9": "31A8F2QHi4fJDmqfk9FfvuAhwRxtTF37fuKSc57CzQNH9bghybTJmfewEugfgDAYETnMsJhvtSz2zFmLRkvNmQjz",
  "key10": "5hWeygyMqn7EJH2rzMkTNbfxV3JZEem5ei9uE9xh9WYyVRzg5j8jizSdWyRjbARmYwb8TdKkWw8xMXd4hKzbCTHF",
  "key11": "2JkKrqHhkq43ZvEgeWvArJR4LBn9KMvJtTKhYjQUTM2AvtvrnQk4vFyKg5pQwQiKxU72KDaGfovY1WKSdDHdWNvH",
  "key12": "5rE4E3khi7YfvNU6hTQirudFe4CNx8yxwdFq5UrgHdQCun19Ri8LyFMVbREzZuLfXb3fmhkp59ocFdnqGwqwkHQu",
  "key13": "4HsuuBdiX7fjtEw4fc5f6Php8fC7n57Qzk9wrqi2MySWQVpNRfwXkcchmb8p2pVdjjZnC5nXUhc6nciC1zsBucGp",
  "key14": "3modB9WCNg9XLaZ16CfSi9nGxnhe5q2ne7K4uNKJLWFXkFg8ywpwJQJdteconnoXWNUuB5AcrYxg7T4aRXRsCzD7",
  "key15": "5GYEzJDaw2U3sWFQjrniFiSdisGfqDK96GMmDzimQKJvBitnuinwCnrN77HwtZVcZZSrE1qcJt6pKLK6yP9y3vbJ",
  "key16": "2g5xMR2y7oWd7m8Ew9r4QjkSFpTcmMVeGKAV1ALgsTp5uCziX5aHy5Ktzi7s3RG9dfs9oYF8kRbgSJvPho1ZEexE",
  "key17": "2pJCRd3tnYsYQBo8fheTsqbaKpK8ivcHHJbuQ4KE3o864TB6zydU6zU6MPAiJNzHVtxkx79fRZRCrqEdBUMonm6e",
  "key18": "4eEsdnc7UxQuvQhQnrgpqV4pj8T6dYrbaRbnUzKGeC2cg6WTwJoWZZt6Zfrco1rj9Hh7jMUmL5u8hjyLy7UtSDYQ",
  "key19": "569zA4iLdaPkxrxJ3N6Cxxv3UXX9gJ3ctRVo89x7juLQwQhtH1EXPCT4iSeUdGdEYgXiwsMLPL8HqMgxvyLL7a76",
  "key20": "kc6rdTxB3heCV2oYce49sJBbu8d5uHnVzPxD4vS4zBijXed4hEVrqwEfcCCXgGDL6FDQaDs4BBKeaBZqU79445y",
  "key21": "5jDAaTmQN2sjsTnXYe3xHWo7wob9erYvLnKYPCXCZ1uKu9rviMrbKDdjNdpnaonrqEagvs4WkFebWGAeionsyhq7",
  "key22": "YE2USpP7y6DxFTa3FJvtFyMWRGj3BUHwWJuXZ4U7nDTDv5c5szj8kYRRapW2pFga7VtpDEz23iEXtoV1UPeZ6zz",
  "key23": "3ufJqdR3HF5LiPrxEvBnJEukowJir1ahK6M7zv7Z3VquGYZJ2hRBBochEggXhaothbckPBqGghCGEoy7KerfCPnZ",
  "key24": "2UZrEpkzjCBFBwPGCmrpir3baxm7pTsw3ZjbuP3Gx4KR649cgLEaGDhjrToNcQPzNBgYo8u75srz9BhhBCWwcjKg",
  "key25": "5tdbuTPD2rAc2Q1pwHu1Dd4En5phhR14K9U64v2cAKS6q2f5JMozwDaxxNo8M8Qs67j5wt6Ti2xgLrZ1zbUEon6x",
  "key26": "2DBQKoyP3Kqr2GzrzyThLNUbanQbmv4zXX9TScEM6e22eLo1UA5TxXMY8tn3yfiCyykwn88dAaPs7VkMxZ5HtRku",
  "key27": "3vXsoZiTpRQ7WBV8euLU6ZxZL5jrGPRxRz4CnmVMGXxnmSaNf3Fcv6sZKRQGGZUjdnce6RXYdgy5WJkAH5TADFRH",
  "key28": "4abAuiDxPfU8MiGGYPhdv4SN2L3oAQN9eYWZ7wgzzx3Zjkz5syy3u93Z3J2XTqvehDePb1vu3E65iknxwsZRPwwQ",
  "key29": "DL1n4rSRujgyoin4ut8kp9oHhqkEc68UXgvUSNb8A9d1qHLtXcKygnT2b9iinmeFmj185cbBpHPVceS795ksbUe",
  "key30": "2ruDJrVHci39SNfgyjvD8Usr2eEKHDw2f28AE5q7uiW99eBhxaCGZwCKBZBRdf655FdQP9wtQMC1mBqnTdLVKx2h",
  "key31": "4ecfiCUdYY2v9xwoGArYKJ99Seie7ucUqWnHZcGqAsvVHNoQEnmTjGdbppwh1tWtM5Q5B1QQFNEfrHc57qSyw9qa",
  "key32": "4ccZ6A9zKHPmvomHPWRuMftu2fQ4n4EkgUSwwN4x7onhjNMo9Mr98xc5qfYnErptMuNPoYeKtq8iDcFruHHPme6T",
  "key33": "jpaoVUG8DXZnxByn16uu8g34Y3aueu18wEssryrL9u4oyut5CkDNxG2NhvfsJKwGge9ZovHySzhd3Usyv453n19",
  "key34": "4q6PnEmzKQ2VFQJPt2GumGV7CQCj5YR7UtXy6QJ2CLBxASVsEysfHDMZhc4kPPSecktBYd4JCdAgk2PPotCF3oje",
  "key35": "4xrvoMPbLs1VVHAw5uwHcdaULgMyGYGnFutFHqEyd6LhwCK8RPHzCvfZxavkFRdXXnJsd7UYNz4TG5XzKZxawX55",
  "key36": "3HNFCW66v4Nsb5Su94yLof1t6cKfqq92CL2twPKo4hBxjFcgedqyAQrCgtKSsr5D872U8iumtE5cxYuTsZzrFSsu",
  "key37": "mThApQojb2GvAEKNA2BFbk3nJQJUnoAHet2QKPUfByvWkQxRakiB5m12492HAia6bp24gJTVXT5jsas9jccp49w",
  "key38": "3uQQXAnWhr6PvjitdceKm3vHqu49DFdQpXnLpJfsE1ASC9bDcty5b4jksR5gN7PJKTD9uzzeufrnaLrnVrt3v3DL",
  "key39": "3t725DZFh6B8ZJYDiEiNWn7nodtbpUrNDnPvsz8mRmuTfiWkuWVAYXHazFmLUtqJ8vCHe4qECh1kKnNtwi7V3R1P",
  "key40": "y41EpngHxd3BCeB1WEqp9kdz54Mhr3qPKGy3bPoi7sqETvNcrbDZHhvLmHLDz3XhfKdxFUB6eAjscEsQw2Rx2k7",
  "key41": "5KJbG5nNZMeJec4Qcn6fAv6RojWtyjfvw9h11yHPn5S6ydL8KFyjgM5s9qNDhmAUDLHnnSAXTCsaBfo1sQ55JnrC"
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
