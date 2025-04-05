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
    "2v6MV3KwmMBCVF1o7Pk9cYb95xC29F21tL5kUrxnzWRxv5vyLTTMoQXu7mo8tL6ZZ54Qv64LkaLF7pXZLs4rNpKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jw8Sxvxf9RStFC52LhjEVq8kuoCNryEkQv7SXkPZuiyJgD9aUekiGMida6GgcMkofQaEiDMtaHLUnrXQmD6PWbr",
  "key1": "2558ciqJ5BnXEP7aLyAPs3D1pq8zxcNWVThqpbsXmTVaR6H9mNcDa9iwvTihEPxRyKt9eprsdN6EdbnoNetAogBt",
  "key2": "QNW65S4ESJWYTCmwoYhnVeVz23ph3HuVKxWEMu4ujCrmU9fLrm2azwkqsEqfWenj3zndjmeiPDxb1GGcpBArpSs",
  "key3": "2fyZNx2sCXADUNu8tG8pmeTiQ1U2MLyVA5Yg2yBG8kjATb1QkFNVvLedtd7g3Wg9YEe5nCDbiY7k1tWmpgtLumAM",
  "key4": "3sU1g3BP91NAU7DXei4hBW7ADesMWVygUPx7yqr4KUwZb9sb6i9qDw7YT88T3KKLFL1nxY2RpzdszFBzFjHNRXL5",
  "key5": "2AScQLYu8GeG1Zo6m1NLex1ayaC8B1oLCYRfYz2VTZCUs9MhJ7NizdZbEqqKf49mry4rpK3Y4oVCsvdnb61vQsYf",
  "key6": "4Gzpfy45wVnScGundh45DVY3pZzrfNDs4qTnUJjntYkQmwMk2PzEmuiLFbXP8bv5kfbo66warccq6eiX6oZuUhyu",
  "key7": "dxAUJaKGxLv5EgQNRJmGDiGkD5cyrDqmNfZukfQzQN2v5J4MHAUBfQ4nU5PimGp4pgMGtrvGYkBSBsMZNiAKPTP",
  "key8": "55RX7thRegHaps4rM5AgWD8XocNPsXuM9akJhDugA1WVkfsg4YYFbKLAoLXZ95PLvvznWG5VuCmLVF2gDxHrv9VA",
  "key9": "2v2zVBkWArNydmtUD85XKwUMaTjNd9QHtjyWbEpxNYct9J6yfZaZw5ytMq3qtH16WAQYBX7bWq63tTnFkaeGs3xV",
  "key10": "2mrSTuiKUtwiYezZgJRuwPMxqvmQxjHE8VEHv8d7euw2B17NjkzajDotLKC3VUy6LYnCd2kHzW1yynoyKdbrgXrA",
  "key11": "3xvnYZC3FDdoam1cRS4tW8KMNAruEEzxb4RgVgiy2eaZjiXnJVuHPZkHMzpfQRAtC2jVEfXcgpKon1tcjYtJ1g3m",
  "key12": "5xAMn2HpSTjUA2k8nwzZzurv99WuALnuBRTepjwB27GHkWtKgfk1S4RXxsNzCm2B9xYw7qLipcJMM1X5o67wCjCn",
  "key13": "3QGaYJF4CDA4B5YyEuL2MnA4ZRGQhoBGAZdsYW4RYQsS3GHRXWi77oCTNEqrbpWeb74HJJzGxMReTZ6vyKxMdHHg",
  "key14": "ug5spsVcqLv8y4rfqrZUeyCjpAWp8SjrrsnL9YFnShvPvPXbTs6qvwYsiJbSPQft1zcsj5tDVwyHj9qKsEm6xiG",
  "key15": "2eggTDf3QBDHVxWBa1ER7rJhjwzC4BWTMudTZUdTBEuT7kUZFYPfr5BdGq6zzs8NpqJmJJzJVqQqFHpW3LzCWPFp",
  "key16": "4q5FjtGsbVKZRwRzmeVHfZvcq3LdKckhrCkyPhBdjRVeynUGr9Dm2nRXXDsdgxki4jk11q5cw9h7FRkub4FxxN92",
  "key17": "iwpychb4CcBdF4HQ3XRten67txJDvYugCtRa7ExX1BYE8XyN3Wp2JMj3oEzVcTzu2KHV7sjNDxvXtPBrmgGUp6c",
  "key18": "4Qmpf7XtE8g4aKkffjHKZkTGN8neZLsZ5Cq2KxuwBVAW9xt1GsWEtGgmwraW9pWLYquWAGF4jRDzEtMD6sYuzA17",
  "key19": "5xKvbf4Cm6161gveEsz8TJdqS2RVCRQvxfMgjXsqrHu185XN8SD9mQawLfCZY1yNwWj6Emb7oodSAM2e9CR8rNXK",
  "key20": "2Cc6pzGqzqbEtF9WDsfdCVPG5trh6vdLm7K5f1CJy2xmDCiWUhEeFAg1V47Nwz6xxWVePnXWHhDHby7X11XzqwGp",
  "key21": "4qRj4ngkXn7zQfqmP7yY8fz8igmbUaC8hSC76UN1YZEZi5s35hScQrnnARfTwRiF2NREdbEPEhgHbmhb4YHqfBzn",
  "key22": "JXWNNStQfdi26hpXnJR9ZsW9g2chtyhmcYDE8V4MDSSTTCu5PkY2iKmCeDyuZKMSBMnWPQQjJAzXkpCd2qCBxsn",
  "key23": "tu9X2iXirLuww3vcpUtwWnPncMEgEAb9HFWWKoVDZmiD8LPDjmnPCdVU5koKvtfTHkKiLRx7NDH1HZFBcaAASDz",
  "key24": "vdrd5P41CbYLQxYVTyqEMXswXR8P1vJtxFQjoporwJtFH3Cv5LNBryBEECQYahPjC923jLo2fr8cyDCQvzsn2q5",
  "key25": "5NatFQWrz7tgtushYqXxLtJaxMM77H4Q3zJXKRC6M9qHXnNLJDzWAbjZZBHyf4pwhVzbNmEb8NhLMxym7dvjY4E6",
  "key26": "46sfaqsjWC2ZoQSwCJ1e4s3TsnUAeofyitu2a8sQdRfxHQ9zyXsiZwmt6gMvjyuNB9imnqVHyugUmnptNqxtWcgA",
  "key27": "4suxXAjo7kudU1x9HBAHvZtdGJjMFWtP8wvhUyVkCZ2nfdcPRmDZftA37U7Pr6Zqc9oT87fdNWYzBwLT1KpMZJb7",
  "key28": "42gZtk3ga4QGo57pbzcFR3WDRiT8uhEEo2eo59Mgh6fWeCyqQZUX1VSg5fR6cSF2jUqBhsXV97zfpsxjCZEwm6kd",
  "key29": "39Ff1SUuYB6HcR6TwNGABxXzceYAEhwwAMWhxuoz1iDNzanHPvotX5PGZBPnFPx8b2uWtWqf7V6q9LgXa6bGtCpz",
  "key30": "3hVpGK5F9eFyyjWJXSuTGyNWMEkDxefPR76X1HwRWSm1nL3QtwBdCEfX1Y3A14uQFuNNAyF8J2PXb8LgGT3SM1Gd",
  "key31": "2wxwHioEZb2vB45gAQDSCUKgM6jKFTWcW58MeStva51SXvnhumDEw9tmihwiDW12q1bBrshPLn9Mgok8r58DhQfj",
  "key32": "4aZAd4Mg89ffXJwExUff9sK7R25hAwogcPvUHzyuKUsqyKbpHqohEtWNv7V3RMA2uvJ7F7GhBUsvUDFsYtJMV5cA",
  "key33": "4Z5bXL3tDkY31MTnqQtrds3FZYRLfuoGVUSanAX7GNPdhd5K4jcd4EgWvhU4Ehg7shi4dHkneKFcBVKr58XR2sfz",
  "key34": "3r6UcuC1TAWU7MznoARmouHDgLMxoG2kCbLnaXhdyKxSgBuCJteHSzh7RYFEiVQDoaALFW1UQ46cLdKf3RZHZE1m",
  "key35": "5qkUVsE7f1obVBoYMJXCiD7kwTcpYTMeqNM76XWiAEEd1oLKbCm4aAhXMsY2PtJvfGsyfhki9vEdHYBZq7iPhM7J",
  "key36": "4aCx4sUt3mWXf2JA9dF7SrUiiBXC6c6S1DsYkjQACZWA76c3W2MwgdQ883oBKJLut3cvNumniRTmdXv7gHbCNGvV",
  "key37": "2dYukk8FavWfXWtykkqNd88ktd8z2mQXLJQ4Rkd6HG3GpHGj33nyc9rGJrGeUTPweUyDWzSTPsdBthVPg4zMYjcc",
  "key38": "3JtSxU5mJs2nfenWu1SrdokosRNr4zFkEiww8JHCNTwUpC8WjeL4NwZg9QvoC2ZCdTEoBMJKE59ddzaMqPsbm55x"
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
