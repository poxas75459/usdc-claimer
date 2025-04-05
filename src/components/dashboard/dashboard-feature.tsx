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
    "2VsstNMF9wPzKtrC5y9RpuB7RzgwKwNynmpXdPS35bQzcg6V4rzrm9GZzXx5gyDVXU1kMzxJ7EeVUtedBTdWzaF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVs2LjcJFb1MwtsZ1vcWv5QYzc4qbdn3L76vpGwqY4TKa9s1wgR1Hc9j6MdvkScHEk19mdiag1tdZaSvhgrA2xk",
  "key1": "2scttyzWj8jLu8j8voDLAnLfz8n8kinbVz3aMYu2gY9eFz9w2MrRWehTyzVx4vZ2SezC4DbThrbBi1eJwVgzJW92",
  "key2": "3KHZWtdXBzqnAWWMoaB6tR9toPd4qxgjUHfDtWfc6nakoYiAFamWGHmjUnapxFY3YnunDNKQwH4mVcKRGpKDvy2t",
  "key3": "2JBDe3Z7r7c3fG6NvQ85QrSN6ibmk3oSmeoCvgj6Dq7Z8NftVUa1G1bsoqFBm3rq5CUn1g7GGB7E6ZWs27frykK5",
  "key4": "3n32Vxg8QjhfP2N8swMY2thYZJGbjet5uM3HdnrRS9W8CxU1Xmi3ouVVxdj31b7Sx8TjDzZct4kv4RdNjGSa7DUc",
  "key5": "4YPMNpgToWbnFwXSWnkNUXx4bJaA9mKbKFCveCd7EqXaSWigjqiYpARWAZmwk1y2Zj3eLArnPxd5i7yZhC9thDHX",
  "key6": "21EqfHkTZdcWtWDgv4hqGnMRc1BvSttZ9nZB7VpQVGL4Ctw8QcPeRycW9spnYHDnFPnU2qttQx9f2n82mSkhpPBm",
  "key7": "2mNkjvNuW95UehMpgnMKSVApfpjX5PrFqv6e7jvngJABS9UjizvxgdBtmKb7o8gDP2tqw7GZYJvjwrUFf6g8yvzy",
  "key8": "3Gd6XjRxwPPRTfxn9uSHfzRXoXtjZcXFLLzjLYgxj1xwqQWpxusxcyYnSVYDq1trhvLSc8L2Ti3C3cofNFqo2A7m",
  "key9": "2HQsH9FAZAxaRBzfYa4XdcJTHuLpUQAwdUbnEpVjqesXVhJ4Ax9WsjNhW2hMLU5zJSPvM9odf2H2WtDZJuJKKywf",
  "key10": "fSPRVe5JQSuLwbwCF85ysSiz3eXgNSCFaz4izoGDsfj1TqU5AHdNhUvYiHLkuYE4NZv38z3KZ3HJpEw1qMRSFpc",
  "key11": "7pzUqHn2UvLNGou3qFZceQH1kCPd4h5F71sphCXLmKby9v6LgAgx7E3K8usUXTLTH8GNyGj2V7qeocs7Ti1VbFQ",
  "key12": "3XRYzkUtaGWAX7aFvzXkiddbqdcgESjVxS5cYaJtFJBvppCZ4oPm5h68Kj1BVxDVK46aSVbVx323uQHc1sS2MXtC",
  "key13": "2Dy6iQ8FxAEvvbhvXZHQaV3nxWjv2DUP1WEsjfkPpP9u67cZRJ11QfJzHecSY25U43a5MRw184cUa7PyMaXFa9pJ",
  "key14": "3b8V27Uw2o3SnkXkwufFHhgShi2PbdpiQhgN6hHAi8cxKLQE5RwDvHk3Wh6hUC889LrpcFsH86CLCepLswJ2Tj4Q",
  "key15": "Hmp38CC6uUpLKteQkuu3UQK3wPAx8SBHmhzgLGJiiMBhXR7UbLcppBw6F4T7F3EUnTQkAWHRdUTSkbqayod2Gir",
  "key16": "gsADuJC5BjvH623e3aKwUPTet2qhhvoz5piwhmKMazTvk4CYhDVyT1mQXbZvMzSzBqHeL6g3szKmkhEcXigr6Rn",
  "key17": "56rkTUjWs1NkjMGjbgjw3wjmfFhcLZ9o149BY9LzUEUfioSQp463AKMLuPZ7U6Ww2PCYZR8vPQkSP2cYig7QMAM3",
  "key18": "5uk87Jm21cTftrdjxrXyYLCDSr4kTVZfcQLN4ttcLkijmhLcoc7gg3VUcReLnkXqDfgDzi5vpJG9vgGnWgx5Lgwu",
  "key19": "4hkoAWbrmpw8wDM6caL8yBCWStPhBmL7qgAifbTeSzfCfojRVBo3sjnr8X9XdiKJSC4cZZtzGkDvj851H7obvppw",
  "key20": "4DsS7C1ZRF1MppHPDWAY65wxmUSNxLtn8hF7b45Ug6nG2D6aayiudz36j16ft4MeGTdS42cEVf2Jt5EFM9yoJrwk",
  "key21": "5rjhVysHngb3BHEVe4jiyM67561UXmoXCLhC3uVxtzCJnmijFZSv4YrP1gZEKmdoBSP5zzmeXjV4LHhPaXSXkHvm",
  "key22": "BoxArHC6dFjNU1Jw9D1DyNJx7Nu1MirrVmaJnK6nEXhtSBdtmUjeMtwZU6B9vTJf4YKvtF4fYemW4xpKxvPV2BK",
  "key23": "2Ae9JSSpjJJCc4taRF6RPTcY5WjaRzmV5q1wHv2CgWhdR92fB6grunBnTuKtP7qjVcq4jUNRhPF3QNgFCbj4Dbse",
  "key24": "NoNm3FC6fqkzAcCCst2u2MzgpBaggT2xiW3AdJ8tR5pPX6RLBEaZ7DzDZwM8yQRhnWuEmvSiy9vaD7PPTQytmQe",
  "key25": "4o2K6iJjwNyZD7Dmm49YLLRyzCuTW7cX6T8UF1oe9rUFJ8itCpNsSYGLarZ67WUXUnWQ5yh61GgtakixRSpU7pfw",
  "key26": "3t67JMqZY5XbaP1aa1yWuSQeDjPp6iYbyqKeRTgmwKPgYLVT42YMqYdGp2LXK8Q7eqRC7YKQYJvaSGTeMc6zy2JR",
  "key27": "4Qj7sDXKjhHTWDGUaTfv7HeD1YWGKjKvyh4XMrjfVRXE2nq1nb5hTMxK9oUgwXHkfDjfsCiTpMnbLQQzN5Sd1VuT",
  "key28": "4wY7TjmDRFzVz3txswffCGzvPHTesxfhECYCG4buRcEvdUbSMqdcYcWypqFrpPwtZEJuBc4fiQteBEbjafKTJhky",
  "key29": "3Nz1YNTqVVCSgvRGt8WH3eFd4ZigVHsbCUYVaVP6VcqMztg5W5sLyi1kaxCSojfT86vdUwdQvrPyGHRXyCtmT6vd",
  "key30": "FRDB9Z5BVbNRyhhGSY6yNLthv5YjPgL5VCko1s9vMowzjx8qgV5aA9foXYL1ertatxoLhU9Qt4fxaCYj9NrQk2R",
  "key31": "2mRXvmYyUYx6FrDrnFNoLduvn5hYnAscduuRGgNiKvdoYsBDfDpB8BbiRCU4vN26nVzYuRUujuzxounGgLjkyrBU",
  "key32": "4jmdRomCELwSRvq54XQbzqdiQTgGjDuZFJ8aB3obwWv31CneSa7q6GtjwfmhHk1GoVTvVKhdfsipAxa66B3ipmmL",
  "key33": "4XhCX9LgXE9KN5vNwtZZW1wWPtVpdvxUL2LUMh61uqvZs2HGwr4TzxnapWzmvK6vBYj1ZbdccUn13qPQT1cKk9SG",
  "key34": "41DH2DSK574HEmkUVKJ6mdovQ6793AZyYvHNcHjYwBm5oArYvhahFkaQD3h4kmAcsVZNgcRAqEAPY329grA6QuN1",
  "key35": "Feuo5UoDbdDidUJkHgmHcfBZp7jzkZ2NTjzj7A3yycFXR3g2XXoSDyErnSxzVyFPpMRmRQ4UPdCQiJ7vxoyKCsF",
  "key36": "4ydjsrpz1VSURBixTVv9yjoMuvcSPaT13AAT97zAUSCtdcCdqhf34gmcW4K33hUVuiLpJj38JfR9usaSdoiatLgu",
  "key37": "2TNqDK7wgF9jrneGjF788mkbxcNZRrsaaHRzyFgKhpTcMPqX92Yjrb97XNiZjgeUuRYzyifQT7BMRFktiXKkG1Xw",
  "key38": "3A8wX94e2MDmqQCDieNT7PwBJcDbeLtgeZfQbqsGrXt1qjcPXsmrahfcbY6WY4uPkGyw9mvfKGanFnfqupcTWmsi",
  "key39": "5mykhSyBMB3dyadnBC94R4MscGrtxcWxNM5meWJ3wUsy91iyjivVbddDpm8YMJfC8b1r2mtvBu3qRaJkTthP3KCd",
  "key40": "5kCTdojbrzoa91SZHs9YudpicmS9o4eLXujpdAzJJcWz76JCSfY6Eks9cfh4Fd3MTBnT958ugQfw4cb12ymTZ2RQ",
  "key41": "4AEq2ZGonBcHenc1iLGZHBRpApnDD3RRm4PJXH6aVo5A57JH4Mi39fZsWUPjS7HXNUqdzReGKeBLiD8DAa8yAUra",
  "key42": "5VMraeg5kTfTNMcaHvpYecjAoXKfXLKqZvA7pxYHt7iRLGdMmS6PV5un9fWp4ia3UbZnoGGVKNbTXeYhcwhdpwqz",
  "key43": "1z6xnVDd3gX3edt4xsvDxfK3i9PYBSUf1tL5ccqQziHdgcrsEyqPDDoV2Jw9kFirakuZpNJXiiXK3fY9JqmAvMa"
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
