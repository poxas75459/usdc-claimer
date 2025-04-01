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
    "44Xh5MBNupL2TscVghU97kpJSjkQLS3fKEb12po314DoEhxrTQKt5oJ6F8x3rPmvjy5Dgt6aiJUm8w4sn2spMX6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QMoBrk5kaoVa93ucUREK63sKKGbNj7pFNYVQZNocJNVJMs2RJshCx6esZhKnoHLSJ2gfmcD1VRKSjGPW9FRdmX2",
  "key1": "2JS6MkTPPyCPwALr25qgMvwukirNzuo48Ya8CKQbAMjoN6hZR1FW6FeaQLmBUK1b49oG5DvEhWFK1YV6CES4og7G",
  "key2": "yhDQHQMKDTZ48n9795uXoLM9BxQfotqnjqad3mQVexSeXxcjfEzgeYou4oV4NJMoLwcrompDMxCHAjGZckbxtEZ",
  "key3": "5xs9mGLuFdLC9YTpXBHQ6EGB7qHx2TRvxqc63d8TuEiqpnddrip6SH9AxkjJikt25GUw94752K19gpgHXpQVWhW9",
  "key4": "4zuSmPA7VThuJJ2kPHxir8hzCnXFbAofVd92deAxabEjAc9XAoZXJTBsdQGCPDiXtDf2JMvUEBYh364UQ36fyCQW",
  "key5": "SeZX6Cyw1cAeqXLbjboTLunk3BiD59ifMUid7WT7i3RPc7gaLRc1xTdVEMvohaoxVfki9gE4RV18nr9TXkuC1FW",
  "key6": "4MPsQ4drmZqqEMLQyWrePxDxAx8SWHjtSyosaKGychCBUvut1mzn8naiZgob3ZSs2wVXgdBt31xtz52jHBaec9Eu",
  "key7": "658vgZjYeWV7ViofdoYPus2U568FKLacugrkQi64oTiQo9Lr5PhoE4a4GT1KjrRcZ2sar6mmsED3pTfpGXRBT5yG",
  "key8": "4XwtCuyFrw8ZpBZ5P7ad2rb8Vvq258aqKLR1ojyDxGZodVZ3MgGMoXjWB2zqHLsMd4tcUWEMXSAc1GASWrKB6zn7",
  "key9": "2ned5MQMZ9xJ1gHfg6cAeMNUFUn2dy3UWJZtb7znUKFfKoq9Xfk1cvFpkzFHtKLTZH3JwwsmWP9dXcCcoz7xW8Zi",
  "key10": "4dErj4QbtFjWEwQdpBqaCKDm4UQZaV48wFewPQUedjSijjRep5rLbUEM3SG6ycU32Qr1G1PXv5bmRKk8B6kjeW4A",
  "key11": "2e3JWfMmTpMwy4Aek6qKYDkbqAoQADJJ3GMNj1JgAMnvF782BbcdDpav5ekAhDeASFdpKK3257qyHkUgcbBD7kgP",
  "key12": "K88SaiXzaw9EvSNq661Qv4p7m34Th6AjvfyPb9RVAZ4mP3ezQ45ZHD7wfJ2KXUA46fmTkGBJZGwHFzjTk7ueKMQ",
  "key13": "3hsPQyZLCF6KNugjpFzr6GDJCBhY5VY2jNfbADfCxfaW8pyNcSrbADKzHXNMCgZtndNBEQxoTRsPJ7XAs7wJn7hp",
  "key14": "hgpveF1ov7bnzMLjh6cdU5ETR2CjDJdMooPbJKZkCesLxJekYW4n1DCEkoLqZ9bGX7Yh1sCZ519LaX7FboY3KsB",
  "key15": "6FkF4dqhuQLe4rZnhTCCpQZhwJsKZX3h4XnzGF3F6eosecFooan1iiLU9pCATsFgiqViiCyFEk4QTMcmMXjfW7A",
  "key16": "4dAJE7UwabVMAHtwWyqS1BvUFiMRMj1MxoNXrstoDDYnZq39BjzBJ1H4Ty3pupLJiK9Knen6PPBmi7DG9HbZE8jw",
  "key17": "2p5kdJnMrwsjsr5oUcwm7LtRPyTUoHdbZQQCCp196kjEZGEk2qRVWTgCz5Eiv5cpiLe5Tm8bEV9AbBQ3QuF54whJ",
  "key18": "8VNTjJWWfyhxPfkRJgw7HZsSmbceqRw5Px945kGmdeRbLdtCfLLpvCRnpFh3gSPqTrrFmhesGmv4GnFy3LPU2N1",
  "key19": "uPRQuqVSGTi6ZphDAGKrVk3g8ox1t8kHnYr9nsefhtUqdFiXbRYpQdgXSdxsZsZu3vsAw1VjDKNcs47oiCMjthQ",
  "key20": "4LGqE769MwLJY9RoiV3hAoSs3BvQJhoALqY5JmUiY43UHDZogvye6DaKMFU1CwksRk6xEERgGDyirhVHXQ1ZuuBX",
  "key21": "5TbpAZ9WUykScrvsXGry7YZuADtFwuZzydKCk6mJkJa7bYiorpMrNhzi33h9Hm7dbRfwFi9H5NKnojnWP2iyveBF",
  "key22": "4Y2r1hTAzwq5fpvPP23n8KHRea1NHkjq22vwjamRowLHDQEb1G9Gr7aEhSvf1ZLnaXaKtWaqcRgMokyWuQn8QjmN",
  "key23": "2XayazMqH8S8z8oHxvca3Mfhy4jgY6yRwLfFkRCn6JoAbyfHP9smR8YLqUCUhJFVm3ZZu3fwJ5pbvjU1GEAju7Yj",
  "key24": "3Z3suo1ZA6eJByk9bg4rXpsTLJNWzgbYHepFyRFfRNvcT1eFGZzyHA5QCGLx8pqmYfZkcHCK5VgifYZVhqNBwn4N",
  "key25": "4ZcZCBVqt6inkgESKfaeFzvw2d8jsGja7N5qoy7jDzg9yuMSGPM1LF2iZSe6Eg4P8fdgYLquTCa4v3UTQ7JTsSyQ",
  "key26": "V4LxFcoq2jfPv5WjnN5chk9XpYX4SwkaFiJyDNtoV2vuV8yqdZ5CJQTkq5iGKKcqB1AYnFCR5Mk1z2sRtrfekvJ",
  "key27": "QNqEvhU2PPaqDihbp7AtRAhdFxEkZSFUYGu2YtxHmDYz8c9R67uZAN5XUcb9rytp6mubFpvtm2iDRpfjrBppvRR",
  "key28": "3QegkD4nqCyVPNt1JjfC9TNsssc88iNWo9kKzToUtz29XNkydSZWHA8vBfWEb5T9JXwo8LCMouzH9MTQTNdRKBUr",
  "key29": "FKGYLErTPX2FPWkmvJ3K6g5qst1UJBhzoLgFBAXxFx5CuJzpGkuvkBPCn29PjQQ3QaCmBvERp6NYUcBYhhNPnHH",
  "key30": "3pZDHHoyu1gEzaq8xfD1Kh6D5mcoSQ2jtHkd72MGqHCf9VHGmDAJ9G3kSvqPuhiwEDymrD7StoXwNCoxmiDVPp52",
  "key31": "mqwdBW32SR9WEu95qT1WdLw7qpPNmKfhPNY7bVfpor5GZSHCxYMpq67HLanUH2mJR2LCeHA9MWqqi97SiW7jjjL",
  "key32": "2GF98fBZevoWirUVYnGpRjw6WUCLsN7iABrXdjF2ZYzR5zyX7mGuruY9mQiKzmAgXt2GoFXK4Yszsy1oC4hhCQZ4",
  "key33": "5CKPjCr7Hz5eGheiqcM94uQfytq1WPApQ5tSjbHgDbxunDBiKR1ZVJhS1LhMjFBsneFyeC3zhrm91ghjbbZQy8Wx",
  "key34": "3Jo4YRtRqBRNkMRiqDMMcdVfvFPWuhBiCrBfba3Z1PnKMHyfdkNWZuiyLj8VVpTZ53v8vztPURxWxoW3M8nXauTk",
  "key35": "2uRKaevYr8mPWiJhXUhUCC6QJ6PnzYy9vAFAx36P1pg7hGKv6ob4Tp1382UX1qZ8D3mDCQsVcUGnrax6z8yBSfyJ",
  "key36": "4sNRGUXs636jWgftzXvMKX2JCfA7M7RZUDd3KRd8iXZiW7JKTbxumpbzCHBYkV6Y9F891YZmqjmDZkWbyULVf52h",
  "key37": "TS8nqym2fQk8U8cV6WUnkdz7f5dhjvsEkdSEAnArrwUGVXdB1PbYJUKmzzYMv31J5pu8T1ARKwRHnm8zSF57X2J",
  "key38": "3E7cvtSmKGMtE96nxtqyfGTXioqc97LYy6RnES1xtD19zRjFLxFHhU1QgZPTuyYEPqgeNfc1MNzVjGusshRi26RZ",
  "key39": "5JEaGnN111QqikDPzJ1s4QesRfFRL2XjWNdo8mMy3n5p8Rjum1ikh8VxyhRJiWuuts8oxqmjYHhh74qujSNTui6D",
  "key40": "3BS8iCtEDtVN4M8AgHs8aExhBPV8X874AuejKUR6Su8g1UpMQDkm3H4FSvQAX5LQrvXcG6iQw38LhYq6K6GVbQ4L",
  "key41": "5cbUyKaWnA4x3EeZj69wQcqfQ6FmVwVR8ZRPYRxpFvf8P3KLKWfukHJpXKrXMWPgAeu2jnoNqHAoQaDnDV6g6P7s",
  "key42": "2b8Vusooqn6vJBSoWEB9ATRByvQrHWu6Do1HvWAv5nzPGP7cXftDjyaAJ2yc4AGSZwzmwNaRXnee6k98MJ6HmbfL",
  "key43": "2vKh7L5Xwn26tzu12CQC9z8ij6B5PoNicknfySp5UbqbCjPcf736SsJyXRG2NaYDMApo7L5p9Rm5Aroq8CoMTSNq",
  "key44": "27vVo5BB7vyHDpC2U84MVTYke2dgMKJqP44xb3nhrNfWcU5UeBrMsMZGbzUZTeD3snanSzB4fiHFYWiFcVhJMmLP",
  "key45": "4SjcpwAbnCkWkNRHRr9o3DUEbsgfGfHgFTSrcPYfsiBQnFEHVCPoD1fC7Ehfzu4WvcigDmN1ELLdksSF2qC576Bu",
  "key46": "5UkpkXrL4cMgwjnVRQbFeZrtWk4QhDcNZtQX7rr678ZitkbT1xocq3XmEvQTrqThecFbiJRVhwaEEYjocvrYj1PD",
  "key47": "5zZutSD75YNimsSmKZfonrMkYbHschhcqKigG4uhpA6dLsmBTcxh57H7RPXCPRfvnAqcWDXJp6BJLX5WDUVERzAW",
  "key48": "2xiLQMFuCrtfenpLZV21A8kmJSLjbyrS7VfKckZ3C1ncdDxH1aZhbrmh4LfvuGXGwUG42jGRkTEVjhKda7iduYb3"
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
