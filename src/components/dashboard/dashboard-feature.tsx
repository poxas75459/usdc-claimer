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
    "qdsai5sCXKko9jNDdar4PyJq81cyNfddSJkmBhe8gsQ7FrQXia8zxnhX3NSMzr9kWQ5Duo3QUA8A3SJTbSMuypA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ixQqnXo5j1CsD6bqkmzqi9SpwBpTG3zA7JoG8qFe113eSAWCEzqDvr75151hiocQRDQacSwgwE1amYvnFZLJ6xX",
  "key1": "32Piq1ruFnVYkhhd4GQVbFJfykWfRK74mMtR2XpkraxQdkJz9JLTNy65idxMwzxsLfXLSQbUCxWRpog29Xk7rQdc",
  "key2": "TVRKzzEehgUYZMpnhfg9jBEFkPgdTV35mmojqny88MxyjSxEq6RLGjLye7eagCCUM5k1SdteARQKRjxr888JPbY",
  "key3": "GXGTbhWRfZZTSee11cCfg2derxspTxzt8DZZLWTEhZpagwCFQvEbYk3U8uUdc1NV1HKr49DcxzLu6udRnCXp7xC",
  "key4": "27vPRLRzYMxQ4YktjLZpM5u8mKc9oA2L6NtZ4vSP9GnhJ5gDafeV3YHABxjU2dz4gTK7PmjkGnAhPKdwZyRCwNP1",
  "key5": "vjLZzLHrN9TockCvQSfFN34jDDCUf71ohDtbgxx7E73fq9WkC2n2taqhmNQkKTDioAiCLKwdaxqywGC3JtBUNnT",
  "key6": "5wehUp7Czd1UDoKhQJh8d6FtaPwGkUi9ksSjSvP5LCfH8F293hBLyvAb9Yprst5RsvomPHCmSktxWJuwb9DsSMGx",
  "key7": "5zFCSpKTTwqZT2Z7H1teLMmRbFq3jid2foknmkkCnCM8qeU3N3his9jD11gLzDtzr7AgTvGsfrUNxAAdmCH7Cecn",
  "key8": "4sVU7t9DjoEjFPsd3fRwV2Lqrgp9wi9GERLhKArdVdSsDKXLSvbJKJrNeb3o3MFeEJEQxfoj6HbzWJpZ5i1DTvtR",
  "key9": "2sWnmmgqSY8VFN7dhpiHoTZDPFbBwet7fjfENJrU1wbkGEvurfJuDHaKbts7NtDSpG5tY3E6YCr3MnMJKL37kz31",
  "key10": "5PQyiMnYEKzDTzEZjmxm76HTAER4oxYjtBXsvc9zgTAZTTTZ1589XBthmotgi7esbddYsa5QKLDcWBpvAXQGmY4f",
  "key11": "3mwD75bD4uSmL5igKNo51bV7VknNnhsRBYmmtsYCyp6zoyNVGiztnikaQemBPMGXbPN365FXaJ6eUMqzhGqegr99",
  "key12": "4yPjuEfjPAqzyhoDXgjqFeS1zCDBEuwyenHgTfwwkESs9YsWV3NQ8og8DmME5X1h5gTPpiQFjCCyHJMHoavigHJk",
  "key13": "29MtUoNu9VoDWYFWJzzTqEjsP6VLSnV2A2ataJHgptjbvDPc2PvLLZV5XogTX4rfuudxzMN4faDqgSvc71rjedMA",
  "key14": "5hkyizsLeWHj4essEkrgKiDqYtcRARHJPcd5YG52TjdEjCwemywaiGmPHEu2jqjbvBsRBX1xR4g82FCmUNn18anW",
  "key15": "66rgWdd99ZKXrYBszjJLqmnoyqPfm3K45z9eNKC4Fc249rC5npTk7fABR8dWijpoZNsQch3qNvepoyj8NZP2jg9m",
  "key16": "cAEr5rhUL1qatR83224TPuzzAw1xvSkRbTEHgri13vbSwmhMtXZoXHaaPpWKrrfYT4pRD3hMcj9DwhhdU2us6ws",
  "key17": "5oA8j2cxike7PxuKsVWCZ2wLmtLdjCYH4iCaXmM5nN8TxCCx4fwvRBbuJmJRGvbPBb4vvTxuudCUPCTmW7r368dB",
  "key18": "5MexhczCV3ic44bpSd4AzMFdPYFLmmP5mABusoZ5VhThv3h3q65Erwjjzn2DNyV7jYh6iKjqWrGFWVJPc3kcmy4A",
  "key19": "3JDxXF7iPxmz8CFqXAnABGtF8z643Ye9m7fGgjtJ1TDb1q1MpTkfY1mUXwd5d9efKG6b1Y3GryB66f3dUULLYEAo",
  "key20": "3AhGQz3PmkYSjML8TDY2Z2CkkMdoSsUbsFxhEWb5SVoMri8qejKN8cagLNYpNwszhmjtDQtTZ1U8xv6mf4X1oYZg",
  "key21": "3QDpfmKtZNGokh95iKGzmAjZDSQZA7e1hSpo3jWXDZQbzqvW68sWATxNTgT8ruSQptWqfzojMGDXHeCjekEkWys2",
  "key22": "44rL97FsPt3SrvvK1Sag9c2cbS6KnbaDQW7qhhC8Skuwsw9x3CqjX7nw3ioMZ6LWtfp2Zibuf7Ue4QnsmwrvNdge",
  "key23": "25ZqtHAW2XA2vuhuFD8Q4jeAoDUdsCuTLAvs77DYR5DRzQPLhtc3eBunnso5v1FET4JKdpEqS2EKZo6v5392bJnM",
  "key24": "3cKrpT9xCfueebwc7Ax2XeTYq6kaaVfAmvLVx9X5T3FJ9fUCLUYU7io8HSJVGR8brWv7CQLC5pnZNBo8pXMdnjqi",
  "key25": "4hXphnrLKpsgQTavaA8BqSQzPXcMWastzRJeW3wACrLmG7rzApXB1wQXiEvo5mSnfHf1cZAC8eYtTz6oB7rbSb3F",
  "key26": "3nNCzAYBvUG7Q2xJG3iscQF5uJbuFPdKny17DVEpozXDWSfi5hwB7dvEkQLJm2AzwNJBoqvbJQgkt5RRzkWSR2y5",
  "key27": "4UHtW5AtqTYqbhwuZp6CSZHWU45kgQGhbHF61htCoVuDZhXG36WsZ76RrYNXhqvpctkte5fKi83EkcaEPePmAwZW",
  "key28": "2yktVVau7VxNEjVJx9QfdiAKdDnMDxP9qyYNMsSgz2avwU31HpMNC4gjuTdZRSEuAAmat93oY5CPPzc9Y2piqBb",
  "key29": "3vJJupY14DKx5piuVkYLJcHiETZ9oNVkB5VhCcGcWUpThPbYF3wzonm9BGqRVaAFfoFUpWsKcy3urdzBEjgTcDsr",
  "key30": "gJ5pkuUdmanCvMc5iCanzQcJAyMJQVSkT1va5TH1wmvnx7AAXdojwrTru4kYphSJJqYhazLAm9WDkNSHTKiRFTZ",
  "key31": "2cLysPDrsvWUXNMFULQCiyMfgQGR2AURVayuYbp176DoQ8wqL35vcMeJDjzQMT2Bc8Deze5H6ZsjpE9pqZvPp6vk",
  "key32": "5yq5WuX6XbxCxPKyfjLBLUYsj7XouMgaRXrMuGYpk2yEaNkjdjXxjigjSib45XDo7f7o1fhtNctKF1Grdk8bGe87",
  "key33": "2y3GSZi95UP5qbCxKoZ8Pq5o5EqHEMKtat984Kvi6FssRAuvX2cYdCC84p2RnwoJMnCPg2paTgniixpwyWAsewFM",
  "key34": "4iT3NnsGqpcgtombhCTJoWsFM2a1QJye8dyqVyjN4jBZvoToCaAhT32KuFSPLSGS2DWgAQZHw4p4aZv8uFeECYDz",
  "key35": "4Zms1ooJtNzcdsMSX3gQLJC7SsWFtLgyhqDAmb6dhiWzWbkRSg5SrVW1Vix1W95ka3mMBMc369iqNKt1f45DPkNi",
  "key36": "37Ufa15hUFknzqaCgJuLU3DFYpkysatrYqUQkRUhRgH2Xz62MHPfpn1CRJER5emaUvFvPnpMQPj2uekBgTUMKW41",
  "key37": "4pixUyT5TQ8rmNPGVQyHcrAZ16ZqEAyri93e5pV77bAhjXBaEbsawcNEZjJ3fXuSkxpFAMS3epxwMfmeSpoHjhvd",
  "key38": "67bLZoTMQ5MAy4Dp3PvfEjz7ddea7jKeu7TtP8doS45uv13MX5dxG6Tvko7F6uuAEmPDrd8PbtpkWkfxdVnSdbUy",
  "key39": "2gQLUHHAozPmU2EUyr7ewywvGqv5wHjLB2ZBAQnRAdSZ1MbYcq1e5EEQYjma2j3DxtVKTosn5v8yDBx2oduhHurj",
  "key40": "2oLMKtvEWFwXiWoULKEAkB1VhErXETBcZP3Ksgrb16h1tPjYCbmgVPtkrB8QoWHJiruT1TzbwxFsrPwAjz76Y4ic",
  "key41": "5Z59RTKrhc2ow4iJ2PcLr34hk975g1L1zaB4uzczXPf1SbTsFrbazoC9UUksY4j5z8PyaSe6ExqwSu4PQZwF6XAL",
  "key42": "3W6JMFPDMqRmcTrADVUfHaq98HLxF7hBVhSUQvzk3vfUqRFyhNQ1y1KEuS7779zBrnw9rXbff25pTPAqHCdHEYvF",
  "key43": "4nWcofM7o1A24yBNwSpZn3ZYkq6gZMGL2qse35gTjKeBTR2xaa6LL5vhTcWMQqkHaZwEBahDVFfrMapaBmcSPK8B",
  "key44": "3at6ftEYiXQTGT7r5PStKWpDRLaaDgQyBkZB9FVbDApzG2ru9h351bSpHZw8bR8ofwZLD4LGKKtkUxbRUjSth3QA",
  "key45": "5rXUBAZsE6YdntvpCQmmpGRqP8iubqDW5Mz1qcCa866xT6V4pyRNpTvjwEfyo56itkJQB8mu7B5UxWdaoLTPdtUs",
  "key46": "5FuE9fVNK8H8krY6CxbFuNNToSpVTYZACThpGwK9a42R5CWZ6Uz49MN4LAyjWs3wcT42UDSnMYmDtYgS9hn2wnHS"
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
