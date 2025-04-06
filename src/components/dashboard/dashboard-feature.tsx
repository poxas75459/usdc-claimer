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
    "2LCUvJBSfqsipTYPU9bcCMbDMrfLCWw1sbAQcVP1SfJ8HerMK29GbZvZUPHxGhMeeFAVRg6v7H48qwi6ZCcEZkSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oxMzBzR6F3AxJTSAS9gGzQ5sai3vD1F2RkkvMrn5EQX4DKrNoTzducSJRjn62FBdzt4mKmNZuoBTcz5yim3eZ9f",
  "key1": "5ikmxZVy9RP4sLA8qUJN4vqh58rKvrne1HPDWKJJTsmWtctfBkBeNSnhuioQjgT3QJK1bcQhELAzzcX876hVzt7M",
  "key2": "2CntsWE3cZZJX4K7QZKVb4gzeVpXrp65xNYUDFaRB6B6GJTeNeSZFxeD2Pozq5ng5mwCYWMxfDkLC1zqCYSkXK7b",
  "key3": "eSz6k1oQuWjg3LwxeQeYfwnCXUeptHWTbBr3q4nUMpC1peUtsvDEcZ21jvVm9SdhLnKDciK8ef3ZxTiuKx5W6oT",
  "key4": "CKgkeUpqQmCY9GexbYF6qDoBccicTBfLE7ujFMzCHG41DAA81cvVi8eVEc6ba5Dhi78CVcjDJjfvRAtY1mduvrf",
  "key5": "3X292bM2BiQtnKUvLe9vs1LUcBDgZcWZDJhgQNWEnrLZd3zQB6zDxSDk34zeCS3vt7Ade1m42ZnhNieXHfjP2m81",
  "key6": "5y7MH3rVXPbrEyohJZ45JwVoRVSJdTDEudfTpVQCbHEWiN5UNnPjbyhQWcSXkJrFimUbYVTan59QqT1YYiivWgeP",
  "key7": "3JdQNS1SrUo1VzoK3purM686zHsuyZWLG7GgPA9PWn96ALTgknP2Mj1MniXywPP2FzUw9UnAJ4j3oVHszctoyKw5",
  "key8": "4vykch7syoV27RAfXjGJjsEnaviK2eL1mR5pyM1J1A1E1UwrbMXPVXsRTD3qZyHqm73Ev9w7AUdDMSJ5Uga44cj6",
  "key9": "3NPtps93GrrqTdEARsDZTuobEnbJLnP67HSPQcZ1ggqpuGCuCDQfbQBEBSw5TnCbNB16FqPVT58AVyxscqpq9261",
  "key10": "2Bx33jhCbQn8Em6F2SgZdKh4vuApkh2bijSAoFvv4S5X55uWY1qgJu2BjsQHEjozeKPmth5i4YtsVVFH9RBXqXR8",
  "key11": "2yactbC1Ru2E3QTXuLVF27JTEtkHvqtmJaYnsKQqbSRwrwXMWoTRWyjaQtPBxaN5qsormNiCEB8TFeHaQq3N5fsp",
  "key12": "2C4nQL1UdeKpzvLgcuq93SdwaKtVgCg6bo6TxAPtGPUkKMZuDxhcESCkcq21npvNbZFK4u45FD8JZZA5VtMnERcY",
  "key13": "hWndABf25nVW9wzQzL4QRL45rE7pK7nNyZ6Z8Jm9iBxyQZLPUha9jbqSfGfR63BZTNtozFEHoPdejXxyiJXS58H",
  "key14": "3RE74wt2kcZaYAUuHrr1FDSgsmpgXLyJTSQkqW56CZJ4GVF6Vqfyk46jFxFE7UQg8GHpp3wqoobRmcioqQMGQoa9",
  "key15": "5hDBdeosWU2WBRt3ihJ92ASZTf2PQ4uaB6wyAjvFo8Mb9f4f3UFkK5V8G8HGLrfDY1nw4ev94seP4Rtw9KsLBFs",
  "key16": "4YcFaLmPTmtqo6w9gmtKZGAshfqQm7yohreFtGYEtZGEMSxC4RqcQdCg6sCVjjAAF8LNnDnSqcMfmpybbTxQUoS1",
  "key17": "5A896LBBqorVzvjfLE5Wi8mDytgFYAspUd7QtnVEn1fQzrzSBX62t5mkvwgxcS3HYVHHxqU7yL9cWHyc7z9cNggn",
  "key18": "418XcEjMCSqSpti8if5eug2qDqMB26dunyiGEZUFgJNSBr5dPdrShvXDn6j1zFRY6mXEoNKHiGd5mRnjqf8bYWAR",
  "key19": "2gPckqbVtHzGe6sM135sHLAZxtnNY4eZe35Pi6aTkfWarZHhnV5pqG6pe8VSPyBp2G3vHqadNssTt86EsW4jhyAQ",
  "key20": "32PpQGckbZjcVZ2pWNoNzFByiUPMzE88WJEzsUstPPV8dTrgRvsRQd2BZYxup5bQGQf24kaaC1gWtFEyGwUGLGr6",
  "key21": "5Jf8R1UqTG6jQpihgF2pcxcBgLMe4megZVzehwo1JmgyXFs3k8xuuGF5aeAs1FPDYPq72wFDRw2fyeNUUKS4QtNJ",
  "key22": "5sMXcGbeACz7o21UM1yvMg8nJu4QyxYHdvX25ABWJnoehvY8GwrErwK9qsksSXvrPbFLRDkmPYDWrWE2Y55e6Cgd",
  "key23": "2Hiq5jBGsAkhJu8praGWXGMgUKDuJBdtu6QZKNdQK8nMXQSqkL6ncFkUKpKkSFP229ntvUtRBWbgMogw58aYTiQk",
  "key24": "3C8b3mMkKiAZKWDSpGCwD71zVYEBVcr7EuBHRHAjvNZKFCSXvkpkdFUDARvmviUd2XnswgD3ZZDyhfZEEesqFnDb",
  "key25": "4g5pUVnAwvmXtXwjkBiHKJfiEJTYzY9bqRHo4m1vBoAkR3Em717reF5BjEwMrERgv4GLNPbZ1ghPBQpKZxT5PRnY",
  "key26": "hX7R6xKXgfZYMrDRbGYT7KuRZ4weyQVfcwPGyxdVRnaTpnLkdUKb6whqTygmVCwSxmo4a1Jqjv9qTzUD572Tpw4",
  "key27": "5gzbvFC457V3iCoospSAdPoET4tYNVMdoaDS2hzPzXymGJc4jcnm5fjNQovaRC1oAjX9crgf1iF3Die3oaaGXZ66",
  "key28": "4Lpc2iDLfsLQFDfu3QPnbcesQqTYFxSWVDSbyZFbyMLLjx7nkyo8bnvfHpckPsEqkv5gn5QEo86o82w4ESS2NLhk",
  "key29": "3wKsFH3VNnDmSDhdZSFSKwChbksid3JcB6swuZMJjBTW42ZDpfgcbudtGWgKHtvMf2MEo1tt39rC2XhYfd5QizwP",
  "key30": "4od2Xe3r63cV7qCyvT7ys7m5CcjA23bHpZUYfyYpyuw7KMLYtdyCybKRdsmT6t7GxmQAF8btdMUMFbo2jtTY5pfg",
  "key31": "s3ebfuS7pQjPqVrD1MS1BvMM9kPK1qxbHQtSSjp74AyFV5z8pQGBc7fh2bneWEvFt18fnWD5MWMoi2Cv5c99LQC",
  "key32": "2aFFaSJUVyNDGQnFpyu1Vf6cpjUACuky5m53wT7NpeCW5ewUnxtvskfgDXCf6yLBB9miAegjN1Haoa2ruTJXSnmj",
  "key33": "esEK8Pon3p3qLB7mA5irujAk6oxZHLQL4YfazKDPDezjknvy3Qsu98UbPsPdD7fzhD5TrnnnTkv55Zvg4sYoxsW",
  "key34": "5b1GcgXvMyVXBWLqRVcs1FSEh3pgVFEExmcDp7XmfdPat3nTZuZtt4QkHZp6RDND7jtrNKp1wdHqDS4zCnqF6c8f",
  "key35": "5TK6ZnokoVFGnKuyPMqM7zooxkwqXE7PVCWMfhXtDiaRcJA3u6aWDAPYKhTpd2Dx5z1rs54jRpbGgFgvwDR783eH",
  "key36": "4rt5uu2uTQYdP3A2pMo93RsKSrWN3LtuGw6wokBMSqceHgc4jWaUtmWdW8Rs1uchT2DWijENXY2HjV978Ku7Hmk1",
  "key37": "3k9T4s8vkr4tEEnKt86s99dKw6UWnq7R3UE7kvZcQebDNSGZzvajPy7YvckGLdvJwRDGsgEpbxi2xXL8zoYLokbU",
  "key38": "5aEATKv992UEdmWtNRhTsjMBgDrJm7EjdiLEDGYqpQmtFjjDQC52DT1XJcW9qxLbKMXw5KPwb5pqzZiVPJ2yWEXs",
  "key39": "398iGhXRA3LWyKBKu3FN8jaz8x6Jyu1SesKio29rPkoEcQGUZNohGFQq2KQNjRvrPtwTWYzdKpGRuWSo3nFH8MPn",
  "key40": "4HG616BKUEhz17jHx4MLxxt9LHRfyqeAj2ZzEay1uHxbowKC7j2r8FrHPG74ie1DQ96YSMXaM3bes8JWywfbM5r6",
  "key41": "2PUM85JccwRfAAQ3Cy89h4BAgeQbqdZCgpgYSFE6JcmJ2CzTgfTQJTKNQmYY7DpLbi8WRbH1tr9pZ3yKeGsFaMNx",
  "key42": "62LEtGKgondDzrxj7bBf3Ey74LdkBhRy6V947CrmydCmfaK2DzvyX9k1iSKCZvxNyPzFvAM21Pjq1i7vGhjsWAbf",
  "key43": "5uVv1k8ncE8nwrWTTpnLaGRQmejT8rV3z5RPSGAmFPksKnfH9aJpqGZex6a3zxJWmLZMMm8h4NPWj8P8uxZ5CCG1"
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
