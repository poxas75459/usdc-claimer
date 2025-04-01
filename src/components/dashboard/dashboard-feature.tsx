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
    "36pPQUQKMC2cDW8gR92iLTzgyYGVSjoiT8V5hVTjQ2RkpLkhb2y7jRL5dUsczeCMgs8yCmYwn5rtyyD4s1jUEkca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hZ1L77A7prUq48bkuL1BfqK8Jvia51kfAu6Tkxv72a8fHSUPL8sUJZcupy6X1W2FKrZx6dJYHVFadWk7nfT7iiz",
  "key1": "eTtBe23xtnhhEcsjYVbNmqTNtvNMLi3kUrJA8k8SbXNKx1ueJDkJvoVHmKJLH3CJ4ma475rLCUz99u7zxDunCwe",
  "key2": "3khwpVXyBQW14iCU3ZttEqtjT7pRiCKKgtTJVcx5iCyLtVcewWP6xZL6nUmpzgpB69RRJFkRQcsk4aqX3pkYiV3w",
  "key3": "4rGVobwMVoeTugY3iVZFV5UGx9f54VSTdtiDYGYM3E5NKBFQiKb528wXjiVtknBSv5zAs7hBHnVGabFuU4LXRMUs",
  "key4": "3hnnjmt5iZrtCQca9TYm1YpUDLvMG1XrWkWncVrKMd5UCfizW9RtVJzTdSRfUXaeUoVGsrdMjTFVpCa1sAHVMBBF",
  "key5": "3oWBptXuQYdJdKDTs6aB2yfzphq8YKWsvzaJ8MZu1ehVejEc3PDtkPoECC58xTeZmAyRtLQ8VGRD962CWJAzUZDA",
  "key6": "3reVbgr3BZX8moP1z4E1bBkYr5BrZxAJEBhjGrgvEgUU3U6ckB7xaZHMq9eMHiLNTK13goMVtx2VBtENLPAuQk2Y",
  "key7": "5DJX6Va1115Xa2w5wjUY1mCuxy3HiHzNGRh4avCVkDPJgiLGKXSMqbikURHnzER6Vr7Evt3y7MevEkQbGUzvifuD",
  "key8": "3j75X5m9d4W98NKVv3ExwBfqu1MRuL5NBhpjWDuKJ1oQwr9g3vbRU6AWw1e2LvbmkbYRhMnrTXpakBpFJbm8d6pW",
  "key9": "pamV55dbkR682GZCZCPj8FcaBSW4jWtSsAqL5ozVacsZNJxsre5ghyza4W7yYr5eNNBiQBTakRiMGm6v4QPmu1V",
  "key10": "5BbyiKJRxfqqxUb6278477EJDjhENJ8dV5DaDCxCgKDRgK67BnyRibEux1Bd6DpM2naamNHdvjzhbtKYsQX3AnWz",
  "key11": "2rWYV8EeQGMs7UxcNppL34oNMwWSzqUWhiT5eDRMJ9kmsVrnkWJajWznSdV1R38v9rsmyRao5k3Jyhrfqw9w1bPb",
  "key12": "3WcVj8D1i12RPMqChFozYDiZiWRuKAMs4wYbVXU461VDrZpyXGDkABezVyKCkPLotHvfNWKyAuvHhsv524SfNUzM",
  "key13": "3UaTSopFcdZMqzMU9gsPHDCcFdHGV6cTNTLduVhWX5suT9qZKy2EwvESPXLx7MGGtP1P77x8RSWVLeK7pdg7NbUk",
  "key14": "3z8iPf4uZeX1NsT8zCRHfncDAQno1icL48mHjPGYXQZB3sYQkDT2pcFnyKZ2b59MwwmsvMv5mTGDL7eML3P8RJMh",
  "key15": "5zNcQWhZ8wRYxe9wPHMLABwT3sT82ZB2MxCHWwPLMLNwFej847Hz2HgDvmSdkqAvLTzZfawnFez3KGsKeFKLDkM9",
  "key16": "46RNwffaLNDzYpda3FtqwtJhXYEXRPu6uWDXEPcU19M45KUHygymZTZNDeGVoQxW2s1cf5BnpM8pgp4swoKShN88",
  "key17": "5CYCSJHqyi4UrtxRm9hYGX7GYmBDuyiZsLwC2UmWUGRdzdbDjkE7YLW2vMHvukyoTqYfztDcmbkVuEzrBbmy94cn",
  "key18": "3n2a3YY1bzSvjqVZKjWayeP2x9ngYbNxDnvJwpLnPs2bTrNgFyBaqccm821inj9KeFua9oiQ2AnLwSqx1LZ3P7c7",
  "key19": "3MT9TnayDLn7dMzVjb3J4e62bikbqnkuQGy1CrSYfGA4d8gqg885rL2ayxBcrDBtER4WamHsKzPB47fXB4BffAzd",
  "key20": "67THQkaXuXwyJpYuHoZyRKn3yEqUcHBccFV5nWxXrwkiRaf3iNMQt9Fkbgez9etW8GwpvjaSMFwcCN6qQJY744hj",
  "key21": "5EH4U2ZGYj71tytnX2HGQvSDxugzpjE5Qp9AEKn7FVWXVQr5AkcVR3ei3G1P68QrpAffUv9jKToAZw1zuhGfNuFo",
  "key22": "24cfSZZYBGBoAG1woLvJKCNz3FU5dBoZRrMNbiQBaeWB5qmwZND3y6iWU5U37SR3LMPWhvMPk9tS3unUcjAuZVJV",
  "key23": "2CeBU2nstnTcvowBpMuf1Q28JviE1RpCG9sP5Acs4ckYiRKfwqsUes3kHVLMRs5pKkaYKNhidTaE9aBvHc7MCj89",
  "key24": "5pihxYWwbu7JeiprHUeaUHjoWqbCbkNY6KFTHUD6ubM3gx98QcFZHXkN6TZr1KeWUzc12LpvE4NuBv65Xdi9EPhH",
  "key25": "WMxsRQD84UMyaLesuaSqEZuM29Ds6yVmdm4FTnFBXikJAfnp3dCd9DhBYXqgfNy9sGCxXuCq6Vz7r7zEG1Xpz8X",
  "key26": "2xDY6s2rq2U8G1e4joGntgn4pAmcxrNA4R27oszzTJV6ZxZ6ddZkWFLDBvjossuuSQmPiwjzRgz15aCjVZduuMoV",
  "key27": "5q6QJLS5bAHEjhj77tPibZjBrq9JoRH9z64vqp61qHnpiJjkMKc7S9MyEeVx539wbTFRFJyYsK3Ki9zCxdsAZLbM",
  "key28": "4Yyvp8Y1GWkoWHg3zgH54DtEgR7t4cSTqoGeZFxcVSbxSo9ZWZK6c47Br2EcUjnonfdtY2UfAxhzdqVofKogZEka",
  "key29": "3G7mXiXXr9RfqBnptsULx36XzunocEbxDWfPSYWvVE7FTBdWpjL6T7TVWaqC5m28Fj3qTM5y6KKWd9RXaHUHocze",
  "key30": "3AueV2o2sg7PFiMxzLLiiYJh3Ho5fEArrHFqsgUMvf2vN1hUttwfstpDCgTAdwT3DPkJhzMWn3wkL7viBc1xXP15",
  "key31": "2jQVcjvPSpR6hQzK1SyaQWVnhXfSCNhfjyCuS9W2mZc33XKoMCXGxVay4bfmxCbCBQn8VqdrgBwcPEjbF3uJGdFQ",
  "key32": "3RZDEKcBXckwazKoKmaAZbjFves4YmUNo4sAfMYCaT2D4BjV84QGUDjNAEzPp63zg4WmNnfBNKDxNQS7jyNAFMgN",
  "key33": "5RDLtFvVTMzwWih2eafQCvQmEbCaCrXXv16KUci8BGh7fpdLCeYziYwRNpkfQFjNpCuBqe2gM8gA8TZK7EmucbdB",
  "key34": "3kgNQWtUnt3g7QUpbUuHeP5zDQnHyh7psUDXR4nmdARg3FET5sxY5NVafw9WBjFHzbAvV452GPuApFbY7gAsMFkk",
  "key35": "4PjszoCkRUtqheU28Q5wfykDiWqCKwpF1jkijeQvypv46Dj7JSePVKPYcutaRF3ZusZTN81KMSu1CJDAYL2i1KGn",
  "key36": "4uW5JwRF4oGEf1AArHr5mLXwE9qqA9PLghPVohVsVHZaeMCPxHGnC8a8cD1XFXoeMDaRWK8itGSzjGi3VHR1zwdT",
  "key37": "4tHkXhNciSQwMWNsm3tbGNq7TnYzA2LkiM9eWCfcTpJMFH3jwZES2UYDLQ811Briud39Hn1mHiGSssHHqgSRWXhs",
  "key38": "2U5Lb7fmS6wy5xdn2HFwojixkkLsLNBHog8F3983rEypfNyjaEmoKW53hZsdYATZMTLLrXXpABz66Br7jCyd2STM",
  "key39": "36zTaMDKxH781NtJ3fDd8wqew5KoJS2gNDhZyziJjYDkhvWubXRXxrBtbgnjHJ5GGs6AzSP6zwK7j3H2t5UjPYY",
  "key40": "61j8oNCgwAnj8erFmHzAQnRGG8Z25iUp7x6Gxxdp7iGqYi3WVgcM3Hjz3U4q1EGfK2kGJpfMmr8BYzbjjRgzpoqc",
  "key41": "4AxBzLJytHbN7YK3AYwC2MdGRVoaABWWajgbJ88oLMV9GCbcAaHq7JW9wgrPbnwKQ4i8FGhDcHCQPPnPrSjTCgcT",
  "key42": "4ckMJEMYmxzNJnTkz7eQgTyKJ9ea81NnfvfGvcCNjryXPWfjdydFei4PVTbz4WFjGSrtSohmtRLDBB3Zvv8RUteS",
  "key43": "PMwFfZtWzQNHbFe82KpdvayVVNkQdvYXrCYPveMscu4PUhginQWKXb6avTisSAsBNXagd6DTZHcD2pNzisFoq19",
  "key44": "ybMuBoa6YL2uwDRLGkkAFHPWpxza2wNpVxBrWqQRN15tTAc45yTtRCX7TL1vvac8GeoJm3Z7bzNoBwZAZ7aXVjZ",
  "key45": "4tJDRdi3tg3QU9cNM4d5NYM7be7tgnTHrvgd4EZjMbmdo63njirHm4CzzPM7rrUUm3nQ9rEMUX1MPrCv1DD3Gz1F",
  "key46": "25pSy1pWuMbQurm7c6KRPnASuWsqet9JHw4sdsoXEQdtkgfzfbjCteC6hJo37NArXUWz2PG9xAwnMXzrkeH5xfaU"
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
