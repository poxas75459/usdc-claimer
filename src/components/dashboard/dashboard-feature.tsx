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
    "4Vc263R5KeFqowsDZG8cJNBiscq4TEFSoC5ERmtDrrcbZvHmMqnLQxaEMWYzPycMPJNx4Xs2YrDW6yX9q83Jpmrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6gctM8ceQixRG9iCqjHQPWtNkXEVxmDZbm5Uf7pcV46gdHn8hrnY2JpPczkBbgGdiLwSJBur5ynhvP8XPZ37s3",
  "key1": "szkU5tayRof975U7UjqtFimgmuyiU4YJFo3qmzbNUnMB3NJ9d1QLEM6VrysurXWTrdjDZ5Nq45BpjxZwgNtczpA",
  "key2": "5TVzXJXKsHeyhjJZ5iQb5CBmdCHMAd7popvYXukmS9KV1k5QwD31ikfMvdtcSYT1aqu5CQVBwPbmczRUDju2z5Ku",
  "key3": "3S27Eh7dQexbf97yzM9Y5D38FjwTCP2vQZAN8rnaNJLhKXnBuQ7ZC2ZeRMnN3gCoF47pXrjzr1LS5xG25Jw741fd",
  "key4": "2U4svWUWppZnTfQM2NvUB1kY2SNfjjwuTxRjavH7nxrswLTPLy4ceQP2odBe2Erw1K8BQ9nac8ycFfJWLJcEhZak",
  "key5": "511DfgKYPRhotCmWbkF6YGYhWeEnBQ4xx4ibZyMYnDmYFcqihRoGSoVitozQsbeMDfK2rvvcm4BFgvwJK9awVKrA",
  "key6": "2f5pWFA5p1odPZxvUcvoCi8NNLrUdYMoGcv2HGLfGsLydFMDScCn8E2DrLeEajDD5bDcs8MjmuqBjArNcicPFfVX",
  "key7": "3fUQxWWD6NfwYC8NFsNiqAREYVLkDF2N7JYXbMKxWWDhXcgCf9ciGUmjTZ1BwBJxPdoJEbKx5RdgdmESfeSoBYqn",
  "key8": "4swogoZP273PyHUZRGkkEL5vTy2jHnvAQDjDqamWePkcsVgNHYuaxLaxWbN3ZB62MeibLHSt3ZxBADUT28yzXvqb",
  "key9": "2vRvkmV511b98PwKGgP2y2Do4CpKw52SQAEJrFpQucqptsM8yyoWnQBoL5xbinLTGuCFXVsnMF1T1EMHM3qfyh4M",
  "key10": "3WMjseptQiNsYZYTVxQHQpekgbwqpjVUPzEgfL8EokvCqMiyNCzfuZKMbzCWowe2GnRh2hJL3ZMB2LHJMcz5iN8d",
  "key11": "28B2eS5PXxhErvnTWbyhLk4xTYBfFzdJpsHiEiWRigBdnfKtEVmkxNyUEq5d5gEYgsPZvsXY2hhHVKHjZf6Eb99F",
  "key12": "aFGiYsbRgZoVCWd9MNxW4RTwVMWCSAkFE6gUpfcpKYT45Ez7pycLprteGos4nYGm4MHtom7KqGm1wi2vVm2kPSp",
  "key13": "4coHdtBeqypsCKm9xV7GBMLWpqY22zAuWmz7qC3EgXfxYswcZPhtGu1fpTot3HJUn5NBM54rJzFWzTCbuJvxRovz",
  "key14": "yTQttw3dRXWdD76w6TBoyhv8RCysqLvJnvv4EyRKwRsagYHoGNJJ8XLm922mQTh5M57tSWidYg9RTV5AdURMAYM",
  "key15": "4JGrGEA4eEodQbKPjEBLUzXPsYGHPpfa24gVo6GCNB62wzpnNJ3d1h2Zt6SzMu2AZM7H5J4r7MKgjaFvDyVLs6W3",
  "key16": "23xcxe8U9JA5cRFu4L5ktybg7Jb5pUPiGghzPAZS6r59FvsvUtDHmo1DyeH8kLSX84WxpvAVShLiQ9UxYgffMV3F",
  "key17": "53yEo3owWYV2MUTq9ikC1JZwTT8uTFTHcyB5dkEs4EGyZvNnD9sa6uZqCvPq4YY1Lbb63VeaFXRDUyFK993rKcLE",
  "key18": "2wYuiDAqYZXYCnpfYj8gmmHzDKtT6fBg6NnTz4DTinbrdaUk6bBHHnUFkxJhf923LNxg3CrrnqpqvxZUaiimzawP",
  "key19": "h5RKCbxy9e7zwV4J6gS8izpA8p45sjTAVkj6vwG2Jbq4DEREjmq3LfWDiUGQRxt32GtMgn2GNHQ766tMGiN39XT",
  "key20": "FkF4XXS2DE1jPnJGEm9FUbPAiMfQydKeWpuVJtPs9SNLV41uZ6gHbGpVg64iqFnZhSREpDust7XuperTr2yvpKJ",
  "key21": "5Wmn9DGMamHiRvx4midk9nob9d9wbwJeTafcAoXcoNbHrtXMSdymqmZQShBfuFDKhxVMkZCkig4gkTV9VHopr4zs",
  "key22": "5wM2eAZY4TN4dVzEUy4Y2eYfFmB3yUH31JmE8Wmw8kPmEvfgm2C5FpEbH2WbvgRxcya8HVeMgVxt7nBpCKXUeSVq",
  "key23": "4tAXD116MDZwX8u3wmMUvBDZDjrSPGddLrucB7FJnSwyXVZj6iBGLjEAR84VbqRdjs1BVw7W4NUkaQDhRxKGVPxH",
  "key24": "2P5Wu2Z7YK1qbGX2HBF29aPU2DwkjF212cXXrKzYxsc77LM3T94FhZ984pDaR5GDREtX8JEXyMA1Ry6rpENf8toY",
  "key25": "4sPGgi38BdC4mmdT8y65zUktjNZ7mwpnbxAdgZTL1aJowVRkqinBmsW1RWKcnH1WoHCVNuMWeSSub52SHYix8E6s",
  "key26": "4K8ryQF4AELyWYyF8K72F9eHRkvvZ5JGaePiHiZt1jGpn4KpVGZcJHj9x4yJVNjt8DYsJt66KfLC4YmixpwcATFr",
  "key27": "5hYtFeAajSRy11p5T4S3gFEuRApV88zasuh3qcWCVRmDb1hoZzq3474DhWEnmQ5b1dJD7gxy9f7uizv8k9dzfjBL",
  "key28": "4akrTHFsJknogNLJ5GyXWQucykUj2YY54xonrZ1jSobfBzwLpNKtVDPTwrdRfGBUtdV7Qd5vJgN8UC762TJxUD8h",
  "key29": "3dpiVJJRCZYmQfJ7Pkek8BbumiJJ9ZfB86J5h1XrMFA5LVoPxf9Y6RGQEj2icY2NvvcEaChp58k5oYPvUA5GqTda",
  "key30": "2t6fYs3Xgh7yhqCsRnTeTRx3YYEZXWoYh3xJqEC1pAsWHnwFzjUkp8ctifpvZBbDWahPGUo5tbgnAM9FZkAyGENb",
  "key31": "2uGYToatukKu4gjuanYtKJGHkjpk147NVomgCgx59sFM7rLRVkyWCRz7PCMCD8H6FPPyL16NJzbuGZUK9S4HUEDy",
  "key32": "3fEADVmTsXXnXagfsDvqgGw6oS3Gpx8cYvFt6HZBjRTvNKUqY3iHwgdxoBfjRMxaHuFaPU2FP9VaPL9Lu3myoN5R",
  "key33": "4hqeRrBqviJELXcADsYc1oMBdnnn3CCekvXdgP7w7z97HpjcozkBjL1mtRLzDotWgyWwa4ZSbP1bqTeRJX2BZdkj",
  "key34": "48WvbaHiiWUqmbKXyG5NrXJtFfNFoCHHdWXBiho8SvrACiybYHDZikGdqfhbt1ftAs3K2fMw9ZhMwGBiB31LCjgY",
  "key35": "3nKHoDx1icq3UvQmrq1ZhxjLhDwxxnEJSEenM4txYRpY5c9V8z81iPTkYnri2JDfLQ8pqPiXgUvrgap2HYLzTW41",
  "key36": "23GibRqLpUcS3VFECQ7jnqeKddBKY2zsdH3HatJW9svheq8jGwkE1DuwYMG4iihvkNmRpVFaeFc5aGsYe9eK8YFX",
  "key37": "4afBvf6LnaAinuRZQRnY7zfkAcQ78KykBafg6b86smLjtvu4EUMYR3bmbm5vTBZcHguxWsyWzYYdvn9q3fMEzxxf",
  "key38": "2mrh4K6Eee7rcpTYzaAnmoeRcjdxpYLtuZD4htf9grqPrLfbZgF1wt24Uax8627GkBBHrX4weGdzRuJbgHcEkbhu",
  "key39": "47ueKAPpDWBBanEmCAwBXC2Bv47ex37RHPoDHRVVdbhJ7vmYABMTEnt7Si7C3nCF59D29VQT5y2jQUuJb2K64CE9",
  "key40": "2H5QMfha28P7fjkF3ZAtzdWrEvMzHDLdo8JhmDULUg5ns9LxML67EB8Q44fzwb2VUT6KgkufgucaTQnV9CAYABiq",
  "key41": "3AcmqVzjf32ASRdpp89prDPDAaGPTPJQK2oE6a5VpvcPx62yiTY9gCUadcM1ZUqXwH2wU6aF2ZMp774N5gtHDAoN",
  "key42": "3H8aXv3vZCUHtMRaDfZCgyDfDpcj1vbhdULCtA6kt1PXSTEt7zDjqi7nCQG5ubfUxx5mk69eDnpifGtmS28R9tuV",
  "key43": "5hFXxbCMTmLGWdMT9NQVSne3nyAksxrFbi1BRxzqq1ojb7c91edb1ueri3JkFrRriTHcbXmh6rehtnjFkwAAyigc",
  "key44": "61YdMqFtT2L3riyYJiUra37KchkaCQMzaPEC6D48LhkRA4iLs9S1ikAMzXmdJwCJwhqE7zPD6DRMwtfwbsGU5nFy",
  "key45": "4SWvTbcCYtT8wDE8SGRxZFb3S1jTX1yxfAXjD39B3KTdTsLkiJ3rD2GvShLGez5szrj5iuVm8gWn1fQiMumpM88G",
  "key46": "duBGWundXWW2CMn7Q9iu97P9WxvHNYyDsKKUH9GP4NEsAFnTMuETYffUTCAyFAGsbCczBaLbHeR21kw35T18Bia",
  "key47": "aWHUo9EGYwwppdkzX69eCFZw5JsqTG9hAtyfxrXqHKzBVnkSJ5VsRUP41R9s8PysJc4KASpnAkL3cN6ArwaKD4o",
  "key48": "2hDrqF8BKYp9mTuH8F3jP4GwYAJLpgMxDkMAodUNSYvjpSqgkrs9Ym1fnLCgDW2nTsYtFrg72gRe2VUzBQ1z1Di6",
  "key49": "54QX7BKsrF6JBcYSNTFNY43uen7GFU9YwQvWYjCRrvr43gv94QWN8kJbXjKs4Xe65GDcMgFy8RvphaCZdEiKD7KF"
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
