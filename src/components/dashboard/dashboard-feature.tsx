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
    "4iUatXqTePTwdTFy9NAxmCVrBb29R5yxfPvRQ7aNQDWvHfRsTvirgp81KEKNrLQRG5iwGK6xMhZEFB9hCdtropKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mQVFs6qSNomCbMhkd2UwctMUCvkKvPY68p9dr42MFehqG2kNgtPuZyJWWxLNBe3kFgT37wnEwp5K9Sb4iTCz6JH",
  "key1": "3V74PumsJtSV6ZB9ru4heJs3Gk9A2z6pk5qMpZnDGYZzCAFwQFxfxkF5QB8pstWrKcfev1tczGNJXFPwF3H4GTTE",
  "key2": "2zp1WwWbLiMXFADWEGWzyM6bVGQzgmN7geRGx43QLU1Fqf3g6eJUCTZEgC9Jj7xzZTdzh5pSRiddFf1MEQQZvHMw",
  "key3": "4wuDm6wv5WZXLxvMVNL9dwU2dL88Yg1TFh7cgXnj2hcpFjZnWKsSeHU2MuAsGeXFL1JV9cutZYR8BE67GVsEin1U",
  "key4": "5ZpshGRyB1xwmMwRpQgLcugJwvT25ohuRzb5j9Cs9TjjCvdt6VW3iw8GWQRBU77BvocDBmgEyvCxYevaPH3p1zR5",
  "key5": "kg12X9rDNxZmSPAdg2kh37R14zaLbNL8AL9cRiKvXtpLVL5Bm8R3cZGFATLnuttKRhC9NpXcgKARLzyHNdNvNWE",
  "key6": "3n2CVZUSodA66R2MqC9p8kBuFnp6cBUWgWs8qDEaqhj2GYGVVqDRdsjc2NiuDBbmMm5DMKCAMbmYo7mQKp5hq2ar",
  "key7": "4136Qj7UFpsqBf5zWqUwNq3j8nca8jmjBKa49aEey3F5s1nAD87WWpsv1xXkQG8nLabwNVmCgGc5x7WGpHtKxW6K",
  "key8": "zChxj97mbtTtHTb5Yhxfh1SWGWMhvvhjoZPxEwhZCUwy6fDa4CFQGfi4cGunJsTmnFbkyYSo2CNaMyvLhaijsSj",
  "key9": "4n4tfChTPvpwouQpyJFhvUpuJ6BTjBCcyudAb37kcbPYXMVZ3N9vYe5DroEqAeHrBm4tPeem9y2P7MC62BA38c2Q",
  "key10": "4fjJYMycYkFNQNw7oLAH3Z2MBJYKyHb7RxM9uk4QMkZD7HcjsVuE5UoifB9ZxLqP6jgikL2wnhogdytxCVsumJNt",
  "key11": "43KgcXhDeGpzde6u9vn6SjRgQhcr22Y9taNoqwwY7tVZgratPzhDjYu8AC9zQ3cKJfkyc1CTUQ3e92zjzAcMxpna",
  "key12": "YyJEL4r1DXidgHJqFC5oURDpUnjsiB4FWDe4hgfWWVDQpQoSjNyzLweeieCXccLKMNdzUcyNyj1rWTwHgU97cpH",
  "key13": "25DEDsjjhha98TQWaUPxp8EhnLyc8xqfL3qpYWKVJyQXBAamShpQgQafgFFUdw2dyLUkip2aYxanBpPFqh7GNTFB",
  "key14": "3sXawTKA3SycmAGdAbD2mfQt6Eu9QHpx2n3AVTb1pdSeD5wso5hbthnq8bTCeuyaAqyDXof96it8SwgFqJxdxHN2",
  "key15": "3UMsFfRYqLg3aGm5kLQ2P4LL2gK1k73ap9Z3YQ1UJ9FZS6YkSuCZ2bM8YB2Br6vdM6NtpExGvdsY4mgpvD4fxn8m",
  "key16": "3RBXFag8YJHwKQ6uUnuvxp8efHbToPyqYLoAvXd6ti4Bn3fvxKEwYv7EfMMPPzkpuhoCKGggW1JaWgV9KV9F15w2",
  "key17": "QS3Y42beaSkWg9JD4XReZAR7AF4FNKjQM1vU8oKqpCnwUjqwkKD7r4ABzY8qbn2PmGQ1X29Q2U71n2uUn7XLcYA",
  "key18": "4VZCT8CnvQPd4AbBcagw2MuqLxbtQz9zktVPck6Pz31LMZaWefgQnG1Ny5jdNfJZj1DXjKrmcdsRXHTYE5oQNbPf",
  "key19": "5Aim2q7T2iNLy8ff6pjzAbZuXfM1nyQ9ppxooCgs1fM7f8UjHS8yo4kSBWL5HmrLRnKA7DbXaLZiXSFS1qxV14Px",
  "key20": "2Z5FUdTYWdwzCVbv9uK3gvfpaXfnvntNREYKeZiDAdFo1RvrMX5pzgzRKqmLHAbMXJRQzgnysWB8QzCCCBKtYVoB",
  "key21": "2bUpCdRAdwMnK4NTPFSgpbK8ChFtDtodZn885Ub7oGiZAskwJ36wAwXgYggLicvaT7gEdLeFdSPbxu4jweAahBBz",
  "key22": "4NqcB6dqTHeaFDZK3MrYQwgzMBXnDXzYu6PDnK3GueD8RyFH9dodTnyQvJkayhetjqhNJksaMLHpbUNJzevMwHGf",
  "key23": "btRooRsnpY8eWVVr66nrokMTeU51Ft3iycWfegKr8PzHNk6xrr7Yx1PrDLGDB8cL7ZUFuTL27vFEN7jEhEynxsM",
  "key24": "2KKi9L2V2WiRJtqmoLvdtwtjwuuvE1nQjWUQvkGEnwDtg8ZPDUGakM9JEpqjBwcqMABPttqDYJ4ZnU3uYBApAKY1",
  "key25": "2mGb3sM1vsFQaCQjNgKBagx1sNhGqiRfdoUYr6XamKcY8RnszdasqKXAewXF7DapFsvfZzrjP6SjbWVqHam2rcow",
  "key26": "2f3mkmJsXUCtQP8mhb7WxM4f284digDVujQEEEbujRRTJ4DKGfjsfZ3c9ymZ44KuATeVRv1RnJDyo8hDQD5nrQma",
  "key27": "qz6tW2p7CxXGs91KZGbENQv42P9RR2cqQPWw7dRFE6VzECpDwFFDJWBpnm4Tv2Yy9rxD8YJCG6McmrzvCPwXbN7",
  "key28": "3AYQ1icAxHimLpsHsaqFuSBJXGpztTJskVKy8fEbfSz8io3p2oegnQyUixs6eVJSisbBSNnx69E1adt2EskPxvUs",
  "key29": "25FxTPyzv4dLiLi2TDRCGyx9xBC4jCUJoLDEruNRMCq2VhevkZyw5QTrZhnq8iehNGBoq8cTgPBTHUZnmcZkmiyk",
  "key30": "49hySsmpUMRQKjBR8SsX36c2oiVoJNgsXasNWfWT26yPzFfP5CRLZHpgGkcQDvSyNHYoaCh9BhJXXDHHEbZZ96ko",
  "key31": "PWKJ8rrRLshyonboDFqtJQuDKRq5tuCeyNiYe3zyDGX67V6Qm56Lcb4Q22uv4e1f9EsX8o6x95utnksL2cQXXhU",
  "key32": "2cZmJG2zfqXByp8FPmToJYsFxM4QjwokkBXt3EY24684g6yeje82kevnKWbs8K9w3MswJvxBCQtgvKyHSMacdUXb",
  "key33": "2yu8tmpETHjsUT9pxSyJ3xspHp2eBS5yAQ45VjJUgdXKf3Q3GCFgQaF8VFwegN92EqkZ7Z7ud2Z5SPEiZ4NL56Qf",
  "key34": "2rVfDusS2QwuCZNFLZUVrZoTrZHTrMbdPgp9bwAuBSCYDyifnsg3mikbGPiPicDYf5X8YexvFz1whZguXnL6P7K5",
  "key35": "3EZbWdVey34q2ao6TmZX4UD8nFURGHP9Q9SiUYyBMDxfXDt3ASM2YzFXKBMMsH56hEJGqsT3oRv2GTn3CpbB4KRk",
  "key36": "4kAi3RtNfdvak63BQrhvUN4a6iGFaD1b4zKKqRBGiSqNBj6j7jor9brAbgHVtTR5U6xSfxGM52u65wUPLXH681xb",
  "key37": "4JQ3yTS1eEjtxd1kfzUWb9VUpaEgPBhmMzWpfau4Yhi69H5Vof4MBTh2MAQ9HQ1drpFHcuFcjG5swTJU1zoRLiLT",
  "key38": "5LpfAZcLxxTDwQ8jSY3QN6c3i8xiiMAWnPHYmKY4ZMiJXpxHEx8i4JsogqD6eoVY5aomR6d3punoS1Yoz2oRoaHA",
  "key39": "2n594t9hPxHaVMPqF25yKpdXgeREiypLTMf7g8J2EHojRwgvYF5HS4RtBtQgQLR9rdeH1oiQMphdshd9vyWtuoxU"
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
