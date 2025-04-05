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
    "3NeFB4XiJiLTfaCoLTAEny992FUnpMrKP4wa1gHiuwNQQcxpMFKv3F5M7rdnz2Xsygi2j5sxkJs5pFdwDgcEPsEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4inqXqo2Ee47haWjdcb1miVAoDKMJjddFVKuyoALao5ce9y1ewgHzq79BbvUhXcs2MEh7pWTwe8JwRaf1cnd9w4j",
  "key1": "5jUd1E7ESYQcPFPK3L5Cuj41kD463oapaWPqD19tBkALavjRDi3nU3XZ5hDbRVoAj3a9FHvhnqh1QwSdipuYyAsR",
  "key2": "5e86BYZR5VzU4ZJUgqfbPg9ucNAGuKwvj9B5gy4mzg3d1xb6dVjUuTMt7FKbRGAGuzbeWcMaQAwRaDY2JrkHtawV",
  "key3": "451DjdceH4jr98k6cGAesFPSCbYG9kNAmojFfutMyCaCkJw3po8u24fzBUPZssMExqECSFZaXmRiWgLDJU4kLie4",
  "key4": "5oLro7zsTMPCwF4s98Cdt5cvAPCsitKfdqFtewLMsY1n81LzcVsTfJoF4FhMB5D3g9o9NkJfnK88oCrdWgXqYLnF",
  "key5": "i7qFeFLdVbbZ1aDQ1nsKJj61sRLnseRbMFcdGzX472yhRNptByFakjR8Sf8xRqF3LzSepNaDA5v3ZZie6d2h5FZ",
  "key6": "34mxcEYeKJzZ4WC2ZR7CycsT3oCMDuP5wTatK4kZ3AWUez6Dw4RZLDXdrrJQJawhLFqBAMsiFtok7yzFZG4csfc3",
  "key7": "44oLtQRDjdzka48X6VLHa8DkbgF7VBtQ8xPnxV6sxHyKV6cAwddf5UbxuQ9D3XDN9VxQYbaBKE6vxKtUdpeQEbVQ",
  "key8": "4DhAWGAakkFMkmNKt7yGRgxJvCY7D2D9Fnt9o4cDS8HeujLLYtyBhSChZu3yYP2ANgvi8WeeJAGjCxpyPSVC5Cjx",
  "key9": "3SVH9cnKGdofEt8yBTJ5Q2NUmHcWyLxx9APhpz74fiEsgXyJpWRGC9FihyJpWeuHvmCN9nuUZuKdwD1c7zyfSbbG",
  "key10": "3kX2QTK69Wm4ZmAbFGbnQawxrNRyCxkjxDBpHaz2qruvkKQ76ScxH8sopNpRJHogCT7WR6qN785R7n7ZoGJxgZJY",
  "key11": "53FcrqPbY8YPyuzCDKHcavECM2cb5ChZWBYv1SxULunK9AKjEERYom42KeKGeAT5WJFQaR73xQAUnUt7asL1qHhB",
  "key12": "5vFBVPvp5Xt1Z6YLjH8yrjpeGpMtXd3xHE4cXtSGXggAsmeDbF5ede6t5omUneHQvepRv8egdzMJrfPAtTBWv6Uu",
  "key13": "2t83Zu65DVTdBHSJLqaSZzHCKHSHDg6xBPzfsAhZgnEK2P9UeJpY4qcGtxaPGXX59oLtkoJTFU61mQjj9kXLebri",
  "key14": "2e2thttWk6CvuLGxBqxdDXyPXTd6qpuRUN1tbxKqaT1dpFT8Ks3Q4JxerepLdeGM6LXEvip1ZATTvNvYw38mTh6a",
  "key15": "4sBhx2aHpkDQ4bpcJgbLxKnB1zsh2fn812CAs7gvwk1yYtcaujknDFnEoVPutDPDuYtp9yVeMXmf4YbzPPXp7BEQ",
  "key16": "3XTQe7QBQ3LLWyWWtFMea8W7E1ESVqvhmmX7zEzT3fwxdzWyUw1aB8ZHBm4ycew9fjto8fJKYVkrjiGXUS9v2mMd",
  "key17": "4D8NCQebTW9fnRqnp26pRuTuC25y8hhKw2WYWRno31oYxUBstPmAHHbqphsT5vqYi6D1HsyJz9sNjo1VpWA2TGgH",
  "key18": "Lu6HAMjrL3MrC52CTwRadB7AeXELdRuvdbEFLNvuaQv7Wqq9tsBmGidSwWTxCVdAMvC5aJqYMA5dime8uRr6kEU",
  "key19": "5VhsFRhJKHeP5BcunHV1QSAUGpfy698LXccA9CJ95ZYE4V9xEh1q1cTA5aYqZNkbMJHQMWpbtpwbErb8fsYy4xbq",
  "key20": "66fisvYhcEsQsfyBhooFyN9ucW7AfWmnRcgqwEdbrvM9YvXBAgfni9zz9Qc57MQ2TEAn26HnR1m2FZmfsubrT9Uz",
  "key21": "15hbDSUhdi2yjhyL1QQZVBt7qEpuVVurtjkBkVZUpRVfcBh28NBGu9GvrVU6X6C7qbLQQ2rm7LvdqsnqyfUFoJa",
  "key22": "4hcqEfJL4N74uFdny2v9pbm6rLLLw2hPh5x19b1AhbQSFHDBMtucCc9oqcwVGmd2FD9DPzjsJCCGFhqajwHxFNg5",
  "key23": "3BXAfYe13C9FrCcM9XZ2KsFtxyLgwFSJ8MoDsfaZ8T6SXGTbKgtXCUWpvPCNjs8xvLjmT47UmPqqWDRTKmDZoQKB",
  "key24": "61qfMend1hMDdZyV6MRJvpvTpwczeJocKMRQF8XYgX1GPX1hoFsrd6t3g2Dr5kNj2gbX2dPs2VdZoW2KYZvoTyE9",
  "key25": "5YUXL9RKPmeajdTh716yV1U3NyGBFJJ7pDA7jbMRK5QQLY8xQhHJvb15G4SP5tuvUsZSfjabppUbTdqA2snsR2nS",
  "key26": "H7nRTqxjDNJj42KqHcJjygabYkNyfaeBFctu8ofj3hHBVZCBWeEE2qrKbgeiQvMMz6pknkEzkbmNP5BY6fd8fC9",
  "key27": "4AVqn8ghiok6tTj6QPXhQGziXWoykpXiaMrA7JmqA4US41ddYyPmJvfw3fFuCjrch5Jh3EfCgMioe1URx4G69y2P",
  "key28": "2zjK859P7WjMGxzhnt1kg19gpm5w2wvqiZg2k6J4S496erH4ciLZkxcGhsCiCkWpD72PLbnRkjP2UDS6cpHnfp2v",
  "key29": "4r9N8sdgVjsb3DgSF5w3peWttxvjkFAoBWF1nGkiRQ8T1tAfU4dciTPBvFfdkb8hPu7qAxNr2c27cZhvv6BuHh76",
  "key30": "ijQo3hijwqi3hYjssCVR6hUqCVXsCfcMM2YDqUT3s5TXnuCctcTwxB54owHt92XavSMVGe1Si1MUeXt7TxYarZs",
  "key31": "63qvzPEzdwzxpp8YzvD9ScmCx5HJUoyZFW9yMz5PgLFzHhgGoJNENjh61VfCWAHHFGkfD96nkZfuREKLNkXAuQ8A",
  "key32": "4uHTQPqWVM8VVR3ydPbDcUaUEy1zNebtfJTsyKmj3sTcCVDg2fBWKnKzbR7EL8sAN5oMYpvY4ja5m2p3sjrJHKut",
  "key33": "3LNox1UXsyntgGbyv5uKsbN9Y1J9nWQj84sxfCxfYmksgq9AfVmu6QhTyBBEQFgeSwSTY966KoUiFVPv411WHEde",
  "key34": "2g65qgFrx9Nuy5jd2SAiUzG8pTtnvThKWpATV1BtnxVrAz435wFxaVRGkHrCDviow1FshxRqpKcLUCVsVUEhKyY1",
  "key35": "5hcFBL1s4CTUpWhse2ChTGuNLMQshKPqymJpGoMS3x5DQMLgkEfuDCZ4M33ybN7bjvT5r2YUzVpdnKUGHKCZPF6F",
  "key36": "5sP3xi7xX9Hm8yjyHEjDfSMgSeZ2KHrqEnjr3fiogNGLmXwo6H9A3cuQPtgSWUULoQstKVyJy4Jb4BCiWVtiS5MB",
  "key37": "4g7R7kKFEDF8f8g8TdVqpZdKV5QEu5EVohi8Wuy7ctuE32LeWEWhseb45wFjxsA7EdNd8jo615Z49UyGhgUZUMqm",
  "key38": "Ux2SFA1MWV2D5dAbpxX8mGQsGSVYN155MyCEZtq63L3DNvKjai4mTd2uHxdrhFX7AXDPK8zLSJSYwbtcA2kBEmC"
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
