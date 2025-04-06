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
    "662DaFZKiP5JgNGfJkiddpr9fFed9vy3RqQfAG3beK6PVRqC7ipAwZSsjzJoqBsP95oXEgDKrHXvaMhWPJrs5PfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4acXd1XWdiVF11ZSnmRch1f7FR3sb35wYMZgWx6tK2aiRQmS8CGNns6NEqgZnm9RwpKBH4WhvH1Pnzb4zySZfHHZ",
  "key1": "2PV7MLSfoVSa8iQDrsSeexUnizfG31PdpjHxZ6Jngbct7LJqktX95TFxcboeeCovpw6eNZebMiCzGUJ1FuzQ7Jry",
  "key2": "5qc4Tax8UeFTsc9SQZpGkjaKvZfsjpV9zEUp93tg1BzYmrM4meN8k6UQ5mYDo1VyuUP9JwmhafDoST8LD5VFf27X",
  "key3": "2EmfuVn1jCAGAEvBrbVHUKMFuy6ynhvJ1b1Kdy7XoN2vA2FRPa6PQ9EB9SdY4pFf5NjYLBNLqeLc6MX5UvudzLUC",
  "key4": "5yTfHPWCgLrMhTAQs3e2ZccVKqxfc2N73sQxMKT8cnf7EqA8piTx2ypFTiCf1KPh4cTvhUrnreJ9dpnt4TrEwXgg",
  "key5": "2nqN166D8etCYxm5McLFxLgWdyCasEayJXzAJWcwevJighoaf4KSUgXnZmD31JbG1NcDvjpaHBnzSaTCm7skH3q2",
  "key6": "fybmanEQggHURm81MU2x4C1jDW8Yb6xfPX6yQU2JdxjhkHgZ9QammRWyVGPfEJSrVShvuMPf1JiGDAxAGNWz4HT",
  "key7": "5xtfTod2EpYfvq5CnopAKM1zESKZAnbvCT19eCmvr1qMr2ch92pux94AAMU1spzVWUeLieqRm1Hb92qAeU6oppEi",
  "key8": "5Rsgyt2UjB6LKZqXw92DJLj4aP7mfoUiVXPgrcBZZyN1pvFeRwVjr58GFEDiJRXF6tTzJkqbWDWsBieGMcLT5gcf",
  "key9": "4VYDdSnskG2ZTj6ykm27ovpu3jMNaRuuCRCnRnCntdxeL5vFkccwKKfj4xvS9RgELTjAS9dLLACnvzQuWM41X5Hj",
  "key10": "HC4hXJVX5q78vsrAomNBafPsnGyi2XT3jXp3yTXdHiCGLx2ABWjzsmnwiiffnv6fqx8riVJdExrebasFEnroCrw",
  "key11": "CCLs8nKZYyRDNHBhvb3mZ74QrvV118fyYLX2gjLCQJ7yFSVQrLSzr85pxMRkFUuLit2drvrL635JcDiibx4D3u5",
  "key12": "46YeFe6UJeiyaaQ8SaM6B64KmQwTd4CZyNtNzx76gnUzNBgL45Abd1cmcCkxZYxVGNitBjeNjYo9VSeHrUaKkfQP",
  "key13": "2PUqFSJLrArGsDmXuoPn3ytVTDsAfnuGHqrDS7RK8535Kz7cGNsf56e32FzrPWarjcrLGPZqZA6mrq5cU4AKLtvy",
  "key14": "3CWagqqRar5ZcYJctdEfwwuFC87g6sCdTTshjiArDjg7JfVMurGL7xjx9ded7AXEVRpgLSe6iwH9jYFwVjA8B7ad",
  "key15": "2nG3TKxoeKTigmMoGm25zEGkJrizSsxP47WKB7nDoyd5iijVBC6FjYsEZ7oWtV91Fe2NpP2Xc4aJRjpXiJMCw9NT",
  "key16": "293k3yVt86MUBpYWQkziFEsZmbg14Y9ks5CTnq41g1s7FLEja31SHpUxpBwxbgynpVfWUqQshVrXDKNpHviFrXzz",
  "key17": "yvzQpwohcrShSxLJPUySYYTpbxGN6D1g9QC9bDaLHkmNHjhnWt8n5nDwjuEZ5BugWYzNJd2su241dBqGUhuP4vh",
  "key18": "wCmVBTrH8QqJ7DoPCPuYWTt1JVRZ4rrWyoyJsckkii5BeKRy7tT1xxjQGgLqAo58a3zBdkV7FbdhrQc2dzVgNDn",
  "key19": "5DpL9cBQzn5azkccNdD29JFuCZ7fTbnKtgJAzCdnh5wSzXGkYzrCHDmR5pzNKMGapMPN38Wcay1JdbskUM3dP9Vu",
  "key20": "5d63gx2t7xJRec7gEPVdfb9dhNStrX8C41FtCjYfzciMQ8Am1vgAmTXGq3Qg6bY2crW7vS1q4TzAbJhAaCdrG8zp",
  "key21": "tfRky8vhfcZ5kjPzmYfnRdpXpaEfY8NoNXdq6HdGNAN6eSc5peWTjKRqFi4Nt37FvJ4DPvK6AF662ip4EtN1x71",
  "key22": "fQHVfQzZoc6cJ58jytSY2672dxxg9d7CTy1g86W9sjJdRXZ9J5SPhXSKQ21tWbE4pfW6J6GFKhPnC8i6ZTt9nSh",
  "key23": "3RNHTkU67QvBkAvSUc4TKATeXDxdDsVEAPJ2BJf5uuyZKaCRLoySdcJPQ3aquru7LBJSATPZ4nMMr7kty6eZr1ZX",
  "key24": "4gJ4iZeuY9cofei3YJF88FRBa9PiFFbNTHAwcNQZLhzj37NZMUnQfqrwznmVsfjpkmS4W3w5HX4qBckbkKJRjj2s",
  "key25": "2DY9kUSS2WoMYWbQrVHdFNot591i7BLsNwYpa24WcU1XpSUKDLtQGXeHqa8tQEPsgYxj8EYFhtSeXVfpSS32TLkm",
  "key26": "Ze2hBRRcYLnNGWXJm71d78RmtqYPSmG1EBBrzJsdufNZCMyYcoEBGrmKYVaAinpcmxKbVj2oWibT18ZNFDGFnAE",
  "key27": "5RBhvZxQQm6kA2wapvTjhXkxJF2TsFxTEtC2RsncNqiXQa1Bhm5oSKBt8ozgeMXSY92QeDupgE1tivFXTi9nq93i",
  "key28": "5iYvK8t9whsZPGPyK5CHMkT1GeEgx9UKLjD9rKTFYALJtSY5MuUKrPyz6bGrry3s3ZZ9sgeY81b2Tegm69WDyKGH",
  "key29": "3Pc7yNpdmZ2VdAU9V1kVowuzom98Kuagxfovze5K6KSva6cNPVtQeZNqXR6UvkuCR76MCkYGoSCUf1PQfEHtBecd",
  "key30": "4mwxaQCGNX5rHvx8EqkuwJPKMMyfZHoTGRE3ea8yReS3eL3jE9hvHLD1dxNrYVtFMTaGymZAaKa1bi5ZPqHdDcHG",
  "key31": "4GGYCZFXsQFCRE86YDDN8WdYtgg9mEbn9nX73NnG6rhjajsRjbCuwP71r4UT9Trbe4PEJdwCaCnuUFQigxEs7eoS",
  "key32": "7Rh8DABryvX78zd9doTRijtUU8tgfCKpu9zFMdBxi7pjVEV7s9ShbZZeyVfaN3dbLZuDRptVhiMpK6XWhuVB9Qg",
  "key33": "2WpNxcgM999Pu37xxkkvBkodCqzTwFMfZHnCtLD3pYxnPkpSLb8kZs1jt9AgNBUDFUw6cgsyUR5hhvVxHANfBA31",
  "key34": "1uYjWEa7b94zt637MqQ8VFJ52TMiupphrRUzm79TzN6CUQCv13dcpL5te2ki3jHGqfSJegBH9a43JkW8STKs1a4",
  "key35": "4jh7sZvSYimWLXbu6EphfP3c2kbgqsbLUhGSZ6zbjkQk7UwfD5xFGQurfojBB9m5NSkg49LoJAmkKT2GEPKWg2mq",
  "key36": "286X6PPcbUbNLjXvVHNh13hwb5nUqPWLZTWtoA9GshKCgBw9yEtANZiDgAn73y5CPrAFKuSXMkPLMEq5KXZaAmvF",
  "key37": "2kK8FLBnTjsCDDEoZ8drA3BZB8Vey66a6Ge81UETdYC767DbHgGKkYbCAuHCrDhU5ozU4jbC8WMV1VjWPhQaeR5X",
  "key38": "234X5qFRocBZsNqErECtfMchVWRqPuudZVFYy9KPnrbfQ62i2NGmwwhi1L24DoJUc2RzjC6js3bXdMibigFhNu2E",
  "key39": "21qQTGKhXYkM1KcsthAw33zZMphEXhvY131FqBw8V5dDtRd5xHSokYH6NhJZMUDNSS7ZY9V4xyeL7vLVM77HWqPr",
  "key40": "5BmrRgwjT2KTiaHDi4UufdrxS8TuvqNPvDwXYQ4KeEsRZ6LxjZHn5Y5br32s4diWXm4jgyk8bm1Lmo4x9kUQutmg",
  "key41": "4dMWPSnqXze8BHUDmkgM3n5ojXcZHakkVDoiAoixqmj9oGPMdo6R15kgkX7LERmnYmoqBNyPmvsTr6MZKCYKBqmG",
  "key42": "3Dig9zkrTLHFqZ4qWCeVk4vZP7tQPtuqjvRkLqkCyGvNnpMyWzmzCT5gWfYnisZWrxJDZR198YDx34AXYVJaCsYJ",
  "key43": "26VX9W1LfEdgAXBH79abMhKaanKjz6Xu5h8hjtQycVHXm5uJSnAa1rKVKikD4HkRinvU9UNhGimnYwaZc9PxNUKQ",
  "key44": "34B72tFjkQv6phFvNTXGc6NUuKEEd2TVM43z96Vads2ik8tLFRX9EgdDpEMfH98DHmvjiHPYAXGnD44NGCVEbVUb",
  "key45": "53T7wM5KG4W3S5h9KQFUw4LGM1vEwcE5PPqMvYCvzmUwmgw8MMeStbUCQWZXPt8Dr9qBW6mzMctg411swuq7eLXQ",
  "key46": "LGuXFr29r99ttmdshbDkta2YPWD84AAcDS6ePFSTE7FsCHtTNMt3dpbEZmCTE9HsjFhvvQCcaQez4mKDJKTwV8a",
  "key47": "5Pz7e1ieYfYA2g6NfzV5Zj4XzibFVKNb8wke3nACoYmWddgxkddiXijDUFqjXyaki8VVpH1y9yD6wqemYGPuPNav"
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
