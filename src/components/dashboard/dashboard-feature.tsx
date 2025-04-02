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
    "T41unvi9vAwAK4SG1ukFSGM6s1hvJFU1t8kv7MeYRA27pgDmoqzJLxZ5wavg1BB2puNgrRLD6GX4rv2zJMwxc4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hmvsccBhTMeZyDBJtqqMoTuGoq9p1aKd3LNpBTZU4QYdPfqQFDvA5wYz2c2yAotczF3baBYtw5o9a2U42EDZVZ6",
  "key1": "4NhPdetRTc1hPNB6rjh2ftrqVS3p2RC1vY8RkPzf4Vu9BRRaCYmF5pUhV1XJfvZXXYB5bWR5N18LaUahhTANTMDR",
  "key2": "4pVK8NfEdj5FrSNmiCZY6WhDrkAoMvJjuHeKLz3hba9diUGqQBi7gsX2VYBbbrE7Gk7sM9S7xdJEiejXg8xAYZAx",
  "key3": "53ntq1XkJ2249n8zzEAkNDKXCoDpbkPESRMmUGgRixpzNQW8fX4sLqSxywWWRShstRGQixTWZfJXzYCueA3NEiqn",
  "key4": "Fivxc8VJXAhpC1F9siSYEECD7o1qFs5jkWBHqN9ofs3wzXAzzvM9W6REQBcc4x8zdWkHpidamZdQMFuX38P9jxT",
  "key5": "4RGqaiHTaoXx8FDHzPW9jka9sPXnLK2qpPFmAYdxAZj1CB9oT1BdxmxdazhnS1Uyr9A7B4subnYDezmqwy7UfcHz",
  "key6": "5UBQHurepmNKMiFiJ8TWtY5n8yjPaUmj66NJb2ccqxdMoGE4H9uapdDvn7dydd4q4Zu9mD6cskdyjQPJF2b8zGK5",
  "key7": "EPLd3J8XEcTnhUL5ygpqZ29ofu2CvSz97pfmgc5Fivr71MhUiSJuBjdmQQrqoFEM7g3uX3jDLtanPVaJH3TW4Lt",
  "key8": "4tKBxkUmjzjau92e6oWZDtPNuhJaH1MzmhBk4w1GsL1Xx3MUbpkCFzBgHrE9bFArUMG7q9As6dz4ZLCErJMteT4E",
  "key9": "372dRcDZE8dPZFXBQVR3XagTGZnQcwtCMAr6TRfrVD8ajyNUkh5PyHoNes1VYr79vRQ8uzUNrcvDj6vM43V9kkM2",
  "key10": "5R8Sb6a3a8ymi5dv1ot4mYYCKutqMAuwnnD1cU587sffWEaKYaAtD8ATitAKDW7jPoQ96agn7djqGYgK5t2z6vrW",
  "key11": "2dEjPpdWGa12VS1MkKC4CvbxJsgsN8dHNghKhsUCzkgHUX9JAPMc8jdvkdwT19ZzwDtoRsS5E5KdswzJpvoGUsvH",
  "key12": "2AFCKsVjdR3ALzPdzr5meTtVHaxxrfaaFTtZQ2f7oYWfje9MQHA1cU3PpvYUZmEmnyq5DBtKFyaHhWpSybQz9sY7",
  "key13": "3sU172u3aSVDx43ae6JL4wTwYpaM7k6kGbKuu2XmRgioksF2HgsJFXGfjqM2zyP8CfUrfAdyj1bSdrqiGuUJEApw",
  "key14": "PCtzdfU9EiUNUB9WBmhUNdKuTD1ZX4vj8gaHVrynS1S2BCB3UbyCQVXumDJupCzTFNNm8En4bKQcqBeajfTNnr6",
  "key15": "2G8F8mnsVp89Ejn63xgjVuqYBotVuAPtpyeJZRsJSw6qcnAqdfH6Frm7rfPPdnkxddSbMcrc3bFneVfgeJjgEyUV",
  "key16": "4SMmPageGsPeG8YuEpaFwC2W3WrtBPJdE4QoSFH3EVSyXLNUR7MjSbbj7d8weQGqnRij97rhdJfHx4WtaSgGQjst",
  "key17": "5oDBxii8LNDJYxADfJbdVVtcY4crwfGHusDUFkVvRrXyrZMofiFi2ZpXE1iHFZT9K2yLhSPdL3pXkEoTfSP5qV2m",
  "key18": "2FiifDHR2wSgYvrCzpo7xR6UPjAkr63o5gm4TXE98HvTfhbeQ3js4ho4hkhZjH94KmvR391MXV6LsJ231V6RoUV2",
  "key19": "2V7gcYcN7QhMtovwsyN4dov8m9fYHo4h35nWBNt5GKhVZmSkqcEX5qKt1kCGaVtxfm6F1oyDhKTEfDXU89ddyRVf",
  "key20": "2oooSf7MkUg1AHxZkyK5RykCGNTgCssW3rXThPP814bTGmdHKtF2QN4Hk5ggMkXGR1doFXdwK75P635NBFBKV31k",
  "key21": "yJu9iG7dTHKw45aUynSp4A8Nkdntiobi3dw5DeN54BZqtP7jSC4ea9cPEeNGarNjcrzYHVHR4yTKsuHWQaakgMn",
  "key22": "32FX8fAuspW4gkVYuuRjSajwAyeJxBhBYUP98sYmjgjnaPj166YJPxQiUL3cesNLpZQCf4SNzaBg5VVeYYSX6gda",
  "key23": "4eMWJYZpohTBirzanviRi6DKNMXGmpxD1txBYmcR3LBRScRhkWrfsfZcLk6aAVTfYu8jEgpXpoZogdfyeVCjZr3F",
  "key24": "4uZyEYJVN4retmZRgAMfTGkmz5yfbH3brK2FUdiNQsXZj7QXpZs2me1E5ypfdycAFzBfzRbxpyP7B2nbSQtb9Ctz",
  "key25": "2ADcTUEdQGDp7Sir3VjoCDbSUYeDVPgUPfXxPkcfzRu8ErmrqC16BbxyeYxmRuAEHSacz2LUw6NAjobiEPPMhnZb",
  "key26": "1bP34SwQL2oKYYpHhdrYd14uwYNi899qmhHy42RfzTRrWWBpcNCHx4qYxfK62LDGU5QBrzTTvdo9jg86mBxGB8P",
  "key27": "4bMXz9BCXtDJYKYKZYZfMbnGVYNSGMiGpbtu8pFS8dXamsVhvJ7PQxTDg8KBKJyL7YLf5PPHVPxEaKdoZad4EVAw",
  "key28": "2Ei8RVA2D6C8nFz8Veb4cUu1zaKc189waRJTEGxAnC1QMSq8Qsfk3eQWUwDcYtmxqXkd7bAejjCd3pAz52YGgkGT",
  "key29": "3RryCnHkEHKZGWBRGVn3De4jGDrAkY3NcQVhfDnUXjE42Xx59EhiimheB3kv3HJ5hAcX1dLvCsTFQzVFuVa5yTeY",
  "key30": "2WDt3TvxKWQL7v3aJYpJMuBTJoN9PWTrBof9LPKt3fFNcdQRX75eBj3Mxzh7q9A3yB6373NaJQtGmvVeT9emzHG9",
  "key31": "2Ytnd7gMx3TtSjdKjg4yiALH8K321sSxcZ9xKydKiDeJgChccWdRw7vbWy3zuqb6jg9dGLiWTpsEmFNzUxi29vQt",
  "key32": "2KsCUXhffQ5dgKeLJ8cwtXrAkuaLAViHyoKprzKbYpET3E4sSbk3mtbFLzPJ7L6kq5AigDRTwRV1WWKorpQ7gike",
  "key33": "5d3svQgnnLANsHuvMp1RgG6NZyzfw11AUDTu6SVupXzqdmNQH5pMVjGbxMvpb2eAHdARcwcYBMwoJjb8Zhj9fVTG",
  "key34": "zF65yY8Abfm2urdkovPtG4urY7Thk6BqaskTPuwkMaUm2Pa2RXZmy1eKp9DU8pUYD6Jc8sGHzaEMGhrvz9FwB4m",
  "key35": "5m56HrwUHYio9PVcxv268Nv5CCuyT1mzURwTFQkHMW7zCFYFcWg2FqtbgicgenhYUPCBerA82qmg5ah36C97LufP",
  "key36": "2aXrA8sDcM5XkJnVNiZWwfLu9ZWN1gcjU5NAUCJtpwSjBgYXBpqGKbzKFM8nXije7dXZi7crUnSrMFpeCrL7Bwk4",
  "key37": "2wLr9uC1QVfkr2fr8GBmiADbSv3L9usCfqxnCdRTLzpBuCZnk2SukkSCkUtwQE682gE684VWJcSDBeoN4BsR87eQ",
  "key38": "vRZfsvMAzZGzvCx8nRgd9MNmFULrZz6k8nDgsgaxUePwiyns5X15LuJWbora6PuCQPsmZvRgXv7P4vsEwBHdNWC",
  "key39": "4Woe8ksZYpTnNqia5MwQHyuxuofEg9zhQ7pZUrWNMj3jXqw8vE9rp48GK1JxiGjznAWHBsHfQYrXvMEXkmPRvLT",
  "key40": "4TTLz4Q7JoUhMCVQK4xVoqQg5U24hQDGAWQakA2yECKupoFGMxo8HCQo1ywrmYCVPthm2B46JjE91sDksvnVJ1Wg",
  "key41": "2QJQGwfoHBEP6LrZqRnRLeU2fFpgWdEDme3riXALBWVNdHLcfGiVCCf8JFi5MjgHjESbVWthy46n7yEZ14uSvEym",
  "key42": "DxwftcbCaZDUaQa7rNwLpULRwbShm7WMddL4LhpXZR92BADZJZszWww5DCAncEXxf7RXWnume32hBkx762JN6P3",
  "key43": "2XZ2uLpsGMhButvHVmv1nNUyGxjNZabtpQyWuKM25AiEd3yNQ6JBGXQtWTgKwksXDW87jionBqCYJTsRiEN1kncw",
  "key44": "4JMhRctGk78HA8Q1iFoR5wVYd3SWvWheuacFwEGEKLBEHEGraFNKKXqs4Sj88cLncghr6DjHwXzuwnHCZaAp748F",
  "key45": "5CJK3UunRf8iWP8npyuc1PGfWqxZfMcuMGNMc3MxXGEj8qxFre6b9wXM9E8fUPYqvLE7X7XP6gtLohShQGoyHNoT",
  "key46": "XX3DeVK5HgwCYiyeCL9czyvvpLiTERbKNskdEEjWgYpDdBMzUqjspHyTVJMdVLZBxieMp1U3kiwbC72ThHHMvcP",
  "key47": "21RbaT6hru4qCTYQ7Ajte9QnCeNpvtEyxS1jJWY9unM9VNkCTwVN9E7kuVAx2M1o5vJo1grAucyndxZydrMzy8jB"
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
