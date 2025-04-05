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
    "2JeyDSTQginZVR7JVXxDUERTwtd85V7txZc1DQMuWLg6qBrCKQQ8biuArWnCiZnAtUKJJ8WauggP2Ke1H86JNWSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a3nLu61Gjaqf8Y8xmPUZFs6Vdfk2RFD2T37E6ecVEdvzoShP6jMr98qEfV5R4dxupffuEBxgpwJ5U5bMLcZGews",
  "key1": "3iDixGZe1gtDJuALNGYCZrA2d3P9vc588FWqqkRkHNB3y6hKN5ek271cjJUA11jGxmUkWBew595zzPzxw39QKU8U",
  "key2": "5oYueqRJvSMKgG2iTc8RsvQWcMLqe5RYi1vRv7Hh6YNEKYcN7ZVs9koDUJ3uWYyd8n6HK7jSx915NWRdwgvoxUef",
  "key3": "5vfRygeBswMC6acu64nMRVXY3E18YLWJoCoHzTuaor8YPyPo9Gdtib8vYcA6CVzsGeY9E3hWbuJgD2Q4Ns9HWsik",
  "key4": "4vD25CMArE1J3jbAsfgXxVRUEoKT1rXdRT3V92BWeVQkwkmnoQcFsAYjm6vopE6etYAJy8RkdDrK4zMV8L6BfiL3",
  "key5": "mumzhk1Wz2kt4mLETBMxzzf3WfXoUKKzg2pRErZswt8u8ypaP8yg3p7ZNvwowXedim4Y2RVYMSnYrtX2pyrJkkz",
  "key6": "4wV3paQfEuduTrAamUyVhDqBTmhKT4Ft4MUF59TNSjHCfKRNLzbjP2jDzU55hYJ1UqkpJRsd9VgYhZaHvBL1kdNH",
  "key7": "jxW2oLu6zQ6ftJyLjeJaLxQAKeh6a7fuHTsBpi3HzhsFvTcnvt3PMtUz2bSwLDSLxD1o2svRCMH4pRQZRWog8qb",
  "key8": "5NPNXSmAvG31uZ5M5BhsbriVisE8HJWHyLWgE44DAovGi7NE5zm7hCkmCNYHCLBG1nLCSGr8Adt1qJK51Ph9bczr",
  "key9": "2kDPau49M8n8Hw25vua69G8iowKizLCWi2sKsb1NRaNEkt3hSqJDxMukqBJXe1KydQSm8gUdqqUMMkucwJtTYpdT",
  "key10": "2hfzeLB3s75qoSSYzddFiaBm32seiakmFtqu8Enn8s2pc7E36JvXYYfR3LyJ71jmDkVixpsJd9f58EnKoyqCdBcG",
  "key11": "2qUfLDkSysBsaghSiPdogTY8qaV5pYiJX6vEJTtgcYZxtnyCAZZAo3dMKzT3RJbKcycz5RNSnB6xDZGAAxKvVVTJ",
  "key12": "CB1XmtoKxwST3ojCiPpJtj7EzjJBpC5gbYajAbfg17XE83w8tEyaJtHTLTYobuWDTVEFQE1mS1sbxcRcHagxkRB",
  "key13": "fHuSGcSBjj8hMPuZoVQXJTUL3sa68iat1Ys1SGJGTxaSdvf9SrN9Rb6czZq9cxTVccTKtiJhZajLQJ53ceEFi8i",
  "key14": "5QNELNkZv8H6wtCZLWaJux29PaiW7EbvG5C9mkpXY1ugMQMhdjXUjVdFzCgqWdSnzskSUWxZMeSndSY731jumz6s",
  "key15": "5LSHG2HaddRhEQadkdqdSekAG1NyDjyZNMk1byrAekMJHvRLmks8Rw8hN5HuU1U7STgZMJwbhfkumW6WPb8w5E13",
  "key16": "4G42vGdHB7wjrvvgRpfsgv2g4ttxUU1VSbEKuCCmnDRTrSc4JvFk29wJR2KxfbAUD4UoPGxxT4nxdX71ATL5ths1",
  "key17": "5dLX3PHfM5eTudbryNEpbAh6F39cmiErQPytemiL22haMwfwgCpqrc1tzp3vM1aTfiGn3KR9y4wEt79omMEjWC6s",
  "key18": "5suBJTBzy9expB4fXZkXfwZAZHS3eZK2rKa9KghXCmeo8Q7NiYnN4cgNoMShM5GFBDiKJUG1Rkig2GDBrn4UqTyu",
  "key19": "2gpqLBAfdhF21UMbxDq3fgjRc2PYQhYGbJeTpGFzzBvtap8yrq2DvS9m3wiJh2ZGPFaUmwczqXiVSiM1DUVuWw39",
  "key20": "4L4GZ3A7zbnS93bK6FccGTCgQjHkAqfNEqFjizACrU6F2MRgEBWHxVSKoodmnvL6QPFntBM2nMrNC41h6yNYvTon",
  "key21": "UpgF7EfLZ9uK1sNCrGCxkwJP4HQdYuKHpWaYWiNAGjR3SPFoefnyxTh3uAsymQddXwoPqwtc6fqKagV1fMEpQke",
  "key22": "5am3zTzkDLRW4Ky7uBTRqbBFPen1PrFuexSKxB7dy9JXGA1FjRTZjvQK5uTqGDHsz6cne1vJFXTcnt6uxhPeNXyk",
  "key23": "qgrzU9aGgLfBP7tHTi5UYBfdzkgnv3MDbXog3b9KiYqSsQdWLNPN8qQZoQED75KhSxei5D1VuNpSCS19CXgGC77",
  "key24": "3ywSWe6T24j8WTmaEwYVQRksW31d6ausoVzQNa8u3TqHJTkszwiAHeP4LhouGNkrZXB8oLxHJMVDrK5DQb34GUMs",
  "key25": "3kSbtNECHhoVYWbKxWbSREozigHSuBVETBoffFgWWYtzNw8VhVVyTX3GR5FGwq128QRWdHTHYb9x3nmJeReWQ7Ts",
  "key26": "3Yw6WEo1U3MYjz8c2beqTPSQqg3RFbdhLLoxrYQ4h5VwiJns1TLgJrS9vztg9RoDf6pQZMfzxqg2mfzdqmzNQ8k",
  "key27": "NZtQ6zUT1Yjjmj8wQAF1NdffpAE2cTeyGz391qL8B4ZZZJopc2VEq53uD4DWbwRZDhLVUfXEmUxAYfB1XryEDby",
  "key28": "5gjZ2mcKPnDjYXY7mFeCvH4DzFM3VavFdDwHK9gxqdVQjCjRTdthscVtmmRWLv3Z1mDXts7BdN9nqdWjcKygf5G4",
  "key29": "63gFZbHnBqPF7y4xNX8grENK6mcwiqwMiDmt9uGaPFSqibjPfQ7hr5uYRszbt45T7xVR3VQFuwYxhyhUMib4nHNN",
  "key30": "5CDR3EL9BGGFHX49S9zeBPW7L3SEThsPcPaDiwLNpZZ4QLsncdA7DQXWG4UXZhhVjNuzUkySdw6zjxAuiCkKBeCb",
  "key31": "2eCHgPGAUvYb9KdS7XBind3wG1rKUCfYiWhdEaNYmYVg4LGFmFumN7Z5ccvP8qLfYoheyv62pZbXtmSEDrG9AnnZ",
  "key32": "4EioTFG2bMNamnY43wrggBpRUbbkQGxzoz6FjzBesr6RspdC7obzKxdFFof87nGqdriXsaApXYR1iXfb2ewDruMb",
  "key33": "kUvt4X7mYRR26RQL1wZQQnb5ALty78gjZPcoGdF9vK6pVKB714i6KGPxxPNgsUFBHvUq18EV85M9QU35QoS4gUk",
  "key34": "3ngWYBUrSLxHYb1JYek4WRE9JhdrLkUU3tkfz46QSj5PcxqFFEhSs54ZXWsgyztgxFjuN6z1eLhydwCkdLbfy5vZ",
  "key35": "2gvh1fvb1NaKH8YhNEe5VS7Fqw4Bh71RSMDM4JToSBEg2qezgZKqPRoedaNTVk5jnsKeZnm58J1Drvh9otMSkBKT",
  "key36": "BT9fAT7RAFgMYwm94JcRMc9zQnAKBwfn3Z3gK1h6ePhuXtHTLABLiJaidpt1rZgLpy4uoUPzGPBZhhcod6gJQPx",
  "key37": "MF3EpnFwuAybTqRwJc2eSu1Ywk1gi82N7BBmCnj9QDWRPYy8PHDERCZzS3RqP7QygHENKRAmALvutWbA1i45NDo",
  "key38": "3WKFz3RPpuaaXt914VAPLZz2rjSuu9FXTmYDmXCSc9rWQatChUhthZA4x3VdzabcV9Z7Dx9k8dzDRPqFW3c8LuXH",
  "key39": "2xxwVnfCvUi1BawF5sS4aMhTawB8s1kydcfATcJbLws72LSL1QABoX34FqHcVTw9rvqLBQS5dPi8XLbZAN9QddYW",
  "key40": "3z1TMBfXA3KJXSJeHmHAy7pEhdq1Y5brfiiAG4hL1dFSWJTSLBBhcv9cE34VSAKoomrYSSgbok9opNcyxLiUJFtx",
  "key41": "3ycV7GLChtwhKBXGbrfE21XLXpm7c4dS94fgBCWioKVYDH9PmjLqNHcz7VQgsbF8tKrEh6z9P2CGLMyLQWtBXj3R",
  "key42": "3yPkYxg9Ds13eQao5vvrma7Yo6u6GFYJuueLb6kvaNJ4ciipbYmjKJU4QJw27LznS9qnkEP6EJ3QoahRb5nXSkhu",
  "key43": "HCtGw31xFrrqyZYNhYcNisPpRDHuxKxWd9kEbPBfxiauqkp7dR4EUGyEN9i6zncaaRRtU1JykUyLQhEtBCgqEGY",
  "key44": "4ajoLjE37reCcxxgagQgCbRkro3yK8kdywoQZFcLAtZaTWViaqp54siTbwkPGFDRUV8DLTEVLRruCmzcLsZbzCcR",
  "key45": "499xB6DZ7STAVr2QQBbnikTKtywXjEP47q42mTwFFKSbTk3kfBvEE7RUr8awXHeqzcEDqVz1mCNK5EZukr3nAToL",
  "key46": "5EH6n5XAAxy5WHMHKBaeqpLtxAuh5t37VRrB7Tg9dcVjH4acCsdJsigfQEo44twAKxQYy2JDZSz813ZYrDtim25Q"
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
