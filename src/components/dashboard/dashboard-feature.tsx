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
    "4dNczCyu6L7EeucLdWaQZHx5ygBbzAK48WVxruCZjybUxNFEDNRx66vi8TNkvxp3wiE3hhiLyU4r6PMUYMeWt3Y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kXf6H7c7EEC3JBc8YtTsFemGWbDKeqc8RN9BJrCVwtuz7GYCeXcbDz8EtEUR7LEXPCnfSvAePvnhGVZHcwNQU3k",
  "key1": "MwVRsAJPryDpvwqHRGNkMKSkSLievArvEhNTeUBhMwk3qinzC4sJuHKgrgMPE3kYwXtZzPoRFMAidfvonQtKr6v",
  "key2": "3nsLQMfdRG3Z8ZKrLPTHq5drygXVxndcmCSoz6GMxiMQf9mK1678SdEhoiawmQiHuGnG4mh3uo4Dp4cjnqZExiEF",
  "key3": "3bfiUSfuAy1Z6argHuj9DShgCRL9N4GTwfoxPfBn4V4pR8ABWRXKVm5wzdhqTLHq6yYuHKyy3tcMCv8mEpKT1cDT",
  "key4": "21jYjNfBLLCXew5JcSHubzr6Cy2nE3HzZEPQkmJdKGxHnx9fkmuons2f5bNPPyyjj9ALnRmhqu6DpRAPNwLBYfsX",
  "key5": "3AmXaD5PUFeJWxn4BPPaBzxFvxh4JxkXo37KWQfRgpav8e8Nh1BMG3mfyr2TPYvA3Jt8iBBStn4VsQKutwyD6cvx",
  "key6": "2Te4Wqe7LZY6ypksh1QEYXS1upzxjhE1k3QSLECtruG2euYUJ29acWr2S4D2hotA6qcnEnxmrVcy5Q38HzukaGKJ",
  "key7": "59AYmEKLRGHxedf4jD1WfaX44jZ9mC7bcvEGUcNbtf4cNu4U9Cxt42pBVHaVPGQAhciTpxzVtqQ49hH23AhFkEHG",
  "key8": "2TkiAdsqC4k3hb5EzRrDoZ5riCDrQYgJbYntjVHina5eWVUFUfGkaJ5AUH8kGPiqG64Q4w1E7Uc1c6gjCab9HQYm",
  "key9": "5HQHY4EE2UvpF7Nzmj729jB2hccfgedBJt2EpzfVEzpGhHjFRhxSh5r4HyyYkU6FN2Vhydmane2DtdqjqQyqcvnb",
  "key10": "2qFfKrjKtQAhdFUQh1B2JMv5feJjuW3kwNzahaLpisvcwpnjQj8tvpXj27Gedtd3DCq95d2tZeqggQVC86MXTZnr",
  "key11": "57QiCHMdz3z9Hrxb8PyrbVq8Wd3BLHVCaqHHxH7jqcwAfwxYoDR4U8AFhMURrcE6W3VHne8gxy8iqGpCAM6qGcW3",
  "key12": "37FZK2UdtnNcx9TqB4B8pDmfhZtQf9Pane8GT5gVrViccaKw1ADNi6UmoQ7Q8gVrTwwKeZBwSGXCVuHAxXwZ8W7m",
  "key13": "5JqjNuGJQK2dXMrMU5JoowVEdHfnYAEezzP4ndZfETqnPgKyiNR3hYTx9fw4E7D7bjPpzjKnHtVgcLu4GtqjZMwS",
  "key14": "2oEn3mpkkdcmtDCD6FZ5MxcLAHWHfGq1mG3Zdh2AhqA5ccoV8bQ24CXNX9SzUZcakbJCC3GwPZKdYhFw3oLt8zdc",
  "key15": "57bXY8PUcjHzLNR6ToiCVNcSEJi67hSe76tzuyq32noRLrQ3zU3yY4qeDL8MYptYbjM7m1UjmkkwBtyYhUe2KaBp",
  "key16": "47ZCWknUZSRkJbE4jrGkbdFGWNwoUfBsnDdSrWB3vBfqyPdSXZDYH71fqUZBHzeaYcTxkwVmQU4hnBk2ncm1afHF",
  "key17": "3yrGtEMqXNesas6ziL2w5gSQ1d8WYt29VuYdvEM7FocwswTHHwQwefnahzyVpoKp3tjEt5VdSEUpH3pUbXP3bqfX",
  "key18": "4uVFofWCNv6eCpXhP5AiqkFwbjNSuuDYTktHSFT9h8dgYc1s4aK6vFtirkjDNr6QYMnfxhagH4PzNKJa952YdzoX",
  "key19": "2JrLmXByzwAbiGK1rCthFoZTjy2cA7FS8hsS4YGXfuuQe7N71aVDyWR6ee9moRQw7Hdz7b3curcjztBsLDNXTpcQ",
  "key20": "2pzbGxuaccaGpwuM1GgaTJkRRCPAAhAx7q8cGvkaNmQLE4JGqbzZybjZkcJ4eLLxCvdr6SwRdXckYAVG5uXsffrL",
  "key21": "4dHZCW9DoRw6nm9D5Tgg9exwLRjmLwwVhLDNdgMwWAu5H9aanQWEZ9JZg5Kx7k9ZDY2dmUbmGtQVaGiQp4YZx8in",
  "key22": "21uTfprQ9zgK78sYXVT8MMjsJctGFgivbP9EnnXvwVCNHcVqCVmYL1NKmYDBd6F3oWiAauogSsNwZoCGf98m6KZp",
  "key23": "3YTsKAjTYDVFp7jiv99GbSyzf3mESEBDaQtKLYnxCF8cc493543ThF6gpDPuvMQrC9zVRGbmELqHHJrc3dDkev6t",
  "key24": "2sT6N5SJ3RkhDi2bdoD3YzCxFkj25ZgxZVrVQobQg4dpRyEXgFSQiX8hAHKTpGmYoAurSMtQfgooKJbsUhhGH2ZM"
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
