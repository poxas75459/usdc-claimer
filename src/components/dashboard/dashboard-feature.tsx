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
    "27wM77KPRbHnCFcSk8q2yPANaYGuermuGzeDBxDpr61TH4qWHs7W6Zjhg2eTd4L3tc2QgUHnRJzyq64P5UYVnh2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ps5nBTryCSRRx16ZXhAoEoFKabqc3fK3Z1ypUi132z5DhogGWjLbJcdiGnrPuecGPioyDUhzGQ7tAomrBmYVAgj",
  "key1": "indzSqrgyZuvMB8sCPCtV6dHKk9frXKSeSx4TSjd1kcFkzfFxW8pa9ytzAofKqwQQkyycwYizemcVcjqf9NjeEQ",
  "key2": "5ChDXsNHXWmDyz1UT53kJML1VE6strj2j3vHuwLbH76ANtrNmnqVswXzUbygTMAdaBTczFH36838MdRN24aMDryX",
  "key3": "3xtoWw5eVL6xgHSsxzUArE1vUa84VkKAsaM1AwbtT4SMGoGtTMWmqirmcsFvNhzGvTLneUvWTJtEVU1REJF3VJca",
  "key4": "3YNXbpRFqL2FHbFsxACzNe4PXtu4deRFQvj8VRApBEBt2m9VurJuyPVfhBpo8PcGiN6qzR6VLNvWsi9Lt1WE7Kqq",
  "key5": "cjag31yX9xJQNvXQ4gdxEo9bJUP7wDUcZTSJscoNtTFHV1NNRpJPHn54n6BZUrYct4qyHDkLRmumeHbSqtNx6vq",
  "key6": "2TQdrumcNWXcXhwJ1sTKH9A2XodiEcVS3FnMmfzB2knGR8U7L61WEDb38xgjNgGUFVtPUATh4Kvr6dLWwpWKEooN",
  "key7": "2J5JS4vwwyyEnbabxzgpCpdNmsgG6N3Q3yRvLkSDbWbJ1AMnNPHbxeuEKHZzrix1vY3TL45tgooceai7gqtaBa8",
  "key8": "2rbfGCG9PEi6RtZn3gkX1x6M1WSWrJd6Lm1rqdgR5jX1QmTD1vpAkXpXvHRcR7VUWztwsKaS6eE6SXAcX46NDsxG",
  "key9": "2HFU1UPC6oxgiHuLuzt6fAxKjW6QZ8RUtADfwkWhQEKLT5h4BnwG1aBmNs4ScttuYxFZwzKeZjJ8QSyyfe9kP5X3",
  "key10": "4dic3kLhHGYwfGWiA3rvwFSnHJ5D2UJvyZYMTuhTqgRTCzjJ1maNK8jrREfRKeTHwgG4FGGQHkFPuZi3oySnsa15",
  "key11": "3BBDESkairnJ1X2JUcLcAxyPHx9jrNqujd6bg72LcuV3YZWXq9zEMr3UqAKLNQRZBU4XJKKpCjo9heGNP1wrpmNs",
  "key12": "kTxakVPmxNwU7bm9bQqf7r6bDpvp1TXDP2jPvFW75DhiKPEMxQNkv1UQT3AYFsXJv17Zb3cF5f2RSZxWJzkmRBt",
  "key13": "4rbgyfaGp3hNEH6UoR8Bq9XGHg882GUbEj5FEqiKD97p8DrKouKexz4oR36QTZB8jivam6MCSCtjtJLhJZpepQNa",
  "key14": "2hPL8ov7X4ZzTf4M38fcbkJSLmwpV7uwic8FYftJJg1zo4CiJYC5adAehC6oTDjdpftipAiMXHkWo2Cyg52z68V2",
  "key15": "3t3RFsaEQjWRrPfKcbQqiPTQjarJsnh1BJxx1RUMP57EN1iSPFajY4qUx3mAbS8YhK8PfK5F7xTrKjJJyHThv63V",
  "key16": "3GQ2okXT359e1xNsaUrmjFoNtSTsEFJnuSxdVq6JWK3Qrgc53h2TRhhnpGg6LgvnfhZZq4Vsz6jDXKMWAc54Mdn3",
  "key17": "ZKZRBmiTRHXFGVqfpAAsJqi9pDcxZhQsgRyXiEZN2a8AAVdftuet8qHyAHiEXAi4exMktMtD1jpuQnGyau36kv3",
  "key18": "4EumMdSwcjtgaBZ8KHrtsoGnYkbA596bwMfZ2nKShX7h8ZmxyCsoGuRFL6Syo1YpafdwJxZpmrkeg5d91b843n8M",
  "key19": "2hHoYimnQDVgDcntHKpM6XiaUYC1VB1qePHhW1ZUztAKHAroY6S56mgBMz4UvUTLX211cfdjNCz1v5RBAEikWpb3",
  "key20": "7hk6KBS7h8fE1LMBT6i8qrTNqk86hnAaSVCnabirBcgubg48o8dRSLrFRwqzj1rA4uk2jVfpdTGauGQHezQqbJs",
  "key21": "DyM7WAtnkqhyCS54CQTVqCEwfVarAMgB94e3zNVq5uaHY1hu51yjvYUhrbSG5Ygk2dJotLXKc6DHGTRpMTWcDWB",
  "key22": "4eAmaMyqDFatQhVcN1yCwfDyaRgN118tfe2oSwsPJsYwCnrs4RnhKMqvU6KFZ8BNkuFmPJLEapSC4iSZnZvxCoGx",
  "key23": "5M53JHkqzRiJVJ2AGyyCbQxFFVYRxww7X6bnkaejcZSjxL3uDLgk6FEnYKp4AJ9vA5Ww34WWiZehK6mWM9kjmbbL",
  "key24": "2vyywWLadFjRqpDu3SRw58c9LMRGTRpeA847HVGsdqM4n3vwbCCX7CY8oyW5JKF8QHXX95GWyUT7SKnMjeXPJgUL",
  "key25": "2houyrC3Z9kYf6s82F8c6Zr8YCo6icVmw31Tr2pHzC83Z1NGRdkdb9JiVbSKnKJ6Xb6Ef1Fb9vZrRDmaSqosMtcp",
  "key26": "5XKBTEDq1VxWBiKszv76UjG6ff3skiE8g4xV92b2X4cWxozKqMVzKFeWf7DUaW9KKSTkbqvoidw1ebSwKjBQYpVQ",
  "key27": "3AwVGqiusrkYkA2tqCZtDhzH5oBYN3ny9CNGnUjrqQSnayeDu4Vqa12JV4u5HmJxHnE2Kz1DFp8XNMcmGfYJhnvC",
  "key28": "GENPmYchDPmZ23Sh2aBMut2Kee2fCNbQygtaVGgNKU2ojsh9aUpb8CYCJye8TZXMqxTbssivdTcFsFLBxw7MdJG",
  "key29": "LEex5BZuW1DHkpuKqCAogMs1UTXgAMMrG1NyMxPeEUXYckgcDRxNvt2gJuu6HehGkGyoghocxRtEHkgzBpjh36P",
  "key30": "5LV6NVux4vb6BTBbvdNBxxrATo41YhxwYLburPZHi7R9USmwbdmaVce7tZAcvVyLaknZZ82rKgraKpyqRs7cyFN7",
  "key31": "5hKkgNM2YPNDPn19f8yL7ddLn4CTuhVfKSYBU3PL5VBjnsHK5QeWcaoorNVpbXkTBR4nNUaj4zCnfLj9M3YUC5nG",
  "key32": "ctrU7aNCkpqmf3UXF43uWDsK58JJpbGyRR97HbVqTdZRyDi2AAAZZHGvJWhKJPniqQTF9WgPbFmcaPkiMeJBFSL",
  "key33": "3wXgVFBCE2JHNJj7xSZYSPh2NnYNQimsKFD4TUfxhMpnLMgG7FbDhioP4o743j4sTu28KFmyX6UpZ4H8xm6LWog2",
  "key34": "5kpYnsKLqaPwvAdAymsXqSUmysYvzJbD1sSmvg1MooAsGDe19gx3k92gZZL7Y8BX4xQ8vwyum52QQgQGZwVtPM4G",
  "key35": "t7eU5JrDQ5hT3f55HtCZDwaeA2BBzcm6whf62TZV5wg4h5yQCKJ9W3e3KiJa88GwpLxwpGhyCgDknTZ8JWmTzrw",
  "key36": "429BWgypejdJQsTKjG7maAmYfMBN5Viw1pH36k6stwXBhAe1jWyX5KLnWUP54dbGuDsbNVUVxQXwrftDZjpWauEk",
  "key37": "2BKosX8Lz4YUJJNwUmpY7J5ZkwoE4d29m75tUfq3KRwCLHPMmLnM9Zevg8MRUn7XPRL7wn8LZjgjEQtt4qu6LMuv",
  "key38": "2MnYG9JP6JvwZoUfoPCwKjjmXJt6vSaJKDQMyJ1tXMUofFGbk6kxKJxd3DMabqSQYyiSf5JGetMRGcmV7h8v7pLy",
  "key39": "34kt3fNBvukBJbMYrgDp8qSxBQiWBztcJq8LHJssLz76oeAar4t7CeaYBTisXqNQkP3huupPbgoVRQKw5hMwyBZx",
  "key40": "4bZEQgruAc4WUxsxHG7cBUB5Bg2Dv6ZkGFHCS33yyQEU3vuN62PJDphvMwJfmtbU28ioPky62Fd25Ng2eVU4j3JJ",
  "key41": "24XwM9WTYYVsS7iGPxPs647wro6thCRCJWvwd58o9JZc4SuDw8XKQGv3bhvoK7zqY1LYAE2Fas7DbtEEBbBoQJWh",
  "key42": "58g7uLHU6vmL3vAUqDGbN3qr17YjP4FTaEStvb8pXPgSfWt8f5UGEnwWXAVMYhDPVNfz1YYpFq3qrEjP2UCcj5Lm",
  "key43": "3bZLAieVvcwEsMbzradFTXPz7DTTsAAt7pmpCj7BgqoWTpjvg98gsjuudUgBk1Xjkf5grLsDuyqUVmYu8U5odQVv",
  "key44": "45QxsivH6wwbs76Wet9mN5rLD9MRzHKrAuPM2ZnS3VqeqNkQAW3fZoqyr5ud5qTHGbQCpBAWAMtgv2LuF67czXrk",
  "key45": "4o1Ld2UAjyBdyXUgYPMA6SL4j4Eb2nCPpa1rJC96UPgXJVe49ASkge6ioCMsY1wsQfUjphd8CU6aj72EdXPeyeRx",
  "key46": "51myzewaWG8JZTYBPsuaf49rTki6uAyg8Ni7yfxRgD51NkKoHWzaQBeBEqfvux416GF9ByaG12dBKzE8D6UEUFuE",
  "key47": "2LVxVDSUzRVDHtHt2HaM4DWSPr1yZxgH3muG7aTseqY5S7vs2sLeycK91x2nraRC2QGcsQ7SXpmEPqS6QEDcH8AZ",
  "key48": "sC32Jr7CredxXm1iZfRAbJS6uTLDeNJhkUaaG28t8jxn5wmFg2PEXgju2Ckf4iDcZVVAwJ979vtodHP8AHVwoGg",
  "key49": "59wqPhRU1Hu1wL8nKVHjVyTmzu2A4ekbrRC9Hjd57vJucC1v6ZZTpchWmtMtwjW8pNN9zRJM3wMKRurjrhXQ42Ri"
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
