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
    "2H1WmYj25JZacRLXWsZBaxseDrwS7s3MLmnCzhWhWD72JEWYYEqXNFaqU9kjcj2dF64ea1rZ46BeweNw76uC5Yoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMK2dcaojJ5zhqJVAzMcnjGWtSkfUmrb4KMwUWGzRZ1PEDNrUVisC7H7QQTGgQfSGm2uWGVt2vnyRY5s6uQKTDF",
  "key1": "xCMU83YE1Hh2fjZKxxFwtpfEj45LDfwEny94KUWq88a1QCxSafw6itd4qqYKuzsoF8RwVb2gxeBBs7VrMZKAXSD",
  "key2": "4fhDETNP3XeRVCsNjXeB8QJQTKX5cDbjcmQNhhCkPbAdpa3FwiXbWJDEYZg5seUETtVDGMatVSTMdqttVhh51w8V",
  "key3": "5wueZAeR3XK8QRuX2eeehbwEdcNfUtmMPhKAW7nTtsC5ZzCjxYz8RAGPaZYrTAH4C3JpwMU4Yu1XQhd4cfRsVwov",
  "key4": "3v53SqMdkDvcy1Sb288SThq6RSghTUJPBNRXuPmj487dc133YJXJGZUVcWaVFTdASPVDnnNUEKUySZJiUTuhwVFq",
  "key5": "21Kcryh42e3JE4JnDR29z6LJtjrXUnj4uXKZ74hGsimUbav3gtrGrnLjqxrcKq3VmaozqzUAstNrcL7vrtC4sX5s",
  "key6": "3rzWAnegEZiY9D3nxFrdRbAVFk8XnzAn1w4eS7GSazPHeGKoqfDVzJqHDFBxUNvfDwcxL9Dsc539ejWvRVC4nhrj",
  "key7": "2WDZsCTBz9kbwXtPchYbYkDBaThEcp9LFQ292EPqm9YL2ZZQsZJbaPgB3k24zb4UjLGDveoYDLJV9e3iDm5nw4Jy",
  "key8": "Ua9razpcyo5bm9ekdFXRMkZJT9MnmXr1g2r8z2tZFrkmtoBuB57DsNVQkUv7V7bRna61phZvWJXVkUPinCQVdnG",
  "key9": "5AyngQdMAxSApJE4wDQfwDQRN4JZDEnfqfdmXtpo2af87bZyzwPuxRFtxcFmfc3T83AqCfXyd4eiSwRVtkiv2k6z",
  "key10": "41BnizzXRxaNcsj32uMK7VXmUbJHmEQKkrKUqG1jcLhqmcsn1suvM2RhSwQbXCPhBPd7X6Fzrtoa8rF4idV595kU",
  "key11": "61Pz63QLHzQ8z7XsL35S6Lxnf665GmbRDAJN9qKwthdECQnXw8JH4tQTV4vfjCZs55nnvaDLguPapujBHgAy17Az",
  "key12": "5gJRWRFFrvS6k5GYVnwXakCbYnhT4rBoVThNoDkBfU5aZ2V97BJ9hMPCQD4qYaWG6C3GeUKMvRZ4f6DPru5jvgjN",
  "key13": "bLgT3NERG8XfQ3DfGscYdnY19ne7m8qGZV4QNVsoazCE8yuWdQTMoLh56T16EnycZQTJcE4Ysiw3v1i7AHUWeDM",
  "key14": "L6UCyA9b2RK7dajP8EzpAsu9yJCT9JvV3kYrpaCB6GLgKn1NoaWzMNfCR6KwJLLPHEYqNtuFFTKspSS21bMrL9c",
  "key15": "41KvWqb75Nh2RudgLmFHCC7qdjPvVcat6SosFA9EJADJQMXeyHa2NovJcxCL1bZM4rt5uyMEoC39hgeTAcX9EFmW",
  "key16": "47iDGsSWsB9DK6rg7uj8LHC5647BgnuiqZJZnmQ85He7n7H2m3JyDya1FidfPq9B5FiajWzfP9WdUiHiVYSvbC3F",
  "key17": "3mBUVREGjfVaqD4acAhPurQAGRfQS61QPvNdEm2oc1uUT9rYZDEr7MCdeNmGZftptFW2NUbUCuGEUJBPXGLhR3N",
  "key18": "3G2wtPmBG6EyRCE9sKRFtvPGEeyL9idUnirxPeLRreLEDFGyyvKoqHdRufcBiz8BaCM1nBf2D4KyBu3FcWW1iEcA",
  "key19": "2bH3dA9RYLgttsNGVi7Xo2zu9wmmXeSMFVxzfGT16VUF7NsMHEev71hsudLtA768JvAy3zSJFJss77472G2SigNq",
  "key20": "2XvihLsZ1BJpuZJLiXEikCjktpa5qdANUExycVf82uBFeAQ8hjVAv1pbdGEW9fYabDqoZqn1fJsSynRV3ozcAdyz",
  "key21": "4yunSd3PihWX6vorrSUiFWBi4wQBne6eSA7bnKBqxc2eS21ry7DHmosmWjSHcWTAbm3g5mWY7tdjSHnmjvCwUuCb",
  "key22": "2ktsmqiahiJoJY8uBN4oTpCCDdGSZZrts58eS9rrPpUXpkovWrHdSXJ7KupmdHq9qN5yxCcWDieWDHuoLTgVt4jz",
  "key23": "FNW7exooDmMqkM32WhdkUyJ8rH1U2ZSAdVUVXLpyW7yUX4L2XXuVugAZ8RSW6mgKnauubUhcRHbeYF6xXny4KZL",
  "key24": "7gkA3BWdvWD6yforx87CzqnfTL7qwfrcjnua6kxzNzCarfnXSpAE8XqPoqfx1phi8nuzSMm9wUMkdHLZ6borKRq",
  "key25": "5eLDVhKnRBqTiWnWRCPwRovf8yh4cVfFzL1UZaNgRnGCmvWxJBsfJrncw1xACzsEV9bQECbw6r3D9te7ZNpMw2EY",
  "key26": "4xoBVZ43DL1HZZjRmp5fVEWDJGyoqsP7yVEdauhanAQkJtn6tZbKX6txp4D45ht5HARaPNR73c5qYdkCFtcts5KL",
  "key27": "YQtcJ8iV9c2Mu5RwQvpG6e5uLqiPUcDhK9JDFUA9sbv5mUL581LezE3jeE1kjYfJsDifL2M55ZveF7BcbYJezmt",
  "key28": "2Fw4oAavUY9R683dAF3NdRik9srrLxE1pXsogrWg1B2zGwhrz65ft5pdZZdkHketB6b8Y3cs23Q6BWiMMrthEuD3",
  "key29": "5cky4hFELyuFap8M8TNqNDt5u6XGsHPBMB5gmR4sWTtkasDMB3QX5USiWo8zh65cCzrw3pS5WTHJ9CDwX9vpE1XX",
  "key30": "3uWdaLpdXm4hg4d5bbz6d2GSgihqGuZh8xG5SrBTPkTAp1y4iVoPSxt2uMzPaWxmg9q9XUqUnJJUr3HBov8DAJXG",
  "key31": "42NpFSHN1VK7xtXWRX31qutB9zWFZayyCERfATm6Du1Sza26D8A82tfszvX489GwTRBHtJtVBxVK4mKoRuCqFULZ",
  "key32": "42LKLqEf93teLbxBAFUnj8TqwVCb3m1JKsbXYLFfYYwHKFUL4sPV9ANdW6cxHBFdfvXHso1Cr141guAoBPdjNRmc",
  "key33": "2siWWpBGezmSUKKNnXPJxSnRSSqAGdKS1HYm1D4EDbh3sueh3EXrF6iTuk7HLCb2wFsZnNXpXwc2u8oUhzzfEZSk",
  "key34": "4UABQutxmHY9RMYKs9SumpuPcinqFxvRQZMYQ6YZWrj3hMB8RvpsqsQMg63XJwm6P3ijZ7yR9hAf1Gqy5vkbF9s",
  "key35": "25AmjJMeuwJ8eEL68CStdWLoVFcon9GdEk8HEEn8CkoHvnDn182HxByk9s4nBWjnVtzSuNoWVvVUHMQxdvbFacwV",
  "key36": "2NB56fq6ymbSJqCwqZ3U8LE9AbmryTrYB3JXnXk4A2Qe13v8czXeDDZ8pLyWQVTeqCAZs34J8jHXMgQmfikYCkKS",
  "key37": "5E6gPhkTVFQeDGHJG9qFi1aZ2TCEp8wwVGkHuKUM8b7P6aKUdQ4cSm3kWq8SZrjtcTbhUdV5tVHZHXdBucuu5Wqn"
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
