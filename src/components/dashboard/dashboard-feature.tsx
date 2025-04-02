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
    "533yQbL1EUQuWLWQeaEjqjRcVUf4us9khchF7pSWuKeF6QUN3bsaN1R2Momb2KDkH8WWRP3DGX2CPz9oqidH5aW4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zQ4hayeS9oKCqf9KUBDag3wwswMkEGwKbYf8wsNywZq77V5EjLDSrKXoTj8iVjJggGZ3QqSF9mR2VnWXQMzAQ7D",
  "key1": "4ii2dA4stw6hTDSXnnm86xtbogh8UCN8ewCro7pw69tvLpkD8ssBFzdksixJ7s5K8r6FBSsa6xHrW7giEp4Xg5tC",
  "key2": "4mPbhedpTx3Yb9m6D9gJyhJewmoCcjnB16figQmNNCVXARbDVfLsJg7EnKKfn7yUekHHm5qeDhN7DfVynNBSrBFd",
  "key3": "2Yo4LqLqnqWn5z9BZ7X2PgbpuKnS6thkNC5yXDUr2JEHsXHELUhW4MQgVgL1gbZP2NfEpF1h3nrHs28w2qNPEyYX",
  "key4": "52PPBJoDLkDbP8Ro9mZmKJWQN2Vka6B5Lom4BTA5ma7rm21EvpjPcEAsL6Sr6hg2hSjajRTsJ55Ga7UXn77SDkoH",
  "key5": "53LWdumFTRVctMtSxnFEvsoZjLe6CDDv4hCmqTr28dkAuuzy5gNmPS9gsjjCQYSb7GdSpheoJVf13YJ4s6BTgood",
  "key6": "5LCYFSAs6fdQZA7wBMtw3kCkndQDEV3aM9xqokvicebYsVCZqgtvXuhBW8cs6dK8roVsV5nTycS2YrKGAQj9q9xy",
  "key7": "4QtXVwhHqBqTWKyYFChr7tcDN87wTeZ59yPfFv9fUaaXL9PxwFhA2HLenjDkt99ACDBb7XcbKxvfGsDPwZkLFq6n",
  "key8": "4CXzxGuU646gr47J66yA5WYyif3obXE6qrRZjJRmSJPosGC884bjdABF3eub6tMTb8L9jXNifAPzFUaZnZLQZJ89",
  "key9": "5AqPNmURjNWNhpJe3MhdtszA8bUws38tXXcVtd91FDDE1mcLCucbJwzHk6Ug6M4pqs6j27BTaQBzKJZCGiXTS81Y",
  "key10": "aEi9tvyfCoLWDnHMYvZatxd6JPHZYFoNjk9iSxUcq1RSpcgHBV1SZF8cQBtLH64SpT3a3q9LTpD2HCsPEtC3pSE",
  "key11": "2VUSBTeadtvX9eXFc9RNCfUC4v9NAexFgQJTdVtiyws614Qjyu6eydb64tSTiwichGj3SmJ57hoSV2NsbN1Rhuwy",
  "key12": "LX6zJRKUj2ZjriTyx56mTJUFkEwNFMqHDzNeztjVFn8jfBte3ieZBKnFyM7FAwDzs5ZvkwRt9Rdcdo17M3Dp3cA",
  "key13": "3E9kR7RDP8kbYimRt6vKuh3Pf49mzF748BUEiqc9sMzM8am7DyQ7qfJ7XkM78p76w6m9VHyPdrn1qFshb8bZMV1s",
  "key14": "4A5Bbyy2M6ZwbxgP2CMdfrLBMG3YA1ZbkFYxsJATtJuLPCv15HmAyJAzkifinzZoNjjZr9HWHcUKH4ieJvqKuCD9",
  "key15": "3o1k9rzciehfLjgZK2rjjgvDjALit75KfFtv53yaLdcJa7qpjHzKXQ83CQs7tUKdCoC7NNt75Tg9XBDCprvM1kBB",
  "key16": "3QDAnawe4SNUsbqgX2yf9egfuY6WdoxS8EUH3B3FDuGvS7yQppfKV3jPaVJ1sRqyvt17YDX7tHCFnC7rz11Vydbn",
  "key17": "3Lh83SWE2s5XGipnAJQuDqDPVxJt2HoW82fxNwmJDa42h5UUDa787HzRa9oG997psFtCQp2ona7wv6VPm4q64aCF",
  "key18": "pc9fQJR7vU5ATeNDvAdsCX1Qk9brLpVikmsjekWANUStNwSozpao6dpdxrCnnF7Aw4Eq8toLzJ8CHWjPjJ8kdNY",
  "key19": "4QHfKUpcQEGRP8fg4EsrpsoqPFvtw4PS4LnALaoZsArgQf7naAV3xHoBwidRzctcUgT91RbEttN1UptALiURcuYy",
  "key20": "5MdvYsz6rQPkcFzTgrEzRLiZ4mKaKmG73CD7pkhneVW6iwcc2JkhD8LA81jz4i6DNw2UD8JEEaicKYaeYiNDTaPV",
  "key21": "syro82VEjfQJxh33BY33dbk8S64sXbVPu5FPAGv1ghNiGDx15nGbquhfkSf8HUTMZoSDVw6Zhn9D2CQGBuTBoxW",
  "key22": "2zYcGpswo3DhDwSYbeEzFXaWv5wdQAwM2ze6GA7iNsTPTUJVVFo2dMsv9fsEQ3cA5weLWBEfKc95JfizVrntQJm5",
  "key23": "hejkaeyN69RQrYCRXgSHLJdMs3hNaRvhBRuk1rDHquPcCkevwMJ7dN7xK3Bqx8XJuLmMZLB8ABfzjZvhp7vt8Pk",
  "key24": "52p4Hp6hKJckzo5MQf1K1NAaDDJqZgtmJAZ2kbYdTRFfqAJLi1LTfAJrbLd9f5w6LNqN1xj7cCVDeX2mVH6gqceF",
  "key25": "RhNG9ht5pApPhFTVT9pq8rWQe4qELZdze2RT5rExBvvehR7oh4aJbuEMQHJHxHbeUqBx8A3moHLtXdtP6iPrLMM",
  "key26": "4LAVr5Eh2ZJQMe2gaZRMDkzqR3Pf3o1YVDDbd5CUjBbx5Wro8apBgtwSfpcpHi2nW9hriNYf92SKfujZfAPvnBb9",
  "key27": "5SEgD6o1XtV9YJQpNE3jrqS9KEqXWutVkRhRidenBnqHJattsEgix8FLXv5twfJaLvGU3dnzsETSsVeWMn7fXGnm",
  "key28": "5FfvPQjYWirhVPAqefibSSrNdk5WE5kYUy2DysfHS46kJ1sKr8bFr2iHkdrrdUea5vs6wqashoVv6Why7wZgF8n6",
  "key29": "2gPsNidPX6gLzhP3pjNm416C3bdX1JLkNAMhF2UohonjdfXRniDv9VY4Tt1zNm9eXmpZH94Y6HWiW5s6cjobyjFw",
  "key30": "21hbtTg9VrkszbxCFoTFhgCYLZutG8T9iaisZMvyPTc6dPmXH9Ex67iLPz6LTCkPJSvwCUjwSzRJGSPJM1Nf9Kyj",
  "key31": "3BBH9c12cVTX5CvTCmDKR8o7eckiivzwWTgDaLujEPpCLh3TQdKMAJsmNmDMaUGoRLwPSzzbwKbXCVwvdbe2U7zP",
  "key32": "4GcFH9V2qtkyEfDvVd9LKcENSvt8WvTfhoaPmzbnpTLEMjPuQWPTxtPqkG4LCPj8ocqyU8dmxfHuUvdpFv12Vuby",
  "key33": "4iyCLjZyGX5XsvJ1zeYwpqKUoyFTLfRFPGywfHpwR7pq6rwCw9ZFqZbuTyeYZuzgqH4DqRvrtxBMFviKVnBT2SgJ",
  "key34": "67Cv6nfmsyc9AD9ZbhqvtHy2eW35G6fjqK1zhmxMqGkNR6vTHi6a1M6bAEqM2ezjqxV13Geg2XSAkw4iYEZgDm23",
  "key35": "557Xbfz5zFeWsZZ1u88L9pjeqZJCxMx5EEH8JvLox5cB34x9nRHy4HkZnn6Y4jw2yHYxxw77c7rRUNtKTxdfxn2V",
  "key36": "qnqFhvRz7188htpVA8L8nVWyXKKoqb8Z1x6HzFQUVMxMAT7exBnW7yt8cjYCkCsgKkK3qsfr2GtkUabE3ivUYgt",
  "key37": "2sLYasHvzxz8d8n7tHqcQWKAhyg2V5uYQgVyuzqBY5wcSFMCSf3P4FpQdSGYayeVThAeCiTa5gFnZZhKXzjstyuh",
  "key38": "b25oUX1vAmJ2Xi7oTmFfRHF4vkV58b5v5pV9WVEihN3A8FG8t89qBre1Vrimm1Tgpr7wFGFzNLJehWdUQJx7494",
  "key39": "5ungAkhSh7gPaZJfSXzGRAbJ7tPsLXaSUSLCDwFReaMnUHQsCB9dDfW3poyMB2nkKWapUvBK2psYMjQFSD8oD7qx",
  "key40": "2dxYtLjaDvaCkXHEDKsHeA3USjTTJBpY1vcyj9vW81Qc2AGqkW5jPiz4tMDw8bFQsXYdYwZPF3huAWRVgxqd2G7M",
  "key41": "3FPXb9CZ3wGag5ZM9oQrMBDi1JfGD7qfucwgHPZBZ6L46rcgGuafAAxRy1tH1zH8Xf64wfUqva5ixWR1SZYV8hiw",
  "key42": "53TT7MQZALnvs4vXRJZjk5a5bpkZqou5rPM8sDE7CdZ6PQmU6Ek23UCMws7cuuLbSkKYQtZF2uTb88DJn7CUHuT8",
  "key43": "3UjLrB5mQ4oip5gSPrpLVZ9h3c8KcHVDQb89wZDboFsAv4xd6zZLyptY6P9yudb8TDAZA1KgdDQr6aW13gtLJ2pz",
  "key44": "59B6hgqFNYsu6mcCw5SHT74uY8H5UY6kwZYRRpabNumKejMtAtXNgvAnvZh8nCEYpWmMiW2az5k9Fd7sT4GHjk1m"
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
