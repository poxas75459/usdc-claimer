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
    "qpuoyNYoEqeYmW2j2MpZYy9ike8jTsRko9t9TiGPrtFcifLzVKa1uQZo3dFg1rwdx8CLfwF2bE3zR8EXoSUyVNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BpoNTBqGKpt1U4r4CLhdwVpQDcnbHymH2K7WFAi23unhWLc8ETy3C2sKuYnpq1aWFPt4serprjyaCMkMAgMhrCQ",
  "key1": "zkN933SZCSq65REXWozoavu6Y3S9XCTrMtQxxj5yhcvAAuv5nSNtYMysFDEu98oRCLgcuqYF9cNDpNmZNUJYHgj",
  "key2": "2KVQndG6xvSVeoTYmxWUSas9xMfvnvxAH4Pa1erfHn7BonsSjitReecNQjpNAsACtbaA4ME7qQ42ePt1JWckJjur",
  "key3": "3vGqGamNW2MQAzbGapxqAdoLMUZy33uMgpHTNcRb3SUnWzhCP46uanCSpye78TsfgkYajTpwhLcGhiukvBbzktpK",
  "key4": "3zZP2NLs8aQj41mtx9hRuKTp3THoCnhtR8SskcpWU6Ea3MseXmYzjvgQQADHfjRZ7P1E6uCtgzhxyNWui5mmvra9",
  "key5": "5f9CXkvFaGHzYbKV4DToB72TiTP2YP6taYyzVyGfYpDeM83C2mkAtuAMaVRJMmvPLi9ZZAsoZS5zCVAtaEjJFPuJ",
  "key6": "FQhrrnTJyerpsw42QZC8cNPnygaQM4yi7Pm2FdX5pSj7rYKzBJaUJEhoDraB1nBw8bFb1HWysRJ1GivJupkSwdx",
  "key7": "44N9Bc3ngDeUMK5k2BoQypjqiQywSwBizxQHGn7oTnQ1B1iaE9fXFiqay7UciGM11A1B5L8UjEmMhZnG716bPUAS",
  "key8": "2NtwG8X88co327TeJJYGivExYQ22CSC1wmdjVAQm91wmsjBVdt3v7rqLAuNf8FRjBLbnQRhHT1hqJsZvBkj3upXT",
  "key9": "62VKRCqkQsP8dTFQsscDhBGXsZMgpkMM5EExh8db4suRV4vUmAWnhcgWboKdKjCUnvRVmKhxjFxGUsS7T6Z4bdu1",
  "key10": "3gzwn8kdAQphfqAgpukjFLTtuw5Ff6zSdSxN6mPvXMpDqDrK15amojs9KrY2Fi5qrHQgqmvGZePehjkYs5DTSzvu",
  "key11": "AT6LeRgsJNgorPVxHJH2C1B77YR1uD1GrpqqdkH9ADrZP742NVAGL3AgoM1WEZBWXWnrjzkodaT9ErZHtYtzh4x",
  "key12": "3RnpFZXEGVwrR6DTSRk35PLPTG5am9zsmWP3SvTqhfBbW7VmsYJuBJhA5aTJr5YSB2xUWF5AZWLTwxhFaSgkjiAF",
  "key13": "KokNP1BocJsXMKwgSL5PeJDnGBUzKGAv3x6nyYHQqg9BYT7pwjApCbYpVSPidatYMQ1mp7svoLpYkX1RQiGeXAs",
  "key14": "qBK45nnj1EcXiiF2j33xehfB74kaJLqM4CroVsEMgTyotFnxMzYmLY8Cw4PVThhzQKahhRnaZnrWSwsim2RjNe8",
  "key15": "4ubZPLXZV48Qdx7XFqU2UkvftmZGwKKs4NpGdXngDQva88ocoYF6XM7aYvpJxDrBCYVBwRg2ZdjPEZXEFSozuNVZ",
  "key16": "4Zaj3Cptc9U4EmiXYRfWVg5P6v2vZHKh4bxmAdx7tnb3WSs7uNM32pXCq19NvMfT6N1ahjSMfLHp67hr1pAatdiY",
  "key17": "5wkz3jWMy8uFQD3yHYZVB3k2mLgGP186bGm3AxPtKw5LtMWXFBt8kqAELXnFNV2zHshF4DeK1XyGMEWht9nRJKnd",
  "key18": "66qTMRvEf63Gn8VCcEH84w88WZCkDxgESdqASkjfVLRDRnDWptXRbZinVkfQMQfmxpsX6LWXJr5TSRzCCQa4k4Qm",
  "key19": "3st7z4ovC2mQ3cbXHCCd7XL5dr8c2UzPWJWSJeSuKHr8uxgXwRnmuwGX2hUYoMfJMwApDNahFUWU8xm6G3r4vbCP",
  "key20": "3DT1JnSnccyszvV1Dcu9Dy7gxsgnE9eGjktUSYpYZAiXX38YCwGSyA2stniSJveEsePEfUF4y21YyBi1c4yeaQCH",
  "key21": "xYsC7MP2EqgTzqQeUwUWswLQtHShsa4GE7okBMgA7mChZAFfQaVCNDEujWHpNss3jeyGdsGoipV8V6xAEQ8QTpb",
  "key22": "52g64mtwspUhFKCTpsnpAsMeN34T4i7ZSBc1tQvZZk4WfVQPKbA8n8WqeB5fmNf5J8GevxufRQq2XmondstrZegV",
  "key23": "4CGKd8qWtSuvzbPVF1wbh1JUmVvNCHXGE8fmKSWpnajRkDwwYSzbVvtL9592oQS5ER5ec9kaPnWK3w9wdJzUBWA7",
  "key24": "2m5Wp7kyUBeYaRxd6fjrRABEe2SDqjHU4rGYCSqTGB5qPaEGh2oB4wM1Yzbbt5KhqjrPdo7YActMpHpMwyP2z8gt",
  "key25": "BF7983YuCYrebji7UMB5p2oQ8g6ZWkprxY2kd5BGHXHTFsaQ2BaUHAfVswyCAJa933ikhBdRM372ZxmDNhJqCzM",
  "key26": "3pJpDH2cttfM5b5FM6jPve2mNqxzJGbANMkHzaA9nDK4NtwJd8vZ4EDAVjiwUtVVatw9cpjoTvW7WPT6HPJUTCox",
  "key27": "4XwtwK6nn73JKz46QA3fenPvDZxwhNMBthf7sVcz8WV6ZFE72Hqc2LAGmySyTJpei2ukSx9EJEdRZdfzPNZG3Vk",
  "key28": "U1E2eeNrf2dAcSZ32ypXoWNeZk852ANqb7z6PWXc1Gf8yikx9VCLSg1ShTj4FgA6HXjgSF7khNBcYa2hQus34nG",
  "key29": "4YyENdfwmZXVDoSMc6eXUSQJGCS6jiyqxnxutsHUytvkydGBYGHFK7Pnfv6kWaZ79Bera67vxFz68hS7RZCndoMs",
  "key30": "23C6sAEfBkq25om7ms1wkkkEhoQ1gi9R6nZYNmU9ik9xFp4ffrF2jGHa1mYuxeU2CTbtitfUXFtjuP2La6fmE1ts",
  "key31": "XEh3uFVqBkhe5QcbYv6ua2tq8iuyRXoi9buGZ9X9NpHUpnGNvxLgXNKFFSBwQ7YtXeQCjuHCRaBZ8V9ZPNCSYDB",
  "key32": "5trJHqyd43PPFGbS49zdQjMdCbxYg5ceuoEt95EdZ2kxCSin1dy92nYJrNMjeb2m2Whvv7Vq3NtLpDyjmvqWMV11",
  "key33": "341djHiheFbQFwZCK9FMWnXgWueg6uiz8EjX6BqJXqugHRE6qFMzsHhC2jjUUi84nfonfMwcq8nuv4ut6KLdzb4D",
  "key34": "3b8XgbPoBTiFaNkKsa4BhS55CeZGo8gXWvC1dP1EeockgdMVCyxeknusvEb54BGfuK4PXMCxE8PVy4hWFduPwM1f",
  "key35": "3EhiTK8BEVD4A17eTVxJE7hqsLzbEPbt9psqMKERNToRxrke2sR9ywEr9tS62K1bDHJ3NbjmeuJXgranks9emcU5"
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
