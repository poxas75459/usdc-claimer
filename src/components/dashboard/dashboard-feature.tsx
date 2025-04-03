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
    "2gak2QMowKYuZGvyhFbkbvojMMHDV6PbLNadQycX6GGEmzLywYn7wj5AsR4CgfPLqkazXjxuF1Y674nCBk28wqFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZDM5EYUiQWURFcPpr6VH7a1FKjJsrSLNnkF6a3b5amKoTnUtt1nJgHSwJ1ABodi8GmdKEfZEgMN6he2j9ehzsmH",
  "key1": "51L5VKKmN5ox17fNtSYhk5df2ku7t7KSJmoKoo8UfhksvjWPtMbcvsNNh6sEYg467Tq46fMwdheCD9hMRq6UFQ76",
  "key2": "5vErry3ivkkxdEqrbgnwcjdL2rDNbBQE3DnRtHEUQ6tfx35JrUjk1BQ68H2MLWiEJT16KmW3DLZBN3REwvWa6xFm",
  "key3": "2ZxDhtpdHKvwvVKbrPCSADiiUg5vrN66Q3de1yvJLzmRXwf1KoKxb4CyS4FFYwW7cxyjEj1Ek7wtmpQViP1FZMpC",
  "key4": "4kYiAJsuQxcoWTX2xLewdgVsP1ZfxqdrzB5T1e7fPurDVFpRBUosxVRbxq2gEcd1UVt5RJDQQtsi9fTwokKynf83",
  "key5": "sWmLVZtfVPJz9GYdtUMdaTfcQhyy6e7UriCL4VLeM2H71uwRwgVM39nKfeMLYr4jycgMj5ACFy3E7WSCsNZo1sn",
  "key6": "3f7b47txdDcmQwX2w7xVc77pVQddd9usREVpxoDm2a3tCaH8XmDTnP5E26eVxPhVc6SJEduuxA9GnQuz19koPYPP",
  "key7": "2QgALTnoVRTC6wscwwJCTCUF3QwpoxZ1GjPSYeKdnADh6ggRoNAXs8JEgAX9PSmzJiZM3AMtKPCnvnqveoXkDUUz",
  "key8": "nXHniarmNHCnhpXuDnq3T2zqo18tJwCGoiNjjpbMC9j29GApVNPM8HgcHTRC4WuF1QfazShGsoJFKrhYKcPGVVJ",
  "key9": "3yb6Tv5nLoLxtUAub5d6kv7pF5P1exCvUZknnJUtfaS3YXwx18ejPYHURAqYyuX6xkzeiEdYuNqK7cdnqDzeB8cQ",
  "key10": "2MmKDLf8jHuFjPMp3mDb36J1YaaVdVSEKoyRdc1qp5m69QzaCki29mbAe6jhsZ5Knuqm1z2qTv2cBWHYnYQUtV3d",
  "key11": "4W8pYKSwpJqLcEG8cu6cnwDm54ipshTjeiitaBEx1GLS7mDWiMdsUwDi98H1xDjvHg4BHsfeVfmFdicHpoi6AXCq",
  "key12": "5p4kvYeKZtxR29Y8D3cxNWFFRhhS9fuAApbGJAL5H9m1MjDXErfAJAg2ekE6nJYDMaLzVN2i1HbZ8V6dVFDinL4j",
  "key13": "6ALz3JqtYk4az76XmtucnaAN6Cha3XhuwRNAvikcjendmyC1TyCjED4f3xDYyiK1AyT51KNUx2rT8AuLYZMUYkA",
  "key14": "3Kyn8LTxH2uPmz6MbVacy8Z3hV3zmvDmUNtqYi5AvdDggWeUpMGrQQRrPyyE3bQHG1JCukBAXg9XpZvztJZv7UTL",
  "key15": "3NK3otQSvr5MHA6MjxJRFALmh2Aq1HdQnQzKQQv2FW2KVUxvKew5LPnaUDpQ85xa2wcXqu7dyB5j2HWZ17UgPNv4",
  "key16": "4Df9QLQbT9SiMqQMnhGm8QFh2A5Jb65hNNDifNbHAcXdZk1xFYnqFinRMi388uf5fgVnGU9P8CiMrfCpdnwRy5cj",
  "key17": "3MQCP6FuPNVcYWGPr19RqB56bLw5gfcfdBxP9GpPbxAmGC2ibTiq11gJqRHQEkRqFX99RnJajav9CEXaKxGANXaM",
  "key18": "4V5YQhv8rgDGuQdebRwiPfS6nbrtCF3dfNsURst6uYDQBLoCvFF7CvTuE3JUURghjSJsdWa9JreZd2rnQCZ1734w",
  "key19": "2Xhcx1Z9NQAa6nKpk3yG44tSH4YibZypKEcoyuZQZLyJsVgNQEKw5husTucNLtvbPGVXir3o2qSiF2faNJsD3Lqk",
  "key20": "4tjZwRfgGMuitCHEhTqqbLn2PDLjRfWkt6tj8NFjmV8prPzcJWzyCZb38RDjUeqn1UgwcrrmrScGnRCa1eGpnsBn",
  "key21": "amxWT7T32ybinvwhj2fRxFtXjuciGBWM2bbFHCceKyM3ANktn3psaSRD2LogtkK6ESemm4NEiyHGpeCEHygmyHp",
  "key22": "3JPDPDpUsmMKFUCEzoRuMHMgtDR91vyy2EKWFvq9D7SrnH5s4gLqxbcd5JDD5RZ4zXyEFYCuBhHy1Rwy6WNkRDti",
  "key23": "2WxUGhfh8AA4GiNh4A5RHfioUEtG9udmcnv9AspoaKaSGzrvwpYx5k8W8FvSFAP7J8xD4MUonuioNSvh1qUJ13hu",
  "key24": "58USsJC59HgKbQwPEBcBDZa6618PVmtJNrVtBH7Y7DLzpDHvWuA1sLBLaEQbA9qedS28dE4TftnTvLFTQRdEhdmB",
  "key25": "3UrhBLXx5Gi8mvY9yN4YuYURuu7iQ74XeFMbHgcnwJr2rjdZuYxh9sGWW2yQBmMNCm61o7bfiAgn1f72fpjAmLJH",
  "key26": "3vbkwpsbyPQ4gMZLPX7zxse6eaUPJmNcy7Q9nNQaCqXwmsJFeGpSGX12e2wA1qCCD75ne85gCWdbaazRahvedH2L",
  "key27": "2fokDJkQnP6ruceSCwvGC8j3rLuusg5FYRBQSJDVwN2THcL9Csi2jmr6eWytJcmqDhb1zKTdY2j3T1Y8tMRLidd7",
  "key28": "4VNZKChz4Hu89pVV1B6ob6R9vbLc1A45wMeMdj3JkhjxuxPR5a2W7Zoamr5mPk35pRMFLxqBqiNzSmdWTfbdreSx",
  "key29": "4hg1UBvtsbByxHH8R2unvvHTgR7Vzzq2VyqxMYn88298JDSRyuK3QpzeKbYvfNZ3yMS6TYubiBpEtk1zKYRbmpRD",
  "key30": "2V9dRVmnjthwiUasegjP6HgJRg53h1tngTPrvA7KMLCDWARTVHR7itZqnicr1FD12Dh7oWwsa9aEKQNaGotpEfEU",
  "key31": "41GSijrTAjQnjqrMpHCnq38FFu72fYpp9Q67RffdZKjtqBnzg52GR7aZf53kjYtzLCNBwHEkUMpuSxe9eLegn7DV",
  "key32": "4kn6XiCwNy9o8nkUn8eWypcM3qt9uh3sJWfrCnj5bqRrZqnwMn6RaURBJTTw3UNcjGsEd7XaDt2eSJwACeXnKgxp",
  "key33": "3E5JXkudDgKy6v9nzyYeqNuYJQWRiuY4xXkvK1BMyBpw8s7CEiAs5StV7rmCxucTcpNrDUSjuJXw5KsQv3dcVq7v",
  "key34": "XUBDURyyKLu6HrLkcr4LMkdGeBQMrWA8BVVvBePoY5K4smE4JVir9LBpeGqaY1UFi2RhAjoEB5uYKhYaiu5tQ1N",
  "key35": "5PQSh1UvdyUjatjvqB67Tb4MLQLnEaj9MhzrtUmTrCytc4owmBtcjXYu71VLDzui7rPFnam6mxno6cgxAacqimhe",
  "key36": "wM9PKnFz9Tvj7jSH8GpdZCw3tBiPM8UjPibe9KomKHAJhfmsKH3Vb7Qwk9GBzr6FaWXG5ifsPzBmfPLoPm95n7p",
  "key37": "4H9SD7seW7oMhEhauTBtyqv4mrJapCf6iotMJWRsJVHBxhsuiMdjjR7wsssBb4ZPHDiGASmAjgKiNqMwXpB4ZNaG",
  "key38": "uTy67kZMDVgSe8mN3u2pg6QnyJGW2nGeQBXrKNikybqt7J3rn2PxgzYFw5FZhWDWKUs8LQMvsv4M4Xp9f49gR4p",
  "key39": "EoiwLLoxcyAyRm4geKtm96tCyrLv5mK5sPPNYC5MvxhJ9zRxpo2DW8WpfKrhobHY5rsFAoK2HSdF73ecsAAZnqH"
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
