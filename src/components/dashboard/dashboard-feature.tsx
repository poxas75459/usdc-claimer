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
    "5FhMwqTZojvhYfCsvLEfemGA9zRivpBGdJdnAtccUg8x5jNkXdVNEdLQ6aLq5EZqxS1mdTUdbqjX5xqvrWXmoSXV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28T6FHkaNmuWWSHTXgxd3V4PZYpKCwo6SL6Ab3t8bT52yyRqCXahFNBTWh4BrU1EXvXk567QbSjyMg5GbcpufF3b",
  "key1": "5aww9jvXmkhas38CiDTz61zviK19iJZaZDcnb8T69keMo2RJRRzsXJWQVgE8sm83cbe9WGe4bo8WArH7AWKi5zus",
  "key2": "3a56JHKmFSgURkvX4dZPqg7R7U2rsZ85qXC7iUT9Cn6nKCMmAY6xTZPEMEBn9Uy7p3dBJJacVdkyfR5rnsvWR8wu",
  "key3": "3V7zoBqd1e9JM5BfX5rTiGfGofja8yr36syhi4JwBuU8reRefESHDVPETVdb6ySUnDAtobYcoNsBYNNtawqs4KGB",
  "key4": "3XFsTLjcapHkj8cZ5LKARa3qzz4nCA5Atv5CLcKYmtUFk9AMtfnUa1cTvgxxc5TUJVqxWEkoE7nxt3RyHqKP94rX",
  "key5": "4uLEqDh7rz5sWDpPzTkU2AmVfVGquX3UPnfBVMBmJuBRPhrbKqf4HojVY1KngGfSWpvdpwMapyuXzPERCGi914Ge",
  "key6": "ySSmkcbfHWRvh4L18UMbm2UvftxLgfFA1V1mDKWF5VsiaUzDxeFSb1E3N3rrr6rF75o7jgCvdPf2naWegAkhppL",
  "key7": "64yEsZkjvz7YoYniZNrtr5eywQpntc3LeVDTNXzCRCPogL4n2wEgrz7eRCuLykUxpPZwEzKNVQNiKktoMtXyhEKj",
  "key8": "4LDqQMgkuDJoBX62JJdq8oDRJrsYSt1iAeogfPf4JYVHcVi1YytzKCSrn5aF7Qnb5mXRfcE1s4Qz6zqpnjdq56UQ",
  "key9": "31aBvhnFsKDcEWjFtj1uprYkRsAwxnv1U3hw5qUhy4DbyZ7zpRJQxtz1caNYsjfjtFxzLxo5mshopoZi2jqbTUKe",
  "key10": "3PWhJ6iRCCE8kfHvppvbecE7yFXiVoBf9LmhuaCXiqoixTvfNAUM8aatYXNfsdHPQcswixEFxZ7gTyAKvFbvyiFH",
  "key11": "2km6cKjs8qGHXokH1SDHnqspaNusbRderhpEFB3s8twobWrdVV7GxGDbNZrENzP5ff5M2KpRKW1ZEMwWD7gARj7g",
  "key12": "5bzDVJkNG73Ek9Lqnp9XrsgoDKpe2CEjMQEBA4o4yfvjDyJrJT3yjjHvvHdMt2pYRsi1zLmWosYwAhyQcvj2hHBW",
  "key13": "4zsCmRwVQ4yNBDbMjLTMPiU6NrrTzx6q4iCiPPJqvUTVxoc6M61QgbCvhyBBM8iNNwC53PUU3Qmcmc2ryBJ16Vdp",
  "key14": "51ACi9TbiwzC4KMYA37cxVNAWQSBZ7LBsBs34bua3niywpWt6b4JZDDnAVKjnZPx2qSZDiTaNLc8ZkGKwVc4niuo",
  "key15": "24CSJJhJBHC2pRP7HKMWgRaZWjXgZReUYmbsrmuxBvZbZkALP94ExKdF8qphU2eiumgKsP6Gz6XEZ34yACHhdFRQ",
  "key16": "YjtMtLQ2tiHrTunR78NhQtw4kVmYN7HuMj2XBUVrRW9wdGcaZ1M2AhjW2bs67csToszxc6LtcaH9E2Ck3eBp2Bv",
  "key17": "5U96Tp3CHEnaSh5eAo68B3mSM1NT33Lnc5sGeV5mQRAgU86vEVXPYpia7xZFeEG5AmDgk2YC47QHw5kUvXsrM4ij",
  "key18": "5Wj3Xna5hovzEGLhLKkRqosesdWyE3TGo2HPtMxPZ4yecDauGZPKgo3xtBsXRhvjQptgWFCvuu4WT1n5Typ8wJfa",
  "key19": "4hq4YwTURwfRRnYLrBnu8jtPCAMiJgUwU8Z5QTBmBYysyAEZN2Rdz6hdD7cyLZL51qsD22oM4syuBiTPWQdeomhy",
  "key20": "3uiGgCSYjESKwgFwN37FshAZeXrSEEwLtHg397p4GX25aJ9svfdEiZy65PmjxmMuxNAdymrfCtD3KQf2ZsQhsui4",
  "key21": "4BavXDnxQrdjPghymnsss8FyfviyC8JGwhLcQPF7DhvMrzM5VTKXyJr6pRdd61HJfXKiBdMmEJD4F7YiyiezQM21",
  "key22": "LmhNwQCFpysFCUuh5DjbLHJ2djuHRdS9DbviJEwkz7aFLPDqiTjum9Jarziagzks57oCVpvUWsTEETjRJZwgQ7H",
  "key23": "wK37L7g1TTqMVi8odkfgZopkuZRttBBLsfiXYkQVdMjjaRUm7TmgWKNM4igEs6F6ZcdXpDq3o4rVESejf4avTM5",
  "key24": "4PQ4ohTetHEk4cp1XrWUyeDEaYahLSdBqmQsWk5Ge7b6WB7CY81jUGSxGCBzuQFMoKi2cNGoUSz18M6zDmb8m9ki",
  "key25": "3jW4v9pLiSML8SMXWnAY66nmqHKq21zvvWxkDNXbJaU7SEPQXmRsLaocbsCDoDRUUT2mRfDwRiveQnfdb7aEntuv",
  "key26": "44GYfNyqJ5N2ZTfrNRnC8iuXKqk6NfB8P8UN8yXPdZgdgWx4TkkSJb94Yf5BR6G6wHFpgz5DGT4LC4HU9bVuGquo",
  "key27": "5uXDeghCa4NkGMTDrKiWjNzXnzqLzdfM5gDHGTia621hmKn1w6xXfTeYzfGvTfmvGU2MEyTuxEHTVtxYgJpubEQo",
  "key28": "2nRFyTKB7dH5Y8v8QSd4iYBkgCurvstFg81scKSnr5g1hNmwEUj5VVr6pcTitmMdKj8szJjFQdjiysHk5infypWP",
  "key29": "5WWBkZhVBLX5XUCoexGR1FJCywWDbHwFu9sB5FyqLvmJPu3B9LQwudhotahEKwgJ4bzDBW46tpQSPWZRxTNjmoG6",
  "key30": "mFZ68eHaHTT4bLSiH6GCoWxTYtMLeHfTMia9DL6FXFxU1cFwhkkcnj4PWPcugKXCKBFMTBpVe4ZtsdKsaEjGzn7",
  "key31": "tHGqnzPpfQKTjZPuiAx1VVzdeteYiVy1rohxbjpWV228mnFxczT12XyLgFrbG8xhDRLw2cS8SYxdcg5AxXG3iaP",
  "key32": "41hVjmm68xR82dWTgzG8XiUr5yosLtp2i7odujtbQudxxoK96rCpfrb1WYXut7at84viNCcYNCgwBj3dSs1UsE8Y",
  "key33": "3zqBD1CyzFa2rHaZi4QpjZPDBB9J85u9QzqfqaeEU32SmmLXYH5DKwoAw9TTgZ9QuV6UXfeFVJzEU949qXL6WsBH",
  "key34": "4Vng1StZ4TSLbPUVtoBUs2Lvh8qjtbDKgoVhT4QKBJd1wCKNEQVvUEje1kHie3n4PuFU9k2vUEgNsUBcmm5PTjjy",
  "key35": "2yscTWyRNZ9M4GVGqzivehvkk4embe4vjgoH9kNi4E5kdj4PVH3X4mkFZgDa2NrhRj6ZTkckkWShESrm9jrwT91o",
  "key36": "5XWnysGQneyQAJ4ZF3SZPXMJVVtaU8jLNbbbosgy6LMPP1MeYFisKxkCxe6SiRSC8SqGqArP2P6AaW1kJ1dYJZBv",
  "key37": "28VT3ADzT9V5NrxR3unDveshcJFWdvR6qBQBkfAPkg5nuetxFPFNyaLApFjg388TZVVx9ieQ7UpHMsfhoPEX9kBp",
  "key38": "5YQYo3R7nA9zHi1HaL6pQn8cViZGuV1ag28b1u48sF4Kwrppd2S95C5wyXU12e64rYjvBt6tN26ZSsEHGJ8m7khq",
  "key39": "5m5smVk43sT5rnJqEx6nsM91LuHcsKZ8NtamsF4k5cF8UgYzCWJNdya7wzBQ9LyApK3jV2KP5YzXWP1tsksfqodT",
  "key40": "3SwYfz6A3kkcxREtb35EWeFSY4tF9Z3iGgruzswampTQCrGTdpXgQXMSzqUkvb9cL9pbG7gwmYTx83UBao1Lt7HX",
  "key41": "3EryPVfyadQvjpRmPmytRwXZhjC4xY9DyCV7Tgzk2kBQRCCkVLc814JiceZNB1x2HYKDkZypvVUVEraTBTknQeod",
  "key42": "23DHnu9V5bxGjVUPxsiVRu4AWYg55c5CDtuzYAzCf8BchdyrhEpBg931AQWcbc7xxevHgqcDtrN6D4q4h2U3D4Hd",
  "key43": "2x6txE4Dchnpca3aPytCAipH57VeSafsXUrpic45dHCa7MzAQmLvB2uFfz9QzUUPrvbZLanSWwdiXPFgbRqAvzM",
  "key44": "Brmx2XnYA2qKH8gzPvfZjRtZhkGWnoGPZGDWgov2YnktHW6exPRz5GFjkdP4pVHkzQnTRLzPuotLZbgr4JkSCSU",
  "key45": "64Y3zNfrtA6XGkzUJemqpHyPUL9QCUWgWiRm2pCggLazDtDEbefyWRAwb3UEFAfcSCGp3JpNudxH1tF13N7HPDvj",
  "key46": "1R2XnWiMovrJ6VahBwzfoyRTv2VzmMFCZbeTxaYCgDtmhBzwfq7ZsAX2dn4YVto73Q3wijqV4c5pFALUCvMJNMZ",
  "key47": "5aVNfJ8cMC6t1951L7XQtTtRkvRSxWcWuRZxn5nXHy8NYtdHJNyVH97AYZWMQMr6Uu27cnbYT8R6XroK9HMXNDwW"
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
