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
    "5S3UVivAfFGVat9bQrPKNMYz6tEfPqoirrNFAEd3fjM4KpZYZk3TwaASqYRRvLTp1LqJSTi4PpwxnXGSme4u4wmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uz91yjprSYbaEajQjAzVPqGWsL7N3MkLpxm2EN8cv3dza1dZbVfbWzWqjek2tvUSbj8cWqSrvqRjZ5vKQUBzrG9",
  "key1": "2yiAFSTAcxQrrceCuXu3DvtcWwu7tXG6BXYGLbho25ziJeoZU4dd4oyCQoty8Zy1LnuuQkjz2jRXH3avLsyZWwiV",
  "key2": "28Fvg5CS9ifCucCipZACpq9RonS7LNkEidSzS9qTgTGQEPCbxZPs2z2BiFYQ8vZMbiydfwsfLFgrTP1JhqykdWTV",
  "key3": "3wyowXuYQwnVL4R6fmSwvaTfy3FmvYJdeLmjCaSiug8vn69kKf7CXQY7Yk13JzbZSkG4Z9EZLQsfKHysmVgYBu3w",
  "key4": "5EdFFrXra3GhTr63g1n6Gt56wzJhQYoxiJAXh3SLdwNT3pHkoiCcE2JEyoywX5VvFzw2Usj9dGcm45MkYYSYr67y",
  "key5": "5bzkQseK7dnp9cfVLqFauauJhmPVFnzWm4FvTUAcvVXsCAcdwchEbhSPSAthWprutNpTPGdZJP1FN7Rd6Hk39jJG",
  "key6": "2vY1hfuFKiupLkXu38mN9dS4s3q74JQ2fQtE5bFtBEL3G9s1Ws1TXyCYraj2ga7kfPD45szoMcffLm8AWKAVM7rM",
  "key7": "2eYqgs8dXN8rhySQR8XvN9nxBXLGXwHMiHQjAopX2N1sSh2eRp7RRyU1Qrmi2iRJUioqq9vjWDfjVkgz4CwWm3oi",
  "key8": "3K5dRXzgDyJmCaBWVTFbKh5KNn8b5NWy4XLC8tF3tkVbbTjW8YzXkVJzVmLp9rxbivSwJuwHfcstR2WMLjhwCUv7",
  "key9": "2iDLgJGaVCJ6wgvqz7uGs3hjVkpRYkw9rtn5DiYWM5ZsTk7ivUgwP6WpRZ1tCT8Tunt5HugSLnuCNBiu1chevkCu",
  "key10": "2om2daSiZp2ymerjm9dJjxF3ju9cFo32yD1Hb2FfkTAKnbKmM2bxZLMm15ZBZdLebffgAQQcdKg37UARjwv7Yc5E",
  "key11": "3bFc8WYJzX7seEePZn1UhD9mdEnriCLwZR4qaDMMq59XYzFiKZnVuAuMLtWpyk752GTXTo3cWkTvciBqsEDUDBuW",
  "key12": "4xQPxR5fnih1v6BAZNbuRK1jPQYY43FzPKLAW6Bs2YpvXbZyGr5pL56UgYmjhWVWBjyiPNLLx4hMQNAjbZmMDwj7",
  "key13": "uTnqMd8DfDP3WKrnbKAsxBcn3chTcJxB6YAmGWWyhe6J4V522DMwRqwsHkEdi4GykemHbbzfT5WyrheK7SRHj5x",
  "key14": "CUA5Fm8G2NJxfa3Wdfj9R3oufQGDyHR6uyq9WCz41y3n82f2Y7wKdVaELbirDKCrpYWzqvd1Gkq32c8F3Jc4KHN",
  "key15": "5vKMvEszyEY2afm14soFydkRcijaKHvGGdLcHbEiGYvpeAQTfGfVBujbPAN1e4tF3x5F5EbjUd3Fr3mhLDNS6mXp",
  "key16": "UEpW9ehRTYq63k2py4StFbQkhPQXg7Bje6d5sY83uhs6g2zdyjD6kixJ2KwoVyBMY6aTRVw43VvNbkMEMqLatMC",
  "key17": "2bqTnyhUDQGC3rqFhJSbauJ3c7ozbeFF2QR95fF2h8tSax8MW1ateHgi25osj4brTPSomczXCQBHsn9AC1myrccK",
  "key18": "p86zX23HkqNDbxJQrpoZGhtRHh3ZF6VVyZ983u2rejwjbzJmeMtKCk2KnybVkUjEopWvbfPjaPCtxWxmd69EacB",
  "key19": "4ua5yNaFZQN9LrAUVu6oKPR8E2ocsgspEbSsiVQqUCpRXeRCZKjZwNKqs5p4uq3SNTHLMgVfBUJ8sSMBQiFWobdc",
  "key20": "5vHS5pJwaBf6D5KXAZcEjyTiJmmXH9feDgBEQviG9u5hcvjsFVKA3iY9tNnv3BVTR9dJiGWHiHRxSq9GXs9t2kU2",
  "key21": "3ykspqRQ1w7XBbSn6LC8X774zUBMQgUhREES4d48of7ekiU7MxHE1fn8iaWb1ZxcdG4L2GpqMvmpyRBwrZLAXAnQ",
  "key22": "5Dw3hGZhmJRGNgdXHpizjn66eSiGMgTogvjjh4UzLZWXZcHWMpEQ5FXKnEkrrSs8Wi4DihNwDUtzfQTcZGcTNTYg",
  "key23": "3rwVQeoTZPyV18W4DNUky4QXYWxAYy6rzXBP8yKnD8tQ5XZL11HCiawp8RA5QDSFskf2uzi5kGVezecrmhdLn3Hu",
  "key24": "2Aeqnk7REKqQ5yQDrXqZEj6ZvCKygF5ACCpa9V1wB4KdcV2ntHJYTA6MQ8ZkAhrouTtSWBrrrvJPSnT9e9yPe18G",
  "key25": "qTvqmkhPUP5E5N8wkemHp3oHGCuqFuHrvLoxQU7um6GPoZCB9qcQtFbeE8WjBek6auG8UEW7BAbgZrXDQuF6rCu",
  "key26": "35vuFwpizsdVDeLfQnj3X6HvY5m3wzZseFu2V85Ciuqd6xSjihgVoysg19uf4LG99Q2ChgQqP7rcp7UfGCKTroQ5",
  "key27": "4q7eFxsUG4vS6m6KKzidZptfBSPhQPz1Wo7crAuheLhBvF4PA7BvWURLRdEttizViJiFnFMyoq43t3jMGQCzRArz",
  "key28": "kLF1JrmRgGNY6Awi2f6itoX7yWDcysD4JHkRo8hcbJbDFf9CfieYtNEKmoBS7gP1Q3Se8JNh1ppwC2z3hegqFTy",
  "key29": "5eGme7iT2a9k7Y75SU74ej3ZtBEVuHCzmwRwtXFWKJTYrWu93MgJhi7NuaRAz3QRxLtQThehkTeQbLJnidQBwZPa",
  "key30": "3wMckekx2mQKkgn1ZLa4D31P9gJ9Z3f3YbPrp9CTr2iRn4v1x2q8iZ9pAB1mgrhCwWUrhY8XJ8LSUEfrEx3AudsH"
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
