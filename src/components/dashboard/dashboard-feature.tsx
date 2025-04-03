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
    "5MucNR7JiZUxHMFfa2xCABhxnPA4TMQKW24gxqjE97qeNr3o7KjCkpBJyKCHWumsZeoktEjQdKqTndJcCHYyM1nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C52coYTW3LXHTwUrFcUkz4zMVkhweXp7vEq9ugfvn7am28pxRTKfVrM2hFbEjZ5n7yQqYFWARSPmQXgBUkmGAj8",
  "key1": "619RsGoG4J1DBTG7vnzFkRfFUZAP6UUCB9WtV7Mscf2rMJwii4V4KpywN6xwdLrg6HsM8xzBC2QHD9iMvyeNXqVh",
  "key2": "2hVMge2ySEo21Y6krNub3fhXtAEPm8ZWCnFChKpYydVSMTR2MtF56pcc4TazWXKKssLsJAYT1wA43jSNJ5omsGxB",
  "key3": "51SHAvHakrwPKZ6QWzwEUhKFtji6sFf5R25NkoYBUVEJMUfPNC3YMgu1Az6JyWREEZEuM1ob2iPZaDtXB6qiCSZd",
  "key4": "h9tuTk5YmHxdetLLzcyWpPLeLu7M4cXnHXhjEfYeashfXVQhmGiHUowtbtxx7KFEV8rNyC1C58mk4PcKK5Ljp7X",
  "key5": "31z49vekStPWtPwG4ginUG7ewDu5AbCoYjDo3rUzPAn9aJkTChF8RqpPt5HkiQ9VrCcacfyoVfFoQLEoA4axebgD",
  "key6": "4328nbsn9yEzGu1tfon1TsS7xcnhJr8nkxifmwsnXz7WDNMiWpUEvMNnKDoyPDYYmqqfzgP8QuCC2eWJquzMPUvh",
  "key7": "4YVmoUyJJYXi7G6P48oqS9SvgxmW9bo8p6AEbFmB3EE3t8NAfNWBQUw1Q35jSGT6UnznZ8imrpXfbZsUfivj5CRy",
  "key8": "2mU3QQ4omypUEbumHWy7z7aDjf2zEz2EmyVfjfkzeUA2BGxcPKrYR3Q1u3sJRQ57EHBLEdP6ZQUGUGwopQxU7diT",
  "key9": "3dLwG8NnxLHVdR7Eto9WCzrmLQE2wF8gaN2ddBBCpAkfVYvzZv6r39Ejh6kucAWFWCZrPnu7uTw9Py2nxDPhkLw2",
  "key10": "2X1SDtHBF7KmYWdXWmgnJQ4NnJjjznu5eRfiWKCLRXjm4hg3ZsWcEXwX3sjumMr23EmiNmbuY1f6LtUfCAtHDNJr",
  "key11": "3d1riyNxv1HtHgDvp6qe1BrtQtmx3NmL886bDm7wPGWSu1GofApFAj6x5Q1GuY3aPmqoPs5Ef12GJjcwP7kQMGjM",
  "key12": "iUA9hnQLZytc83wKeMvhTd2kGhLQ8zDdaNfJCYadDvGfTbU8n4itYeLnBG1Tnqrsbh6SF4Z5UbNe9eoVSwRjQaD",
  "key13": "EEVYB9rGjDDLofhBCogsSz7h29xeSnmjHUAE7MNVHUVtCew2HinQ5hHJumm7vXupr5FBp7BDGZGv9MDy7nKHPG6",
  "key14": "4HjDmHkm6JHDrT91aeudMPL6hAz5qAxgVDvZheBTFpt2gfLcdeZYodgQozChQCijBDqwVF2RdRwFATQBVs6cheBr",
  "key15": "2A8xxYp1JJXngZUwxoFgHxFyKLNwT3RuhztcTriGbU9S9EGneTHJ4mqWMVFv9R34KbBkvbgSmjJ8ksCe94PcwQwe",
  "key16": "3fpzzJPu1voLz9mnGTTVHSLPqkSr5ev5VUpQUDTtRZ4xPNrR32Leds5q9cJFJtzQq51MgGHvT5M1pWCgstDs9ak1",
  "key17": "5SkWjczZDfXuuV82nKHmpdF93KqiXJ6JYkou3gDqkz9RXP8mSDMvDbzUCPWMbxcLLVmDTfGtRfQcVjGYNfZcJZ4Z",
  "key18": "avikxB5aPyVrX8y8vihq73npG9NaVd6RQ8R4cSUd4i3rJBPGc6hzEpLdz7PbrsMdriP2ZRj33NvAJJK6xeyj2Hw",
  "key19": "47ZF3BoQFDDMT85X1wVxekN29MbeffpJzQhGYYMn4wLTP865B4zpejVKFc98959JRMcT5gtHovjmuCmNrwsN2w3x",
  "key20": "5TWTtKA2qqcZcQb2CtntkRjPiEe2GZo2TXKAPi8mCX4WuK8pWDDFSbvVrHrRuNJmVTN9iNgWDYTVMWAktASmx6fy",
  "key21": "2AL7QSbthQ9FoewNG4SYNcFbxHCk4g2CioLduroeJYZYKMDy5vyo3t9GeV79eH4cAMJ4yLzgSwWoJspsN4t6ALR2",
  "key22": "xbqYphH84gW5UQVFYsjisqqumB8d7CeECQGYT7ebci8UyGRUNoXQqbg4mywoD586194b7Cz1dbjGtga9yEgNn1D",
  "key23": "3P8cvP9cGs3NQQPAh5XYfpiZws9A2u13AEgtVQfq7ULYB9YSXw8q8LURGpeiZfW2PJNeCN6jjJ7YcWh3CbJPe8ZS",
  "key24": "4vFZJuRAzoyNQnaUUhgXYEwUELdVb7SFM5CjprkvqUSvc6L1zbKRY4Qt3VX5KLkmNjT7kYEhQwDv7maTHaEXTeHy",
  "key25": "SEFbL41bCPHSNz2KR5Y4bjJSV5LDyAR1xp38ddGgby4LJr8HsETgRWfrMcUdGaw8bJRyT14fQuW3XMMViQPKQd8",
  "key26": "5ttDCvQkq9HWWPo5LFFpKtrtSzGYTAhTmVJqdRTCRmjjQpmG7Cfjksje4Hc8fS69wDv3eZXLEAUgAhgsUG93ihzD",
  "key27": "5AGFcGUipiTfHp4JJKjk1UQK91qyA7SN99m7MsbNzu7qNvtgHuHrvDxCh3kBf4aSSXcntAySQgAaa3x8cMgUwrAK",
  "key28": "4YqHxbq199P64i8iLDEa2LvZ929J7GPEXGq98FHhSRdwsxCEMsrvpfSqofPTtnW27Umzjatff2qUEoLrqz43eyv5",
  "key29": "4q6jMaNvXYmoGXVDsJeucybxWNqLVnZaLx47HLAdo1Rp7iGXbkUqdcXkpjq76NviZ8TKdRZx14GXoC3CrieMYTyS",
  "key30": "5HvXMm8MLoq6nMYwomRYKFeHKLKM91ZsR8wpc7aoqhKDmt8W6WMwwUidZqnfWKvqsQ4JvNDS7o2xwnRdzS4k5Nru",
  "key31": "3xhMEAiC3ehXKkxQn7ea6EwEz21Xon1HJsaWKnrsSr2g3BSS6qkDYBhDVPGNmSjxd1c153jnTASA8Qaege6W6mBD",
  "key32": "3buc2Wy3Cdng91hD6HWJKoYnbpf6kFKFUA5U84Zn2hVbWGYrhvrYEQ2t98pJy7BNRyUNKuvbJsZxe4QnScZkxtAr",
  "key33": "4hguuqnzjshr9wjAn2FwpoXSfbXdvZ95Tjv1ZBRqCS3tYxWuyCA68yTej9KNPn8QDh7ybU7h3CRwkDsL5FvTJSRq",
  "key34": "5Fvht8CTFpZ1kMYNF117dFcVhZ3qVm7FK92SBteXgJJLZ3SdDEuKrJ4tqvJPnH8MNeEUWjDLNXwpiA3LhJxXVP4u",
  "key35": "2g1eGNHY8nnMq6KX6vLVZ7YcAnnhfbWAAF4mkNy2REfXmCLdVkHDXSzyTfcuKt9WApCgB7HwhvT1acrHguuUG5Cc",
  "key36": "4mzuYVEsmk5yMwNydcFPrrigJqFhdGRrdhTgVxyjaKi5BjYxyq8fX21QfJRVhkGRDq7YqsDMnbrw9a9U8RjwDf3a",
  "key37": "2BShqWjsUHeSQ3JYyvUcmQFao4TpQuq4VdqVqWYHqYiQv9EJtdgA5cJ7Tmw8UQMDLvNNvLrarCWEq4spMWrgaK9w",
  "key38": "56BwB6wqpSMfgDps7ZktRPoPEZo1yDBSwo3PH48a2gq8fYszfQo24vNu9cKskzZrnmzucPwLW7kFZG8uxNrSnzem"
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
