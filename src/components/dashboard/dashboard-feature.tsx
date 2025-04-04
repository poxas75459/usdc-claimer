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
    "4nH6Yrt3KHb9XsboFcq9dBVeim54fv2hj3S3to4hQ42BXMEECB3mGcFbm3a5fuLhigZLS1fZb4KDLm45jFBsqGFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gh9AEEHquekLZ4KiVeLiX7sLKrbnjoNjHnFZAjTzDXR89TKpZRQsu1wwjLxCZzpBiVr3sFUz9w8SJbwTm8Kv2BQ",
  "key1": "aH52wS8Rwb57UGjtG4gG6RMmoJnM4uappmvAS8a1fotnEEFzZ8zLt1X12rfRsHnPeSsgkpAPgcCjSMqZ8daxPSW",
  "key2": "3kQiUvToPf19HTK771kY53Rs9N2UiVUkibekc2HzagBETh6ojA6FZw5WchRmkYLtazYGrMgLwp9A9WUVSrNxtoRE",
  "key3": "5qR4dYd6Upqabs5qJ59eMhWvyHaEFZpCapmsN96HzDK4heLT6xhY7pCQtjTgowRhdGQNJb28W3EHSGHLQbUyscWw",
  "key4": "25dtzDQwK8jkKRsaLcyiWuq61qq7B85zoNr1WDjTbXkKpAgk5saHEmUFwqLVxUhuArqdnzwLaN6keam8W1XSSbpT",
  "key5": "2ygMgPGiDyiXBmyzofZCaLVtjkgykXph5vWzSotxcmcXfY6XavYpegALFXHtzTMJPn3AToodJ8Yz2qHweg12RVA5",
  "key6": "3ZJZxQvzNFKkSzyUxYVZVWtJiLVn8iHkCZNN999X3sHb9ZLwgahzkcSXBaNSziAZCs5LcEPTg2mx9Wu99xNkRRXb",
  "key7": "5DwTYPr1k1FDL4zk32FheqBMNb1Xewxp5vHRsiEmk8CWAMbjRrrTTMy6FNoDbXxSSr6aszJQEkEm8jZze1CTE3nx",
  "key8": "3kwt5gjjz19rgofACnc94QRq3zGn35mP2HCLMLQgAq1uR5gZmMG2LbgqZmT3L4s3QYG3DMV7FdWatYmfqPqbyWPL",
  "key9": "3dssiXe4uybTrH4MmrF8B5H4yoHrqdWk33FxswyuHVU3R67zkAzpJLCqkfGjyDPASzz8p91nU5ksh5WWL3da4Tm1",
  "key10": "3TwRvQJMBCaqJPP9ZRRVD4gmYZi2b2jZEPUuUmhUDV2nwibnZKvmPtfYdcBnWow6motUxD4gma8UvR8HbzUJesbb",
  "key11": "51Gt7634tcMKXqVj3uXyp2AHaadNKLu4fCNpJMZjpuBszKK4BNxwjJQnL7vcTAGrAHGeqeC9Lr1GVpZqrb2VPpcs",
  "key12": "5D8xJtThJNyMgL7Tm8j7EopPiVge7RdumAi8KwJgYT2z5DLkHFoUBG26kbAqfuAQeLFVq1bQvoM45sAFyskkno36",
  "key13": "5vtWLQYKEB725xFx2bUWshmgsLFXJrQbegdRP92JVnBzGwrSVXNbey4t4SEabBH9VUHskdpxBgNwAj53nuvhVcCG",
  "key14": "4hHFZHdA9Jum22VQFUnMfAMt4PpyrgK4gDHD67AHPu24cRJL8TRAKiZLwjvBmqr75yrPfcYBX1q5cn1FtpnbfE3Q",
  "key15": "5X6S9hN6greehFq8w5zPAfEFsLMVNgSSNz81nLEhjW82P6HNoiEzpdQtxvEp1CmcDKKYTDZV4iSx6c5PCACjBVcB",
  "key16": "xzNrjNpghcMu6HnsSeHZ1aSvniydvohcrK6bu8mjDEVP2S1YUS23QCndFFVhFoX4rTyqFf5EUArKZUkNfRxQNxX",
  "key17": "qnYug6RdCFiCHCEQUh3qxkcX6EzsbKMFHeqHDZCVBVRHmHKcPc1M2QBM5aSPp9Jqun7XRPt3MRf8iWVRHkSi625",
  "key18": "4zad99xm6PgVgRKGXykLUwUydGeErvJzHEHPWau4Q8uXoWfarXytQV2THqA8q6E9FxDkBbfXfhTTqV11AcYyG2Yv",
  "key19": "41qidmBcL7h3YXNaBy6nV3mWYgsE5WonhjLucWLSpPjGFQ9BJVZNVVertenVnDuyVERy1YEFpv8VVo7FaLVqjohY",
  "key20": "2xniHNciTfJCocbfUYUgeUBShvqb4KTZaoiRpmiKPycariH6mU6wKsJxqeGpegzD6b6FPyoQYRPNFg5255ikfWa1",
  "key21": "3zStUFrWfJzWPrr3XFqgsrnvDpg78T456vtUVTRLDxUUAjBsxXy2prbpob6pc776532bEGyUhVQ7dJAAkfuXUzzq",
  "key22": "2nsNEqfPPivpwXLZST1zKjopZnNQME9ktJzr1cCHby2XKu2Ae8NAp79PwQ3FvnDta4tek6ByySRHeZWThm6RVfbK",
  "key23": "4UrXs4zQLFfWcXzcYLvavi4DAU5SmMPA57xwC5JsJ4oukAZ3bMBQSoHi2xNmBkYKjiJcbZPnSUddnm5TFvgthuEX",
  "key24": "3fqsHpda8VrVSfhDCSaHAuT4v8qstMuqg4JKo9bdXket4KRDfcgrX1CcYYzN5VNzTTfxqDPo9vpFaCtBkF4MQPEL",
  "key25": "ita2Y7iVVPrUAkvzyE35PU3i2tcpP4vieZLPeGmtKSUCeR7LJNefoJwwH4e24XuAWTzR6JgpmGm2iMA3YU6TL9d",
  "key26": "F3MUqQPGHuPZWyvk3GFDM13t2vX2HVu4HPmLGSCwPgiw8fVaM3vPwDQGu6qo2mckzCNuinnyL2vBWD1LcQfppb9",
  "key27": "3LMjvomWzdjMMtU7vqJpJZjz6xYPSjm5EWHWdXGF64mUCeDE2pRzdUdFyu4agfpXgfBrdukRZdeF3cqSw7sJE4fC",
  "key28": "5Mj9qMa3JnTu9MJGEG2ZpmnKkNCh9zHzSDZVFFPqojMkiLC8VXpmtJevxJdhqVkukb7qLNN6wf6SF27uU318mSzk",
  "key29": "65jVmbJMSXc3Vx2mjXGAcCk3EQPafPZ6HxBH8MLcUCvQnmeYwUMSMP4G7fRoVMFVzWW2NtUtUwGAQ4F487TZaXj1",
  "key30": "5BUD6K2oTpTfdZwouRjGRVEJu2DBhEUXMV3wRb9vA6pXfqs8e51ijCHFZe1pbhTrwJGyQfZsVubyWmowL5ZGvaPr",
  "key31": "xP6UFTPUHc9emzby8dnX7JnwmgfjGPM3SybEFirvgVvCP5FeNTqz8WyVUCc8seEB2jttd8LqtphhLvAQXbM6Z4Q",
  "key32": "45dWc6MugeMe2R8CpZ6trNVM1dVbwWCVHMWc9pie9v4fwhQ7Y82ZZnUWcEngoWM13j7qRYjsEr1MEa8zASfp4bkD",
  "key33": "3xw2L5Yfjd8f8ugXkJzGmVkGHkmxr94s97qtKpVhw4HE7zuVvHCnh2YRAKevwtn9dcAcJMS7BCXGTvQUyuuUF2Hy",
  "key34": "3e9L3cqVrYJnsHKwGJx7LR4hbB75VEkKn1sWNsZVZvmRCUyJmurxnV9LdsFwZPHkbcPoHdZ5D8pQG2FLq6VxNv4W",
  "key35": "4mnGQU36mDd4SpSAGecfjP3FQ6mqwmATFAoFdgc14q7dUBkoXjMKDBXDt97ZyEj9d4B8sx3sEWwEinzQxoxmq2V5",
  "key36": "2pLem1icecmeHh6VDrnMecLbeb5UgfU2pXa9Q7ZVbneQwRGkr14NEvqUG7GNYSyTteashQcu6sjBn1A7tWttB6Bs",
  "key37": "5CgzD5naq3RTbYpeqezYMS2LNtNSvEDbgpM7mn4Yw6cYx7iKArMYkK57t1a56Fys6SoKK8dohhGLJA2Ees8pdMBq",
  "key38": "5U64HhGHpX1CsVSV7U7hGTRnMZb18NLdpsYaiSNHn6xtJzRk5kaXJSxD7maufckJCUB2orqUEifLGEKpf3DQ3yCt",
  "key39": "5uSonqFA7B91h7n3DXF2ycbVbxJPC5tHXp6bdYAqVRfGbKLSBbrCpkd8bWjvtfEuP2ErTbDPRLJRkESFSUHxsi6u",
  "key40": "Ng5PpUaBhhCdCXRCDpGo2zGfFcfSEtXzCyro5RJGU7PBDn31LiLmPjx9kP9RjkUXW55yTMA235hBEjzYuAmhyK9",
  "key41": "3FPgoqhRX4Kj6UGSHC9Ai7bH8DWA49UYHGkT7DNnjmUVvihasv9JQJ3M2tDeNKREvYC5NzYgQqpVf2v96x7otgHN",
  "key42": "5HEf8YBWysCiuX1tayHbKkHJyp6zw5EgCfUcaPh6Sp2wgTuRVBZE8e1smHY1NTLiPp53uqzyYiuTwMse6JxPsaqw",
  "key43": "31u9VGgdMB6CP7FboCHPXeaq97MEyRegbjQdct35gPcLZhe1ymvFESn9BQLoqGsN7P6tC2famu46u8sQGk4WwoUK",
  "key44": "3EDomjUvWiMtjmXxndCqWQM2XWGJxKScuQMe6qLH8qFPa2MXxqwaH6HUZ8cqCnRg9HWYAbNqBXxKLWkkrfjtw7pm",
  "key45": "3pVqJxJ4ijyKxkbyb2iWNDiipiDpxJFSpu2XxgNwystBLmc8JeiVSkdwTxUsk8tZvDHYxME75g4ASxik3C75z1dm",
  "key46": "hF91MJieuF34wDFcF6U9jetASGXWSZi4WLJo6jCZ3nvpNesBUj5KkfKZ8w4ovTHZKXFBRrc33FN7aEiokgEyNuU",
  "key47": "4MCzoSrHVX2fWDoTpQ7o7Jw3oyefwRcVaoLENziwVAcbaJ1bMXRfa97wPXosARYprySQFhsEAhFxqhbvnksgqhtU",
  "key48": "4tbe77zSgxK7uVcq7JyB12G7SdHuwRpY5e223M4fPQTmjobJChVMtMJ1hj72wSBZDdfmKqstZeKcWLFB738v4hAv",
  "key49": "3Sy1rWftNDwC5hKFtxXkZ7RogVyLoJHps96ifUxrBhdeARRMyLHGu9zCkLEfihCmFW6czeBgQ1sKfdwcERPuNkDT"
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
