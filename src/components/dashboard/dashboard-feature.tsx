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
    "33D8zgatR9QxddHBFVqxhspSU9sFHGauM5Bz8YdufTuj9SjGAYAz6VGByDCrWU9Rmdn33Y4rbUGVu4G2uZjYwPPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FHZoC1xGfmYf9mzYQ6pinV3Pr72sCGt1BFSNSCLGSwMnPz6PgoenwTbmiAwkMxbNkUD7p74FEkY8vh16fXMsDZY",
  "key1": "4TkH3JHQdi3eFSioteofLZ6FZmYKHTBKM1NxZCrbYvxhhtqYR84YpJmNnqD2X7coTC6HShfihU7QKFuPmDgRvFWR",
  "key2": "3EPjxSLiYLc5XGp7u4RG77rAR4mNJWZUAPNCaj8Wt9UATB71S1qf54PC13AGJDHcRBkrgu13fwSE5WLa5yA2yRUE",
  "key3": "44MbWqDZCxEErDTUqzTYii3jF9qkdhhyG7NwTqAAab9FmcekfhbXxGjcLVnfwCdXM2xE3hTuGmNH3MqgZ1mBrEru",
  "key4": "4XjYAQ8erPBronkScTrFYu5fRttU3ty6vqPtqJTZWV9gpLX8aYhuF5iENsg4GVnSDzqVPciEVeNnoQUhbZpZ8Kq3",
  "key5": "hACED12nzXgPTpioMeyH9qHgW9d2XVuF3anW3vYSx17upVuVaoJmWLfQ5ToRiu9TtEay9yx5cZP4oxYFPSf6mPJ",
  "key6": "4oMVtunC9QsUwSENRwMDPJrQDK6qCj4BYrTZyPvc4gdnZd79enta8F43JtAooGfM4wTfxyG94tkBZz8zvEyLZgjj",
  "key7": "hfKjmbexs8eytzPwPYBSSeKmcsJs46AvZcBV8b54xN6pP4sCnoVDdnBpRUtzRdghfTZxY81rEBdrPTdjw7Z9YDi",
  "key8": "5NZNdnhMSPiouAqhQkbDn5oi9ppXYLh5f84dnAv5D6f5GTGq7Sbs8HGbdf5X3Das9pjPF2ppGj7QyQb4Eipmmm2M",
  "key9": "4WMQ6Ls4QoHtdjJBH8PSAShAmFPxdeyUHQ5T1A2HxiXgK4Vc7pcxNHMJkWXPRJiGRcGdtjjyzEf8ypoyFKsHXbdf",
  "key10": "4n4fP8FCQ4Ecc6mSQWsrbW1Uj3cwbJFLrbtFxg8APAmTKjv8Shu7hWJyRqiT6YgeS7JVpETRWXwL1nPZT9dHiyCg",
  "key11": "JrgquR4NdHEAZLiUhM59LfSM1wuRD5RTY5QUSmpW2dTmGp24rBgZhsj7AwWiFmo78n3BeZ354Vy7Z8exjKRb6Vj",
  "key12": "5NiG8qWfp13QVfJy5wUksoUskTjBefEdaDfp2p4eJe4m82wBWJdwLXkXY4wrnMqbxVjiELXwocBYr5AsTMDa6CnP",
  "key13": "2pV1Ey1c9K7sAJibc9AMwXxyRWQvvxJMykqJvQxrkcAFPDnvfNMTWbcVwSRVJQ1qCGUp5bQr1C5QxSMZv3KCdmFb",
  "key14": "4rok1h2y5oDeL6BhjSuGzs4QuKmrstoxmojuEkdUbfwiszWx2R9LuEa7cPkKhAUDy1dAKVE5pcgMPDXM4U3uMTpk",
  "key15": "3AAaX3dcYoAmiEL5YvY8qA7GWxBiDr8JAqc1hUEFjcjzTMCG9oZZfRZ5BQkifkrmh3EzRaeC9V9t2vCpkKSE8F7M",
  "key16": "27MjnLAixgE6BFdzVRE9Zh12MxYuTLFtPLYkfbM1Rz9Rb8bsQLnXbTfsxSW7qqm6kU4UFZLWeSuCTaGm386sUWXp",
  "key17": "3Tor9tiMiuzhvcEwQ9cxQpRDu142x2Eupr5f55poZafS7bnEuqDGQjxtXUsJM282mkirP7TEgfTPN35sYmqByX1a",
  "key18": "4jigsNQi3sH5LJB2Z8yaHnPr3NivfhVgwnkKAj2ENaMYN9adTsJ7TSF1hyGzdf7Jx1XDZ6ny2SWm4MkrrXxgEb6X",
  "key19": "2it3rW36wcfrmiPzXuFk2UivCpJWyRniUGdih873qz9EbdzFdN2xfkzDyjcfLy2neHWJiNzcXAAQbpta1gWkuyFD",
  "key20": "31PmefFSySMJMvhj4wAakrtNuZmR9No285ntWscSs9KrqAKmUL9S8RkhUcvronrT2FRJsXYVJrauKfPKtH3KRQ3g",
  "key21": "46pDeR5FSNvKZRD3EXTCH9TJom7Pq4GitDxZtYPDvHRYrwwCRX51brkynpLYiRhzz97iQ7sV3jqucNqbd387pRb",
  "key22": "5ndE6VTYV855o1Vz9uek8mUHgUd8NqJo58JTxS1kCEozrYbC6X1Cs7DL3rybpb8HkcCyJ19tQkm7YCYpumfKzt23",
  "key23": "4qcPTkaoQ9tcyk7sM88zEP1pqk2kPU6vCL6Vm2hrhkVwbYxS2Z9R61f6nnLE6mfRVrxFP3yZUjpWKRmNYjKMPdHM",
  "key24": "3hLmFMoj23oPDuCU1anPEAAEDvtDi8g6V8KLVNfwKQNhKWNNXD85eFauDVhF2fXNLQM1vjUvgJcYAM2T65MDZQ1z",
  "key25": "RwbDTZsxdoZSQGcCLYaXFbQrvgfBTLZ9oVX1KvZ3kSq7g25RbivjkYgnTqSzKL2irQpph1yqTtCyEq2jF5o7mLd",
  "key26": "UWqGkHSddZWg17tCu8Z8wf94YbDyMMAB653tUqbtS5DtNLQRusBkRLsFvX8mgucULS7GJR1GtTTysiTJix14dTR",
  "key27": "3eSi1DfDwTp8e8brABsDGBPEU8SHWE5VfqMEQQyhPMvjn1Rq7bufsUExbqNTbzDDCTf6yGXaZJWDyzX32PZFFKYm",
  "key28": "2YWenWdAcMgqPMTD36RCxzKSUNwRxgJ54iSxrKtVaqJsDNXRSwAGWqR5wNsLzePApE2oUD5LwtGTN4dJuoiwBtp4",
  "key29": "4ijLakjYZGgrzYtqgcpYEhMQjUGC12FaSeUmP4yuTo5hRfp8UMJtVcKvjZywmntWawvrGtMuAXXfeMmxx1gF3iqm",
  "key30": "s18Y8cwLeyKcQDcKxvHWooYxcqnwEK3DnR8UmXt1apkZchGvs8CLKWWMarSfPadtV5eBfuAkiaZRggqvYUyEwRX",
  "key31": "jgN98hfQycAMJVNRq1Za85JPUHSxoaZ8BHf177RRYp2qYWGtd8ZqU97T4GoQJDBAKtQpyM3XbRdA91GchvDDZPn",
  "key32": "4hgTVBHJxUfwmepVBLN37CaBz2ozkXw9hqAFrUESa3j7dZvWdgWKByWXdGgBgbhegpEuedjh3Yg7r5aHJyeY5D9X",
  "key33": "3xPotrK2m8mAE7wi5Gz3vKHJyrLfLVD2bZKexg9fzSCjPbjGq73GBqQPviUkdUEEWLx75nb6bDPNQLgmNPoo2g8m",
  "key34": "C3zEeUZ3G7q86bY4P3ob8svt81Yuh7nkR482FJUMiesw1Z4wZ5cBjk8DDQSSfq9GD2Nvgr4XogiAAFCXpuSApdu",
  "key35": "2qbK8mZKsgShnFDQKA9kHxVpihKxXbbFfSiRDuyEthC4P7s8ExWHh4nULkjNjic6RTL9TfxsmmBgw3L9VAP7Z7Wp",
  "key36": "2BzjiovsQt7FoN7xjy3gLhAnfUC8PchSWouQAFiE2ShGr7b3cyEtUimiEXRA1Hh3YckXB4L9hn7FBz97DxXQqv8C",
  "key37": "2dU3UYLZEreFKdnQ3Te7VsZkdjGTAvtQZcKDAEx1E7vfTEx3p6qeMr615ws1Ne7jKZ8qvy7KgvVJ5W3mgXBBskDe",
  "key38": "3h7AE5kXeFdyFjwhh79BBK7CF2ofJv8GFpnQs6nL6jDaAYqwCnMNVL7aNTb57UqA4UB9x7PXb5mgGKDjhJGoekJQ",
  "key39": "5BtKCoqDpcfq634iy5xxyuaGLbhuUgqhhMna7grKGmjrdrARcuZiktUA4ADvSW87YK4xd3NQkWs883ZTQSbgjTmB",
  "key40": "3GjgF9CKjz8PT29os4YQny9M3o7DMYHM4KWgQFmemsAZ3VqdA8a2Wa4c21j29UuuxMc44dkWcDFCHjxwmG6bs873",
  "key41": "3TqR7AR6WKaVCNUdU91EM7XuT3bwATsfhAeKQoi1erWgFGNvdnjXFEdvA9ChEMPf7pXGKxK7XBKxb6fFGeghLzJK",
  "key42": "5ujTuSaXqNr5a3Z94iVNNMF98YZMofkgLqWWBfPdVdqNbHdT6obXe5N57R7bDJySga3WQkt9WWHpAXjuu6xzR75j"
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
