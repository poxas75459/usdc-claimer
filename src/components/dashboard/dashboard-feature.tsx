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
    "2F4je6iDaGfgPiV4VyhDXm5tdLAtrtvnofip4wjhp8tQqZfNHx9uBKNxK1pLCjTjjTKQ4EmmABUYGxxSqjHBCzi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xiGztzVSB635XvE1y2GAnAKd3EpXFY9PX9q5qsykCBgVK12A7pXksxjLpdLcHfHSJ7pHNLtqxFVyXWF52uU21nC",
  "key1": "5Jc94Xco5j4kgdh5CMFHttW4oypXxPaiKtLCh8KGJoeDmSGFTFwdig2Nz33JQnRQgEU4pJFJcx7mbE2GNDB9XuS",
  "key2": "4iB2NRsQr4Fq9VFntLND1iQgtsxqH9a5gav46cxeez4McVeCQD5sDeSE619tzfgNUmCVSfWHHpZhucXwaopEhCD2",
  "key3": "5r684HWehFSy75K5pSLe9mrj2GrYWdjuvupXX879G6wbQtwf1urVAPayuoHmwzkgH9BsqTtzYqUM1yNDp6rMyqde",
  "key4": "2JTKjJa7aVKuuiM8iWdd8r5SWQhmfKuJsg7QyTB7n1rS8n3p93erSc25aJ8YLcDjcFtrHKGoKTMSaPGKaKdJkQDu",
  "key5": "582UPWcVozVyYbrK718yV6Th11rS6xpRDe85A4bR6WA3HUa2kuYS4fFgnJJrnzrzrLJwmSAaDPbCxaisWSoAGMrh",
  "key6": "2ArMDHBfVnisUt5NbEiLhhCn1J1StiLUEaz5Zu8iUpZvSAqrtBQCUPTnqKu6hATEM6brrpV5dP6Uyz1gEnPsnoQt",
  "key7": "41CXnQgGanPKtpJQveXeUrkY4VoQWoLoVHZiL7DrSeXK7ZAn3m3KWGJr1irmx44ZTfR5aqMMwyN3nYZkKYAvjsX1",
  "key8": "3NE6QcgZVKELBNMDZbZc3WvCLYR1S4e9TVdMFFj6w3bU9Fc594k6MxUsSWwpjDibKeDr6W9FFaArvLU4AW9d11JD",
  "key9": "4fkK7dMhraAQEF8TKaThY4TjL1RTdTHBt4ssnR7jbQQuph3rVzBLQrfXGHypHx69E8JkW58K8MsTC53PZgrQG1VD",
  "key10": "3DZD2g1otXJSX2h7ezxEKRFfPrxeiKW2HuK5SgLzfvaAMtLxtcqtRYecoyRN7ESSBuhKyr5n4cbySwSxZxmRYPSQ",
  "key11": "678LPkMkWWCFRE3kKQFR8WDvjcYDNyq4JjnmuDtXfm2RiLRT6QRWgWteGjyvSGYMSaDDnB8BovKXVGAiosbTeN1a",
  "key12": "8LMrTuxJg1JXKf3K8AQze7wir8iciBu9qJKoR8sbQVbo4EcfUi4d8CDKQA9EpYgsRVrzzMm4yTHwGuABEnrwhPV",
  "key13": "5ZYUYUuo9pNjWTxmVTerYVYv9J26jeF5Vj71Es3VhdaQVEHP37PQP7ZDGGocEk4t9vhjF1itMTkHE2XABdZHNxJZ",
  "key14": "3X3c9S7fcwsE7VEqZkETVVDstab5D8mGX6VgDUizy8DZvzby3BnXd937A4Ygi8Ve86cSJqwiKmwAng9BzQGSrstG",
  "key15": "5NdZ7sVy5Dy7DZGhVbAuwDzXjXxKzVfjQu5qtD8MXvwpE2zuqZ8STEkP7NoNNQZpNZX3HnUNJgCvUAD41PVYwask",
  "key16": "34mbCK7uQGVt4BoyNbdKyia6Fk6w2R59qyfnDMdSyTFueC9aFYEB2ZhBoHUzQHfPHBDpMxsYGQuSLVfHmh6fJb33",
  "key17": "5A8tY5mBqQ5FKkkhicL7vPJUkPnPxrGXgWhpHcgXpRK8mtYQPg5B9V6gctDFQhsxcHrMJ38xiyqvEGG3qLJExAip",
  "key18": "4rzpbLB2HZSuu7jeVyy8aJR9UZQET2fsDH2fwP631a91fkggf6YjH84NVPLSdskffPiTo6HPvoaK5YjerUM44r5c",
  "key19": "4HdUKTodLLFpWAvyPdcCvK9dnxeieUrCodHYV19ivwKWMQ7vcEnms2K48RojXg6FabByRrL8cTWcmZzVqyTtfXyV",
  "key20": "2oJjDTNxZkFtFcdBcA45ysBrkVp83HMSTVaFf6RoyLX2UT3xuV54E8xtiaGBNKdjEH1dQ62sYHsM7ZMCuF8E92qe",
  "key21": "3krBSjHGEEtenLEM44iJyByY1DzXQ6V7n3BqSVBwBSLsp5cGJ92ThFuKic9qx71hcEpTKR6hpi9vRrpcko8x73bF",
  "key22": "4QVKNohEmse4mLJpeUi3zU84njycdR5hSppHDEHx1eBbNFHEbUoCUgkiPhru1TLVDkC7SUYp1xRxQQbondpTGA8J",
  "key23": "YPoih5WD21NYD22kukg6D39Lw7SMPS3v5oxYgDin3bvABZ6grKoi7uiwE3WEHjHNYi5wJu2y66VL1nQYgiiQmiw",
  "key24": "3G3LV1v2wMFumF6dJVPphpQm7zjiqyMNXSb44gk2sDkU8sPUf3MAeih718x9SSztPPRbPGvLvRsRMXnTKVjqhBSV",
  "key25": "4or34JYKwTRfxPeGYe77GfCG6RuvV4P8XkFQDCnTE31XTDA2K9tzE6UKyufC4HraYFYXkMxitix4rYK8DtsWCtSz",
  "key26": "LHGZGXmaMVvucYSppZf5ehtMK39hecKgStx5AMmYyshoutw3ATcPHZks2WhCeRYHGhn4yGGRBCapDaAaPvhAcYp",
  "key27": "4aZFZXQHj241e1ffMifuqKiVcSttH8dTFus94JXMUBbpGpPfRZDKdhsxPfxy7K7k6ijvfQPiq2HcXygyx6JgJhX",
  "key28": "3RycQA1YX1UMUPniVXNMgibfPCUDPPRhiUQktJGfUzTQrApxRTrHeXh18gFffvSSv7G8G2yNEojFs4ZVm5a7QCSP",
  "key29": "qvzmZ6hpeGW4JfHrGgTsP9Gp689mmnTKsgXSzXd4UsEfCGAzESdumgStPgsVqpzuyynJMULCcDm5Ug8ypFGEtep",
  "key30": "m6Nq2FiWDCE4magXBNh4ZzvHe6NPxyYN3odMwDEhntoUgDiQjpD41yQqS7fEFQ6FWMQDNHDJSJCkrjhRSpbBmp4",
  "key31": "2fjAMN1kfgwNgrS71iygcsaf92Vg5jKNcWjRubYU8BL3J44eCJVUWkf7WSfv6wLk2BxN5cZkV64LdHBag9geaGgD",
  "key32": "3tW8gRkRTFpPjWJDXDx3gcWvbdv9gA8viCHrUysFZJgt79aJy4Toh25hQckvhYQEUznGCifYhG8T41kNdi8e4MNw",
  "key33": "2QSU27eZ31MCNMpSSjDgVXbVvidb9iYoyXDR8wzK1VUc6s7FL2ASX731hcED2JFp4ymDhFQy1WUvt4Pa3XuujfNz",
  "key34": "Qe4JQW8ejMhu7CrhfQxYAohwV8FkcjRMwRidJs3YqpoM6nv7r5jYVTXaRU5Ui9FHTMKun9AEwWmhPgFseR1Y48e",
  "key35": "4UwjfA2TfSuNEwPTHGWmPAvPHXM5B41oBWdwBcT8uQJTTwuYNDjv7RwAfdDfE4V2Lv1j3YaX6vFEYzGQe6SCtDFh",
  "key36": "YT9XcFPE6N395wq29aHT6moGVxUhSf93XzntKa5Y3MkVvGFj9EPjq4nk4TmNHd7HWYyUWPTSyJGL7qdWeDFAZMk",
  "key37": "2PJEqDaDC6mQBeScAQ6s47j6PLxf6ky3EwPNoE4kdMfpNeKriWcYvBEKghMSoGGMTf8EswiuBjEGqFY1VfcaKWtQ",
  "key38": "5A19uz122N24ETvPTMSDmf6cEQQTWK7B24XyqYr8hhxj74HY4etVjt68uN8JatFNFvzUD1DBDC64gN9QxQmXzfub",
  "key39": "22yPW4j4o1ZRhhUW8gqrxwuyL18aZbYXki2oxRj1ms2aDQ7oXmhB9AYC1v1qDuZ978kDQ4m4PDAEByD3wh8WnxfC",
  "key40": "5614rzmn2bpM8EWFp3K3RWqdESXHpbHzeSKQCeRTpcPNVSvJukMVxoTpe3Qu1HL14c4dRo1cZ65ZNdvNqwgDNNB1",
  "key41": "4LmjToLnToDmoxUDDkCExqx7xbWXAqV1H2768j4uxrVKEFCw9SF4ogWUDJJTcgSX821xFQir7mPgVSi4BuiZ4DeT",
  "key42": "5WtMt7KVbkGFM7zhhoSYmV1UHmR4ZHvotWt9bEKuxmBNWBuZsVw5FDU3Wtr4yD32wthxTqmQw88PMfT57do3oKpz",
  "key43": "2fTum652LuceGgrNxuZX83w7CoB3y5DiSJrPtFYJpBsTSPeuK5NKXjYbb8wNb1HTZdu2nCSXYS5VaBm7p73aUGzb",
  "key44": "3ehAyWAvxJEp81Jn7NKsvevXX8YMDGNV6eNtxEKJ9pqZFy5kajzHUkc4sjaMqSYNwKTXjurX7Qfdu69bneGbhqK1"
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
