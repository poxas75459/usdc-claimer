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
    "272KzBSogBZXNWKa9q1i8R9Xuw8XzMFkGZjCC7HmrLLM4NDmyjjuwcmUTzmpHnUzc2PTqgsPvFv9PgBzjKGD2ibx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48H9Xfbh59ccuwh2RY4gATZYrZFoGJyAus2ASr7Z3VMSRFRrtaqERxoeSC28WTH1j3eVZ8u866UMRvvV7yi71XS5",
  "key1": "sxVAwLVKf1LJp3LUc5yiZc4Kbwzf9m52MgDQa9ptvGedJqkMs1QobCfNiC8aRWxj4FvbiHDvmuShXT4ngVoXbY3",
  "key2": "3pTnsEgcD87J4kew8B6xkdAmaGD8wFaF7Z9MQcJ84dQmFAe6Gm5qFBKSFLJKFn5cdgtu4nrKdjSuoaXqpdHM3GGT",
  "key3": "NefuXhQnCmMqhXVvQqfkRT9dR9qtmQHuQXu76pC79EAs6egnidSDUyFBXjQZiTVVqSWJmYC3XckFvQqCR1Tx712",
  "key4": "5xga19t9cbNxtWi9ym5qDQMDPW82Qg2vk5mFecL6gtcvW8nweozKwMwxjdf5RYH8eTd5Edd873kDrfE37ZoPmW1W",
  "key5": "3WyRWx8cX3dQQAjueGkbtDaZwiNQ1c3uEGnetUUccMN7aXGAsm4rkzDas6x4bbRnbfD14dze5QSRKWn9KTg5qfBm",
  "key6": "PrmUhAaiUxtpvtuVcdA9zCDGazd7GNx54zKi2exGw7WnQnYP1T79tB5GvfKbj5fp4cgfZBwnX9BroxAHfmmJpF3",
  "key7": "x287wtzkDwfw8kMaWYpVAMZjwVZB8qGjStmDVriMPx1g1DQYtTqnV8w7d9rJ4WuDFH7PPgyLHn6xVcfdyHfMs66",
  "key8": "46GcRQo54fKeRVRUcjNSqZZFrvpAmf5Q5p9uUUgMoKVuEGYRNhWM8kusZJF9E5um5JX8LSXFFoMYAL9BFk4A33NX",
  "key9": "5DnfrPAfESwiArx6EcuyMafbhjbtCAo65naaUdKEv5RDRTQwErB2vYh3LQK6U7oCN4B73oaNBAtSACMs27P1JUSU",
  "key10": "5sKLuDBUr5rcK1r8yG6wMSKkP696jxSWV8YZsEXNg8UuDzuLfGNTE2Rj9z8THBsrt7nS8gubGJfbn7JJHcaMWL6R",
  "key11": "4NQTsyur3GJPwjMafLzh63UQ2AsD85eevLuN2xTB2TgtgamQ5fSBXbwdrnDqw5719ykXUoDvVDKMGF2nWotZY8HX",
  "key12": "A245VT6JdPUAZEH1LUhWkZq6AU4jMKjfZPmBjyQE763rmoK62ysJwXJDE4XFnuZwBt5dgUz66WeJQyyRdxLdw8k",
  "key13": "3xTdStRGsqTxc8MLG4SrKX7XmrzR2nCZDgHg6tEpPTXMCq9VZyvyN1qo24PFM6BvbhgHyfLfT6tuMZAHFJL6uXVN",
  "key14": "2DgAdJb2qJsRNa6yQMrNAuAoDvMiD8ML92Wq4vF98z2odE8chq7MetuQDCwZKyU6zDYj7SpZVsHq3v3U6ZrHVe8x",
  "key15": "3WxsveQoyvqVt3963hYE5g4ZDuFUpS37HWWeWBiB6u2ieWutPjzNnSS6Fn9EksVb5TzgS9qLyzSNyMG9dqgvDQuM",
  "key16": "5nkpv6Hmv1PQia4rTfjLSrahmedxZY9SHRi5MRYwLSp1zbdkEYeAeSXFZZcavMVSWW8fkCM3r1QpAMm6bk9zetMp",
  "key17": "59dMzu2FsQuNCwVfXb1ZkABR5XHjfDw4pFGE9Xg2uFKLa1XhzhoPhtwqtqP9TbbyuHA4Wyv7SazYrKhVwsNP1L5B",
  "key18": "4oiUdJDpFJtr3SRmyczb67RVRE9qef5di9KySAbMmJ79mk1zHrr42uwVGHorvr1fiZkphUBTTL3PF2HUXH3DXbNo",
  "key19": "31sB6wuWXox5crPYTigDssUqndYjH3UYwsTVGRmDtnQVw4CS5c5rCV11KeLBa2RR9MiZkmNj3iooZKKya3WBxfnQ",
  "key20": "3Ngw4SHXJEMixjc7L1j8zYz1rtwcMLqv8Do9tBuDPnm34Laa88cqjXfjjDYoUpKUdMW2W7WsmNYk1nU5YJQJ5199",
  "key21": "5ah4azn52p8GCy8RuLYNWf7WpysV6Rf1riTYHdwtzDuxG41EtLGekCqb1hoDyyoSo13w2Yrj6kTpwek842HD2hh8",
  "key22": "oCwdYNwLPFyMCKw3o3Q3wkLZefPZbqBN113XZGxwob16pdGQXQ2d8YtVcgHWYtNx2bSREbbQhJ2oj2LPuuVNnS7",
  "key23": "2kjbYqBNb8FoZ9oWKDDhSX2HWFkD3V9chn8ZZzgP9SrGiXbGQEZXFqxYdZLKcRZ6aF2msNpSJNYfXubeRad32yZ5",
  "key24": "3tLZXr9SLrkVHCfBsxnxFMczzree2DoEzG2brgCLHkwyjfsYcbqyQv2wAeAeuPXfk52aEW7UxsoLWY5EK3AHme3s",
  "key25": "3ddwrMus5XH8fFQ965gvjUqgdGa8LckBz4NVE1D9ro88XC1v7qKGbdjrsexgc5fpLq1ECECE7cRm9oYAcfHsJMSB",
  "key26": "55mc3nwSya5fbPsCg7CHxc7Q5ih2gyWSo1j1JsLCGr66JXbDMZKPKvcY8cdjZ5Kxx3jCxQ533n2X8KBd8sczPUuH",
  "key27": "36DfpjFjqWaQi9WVx8Y49MzWGgpJ516GLvAsFcGuyKH3zKRpQwQo4B1j9Y3snEtVhyhNZcwcmoRvFwjJMBu5WXUT",
  "key28": "3KS5EHq55wUKy69y83Hthh2yd4RBJWAc44brJQga4ANUknRBkLDYr5g1j6XcUxzeunnqEhiLQ3XL4BYB11KxeorE",
  "key29": "2ZdCLw1nTzr1a8wr6i2DEJh5wm4hH1hDHwoxSEmmDotDwAAx6zpVA4Zu9d5xEEcodv7Her52WVrfctUFgESStZfM",
  "key30": "58q5tezyoy29ZhsgQz7zwMMoBPonib5jA43fEWAcvsCgdQF7LdCiC6AfyBxxp8SpUy1PTkPamjaCkHxp3omknd5z",
  "key31": "5mWDmwmB5hM5xYeYQ2cbFqtYYfoPsPN3mNDfHbs9EEf6qEtJiCz52t5dwHdj4hLCvhsExVQmWRtYTyho57pE6irW",
  "key32": "53mzeZVEb2VqqVpbD8sz2HpbWQ8uUkhaP5ejCPUtHE4hqBzGq5jYbejiCMWpz84mpBbNRi4Y64ddPLgcUrDgnVw1",
  "key33": "2MHuMiV5DVBmidU5cY6ey6a1nZoirVqFWtpy4guVSZmmXRH9E2PiKtTR5STv4fwJPykKVjS6kkZ1wb7CZtSAvihu",
  "key34": "4Qf5sAEziAtwiukjhDFu6UiaowxSxYNNVbo4tGuKcm3Qc8Ko7Bq9FDqPP34jwbxBTCueRYLXuW2BtyZYvgpwX8EE",
  "key35": "21cj3TA1FaarPe1xUBxKTctLQkHvtFdriDe4T5Qcg94gCAgg5Qr3CFXuBbLeSsBY6uYiXQiF3ns1rv6VAodycKmb",
  "key36": "2Rq51HGKb5TUkb3rWDZhjhJbLmZRy2HTinpmeLXfLsWoMkbSHmYBU7bMaPYr6n8RCdrKN3mTThhmr6NHHQ6fFEih",
  "key37": "n2wLcpUuQMnKBU5T2617ASmqT6Dp6mi7uFfNsPp1X8hpcjX1zaSpYmqMcLi9ENqAw1M39ea5eeBaB8B7bD55tTE",
  "key38": "3tPfJewA9Sd5tAfKXeig2t5zHua8VxPsyc3CFjsr3exwmBjLFKZ1f7SmsezctrKNheG1kA36NFdzYRF1DatFW4yk",
  "key39": "4bDjVJCkZdTEs2zCBxexQrpgRr1Pmexf3L7draik1uqJteezXnzvxv7Y6c9LE6tx18zsJBG8BTyVCAFVGFom4cKa",
  "key40": "3B5parUyu19fo3DoD8A5x6cN8qiqBf6mUV6oPobjNkVgzpM5A3JPvbLbJ4esEnkyYWtL3TKNBrN8iurzRkQ5pjm9",
  "key41": "21rxq1DHqgW9N9rNeGsYKtFTjjNMjBdGxi5bQZy6qK7EcSUQNeyKbwB2vBghXYknFktbTBwisWgnVVTeTbbnab1j",
  "key42": "2d8uY5WsK6ufxRu2PvmWYkCviiEK5BTuEiRUkmQb8EkiZgGj9faoWYEm9G3mEZNoDcBea1nK8sZcAUAVAaTBCiju",
  "key43": "7NtGSDrsJCZaDXJW4zCHFpjcVZ6pNhthoaPua2KQ218swRXKnqoKNU31PTSbk1mewZYdYgSMdYPPYQ4mkTk2JnL"
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
