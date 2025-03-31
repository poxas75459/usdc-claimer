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
    "3nGMvg4VWTcrhq8n9mxpb1o9rcspP84MofQzWJbkTQnYdMjsnm1sepJeJoMxFB22Ct23FXxmLDJGAqrQiD8VJwGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Tmxk9viUUrzz4oJV7nam9pmod4UB7fXcFiCGUHFnyM17r2P7Soq2dsbErAt3cnUrhoLGFSZQK8KJyVLGfVykRe",
  "key1": "4y7tWCfevXcpXMJSM8WsuDn3A4PQcoJbDnZK94gczpD8xRswP1tki4fDRu2PEir49pv8x4RX7uRmfF8ar12Pz2W8",
  "key2": "59oardXgbYy8m73SQf5dZe5FdY5dsK7RFFH8DXygcdUk8xwaBdmamyMqGMXB3V7CatTiDpFZAN7ZLpJ1qvHaNBK1",
  "key3": "kFi4veSKTVK2qvr3wYyfRr3QMrLeNQKr4W5RkxzsEHcHzMoozqDTqG93HR52V8TojCVJhvu7xvv4GzaAKK7ybzB",
  "key4": "NMn9bXysbf2juqHeRLVfemhGoGeQYXxFbhPmQvC2F2sJnqQcUsK2ziucmACygCRb3TXzD4kc2uutUsNLbvBUtSU",
  "key5": "2aMYYgsojpbCVoGzvBPA261ifAP5Br8epMsiXzHrvcSu61hBQoh7LokbSzV4D4TMo2dGYS69a7sz1uXe8K4BLEFL",
  "key6": "33K8VPqR9G7E3gbchfexTNgiVNwd1hqQVX1uQUUS9aXmM2tb9HJd4Rpk1kDki2mtZfcaaaVdtLF1iaGjgzWSjtvd",
  "key7": "3caMaxDJx6r9uCk29yUugMq9EJDHXrkuUsZPrmrKcNHZtrBBfiWwyrKRx7hgYUzPmSFefPFxcWEnWi9yy9XHN3mr",
  "key8": "33h6nhSGYZEFt1b2oL7LBwv9tKxbuLPk2n3qWpevLWqzzn8r76xC9q5Eg81K5f8X4zzEYmJvsVmp7ju7ezn7ZZW7",
  "key9": "2TczUmnx6wj5KmVvFyp8JETf1GMryuEphgrdrGzV5k4jvsJFzVzqmUp2c2dBbZud4yyvXibXPrv37uVq1J6ESWGa",
  "key10": "5Y1yRYTQvv6FFYZAH6XMeoqRpTuCPfgfqBQe6tJrr1o8rwUBqDo182AzhepPhZfFgZmCJUt66yjpuj1n1iMxSAvf",
  "key11": "4GgyJ1AEqDSHmLiKLKW5ei7WpD4fvaRiF6UYS4NBntcKTwJpmzJzMgW9zEa3JhXPsQ6YmSLy7iSEDTiSTD8pAssP",
  "key12": "2KFU5qStrZG7LcL65hc4ZWtvMau3shSTyAAXEuv6FdwuAEeHTvLTVtcJgF55ACb33Jbo7x9zALH56XWpkni3tun3",
  "key13": "5mztHYGpEpyq1x58LLtiQs5tJQT4EouUnGJnRkL4kxXT2DMsbfw9rP1Kp1SLnaHLfRo74jH4PSwd3BUTqg2SjzHz",
  "key14": "2q7TXmaER4cHDUr2cgkEsp7mVVWtoAifBaZfjcn1EK2tX4DmqezRDni2SA6uwEGXnXJJUNcBrePtXDiV4kArT5r9",
  "key15": "3CzFZK2Z7ybxF6UJhvbzCrD14Zp2Z1TKRUMY4rPhQpa4NSV2RqGX5zP4y2RTfw2b8FZThQdTD71gf1xnjYKVDqxJ",
  "key16": "24Kfcwb7TXwRPMNCk6g9zYv8bz1kaH7VU71J69H8DxzrYCR1VReTYCAgy7ipokt68nx26Zi4nTehUcVvZVpRWFpQ",
  "key17": "34Qc5PzRCJXHvPPCFgp6SnNRLa53gKCVtXYk2c4Xq5tdQp6AuoiWKv19pq9VFidMaHa8Km4wXrJsDNNBh1L7VqPX",
  "key18": "3KefRZKZ7U1MEMLYUSkxhxcCVd2nRgxRZoNMUcTrxw9erss73QHW4qsELTtqgPNt2RCb4yyAjQy8KMj2j6Bsn7mt",
  "key19": "BX6vPn91jm6by7WJLY4JxJt4YTANJU38uDStwjMdvo949FHfH5TphKYv8Wbnj5i6FTosArnykErEgMbfAkVvR2H",
  "key20": "2WhJFM5PDXPGtQPcYiTxFdWiawrndAJsAi1t37yTFbsCAS1WuQTEogtbPuR4rcnqmDgNf2YVbyz6SpV41JGjaroD",
  "key21": "2rAUrpm4D9XdZSohTZU7JHkhRbyzTSBxxYDfXY2D1pv9exYKwDfTc5JEEBnwLMb8krqLq5vK6ur22NYAy7kbg838",
  "key22": "3YXgwUoYcmxWpq9LWe4uAdyifiRgC4fgE2MwdY3EGbe61i6Ws6ctsRsuLe1nPPUjLbqEstQFvExENgrsqui8F7tL",
  "key23": "32z2PmofVZBUR9Jo4Tf6f4uPkBufD95sMcSNK2Y3FzrhAHMp2Vt6R1XcRGr8yh5AnT4zCDU3TgaX4r5AXR4BYR7f",
  "key24": "66qNYhS7NYjfbFYYfWUruUvD3unWhhUjHkU6irZtTc6k12DAFXupdmh6KPRTevvzz6zVQQ3yzWn74mmVrFL9ayh1",
  "key25": "2iiW8oKZfy6fzkbjAFadCMTLb3p65YTKkjGMVYQ9xdGSKQtboZNopgi1iYxG4EfmdqJbPzkxpjwutGpBaqDMGxug",
  "key26": "54Y8UBM6UXxgcR5THiJicrkvtsbnw1wY11CHnyyxHfzs1uUZcAvGCPVFzrtH7MEJtHNoRnbxxdtztdmAaAERHk7n",
  "key27": "4yS4xbegr9DyCSESNBLVwDcBUBKqcfD9o2xdYbKyhJQFnBHW3LrvCmwznjD9XEQLiU5PYfBd3JgxauNyu4sRJYb3",
  "key28": "25iBeFbAY6eeg2VWwE22BoGH54WvLY4Ue5LxVErK4r461SSZea9sYZ3VnFUoNiFKKZzjNDFYp68MtSuAGsLEXEQ8",
  "key29": "4aC34b6pAHKb3kBHjs7knvnixpvxb95JTaNh9MB358oGodFerXmrZddv71Y7yrRhMJjw4wR17gVCEiBAJauqh9x9",
  "key30": "JES4uBpoXXB8svdYBoSMB5fq1qMbaq1JKZvQREQfnAt4UQSUnqBT71PydG7B4jefztc5pLY8nQ149FusMK82BhY",
  "key31": "5P48cSDtXPb929L6H8dCk7RXwAvJTwdZfyiJDvcrrn6k1Ht7LxoMwd5HPevhbvHJGHjWoEb8uox5sNPxy6ySNct5",
  "key32": "cAL1NehLN5qHKGKbHyTDGvX2Weto836hNCNfprQPvadSYg3emzLt37AKjLq4nYBhsMVBMWuGpyx5iHwZRuhMYbW",
  "key33": "rKRw8As3xYPEpxdTiVbLUobUMXaEzhPTYEu4cZ7wdtq5dm4m7D435jQKgSQvivgocbH4SMAFW366QcyQTEteKva",
  "key34": "JBXrTnrzFQDf4Gpitc41WWQt36oNc41JY4JKB7gHWzyNL8h2nft5tqiycirUemqfjG1tfGrEJX5TsCqEPuY7ygg",
  "key35": "5vR2RxDubvfvA4tx4Z3dJ9TsLG3bjZDfEKD26mt4oCYfmQwHsA7FQj2WxYZQmAdzjfXddJZpT4s6mrr3pPyzjHhq",
  "key36": "5KkxDmPiVokZY8hYEe53BXZnkK7sjWhVxZxMryq29m2ef9hGRXDhLykDYH8zwMVmhu4ttern2vVUEtGYDNg2c6bp",
  "key37": "3TdNuSeYaq8mQPYAA1BkAvN3dQU89jY1tR28ff8v2PhRUN8NZ2h2JdiRhYi7jKy4my8YDnqDALedosSu5gc396ju",
  "key38": "GwBwz23AkGrwJaADw1mUPUGiBsXaZPdpet2KC4WV8jeD1yPYG5NTbJgdehKSN7px51ibfisdBEDYPZ754jBDSNe",
  "key39": "2WqBpQ8XrzRirJ2PhKFoLG4DzU2iJ7ZyXht6vGhY1KVn5v2NLvoTqCBy6NNKqwXrSAoxCkR8AhoLLactgBfn1ksY"
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
