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
    "4WXfHRFnX1wcTvknq7GmebTEK4whSN4tFMycnhHtjj2fmPFv4RNyNFV7jh9iwXDLSSCq5foA4u1uQ2EiZU4byxL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63h915XuTR5KUopNM6DAqrRcXTJQyPHvDv85xWqFiq1YsW84q3HvMUMFdGdQkKGWpKdrPqs3pQNs1qtnMC4x4Q7u",
  "key1": "YYTheYipHeUYd92b8dMKcquwSFsdcWSVfaGYa57yA7mVMADeCQB4hifdxDGRbYwJwMSWgachwRUFfpiy4FYZsuu",
  "key2": "4NrDLsoVMTuebgEsGaybWRBQeYGoF9LXHnaKyezjEyuj2ztEuDnBgqRvbDzynsSi3Bn8WVfSu1nHFEqCEYQ4V1C7",
  "key3": "5UGGAHoJTegCg7BhgawHeGzCQtTritVmLx2mLfF22AaJouzHmdT2Awer9kt2Yqe7mbJbSbio6TsTHGapVhjcjhRK",
  "key4": "Fqdu1jrYznuMY7Cy3mv7D4NxmJmqSiZzoDZH1eEEaNE9CTpPgF3cCYuo6rJKhtRjciFRYZtMC6dkf6qhh8WKnts",
  "key5": "5DSAffCuXXZHeTQCKt5g5esCAYGk9sMrT7WnKCd1SumCLVza2EHEyHBo7iiyNPTdk8oL1zrks6e7rRP6yUf1aPUW",
  "key6": "TRQY6DncmLxUuyBs7SWhdvHqvmGLvS3iRoZNHrV31CpveVicGXqRnbk6HuAqDfBb7GhhotnxGAimJTM2CppbnTq",
  "key7": "2aodTYWSGZvvxDHP3qpB71j6gUnSawSca3yGTgkZbAzWxQcBLPvk3vGB9m1ueiPN5nfNnVoUPtbA5W28F2h8fgZb",
  "key8": "5hYWzZGyEoCLjVjpQFvQmCUrU5sPscNwHzMBq55hgeQJK6YutpKfKA9iueu6uM7JyHPq5cUMhXP1CGfK4gDYeJTP",
  "key9": "2tuDQKGKL4BM53bt7gwRAoAEkuvHfviG2zTH1T8ihuFHXFEhQg1ByopFV5B57a3ZT6DyCgCrcTXxPiLZxxV29Fdb",
  "key10": "T4K6WftTkQrbuAajf1o3zuvP87s4Qy7W2rq6wvv14FxaJFPNhH1wq3iHeY3nssV1tT4xtKWSBbkdeR7UBhhMkjV",
  "key11": "56adpR3X8snMQue5VjR5mK67EeXChHifSbtGuyiEemwN6mdmkCo6s1yK6AkveFgDgMapfCjwXiuaf5t9m89Ln2BW",
  "key12": "sY9soBaJMNbrCGrxRQaYrPC6EmyHAy2J9NcDvsrsYge6ySvCWNYPTxVtHpgQG67zZhnKAoKfkRq5EtqUbpNizA4",
  "key13": "57Um3BjSGF85Jnu21x9aqQf34AnaDe9cM4x6pxp3fBFvVsEgyCq9i3J6NDA6A4Tnim8mbuiHj348ap7he8i5ww83",
  "key14": "4NZYYWFTQhcwYnqNqnGQszQEgmhsim4SfieX9tUJybCRZjscM9HMWyXBaSRLp3VfNJcsk75Z4tgUfkXk3ZASF1TW",
  "key15": "2EvZHHFpG4JJRCud5Cz8DDS5zxyhYpUgGz3efFkX5Xy8tbqKDN1n4AtHTvDqr8xoKLZrz3crLT8urqb8jUCWF1xT",
  "key16": "sT7EreJzLSLVGkVxLNUvYDQgQBaa69MW2kbRQbV6HHrYnGSGDdzF7R8ZgVDEFDaZPTHpNGd7RSGsuQ29VCX9f19",
  "key17": "2ZLvLSfUbZd616yAcXLEEVL2wAJ3ebJwSeQjHaZFC8sLrTV1jZ629FT2uqXDkVxWJTrQ9d1sC5cNSkXZg7ZMpNLJ",
  "key18": "3i3p5L3EVYkLde41xHt2D6Tmd6Q8YAGwmJtJkvMufifRnL6sji5AmyRdeSje6HxWT1N4n88Rnk23FDn7gscZQqGY",
  "key19": "5oaJthmAeqHp8Zjt3sgvwvevKpcRRZ2aJi3czggPpZ5myh8qxW5vmC2orkMSuwPzZjU5j2NehyJbFAFUNDqNXmfa",
  "key20": "2rq1bcJs3P8ZnjUwRaBtDJvw6GTMieo7sUNwBTBcQ2ffLPesD6PMWXbjnokoVoKVhRTYLRPVEx8rBoxR78JerWQu",
  "key21": "4EMHUwi8hTjo6ifjv495qXt87CnwCSZxJHhF3QotGKoWMNVDqL4L9UdQAvHUdouiikdo16mSU7mSH8eyMbVbiuoh",
  "key22": "yGL3uTYCFaf1mjkn1b9fRfB1fU7N8ZEeMvJMdSEwLihUSHbjR1LRoouYWf4mcewrH8zAXgP1c6mypndqCKw2MDS",
  "key23": "L5rESiXXRnDTPPUsYgcXDLS24NCyE3DeBcvaTr7ecWFMhkfekLPukz2t7BKJfqUYFQTz6gY3N3D2Z3Tge9hbD4a",
  "key24": "3MZGARt63rYC4xZbP8kXv5B7gzZ5d5JPxqMVzuMcbwkfnVbXFj4kuCfqkCgf42AW9r8cVPTKPo1Xu6DBJcArVnUJ",
  "key25": "3gWgkBwH2vDtFBe92x3QUo75fEixreCrMtzXEcGrVWtFpmX69egYyB5jRGdacXNUWUokmaQw6SJofwwPDQNHb6by",
  "key26": "4uPHKVrR23MURjRd257sbKP2KBVwV6KLLNG2APivehWVtqCtQMimm6GQU7LGhtjnnHN7FoLkB6U4bUT3LM7wrFxg",
  "key27": "59Whfj2nrTSDbhktkSCe6nUpj28u1GR97v4tWVjhqeKymErxtG1xWMzaQiyS5pHeKoGj3QDm3DEhd1fcEtLw4g3o",
  "key28": "3iGrvRJTGT5NFPu4gyw2sNAHVMDUQSNqbQMEDZc9LUTp3Q8erFVvVkQ3am3JHwfy85Q1NnRZCXhKHPAY5EpZDwJD",
  "key29": "5fwCHhSiyHM1zvbD7Br8TLgXMB7eovUaosgEqkfJ3cmjCEfy9fATBqJth9DDoCQj7sduqTuRyCZ6G3yxcLd92aQD",
  "key30": "UtweDPnHDzvVYbZRDvEv1XZcWepjnkNxX2zxL8EWnxAKA5JaJdvYSVewhos8HTDKyeW8Wb5e37w1cfPVKjKAnuZ",
  "key31": "2RgYdSDcwBCPiVQG58TEvX1ugEokgvZkw5oHrvx2ai5SLa2fMfVDpvxCh1pu2BveNg3HTNNmW5CuGoJPNDhbELLU",
  "key32": "4WQDJWKP9wfTZa5cCHiW2RfiupqEgiTFNfFMfYPtQwwzNK4N8YtqyETJriPQTusCELuxiqrJqAQcqpsR1c3dFfji",
  "key33": "XqbHf4rumeZ82HirJWtjqWQcJ2SHnutiKnK5h1zemK9CA1kLvGcUpPNdTKc5xo5M8HwSXSy9tM39AHDDaWLvjVT",
  "key34": "5Bna2hBVrULyp4at2hJwcsmG7jv9vdwEXotzMMTskRxmgNVqHdeLC3mWBh8QR9i6WWiBcprp98P9VfUkb6mjHt4K",
  "key35": "4aTRpdDTxBrjMruZmffmgR5bhWEiYZVRhJ1rVLZDHqCKPLfB6jsY3Kfm1cLQas7u8xijGEbMqkQmXwN8GpUHYNia",
  "key36": "2EoWSaomGruuCFCk2JiPCZYyxumZ7K2EMzcLMGPuX1iLxjZqNjqvKdMFU5xPDGgArFLVmnX9HM9h5AsYCJrLmhat",
  "key37": "2HxQ1YK9pppKyJtueiX56pRkDLyjQZr67eGbqArWvGyYxrBmbKxRbpYY7EtuN4QDuwwXJ9vrEgoy9phD3M5CvAJU",
  "key38": "2EPmBwTp9MzcS4uEVn8rrphby3tosu42sv281wBvBPXPVWARAmaVoi13o6qG3sPXu4tkFcTA5Ni6uJnbQTAa4q4h",
  "key39": "2oBsGXunmaMEvaMmBmwkQcMRo1aJaBegb2x2n4in9hjZ3QnEZwEjX9SMSGL6ucMmSUmrfWyDRZcZmqKY6LKfCVjQ",
  "key40": "3f3ksjGJnxCTbT3GUwPoXLgD3SvJZQjcLUJwm6G3Y5fBRYzPpMkS2QBaqHY3KLLKQtVsHgUwuHeJqGEK1GsC4Rd",
  "key41": "5uwEAxJyWmXcLYRRUwFoacc5BALWnofE7LcPo7CR5dUKfNG7ZgiNZdXKpEvHcmAmNutypWQheycJCsKpRDdq2YxQ",
  "key42": "2BtmLcz4du3ztu7HxWegkai2Hf8gUz4oNUYmwb1WnXz4khE1ED9t3vUuXYW4rVCSD4qvcBXEH8oi2ZZixyYDvz7d",
  "key43": "61bRgCQn2w79rx8q1p5JHZiyQf4mf999shdggBzYoZmzX4h96kWYDAimKbxLcrofRgFCnysasftMkxfwTX2Fuh8F",
  "key44": "5UN8wtTbNVjYKZJAmF66fEGcPiEbW6HNxdzsSeyuT3mq17Eh3wurXTR624doJNjf1sP6QDiFzxCK2E6DDTeSEzhe",
  "key45": "4dcm9gkfL4f9HUDfAZ1e4su89sUZxT84fCW8YXGjBXJqJ34YGSMmukce9svHyvGw7HvUo1UQR8aFtc61Pz8WpDHP"
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
