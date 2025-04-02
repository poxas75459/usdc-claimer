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
    "27j3pYoxwPmTRtzLKUgvep4uobKT6wEPi7njcj9ij3r3C8Qtjh1m3CaA6ZLHsXufptm26GNiNYrzQC8orhe7f7xp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xG2pN8HG83NHzq2QUXgXyCjt6muT2MA83jSLBp5iRPtPTRvdPhCYHDMkWBmydyZRgYW1wd6YQbvDfiU2aw2teG4",
  "key1": "4QHBAZprp4qs12CfbpmCsa34YWi2B2zq6fdNVgRM59vcDPJKEbEU9JhQvid8da4phDiYPKpjTDvMWJWg6TP8KY1h",
  "key2": "49i9V8HkVoyCXcQTmxuAY3mMLViATMF2sxqoUvYNnmpFfsw3FAYzNFiUhTvViWm2BRaTrsn9XnDwt7Km6i4CJtpV",
  "key3": "2vcfTZXBudT6dE2uA4y3Ko1EUqn6GhRzoT5bQEYWxENqiUksQ1mpqUXcyNBhzsBLQJdHw6kyQLeVMMj9kWNVemMZ",
  "key4": "4Wpns1si6pg38nv1JJDBGBwirF1GbjzFWh7cHvTnFEqtT8Fqx5WdEQW5nghXiTRnF1g2YRcn9Yn7A9EwHxmbU6JN",
  "key5": "5YeUxouqF7r5Z2wfV3YPhvdePQtTRx2emAWQa3b9k3W4TdmZGo9Vfr1DdbM8JawqeZVYAjWARQ3ScQxFxXZ7Uuyh",
  "key6": "5J22jz3HS3qLymTsRc3r7dYSUBDkVpRde3CnXMcjDWgHiUBLf1TuKahtvnpUQee3jxSJck8hoUaJcjnEHyLmR5FQ",
  "key7": "WN5oV1G3fUgGtXGqSjgjHozvJnu8QCKu6A6W1z3LKUkTXCVPcHv5EVJHTtKzAQcZ924anYaBbc8LxVCJXjEpJxP",
  "key8": "U3Zwz6e2ygTT9gy8abC9pMcRQTPPChnG5ZTUtVwEkX6jXmA2HfaxNgSxcHab5RwDPpdZktC3dvaNVXYFZp2DQrn",
  "key9": "5xX4Z5MGxEFHRKYuijX6bhHTTsdb4wVPvNEjrw3D974wkBJpduhpa76YsE3rpxtDZ77f7u2cLE5m1ZoFjAF6W37p",
  "key10": "5NcJEv8GzRkTDXi4iDYBRVfdJ4bHCYA6tG4NpxivfpVMC9b859knF7im2wET8AXEuwkQvNAy8KPH3qu1ogRwJYo4",
  "key11": "59cwe89SuxZ7kCLqYfRz9eJiAKa9LGuSjawkh9ZMJdiRgu8bt8tgFz555JY4eRgdq11QtAygE31M8iUQnWEnCJdr",
  "key12": "4CbmgiSJQpUtN4woWNvPENbQt8WqokBzHm7qSewfAFaEVZFZivDQQ14WZsMzSzYtXxbCM6GTUy6dd5iX69vjDeXv",
  "key13": "2Q4diafMMdUdQWXRvJqjs212Zp7HtX9ccmuMw3Ap3cGQ2mieteqFhF5SrrDZMVzhGaGmSVSgsvcdGJ5wkkArweoR",
  "key14": "2xLfpgAmjN3RTi5ZJ1dKciLR2BpnfP43NNDnKySbUBM75VKc6SgDqjGNK8aBXHadwfxPuE64n8ZaLMZhWTnCmMZC",
  "key15": "5KG463qfGr4wT6qUkxakqh6rPNrT7LbWUV4qzdGRztJ87CneXiq6gB3mFSPi5W7EFwewLuVXaMbKpHT5Ndi7auh9",
  "key16": "3b5H8U5C3dudeDwWPRZS6WAcyXWhRSrxkY1M1zcn3z9rq8W2eG2TJfgDHdtDEqUvGW5VpQEiVau4w5hfFmovSg8C",
  "key17": "5mA8DXcTDU2eEZQJ5M1ezr5vySqYCgyvGPzYevTy48GDzzJfuV7icDCJWUhDtKxhcTHwPbUV34TcRnGkAKDBbLFR",
  "key18": "3NFA5sBsByS3e7cseFydWJwRHgKCttvTM8fauJjUUM9cv5hevxCTEPfis24EWzp46Xuu7FHhubr3HWAsYCjriVxQ",
  "key19": "2TjYc5Gjz5KT5eVa76yBBUxqhb4z2oGeGPC5Tu2LA1qwBrgagHtDvtCvTEoKiY2Fr4RmiecdCXdEyFbwhFn3V13U",
  "key20": "3tZkm3bUvTPiNCPRx7TgK6Y7RdZAr9tQUA967xLzCzPHqX2EMbDsjLw6cksvhunysY1mq1oeUcdiF9S4k7xmknzD",
  "key21": "4tgLqAsu3sa5fRWJoAjnifjvyKdhp4rdTV3tcJXkVzrH3gDr3XdkhTgZ42qNsFX3bg3nmXiHW9tN5SosMjgytDeb",
  "key22": "5V6CaiS1fciPkg8otg3ahxEHZrXzEti8BSHRPkx94jgsUQyCrpVJEXi94FuFMPediEpfuMiAEZkyCqK39U2Suon5",
  "key23": "26fMywSSQzyuLtQYrd9jXQaHpuMk1evajXn8JtUUqAyeV1PaT3tPofsEhLt9LNRJpzM7eMtSsNMH4BjXYkaLyCFT",
  "key24": "4GQdNceDHePduZgkupDHSiuZCcxAyoo83RD1m2Mrd8wTox8zfr6EjMB4nwgcTVsEmPEbHp34vK48o2npZ42AdSHn",
  "key25": "49LUGKwkZge5nMe5X7pn1qkGAZ9WBPf1MQDjJpqMQ6uZZ5fu5zxry2uW9thuW5dQEi7EjyLLKF57MRZXAe1mUasW",
  "key26": "5VaTpvrLZcMzjH97W3wmDGAm3RJPXwQmcbjaqRfZVYrAAeTMoc8qyYSpCVGCPHKQpzvS2Hsw8LSwJv6ab7gmQQTE",
  "key27": "48bHhengSxiXWZmi5t1tcPXMKxhSfaMWmgPiCTTbfRrFkAR84zzdwRiCZ9J5c6fTnFN3HAwqQQAupisuZLrYyBmG",
  "key28": "4cu8GkTvaDUiiuNYwkEY9anAKXqpUxD6nF5FfsVt82t1QXRyApCaUu414Zndwy4JMAhNLGSXJPq3REzExT4sVigG",
  "key29": "3qYcb7RVDr8D5F24D8dmpKC1UMUMsyoKUpNC1tbe88gDepg545BhMnt6me7fVGTUgkFXdna1JSvP9DGrZeEq5wyH",
  "key30": "4WHerpFpXUsmekxredXH1ugeQyi8hM6aYVNMJv2Sqeeauze7WPwzxg6tbPeRuxgzgpR13XErr6qK4SvxWLXWXJeq",
  "key31": "3MkD5ZMX8icXLbaKPuhtTiV8ESPEk4R6hWR8wLWtG5a7yxRRFzHnRmrGjQfdymoUG7bACjG3syHcGtVc7w5GzGkh",
  "key32": "5TcwX2AXZdrzyHFPGAhXLzrf5D5e34TErjSXkGrPWp5MXacd8GiXKtmP5Fj4AxHrwvtV46vuKYNeXVjNtSfozjYk",
  "key33": "3GNugqfZtLifeDZS3kDoRPnr4A3vpq57xNDW7d85LrbtbcGEPRCAH5shmEkkkML4fREe7EqjRmguLUvQGPyP47L3",
  "key34": "48PNVA5PHSqz4FierBpoAFQFm5VNeuRC5ZkrKiSkhRJbhfux1yRYZhhN33HuStNGBLtTzG3Pb4D1F59GZvoiT7Fg",
  "key35": "4uowsfuF2CJsfvWZF2AkTcS4kDPXJZ74Fc8a5sphSjsRPsWs5QsJYfS88hWdefHzHB8NtrEueBzPZd7FYfWcvbJr",
  "key36": "wTb6Vgrq31LRtbnRVFDtVnoxvdagxZGhmiiQgbBzePpCM4UkCdavSAzvKWw5y8xe5Zsb9zhfqs1ym3mCTMS4qwz",
  "key37": "23tEUr81svvPkknwMTdye5dp7zXs37nbAnXwEajhQZreLEGrVtNGusLkQ82NXy2M2jgHLkMuTPf6DhgGEPFy3WSx",
  "key38": "5ckz7X3q5ni5qt5wNQ5VBCrwXvZFEv1kEJcGtf9QaBip8ynTtAMe9uiAeUyq2MgPrQHb6taTBYTLK7owLXPx4Zxo",
  "key39": "5i3utqUjxfWj11RD5wViLUfM74uYCX7GEBieceSik3DHSsjpfEdfTwmU3gVG151jyRbVrL5FpnsUejFD7qicVQLD",
  "key40": "42s9uZWJmJTvb5fEfVdqYCvCDTWKRbr9hhK9ocuYYEenSAzpPM2QJaDFuKxW8Kfk7UtTgN5HnMuCPjgt1iCZb5KP",
  "key41": "3Pa48dqmqckn8dFmxW33AdgjLehASVfbvSctq3Bqf82K5bsM6Tbrm4zhQzGyaFLZTgwbxDJ9qYDVsg4iCcfKX671"
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
