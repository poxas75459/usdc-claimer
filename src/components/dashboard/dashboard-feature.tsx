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
    "4ToYdMtJDjmosTk56TTwX6qwsm5q1r6cxwxvnR3b34hs7zVmzobrMLAdsYY8YrBTkuaDcLRcoEEqUziX6BgMEpUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZzrDzs6mV4yxn2PZQ4gAUVPWbTnYu1RhDTuQajnoDZhG2XCS2gRkQGtbC4yhE6rK8JuUrGN729cgz3CezbzVZcN",
  "key1": "47GngrR8xvfCety4AnpZcYPaQVBKGecQ2tPR8nQ3Pg6WNaVLHKqF38YLy7mPiNnhTTSeCak5E6QFVHzgosMXkCw3",
  "key2": "5G4pPySKd76p9ts6hLPmBa5jBt4L115U2eDaXV9uDtYXPJ1WdkC3RFMKwqZvF3kqe6mSCqVPxDg93Qt1MyLEXf6j",
  "key3": "3AAFesMdMKNST2KSFWqSiAagq5f5PR1V6Hp1mqGuy4v8sbLZtWZdCDHwiWrjVbNHr8uHQieJDDg6asYdvE9CZzrT",
  "key4": "Hx1gStrT4386EwTckK96Tbc9i3gNoA7W8yLLy1cGdGBmhuteHHSSHSyrbmkufq3EHVT5X9LxMPdY5jEgBzkKjWb",
  "key5": "2uyQsXsCd9gFrUJVgxegrKpqRc6YXBbHo5YcvYu4veUHmVqM22gdQDD1jNyfdNF4TQVhZqNd4pZiGGcDzCKsxJFm",
  "key6": "2jBhZxSfqd8fELc6Fmoe6pRqJieEUbEZBA2eXxyTxE8F1vn7KXA9bomrdvPWotoTZYZdmDv18LGSxgpG2M5wafRW",
  "key7": "3X9YyErFB2EurESqtwa1hnRUHLJGKPBABmjjYfiJ4Pq86ajwUqhtudBHWJ5zrCorepRHeXYoFxoVfKwpabHLk5Zx",
  "key8": "4PFSBz5rDRZT7xa1j8TaxuZ4VSeLFGURi3yn6JVNS5c5WhvnGErX3qoAZUgoi7B7M4ce1H1WjV8EWHAsYLTDqHJr",
  "key9": "2AhzrWtZ3f6XVWHSZRWmrusLnJpaFUgqeoYnwU3cxz6XbuAp82mB9rrYh7sbMSzXo9A8yUegryrrjDBcA2VMdmdz",
  "key10": "uqrRMhwsKFgPzeutSRUKRVsz71n1xVyLJJ7r4fP7L4H8aPj2CYQnxDddpCCQbTXWxawkhqyNHjWSAvxTXeXKJNV",
  "key11": "5fb3kM1VxcvKjPUZRuWum7FU3wqzrjLJXdgY5ADfgdGLJedGri9j3CyJ977QyBB9H7t2ubyfTojWNWURABtT7iNo",
  "key12": "AkuoqQYUsYLDJScefjuKGKXcG7YYYa2X2cCsxKoQQGT3D42GPX28xQEA7givBqxcgZSdQY9gRBGDKbUEaQMmvKF",
  "key13": "44M75gqkEeRu4kL31soc2mMDZ56TBdQQxLbUK9vDw26uRHRbc13REcgLc3xhLDjqVd1z3GywBPq7o1hbHWYdGTFc",
  "key14": "4V6RcPZCWSLGNnztnvtmQzFsj8MEpk3UrYHwrPUFuaLuKJZa1wNkWwvye2Eq6eQN1xUfSdKiiRvTt6LivbtwS4tw",
  "key15": "46VY7Qwg8bM9SomPeAJVUHkQye54o18sfsJi65ASNz2HcRvc5oR9zQ8LupbTKsrmJ6h9cYoqH5NcM1khVhfrgTrM",
  "key16": "2XyFTuAuJQZd4HoEKVhrdLsa9snGThZFG8YfabksYNVhCpZn5QiiszsuMppWpPwsXoE1NfWV5DnsfUSB8kApJAFK",
  "key17": "7vMxwa5FCM7N8UckvDATfsHLv7sc8sEXEYMpRDHKbTQJJFpt3gXYm5UGJmt5dteioT3D4y8RCg8MV1UdtAxEPw9",
  "key18": "3kZ5rAUQJreQ7PpiUcyaCuzLWRANwfiPqBoVr1TiWsDnPPT23CPobGkQEDMNHeWW6Z1G7YQ9EBGkUsN8MgaLjc6q",
  "key19": "64dqvJERgCmHYgJoLg5WxHVVCJzKpURdAU1o8Tf2EoDC28RTJTDdKQBt12mduHPHXVF978wjMEPjaw8uBNzc5bmo",
  "key20": "4KTa5RoddLavp1sPr18U3N1kXMXRWFJ4n8CajRibG1sTDzEswHd443sGMSjAAvi59L1x4gUj3w2DXos9CCNszkv4",
  "key21": "67qidgzQMtrAmJyZr1c3B8MS2juFhqW5ceq8DoG6BJ9qcE3Ah8tViGhWJe3B35XDthkDZVt5wvT4XS3jVyLrVjG5",
  "key22": "kMVRV8E9k8q1xS8a5wK3bbzDbvjpCbc3n4vzK37Qv7pnpGi38MJLy5KwuXgpfJhJ9JYZ5N47AaKnQRdkjgxLFkz",
  "key23": "D7EBuEHcZpSPsvsw2wsQ2WTXwQLyPtWL5pr2M4nCmKrmiM2GcfjPy4HR2neKNFeWLE8cuXgM5RGPEsV2iYr89qS",
  "key24": "1LUf3PfgaVGpgiVqqLFUrqF3uC5ze9Q4g2s6jfDxdTmkGP5ZMs77UsMYS54hTJwwn5cDLeRo7hdvRZq6jPPKfHw",
  "key25": "3TzjNphJo4kq5AZoEbsA1hcogC5yeGxhNCVtKzRtLKmELv3KEC7H83C1UjZyj6GRWA5gNcXxoZLRxiUWGrJwGLtV",
  "key26": "2QeAJ3JUzd7L81FiLR67HRsep3retZ92QPzG6B96weF1V6U6y6xKMLhLzWvcXnWxweYrX5hy9PPi8Twt2jLSuDGu",
  "key27": "4hqCY1uPU7pQvD3EXMskZ13iVHJgEjYAYythDG8ZEXRtnY1bgR9cZFaDoufuX5MM55mXozmQvfL8uqEzuLpCxjxp",
  "key28": "48vNMQdgQFrRpbAG8WrJUxD74y3DHHvA5UnS88ow5RHMwWJwbEWfraiyo7eHKqH4o3VBLghuSFduNRYcc5gsgD8y",
  "key29": "3E1aAwdQqysWUciWjt4SxgXqBmVdKb82xuT7CAaw1RwCJtZwsMRQqJNEqsekhXW3hTGsHfoygk9RVvCSEE58zze5",
  "key30": "5zN2RfTfSsURSP2677fLMWTZxTyfHoi2Zp9woss88x58U6YmAmMCxsgP9YQiMcRNbQ7kvBbnZTUd9BPv8D3wsawu",
  "key31": "4kKbamvLxPcrf9cckeEjJdT5JHGVc6CvsK8PDXh38twFuvZuwWPNpz9RaCoZv2fXtvfD1XBPW7tXc9dEQ3WgvA75",
  "key32": "3evTEbTQeuCJz2w3fGVqJuJx3LSdmAdJbUm44TR6rvtweCa14REkWkZ6vwRLU6jwf6Lnmzu89nDcGpkD5LbpjB8r",
  "key33": "21Hg3k2hjiEsEvqnTcRNoVSSs6UDvGwWntHcHrTRTEW79EWjbynBFLXg9TntNP5iShBw6691DwyTYfqbD2o2Tb97",
  "key34": "4FgsfXttT1n12tFTHY49eVUJ9rjDwcpn55jeufV3hLTKaeZ5DVUUUK7YvJyArqMi4BhxcD7FNDh6ViJRTANn9Vb1",
  "key35": "5LMiVU6E5JFwJRtggGSgCgWr7YSUYxB9cYJ7mZUCmk8Tdq7v9HSPxUsZgo8U5aVSZS2ShLhhhHPs71RQZhXffnzs",
  "key36": "5upGa8QP9AHyhvTqC2Pe1yh4ZpeQmXaUWCEaiZ7ZdmnBeypvzjU6ck6fHJZEKV7u9pPJAQKjzMqYn795Qnz3ha2E",
  "key37": "JxZeyG1RvZT8sAED142iUfEefKohgnkpJmg7oeytFLvAEPYuj8jE7ncKuYEoQLunKGmH65caAvT7SeLr63Aaxd7",
  "key38": "2oZaxfELFP3G3N9typS89dmzfi3jCt1grc3UmzHbKtN6NgbmGM6gbfeaPGJ8tJBEEbFybHMimdDzFU7q1CKnXuUd",
  "key39": "BWMtCMfagDq1k5zTd34mrbg3MUdjQPyiDQpJnCtmCUNQtcXtwTjJx7Aa78CxaSQMDLaDD4cxUe2RsygVs21sEYZ",
  "key40": "2U2JGoaQjcrTRVLwpP2Ny8yUTuH8XVNwcP3ow4uTXN8Lh7acxyD1wEejd3YyXtcCvnzFgG8au83yb4gb2PtZcUEN",
  "key41": "3AGmy1c1d6NcMj9jX2yTbHn7y6KArh115kZzJHJwagQccSPGHJes6r25Kqh1F2kLrKEuhvKNBSx8mx9HCYrsPuKK",
  "key42": "47Ep9RxAjjWsV8kZqdym2mz2qPshNiRjz1mxRYzJo2AqQu1LcmK4JD2HgKeB1Ri4rPq5USKsyTCnUD2Vjgt8sgWw",
  "key43": "5kTN5QGq17B8CJrENcQR5Z7SMzusoM1L2nWkJtLNyDpEZZgMsWnA25RmEjgsrUrVtASnpCJJKMqSQCwPCLqguCby",
  "key44": "4JyuNQ48vbGfCk6EoCJof1s7LZMKT8y8XdMKskVpxCFeNKaWvyAAafv9qgy4B87bCjb2VwzqrPiYSF78M2fbohCk",
  "key45": "mVZmFJfooHe4rSCLopNhinZ86kHbJRYTwvoGRSDSyZwLHFVZX79wRi94xKXVcSnMRV7sk37SbUoK4Kp76PrKWCE",
  "key46": "3dXbm33Uh8Q3YrYGcpRbytxyUwj24JyLqpvr5FnafXvWGYvmpekLToe9JpNxkUP8a98CrVRNFZAn6DuUxQGCB72r",
  "key47": "qXci1XWnC68utw3QfLGWrQEmZQt934vCrob8KCdK7KZwqdutjrtkQvRPjA3Q5Dv5DR7ZJtp2PjjeCZETJim1wBA",
  "key48": "3ZUdbR6p5Li2HSXyJQypvkeGpQjNkn5nb9BYpjYRB12S4i7ZJkzZRFVZXQzuFkjiF6RbF8korF5sRJ3StmQZu1gv",
  "key49": "3RuSETBPzKAAkKjbASARM98KGV53bwEb7yVhXQtLav8mtQNvv86f4yyYByLK1d3pTfNZ2c3AkGfF4Z91xg72DRq5"
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
