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
    "5mDNF1uUpBPKHG59PS2zj78eTRq82w5gitJTgLdLpkXWfYUZpFoCEUf9AcYQ2sjSFnk3bTsoWT6RxUyov2pva42f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WmrGvB9amuZSFnK4EbWYXKGrA4MgWwd8knRGJ63EibGmH58BKNgwA32UgxS5mzUZTbbgg24nDRZ79aZobgXD832",
  "key1": "Ckbjch8xUNrVdmRoeMRPZDzAHP2gj3JzB1pL9VLy4xm91pdduTYKqNdyM5ZcNFjZSieHFoFRLfmkh8typ8HRAtt",
  "key2": "4JmjSSh2t5uLs8BYSuoNKtqQorYLULVnJNgXNq8pEArhwB3kYM6BA3upPbR98kN2z5G84jrqYeiRZWBJkSX4KL7R",
  "key3": "54dRygUx8qvdHWMi6QrgTY5tUs3egxZFBeJupYSRDrEVjtHWPJTmmi16XBvFwCWzsAktYxyT92SHWsBLHvdhyEzS",
  "key4": "3GgPiuESywvrWsUPfE2ZNYXfz3Lo6NsCSj5HaBopxH8utFUJ3q4KQHVbegLMBwyWEUFm6ujkv1kVxVwQSb3qAHma",
  "key5": "2uLsPUL4drzAkpDqJzcWzw3nA8cE2yp1eKL8r1wMgWHxugRxXm1DkCaoQWdtZpUZZhRYTABHHFf7GQHd5LqeNvRq",
  "key6": "2GWaU4hFY1mtQeBX58hzjyKU514Krxb5jmqLcBv6Vk7GShgDw9LEKEZVpeamtDydxejeJXQ8m1h7hJkXey64ycEZ",
  "key7": "2eNNbjbv2WvQUazJ6GJV4Z89KsbvYhjK8YAFVet7c5zoKBx1fK2kcP2FTVgstwUyRVfeUAPX3bnRFYngAkGQMzwC",
  "key8": "HFDUgL9ErSqiFiQPmF5Dgrbpdi3KS4SpiTGYmYyhbcztLCVVG3Asx56h8m4SnkFBwcqnpYH3XyRFmy3hykp7CFi",
  "key9": "3DUzGjJDv8CRazePie8m8EucahhzA89GepKCQKVt3KabKcChizSgJcgW5Pu43Ft7NAabzmPfnjWmdVFwvoYKxbXE",
  "key10": "EYwkn7NXZxPRTHTrEDh7WH1r66ggLjPs9o5VvU8hdZZ2HMcEqHo2s4h5vQziRhhWcdBnZ6Hz9rdhkRvgTWpCnBM",
  "key11": "3NtKviEJzR61yDXKhQAzLMzitFBrbmQtwe9yaboxM48RNjMAqLPMqXBSTKTn625Ky8sMyuQv6a3vXJiz3arvQhac",
  "key12": "61oraQdUh5semtynEsfSyEkEhzbUTkihVRvxNRPHPYNBQQ9Zni2K2wTZZU4hU7c4eeo63HswryVxBkFmatpj464R",
  "key13": "4cvtCqni1AiGJm4hXHh4Dqcq91TKc22nAwtbgKzBLycGoQE1FLXihwJqJoMVuiRNfh4P5QD4ZZ4VvbCZQ2bnmJSx",
  "key14": "hgkkfCSeX8kvpgZ4Lg5PLRp4PEaKSZM8roqQUzTqqF5B23e58mrdouBGBYDQyQrfHNUD2CVnwoesXJqNp7aAy9n",
  "key15": "55Aq18tGQffPRgoh5KeYa3aDSYAHTepcjpTei9twxwmRLxJf7Urkffvabj8mSPofeeom4sN1NGBZ2DVGfj7phEX6",
  "key16": "3qCqdkCWpnncjs6fv8G8L39BBWmDd6PqdHYrhHTyq3EeWbWrvt5RuxsMoCuwuw8PPQ5wNAemj9G72H3h2NHQCXXt",
  "key17": "2iqDMdFf4a5XAVTou6xzZbFeBuuDGkL2Xs61AuwMe8WHNB2gbo6RCE3ZMjdd1VA7xND8ggdVNaGRE2G9YFGLfcAh",
  "key18": "5PVmvPm3J6HHnfo6qbMJ2mqj58zNzMd5z86BLAo6i5X9idCxo4BKY3Jc7u561j2tjqgHgq8wtxVJbU3R6XfrxnYp",
  "key19": "2Zs1g2dtJoHELUhdpEsZEGhgy862WKRszRSyZBeubsLM9vfhzWuyW2ajtUBSDFQhvLVuspkHe754DA7xixYFpq77",
  "key20": "5yXtYhEbfptNGsotnNZ73mtW9vzpr9sRewBGdx2Z3gRu9g6qSQryAfVgGtPx2bcxjtqau41BzV6XmmLicn5vM9Fe",
  "key21": "vgB7XbDxgNfYVn9uihbbQ3uThBtxjfNRBvQBkwdR8zZXGUqhtiGq1cMjbjWX82oz636t2CSphTiQVKAUss1fELN",
  "key22": "3BJ9S186idZTzZHQfd1sP4bGwrj6omwH4t27Qu9CfxGniU6YLtzKTvFidAuip9EmhuxMENwg2323NmWXsAiJWxFd",
  "key23": "5jSNc7QnMZnDqeak6QjdnBJt8b89GUV7hiiRJFsrYjKBdUTiQZo9e9PYowN6sJFfPepnDE5LewWZPWuc56ZSHJys",
  "key24": "6ngpUT8ahTBX6SidQcRLaJ7wjpdKSKEXggsainWfQnov4TgGyEMuzgVYS1ymDJZo8F9SKYdrgAxAxFS7x8pQnG2",
  "key25": "2HPhwdfaa2pVL5SFd7rjR5QQnsYLxQWHTTzi3hxEErPZAZVSPMcqKJvstfxNdEWZsUTnkzFCYNGjZa7vmHCLnWa4",
  "key26": "4frLRieUS1nYhmNkbw6R5wWjWWwymPowTGc5bdsXzCQTBuLs7FBCvzFJvjVNtRprsRTMZxZu9JCo7z3YX8sNNq6N",
  "key27": "45wyUwVAsbkqXR9K1rzRSwxo3wDwE484et5wAefJCzanhf3BQRyhygFGF7Au5BXY3a6CngkgmvPXPUK2t9gaVSXB",
  "key28": "4HPSGHYYM8CsQco6wBTCTwpzV2dxybMuuMmW7R2Xx5Qf6fKVNH8aSPcn9PcbJmQswSoDYX3PDGmFYtkrgHwjj2HQ",
  "key29": "2DDjYoRGSCy2i3j8aFWB48DtSreHhbxJrAKuAP2yj8uqjN7smxH4jPCHouKkXJhxmJJzK8nWEu99zhELJmyq2x9h",
  "key30": "awncT4uHni5WWvBjS6MScaARixKJ5gt1BCRmMceq2jx1H2EgDQ3mqkHnVaz8A3f8ATEBeSW9M1mjxN92GMUUEdW",
  "key31": "32jpZfhNKUPJjg8hYP2U5DqwNXRi9o1VN4AmpVNt3TekNbpLZrSZsdtjp2HukYSHD72iraXFewM4Mrz4L2KWZqEf",
  "key32": "avgNVyo6a5EEDPrvCtXnMkSDgnY4cW5StLXZrGPPnTpS9Jnt37cd3j4Gvit8C3JzvjfHCbb8TDMKiS3VJXWp1ac",
  "key33": "21J9XCb62oRxsjs4h7Cfx3SZKoWQeBSp3W2tc1u3XrV5zqNxhb4RoPvqrN8KTQ2PXn1b7KVALpPfkJBLTGFjhPWC"
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
