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
    "5as3cTDqcBVTLhGm5kXFRjkQB5Zi68uoZ2F6DdPt3WdRtQghRUhhBssz78gATwnLNgfkhB7PzG1RXGcEkjJrWnbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CB65AKVKnFAEmeBy7pzkQFNkGf9RBC3Jm8jsYNn5Qxb7gTLrigCSsYhrbRaWQT4hVq1iBBqRRqrgQ2qtaCRLzFJ",
  "key1": "3G18Kbyar2BqDgzNniHh15KTbN1yHA111YRq8t6Fqth7xQqLQoBHok9Pgu14Sq4FHwk4A2vLWbNHepWuLKux5Qje",
  "key2": "5Fdata2TWLeTd3bZ9Y8eMfo1krpYqiKgaDs2Haghr4vC9w7b7nKyQ1pUFpaGjHND1NVbGFu4CNn8xmtxmKuD7SsH",
  "key3": "5w2kPdBwsj4r2BeVhJUbdqF3fbipwnaqryYkpRN9pECFq9Wqa6N474FSr1PgMCNmL6ysY5j4zGrp5psktWx78n4q",
  "key4": "5fhJDzthDXh7mko6C8sGQJA9VGYAoJCNQMfHzP3YsLUg4hiYdrtqYx6LtkNskPYXuMCu27igTkWtp6sbXoyiiDoN",
  "key5": "2Szu1xc9ym17xd7sTVe8BYcX3FMaYGY3A374RjiZMnJUnUYFBkttLaxNBzhjw8uq56XnzQQoSUyEGAZ2pg5BxHJm",
  "key6": "646HJzJVWwGWfBLZ7b9kW56NrdwmouKTWKT5N7uTRFyBji1KL9VUonE7uKpFwxrikga8D6Ga7ZKXihrt922LbQCL",
  "key7": "4J7Sggxkd7dVuPbdRX6Yax3fezPZhuEVUi3hYyP8BU9wckKSynAi3C5nuZCUF1FY4CRGaNsX6cycQrWoA7hPXXtc",
  "key8": "4Pbh2x4vaRjH4Yk35fgAGtE3yHNmrvVJruH16k1YrcRnKH5aYhUgFPi4uf3HkE3hNnBPJbYzposXA2eBR1QvdXmK",
  "key9": "5BiX5R3nsJdcQqhnBUGYDzVXLhH67xoRkYkgfugE9yrc3eBY1w7Z3N4yia7iY1J2LyFFSgtzDuZyh5MZq2jMNwSG",
  "key10": "3uox8P17jGcbpjw1YxSsxFKBBjC6NJcGm57LyhGYAFXED8Hy72vMLpa7oYRV8WWv1qzPiyAVtX3qoN2v8auyhTLU",
  "key11": "2YAs2ssbB2rQbrYdXJh7Rgx6SYegFjTBVeZD6xUYawrCwHpaE6yEGt9ydTQCPLV1fdD1izMQ6RosViE6VjzwjWwU",
  "key12": "576yhCsdhRFj4dG1N8FouGwycsC9HZeYdXNNzk5aUCERhJzxFGHLngZMQzTREPdmxme8FZH3oK1hVghpedWCYCp1",
  "key13": "KTgNnua3iXeEku1jhmFCjcToGULeuy5xnx6VrzJjNC76PXiS27KneHWKRA15gaSbWnQtPvNXKVPSYfi9pYHpGGg",
  "key14": "46EPQZK5SXPHyg68hvWYXmxw1J2QZPUuwoPfCshG2nCfY9u3L4wKAVSSKmPLytfkCr6qNQ2yStLR9qFRkhKKFsma",
  "key15": "2F4E4iWuPCs9nwQdpZcJZ7KCEeFCSDSJuoQpRywGrGeV5cQH9Vzx99aU2y5Z6qDSkZuY9qwyCDM7xEqqycgcBBKF",
  "key16": "givx9Ng3JV4XbUCz7R84DChbKYBzdSZX5gWKhr7M6chZduJXeUGMu7zct9heJQJ3daTCJ4dHJv6phAEA5REf1NL",
  "key17": "4jDDdgtgUbJ63HKKR4H5kAKLiiXBS1gYPUjciQXpYGRaGem9Dqj7UUS68MjJuqnysJY2TPhqspwhmJpV58BN9aPa",
  "key18": "63jtL3VUzUBJoqYjrrv1FchftrqLdEvFMW74RkYeYbZVLnzfHGPep9L7kT73RgtX8seYWqcBuF9MCdYQBsDaHyoW",
  "key19": "52x2sAeVXQBjcR9kBhJtHCj8r9sNSAGujFZ7N2Jy7o1JsVR7PwL1LL5d4Np7zrXxnxeCncM5o2Ye31g1VisVdJq",
  "key20": "5HKdLD9DuhQfEruALwGB4M9bMv7ib3Q2dEUJ39AuqMSvGMBktXx2CkhGPRBEktPafmHAeYXJqXHXg5tXo6BCzC6u",
  "key21": "2TN2KNTvjmbHHoTvTtmrbfjGmfCqJdMq1SeK9vTchQXy93d6y5xZnAR8KB8zVFLW7ApR1hKQyYKQnAADQ6srNg2z",
  "key22": "3VED7XwzMp7mFodxam4619Jxoi6pRpyH8EVVzKbgHYQHhRYzL54BfzUAfoUAMv1LLtMce7QHuctFpAHp5i2ydZCu",
  "key23": "2AZC9Cz4yJZxQEDdNtruMnYunDurvRx74JTBzvSe7jhbZ7AC3nPWU1K8G8RxDkjchV6oQsZnqcyR4ujTDAtuSqLw",
  "key24": "2E6UeTxHEeqpBzQhFtqMxwfNvswsVb5ggwfX9XiGtcUu8A6wqDHjfnZCvMZi7ERMRdBhHC5HiQmj83qJtnx4mVPB",
  "key25": "4opsgiQ9LkzSui6RTUUjfrFgyiDa4Z8q7rgsd7tGxtnvnWy6hEMmNVou5xja1gJc5FVSmcAvjGUZJ9oVJyxqNpvy",
  "key26": "4qbnNDTMkba4n9afU1dxnoQstLMeff6NwCjjSnGxRiFpqZafpAeUKp1CXcUYkCcyR1m4oHT41CzfupBjf9f7Cwoh",
  "key27": "2Up2S6ig7KCzC6jcbU1AE8byFNnPHk5r8B7xNhakKgtKEWDLQ4CPCteNYoshK6WXU57TLMoSa9GvTiHm5F5RTBUk",
  "key28": "5hrwVCrGTbuhdEZZ8aMyQ8mRCPNqc4RJV3FCquxPRR6a8q4SQQKoMt9ddjdXVXHJjEALmT2AtrBeSawQYhpqDMS5"
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
