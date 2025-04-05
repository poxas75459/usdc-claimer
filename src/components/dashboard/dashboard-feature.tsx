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
    "3xscqs3wZ6NaTETAxHMG1q2R9qF9v8qM5PpRQ4d4SguoLEgSR8rUxFvXdCmfFS3q9MupJNmtSGEaxcHnyNKobPG2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LMqXFUvUB1TyetTJxcinkgWowvbcyYWMFzYUQPAyEe18auieVK8xGJ1tC25x7XemosGpdXxKK66WbivbxBZLecg",
  "key1": "2LbNxm6gsYjt8ZbyJYGkhzzAhTe7gMK1Ukcs6DzweHfDCYXUnCMXRHLH85iXRkVFmWERrEE7Xv3N8UPBbqLFiPHP",
  "key2": "2dY8GwHR3w7pZ2cVNkXuKQss9iFP2xet26wtN4ce99hAU6ZPUN7LyRtKQuMCf6VjzNdUPbUW25sLyt5mSNzgE1U5",
  "key3": "34jJ2HguLrEfykWycHjHGcQVCSjhD1ZPgsXBF2vkBcsLpQHH9JqPNMaCPs7V1arcqmDMrcMSbAqVAm3zWJ3ojAxz",
  "key4": "4otDz2VorXpJ5pNYQHZg7H7ePHkwh1Mz8PK2WUk8KWEXXVVm5VXkCRYHb3YLb9WQozgZT22yxrvmcUBfUYRKgCUn",
  "key5": "zRg9qgJWNegtauDXxBTZqoYnaN75sU4zL9NVvvat5318xq2HjFTTKtXNtkqHBnzBqcaNcqjTcpcmv59XKQYMiF8",
  "key6": "2JFN4rPDYfBLGMFSZR2kwgASm9ShFo8wRyuLUpVny2e6fxJjN4zBskZ3CckL868veoNQhW6y9VLBNfcXysCgHnnZ",
  "key7": "JkH6q8DYwEJTW1fcTCTq7ehXKQXyvKzc3op43cBukRrjgTcG5FBVkWhX7vumCnmAQwTXRDjAzj83EQZk3UwLyx1",
  "key8": "26nHL3QMim7yyvKNSPdkxsUvdkUaS4Z1MjUMEMrXv3srpxVCGL59kwe9AnHRgKFvBNeK2kZyuioxLtp7cMUpK7RP",
  "key9": "5GghegrbW1KhnY2UbURWZ1ap4xYGqts2WFD9uYQBVBxaSbi3qtgzPei3TJP2JVV9QUory4BZXqD6JfgJPqxs5tXW",
  "key10": "2i2RVmMXpDhiYDiujQrhT69Utdng1ZsDFjzjtmCJheNzQgDAoB6vUDq1abydWNUQcWhN4uXFiDy8U3ZYtEcXx6jb",
  "key11": "43W3irGDFV41mB8zGQ16EVQ5MXHGD7dQr8Mqx3T68F9mKguR8QhsWGBmog6AG9NZJeterh9p3YDz9TzJBrxzkeq2",
  "key12": "3y1MxLhqT5XM6XNKKJAjLwuShyQkt6R9RWVZuCPY562GULoBfX65Uym1opj13uFuEU9a2XVEfjMkccAo3SKY5Axq",
  "key13": "5zVwRY28nZQ158nzv1Xiibd89xjVCbySk8SiRdBYQC23obGWuHcQtHiSWsZrnHqTiCzCnBoTmvALhLfJjpMMeeCR",
  "key14": "5hMmXvXPDPCCsXgkwUF3cJguSgQ1bwY4vCPgqxG5uyZ9fBiuR7EDHy1iip8i8ak8mQN2hmpWKDEgvtSAM5aaqBh",
  "key15": "XPgVQt92U1owfhciXL9jyc6ymQ8LTQgkopQ8FYaXAvrvbCCDqVsXyajbc1m8uKP7eyUeuBxb35x5ihsFr9A6HcU",
  "key16": "3PJVT5UNgAg3xZu4m7hnoDff1Yt1siLBzm6shcvtQvxBJ397mwtn4CwQmaFhM7YUFJMxXqjx3TyBtVzrTuV7eZYh",
  "key17": "5fQAcFaU5jwE91q2MDGwQZzuSPFmVFX8Hq9aZGcFUd55QMuQaGsLYaTkpzQhr7tzBAsoQxGxAoq163i78sUv9bci",
  "key18": "4fwnew5frKYMyCQdrjcfntCectX1uVVg45Ky4qzTd3c3wv6HFC4QkCpQXvUaBSvcBRQAAtx5v3oV3vxbktinTVha",
  "key19": "2nPD9ZvpvEwX9JmK2G4vaKQsddYy27f282JqCQYPmgcp5aCrNGuRyuNBubJ2K7RGpADcZwCMq7yJvuNqhL2VxZ2N",
  "key20": "5wxhvtFJM8YgcJ8p38nFw5Ma61uB1PrUWdaqtXgCyJ6n22QXz3CHhrm6gBRtVKeKzVvq9bNXEhY6BE9VBmug4uEN",
  "key21": "3d611L7GyGUnNzx6yK2SfGAGqDM4VreZ7BZ5cMUgZE3pcSfNVswS1N5hiFhrJ26ZDZhFvvkLX8wDgZVkRZCXspGP",
  "key22": "4sZuvCzawe3D3XAYe5xjb7hXyqG8HeysX3HKUHKfNg5NJ3RBpe5PPwnqoBFkMfi9p6NLahPRMNkMckPjAHi3eVNM",
  "key23": "4p3HrLyUXPtsYhk4iF2HGbSBkZRU6PsCcXMsUaPy9vJYDATXVbngL7Qs221neFo25GDbKAHyWGCMbJTq65pNfXo6",
  "key24": "2wfrNM4GVan7cQ5ycoS644m7rkE3x6pVbL3rTPK36dwEURKgdngPKoYLjccdQ5SLWN7Aw2oLrZTZHk8zhz9WGFdJ",
  "key25": "5h35GQyZQmotxdTyxB3xEk2rLAwaU3YwTabiz6EWxQBmdPsFrww5hjxKwi9kvnxbPwLXCMmvMstY59TWr3ewQ2Nv",
  "key26": "2q1R2ToX1exTgc1SjbSwdEzRNsxqrYtHMxfSMQmS44zGkyzej2grMp33jS1bHSeWGgZum5cEn1QHmpN117DK4ZQJ",
  "key27": "2zesrvBaooRVtSG3ci1uXWUgdkXyT7gkwMyXyw7GwPH6GCPuYirC6tZ6FSSawg13KLFzJZaqN2MYKjhGYN5uhJY8",
  "key28": "5TzYBdzkhvKT6caaA7Gn2eh3dWdhVsnecciXS6tZgu1Ve8KTjXxb6pkbBHNLKYWQhuZDroEfKz1i6MVGGDZ3n97U",
  "key29": "3d3ZPvXxo88M7i6jkafRzdYnBjckwuANvgskBDiYYeY9iGsxqJekG4tLKAUGYJNikTQ9mGgfvvUrF3Mp5FvJ3tQ",
  "key30": "2Xy2EpvamJG4WfZ3iJvEdbHZh3Zh5UXvxbdSaEAbdK5ysaFYNApFL14rcZFwaswDzgokK888XLQ9QZ5vPVnihXfM",
  "key31": "5VsZn56DYyTYyfQrJQrRMMjFHHsb9Y2wtVoRmjKeVVqhY4ecqdxC8VTeWQSYKTp19yuqsmm3bjDfN8KCqJVcXzss",
  "key32": "3KpvU4EX9j7V28egqrJZdkPfD38qQFjUzmW98EjjPa2buaJWzc4qVLa4w5PSV9ptVtFq9jTaEhu5J1DN2VS7fSeW",
  "key33": "2Z4DBPJHpnmB5uVEGwbewUcbnRA7bHym3pwgXcisrw1HtUFj1G99SCL5JatV6wMRwYTrCH17TsMa9XYKMVvChaaw",
  "key34": "42t5Mo4csK1YzgKbAV7oPs4YZQqcmeaTEeAPQZ3Qbbpv4gQEH5J7wfC6Eaa9dD9da2S5eXYYiGMewTu4mb6cNL9",
  "key35": "5PAgWdazc3apqBzGMjYNcpARTz3nxxr7sr8qpmxEdNsurfNRMkFEkii8V6WmsxiqdJMZVmGq1FLjVfRLh1H9iG3V",
  "key36": "2pzYeYRpLosGeZjVhNprebX1wdmafRHMuG4LZ2GhuAXoNJUZYYQtLmABAJr4j8K25YMjtCAvY488GTQAxQ6w66XD",
  "key37": "2tDDekULhm8Vhwy8jzTcCjjQgSHE5mwK8XM2aea4acqu9h7qgrLLrgMEWCCEc8rcrYhXLjpd2CvsHRLxhBdZd5oU",
  "key38": "2ToXqAe6311RuH1zoAkR2NQNJPK1LKi42zMBFJgKHJNF2qccFBnei8uQoUumRMtN65vA1NP2nptPMfM16Q7kfG3f",
  "key39": "JWVDp85DJ7nCrbSdwjYdhQkAB8o96MoidzSrmZJzs2kRgVi8cXxM75TmLYHg4GjEEsXuuP8khdPrGnYtx1f6XPE",
  "key40": "473fmjsb6jA2ECUgSbYAuGQhDDUxZ51mHZ5DtTSUPzd77RmB764zChfa2MfsvWQhFGvQKCj4yK8FWgchJBG5668X"
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
