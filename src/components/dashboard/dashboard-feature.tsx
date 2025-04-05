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
    "2XR5AzB8NBLrGi5iXHqc6j62j6HwQ4FkJBCRMQtgiydn4K9NqomTmk2qxDre3xtGGLJ2X9DnqzWb8rFE8YePVzPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DwBLTaVPSLS6TfFF43eMFx8rVzrmytBfJHXaDSTgrzniiKU2UdbzLEahXG2aAEtK6xLqVXSYH6U6pS5e7cTgNUK",
  "key1": "3A2YWPucKKPWhTg6e2B17netBn9vaVBxPhZVHf7CjSeGwz1m8kcr94mkP9J11Nf7v6f5EKxH7JcofAFzQER4Scad",
  "key2": "WpqtPEuiEe36QnJn1eeS9F9kcYEdS1pzvd85L5nvwR8GKiRcBm64AMbg4xBRjZiqbPLihViYBCgTb5L1dDo8ZAu",
  "key3": "5SfykWokbJz8Bjv5AyuiEYrmVLiHVKPur66EdMzvzHp46yoEkwiXZ1KuVXCDVPPk2BVijiw8N4DfiZqWsXJ3pN3r",
  "key4": "2ptazrTtj2oase2Lao5cfUzQFyK4oKuH5ufbzMgqjMwwp7Jo2v82zq929boUTrXebrKJfQ12VDrCJhcQPypEMS1u",
  "key5": "2Yi3L9bUfWfqM5zVi4SDL8Prsys3GSk8RYZbTVQeBEjGe23NkKCBsKGcxd9sHJ5WAYTnjKLhGfnuN6ESHJF8hw2Q",
  "key6": "5W4pRcgBTdJVpYmmwpzcZNtpWFN7waviSvNQU7ZcSqnqeuH9JKcxmmH2acBCP8EtX6xAt9qp56RoSTNfZsTVZoe8",
  "key7": "xwTvLfU7EVhDod4PwqqqcRCEKEdfTKJgJ5ZSRKo55Pjxu3Dw6wyy7wvKNpfh3K3j495yRzo6agkUR9V24GEj118",
  "key8": "5LiUQQUJgtZMUfxJQMoScFYY4DzDE8kczVNdhvJ6WSDjNtaXTut88hJ5PtiePjZx8rwQ7VvefrQ85D2ZugcBGtau",
  "key9": "24JAd3ENPA2s36ieyM7ZpTpekGsj64FW54TpGbYrvKjBhcwCJYe26pbusJGJFktnojcQUeSfuGok3HwbYXv4NcVV",
  "key10": "AaVv4Ae2uKeHmtLK5mjR1Q8mxn3tQDKg9SN7mySbhuKLRRj9JpQKxsXuamynxfFuVYJ1CtZPKkEcMsMTYW5tMfy",
  "key11": "5WTYZ11GDMYLbJjr9pbyjjzdLQxoUR8SUipz82AJL5zqyfxevAiXq1whYvUN3v8qNKH7zkdHFxyLAbR2xNmMNVgL",
  "key12": "3mqQaJuzK9DPxwdBMJnbLptt44AFL2DXvsSTbf7WRcaFZ7qaabKq44k4PuKQXCqHNbNvxFUqJ7QCP5wSM28sBqgK",
  "key13": "65JuC3SNHECn6GiL2vfgsHBMnb3AfWGhN1aLtnpvn9NHAJknsMsctyaN9Fi2BLJMi8BkW34uEw6PhvjZNCb3opLX",
  "key14": "JbREmdUycV2UyVhMyWgstMfHwYwqYD6kJ7gnv6tNztG88GotsrQbzKQwfjZ4LatvnYSsZa5gzdRwiJpGNJopkmf",
  "key15": "2oNoo3VMTHw7br6n3bbhqVB5YYxVh2M5gijjuz1Z8gAEvgfiH5zpdhDxqc8rF3eXzaTVoCKjh1Az2QpTqbGmEx1e",
  "key16": "2N277ML4K8BzwNkGWvsucf29RfVa22YxKfJ2w2cf4dcwmEo6XGXtxK3jXXW2ojo5btG2aGCyjEU2Rr9vETzJhePy",
  "key17": "3PhgHtjxLH4VhpSVbhDesRiNTWv1DCEZaKfV9p1HFcKx7aByYHjvEku64yJJGz4CT4kfrSv8uD6BjR26NNaZfddb",
  "key18": "64XQmWxMnLZpTBfZEFhxT7Mjb1KMWrgHb4xhic2cpxxUF9HcHRRfsodXBp21KVSDC7moRyzL4EfhTSU8JaDzTyH7",
  "key19": "2gn46VjRLm6ZPVPTw1WyKdBiAZN5zVVTrhUaZcYn9vPV1sqtPDMTu19hyWaXNhFQnSPVPL4EPF565P39WzRybHPw",
  "key20": "v8LUf5CoDfbxizSGiwjnKTKTaLLJ331rCc18wS3MgWALe2KKxjRcYyVNL3WWft7r7vAQyGfW2GEae7zzegMVVmf",
  "key21": "4ydeNRMxeFcGWpp54XTEkapx5SyZx2zAc3aWjfbweT9kkumEZDy6dLC67Wyuvk72C5f4KAYtyLTuzXMsuW6GkK64",
  "key22": "2bY2rFDQ7MJ28DkWUasF24UpU1izsDZvjfVer7jZPQ4rFUatHEBg1dXAEa7hv4KbayB7KNUENLLkE7AG7KjkXHSw",
  "key23": "33CoQnGMbq1KkWXM3W6Bi6a2by5grPxvqASRgECxrZpiti86LopoCWPibWrZMFeQ4Svea3J2rdhi8SN6gcmaJvdm",
  "key24": "2wQEWxhSJEX5aYRriVXxbiQePuTBRwFwnnWwJWp9ZfTMJ3sws69SLE4RXWErLmsicKo9i57HAzGv3f5VbKB1t1uy",
  "key25": "5N2VYYBJBxukTWoLCu2HwJDxo1XNTDUjGNrx1fsGVvw8Xd7d9mxqVxqoFggRxqYMDf2fxGTK8ofVzwndRikqmLuV",
  "key26": "MABBgafL8ibzArPj4QkyqqTSfTsFvMPnUp8p7k3Tzw8i1VdWzGSwKMMqyqHQDiFyGrgeqzKLLT9R13sw6bmumVf",
  "key27": "31v5Dm9sDPj33ywjH7qwSbBSkmRsm7e3FQEbZNm1uFqf2mGhrxsuLXJGVQxKT2nXNDEq57wvpGUCgakaF7NzWwDF",
  "key28": "2hwTV4C15NyQGmMpxW9USvBKYTgjpz7MQEkThLpP7XojUTJ1EbEM8bwkkNo7HcjDRYuogLH7qz7fNJ3T3rb78KEa",
  "key29": "4arG8kv4H2LQRb54Re13PPRpgsPpPvYeCZmBynYm2K6SF6r33tHYHV8tni8D81z8qdpsGLZB7wqKpDbgpoMn8Joy",
  "key30": "5xGfLSGNTxNzvQXc5Z6gCMJT7VjJoNPmZucBmVF6bT4ufMjSbD6gphHVueAPqQfH9WHLDo4sKAQ9PxrNBm277urH",
  "key31": "5gbxEgReMpvShu7RsmCVz97K4h8iDvmsvm7mtseC6SABfpNw2KsbtXuvJzHWYdkyWDis9PTgDixW3DVeMHv8ZH93",
  "key32": "Rix4hAMCSN19dhUN2uqYFSYrEzopRKzAhWJUjryhvcwnJjzxBfhaeQQ1V7Yoh6LnJpVPvXYreSyWkNUyX2xyvpA",
  "key33": "4X1Zq3TZhLdN1mUr9QWCktbr6tK5Qpngwa8TpuGY1UZuXcBXTbSKFM97g2hGTBVxKkai11CXCHqAavPkK3E6smHm",
  "key34": "47evqqAVmpxjk3HJ64ZLgcRkrPPzziYM3iZK2YaPmqi4vxFP4mBeL9wkPnwfFFcJqF1ngdLTQhbsBK7ieLkoRpo"
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
