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
    "29AVY6BuUbTEFFYdSQLhcf8MFmXs4joWd6xVexwBZEZWqRUdBWMSqDiJQRcVMLEEiy9pmM79rfhSHxsH7TnyZa5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vxANPYTGXDq4Uor9ejCu9pQFPLEob1nZ7zXpCPBD4zEe7dULRJif2GiVRzDNcTvH6Gihkewa3NgbEvTdSU18xxr",
  "key1": "5gX7bZE3k3qhvxEQn57Rb2NPyYUi9dQneK3cLc845fHfsnTKoagMZYuFeRPNpafxBKvodTBr7DYpv3MNtm7houN",
  "key2": "4PjWtM4m5HbF1ee45g7C3HDnvZa7nsY9WWMuK4WtV1KGkz2kHSdKi4dhegHfEvzLDR3yG75v7NAKgESCU3Gw31PS",
  "key3": "4w4EkG85ck3c6gPkuY5Cr9wmXk5j5PrHJGJdse4WKeeUVnS4BunqtqHfxkzKwmPgENXTrZDb5aTev8DSGUQrZGk8",
  "key4": "5gTRgxVCqtc8YA8i9dqcHfvqKq2JkHvgppMDSHYc1tFuwhYhixhTVdDf2SAy7rgE1tgRpR7C1E119Eu64RNRHBRm",
  "key5": "Xdu4VpCV9WVTKvZgx8g97B9HDwpN987aVEByXnXDmnPF3PrdSzRD1B7Fyp1SmM7VwF6qDVFRjQxd4m2bWMNWJST",
  "key6": "o1yJZsrnZ6MhHhyYnDF7xSvizZiZE9m7g3CrvnPtp7GCUiT25GesXScMPuHLJFvprn3U6T28njHmR34udzYXeJm",
  "key7": "A7xmEQuiXWPvEboEQzQU52nBXMXYRWpQQNpmPzBQ28uY6BX2XxycWYqbzjtjKSv2h9NEAEh6qvaw9aEQDuoZ33f",
  "key8": "VspU6HxMH9x25MRLvYTv2ewkMZLXFt5BdxE83Bdqmx9RwZNx2jXAYug3cFcLiMEKo1zMcnZ31ofg1P29Sqd5MsJ",
  "key9": "55ZpsdU1D1LuKcJmynXxZDVPjv5CvJSDXqdWydZjHJHpY3s7QpVuFzAqVBXHBZtJP1g86hm3bEc3Kk6RK3EDDRRt",
  "key10": "A4524Cjm7gZHKVQ2vLWZWHMdhFT6iAB8D5XaoFvbc1J6UvvpJH5M1PsnHwiXmcD8GiCYdTzzG91pDidTKuTRzkt",
  "key11": "5KwMQP8SXwDTYFryLfrCCA8jcW1n9izBmh1f8uGpwTZmVDzx4V62QaAadn2ZBgNzkxujWqdWBk2oMKSroNyag5WX",
  "key12": "4ijCGdT15Vs7BjZRFaTibsBbL2coz5hj4qZuwkspEdTy3rf5Chkbo8jZNXPHd5x1fb9N5Hiwoj3WqoNnMAhHrqUc",
  "key13": "3B18K4XmttJ87aNFrkzED8khBMV7KQKJUgyKRt4M6736y6JprURnQ6QNQ9BkcMBq2R9oxCfRAzXZe1hozvStpaww",
  "key14": "2chD3izcRSD8hQGkER7CoErzqusfS6dPjXp1LDfcS6oLxB8afcEmsBADyNGhgzAraatp4NZC4CpbViy6xT4fBNLv",
  "key15": "5YYhQCF8KdcCvQYcuWooMSBWMJtWLh9686N1XVGom4xTaB57ha7a9KnS1RvkVmGbVDDayZ4g5sbjUrYR2Qp1gCsP",
  "key16": "45eaoqyFFFBTiyx8yGmthyBXXBJ9fD7VRDt4ntHwFLDecVmkjNoTLBd3ykm6fTKd5oyAGyetyPTj7aQaptgsiUHf",
  "key17": "T5Qi5yH4oX9ovD9BoJKL8YUPszad4XYjn9kazyb5hVDvpVvhBko8KHqgG68iMe94pLRen53VgJ2y25VwWKaixRd",
  "key18": "28zRGcFE6AYu6cLS74ABnqohxKHnKWXT2bVGdsoXorzxQpGj4njkES9UR87PJ6t1gYThgaATefMjdCjwN7gchVqL",
  "key19": "2bJgp6APvH7MiBaN99DLFgidfrFiLkMAKDeP5WnyEXMqXzm8VakafpJWutLoyNYyngEhC3Nvk3yQMQqYBhiT5Ug8",
  "key20": "67nzkDUarHXcMacQkvcVLF66zQ1q1kbzj2EZerSNLrq8qw2q6qNWHaqBkqf8PAgagjRzhu8vm8YRm6iNfdyoAN94",
  "key21": "eSRfUjVHk9YRFbEhrwzzNSCFgsK4STg7SW21XeDGZESeNvej4c4uqreUTBAGga49qJkFhU3qona8tNGDXhheipu",
  "key22": "5E45SJEwypmaXDoaDBeoyzLohHYhjzEXG6hEgqPUV6PZw8LE67PRNbSpPtiVaY74TcoBcqKHzvk4n8t9cKvGXads",
  "key23": "aucFNfRyWCgh2R8EAfiSXn78828c6Wtdw4vpUVTxPwpV1kNsaoC9HVinPQK13T5fb2ymZ2w3u6cRiHTHnGWCASH",
  "key24": "2yUFxxvxxhzXrXTwonntWM7JX2uUfnsVZzB9kAwqzTw9bYqdKfyyrEpKMPKvakdKWkcm7tvRqGELczqwt3cZ3EEn",
  "key25": "2RnArZdsGd5A35qhMtYxHS6ZrAvLf743HiToGQbm1iv4frVuCBmU12kXLBGWGCsDe8G3kbH57Cyk4KsypEtwFgrP",
  "key26": "XPaH9ToCR1Xj4qnRtwWrPNfWZEJRxLFp4fA1MMDkXgrPSd24CAXrXSpjZrRv4MRJpoNjCZer5UVr2rqyH51Mj13",
  "key27": "rGEegPmRJjNYGeTHbrA7NBv4jxWmge6WnC9csdB7yKuABEoFhpTAYDmt9tUucehZ1XzfDTKdUbzcQGdkoGHdocd",
  "key28": "3CJ1b4MZmcejVQc8ouXstWmDmYc4fXJ7Sx5S1GM6ysomF9TyeYkrWkVkC9chbS4hViNUkS2oomtubfSeg5KgoVgB",
  "key29": "4xvzPL1SpUJsR3kfpR7ZNMmNypW5ZyCvLZgMxdMUMCkZAAjcGYuvk2xHquxYL2qhvCF6znczHQUU7QqjnyiJ55Ss",
  "key30": "2dBxMduaFXPCJDo5febkPp8eTmsbP7MQs4eu9PzwyNKHr7hfQnP5eP8BQ4CLAasctkz7yTGsWnbSSAruWwskJ6By",
  "key31": "2pen7V4ZFTa3T97WiQ621ECmdvuPPwEXQ92zokAxdummgmC6Ch7ozUcTkw2L8KSouShpceBurCZgBefTaqBsGK1q",
  "key32": "3BEppXFp811wdYd9kQUGB7cgJCZZGhYdCRJHqSy8MtPbbxfcsF7rNYBFNxEnpRH8fYGaGfDXUiUotzkKv6nKKWAH",
  "key33": "613DTBeHCdjxzGiMR5XQiojc2uApMpncedMjM6M6CHJuGrTjNiX9YqDQsT36Wu8E9S9age7WxTWvuhhvJdWGBckK",
  "key34": "218KWoyFsTNfWu6xpLTCu1enq3iy8APtyata11ewutBqkrHYFe4PwtQx1vV1zBsvy36jjW6fiHSC91A4m6aua82i",
  "key35": "3otp8zZboyfQDwwQiokTVSBkhFpNWp56jT51JQ84kb9dU9zHuZuLHg8zeBWfFK9vd4CrJJnomfsGKgfnGTgmzP2V",
  "key36": "3c2HBbxgtMWjxHybMLseR8GB5bx2WFMWvSDxQzHkSMHDqc1hYqY3YTC1jNvnrmgK1T7vnesmpvfGgtptV1YGqDdm",
  "key37": "4ogb2UmhPeBkKHJh8Gg5Q6vjEfFVAdBZyT5PViYAc4ACPoDMUJUakxkuiBCpAy8o1rHkJmcvxJxnqpxUQz31QcRk",
  "key38": "2MHL2nmUkoyLAf6kza5aGihKsSWcG4djJW99rHALFoVH2hbcgmQnWPKbVDQ1dNiqVbUGJLjy2uP3H3b3yoGWrMx6"
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
