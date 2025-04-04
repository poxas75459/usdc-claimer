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
    "5uzRC6xt4X7NcPbFp2EER9Up7RmqPNpbaTSMjWFhjVYeGbYWLRcxhAXBTkf14PxWNZfp2rNc4c7cp198kPZ3qikR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4je3FGzGtTHPWhNB8opAHbCuhshzBpA6d6RbiaWXk3ZsRfoWZSLwQp9jaKdpm6nENB53WeEAhAHGSzPQR5gPwLJq",
  "key1": "5dpTNCFC4BW6eVG8b3moTPABGsfRgyJchyVinDbSCUt1uPpter5T4N4vRyqnYqgTDeYREwrjTXwLVEtKdAWcm74n",
  "key2": "3vdGbTXCCLVxK8GbtQPfowrfyjoPXnvYgLzpfntNVRG28AoHdWdK3puT3HysBLGuqchTbQyDWSjV1wE5wutkmKKi",
  "key3": "ZHHzyk8bZYepEUcSNnPnyQkU8TUyu7K3Ca3HhMjqDiJaFbgs1KmyFu7aGAYXtJnZwGfRG5QoyxKekGnwRHsneQb",
  "key4": "4ESqjp16U7yJvq2G1p6YDrUxVJsDHLKjjbe9rS2jHEcP9x7VWFsnWEMnBgmpBjz32J3HGqyz1JAeqapoJNHqWSYi",
  "key5": "av9Tch1ozCkNPvYiwzCEybtyGUnyBGTvkfqpAjQZQRRMHohNAJYP6hFqxPY2gDzj1L3UuHHhgbDa6rg6RGArCAr",
  "key6": "5YR3qRN2VQunnZjq7DQBLwsVHo4fimwQmSzwWj8wh84EyW5UPMtFAmrnnEnVknbexWwRjJuLBcK13SmFRWUquv9Y",
  "key7": "39RiisVxfQRa9s8QtDbUSW5CHE8BPRWKkaMzkc2UM7L7ZqcqndskhR5z1Boxrmxgjuivqjzg6tgSNDFhoJcawoDB",
  "key8": "63d65dH1rnZFtegiD5A1zeFc8MBhsn1b9xYzi7skYbvGm853vrwqWKuqQYWHRLbAvL2fnzj5NJMeUcpxxhMiccXh",
  "key9": "3P48j9FWbaDCyWE4pmQVrMe6Y6AxCy62adYCV6VkBxbST9fEaYPCs8V64G6wi3sgF5b2dDKYYMWzokT8MTx4MDAu",
  "key10": "35GqgtgnC59u4zr5nafZF2daK6ECvk1u22DHn5Awh4c7w42xerDzHjAzpJTqRmxmPeBo6CBy8ahwXtMi2xV48k5y",
  "key11": "4MK9z4cxWWn2v3fbBqMfo1KzPdpkm8B8kEcFxjhFz2kaXcNqXuxFnB1HxfpXnwcTDmrhpyJhN79BiACSiZTBKA3L",
  "key12": "4fi88rYZ6j7Bui5u2wt6kwZWkXfun6SJjngQsDqb52Sq4ph7qaYvEAdPUaaXfSkuNGLFqWnSAaoPYeGM66jxSUpA",
  "key13": "3xfjcNi7anuK18maabEWPU7qyTk1gPGj4PTrtq9345EJ8TtJRxr6CJrLtdxbmm52tvtdQok4A3FDdHYnMk5P27MW",
  "key14": "4sSoq8XcqcffJ1aegBzSYeJy4Upo1W1mkFZuAm5k2HHT7Ggn2UUhsovrWV5EzuqxKL3YabSok4yTndpg2xuBdnWP",
  "key15": "64uP2SzA4qNb2uJy4VAybypRYZ7c8B9hFAYGdQA56m1rvHigaFkMrAUqxSGL7RiJCrwGaUw97PinMCtff9LGziXY",
  "key16": "2XTLWikYSHt6MyLJgY545pBqvFmVC9qdGMkExGbp1BnrJLfpxUYWwRUhQSk3pQebm6KbnHtqvtw9brmf1Zy8cYPL",
  "key17": "5iZwfeLSnWqywmWpTq1BRaVYAfYh9S91LankeKCGuFYy6KkLZFPFZUWTYavdqzYdT7HwUoXtRo8qDA2djZ5RURsR",
  "key18": "5cPhJk3x19dEZ6ewJpv4xEEbXYS2z7j7v1WZBC6R8V1KwsSQZ2oaddhcu4R1kq7xEeTn3VwnWF1fxWUU3gzxyyzk",
  "key19": "39SsXKW2pcYnG2NTbysY1W12pyGVJAxvcQsB9atgNqTh8NwDm5kYjpAyHnM8XiWy2u3GwHb9w6eZrvCNTVgCHUwM",
  "key20": "5i2mF3yNAB9QMHj6aepAfhCCR1fStixfHJz1PRSphMV19pFEjcRncYzhiuws1BwzChmBzTStNXuvEao8ePzG4Akv",
  "key21": "SAm4KoEpYGv1kWsyQ2RLQDVn8p2hMeiEUBNqe8zmHGbAJYuY4QWHcicyJbFCigNLPaHa6yijCNvr5tBCNLtXoN9",
  "key22": "3TeieiUKQs6eeTtmhU2ysMzptRfaNm52WmF1Rt45K9HuCffT452S81VgQHip9zsoJzbRKJBXgTiUXuwMp3ezh5Qq",
  "key23": "5CdNueQb4wqrVQdqgtVRKz1Ya1Ey7M97xuEuzrEjfRKEdV8FpazUeFsrw1Ly3g95bmyKQJRKWVpmd3YwGctRUaSg",
  "key24": "66FnYzAdGN4F8zAthrnJYsjh6JQGYxXJzQcjEi2FH4Ey61zw2gWEnau6cT1Dosk3bHG4WCCge2WY4Xf52HiHZ2BF",
  "key25": "5GxnEaGV49Ap2vAMwGTy2pwSYtFaoUypXTv753AMteZfaNoWKyWmz5KDrPRDwkk5n4Ft5o4NEVn9CQQt1DqK9DKL",
  "key26": "5JMVtjk4vP2XwY5mAJixXbNaTTpYJWJF1HgAs2ihGsDg22TyPsSuqwAesmay3oBrtoEEBYsattR6h8fyu1LFqRgw",
  "key27": "3CAVWKko8T3PkNR4Vb6iZWEz4WWaEDNcogCzRNwbUay78WpxQ6roGoehQzGtLkwXUd66ybELG5FzYa4otFdhzLck"
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
