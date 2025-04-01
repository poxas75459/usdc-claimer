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
    "2pBsUHDkW9ujiKGbWXkBsNX2qwNS6e8xkWkJSLsaQM2Q7utBhT6HaxWcZaeHTs6hMdcKz3D3Wdxe7NkWJdtxsuqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZAbC5WckbsP6aAk1uXMiTLaACxTBmn3UfPY71LRZd7ZmXpg4Qdf8RcuAJXZ3xrjmnmREZxQwcmGeKxYv9ESV2b",
  "key1": "2Ei97tnheteZMuYNSmxbsW33Qg94eSE3S5PGUSzFqgWHP1YvGcsKaJdrjyrDK5RgpUzxbfM6wWbqf6Hhgf9GXs1j",
  "key2": "5tvYZvt4tLttU9CKnxJCdFmjYFgMQmxCTeuebxpyDVLFg4MeCouuCamLujH9L57VM8dvtjaa4CPxqwdYwbMiQiyv",
  "key3": "4eRWXukx6wANXTdH24fWefxy8cNrwZfkjETvsF5rug9pv7SAEi2JDUyrn3fUqcgTEZecoCJFAhhSvviSUivKryD4",
  "key4": "2naJtnFexMJJvDKx98JrCRrvbMdxDC5KtF6x4L9NzB1JVqY53Nn1uk4uUN9eVd918Wz6q1PqLhFquiK3yxNUsMYP",
  "key5": "2GLsr5xfrNfLiij2TvqgETfNM4iMjMKCtjG3hQg1g3eSFi2pUiiQ72C3R3FCoW2Cfuo8yUGCCjayP3bxJSrA9npn",
  "key6": "5QzeQnoHxRRXwLkVYhPMvXu5qXTVW5MCWcRSEhTZkJ8aa91KsH2kiN9hya4cjsktjAQhrN9rXkpoVh1QUvw5fNCj",
  "key7": "2XAHd1sJGnqtq6h5MYbiZVyoTwmRa53dh7TjzZn5cjWikn73zTbmK63F3rZXtHnSmf8yK8rC6feNmJkpeUvy53MG",
  "key8": "2eMJBqoTaE297retSuB43XwRC3fQsUZhE5iggLrQgHa377hC6fodBtHxcsJAPWHT3quNUM9e6YTxwjSp1npHLgqE",
  "key9": "LpsWKisv7JxVB3cje6TWtqJSVUioTFUNBXkhQa3gmErifLSfpj1UGffJGcdbbXynxectF1GsYXZ7j85FdFt2VTX",
  "key10": "28jCwCBLDoeXKbR5oFS1djg2JSpgJo4kFDz9nyqPvVrT83r4CfDN1jH2U2dc6ubRwtq2QZp7QfYH2SGNJ2yh9YHm",
  "key11": "nW8TxH9EubbHN6jW8y3gqC2Eyu1gFjrrt45UQhpVFszJgRTb3MdeSnU4awgQ9Et44sX6tGtyG3KaNHBosDeGvuK",
  "key12": "57v8Bg6pkxpgaactrqQYP5MMvpDcNitVmtQ13EkmeWgi5zHgbcp26aDSEp5Lhc4iUZBGXyZstWDru1t33zHm83BK",
  "key13": "2cT2nAtGwkubceuscxz2hweE6ruR2NhSi1gjfMvWZ9dUvAQdroPg6SMHHucHTYAg24nbEzcGj4X6xGPd32BWmUhi",
  "key14": "5AbHqUdvsGs7Qsfm7roYRHqzCdgukcM3wma3VsdT9xE1uPy2HD28Mr4NLP15NFE8ZsCN5hJeyTXRj4pAxFtaEJHM",
  "key15": "66ebkuoAMc1gdFwT74WzQeMzSNpAdRvAaw47FuPznsVHT7s8VWWFeXxxCsckiojswG3x3fSF6sCVZXGtQWA4umdu",
  "key16": "3XXT4W716rVRsesNxat8yTr3K9tJtXnadtcf56aR3QLts3XVxfzQULTQWpZw7REvpF3LyjLae6M72RqLXpgG6wPv",
  "key17": "4UifCxNkXnMFdRpZm9773VRGsn6stRdVick8T5YKiop5dEg9U16UDms5B9Xt8vUoEqfDdgHchQaZ1xTdja9mwQxR",
  "key18": "Ga8yPpwEE99GgcyczsKYph62pGGbdScz49D99E1FHkRW73UsJcFaHT4ywfwBEfpGktAX5kL9RnzqzaoWwrGD68A",
  "key19": "2JDzrP4oww5cSEWa3jKg2jhamN9NwKLuB9U5vKrQkZaEvzNU7HRP7VCAoK89MFMLM6V8WDdfMCmVkDyy5gdVzx2F",
  "key20": "3u9DLhZXWojwAGpyPrxtfTxdaErp4bJB5xAuAmZMarBBopeYqVs2MgUMXNq7YnHSvGyv7Mpt9QBjG4DAwV1Wap34",
  "key21": "3ZpbMZnZvb71YgYvSLJafxy6aFCfLuMzHJZV5tWWdTVwFMRnDkMEF9BA7aZztZoVxdarG7eN38x8NcQxeFRJBrTw",
  "key22": "4fb5h1qi4sy2qU1DF4UfGh9fxVt7iwpM8z3o7rNijnC4SaAARsgsGXYdsthtyekT6xthx99U92nyDLppM5Kdn2VH",
  "key23": "5sqJ8TcVofkRNco6Mko3aQfRNsq65wxhEqKVuWy2rFwmYxMwJQXfj67tzii5ZcXd3HbS6yVuNTPxGbpWs3aENnfv",
  "key24": "3r79JvXnDaUG9w87YtvUo36MYLMdv6iN5mnW89v4bwb2vdqCkmRv6Pb2a2tnJpuQ5qb4j74wjgFgFCdFTtxURePg",
  "key25": "PC4aGY1xgFvSQQ8FJCPPteSsUAvXRCQqrz9pGYUqchePmR4ug7dnnpES5E1e79SRd9vgCVH4zxNWZqqsmNMuNW9",
  "key26": "Y5pTuzYkcBSkKi5eytrxGVi6H7k95Sxc9oNwgZRicm6BLjZKk7h5XadC88uWxgVcrBGvPhTi35teghHtr8iiGpj",
  "key27": "2nxc9cEsHcLExMt5SWovjM4d9LR1aS5r7QS6vbDBM21Vgb2SWsu1TUsdjG1b1GBwxp8zvfCtX3GqfzkUhBDZgdbS",
  "key28": "xPmKK5fQUTAKmAH8U47ftsmtVRrBKKdJ4huZVLSpcUFao7k63Z2sprLKqDSKR99hf7FdDdFL2qurSjMs1naFnrP",
  "key29": "9BadEC65uaVT2JykhG6FfykHrkfmC3h42qZSmaKL3tW8bmSjE1G5ecBroSvBzbnmQBqCeU2RbFr6FTZQ9gSbpge",
  "key30": "5DLYP7VzoryVCFASucrb94857tFxUbfVFwixfRZwTVqa3FKDtsGTLZ5QVGpGDHYPQSwipfsVBSA1221xgjxiTeDn",
  "key31": "3bEZQxxN9EcAtmszCB6sLCrwC2mvgDCCumqors5MQiQ5TtU4YDLJ3wR3zm8XKpkQiqo9zH6LU3ffc7FHub6mpurV",
  "key32": "5ZwCEGyoiP691fX38uYJZACKRJzpyL7rA2RK4Fr8Bv86kUm1BDfziXAYttzkMhCTtUfA32mhVRJJwgQWRKjBYaaS",
  "key33": "2Zmc39WeJfHkzXdi6mwTWhyFFBgqrmJJVC5mMaPT3KjX2RhAUAgyTjUMoJD3WukFzdR9YLuZWwFa8Ncc5z5M9exu",
  "key34": "3bEzL7Uv5wsXtSVtt6RvvVgfwttgJ9F5W1ESryRLDYiXv1qgSHu9CLfNWReYYMokKQJTrvgSBW9jAaHXsBFZ2sFQ"
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
