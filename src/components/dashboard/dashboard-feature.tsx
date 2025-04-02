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
    "2csHpeaem725MLV7UKuDGAL41SJ8dxkg7rw89LXSywr4GCsro13t4eiocEwZNpcwXSe6V9onSYm7jKyzxTWSv9Cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "crYKMsQeD7oX6DUWgFvqo475J8sFoLadEY3prStwCMviApAA8yJaZnyEDYfLWNHLNY8smgQvvU8fKsVDXvWEZys",
  "key1": "1iiCq22c4zJh8xuLGPoiPm3vbdKbRM6hLHcZH7AgetK6BBwCyiNWb4yXBib6eWLwg9CauQZBWs5h9rXrRQu3b84",
  "key2": "RjqzWNdrj4ExSzbTHA6yMEoXhaC7Ghmj4mrUBzgV8RSdmKb7awn7e8ZXA5DeynrRDJXVmKYXP3nd4a8NrAU88mL",
  "key3": "GwHGcnxtCWoU6mZaMfWYdofaQ4i2P9Rmbjt9urXA8AnEEkUrtJazYRSWPaJFjvRjkUm5P6TCt7Xs7TyDkafN1ZG",
  "key4": "2UP2WKrJiUPdmApr6yhJPg8YCBaoerKuwTqasWERsyjx9DPxfGrbSduhWss78iVYAzCTLFm4JEAdGouKwyYfkJQG",
  "key5": "4N8Enty3PUAQBEo1DLMpwPCvofGkcWtJCwvo5zWMYEcXZjXzwiYr1WpLF8awRhZervXhFcEtvLCTpRfPNbUC1YbH",
  "key6": "x4ik5iKic9dahHjUM3XsFqkbVxzioeZMjraSsMXczXw3ixVp7oLZy7r5uEQ27DuBx2mVpEmozEwZNeb3b3wk4Jc",
  "key7": "4WDnpUGxbV8uxMXDSu2DR9c4ntcJQJVRP8GsvtUah5CGszje9Yh46CpwetudaxZ4xrb19XFPiy4G5YfGpbHxDmiZ",
  "key8": "ajvcswFNx5YK8Uc4fc4SevUuHwhUwnrtXem3T3Uz5NdymAdoLFzxcnBodS82jjAxCEsNBVBFvQgGKMiZUiXhr28",
  "key9": "5WUJ6HyuwvzAwEykrvBSdqnPnbzHa2LNm1hxwphWEx2d8BGb4NGvg4egeJ8vKyLWBjkv498BrocvKPGMAbpHu3fj",
  "key10": "5aRuGi9dDWnhed4cFo28jSA6RTzVVKKymABGM25J2AJ8skAd28cTjrwTjHrXXsxpFkd6Me6Y2vjSFM9EMAay4L5h",
  "key11": "2mUdxJb3JmKdEbdLCCL6gEXbQuRskUVJnuRN3m79bdjryv2FVwthyKbuim5imatzJXWmGuGGPJbrDXZj6XwqKS62",
  "key12": "2y9ycJ7MccXwiq6uPY1C6sERFGmh4cNmPv7mxuyMwhMtHDk6xZHRHt1vMNFPiAycSiCcGTJ2gGRaCnoTRESruEmm",
  "key13": "mq1uWpMLiieoVW2T8D21oJxumW575iidHKVBwhSd8EVoiJyGrb3r1mxgLvqydnZfaEAdmF5pnYxz7BxUs4MyeyR",
  "key14": "2KGm2tTjpPWHH1heceHrhAoEGi6oyyoXUmyWif9RPs3x4gnDBYgJBwdB1TAwUYxgjmJo83xXSHx1WeQbTrP4q6Eb",
  "key15": "MYu11R2w51ZHuqqMNrPpmvy8cRA16ENsNdMxGDD12esaxt96zD4qwktuXSdD2Zj7RURtu7wG8L86eaUmUXosApY",
  "key16": "5rw6jTxxRoTDjQ4twEWrcXk8UESvkaidYec1b75ySjaV2fb6dfX9Ekss9s5ojR171bicNignBe7fxFeRssRiZiJq",
  "key17": "3pMCo2Mh1ami2KYbtmW62ixuZpfsActCTV1rHGaJEeZcagzxT3rew3NFmFSyEL2YZpeUJc9aSxkvXzQehJ3YTtch",
  "key18": "4gwcKZgqiW89QiWqeTnmngu474Ap5LFKuMfAJPWPchdARh8zuAuojriTRCz9E2LtHDkhncP8wberat5Ji3bmbQdA",
  "key19": "4CBQ2ktSqdDRU9z3biuMGpsKknJzcsxDvvKWudfwGD6Wh198wAgjfbKuJrzJsDLpHq2fxCV8VXEZi2Uv7z8e8jXA",
  "key20": "4sNSeGuqjNuHXWX7fdWVZMLpaiW15S4GjBW45ekLkLu2VQi863wBiAg41iFmkvVmpERMgaBk2c3Sk9VeXjB5imHm",
  "key21": "3gyce1wbSugAQe7w2rg1GnEDQzYxayHDa9HEe8iRPvw79Gau75HZsLdA5Yxagz6nSoGCBmt83kVy3LMf43rezGUQ",
  "key22": "njc86CJAeBze2b6td6YgGXBCn6upHv3xnJQbwQGx3yqVEhi1zvEr4koxdLdNu2zBZH9u8ZDfPkscwKdVvrPKEam",
  "key23": "2ktUBaKwbPptDcyaxNJ8v9kgKQqnCuAdrmnrPZFpNQ845oGNwAsnKHeH29xsJXdbA7W1nzkT24PGdoRpeGvYuzWd",
  "key24": "5N6tu6Kb7kSYxc1sKb5ZRoqmnKtVe7KAiHKou92nx3vh675y1ms82H6SiWk4vpWaXH1Q3X7QjZLL9ZdL5kze7TPD",
  "key25": "3XRRiFzjuDmWeZj32DzuxtJ8xy1isiEXszZ6bv7XxbmsnUGYAsSmPunWzJNc2mJBA4uV8Wm18jQLCXzVLMirm3qx",
  "key26": "3AW2Gv836Cs8vL2Z83DYWXbbLVvBE3zweqc9cbwktmttQ1QjLEwKZZYXkwoMXDSGVqfnwBZJaVf5knYZZAacfbp9",
  "key27": "DgrmaA1vCZGCaT7S7nRSb1886yTBgSCbhwJPsUSpN8wTDxstkgiprW6FPa3kJ7VgXnADxk8HVaHiYMQq1Xv9siy",
  "key28": "36mDtb5YjsXZqaj9fwsw8xzvrQjzRJvGThLQvhpQM6AEVPCjDgYh7DWYWQnvNFTtRTnTzCx4b5QeDsktcFhuVhPX",
  "key29": "4etVinaweEQePwU1Xt2jFkFZqNWQcm1HTtgsacqzEWzYzioMUAx1h4Pt1fsX8qfLk4FydME3uXodTgdATLHHWzXe",
  "key30": "32shupTvw3p1qj5wZbVeTnaTPZxUCVfwS5tQhAohDofNvUzYKyS9BtNEKgrucAAmAM8GKiToSs82jGTuvR5k1DCz",
  "key31": "5GXXqYUD4tcbd3VBVRR91u8vV2VWmq6tAcjJyyBtsaLkbdtb7XjZ8t1qfZGTG6nTBE3UucR9qJvTrzLbCFJq5vAk",
  "key32": "57KXbeAxPrKe1yU7KYeRK4V8HU3hdDD8fMjM72mx2VpUvoH8jyiAhuCBAosCpgh5YKvoxWjH5sQ43kRHuTbWakgV",
  "key33": "GnV98bkZqKSGJMkqxkQzZpNnxYu2wB6JKvUE8uNLb8mmA9JiqK13JwDBmRgnSkN28Y77HR8F1XTtAFQfhqzzZ2Q",
  "key34": "53F13pkBE5DpxNEB2JsVuLPA2Fo97WsqacdkxYNsY2QHWVJx1mYtrnSFjW2y2H9FjkW8Qv9XkrMevkUFU3qEmSAL",
  "key35": "3iZB913L2pEQNhJ7QWAaiq54fzigRCGniCcYJJKA98kj6MhG2NurUQru4ZaKN5VFpAscFxqQwcALNNStBtYuzzXL",
  "key36": "38WU7moDoTZA5wQskA4vaBur7UkJ6NqBP9xENxUhRAxYb1xkmkbxHJahLQhgDoKAwBxdatZpYx1eenxhJ2bvx7mm",
  "key37": "4LR2ifHs5SdqoGGVembVHMrqpSQMBHYjCjyuv9odSH7JcMkMDu6YVuAZpHgKA1RCB1yerAoK9cNcmFRkrtT7iFTD",
  "key38": "2hNpA9hcBdZKMcxfXAZhimKFFwsQ86qeenBbTiL97KQw9ZT3D8z5E1iTVFHHGmAB3ccMrndnmonUYgxFKBk44jqo",
  "key39": "7TVPV7yfgX6Jbau7jwygypMgzm4FpLTczwU1bsZ4BgFap1w9Nn66wCwYZMTFKWTQ2naaob5TdxUkYmkRcWDFzuB",
  "key40": "3PmNC96Z9k6MTmtYdzYt1zWFmYjgZwi5EsDuJ54aL3pmZANZ7Bgdn5VFj9CEHoqnXqE1z31QMJXpdbPYeTShsKct",
  "key41": "TcvTFmaqFbAmiqdCwB8zAFsVo9of8uDT6tMzQBNc83pUkrJY5VRwYDFiDJigVJ5mhbCARcY5xXW67osVwnQJEtJ",
  "key42": "2dhSVmHGM4chuDHvjTC5B3oQK2qRsncuiDwHWcRAR9wacGaLMEySfkXJC1AeZs8Nkw4RxL8zFjMt5ZKzq64ZD6JX",
  "key43": "5o2QVpGAHBAtEfZgYDfnbS27D3ZygBEyqX45uXXCFGHwWKhxniov7tmFSm3C62rVhXxqxo53Crjdd6TeLohXVDVb",
  "key44": "4rBVMmrDVzjbmqaeWvPitFPEtQq1w38t2TzoKGtX6W1RucKDAB9VCJCddGQ2JnJC1dR3Lhi8nzwMWrL9jt4LDNN6",
  "key45": "3sAr2NR86dVpvxerLsQmhJT5h9PQUVFoVHGEDgA1Sc7SAd9uFMKyGmxsVccUDAX9Gtcmzm3QhzHZh77MpV8upy4V"
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
