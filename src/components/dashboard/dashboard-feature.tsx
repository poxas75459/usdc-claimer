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
    "x1YsQkGFdbHbdoNS7b2CaRkSqhEmjjNXv5BKspm2NESgkLFB3d3vtooqgsECqruMwPXPDyfFbmfmYpTK3tfjVV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xg3NNuykpNgWZQM4iEedwPPRDqPzLfbjokDg7EQKRnXydkv2ks4Z1er46RuMqQS4Y93aoBYPvuPjc82mP8PQb8j",
  "key1": "35fXg9y2B4UWqauSeRpDzcvb2C49kuaGkEEWtoDXnYNEJWb71icBpCLkt7ppY4cjCKLVCg9jBT8wYDJ9GYE3nWRt",
  "key2": "5KktawySdX8A576qAsHDMF71CVQpBJv9ED1uuuEMmrTPZhv4P8gT1LjpSHzULseX1GZRJBy4ZE7SKNdyNr7LPgDX",
  "key3": "2ZpheFBys1u3eZq5NdvQzkC7XeLWfY1htx6sKB3TkWxDHH2Cr7QyPTovsyRCrckdko5sjDELCQw4GybgFEQ1r3FU",
  "key4": "3LwGjKLPTzCnJoWUcq4bUqMxfqjdBGXBcTeohYitSJ8bYoq1PxQ2psZeNKQLa8eN13ANYGiu8dBn5aq3FZ75m5vf",
  "key5": "2Cp28VWMYZgYgQXFNEM2GNR2egLgBgDCWC6PyiwdHZ4imfcqeyz8XNW7xbQSM8pNH7dtEm57AvS7fNNP3Mj5LfW7",
  "key6": "vccbSNFFj9NV3NTgz7kvMJPrq9uznmeELHmRrVcgS3Vy9g8GPvQFp2rSfg9XDpZ33yRa6Z9GrKFMQQEtgm2AZtk",
  "key7": "29VKzPyHcYjVb88SNhaNo5dPMB6jLEfcxq3vQdFnw2FhVkzrXMLyh9QAGgJAYhV8WrJ9UV2ZJx9rk34BYobuRzkN",
  "key8": "VpZBWuQd5En59BQreD66ms88D5Sfytd87kywULeWUgUCTdGr2pDPhAxXkLNNzMyR5aUtjYGYJ44fdbYaPxpmsoF",
  "key9": "2weP9nTB6djULBoCDyQ1z7WdWJ3yKd4A6EQ2ZTCm4UWZvmYyz33PNZcSv21pj9GSrLCKYxCQBrytaskNoZokQFMr",
  "key10": "57zPhvgFyjWMfp4K71FtwC2ZwWeBJZY61z2XwgZS9sW1QPh6GmRhz8PsYqbx58HJ5LrjRaogk1iTZsx2VvQjVXPu",
  "key11": "2soupjK1yf1Nd5cd1yK9baWDVkJ8KRTc1ovKGCHKejtCd2UJmYccmMzM9RzbXQCCopbPjVC73HRHKf8v8kLN8Awq",
  "key12": "5FXcmcoqC5Y52WiCLvCKnL4RsvrD1sPPbYgG7kJrfxySUDBPiYgXQVVXQ3MvouJsnw8fACbdC1giPKzhWCSVjoEn",
  "key13": "5cZkML9nitXpQcqHC5HBRQJMBWyUWAvF5KGJ5ZmQrVJt9C9TxA1t2cwtzNKrhr9ss8kuND43ZgbPUj4BrTwEh2Sy",
  "key14": "5DRwB3ohoVntj4sTbHgevgXHnA8trqfftC2qeDK4ekavan2va2pDf18RXWgfKX9weg1ZaStFgT5bGUgzGtVUodmk",
  "key15": "3Ni6uboa7xg52f7BSj3GCV6RF2VCftqjMxgB6Ahpt2pVu2ovQEguzPENjLQkfpF6pi9iUPDrCd95BqjowBZeaWpe",
  "key16": "4JFZsKzDzwoUCKTUDnebKxbTV6pW8JttKkzKk3fQ56ZWCFqv5WuTRY71DAQ9UQakfPiXTvVxDaGas5gLwvkTiQ95",
  "key17": "ZctsZamUrYrCQRFHm5TAh649JktyMGQ4CdjC5k3G1svaU7AxuS94Zo1KKniY9WNKjKEnyc7iLEDh3kQosVDLyEQ",
  "key18": "5aM5jkbb6Hs9KwEqyGp3UprugzPwu1xm1WR9mvSX2zuoM4BkzoRePEnESQudgCu16GkGJZDY7YPYdAVS5Wdz1ivy",
  "key19": "CehgUskXL5PdHQuV7vQd1PyTAVnpUCd2jUiMPcEuH1pR7VhEEyuAtFBsxpCQqjkPVFHDCfHyXFEVdpzboNrnCdR",
  "key20": "aonn6H1jq3vxDrcyEEXUWPiwDBxrW59dArfFiuyURF1bf7rvUP5ze4a77CrdhvAzhuLsKvzftd5ab5d8JNiSHLB",
  "key21": "wM5M16gumRdcLZ25juiBYefv8HiixNrvcn7HaXNRtQEwbbB7i8W5PWLMVKu6owpzMkd8xb3nKb8HsAT59N38Fex",
  "key22": "2B8wQ1sxtb7rMyhuQ8WCy2wsMTTyidgV2nk22bygsb9NBexpWvwLW2ESqUpnyL3FTm9fwuMWzqvKwCySyMxgaF47",
  "key23": "42svSyhQxLQ38iMStnSs4yBpFtzWDWH8vQo4vmwgRoN4FBdjszUCQYMhZheokyZXWsrCMFyQ6FLjvD2vFfDBGKGQ",
  "key24": "2TKfRTPETwhfNfGbiyCPTaGuJXH3CSSHvwo2uBcEdEft6sujoi1xXr61mYDEa8Z7EMZhmoRbu3mMWWR4ZrpM4FZK",
  "key25": "579gZPvRytJePsMMw7XiJVEB6tMQg2d9SQUnwF2D9RjMfYustxvyTT5R4GXApTvxKAbHmdqpFpzNAcNST9GT3wMS",
  "key26": "2crkbhNqnZv3tYyg5G4g5daTAzunHUiqbZoM44Nr73iaL1AbbKf2TF412R23kzp7mDqf7F3k2fKaMnSE63QsU7hD",
  "key27": "5hGhTgES1M1xPzcg1LDG2FVnFjdoR8zgNB1E1pS5EYo2LwS8cm7aGPhsiDhQjbKh58Fd1252w68466Fi51uSEytr",
  "key28": "4FiUqYrNz2x9Qb3PE3mp8tybqHeLgribxKvoPX9XixKPagMRPKDd3PvqErjwsxRxy3AJxTchjvhTLLm4tXz25zSV",
  "key29": "sB75d1VF7RqnWxMeHsxuXypyjVGhnaQ1HFt2rcdjfi5WjpfKndCw2y8eLXeVmAQtFqaw2TRUP9pjXLSogzE5RQK",
  "key30": "4xcrKcKatb5ddovpKevyDGMHJtLsLdY9uQFNqeWghwjsW473zpxrrPynBmNAXh44vS8V3SYTX276qXXajxFHACRK",
  "key31": "2rUitexvBrgBymdLLqS6LEeYoW11db3pbLqoiTGgxg32CfNqEGcpjVXVT44s4zc166z2EZiWt7s8z4p2TzwnC1TZ",
  "key32": "4SMRuNfuLQ5aBePKpXfru3oJjBJeEojmhVysWDYJ13hFT1uiq9AKQTP2gUVN2du8uhVneSLxBeYVWkFuXfGwyxCZ",
  "key33": "5XCcVEPHoxhVShASaeNWmgj39U3iQ5Y1rboAAJ3eiMB62CWrojVsitN6MEKFYk1gpL5BpJt3pqNZHDwBD3F7RaRj",
  "key34": "qUS6b1HR6ASnicgxS6cCfXEk1Skt6mBKEDSvHZQoKrADGfHgnvY3TtzvFygzsh1LmyEfthfd7chKMKQUxpuoesb",
  "key35": "2axficqaVq2vFaATHVmdF1PnRduocF3vLuJLtLRKnUkchdSH3ocJGbRsENpPwwuoroP3zgNobPaPgaLx2HZe1jMq",
  "key36": "4aD2wUm72Ej31yfWHmGqY2qPFY45VPpV3zc2jjZgTeUREZCy2xAVpoSiiU3AB6HYULrSfZknR1Gio5bfMLwghz9Z",
  "key37": "3skSqn62AY3y49Bxa92Ga6g7cZhzmyxNa5voZBhU8Zx6JV2Ux372R7uGT2X1tGQtVWwCgf35StpKmi8AT27tk9gg",
  "key38": "2ZpR5fDztxoxLtLRq3K7kSF4Mh9msjqCveT5VPhuyWCjdqetTa5m12zAGdvJCuC4x5VK1YSYjc8JShiZcRrQvGpE",
  "key39": "2vzZNeuZ18mgx1DUfauzRLc5PpAQVV59bDfQZHFvJGm6emCHUQxxefVrL3MEMeHaf57U6QUaEF8JCQwBUZjUHr8e",
  "key40": "2qWPPnwgSU1B4kSwiNAijnG5HgyLkX9ZVJ3PnbJs9AE7FwY3KJ6rbyeMGXXfCrffdGPXjVpZayHjQyxej5D5fYfz",
  "key41": "62bQwAGXEGPinuhbNuMoD7vsaAJYu8NWBQ4TSgmTzhFYZu9zWLLckhnzpFQEgRfd3tz5DfTaSsAR3jSUNd7V2yr"
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
