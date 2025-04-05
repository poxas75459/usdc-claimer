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
    "2z6hveMai8GHQMCm2NSgfneusNpxYR4NmNcFaeJTiUeZHPP9HePXLKrN1FHgsCktJRXMwR7bbbw8Tvg2GLDPUERL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55rL5tNVeArm5yz33m16FeDFGRER9any1oR9xjwWQsrZ1A2oiBSULz2mLexdYELXHTC8MLfEE8YNovwL89w1aGWE",
  "key1": "4mYuPs6UvaQoLD14zweeYbkixaxxjXncMMeVkRLmm9MKq6u3tTLJge19imxheDV73GXcuzYykHdLj7APk3MxSsSH",
  "key2": "4gRRcHffreFFTLFZoP7JNdut6vNDKUxivqLP4MjuBR8LXQVSk4obqK8hyKJ16zV7oijrcUXDBaCurNwS6YkFysyH",
  "key3": "5ycASYrKwJN7ANmD31sMfamWBVN2mmPFjy75uWF8wKUDf338ZX7gFwgSzLhueT6xUzN48cn6vnnVzMzZ29V1W4kL",
  "key4": "5SwFjRYBLo1fnfFmymSzj4ZmgC8NKQRVzCkiR88Ugay31B4L6UUJdFfMJPQoN7XaPTkzHwvYEcicKhLfDS2gFU9U",
  "key5": "531LJez85uvZEY33qfMB4htX1NhLyvVHryX8VVwtuGmWuzwDiSx6J9MoUetPLgmgp3x8MAM7VYPY2X58Kq39dBzQ",
  "key6": "2UkwVjWzWrK6VcANgxRrybT5W8LMvyC3TEPeMWWZsKhJGcJjaNFaJfkX6YQtPxBdPEiujCBAzzEhYDgVxZHVwTCK",
  "key7": "5KEvGbtpwf6BUj5mH9Teux28aBeUCF8w1viuMULTv4KbTBdvX74KoAWQ39rTUdGPSBfNF7AzSnKLVUkKhDcqQPWD",
  "key8": "A33thsNTToiACevWap3ZvxEJfTF2eQKvPQXSbdghXzK7L8JEyzPHjUwKdyu3cqKRvmokzFNgWyo5ZzF5FfggQUB",
  "key9": "2JAjd9iCkyjPRNTgwZzRgvZ9pYQqutCmn28UDG11DZp8SM3AsDuD56cA1spiyoG1pf4eU2U5uuGtZhhEosUFcxg8",
  "key10": "27f9Ub83eH83sXuJPDGhrk7VKVc4nctCbF2RJYacVCAJAAKgDxQW4QjhU1Wa23t12WQHNuk1u9sm9NvUNvE9pSSj",
  "key11": "62XwNjX6ejPuzsz7TuJ755fNGfYjSBUTnfPzzH1oD7BjWC5B58jtfxvzaP9AUcEsXbLucXmLtBi5z4h2F6w391sc",
  "key12": "4wVcQtZ3ynQNcM116MpyYFWhJWWRsuEj7f82rRtUJML3qWXS17LoXnWfz8p4PeKSsbkRUkrPecZyayAJhzwJynDD",
  "key13": "4WNUN8efWRUUK9kfarZQCNsJWdYfhboAGBTADxno35epi8w2LA3K8pax1uKerMmZEHneWwLrqvXm1L7gkHJxA8Hw",
  "key14": "iswimZktM3pzYFcEg3GC771n36megWWx6rauJVLWRhXXrWXkYTfixM7MrcLp21hwi6j2wMYTHSKyQD8XSMUcpjt",
  "key15": "2vT1ZCWoqyZZcau4i1nK4R2PMKvF9jRU6Fn4tRYStWgP91TbVv9vVDu64gNb9c5z4fMHtKmCAF3Tbm6j57qEvMMT",
  "key16": "3UpMdrLiqwarm5CdVxCj9ERdwHnnqDPQXRtDHyGwvoRygzRoDcURR6Tuxm4SwoLMCvx6PvSVngr1HJTk4LG3eSuX",
  "key17": "46MQkRqAz4cLQSRG3VNvxFgn7Pf49Zr6U7a3rk1quVTnWiDiATUq3sEq1oq5VNTda5xcejY6pf9y7imDb5DWQ1jd",
  "key18": "NrX1JmxHnYfwYNkh6crSNDGbELGSkdrcbZ7dUvbNp4JtiziRWfSioh71L3kUZT82Mg15v5oqNDrZHEwyQZou4dy",
  "key19": "3Ybm8Ry527De62LgAaSaboCxX7cne9cPPxk4bATKrv1Q5NuRT4SapFN8CJgikpEdFTkpsSa8Meg6VUM5jJtjSL4S",
  "key20": "VgnMqhx5BrZ6zr96TatyUzfYvFUe2CJj2F1NmMbhX1KVsUdjS28XJJJeQUKhE1WxJNMFme7vfqNkv9Qq1BVPSTg",
  "key21": "2pGxzC5SNLNShP54rD64WTaHWN7LA4NkB6xks3T9tQowsswvEGmcVVzXSyN8gCm3qxd85qa3EBoW8JMnVUVtcww2",
  "key22": "2txqevw7wSUnabwwbVTvJ2bL7SNJFNPCugm1dAvZ1UEjcTFrQ4KxB86BXVEXHncFh4dBtuBCEuQUmoPtSjbx11xy",
  "key23": "i2tsqcm1QANdn7boJBMqvqJwzF8HuCDUiBR5qHboHPbR8GCPyxkztjG9EBD4AxG2t4guPrqNMCZbzn3AjfRGRLd",
  "key24": "27J4QXuyufChib3CoZCJWHrDqvjmqyNCCaR2ztd7vHJKFfZBR8udLWKj2TMcgUo73XZJnPzU8fnXWPtnf6xXgkD4",
  "key25": "2bwVFX9nPbXQgznfTrwcjRvibq6i2nBRiz5pB1hiQ2rtNQqNnqs7XbYkEZiGMkrbMQwn5fpLurLh537hR3kSYBgi",
  "key26": "65qELmnjSKFBB9w5vmvKgkAz264CcGzPy2VjupFsGaudcjZhrJXcdhUuHbU5uzT3auC1FtkqV81ZpmqJYf4cpy9Y",
  "key27": "22fHveoE2q1tARPByJqfTUy3MT1JXPamcPNtpURj8uwZHZBRCePBEY6fCN89KVTrFGqt9nZLTSxGcppmCofMjY4g",
  "key28": "2n2VwAdAzuF7UbCCM7tJ3pixYAGFwzAwiv8XCp4wqMTTnZYUftMnAiZbZrFKzNoHWBzAVAPTSjHKDiiDtDrbyQM4",
  "key29": "4dWeLPf8h9YNUkVrhkGE6yeWNbgYBY6XWQkso7SbsE5Px6gb2usofe3WENdD1HZvLLg8FHKzkdPbjqizFgjF6XyY",
  "key30": "XVH6MoYuEo6CCZR4MgbEVG33qw4BicLxJNd4qPSTNnWPrgFipSbQtBEuyw8nHmx56utTj8h3VXkD5aFiJ2fQQLp",
  "key31": "3Gi1vUZgvM7breNxRQ8ZzqPebNjQ3u5wvsZBcifB7YmiW8asNNFKPG6bqjaw1nTSqCbDYbgce6cGE7qmyWhGVXT3",
  "key32": "EQooDg3y6qbk6GCXVV7cE9vyHv2qGLTSLJkFCb38Pd7fyhQUgWi86fCTuJdL8xZejpMtcpUENPe85K1tP8NHm9T",
  "key33": "r5M6Y7i2Z1GUgwtCPEjJps7WNw2kprZuhUTRk9ghSBscFUHJsSHWfodbSqQe5jCNdZwK8hjnMbt1ibGaMw6NZ62",
  "key34": "EhfzqtfKNpLJAdLG2RrLV81gL4yx6e6dUiZD6T9arLSncMZCiQLbYWnKM1x98T34SznCXowmia3YPukx5XcQPzR",
  "key35": "66J5j9gxBM9Kw4RPsmJFG3nytiXxTowZdABaiRbZ4mgLHEJ7ZyWrUvhgYP26KMp8kbyUe6aFc1M2ku2UxJp3gLKq",
  "key36": "42i1R26rYFT3LzVaSbEvGsDmEPJzBNC3zhVkGPtALKHij88MvAtjqjs6ZNWoPZMZxtXBW5QTngqVMqZTfRrSeLHZ",
  "key37": "3av6GLQ6FUMQZh47JUEG85HYb3myVopA39GDMXKh1jJfKL9wQ8Enh6NKQprXDWbx4Y7k18pSx5eps7MRXboYpiTw",
  "key38": "2WJATNjue8SohByswKbhfsZXTq5r1QhbxRBgSXjfLe7vJSK8Tk5i5QwXaWdX6BDF4DKoujjbGiH7HhgLAiHRFktA",
  "key39": "3XsG3foDwETYk3HsmaXZQeZefJpnuNayQ1R7mjD9HkCD3aHoDA5u4H6pQVQZAWNMTf9MFPXe3pWyNewMynLmo5kA",
  "key40": "3PU53EGndQRk1ggZTVsz12EEAW1m2LjyyiPmZJDoemA6bMXegYWjnmbfyDtWw6WPn1LqFxdzqxE1pnAyqkLxGtkb",
  "key41": "4jnM7pZ8cHrkizjnTzR2zcFZ3K4kAncAJZbPXTEVnAFstyjzqw1wZaZFUmM8qLKoNQQTY524ozGNYp9EUsGtmJpe",
  "key42": "Fzds22j3dd4k7N9ZzQNEi7DGogDV3AYu3qSfmnfj47fdzwsqn1zhn11pq6oKjTxJxNAa6uAM1rN3VSjJMTYgXTb",
  "key43": "f7JqWnTRQbH1ZR2YA7vLaVAqap4vsMRau44eQ78vaug4D7Bc9GXjk9nyNTNL6EK6UUpYFbRJxSLpNg2h3kvPuCq",
  "key44": "9QoZHYD7UqNjBUEvkma2hG3vMXS95TjCT9s81D2sjMDTZYXhPjotTb4Ryqa99Zqws61VZYWrxi6ini52q87tuyT",
  "key45": "2d7a9RDreKDiueUR4LuvHBAQQqFpJEU6EPDfy3f2YTUKUgv2qfWwpyENMnBtXZUFNEGxK5hU4cgs1DepkQcwPB1a",
  "key46": "iZf1JY21XbUCmd1rHK7xcAisC4qNX7J4g7WVMaeANEUx1HaAPkxPWqTmBzGWDWZ1AChhxYi5VDKk1oJEFh7gm6R",
  "key47": "2ujwPRutkaanJF3FM4cqT7x7UVp1z7g2fonWiugRvDnCfs4jp3oN9RdYbTA8zw4ThGWLD1bHf5NhbkkuH6DkLpBs",
  "key48": "2JCH1P1cJyCB5Bj58L71oHBhVkaLTxFQjmYzXokWH51dKoXHa8BA3yvZBgtn9N2QgsAeyB8Ci1ZB7Hpi6s33Xxz",
  "key49": "4VmBFSAPWM5yLvBh5cGjzG61GUd8Dv5RZSTTjew4YDc98aLWfVZPSBMkM1iso35owb8jxGegAfvtapNzB1LvEQ8S"
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
