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
    "2arfKrixCHgnNyQkpFtxqaqo2k6D89k1s39Nnk8P3CgkKBtFeNnQM2F3363W2b1LyyvNLzDSS5oMPPxAFynZQ3aK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fnbK2pmN6pua4tb8gq39KMGhYvGeJvSRY3GZ8QzZuD3fRchkHPo7CLst9u6VZX3Frwyasi4KTEbN99L2YtuLKwD",
  "key1": "3JJqhsGHS5HjfgDU5Ya1fR4AsA8aohdeaL3jmTxnoTrDSVvfuMn2EvLJJm7zVcX6DCkBbvq7YMDTCNLZcbwgQ1TV",
  "key2": "5Xuw5fhNd7UiHUcUpcTUFTmgJ6E6ZeGcQ5CT3767kcUHouwWCvYmx5kkWhx1FqcgoBmtbDWdBd5LRePivLkwebvK",
  "key3": "2CMigjuJuKSUAyUCmcAP1jBF6UjFKYxJ72XMCQqEqk23ErV3U7oN2WTWBK2b2MvHJPf9G4hZSKVbPhU8rhQXPRoB",
  "key4": "5HXGDLJjhU26RqxtwkcBma3VrPkxmBLnbRHMw3TUx6x5xrhVVJ5a3F4uTz9tpTKsqnHzsvuaVKJArQtczhFHFfUi",
  "key5": "3MRbipxCdqX8Lv6SUnvFeqS6XugNnZ7q9K5vWbgVeUVYAavahhT4LkZrnpRQ4HBPrjFWSUVBvjQ2EAeK8SzqU96m",
  "key6": "4SoMDzZ5Rt4N7ctJm28pxTcV8jiY65ezXMSJCohZ77sxB4w8K1B9ervmZbJSvvspLkxV1Q6KQgkHnWyH5pXNiQAf",
  "key7": "5fFoqyUBMbFQEP5mdkd8fGBtyGKUSYpWKsSrYR6et2DMA2U529HRy8zjW2VWwjQYdncoM3iz2VoBPrqehi5JBXrx",
  "key8": "4Mg4KXqRVg4i3UtFnPi3jwcWZW7DM2Wdb2jxpn3ynqqMnEeVnQUBUkVoMR1g5ACvNrzjudvmDEFBVLBGr7Hgh5sY",
  "key9": "DmbkuH1rLrq5s61DHWuVnD7nNSDhtf6GVfuLfrw4RUHgFRnLiKY9uawJhzvhJB3uxf34ogDA6wQRS32K6wRr9dJ",
  "key10": "bcj7BSFs3HnzC9fdbFcj9fV5GuRZCm7dvvy7Poi6E4StLFYw9syMdkypzs36MReQQJ6uBEn4ybTHUSV8A39T4Qm",
  "key11": "5mNf9WQgnvhPjQRD6c1HBvh4JA8Dk6YoJb86rULEnP4NZZv8RyFZNvtifjfvouyWNaayAh9cGt7CrxEYDtsdqBNC",
  "key12": "3TnHnzBSwiJ7EZj2w5o5486NucMzbeSh8EYKzZi55KBaiCMmJJRAmjavtzwyvTWCa9pjupA9GHbzxr8eyYhu2NgV",
  "key13": "24bveX1KQnEwzNo3pH7SdqSRBgRhztUifLoH1jhNUYjazDVKuthL9mvqG73bpBXULC8cCVZdyxRf7BmLaDGSBtB4",
  "key14": "6K4HHBcAwyXiomHozMLSHDZ7ZgRodStTB8D4TmG116Nv11scAPqNEbKSyKGzPrsywBspJbFZyHzN42WXuTaHjM8",
  "key15": "4iUmskYD3GPiDRuJxk3YUA1WYjvdFDxhvukEGvQZDM7vG7cRLTXb4Etu4KpZnu8mwv96vA9QxQC4L47hVkakFmxW",
  "key16": "2r1XH8mJ4KkZkZCJFD5VsbbvYK8joMNj1XFfgrFuX57qGRQihPUEB7guybJdtw3B3jcARCPY6rgtqxgJmRBepzND",
  "key17": "4c8TjsnnDYxbh9QV5muDCqGcojKzBCZX9kFimCG7xpk1myevF7Ng44Kn5DJAT3eo9FibCu7fipHpTGQF5RMGqnLi",
  "key18": "5xR3oB2QA1mTs2WMd2gYRb4uqWbyiBnVxLwALCWMgv291CU7SSLbkJgDD7LnqQsZoCZ4QwCjeDcH27uNoGCTMGxf",
  "key19": "fQngFbdAF9GNNtMjnSzAKPqpVZNz6T75zcBWGt45VmNjDKfy1CSftXvHjYbHTBMag7Vbmf42TrgmLVCeT4mkB2d",
  "key20": "4Dy7jqWDbkA3jD7kzeSgHRHrDaLsNXYN6gUpBcphgydCdfn1jGCnimPqBUor763GeGkKpfAa1CVmr7zM5H1pgdGw",
  "key21": "3GCPJy4EUudYcMYZqyJss8iGoekq8z5A2BHikx559zeEUXUUKsiS66SmnY8v6CePpwmBSiDUTKaKFd6WxvpCzjJj",
  "key22": "5sTZVDF97UcwK8QALFjYzxqJWmzH4jZQohdsNrTE8jcS3Qf6oZxbkvTjRgBsJq6bZdeau7kYZJSq25EeRCAXvKoA",
  "key23": "3L8og7sWWLuh6y12xSDYmVCSbzHHPab2yc7LsVci7r9LnhKmm2bvzcBDPmB9JaDV4MMgreXqzcZjJgfJrZMvSCm7",
  "key24": "4z2hCeGGx6SNVKMGhVVJzsPcn9p3zpqwzp9E3u4vMCiiLNs7hkiZrF7HXTivbPQehNpNrF9tmfCfxPaEk5SjR6cA",
  "key25": "TyAFKRgtdR1hWSiE3n6LHZsQv8trYp1SoSajnN2TgKCbN9RHjEiTtBrfnLbsPddbMGq4aiT3mbX2EUpSjPYEYPy",
  "key26": "2k3pa4HYLZTGNjHhAydSbpxG5jpm37Kn7oWNoGobXBmSVrWvMDVKFSKBRtwxCmNXvjHqCtJEU3wBAGMFyPEdPsaa",
  "key27": "27RRSctevBcCsKC8DgXo54jbQGihwdfgxyQJzHbWYJidw8VrCvrhJdKT8zZurCji2dud4mgynwyAWqn1JvJT4Bub",
  "key28": "56CqtWNsevpdJgNtJCvbrvJWJVCV12HvSimuTaENVsaLnbSWaL8CMX3XmJko9YMCBScnuTzBvXJLqKsRRVW8JHPw",
  "key29": "5k7MDaPqYp3SNKhg43resLNTTBSkQ4naoGNJxKzqbdaZVc436bkDszyusSkbstRqejn6rYti9ZF5xN8xTXYGCf4d",
  "key30": "2vkBbUaEBf5UzAPea2pUagXh86j49iLzofzTxJ9kHx5fyp6sguFpXyFRGgzioUsFjYDdFmEQ4kwascAvj5b7cHs6",
  "key31": "TyVVKVFU1acBdv9u5AjkXYeKYWDbasJcworXELHtvRzYfvgaT4ncApviUccESHgZ1WCXmiZajx7xJcpEjDYzTgP",
  "key32": "4KKkLVvHQbswGvo7qQQN9ZVxpurfAJ8eGdjEucBxJ5c5b8JSPXcDGTFuMHRw72wJi7kEAD2ib3sZeGKcRetLLdU3",
  "key33": "3EfjDyxXLwNFpCLJnGxxhD2D1faxkct24dyAbFUhMn1mbrpMkx81eUv3egCxKb6ZygM8qhy7Zi7ugz2pxYkbDaLg",
  "key34": "2tcpQHTEg4WcckGt5q2NydcRoCHg8Jw4HNrwFqxZiHt5TMLY6DjfBLEXx26k1fwh2Ta7ryh2fryAm1ohpWiiAct4",
  "key35": "UfkfKtEcjU44gVV5LrrPm68PUx4u5iDWWcVgHuhprkG5H9iXt7AQz7wUaTbtqUnahg44nHjWgLaTK6ynZsqvdso",
  "key36": "66GXsgK1eo36MwUpVwtnvCac9k5tPDM9xgF2f4nbWv6WYTAT7vXsEvxE2nrdqy324LAhUiQM1wT4ESwaWJ1Fqevu"
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
