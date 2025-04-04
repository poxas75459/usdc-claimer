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
    "4E6RptG39aAbwWuwz1FLR53y1KDLyowUWTMkE8kCkL6hH4jaSN3QLNMKraYLPN9iKxpTfE8n2YvyoM3inCLkivXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27DP9bYRbV5qM8oxDzQ6EnmaueBbMzpfQ44cfdAHqpooJj8GNZMpLYWorAJXYtqkTLmSFskMoaUVvQGqu3oKGEzE",
  "key1": "4PZWXeaNFVhS5sdVRTqLkRg2WeBavKN7dwc654csPf7ojrZkSa3HcJGKnUPrQR5CuuKVgw6A4qUVouVdVpPjHd3U",
  "key2": "YfM2wrNpgaFxBjKWW8d1FJ3EDRhzSc1n7kNR2geKMcyXKciA5zDtfmwhjSksA2rnF5Aw63HiKaPxkfGEfaRjzGi",
  "key3": "4KRWqWVbVr1ttQWvLw8AkFq9GHTwLu3maJahx6VBZNnFsNeszgUnSGYpfLypptrs6jaFKcLdBDDNbSmvP2p2jG7p",
  "key4": "5r2ABkGkieQjszPiCQJ6FRtuLP72fZmyi3eHvhVneVp1RqkR1KAoFLyVrJRCTMJamsMVmAMqcvEEhcEL39bLPYBd",
  "key5": "3BWX9aAaYpH9EY64YT7xPLMZjPU49Fwt2MkbFzevE9FaCP1bX5LrPAeCtXWrDmb1W1R3fBg64Zx3d4EsxhrEHm7p",
  "key6": "3CSSgXfAtZtA1CBEMDozr3Gbgf7j5rfzjFTRFCJuEM1gz8xgZCja9WtcLgCyx6FZAFXLSTi2s3W5QzWMMstqDcyv",
  "key7": "2yZFJ4Qo8KkjA9dFNtEvyu5CFUfiuXuRZzMnUQa6M95CcT1gzFR8DNFeDRuvVdtQ7JRNCJ1qbtaJufQwKhL96E62",
  "key8": "2pywCNhXQjp6svdWiwhPDSg6udwAgo7qpAEmPnoCheZiuPxA3bT1Wfd41xkkqpSNgVfyDaNeZK7abZnHzQmM71FG",
  "key9": "5mfihX8SJxTs5Kj6CT3vFKdZu75Ljgu1PicqoB9tBRLq4Ub2vtAb1hSToQrWQEnYQdAjDxxFJuQF4hqHvC7ZTjSN",
  "key10": "4oCyUMjGEFWPFn4FUY4uz4tDojJgRT6BCyZUFRGSSH3sQPc6PvBsbVsK77J29Fsmk2z1NVQ3E4WFfKAaPKnwiNvk",
  "key11": "5jpBJ1iRoQT7HYqruBD2X4w99FEV5YYCjTWGw43raugrpcCofauU9GhghwRxLMcpjz8cqLCpmBhx5KTJi5kibGzL",
  "key12": "3ewj76LdtUdTA3hpnxocAhYa6pmDSqLX3JryFPgpxMrbUQHZEYVmUKAzWdSoeJiZKEkuci7zxWKEy1WiaztBpAHB",
  "key13": "5BVdC1wnTP8xpqjFZbFnx9PRoqx6L6atHoAXgrBW5AVVnZBQJzen3qbKNCXXzsFw3KSe9qFMwT8oCP5bipAr5tq7",
  "key14": "2j6gNyWCdwZJ5jW1UANfr6SQNAZZ6m9v5eLBN8RfdSBuiW1cwP5FGeMCkVdFoXwDAFyQG2FWf85nNr9SNB3kVxv5",
  "key15": "4kgkabh8xrm9CCtTuLtLjdXxYjSUMFsipwAk4NxCTgtPip2jwf3jXcxaXP9ovfi3siS41rSCwgEFc3FaBSvEkWNL",
  "key16": "5MTfvGe12x2uN5pkQn5SfQ71f9BHcVZVHgh6RGuuPoPkQQXnFouujTjpYRKU2zW793k5hwJC4phVsbJtmVdwP8gg",
  "key17": "2hrEJ26qvERJRi483d9vgRa8Pgx2EVaoRMp8pqx4BqDrYMRdPkFFwLMvWRNDNMRfCKmqpmkX285soyu4mFLfvfSp",
  "key18": "2F4yfHMRTbs8Ls9tevLiLjGDicJgtDKChxfBDEGBSonLCyss1bE6s15y3TpBbJpfzgpLLZZHgeaPZMvJVobWycRT",
  "key19": "5AYiuyHvWf1vTSUVQRbeP8T8Lg8Lvyx72TDPagBA5dZFqEUybBDSR6p5rM5WZJL6JH9EQ21t4voVvbiyLFhgaRG5",
  "key20": "5isZ3DKY6AM11g68ideHz2isxGMGFGJQdv2g7qLdS9fA6HeLnQWiH49Ycj36CKWPozsHugiPuMomsHvLUjVUeYSt",
  "key21": "5D83DEkZzQcnqFoEKZpL8U6Kgq44Xnm8yLzTgHyyh94bXoR1Q1wWmbqpU6EkRQG1MHg8sUHehemnV18N3i2f7wDt",
  "key22": "2jJXCog3sQndv5X5t8yeUUk6vpEqoWyJruthrui3LRp4M6BYDfFgGqXwnendzjmZjnT4RHByJevha9nNq9X2u7Pv",
  "key23": "2aaCbS1MXYMpFF7t8Puz9VZpVxZ5UC2z9WYt5RMq9iFZDAED87bgQjCzgtV3gSXQ8JNa2XEtBFJX81ygeuSkDJGg",
  "key24": "4nfcNwWxbgpFSiMWsoGbVe91q1hMeY22nJV5DbbVomS4uaWcnpqSXLE4QLywzojFAPhaHMjvk6srS59CerAQLcnU",
  "key25": "4GuZBaEYmAnSUisVQt9b1cHKNF9mbLiPT6TBkmzDvSryoz6yfzHUv9BVbtzZRHupG4b5kSzxxSMrTMH7tnBRNy6f",
  "key26": "ckiUCw1sQppGuRe3bqfEfjAsqh6uPsRMGNc5NBAAbz2o9UTKbuu4uvjk7jEQ6bDJeFm8X2b1VDQQEyycoXzmGr8",
  "key27": "4VZz2ocKz5pmn61U5dcM11ShKAXeKuvRbjgpRAoZJ3KQ2PiH33ckd5ft2Rjxgcb22J5vYSgbHEhwLRkFUGKyhAwU",
  "key28": "5WWiRGkGzMkyFEhXLHSdD1czvoEkz62bFx9JsUmwAaWsUGLPvkNQFZVAcSwnmP5uvEe4TR6fjnbw3cS5zKtKFKMY",
  "key29": "4xmNqGMY6ddRYJAWdPzcHxhTHCbKyT37dPZJa4wtfMDTj6VQNW56hmu3oCvP7cLiLPvUNUkAmjrbeY8NLyQY6T9G",
  "key30": "5kS3u7hYP58sGPHPuZvcicKzdKQfjFqyWYbwHZMSP6X7KhdwTzJ4AbEbtYyPGyJ1eZfgHQt2heR4yW4jr5x8X3Lf"
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
