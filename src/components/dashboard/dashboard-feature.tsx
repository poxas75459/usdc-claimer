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
    "3mPcY13wUzsXM5D3z7YTYDoRscBbtK77o4ueGJBzUsLzuVidSEopvbuLgVU9udd7NHAQCSMnuhaLLsnVXJktiA86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Gkfh6JwpvZyZdKVNheGHLz1b5GM1YVsrdrRD4YVMWQMfhMB4aNV8RfLpLVyHrQktFmrrieZh1ko2oYAcdEtCEA",
  "key1": "3LbsctPHDcLRVSwkggWaCci35cDPVG5o22rKQYvRbug8jrDdJiE6ttQbi25Ms7Hn9cKfYJQA93MzCJs5XZ849tM",
  "key2": "2YargWguoP2cLwYKmLoCMZLAjiaypmv9ZxDXUqcXk1xZjxfkrfnbXpWX5yZCnhB8Be7Cm8uMxBkmjFDafWAWEH1z",
  "key3": "4r3bWHHvunSXbUPv8vg8fRc1t9iCPm21rqGAmaKWWBEZzHwUQYokN1obbVWg4XrNTv5HMLqE9HDv47GgGu57nbEn",
  "key4": "4hPptLG7iqdtcE42bSxJX5zaw76KN84GDFZaKHQDQojJi4hn8k7yzLL5H741KJfYjBYhMycXAsCr35MR1Tx3Rhne",
  "key5": "YEZCM2SFyMttSiK59LPEeZiuZASKrrnT6nMzFXU8PuSWyhFKwYBFvTMc91hv3K8iRDPuMo2ggZVeGv7LMFgknAW",
  "key6": "4uzWEH8ABcPNQnK5vZpMr4wWophyVi1dBaFttNXEWohcbHemwxJ2oz56osq1hutGU5GeKYoc2L9ij6ZiCtZceJEG",
  "key7": "2X5gBwuDpSrayv9LvTpBNBh4yupgfJBKH2uRqFkNoZosoueezfo7xV51rPxawvkAe3Fj27VvgLE2bWCZywn5uuD5",
  "key8": "4CdjD6Ab3Q2fcEdSYYzWERAUHTyfvM5iDazcvFMNMYuhBRveFHokstiA3yJNfb3esXqFWahCX24pkrZTr9eJPBzT",
  "key9": "2M5wFetPkp1AUQbigXAnGSefE3drHq1AF6dE2Egf6BcoByEAPZy8332K1NKqAWvv16qTz3VWw3GaYBiAXwVvnb76",
  "key10": "TyCa9a7FV7tSc813EMmPq6pYAMaMQk9FV29RcPfRGxK9Twgjkk4LyTZ5cyjHVHeyHBWRptqaPWoVcBJUmaPf3Da",
  "key11": "4hsBcjsUn3xyb3CwN4jSzN5zTbZpEd9kmhKCcAR7ajr3Ry4QJGnaYhMKENvu8RdrRzkxKYRi572zP5j8JqZiuyLY",
  "key12": "ZJaxdoeAkwPUU9djNGCNG17aLyMmX1PMcncUD2a2SyN5pAVM8yKaRnx8r4Kq1Tzhz8tCPDR3cCcaC39tUbwVRZw",
  "key13": "2guUkppGXARD4Gve8Xzvd1npnW5K6pnWcrDecYnHa9Cn2Mqi56HkBejucNU41Bm5cLa2hkSJk8jb4J6mwaTfKzvx",
  "key14": "4o5yYiQ8HcXzSTajfwMgAE87kYS492aMaS3NSEHiBHHso9Eze7cfFuoaAsD95i4KWW8tMNmyUt9BTiH4fdPCei1S",
  "key15": "4qJsmCNGHi3azUnRWmHnzdmgxTWY15C4FYktzbDTiFAMPBrriotd8xqG5kk6Dga6bjn2vFDYtAB2wAX7fRjxVRxh",
  "key16": "2xZwmBhGnVtG8VN4bwUw2EstG3aa7CbCFEfRdhNAazoQcZsFKPh4UKVc33NPRbAd7N3XSyyWPorSDQyBD57V9YSR",
  "key17": "MW3WGKiKbDpafGMZGHdm7CY66d4Er9e4DSxHaJECk9DX3HSvLT7DakqNZSjCFYDzwgsH1y4DPeChJG3QoZ6ZKKa",
  "key18": "66dqMHFwcAKbpZ9ZsvLsAzd1fFprmhgNwbF4QgXouNv894yz1R3jDAgjBLovHHH6GLkvUs83rBtCsKzgXFvqC9kP",
  "key19": "5MxHYkAz11F6WED2etEsH8mLvGaeo2C9RjjcDR3aMNC5tnPHu9Z2PU6bNeFb7ozRvrf4Bd2PjRCBr3UsTppyjHp3",
  "key20": "5cXw82bvU4F1akQZZaQkNZ2WxifYC6WZkgp2zPHLczZP2NHdxShizaDhZMXePAtYXDJcroAzWuCjw521YZ6H2bjZ",
  "key21": "3EwrWopPXJcibKQfyZDEjgMUhibq9nqQvTFwW3eR455v24U2b9NioA9928JvCWAUnZnPBZRkMmCDtDwwycnn8a28",
  "key22": "3kwANxU9GHHDQhLmrCogzFzGJFEnXM4xK7ECypzx6jQUJ4HrPrxG9eVuRZAKFSJAoANATK3MbX7GzxrJL8Rp7Jny",
  "key23": "5baDNZiD5wxjVBdjNJBUcabzBdTRem6ytJurKQ1yqXUvm6DPg9JBrM1pCt7juDwVVwnEnTmiyP8qYxx8DJHbXfDv",
  "key24": "2uNsEumh8qUAcx8m9fk61f8maB2ermGudxpQL37bNyVw2ZKAkNkmVcXYCR28f8vV8rZc7p7xzxUJtHxzRdnNVjGT",
  "key25": "3zF1rKxNPvvcBftdEGNPj9rjXbcZwK5JPTjUoWADSeJPnGa8jtaAAFoDFNahvJp2jPRg4eh5jM84LK7AGB8voveU",
  "key26": "66k6nbU5AvAfAmydByLPoMBbnMLJhBNMTBFr7EFcg7WCjryJysFKgHGsTg8firkf6asnF154hB7iJNhw8AUWardd",
  "key27": "5wV3bfhAv9hba7JjtJxgpdtd7TQFMWLWgYPzBY3HQm7QET2Abr3fqhCXgHeGPPo7Ru97b7AC65Lm61EkZMtiG2Lx",
  "key28": "3z8HXBzuMLM19edxJQ2sREvmn2UnJYppqdsRKnt5vQZ1nx9oay9sRaYRFzFNrucByqwLu9i9dd1UWtHcMgRY5eXJ",
  "key29": "3fAszWCpngdUqtBfDC31zwu8fDT9otsVFL3Xsq4KHLTYBqZi8VVCi8j1CeZwwoH9XiDJ2K43C6Bx4zvMYMEZWh3G",
  "key30": "32KFD4TXggCgCRtp8VwtViMX3fN3u48rJU85h5F55FYupRLzMPAZ6v4zaEVfCcHhSCXHDiFaqtfUtYAamrTRqFdZ",
  "key31": "5BnDN4uYMyK5XZSf8heHtkyEDmES8Q6wk2jFcG73yQGndioxPWF5UhCuhY4VAHmvVuPBdXnhQiyuvXKujK1djYmN",
  "key32": "4Dm1TiW2umyqMw5Z97mskTEYbXPyejV3iuv1pHdyLRJu3sHeqzYJ7mEeLjpQ5yx8QxtBHkxCPmtYHUCmNhyYEqW3",
  "key33": "27wqH1vtcLG7YXFZBxVxfhSKEfxQjWxN2KU1Fy7VT7ykarf4NCtsp1YxCyKkPQKnodL8eNRNC19NTnb12XtRKWXx",
  "key34": "5uHkxvAmSj5kG6CQFCRzrVV2kTAyxAcW7aKoxzJWxZss81ZWwVtQPGKeN75nvNR5BKAuzggTZ4nKpBnNLPJVvdKe",
  "key35": "PdaASZuJB9nfLApWMeRSQfW3rAnc7XiUugjmkf8gsKGJHZJCQDXPfkxLpFWawZds6NcJ2JYGeQSVhixGGBQiqEA",
  "key36": "5ER9qA16aR3H9j4ifgBbxWYRHx1kJn9N6UjRiKtSsGvvcozTmJCmfxGpr4v7YqTedUbJZRh2PPyVqjjdF1wXxuYc",
  "key37": "479y5xvMWTXgqQCMQfkkteGMGz3xJ9gBcKCwR1XjShyTkNG2DH25aR3m2rzJ1YHfX3a1fupgZi4nndf3vTonypyy",
  "key38": "3suniqcVtQ9kX1qW9ujFR693cnHhEbZcFrethaHoKeCtdMoVwxsjcggqgEiuNEG43vpBV1fckdYtFTT4nf96JqYC",
  "key39": "5FqiXDVqYsy5xUpPZrGtKEPE6sWU4WBuLTeA92bQDt9AJ9XHngyrxhxJaRB34tvQcBssBVn7CuC8nDeS7QdAMbNK",
  "key40": "4GjyjSWTJN6P4KAFfukQMdZKcrXs3jFByX5m9moBcDuqaU7CGaQEXjSQxdnbQhiiVFTuEqQ84QGBuMmxgy1MV9cE",
  "key41": "3F8SbydoCd4DTxCNM3GVYgyHhd9a4J7MdTch6aCxUnEnpMFZ73CripM6h8q2XAdjTsqX1SFa9U1KhrhG6bCf9D5u",
  "key42": "2avx4jYagn7RNsYPrYCHHnLvXdH5ZJDChBF1yWBcKm7G6DVYgwunhPA3n5wTspZiPHhhYGZgy8dyjEHdDYTsqeaj",
  "key43": "4Yo8HNEBP3nycnFiN7kSTtsSzvWCsqvwLTxn6FBESTAtLgGaSfkFtA6JihmHbWmKT6XfUT4xjn8mTf1oaqUnJYFL",
  "key44": "5uuztyUWb77LwgJEoNVGMc8uSYhjbPaRT8BJF6qNh66xPJYngjiaUoB6sNFmEwD4XSDwScVt5z3riVrgQ9Qu69r8",
  "key45": "31gAHqZnBNBubQqHC9H67Ng1L2N1WjqkxW1FD5N7xkrHHR2YZ1ymUkxy4abNUY3vKgxSmxsEX1Q5FiXNQCy7Yg4A",
  "key46": "2ktKPt9FLuFiy7drr43wKZaY1eTAxbjNtB3FHghdyriNVHoVru6TbLaa2cFAcxcirG7oRFW9PTYvQxmaC5fdS9dS",
  "key47": "3WXTvKA6rbhJiUFZZqDzyenk9sEQxvvqwbh8Nb2mnCDAWWUPmxSZWxXzoYNU8gKbzDBMfGPXpLg4QUiC9FiRbNAv",
  "key48": "3WbYdAbLQh9ERdXzvRHP4QN3eKHTrWYnwwmowiaFVGaoVQDYAEcQ6F4hemuJJb2yT3BqVZtWWEFWFxbRoT6tQjkw"
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
