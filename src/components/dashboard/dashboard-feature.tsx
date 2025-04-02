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
    "UVn74Dd9tqiB2omGcMXcFmKrSBqQt1oMNzbNwCw3maQn3aqGT2fgWz3JpfzWg9N8ZodDVVSVzritCQAoPFjrSJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WmNb84CCXfUaXUDYEhzDc7dSkz7pRs6e7czZkjhGcY3XuhXAjpDftRMSbRPqrzs1rP87FP26g54t45BvWq4GbZf",
  "key1": "pmW5UmHLK6K2rwrNv7xRPkmvu2hcevE2yyU2X5ZaPJguGqP4wrEMKPELJxVuyc7UL4deaQrAvFx6mZzQbqczWd5",
  "key2": "39kED9SbMhxtsrBmqpN13tGoVQi3orz6hGfrzPK2aDV9pvTzfPuw3j33zkHzQ1riMYBRp5KRAL833is7JPjbxnqt",
  "key3": "Zso18QHtePWa7D2igBsyaJQbZw2Wvmt8jFgsfvQBYvjy6dFLeaVorhN3ThvFFM93pYi2P1yRahBTmEkD4Yowhzu",
  "key4": "WniVvwNU42EZCHTMGkDt8Qt75wn8zK313dcTZVuX6jvCYbcy5gEtYNXUV2Fan2pduHgphtz6yQAXNsS3CEywxiT",
  "key5": "48kF9aBTRiC3K3d1cJvkFqBpT75Kr3odXaafW9xxcM6VXHwvwBPmKcg92urvqJoRya5BHvbYxVW2mjUUUTWRWnZo",
  "key6": "VS7Zy8trm8RrfEYbEtbUXmqUfsBsd3CdybrEt2bX98xjuUWxFszUHvGtcsQA9CjDqj5bHQist61J175zATDDVKm",
  "key7": "2BtyTVnAMrn9UTar5T5LpRmBTD7oidZDxYh79Kyu2fS9F77o6JXTKprebRysC7V4uFZFz18vYTVrZPRyAhS76iyy",
  "key8": "3BnimLVhxap4i43a88H24xxqeSdod2vQzd3D39fqAJsVP3XYEhYjzjNV6AbUuaLwRnQ1kK3FJBx5Zk1tKWgfubCD",
  "key9": "4cdwmhoMKGt69NfQuWXfZ2Nh3PstV8KxT4AimyhNu2ZZxxu3pykF3Zg9eFNBxhHJVkpXXWps8s5CF4MyZf9oRWd4",
  "key10": "23w9WokgNqZTXGj7BWUNo8jBdUbRiGff6X3UvSmCpMNJhqKnp4hLnnizRHe3X6uaCwbeTJEraAyguxHDnVKUmyVz",
  "key11": "4Yk2NcKqU12NQdVrxQx9m9VCxiEccen9yWWv7omGYwdLP292XqVhEsJWGvD72j67ujq5pTSrakcZxxhf3DuaKuke",
  "key12": "goVtQ37Lf9ffeswppjjYNeuUTgzazwUFStk2W7H6qHQpEGx7fiXUUK84KiHs3gcz8k8136eQnUjNzQ1sTYwJif8",
  "key13": "45Sairsbs1MTvpyH5Dp9o3QPFK872GEWTowaWEPRzzAgkipFmp5MQFxtqYAu6BxhhLpBW9QivcXRYzV4De4GsWtv",
  "key14": "4g51MsdWAgg2qLSvZGMvWhUJNhr15byWcapT96u8E9L2cjrixzXeNqztvTJDCM8gzMeKYMinbqb1oikh2Y1K5jmW",
  "key15": "45T9DxmrMRVDNy26wyaGiDMTdidUByDs1ra7xah4EiY5iywNdzosUqPssYik3TWg3oRbgMEot5S3a6VneLsGr5Jo",
  "key16": "5s42By9358y82LajkNVeteB1wUaAJLe1ty7mXsmtwS6MwoXtBy2Ks4ejnseyiXirB2E7Q4d6juSi3Bd7f5zpDzLw",
  "key17": "5uBjwzbz2iK4PDM9ehXtR19mkkJtfUAiFjuqcYDw5rPrC9Dxw7iKqFFquvAkkFCpNj8MapXfshxQGYmTXjCyRrzW",
  "key18": "6726TBVgdV2KVK3o2qGgra9PqHYjscHQUFCz7sYBHz7qGmyej4hWvQxb5gy6KMkJqvotfweT2KN5Rsmz98dSVC4i",
  "key19": "3GUDdb5xbKLdADYsajTY3AwrZLi7H5m2ypS7TZWpvVeJBLxdeYGD67BpZMAEqsLKpqEMwM3NwhHHcUcsG4XE4WmA",
  "key20": "24hbTvvrEVdd7RWnYCtXGXtgfbdTCmZAYUkYT7yY4q5PhBAUxvghbJi9Y94scmxXpyXkZjFLuCYcCiqWYccarqPv",
  "key21": "4PELE9fqSnHV8JE4aeCAkJhKrCTYXkcJZVMxpKPjaGQFKeUqrQMi1gdvuodZKWfxMR3uHw1ypMkSmSNaosnRA8i7",
  "key22": "2PQQnAovgbxWTkAGoLGguK5yPcauVzpiHZMEgbcHjTWu9KgCef8aimsUbANtQAZteAvYgKN8LqVCx6CvHHocqUBk",
  "key23": "4mvNPgxLQxzPngSMgBF2RQH5k23DKZRwCCz2xy3CTBTr9PQa3RqoeWH74Wy2Anw18RbLPGMgiLiDbaqp2DsyQS81",
  "key24": "2fMV1q9iSAYjRay8wQhx1ezAPVNohCRmDPmtyLH5pcMc2qco6xF97dnqpRrku372pjAs8XivGLWcyUHyfEiDxGMF",
  "key25": "2a9ApoMMNZ8qXJHhGqZfFsJYK1PBLbJ8bj6pHGpvCA1YVqZBvspKB7aVC7TU27FYgkL9b52oCqWwwQs3sNuRJFpR",
  "key26": "4LrKz27Ehxfd8AhSK8sgDeGdtCTd1VxBjK1JKDsZC1Ses7YyKbGxzVhCkDM9jYqeaPc7PdMEEYLm3tRD8Z5eNJF",
  "key27": "4og9irZ4ECqwEepQYCpcmjUKbW6R4S7xJ8hY35JzxBM484zXzJTd7sx5Wh1WbueDtfAv1vptJyXNbs4mkVdtgybK",
  "key28": "vuLNkM3zqGKmDSic1gYjm66K8g6aWSJWtjjByojAxTauz1wWmrT2CBXqYoiy85eHHbwhn8KJz9CSwuUTBKg9Sjy",
  "key29": "2vcbCbv4QNoWcW729LaNMFvohNeyDzEDCpN4ajcE2agAkbcuTTZBz43K5AwTKvKpNR7tzhAjR7nSqHY76wND7wHt",
  "key30": "2UQmctNtGmtuwwFRzCs2ks1ENHUjcaJm3X2RgUgYbRC9rx6FuuT2MWS9ityQ65AV9qBvirvgDjkmE6LeeimTELiS",
  "key31": "5KDQ6yYVpk36NkX5KmyHi3jeQAa8KEdJiJ8K1CqUEL1buvsHSgoLGLZEtBY2MjA9R3bwz5bWaKcZuTwZjCTbZXDq",
  "key32": "5y7nEe9a2yNg2z1digCzS7BujzfdQvwySu66DPxqVmizzY6tAN8zYq5H2ssbEoDGVVUg1w2ghjCxoe5oMUsA1FLv",
  "key33": "4Quqko6WqaWcAwYzQzCYmsfW7bgnbby3GJeuciSc6ubiJAfYBn2uLwxFf4QPtUxwaYCqcBuGre4QH2AEkd1aZvKD",
  "key34": "25bMpf5noaWuV5D9WY5DWEn3FEVUFaMaLd5UBTPvGG5ikuKEuRmjkJLsaE97tn6gbGvFYgauPjwtgf4U971RQugd",
  "key35": "45CnrzanZA1JXiJ4MHbwcNBfHV6me8sDEsbpTA8tVXqxSYxiVPQkKcLkxE2JEMyD4mdaCGEsVVhRud44QbnDqtxk"
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
