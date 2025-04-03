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
    "2gbrDStm4qz8eVuzub5ZSa9QJJB5B3W31TrcxjPpoxaUhGea4yPAP5WjRY5T6EfwnQ6V4onuixVvym5FVtQqutL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmVvU9fXUFhcLtJwSn6asT6TLDy93v1gQUBVHMy1eMmg9PeHb3a46irAtmV57bC4zhY7jZypUih19B4uvhpCqdW",
  "key1": "4vQiezY9eenKZkak4RypZ8XtYHJeeHPzKxmvUUmj7ANUdcgBhZS5pn2GbJeBdomxBGV8BJLeNwqyr3GKLpW15rxw",
  "key2": "3RNL7DpZy9axLfUXLe8EpYyV4GfxJD5VRtjef6jTfiHE8ZZJzddRcRv1hALf8TfBx71JSJk8SAtzEAKKcmBF5pyH",
  "key3": "e9n2qEDNrnnWs1VTJzhkhykS1tangzDbXgLxuWCpM6Ffe98e1zigh3ktqzzcnYwFfpWcDim4PMEezR6aYLPvpBx",
  "key4": "5R2swsM5q8JWivDbEVdALfKTZoqcQUYqC4D2oSLsoDKp3Y5KDb8ijG4U2oxxFUr7E16PGrP94ACKdJjLu2sWYRkF",
  "key5": "472fi8nZmhuJa7wjX1F3yPcxDaAky3ZBy8Q6S1ENHhn6b35ZkUxpth6o185KF9siuEgNZ7oi6kVTPT53dxbgBgz3",
  "key6": "2ND9pYVhqL8BNd5dYfviZzQBNgdqdMwvPp8AuEuR7YZSbnHuRQHiA2BiwjvVo1wSmkZ8LsSGW2WDh9aBjgao6Mu8",
  "key7": "3ftzFSduKQUc1pSeyDPwWN9VQLvyKH7PgqgumJNs8fViVNE13o1PMmQS3rA2CghhwyuLzZSLYc1gofn15giHXiiB",
  "key8": "2m6thhQwbrc1uJSD1yfj2vjwStQMr63EDim2Jqdw1Evn4sHPK9NBvAQE6mEEHkvUqLarUBio6SvqevPm5o72EdWr",
  "key9": "M71JNNaHremEDsis8er8zAAZQyW4YCM4a357VBL2cS89Z14wL7vfKzjrKYgBqthx9C5NLsXDX6fHsT38k2foKFX",
  "key10": "w3eNv4YujVMmwY8EKvbniZSR3sRRR5q7AHdnhdeSNvrwYc9JzRCq6CuX4Ta9DQ5nsjdUZbtLWsgdMEhkHsbyih3",
  "key11": "4XGAdfgdUR71ikuXGxxD4a6RiW2nthynne5m1KpfxQNNB8pa5V4evDdUFJX3yNnKKmzzQwRQJ4ruvz6yedT71aDY",
  "key12": "4JSfAn4EZrdgkQsWkRUFH6N3kW868QXc8jWkaM3JWoQX7zAGpgkqb8pXvXx2czzv69etMS7MGDjiRxuvpoVXEoMd",
  "key13": "5XyYBD5WvwHzNibZjrmnGYTUSVPqCG24pCJmksPwBCKUu8hP4go3duTruxoTJx1NQwKdgEXFMqqotEKNZBgHrCEm",
  "key14": "fREtSdKdgM9EPczdJmxYUd249iREUkHhDZYcLcHu3UrJRmWDrBxGv2VPLQvAS5dNnhsm4rMscnYM2VVNULjUXkc",
  "key15": "3Gp7K3A8fcqUiTqGagkwfkNiGYpRZgzTRrUVkTKLoULbQ8NBTeKYMjwaSup9SNobKmG6Gyd2xnBfSp91hH6Dogq4",
  "key16": "5KAfyU6iv2QXYubRbPMn92EySNtVCjtq48rUvmXpukekb8oHAEY3xMzy8JGTQLY52TnsEGCAxE3fdouPE2Cwm5mk",
  "key17": "4WDAQ1QJmuiRT1BWz9nRfr78YbDPBEzHW5HFUXb87tKymaK5WgHHcKN9Wo3h9zfY3mgN4HZa7kxMhJ3yCxeihzFa",
  "key18": "4KSfywooMedg7ev9sQtq9t7kN9QhNpAugBLH3jR3DgiwyGX78xXyKpUg83fTFwgYr2vceJYSViD54We9vsBi4tbE",
  "key19": "27yMkFVU2MHiqzrok6P2PZDCzhifAShivQzvSLFpZh7brAkmWQbqapHw2eRai4Ys73ZbTSuJUiWLLRKppSPisxuc",
  "key20": "3Cej2D9jLLKPwRkQDVHA2PLmoBFigBPUQEcCHXxu1kTGVMYsWdpRW4f59XTmT457D7XXsefDm5A6cwXFJHFV5iuK",
  "key21": "3ZeCUbuw1gGeKC67AfWxKgupPmv2QNNgRwqkcWn7xf3R1MmcZ1uKJvih2mVezfzaeMyAzdKdfRvhf2tAC9DT1FJp",
  "key22": "42kKoieGmstdP1evTg3V5YUT4KUK7zeMPcCU8m2udTW6zU8oxhDotc4QusuSWh24f8xVnc7w52MqWzijDJCzLeo4",
  "key23": "4mbfddi12WPXP4Pi9qsnCd9jzMAfWiENEqd7LQJjQgHPd2NpYFPCzVokFryQW2Fj45mupfJN89tMFfeV8ZcEVPDd",
  "key24": "xH17kd5WBG8Rf32ve3GcbjBBtstXax1XQG5LGCyGVeYyZiGgq2geDqvu6YecQbeoFqLKuwFi1ZGwnWqpE956Xiu",
  "key25": "aw8poTVfDW1N3i1zDGLArtG7XaP9qKmLAWjyzDjxFCh3pRMavwRnv274LPGSeNNiPa5JN9QtMHhQjtLBMB61Mo3",
  "key26": "5CYMWox6uKLvfCRMUK6s8zac2GAt9W9GDVk23K8T1VjngaEPsFwEet5YHxshuDWtZVKitFQCNRkB1udZih83RmHZ",
  "key27": "3YoeTarbuk5YMqhKbvnDFmbiHk1NaVBmHiKtobEQoXqbfBw7oCYnWURuCjiqgJp7bdjssTiBAweX1UFinEVqxdgA",
  "key28": "4jLMrNZrozp38GwyiftfpvwAQTRLJX7pkSNG7XFs1vt7KaSyAq7fvtqNFp436cLG41YtGPNzwqaEkvHMTesYUbUZ"
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
