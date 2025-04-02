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
    "WQqUcenG3L5SqeAkqkWQycrv9MamnygR3KDzJ2iV48kqFB8NEhz8gdyfpmevfau4QtWWQjXM12SvmeRBq9f5HFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fqa2KoBft2zywA1WorDv8R78MpZUYbbBFnhQwXjX8QwqfG8Mh2e5JVbPY5s9Gdo9a8561jGBXtv1ze4QuPWM8YS",
  "key1": "35DjczegFrTDnbbbJowiTimC4YM22Zcewd9YrKzp7VxiUpj4QQFTbvcsyfr3sYyeDgSbAotf2doZYEAAaVbD4Lrg",
  "key2": "cwEkTcC5t6LMcjkhLT3Z3zWYshaxrs9JLWRMGzMsPFKkAqaY3sVx9SW6dpYGPxNddDdBsyDWk1s6gVZn7m7TLFj",
  "key3": "QS3WL19suhj2aLgYJ8XKfHL5KAQ9RRd8tpVutYnnMssziaGwhsc7gG4G4QeuLpP3CaMznH4E7t2bSKRMX9F2Pik",
  "key4": "pzyGBsMPh6ELVAFfaCLR2NyJYBUKoueFq7e3gUqHNEwYPVm2UBWrjww8SwLvDYB8hcf2yrJs4RhtmeFX9QeDZr1",
  "key5": "4o51veMFLH9yFtyRbXCoar9kQfTHUzUM5s7kv96Er1Xins1sSJeDYo28da4FUvubMpQLW9S6ZxbjWij5bZn1rVo9",
  "key6": "oEaneoi7wyQaaMrZPzsEe1ZpaEkxA18xXNQ2Xkr8LmJYCEu3wM3GAgbRE3c48CtjeRD2p76QeqmNmWbpMESiDHe",
  "key7": "42E5VJ9qNqwN1GRVfvGk8oUVcsLcixVRN6TmLbas2hNoGeaeWahLJzpKE6pLo35inLoG7QKanCLQZ8WD5NMZ5zNE",
  "key8": "37EHwsHDfxsBX7JApAoZNYNhA2U5dGkYs6vwQBmqCXH6dff3WY7XT3Lb7WtQWdncEeAhrDkNuR97QuacMov4t5MT",
  "key9": "3oqHMdWNuvjxw48utwj6ko7W24Xej5iBmXr2SSHz21UHmh2aX7GZifS8NN73V4Zn61o7aF8KegN9oUnVgXxEyUoM",
  "key10": "4YgJAx2UzMERE3d76zttLPKoqHDvHZVqwS6KDCaR8F23rUsxm75bAudvVvoVUBWBVbVqTDHYvCRSi6WUwC14AooL",
  "key11": "4HzYgzJzsqZFrZWzGjXVVvEqwYaGKZttR4PN2vCCCZQHJynWG8DQPrJ4QbBCqXqqapSGrDnbtB6JH7dSv7FA2nJ4",
  "key12": "5no5oHjN5xrBDYvqp9mF5ya52cSQCZYoPrjEJ3YyBvEXKLuCgaNcuF8fYg4nvgFJFgXpDXnMHDGk3pMqJsEry9M7",
  "key13": "2v9GVtX2EThwG6nnDwQSHvEuVknYNWHdG9H4guMwoeqP7TAjr5ShEkjhYC8peazWoMu6HUrfm1nyg4vNhv4KZZ5y",
  "key14": "628vwvP1YCXfALwNc1cQTkLLTsXgzVrJ1PrFgdAztASb41ZwAoCujgJe6xrTSrBU4YXYByaR2yKrqG8rnETBsHFx",
  "key15": "4GyiVwa7HyP7gg3XqnUQtLY1h95BhfmEoU497rMqhXPt4zPg4rwxPQWzjPYLJqfhFpyZk1RdZ8m6KNVTMqAFKsBA",
  "key16": "5SRK85LpnguBpZEgKsJTCXywzUBzeYYTsaMwXutXqXmzQqsMhnQRkUEekvW9iUz757nbJyqvyur4KuSm2W2wS3FN",
  "key17": "3YfD8Ro518PZtiT75mdwQ484xKWNSFkVGLWz1nUzjhYbCr8zVaZ6gApe7BjF67YuELNqXSijkrhf2hnfLDiN1GRL",
  "key18": "4pe5CrhQnddnCoBakTVLPRUj5AjBL8v6KvNmX5BnNFGC9GSvX9wCbP6gfpwCtkALhCrode2QLBbvTJMGqcHZ4hFs",
  "key19": "5s9VRves6DPGsvzxsKFbm9zj83hnbbFrWZWVg3gQwD6DSbUnSy3z34o5U5ZawpABUs6zWTLMGgEtRhmcUdwynb25",
  "key20": "4B3dcA3yn1SYPdR59JziwuqanHKAWZQnZN2i9M5YURktKrA5icuM6oVvrjn6ZHTvx7iqR58YUCyXXjhQAfk9wJd5",
  "key21": "55QcCKTvwRa48xQPDLGfERfk6PakNMwdQP36yCMc4jT2UxbVbQGCPjQhyJcF5HAG81p4sDZaAJn7bQesyww9whDK",
  "key22": "2imSPGrVESMgFnWSUhj6Rbt15ae6KcD13uEpg2CcoLfFaGs1ig4dxz5bHrKrmre9GYChD1N4VnkCj9DBSEjBxxtK",
  "key23": "5yXPytJees6PTLWg2nGJKeftR4TGGmtiso9EqXh3c3zjrtfgi9GVATxxfEzJ4LQXJFFo789YgjTu39r8vSddUE3c",
  "key24": "45ppD48EdodciggVjCsaedzkp8zKuuB7BfNvjbJZvkqvoEDMDC9UzEKYermZpEtCXD7jUSUWEcXtrt1b3JEtQJJH",
  "key25": "5uPWDkUKQgZFQqiHaqs9dxjSUVjPNaxrZXprdQXUKYbD7V2CYw1qC5E6T46ZNA9hpeBG3egW3iy67JSs55qprn1k",
  "key26": "5Np9iXkYZe6EUMpqfhQE5MxiPar8ZMnWnuWjqwi9RMi2iNgNf8MsuHKVZw2TK5F8kFj8a6z7Qdxqd1FcdLZeLbtR",
  "key27": "3XwU1SqC9ZB4XP11KsUeAVx35wZzw7m1z1oywfFVxrFuNFoh9a3WXYzNRdZXtPSxHo4CQprDJWSWSxwnajbdutn1",
  "key28": "354GfRjhksHDZdAybFJVC12hbxARp3ikDTCvdJ12NPehRxMQZafPb2CKyY8LqZFg2fgQFzuyaEVBAUkEURRrA5XT",
  "key29": "ZFKFsozrpC3sNqCdpUQaGJyaxipKLDcvWbjy4MYzCeGy19inh8r7zskAHJ6xpnMkKKSDpdbjux2Hb8HTAkheoWb",
  "key30": "25Uk44DJR23QaZb2assnVrMQnu8yyQch7RBRSNv2EesCsrLcKxPatn8NxAVMJUGCDiHd83mDya2cyBTthGMiJRFJ",
  "key31": "d9NFKBdapmYNU3KWTD2irY4ShvMRk8ssRS4HT1exzXjWBvUUmtx3MJzQDeorbhbkExtvp6NbFNKgoHZum5hJvkH",
  "key32": "4RdfTaSPtAqQ6N2WHrPnQcvRZTR5cYoeVW8j4WcPHaojeSzktmfYhaQHzUYcVFpV17bNgWntp1s8hQ1QrD4b5Gnh",
  "key33": "25T9gUrgT8JXYVy94XmqKaxLt96tjB3CYsmx9vHFH7pH86SGPQH4xDUriaZcKfaB2ZMYcqGCoJj3WvLTZWhboTk9",
  "key34": "31e2D3ZpWLnr2D64at4Sr9zQ3WPLjYJFqcmPdjgTiVSnXSoyKKEwoF7k2hsDfcAcBs3hSy5vPteErHWfkSKkZqQW",
  "key35": "3xULFnx3u9pKn5wy2YNUP8oAVou3bGgEbRv3BqqY6AQaoXGiZHL4WUy4Jet9SKGAPAd85d6P7vFvdoh2Pid1RWxQ",
  "key36": "5mGpE2JWaoLj2mb7K7P2oMkGyQ51NvBDFyeJgVxVrWJGyyGV47Ram3T5zYqkVwEg89iGJWjXYyQpG1ovtknZGKZX",
  "key37": "2RDt9pkMAvdSK4g9EJKuGx6NfTa6sm5bb6iQUV6EfkHy3fMpk2DVLPmZG4nyuZmY9ppAknhLQjVTJaVdgQewzfKr",
  "key38": "4Lsu6Xvv1oqc7T5FZ7a2z1QRacNzJDap2Ttdt1VCP8SAXbGCmxDoHzCQUvEpt4WdH9s8mCdEaq1wAYkvyPw7D9sj",
  "key39": "3aarh6ETjrjS45RXQkdA2V16QTdY4wpWLJvqLyhQD9RtTGC96BhnrE2ZEdm8Td4MWmaAcPVzBBwKHGqZ4pJvWtji",
  "key40": "5Y9WJxJwQPTG1Jj2nAFveweE1g41X6t5Tavm6e189MNcHexdFvMEWteYpmeWz73GuZXBz2sjALHr1sovbBA3PG5G",
  "key41": "51BkpUF3aV1hatHB3e7L5S2vTJECaCrdWL8DHjnUvPdjZjUdyuzpRtxEcnHS23UpVWL2ZJz46UqMUVhM2TQ5ftGA",
  "key42": "2Me4ihEoqsnwgumJdf56ucrdCEymUkLNms7fxLx5ds8noHrnZZ1M7A14Hdw2d3b8mTj718VWYtfipVH5mNPLYSck",
  "key43": "4Efp9Q4FHBHq5bDi8nvAWEWFexrqrsQqob7pGQM12DVK32cUWhHkQBBoWnncz6BK1v4Ss5er8vp5uongiMqtfk4B",
  "key44": "23xLDWERPrZJ6fASjYk6mzqvUhkJxVkYxyhJjCYNBWm1mHv62rt1dJLkzRtJz7VQcCS8Q4g7BfzGWdDL2zVzg8vJ",
  "key45": "zGeZS6ZM2KFZKvtxWF4jCQXiheEXZFbtWruvmJwm45zBLik2ezgxq4pYnczwrhFGZogY94R3ccqASwgtcVhkLrV",
  "key46": "2ZxymJD6N9ecZjz6hpF2yA6dLd83gwK86WGicj5R2WcXM8PqtarQJegwxp7iSis31z9ftYNFBHx4ZwGWTU8FDAiY",
  "key47": "3pLCSuvYmQFnZCmfLyGYvcg78HdRji29M1Bf2qS4NQQVoPJgQu4ibbo6g5Zo29MfrWPzStLUyQVNrFZ5VjEqKiiy"
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
