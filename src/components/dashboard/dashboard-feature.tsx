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
    "3FGYUXKW1p8tk1KuTRRg9S9m7j8uLRfkTws9uBnTXqJDDqkRY8TcSqRfjSFy8b9CdFzdx3P18oVjEb2fBMouNVfn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MQ3DAAiRjMC493KkH6c7nyyhrDPQ6c5Qa5N8F14JFiQavB2Xypc8pva65hhw8EwDpvjxPresqpeCs8RxqvEgHDY",
  "key1": "mACcNcwDQNBBrNqttDJvKU7W8yUxS9qs2cCPJ367Fy5rH4uwkWe4bVbKbVTtqkj9PnYDvwUHcgNxVgTumRKPaZW",
  "key2": "5vKHQY4WZawjrJdsv6GAFFYbpvaUVyVj8qfHc8NxfExg8wH2P8kQv6aFG7XqwWvNXEKYVjhLjfRLiAoCrQLu54u4",
  "key3": "2snqLTa3AT6MpvRKVrCdP8qAFwJZjcjibF4H5M89oQu56q12AHX7j446sCtw9azfysUYC8xfxpenBYjFWnQAMRMZ",
  "key4": "wUMZiuknZ6f9CEYoufKE9LMY9pURH2rHVGbWo68QdA73C5YRrN4ypZGb2JfXPSZQfuG6BxkEJzinDQpwrjNRo95",
  "key5": "3ksnThBzQqPRyCcWJEEKrKDHFP5fmVNTLFKZBgdcm5ANhDSiwHgvBE9Y2DMJYTtSQGatDs3BaRmmdWN3XaLbMiDH",
  "key6": "593f6gL7zrbNAuWu5Fo2S1Xw551YQhJGybivhLp11u1WmmJMqtGgVSvnxmKw6BSEcabC4ZbUEfDqzTznRtQxLjTD",
  "key7": "4hJ2AwBDdGCWg2Hvx8422CMLQdFKP4ympgLDRjHuJ2HBa3RVWgSaZR9CVofJqH31rxuNMS2c6BJyF6rxJHaHz4a9",
  "key8": "2jjHTDNR7xeYd3QzZN7y5GnRG5k4TSGiQDuwZhgok3daViqqKJQKWKu2q5DkkKgN43hUWzyXBY1939W8HvyPKbCX",
  "key9": "5RXxsxQ37jmhqENDKS8CD5QQjxBr9bxPWM8rcWx9rpfpgZqMe6BJJEpUHUQFjrQshTyWfJj4h2tL3vxuF5iAgDuj",
  "key10": "3qVZ8DY62QZyuwWnYscKe91ehC56Cg7rSFYDs1f3GWLEPn1BpzHkMuL4ZQkv7poEZiML7tV4N8jPaHzGSejcqsgn",
  "key11": "5auchXhywAodw7PoMsxfEPwf2mXpwCxqKp5R28YVhdfG7T1hk44ELe8Uf4uUMXSMGGo7CGKifGpJoHJVBGirNPUd",
  "key12": "4VDJ9bqw2BWtapeKAV6r6m2mKyNQjM2fNLCziMV9XRD1iauPSr1Bx9GDfi6MMx3TueQ3MdQqiVqt4jhjW665wVUC",
  "key13": "9fwJfauXrmgg9dnPGNieFVEjMvmJASoB1V99sV6MGvtokxy77UdQ4hwp58B8tgQyHx1VoNMrzrAqzeNErQhqyWm",
  "key14": "235ubQViu8YkAVpXwqF5ZQfLXYjsho46B9zGG7FaSFJVo6HmY6zt744JLNxpKeKPbQynBBeNhTAgu98MCx2gZzAg",
  "key15": "2GjeyRnyxEWT8BcLH99fR813fDASXyiKtCxzzLweu9wwPiEvL6CTNx9LT2SERor8aKPK4Xe98EhK1yxF3L2yJpsW",
  "key16": "U5v5GaQ6i6inuNpZxbwuyHhFGBasPTjdap5viVZAJWTs5v71jXmYkmHNjsy8hCMYKe2ivMqnpRUuHEcFwns5j7D",
  "key17": "4NHKbUGhLJpMEBYJGqtAaFNqLSY9ra4SJgvFZBxCJazx6j6RUmW8qcEEZg2m6Wua1GCGGsMHeBPzD89i7fiTeVJa",
  "key18": "2gTwHEdeAWaA4pdiGaEiD4jqZr9KE39sPfAzoRmMSh6oPSn6US4RqpcbY15xb5WA8SwXrEMhBc5TnQEAjwMEcJpd",
  "key19": "4MzTrcr8GJJD9JQmFW8oUVxhxa4VVX6SRj7opJjPcNKQi1kZdNfyP9wT7wuPKSLsGY394HCLsZbJ6YqT1iBwzXkR",
  "key20": "4jZkTHgFTq5oA8CVyemgkys5NwtGCjNuYBW1JxkaSDBKdQtNtSSH1uQmniJbcw4UZ4tVcanPLbeLXWko2UeYmJiE",
  "key21": "39vbXb6UfuZHMyfWL5wC5xAbQrdidrF73DkjZ3zLeSjwisPhx2usHB2q9JeVa3JmtorjE1fTXF3rSqWAQpnJnhH2",
  "key22": "4KFEwPZP3mzCWHKz8Cotreci5xZDxbfDmqcaP2Amq2FC3zUx9FhduPNuEskRzcV85UHpN86QSZsXWsEdSVLWHNiT",
  "key23": "3hQPkakSYrVpDsxNMV3tTSqdeE7yUugf4wrhmEXfM3BrnYA1omHKieNn7M272SQ17kvjRZ6QoTAQfMQYu6n73cPs",
  "key24": "5EQCvTBtv4zRfLjsEj3wSt5MpHNTwtSiTEZz96441J51ffz1xYAyEqdGkonPvayQrmbx8ANudQVa947SheLg2BMN",
  "key25": "36iQpU96u1tyFLuNofsVvefcqAHyqQmjnYzonF35GANNQ2ZEAdgkAez4EiEdTMfjPu3APWfwoBorbRAu1eCiabbu",
  "key26": "mufyN8VGJ9G5J5s864JLe3monNKSRAdpXH57i2hWZ9L9CMJWJ8fhousV2PhbWkY121Y2py51Sj5kyVbKaLT6bH3",
  "key27": "4htvCQ5ToSLinX4vB32rwDcBoyqkZ95cfn7Q68AWSUgwB5dab3T9PH5s6wDeNusxKdg18csRVmgLAUUh17QYVdBv",
  "key28": "skrfDaRqcCXLcpqERPXMna12RgQEjoZqSb2CxFAhJPQ1yeLtyKfTcoCPNCN8ip7JcYnwmjC5vk1qKbQuuHycK4v",
  "key29": "5b1toLAc8ESPf7QQV9wVQHtHHk9f77VuqxZVbfEfqoijme8NvWbPuKf1yawKdWNEraWJWV9hdgd7iCTe359DBAmb",
  "key30": "59tbCy4jEEX3XYe1kwfUTgaaYzmAJRyLSW5ZSiVtpXsSRMZdBY95g6KEALCk4NoNKB7uTb94vHwGpiRNhpSPpvsN",
  "key31": "2fmav3TZ3HAno4T2o2ESSXRzMgTazVCrRpc2TVmuQCW5Tefiaxst2b99myFw2xvCLZHWRk9ypXvxegNGLee43NhN",
  "key32": "5EuzWbnBfpG6rQZvsoAp6KitHFUHqxGX1Gcu65H6xHFKqGnXUAYLLj4UePq6gNLxoxGq1TrVQ9FQJiDDTs75oSoN",
  "key33": "4riwuZo5Q6hCNPtLrJMJU5hSpet78MNihxgxcvDRnH9WpRpKgh5Bs5V6w4zAV2erh3fhgPK76g4Kg47AQELHEePU",
  "key34": "3eXiSVPeH5fHdC8LFcwXErrNvNPZangbXaeHTiQS8nZv5dj7EEqCnT7yA9oeCsiBejw8khDTBRLURzsZ57hURkGv",
  "key35": "W2DBhpwjbsVssbHMF9tSzjJjXLUeHeJ6TM9jBripRDZ9FCa2h2AQVMwpofafKTZJ4uiiZJue9bz5egYNvCq6kqc",
  "key36": "CzVoFcjGmarWeERdwMShWsKDy2cPFgnVs5JxkLkLDEYdhytXfcDpU3HZMCxEVBuPAwt46cCPk34bkRG5DjZghJT",
  "key37": "3e7kbJNjeg4nBB5H4cunYTdVx2fLnZ8Cr2nUxPfqFQsjWVeq66xkpF1YScdhvRagSvMb2MqVMWkzUs7G9nFnMMHP",
  "key38": "5VpCN6mpDNPYfcsE5zbikYw7LkcJhj2xYpSgdTYGMfnCqNsu9cV4c4sJCzGmF5VXkuBXA69T9ZUai8pSsgy7MLej",
  "key39": "25WXJSNkrHQ34KjEtvcRzTx2535gfdBSiHbxrYQ4sYctfR3cpFbeHijgoaNAHiZtrsnfiCngXM9zLjUyv6D92qaq",
  "key40": "389T3CKPBEf8mAjNRKT6TYQS8CS2zPDHMVCYN6F5dUSrn51uoAeK5HwRqsNtXea8LUSKL2zQvKwvWhptCB67smwL",
  "key41": "4NHEELME2YcoehSPC9KikPaB86FgddHtCmp33qUGzovrgLMXNMadsyDM6G39KQaz5p3wH2wHFACHZwodBZKLeTYR",
  "key42": "2AhSy8wuVtjA6gN3DRYg7CL2JTKktF95H38KZsd3ks8N7ZabBMtarzUthKi6ETkXm8NDVC1vfmsxnndW97Uf6LaM",
  "key43": "2sh6WtCvCuqudrscESiB2tqEnCoUvK3EfLsUYmEFEpKFDxqogzinVMJQgm4SCXBgKrwrtmr7itNyD46ZkH8TiXyV",
  "key44": "43yCdNnSdh62qfgPX1ga1pH7DRTheCxw5325RYGcUHso3AyHgNmZESjSbtEDK2ySJK21gFD8MiVLpf1RFzSyM3vz",
  "key45": "5pTuAbgyozhpr85EE7AwhTt6yJwLMRBSBdarVz55wdAbUgfdZW53PX98NS6UArui7hBb6Nijpc88u51SBgUwBYBd"
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
