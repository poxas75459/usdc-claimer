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
    "51E7SgxkWPDxdVJSFybBTtJZRJqvD5sQBASYEkCZL79kQ8DsdpqTnzRZ1Xrh1zc3fcjijjPnuyr5CjRMekJCtGTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bzAZo8xx4iJTEoARNTW8B91yWkiSGeamAzMFwxb3ac4nFCbrcjGRnVb48UqtSim71XoDCv3mFgq6SpA9vQb8Rzw",
  "key1": "3zT7ENqyvse9Mbjhg8c52zjSa2eJWquU3hQVEtcPw8qaBymtw3dDRvPtS4CtXZANqqgFBPUt55pojv1HkSUYN3vU",
  "key2": "4nh64tg5eZ51fMvjnFQaxCZ3NZfEF3D65QcH4WdKRMih97p3uiD4FZYudEbDABUBwzm6PRJPRrdxJocP42wdJk2g",
  "key3": "4rQnsV2HuePruqQKYE84fXoEFPbMrqtSoPHPPpTxcL9DQc6dq7oEZaquKCvdAe3iTPdVM7peXyoraeztCsavt7WT",
  "key4": "3hwY28DRaQtZVxUW67RuLBzdjgYfDy9MT7hV5PuNTQEz2edAEVtupaPAtRndgUPZHRi4ZZSDTBVpoHGVn4wp9L8L",
  "key5": "3CDc3zshJSJ28YbmgDs3N8shZgZ1QAyiAp43zbvZtMbT5pXQCSMzZLsCXe5z9Tqw3dhdkNqhfas44LDSotyQjnhR",
  "key6": "3hC8feXosszQ9P1dj2EahBGVPqLjowU5uKpo8YgbAdTWNbnUx7UrkwMXb6eown5g8oeGfgKDtadF6KpnG5bzrTGL",
  "key7": "25a2jALUUXuAXjXq3Ugt6cTMoQicPhUqCzXsednTUfrQq1aa9XpGbD7KPsXSqJNCrRC9TPGK4D26d7m6d8CwTrvj",
  "key8": "DSaqUpwjW19oD2tnB7wiCodT6Uz3waFSZd6XcdaJFhfAyUgzhwYRJrYsr6oxPPskGChzfSRpq3xjZZiZucxVAp1",
  "key9": "2RcVdWef6q5jTvaJJhavFx9Nx3nN4FTtjMG9Ya5dQSKjmGXbhmQK87peG7ya1FAQUjhNVxGSPapWsPMgBsVELyrs",
  "key10": "4RkeF9FS5ZofXjAxrCpdwafjdb9o39icYEBZ2dVgNvrUjSAtpNLxMSgGmh2V35MS63j44pGeJx6m43y468VUqmsA",
  "key11": "ChJceYEDLmvL29W8gX33CWSR1wsSPbTE4L5ehBE8eiLYuJvyjJE3JXGt9JKZTRZ7VFBpQr2VUWtMKShjhndeSMa",
  "key12": "7Eqs8ZYiNSoZFVhoc9UNyt76YvyjNBq5o4eTniXBoFRUsnPUUahhcS3RRoawuTELbNGf9exuxqivge8nwXHweR9",
  "key13": "5bvkR9NZro5PMoEKo64TCDC1LWnivpPcuYd9ycfzRMCseFtAxuMMQ1hM4SV81cHS1jXSgjfEGCNvo8Q1LZ2SCnNu",
  "key14": "2Tnmd5dNwjKYyvJHtJRHKq6p8D23tEMtq9VheaHNfXw4UkvwEC4bpj4bLXYkvSNbgeuHRtkvH4YaJEPzX16tbSSN",
  "key15": "63ViQhZLVva3Z9a9zFQLMbQcZooYnMnweh6FFZuXivFUezzFdp5Pb73kde7qBqjfRDoBYvB9fvq5BNSvHX4aDdYG",
  "key16": "5Po834vJCETKcSbrJfz5DJ6ZRaRTwq6myZFCVLCJr9Drg9t4jLvjYhspQjFPePzVSQAXBJRQ1PsFJtfV1KF3VpAv",
  "key17": "5iJwkaPbssHJg8uGV2b9XMhVSK4JWeUZup5D6nvScSwWGnnFCTh8ChSMxdJVaTw7shj1jfcfAh1LpDzWn8fkYArp",
  "key18": "48fP4BACRqeLukD3wMXVpo4cW8KfuWL8XNEowEUQviBHgVsCfbQQntxp7evR9dtyxJyqTHnPAQQsEPEdTHniLxFi",
  "key19": "4p3ma5kZYdfz3dqPmA5zVsbPM5ocY4C8zpdnqHpC2FtJdfPgqEMpUTH5Pdf55zvBa61xmMX7dh3FfbQ2GxKvw5zC",
  "key20": "LiL65ojzGVmc2NmRAzC8kWFL7BcqosSD6kzsm2LTzTWZWoNLHU1nsByPexMyEg4t7zaMt5MQinq9hzTFL3kWeA4",
  "key21": "5W3ofA2iTzLpujjqV8wHm6jdvPmHkeQDyv9mCGQ9KzxoJUGdMf8FVexCuUW2q8u6VVMXY1Xf9eassWAdtSwAYiW3",
  "key22": "H95zvJfkSGBEV6oqsb4qv3HTCAXEB89d6w44TzfuiGSdvjNKFzbrj7h4YBNppEpYVkxmJEZCWdRWTepFDjqY8w7",
  "key23": "5jLahmuTF3N9SbN4tr5z5rnqg5QX5iZJLvqrt1dsS3sq2d3oXijCk4uC6G6BYx7WbQEVUt7YGEksG7zaxRxsTysP",
  "key24": "48zrrbScn6KSiHHWwhvbYHEMqhoT9c7kQVNjxLTSrbpXtDX18STdsBvtJ5oxCuwidpRGyqXXXT4FAfHTU4quitX8",
  "key25": "2j4JZbxN2HZ6rxiGX2XN1yZApKkY4rCUgTv8CxWZBKwzaeDqdYkNaCxbYSP5aaRMDN6XQXjKbpLrgdSLaK4GVJi8",
  "key26": "3Lsr462ZBZas8usMUVRfZxN2bZxT6Q6xeg6khaKZwJKkKuN7Nu79xiM6cYVh29PE9WeBUHMgU6z9MmyDHUVQan1S",
  "key27": "efdKsPtCVhnk7ZKZCXjMc4hsp3dDzvGsb8NoarBh7HxE1XPWZcBB82HWF5vhdv57tmWwYN5wAqJypLsy6DwZYAY",
  "key28": "2qJEs5rypnpbyRQC5YvSJLUfHbk8qQnEsvNQHSfquQp9D7vPbgp9gjYSLKSCFvXVeN5xkknEKq3R7H1Mn7p1QkfA",
  "key29": "4HUPx3DMBUVMRi2uWrDRvHycZxPekLGMjc9Qehsa9nabzA3NqxeRNaSnZMVYSK2mocE3rsWe8vmmguKxh89KyAn6",
  "key30": "5gr2dAUNd73oSTuFCG3ghtu2zkwnZhquApBAMVYMq3s6JByhh7LLZmSpvVmeWAS2Pm9t7LmPwQ727K4nKHBdZmiS",
  "key31": "36DFvYAKspEeqoLyWtsnpYdRLHtfgZqMVvG27nEpbocLLaPdM18w3GxF4EYJrv7MxB7y4q7wxrC9S9uawPkiWpZY",
  "key32": "MXeG1btY4QZgFoWQNcsGQe376ZLezXqEZXtcLvqmUuooVuoWDaKMe5ZicTgnmfh5GPeFw5v91jPJf8gufHwqF77",
  "key33": "4aK8SRpvNhG13mX8UBSQrAg7yFCsKnkD27zAfYHQbP5tEdWFZLqvZkPCeBsC8My27du3iSTRPrbfQK2wDSQdKsnW",
  "key34": "5q6HZVRAjcjxLHe6T7axLbQyZCjtFnCRWSi73AUdDz4mWc9oFwkffX2PZLPba9UqXTK1Scqhw5RG6uKggukGhZEr",
  "key35": "3XmbD3FJnGEL2cjcTatBXUMuxgoDXQqirc1c8KDtJo1rbhh5qLUFBPttaUunPXXernPxcGt2XtiG13W3VWma5UN",
  "key36": "spf3NTkDAB5edW5WGoavHNH9aSVyr8te76f64hWV7fj1asqYsKm752J6j7yYxuLhiViV7Y7C6jTYoCeRJi9xaix",
  "key37": "2Ap1ztFUuzEG1fFN3fyCM2iKAgxhVtLJ7Siihc9Jse16kAUbBye9LPh16MTPQsZXi2W7Tsm9mw3PLf1d69zzqhqP",
  "key38": "371j4t2ph5Vrr8KznRNaoXacwo46V83hEPE6Q5Lngxfc7Qgh1dW9ruWLV6Vc1o3uFXo8h3R3wd78AQFCT8kjazBu",
  "key39": "hFNTHgMEEQXXSgC7BnY395BcuYiUyPBrHFzSQW8auPEFLvSxxkpjNwcuUG64LfmPpdKxNB3romuvRNeXve23XPA",
  "key40": "5US4KBT5R99Ev56uBjicaEepXgHAoS9RVtWqmbneii4oHFZwjbVrMb5FVN1roZC7Uo5Yc8JLXo2d4PRoV46ftFoB",
  "key41": "3q6Mg4VHjiDDyb9hqWX9mA2aAYCSkTftEikhbZS2xUvPhVmtujFYSHB7YgZzfw7DogsKzg7XnfMmYHtyS9LVukvG",
  "key42": "2YYuakvxHGSNPLcptsPQ7NVQkwoKbEtXkQtyekWFJvACGoxpAotjCAjR7DLTsFyg4Z2BMh5eHCBNpZcAfDYxnTmU",
  "key43": "2xmxb2SHuusP4QCVprCekVbHKqY5cyCWHKsKcxwtAwFUXJvHR9vskw1ctBTYw9ehZitj38xVbt8JShP7SFfVP2tM",
  "key44": "3GuHz7j5s57x4FuywVzDmiEsMxmNFBahXbcrJQYLczSZiEPb3dViPc7VpnvsUYtDCCgNrmiCBTGYZ9RomVzapTHh"
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
