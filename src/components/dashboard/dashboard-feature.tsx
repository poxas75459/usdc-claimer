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
    "29zBVhYSKE6MuBbohB2t61J62ZU3FV4NeRj2LNiU5N6SBcwktjaER8YBxYZoGSBwG5zSETWzQEZmZZEnPgNsV3FL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9wvLjrYsydysFkVsfhkZjajTy6HFEJA8HRm6pLG8EHSNPcUkmr1T7otj1W5Lg7wNoKtA7bo4bgfcCLBaxxrYcy",
  "key1": "4RSgfGebLJ3AVtD2d5qgPxEmWoR6JdeGboMQ8gk8syc6ujEShudHFPjA4Gp3w8Cn78H5rH3feEQ9rBJezFr4rXLo",
  "key2": "3SSPjSo3oaxcgC8CetMP2pHxD4DHHwfxaWqhhrxdwAq7XEskxVz46haFuP2R6ZuH4VabDnMhiPgmw7naZ8q1TPHK",
  "key3": "2aTE3buk7emGkinWWoAtbDtPbXEdGL3n8tnSBiUxXofPY2gfStsSEeFWXmWKcEqAmqap6Uctj8guAYViz51bCUsT",
  "key4": "4TJi4ScemmV5XXQVUaKhjSgfW1ix92u96EQG7QxSVtUVdmzbNAUXF8GTxuDQ7fqw66fjBrpz3M9JrR7zTStLUyf7",
  "key5": "4Y8ou8a6k8LYc2sfeNnc2frfvWDbVes2Jy7JYoFf8kugeaWi1GTyx4WS1ifGkoSiar9LhLzuW6B4uuc2hkESZCyK",
  "key6": "3cZYEcPcWmHNjS3f6Jgw4xR4MgzmS9CCYqZNfHfRHgwbAX86MNZbh1GZcu2vTktoEBguK7TPHT9TSEu6RzNMbY9f",
  "key7": "XX2o2ZxvRFGXUTJz9Q9tWQUBjm3Mm4Jm6fXLBo6x4Wxd8raqdk857Eog3XFJBDwk5GkzdxLrTZ1oeyk5jsCeNbK",
  "key8": "2V3gyfuk85opV9fNVkdxSQfJ7cbhvzxAC2p2cMZjtLxM5pejCX5t6DFZwBt4y6JUoPbHZdcPUmHVpVoUugaUBa5y",
  "key9": "5gQJYwVBEbDxWXZ5vvmDVQKAw2e5fqCFy4T7SGQYuhvJamZrYZSaPdCzb8nBWib9FE1X3vxtFphuVpTTkTxw989K",
  "key10": "2vjcxZUViDMk96Hw1C9UfeLtujrC56esJc3ESBQzn2Jia6Pn3SQyNX4juuzGZugBeiXSWo6ndqZPZUi5zEFob9te",
  "key11": "Ndsygt38xQ2rR8VGfRSEWZnDX5XcYykqvkjCaa6RzkxCvFrtQHNCFoX7eAD1owyMs2zqAerzHU9XKB2n6qyRCty",
  "key12": "5uVgaxrWG4C2wryKJVD21eDb6om2Z6D4gKyE1Bf6TzFx2x7aEGfR9AQ3HyQAeCFh7pCCTZDQPCoPidgJpkKgMHh5",
  "key13": "2L4JBmacLkD96woLyD4UQcXq56XEgVkf6Wa5rW2W8TQXXKMUnVd3wvEDDBVM8MBc2M3FFNXTpH9mC2jegJd1cXWA",
  "key14": "3Pv99xkYpNLcnUy95C7TB6z16KvTgQ6Tk9QMt9r1M5As8suKsjyVfcAd9duZ7ihihGZ5wKpU4CreFy2DfHZDgsYB",
  "key15": "47Q5pjRzE4gZAFKpujL1dfnuFL8ZjfKEBEPQCLfS6iKWxyC8LqiSdFW2j287VZsPGVZuRBYe8RrXq7ysB91hrFg",
  "key16": "9nzEhjmNCCnXMvpfSUsqeGB4HSWAGYsriwWEwuv4goNFbUNU65tfU5ExxzuugZehPq94xsv4YW16Gm9BY9odm3S",
  "key17": "5bt7mLHwEvDxLWGyq23nowmTFfbGTLJVPikyv1WeTAKUfEzSF47YomWCUXxNVz2L8j8SZ1LPiMYzyDCjowjjk5X7",
  "key18": "2fKV3mQAueo36rGsDpK8zU1HGs1GGExvRZJohtXwxqmMPbG9Zcd8eH9AgeLyYrpHNELt7WveJMBc5BMBkz7s9JEQ",
  "key19": "3wFqwnqDiuZpJP6nEQ3L8BJL4S1mgGFdBcbQ4eMQ9W2fcRmbL6qRpVPCKczGW4b86MVfb4Xs1HnP1iufTc3o8u2W",
  "key20": "5me6BH6zBLbZs1j2EZ2QkyoyW1trs13335vuuSt6E3sW7EWQ7qVMkHer9qguQfzz1W957nGFPqbArd4AJqn8jJpo",
  "key21": "2eNL5TuNifBYvqZwZZSE6CmZjSy9ftsa414xHd8BWpXjdH1TmdfCvrJ1aadusyEgh7kerahCBHXzGZJ8BLhEmHi4",
  "key22": "2AjWZBwsHkZkYN46te6vEK2bFK4mYHzhSbr6Xnf8DrPDjWQ5fHN6EEgGTAWyqbVCAoYEiosthhuSJVV1qmqU2ne3",
  "key23": "3NhjteQYpAj4sNXVmSzhNT11KToywiL49MYTtXTVuEnYihLh2w3GritPK67ne1jH61RvWJrZZvQ2Tx7C5ovwqq1L",
  "key24": "4U7qEp4EVy9haZEJVLDkpLBiq8rowqqNEiCyu7KoqZCwjrCFjcYDKV66ajp2PtCyMu9tGg37kLwyr9FZeqZXeDks",
  "key25": "5AU6sczxzveQDhyvftmE9PQP3Porz8jq2E2NvZNwqvF6jCYskqmwRUiXeJDBgW7c7cKLDR75oeMsxMQhgY1FJV93",
  "key26": "5A4b1TKLRisQYfTKThCEA7xrU6QANjC3znA4d4iYkGD9p8yJU6CctQYmgsVBhCQEiANdPuVH6BwBqRkMDJXMevJ4",
  "key27": "2mWXJ3JsKKjLsXE9pNV9fgNHPu2bgN7Q3X2UF9fKMckHVaNvGruprdP8TJTBrR8JDReMytWTcxX6fsddXTcnBdE8",
  "key28": "4vj2axk5ARwhQfujWybFWn2KCoE2BREw1LfunL84SponkNFsp2uaQbwiLgmqG8njNog59VLBM4A1qSbavJ6TsErm",
  "key29": "DYmNdiocjLb6aufEUE864L2Qg82fDM5TBYTafGJD7ioNC7dkrK7FYjYB95BnXFrup6iTifjK5Qx8Wg5yJVAwjZd",
  "key30": "5mj5e48hwu7ipsaK7FJQory2CCzp53KeSJVNoKHGyPdSqrg8ysU85gQiAR5pMVmwQnUceTKLqXLcGoHRe7xwijud",
  "key31": "4veq3YDNieM6gNSQsGE2yuycQBcAb35DQ54Pc2eSsUyLksDXNFMcYtbvdVawuG9wgBJLHPRu26Kg1TmZgCobayZz",
  "key32": "4EEwF95NDPQRU5N94V2ozoaFCh6sk6mCdyRUTz65jjArTzvRMsAYu7WAxqNx3q4Johhfnzv23tRCCDyzEUgULcs6",
  "key33": "5B8gS5MVz862RYC6HrzZsdXFuuGcH5XKg3pysjto7NsWNqnimPQd3xQGFtwffwQMGk9E1YCT5Wv8uPqj1BJLZgaQ",
  "key34": "4E8LaMXL4Kwh3nzPoTdGRpEmC2hThYzHPpr5gcAtz6zjco8Lj2Dqi3kr3YMCTTA78QYxzGadxy64jCj6eMp82WEP",
  "key35": "4BSUeUmnpALHqW8MhcAcNSM5ypX8N1o9N2gaqm3W39LQsCXvNDtmUycaTpcJjwhEKhj85yhJz3rTTmf6MpgWppGW",
  "key36": "55eCxFs98MiP9HkTPWYz6RP3J6Gec7ctJXGJqRTiZM3HCjGXcAJjiVUcG4LJ1wkwVM1HuCpoHRwicdyLtzEGzFxx",
  "key37": "5HJaQSLpngPfkwde4b2zhwaYoHnZwbrhGBGXS5fzhEVcsr9EPbbcgS5RcoCZmHmcisSjTReWjfi4FyLS5r53MrX4",
  "key38": "3RV4kxUq6e6mEfyweaPRw97TZoEtmC9uYWA1C7xBhdz9pztSSa5Wz8mMH9iBDLzdKoaSqc7QNmLP12bpa7DNp7F6",
  "key39": "XGgF2TPZkJ8zmwS4U9Dj3fcWKUUhg9eBs7ibmZiFwnkNFFJeK4Ewmot7FZi5GmmNjpLeyZqdvhGfdxecsHm2uFb",
  "key40": "4Yh3yU3KDdFsYXPsKV8vaMFwfKiSwaQqegFWrBv3ccX3yJNFPGiq86v2fy6E2EhhBQ9euQSr6ttdjUjeuidXKXcB",
  "key41": "ep7fGU1sj3JA8ZPLbrKwTTyn6kx7uU2jxWEjVCAHQFPexbR52Xh9simrC7dP9tVPjB8c5MiVzrfbWjFR7dub2pq",
  "key42": "USKBfK8Y3hcPK8dvgHgLC3SpPovQPN2g972TaSww5RpC1wKz3dhF9WtvBA6Pk3Zbq2pYtL1D9yD7FWjNzZH6KMJ",
  "key43": "3ErikAupgt7oFtmMEqXwtXbXrCBm4C6EEo8vRYBTuAV8JNVgqXDRVaw4St7FTZ54vtEd3XBpLVttYGYmVQs7xrqn",
  "key44": "3ykqKaRGScHgDXCBPx8Pq1spf5dVontDYEmRbFM5myWfnsRUVe8k62CKAPSQ9fD5hJSWhaQKRoaqMRjuF1CbdMkU",
  "key45": "3arVqkRQ8LH9MEXXhRTq2FpcUR8PkH9YcgVbzq1jkzAqvcBWv4ePdkKv3oYdbupxy5mnppmvzUcXknKmiagDWLSK",
  "key46": "i7V1XiC1UXLBQrUjmnXGyaDNiYTyJc2fNZKggYffMME65NoMFMGSKXZcy9NNf6Kvz2ndXf3zD8EKCYefjsVNaMY",
  "key47": "53SFCTVFCmpLcZjGXpujmBeRU85FS2wyztfBZQXnnuh9p82x7wVa2fyWwKfG2V2r7qsAF4Hj93bhtrx3jEFTrovF",
  "key48": "3fuWGjng86PTRK2PT6zfCodRiEbMoqsM6e3dGAW3jEN9TePC5Wj5fHyY1eAqh6sHTfV9M57tjkD5aFFPwdciSXxq",
  "key49": "3ky5cDvQSAMWV7CWpZfrumx2k7StmB7GUgUxNbUfkhcbFWqo67yepRYKLXV8kLEwyPkwtYkjP72wvvrw9W9bVWs2"
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
