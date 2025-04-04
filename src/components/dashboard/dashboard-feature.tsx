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
    "3NNfot7T2jJHh7T4wz1QLymX2LHeECYe9TUEfc48Kp3fNgk6giTQtfi9v4TNH3QPpj3pM4oANyaKifTRA2HRCjDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePUrSTqMcsS4tPuoJnCmYTGchi4tGsGofYtjvTEtBP5CUnBUSUzX7XnpqyhmqBCW5LoHS2Sfet3LFDS95HriDVi",
  "key1": "nTVwuda54j4hrXG27oc1DrY2utp5pAvyzoUSbVMckymfpWc2df2rrQzZ2uh1dMS3SgcqxyrhTESMcrWANMJwK6c",
  "key2": "33YqQ5cdeFBN5RWtZufDPo7mX9Cfi7gYGVruP2BRYc8hkGboUq1kzFiet6bwAE2Tfz71Yp9B8236o1HEyQtXTSN",
  "key3": "5wq4NWqbYiWUakFB6fqebG2vAsrbKsgQbNUSjRm8Sk6TyjFy1iCqjA4mEY9yT2HfSpyjSuQ4bZKD7QcPqvGMtHiK",
  "key4": "4u18HmLCBcPqSgha3GeDyi49jX9uQUZmWHrpc48bmRaCsuvsYa8FphvzqYkv4LiTBZciaTepeigQF5rX8AUqsZuE",
  "key5": "A13GuDGEaQbG3UxCuXB7U72ErSiQ5MigQutN79bZfnDPBr9TzgfxHh59ddyTgMCZhHRUbNYcvFw9VzYznGQadb4",
  "key6": "bKroDvuvmBJetc5R8SDn3n4nsWCeXs5vazUcSiSqPpn7NeGrBfxsqEizCF3KKb24fS2K4ZzcHEABt4hHpMqpVzw",
  "key7": "5ShK3nBfyaUaoNm4tBEvdrwpQ1ZvxWPw2RLsA4ki1x9yHqy2SA3WHBb7poCWpcLAo1n97KzfZvhcFSaaNMVCL5T6",
  "key8": "3iYNSjfUotkMRWS8uWDBkGhk4cQ8VodkJQhNjchMbE3QYKqusQaDcEbxTkc6nYcmCaiyJK6S6rHG1WiUF74Jxv5n",
  "key9": "4e5niAyCAcuBHMTbxL8YMggJqGsnyix97WKadHop6wfnD8ypX1nUJParZGo3iLfpumSKw3Px367P1y3hC8Qn7bLe",
  "key10": "3ixVsAGnUhWS9jqkHaR8kus5UmXY1gPehhbSFh7mAYokj1qXaQXkYcxijyGBkKic96zRboB6caC34v8FoeFp76t8",
  "key11": "bimptvXHgxUb3jvcwvyDrKzK3UHuWon4H8zVfAWk4y2utfHt12zkXRaxeswZUizy1T9bRhQxsMkyf5gaRdqNnFP",
  "key12": "2KesTZicdf7kpZd1pMg258brThHbkgCwTUuQFkmXvDzM4j8Bdc82Se85wHBMMPo6PY4Vsgh3wTx7iCDeungS6sEp",
  "key13": "5UPPdSYw2hpLyF5qwvXhchDQQLFzd3uZvdbSVnVS1ZfGWHSyGUQPRua1KALGj1ykyZvXsb1NucYBCu2Zt54qBA23",
  "key14": "cDufhjXgrborKhwHX31wZJNhiDyN4AQZ3rAgoTQxoUGr1mRHcPSwby3rAMfxrmZPKXqMgXMP8H4PmHjKk6PhniG",
  "key15": "2ktDTzPrCeFsm1BZ3u8XZH57hpTx4UxFU7XrCZwLPjzmLE2ZgMVGYvYpvWRepgtoy71i5bMdFjmp3AfwXkL492Wd",
  "key16": "5Pr2BST8AWB6tiPf9DHxnzh2YSdBg561SBLVobZGVngufcVk3HDUeBUxsK6DDZonMcdh8w9QVyrWiKnAoni9XgWg",
  "key17": "5rdNutmoyG4Yr5Hb9wPiYbjybrYQkyZ8TV2MWqaQjrVXRRpV83fz8GMtDe6JvdAB2RxyM4z222wEErgPucm2jypR",
  "key18": "51GcoJzffDimK3N1khQFwr2mvvYfV64zorzguS5od21TzFUg9myKiaPpYfHyCqTEoXhDSdxft6BHgp3zmkHpt8oP",
  "key19": "3dP2X8LoqhMjvzmfAfMrHW1r2xgjKar8LY9dubPPgKevqQE3qvnPEfiMT7N5TrqvyDYgCd5L7gRj72LBiJsqnSpT",
  "key20": "3x3vqL1M4ZDLQUbSLDN9gHCNfvW67hjsEksowbP264xU5T4VwkQmigqq23nG5rFdSbwq3V4PookKmgfZMLRebon7",
  "key21": "garkXjvWo9LuGiUo7NcGEpasWZoYcPykyHZA8qASUHGACyehN9KNiFxPXgbvkHS2ieC5bU65qr6pnwNhfusB1zb",
  "key22": "bhsjHCEUrXmdCzUqkLRFMVmqV3D9sgJbqpBqqYSMZAdzS5fvk1iW8MW4G5FZoumUzvh7pqBvDrUecV9hFdyuLnB",
  "key23": "wskDzCEQHgSBy4bMeu9Xe5cynGKbQJ5FvG7Ua28LcrLjm22D4wLB4rCgLnFdaXmPLQ2rMAw7x5KCUnh33VjFHCg",
  "key24": "3H1XhcV2hRDcZSSzyzL8cqjbgUSkpjXGBWURQBTmqGVcJHxv81A8Q3WNCx6sX9xcbPvuza7qtKBqUvFKV7A5RYLM",
  "key25": "2juveLu31ddz9k1xibsdcaEGwYZZHW3MGzFQz1i4TrjUWHS3yTPM13BABQ9b3h4aajXfU8dQPq7JdQk8coHGohoF",
  "key26": "64xMRrSxWat4aNZRgdFqbrKn3k27NYcFHbADjk6EzkpT8S8uY16B7WpN4cX6jCtZYqArCAaYmZY1iYhD1Pq121nK",
  "key27": "54BWiXQ3HrvCnkYumF2rJPNCocLx52bejPnRmrgnxBzrDsv72Ftmy5wzK5NmUxpqAhwpuLasGaz4ePqSqjpFZrZs",
  "key28": "PdfAHnRndS9xscC4n3dSbBZXDSJQnhDNPXMoALxf8skarVXbtxB1yt3Cgu6ZrVTsv2susgfHPi2mBygaXbstiA4",
  "key29": "4ZAU4VZZYzuXSKD4q9kpe528Eb4kwinKvxW34F89PgJHRBntaWwFxtaFN8Eb24bsvk4FB2Rk1kq1ZXXJnbgnYJBk",
  "key30": "TgMHAV4STcpqXAbFqb3EDDdw3txdgZJc8mujt75oAjJjXJbkAvvueBTQp1xc92do79VKN1Rv1TdGS45byEZCt8D",
  "key31": "47yWnobPnNaxnXh9QNkCKfCuiBqRUs1u2BRhKPKtJJKnQpeMYMZipNvuPajC31voZbc3EaDjtN9sX564UcYH6YPq",
  "key32": "3ZEQksAv61pHDyEsnxRKVGvLdCpjMKAgAUe6NM8h9WnXnYbK7qRcpd48jSH3Vo2oN2UqbzFmvzJJkhmr8d7AW5tf",
  "key33": "2u6a6eCPYk2yV1EtDkeKruYNJ2KHgu5sHWiGM2Fm2HBRQKnm8W9Xdekxa1cANX5Adk5vNmRQAS5AS6Fo7aEbX5yE",
  "key34": "3CEYB3fmfcg9ePMr7cQrFfg1heyrxZp8TPe3wDFc5xmFdwkTjRSoCeQbYAZ76qCxLKFq8fQAn7FyQi2upfRkK91s",
  "key35": "5in5KrXHCKAb8ARun9TDyA2WJZmrhv9yjZEWMPYF5jgLx8414nfAPBz4cX9fCiB19Ls25eGgE1haSpAc449bvLqv",
  "key36": "29UGJ2ZxrXSfDf7pJVjNEN3YCGWtocJyuhVtPWsdkwgBhPLErdPnGoV3M8iXqPawow7ty7XyP3ZSAjpgRyRLkmJa",
  "key37": "5krszgUNWboNxXvZDoM54LAsL4Te6J3PkEGjzbLNpU914YtMst9wM4sBDcxUqysAWDCyLDvsGV5rjjeVrWvgqdhS",
  "key38": "3FDWQQ5wEV4PSZuajmqBU7BuNfmP1JfnxpH2ssMpuT5iVXaKfwjpMn1xLa6yAWk86gKcMV3jFYZb12b4NR1uKvW7",
  "key39": "4YPMJU7Jyj7T8H472Yt6odnewqZgDumoydoZgqNes8AbFJrcnWT9TG5bYciKMuQcYHjkeV8VMj8PDxeLNka3Hi3v",
  "key40": "4G5ruYY5GNqSQX8L3j1uCFaXgSP9fvrF7JCpnU3H9b4jaXXXFpXpvSWdMJGYWYPpbNwsEr8zE9ZgSLXxuEGQ6Xks",
  "key41": "4NboAaUVrdKu8Z31fNdZbCRfSM3FGVUxGNAfEPa356YJxus6DNEPAjrjpsqq4AJnHwDwzNr3k6u7oDLZw8Mhuao6",
  "key42": "3Bw5dcRHbkKY35cDiHvtwv29fj3LU7wAqt7NNcKVxFXckBnjP9CKhDziQCUwQH73ghPWJhXrPYdvCHFPPr3YLJsC",
  "key43": "2yU5VnqqQLqhW1W8vhaSxei57UhTLJd2vAtAGknkz1vTZuZYfj1tq5q6huECnxnx6y5B4x1CKqzyJqVS1dsije8z"
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
