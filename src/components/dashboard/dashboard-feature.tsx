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
    "2joFH3fv5w4ZMi78BXcRkUPBstcRpridmnDsRDXuNqyErEFVD5iCEShdpc4WTAmgiUtLrRProDPSWF38tYjmmCCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zQ63HCEE35wFgw2qeMYN6Wz75iDVTnqsN7trXWY1PbWwUBBAnoSxb4fjnZyUUKMcv1a1ySZkhvBGhCjgVx7nP6b",
  "key1": "5Ldo9GS66keHtY9Nb8Z2TY9ZycisiQkgeVtktWAghJPCaV6RcQ3Lz3ZajG6g62rgiLKs39A4Z9CK5hLHYEWAMTr4",
  "key2": "5gYNaXawFDLvMgTDfyNCtmP5jcU3JtJjnYJ2fQfBTaeUQC7hrAQ4pbNWxwbmsvuzfk9nmhj2va2DN2dcaQNZ6B1y",
  "key3": "466DzE7vwrZhviv93BEJhQyYsg2gt3YNzhWvJYRPd7Lnb7mQDyewoDAtoiKgqMMQ7DYoVuebhDcXem4yn2iaAJ3M",
  "key4": "5Tc2y4CZF3qZ4NkJMq7pwmQh3tapM6Ck1KEvS6bsHbziPmWv2sg4qKNY3K2peX3kbcLtrPkY64UyMxEiuP3yPpxL",
  "key5": "4drxxvhHHPmmPBD5Bg7pF3WcLBTPGjGD3DfhqZssBMCC2kiBNyefTCQ9BrZc6J4jAzWA5ubTK8oLRypFVmMYmhJ",
  "key6": "2CNi3cC4hWnK3aodoHoe9kJYmXqjhcyQRsBvFCW8pehyifzvcpPYPxVvCRi7idDdsgFHL9wZrhCwV5ApKN3qiUoo",
  "key7": "3LK4wM2U4yKtvzsW43YUuVXyPGpb1tCzoKcADPULGz1u7EbW192GPqVqdc5bn1FzsbBZ2zYnk3Wu1fGpVrSTScuD",
  "key8": "48ve5eZar9qH9wQ5pyn5MUB3RR8cDnnNWRBTMdUEoYJHe8R9cDudJDUc7jTsoqRh7hFNSQq6xLJCvFS9oBjy3tk9",
  "key9": "PGhA4jp7QF2bCJqLcwxScMAUGDJpomd5knRJkzML4kTgr2M2f9PxAegu2sAaWpgwwjS6uB7qo89uCZDKYJAi2Rj",
  "key10": "2QRmjJFSB6WcBtmQyFYTQLdjbcuC9aZmJKKjy9FuAyw3Vm5U633ztb71nbo8UsXpzygoWjAd2uDfu8w5Z7NnLzbP",
  "key11": "67mZdDmdHCpmd1bW2t9hXdXSbqvDk6qBFeY3qLJvotuqQ9UyFoDzn5i56aEZXqLdkitAArmvLtiDrBbzzLjpuMSX",
  "key12": "61j6KQ3YexQqmKf6yLc1NwPzUiWxhFnVrW5yDXdF9JbfKZbEPDrQDtmudNMheWT9J7vwaVAnuxS9EbwGsb9Dzr18",
  "key13": "65tBrfK4oddDpFvZVMF4jXRtd2fRRhrYz6axzZEgMHftqAaPtNSJaUssn299wQBnH556gzqqmStbkEBhwmwMLgT4",
  "key14": "57GKT1HTJTCmoQ4LsF3g9Nxu5nAGWwccfNiLxLEwEFqioKyo3nP5qJaGnMZdisNT8QQJqPMJrdYHQ6KvrqCdom5W",
  "key15": "2Ue7dwt9zEp59VASShxaHXiDgp2vSQALGimKFN2wXgRYbt6P7LTmCbAVhXingEkDQjn7CvyQMBUHR1LXXKnJ92kd",
  "key16": "2izjJz6MgSACjmPoi13HKY38USXyz4Arm4CfAckaESmSHBojT6yrGAJgMjZidVcnbPQsVXVB6BXEm3UuHky71pYs",
  "key17": "3D4wv7BKRovDyBDpP3tirPhxPQ7qoq2L4ubJzavkmYFpCt1V8FsXFtyRv943CQtFFxVm8EndGLgNp1f45myNJLjv",
  "key18": "5eHRuYd8JDsubL4AGxcGhYgMUBbaVeMscRYbSRqcPuqRVwBowCQL2cjfhLYk1VeQZPhvjhT71Mo3CH7dd5RXJDGe",
  "key19": "36Fu36qKuBpsFc7KhfuMrjut6gQDZC97u6BRmLwe96UZgNoZkW2JuJ8bD997WdVgSw1c9hway38Qn41fNt9rRwfq",
  "key20": "4n2zBUR9X68fA4eht6hirSZBsiU2nEnQEJufM2C9F3DXT4zSb1VzrFpNyfXKGYqz5c8cfk7AcKa6DfhpvwWFFsX7",
  "key21": "5wMVaWX7SEEY4WS9EVoKmMkoL5uzbR4Y94sQkLQ39Nb9FfVpYEPyniuNDGkakxmh32UmSPwM5NUvXeCXdd7Zj1JE",
  "key22": "36XmwgUmqK4UvA9g7MmwXwN7ZhTGNHCy7Mxw6EHE9jLTYWZHfytJUzzuXwK2F1iDN1uZtg1YVVd6ay8i6SD9hpno",
  "key23": "viQgA2wyWSpufb6gZXRzP9PC35xjJXb9fiCe8QmosryXKXEDAjoUsQ93iP7RV7rsoxyHWf1pnWKmNTtwUwCwzd5",
  "key24": "5aGATJgAcSde9izXRAL41nKSCEqGh8rugi8mYZJeB99QpNAQ4sNSfXc5r4RafDrfE42KYThgap4h7EZrY6wP1oGP",
  "key25": "2K44oLsYA9HNb2LCebq2d4X8T1EnHiXMUDw9kFPfxSwBqTtWLoAi3GdZeBjCUmQe2MM6uUY1wvPXPdEFNFX4jbBH",
  "key26": "FAwerJDRj9fGDXmUwmKwyM2r11BYWxyHQ8XhGPL1ogpuktTt7Qkbewfs54syDsMyhU8ks9cUR6Ce3kUeB5GbZa2",
  "key27": "4e9ZUHr1Qve1HTh1pyq59biFFJ8PLgNqZnR8CFWBa3ZZNgJpimvfPmMyC8nP2uXmbGa5zxamxyHtKza2YrVDM3tg",
  "key28": "PknM9fBX46zQ46GosmkEjBdKV4afP5ENe48SBLNegf9BF6NCGt3kCWmL7uuovGSy8WtVhsqzChkvHoQxCEekpUW",
  "key29": "4nmof3RdbLK3jBgHwyaUNZ7hLh6XkpqKnPPYgSsCZ2brsSf2nSaK1T729T2eDbTtYrFGQDr71KnEMTFL3ULk63or",
  "key30": "3ep6Xu3tutTzgj29bM1wyMPN4qarsV6GH9KCd2Juk4eFudqXgAZs6dKS4HLDbqKiRrYMBf56dGUFDN5gkM5Au9sB",
  "key31": "DZCg277Pwb7oUU5izzA2Crju9YxhPdYBw4cAx8nciELJAr7KNNx1H8o1vuw2psFzgQ74df3ZG8vgLWquLyScJDB",
  "key32": "2up7bwNSh7B5HLwvBCysWNhCf9gLh98nMG9Y4t6TxeQ78pHf9o2gjzGfe1dy1J5gRGpMd6CR1QuPvxfNtkqLtw31",
  "key33": "3eZPbFRXV96wp9NCsGtiyKRU7vT93gJU2K24tDND5FxHSNrVLZ7gbMgczFtD5aMpaADAbtQ9zkVWGFChfjyP7mAE",
  "key34": "42MHQMJsuNAs5pG6Nbioi8GWiuxpBQTdJuuNFptd2GfK4MjHSnha667cERHjijsr6HBFDpAgyfxDCedp6LjoC8x5",
  "key35": "4LNVKnAYwTbHbhyPrVy9hECzW33zqH45tFon3MaQFJUWfYUmDLPXD5CZjzQLuMx6133zVxRZPppqbTTBVXozyz4x",
  "key36": "2mbq1kna4ZSQfWc71hTLbUBg99JRkRmnxAhjFG8P5xvtzDG7WzJqngv1bMDy8q6i4QZGdv6qy4WTrnjaeqA1RGA8",
  "key37": "3FiXGkQEGhJHG3FfERvrJq1y5kVPhuctweRVJ3W7d35EBLV5ryTEvtZawT3iyiCWRN6KxuCRKggtZ9kxfJJbWr3P",
  "key38": "kExsVPMt8hHrWCjE4g6HwTJdfpB8bv7TXEBAVc2kx1Eeiyw3kYPXNxv8hidJwipCeMNhSNwHdtAG5wLwTN5CGFD",
  "key39": "5fMJxRGvmGZ2muZiC5vRKfS4J8TQTdJP49cJDJGnTBjNj57WgpqtaVjmwLqZiGKPaSXh3jVJpr9YFt7RUdQ1kf7b",
  "key40": "38D13KESppGXHDh2DYoG8UeYkY14tHdNP2pnnRMLSkWMmBECYcCgLnCJjm7nJs1PpCSG4jJcMKL1WaEqCb8U25ES",
  "key41": "5rE7Xt5aiCa7hdoCExZMkgaMfoWuw4WR47gYuMmNAtXx6QmXpcZyCQ89b5WARhp5HVQMxyRWKMJM5xNukSXdZCzd",
  "key42": "46ZMLLXFE4rzpDuKQtmPnS3ikbc7NfRjEezPKY91F1BRhZZXjaJozPDkJAYRbg7LEdjtxGzMGTGc3xfNU22Yv1xx",
  "key43": "2VoVEYzeNFjZPKwFM3V5XZbjJw3b9JDevmZdJunz5cf5nuNxwLJjv9xs1BHCeUXhth81JjLBBTfBL33DKbAXQEXN",
  "key44": "33fXAxYCFka4WwRGV59xuyEt2wJbbkMS2YfJYMsFt8Ad3XswRqvD4JhNghqypxShYcvVrGY5sKAXB7eEPfVqyRcm",
  "key45": "2jgZFoVUATZXGrFQSo2rasK9znM3S5UcmSkYXQWSB5fcm3MiLjXsMQiJU9jyQtbusEnoupeDpwdAT9tC5cr2XbyY"
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
