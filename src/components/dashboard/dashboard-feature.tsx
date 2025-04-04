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
    "5Cyq7YQvzTU1DWif53Qmz4PLu1GsYgASjpcdAAkUuqg9T4triybbkQkNDfq8PWjR3be6GZUBCzuNsiw7aCvkRWa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qBwPAZyaXur2Stzi7UYKJRsBSqtbpWsQWcYEk2xGbfiqSRJTnZGxrzbTDw53p3i7LQ53Yt2jfZgSDX9WizXPXyh",
  "key1": "4hGDiSbYf9hiaLTyW4hSbSkYCqoAFz8kc2CmhJsBLWiLrkWxHGDPTic3waV7jkqG3K9xyRdsHBMrbv8nXPNz3ab5",
  "key2": "42yRpykMJ9qtahu5PuZUP2Y2w2ZzsEn98kHC5nstLUiqyZqFt2SHLFxZTh9jT45MUQ2FZQqmjNhtZCztax8VY36x",
  "key3": "2jtaHqrXmxvWKmdoUN4xww3sS9qYrNzcZ7gmvBEuqDKidmARVoWE693jRvh6gq3hL1fDa7Phk1TfL3isAnQ8SSUJ",
  "key4": "36fXm8uZfTyEKo2zobNvfsoKp6yPhfoZqqVSAgsV1E7VnsAujMF2MGxAiUmw18tRG4oMrNcDW16F9CzXAaWLEiLK",
  "key5": "42qvCEniecNuiwK6mtHcwcCLaLi79oXgZvm4bxyVFwRSJF11Aj2enr9zDPuN66o7vYDg21moMMXMKcC7r1gJUCYp",
  "key6": "2mdju9hMU6neAucFZq8qBQ9uWBHA2HMeY3wr3NktYkusXLxUvtBXCVS68kfhrgNL1q7BMdG767F2LcM6cEaKBK9n",
  "key7": "2LRpza6sjsnwJgxS5Zt6MdSqKgneTLzJJ8ARYjGSFy3hUqto5Ko5Ak5UtsNoewjPFAHGQZ1aUCpxZGmHFGmietDM",
  "key8": "AucVRi3DxMJQWgwHTPmWLKGLzEAQT5GNz8vvt7GTs329yEtCTdXCDy8ce8NbarEp2U6ApJnvgWe3z7JMWWdF3YQ",
  "key9": "4G4XWYe3L2ZE1Jh1uFDv4FTzSXqpSi7R5kM6YmhJw5BsJhJvNidNeskSE85VXvp7C4kutPy2Ya9c927ZhqLANkfZ",
  "key10": "jgqx794esjD2kKnuENtLSz8bVfwvYov4JDTMPsu72GU9woZzeShPQkmkmKWP4Tuo8KR3XDLeEWKV1G8V947PQth",
  "key11": "5fdN6nCBB3xG7xAiCrZdBJU22VJVssoybWqpRtGzH6XzVMSo6CQqUNv8AX1sJFQx4sJnWfAtLnY6P17w7bRRcngN",
  "key12": "3MYP8TGkdk4NCU8PwtUjSuF3CgPkgoiUwVzgLE2aTq47EenR25qgyQCCeGFwGdzejgFuitDfHpqos79B2U1vrPYQ",
  "key13": "5FKAnRZpvZsFMHKzu9Ts6J7tcC1vrNe3uGWmdFDFedrTAPYGfc3cyYksgxRi8k5nUFYuYeAJnzbms7xqGdJWtAqE",
  "key14": "5BrKeHv32DaaEwNJMLq8ZeE7gyE26Mi4zBVFgqpPiJGfZSDAhqa67ZcrBNb8RYXZT3fijFWkLs7YE4RL8mYpTjQA",
  "key15": "2zwaKjTP9WCmYAiiSFDkXkJietfAKWRcVkomRmrvn18JRSVFxcAttoS8PPkRDdVJLHgs6LhuRhzDfjU82KSZvJWZ",
  "key16": "4aD8vQ6uK6cwaREGpwBpNoUsYiJhJDZAUd34Smq2GeAw6Q7h8decKnjd9He3MV3VpMfnw6NQ7L5HFk6B3ZWUmG8E",
  "key17": "BsVHHaF3bySishrH9LAfuHX6nnis8ePtdDkojRHfZ98Eu7q2a9bua5jt7CTHum4SUgtSjitiDV1iXzqBuNiMYsc",
  "key18": "TaMBuXgPnrd2Svqs4a5aCX4hFuMuoLV9AWgmfwC1MN5xEd3fzJaAMQMueARHrLo7xGJNGrNe6e949reUbi5s1H9",
  "key19": "5WmV4pxp8VGPwr5UPyP4pjbk4EiGDDVb3gmwYLVA3izH8Loxz93faZFcMepFnTnsCYhVMRCNzFwqHyVTmpzMuaWh",
  "key20": "5TuF7WyyJUM9hrppUjFtNfsC9bMttBs8qkMBxA4ph8VdhVzVwB97S3uwpb917eoNtJvmSS1Hcy1q2pJe6BBQZKyq",
  "key21": "3oyJTxYcC9RkjVRaKAQRab3FZgzTqRrPaiDAhSc4vnrhmgv3YhahmciaQm1KcutJSyScGJ36RMPh3BZvRMNcEo1M",
  "key22": "445VFsDYHncLomdjnStGJZTMtUjDNwKBn7sowUUZgJr49bkgQSk7gwqe3n37zwB4cxNeJj7boLhZvPJwSVs3V37L",
  "key23": "4C2A1efj72xSadGNaPnvFe4hZagyPCihf8QAbPVSSNEtLVXiVebXXEwDZPLwj3BtmKVmgJtP9CHt7G5eCN4kacE2",
  "key24": "64yXZazpVLbfarso7EVguZZZL25jk4RKvhoYuN6jhyH2CdMWkR78oQk65x1HPtxo8spNMXkpgigrVqkEJ2vLHGrC",
  "key25": "2hhTmUBBum7WzUJq3iroVNiP46322jyYhwuvsbVqwqVe83f1u2csWTU7bT9xuK6CxFqQbrGEkAaXwJwd4X3HA223",
  "key26": "2XmJF29z4pxbfKgh91aX1F61DL7bR41vvqKNrREWTMHAM8zNatzTFT7zwS5AtGzGz7YtoW3niXtczNLnkX39CL2b",
  "key27": "4BJ43GCbE2MErkP16DHqr6XyCkn7W8PG8vb9TTDFspFAr4S2YgSDUPCVPMsuzYq4xyErM3SsxoBK2A2mDboYWt5a",
  "key28": "4K96SPgsS5KvAx5duUowr7NBErZVqj2tn3dE5b1k7gWe7WXqbc2WLxKzz4Gu1K4VvPBfTVJLU7okTPaFxHUMyzbh",
  "key29": "2P2LSNgz6tjE21bvskLUxpffmgGC6qcHy5v4c1QGveTDtJ8c3EGeGCf8pCftB7cEt1kgq2Dxa9eSFqvAcEdB63zn",
  "key30": "2o2pr6aHfZUBknnLME76rNDbLuVgjTqZnDtMyWcYsmqfbQG9zwNzGr2stxTGmMgENAmYHQ9KPWMaSN12C5bx8LHb",
  "key31": "4xjE8xgr7JwmK1AnVRJNb6RzZUv4sxs9saSZcC8GxNC1AGC5NJmZg5ykA3jV4MTS782ZUqomkSR6FTGU4XBqwP9q",
  "key32": "4YdoAG1e8GayQJ7X2PZ1xDcpAVybXWCiXq6Em71vp68pZVneQifAG9C1T8okeaMBQf2XKs97hptv6YWd2Mp4LfpX",
  "key33": "3ZspQYWPJmjXvAbTAsdkh1FkxHxEfX8AfMfYTzNp3xEmFk2CnfRbwE5kXtMJ2myoV9vaKSwXEfRR7oVgrKLVr76r",
  "key34": "5UNvQ9fZ7uZKzVLFt8GYgdFiNzcJEWhmMV9Zoz5xSUDT9VkNmg7SVPjF1gAAg4668njrh7zSs9digxR2fYUP4afL",
  "key35": "4dfuXuNApJQinS69VTna3uLgdcBVFpFvG41BfoWxbnQqLLKVBtvRXbeGk8Uk3VJDJYnv4w9APVkFP4Rc6AiZMtJW",
  "key36": "5pcREDnGC6uyd53SiVuRg3fMHht9RMm55THbvQmaZcpxCcRFxo9AJ2qioJfdFkmcGzoqFhyiazkg6GCSxb2Xq7AN",
  "key37": "3kDuRbYdjip5bYGMFdqCVrH5VryDdtxcXiPdwzEUiFyYRtqRqiBrqYvP7DkviRxSzpSPWzHh1MqESKTi6PV5oBJZ",
  "key38": "4jZdeHXq2P8jwQFup1QMsejgRN3vQdMXv7iwKXp7Dzgijk3HPA1WppHx9q3GkCEwpj3rqhdJPnJNftp6vT61ydL8",
  "key39": "nUzbJUJJ1ye4yi5BFaBmcHe3oB5XpCtQCgsL13qELd5EsZznJZWQUUXDeQKChTT4U2TBoAsY7G3UXEq2xYKaZpN",
  "key40": "3KkSYQryLAXDLinZjYLfaUvfk7M2GTH6VTfSjJo3kE5jzqXLA4mHkpBANuMJnRqhH188LLJyBx9trrq8VHERRhQs",
  "key41": "r6JiyrkvJJTdUvmdCFpv4GzSZ6fZ7PQQtxryWZu9UnGkQ2hHj2WuXZxMrduwxNWmnxWkwzwwQikFTwY8BVVdBtG"
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
