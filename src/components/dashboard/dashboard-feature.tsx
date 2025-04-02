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
    "DsV1iiqWfagXQZsK1xZN48NwfdWKhVgAM8vc6g8iYrSqERVoL3MYem6LuDsSnhzSvGxakNYJm9Lmj8hbHzUhRon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31N2Fj3C4zJ15gGQsHp4ds3vgQniCQNfUUgRdbr63MN9285SL5r2BojXEwr7R3vsDYvxhWP416nzP499fwy2Z1yH",
  "key1": "5qtJUvqVmkzWsSguLgGyUtEFjqTG4pksS5rsNni4ZDWf5X3LRoKGa3iGiaJtwazBUo5LtVXCg3YxqCJ8pxqC2Aek",
  "key2": "4uCAuv66EjF4GyJmK1pHCKBH6bGmDW17oNcR4tXCKo6tV2TkfvfYWc86zHYHGib8UM7rSQodXokURe2whsbShbS8",
  "key3": "5xPdbvpPBNChbJS64LXPSMxxEU9CaFNwtmnjvDnFm7qirXNZFA15VqSfYWaKWkJxeaGNKqYEzVKi1EALsGRuWnso",
  "key4": "3gkyvze2wRv6wJEtaWX2Z6oSXNepDdQqr6GcuHfNSdh1eeFxTGc9Dg1o8VuEcFWjqzyEeiJcTRJJiWqFvC6Fajq",
  "key5": "2aCCirf6eebytSq9MAFuCHHMZX1XSmDYTMJmypQKNZVRQjVguvNrRTw3bpM1m791JMRPPy6F4gazaYsjstaTUshp",
  "key6": "vCutQg9SXEmXqnHKBPcekG6DjppnZPVjLD4Ly9do32KkobWWyGKqYQGdCKY1KM4bciLwCskkM8WbrH1TRHFyhDe",
  "key7": "3fiQm2tvpYfu4CcTnWA67FjoBJyMprgXCvpWoK6Aew26cAKwuN3E8am1ZRCBxWQiQeEpMETRDjq2aJTKojp67jzn",
  "key8": "2GmY2SvV3bQspMD1eVvnDCcvDdM9Xh7naNU6E4LRf3iee6iNk5EQkG5USZ6FywHCpcExyjJtY4mU43Pk7gzngr7T",
  "key9": "3XTCBE19Pgc4zfHPBKQqJaWDRiKLM43F82Pr7vu1QAqJz2UYiwtY7xxrz6JE3XjLuGS2p9GTG75PZcYmi6Es1XRL",
  "key10": "5QSmpsGfokS6xdZBogXisXuGyrzAnwz69yHjYCGoZb6AD5vSfoyFcLtt9shdK8pYZAJSW1zxy4HNrbujMe1tJnTF",
  "key11": "3VXSkEo6MMgyBWFr3Y8vc5D3guLDoDTDgrKWB3kF87bQBNBkSWZav2Wp1KrQjxLgSUKLSJgomkrryKRgnysVZeSQ",
  "key12": "2qCNN1MHeWHh9p1T3GBimNnL3amVWqZEJTZdtc81o9jtLjmN6Swsh3XBi29YkvMUb7mY5ykpXJ1i9Zb3VVU7Tqry",
  "key13": "SS6cVsDgNcssJvv6nSnWqtRChRKuAoJDxyk1CwJC2aK2oEUmGt1zjxvfgB74JEThTCyBeZ98BTFCdMwvyLgnwXE",
  "key14": "4bHSWiyTg4tiS6CRKrd56YZQv5hNCy3FQ56r3KNTJeDT7TbLzhxZiQtboNNvJszFYfjc4ZzxhJtXXRUGDkSnj5aN",
  "key15": "2zCAfNWaLx3omp967PSv93kTEi5eqUbtstb5TE1ZC8okDGTU4vmo7B5xdNYAJTUP2NP7ZTCwjQj3G83ckd4osLwD",
  "key16": "25YG1xVqGKMKcEqeXHdYLwFpWe8GL69TTBrq9foY5KmEPebKxa6WBH2XSGcJYLcr5gmy4yzAdyWni1cnTonrXmgP",
  "key17": "fRTJgYCSfEaEhQUrDs3iqQmiQdQePkSUSitdhi3ijGYbS2p1ZRUAGpbmzaqbphth2SuoUhDW1wCML1BXQ66TfbM",
  "key18": "2owFQHxZD1LLdKfX432xAmVh5EuLZXKTbz2ZbmgoMptMocCLgTw7cqzQMHuJXUxJCuKDvoE93NBZUpVRDkHCpGuZ",
  "key19": "55L5VDMHXdD8mtABbzN5hDcTqD6rBc6QKR932iM7x9T1V8QZYfm3WjS28gBJJYqjDdLFmxT1PTHYnT837YHR3yQp",
  "key20": "4YyCXb8BSqi8xz3NRKkeqDXvBzfw22Z6koF74TqRbH5VDbJmgdXvpKPJg2KWgxycrQUmJrqCYsPPckd6ePXS8rnN",
  "key21": "3Eu82v8RubpdARsjLgksasxZVA2coxFY7YVgu3WV3ed5eKT9H3anVNQgNzc7LGHqbe7AiJjWZQ5GSyxm6hAs5g3T",
  "key22": "658DAnVx58dxfXK9zEw4eGALLVZ6DhMdU14afU6BT62AzbresPmqHbiiKNnWY4nboSiHytBWzhj6gFjDVvXSkFbE",
  "key23": "Dgh276naRGFJoeS8XbPCATrKx5NDQ28QXieGyBy3xeaGhBjXyfJYgTMYrdgwZ88VjjCtZff3rzhYhmzzpEV9fTR",
  "key24": "59jLJWnhxDFoyfUDeCXM8iDaXhEmnT7uBkyrsJngSk3Cg7B4vXTnvS6cq1rQcA191T3xpDLtxiTSfW53LiQCYT4f",
  "key25": "4SxvbMZGkxJCQ8kVLJtmZYnzjQSyVerZT8FLmkTd8ACZJPQTagWG6XhC2kHjjb5agUTxxxjEPLGMthaY9u3Dwf6J",
  "key26": "2WhwNKUcScAcvzUqif8Mk64Av5Hd3SpHmwaBtjuTEQTsM5xPTAswMGjchannx7Uwx8ahR4ur1ELfPtwMKhfBQvnU",
  "key27": "3HbC5whvsSkWB7w1ag2bgLqfi6bcSLvcbr12bkiABsTJEeUCj2AqafAdQeveBUgYYt22qc4GeRwgZA3u9NdrxSBK",
  "key28": "htc21SGoGRgBjnHW6aEj5mdS2CuQgEU9rE3KhYospvZgqLaBxt3PPBetCBgkujf7Yf4Z2MA16biRCbfKfXGDwrv",
  "key29": "3cipX14M4MU1N6wXnrQLvjDR3bkbtSRvT5QssGZndaMFzxtvDEpk6bZZpWoTMr98BZ6xjVRhWvqtKJBvf7QGUTVg",
  "key30": "5JZeLwQoR4vZxHjZNCFyTbPmVMuvgM6yzXAPMP8tni9dBNU7xdG8okzjnc61XHSfYDtJHykVbQ4y89DbHJzPsCei",
  "key31": "35EBQveA1UqTmD8ESwjUnF8hYvD6jdHmjPnKG1xzpm7uTVPmqdFdcj5ngMnGakhwL4pdeg9K3okU93NDxLx49EtH",
  "key32": "5524xssASeapjaqE6pWsdT4jwrAw1f8XGuqs3UKnRQzyab4fPjFEf3HaA3ixLUWzniUKYBoJNtMbGVXfbCpN3dsx",
  "key33": "2JAKpX2r3zgtKBzjX4z1zTR3VbVLAEsXK9j5nPGJ7Uh5mxZAGgUJdZFFJGGTXcpPNdZwpHBYgRkPLHrvZ1Tj7WNj",
  "key34": "4LWkx6Bw7AwJ74FiXdJvqaBRSVKawyjSjvCqsW4vyJgp8EPxAxehAsRU8ourW7DpjQNVG5RkpAvPGkuW5tKPnYJS",
  "key35": "L3iUGxdBWfnsZFGp9czP6t7gaoV39gpULocHft6DKMcRpj8CenPejqM5BgN5PHKvWGoKFjneUiKJqJahsRmkuiT",
  "key36": "2bwihsWhR35kz43FAFd8KTdhxLCR8j8kipppLyJ21sSacok7uDXrag7yMDyVV3PA3hX8Fs35Dc2NdJxnXJzoooey",
  "key37": "5E8dhNeDYKWuQyuqKEP2Ki9h3Ebaz4YpihWDZsf39zM3ywrokxcTZrwz7TZ7xJyNk4GcSPoDXH7m3iQPfZx3zN6Y",
  "key38": "37sTFNNPzfe89JfpeBE2TKWzsZbHLFndHnAzZ1RdLnXVpZ5yuQSCC8DsBczW6gDuM3qxTNdahWWTtVvnSVe9avEB",
  "key39": "4W5eeoNWpbNxjs4eb2RNZRz9ztytFPvgi2GBPdRR1VxPzTxcAe8fgExcSoEBb5vQaDqhjhEX4Qv3nqU34RNw1Sm1",
  "key40": "2haZE9iJSa7odRhrj9Hy8Xeyc6ZhsoxEsbk9atPEadG7J66thUpZ1cgg1BTdxZcVBtJbvgiMWwp8rFVHSZhSZz54",
  "key41": "5YcHzSdwqs1kPHRHVPUBx8Ws1VFZqjahzP3tJviL94CC9arsSarGzHG74SRK6qQzxvbeRufXeCvYpKeFpsocw6VN",
  "key42": "4bN4LNJTW4J5C7boeXScXq88VFZWogUN1VGwPMEqZz3RAbQfd1aHqBmDY9ffLzof241DWLhFPvSzDk8kwXkhs9o4",
  "key43": "4w3Hj6cryJi21Eg4DRrGGjYnhiSpcgfM7tPATmVrrVKPekpYW2FmdDxNU2PQehxntw8nWYxJiX22sAMcoJoPbjNV"
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
