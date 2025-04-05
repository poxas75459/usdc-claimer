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
    "22zoxvdFPhYw2MAhiT3NFdbHUZWhg4anvP1iq2yJp9P9igp4HtfFy21y3KnUymojTmiC8i49ebm3MECR4JAgxKGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34awMhvgZauZ74Co8uaRFjE6su4DJk5TS32qeyJK3REt9vd4XdH7tRz49q16cgLcvCZnxhKTeQomPBrW4xTyKPFW",
  "key1": "5fXsQBMWdxQRoJ6ip8Egt9teufUgu989o9XTTQ6RCZwsbv3Ufb7KcHDabMLqgkHnVA88cJx4hDYBzqcR5NQcFu7V",
  "key2": "3rMGnEREXWSMy4Zgim8LzFwj1VZ69ULW3AWQ3ByAJLcxqYxr8r3egHbtVSyxZ4fSEh7DBTzpS1FU1xvgURJqy3HP",
  "key3": "4m1suBxExUCi5KjerFjtDvVury5ZUfZt7kVYEJf42AqiMhpgzgBTfkUCNimyy3kGtKgA2AtvuAUiz4xNavJjZxMs",
  "key4": "3t65Hhg2eZLGJyDm8FfdaUnR1qm88h4UT9uDczCsYLks1aBVWsXT5T7Rn7oj4aaGmhiXD9MHc5fxhpKpQj3LAEdA",
  "key5": "3PjVEjvZmzsniy3appmwvPFKCmqWfhTbxbQYiDNRHavAqRYFxKd3Ut3PrQ6qTm7cxHhxoNhaesxhY5r9cj8NdG8W",
  "key6": "3Q9FH3HVpv6w3jXr61vApMLGfBHxZZQmFfGBpsho4PbmwiscQg7ZZyiQjg4py68RmtSYUWUgNpFmHqWMqP8UCbVf",
  "key7": "64PCigc6yNX3csooQRmfsk5mcF6UAJ8DCX9rv54jFEgbEJkq4kheBWczb2MPocHMbRcCyfj2nq6nARVZxmphfEY1",
  "key8": "2RdDjAsuHdYEgZA4BxxkcbbDMNeg7eZ6Es2sZGhcHxdbbexxUYnEWE9efcnXJNC9VKxdEV2MrvREtaDjvQsSSYJk",
  "key9": "3t6eMw3131RKyEwKHSr3RszAGYjADH7xcMvEDcm2xDDqfZVyn6uY9Qs8TdB2T5DrDPq1oqD5Ns1pk4cNNyv7uJr5",
  "key10": "64edBVeg3exWEpzjGX9URguCPQ8u54NLRi1heQRXCcXBkseN2oPHbo1TPXrAvJs1tbHvmXLsKcvLqxXJ7uGR93Z",
  "key11": "7oHwB6vNQUCobLAu4vUH7hagpJevaPk8MG797CgzQnmuPvrvXBnH1RJybHf7oBkz51BxueK6HETXxuxUwHd1nnN",
  "key12": "E54sKb8pS3Ew86cV7iU5q6hVo3jHwPx2V8vy6h1ngfapQjHNE3HmYXPbaASTWQKPV9wBDBWkbb3NAxALRSwtTpQ",
  "key13": "4JDuBPg8MBqd7QQLHwu5AVxcVzsMaoDq3DpEHA7QHMK9p6oXPtvfuT1DDYtJot3AnxKfmy4fxD8P5VFTrDUrYwNK",
  "key14": "5j4T2fucPgkp1vZtF7yVZhu8Hztsi4Xa6wsCsiG1x7FRQrPHsPzV7YvsV1kh6qWc9F8mcTYG79oUWejiDJo9HJmH",
  "key15": "476uh54gYBsLoZkC1euDu2Wednb83ca1cecNDjoeF4esp4cMVdRTogpW3pAzChfYvoCry9VJg1RKfpKH5DU2sPs",
  "key16": "5JwhFcETowHAZuiB7VEKtJEqhBuFSHp8P8QNohEysmyDj5yADY4e2xHNCXoLRdvweeNRpdQamtdeLcPhFc3psaQF",
  "key17": "2GMftSNtuAVMecQ8s36qracY6FxWWBcg4ngmnHcHbNyzsGvzWXsF1R8QWrWF4ARnTFSwk35QabrtiFcCUwS1R7ny",
  "key18": "2t6pqmUtv5MS8Pbgi83AR6eFfrLbaVCerzjeetkjtykn64ER4YFGbYXa9unbb6inQXsfbnBTYW8ApnQW3cADFD2x",
  "key19": "2fN4YNcJAhp5jtPmemqEJ5t356NgH3Ns97GNPxVVSTWKvxdiTKjqUkUkezFsxdoNAp4y4ykAUBVGV4P2fS3Be94f",
  "key20": "5DDWGnK83Gmnedzg1MK9z3MhQm5mhf4W6nEZzMpUFa36yqJLXtcbJowsiURAaHjuJeNpegNiG2wJ3x7SkXPTVsmp",
  "key21": "4UyGVb3PZDomxYW2fLqU71bd6aTnsQNez5BG7R4qjsepAevMSsAirSSTUcHCqRGeu8vhM3gw3gzKCEhUTETrPm6",
  "key22": "6pSo2xMKACjCkAQAJyX177gZzg7frbDLqYUNrqLH5f77uPGuP5mPq9BcggBaFJjemwQ7V8PToMdhhyyds7zskY4",
  "key23": "65G2prXCZSKDasHBgtS5xCKC3r6M8adxYbFEqzMdtHMHYSYpcsnevmQhccERrZZnPGCmsjkaDSV4aVAVjpJtB22e",
  "key24": "y5Y4VJir1GpjjZH2KD7VncRKYGeCcaARLwfBdJGE7a4ijpKUe8x986BN6DKjhdzqbWpTeXm2cG8HqFDoihMAjHx",
  "key25": "65VPJCj5fiZQD9HUhdgAhfXDSbJ4kLtkrUTwppQs5149w5qzxAaDy9LkE6me85TBeK3gHiM1kKDEmx7NuPmkLp1F",
  "key26": "3QkwWF1MMxJZ4ebXd3pJZPWttnCcRJiDCTHZCHpzeVY4bkNedT4AJvtYDkdYJSpKWeJBUzpTCUQTaAwJBL4kLYGj",
  "key27": "rczW3TCdUWFsVBD2eBBm62VvHV1L6X3KLhw2VfthGnCZEqgv1kRCvWspGZSuKcBUmoGziQgkteZ2fh6roFH32eY",
  "key28": "bs3vtEvb8KCAGS9pGCkBX17MnF3XQTAGMQmC82eMxWLMGoYKa5eiatuDuW1Lt5tzCXHZmkc6HTrPstKYH1z1oUV",
  "key29": "5YLLoQkE9YWSWooYeNf5XECn4mxsQxexAwCBnTJw5fyn6pFgYYgq4Bg3atAhsTmthiqmcqmvEHpPCpyXY3D5XUVA",
  "key30": "24RgS5Kkfr4F8F4chYAR7DZjeqo8qNw51yfN56xQ1Ycx2v5sVEjw3FZ6ccHZnSFShd7H92DN94suJn2cx5TsnHY7",
  "key31": "3tdSTENzPZuqu9QpLro6Fh6ru1m6Maa4WDEVTFdWBai6EQ9haBxmEbrkssgyZpPLsnWkuZLYLwcmtUt7w4sAoZXZ",
  "key32": "QMaCd1P79YSimdTwQcaHJRdRrJrQtTWaN9WsqRr35ojwwnXtLWVTvz8FSHAw7cFmsAQf8fPsSUi8aKJPNbmYRBF",
  "key33": "3WLCZdoBJbv1LSsjeUyVPCHq4q5xVJj6YKPXhSJ5DQWcgkxwrhGAAUAfF1HEmMiwBzfUWwdker8rTtYzjCWRjskw",
  "key34": "2bH3vznd1mpgj9xnJPpKmBfKRCNuzHoBMs7NaYnKNxDWLfwvUPvd3a2RVCNskb4WojRg2A6G8b55KLijwBR8hoMD",
  "key35": "2QpCcNztmd8LqYF5MDCQoFhP9KoS23ct47vRrrKkuyxoTF32hj1nf2qV3AaxrwWe23aTAMitzk6hr3US615ab9M1",
  "key36": "46ddGVo3TtvkiPPxQXT1b16YuvprgHeqbvZg74We4LiADxibfQKx6Wjx3J5GaHH5h1BXpV8Bozg2rfFni8uVv4PR",
  "key37": "4w1V1BhTAcRr3QJsFsvnDc2HQDwvgbqTtLYbCtcvq8TdvfiCvUW52igaZTsaSiMPUtg8c6J58GkropVzvMvFooVi",
  "key38": "5px5BQeBfLaqvyVYr4H3gkj1znr3QNT8sNTiorhH64xAnXwdyRq5A7sq4d3FEZQwrjJevavYTP4b3uZ1Ka38FP5q",
  "key39": "5rN1KbprsGE84smVFxR97UHimWuKaPaFakvPPUrnbrtnc2CtvN2Z4RotVxvPhWUeVuzqvVMWxEDsptb8ikksnwTg",
  "key40": "4sfDAazTjKa8kPuuAyHcGY2vxDHxudJFUoxsg4tqqLSWiKdzDx94SSTphMdWeDSenCSiB8ssNLfFuqPqWcxb5D61",
  "key41": "52i826jegdBxi7wvQ6edmZpQAhbS2VubbHvBRZgg48SbK8b5VNMignrPQdnTUKQ2me6bhDCEotLYz588sKgZrqT",
  "key42": "3KXTXvivqyRwyU1hqDtLaXq3PfzLuj4x4mAKPqcqCxegLW32TJ38RkLc7dgBF8RAVxqVzCcRrD2enUM1FE5Huox6",
  "key43": "b1EHPcjCuYjyLGtjEqBN3Gi7YrNvJcvbykZCFujigaTqat3bdGLtFN7Uq4frgCahXu9ob6n8eNgHmQfVHcToGgt",
  "key44": "5m3mfsFjZkBD1SL2Hy6z6x9FGEZ2bjGx2CsfTXKLKoBDbsNjeKLGCEnTznzvLtzuNPLxfSCquqzYv7BK5ydRBdep",
  "key45": "4WcgrtLAb8zYg1YkPhHgkmVmZ554puAjgEyApNWTLxGFsqqoFgabzVeNk35Zkk4SZTjhbMhj11bTXvHN12XH3FyE",
  "key46": "613MX1AAC7zyPP9QKPRDFNYacdieSdMiTdo8cqK4eRwpjKgSba2W22c1W5or914LregyQ7eYsgQ2cGyDUyDnqDEQ",
  "key47": "JkR5nKiwra1c9aALsegbh9b9HbVqU8cneivS49qXSGj8m737Jx3YNoxGfPyPX3dYNKCFyRUGhEJyddprWZ1yihr",
  "key48": "29BpSKKh6gjnwdf2hnifkkKUqKd84VHUBcn2ciZnYgkKNMSFNzWqj3mLeJ9gAbh9XRefm7tTMA3729fdMLuUuSqQ"
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
