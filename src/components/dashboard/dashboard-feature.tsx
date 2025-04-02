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
    "4BH8pf7XiXCz4BzXWuE13CsRZuvRtAGaSDwo7osgX7LXiXVDHmVAPJyU5Ks3LUfYZnLbrnpHKDNnfdAMstYuAu6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WcCMxwRKH8FqxS8soZTycoZd7GnrMhk35sceq9NhjgDb2BKaAurYxJbioD23qBnXcFNMqJYud4hFFWQeorHxFKX",
  "key1": "466xqnDv7QwPoyrnmuRMJpytXx14RGHDp3ABQjK1TqtjPsctBKbWaT576D5vNhxCKuUboBQQTQHiLBKzmXFTUrYG",
  "key2": "4fseqPq9WBziGXfEwe4UJK8HUwjELEFsqJ2HMpdhqngejwsJJGT8LUF8BwL7x1QYkDEq2kBKDiKSw7LSmAZGLn3c",
  "key3": "4vqj8Vz2qzEV1wQdWkFn3oqEVW5BRgtuuPZHycjes6ThWdCMsBjiDWU4d1tL77nMxVgHGThae3vaGeMshJu3uoaV",
  "key4": "2uxXQms6V7PB46K47cUq2AYEr1G5vR18z1mSHiXHBvR8Pqccm7qmfEkHUUBh5zTtP5sjXfRVRXNjRL3sobvYihuv",
  "key5": "48vb8CcC5ykr19acyBY35Vaw5oREojx9Pe3KuEC2Wv1CnR7audDcyuZ3UFAuAoXf5wGhzT6FXyjKiKGtKBNKXypn",
  "key6": "5JNLXCuAnPBU7PtVk6onD9aePokK8SGS8NCQhgUhGxFEV9RLctZoiozmQFC3ky2PfwwJcCDtkbFiwYp5UihVh3Cm",
  "key7": "3ZoGvrDVkbmYDaR7L73YxohWhiwfDjkYorkP643tQbMa28eCjuLmMK8xvztNMC1njEU432Ah8avjoumPu15bdG8q",
  "key8": "5zgLpjmDev2orCxEjkgpJjhDAkom2H4SStZHgxK1nRrVmiXeM7EkwUon9HwC2GNR9QWKPXe8449mBswnYfjvZYpF",
  "key9": "3rc51fVcSu8h5pSM41dBZZQYqoUYx6vextxcg5bd6dg15keZi9XziWWaXNSmEiBXi6QRpXBmeq5CXcJdQrYTMK4y",
  "key10": "3ZKTUcxNjqHJsCy9gKyr3UnbyNsW5w2C2aJbQP3CH5opTRcCTUt7jtxZQ2tEpVvbW9LGRzper5NxVtXTDXSwKgoi",
  "key11": "qpjFk4wV6m5fDnrzpm3MkvZiVT1yoiMuiXnuzBMo4x68wnADmbdzswVzXzcGe9aYxD8Co9kpDVUC7kJFDV6eByX",
  "key12": "3Gbr3jKgRFsgzG2Axbb2VQF7aJ8SY6Pb2tiGs1tCH2CLMyCWmRTtbMTAQXTUGkgqunPVGbyhmHyQqMm9SYEMtiFn",
  "key13": "4U3XasVZhZkazUSkodWHDBHmSzKNWDzzSfrTJkvn946Hn8HfbTVtPioWngo1ZgCDgAW2vkTd7XFZ7xuaN1j2ffW5",
  "key14": "2WE44Rr6Y4nZpAy73tZyikVRJQyiUdfWLXtNdt3wfX2dGDVc4ZtxgnmXGrBjbDyXqWdaYQxXNf2Ug7cYryU4ASsg",
  "key15": "4DEVSnf7Nx6Nr9cBKZhHzQa63G6aMENG5FqWGqKEWajF14XgceUJf8WZQQ1mLwjMTGDsTNWGbJSWwVfDy16HzHfS",
  "key16": "5F6n4QLHamLHXwRKwnNWTxcyFM86zDFtkUosnWTx5wFgKRqivds3xN8ZJ69g2782C4SxDJKeE6EghbtmdEoh8XFJ",
  "key17": "4zP56JrqBbjccKvMpDr3nsrwP4HLCC7S3SBV5vcE8A9LbXM3QSud9CpoL3VMAnfckjqYtr8QpQJk2HAaA9NNhufm",
  "key18": "4VEeM8JvZaD3FGFGMSHJ9gA2rrwDAhvAwcMiMJLKMTrbeDSykQykNELsjCTPqMT77FusJCU7CfGxrWb5YkvG3vFw",
  "key19": "2hxXczZeM7k8HUFdbsEpPQDLuJsDUCFRtig57YPYrXx73Ui7usHGo7GxkhCEUs3tCgCzzz8WEAuXU6sJ8fRYtyaW",
  "key20": "3AWH9AaSA2c7q3Yk9mgb92LmDQGYgTVs5mXn1SBNjEQ65KQ2VwWXzVcdPD6YVrqcrx3oAGswNa45qa9j3waoBkqN",
  "key21": "5YuuVESCjnMbQJKx2sbBb91Mo71Y9FeaTXJjR4d3V79q9XSwmiXf9qPmNDF36NsyLohJRabEx4Px37mHG3t6oKe4",
  "key22": "41bHfh8nMSLrRWQy2J4pp1PuRyXYc33MNKi43fHHWNH1c2dqPv5TjtckdYroZCuEZuq5x3T87HfKVRhe3N6vbTAq",
  "key23": "3j4tvc2FQAB98JaHgjW1raXtKPUEqtVLaLQxHxBgn8qheTwe4Rx6qYvUHgAvjEUGsLkLam7bXQhnf5vyLmCvShre",
  "key24": "4A9ugkA7vSgXdLuaL4p2Ran3eauL5q65HauLqreRhyrqQBdKGTV4NobXLCNQbM99kHkt9RYcJaC5EHy8cbpeZTPv",
  "key25": "3GxXuW5Mpq15XuGfrrhTm8HG8SBCnW2D3KkjN4e4KVy6UCG58grHnE5eEVQqAG1ZGnJXfSnPUHLVFcW9GjeePPST",
  "key26": "4ntKXWhNi9BTydftbbe3Tp6Gj2stq2CysNLThxfK1b4D5yfuztyQHvry81NmT8bvVZFW8YoJrbTwxC5hfMJuQTV1",
  "key27": "49gjcGLLSh7qYdjypuWLBymB2qoVvvRxdQ1VtWbrw4y9AocEePC3oyu4TwFG44dqzZjRo9b95ey3TZgMsVTeZDik",
  "key28": "59mKuQ8ZPxnLwTApeZVDBop42ECNdsKZ6HMyPmeSL5MFJKMVpVTbnwYKuVWEJSqg9P9iYCNT7uU7nxVuw2pgwXQf",
  "key29": "5LjrNzh325sXeE2jKED9hmhoxk3koNbE4uuoy5wfMefNCCzgD8Xm3hMWeCDR1P5z1u8kYiQq8udvuTNCRWzMR25d",
  "key30": "35aywkx5BAr35Nbfn69BYtrMJGD21SswBnK7MSYAgsHgSo3tz2ExriaxLSKt75iv1L8JQDqoBe2DtK5FknkcXS94",
  "key31": "3aRFrHx2zw6rxtHsVHW3xVrUNwoSvZCoo77LteGw3wo5MvKkHCC8rTqbrVDUGq5z5eMH7uE8EWgYAguoh7sX6UGs",
  "key32": "4KUBDPHXkAoJ46jywKr5xgFisrgsyKZ81RRF6peBVixPGq7JaFbhndT7GcLhBLKBXEbzYqaormwxdx7vZNF8pJaS",
  "key33": "3zZSrzYxJQmmDqxrvGPAnMBYbnmKJunskCW3TSvU6mK5JhWskeJue7MTbqpkCQm18iWEzhp96gTqem4AUXdcRfV",
  "key34": "4P7HedrwUop9HA46TFZNC1YTB1G9rvBvzgnXgFFdyjVkxRdrTDDGKwkFGeKbzWfpMgXjZ4JTQaR3yskfC6ZC2ZUB",
  "key35": "2WDR229q5LCbtmpkyCDYrNoTDnDWppvgQ4se8VjavXxJFDcAM44tjGLWyHHisFRnpjGT1HwKKiX2eZsjb2vcqUtq",
  "key36": "5p1EtvG7kxb2jxGTHBoGtfKJJJfHw3SHaqpGNMWrziSqLyg1EvspLGkMMrwDinfMGtVdsUyUmuNRr129KUqR5eo2",
  "key37": "3D5Akam8Td9KFpwPDAJ7FU8Fc9xpymgazhBLJmS7z3Cw7SD5WVHUcV5szxAtpXJiyNCGFF5muTCAdHhHBXCQ77Jb",
  "key38": "3JwYNXYVHAaoZj8shgidNYUbYBSPDKQ6rBRRxockjL5vtYWAD9bqu2PhXtmvdCSqr4XyEswqceUDJE7A7Pt42wng"
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
