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
    "MmmZvnyqtQWfmQ7ixr8XdiyPbuw9qXHAvo5b2idKAEm8zS3dB7tnhZ86Dhk3yaJy7aQksgdKYsNZvfzdmFWbCFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37TW1CeHN1WTsMyCzNscQqLGUQmFkcpmUpZj7Bic7qnBFgbyuwXsCrpFXg76QQcwwpNbxUTjWujABZAmSqW7G5kd",
  "key1": "2q73L4f8U4YYLDYCW3rsxxRxQEKG6HP7SA8VoRSxi5DiYzChUkPmN59mJHsrCNktXyvrrhrgwX6BGzpu7osLYAeu",
  "key2": "iNhiqoVgWEWbanre2L1xYKAWjgUqerq5CyP7DDD64Uo8maHUkWMPqNB9SKpWhWxYaCwzk2nJRWhSKtsigM977sx",
  "key3": "3un14PJeH6d1CmEhC2Wh72YRyPtptMRdUrnqMi52LuLNAYsY7vV8QfTjgybwXWapDAAcy8SRuoDxiDQMZt9fY7rH",
  "key4": "3n85sXwr9gRXmtw6699UGem2KU2vbLFU3P3cABhqCRKHM3GZy7NicESNDtkduqrcZUz2caWfJa5tEBBTvF3puM1X",
  "key5": "29DHEufXNRtxuWwYg5DEpzC28iN1B1mJRPPS72RFVoEuYU51TNkrg1uwt9Sbhp9ciPUVGFetySS211Ud3aFr1bo5",
  "key6": "5NcpBAwDruhXynGA8NVzADJ5UaAAbNjUCtiryxs7gfZPQtepwPUJsPdCAsNsDdUgrg4bMu5mjoBmDJ4N3BgRFpHr",
  "key7": "4PhcnUaVrW2qHZVdf882aPaejvoJ5pepiPeWB7dxCuEpx7ZAgzbryP8JjGqcL2bph3prLbrZtkNVw85wUperBRwS",
  "key8": "3TCNqGAy8kGUsa3cwmC7i7HdDUnHcNYjNX7AKdKW5b8wj3JTtncBo8uPopHwQEqnfFzLWaMHGtrQxyYwbA78BG9U",
  "key9": "5nk3F8y5CUnP9wUtuisKr8G8ocDfXmYyTMEbDuTDPoaWTW1zGHZmXdrXhr1hZnpP6spsj6FyufWEwsnVdQJoifGC",
  "key10": "wwcHL6rQGF18oVzcHdfNH5HPYu59fSkhDj13k7jUYTRohKFT5wbocwwYHJsrUZQujKvJBa8f6RJEhxn42kZ8Qxr",
  "key11": "erSjuAjwaL5Rp5n438BGXVF4xheWjMJruNDrkPrR5aGX9nkvHSpac8JRJi2pJsf8CmGfrUNKcPy9PLWvbKts8Cr",
  "key12": "38JSq5yk2tBjeh1HBLyycDupK51T57qs5AwNzFpcRPeEbe2e8ZfbAhN5QC5kVA2sPqDkNvf2mY17k5djMX1v8J7q",
  "key13": "5ZbooqDpJqit4rPCu2bkGbNERVNfLyM3fnGQWcN2JK2qB23kt1MsTrTfLmeYysMsyp6MmnnSGcHJJabWDUi691gf",
  "key14": "49ARTgy9y7CuwEbGVXhgvkGJ4TduWC1kQPiR2CBsVVTR13qru6ak5rjvqiH1PGQKNFV7MV8QERnLRHZgriRUzaUo",
  "key15": "3pZdUFnrEP5rzwvBnQ7QDszjfeywy4KxF8J8gTrgqBScKtekcfZXUY3zmDe9FKWcgi2XZ3XtBuqyG3D431ehtyki",
  "key16": "5soauerUMvwbpLkcwQAvdB2xg5DVeufwy5apNcPyRX7EsdMEg9xs8y9UscEMYpBjTRRr36tnBLUn3MgwMbbo4sQA",
  "key17": "4oh6EPtCWr2bk5WH5qE2VvZLQxybsrgr3PVuBzEa9KCzuU8Sr4eT7JvkebQxjbCmW8dNESjJgNkNFTSNKQaW6oj8",
  "key18": "62qho4YrfJ5mJcBNBfXMThT1XTyWTBrDaLhrQoS9f2S8S2riRrTHN4AMq83gEwjUTYXHWTqBVSKf8HAUnsmFwopj",
  "key19": "8Vy5htkwD9abQayQuHmxhqt1QQ4mfHJRLkDBHJSwybzQzupyvyCsdLjbq4Kws8avDuesRDAUecpp56hiuKN81fn",
  "key20": "61ADh7t4HTieYnwFbQ6X9HgwKVbVPL4s9EwYfHi1Q1ByNdnHYvXJRe5B6QHpHGqEJQdVpCpfDqWD94YGNFM4D6Bq",
  "key21": "2YkAHBUw9vTK6jkCYZHdTd4PZoAKMatHmrq3gBoW7qJEaLXA7cUGrDxFwnk2h5sUgLq4V5jcF5oeM3RjMij8s2TU",
  "key22": "3NtWw1QE2zAQC7tPaDTb89Mj5HePDbRvhNLDZxFrLjhCafeNY541M1ZnUSZ6fxoD6JiHzuH884d6ckfemVYmgccZ",
  "key23": "63Lww4rSVDjz7T9gVzPBzzpBARVD2sPuf8DUFMuLiHppmB8f9jqzBWyFQBxv9GkJXvRnSe8ywYJTuj5eLiYaJaTV",
  "key24": "2jeaP6Euo91TM4Z69MKwLssaj5gmVmKigzp3z8YjTEEt75XN6oieqBPU9aFNKv85tnmWWp4SJf89vywHFkdc6eE3",
  "key25": "4ZHTxiR72T1TzS6xyNT14WHgsGzjtYtHGv3ExbDhy4sy244xrFYCC8FUZEyDHyYUBwJXLHxCknYcsZUV1ENeVwei",
  "key26": "5guSiuwfZdTKF4puYyXmF787e9PbhCJT7m2HPRqivMFbW3f5NGGfRMkHYegSQZmkooRFsUG37qJEsFv3GRPfJota",
  "key27": "4poQ4nokGBDotQMkirewrqfuP2xMgV3V67X5aw5qyo2Ry7Wiwx5kws4TbtYmRhDZTdGRXD7WHWFHtiotr9oYWEBD",
  "key28": "4wYmNRHKDUGU5AXriZFFJ9LYC2hNQi11TmjXPt2Z3DU1ZH6kQLzhpmAePjdcpqHa75Mj5WbKnDvZ92zhyJTetVt5",
  "key29": "qGkKvnLxwSVrdATPmRDuXB7YXHKi3z9ybxJdw95wJNStRfm2hQLBFwAsNSbLBroeTKKAERLGworMu3KbLVdtLJm",
  "key30": "2PzGggngwNoPJKHLi2821VtZpKZKaCPcMvqaBr6qze4Xpiix56S2mJBT9vXDdGscJSn7PKCA3Ubb6Mqm8GyYF1y9",
  "key31": "2Nc8qPbafYxJnJrAYBC5a7K46DxHUL9XMF5f9Sfb1mRbs7uWFJ4k1Woh6H8M8iT7oAPGSYZBwoVBMT6mWWcsWKRE",
  "key32": "13TfQz6ATT41yRu3wsLbUnX5bz4uGw16Cpui5ExSxL6yhQ3FqKgLbe8MrXqnADi6Py6XQvx9ccRYSwagSNF8MYi",
  "key33": "4UfNcDe8n7nKgMJZbQhaFAQ4zKFuxHagN3f9dcpR66BeHhvg6zukyigmUb7DtDe2vZhLBUaqG2nS9eB6PFQ336An",
  "key34": "2RqUcaJfxLjbLQQyQ6F2LmkS43HnM6cPgiPCtPufRFezbMK2UgiVsnfDyFUEN1PfCeU6sEBoPfHm89B4zHfMYv1s",
  "key35": "3ZeFv8nNVnCK3uTWvX3CTekgoxaRTRyYFzLfSymc2JfvQ8KitbHW24jxMjB3TDGwMFamn6Xx3bXxTd57ze95Q4Tq",
  "key36": "25mnXpppsoLXinqCoPZQRZMMwv1u2N9BHbuqBdvBaJqqjKi4ZvM8PZyZzaJWHZ1Xn7647nDZmNQnMsASn1kk2xjT",
  "key37": "ofnHfR2NHwXW1LaQGQ41tRouB4LMxaTtuQithfWC3MdhGwSJhDhYxgjZJtiJPSSZSJAgHM7X9RmJx5cGjihM92q"
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
