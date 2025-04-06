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
    "3peSAjQKf7XeirP6Kg4KnMQZezTA5sa38gywM8ZeksdfUk9YHUCH3QvgQm87e4DrsRqiTmwWA3G7aznyHwjTTYRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XWCmGT6RZD7tkmKvcDifKTiEJrWmDRWrWUHzqPkyjDKrq2FVKtvX2YuY4d24SRAcP1zbPW66n1Neg3S3kagtH8",
  "key1": "4JdFXYdtRXSDMX4JHWw3jZeBHtRM4Wg31HY3P7mAMcikZeJf6ZURrTo8jw31bXRaXPva7FvAEEEAsrb8TdfC1kYR",
  "key2": "2TSDNjspCoNDsAm48FHz6K1CHN6pMtWv7mrHmAD8kfN6TbTUqCaj3xtwVsU1Lg128UwGfUXiLkEkNT6adgjznjWG",
  "key3": "4xQcHWEK5hA18bC4V3BSSaNtxYiADXNSWPWYJW4LeLbnRJhUJD9ZBNWG2rxafJ1HYwgrWd7YtNug2THC3gY2LKsE",
  "key4": "CXu5pDF18QXpQFQDqrv6CZLEfPupHAZ9UaCqdpzpeTtnLAFPm6DonoMdsAFyegCz7f3ten5YMtqMXAngzVkgdL7",
  "key5": "2Wh39R1zSfeameePip261U4pfcM2tajrDRomC6QN9gJvJJSWhoukiC1ycop2msZHLtu1P41ajVv9KDVzcJmQPpMK",
  "key6": "4vZjP3K6K45c13C7HXXv2WHA82H3EWJhssQJcFiK2d4MhrAtkhyubVGGdEGVBr1QCk18MXiX98pYcBQGzpALGnXV",
  "key7": "7n55VjjYUEFVoAz7kthNHNi8tRFjMh4bhTpWZzxsZmm7Whq4M2bJ8TNjGchTTv7PfsqUFvoESSzgfqxc6gcSPrd",
  "key8": "2MzcwQACVGr5Dfo1xQonuUYQQfrgabgJ8kazXp8EP8oaJudyZucZ99qh8NSocVrn7ZL4wppd5iSuWrEJninA7FaM",
  "key9": "4NYhABwvhKk165HfBwVbuEWejdzp43xDXh6hxvdVBbJjYErSmp98wrFd48dCud6YAGttntYnVZafekHYEyxDiccr",
  "key10": "4pEeXPGTLuAKk3B1xN2SajanGzxKU4qVWmVixVKEHTCCFaaHBmBacJpE16SunNk1a4oF8cLSsoNLWBVLcSJYfpr8",
  "key11": "4eSY4ssHkb3MnvVybjcqtiYF3Msyix8X7bDQczKqAySKmjVA2QJRZjN3ozqYxAAvm6qa12HZ6VzKadRRohdht5ti",
  "key12": "2zQeJ6qVtbX6VUsrJ8K8QMc9SCRC6r7mZi5dDpnJgawG83YRQ2M7umqwrVS89Wq6jRYUQt5Jsxr4Vn6cM1vNkVb",
  "key13": "519K3mhsm1meRTNwGo6TyCXNrB8zapRGofSdRDoFSZQztWsagNaeK2irA4ABnf1dFFgC1GTGuic7JknHHKWT53CN",
  "key14": "58JD1duYxERK9Uht87upqBh28NTEF4wjpvcQC8ter9nC1qqpimBzjwVU219Den6i7UjCHhgEyX56QUuiF92chrby",
  "key15": "5F8oY1izV9vAxJj86RRbVH7mJNgJFDmT39esUppFmVNdn1NGGhdQp3LEUuFvFeCcgbYoGSrgq99wKSMsQsVmuitk",
  "key16": "3Q97DbRzhiupvxcAYLgTfpykbTb9aC8WfKP7a7fSx596KXrkvmjBNXnugmLBWcA9LHHm8KHqo6guE4Mw2b2noKiH",
  "key17": "4Fbti9MnwsYbHb3SajwtJLiYiZpVnNuUaGAjQzy8YSFH5srWYTrroSFjUK6yK7MRUKrm47nZJ1GUZ5uxmR15QMBL",
  "key18": "ezvfizxaBeKnFZMrVZkCDpX4GBUR9jmsYidfCCtTFwZu6FidNGjJ2nmPh5Vdq351QrTW8BMyAfNiyybgNkkz94X",
  "key19": "RTQUD9roxQbLB5s6irsvdjZMEZHGPgffud5MqcCEzVu8yRzoaLFfew6Mv7hPaVwRTH65F5P1hF2sg4CoKGHa77m",
  "key20": "2gV7xYGjzW6GEpfYEV8v9jpuQ3BZfcogaVz6anC7ML5GuYgCsUS5CHxKRt9bFiGursdQpNvxD1DCj7jtWguLdxVp",
  "key21": "4PCx5joJqges9XZgx95jYauYGwnZJRWQ1dGcftFjkoaUy73DQ4Zwh34WtJQXra9hSTeq52qZCGnTmAsC8Fk8ASNN",
  "key22": "31t1ZsuudLww3sDhRTcJQsSTztRP412h4ERjBKPGnEYfzi6cGMC52KK2RXnUHGEL7qzQny7hdwix9Jfurqu6gNdy",
  "key23": "4MZvKwxG46ozyUhbbmzsyy2hoWDufGLFFVhvYEkpN9yXBQi3TFCPCyBDvGZh1cMGv7qkbVvqryTDttfJ7owywMCt",
  "key24": "QqBtixsUTb1b64qT8XQCQnuqpo5tGF6ak2s2sNAj77dU59znse2HZCx3ga8qUv1N6MWmWZpLkSsVnmLeAMkPAJr",
  "key25": "43nhMJzw1ssc1LghNrvmmG5Xpq8tjDXYcCwQmjoFC4yJSbTiXbAe3GTDkqyzMQ948x6yGtZj2MvqAwsYHjV3zAjg",
  "key26": "Qw1toyH1wG14zxzYZRtwujnsVfk8NEAqzzV6RnNimCxTwpNW7hmx3hW6YCADtrPaqk6wu1N9NyAoRG2TsJdkvDj",
  "key27": "qRpDANryMBnBuErNncUdWKgxSDDJxkCNZXtf9NzYfmDf6ecgZTYaay7PS1ufYiQC2EjLrfsqbMVr8SsYTfZmtcF",
  "key28": "5UhEJGaykoPuvgkSMLkz3SmpWPip8XSTK9ZZU4Dt9Rc2LMFMoaGcR8vpbdi52GrR7rezEYeHzFpTcoxhxeSsQkbQ",
  "key29": "Fo3dTUMxTWRJ6CrUiDbHA8yzWJvjCTCXsCmiBkxeehbpX5ndwU9HeEkKDmRTChW6cpGAousUKMdsvXHYfi2236U",
  "key30": "3f1qP5AM5v7ndCbu1ZTeB5VkyXyn2JRys1PgEXCb6RD66gSbeShWN4LwYrGNrXQEt9AGdjEzruaPPvxSTw8Bs8BT",
  "key31": "5NdRfDStWCFCadKxQMpA3RKPY7zhsv45QNNPVfywT6aXr2or31eAjDsayVw7V7sQQZ5ZbxsAymssYN6pwgry6cx5",
  "key32": "2zrRQUyjnSrsMADzABq954MfCTTTkNZT35CJPSQH33b4bPNBvCNZzuQxiSVuxY8VqR8QzFm9WSYa34zGc3Z8HQex",
  "key33": "5WLdjSe2Yu4SG3jTva2PCt6AF8ugcAuL3FoH9qxqX6AYnpBTB3FbcowgZipGceaVxohpzenhCSnzBwUfF5DBaefZ",
  "key34": "5wdL5X5yGWPyaih3gK9BfDT82ZhD37UgaXMkyZX3T2FpD8weB692SHv4YQimpfrRvkiVVNw3Rr5gqtFGZ6CWoxhK",
  "key35": "5g9MiXLHJrYJMKGmpKEj5UQJ5apCu92pFcsNEDZDsatrNeYGUnBm2N9sVmdkXj78npzjLNTjKLJr5NKk9qFdpnQC",
  "key36": "3pHjXuU1hVX6NQk5VWoLukwhhth8wB8PJm3dni3FiJa3ncTeTVZeswz5NBDbPRLP8zVMWeD33Pc2nebpNjyFnfBv",
  "key37": "32Y3maFT8mpaMUNV18n8kVHfKYErpYT57D2asdosH5EtJotKKV4H8AAD8J9qCcdDqMjWpEmV2Vsm5cAi2QvzMNHE",
  "key38": "3KRgnbwYvSngWJD5FLCxSFiTJq1Zrfz7VB5svDt6G1DUooopDHLx8YXXGMHLcnt7SLeZGoDFwRUtS6QbhX7c5oRS",
  "key39": "aT8dg23r5XVwQSQCE6KeU3peeKqEy85tLWYuHZPtWpjsY2E5BFjLo2ypd7KctHbk6qdrFD2HeZa2Eb6zdwMhmPW",
  "key40": "49d5ZXSD2Cyz6rE2rDYDzZhMestmJGtpdJMH4zABEbaZPKdgt8WWVctZPAfmU99865a3KyZ2YHunTRGXKXnX6LLB",
  "key41": "S6ypCzXRKTh3TuzG5Y2mumyMAapQpnBgsjMYdZYzk2yBK6pE5dyUZ9y6HGeP9P7wNad68vLbFsW6HKocSqrR8mt",
  "key42": "w1P1wJ5sM43cvYkr8738uTgJenowjw8dQGXr8MzSwMmQov2BouojKetV91Zxs9wD9eeKQovKp4tuJme5CbpT9j1",
  "key43": "5yKUCYNeEjfm1JJBaQoTFGbhRZSZDqA6sxNMVQETebh7b259CDJH8Xnuz633JhnKkWHjejdVfTPVdQoUjvagnMhu",
  "key44": "4nCeELE2GTKhSVHaCrvaDNHKA1q1U96uxBsMQ5zMMAvx8Rdj3PvHHh3VHyTsxD5kHejn8CekQCrTCRV93PHXMKwG"
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
