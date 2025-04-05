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
    "327UuMQoqG1sPUnP77NAAhp8dyuqTqqBmC9yFH4e9a9eACefpXSQiRczxYt9ZWdgqNRkKw9sYmLYJnAHj5NjNhsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R7kfZthVFDRUvPsvWSxSUhHtNa3TCR4Zrtrrq6rxWVKQsC5gU43unmiFrccLc2TGrmhZ7pzkgNhQN1ed82jDk7F",
  "key1": "5f21V5fBmi9QNFq8yrtE4i1924fiCxvBvjvho9RbW2ZaTBYSX76XTNbB3rWs8gHamkVyAfxKYtAXrnsZVBgRPQL7",
  "key2": "4fv3wFqJyrjfg6nYjaTtyHXDBzr5WkAKmkTh8ks4A7gepYogrbvGBLVbGMNPrt2nu7uXavBpVNLQ8utt2wjjcumd",
  "key3": "3s3z1LBNYRQoMe4ofSKdNnQeAWekvd27A1dcepwUJMxf9jSkqwkqBS1AM7mxqPy6bQHWZpoodPNzVvrSHDeWWqwa",
  "key4": "5Pc3UxgHanoDapYiC9CsqQFDcNsyGaS6Zso95awSnmK375KAbWZhkm4diRFq5fSuo6H4PsZXXPgDQF9uQpjVYmrx",
  "key5": "TL8RAPhjihx3zP2cZNDhd3hn9ZL6294JS2AcYa8ooKDUqCP6b3FHeatC6jQaz63D4HMdAziQKnAyrHkU5hz8SdS",
  "key6": "2jrRB8fcYPsH3HJR4uaUC8yM8CsGmkUYnbrz6mr8imdzf941gJkzSCT13S3LWB53bUDKpUxggA1iGWGhVcSSgCZ9",
  "key7": "3i1Pr6Vqm7TYesw3KhoeZERdqVUuEX2G5UXywC69V7h9LoHQ8xo7BVnqb8s4sM7BRY5RjLjn43QgFWbLP7gEnsU",
  "key8": "2apxfaULfnGaxRy5JrT7DykiHyMeURuGBTR53rXq2VDW9P763MJFZ8vsmW2JXUmKmj9z1ob9KqUgbm8Ea6jhjNyG",
  "key9": "5L7CRhsnicAwkBJnW97F5TuLpJyKUkEUNDumV4pa62eMxqmU1oN3KPw2rBL8KBsQ2ZRrK3BWvFqx98Ak4U2WoVhy",
  "key10": "5dx1Eatx4uRu3sJ9jGy8meCc3WZx1dgdWe9E4BjcZzQM8qaJ6Djm9Y6291J3t8AXTkPyufygnyg2pDkgkDSRxTKY",
  "key11": "5frsyTVQCQq6Dz3AkvEAWzzkbCrGo2pTpr6mVPwCtcW9rad1aHchJ8YvoDfhrvpQxvj7eTg7K3xPJL4j88fnTcUE",
  "key12": "3uGXnrhGy3jxb6Xzv8ba8DyXmzY6sHmBkLrYY9cQBKZufDr1qNSbk13QtQCg3WUuAKnkC3p5inu5EHdaEWW8Nb1S",
  "key13": "2pMVDVbzm2c6jMtC4xtZ1MMSWyJVQPcUZF9Up8RYnZuwxvXpkM5Qn2oEfuTUMShhFcKJnXX11J4bVyXQy7GxuaYD",
  "key14": "2yPBfC3i3qUQYzxDXBz7WuyfggCq9K79o2NKU6rZQ16iLYBbEGVxQBRkspTmRfoeZUaxcj7X9hyw9iuG7DvhrH5D",
  "key15": "4txYVja8dpxcxMseuesuh8SabaKXqJ4LfimpF6EhjMFrpF7y45QVy2bDEEohngjQR6d9z8BAVhRxhCYMdW8LktbX",
  "key16": "2QsR6fAhwXvdQtrTPSXBGphxjpmastshqDTnHEC3ZTih5k4egfq6JUPnUqQVJPwA1Yp3NrjQS9remBgUaVPxi5nM",
  "key17": "3fqgZwemt7fiZLHMbiJSZoFceTUhwDazKioUYqVY48cpfdLjp12zHWRGi9zto4QDMuQLPLx39gbyQCo58sexRgA9",
  "key18": "5NrhiyPiEumwSin7bGK9AYTA6iKuzvEfafX8VaDZiU4jAwGBmRbGxFNHGanYSPJoowazreuSsWoN69KUv6FcU1cv",
  "key19": "5Mm62CCSdFVw9kv5PEMqRqxWam28yyd19aa1gjjJuKwoxopiEw4czterhco8i6rxULaMyFdfRS5wtfF3LjRL4s2r",
  "key20": "AgA6Hgy1MHC9tgqtj5UxUSPbJ8t3Vov9Mnc217mgvd355D7JTfokKmqcVcVTTM15JzMGCJhMqMRgUYeYaTFaDPd",
  "key21": "2XDqx8FiTX9eehQLskWFjNjb9a6GL896XMFoW2BnwM8Ss6NeLZvx9Jh94umoAcbQC9aeGJjZBc9irw8VMiC3PHx",
  "key22": "TC2HM3XJbKtYLmRUHtsTVqmFZLB2h1pBdAwi8E2LFfjhSuPan9SPsixsCox41oUsK1qJ2MPvpgPRYAKn3Zh3koV",
  "key23": "2uWL6fyx1WeBJ1LryVfPxiiTSVoW9x2HSFasbbTM2HazdvyLZsCdrWMgaeYP4XTFqVDqViQEGkf5btetoGhHs2ks",
  "key24": "NBW4mCtVV6Dg45XRNxRyhSqmp8X294bH7jcWqvZVMVibJ9UxQ2QmQ7nKCiP7jpgu3E9Lv1eSEPGZ77apVhyqZ68",
  "key25": "3F4td3AC9zsKoAZEW4YssujM8fao2rXKduaksoRWojAAdyQapdBnVvMaFhfg5Tq3EKSHJhpNRqwVaPVSAwYYgYUx",
  "key26": "2DgNG6mrFoaEcBuf3XZZoUPHsuaPj6QU1D7FndzFCZQQBRcsBHtpyUGPrxc6CLmADEpofMrqbLtim4ef1XxDtdfg",
  "key27": "3cHkpkifxPcztDL2D2u1gWjtLtUCDZZWGXJHkDf1upkYvbgnCN5KCqV1MG1Bk7wtsqiLERpHHzzZAW1ipR3RFiuH",
  "key28": "3x25AzPPuAsrydoXQT99m5cH8uu5MqVSRw84moQtwGMAnZXnr2ZbRJK6qWPB9jFemjpkd99mw5XWFmDfxPBagQSj",
  "key29": "4Zn13s1acUcafwEJ3KwuaKQ3vCQoY2vgade7DxrBhzWJit4Fp5cwgdBAduXN5PJq31w9aJem7ycVPUE6SftznP8R",
  "key30": "32pbC2VGr94CcUrotJTMwyoTcezwR4TnfLVSa1X8GXv8QNdEX7wBai3z338DYEmLv25vyTfL5zxiUMp5PpnnPadT",
  "key31": "UTs3tLN6YNwrYYDHHkQrLHHrKLgPmTKHCTvkptLRYyzRzsVTTGAJKjZ9MEE9PEPtzSFBYAHnqFJf7uGxneAZetA",
  "key32": "4b2RbgvR3f7ckianouaiwBpZYyxvipjNoStx2WTViPLutsJS7WfPUtnjRLxLN1rRmJWcsjfsmUBQhMiVwRJq8uCt",
  "key33": "2yqQDaJTE7z3TmAA6vbr17ri7qLpcKUcFiqSqYJRoRPZoycX5uvFkLegWphffVRk2Rd3iwJAS5BqnZQJvX7poH7e",
  "key34": "67WC6hmrFtDvR5hvt7epbfEsLbqViT43LMzgA3Ngm5fi3Vgj3pnGNUk5JqSMovdq6djnH2bswq7YmQLe5MpyNuPW",
  "key35": "AqFExmrT2hNpuU1MmzY43yfpE4YfxyNuEfHpWpFvtn8Z5burrCfpUnW7TDxfkUye6FRQwvmEzchemJRjbXdQAnd",
  "key36": "5XtgECcFLbN2NNaL2JSkRyPbfACMjiZnsueLVqsZr9SsiPq1w5HpEownDadJs9bSiBbERac8c4Efj4rAQZLCJCrq",
  "key37": "G18Vvko8Pot34X4da5WAL8qG5cmZXS7HbiPJ7SEn5nRi18BqRaEdh9R5d3u1Wxxodg1nuYcQ1xBRYwaUXUfdFUi",
  "key38": "2DjmNBsRZ1uzEECKJwJ6nrESPXdBPyWMSPyfARibJjgU1tq3fSvb3LPruCH2kKLeUrhdT954n2DnAeokaaKYCQcz",
  "key39": "5p7ETFa2AD8fnZB3yL5ptiQXv3ebyDK2yj1DtofN6PLvYRJaUf2Tp7bTJ6PYBM9A5f5vKFhJAHwkKPt5G1FJ6s6L",
  "key40": "ccy7saZhrYgMyrtvciMWwwDYQdbWgnNPas4LXQS241wjVKAg2kS2LjVqfu3xLKMUmrHS9h4YYMsZj7oHhnNfVLj",
  "key41": "3syq9GuBL2FBXYCgNSZhZLjApNoJt5gukTpTf3qNnQJqAfs24BbAWGusG4j4abSHSK39UvgqrMPcepguGvpFn2Zt",
  "key42": "35kiWXfWsUbNAkPKtRBms2XR8HD5UmPtmx9ShLCFnYWb8j4YnpS4dn5EJTngx8Zhxygm4K44t4C4TzQcPw16urVU",
  "key43": "355Tg4q6iPvNTRGTD9x2oQ4UgxQv4YBacVx2Cvobri9DYg5jLzdmFE1cmeogz2EdotbxndrVnG3BrEiyePFWakip"
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
