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
    "2GBsk9vjKC2qZqz9uVkX71Er2MUPDwnKZAqqABBELcFELceMPQafMKQrwEKmiJAcx5svrKHZwDycjfhZyWmTZfrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFT6EaBM7ZUd7ieExPiRp8aCA85L139rN8CpuQNXVpY9gRZJQr7RGcwmcwFii4SjNRrfmzzoHKVzUMEveBNweP2",
  "key1": "3Vc8m1hFRVT5yp3v1eyHtoMUUHFQkjvedFkBkjNEVpccB3mbC6yftP4fM1gPpAskATEazfdKQbVjpUUr2e4wc6Ep",
  "key2": "2o86JUzRKETDrs9anMTP1q7Shm8apJKeTuc9TZ2QRqmQPqbqXfYDk2ZSKBdEAkywzut4puMqdeLGtjNx8ifgMkuY",
  "key3": "5NY8MPuJ7xLVxnb9qUAb7FLEQrCpP8ouwJR2Lm5d7sz3ZuL9poocuRbtdsCsYSZJ6vdpuAuYQbTGsX9F1ARGSzMG",
  "key4": "2jf3A9ejNXHiepBcR777zrL6tq3KQ6H552x3XwvRig4RDNyYtVzjohkf1RP9ZruGa3uZzZ9DFVSm2UxJ7RPR1pCs",
  "key5": "2WpCqCG8A2WnuQrnCbWhNpyHpj8R8kCLrax9CPgf9M1HPv4kB7gewnJx5YjKNz19NW73i9UCgzP2KGzh48BYyXov",
  "key6": "5PtgcUSJu4qXez8uzrdCKnVyeY9Vza75Ra9n1Wk1BTyj9BdQ7UeqFNS3HPjPfxBxHcPDTMshPDMHQzNMKTiHqSYL",
  "key7": "2QBN9aNGu8GKR7vuoA1uai8b8PeDTR9XjgT44AtcKTrGSz8BXwm8i6LRwNwpLe7AVB87LBR3fE7UNbHPRE5tNyoG",
  "key8": "39SJqXxQ6FeNrN1QCegF3p7JfRmrpyKYiDj1yB89nFiEPEqamadeFf9F4m5Cu4yYsYMARkU6vEyiqDNpNYw55Vpx",
  "key9": "5tmM6YhuHScJNJWP9ZJ8CVFEZ8MDVXTva34E9PgfTRfDBx8UBrvAkTMURte2DTSiVqVpADyMyQvr1kTbqUzbLyAm",
  "key10": "3JTnurMa7SukL7AUiG8gBqcb959iLArGpYAZPhZ5NaH8UdJAULZz6fnWWVJe8N5neRtxHeKQi4rfHbnBSwLKDG9h",
  "key11": "5iM7QTHPwKMHCPbToxRFjeTsKhEQhFHEzMXr9MoVwLgnB7GGaeFJAkr2BEipnbCug31uU33VPTtscibKy7V6jJaQ",
  "key12": "7H1Cf9roGx1oznRyLLyuva7HmkAnscymUZ6HxFXDFRptLvRuGKwH9Vst9HBcPQx8JfRAru8XiSj56EPLMszWh7Y",
  "key13": "33v7b8qPiR994WXmVYZuUaCS2oo6bPeZPzZrYNumYi4oiBie82P2VdUtoTtRsMo3LtuqNVfa3K3ndJSYjoF8xw5Z",
  "key14": "34wCbnoQNAkxhgkduEHjbxrRcG2EaP4Udw4VeNACJRi6TwyvprTvpc3CrUajB9yGZ4sayfEtJLSfVtTNoAwuzKpj",
  "key15": "4JSsqwCBUGZAQR6nzmdiweYRSQQSSQQzUt7HQa8o1k5phCwRupiavhkGSsNpo3ZEsqVj5HjxdSngrRuwVCtQrU8e",
  "key16": "5ivn8kQJ7sbCNYXU3iYY1nctJGfcc1ys61NNRtSR7N4vusyikyxBLYGrv14RbyXHvyx3PMQQ476EK36QR8S7yuSm",
  "key17": "5va2gfQxYgogQnJztuMm9YYeeWoQUsjbRtUEaF5is3gLmUEZ5Ngn38pLGF1nBjfAefEpH32SVJEKcHHJKW1YERAA",
  "key18": "z5zr8hsj7HHSs96ja68ejKemP6Naj5KzmZv1GLkco1PHD8RW6DFofDtX68cG4iCe96Y66MDGid2wEjPJNwf7rXH",
  "key19": "46TbeUMQWkEEBS6CZxPj69oiZyKUormwjk7wKXMdiY2GpMCsRKRUQdyWEzXmn6TPu34r5iCugkwdpMeC7B1DKJ2n",
  "key20": "tujC52H1s5DR1WBXuP3WTeDEAgnUsBAQq2AncaQTf9Yw9k8jS54UjDf6mTC1tMmy73MaQxMieGkL3FUFBYhVFjV",
  "key21": "3xwMPeZTEvcJadiZvusxzJ8AGxqkhxBDK47xTrxuZr7JSC9frahLza9ZouvTgpWLErS1DB5dSrrPX2QduyegMRih",
  "key22": "61zVXWWBkJnReJLgmNB5CvBBzYpeNESpHhQfZGqB21XhQizJcz7JXmSaSJ4cejFjpGmYRibV2wGY5wpKsyExgSrv",
  "key23": "3AXNBCVLcfwY4pNi5pdx5WT4kjubc3AjUsFFdYktwDEzzHnKohx8PuU2tyrgE9DZcF4KHmuoxcv8zsgnDNqurhwD",
  "key24": "2sto3j8m3kGRZrbzP3A3UYPCRYKHH5hvEf2srTtmDbDrKUY8itZ3rr9hWuBmFXGiz63pxxTBSyRmvmXpRCJXGD6Q",
  "key25": "2FKqEYhHAkV7WypDrBj24rCWQBZnMgpFFunqUWhM8tYKMYB9UNaVZTVVYDRDRZ3sEQeJfjA9d8KWmdPMi1poiv7Z",
  "key26": "5122Cow6HeXtf3F7wFDMqgveXjxTRkvyBffrEAmaHnJVjLfUCrz5m41TpnHxPPQexL6a8oatpicAfh6tShBBBYTT",
  "key27": "35ubpjKqqscw7qWq7xdY1BLRzMVcnT8xiZp55h7dXUoLvXiVnmE7frQknuv9HsqQXkLi2bTQtzhSdqCxcXUa8E4X",
  "key28": "65Yqhfzk8sszNnCq91WzECL19mJ332Sfo3YR2Zm1R4o3Bs87zpp54tAG5SLhuQ1HFUMFKzY7btkB2ktPdFE6UGTh",
  "key29": "63rD8incjRktAhoEnfeCg4jGMnFmdnjvf4PE5pAzej66uoCMx1SJEL2W3n22RvQEsp19G4rg77JMXRRMfyDi2tTu",
  "key30": "5m37L8zWfWSGrYn43XTeyZKFKAaWHyjqsgzwwbGW7fUFTLjCBjzp2fvnBK3fRo4LX6YrBdLnyT5pHjrBwHdyRjtY",
  "key31": "5s5k7ZBbSkKzPRsrQsYuiHUd8eFz7eLuACkXSaAgj5Go99AM7jbxkpKkkpmKdY6FUXehj494PRoMdMmgBR8MKpwU",
  "key32": "4K3mYXajczQPZPLE7kQxp9Vaoeemh2eJT381mUYcHawEWFxFZjGKqmqtgjK2M3GhkiXGdzEesw1R21e9M5ZjCmcn",
  "key33": "5rtueUjcZAn5z83RxhYBZuzMA9JiMTyj2vGGDXMkdibgYqK4DSQrhVFxe1pb768iwP8pEWopBubjpgVnC1EF8mW2",
  "key34": "4XAPqYPGo5YvrQrVFWu5aZZH7mjzZYL59iceDMJkfsMqwRVwMkdp6vxWrfcYUFTrv7AoxqfS82bcvwUY3L5PRiZL",
  "key35": "2P4mPkof5psAu15KjNTM6HDKzmmURnKggj4aRYmZieyho5WvWs4xwobSoeZCfk4N4rDs4CCVZh2B9echb9AKrPF5",
  "key36": "XfP7rgYYux6DNHmBoN7aVkH7Mi7FNyz7q1S1GoDgrfCQMR6M1kSZyrkYQGkKuRTHxLMrxnLS9FbcjzQhsRBTfKw"
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
