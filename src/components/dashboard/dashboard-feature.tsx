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
    "4Sh8zUV6t5krFbXhBXbrHuac9upYrQf6BtgLaj7jtxwLdAEFjUDqfaqJhoys1CVS5dsFu1SkTvjonJtRZNd6Zwp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65UrpyxCKaHF8PAYWisjRF7tS9puifiHouqXsypUZdZdTcJF4yBYV8nwKC5rpNKwXatpAW65g3Rkghda1dMrsArh",
  "key1": "26346p8dC48kzq3tHEDAkazoSaeB1HhmhABzSuESwiuQRRJzHzK7r565jziCYPgpPN7i3YqqTps31Xs1zsAqNimc",
  "key2": "2EmkA2xUmaTdnNZMD958VLcAkGnJkArkHbzd81XZhqQdQyL5dGBPiQY9ir53CYJrbBsfCQ5mrePjcyx67pf8CcWf",
  "key3": "5HjkAVgWQPkLMd1ru7bzhRmH3mGqVEDpQ517NvaKHWJn3foUyQp47RSyod3stwFiJKXZXmqafjbgM4DQMadwnTWr",
  "key4": "3jNwHcZnW8YNDh2nowdZes6SyW6dpe3VRCspYVF36WiHJti33jG7CxQL3sEqr9bfbsH4WzZcX1QMHQvHpy28EQWU",
  "key5": "vtSSHAuQFcTQBnauXwVJBsaG1xe53f5fU3P1i3mg56dBQ6JrNBTX2ATGtt7rmc11HmmMof8pM6ubipWR9p5VBCx",
  "key6": "cyK7i31fndDLgi3aH7ipHMMz5Ld6icsWisSjirzDmiXkwVRAEXzkyMgfyjS7XpS4S9X8mecMauwbRkgieYtst6j",
  "key7": "62UVSkfwWx31jRswKKK5VgL6wo6Ht3G4K6WwX7Ak4UaBp18japgPU1WJwbmjWyFKKStMeTxJUBacNcuwgNyaVZdp",
  "key8": "3LbRe58E1TZYmjfzmaWv5vFBwjniJhNNLXr6dg6P4CxxqxGAV6T9Sxt2KvwH1wLbz5ToBnSF9iuoYWy6p3DaUCiW",
  "key9": "4PmMvYvFFoMyZVhfUjQJFkPmGwhtCZ5adsgAmENJZspzsFPuPsUjGa2zkpw7YzohGGKhjArPvHnFENXumuxhppiV",
  "key10": "5bZCErPdeD9gQf46J5w9enppNyNJR6pQRfUrS17h471QZBtG25WrY7Ld3NHhQNt9zg879MxNhqGuda6zovuH5dqe",
  "key11": "4FhyR33H1EiWj2fDmMnHAFKatJjxjAZdVJkgsFea2n3jCbJJHnjbcC6m9obQWasStDvx2pbYZBQUZcgq2z9TH56Z",
  "key12": "2BNE4kuxQ19MUeQoY5qt7fP9mh9tuc9mi4jnGVjDWESDwDfLjXu2pyJwx5uoGDxnUihcGVJ7KcJmouMKABteFeTJ",
  "key13": "ep2XVLkFCzfAauZiAnXtmYEWGdStBsjeyFHfUNKMiCzrjmkQAGv2NnWxGxxZiqU8XwjVvVhdfksjdPYy6Xvq1ij",
  "key14": "4vwm3Xv8HyWWSuZ25kbNVDGSeLamn8FAPdwSTGtnxJGxm7cKG9asvcH73ojasqBMgK2ihiGtEV3zdVwHnwzvJxpk",
  "key15": "3P657BCKuX8wgnpts1JjjHnTa9BEcHPHevePctCrGaAqkn1AZ3vfMR85jMi3hMGhSbtX71GVsHfgxmwwLe5iLxbr",
  "key16": "3DZHJAWyBxyWpSMnBb4xRtLsoHvHHM9tLUfhTBVfsQGureg7nx1ko3WMTX4jU7tvhznHqoiG2UCZZ8sFzacwXu5r",
  "key17": "3mNt6xrXJCQ6iNj777uJNpTzSFGvWLpiS8mraaSKfLDvZ9hyJTugUoTVjwif8PcaHZG1EcTnHwsKAU8btJPbMswV",
  "key18": "fDjzc7vZ94FRfN52SatN98rHkBos37qGuaWvhYHZGUGS37NQsN6gtsTtYu2HuDpsxfryKGBwFCfHSv1ywD4kcx8",
  "key19": "5iqN8wgBs4V49SHoSSEaGyAkBcwWsDxjwNAKbQQ1aNsw5mK6ZfSTr2x2zmebV5ZogvLZgFaSucKF6WCtrZkoyBsp",
  "key20": "3e6aqFqVqVT1RxKccAKfkRqgYCtgmxNxsyxj9r9Ca5aeSCfKENhB76owpYKw84FEZK3gKAp16mXjfwVA2UpH6D1C",
  "key21": "WUB6X9sL8eA199Cq9WDVuz1MQrpHgxVZV9tefhiL9A3QJ76K9L4gn22qx4BMfTrFwSrvgGhffBAxctxbLsZLXJ8",
  "key22": "4gahUZ463pLbUqaddh7PTi2TUxtHSTsm566YTcVn8UYPA8RpfcgxwiNYj1Y2qgVrCwdQPuPVpEoAF8EPiDutaFcF",
  "key23": "5MJjeqwnwkQddAkRCQGYFw3hk42QUmofUYWJtkrJ9o6qVUewXcxPi3QTkW9pBmdTXxSf41jqTCu7WsfzAwj63TXH",
  "key24": "5vUMBCEwAV5Pb1s9o6gYMrqYyed4K7vDxadwoTyv9HsnNpMdzBhK8rE78JKHY5xqTvoYuyTR5Wcq6uGGTJWYxUpX",
  "key25": "cUB9RuxZRxeXg4DZeXBVPfRjidAMriHgQh4s3JqSK3iHpGR7N8FmhBGGjac8T3Ja3xLNrn4ufu7QDeUE8PgWQ3u",
  "key26": "255P991tPfspZQfyeKWfHVjY7V1T7S4Z5MBEz8Piexa6R1r2daarAWdSoWYmRW8LMHfx3ydFp7RBcySs8HQonfcW",
  "key27": "2nU2zgzjfaZdiuk2GPYehpqpQfdFG7dAaie5nFbCKtAxpZmBndskJLzcG8snK5J427nxR42RTVtBkPvPhCNqNX3Z",
  "key28": "3UzixHav1dgXTWX1JTtyCWoTVKbn8afBg9M2qheFXf4tKnCZDAMJtCJWbtEY9Z6KiWjVxbJ8eB2dZA7z3xowJBDC",
  "key29": "2JjT2gtG7uRLuWksbevqPZW42mjgtvB7uFpzYMu5fJBMQn1A8J2zXWBggScjpwYzHqB97sgQsahdVS89in3S82Qj",
  "key30": "58fAKrLVHoxRZZdP279hriAcvCBbGMzk4PrHvsWqLssFm4WqHaF6hkE7J7EdYHpMbUpfrxzegLTwHFxTkPmZtSNx",
  "key31": "2CmQsFUbfSPMxLCqTjcRMwemKHznV1LQFDNRrvyLjWmuUvDJsuJ3dLUhhLMZp1ZPkbhJSMYCyMxVCaXhUQ27iCFv",
  "key32": "8Vfkc5uzFJDx4XZroWZ5ZH2PyCx6fwmVdY35T5HAjcQ1rzaKagudMJ7575fxnyAS3srAhE8vQjezUzV7EVVsHm4",
  "key33": "4gAByDwMj1hGzbBDnfbP3MBQuiRnCVHFSHFszNdfzNWi3SJWNgKZuJaXBwHDgazL5EFHxBvVenv5GXoCkM8hkS2w",
  "key34": "5ox8Gr2dTm95rKANgVuKwk4XFY4tGYFaeZUScdtJt5s2H3fecKPWfnhMbzrSZcyBWSV89v9F4L8sJJwfdZcPDf3G",
  "key35": "HopN39FxSVvgHUNJejSGq4f8EV5SoAJRKrU9mh1hswiWEPYhPMRwKg8oiodJCbtK3j9mC9oxpRMf1pXHsQKGFet",
  "key36": "5PzKhtP6dHHR2JGSHFDqnXzZF9TibwSA21xf2ncZxdoEahqeeAHRauRuPXbH5PZSLGsPrDoJudr9KQgJtZ6mM8bf",
  "key37": "3Xb5c7yp6oA2nB4SkSe4BFLaY6QN6cxmNrphxxUG7W8fttZtJwr66cmLDLGba5JtRsbfw6UUtioKPkM751tYKbLC",
  "key38": "2oU2hthe4swVQuA1F2CdC1GRaW5SYvnLS9H5eETjaPV1pAZuetEch5HKafCvcgt3WuxpK8S7CAtUv3uny8rH6Sv",
  "key39": "WEPZktB9eDBe2pQw4KwapXrCTHALC2o7guKqEJZYhSKKbD81pcsRDHQWkNgFBaUxEYF2xTPvKKbt88XJvJkDbCi",
  "key40": "5ynwJdRMY9D3qqHWo9mMjBXTXvQ93MYwVNteByQPpzBBLojdUPcnyWXVuoFaQ28AxSNf93mHyB56Xtio8cZXuRBk"
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
