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
    "4tmRVy6nRX6LgoGe6LYJ3ZRvWFwhNU7TDBv4ouG8Q7TNpipYkdgQ24Wu2JdbVyoQh93PRAwfiGZMtAvQ6xurGLeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CVSQiyD24adiSGRnqV3q7E74VFSBdCjb2qfUZ8rYjQzBtBiNPJgr5iFZVZkuu5TgNaVynT2HmhNfYYYrBiCNLV4",
  "key1": "5utohQeRjN8z6AWW6Apx5iAzriRYrP61ydbUEyX71d3B5xP5Tr7AxQs2poWFAnWGdR23ahL4B3598KtYNLBNbRMu",
  "key2": "5deyyYWupyYb2B9uXCnuMxE4tZmjqzDbZvDq9VYTSqVqe1pkUJ9P5ZZ6ThjTGXRRPUdEPu8YGWt1ZDNrcTvauocZ",
  "key3": "3JBjhDqsT3t3d3kki6iDzyNMw6LyZeJnUs7BGGMGjtMEohZzh5e8rZiqWHiVEXyPvsvfHieizMiczVaG2HLRNCUY",
  "key4": "44eLUc7Cr9LDrXXm9z9FUhMYQhK35yNTzFihjdEqNy2axcv6asTCynUEjFB3WnpBNq1NVX8iXrYA5wafGVCFLDk7",
  "key5": "9f9rjzYYHzuHzeF7JpBiYsA7AqhbdTkafXh6ASnf8UVxTWhWJbopmr2UpGfRLwHqbse98LkS3hnbb7fZCTh8FTX",
  "key6": "2hDpPUFksVAbfWfcPze6SVSBdBrBsUSof32teX7W4fHUtYYoxYrpmcX9CaLShX3AGi6jh8CoPqnkWJ7WtLJrtK5L",
  "key7": "4kCfRLdSa3a4J1GEWEEFCj5EE293Vu3RmfRrXZURmufVmiFQ3qgNX2bbEYSkG9VkgrndowkwntBdtaoSJyvuHgBJ",
  "key8": "3o5PtY4PY6ZZhzoZuZCmCUtem5nm2rGgrKpPU3RksoRobBaxM41JoKYiShPzHb3rZBzsXfBQRwVYzgJznABJYATP",
  "key9": "RMV3NK9vGwpU4NYjVcvY4kPuXaxS4q1mzjQXE7ULpkvnmaaFzyJvcS2TDkt1S4aJx2qHS2Xjyv8DKXQcBBzcYwM",
  "key10": "4HKZpnUpNfzsdS67Q68hVDWJCEZUgfLF4fQSgoMnE7nGoUQ9WZk82bP9FSWJzxTrKrpdvsBReMBVq3aftfuKzbZ1",
  "key11": "4ZwmMxMJ5Bn8hvxJVz3iESTmPquT95zLBfbQcnkZCGAbB6imY5qsdKcby2hFSFB51riNEvShLjbdAxNiCseBB93L",
  "key12": "5cRt9x6wVrYWPjRy2Vfu36zgGCgZo76jrZYpy9df23n9mLfF4x82dBFWmocnLZnpZ8BpxNdjAAqmNN1ZYFxZcLut",
  "key13": "473fK63nFzxMeF1mPV3AkLqHbFM57g2dzoBe94DHWUkBgK6gZKX5BxPnF9bo4L2mU6cYkDQgEtfvRXAJv3Z3cLyU",
  "key14": "od7jD6mbo1kMsy1zdnwjWnz75h4tQ4vHzUqmJtAtjoH8ZMRQ81rpE6rdoP6RrgcMnm2tM8ZEpATdQKfX6pPm9BQ",
  "key15": "xbsHp4oUyVrwVzwpoykgAjGDy3WVbP4yypETcJqczhwaa6wFtZLgCwQ3SHopJpyveQMxcqNXaEpncJKjUuULt1W",
  "key16": "3jZFsMWnqdD7JeFJd2dQBr4aYyvGXnzAGzAW8d2w8KcfhJVBNL6mmxvsCMR6JoH83ur7LByZcL9zRQ7iVCTtxbV3",
  "key17": "Ge5AwAJVX45Xrr9exDMo88peTw4uHhtyv3NKEYwgTRm5AG33jtgavrysmapU1CH8dwwXRhvnUqXoG71kaucNMF9",
  "key18": "3yUC62N3MjJYpmnQae4uRrxTKZNkAzMt1aPGNGQ3tR6qkWAg8DhXebeQ81gWo82ybfxqeGGY5qycVpR4csNf8p8J",
  "key19": "5dUQVuevYKHf4jdAGBjE1nj6WYHrkueHJHzd4bh6XxoXookwFZBL3v6vK1JXhNmVdjkgmquWCnvVUrtx1qK3CjuZ",
  "key20": "59Lm2K98RVK2GkgpgCB6c5ca3paCCMcdjj6MqirydfJzgSgLkLKXeZDJi55piSGV9vHSV4RaoERnarXuFB46oyVm",
  "key21": "4MaawMiH7k5KPzdmB8p63AB33gu8m2D4FFF5rdS3sMRM6ondQskTWC84z5BFeSCngNJNfpYoBhoTeuY2hiVtLYvn",
  "key22": "5F2o2WFZgt6AUV9z25Je7ZphZmzE3NdV7EtvNfkar6Q69P6SjfW2TavjfKRq2HvMS8vxYb245BhgM3vra5JjrRU",
  "key23": "LDQ1eSCeLzzyN1BGsudnqm9g3Lw8yesRCrGPqa4XdPbb3nHpQuKntdTJ3fjvKJpUMV8G3L6uLZY8sU1A8zyiSbw",
  "key24": "5SiarmPQSHsyGEkkQancJdQPUAHBG9DmaSQg8dTbj7MydKkkyNmRS483xjUvyzyXGcznoRCzvKGqKASRckFXURv9",
  "key25": "4BbFHgjrKnRzRX9H7ZuctWUXrTGALoeBLtkaBntzFjyor9k3EKTUmsno9HoyTqiX8BAghgENvbuvruucAAbvy5K8",
  "key26": "59QYG9si44kYBZTj2XGfcWptKbGQmJz7JHEiYds7sJijV6nbQic3NBHpT7ZSbqMXvHbeVyqJ8Unxs67k2oz2HYdc",
  "key27": "2mBK1E2hgfV4VeWMXWDbBBLbX6fpgj8H4hYs1nC1ZnQxfKJdfAwb3Ex9XELmYPbRCHx5hQaJz5C8DX9aKdzSJaiU",
  "key28": "5RxrZHsQEdkMJpU8XUMsFEuxDE3H1MCYEqoFUM5XzRPgqLEyQEaFCk4hgaJsaC9NGg9sgQgoHgwbnbSm7TZkgRsN",
  "key29": "4fppXqoBeqbHC9Y4Lx6oGkQzE18wbEpYL8anVukZZw3XGAiaKghPy8taS5mAuG1rfMxGXyLAt6tYYXJ1LGBq9m8V",
  "key30": "4S6f17kTDUiStmPauxefEMP6jaYV3XJF2oPNM1YjTEDyqN54nRHzomqsSaNQaUGKd1cCym2tCCFhw9fmJ2xnwPuJ",
  "key31": "3tKNJDjwy8PgbWUD5FuSwBnVhGcPZJziwMvGvhN95wGVTfpw2heFh5mJxHQUCLFY9Bp9puKBAuMcpbgpWy5GrvZD",
  "key32": "6VvHLpipDrAj9gapoydTUDSgP1Q5uvTmXnAkyCYwfuyox8hR3pUj5CjWxhbZFByZEdPkgZMtdfsRhYjqusb3FpQ",
  "key33": "2Ab889GtTvKEiQCmZVbFyNpKy3Q5UcZn23uRC8uPNy6reyPLRmoZ5KRHykYYpQmR61xrxsWLtGjC7AQcAU31QfAu",
  "key34": "5GtnS3KEz77uDX6ZhhntiFTfSLqKG6tXBvYUCHNawi2idSuNVGaCreFznA2SyLMstsiNVLZtWS7HtqSd27rTeis9"
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
