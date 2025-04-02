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
    "39TmxDQucFRExwVoB8stYCznEeMQGmkfi96Hu7KXww3uMaugnn5ykexqtWt2DbQ8LKhK5ynJ7cXhHzpZoj2winbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B288ac7pKhqqnybiobWfFjXsKj3SEVZKxGKVgyy9qGVdhnaYR9nDS72wcH5NQyQGjHsb2yuefyYCG87QY9qrDbu",
  "key1": "4yVyhCSzjDwTn7LYCSsc3bAiK4uGKEW5yDbqzJa2bNv2G5Eo6QhZpnpJAP4cNKUujSzSef1RQ5t959X26E8H3qbP",
  "key2": "2mUFQBuk4AjtjU2EgELYGy25GSN6tYMeK7XPZAhsB94o8jHyYYpKRaa1PaVBMXLhmg6kFhD19jjQoazNNwVe6tLs",
  "key3": "3ETCn1aLkFYEBCh9bTW4ng59tDdwbDymMCrE3fEqYkftuHHLJKDxwjKgtyvtZWaHSVqWoGHv8bfDaqvqiWaJNhyH",
  "key4": "cwSqWpk6xMzRPu5xXqkHd8iGpCLBCF2monsdQLEv9kczSdF8cjDMKJ4LnYVdXX6p1bK2ehfR3Tx8Zgfm11XpnSC",
  "key5": "3VuKw51XswnvVwB7t9UQR1Dd1Uqw7VrT2pkwquU32jN9EtixdneN4DGxAx4sFLTpVar299z3vtt1aVgQdnceYevL",
  "key6": "5FknTV7EMLJcBzAZCPt4ovQe8uGj4XuhhaPFsX4Pv8wsToht9ABhVexTdREXGm1Q8DUsSEra6T251C5CMiCjLTSS",
  "key7": "2mGM4wWfnFPmx98GFUchenp7qQKRwKom9YuSoMP41SBTa1J4vkKBxJBaq2ow18xCaDdkTxbHXXdSW7UxCBwg1r9G",
  "key8": "32WxtQSE7aBm5kVQ4Zhp3WJNX7ckDSpHZ8861ta6h1wZp7zGy2PvNuKb8Vbdgf2SnXhkTWSY1h82StuknhYz1enV",
  "key9": "5xVvy931YaEVog2ZACcKaF2vzPyVrMZYY3baksSrLXk4mUXAN3NR4Aogt8A15gUHVJspXBHgdQTViHs4V37xngPG",
  "key10": "5oBuhq3pwrHdZk2qG2d7jAG74HtugaaNcvP6inipHp1RZQdiFP9oFRiZ3JGnEPtNZArEfJQxX99SxVWfnUMaFWTw",
  "key11": "4fcEzfyXcJ5pnkQH8CtoaX5tKSzh2KL5d4Eu5JoVBY5dx9vsSQ5N2kCkZerkB1hVJL2fTi9xRXTyPi64RWEW8Fga",
  "key12": "4Vvbch9ts2jQCRk1Aj9V5fKukrjTbeJNJrpAEeVbuCgLnxxUTqRCbc9HGLghHvnNjGq7QRRT88tLkqojvK9RjdRr",
  "key13": "4bnbxp85Tr1o6STE1WsrGRk29KSPUSDCHQ7ScEPGGV3Mf3LkbVJ8RrbXbyiBG3zXUHFaDBntrwPwCHvEMu79n9gb",
  "key14": "2B2ZAK4NJmYgPyRpNof1YNJNL7r9qforSRwgh5k68rNLEg9aHhHzkiRJpzg1Xoiygw4QevFnQffkAV3qKERzJzE2",
  "key15": "4XsXGjDcwvgxEgWAovLJ7NFTP2U1SoXPgNLFbMFHuxiM7E9xgNbmP3dZ5D4fJMYG9BTitKrwzRNW6NJFWm3uCAcK",
  "key16": "4KFEDc8SyZCSK5qQznjCHbPqewpS3mwmdhpavryATpucLS1Ae4CDzuGZyYuiJzMYbz12L682nmNctMeVeaySipZF",
  "key17": "DG1vSTmH1E8igR9sf4MVd9xoqT6u4iFKKDfgUPVT3URtiC6E5f59MbASNmnSsQVE7Ux7W1fdpR5eqdTCy9YqpnG",
  "key18": "2PDtTQsoXpwzjtsrTSPKsZe5m6GHjcN5uvpWDd6JPVbWVFjoznQtzNtGFwJaY9NwYWV6J1Gx8txqZiU3GwteQaZC",
  "key19": "35dHxFwwt7cKafFvv3y8Nug1eRm3yLKiPDkKyuSEHRa9BLRiT4jQmp4DfjN4FFNFAhF5e5gGFTtyaL6DTaRm6wq3",
  "key20": "55FNntb7RR2KnRydaM2e75Q6WkKFXZQf2amYX7QPYjZjoYoLTZToHhJSNBRdur7RjFtYj1Ergzjv2tkhEnGiUTUb",
  "key21": "3AgajPoYFHfetcMyaYSUsbA8L89ezggGwQbYvQGUNcqiSoA6w3N4LW79GXRrqC1D69dCnUV8hWsCRFWzJWz2LeKT",
  "key22": "3rY4ipV7y1GKRMfbht7mxdQxtM7zZn5aqS1s18qfHZGL2vzVjx978J81womQEGdrdzQeuNL7ApQ7c42rxNcrRehF",
  "key23": "5AvktpLdMXvFcqwKo8yxAF2W6LrUu96Sia3CJDoqcvLMkPsXZbKzc2n7yJaD3zzHB9oetcTGdfV8yQyThb9fqW8r",
  "key24": "212eCTDSA2FcaEpui925N6nrdojF2rcymSRjtJauEQAZiaiLwdN32C33LhQWS9GqkjJt6kRnFhwYLPdLCPybuoiX",
  "key25": "5hLBH82tYF54hZjedWh49X1bUcix9EQrSjgxN1mRa1BGSL5u2msHeyGd1E9UUqpvosE7gGTpJSYJVggJw4Brjqa6",
  "key26": "4f4ii2HGGPLpUg8xLhgVL6XyPgqdBD9KnEsq6pUxGbgZafa3RU6KmywqwARSGmrPdYJSDFSxBHmn99u4Aec43N8q",
  "key27": "whSDZZghqwmTDet4MQEzyg1jpBuBiE28vS6jmcThrMKArpbHhkiGdHg87FN6YxF8mcQCmGxjPuDprLyhx5oS7iN",
  "key28": "3E4jBwRHwqu9Zf3ms2RtV5mweujLqmokJdbtJgNi9B6SyQmXuA1fu9rjzD2pKUyFMn9BRtB9skVdcL9krPv3c5P6",
  "key29": "49wRs5vBdYNedYoBrqtoL7sq5e8oi5z8BZZKEHng5wcfoUsGtdAUMrvVQj2XfCdQiqooqawHMucZE7k1DX12ZnkA",
  "key30": "3WPbRwuX9NcuAQWcHVHd3vjd1TatN6UKf4DTESX9p8CjT6M9QhVYsN5Ui6tvzfDsFDhA1Fp7Td9KfnWX2i6TQLAb",
  "key31": "5cJwK2wHMyisdVp6KAjQRoeT7tLYVDwgZNC66gzccko39rTL3u9oaESUz4Lr4tvnHjS1Sxqs6pnenvK8j54eMfNY",
  "key32": "AMjes6upb7rf4gxeVfozVy7Nuhwx3HzKFiLBKEseWfKUr4Bz1DapxAiddG78F6Zcde1Smfk95LqHMp4aQQJXiS5",
  "key33": "uh11ZyLN9p8XKVV3v8qDT84U6mZxu5EEvf2qSrdZEK9BSabQR4FieWtusPK94kr5aPKV4XWinByEiwJps5HvhWS",
  "key34": "5uHSZT1o4mrksyc3KYZootuxPh6Zah6vgsQ2oMZ7kEAg4QDm7wYAT9tLhYLxL9ReuYkLeD33MnkfcG4KzFivTorU",
  "key35": "so74TgwWcdzUPgcgGDR5kfC8FPNMwYyQMb9df4xjK7B5dvcMW8VzuLY4UY83tGuPoDLv2GMoxHrxHvWCUSkRqja",
  "key36": "2BJ1Q8kTwL7oNfQbCw14gYnPkHQ9rjgvVL3EgPyqcYtPQE8F9ctLyUsgKMNszQg6FXJh4ZnMXyBwYzM6ijTNSsdr",
  "key37": "2dA9H6mwsDza3U23Qu6qHipK5STboKgTmfDiLmaKD2J8BJ2Fr4YYWzrqrTtTh5USg5mdNXdNbbq1WKsCXXsgbL6U",
  "key38": "3yALmXE68TFMcUrcTe62c72LHaHbRxFUebXuwqdStXPH17ToFxaiMpZ4z9vZKxQ1rVas6TxmeEvkiAPujwGr7Rdc",
  "key39": "3moUVAQsE7gqEDVLwbVLtBTeXwwNWKzMUT8e371UhyssBcnrkAvMezYxXwGcE6y88JKDcbCWeAGCfzZ5LwrSX64q",
  "key40": "52CGFnJktr58Q5qhA4nDisARVCQ1BJ5NdeeJvqgo4zvr1kD3ufCaVZwuRStY8ygCMnG7Hq9ko1BXSkAQT2wDyfU7",
  "key41": "4mAQv47kE8jcxj7i35ESN4zW3dr8m3rrwHfrKRd9JiqX1G6HLBnHRSw3r42QyKhCM7vgDCeXhuPtBWzumdQsznaY",
  "key42": "4pxXANE6JiPpWKxaB3Hk1X1XdphNnUyPUhb3Fr2usW2PXAdxqNGxoVhVK5qQp33oj63PCxsjtFAV673kr2VH7BBE",
  "key43": "5FXyNt3TmAAV7J9Cgox2pyUAZ2MneBx1BU5s1gc7bWUQfzdWqQq2LfBmRVgjKQEJLYjR7TvUgasTb6SdmYUE1SJH",
  "key44": "dhrxFVYzVRR9W5SDoKEMRKjo2dTGTr5i91mKNCusTCJ4vvyUNmRoqoo1xBA1RhT4y33xVaaf4t4sUzxU2GcSe36"
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
