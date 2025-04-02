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
    "eXmQ2zYWFQgtRP2LVwkChgQ3TQyg4AvpGXSEzA8Ltq7UAL55gkqnnn4f7Ueb2EM7ch44h1D9uvtBg31RxL1tmKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FHdSqkK3WAVnxMfaaHMmS5Gzk6gwxvnZg4zQtJPqyMFqYoerqTCjMVcKWXWDGbqnmikjsqPALaALTQRzrW9ZLj3",
  "key1": "22Eobxcchsf8vYdCYVcwYrSdY6baJHUEFE1q9ib9q3Mftf4x9z5FyAgHjY5ixyVAp84dBetb9x66BYmWWeJy7c7Y",
  "key2": "4yfykhPQdjVTes22ikxaxeKkdwbvUUHHT33Sz18VhR9xJDYTt4VTQzB1D3UgX1YNVWKnHxu9WWBRrApZsCWDaEc1",
  "key3": "2QjwoSBJSu16TqjSxwASzczf1vejov77aDXyyMVhc1mUyd8VV7FM36XLv2epSfbwjL7oV2CGeEEdY6Qugwu9g3Jn",
  "key4": "52fSi6hGATHW8FbkubPXVXREpWrA77NvnLwGjhjJ5G3Pb5NF84Y7QDoFWC4KCe4WkMwZu2SyM8Zij9qPndrDhHxS",
  "key5": "3cet8fRmPMP3P7hhNJ7eU87m9M8J6LTicYUsyGDi9osQwbEhoQfFt7JFFMh6Y5hm3zrzFcz3EdKxW2V2M43qQV7G",
  "key6": "4mc5QNvN7GiyAPYJDVXntxvymzSStHPLjPoDFtn8QYFRvMgGroh9tUjMAw8ggZUqp3LYPEszqXoEUKW3QPKnoySN",
  "key7": "3jbqaMuFKW69mHrFgy44M4JyKGk8T8vDxt4oKT7ufqwv1HJQhPGgbNptpCzBzTJHner9aHKYWkuJMgY2TJkpEZUk",
  "key8": "3vsCVHQdoLvqjkCmR9DzF2kY29LACBr16tk9mp2vnw1mZWpqRRY3DscLK2LLcULB3Hn6UHwYxJLc3ThUxPfDQEZa",
  "key9": "52oUtx4SDMQkEyHNaQvLhxYXpDTMEoraT3cCTXdPZTY68DFsoDAcMyqVpowoXB4d1Wf58671mNcoairtTXx4Rm5F",
  "key10": "2ZDjuWwkTdBqjNqTHPK9dRfeEYgSPUifwSdM3eRXnKcPzvJ6PKGJYDuFnczmjBP7Uz5tNvitZsvbzikkdrj4drzP",
  "key11": "4vZSt4vq52V4JuyY5ditocvHwT9kV4obRbHTiCkQybbTXJj6qcM9Njk7Y4JcgBuLkh7r2WSfGqjRj3LiRCVfKP99",
  "key12": "xwhDCKv9Za9c4uGXbcfXemU6fj9VqTepLQYY9fwa3uJZsW4HqG5FniQKBk1fuyo2bjwGhT4ZZHtJUTMsWaVSB18",
  "key13": "4FzhXfnMaNmHZ7t26TJJT7Jd1DR95wyvMFsqANSA87o8DsqkhfUu7jxCKvVLmAUAcoC2tLPnB5oYopXREr9ioBnS",
  "key14": "cfnGi7ZrfZTiC8eWHBq362daJxkTBz3AELSxHEV3qqj7Qdn7Qmc1GELQdE5QxuSdyDXACvbS4d8bUBjqhH3Xfv9",
  "key15": "2w8SajxXGNAArvbBJ3UqfZ8TcQZXx6usoQsG3jAi8xYPaDCk77DWweTWG4DCbWkeHXdv9uzFnMduUf6HFoPSvjCS",
  "key16": "39gmn17aJCjbcyiN3Gsn1S8ckd7szR79AkvGHtHMsDXVWToGhk84pRM3SXqLfVnyikZtA1T6NRyvhKNhPJnc5QQF",
  "key17": "3BrpgR3DHnS1GSBP4Aw4vRLs4EFyriTinPbqTdFxwz77thGZ1EEHAWSTtqNxZFzJHYX8CyDMM1N2FwekxwPg5VGg",
  "key18": "4V962ATatMPi7tSurqs2YMzzD3gTKTvr9PebpbwLMezHUTUBCnpFj9FpunTuJEjUkJqWUZm4DBMnVn1q6jzrnpgV",
  "key19": "4qX8A34t429HEvUeKviVebBDdN3zUuzUgA7gTkGN8ybQtcboDeL9obKFxwjLaG5Ak9UtCdKZ3WyKc9sXeNSsTNRZ",
  "key20": "5YQ4HKKSZhPaRrHAxy3LQWV3fR7W4tq2rdP28YBDfj4KLzwZ5T3XvUDPAm1s1AXqFDx2JaAD6PYxuSaW8qyGKxH2",
  "key21": "fzZxPGYnnQL2Thej7wSCGas4MrHFj7vts6K5EQi9Pky9Y6XnvqmSiDCC5DrYSUS97wDk4oc94sqbb72gf6MEvsb",
  "key22": "3nLCaqCVccZJKKWaouzR3wU4CkbK9kJHCY45Qp7makmF1fZ234caPSr6hq6CLZc3E94r4pfh663nkuDPvQb68mBa",
  "key23": "3wNGj6FfuW5i7AzK8qrgn6zGH3DXLBmjGwQCWE8Lf87j7BZUFQ1waCF9fxqKhN9Lo6CQtKWLHyar1sqaKEmKgeCn",
  "key24": "5Tph9BmfQGtaezFHG1MmsbURDfchSAHYM8tAi9VPuAQU51uBNc5ARCHotkDAHsC9v6EPqqioqWh3P5VGr6DazRk7",
  "key25": "4B5TiMLNKhTKSBB9YVeS12vMSCbJ7nbFnpXGndP5yx6pyw7dyKmGQU9BdL1y8GB1obh7VQ24iio1anBKmP5gGNTS",
  "key26": "3BrKypTTq2uU9RvTv6DVVk4QQvqUvif2q3E54ysU49RKf346WEMTFd54kHWecGwUnVShKaSyXocJC1Yj9Yk1zfET",
  "key27": "5XU5JKpRF1rKWeayfCxRed1c86JGQxH4Yh5QuVG38revejDcjjykm7qDEqdX5Ups2YDrmEBB5iA8A5KMs5mktPqs",
  "key28": "5tn2nNbcdE7bi1Ciz21MWvHP4pwVUq3MTahfvMjSHTxTojdAFtBVz9zRxPTT1qsMyDzD2xDf6sPr8Ck9m1SKxRjD",
  "key29": "3dFB1GhswcAcQE9T8pPyo2DPqaU7rLErXD4i1yyUPFJgP5cKjAheVhhbHqz8gBBMVDEoRczfb3vZj5cB8eVsUmLD",
  "key30": "AX9qgQD1DmqR12egYPN35mZARB2fRQvFbqx21LwF2HyzrLfxTk3DRLZwvdPphsfKXgbkgZXQhAwJLZQ2H1aiMkW",
  "key31": "55kkwALwRZKuhoZBM52ocp7LB1D7neEnGoqpAW396Gwj51kugYUKHiFAfuVDxGTrNhqHYpgaobDFcSdGJSoT3sU4",
  "key32": "2Weo8eMSYreFMiTebqRKovdmFkQGMophFtNAXguaD8pBjDqzxNpjXYCXeiMQFTGW2xuwXSjd4t7xSnyopXG32VpJ",
  "key33": "3ha941Qci8MhDCX4R57gWS2MTZToimGVorDDRT7q89yHiWKRhSo8rmfPycBThYMqCKYhioaF2x9LLDr535VUVp63",
  "key34": "4W7CXKLvnCQZpdoTNRv8nXtGkayoYVvqZwaccgqRDP7KmSo8cRG14dygTwzsXtAFRvs3Gi9dp3zLvWsnBEWzyeY3",
  "key35": "2ztpzwjJseM2MzXh3SBACuUohtAiSPVRapVZj9oacqJEC8hCR7ZWhHPEn2NfqaaPzbzyaZpfeBMqwruNBmt7Z875",
  "key36": "36Uk2wzfPChvW1Wpkiyk9i95tn9cVuGqWNU6ktsQ5yN7sQrJroLRLSqgsjQr2MkGVjsUSbLSVspUtW6dwkBYtLWS",
  "key37": "2BYv7e8Kuupwkib5gxVdGPNiexHy4CJSUY6kg3zNzTbEDnWFtsgJtLXWQbsnzy2AiuY1KHtsgLzkHDKPUswbLrRq",
  "key38": "5J4h2vXBxsxeyEgmvuX1kXyzAsh5hGaebwi5mLttTGLVBXbvVGpBZHU1roH8n2camr6pASdFYnkiTTaucf711cMx"
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
