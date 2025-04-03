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
    "5EqpPtSwsAdsa7PDW9gbteLF3LvBdHu116bSnwMkkfw3XWMK3GRVmvLA2o8LUXGKMScYKvJ5oFLQFUj7pg9w9y1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6U7QD6A4H6zANqb8jU23moNDjD9q6Lg7Vf5LzKqyxmaZqBcWvFrAckPZdAeRjpGcEcq7NQQhpvim83VtYFB7S16",
  "key1": "2vRTtKTRrrt1WsW2iuwx8U8Hz4tQPUQVXxtNcBESa7QEyWgVdipgc2cNZkRu8RjcffBLbJiRcMRhADZVY4jHHc1b",
  "key2": "5jauCBgJF9VJxiuczpvPpPhGBCrtGos1XuJzz5yZUry2Q89WaLfsy1Fvz1nFK43HTatLhFVUTp1EUe6ve7Brfdbk",
  "key3": "4tdzxLXj4amDcuU1bC2cHhreAqnsBJ6QtqVBc6io84dKY8YkzR2wfQgzfweV6wE1FR2qQ1zSfScEbcwzGVjhgX9P",
  "key4": "21TcTagWFBAcRZd7Dq4gRdqpi3ZuQdYTdXAYbguxHJBDGrxGs4NdAotDowef8iVqrYd6ZhemVqrcf8xZNWyNQAqi",
  "key5": "2xTQXdFktjiMvbrGWNrvzYD75BRXeNWEwdgAhbSfSpRk5cXKGaJaeHEJDS46kboS43svZktG64uhZ6PPJXLDSiy4",
  "key6": "3kQWMLJ9LPPJhx9FVvRXrwnSqp6Tj8HfhcvGSnvagG1NbcGF73hjphnM92MmJiEXLe3dmH6RBJ8nGNYmLT644k77",
  "key7": "wJjwREFxg9VVhtnjfbk5vDuCZV1SRyfSixPc1ChPcdJ8E4JDf6GrefG6JgzTz4fFWJSwxD9iZRF8J4dVahT6VTS",
  "key8": "MCHpjrrRkmfn6gnMw1aCJ9A6z8rXMajfA1LsLSEbpV5CQQ4hTTd1rjybf8jBkwMvViuFAmMxxDJXV9gvoPE2Fxb",
  "key9": "5ckWPVRUMhW6joE1DiTswsNKKKVEwgYcs443RrzKgeTYEEeSyVoLTEveuceJH5gTB4C2pYJWWBenZTFJP8rZdeLn",
  "key10": "4mPmV2YcmDEJoGV134gqXkfEvBUnVimbuQwCtmzJjgR11sbdcvd2yReM4p9XEg9cJsBM65mYhN5qeHCgA3pNgMd4",
  "key11": "4LXCaTbm6qv8QSCWvFJN3kKg6QERwRSwEZJ6BqJ2UhjhPCQnAEf9UALtzoNdxbP8H1vUQrzicwGxJVbHNDhsEria",
  "key12": "5fkCwYggyH1exNzDtArT3a69UAFxvFNmxNChf4YQPVFzJP7owtBWyRgfdTNdWQwAbcpHhDE5GqgPEUFpq1GY3ait",
  "key13": "4jYNBWpqLAqQ2VFnSqPdZVCMKw1kRtVfY4cn9tNRQ4K62JQbSVegYx3JFK3KFBTs3rJhnciSqrBnncEJ4W2cym6F",
  "key14": "7tWxtSRu5kzReBhVBheMFJWHEawJgAwD6exfUmbkygNjijviHwEgjbMjE7eUTcz1NpWW7VNnW61hirQCVGmRXS2",
  "key15": "4VmrwegKFvMAdoVwob2ApReSNZQ9A4Bq6k9Tm9MVQgPqnRx1aAssQEyDhPPAqbdJi6tYoVvUespLubBX4nNDn8BC",
  "key16": "271ArTX96r2uGk63cTECW33BU6Bu9ze6VkM9hCtUmpFtTYWQrvpFHNtc5k2e9qSm5nNSvFbU58811JWQnpPJsgz7",
  "key17": "34MkGxA1LuoVrnWzZL4P5ohr5kroRZ12zNxjFawJ2GqubbwHVjkytPYijbLfrGFxKhRJikc4xLHScp25t3PfjTpV",
  "key18": "52Rc2FcaTu2uav5GTWEusLXkrKK3wyKR6aom85SS9XbNHRkj4ttpDQaX3s5e23fnhBCCWb7X95duq1UDAVyKxCSv",
  "key19": "54VeXoofv75zARo1YEYW338MNUWL93XQ65iueakmDeScr69DwKnd1oK6AF2msC9B66yrUTt8Phu8LPT1b3FqjAyX",
  "key20": "3XBW8VMYQsWZ7oNeUxvJ3musqAJJBX8om7gH8Zs9KQgvVayfx8DnSxR5Wuz2sEukyjxcJs6ezfPY1kvpVYCknS3L",
  "key21": "5VH6Nne8fFcs7yjUjUaQwZxYEYtk6AJGE5hULc9RHiGjX46yn2Pr1tu3DMVbxXPZpdZ8XJYX4bz4Y9vZZM2GPpuk",
  "key22": "5CWLo2xK5bNvveBWjXALtz2rRnZGPmUqJRnct5sJu6vMKPErFuLkommvPZ9rfS8dLw8Cx611pk2psJKTVPsoWTVv",
  "key23": "4HbQtoD3vSHGEjZ2LS66qUYb5Y9LbuyRkKubFpdFcpgS5zZKMryJggDujnk8tMXFN12s8GcuxDzpATBQFfBRSnbH",
  "key24": "4hegLGtv2PX52FN32XH4L6wvdVmksJz8U2epyNNCnmvTDZ2RHA8MRz75gtC9m2ioeg3qrGMTYgCaeedmWNxLFxwC",
  "key25": "5YrcsRd3sC1hqsgqWpza456NxiDXe4Wdn6k1frC4ZbvzDVDpwihfJ9QcAsA6ek2ZWDN7uPVsjX2EKoQnLizjrfpi",
  "key26": "2a7VGcLWar2qLdPPDGVfwKr7p7JftaSszs9fZ4zSNTxSKwEXGp3aXz1hRx2CH1zmbfGDzsHzVKCH8CLsxeBwHTcV",
  "key27": "2TftXkELXUzMJKu3ZGgb7o5JrDMQPLnCdgENE561BSMTX4Zuzp6Rn8XVNGUZsTSPhdTyrP41MSF5WQjELyePVboL",
  "key28": "WBym8ruYTQESComLrqiBm3VZh2T54ZbvkVr5qGCWbt99P3cwfXyP2uFQWTn5vcjvhJ9YmhH7wWUPbyBLJ1CDPME",
  "key29": "GRanU3ZejuyJke4veWXdJBguLsrvhJiQmuGLbW9naPnsRVoRtvrbbV221eDD2EwYg3rdqBoCwdtsAKKZYojdR5a",
  "key30": "4X9Dwkhuvy9AKahvWRo5m9sTwk9zQMht2rkpVBT5QTVMu1BkTG847prk11iWdFsxxaw3mxdGA572mm9BSKE82Z9J",
  "key31": "3Ujs2aM3XwkyLHzvNbkqkjwiH8xhPL8oM7Kav5X1JLReihYwWtYfMYCcHcXkWX1tcunVjpwTgGELdGWcZX9yfDqc",
  "key32": "4cuLdrJB7F9eAdAQ9Fv7eyYQVLF9pTFeWGN4LMPDJvPcH8LKQ9nVx3kVhwh8q6y8yR7oox4NGFfE4PjvPZeVk9X4",
  "key33": "5f2s5xayCy2Bq4CzLvCDXfFyHffZsMw2W1tyAMdknkfVBpeCp1SfUsULrUqU7GuwNP5r9wXiuJknpSnfw2UoSJ2t",
  "key34": "2vGRe4hhcfHtahK8L8Ht9U9Fbe1vUWA4nGchHbNQurUToeT3TGvj3v9hsN8SHkZDW4YsijapLU5LYo9f4LcNZ2Nr",
  "key35": "yX5pGp8BF4D9BehvL4dWcnko2umjWxivZZ26vph8RzSbL5V36uCUdh8HGHgnBhkFn6Y6X7kCa3H5HYPY2YoLGso",
  "key36": "56MGsv2RvJNui63xwAKCidvDVYpiFVAg35yfVmfeDFFfapcsR8cKq4KyzX3brCtD3UQ9sfVVBRx76NFR39wwUuwe",
  "key37": "Jkqdaj6iwLiv2e8hdJ6yNMZJiGS5w4sNTfCM8XVbrEsTaVhhJ3He6dSVxnLscRbxPXBdZjXNTZpQn7yVLWNoojL",
  "key38": "nM4Kow9LcZRuWqmsaE3tkgpWpRaDu15f8fS3ZLCtZQWqpQRi1DA8WCvq1oSfTQtnXXTKSiPfXsZXU3i3i8CZxu1",
  "key39": "2Whp4FUk7c58S3tK6KaBbM61JxdptP9N7Cu57ATaxhaEpHkCvCCQ6BEQKKbSUP8RK3wbpPHBG8We3xhtc57JkQT8",
  "key40": "3uhtAUL4bWsTtP16AdGXzoMsrjqLapjKKPQ9wrCrRykHEGNP2vtHt1zHjEgcV5V4e7FabEk7bh8GH1tMRZ2SDzeY",
  "key41": "4hvDHUUetakQhLiMkz1ctDFVQUvSYEsR6yjcVy4mSs5LaHid6y9v7Na8UNU46GFmftuuiQR95vxVy12FfgpSwHGM",
  "key42": "4Gg7HwKiZuCd2cmAoAysfPcoGQSYynYWGSrP5i9MH3SW5rEasy7MNntGntpz2wurY16rwvGaUQsbUMUsRBz7UQBa",
  "key43": "46KRF4dcjVy2rMfTXmrqDBdVKzeDLJpWz74pwyat2o2bFCM6VucxWPamqa5bbWDMgf5Q86qsvAHTDAcyL4wayaJz",
  "key44": "5aZ6qYmUM4yxGTf2BijU8ce9mnnBeFiqdtoNmqyir2YLPrH2jX2ra1aaf32ndT3QD4FjtoAnj9dp95f1FWnTUCno",
  "key45": "549BLj1aZihSXR6fqFFzRGkAdMTJR9fJ4yrC4TEgif8BsmQpCt4DiTub6tnNk2Z7BphH5aJDA8xAS9rYybbRdoRz",
  "key46": "65TYZEpFxYhXVgAqEiBpuqXNXdixWMcvuggagPPKPiF6oVTuL5F11cqfcQ1jaqq39utR4JsDxfP5xxeKFvHhv6jL",
  "key47": "5LHASvoG2a3VScXXm2UYxXvYGfvjWYUDJQ1ER8NK6AaKARce9aAsciNVwK4oXgHuqgJXFMr47JRktdzJwCs8YGQR"
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
