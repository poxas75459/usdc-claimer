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
    "2teNxXA4Ls6eEE61SJyPgDy6T4QkeiGVxmt4VCvLKYZzu9t1e6CDQNk2NZBVuRuBPTpT5VbNSdE86vqWmFAT3Vx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dgf3LUnpxugL99XqiwTCJDxEtubLY3qEJjp183PJxR7P3aw5iovawy4sQUMsUpfNApNonuNGKQcDmjTkqLnN7nB",
  "key1": "5M3HbpwdhhR3mz3WGTobv9oZLWVjkYR4FSMvYkKyduDKgrQ74Ls2x6SYyBeSbf7wKrUKq5odFcN5gGrHUp1wkiK7",
  "key2": "4pLU1q1APipAfnuDAifdoNfLJ3p16ScR1k4k3DLAQQZ2u9V67N83YBiWY1yNrnxkNr1J9j9aNP5qXZdLRME4ihhc",
  "key3": "4kmUBWEugWKw9FfHaYJNQtLs1pztpP2Wxg8BmX3auC5D7UfYVWSKkv198pazPjjDfZmsQUXpTkJXPwYo9iQZzz6y",
  "key4": "5WbBW8XncajMSgxdc9nXCK8ZrTXxLCPXV4gHH7fEuFzKAusLNmRLg5nwikoRVtzSNnSWsnyM54qXQUJkHkk57oWd",
  "key5": "2LKgjuYWiqzVUVt5HZ3dCv6uuBvViWvXDEuvgfs4GPJ7D4Vtea6kE1SrDqAMwJWgJYpwcHTwrXFgRkuztZ7QqQA4",
  "key6": "3hFeebeDMXW6MTWTkrepJK8ewYueKSV9evMF2V63Hko3qdTuW1EraN2RCQJ1PnL3qwaNM6DQNMfkzkj51KSyrk5K",
  "key7": "5EcbGmH8BKVB66KoXW686a2AbXz9z5iMt25R6QuJiqrPucSPrcSu14W14BSP5xP9dr46VcduytErycpZSoinB11j",
  "key8": "5UdeC5LrKvNqkzm7sKrgBd6mwhqatQocDxdtcT9RtjfWpB1t7SAQDHK4QEH3VvVAeepGMf32YQjYAnXDyTFbSoXb",
  "key9": "4qFP2PwoHqaRtoJWWEs8awP2wdpwCPkDm4GtKJsWve3CaxGpjdm3ZJ8VnYMiXwhJdx3uVs45LyYA9QrX58qiNG97",
  "key10": "4jkuSTApZKErM8pyRNZ7bCjgJzNTxYzfN1Dzf9Gz9dBAiQsgLkbYHR7NaXiVow3BA3VG1FMHLPt9VRwxQvSpSwim",
  "key11": "3NxnXrrVrX1H6HW8sfQ4QdhHw8GsqrfLgSogUnqS9coVL6Gdw9TpoEL1XkK7WxjhjNZUSAYT9zSBeevBFZ6DQu2G",
  "key12": "4eCg1kapoUV3Vu7QiTdJtvFMjtfnLBYR1P9fkiwpgC2kYV39VCpgDLxtLmbYxEph9s94iDahQKimAfwGbhMfctPj",
  "key13": "5C9QHgD1qeKL1Ln5vL8KM1jRJMkv8Q3VNCGQBb5yk8iTtp9sg4RejHqxTzDXTm8cjocKG3SA8MhEqW3A63EWbSKj",
  "key14": "3sfMuHy1owbHe7qJGFaTWRCSjAX4Ps39kJMeQvCjpF7WXp7sgPnyjKz77UNG6CLCq9h68CSFURRcGHSu4mdQZFkH",
  "key15": "2d2soKZuutsUZjHvMRNGbxTQXM8JXSYs1u6Xba2w6qmSd3kjngew2QgRAwe9ELLzUQphLFszZMBcaPPZAbTMBd1G",
  "key16": "2rqzA37F94MPC31zbkd3Y4v3yCNkAvB2qgpDEtnaHg6usnimLmcaAh6vnYo5SfYxFES5NsSK97ADuPSu4YYfwzH5",
  "key17": "5NmzRrcdex6e95XkugJADtKhoX9nXNQmJeQd7D8MLoBcSJTXEt1oipmjdbaTqpNLXksHoLfERzbavgxdFNPfvguj",
  "key18": "3JfSEhkk4FbMD6MY8JBvBDX8M9j33bnxXzpvFYe3dBciyvU2QqNBaiGYQxbsp8peXVARkYwACF32FY9cBaSko3qp",
  "key19": "3w8z163EmqaukNA994JQ3P16xpSY9Us2R6LGLxcvwuN668DZbeYCSch4WeQCyYaffTZuun3Be5qU9SoQracDg3hq",
  "key20": "2kdaiwDLL78ZAkEg17SfdSA1kUUhA47VywnQSK8B8ybQsbtmYAU1gNvGKoaFcHCUf5Qb1bm2FwhEGw2Ca4vzjUyp",
  "key21": "3i6kmhDvv41iDB4r3mtwHhhWL9rXbhChzA5EKLJ7rhGFoD1Byhc78nKYr545zswAhVdBmCeQgjzznoRsvHUJncpp",
  "key22": "TMRk7z43KYUcwd9BLmCERaRz62hZLrwX5f9RGHJ4cvBppYfASt1oiCx3Efmjg3X2vhgCZsLwUHM3uLDAMM79w7g",
  "key23": "4QeqfhsWTbZP9QiBPi6orbp6vLcoakpisNjCHdp9yH3JHY87gSNikbsqXEhxypKLBz1j1onRa7PpuFwys8GVSUc5",
  "key24": "5UKgXMqaSFi3cvNYr1NY7EYiVfZheooehP6Gji1thmLvWkNEAW8T4TjFnGqzWHr1YDLzRegtZpCd8CmYpUVreqGW",
  "key25": "2ZN1suocMvejp7bQHSw9mwG89hwsX7kTHmxhCSZ8seKKTE4b1gZ8617ssLwQB7dH12K4SPjmWQuAW4CRpi4f4Qg9",
  "key26": "5VC1L7Wq4Kgt5uG2drms93nRAvNY6Yxz1jyCu6cV5nw8koph6XVdE3t3SVT6WT6ff4WtqHDTLYwVTQUg38CoUbhW",
  "key27": "HFWb555p9GgXv3SJ6haiNHYZZ25XbcBX91hRe51rjEr3Mc7uL8N1JLudv7TQGsscVZiJ4AjLfGEv2EMseSLxr5q",
  "key28": "28FCZ8WzvbkueY692mjLav8mEpDQUh9pzVFxw44uw4w5vKhKQHGgKXDySfXYBvj7vMLhM4B5DZ2KAJ7yap1AT4Qz",
  "key29": "3AAmMAE6732kTXAWv7K4Bw8vRTDi83Ck8SN8d3Yrbmdf71g74yFsnUbkdnH6eGZgAWWNQT7cU5TaYTnBdnqUg8qm",
  "key30": "VYxTXme3oWmAypjjc9rDxBjdaeBrbmX83RX1xc8xBXy3xF3cya6JmYVWqrNQqQ2grg98JmcPdB1eXASfxrthtAB",
  "key31": "3rUza6tv5azdRQYVdkq8MHd2nxo5zgF4KDAeY3sriYaUyCNLFDPkjwoq1EMpVfojAW1vtEswRTqHUgZBBqnashPK",
  "key32": "5kGpGNAPPaXUncFxWzEaqiku4C7VnZXSeP9ump3woHzQBHfiji2MCTXcgS6XR5QRSZ5PPC3yxQHVFVSHCU1MWJnp",
  "key33": "4pdnKyRd1AVUv1oKQcGefwpzvYmuLZHgFumzLg2hYGEmkaQ4oMnngkhYEnrBbNC6bLZS9EHFQ1N37dzbJkzWVnAx",
  "key34": "2CU8xjijGyZzTNFHMfuqwUzUxPPahP5K8S49NsvL4Hd3n3MeGf9uSJrP6Dq4nCoB6n5XWF3QPnwihhoRxSo3s5WF",
  "key35": "5tAwAbsL2aH9Rg5FHFordaEhfQPfXea2qN36TMRz9dgvcpcRJkFwQdhVZB5x97tXnrDMts3NRTQbyKWS9bV9SRTs",
  "key36": "Zv6nuaScQCAf8VcpNU5owrFR1dktVFrv8X4RMfVJ2c87GowhoDjxWL2um615ePaMPiC5eJGFdCH9fYfUTs5ZYHz",
  "key37": "55kDLSs8FXjcLUwcRb68s9gJvrfb1Z7BEn53HVinFEdjJRthC3CJghyPHkdKoAP4KL9a4PPhL5v9s9uULNF255WL",
  "key38": "328QfKdrecjiDF825XqqjgtUrASFSgkCfEV6YWTNRx3hffJQWXe8xLMfAEobuHN4wY1beHQkL88tZDdzb4Bhzs34",
  "key39": "4GUus7iEcpRkWbWg9q2oZLpGvGN4dcJNcF4HbMQwchonhqg2eVEhUnJgkXhpVT8CgrRaNCibE8Wshxg1Xhw8ZYjZ",
  "key40": "3WLyWjkXuStsAYR1PwZqtSzZAkeaTQ3Gta6kWPRGUcQrat6zAsvutiwtxB3keBraS6KnJZKnM5SGAzd8ZrBkV2w8",
  "key41": "5LdQ5qyjEXsRfrCpMC3h5mXDo52ZGeEuDbFt91FUzwHSJ38FjYFbvoZHM7fsdNExyQbDCQ6uf8tmtmr4KQRnNnpg"
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
