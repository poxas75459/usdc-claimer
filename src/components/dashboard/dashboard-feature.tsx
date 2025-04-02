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
    "5iJqMenA5mTREZuiAmNspAxK2EzVxbA74DKs2AcUCZKoCDsDWFfpvjJyxTy2shALWdphTr5Rt7aG9zHemfKdFDzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "513XMALaaqsSqRuZCv94Hc7J3AJpuQB9XNFkVp4Jm677XRJXCMJtxhoJpX42nNi3f2gLCoYXVSnujLg6sHYHvTzG",
  "key1": "3oe2kAQam8pqYGWFRHoaUmrVrqNojMWNaH1T5tLJi3dgePbaKmxUpgzEdJn6JWPWBTufJupStxJQtZqRoinKHq5w",
  "key2": "2XgV8ZbVPZwEQwoPavvQNdFrSoY36L41X61gXUVZZcPVNuPNJ28p2GemDkC8jeHfEan5YMuzeYQQHqRKHKJzfjw5",
  "key3": "3xk6BVQfSZK2nD47SMgQtSb9AHkZrQsrVs2o6YoA3ucmDbo8ueG5yKS9mgcgcCxgByef8zrnrSiN5JdKDovHfA5n",
  "key4": "4ExxPdZZsTFHmtLFn1g8RQAccuE6fUVfptJPP7fohmT31pfaWspsHZ61FzV77hBaQLiZAZDtSRjg7cxZuMMqeUg9",
  "key5": "buJQhcg5xRWYtBDtZ5WQ3r74K77z9igR317p15fy9ohHvaEnhtHiRk8eQ5GbPFFkgPRKf15nuG5prh2AB4d6ycA",
  "key6": "BiZZ338HqAhb9roMzrabKyfDCDBXQpSG2EBZMXhB4mAQqLrdq3cuFZ1cHPXmLWZAPmKCaAPKQML1ZCio6AtvpBM",
  "key7": "EgZ6WS8CnqSdqup29HnjMb4deyNhHZhW3GXeCSX1pkV8wSYQwyQf6xPT6TrfAHXe2xfZrhVwRiT8KY96JaQSVwk",
  "key8": "2C2M8NNRNnfNAumxKSq69mMJwhaR4gUv1ekTz8XJUcu23qEq5R6W2CVPawMR7Grz5pWiQk4oPpf6rajwPAGjTKcm",
  "key9": "4LbYEdcsCzfHb3gZHMHLRq1Lexs9pmVPqt4Y7RmX43Yaj5RP9RmXTdPHa8yPp2aoXoJo89nKqf12qoaP8LsCedRh",
  "key10": "5vyHxnoFrKcSCcknfrsmqMo4TSZFYnvoWoQAQHub5qn2Br9FBrj2BzTwjZYBgqASSMH8qSBwKRMDHhPUDvbSf4c1",
  "key11": "2ofMfHPWr9CjN157fw63di47126odByNV5hE8i9hC6qKcW7UiTBB7xPFcxSPzUQbmPkHizyEM1z2nSQx5RJSpf1d",
  "key12": "5HNkAow4VDCxCjvUe8UPeGbeWLUEtk5JebncbNf3QTEwhksFBKNc2ZJia1U8d2RPiiNwKmMNyJhFWKVJRrjVuCM2",
  "key13": "21pWTExEWmnrobkgrcMxBYT2cZFPsXgHRrzsK71fEAa3cVF2NHBcAT1UrcgMxbu7ChLhfnbzSLsG9wK9dRekGTjN",
  "key14": "3DTeE4KHaLuArrEt75CX7iQFQdqCyx3Eqc4tZoCgMkRh6g9ZVEjHDXvroyjnDRpeQP5zwETomCQ8Y8jaRJUSW5XR",
  "key15": "3YTQrM8ECzs8EwxTsFaaxPQyB6AbFaaQZJCPNUFsH4vB9FXS1t3hTyT5TkFxiDoVrVGQVRSAzi4mocN8sBES3GeE",
  "key16": "2gM8Uh4C5nkrqMzQarHtrcQYXBqQUijuKDH1uq328vpZ9jys9fd9bQ6d2XA8TF1t5yLoSxt1hz4mayniN3DVxo3M",
  "key17": "5xCQsLHGeTvXz23r5mchD1nn5gNwb2QnNjWd96YBQZdapWChpwFWVhqZsdufcJze41TsDNtUNevdcwZepJmwLt6M",
  "key18": "VjE3m9nARn98nWnUzujPXjsNJH2qj8dqZEZSLcqwhV4QLjEeMKdZEHBmJBapCm4L7UeeN4pcXjZKKDq52VpHXsc",
  "key19": "2e92YgCpvhbknQguf9AiGNgsByANPyaeZMiwzJ1Vz1H8Uw638Ew7zupojJ56i6Urdh1Uon8ZKjNcrpm84MtoDRKu",
  "key20": "3k7bNxASPrNdqr2qigY6qdXWuvaQtNWvHXJMdxEvLTkgbf12Eask1txv3YDKwB1n9LfvLzk4c5ZnX8Fa2MboLe8V",
  "key21": "2FTjJSvCe67GEh3f6oXZouDdSMqnnZ1DoN9c9m5hi9VCppQ2VeEK6xQh14gcW7rJ8vyArCvoFCPTC7PcmqsY1ajB",
  "key22": "4tmRWu8ELjmj8gwqnSX39EAtRHeAaPtsnQAvuk2X6oMZ7ooCu3dFNwvKydz7ETwPf6P2P2gmzsmUW7CnR4vx3WU8",
  "key23": "44aNqdMFJpbPB1qwPF5DM6AWsM9LsDTiYcYCNWuMXjR1Tm9CMMTG3oFCt1VDryYb1wXAPYEjVexW9BNZEioTQYqt",
  "key24": "3xzRwvqDeEXQ1Lf9yaPHbpQA3QTZkVRJqY5ACvPDQrCNzMYh6gqC1y9MuTawbtHHXLuSFS2o1AuZwzXR1Wpoexpp",
  "key25": "35ohAgmpFNoSTw1ZH8uQtT2V3Hn6hDtKAgp3oSXVnkKQbNuMEy9Wgvv5j1g2AXYzDXuYCz2b4jYw7RGig5RzdU6P",
  "key26": "3rWKvKXsn6eB1qtsseV59isbGEwP8BNvrnPqHkuuS2kWGVVHB9t2msGoP3SBTjZssdatGi56weEJBRSNfyoBQr8K",
  "key27": "4GGpaXHGnRwgasbs47j529LiHefgjXwUUz2VQDEbVqRJGiwpNyyLfnwREnDf8cXkgfJKRjxaM74gGg59SCGdY1TM",
  "key28": "4izs2pgRSUD345nQHgZmc7NUkGqrwA1K81C8Cyxy2ZsyziD2ytv48V7hrPfnMNJ5jYh5rwN79EzzWG4wHuxBCaPi",
  "key29": "3DwSgmkp5LWjKLhEVgTaRJB2rUyX15K35raQhVZy2MGnfPbxB3xfgvBm5Z7WTrBPisQiq6v6zYS447igNU7NhMDK",
  "key30": "2WxsNaNp2N5hHpt84omyw6XJG2b7MZUuiEf91fZEDexDtDqNtvcGgRHDv2oSFX3zDjYQ1M6FUQD6hT4THbp4CDza",
  "key31": "8hxUsXF1XtgiV9bTAyHejUpQYKKgKFrbPVmm3Su4Bqoh1pGgvn7RMh5RwUPTsjG9sWmU86fMrYvfVc1ZSF6hrkx",
  "key32": "Vd6cJYiH2rRSfBRhetAFpK1XKY8cqnNgK1KFoLcPBvtxEPgnw3ho8Rmjrf24KBj9CGTZSmeRJWR2JpjNxqYJSgZ",
  "key33": "3NXUdP4KBAyJmfrg9rGch4XZQRSFRY7w248QaAazpicmYihD1uhHPpuuPXLS3cqN4VRcZLNPPLyEnECqdQQ12iDe",
  "key34": "4xVwrfW9hvfpgBJQjRvtkmhCzbLJMn3MLb9mhBPzrvTf1QSwf6PCoKxQSmsTsio1q6gSEpAnxeErCndGSCdMrr3R",
  "key35": "uTq2RhVdkHVTR8MTYnnF4PjWTkRuoikirgW9HirnUMxB9bLE61ov4u5qTvFnURaVD4VmmVtzfG1RcBN4393kuEp",
  "key36": "2FWm39xJ9BNp48Ysin6iNpLQcMLzXeQc4YhPvojXnQQKRhv3zV4p3wNmyfEopAn9FHP7Hh2mZAgXw8F2KYtpYSdX",
  "key37": "2iA7KugNgdMGqy9FZHD73AGkf76toJQPkr7QAUBRJzCKFXv3sFpirMVQjQyRPdZoTo27FFfo9XH1Y5zciXpGXMRC",
  "key38": "YdS84nmLzJMmQHxYpWHek6LjTyZjfxopm157BSQ1JAhRND19eAn7i4kBFNMoSESBzZ4YEfhzcm3JRjLC5pL7FDQ",
  "key39": "62xr3LtB3GBAWYwiBr6b9QYNrQe1fYUMk7w5nTLpAfvT8g7Pr4gRwZfpn4RGc83PUaM9Q6w3NqBGrhSr94i1t41n",
  "key40": "5WBXKTSaz9s1kmzKQuencC6P7f3xkpfZrWGgV3dhdvqsAwwPpbgpcnH1VNAqvGNukdGwYa4D6SThaWbbS7rR1MCQ",
  "key41": "8RtMQfq9jUB5fV7ZqUqveC69o6QGZSRzrU8a8KXjGJKrkYrf1EdpJvmmg96xrKEWtvTPpZKzdn8JV99kPpnKt7p",
  "key42": "62TMj1xPSUeKuXssVTq4EqufLj88ow9tpydXkdSzEaBS3sH6YTNvydWycZVca1DZUCi2sjQDTnyp8ttsRQUEdHnc",
  "key43": "H5LwgpqNdfzSSu5pQqqAMfvvkZK4GPLbEiCwjfTDTMYJN59BwzZAxUWYAsmkeXndj6Hwa6qQwnrxp2dgeXLVnA3",
  "key44": "4rhzVywvBxi2rm9zELpNBncszXf2apdju1J1tniXhX6TTgCchDuYLKVD7bPax2VBZsiCz2S2MTs7rApw1Eav9Uy6",
  "key45": "Sxge4QMoPhWnoJHQQAJmBh4udxpim9XSej9zFq7DdEtN5LU7B3yaLhUQZbkAqjpv1kxfMPjKbvqN1CNJZtYqs6S",
  "key46": "46p38FN94t6zSWmMY3LYSoh4ZCoSipYkvXL3z6Xb24KY1hrL3bt3WwQ3a5ghqcwvnXA2EysDw3vR5E4SY7tjR7RN",
  "key47": "4vjZNT9NbHPxK8tGhxzUP5woA3Vc6xWnqXL1iadzzR3kmiRjG5BHS42vzjrPy9EDzfBwxjKEyNpaYv5FUekTkzGy",
  "key48": "61nMr2nYmNPMR9kctSwRUdJ7qhSCNKd6BXWRAjxYm2W8he3AwSUmS2MEDnedA34j854afLjpvQXukjVizwLvw4Ms"
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
