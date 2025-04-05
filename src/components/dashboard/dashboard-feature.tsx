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
    "5sAhkvYrVmGcGndjLiMGNK3L1L8mAYoEwS1dB4rNktqYW8h9Vs4DoRqkyu1CNvBKC4N1oLwGhTp6WsfzxFnvAR7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uNk5KXe9Edr4HVEBCgmBWMqbryoVHxfA2d3evug4JXHTbxHpkJC1GXtCWFG2PDH9td2heHfrWFs17wWwEkVZz5x",
  "key1": "2ht439YiDrAChbZ8BwtSokbixJdzkTbRydkSxEdBULquQ9nggeby8oWZwG41JvExjB65CbPcniiUsEEJaNV5S3gJ",
  "key2": "3anemiDxdp3KQo6sZvdTajAoPjnJyyVvcMehzZbycWqz3obbkPN5YETpu9hMGC8ubUi96eZuMPxvJ7A3mKVPUu88",
  "key3": "2YjP1ugPhiAZMKxnw4UR8MvutzdiA8sywLg9Go5k46qALbyasgTZXLgCBnk5rWBzKhvqM63MQPxrPWWWJvyyf1pX",
  "key4": "3Lsi9rDVrGx6vEAp6vpr5ryvFV3mC8a1JvA2BNWVXPF3wGv4yi6u4RzxUG4yX9iu5Nn5qptTmvFted8PHZj2Hskz",
  "key5": "2dHi6XuGvd9tjS8QLep1yPGyNnZBK1LzepY9RXktTjYLxrnbF9dnGGyFE8YfhgMS36PCa2fd3ztVYX3Q888mQ9Sj",
  "key6": "4byZG8Xz2zcQNMgbJ7cYgjgZ6Z4fuc9JBQmgpqK4pV1iWTfzkP2f9ymQ29VsaDGmZLFASknyhCmqoPRt2cYTNRK6",
  "key7": "geYbRUiYBCrrXsaSJGQS3ge9C9bjBPvxiMLEz8zJ1M8XHVsmpN6JmsEKKgqzWMF79DV4eb7zQE6N41qRxpcHQPg",
  "key8": "2X1x7Cpi7cub4Ub2r1uCnA6ywn84rnQ6QBbHdCSXjK2ZM9SqZ4pqXztgm1BzqEt7G8AANhvHjzQrLD9u18rnqTQs",
  "key9": "4WS1Crvhc9TTTntAKeXZQYgQqH9hNCnTnAqWfqNwuU55zn3jmfK9WmBDgBAn52uLSRHJMSLufXreohvcmvUeZmEx",
  "key10": "gNd7a55GQbgYAMrwnNF3DuHqWrwbpRN7sUMdtLnBpe75tKTtpr2UJbm6UUHURcXgvVWGe8mM7kAfPPsLcLWk1hx",
  "key11": "7gEaihuqQr3B9tEBSYiKaEjare4XJo7ZgLm5BxRDUeLdYtC1hrR3TH1hc6WHXeZLEuXurFnEV4JKeWHjWhtGwwT",
  "key12": "63QjWsTYRFnFLyymmvJ2xYHHZhsU9KE8BPKYpHV7ShYBxWQyJ8SFfdHBejYm2vcFdpPwJRD7TmbHo2X2hA5a2qQN",
  "key13": "5bSVLCnpaGRFjTnzQ6KN3J9XzWdADepUTfQ4tj1hvi8rDNfziuDaEJhMYLHsXFvEsBFj1ADptuGw5WBpp1sa97ms",
  "key14": "DwGskt7WyABNw6cfoxdGVbc9nMWZvNtwqZ8uEPnCMVeGSAzmKq18PHM4bQChp1TnJNGvm31ijS5m9gYUZR8k4qU",
  "key15": "3iRSZPJ72qAT8uuV952yeB26VnoXEBYuN3cWfJvh1GXiyQBa3mJ4aAaPKt2LpZ9CKdYDn5UUi7JFtxCvDrtfF4nu",
  "key16": "3GQhUDSN2UzkDpfZurpybrWvVGXyuuY1w9rx4NrpWSx1Ti2GHDhWAxah2Mzj9cERTQiaQ8Cyy7cnNEeHWA8zukgB",
  "key17": "5ckp6nF4WocpHVJDR99BMdhXqBoQeT68tAJXNZtuSZUDvo9gK7AaiiGCrbuYoR4YEHAXtDzRG3inSbtbqzFXe79H",
  "key18": "4Fzh9c3yxN72gG6k2JFZReWLaN7dm98pTassxNFrfNLEVuBbzBKKoZPM7DLXd8KqbvVkSWYzetyJHT6RnWQdLUzM",
  "key19": "3C4ZUaa76QaP6wm9R99iQFjv8iktd2yRpBBb94doovFZSj2roC1WH95MdNwhxKQp8kxqFfxPWX78j4vVsAsm55Kw",
  "key20": "K4hqyAq1cfUQr4LAcmmK4N8w9rTLdKSu3QomgJ5Reo77ryoWsiLPsLXELDpUdxYH23aeaxdjEiY4ceixebJf84g",
  "key21": "21ty1UHBpz9koyJCGudS3KCNhYGL7GzKEYAyRw47VDrzd6kz7RjYpkztYwBVrzxaAzpvgZ7W6yW9H43Y7NSCkATP",
  "key22": "2ezbStKfjyk91D6XUW5zrn6vBEvTNrL5dL8351cmtEynDCpVaspV83mfF9K2YPbAokk3y8vUhBGPGhwLK8uXn4uH",
  "key23": "5VxEcjGv1SL8Q4kfrSa8iULxs3NsEFZwXPqokQvrk8HzcezPWUeNonzHLNCFF6WGkJ4khbAATPyxNEbpc1FF2VP",
  "key24": "2HXF6kwV7kBkUW4LVCj8bdNQrLVHrLwW8sPKTZ8ehvMGyNmeSazTKf8fmT3TTqfy2PAVV2evnjCd54CrxpiexQ7b",
  "key25": "XkDWU7Xedj1yGcz5NLqRQsVxsdLGGWrt3kX4vTHHZpQuQASjaAoTPR4HwAYWKUn18qKxFGz7mgbXeiydUGhRmHY",
  "key26": "332KgXmXCDj1VgxcJSmjRJqkZxwuVpMPY3W4d49CY6TY5n1UmpfzJWcFL5zeokxkzV5T7sxDwu4wLWEBaoRRAEk1",
  "key27": "5HjpBz1ew5bdHMaAFVUzyiRedLzX11YcEJ3rXy2aReehbfvo1qPymSqirkFqhoyU8zVVv3p6eKBxWsKaQyfKzLNY",
  "key28": "5KhF7DMtLE5dByCMzV3dbmM74WDGTR5k89aoYTsTFHW685vB7jUJ1zj1jtVQKKkgNwAncE9BSB7DncSShDgvai9",
  "key29": "59GB2nk4piGVT7hH9544XkfhzgBtLgTCzuYdKsAJuCyESN8PbDz69nJqNMDk5RFfmJmJQzr43gBxwhwV4nvkS4K1",
  "key30": "4Wfk1kNX7iKzg2koZ6jrzhZZjaGJyrWASciuLzaXZRTiFd2RmehtxsWGr885Wwz6WGSEWBHGRhvrLrUy3YuKARF6",
  "key31": "2WEh5PnQfiJCNuvp9nQrtjMavENjc4wFhTNPYyUZxMYkc7ZbeSSrUmh7i3aqkKko323aLGzU42qwEF7SVnD42VJB",
  "key32": "24TD93y9Mvo1zjWyfPbF4HSfg3mLMQtVrP7gXQPAZBDartYs2ssbDx6SwMGVjrm7LtE85Nt4ddonr2Qe4NXaeKda",
  "key33": "4ij4ba7mKReZ3N85HpAMdzZYoJFtAtACkbtdaxUNhj5vPJWyeJpQM2FZaF7a9D3K5vBXxTEisnoaBrqPcxQBTzPw",
  "key34": "2HRtamiZDvXoU1arM1msEKn5PnaY9gTc5YF4wwwwYLe4WBQhgYQXUnPNAtvN8mezzSrPSzPWy74o77nyUnUPyP72",
  "key35": "4N9eq2cbLjhZ7zv1SWFrea3nuUy8Sq9uocnQpwW4AgMbYYnLnJDiKMHnmXXyJqLJNyzbt14353nsoqko7QLtTVC9",
  "key36": "3iWGEqpz7DhM3mtChAjsxsYd9Ri4qpd2fSQUyuUi2e4KmreNmQdrCUYrK9gKTV2jReS6fx5g9ogKXPhcmzmgRbWf",
  "key37": "3D5JY7r3B7EQzjqDEhU66jSDxbMTpjJ5zf6ZKm8C4UTNMQhpRWSP7KJFST464MaqdoLv7uETZJcf6r73zwNYyBEp",
  "key38": "417j6t8AQ6WaESGCvDN42kbUHr9CQ3PnWHQE62vf33LTf7r671rJPvLf97PVq5oReEh4VjDVR3MqWpZepGmu1gH",
  "key39": "3jry8BLpWHnHQnM1ZkQM8W6u9Ztzea4mAHMrCuAg1umHJ5QX8Z7Mw8WK3twBx59hQB6nTdyuYa4UUJLG5FSTwRPi",
  "key40": "YsgF9sVqs34TGbXHraaVBVekQa4JGfHNp6B5JULXMSgfWaPM9HN4VEa6GCQ17uKtPjbwkxniWYiCZWoAf9nBTny"
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
