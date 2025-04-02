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
    "4c4SYL1iAQedDnZaZ58gJp7S4EuaQLU6abGD1xQcxpCCXQa1vbeHcw4Qmhe3noBj12LMLnZb4ceLVpZPcbqsKkbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yacfVJcQ29J5EWP5wKiQt8gQE5x8WzMJnRGTi9si26HyvrqXeVXBnMZ7hsRTRZUmPjtwNdz1p9Wkx72GMGF3Xks",
  "key1": "5C6semWjK4misbrv7Feo6xJwxjab8wDzx4PEXUKbAPZ5c1z9cQHSN5QzYKbqhhmEoWQrGjX9mzska21W2bs4zp7y",
  "key2": "2YeUv5QmUP3mh5jJA4W2Kg1L8q246euqF5aDU1F3NB6Crg5j96tipBu9nxBCCorxswUeRjmksHXCgHWGcqADo2WK",
  "key3": "CM9Jy9vtZsfodxfkjG1SfWnK32VQ6d6BbMWBf8VdNXW2mPRk4GxCrh9hnH99dCgaV4wjn1F6pqTdeGxbRbs1tRi",
  "key4": "4p8mSjzP9JjrqthyCFygRGMAgWngnBeKtW6BE7C6hdZtQZ4DUoT6cnWNcpzxEJoEg4UKoGhxbuJRPSrLdnm6LeeA",
  "key5": "uL2KL54NALJFccqTyJkNncuoPB3MdYDv2Heqdauw2DrdxXEU8pbBXNNJsBcNLkgB9fsxxWhM2VSGEAuw6QRSp13",
  "key6": "59bmVyP4d3f8sznrjRoc431eE7ZSbFzS82Npu1VHHHXkqgTqv78Ai9DMMV2woZL5SjoGWMXX7uWuQUbVJq582dDi",
  "key7": "4LEAQM1isdUPbaofeAFyMJbsbK7KHHpM1WXqNLz1UrGEE2hYdfxaAV2e3PNtP4hmpJMjMcTFMexW2eyZBWp7BSp4",
  "key8": "3DFyptyG5j128bH9anPdZpwAsuCbmbpd5LS5EeTKyNG2DtmT7tfhJd9eCJW4cCG6DdhyCzDHzwi8bkiRhvJpao3k",
  "key9": "64KshDZZnQgsJuB7g2dFcRThSkyjUnjKG8EUrEpmruP1CZ6bNKPPJBc3ynrmmGzqWDWJqK2hRqLbLhj69JKQqL8G",
  "key10": "4pELht2qfWegQ4KaL5VkntHsd7SrEeDXX637FkrCJdWNJUcZwytzaUsnhu4nr5Jxwgk1rJwYWkhfTcvzax3FUTMB",
  "key11": "gT4GLgz69qqKrqfu8b8qpme9KouaZGasZzW3cETHfxdH1mYTYsbYasegLpno4zxCAbPtQBDbbqka9TJJgCiUjWC",
  "key12": "5kzYPvwZT8uhKENR6kTappYWqnRDD8cF6CpaWNvSLXhz3mL1LHeZUzguio2WkXE5Px4yKJmn1Yt6tgQHiuEPLhUh",
  "key13": "2VvFoqnjMv2jMGX2k6amZMh5WygrdLu3zL7JJ7475Xb4jcDAHERJH7nUUaqxGPDXLGA6ipRWDtU6ntePa6sAzT6Q",
  "key14": "4YYbg7pXZASVKzr5FH23jAN1sYnarsynaogxJ1BHgnPK1ykUdaS5YLtddwrJig8Pnu8nKwdvGmyC9uD3xUrMLaob",
  "key15": "2jEQqKdxZGVgimAZMK1Usk6kCb3hxu6aEbKxCvvYvzZ1K2WKv3WGK6qPHutpBRHTuUi4WjjTUmBrJB9HcqcbhtG5",
  "key16": "2myX5i82CKrMjddy483Lr2WAemhxS91Hz3nypa5eQeUUdrPWyc3bUhfaQraehEyaDiyUdmfvApLmXoWHo4nwMiMP",
  "key17": "4fJpRFHQ37FVeZVSkSyXKvosYkHyRgbsbrLqTuLwUdezyUDvhxY2dUApzLoUHHB4fhXsUDE8dhbp9y85mVxJ8vgv",
  "key18": "3RsSy5iD4oHA2MzhtdMYoaB6pMtrdGnbSSZjGgxigEhfz5cRRrufhrtTLQaF2WZDykSU9h3YrqSH6ckT1o7H3rdJ",
  "key19": "2k7czSZNdWyfUqe3h72YpBn26kzp19MqwbDMCxqCzMBxjpNmkAwSfmpPDiZwQWBqFVzfUf1LLhUn9c5rxYo12VSZ",
  "key20": "3kHwugvoqDC3eLDyYMKoXJRtp7UnkdZa79jxAnxgobg7uJmzdi5AY9uZ8fPUxZhyWahj438TRxZmw2vkMHSP3Axi",
  "key21": "2CozQukRRd4jLN8SiZ5nDoz5y14vbRkAphYfkr9V3bDutkcqWinxxn87Lf14pxKSn8fV4QX1kRJGJ7Ampi8EkWWa",
  "key22": "3hwsrGs6dtBFAQ9x3SjVjxGZuwfPKqbeDEbcDRneNXPpnQM2puUyQazyHY88cwPmz2EvcJTRjS48jxS2TrFLFGLA",
  "key23": "eEGWVB2AdgsyhwYsz3srnkj2jHam7TjuEU6QPoELS11v1ppWLPxN75hwp2yAnifjdAGwu13BrUpzGvoU627EczB",
  "key24": "3qfv8DPYJZp2sVb3PhX3PYL7gRYYEFQrYnGjARx77qzmLTuqYrXU1BnLmFq8Be78LZEHBStPvsUAzLyibGaDqmTG",
  "key25": "3w6ehpAZ7CaQv3yiUPj7526mztNhU6BUbXYuzfvjCvGvEv8hJrmrZwdX5n23MXvX63W3Y98JkSxEYkQo7K4sVQv1",
  "key26": "3FFRpqzZPK3zupf8rG1Wq38uE1u3SfSWW6vmkDWraWDJEgLdWCXmRwP74o5hUWvSokWHBVD73MZcGbABEgqKNtb",
  "key27": "3jWntxqTcSXYo1mCHbkAv6QPbXayKkgvLavx3BzRpbvMQ66f2RDyiZoLGWdSQ9H1wdJwToUBh4ywChPkL3witQtF",
  "key28": "JS3CuiqHGRrbbzuXnH5uGTEUqZphsBidM691gCauvei1LGM6YFW38NuNEyyPEwci6DCTyVXKCTksQUP5ZPnnyEw",
  "key29": "5XbBF75MRADbpGeDdqPQAoYXe7snU8EC34xZ9u6Tw6p1Pnr56XBbQmC5FgdBvFoYNNkeffndUGDGiRrARDfqzUci",
  "key30": "2rQ6W6D5z1qkUggARh3Yc98Nswk6TJMAtDeCUs5ayfqUVUDsp4kTg9RP7YBaoDttWJYR3NoMz9N9piHZzaDUac5K",
  "key31": "3pW5hpPXGY9M274QD3KubPdq75V2CYBdsJnoHfAQuaWSYB5o8fP4hFKuvmnDnnfUKAe8to7YNMn1kbvp4mYbMCGw",
  "key32": "4Qq7RRUy4Fdwh4368XQbGQJGLvpnXHQMHrypbpSEw1NF3yBzAUCScxMDz43bB5S4xN3AtrPupSjpxhDSBDKLejPS",
  "key33": "4cq3cYxzaCsWdSkkLfoFYH2CtisHKjygnb3VVf27LWmXMfHcQmYe4YEvZDxSXQ5mk4B6pxKh9CecmQQo6kjaSnbi",
  "key34": "5VCgNSmAJSJsi3au21iLPmMYiCA2V8XaJAmQM5tJJNi6CrdmbnSDj2vyoTLU92Qwanoe5eGFz4CyDTpmsNMPnLiG"
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
