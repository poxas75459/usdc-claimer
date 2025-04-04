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
    "WzwW2BKbFpFUdqd66wLRPEa6nFLHQqeG8AEo1Jjh5t6s6zun9ZW8qCyN5Hbh4tQ96mxnxj78pFNSFqgUsfDRioM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zRUn2Uo3c3HAP7dL3P5k96mkq9dhRHCYCHkEoxbd8ts9kwNKkgq3PHfJ8bc3iXmkieGjmjbKhspGEeXeRRPiSog",
  "key1": "5sxc5WX4HFasdh6qYVC4FLnLXxQwYkkb92i3SsUMixMgecofBFJro6CfJpBC1N4dt4x18MxbZJRsTuNJ9WAuTW73",
  "key2": "5v7XZyEaBfvCKSA9z6MFPY4qpYmUqBB4UGX3B6KD1esWGegxHkQwSZDy6Wt8xKvLzzjW3XtA4kWHnYvYXdtWc7HF",
  "key3": "2tA3bgKkYaNXh65sE9jo4AWD4uxyykba5RCZeXamnTAQZkcq1xbRaSXvjoD3KM71DEp6Znjw3vBBtdsoJEf2AjNf",
  "key4": "2gyZMXNDw46eUrbJ3oJotuKnm73h4mUHShkvxmcWQWPbyQzJHTmRFmyJVqN47NFMb33F2Ez6h4iLEr5eabDpJVrX",
  "key5": "zmyCxg19Tjfih8bRaAQdLX6tb3DaFERTKre1CTcz98dEbke5bm8fYfzGj4vAwxYk29GkTG2P4FrozXUN1GUdqSa",
  "key6": "4YEgfeZ3XUQTGjqB82FFEmZZHojokQyiAUEjFEWe5hzsjNP2D2GkSYFchcpzMqEXmxyo3ANifXcBWr8zD2kqYRmy",
  "key7": "5miDeMUXV3ruWqXsst5hFjEAYaqguCo4p9JWwJFxD7g2J4riD1cJ9GccjLW2vSne1K8ibN2rjC3SobimR5mSRELz",
  "key8": "3e3YeAh4D2gH6e6gtSuTAadiu7GbhQs9mx34AYYYnSPcHKh5NZmrWMWJVRk3qsU4tHqzNNitXPQzbsU4vTrofmie",
  "key9": "4AUJURcf3FPkpPJFA4LRFA1VZzLuJ9KkuZNBgf85HQeHAz5qr5guEvE2KnJLtxrq6w7G8XXZA4mzLSeJYipDJr5w",
  "key10": "4fmdQwRySMYwemQZ7kAhRCUqbrpZGZVcu39zVaa3GdYygz8DNmFNSDSeL9oJbB7HQdrtxASuTPbgYakdpnSdGwdL",
  "key11": "3vJw2eLFSvcyeLQ8Z1KyVcUoiP3RxD4aoCX2ohPmkApeHPy2WtdzriVzEaUfswxiCx8LchVdEJPRZBUcxMdt2qS",
  "key12": "4EzBZh6zvjAyYmL8D3eqVeXvf6pBguFmEosVGK1YxCrkQkwJsqpqFtWEpD3aPJNqmDxXqB9N6W87cutPXumwjADz",
  "key13": "3TwBVNeSY45fTgNQzZbWUvy1CPGsBx7wbaKn7EDA56LtDR1PbN4jBgy4XCrfZGbCAsTPNHUt25px6PfRFkhvx7Eu",
  "key14": "kRhgrfeaa9xUh2ZdDjA21aQPdagvgkbc5AcXRTRxhap1yv7ozmUQFqzGeUGBZhNEZuAow29ZB11Y62AE4v9zan6",
  "key15": "7hAXBsCDpAtkb7dK4fquzSbAi4bqJ1sXrwGL2rofebgB33Qd1c3HA9yJr4LoE9pHZ83ZQ4p2NqJaDk2ckWEUB7H",
  "key16": "47j1v8SSFLnrvGteQ3DQdbq1GMrD8rEFgPpp5y284qWegqZb7Npz3v4mNCEdxWSf7n61s35isc8d9tXWypYoXcTc",
  "key17": "38FJYhYzFmMPS5ihFjTQvU81bkKAv2scRvhqueAJdLG1yyLskPmszctw1isXgnxWFoX6dDweZGTXybHqdtVscQAo",
  "key18": "3VrWxx8dywSdVQgsYGESCBxvZ6stn88TjRccVVLZMjdoPMfk6du9Uu4Gx3WbuhMeRtNqAVtnaeH4aymAk2HpySad",
  "key19": "33aMbe2t1MYsPkzuCatwxxdfHGpGXHbMDxoyVh2MwTpFmCMCUTUmjFCyjdQrbfGGZXAa5FACdB6bUkXvVcGn8rUX",
  "key20": "5CgxkgjXNRJ6c3JGdhEZE6scEHe6G53FpwNBfzczyKtaGacYu8QKwDpbsHgpgkiVMyn9nNHLhczrJUMtQD98ftoT",
  "key21": "4ugeSyEb37eZ2oivv4gcyNaLkJoVZHLG9NCuDKXd8AVUbufh2ByZb24vBSd6t5oZ9APTL58ZfWZ9rRhsByCq8C7f",
  "key22": "61ge73EZybT2sZ4BTgxhXaCdDW6QWL3yuJeRpN3c2rpisg13kDeexWfqjvAkqPpuT5TooZ5gjbR17CkZUcFCJVq9",
  "key23": "4zvPe5ynjgXJFJUmBSupHGG9QeF9UieAXgnfd2qJb1scAyMcXZvRmGExPVsWiCaHq7BCgJQ2mrQz1wuNh5aG6yfC",
  "key24": "4zVdLTc22cfhMnLyKTvyqy1B5ZJeSiHt969F3zMoX917JS5ZedDN7rJUtSKjftYbNZ8J8voRLwmmCMQDGizdHUDW",
  "key25": "3ZvXFq3cPJHRSECcyDrwSGj19UeH14hyYtEw9zaSx22EfVHV1vXFZQbxVtSPWCxsR1qZoRLf8KGwwQB6VemaLLbX",
  "key26": "sbkpYfa1DhWgC9QSqdgu5szSZCkc3K6Q8qjQdNGzFJb9MJzo88sM6Vv4mbnrYwTXBoTsUQHSZf1dfa7HiGZagg3",
  "key27": "44hv5PRJsmBEHp44XZp9yucTA5zmDcukQ25jAn92ncNdGTojfAVW5JPMQaMRsd3pKzjG98S6iiWzNihcXPvkAYR5",
  "key28": "4kHE9QLie9qMMaUgiTqibmoKctzD5Hdyo9mFVzzUa1roiGJeJ5LHis8bkvmkx5SyM2sYnFY1trJV26C2AoB9HFhJ",
  "key29": "3gKi39MgYu77ywvSBo7rUk4D6rWzHgmohSEiEFYNwYdVhHU7Rd1f8xpdEoo6Fw6LD7F9LcqzYPF6BmHrk9Uip4Kh",
  "key30": "35kEcGb5SKc76pgjygytkztfEEhkrhEC9StuGBANDqSj1xBdMKnfsxnKjXKupseisjRSFCkwL8TxeLZn5EHgPgSp",
  "key31": "3CxWAX83mxj8WdFrn9DT871QbS52jYxJpkfy84pce511uDTaqdHixp2NRXmgKN325Fo4X7JuyuvgnxakBTvokMf4",
  "key32": "59DYKmqePR7JvV8bwnQArFipdYwHmZxBRKjPWhYY5aCjgVBtS4a9xMqLdAvu8JdR7XQGV3TX2g4HaCeoGnXdREvp",
  "key33": "2xDa58XFaNjrHjmH9mXPPgCAtFxZ32SdpxKxyywwXjcR26GqqLVphwWRXdcybqtzhi7opXeQfdx1TudScjwQMJQF",
  "key34": "4T9kpCp5gQku2HG4jE8spEzpGLpCNfWAk9i3enBkdaZbdbVr7qG52oP2vb2NYa1eNDDp95xLUakTGttF8DMtmCom",
  "key35": "2a9MZ3sCQbAyfiWVxKoyuTxx14njiZaPQh72NwX6NoiKis2QZ17nTwt91AommcyKL5VfyBVRxcQctE4u7mvFc1N",
  "key36": "2JJfZ2qUMtfJNK1fS8HxB7ihagxtAwzNEfZDoXhjVAzRTrwyhYGcCv92JyKtC1GwMPggdcTyQTzANbfT63bPGv3X",
  "key37": "3GB7EMYenHJRSMeRGWrP3Q1LmEwhNDFeVHguSpMdfn6CyHD9dwSufZfA1qcBKYMaCVm6t76SgtTXNsbngtABYGbo"
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
