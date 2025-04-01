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
    "J83qGbDWtriuUpYQ4SS8qGC3ZD5Cw58E2dcYwjVRdRnCtwBtNZUaAAFkm4eEPAvS32Rn8wNUpT6ZQkXxnCYMxon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nioova2mYbqDho1mdEt8gjjQR7LXsVx59AeJfF9Y9waXREak5mPHnLDGDEEQeVpJ976WYM6Fbyxdtjafdj46anw",
  "key1": "9mt5aYCL5q7SMdbdXunQyfYDbXeCnbpCRAVX5kyhW2fwG1PGw8NtM6qaMeXBAiEqCZyyDxCY98ktFGGgfsdNEwA",
  "key2": "jn5KymcziA8fQNidkwzteaXkSuFMEPMg1fzoC7diXX4E7sf3Z5EJxhipZBrRNhEqyBfNYw1v3ZX6KeHnF3fRqVQ",
  "key3": "P33AuDivFtvBaXRmPZzYF3UoU7g9EPxbtSQabaNBQrZ3jfkhMGw415CFNojf5TSQrWcZHJKk8oQmQXgXynVAvzG",
  "key4": "3U5jDgzreaC1kHAi3bZf3dtEEs5WugpZieWR8YmtSW9pV78Z6Cyz7Sannmits5tY8PvmjDQGaRwpKwixaLJLmLvk",
  "key5": "67eY3o52pavNdKSnWwPEg4Aoxi1Sct1YfeZZrpino4JUZ4mCT3JYmxnBSaiTegJwEPrfDXKd7my7r9heh1ubXKtj",
  "key6": "2xfQ5myzfAtnZj1ARm23hsQpH2eJoSe6PeNypnmFPc932PJV2RoaGG4Ak9yRhDDH8jDnhPWrMsuWzPiV2JPe5Uvr",
  "key7": "2fxS3mRMBDfuK8CDZNBm7rP2qW8VnLoB8rKCyCZQST6pbim8GYwGfvyMvCMDTd1tPE3UmX3ehPNBELWu7fZfCbAN",
  "key8": "2u3QfruJbAFgLzNuLdtvpmFUQP3uEnadWkHsZM4cDEvqcxpNMJbJx4MAjBFJmnzbqGGxoZokryiHX95YHNJYiKwP",
  "key9": "2D996eAani8qL9oHsqiWhPD4wBiZN5p4nDLWMT7YMPL5cxaNsR3ue3x5v3usB52jkg2ggjjnqU4UjwzsnXpkKLaW",
  "key10": "45B6rx8khmWNY1eesc9ppedVQdCXsEacfeUQQpZEtU3Q8KWzK5qWs1iBPfJXk4KWbFqHXxGQuvmyYxjHXsykDJqm",
  "key11": "3KtNTyy6DXgZt9h41JiMRrXmHDQUBtjEQQ5JTHdFMSitECjnJ5muqqNSNcCGGYpW9MYzHBqBLexKU4qpHD7d3mLU",
  "key12": "5MHX7BiBTyapBRGGiVRFvP5iemz2Tt9WDqTL4GTicLhrUW4RpcPvdCzMuaZMZS1Z6oxCwuXBoUhMRPD94FUxid2B",
  "key13": "5hvneEJJDh5rCiqwrjmHXWgewF77Re5ZpavY9zySSzP3uJ86nkTZr6qUDuVoLA4sdCcFCdcw41YZRtTTeajqZYXQ",
  "key14": "64CHu2Z5M8FDf9ZfNSArFSsydkf5M9hzUecd5RbjACmmGd4GmpScGJsvVvYx6GrTZYKv3ycmXErHYvtrZo6oFFdW",
  "key15": "3R6Vc36JiYGL3sGEWQCXCyDWFu1uNsiqHaq4T2nC6wfapwT7fGWze6zkJhrS9KZoh44E8GTHCmKtNxwBUoqK7QZR",
  "key16": "5Zwjo9z58ADJYNG2amKjEcTdM6AxAY8btzhYz2wYhY9jHW9q1wEMkfWfi7jpgEqRZ9KCyyMNkmGzS1FiTspcXUGC",
  "key17": "5TzZXwKs4a7SuhESWvHvZ2wKy48UBmP8TLYKUeqxfqTue5gx7vMWDUNS8kQpn5PMBnE5GFcUSyLY6vXQVcQypEKN",
  "key18": "4GyWydf5uFBTDupr5X7V7imx6pRc4X9scoDsw9LKHk667xHW6y8acjyLjrNgufnHtH6K2Hq1PtH2FkQ7FnyoYhrm",
  "key19": "54qFaKwaEZVa4PXwkJeRjnwEx2Tfy47J8uQqDGrc66YUCPqDRekUnaEhFcTAAvVA2F8j4DsdVxTyZuL7BCFtDAGv",
  "key20": "4irDMHqkiakLJ2fchDQRorJWgn5iu97dTkPm6p4Mz1A8tk3Vn6eKLpTqbfv5LdnSLCVYDCSGtr3sqM8yPS9RPPYE",
  "key21": "3jA5CQ7mgHL2hgvYvKZBNMmdbNb6fiegVh5ipgTvUJ6Rsa2ND8i91VMBR6HkSpseHaiPbf79QBMFdvT4soF9Qey4",
  "key22": "4V1Cjmh5fYt5Jcdhbt6739iTwPdj7GwyVPp5c6HCMwHAKhwQy1gkQ7dyWxC9GfKPBoY4vtfZzi8MQugFARGSkZRQ",
  "key23": "3LKpnSPRahYRfnS4jXaKF9Bz4XmCYZxP6gJQSGdB4c69CwKL3GeHdmCB3fRcW1ro1Pr9U19Rq3AFbLHd8ismtXRf",
  "key24": "5FxsipLWuCfG1ktcq4MwmVWydueYgVx423uVi4Yd27fyHo784jFuZNCJr8w2weQKtKQvutATsSbkspdwL6ryNp8a",
  "key25": "3ZRukTnaZMuTPBpEFuPH2Mbwv8c35Cfq45mBeDcELmiox3ntW4wNJ3zJf6NBPTLM2xjk24bELGFZ7XYwjGiwxHYi",
  "key26": "4hioTEqhixmDvaKwgtRR3RRttjCtVE1L8haDc6fFaKepN9Bib2pLCh5eqvs7hwSWaWLvJ6BXc3G217H5aTUsRJkg",
  "key27": "unxmkZSbaP2y1buWqa4NuZqfxzsjCjr9MCRmLi9EN3srwtvitfvcXQDbV38YgYzkMC8d6angLk3PqYivXv3SnRK",
  "key28": "39hGpXBrkytuuozuQMDc1vN1sjU7W53rwa2wKaLUr9ZvYDseEmK8ZF5aoCn75smHyzGvipJ7pi7pv5x2zwRydfQp",
  "key29": "4r6ao7ehjE5ZxjStunJSvozGWC164GRaS9ApJpbhUQ9ZRgUb6htNuEjJLPz3LnrNhx2TbfnhiB1oRk4MZh14ULGG",
  "key30": "3ehbMrdNGkWDR5Xdcwb88gZwmaxrGFR2Ku8cafrwFLZJ5LDvoes2NfPFVjcqKeZ7TnmcdAGPSwZfGydccFdhNXGz",
  "key31": "2L7JRM6o598WyzfrzDbz2r6MKRvbk7EigG8bwByZjPRwvcU26JNqoMsenScTnbc1LR6gbf1gYK7KQAdPuYReCrAo",
  "key32": "WRYYR58Xo94Cz53atxaDhHNDuy4j28qiZoqRqnCfYPNSF7vBaTp8LsbD937DmupmfYzQzxAYUvvWbkSnWsHbHBK",
  "key33": "4EUKzahJ3Wcchfa2mUC6i2CKqa7gKFUwHhZ2zCutb4GJBhWj9ReH7xsn5uzuFU56qLEASQgKzsgiRxhdhN5t4JPx",
  "key34": "4Ge5EEjByw21Rqce1sdD5z6YcFn98hJtCRrgMU1j7wE1TafYbVXxdMdxx8TdBLZbWaD7ekfJiW48694EBM5vtqdu",
  "key35": "jYAkDrijcY2oo5398is9Zw89kZN9PGsk3QHFaCj6gPePzYP65B4HwVcsD9TmGo2jAzAiwLWsCv6BaX7kbaJKWMw",
  "key36": "2KXveEgamVRYrWDssUmFcjKFn2RTXFfS5YEMZLzr4YfZTX3dGrZAvyac2qcEMBxkVXzYBy5wNJaNcvikdCNKJxwU",
  "key37": "4eTnirQvz31qHKvQBrsWdETgVKysA28mP6wWU1z7qqXfbvn82k5c2rzF2rZwV3zjpiYgre9ZtGQrujhz9UzCRtNA"
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
