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
    "iaQK3NpkhZV2m1dCVWZQwqStn877mQ6ZgcyD8oqnk8k3VPPYdqN7QPUyjz18TQZmCztmTj3Uf4Pyx4zfazK8eBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sAth5n5c8fsjCHJwNUC2rL7b5U4XB3z9GLU7suSJ7dZ44weuP8bu9sjNjQ2YvKoqhyYds4qzWXWzM4S7PeSbBtC",
  "key1": "275Ku4ULsUHwjnwQ7isNp1ZCUzfqHqdWf4h1DRjGWFgRb3s1BQgoJ3JsxqHZ9YZLHhAdesUN42AQRW5pVQeHSWfF",
  "key2": "4gHohh2uGnJ4snqzJgyVg9hzB1kuokK3HxahNmVANAV1VqsPr2C7mxdQsHopdYETBwWsfaY2SCdkgfyvyP7iwr43",
  "key3": "2u8pbLvyJM1tu6dcg68uJHAcpaKEUrPLRoXqMWmxUmmC61LZRyPo29udFutq7JjttPXMLMDjamBmYVcqKt3s5Gb1",
  "key4": "5gFXoERgwe8Y9HMeE4ys3i1itgrH2rTKM8qBkZPtKStPaLUJHkD6qPFyesZcgDrKMy1W1uVgN2jsHsBk1E5GZTus",
  "key5": "3TL6M7QAmjkhGSHY2HQ1M31bPKEQHEMZGgZHJhyz73vAnsftRucxnjhWZ9rWka5w6p8B28n6PCZNTVW7XNGDN5Jh",
  "key6": "DyjpjQfJ7HbsgieEQKuREwpDfk2it1K5kpaAfmFCgeHzLsXtbZdpzCzvanNWLUbKXXe6GtNCL53oY1jB4ighPrR",
  "key7": "4sQQFMjN5EHucWZV2CZLBiN1CD8a8gzot9aYdaDLHeYHPAKuRjd45zXLKq9XFj3XGeziq1teUQaAU48Qv5H1N1ek",
  "key8": "2uDHLXiZqanDDBXhcCtpsAEjUG8WfqD3YZibiLYCortFTcy9NM55W5aztz75esZ8jBBippeHW1pRVAMfXYUHQpMH",
  "key9": "4k7Lw669pZPMfLprcpojynwfgc5VqWQz4tfK5PbZw95RGsTwVvUF2jczvM99PzYFRnw5HHWpkJ73FbdDzQPWABnV",
  "key10": "nyCHoxeQ7kYrk3SK3MQc4uinw1ZWq74PbWt7F5Tc1iYe2LKpRzwRkc3Ccvo5Lh8TM8Qq6prhGhKXmWCN96qSAku",
  "key11": "21mMWmSuqC7EPSEhbnnqaoNPjADCdXDN2vFdwcHdjobkWkRr8W3KKa3acaiQ7wJE4rYvnmxNEHwfFjjZzuWDFNLZ",
  "key12": "5A2CybWe6Z35Lqa3LcUBe54qSutvUUhFzLbKL3UznxHmMjeEbzxdhAjLcYiGsYjRV2wAuDaWUwdojYTGTzmKuryH",
  "key13": "5v9Q5hQ9WJ1kgmzf39AtRRYhFHQRDpKR96QesmUcGTdx8fiHneSGwwiRJFqNMwv7c48EGGSLDzKwZbXCjyo9tkzf",
  "key14": "qDvwqB7AayB2Nd5L7GGZZ5KkV9NgXRomYFWC6QZ5R9imkjsnvxVR1f3X5dR2R1msTFMSXdBkMKrXEEwKycBXSpF",
  "key15": "3RkGznTvEpe1rRZXaVhabLgB4y8K1x5LqzLivBSqN57Q2SjNVg9BWTKZNNNCWb7EG63xwagPu9ZqAr4UhQdy1Yoi",
  "key16": "2DB6cbs8AaiiTkZSbGyV55EyvEX1MuobqY2DYxCYAGPvCxqgKwVUawkXX5VuzZM8QZXhLNY5ZpY9GzJYtXLuM213",
  "key17": "4kfhuSu57kdHoahCMbGPk29YbA4BtJfx5PeGFER9Z1CwtVRfjaPY7nr4vnHrg2LjsLyZFri1J1RPEW74HMojrL9z",
  "key18": "GcJdXyxNDt7tdBdpfZNFfi29mbvG78WCZ868FQqP4fdpSHBLur3f2tSUbk13qiHv4uPubEDEoBWg9PhYfDqX5Tz",
  "key19": "4rhpXvnxyCrRxQL9wVT7diHcNvG3LeuPfc6w99XaLeHMizAkjp9Dzj1fe9GUKd7aDKsrcoz6zN47QTCLVnGhzz7Y",
  "key20": "TjjMHoQKNSvM2ueX5K4TnEYw2Kfg21zb3i1UDaaJAHaFYfUDJSWSKM96by7CJdwt88tnSGhSDLqQ38RxzZ8VDGN",
  "key21": "2YavCN76jWjTg5dRhmWVazgcCpUE1RUm7Ko3QwSxRDhFE2aszJerusqseSkPDqRRS8gofPsYU55WSvDUnLHtcrWn",
  "key22": "47YPVi3QHd7UtQTA3rryzinKp1N5WtxJkYjz1HtDcJQYnU1CVVJSwUcAWA78Bp5dMX2Bez9cjQvWBQaz1HVTZ1bQ",
  "key23": "nWnedkGKYqMBeGgbFmmDDoG77MtzEBf2WitnWXiAqkHuVSvqsRrUSUs2WwTYEpWvtFpFjgEoQq6aYqQ1NthJJU5",
  "key24": "5hXg7fEQcGCihkuYA4t3tWH2HsT8E8nnmnonk9ousw836NNr5ux2iy5Cq5HDiJAbahiayxYFT3R43MwDLJknunif",
  "key25": "5J8ji5ceE1MKetTUcqwk8mF3S3hCXyDrTUxC6sfKJ5Scu4woLBjbTKxoW5dDPAvTGbCcJhXn46Ht7cGnaY9GqEVf",
  "key26": "41D6DsiujmoMboMcUeBcpvCTsJL5RxQaSLvDB1FSNDgFWESjUNDFvMvpxN5KGPpAnfuaHaYUAyAs6oVCpjvGetWo",
  "key27": "2NosjXD6L5ncke2vofb2R66MzQLBnwGoBf5BMYmCxe2RGPG9vyTB5kmkpeZUQN7t5bZ6Nq5twyikE3qrkg9Z1kAc",
  "key28": "KtCptaC3dEwmePV9mQ8wp17rB9Cr4YuxcXvKcbBLKZdX1661ZmVjf5kLT8p7a1dTTVLrRLv2tjr3SwB3cY2XZbc",
  "key29": "p9KJaTFH13P8jJSX7T6YzAQ9eFT6VaRzQhj2faapL3sS8kyCn1AnNyCAvjHZMBuDc3W6BuRGm3a1aCp3dunmUVL",
  "key30": "MCDLoyx3F61LTAtpXMx1huTdwgy7AvnGeVxbxLih9xCySSqrtyGAPYgWcTQtye5d48N4JqcCDCnTh1YYu5gzNfb",
  "key31": "3LVC8hMLJQxWQ8vfBkBbnvkMNgq4sYBRP131T74ZZx9ipgJAwnjBE5JxM7c83jJ7UJuswhD9eexLszabPCy6eNTM",
  "key32": "ToDTvbXdDR4abH9L7ysfEJcHfaHFA48WVfpDbzSCqrAqxTJAgNxsmasqxjw44NGeEoCn7SQVY2PHK3fN2DW4mrA",
  "key33": "5zDiKhyNpX2yev4tTxLMBJkbzWxpKXGdihpuE5jZuja7A2nHoouETzouMJqDmm3qKffQCG488dDEnis5FXnLF8Lq",
  "key34": "5hjyzr5UCTbapuE5xgzi2UG8F3BzommCPi4PgYP3Wsqs2GJdjybjZiRGpjRgZYXzjEL6Rgag3s8ZpPzgZx1u6mhK",
  "key35": "278KK11JEAjga962KQC1n3X2YVoBw2D3YSbawgjZnF1thCZ1JctVrvqNSAPEUWUPNEbnqPq4rSV1xMFfw1mMD3s6",
  "key36": "3tbT5SpyRQiHCJ6RTYkzpq1fyNB7drSfM2hbMjDgQ4dUFn9THhYQhoeW35HLyCSv5KXxTcVU4GUoaveg39pjC8WL",
  "key37": "3uecyqP3Xkp1hC4g2mmHbEiGQm3npaLg692eX8J4TfyUmZryKfSeyHK6SkX46QkupRUNqXJrFxTrHMZtgp2php6X",
  "key38": "2s1Fs8mewQC6r84oFJvwAGgQQpFx5oPD5K6SsbRH5yS8UFK2SYrYSHGPEyVm1tJ23i7ZHF3A6TkE8QHfbkmgPVfN",
  "key39": "5iiJfKBfKTpybQ9EdjrAfvtzeJFJ6HzAv16UrWH2rEaAJb6zMLSM89ciUeQFmHk3Diq6YQyNwef7kJSo7X3Xhum",
  "key40": "2iKXqKf2Ao3Zq7xEyDPRxe8Weo68MityzrUDkDzwxafJS9Gqvy67m3NWdcpoRJU4fFLu3U2dnjvGM7yUAWPoKhWt",
  "key41": "32A518au2AxQ4HMQB6oDzosud4WFv7KUdZtmqvWUXdM4Yidn3Y9YNz1TvQY7JmomZdj3gvgZb8EGK1PxoVB3w1mA",
  "key42": "5Y7sfe4PYYSBXrKvSn8JLW3VVctLsswmsw9LfsfydFnbseSj9xzS47hyw9KJiULEbiCmkwpmLXnMb5YL4DS1sFxX",
  "key43": "3WGM116aKbZy9MWiPMQQCATyWnjW5odUHbSzBWFAjpQCjidsVsRq4aKJbQkiFZswrWPtFAqZVCyiR6naMKqsfhFN",
  "key44": "3bvX3LQS3s9ErGCmmtxy25QEY3mRf7wpSHfEjCQQTDkWXci34LQcHKgTjP51NFgJpWpjZaZbqctfSNfM1XkNU7H7",
  "key45": "tUyutdbwaag3vEDqhQZZW48AvvDGQm3G9z5vGgCuKsmbbW8X4b26TCJbmdAbeTo9Xxx7gEEH1cbTo2vy9g8M2Gy",
  "key46": "3CXaA1URzsCt5z872EgT9xWCUiYK4pSWMQ39BEkWWuPBDRQSCBrcLx8cXtyHjvdhPQc1Ld1hE7azW4rufpd8hX9E",
  "key47": "2vxtdD1onBGrvMk5vD3kM15FKoiB69wmjXYTejcWjjG3gJGh3Mn3Wkn1wF9enWNbfZ2vShVkHHFnAET2ggR2yAsu",
  "key48": "qUbCvLhXEpwM2yXKC7KGAgERzsPe5gf3vgBfDd656f8rpNQuFFPJjCEBRtAGKGUEXgWcatW4AxNnaCr3A1a1imy",
  "key49": "4JGMdAWRhXgnnxG86YGDDc9pN1QX56jHh994ctaNegjtm6smybbth9znQZqBK4MSdpDGGsaZ8YXb4gdAT4FroCgt"
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
