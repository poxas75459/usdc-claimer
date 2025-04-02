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
    "4JUo8TFD3PvWvwXoxqWHZCqt4YaSkvbeCGsTkJPeZnnUuDcUYGvxscd24Bf2t5jaXuR5eBrV56LhWX6SdnPUfqDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55S9XcypLRxYidqSpfsLRdtjysCm7yfncu129fKiybq2EMxq7PX3uMJ5jwgdRu4QGFUr2w9LdpQ15nGJzayVMnAq",
  "key1": "2c6Am6t3PfAnZYeXzos6QhcnwispHuunrCoa8UYzM2786w1atuSiczrNQpeeZhKgcZtTrFVjr1hKPjdLnZ9re6dK",
  "key2": "3Zxex2SZ7C3pn8oMS8DGoQRkMtMpJw541nf9bkxqmD7487NYxVwuGvL51Ds635LpWbd5d4XWRPsX2xxZMZqY8pfh",
  "key3": "cnbgAXDUG3JCiYUndTjAfRouJ8Mz2rWaMiZLFkGYVtHAQsudZtzUt37dhzw7znJRz7UWfjDjudDN5FEi8gtDeoC",
  "key4": "3ae1fxNbZ3Z4MW62cs9E3ocNGF1ogsJky9xESWWc9Zg5uMe3Sr89kXTeqMTpGq4DnpNrwUaWjWRHRcTcyYL4KpAV",
  "key5": "3EXU3yuxqDtmriEopybRuWPEH8FbEA1ctFn2fYUn1ea7FCMsgD7svgcvDMU9j7DbbgdEE5vGuDRB8tVL1Bbz7V3a",
  "key6": "3uuuFYXYS5W74aVQBEx9dyLQK6R9KAUttXiS7mSS4xxJtnePSU42xU7s1uABYNQDU3ggbKMAWPPo3mcFpSNjvfb2",
  "key7": "4DysMc5v8ZeaaxP22PRPDX9sgunLEeDhc4aLpu6AkKpDoMekL3NdoPBmX4bbkzUJ4oEqCtyHeg9c4Ny3H6bQW3EF",
  "key8": "6P1kRZR6Uovk22X3BRgLpqokV32x5GzgRjvw3fF6KaJvY4hfuWy6Y2Y2F9yfg4Lq6Du66VjjqWmHwUXdGGqtK1c",
  "key9": "2JHUtHcC7RUWdmMcejQZgxCEDSetBFCqoVFYnuJErdirqWHg55sjSA5qACHzgUZ2xe3vp58AxmFDhWkdn7Qf3hdh",
  "key10": "273vJEknqD2DFieZSJbsax8UXHEtWXFED3NP7bd4osLLn7YJzM7AQHFsqN6K4ZdzUJcqyHPNwU6R5NzZqeC5BrCb",
  "key11": "64RvCTq52ktN3rnwmq37UaEzdXnZchpJcX87JuXAFKpZgCxmk7R2rgPRYaB4KU5QUbTCm54pscmBMJJKTUjS65Cu",
  "key12": "2rwF99TQqFJtGcu1u5hETai4Tj5ZpeZuKS6WMkwU1JqoTXxFbqTNtshgEjHV6GFpTTb4p6uqd3RQrjyDdyvM4QG4",
  "key13": "GciMRMDQjwCedVjZpWkjp5bXRYqpypoFf7Y93DFQEtHGMyHPFp735Phjhs36YuzCykk5SdAmV6bXMZcKfCiC9CN",
  "key14": "RmuHociCnydB3cj2AiR9W7woAQWDFxY3D6fcJcRynCz7vfb9QAqH3wNd1S9CK1LWUnWqoWkcHgAYhPCoVHTsqSN",
  "key15": "4MbQnW7suvwMyZeFZkRpq7rAckGjeaVwui17f4BezoZxczSKzLHNG2k1Qev7WU7A7oPGqn4YJadV1g833Bi4zuUh",
  "key16": "2qpYtYQYAoRDgUySGwWA1eu1zX9jqvBmT53WeKuWobGmu8DRxEqqEATjAAXgrjvj7Q3j1EuMm4RWjMN5azN4gBXo",
  "key17": "5MqgRUGS3rB7xRL4aci4pMaSBeGmoxsxJvXFpAUgsMHyeGnL6zAocyDVp898XUrfnNFPkvJL2jeQHs3eNjhW3o92",
  "key18": "HHNVu8cA4SMWwFdxkJW3ffgPL5whA6FoXuokmGoHETzn9HiYvaaEaCj5UhcRruC7bcFJ4WLMPh4tTraCbWiY7V7",
  "key19": "3HdvSGNzAe1eq5xxpFLFDobgz5UekFQ4PzQvJBAQcapKfpVbKFbyFh9zhsZbsqhK65UC29SkWbEyQ2AXVXgRqWF2",
  "key20": "4vaqFMMkhRREbpDvsaiTRhVvLW6MY1qRFawxBXBDwSsGEhuc7Ekt8Q3PDWCSKEXDSyLJciXWFh6QnPz2Lfky4e4v",
  "key21": "3i4nsrmKDoZmMt8GAZVK8Tu2sw5kfa5jK19wpRmnocpE5SUU9FNusCDdtboe2hGJDCLxmBXHyTmCiADqRq66oaQn",
  "key22": "4A4wdKsC9Va4SCy5eUboa8eUZCwHNWjjMSNX9mXuuFVQyrzaKimZ5zHURwnCLTRFcs5FBHQsGs9uCPYPV1TZ8u7K",
  "key23": "52hVTEaL6bQzbnonenJYohWrS7S5rRRJWk5gbzm5rRff2U86CMESsMMv1apTrxQQA5Jz13kB3vCwkaPXp4tZrY2A",
  "key24": "3Gb7teDmwSNsKErraX4iY64wxB83bb3Ho52i3yjZxcYpDrnNopjKg7gBvM45R7MtK2xSMMUC1eZDfgd6dG4iCZFH",
  "key25": "5TT8misnPUpRV4S5Bq8Zq1rNK6wq5TnruTBdX1DQ6wFktdwFdmxgP5ENrxBE6ZsYnxoMpEAnszZ2otXvqSrw3tG",
  "key26": "54godHC4wAqHLuwyuZMj1MCHZ7bDN1Uq28SQKz7Jmd39YJkZ1muWV2DRmTpoU8CE9rPGYm1tS2eoM9Wbp9Ve1pMr",
  "key27": "4U3TgWSPsKbx6vTeBTRZn8TmXeVeRSzN4HSFhiihPYW1P9AXwS7Kb1kDrZM6j5R3k4AdbgjMH1D67sQqWcBP2Qdr",
  "key28": "5TvSAY16KpaoMrWsXJyyChfAS3Y6F5UWe4z3R45ZaGe8DNmfiofY8wr6i3G1JyySQ8htMM2ftnSKqtezn6bi9atp",
  "key29": "4Aithn852w8CzQ3jPG9tnLG5iMMcyjayC3TSGwBjYW4kupaa4ecjZ3qxUqt4nrbcEFwJgpzRFnQwRFwaHNYhE1de",
  "key30": "4YsE1FQgi4wYZDdsasH9JDNiAiK9oVG1gZaSbf2WUS2JHA6a5fJXCZRPYyactVsSQdkfQbdmn7DPqfwrF6bTM5VG",
  "key31": "4Qiwn4mhRL9mhxPh3m6yHLTU9cS7puC4gvtdNzTSfvJMCNaWE9hTP3cdA5mddFwRowTtb1RuAtLpJgKc6Xr7RudK",
  "key32": "29myLdTq5ssSpZsmhkqRqK6nNwE2X2Hd1TPWBVMnDbpNEzo114xxeBKdrRuSdiEoYBBk9KueYL5xHjq5iWrevxE9",
  "key33": "38Wc5Z9VHR4f1tqmvubq1X7QMBU27euVMQTUUNz9PLXUCXEf2TGqCxxvAcBf66rMf8L6YKhj7nTMrkdFZwuasdun",
  "key34": "WQf1bNipNbXGucxy4rktdfNyVN3F4rz9vcPGNuhyLJf8q9EpeGVjHVoE6wZX98r8oXkkksBHkmh5AWwGcjis4rF",
  "key35": "zJNB1i7ELbdM71JrHJvuqW5n5Nx5W2aHUmT6G6hCAYTqVvp4Dtg3FzRdsVxweTGAsGvpdPUvYXpnkcqXCj7Cir5",
  "key36": "Xcv4qyMP3a6AarB9hfmZguvY7u6gUWVqFby5HgngCQGC9gKSvwLuuNcCi7NBS6oVBMzrMhwQM3ADmXo6LVXm8qS",
  "key37": "4og1vpzYvHs6gXmkJFtr5N88n5oVtmwg7TSSUaNh321kBC5318yAoZtBKgVeS929xoSDwyxD1uuhUTtadKQ3e2Kv",
  "key38": "5JWSJVtGg8vWqDtP77G32UYS7N7j7KVCAanMgPSTam8SAb97QX7nv8YCXAixG2JgHG61v7yLFyJCiHdrCXeqeVy4"
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
