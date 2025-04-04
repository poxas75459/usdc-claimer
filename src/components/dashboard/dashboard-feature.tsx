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
    "UXmqjEGi1BKbYMyD4RSTKaFrGrnx1wR2C1khtmuvrzzg1Ms4dFiiY4is5Ji5jfhkgtz83WJUgkv8N1U9QjEcMCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gzjbrwDCRdJYA6qZoixnaZVkWygACUeKP52f953qB1BbURFhiRjjLzYfWzJGqcSWrv89BTQvQYhPTcGePY4xhvk",
  "key1": "4PH6mFJ9KQs1xduRGKiQ1pSCaENtWKrYz5zoEUvKvzk1kXPPZu2r9BeynwwSSnHXDH1BNodEJ8vDkDRUGyt894Rx",
  "key2": "HQjubKjixiSxAapuHQA8LjdZPGpKC3txdqd1Mh6CHJnAqsPbx4h98B4s7f6LiQnSCJXpyGwFkiKQJe7WsjrRAMw",
  "key3": "2raDJYw74nR9XKynjzu5QMF67WQzLh68YN1ig2Zc82zj33czRGDkdE7VWgmhdzG9QP7mY4y6LHWQa1jBr3Zz6CC2",
  "key4": "NECJGxQ8veZrzK53ycHMAGGo99a62TnU6xgmoEvgGvaBTvoouVEGWz91RbdYnFo2oemMxHoq2ii4uHofeQ57PCW",
  "key5": "5NKLg8bVtprHFr8mFPN43Ass88dCgBVQyGsncnqPtTda6Q2dfQmb3A38WaWPBQSvG7g4QxmaWrf1XtiwyTuVfw9y",
  "key6": "35YWhTkhC9BD3wf4WpLREumtLAEEYyEhjMFAqaH3RpS9tgdj6Ld2LoysyUE8zamriDbxXdpg6wqGcU9zZgRfkfiF",
  "key7": "4RNUXbJu5x6zXZYwTfydmDNXrLDknJXwUueAPPxquED3MPNRSzStX8vfot9G6FWzMpoWatkX7ZiHaJFgksL5uxWn",
  "key8": "22cLGRs3npsd1rYn7xf2a3oyqRUsvvFLBKhogCEc515zM9jZd71MBSTXsTa2npe4RiqQwMvJHQRZRJpfgcYrNr1a",
  "key9": "3p4KnWNuRQhgQgsGqa3zGsyjarhAJZ9SnwBwRbLKoVhxm65fQJvNv9bYRBBuhsarRCzEJy8weZYCQg34E69nuSte",
  "key10": "21keuDWgbpEf3f9Arb8cLpbVjstmYjPqLSCrjhDtaebnAehW78Qco5DX5fTpcZcMFoP2p9ioEEbK2ktzJckSYQMT",
  "key11": "7fWHAj2UBTZG8DceGumAyMMWSbWy4Ez4QqtSt913M6a8MUFA22pAS6NDceYLfVyLsY2Y5mjfizBkKs1Tj8EHUA1",
  "key12": "xzEQdjBaNbsDr9UthPLWjvTh1TtYHfqXtK4k84H2y5jmhKbKkut9FjbnJGivzuh6jMvE2R2aCRi4atxK63Re32B",
  "key13": "4QwVUuWRHoQ3LwyEcTroEjHMLQKtzmfvjTs88AE8qFcgG4KUTBvpajdVXt8AGAKKyb1VjesWeQdst6t4uCcSeG7j",
  "key14": "4NwmwKKLfakpTRJeFuDickYMMyRXrkwMzcQys6xWnSPz3YdWve26z1hUqQhT4gn9kYHmhfeLcH6VPtg3QbrLtCFk",
  "key15": "5xg5ESaryLXfmVjABitzZKyD9qFsjw6JcEiiBRHfawS3xY8z7MQJJH1tsfRvtEAzYLo8JKTyZ87XYLB7oJCvq6gj",
  "key16": "4H9z6JV5PcuRCdSwbA3n35YXT3g36XTpfQ4HE2cafRT2Z26C5VrrGpdstwN6w6Vym6uuzpJHHVds3SvHxLbDxr2E",
  "key17": "5xqcw4fD52kR2BgJxUkfnXsKh5MxCPapXAzJCrWueNxqdtGXy4LW9XKHnLBZcqpPhhdQsAjjnGpkanPRRHpXyMtD",
  "key18": "2bwz5j55GwmoSdQioX73sw82uBwhQsFAaHWLEwBxXZY832GiftyXKTBG5uf2eboutXzUF5ZvedDj3CRGn6feekBB",
  "key19": "4K3apCXrxbvbSAvs49xJobU8weoZxHNbuSFenS98n7onX7aNJKusvCip2EARgsmjtNtepbNmZa9AH2gnr9LMfEc7",
  "key20": "4Hud6bkH5LpNwkGNTCg3JqUmjN6CvaqvmVww33zd9KfRDVQbiJeFWGMigX7Pz9QewnjrGVuNmi4agW5Jt8a9fELp",
  "key21": "2SgTodAU6h7oWHa6fSMtAkDFwJZQm38gtH4GaRgw5WoESS9QuRbZsfcMrePzjV7fSHXpgBCYPoizjwm6TwckLn32",
  "key22": "37Niyr4FHbpRQYodLqiLB86zs4bBBiS6ad8sfeZDQRLUsob51mwhCmrFKCFcZYnnmsvLgRX9pGc7JWTyCDm6aaNX",
  "key23": "4qxKP5BfyqJFunSLn28qjRg7DwndYgGxPFZt9o9gX3baqK4KBqzMy9ER9Cv8gm5f55q2Gw7KS7S8PjYjs2sorFpv",
  "key24": "5vuS3CrvRXQP3rQznoieR5mJRY41xrtXMh8P3YhGpr6P5s3qqAzakSkFhVc2GAQjSC1MbEd6bedS2m5WB7nDPZZL",
  "key25": "Kcy7U55F5i9KLYV6KUgyc8qb3whknDsrnnATyjhpoTmNz2fpQuNt6Gzca7FVQrnZxRsx7VpfT9g3T7jkhcuahSb",
  "key26": "2nprJyGkQcsc5wLx4svmMRHsUZEMKvFQfs7KkAsdsBazjnF5YZViRfYVyJWV6yKqTMETQrFcpKqtUaZtTthkgZ1i",
  "key27": "qU8q7TgNTJpmj8GwuiwCVBPR8mATnd2Hg3ua1GccaQr9jAh4KehhiRfw8WUnbbU2YUHkqL46aWL158sXFoBQaQC",
  "key28": "37XavVwcy1NxQrV3HbxNvkTv21a5ozDpKdxHNa7JDt23Azy4eoptMVPxu76e4ojnQxuzdWVeVnCjH7dPTqykPQTb",
  "key29": "4z8bsKHScvpZWoEUii7UTJ1U25q55gakwsZ5KEHzQfAPfRc1dkD9a2E9DxtXrZbKKY8jj1DKaA1vHMNDBX3MG2xJ",
  "key30": "rjqEN76y7NAW388kKkiVRmJAr8iPMRPL4Dn7jW3Viar54GFRubos7QoxLSnfu62fmaedps6gVBccD7sjTNGT2JF",
  "key31": "9RbUPuCpJBWS7ar9UJ36rkcFTq9FEesVGUrFeTXMeQyE3yDyCdpLaYEpysiBWkY12KaHHQgk7sMHYzpZ13wZkKt",
  "key32": "4ZwuWFe5jwEV87mR311GWaqgFiSBPn3zb317fSZ7wrxaKeJPDsXF6qim5SyQMnBFsheeSSgz9Yt9B51WkNPqRYNx",
  "key33": "4qvGfcUxJuwzL2Cjfg32YUMtePCvk45y6mdWNdqgvie3akNK9YjFyoakDfRkiaoBrbr3MZ3Y19AKjXU9PPA8ffZf",
  "key34": "4XKsFkrQtYG8oMFETpHgmRwVn2Emz4244nRo2eKoTwYpC1WFDWbEVg3MLTbknbs4ymsj1Pd5bJu4HvGrrDrexdsy",
  "key35": "4tyCZhA4aWpREMjAewNxuczKshD4sxg8cC5MuWUoqiv3AT3mZGxhmtGBxUM7nzA1ArMnrzrExWeGvWT1Zy9s3EAC",
  "key36": "28w258KhjStwi9Fsv6wn5ekbq32SYVKqZiKV98fMJWJR6pCGBSuHtjNsjdVgAxqKWeehcVP2GQT3GKKLbyiv1kn2",
  "key37": "FPPbwcwt2LHGdLegryGdKoP6r5dXsbwEJu1a4SoeYWHA45qpTxb65C1kV1Z5xAoYrQ5vtQvwAEsTjVCXHWMrRer",
  "key38": "3fhMnV9djTG3Gvw2MGAXSwg4Q1PS5FuBSyj6us5CxyAPn4DmbFiEbNx4eMaHJrUH3z6X5SMREzNyjopnZ4vAFCUY",
  "key39": "5N8mpuJfPjUiZKD5PbFnPLVAzJbybRNGwKRp9F5V8d5R4rcaoh6YoRfjc8sgGxjx3cqQRtokPk2S7Lg6Nud25LZq",
  "key40": "5snS1BZydC3MdXT8HuRxPo6qq9F7Xju19nr8V6PFSfBBhHhPeLR4eN6bBg3jgrkPZ3TbfukkSiEDJ9GGkD4C8b4B",
  "key41": "5YwK9h7socbUdK8LG95VNhDMjUNtp8XVfoUU4aL1ynipCuS63rvxEqzkkWbQ9N1cZfAhGv8z45WHph83c9Lbwe2m",
  "key42": "2SajEpGJVx7NE9NXyWeaS8EjLEKpWcK4ktn5mTnXa5a1zbKYaWhrw6hVKV4wh8HRhVCX6f6TzbtvCNPevRpWJhSY"
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
