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
    "28SMsokqQokesSNPom6skbr7gY7VGggbXy4BYAYMSxeps37Nbj454Y8UvsR4cJwL2jYB79FciV7ZLjNMYPamZPQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GsShyY4JimU9yXESg6ewpCdfbdHPFnVKMzZBwbsWoNvepxbAYeyCbyRNLjdDtQ96CrWSam6hAMweezA8ffT17w1",
  "key1": "2cMnwV3cY2CZa5JXuDNCRP6gDaFtxtk93gTJEK5Tv6SCzZGifNepF4THyAafnuJV13ExeHbc42mH9L6xEenDTeGp",
  "key2": "2RGLLGtMP6LS6a6Drao3FPNhSMX4UCxqDf5jPETQDha4ZFnApke5CDLVmud46V7pmeMFii8cmJovc1xKSnW12rWa",
  "key3": "2dqFnxKPe7ndmYeJk6NQQGo38wCMhoEC2waNhva8CSfEPZzwJ4qhLSKE7dRNnYyfgF4rPkjHSueqoyV2prW6hXqA",
  "key4": "4nYpXQtt3wyKNoEAF4mzM785i3zHDpAxfuojXMuxafcEevzS18XFJaL1gSdmhNtchjXmTwoUBzqgvpDQgxiq7za7",
  "key5": "2QcJ7ypQ41mzWngyG9b1eHYfjjZ4JcH8AYJF7N1dw4QooVQ4QLLjwX39dm2psezAZ4ECUNdj2TLctddpZx9Bgn1j",
  "key6": "5SNHsPMDBLtZ99uHgbXUqSaZMFZ4MMtUoHxxAwLG4vM7wqkTckqytDetdhhmkSaAK2gaQWSjtKfa4Ub2HrrCskEu",
  "key7": "3NJckUU5Mtodh7hNVxTCP81G4t9Uibu3qix7pyy4NnTXtkeBfvU1cwoQU1NcRrdfRU83a5ae1956pjcbxfaXVur",
  "key8": "2pyZ4Mv16QPXJxWqx4AvQd6mgeQ6t6CsFQ1yQWtuTUNcGhD6VNzNUZBNP1CivnczvVuN8skuVxRHGGvtv2PX6up2",
  "key9": "bhAprz25EWd4stGPHLaxScfYhAUZtxSG2yXAfvWeWTqnUj8MotLLcUGUpJ1KUUeUVZ4yVZ5yokucB4X15umyhCG",
  "key10": "3L581MQQE9yrYkjHqaTYWssP5KZXYUMmSqeFsozp74W6gYMThzV1kaAv9sC27fWQ5MHwSPNCft1QfJHzyNyEJ5Nk",
  "key11": "3WWZ3wDpkAemYQhW7KfKFNZNTQ3DMfT7eJ97rYpLqJ8kREUf374Tx6QdnniK8sKS9Tq64XYCjoqd1iGcGHKgHieM",
  "key12": "3nPymL7WYBMWLsXa4hQyFAvuwhuLCbxMwZB6JPUjCG3NMUUM53jh5tuCccfx5qt2kigRQNs7bbVh7rZFHpFg4CPA",
  "key13": "3r3NuoC8Eczb84PGejceKJNmuiVh9kcQ9nGdarJeQEGZigHPYLzpbCxVeZVZUYX8gRaD1uPhakieFBFh79FBYFPw",
  "key14": "5kF887Mr9tYcdGaKdgNjg9ZtvVu9cvVfnaD75mzJwHgkJjgBheKumqzeoWdRjcyf5suUGKhctSSWDtbKuTps81nd",
  "key15": "fDdLXFB8Tm8L7Pg3RRAaaZtZC4xPaAUcuQ1QT1dssf9y3VRFpThRN5V9MThM4Lh8PpoysVHzZ4HPV9xQJsE7Gxg",
  "key16": "4q4UTfkmxu5FDQBp26c2pQSoF1BGEqQndxGK2xVVvA4m2zD1MZAXH9FcRBfCpf98NkcPfykW9sZ4rXzhhKTRF9Qd",
  "key17": "4wg58TgVHL735pME5EK7CvsGzWXQz92fM3Qq3z8N93SQWkbrprBADzDSfP1zy29tvJN6adVWoK4yyxYWZu89TDjC",
  "key18": "5FU86vWxuuhtXdnJvdd1ciM5PnjDCgvttZfheydzdEcPzYwwiF6DLnQkF8uhau5TFUWLtCoBxBLz3RvcW8kCDHoR",
  "key19": "2bwM9wHyhdoJwTFxqPcBWKkd1oVbb9ehZuheGwGboSBhw8Ty4WnpbEC8abz8ZSN4KD5bPnNoUfrHCG2GeszCmSEb",
  "key20": "3hQunAi9TSVQ1S7geWdzjxUZcbZXUQoC7uWXxDm6K7nQpP3yJD4AnkmZCVTbvJb3wanCjknUWWzF1qERnre7YB8Z",
  "key21": "2PS1UYVwTJrkKgzCuHggVSSUVmiPPx8SkjwKQ8wjZ17XwYvQCJn6RGa5eBXGNfSegtuPntSEAuXhcgpDCkNuEw1S",
  "key22": "5B1vKV2htfjWNXvosejzChi1bV25hgJyQgdPHZa5DW1JVuUKB58aynER5HRRqzZyt8iMGAaVVVRJmLKRfrA8PnHe",
  "key23": "m3FryUwK7cyML95qi6TvoRmCY9TtsvVdsaN6XvpP8ZCCGD3BKcHMy4FwiVbiN4CsVzfXCbktHyYN6ZSTuwWGwMC",
  "key24": "5MyTSYq7L6SJXNSjVPKkJ3TrT6jGWvM5F5gtD7MrvZt2PdGwp3axKeCchD55x7auPV6iFhWhiMyj43YtCgiKacsh",
  "key25": "3k6CfCAA6smSzr83WWfiwR25G2DpjUyXjxE6TLzEAJ9PrVU183fuPVXhvFtJDoKFQYbKam59BXD8pCraHPTvfC1N",
  "key26": "7B3N8pmdL2xU813Euy8pZ3nkGz8FVEEXcVqbVRQQiPVSRcdZgVnqSLEwcXAayW21rvm3SdZXVRRpZGATPNsstL2",
  "key27": "63CQL2nbUnpeRiJ58dmhpurVBbuv2D8MVmXd4FxRg9yk573wuQJ5XfNbGj9U9wnCqi2Rc8SqXDKdSnaoyMvZmZUQ",
  "key28": "4XaRLu6fBq1yr9soD3qYSAAmBxeLLgigvrb3WTQ1qZA7woeZbJ76nDSCqEpPd1Xzqiq4SrwodXKYBy4GBBLSyEL6",
  "key29": "9hGR76dSRXJakfnbMjSN2SdGrsVDk8xZSjuk2z2mYJZhbD7pcfz61iTV8boGf11kZByWUUzHgjqTX2VonE3Qq8b"
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
