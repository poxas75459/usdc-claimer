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
    "23tnM4WDJyA94z3uuPAT7RiTZKar6eziNJmWJEgxso2A1Fy5bK4WsyES3WoSmTvFyFefkDqACfupjSkdqS9pooTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmCtk1FSNpZzgsfgoL4FLMLyxYXtX2YCU7AcVStJeXoVpWsxNWySoMJxCUJdVq48WErUSCSdjEBTxyrjejRByaw",
  "key1": "3sg1kjT7xJ3yVEUfjLpLxeLPnSEobsyWGeaL2vSzRcGHkyr1sARMaYv3BjjRbSYnWoEMMpxWuujcS5WfazKeMqv9",
  "key2": "4XWxtMEs9W2qyktRLnr4z7bZVZqwZ3eRwVZQVNvtmzSfzjU2DRNxQJjjgSmde1t6UefWHqPFtokECnLEMd78uDB1",
  "key3": "333KAS1Gn1VikebW4jVPMLxtpFQg1SbJP8diL9a1gVWsUtwhymbDsafdXTjasoMf6n6zsdRpStxW8PoRpr8ow4ma",
  "key4": "2kzmYU6pMa7YNctDdysSzK1X7rFQjSuswzotdXPxBvyLf8WtQrX54pn9zb2z83Yourn8po7cArdcjgSoNAUgLBTb",
  "key5": "3zU41ERav1TQM43HeRy6d9ZZVh3m5tQrm6QeZbUYVJVnP26D2aXgxYmPBHPTGkggwEfErEGE4d2BgPUEmoqoZ9QB",
  "key6": "3bSe47SMkr5k3hKk6UL8SACQMY9oTzjCiEXRaGtHFLbddtWZw4GHYvBqjqF4UCBZPAiTxB6YFPEdLDfWWHPLMUGK",
  "key7": "5fKpfKw4dyEXhYhaUhTeyacjmRcAXRiAXxC2NNcFaxKHxLYMtdjSADeHDYKhwWGJzuCrP4exdfbTmHdaugPmys8d",
  "key8": "3VavpntNaHG8AiLu78sBLVSSSFTKTvnPj6TaxW3tSTynZL7i1MZQDyKmi579mHkagWag8uRTLpwj5bpoYtBMmzsc",
  "key9": "3HjvGjrwttKeFcxoMNNyxCvqdVLeZRypWc3oonZZMrmuC29hhgm7wDKGfPC5FCnBZH8E74YfGzHjMzJ5baoS2kBk",
  "key10": "2b51LZjxhvzoXf2sCj2BSGFT7MxFt56EzqLPm7N2FeFPjMDmXZq7HQqcnQzxuXf2qfJuspMx1hmddeeUuVtMU4bZ",
  "key11": "cqhm15L7BgAa6CucmndSzYqVMtDkoVxY7Y8X2gYiwqMp1ZoVV84K9TBesPvbaWNTVisJBTU552soZuT22fenV1Y",
  "key12": "uUqAAToEv7Z12LbYV35TVoypQRMteg6gXMuJpZR2RrfYKnR2rHnag4hbfPgMqek1SxLPboXdG4MJ76aW6Disexw",
  "key13": "4F7mXkGKeCcp5VZ7szcaqNZYUNUytjoRqEU7BbAHXBvGWzJhQU7kQeNvxipX5SXdCBbezbTCZugrBeFQ3NcW1SA4",
  "key14": "5YAqHQCF4VcfqPkhetU2hqU9zbEWQ4CqrbyrQbh4KVgc561N2wsFYQYHV5SKcN5KunFgRteQvHAYngWo9Vrbq7Wp",
  "key15": "51pgPNjSVCiZrkqHXJf2UsBciTZz9fFUJ3BjK6TZgLrGD69kmRXYiYropECU6rtbHGm9Xi18H9st95AFKcZMrNS7",
  "key16": "53zzkpqkxDHKTUJwWC8EaRwhxCqYYD1mAj9a1Cc7tbrYuSXvNSgTEWFMHrjhn3N7oqZ1ZNs3dk9k5EjKqciuQc8k",
  "key17": "2LuZiNVy5JF2qNXgQdhTM4NoMNTctuCEj5aFXxaDq2oMC3RU7d5ix7srXZHr6PsCzNJj7GzbUaSj21en6GoT1n17",
  "key18": "53nHXfS7mNJptsxCYxgoR6xp7N79d8eLiYnf4rZr6AcvW5xvdcvvAbxsbvvuXfd5pqiohaJMEzrQBRceYcBaTbZJ",
  "key19": "22QtLr99KgxZtmSyM1GLgNVgs8ygmAb3dm4jRWwFr7Ab9fMVEQyFyGaAXTjqrNYLdgBUfwNLvWzpM4m8NZXbyNNA",
  "key20": "3FcHNUkVw4LN9y24MSBeF2Rxsu6xWWCLudiNJFLQQ1ojc45W7vPvbHrrpELWaAptd5UCJCcuGoe6BxztScCLvuvv",
  "key21": "3PtvtGVh3Wdc8aa2YktzhnhTxwB9fHdyZXSwUqhH6LuvtK8cHUgKNBBMhNYeXzaN3TjNdLor6M3vSzxANAF45YR9",
  "key22": "LC2nHR6VnbwH42xAqHo3e1dkypFpUCPzurGt4NJhRqeqksoULSeyXjYeNztzxTfFRAifHoN6TfCoBLA1pZ2YafN",
  "key23": "3bHj5cw2F8GBLCPSJq2Np9VyMbbxRSta11W7aafVTuF36cE11C8LGcVz38GmwsPUzF8vRRT3427trvkr8rEDQJKs",
  "key24": "3hqQtpkdtpSx4At4h89ZkV6gZQciMqreebq7GcWhF9rpdXPmgasyDAj68iD1YcyAEXbdMCrtxifaxsM4EnWDwihx",
  "key25": "253EUW9aSHXw4u2zffUXomXo22c1u8mnckcgp97kJUXVFmebEZsDXpGsz2eREd7gmqPPnEpzB53WR1Rc9zDSNwgP",
  "key26": "38srrjiSjUenxL7bCdMhXQMLocwDXJUGuY9TEdrpmSQWTjcrD3RTq4vGSJdcFQ88ge8fozm57VWGBxkQkkRK6LzF",
  "key27": "hYRVRvprWNCdpgSsJocKsemqosX2MY7kpDmSb2yZN4ajQLTuYEnmt3oQXXHnk9Hz6pd9Egr2xp55HaGfKFmhPNz",
  "key28": "5iBpXEA4A7DYn2FvDbq7963EjC4gzVoaH2q9mWPQqeaDiNcWbxT69Vd35wfmtYdF7t44mKxESMuYSiFoXngvDS9t",
  "key29": "4Los248JM29n4LE7sZiNXXb95ixXiE9fFJvEnuqcRLMfv4UVLHB55HxNCyb16hsNwXtiskfpoPsZiU3VFxarToUk",
  "key30": "44XyMCY6xQxsvZq4PkBrkjnn6rHA3cqUCJ7ZEYEALDr4f5x2NSbJu4UXf4hzSt51zMxk6PUcUZs6mndV9NTpDdSJ",
  "key31": "5DSszeV5M6PEm8iFt6ieafbehbixpu7Gt1Wfd4ebGaDsB3BTb41NCq2RptDQQ9Pk2eTzar6iUbcwhfAHgim21iKu",
  "key32": "3vf7ntXHeQS1BZZEWMvD95F8g6WNaEPDTjsUzSQyLQWXddNfnxgPqUAbs3apWNCAv2v6RPnMD4VX48D3jP4tPcDQ",
  "key33": "tUTEYLnLKUpADbkrLekitr4LSiE19RKKnfaGe646iJHrnn6Ytkvbatwrr8FkatYY7KGDj6DyrUiYSGEpfyWAWXt",
  "key34": "2xtg26H6L7iBqSAf5LziJ1gAfYVF4r7ccEKosxduGtYCixLbfDkuBzPUSsRLre8Aicx3sJYKdQAFpSqHZF3jAH44",
  "key35": "5NDFiDS6BYbZQvrc3pEbr5nuBUxKNjjvMAYNYVss52z8NNBYJyyoPbPWbx4eWtwwpCTVNQZ2z7wDqHTLQ5XAgxqo",
  "key36": "3fCtMux1D3V97t31gvgzs8HuMJEigsdXJhPmY6kffYUwWfxxag2KfLymHJKM7Hhc3qjkZadayqN61nArH2iJKajF",
  "key37": "472ExkRvKouQmmnrZorPrKTAeLwHzzUKm6TJXRveKvkpiHEMPvkZnsLPT1MhQoYQAUyCgvhgebJCqiE3uXHyPW5n",
  "key38": "fjvmced1y39gdQ6SJ3KkDFhdNPHhunwKSfy7hPp6vMH9rLA4ENsfQ9JgFFVePZ1bNQtcACdEGAzAvMYdcf1gn4F",
  "key39": "38bFe8BWNJQ8K5XPDpZdgAQEMbhGuWbt6hgyNG4e8J6wRqurUW62uwT1SBm3Ju8REUVu6LMV5VzmM2a2Kb4RWyKo",
  "key40": "51dy8nJ7on7ywrp3PGXADs37AVDEvvGdsyiXsDEZrqRT8UxPBU2Jf1Yu3oag6mu6gTxPWzAavqsGY1ovvNmWQcUG",
  "key41": "67Wr6ZhwWzNa9L9rz74zuRsx7gxyazy2UcZbyQxZHBwZ3FDvzoV4A13h8CKt8ZCiTNr9H8gjyvN3s29fNQaPX73p",
  "key42": "C4VfYeqkHE6w1tqdorkLQjV17ZwxMTsEP5991LxHcimjkK7hokpLThEwrcJLJS5QyiBXZdN7z3aXw635pqVf4xA",
  "key43": "2wYQK7sLnCDigEMpWozWJwcLrF7Ssnxuoaz48zs1YyiHFtsK5VDdvMeKNa6nYZMqByQ76JMwua9sJKvzUh79aDTA",
  "key44": "5Hu4nvnKbvYEpV5hETCkbxCmrxNJBczQdef15LBijWDHPNwTwbhZMoTQ2sYW2ZQMnb9CLoWX9NQgRYrp7idZAvd7",
  "key45": "2oKr4TpANoe1dqeZcR1Aot5YogusLae2KJ4aR8m4v9BUfykVVQkwZmsxsGUCHbNcENHL4EZ4ZsZrGc2ZHaoMc5eh",
  "key46": "242Rq4GvTrrsmo861nAJPM6ndseszaBH6iomFJsed2bmiApSP4H2QhTE6SFXtCdDgjayMt8AprcA9B3gGNzowEzZ"
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
