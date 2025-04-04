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
    "33K4oHZVmJZzgA2ZRrb4Ma3NESio9paNbf8555mv567sfEEcRLAHk1pAaPKnwTnaBysmiwMcEtWNjBkx7Q7mq9F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjePjx6xqjmAehQmqmKD4VnXVS19nHKrvK5unLqr7J6yo6kvCErQBsxJNtKwe3fMVfkko2wNd6tvDCYvzMXRkZJ",
  "key1": "dGU8TKuJbGC4UaVqCXg9DCLqNbiGagixxbsF33aoFbzoD3qvkh3ZuYwyWPnAjSFNhZuPgAHHNumGHbPDmaWqJvD",
  "key2": "3QmAykLSqx9n85HfPrSTtNtfZQWxnTVJZXsPFHcFNR3R2wTFocLuJE4n33MQ4m2Mb1LWRBTFatHCQzqBp6idz89s",
  "key3": "5vG87Wbxae17TXseGE3s9Bwh15mQSDvzmezP5M615L4fLbWWyCbvSKUgBaVxcUUtN3Xfr8xDzUtxvJqTUTRLADcC",
  "key4": "4qF8Aw2zx68HtV6skVtRdSyYWmVT4nXp1WS5FH2GDsEGw8CT5rzDA5bxL4nTFVaoKYck4X812ch4tUreTsx6TMPD",
  "key5": "MZcPXXH5cc7oRzuPwVqED7GdHo4rnKToq48hf4QMn2NHaVfhpLzEQhyvtwxG9FJBVHsAidcKWrVhayKiK2U8ifR",
  "key6": "38d7n7BUa2nUS22vKqyaARreaBLRV6fmsHrTA26rQ1sivYzZXzrUxkFVvk5DoTkw2TgBN6FYW3PR8KJqY4vkkTRr",
  "key7": "fcRp4edAiAVHDtLF8wartHP3yxmKjBWdZ6mNAaDi7VaTEJD4sT16G2fPgCDBLo8UGHfFXxL8cPoacTm7rrUmnG3",
  "key8": "2NYeDqZNBdnFcz5b9EzDvGzpQyKnd73FRuvc8WQBqsL6C5Guw157VvdXpxNL7oxivFwS58Tb2nfdnzdWGFgTnYw3",
  "key9": "i3Vd7kj7WL1xeTY3f8WHse19k1sae37vkX2tUz2kNnb2HZMj83HDKcwWowV7SmCKgK9MwV3oGKh974y9DLKQZBo",
  "key10": "5gXocioCsoTnfV4DJcziDGHh3TeH6kTvjvxcEDJEWfoPX8zfDZaekfAEhX2dgTFmX9KiUHnMRGCeCttgqRYob2sM",
  "key11": "5XsDarnqosw3NGHuxJ7QvnZQdnbuGiaftrfZT6G4jRcZtNJMAiUVcWAJLNREJV3kHwFcKgwaRbrFHeVSPvQyFa4A",
  "key12": "LugAL6HqHnSDxug1EzZNwzJEnezYJhKcT5kQVEdzi2hh5YunrR4N4Rs2xsd1DdZ7xEBFNUrN91zEqdTLndGa8JV",
  "key13": "57VPpF3iuJ7cjVe8FDpBFFr32GD4DLjb8wpvgiCb76Kd35N2QARtws1AbdLT9tzYyDFbT23V36Rni2k5GAbtzjDR",
  "key14": "4oKAeuoVR2rj95mRCjTx3Pv3e7p14ezeDx1mDzuARe72vXFB7wS3qvnoHgwmZSawtDRnfp7AzFRVXjwvGnNzcZy",
  "key15": "2274fEAH8ozpv6WyNE1Dt44JfzDehtQPdHm44rFrYHxmXU4yAcftYLGVf2oixc4198yxGgk1FY3P7jfkjyFyY3LL",
  "key16": "5GKZkfXjfWgN8fcFdhNo9mB8nf44p5aeLmq6KKSCGTYELPbgbBGbJxAZ5Fnt3BeoXukpBVXRXfwEbyF8BowWquuT",
  "key17": "AX2a1P3kprLJnN2WzajLgTFuLmmiA4Eg1MstdqSAGZ5HrSHyya89v8m4ybgnK28pD3chiCgFsdZ5htsWKD69p6n",
  "key18": "3aVeDoiSJ1XGEs4vHyoDpBRANnQNUaUwiGS7S28j88uwBbKYRKAcu9T8oPVJo4oxegstiZsECZNfCpPWCXCDGGPi",
  "key19": "2ziKrbmRNcJCFQsM3YxqWukqNjbug3h12AaNcenHeTKjngEwM77tcxBSmjD4CdZNN8tKbMiLnUELKvpK9P2GV6Nv",
  "key20": "2SdWfAfx8dPVRRDZDA6UUgcX5Tz7XMXYC2ax44kKGSbB7tEnWCPjwHqCQFH7bcAkHdnFwTkSW6xeyRkWZcEXKHss",
  "key21": "2MbEjBxB9RpoH8onzB3xgvPepvAVvYyZLcNDnecKDA6SzwKqVcjriPgdgSuYHdGHsWkbrJouwrWRBx6WHSA6b8f1",
  "key22": "46xX7VkoPhdDVXb2YYuBLfNuhGMP9YW14DBHJYo2cc3BbarQgmfgQrmUSuifisidVkDkMHAmFeTVRnsLg5jMUDUk",
  "key23": "5Yt26FeGD7mHGyCxJGAawDzkpDXy4v3C9ndW2FNiGzK5YsPgGnNKzxYhg9DXgwpYGNV2Zygpdh9pDmsF1Vxg9Hgr",
  "key24": "4jwt8JRJwcMtipzHTZsuBeNBNegbZWHqQecF7EE2BW22Favnx8Cw69Wph7Z4dLJrANPjAFqMSru3NYmUbXT2sxHe",
  "key25": "5aemP8EuRh1dpybLqz4qsdKoBMAWLqDQNeLSt6TBVSPArFyzGEUs3ycEgu1fhatvGo8jX25zov3rECFHYzU3aPRP",
  "key26": "2PB6HyuG4JgeWq48KzptJFHPhS6jwxfoS2bbjk5Pw9q1v64nUWEWUgvoMhJSLribgJhoDonbJa7GLnER4fYQAmWF",
  "key27": "4nSYXEfHa73AZ2hZeiv759y9v6Uc2RRGqpJnj2njyRRfrsVYEip1wCGSERjCyKDPqdTkLF7RHtbcwd1jcjoT3EL9",
  "key28": "5zLQAFFoXHRXG4y24icxGucP8sZXb4QYaFB4rpAESohewanxY14WHAP6CPL4pBuRKXpBaXD4wUDMqWauJhfC7A2Y",
  "key29": "5cuxnLBMVBdshuZxpR9VPfjPePHG4a1e5LVpnZG8XPrCVs3czW55GpFejgBJXMHEhmsz3J9uXPmdy4hc3KLQ8q2M",
  "key30": "4oGykifcpGtdJy9EiCBbRfMyS9AqasBZm7NBPb7JQcYm2q2oUUUhwLFVUNAmRSnWQZncicbpf3PSuj16GZhryF84",
  "key31": "VwobttcfYpGg2YcnZdEcKEcTuuX3egnzeNzY5uK8PNCrhYgpYZeqvFgq1qkX7qomyn5ZZgfK6mkmDVdnsEmda4j",
  "key32": "44HvXcbWmk4UvChMRwAHScW5odCSEizYAiYWJ9zdpQypucc6wvnZuuLhzaeFMVFBqhWCWPDXyhd2SXvFYximGfhc",
  "key33": "3ku871QrizZ9UmuntSj3LiRWmRzS28Va4WKSoSGPwuNUH7gqY9d21NLJefMurERfmWSVyMNqpiQc1QRpkj9ykd6b",
  "key34": "BxScaxeh3YWHtHpp3PuPUrY4W6aRX5wQcrHpzpddLXhJ8dWPjwiHwKxP13H6SCnLnQ2UmTnGcbjkZDNqNsoLwmA",
  "key35": "31TsB3VDnx8PWu6zTvYo5d5E8MHvL5MKGd64tZgtmrdcRFMgaJdiSJTsa2TPqxerwqSjrGi9vo9AsPBKiAafa46H",
  "key36": "4r3xGf9QmSQWGMMnVnAgZoNSiyCsBmFi6BhNGAjoMay3BTMZPtaAxjNxdumecxfqJvEuDQLxGPsUaVLJBobpUfHX",
  "key37": "4NbKaTf1EvF5pMgcEkXQrTijhvNecnmDRTiFZoaiT6ZrS5mGPLmbFMiTuSdyxxoYMkFgrmoWgwzfhsaqRVSZDGzZ"
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
