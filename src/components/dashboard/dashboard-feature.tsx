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
    "2p5Af5XPa3mGmKNKx9jovoGjsf5DZosCgg3ysFGKFLboBHBE5M21qFuJaKR5VwisRj5WMWLRyTnsKrcrHm67RhnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lumr59bwWVnEAUTBeQuqH1QqrSmnpd26cxmzqCBHptn3zyspGLmEkT7DRQsKqu72RmzF4ygVqX2jfM8U4LRSFyw",
  "key1": "2nzGpRKwbg8nfYcNxfuLdeWeL67fjTFP3uNR5spMCSGwYvpkcMwYzGGGLfoeMxRCnmizZNdzGEtDctt84eQqAByb",
  "key2": "hgWdMN6rpSSowKH33NMqKN9Xgja7uVjfN9CC5agRS34bN7Z7PQscfXoCKiRsqPdLBLf22KLDAiDwAWwDFupiQ31",
  "key3": "4aNVUZ2T7ZKhBaBH737Yz9KJ6Uo6VBTXg98M3fXhtCnyGC74WbV55oEFqpRBcta5L6fv9c2Xc2J9GYGRHtqFAPLx",
  "key4": "3eNyMGve14opZMsY8a32NPJJK1MKdCCqGGRmz7MNgSiJsLRwybv7QFdTowgcKxAEBvxmCbDbsXMmSt1Hd7T6WQ5E",
  "key5": "3ebsykqKE4bwEs9C3E8BP3R4YnvK4uFtJjPddaS9iosm4EvVFDR73wXU4nokQ8riLmQwmzHSCZj91gagkKAzQwbe",
  "key6": "3YkuUGcuXgC4zDMpFMu2uZeMrXsUpmDGrnySpKhHn286nMWWELehcDeiHSadst6cTZaXfoBP6cseKx8FBDfgejDs",
  "key7": "22tKNYsSuvH5DqVqW8hW6xDQqmuQ6D7mgWFGzishtfFtqz9dSKpnHwNRUnfk3hky9DE6xxKVNfFwXox5YfF2ujiU",
  "key8": "4TvmJ5XjR1bbw2k8F5Qhze9dxmg7cEXsxqFaxyUFJDQmHApkdaSKdsRUNSBzYPWVPnTKtyh6jvxhxBHBgFhGL5vQ",
  "key9": "5D7LEK1tbgqg3QNfRab8MEQSfqdAJZe9sq7KGmqoSLMDCaRATxfFtXnztrVWF4EXbxdaYSrS4KLMz8UAdCy1DrQG",
  "key10": "44LUaw8SRqnELKQgFvmNvoXLEkJj37P8sfpBPzAHG7Fwhh3yZL7Po6ERC8SmHhVEvqKKdNHJjNVJ6YgfXv8MkTiA",
  "key11": "55N9T91LueNww9voW1uKjNRy9APRSu3DBvR55SFL8Krk9rfryTs6RqhmZbW2uEhNKNCbEZfDGp8mwcKZdiePqqjw",
  "key12": "F1hSRRTK7EosT4VWeoCQp1JgBfNyt4BFCiL2mJAZo7rbDmovxVVRm4efaANH1FiKn6mnCfYvuV6na5GB8EsUS31",
  "key13": "58GMxM57m6bhfgSVsxSQgJThjvufVwNcsz3zJqwJ9ZGsrUW2arkom8TZBBdMvwN1JLZg6P7Eabni6APvkXtGtZjb",
  "key14": "3DWfgtJFyRBgLoenhrwKjTBNKanxh9nCac2Js5b4uMW3P5t1M3gEZ3h5r911ysQEtajEEaDApSWKxdSzyD4UUwXf",
  "key15": "5U77dBv43ygw2UfaTbrXZTFUo7Soj84Fddzm35mXoPE4Ff8VhZX59w2JupZPqssKbc9LiXzjVLrAMRhsRWzB7HAZ",
  "key16": "21RBuuNrm8AJpZ2dkGFdL13ieyxTRTSwznc1kjuouvaiKE23yuEVajroNkKd6DH7rE1XTVoiyrPiArkuzpFBnM35",
  "key17": "2tNCTw9dgFX3TXGkbiT4KRHnMPTDJ5wMDxCW9RmXVP5gjDBhxo8ef8FJKTMAPMTtDicS7T8QjKQtb9csAZU54sQM",
  "key18": "2mNgvzqmPpBMvosHrtAZHaN6vdhj2riauvwGk3B6dvvddXL7oWcs4E4uQ4BUU2NAygE8UCpXCFnWQnJVUmr6ji94",
  "key19": "2ELSRdjrgH7UxNJE5dJqGHo2Yy3LdMFpr6a1NSdeR5oSiPaxW1gSZyAUdti4zozpBoGAnAt6n9ZW7cwGCXu6yjvv",
  "key20": "5p8jxmbH7Hdfa5MKZBg131eAsnUnj2cyaP7Awd3pY3upxGLNoePaA7byRvMAGSSdMQF69qiusc5UE49ZK3GAQNGs",
  "key21": "NTcVD37J182xWmFvrYYMPv1h9FbDXj6cfNueWgVtivESqf9GZECWdCzcKg6iqyLVP74Ueo9jPh4MsPjnMALP5wa",
  "key22": "4BEZKVAJ83jtkrXrqtb1SWXjroGyCTD24Fk2N5r63FZ37y6a3id5Gt2sVqVsy2dsrZtGfWKdtjFt8BFmxnaJ2hy5",
  "key23": "U3TGnGXQdu3DB3uuRmCeN6xcuuYUVRSNZL3vuja8QutqXY9fmFPtp7yPjSujhvcTpRPKpQYFnNUxebkPaMC1NRs",
  "key24": "5KjU2fPQzHKHsT281XuNaxRpFNru7e7Y5AXJKVjBvsTfP8TUeBFfJcKW95cgxmigrAg3SVoF5b8YsxirbanByWNd",
  "key25": "2e5v26zz89gQ6wix2BFb5mhaLMGNRPa22TNahVaKu6tq86hZ4c68ajnSqgFDgWqTWStX1jGwcXBL2rSnBa7V5hXc",
  "key26": "2g6G8Drkp2PgLvSWUns1cWnyRVkAeaoNyaXgNMUTYsLiA6gg92qNNLnvSJVk7cXCdFNVnsLDHpGo7mXsh5Fj21xy",
  "key27": "5gRqD1dseHdqoBG3bvwRkEJ7tH1p8RPFUbirNEJ72cGvq9yvxkPLTNnYDeeqSAuXhWgJQRJZjADz2SB7Hn6rEFG5",
  "key28": "2k7jwfu16sw1uMFVRUtmjzHdooScmJrvwDLzkri62V5wayzPWuaxjxoSJ2kDFKEGqXPSW2X3z3pUHkDgV4bUC4kt",
  "key29": "64SGvkpS2axQRc4FFYYNqCivmiH1YEr3bfsSxDwSqK6ar81HxHW38aZVTDKJ2Wrij2VVVzJn6gP3MLR1SFQgtu1",
  "key30": "3jHydwZpsGuYmcywRFPiqpmj32zeLXhc3pCVQjZ5i5Ppc1DCz246pJBMFQiF4Gtu9eiuXtKx41EEqC2GPRxJALnu",
  "key31": "3nZzSAQasFhKXkZNY87H7sVmMHoPe7Jd4y2nvaQZddYjD9ugskDsiiP89TAz9pEAHBYjGs3BVuWjTY1UhJtzNQ7J",
  "key32": "3jW4RwaJY9rezydchhWNxeg234L98ivDV4zA6A4fb5nG25j9uWwPfFiSBjwK8zH3tpk2jn6hNRcVytn6WZ51vLqQ",
  "key33": "sRv1DoZEz94wsyvwgL4shcVcFX743ZYczeqPPELzeQwYbeUcSGXSmTwxpXEdN2ZfdsqWwwbB4p1VLZrM5fsDhMC",
  "key34": "56jLShACrZDWovNiCtaKdea2fmfFAjV1QbzjS885uMw4JncPxu48P6co8hiQ4bXiZGCEfqEPGuhjGhC5zruvetNm",
  "key35": "4D7dFVtJjkQssTGbWMPdGq3C9MUA2kqKf6XPQ2AieMNShW1EagFWTf7vtRnthhHYY7VY38MX8rtnWZHwxX6AUu68",
  "key36": "2NrDaTkJviZYVmyF4dSWhWYpiVr3TJhk6eET9LG6BqAVLnb8vRzNjEqUNsMuKMBfMFGzWFHRQoxJ3Q9R1z9wEfyJ",
  "key37": "331SF3DR4BLtzsvNxAm4iwmVQJe64DpUX6kDjEWzrscMQACLKBev29pQSJh2GMJzSsFVHwr8oxEkunVbcwRPAVN8",
  "key38": "3VkfpusMc9MvTCBQ3sW2UxjLsMhXiFGaZZWifQbMHhezRnMYkiba88AJoV6FCG44oaQopeugyX6S6BCpprLBP13M",
  "key39": "5P36H8fhkQmV83rX14QSdVn1bQBL2DBdoiNKNuhxJqjrtUr5wQeC5BvJuF8GvUQgAUzdUCmRbMd8orhyLo3QYm6A",
  "key40": "3sxNVFpoLqTxsLJ5SRQjXudZgqiGjLrdrovy6iD3FdvqTS2pzpURZBMtNSedBzESvuNQh5BWnav1Z3DLyQQ8oEW8",
  "key41": "3wH9mVa6w2veKVX8kX9jPAxNTX3CUntxopAZ7TNzazh9GggLLiUCMR7qb9SHBj2riWv42PCW7XBSnX9YYY7ohHHF",
  "key42": "3bsec4uUKbBc8x1MuRTdFVGhstWLSucY9rD8prWvptHRQBfypxPGQS79sqfFwpqf8mWLamxrUR3grHZPDLmfrX73",
  "key43": "2S87i1hjHkDyx31MkHLsfqSnnrzgYyHVvXTuMgNdXdhhpNLDsAXkF8JTNVCf6WTaXAJYtcKCMmHLUpeZ9tQdTsQu"
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
