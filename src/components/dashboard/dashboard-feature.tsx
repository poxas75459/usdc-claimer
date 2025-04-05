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
    "2iSGiFd3NwJ2wtz9XLgqujbdB5sg91ESq4eTbDRWWG8xrrhKSgLsR4vfCiwazL4uYxbRTWgj8wii7GZkrHyCLBk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L24XhXTu46HnaKno5pvtM2Xf4VAqSXjkgZZtRUQJgsz9vYogJgFUvbCYbq55Ryf4sGgdBbyjVJTgapSxuFhycL5",
  "key1": "4e4wFQYXyN6xY21M5wwLGFJWQThbKSpgCKPmkivCnKVnGu77DBjSRHY2WWVBKP3PiDRERam4j2Ht4koPicj7vHXu",
  "key2": "GfDAQq6tcCu2ieUA1N6AbBcn67Kc8qLnrSkUcuAkakRUXcfaBrcQaasq9Bcmojw4jaJFm97Q1rWze9v8FnGWVax",
  "key3": "DQ6ApwDDfdJFBnd5HDbG4kn4m9p2ByeFLyH569xcembom84kwcvLDjiajZ35fkEHx2UXQcnGJAigvWqSDBp6565",
  "key4": "ous3pghuiUeSpgkjAvZk2f8EjFoUtTjJ7qdDMxZWF5QKJRLWyvEgrcdU6qrzTrq3eeBbiMpQJkSjpWSRBGDoPcr",
  "key5": "41bNvrkni8BqmD2ssrhzESfa7FPkPwCybKW6RTd9PLQBK7MSsKsRyrnbRxbRrz3VPTSu1wbzpPZn5Qx3HXud93ng",
  "key6": "aHCZQq4WfeZBc781HFopLaZCJHJGyfHZHkaBmdjSzRSYasd3bLv49aLXqqX6ckKox7BCBpvTi4UQEBV4jSprF8N",
  "key7": "2NBpADTCBXVvh8C7tdu9mtzywERKpbnuRcFqcpVb43uGUfRczAEA2QXkR75xPZqfzDJWw1j4fD5aWiFU8fsRoQDY",
  "key8": "5RdqSEwe7EwvN4HtjhKQxSFGDTo1hyPuCEtBiX33aXTKzVpDtaWBxRJgQzUTiFobexsoDVq4AxDfarkNLGhZDcX9",
  "key9": "4jMRkXYK6yuyV91ectXHrX3hKxYGEYqbQzkrHcQf4gb8Q2pUDxaVUUfSaXPwWASEDeQm6imL9onyb4QYdPrV9rrD",
  "key10": "3xR7X57JAJcQcMLjQLjqpzeSkgdLwsEP3hypq9MamW6EJXaAbn9gPdzVsZ97t6QmPznfqCLP3mQUHBdiq218xQW",
  "key11": "k4TX5jfd9H2JgBHG7jRJZtQyeiV5Q1x3BP8hNw3YPgGpy9tAC8411yiY6kffLNtM8dSTwxpeN9jiLbDmrZ6grKQ",
  "key12": "25oBFzfHHe9WeZ5bcDergJu8xUx8GosLDhfwohYM8eAGLjroEdD6L2Nvq2jNzuZ4nHgWJZt286zPTCNZo3bP5Aog",
  "key13": "T8GmvyGzTAWLMH2r7PNEJPwPJR4GvLcbtpjiq4tzSUux4xgQbuEFzoy7LfFJTxCrjSZwAF1R22Z1iskMVio5QJa",
  "key14": "5HtaLAgCk2KscFKT627aPeNYwJLQxbm37W7s2wEW5TXsficMUBXsETgncVjwDZtBstEouej55VVdJjhTC5qQbVMp",
  "key15": "dCqZhc7oPjEormXcZ9vFeMC8Fhs76F23BbvsFDc8omFtURQuYM1BX6KMsKGXRxEF7bNHLSLzDHcF36HLtbXRWdq",
  "key16": "4Abe9mwmqtZXfZWi3CCZ6ifSamxHXnNawa2RgiMQuavgDisbRJxzFKXwZviq5gGxn3SWRVuKGKmjtSYmtpLzLfBP",
  "key17": "5FcqGMnaW55Ysk84kNujTLi7bBob9mjGYmKvqXWkvJb9J5ogG2r7WjxgV4brkB1vekengevbdse9Fkq4igrLanpf",
  "key18": "3GcMAQkVLnqtuRdrse3eK4CtuuT78bMXLKyYzjLYnnxRjmMvaBdvnZYBoPPZ7ZFck4oPBvEeGB4WHJdg7vffvQaC",
  "key19": "2w4eyxa2TXUKdAGrRP1PBgkyuRNB9sZdF5xKR1zH9wKbxKnRVqhRxJ8dxQjsCcpa1aabphxb9A3Jsny6vcEA1eKc",
  "key20": "sMC2TAUHJAyzVeNsGncMWPen1QuHonpD9D56tiQkHHHWadJhMMFs3MXgD4VBHpo7vueQgqX76ekExK7f5D44Ty5",
  "key21": "3DXxxddwy5jGNjBWy6v711jx4j4Fjjg8tFZ36sW8RLiKrQTo1vPgi7rYwH3f3Gaq6dV2PbspBVqDYC2q5HseCE4i",
  "key22": "3myutc7r3q1iZXeMvm6YAbtkJpQh72QgFoBDPtbfQgCRBeDHbRsRJdJm7XxdnxqW7joxa5w7LgGTdhd2R1tZyDem",
  "key23": "61ZFeXxSfjtbtcwC3ucFjGVhaMJ5fuQq8Md6BJ1Ucwqf5c4rq3fsmL1jQnYKRL6VWBgJXxX25yeDd7jHMxYe5QK",
  "key24": "3dM39CaTy1uvBf4efZ6yit3inHWrYCjFsr6b1znoQobyrjaM3sqe9bBbM4XctLr6YpM6Ya7tA11bMft4AUSYi7jQ",
  "key25": "36pcZNQUR7eGVhBqf74dkmjE9r4BPUyqgsywVkCPCeaM5iBEjsmL2bBB1TkSNhbjJtK5YKGrpqjfEi9HeAAfUo83",
  "key26": "XvSrRmsYH18aPP3sPP5KmLVNSqZBvUWx42Rt8vs7n7ip56VVtMJugtyUX2abnkM8JTqcN7yKCYuLxECMfM8UdbP",
  "key27": "2rikZQ9JXN7ShM3AULQ2ksbGNybphhi6y39hAQdfezQhK6Xmr7tTxQLQEsYbv1gxXSeo2qsHsKFgRyv1y47uBFnJ",
  "key28": "3z8FimevfnRshA3B6mFv4SsEcyNvSRZc2xZdrK2QUmH81JceUggDs6eCe1XfuBWjVd5JLUs7wYwzi7EEFy3hRhPX",
  "key29": "4G7vZoVSfVRWJgwazfoRaXCJ5oZpqnB8aVqBupBz4kv4kWGqhEvTtMAF3hdt9jiXDN4TkVqV5x6KMJEefC2Nmmkk",
  "key30": "24X88HpW2dUDD286ExRuceGmahVQAuZUJ31vLxiHQvZmyVpUkR1PEXyCFGoJnPSqpPUBbkdAoSNMFaewrxx62Z5B",
  "key31": "4Vnqn3TbBptYVoCAZ8jawuCiMRUs6yzcUAKTznF13XBZBuJPfkqfFaqeB1r7yeCCDFBuPgBFjxdcEdCejRiuqJGo",
  "key32": "5iTCu6qZRkUys8k36fBLjsuDjmLfVjGhZCBbXrkK2oFCh659ty8kDdimvVRtfTeow6ojXn8uRAnB7BpX9HKpsuka",
  "key33": "2F3pfmbXyxjQz8qpErZHH4VWBj31jEgUjWc9qnNWjWkuWg7tdetEEbmVNzUsZK1R8F47xztecsnuE2TAd7JHfAHT",
  "key34": "61mBT1KpA4bEL3GiMCSEsTfvB496VKppM2JmFr37pBYdBzBZ61AuT1yNRVWXRdjuwezdoGxnJKNRtsTjqxrqCpHg",
  "key35": "FJd7qzQjpwZLg68yjyNBJvMN3FvHV6pcD3NXyE3M7h9yAcQXrMDJYnKfJSBEsQB325D3kSW8J13mpTocXxj6iuY",
  "key36": "vdfX7Q4XfGcBVdT2yiAE38WPqLY7qKx93CJQXkFFSDkCpjKccuAmyfbCAuyozQzQikEZ23xsUmzaEPm8BdF9Vc8",
  "key37": "5XvxwqYToPoh9UzypDsv9XZeERVGjHVQE7oj7wGMSNCYfWmQTVhMEkoA8SrRCaGn5GQHSi8tc48d6Z8PME8Vmg1n",
  "key38": "4xda5dyG1N56DobGekP6kxwNxGabMysw9RLbZUSYVYNycK8FWF8xSdTjKY8mzeKkPt38EZzPBy6U6KJB9UiRwXdX",
  "key39": "2sd24i8yCTDTCmAH5CdzaJWUMA749X8kxQdwzYTfkY5u5mxMm6sFbLP7bvmwGpsr2j1WFmYt9gBXgAGEsAv6nRCj"
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
