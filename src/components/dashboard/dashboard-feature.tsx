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
    "3JcFvoj6WdReCudLuYAVqjEorifjc19fPvBhnuoJaNUSz33ycPknmZaDKdhiABxNPttHPXFqrL8Dtb46yxRqZoPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cBRExX5zHbiRLtbJCLvPCHLwQLEikECF8PsNnTjb14cdxYSPq6YqXKqD23Dw9jS5x7btZyJ8CnsSzuEkScU2rSh",
  "key1": "A11xByWZQAJz6knJCSBio1zFN1YbtDvyQepugJTmApf6eeqvtadNaBhLZLouCpRYMPQV23s41h5FNSq6mr5Woct",
  "key2": "4vnfLhazMWJJuxjM6QLt1x2mTM2Sz3BDuZu98vumfDgxdoAvu8s6BD4swhw2vSo4Fygpq377rSSQUNKU5D6MRcuC",
  "key3": "4AmLPGURhLMLnJtBdJyoMjdPTkX7PqZ9aNTcgLyoF2Tf3EiPkPNGrSGxcBzuXSnqQgbGfZp8L5PDz6f3vmmcaG47",
  "key4": "4qttcvYng9cLeAnzXV5DZSiaLcTehK3UM9E6WN7CYiZ5TzG59bAgVDNwN5SPwJtqzpLYTTBjk2iVXkQjsfzBoamA",
  "key5": "4ZxrSG6QmDuumEk6cyFHKkKkEN2jM3uUUf5AF4GosrLH9V1TuiV5GJ4dEVuErF4hHuuxtdqJ63S6cpyCEX6nAJnj",
  "key6": "3TVoYwh7bTwi1icBjtbYoP1KzpjnqiuSAYN8pgrdAKVVJorZweDGKqCryVKrZxnnNZzjKk6LvRrPrGgc1dEUapfF",
  "key7": "5Ny1MUbzvrL8qnG117aTqeUzrn8kxy4wPyQfQX7zvtqspJgbvM64MBja5LkALKD4USspPocwe225R92esy7Z4PDS",
  "key8": "456Ab5wzsMFvQE8nUjJ9nnQxJdbPkBRgRpJhvVGPHmYUYPqHeAV9GNfNoRNYBocsMENTKbBM7CWxiGYQiA8J4VWz",
  "key9": "2YKWxcubdXnhsjxhXmHBCFn6XM47B3YztqLtZVJUc27eLmNFg1P5GiMCMw3SatZFWnzhKnfh4iopshT4ii1ACm9h",
  "key10": "4MUpdSsp4mAEvSL6wp818MXsLgNA5YK4CbEFpHSmSVTG1xKWkCe7jECHWB1Nm8fgK8NmjjBe5AbQDmKz2CFTkBhL",
  "key11": "32dE8aSJysoy52J3XQS2QWzXW6uWwH6qF8w8JqLrgoXc2SstTftCcRa2rXnVGAmMPUzSkmzp8xiDmuSERGwgJL1Z",
  "key12": "4s5ahVs8LXPL5Y2b5ScftdAxyeG9rxbb8kGGXWSL29hKUTei8kxRQsyRctToSRMc6KahzYf5FhnipbyYFKow9eGo",
  "key13": "YqEbEmFnEr4iEUYT2M1oW3tTnfm5aqWJfhZFGaFN9tGCYgrs56rKfHBm72ZuecUuG5wYTiuXg8gKtoVy4KZ2f5h",
  "key14": "51D81vDLWhu3ZicY4zesufVZLPPnE3WmAaprzFqg312r4piVhMfMg1VRuxg15UntDvkwPZYhPYpWt2zB72ykdKYi",
  "key15": "27gwefLAHkEPQCThPt3uAThxN5cmjTrWQV4XVk3AZnapzjjT6H8ioHPsm9zxNV7GoDXfgW1qsTr7PCmdx4SwDHVk",
  "key16": "4UKXYHS4VsguhU1o6RWXVVkdY2STpWRBa29mvJbwXBdcD5UZf4VZQyQXhk52FbK4fYmEH5N8v1YR6Fohx7mxk5yB",
  "key17": "5WkurKqstxUyv5ScTuUVDzseiLR8eDfEmW8zss4kyPKXiFiwznrUPTHySfgMpHwV12duVwhm9y3h59f9pPUbf4Wk",
  "key18": "3aNgoZeJxUdef3LjfvPa69JJejfZifYX385ofbKzHhi4yB4Jj24zPHsU8fRsuoz2P15e5fzTZPDHKoUapQvJcgE9",
  "key19": "XMtw4NiV8WpJ6iHon6gqLmhR2sLaw6jTb4EFg9FBrutfNpmHTsqmTPXEd4gL9XxxbvLgLFqCDbiTaHL2BLBRGDB",
  "key20": "35P6nVNRKCK552DvNco9hY1X4gq1Ags2gK2DHHkpBAYmBzfohwc2NdRQPt1pcGUwYjN18CoTFva5VKoedb2NhkQW",
  "key21": "25gND9PnowDkvC3UxTzaXCYYchw9ebQ5jqpRvMKhyEA2oCiRPRTWpRJM7h3S5mkZybUnxyYxewWN4ni25yuDDxtn",
  "key22": "5dXyp4TPcfxiukFucxYLBy8qSzrLDxpuM7HsKz12QFRQ4axGf42JevteLmobMhXjac72YjoJPn5pY78ycfsT5gDP",
  "key23": "2WcS56BUkQhdy7FmXCBZ1z3tyeeVc8M9iAgg8zzsHJbJWAZDKnuFaCX3PUN2jsGpRYemtcHirbFQtUwriXVtm8jK",
  "key24": "2SKvZVGyj6TejqP2Xp6RpETq5XJc3uMK9fxPkTKuSNgESf3WZpYC94zTzgKoG7Yq2fGZtqFVFT7rkhNDoBBxDaSZ",
  "key25": "2RA5SuGfEW7tacZQYnhupWsaRiQTyGJNtHP7mLJAU7VUEM7sZXKNvGricZZzLGhHSRyaT8vyEuNdhKq4DbvtX4df",
  "key26": "2cFumdiqz4roCcDJ4nraeNhUwWhEuibaCcE8RB3VzaougPm67EuVzdUak3NrdFTNA2hZBDEZqzm6gzeyDLS1uuB8",
  "key27": "GFa4cprEE2g3TAws6h6jkwQsg7tk9wE6qqJBiH7zfgKRcwQDp5M1hXQFPy8sHzgegeBS7n1jLf7sJiyE3YSS584",
  "key28": "3KMGEoCMvUP3RWLqMWgBk75a8rBq8jRX3nrVCT1rkk1EHyMUsVmzPVS4h4QQhYYhnMHRbbJprKe78EWbUn9W7RGS",
  "key29": "4exhaszuF2M4DR33MdKBwyhhHmUBjcdrQ4rwHSSo98kPcSzAzYnm7JdAbcYcuW4uJ71TsVtKZmoofA5iETNZr2QF",
  "key30": "wr2b42XqKJ7jWBULhSLAbrhexo1ck7VARw9LfG8UnNgJtBxVmsamcbBrV1xQu1nzou2zQJGKHR4SU8qwwBM1JB5",
  "key31": "2raYHKxXXkVT67mVGW2U8LQb1ejqWNKpscVKiVAuJKgrJYZpJ9Psc3K85UE31PeZkQbmMV5u4v4EmbMFh5uJRdSa",
  "key32": "47QSRzAJsj7SvPKWqo9SZeg5aauTnDsTj7p9QaQEkK58LK4onbPeJoWXTRdE2Bp4Rqm7pNc4br9EMaNVrCCri1yw",
  "key33": "4LDLef812ua8b1VP2jmpmGvVuQgXvxfwuAV2Bh9HkYgRuR5xpw8rWwR9rUeeMK61yZJr3g5pMY9M1t9SfeCs3bx9",
  "key34": "5NDaCDRsCK36muD2PkXN4CmHtSK7gyAvwzhW5ipwYhwoTsism39kgyqCztFTdVzmNSLDKtnNHgeo9bqmEfrSrk51",
  "key35": "KePuKzxRFhUsdqgLuv6Fbc4CQNcYVXwpf1zrKp5iVte2hcYVR3y2TyV5gnyPqPavvRjRGF4BLCV8huAgJxaowNg",
  "key36": "5ncLdqcwpFpeQwE3r1BrXzn3ccBBMnQyUbYN3hYuCK6nsyr9ZBoss6SN4aBnQrTG5tnwXES6ZeiGjWkr39pZu4M4",
  "key37": "67NxkJjHdo6hciRqSKux1brp6mTAwBghxwRRLi41PymXsWsRfLa5ctTXVaTK3f7aGLrvRpwYPFdwpFveBiJfeoar",
  "key38": "5BaxireDHTkS1NvXb1CJcvGgYGFPxMEbnobEbxTLNsEyZqx94C1hRNe1JmeiQmKCfVVA8rvENeFbFevz8wd6k7AH",
  "key39": "5NB5JD1UEkavFv4rviqZbWkjPZonEU4cNqFLikiK3Sd7D9X7QYXs9MDTRJorNxQAFTrRtWuDVMxoaGFuYWgEigJC",
  "key40": "3u7BCPraKDTtaaTUn8CvPpys1y1BhwNKTES7Hbr5kobaSwT7wCYBMeD6h2iLzLcscJwyFo2R6PPyioJcWPiNK6Ze",
  "key41": "3JBymGZkQboTTAXDu3BUqEJXjz4ugyaZQFvChHYUJ2jJNbJ4PGZBy4NNKoM8Drw8G5NoBruP6R1c15vXXXcEcMtS",
  "key42": "ccU9mkTq1SGTqHrg1Xy1bG5YY5zNRXLdvNobu9KDJNYkr3WTK9gLE4CEbxfp8TFzygLUP4MM6vVgsPLBhTdRkhU",
  "key43": "4a5SncVEfCdCHjqJdVu5fhFeWK2Yy5ypbwUyBZjesv1R1r4vEptpcpQXVbgGXybzzoszjiotF9f1t7C6k4HhUTtK",
  "key44": "qX5k8DD78NLA1botNRe7weApzA19UWo98DRgxubsqKRS89aB2h1baERhCEPQfC38jCNMCZRPyL1c49U3YQ7ZAGm",
  "key45": "3NhhPqpQv8WXadkzXzgqESWpTeGRDc2X1TqgckEMGH2VqteUt15ypymPG3kX5TvniEeBjpGbp3fqH6jhkJm1KC32",
  "key46": "3jiRbJWudnoQ3gP3qxzamaVu2GS2zmhW85V1iuZfVc5ECsNoFetiTjeqeAaKW1TVSKg3iP4QMMkYFLv8a3tpDezD",
  "key47": "5upyKkN7YedGUYWiSv5QEamijMckPm5ZRcpTbxQoJRsfg5zBcZneXjVk3767sZTngebF7G1D5Uk6MdrfVamhvuJs",
  "key48": "3KSpo8knFjjZn3QcwWBmJX68YVDHc2ohQFkakeQPL66yavffZcrsFS1XPy7pemQGTXcCRppwnJ63z3CYxMmwN8c",
  "key49": "Zwf3UJ35ruDPHzJBYCfpmpjZQ8zV4yDekMfQ1r83cLWD3j6vWVdG57P1MdaTCcdf5C1EJgpZJY2TqFLz3Fh7nrV"
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
