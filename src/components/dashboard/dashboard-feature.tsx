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
    "rLG5gQaReYMRd61G46EWh8inZNGVYqn8Ja3F4E2sRFaWqjWjZkT4AYqAdKexFu2mTr7GiyfA7BwJH1eXPeEav6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckCbC5174aGaWoonHBKMyhDbvnKv5XvtoGJkVhSszabuJpuyKqzqR7u2VxRpmW8FKaVPbmGS8jaqf3EiWaLKFLa",
  "key1": "4iNefoTAv8tHLDKPqF5RGR94emreySj1hCNqXK9qpwhAvCrzdFgmprHfUdDp7iHYadnzsctjE8DhdqhUr3YcuGFR",
  "key2": "2GjVdFRdXY8VREAbAPLAfJmADDbkerCt1Apw1TyxU1TQLWUDHZsghXgeTdeSLfXepgZLK3tKY3jNN4wQSzwzWXjq",
  "key3": "3nXCv4yud8uGTquncYUgVrqh5CQdpEyTTqGHop6BGNscRiGck6UGByKrgHNurTsv49Q2wsFtgur1kEAQapcDtrtK",
  "key4": "53vBvnptccB7kEp6rm41i1xArGfNTvbyK3xkTfkSkZ81BVBM6qWoUB5Fdi2vPQGdPBh2Sx36PAZN3NvWKSkJFxHG",
  "key5": "3y2us2pJ8kfktJzXv91sKFNUYweFYPy3k3fnJWWMt4mtTdPV7tdC7Pmiy1jvDRRZh63Nh6z6ehnSsdX7BTSF4d2z",
  "key6": "2AoNx9dfdZ36cgZCWGDgyUL4G7N7msvMH1RMTfNNTHK1GjsEM2xx9ajhFfeCppsnogECmnBFzcyqN5wr2Xg91k8t",
  "key7": "SwUmFo8mPuHYDe5jb8KcjYJkARo66WvyX7Lh9LRLFmx8aEXioTpnGbk7NJjvrddzXYhzhoCSQQ9eVRA1GmAZhg9",
  "key8": "5JRzyYDBg7TtnJF47cbV9zTTxVy73aofjQZP1afvZW5wxxbSJw1YwuiDL2aVD4G29ADU4BVnKKo1Sv5ppziy1dSi",
  "key9": "2me54nJkXRsT1hx9nL427czhVYBxEMP6skG4YfF9eMJG6kJfu9zzzQKtbssPBJjgCPBhVsk7nXzR3Pb2fxLQAW7d",
  "key10": "4juRoiB26p69j4U74FqesAYqDygNWBdtUozed6ZJm4KdYURByxpUD2SmNvmoWWhAkB7syMunew9DdDr66SseoJC8",
  "key11": "44TMBJohrSUTpigWTwVFDpsANmYb4J6V2sqcKZfA2MZ9enQGTELP6XEM8VqfcA25qDsB1646y63qtsJ7H6gHs8EV",
  "key12": "bytKD9QmFh6ZkSbsHboSBWGfPr2Gv1r7E9CJHksbKtKwYsDpQBXkcukH5KqpusKdCkVAFXTLmM3jp2FDKP5wwMF",
  "key13": "33oq2BJyryVRNCDxAqPceRWqwQ9VT66E6o2nhSPh3ZdR3jXvDPGhfzB21Y6SH2j1wSJALi1SBtwpDEC2zuchQSzi",
  "key14": "2eRceFn3xjdb8NYMdPrFCA4eWi2NJSWn2yZpipnnfBEk2HdbjnNBnzeEcuB1mXhAe8LZenf9wqa7s7pc4S5zqd13",
  "key15": "37GiGx1Pfc7kvqnwS5dco9r723TLEMYx7y2EJrPYhHUfm9Xw1kq2c9w381fWnjjGptAgPmWycuW3VWU3oTYkNL66",
  "key16": "5vb5PAwg4ejMjQGhtTQ7XTGXU8iHoqgBYbHhznHZA45UastiUGWXo5RGcyVcu18yuzBSfFS1d5Nc3UCM8CU4tCCU",
  "key17": "4udCwvgtcNW9eR87heGPss3hiFjkbENauJge4vzQJ5FSBDobacXoj3Ne7xA4mUbrrf6h56RcNBfZ1N51B3o7aDEP",
  "key18": "GE1vnJr1qC69VHxE7WEXDqVTcUR7YphpceLjU8rDEdSfreZXBBtjn854KHCQVG87QjLbyLtHseej17JVh5x5GbL",
  "key19": "yXmCr29DLg3KyVAkACGRgDBktmWrsDJ1dyQ4QFq4DFRaokuyWArY1HyQ8Vwe8FaaWV2aboH6m5bf4A1qnycYLz2",
  "key20": "2nf7RfjoznsEG8ns1aTztoQ7JkWrcE4A7TT8We8XEZ2vBa7dGH6w15TvV7jH1t8h2Mvtcvv3rb5rs7UnMa3bcvgG",
  "key21": "25onDhKzb35PoRZ7o2tjVp2TNYP4mkCq7KM51psBi7i1GE1Us2HZBzAC5d69ou46EXJ6XDj8QVtV2vAJ2b1GpPX8",
  "key22": "2SUSBbjJ1rqst6CBDALs1FMYSdmNecSU6xd1bMdA6XYQTjeh1b3pmvDm5FNdRJHwCqj4n2s61KTvVxQ2MtTos9D6",
  "key23": "27gGNxCyE41AEicWJT8R3sMdgnchBE4xS44bpqRWpFA4CpcqkADMeVzp5s95hcnnjLBZQLEVbChr594L8XyGs7Sz",
  "key24": "aLayUobSGURTiCXZF2pxtx9UgxFjahVHB6bNiTKvtot17oBHS3DzjNSb2Y6TGudGT32hLPwhPHYjh1RVQfYmB9M",
  "key25": "2Dhje1NCp6S94NrxPfoDeQ48Lw3FB1aS3f2PKwuNW1tEqDsqrWzfZgD58jXcLkZsroqi3qT2B5AV6LXsKX6hsPe6",
  "key26": "32L5iV5CB5rq7hbZyu7rpaMup9rYJrSM3Un6Hs94XH3TVnRbFZmWWnX3KGszZVxtXsiqFaGm5ZzSHA7ya6HMnzNM",
  "key27": "XuwSXxGK8q6s3rEJ7KiDSkJ49LXDnNvDUPKWrXsa9q2VMRbBQpqiYGLttAPwdzZgCcwgURZMSE7fiDD1KLuSwxe",
  "key28": "58oCWzngFhGvBw5tHKaeLMaE4WYwQCbuwN798ivdaFLp57mBDK3kWPgqsteNokjJUqMbvhyG4sckAjDpDMiz39K3",
  "key29": "Q4jiMQuwH3dCHiD4S3TaZrxiPSNVNvHodDxLfCcAYh1z9nkgPQjrLdoz8ouHxWSxDh8BRX4NvDhfSrV622FB77a",
  "key30": "kuMpk1YMChjVnXA3CSMHGDtaySjiUxkm7bCTrp8pGtRLAZshSZJEPxZVfZxFnE1GKqMFWqNSzTStDgaw2cxXzK2",
  "key31": "2WSoJW4ofNXnkrJnyj3conK6PtgyxRuAgh9gPSurgXeZwQxCE3x92zoddVYbqLjn4nzcdT8kNovJdFFdiewH6c5S",
  "key32": "6gKvdTCnhww6eSLdKC33V4iYutjdch5RAvrPR537rDH2rnGXNrcGjBgNbkx1zqcDdqCvatCVS7vDyzPTsnNy4Jp",
  "key33": "62EqjNGXZvwE5GeRNQLT9rW9Lfe6mXL5K55AvSpknwUUc2Y2qi2HSWYn2RxquqCfmcMVNv7BGvxdHP6GuMQ1YbsK",
  "key34": "4DuZoSPkiJQuhaL2LfRDxLY3JjFy6Apqif6BqW2nj58aPhQDpKB6pVQtWA6M8b7ifp8eDpjLhLjWCE3W34K15x6h",
  "key35": "EdvqLABSBXeJSr1F5rBT3PTVo1Jk1xxVZ9tcdvV2ChAPLfAhW5DfJLneRUc8HZTjsT5RGaMcfPA7TgpM5GRt5ZK",
  "key36": "9fDFvdu4qXPpVfUuYuLJT2Ei3HPtkbqhkRgNVA2gyZYBvukap7gP6GmGVoVjYwV2Qt7y52xtXLu2pArA7gXrdTg",
  "key37": "bEUbwmZa2ESt1ohFD7SncTjRegACTUHEzdoNCPhNposHvWf4Vk15E5fkooU3beHucFAvjig4DAUNFaMZ6ZGS4Au",
  "key38": "58pmoN2fmmEjqyd9ijaRJqgFiLrJL2pQL7NevHe2VMV7UHbgaAayamHofsWkM1LWTX1Us9Fj23QgmqAziJM6gP6r",
  "key39": "TmEgzMaxzZaygAucNy4S7LWZ33vNkXSrGsk1Yi3xkxmvwDguxB7Ude2KJv6pyRxzNN5L426eng2FqkcoJXx7TZJ",
  "key40": "3Fm4KGQkDpabGAEnERmUK57gxwdyVJYSkCAtUNJRBGLKY6HyAcv9NfMmjGSKZQNgMs7SgDkuNEw3PaX7koQmWHg5",
  "key41": "5Bi5R2pgUSGyXv41N9zafFMeZWbRt16UspP3v4nWUFxfvRdiRZMVT6s4SBxdjxBG5w4TyyeFPgXEHjGLhErJPG45",
  "key42": "4Ht8XQCgXksyYJiTnhtLuB9rjCKjxE993B6EwHGVaori37TAW75aGkQAfi13w4k4L3DiSu9vBUmQYZ4ycDvaukYD",
  "key43": "3pu4rMKpvWNjJzkMRTCuEswRK5cgScCNxbvkevfCadagQHuJ9Qmt7exz8r83MSTqkXGnhn3Ff7YmxUhTfnexSu7Q"
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
