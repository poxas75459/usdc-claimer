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
    "3fzbhHGib9rjGZqNyNp2RNzMD8S6JQLdm9HaZqfqgkQgzZo7ZvgiHpsXSzY86ajz2rvPzQCjuH8a1A59WtdPYzV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nK1TX328PoG2WXv5mh2b3Qdu4UHFpGVZuK2mpFf2zXnbiD5xWvp9ARAPpgc3cs2wzcCFVsBP8xnEJ9DjVbbQPa6",
  "key1": "4debxLfaFxnyjE27AoksVEgxsVbzBqWqCLnYKSgxC8t7zXwuZKfbVnFZaLzHiSK1A5WPc6CphtSskqdqrDWWpS9U",
  "key2": "5p5ZsJXWMGGKqggvX6DMP8VtpKtyhapCh6Jhz4tzFfpf4DVRyYDuoAbbBNRf3ZSMJCgT5ZeaRd9jkSYr2YLYeqXR",
  "key3": "4swFPKq1xWe9HT5J8rAss47uQtyRdUBtzMrU7yHbYKRdoffs5gfACtYaXjVqBeoNRadpEfdNDUGDbVgJbXcUJNaN",
  "key4": "39HBcnBWDq7LuW4AAjmh3EfNVkYGBY3QoT76pSij9Cd8o9HT11hEQvYMtmcC7URPkaS73A8fXfQGnk2oSGCfW5ok",
  "key5": "32btYdj2yVw7ZwgwYGWuaQ9hN1nw5Rne55NB5mxT6WXdaupXC8h75a371LfK9eLEpXRoRUr1z66qVztJBb7P1ukQ",
  "key6": "4gZvb8VBYc8AgHbxDwzNkVpyHkjk9eqP94MBq94tPq5jGy7KXhoFNnTDfXuzxkNKYLAfnnDLnNgN3mqswXTVfcLm",
  "key7": "2vaXpk6wS4PzYz3mWHyN8CTz4qgGAXrRJJzoTZzjnvPVF81a2UhYtLEMs3ViaCPVemr53YVrgUQCuEQwxdm8r2b9",
  "key8": "5fuV1wQWsAHg85LcSQB9ToeEjuk6mnAeTD5UT3tVETc7iKQhtnqoGp4Zao2STDQ6LgNVgwSkuFWUebyZd5L7rcmp",
  "key9": "4udFC1akcECrtz2Vs47LHPLzC8QkUXKwuUBCS4Usccw7FCMFvMDNcXbHPWXACSWyzc9P3HvUrF9RmXgCK9Q4Pkaj",
  "key10": "PppWW6vJUSX1xHsBwKpS8zvRR45u34WhN9tDHxHUka1uQxaGVZwuU7i3afE3m7QpF1Kpefjg1rnk7mDaPmBtoRp",
  "key11": "QKNtTLZCy3ekHfYWY3dBkLDkFHCYzYFrTWzbGoqewKCj2c9T5Nc1ixPCRYu3YLkc8LvhFwgUYoSX6e8qZygjn37",
  "key12": "dqbhwwzKgJP9KUszYnySEtnqMxwfyZpwsZL7Amc7BsrvRZcscZbiwC3NWfdN1YDBhzs8sZEkgWHP3VKq2QcNGyY",
  "key13": "5WEqxsR9p8hJXhL2N3HHRKMMwSzCZnvZcsANZy2qNweNYzM7yNcshQg1gXdjAkLKbhva63NUJdwsm12966wwckoj",
  "key14": "5R8DdnEXtp1uyKsn1pD61Cq9Y4Ur2o1n5CUfBTaKuSTebq4Fkj6a4mWA97cTMQup4Tn1jzbn7YEUgYMUVCz7dTcf",
  "key15": "46R8Vm1FEqFwgM582biabVVjytbcQqBwUSet22ogA2DxGzPTripEUJWCdTJvkhFkccJg5jmS35fNNAjWW6Scqi1n",
  "key16": "2NFWZ4f7njZ7ywXwhqafmSfjpTB6hPboDLQtch3FxnM7aKJFhB3hZGH362jiiT5KLmGDUtXoHhZhPHScswj1b3mJ",
  "key17": "5PEzfDSLGYFhW6rKhJcwy55hqA6imuisgygxbFsb4eahgqPxTtu15vJvfDrrcoaXihiLkFJ6QarQSzxevnkDhcBN",
  "key18": "2G5s6ZrEUqEriDThg8D1qUG3dyAn98U2EjDqAmUSE3WxQVtF6pTu2pcyC2sCa1xrkdQsVjEcGiZdh41QhNxDAfB3",
  "key19": "5Z7b9d4HEq9Z8mp7nM4jLWCwhM24KcSoYMJQifAnPqCYxyjECZeeyAuyocjtmSXMtRNsKvoH7kRkSUdVZP6c2So6",
  "key20": "c69N91kjhYcVSVwxBVayMcSPaTtku1vKy7Su5cCxvXJYf5UepDkUpukLH6ByeW8583nahYmaRRffhDPnX6769Fp",
  "key21": "3XiV1r4bzZUt2eeLJvgxmQ7zHhAa7hkUzkJeReNqjdY8ABkqXpCktxXqfkmAnLmw3LNRCCNSN7EavWZ5u3oaJk6m",
  "key22": "2MCZVKP732ResgaW99EK3hGyJ253C8AA9ZsfnNFAF689UL5q5KUj7JTp8TjL4Zmp7NS5sudUrfEmFEHvaDdDQguN",
  "key23": "5bdBsEmcCjsDFJxtyQZ3fDry3TNnNn7G8wzzjnhaVCNr9BnR7XDjZ8gGBSGPpZapUDBoHkV2R6JEkziiFwQgNFUR",
  "key24": "664zvni9BDRgYSp3wC2DYg4h83XYLNsft6q2Fc32SY1jG6P3PkixTTuUY1qMxC2HsbExLmefyjqLkqHfVweu3Eta",
  "key25": "21LeDvp88PhuSh1Q6Nc4g7PHFSMfykMbMdsBr2meCkyHNww9DbzaJaC3dHvpt4ZiHQoZydeH6YBNTcwudRTx14qc",
  "key26": "QNJb4TNquvstc9dtjDEk87dGodwd5GXguUrnvadRubhXCGpidSfC6YHafE7uyaq8PAwHGJmDrba6qt34GhUiQDq",
  "key27": "PbzyQi3Xm51NM35EHk5gPehrBbCPNqsqAp5bvZDcUwb6EUk7Yc1ZHhHSXMpbU3nk1sdKkUrZuA9siwpkdpgHeYy",
  "key28": "66QW4PGSMkL63Kpehfys16fzhk57HePHZhx3SmNRmf9sntpY8V1Rk8WzbPkVg63zAFGMf3bF7sJfAHVuQdgG8jYK",
  "key29": "41Xb3cCR7YGcRHYN2HKHaZUcstDtjuVZ7bQkFNswAUMsP13oVwgGbK6cnzaVCC1oSMaERLvBjL5QjYunGWNnqRrP",
  "key30": "2S7DSSAXfdNHSYkcu7ZiPcJATPg9GSJ6eYHvK4n9y2DGWu9A9NAPZzb8FouXAgA3fRSaH8skNehBwGPEpXL2iAKs",
  "key31": "2JsJLbjPffpJGZRTfo9P35EK5ctY37jqHTimqq4icgXyDUJF5dNHWSgFjnyLr1TMUvvAXAmJzoxsGZaUhagxbghQ",
  "key32": "h8foqW58W8Q2Ak9WDL7NAXxNXv2qpMyaDKMuVdSsPNgo4vhz2GYuW6cERXusYeqN4TqyH3HbVEzMRpN1hiy3VRt",
  "key33": "4ZjHEMB1r7sdywg4nPzaTb55QvTPmuU7srZorVe1zRKfLghUZ9nj24QYUdAvhpBwc2pJ5oavWRJ3SRtrjfPovruB",
  "key34": "5jab2TqaNMWdYdipyempKSdpw2DJYKoodoghLT2jcHBT6EXtaZT2D742L699e8F8eJ6PZ77myQRWVEE9g6eqsyh5",
  "key35": "2g1uC52EAehr3h1iu7GYzA3r5TUxvUapJejBdup8oDN6eHJreujUmqEatTDWkmJnRrpiXtkoWqVCLEDd4uP7kD5s",
  "key36": "4yJhGUu4LTERnEaFL1CHcopL6gRP8xSUu9XSZtzqhNAnDMjmmXtsmhU5SiJNqQPP7aAio91hjXQoMLKEGF1NyAsj",
  "key37": "uaCgMt6ZF2h7e9DG9CaDE5Wmidy3jJwPU3oupnhgPtZbz4HAkRFiAiQy13GVosukGRrhwgcw5NbFLWcWqoxcPUR",
  "key38": "29JJ5nEDPpq5o6MvPFXcU9Q79n221GYZZYNjR6VEj6dSUfvQQj6FJuAmNwHWXGL1vArYGiVBNxx59KV4U1RuX7y1",
  "key39": "4EhyvYbYAguVgVKdVXL4dzfqEwtS2oiQ7UadRpNzemMnGzfmMjnHcLYGHZ4dsrwd1bn8ofHVMbxmTy9heGFBFQu3"
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
