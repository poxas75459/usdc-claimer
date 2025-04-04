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
    "2mdDcZvLy92u7K2DJ257FyZD5t85tfaEUoRjQspA62JG4w2XHh1QEDxip2auKXgu2dQoQ67cmhontwbNp8ERkQR3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfCJCv57UnnH22WpFiSrj4yuqhAjy5nzMJagoGb5UjdacrH1wAvVRSG6j4GKQhjxiTz1XsMKYvKkNkuVAZ7yGqk",
  "key1": "64UWJY2SqNuZVEjxgwpTtKbbxucW1a7EJvFeg94MTPehRBmE4dUScMrVUAtgz8gXy5DYhDm6LwfNuFumZZN2Y9tH",
  "key2": "3ffPx7EEBjJqV2PPBtgUc7qDEGR1t9rY36rEMRTDZ9FpKR3wqda6A4fqM9jKBCAF44J8XDFqTYnVhk8cdTjhSeDP",
  "key3": "3y2yysrQwm6WxpKETE6P7RTF7yDLS2UsBYB7obNV4UDhSXRUbT4Gi7BatRm3VAh2pgpsfp8Jy1Z3LjjdUD7Rjsb3",
  "key4": "2zc1zcjuYKdUos8Xto4h3zCg4CsxBCfYNiEXReuV3vKrBkBVNJQ7pANNtBXMHtBKDPLonwBtDRryCQYUHyZEttC2",
  "key5": "4mXfCxNpbJQSQa25hAWA93tRPp5SxN8b9awN3mPHzabM2PmPsTpxxQKqDxdMSnd93oRtaR1C1CB4SpnVHV845uhi",
  "key6": "3gjrhVn7gFH3zXKdMbwMuyLDAszxHgqjCkp9YS1eYWamJj7nRq8uPd4NxZfjaBF4mCiEEYoyyjh74uUu7AKFPN9k",
  "key7": "2YWMkeTEvbo7pZVCBCPUjUYaWTLkcct66kUtg1xbM9rUSyWXy1VhHHjZ5pWCcvqMaMTuV4yxbXoGoYc4V8r4wkCE",
  "key8": "4V8g4aHrL1k6rDjqhXFA5wcj195XcbpT3QcGJnzWfMGkrWtg87S3TpSeqgBLpAFdm5mhRwq4dAupKy3ugH42mbtC",
  "key9": "RsJnNfj1NA93QqHNep2QM6R9d93SAAkSDEogYL4PTiBZWfc7Hf9XEQG3KpsssdrsbrhCqsWsLhsWKv3B8HQ2WXg",
  "key10": "CCeexRH8jvN4AefQM1L3mTQQMGp9s6Cb2PWmMXiJR6h1FvK4kgFEmZ6t3Tz11av7p6qHVaJsfPzZC6xdVVnvttF",
  "key11": "3p5CtDrUL97pQSbNXFvECJhJnVPQrxhxHxmUfXaxHGYfPua5th4PwPqPVwxbrQyrQA5T62285wmgHAQ27mVLAKdu",
  "key12": "2pAo5ETvKk51zjumrntCQME2vNehmcUtWCPZK3HSXXGCzir4YVsBMgHEW3ihesamRBfayHsLkfNwRgTdSXDzYiDF",
  "key13": "4Pvh5uXVgKfgXAH16YiC2Y1QxaGC6XoE7qwbUppNnivsRvCwxcXfS7cMiwqRbi1RsHj6pCcvVRpQAyUxFhXzHHJC",
  "key14": "2qCeMrGmDTS8gdAW5njttY4eScZh3nV5PyPBmmxRkgnqhqMPwBmik9Spk7uEd2cC99QgLrAo3yrqnmxMhWpBoZnW",
  "key15": "PESu6Xa36eufoXe8cJY5dBekKLjhT5RjeXtr8nH4DhcRyVneSpyn8pDLBPhax2v3AgYbm3WMEXMwG4dNK1MpE4F",
  "key16": "2C3dPgzQz6LAcgi5D1Zt2wubna1CPZkAiwX6Qvkv6o5bpPHDkKWHP8vtfe52j54sxP1qBumNsJdQriYxQ9iA4n9A",
  "key17": "4H9ZQ6bSE6wgCtrSrcy5fK36ktrxLrxyXfT6ybtvsLmnVk4zp7zSKFnNjpXoF2NxJqF8fDqQwNPr99jS4W1WPpp1",
  "key18": "3EPP4BE2pWsDuSyP8Buh7s9GirJamCGvKHLwhXRmMtti4bSP3Ukx8D2wAsJqKiMHbMGiGVdxs6KCJymu2rq17zn7",
  "key19": "5RVTVRfd8YEHRP66Er89dJnjhbFRnH3A9DThE561qmTuyUWPFJ5Kis9Ru14BKAwgXH367kpb2pRoNF7WYQgy3ZuH",
  "key20": "5hqCd2bX8XaskYJUsESmWsZTkAuNnsuYBRT976JBJ9jyyU7mZsgja9ZYFszXKxiCTW8pyPMpCVoxFb2ikqeavHuk",
  "key21": "ZsrEFHsrrochYRfmD9WXvNWkUVakVFm78nwX9s5cJP6344YMhco1xvAihryb9aKuTcCasXFTtRAwk5jZ3YjD1g6",
  "key22": "55cmWg81nQYvtsfWoDDsMSVxY7YpHmLjz6xXwSZ4LGzzK12QvkGoEhDMfanwrsdCKQYyVUb3bJK1ShkrFrz8u6ZE",
  "key23": "tFA9tNDngwBfsHYEfkth71ab5qsnbKsSk2bc1qzazebDwtXZBTYTsoMREtCFYRTckyX5fFwthqtpL5RUZaxv6er",
  "key24": "4FiWuM6aFmKMHC74ar5wWVA9QePJoaAuPcQ7UJhZPdcbk4tDXnPHu6SezYv3GhoZGBPfGzmwgw19o2XmJdA1SU9y",
  "key25": "47Am1fmL24HCBFGhtu4zNVr9NxcJVnUcBWPMRgG3y1oYPRsrnJ2qgpymfjLRdEJbKexxqxw1cuvNT1MNPVdA6cjP",
  "key26": "5mMScrnKn6JPPbQXBBPWGTyNJAYSfwcsNax79eyv9L9dkP2jVa5FjfBKSCtaQL2qhM9UaH5epjTm6vVrbUwKzrHp",
  "key27": "31WGKdbbspzwtpW7cXX8Sb8mEjdFa4dy77iGGBM5oPvaaUJzaK3htx8i7HrHr7tMTCsUC6riCeWbctY9uhj13g9H",
  "key28": "4cFsXpLHzTXy5ATe8oBkzraZyV77an2JmfiaSvQGZHbNoCBtHXY1J4vWkVJB3yaELa6rxzKxzscXKYmrCWwDBi3B",
  "key29": "5EzGYWWdNDb18ct3CiP4f6r8mw2tiTKmJ43Q2NBC1ToVxgoJL153LX2u8krBmzoqncBEsV2TRdhSUwL1frWtwpZp",
  "key30": "4tu9hy5jBx7B9P1813B9enBrTPuPREnd39yXu1L8g4yBkoNQnHtcuJ6DpNzeq1A6zgLRPbJkveYQHkdKW937sqCT",
  "key31": "4uMsoebL3z13JFwhqBQZ4drgHJKNYch3kKA4QqQa3EBjy315y9aCC7h7THntibzx4V68Sk87xupYrQm7EcZVr7D8",
  "key32": "3LWDyaMo1GGgfpFHEF7R81Rer86phbehXxPoWa4rEbpvb7oXPU82igfYy5aZi7q1h1WTRjFS7FAVEityRGZrHXn8",
  "key33": "zaoLuuWXmWAN97m5y1je5fFZySX1EaaQDn6K7aznyS4YKd32oXnPYE8EDcGtVaetbsj8pFyvJ735DxF3KwELNS7",
  "key34": "4rUzJzpzTKBu3ZJ5R3K8RmYnMXi4sgqucpCUYXFmUNZiz5aHn37rC7FKuirPMsTcSyLDe9fc5o3Nk554QyoTmKEz",
  "key35": "4G31kZBPnXfKmBSFJM1AB5U1bppVEY7JVFA5qdVztYqHh8d6YDU9GFADpLmNHSKfyGuj2BjDRDuNg2oDMjpkBfkR",
  "key36": "4PRmno9edjqzQmQDJK2VapixM6rJNyVQhwW5n5PkAujjTBpxU87ugpsrp48yTkG41Pm9xJxdY7HADCkARReDXV1r",
  "key37": "5Z6iwPF93Zfryjmdq8N4teLkvyDTjvN4Djg9GLPJSnj3QhqaZkjjSmENWHzB9Sb7zFxBhv5SUzQnkZJUxPJVvnrf",
  "key38": "2iZp9926to4qcfjYxUXiJWMm3gpEA8bymaThhmKMiwmVhWtps9gTN4yUuZqsJMbBp7Pnp671qwaNhDgo3isa3Pw1",
  "key39": "5M1XTB3y9SifRkqUPYFuoTpSdzbsri4N8r7N9z2hxzcn8DQ97YntczHsA3wwT1YtGR2dE8q1ny6vLa5aR9LLGNVD",
  "key40": "nzMBreCEhnRGeiJtxnT5Z5Ata3CggPdz7B8frAeuA16keUfhX55XEuKr5TrzMVwHmr5UezLSmHYDvHuoq7U7B4p",
  "key41": "5ripf5onYkkcjKKD5XavCyMb9vPEgoGmtu5Kt1xF3gKPT4U6Lu6KqxD4Mkxxuygdy65PLBQMPUd55M9A82nD5HpV",
  "key42": "4RaJvFBHGaYoeJ6N9PC7jNn17xuZikt8j5oGfppoXWXzejT4tiyZhusNpyrPYdUiZQeLKanKPcQ2DKTFmUak1jhC",
  "key43": "2tuUkJ1mG1RNhKH2ubCvdRkcMKad4BR7FKqFhzYDBPkSvrHvdU2YzfA9WFazWeMk3hvMjB4ff2KJ4Jb6Xa658iW2"
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
