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
    "5AJnz2vWFaPg1ikW3PZUYFCM86jBQPmf8uAKEmi7icBkNYU3thWVaWtdRuZEifNyFgpR6pWUBwhvDy5Jn1tJGwrS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y6y81unE4KmBmpbHXi17PZ3TvhnD1ctCKpMkY4Txf74h2pyeXsAZ9ohcApdjbPh3c3EXiagkGCSqjDZoAngnhVx",
  "key1": "23gHHHaAgDweTnJq9eJjdvDN4zFY4K94vaarXXnrxsC3vrVZFASRxgy6NQDGMEH7ryFvYT7Bgi6UrjTSMRxzkN4T",
  "key2": "2S1wfwfMF4sxhzn3aqCFVLXzhBzeDDUrBmV4e7TsKMGxcADYZf4NasJApTr9ms79AScSyZ9N3qmzZMwppiFEWkYj",
  "key3": "WNDwoFTo7sNLtg8ZJwHCkUrPwJyPURJfoBWu2p6wuoWe73YHnWX2EwUnZBBWj8B24ejp6nzVDdr9PKo8GQ35Q1t",
  "key4": "4pQV8VmSjRF1W4GyqyfTF4t5vdGVnYtuDvAsfzyiBWv6zGPzxdjsGZXVd5tUPg5PQxxyD2UHZVriitPnJM89V5oV",
  "key5": "dfiZqGNSE7ccVkmktCywcfBGXRHgKYHwXqE4eU3EiSYABHqWE5zugy6JhoKLSeRYQgZFp7tQLkTXWcNYDX28hub",
  "key6": "vUa45Scvxm7TXzsRZyocMPdd3sdqibxUnbJkdBLCKZdqenie2SwdcKMTV4ZpfbzzQ6d2pmqxP9iamZAVFt3KY4A",
  "key7": "BEX5Bmhinptnckfz4Z3Mk7cswjcZzXu8RbFjtUeY8VnSoF6cTpKSvVUA6fnCQFmp2P8B9X24xCPoZLXbrzALZaP",
  "key8": "2n9okafNPxitxrZVxt51XTB5tmqGnMtu7btobeKZ4Vd3qkyEnfxXABRDG7jPRJQBxUaLceG5djyLCih9Pdt8RcDn",
  "key9": "1okAAt7suYZVaTY9gom2JK7r8vcxjNSKGxdBwUFRdqDvyDJZpYaGbKopVNnEAKJmK5eiKn6BmZb5mXG5a2KKXuZ",
  "key10": "4Mx9Li6j3P4Kd2Q6GxBYXEioxX2dz9ufzfnPEqs8o6EnFCcWF9B8izzHRFVjvR6AMkdRkXwv4Bntyn3shxHzWvFH",
  "key11": "5YRMMuefFahBAwjHZi4JMPkXoRCiDnpxLymFiAaBALRjUX2ye4bratMUrstPUhXsK6d9UZdGRDfyxfn3U9AFi6uy",
  "key12": "5erLkSfr9rgBzkLedE5T2CqW1yx4bhG2BcaMK59QvawgKBnfYxdpqiQFbbLX562CUsBtDg8DEALKqHLr77cVMtbZ",
  "key13": "2LGWEFzYuL9ZFoUN57LPKP2WKda8Xi7eZHJGexiJzZ6ZjSLAMW13VCfWBcB3HbUPeJcqfBHHDDY34AWzPeFMSUSW",
  "key14": "3KDJwgyEqjzcjiXYgdQSNio9GeJQjrSut7vZoPpuFgjDK3JxcvajGAocS9w3EQJDf3nJg2aabH9xFnpST9yLRpBD",
  "key15": "5geYGvwvGRmLxLm2oKAua7AEG7Y6NjJTML6p6GtAJSrVPkmAeubz95R5GM8wiB9jfW58hqQAWb5BPg8UjMmYpA3Z",
  "key16": "2uTuq7YyndnqvVsitE6VYsiW7jdRywaZ9k4heVjvLNjhwqQRiDXgrDEtTMAUpsCTPvGByzQWDbi3kuyMjNfyxw5Z",
  "key17": "4FHCx5gWpz1fY6vxi5bF88L55hnv7NgVAvRW2efSCc5eahvKheBkJPXhkBt64mUV3XqZ2eCLjuzig6f3k4qXSatf",
  "key18": "64xBmcSzuPeqeV1WcJmp7Q8P1sjR8Rbdhv4fJjw15dccKqyXvFFrUSwfUnsPmvSpLNpA5bPrc5tM2SsJt2AJbdFG",
  "key19": "Rq7BVUqtFRCN23ekpmuhtsNfBfQpiKpFV4iaqmAdRJT4y3qNdPeDemD7J2Z1ApmTesoWix5QJg75f7xYsYHc98B",
  "key20": "237ShuCo77iCqhBCU1sAHcsGG9tYzsQcTnmJjjc4G2MzC6jwKcdZhHg32XARi8sYbXj9UE2qsB3ffssrkdJb7caH",
  "key21": "63hgXwHx5VKzM6FXeHav1iNn3j63SAzdf59xgQPAej8efXLxMdfFb6x5XLH7AeEMUZwg1uGRASnkxHFJbBkc3FK8",
  "key22": "5prpVaw3tXfJCsWmuxRgybciPvkwgwrFerLVyfKZWXoBErv4a4649KtwgEZFBvBjtU68zNn9AdMM4J9ux68KPyss",
  "key23": "2V6ox9d9zrcdXe9ZgrPZKEKpkn6FDSa5JTFUxLV8vVM2hSwiWsittsfJx8uH7bf52V3JU4dkMvhSQjmCQcA6ufMU",
  "key24": "2VCgksJ1dR4ZftnzGfYZwM3rgaFubiqGwWn2uq6eMuxTWkCMmob8SBk4UVCNXwCjC8eUSpBE9eV92HTnBt8xJmt4",
  "key25": "2fsHDXZqzbKDMFQkCvWVmLAHqpTKS77DwC2rrmXPHBJBVGunPDCDGXG7nMvX2ka3KKJ9QsSqnubc5bq777aLGkfs",
  "key26": "TyzVEnmJoM6GC1YcTnvLJKpSBLaA4SWWEUXhHeYMCSJ7i2CYKBKx8BL9tjdqF6e8SvYcmzYwLsMG6NRuRRabzvY",
  "key27": "4T7hgHY8g25qBfk6HsMbNSqpYWGZevzrzEYQHDopetpFQj5THLY3sBTL8raNP2N8YD6Z72Fq9GWjzqKCfMot4ftp",
  "key28": "3eACfGUhTCDq6b5UKR4FKsgdLDvB1Lg5AoURpEVE4MGbuD8qd1KKuh3x8L9Lv8KbkFqzVGqmYfR2cxAG6TSFChxg",
  "key29": "5i2xFBRy6ojP1Aio6uQh7b4qEUyi1fCKuSUMLPsVzMtfniVLzvFNdDeQ7oJGEUh12RYeBqkLCSfmMiWQmigkgRAx",
  "key30": "3RdRMmusxvuNsRfuk56FBAciMBw5P9FU14KHmsCzZc4wQFqbXeJEVi3rLj8Jccu6zkW8BUit6cQZG47WB9qHzGqs",
  "key31": "3gER5xaBQe9HLShzj6q8eJtjVBxmjhWYs9RjcrvM9zFwQwxq3SVV29KoTAhvkvqtYB9RKnEMYbUJAUtjWJLod8i8",
  "key32": "3F2Ed17ghxkwrrFXnwE5NCfKCncE3YfUzD5e4ZEAD8xvN9fGXyLcFhkDGR6SEcJt8GdMYxDx5EzpPDx4jgMRBzFQ",
  "key33": "33w86tUpCZp4m2sLgj1H5938Bt3fFGynZiFTGyRJxJx8nvZKiPDAPhKBPA8T8XrWeofrCjn6qW65nE44eP1FCvVj",
  "key34": "5G9UjHfwi1MhTwkZzpbhJXXshxTemBUg2mWP9Wt1hMbXTpsz1fhSh64yPq1Bw5CmZQwPNArQhuSURWECY9p1amzV",
  "key35": "Up5hTjJxoC5nWZT2ayCT23NmfCFrgni1ERjwHM6cvrWVeLUgiAyF3inejQHZSVTjeLoi9noJnudZyeVVG4JNsUX",
  "key36": "4TdNjT8yaVsTTtm8ajNDrKBcpUSaha18GQ1xHizkU4MtUp3RXZaTrV79NbFGkDWH1XRyfx4hJm2N5xNRzyddHGmB",
  "key37": "2Ns1k8NsxhLK5s3gk8vQUdeBUGZxcPD991UmfFpAuX32qUTrMDf829awG6x3KT4igs8mrSUYgkbtfZ2hTqGSUD9D",
  "key38": "3448np27XwM7EXWAkHiRmeyijgDqm5b82s2ozAVqSvUXq3x5zuoTAfix9o4WzaLUivQo1Wa1t2t65THioTT1Kc54"
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
