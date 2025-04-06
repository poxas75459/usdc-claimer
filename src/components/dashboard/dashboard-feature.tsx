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
    "5F7kwFyhVtPqMNVbtPLb4Jb2Mhh1iFdjmoGNUQJSsGysTFSGRya3X925EfkH6fMi4yGPaMhA6DQnaW8Jav54toc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qnrGaNcwsR6YyXhDSHhzfHr3HLxbZXR6ANpLxG5jdicVGSDkm85nDVwS5GZdX8EqnDNfJbCSMakCjR5qZ96v5zm",
  "key1": "pPD3EpRqxQ69NER44jAnnf6C3f624j91a9J97JVM5anJnEFftNTSoYNHbGnZGdEGiJhDeAn9XAdNLnuZ4ei8Lwn",
  "key2": "4TKR7j2m3xDvvMitUh29Cj5NbnVr8LJUXJSvtA4S4YWRJGGXpq5Ua5SfuDC1R71UagY6n13tFufSoypq2Lv4ejmr",
  "key3": "8VvdpbQUyGD65SBvbj4TJf4e4R36wXC1VnYLZWTX3BvsoqKEkPd3e3nFJfYPWG2taES2ZgJyd8T3BTjDWKL6ZEP",
  "key4": "4Neb11kEEmcqDAfbtskBjjnpBV8Hd5k1mWjHNCxqMGEpk78AwA3HRtnhv1EPUBmX42XVLvwensKUcU8pivDPr3no",
  "key5": "5Z6bkdLDPhJbKWSphkHDFWn1EZnLxDik5eT3h3q5YZjTC6qYCmbdhJ8da31aoJqe8zr8sTqSL28Pkbza6qwqQNtK",
  "key6": "uFoPgDSfzb5sDAUnrra55cf1wf9qTv7rE2kB6afVw9N5fM79d2qoDtpCuoR95faax4RTycxHNxWTBaHQsU63fuy",
  "key7": "3eUoxzoWKWaeTVjtVAiDiWx1R5xzhWRDo397Vy5GMC9SibHNa75G7NhcJQi8hMWhQeBd14vPEzcVBAuHjicAE3z1",
  "key8": "4e3BmxQyusTtCA5aMzAK2GRFG4YVrju8xmqUTodRX3meuiS2eQ77PFziYvpMxE6d9q89jeYnGLdymGJSir5T5RmK",
  "key9": "64Qo8tZwtkCuutg6g8dg9ZGQkUsBgLSQGZS4aU8oDxq4HW1nKCSsVMa5mHNG7f1QV2BqxhKNjZFGfrqm13mLnWG8",
  "key10": "3YFY2ZZ1yro6auc8tVrcyV7pcwWFn9o2XQXzciHnwD1fq2dApvZzmSWVUmzSdcG8bjJNiinJ6XidifJD4KLb9eSv",
  "key11": "2ayXGaotzV2Jg2iUwokZG8pVunMreMuYxnTywhegVzcNbwdhCmZEjV1UVod8FMGnRHAj61mkah7H2JT4fQfgb9L1",
  "key12": "x6jnMtcqCuLHwGsJqRFmh8sUMHfABWsGaLavMpNUDjSpkBtu95yWVZBP94kPPhmUoELpQuqgKrXvWCuwSyHPsTJ",
  "key13": "3C9ho9VDBqWPWUcT5XQZKdzfFjb943T1SAJMmpUE8s2WUJt5V1eEVyxv61nVSstUr4VcQ5cyJaWmB7rw5p7zTF8M",
  "key14": "guSV28QhNCJrHopuEeD2qg7hUVrC5Ac2bQLBg4uAu1ikccdBm3f9uzvfvNDofJtYfTNZ4WYScpdsuPxDYhg8brp",
  "key15": "5WXuZnCMGjd32VEFJc7C1wvck9yArwVBc7SvoXemy6giNKfLPtwszDyxPqRoFpg2oy6AQPGdHPvCKjZEJSBvwQxh",
  "key16": "5XXtynEH6GF2oPfuKrUp3UKTSLzPDggYyK3tdkrqa3RwyjtJFYBtLkSS8LYBbYcjXLy8YWmkDkuhAEtqBB5acRFf",
  "key17": "528QrBqC3seBCFLUohCAhz7qWmXh2GE6ye9MbhQdS7y8HiBuQBoaZX6L8e8KZYsZwLeZK3qKBZFsf8wgDNXZ5LsS",
  "key18": "5sq9TEdJzJt22KivVv6LQWiWeX6258DuLiwXUnwfjzwvcyrLmNrMiYeX7JNCW8Ugs2DdCcq2cetbDMT1b1qMLqLt",
  "key19": "Srppi7uV55mSHczwJSeo8v6nsRHBH3dyPZNDRXzmcFSXRBojpSyNoAA94PwQ71VcNcL45nD285kns8v6EwrVp8R",
  "key20": "2otAivyiK3WwuZ74NDfrWF8fxA5yMwdtQiGBxtGLpC4qNutwsVbZgY5ScNbaNKD1U4v1JZVu2vE43NLvQnQdCt9W",
  "key21": "3RuPzLVYEs5HdiN8bgqq6R1gWyr9A3EksN9sYFU8rVXDGcS9cXB5RX5Bp4SDKVGiuWu9Hkt9Gv4JRBm87KL3EjFQ",
  "key22": "3UujTgTQBkp9N18LnwtdamzGeeMKhaSXHsLuR8WZALUa4yHvk5tniueTQ3P4F9vESMBUHAsc3K6t1HTAvTBVxswA",
  "key23": "5xv4bnkxCqAuTiNRVJ8KZsooPQPxAzT6wdRPNm15gUn8qA4s1C5LeU2kyePHSParT5zFAgxQt2SjVSpXP2Pqx8VW",
  "key24": "4wsbNn1LA1CFH5sdoAkHXAhDTAsRZtz6Dy76kSkiFh7CRs2CZAThodZ3F65TatZqNS1eDJ8MFxRCt1GWVcSvhwpQ",
  "key25": "4NC5wrjurTMHhWWYxgqf6ohHpE3PfZA8avGpLgLjqA1yYySbTLHxhXdp9f5KKjKX6AAJJrs6FFmtadirVh7ehPK6",
  "key26": "3onDNCZ736gHq8tZBeNA6ZMC8UGZUXLmoBRswuh3ZS7K5NKTzk5tYqKTFCqje78dL9K9fPAapxbjrjTqYZ2itp9B",
  "key27": "25qzKCtibhBBoqhrfLGEi8TQ5izLzQQNkbzxfPHVv6KMr1dakSsK4wDahRQehG3wGvQDLmQ4AgEVReptU2ghX6jj",
  "key28": "5PQpsJXUz3ozFhZ1JDcUo4ess5dtv278FZXjrfYe4fwCguFaE8WN7aQsCHLhNPKWALRDSV1DTiAJ4Dwxby78acsc",
  "key29": "2NyXQhrhhHzF35kSiye2nRdX8zb4Q5uqH2mu9dHqBTKaa8PZWrg9HwuG7mrVzi31YPX3RvxEyrQva2CHT3a2kWqk",
  "key30": "RBZ5hVSFKD4VD1DMRsv2bhCiLdL9YvRZ4QFkqp58tDt2orvi2h3rMn5so54uNyRHNJmsZJyHmGqk8K2Zp5zDWaV",
  "key31": "2WPsKhsE3kBBhfddoBB42oyhYvRxJp3ZdaJCwwqiV6CUXTKPFqE7PZHaJNTxwNBC7pHcCFeHyZWg6jUaZzMYaSP2",
  "key32": "3vacFf65wdcSnh8u9EKCfRmsVN6TEibLKpT52MAnYuCTdwaHYnje1AoNENKT8tYW1BsE68mr5AzsZd33KvapTYWS",
  "key33": "qHiYM4E9kDnxi6eB2hxQ9HS99Bh7C4P75LdawJVENNVgpWTaQkbtwiRfT2AhwMMYzNsUqCskFUGzvDVUt813uWn",
  "key34": "4LBKP31dDXKgSkLmecf1XCBRdj8QHySGcZoMThQw4jKKRRg5KZd9yP5CFimoCTiVcLVFayb4rUHHM9PrzPfSwwMo",
  "key35": "3bb3WBAUqfNzky1SdzppJauYBeHCRK28MZWmzEGqiihhqHnAqkrbkHupj8AAafKPmRm2opK52zJADGNWqXgN7uTi",
  "key36": "5GpRkJVr7veEDhGEJxLqN9ppYzt6WaSLovNfvz1htN1jBEnu2nXhGfJvMe3UbVKXGTJbwuiEHtLi2ZefSKkuBM57",
  "key37": "2ierM81Tq7VNUgMXYdH9KY3nPi9h5e2iLcva7Gpxf4xpnVVYhxkbyDX8JPoxgRnaS7qSdfhNJ1AfK5jeYZBfuAM8",
  "key38": "5bRYrnLTbH3z5Ns9eJzzPPhGMqdCkZKmmfJRXQ4StvUqCqjEAUYgBwWBo4HN1m7Aco7HeHgfrSaoXFhjrcfpiLYi",
  "key39": "5mwm2Kg71tjNbFGNhQhhPhceF47uSL5zfXDyXvjCzbtRkzoUtChx4S1A81gRspGFCMXGfRoUYAuYMZEiJRJYTxSt",
  "key40": "2bmWbA1hYuW9gpSgf9B5zqAnkdicBh7Nexh1uGPSwr3E3PAzZmpcnC6a52qEW5ATMRqvX5NLUZwxquVJHURoZM3Z",
  "key41": "DRe1fFc33ZxsHwS5X4ooZZKwCW8YjshvQXa4PuztjWbsAVRrQGDkcsCNx9ZssLYGDwJNPxMFTctadnFXdgd3dou",
  "key42": "3stqkrhQTmAXYEzt1XccaBVk5mdMLqnknt9BEBEYnEPUFZDkXupqZfj2nY8hmNBH7VqumgpfU7n4ta5MGByC4kGc",
  "key43": "2Mwgg2Qf5wKFagMk7pisQ1Kuy9MZxGmuMiEWiPfec3sbVYAe8j8d1aVEXYFMNJPCkMZqrN93Bws8wNyEzWLVNmHo",
  "key44": "wbDMNCwDLegMHRzzkYYMBM96aem4HSbnv7m1dHBLvxTvjzRDiVeMJAhiAm56rBEEQrsFzhsFXTARJHidMSkX7MV",
  "key45": "2NufSfJ5kE6CjJfRw36vUSv6sV7bSs6PMp3G1PNZarHG8wAyURgQpwfNL8ooE9ScsW31H2SLmZVbgaL1Bzu284NT",
  "key46": "iPh8fhvBxHeyEG6zRSA5V7AyrZz9UVo7AC2Gy7XzuR9dzr37CNAdLkc6A4hLT4kikxC7Xd1T7zst2x29kGMAEfu",
  "key47": "39ZtFgBEKVCYXSXqu69keBmbEsM4bFv1exsWzFkyTx9pPo2Sc3py8cfPNdPssQFdmEomK6SvrBNjFdqx9B8jmjgb"
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
