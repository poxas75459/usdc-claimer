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
    "Xhm5LiGZ95GRk9a6NPmAjFBBn2pf3Wzyv8wGVf3JK3Spbp9aHU3DboZ4GfoDwhcFsWhEAqBh2W8xbKJLcquTZuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TzWBMfEi8Txws7jjtHz33Ch42pnxPLbzNXYpK1fHQh6YvWCppKTTvUKpwKnyu6GBDaW1d7woHDkdymFUed8r75Q",
  "key1": "2cffMg9oakwxdWBYmgVpwT9xY4Y4EjhzhinrHwv4VRNXjzYNyd1vM1BZwUPfDUaE3d8D3fXafN3U3rcbBpzNf69R",
  "key2": "3RqwnpqNHH8DpthoRtzUJjdSVyyF7Xvp96a1LdARSW8fk5YvQvgb3XVR1bHbzmqwPKekvzz4qsB68GdZqaAydadc",
  "key3": "KdU4kCcDQxjhqgcHqXm4AnsLjkJnHQhX3CwWQwFHURde8GPke42tZLQgnGTG2u831Yg3LbnnniiUrarapKEHrUd",
  "key4": "2Eg28bFDFufC4DSZNyUUMmzyCmWMTbJU9J5gkD7wRvXaXXLtXhxLZaFY17rEpxoAq3pWHnZkUqSZq6DJtjtJhs94",
  "key5": "33V1ZUjM2iBeaFaxFKhQZ1V5B3pkZAnvFat1UZAHGLeAtmw3nT7ySADu1bdRQEkt2kFHjsyGg7EcgZinKuprexZc",
  "key6": "2RVULdkwFpCcWxjzcbg3vM5bqBu5u5TGRtwfLmxYiyDfiueFDKqXaDKGM8Jj27X74AefEbQ1q9vVGXF2exCviS1y",
  "key7": "36iL51KBgn2H158pbrdQtfHGVwnrw4ACEgoW4VF3gp3CzSRxg8BU6nsHZkMZmN3ev2Jp9RMjmq8j24PGiRsZ2Ea8",
  "key8": "3MVkcP6TMfXyMZLXZJJJGNzaQM138tTkSU715AswsgMzNpRTNmNoUKTJyGXMmZTsp4CDW5t5G1X7WFrJvPjTe64N",
  "key9": "2ZbffVYKGEeNF2LUuxsfzUU1cFRK6DsyuLooSLaGJ8GyF1NRk3mCYBz7gshNnQGvSKkuHmvc3iVb69Ra2c2TraaS",
  "key10": "h7oSTd7kQQdTCqtBCnY1bbgEWFTx7oYmWVqQgN54qr4d4MduVz9HcA8LmbGS7mzf6f9HJAU9eaRFvkJ9SbKj2ko",
  "key11": "5rSiS9Bor6xaA2x9Q6QL3F89agZTnPwbDgUceGbTE8fpGaZNUwXd2Ksm2M5B9cxmPEq529Niqg1ZTEwUx5U6iKS2",
  "key12": "GShWXPwgGmQW3PzPQHMUeJ9NFxp56YZP5ZvDshfcFjqxheF2GPj8Hj7UTcnCGyDJxrAQuM9xht9KhhGeD6mXLqB",
  "key13": "2cFSbiLAJRpuHXZmb9pTbJyaazhD7k1kKhs7nMe9wSyTEPUcXSft4ZUzzL4zUGuNUTf63dUgkyCSNCFUfNmu4cfm",
  "key14": "3nxWJkvTEKBYpgEpQDQ9LPrGaxr6L3cp3Bhz1c5xQA9f2KycLoSwwR14TFGn9zFJystG5XEbwK4eGx8Hrw8SwrjA",
  "key15": "39EDDwrvHasMkBb5AY6qikxqimc99WYkQDsMpyey8yxKzuQQ1E4D96HaYPd96iAZGmfc6Fedm1z7Cc29Y4LM7Ytz",
  "key16": "3MxjtuyV5cfuUQUCGrQdPWBEYv4N5wLm3JEAFXcVfD5RzsVVAcRgrngDE8KTtoyPEwDHw6iXjWqACa7tNN99fZQb",
  "key17": "5k1NxW991qCXvBsGU1ERxMNLwxB8St2QRPNY2V9TmoM7PDgaF3PHDSeYwsmd2DJzHWgKvRWpjRhxquAJug9W5yw4",
  "key18": "4KpwcS4UkbdopEeGpiUEpf2prPq5UuFHLqiKzXJ4L4zaDV8sfqJipevZ5TagXbPn9C59GHVFP71SortaXujdqECF",
  "key19": "45nSe7wWvCcxxo1d5enhe7dLazzLYoBT5YSiupiz2Jrjf2fv4nJiAXLUJLd3j8mMqMBoZVcUw4Q8ECMto7eVYntr",
  "key20": "3tyXSekjuXu7t2hiSTdPMvLVz91Z8kwH6mXKKLxK2791Je1q919zjqmYgpnckqtj2HSaxcEC5X6oBPjmCTxD8DAb",
  "key21": "4KKfoVbMaFyWMy4UcAXkS2USvDcifshcPYFfpu4L19hsF2cVxoKgzftAwgGKAucroyQqccdWrMQtyLwq3dS5YQZf",
  "key22": "fkfjQNGay7f9pUsUo6cyvtzfnv7vEP9ErWtADELH141RkV7Q8edtrMJuhjLUPC7ZkUvD86tuDyJo5wssv7sqrLq",
  "key23": "5m2STEEu7wPWxPLu6fEYS3kK53YzrTv7SXNBDAdQGAMp5uPxVrmGTLFtDktsCxSU58LPDHoApUnjg8v48VL1XUdg",
  "key24": "48aQHFfz3UaaaxBwxPb42DQXuF1Jbvp7r2Z96ww4F4gFX1PWGw6A93gGmtYCKBYSdh5QG1sXEMWwVjmWBBMnc3xf",
  "key25": "uEKRgthCTaEPqtKWsNRAJG7cG17jQG7jrXGKEPrFhZWBtS4nwg9eZzu42ATGTJuVLgt1x3CHUVpELcys3C2odza",
  "key26": "35thNPkExLdHxCZa13wfTuTeFzLHbtSwciwKZnqVbDLuBtD5Zmf2yHD5qVKpcK7oosFrdMSKfWWZXaYLjMrnJ8Fk",
  "key27": "4obkWBjHW3ZrjSUVEb4L4FgB6B5bGwe3q3VAXzU4hRzGpAgoqy2gAaAARBWHjG98cVuA9MNggZHMcBPa6Qx35M3z",
  "key28": "55bD5tdbqqmMXN8fNTDaJ8sjgcvHtHu1DrPHomsArg7VJdMxJUyT6oBBEiPmhWkQ7acnh36tV2vDg3FDkuGccbFk",
  "key29": "UKPvMFhNat5fqxb5DRdCS7JJ4JLurfSi9nwbi4uWyWyuqqQFY2MutvLRYdaJHyLhPqavw8rzEnxFRxv5UqgCAAr",
  "key30": "5vmzveg6pqBzmnorwMysLE7i1x2XAeQxNDqGFUChqrzUH6YgzEcVjWEAMZ1UuJnFid5AmXjJbYgogcmUYg4AbqNq",
  "key31": "476rSEA9ixd9zWH5A9mkwiee6o88PPjp413CqauH1scwP5QiEKCK6mNDSoWd4xou6DoQqoDmZHWYYhMNkJ1gCvQs",
  "key32": "dvHUbrRHVsmQebStebG66xdPKKYrredf6dK8sEPzBVk9af8JPeSpSSG12hvqXK1C7He74QLqvBVRpxwHEjAfeU3",
  "key33": "2EytVHj2TVTSQBDkq9bptRcthcLw1PofJVyaRN62ZPTcTGVDQd6EheD96s3UV4Z5a5xz9zm2vUbFqfMPSC4NJXUa",
  "key34": "4xLHJkpTUEeGBhBS3Yf39n2CzKMZw18AnHAvamg7nQXyrQB6KEACJBoBvFTZWEtN7WnC4moesRZrtYMZZtSSmoPj",
  "key35": "ZNB723fadsH2xnkxFZvb9zn65pH4hsCtVgKSjT7WXaQzUaDnbLj7hzqsTAdB1dA9x8z1RwHBsNYG7G78SexAGji",
  "key36": "5KdRFz2MbwXfa8Q3rmVRe49RbALnuCYGeRPMwtNQaTShd5Ai9GCVqZjPVSnHTaDqTj9TGpvoECgnzK8HtjMqHXEQ",
  "key37": "3jYcD5yrb9FheKSJv2cyiPg9GRJr2P6SCasbWE7wU2PLRMvNyjNYVTjjfqJD8tupz5mbFwiWXtk9TZo7DNKkutPa",
  "key38": "2WUxBV29dzcKuymAVuPHJGhTtXgj74yhWU6qF4xt363ZKxQSQC7t8W2Xo2cdawbDVuQApPB75Tb77hoyhkPbyw3j",
  "key39": "JLmuRsfbKPvd5ign1CWsJECsXt3o5qFSaSVB8Qh8iKjniGVmEnNbwz6iC1z73duDFSJttcrXEGq2vQRvWkufxsE",
  "key40": "4DQMp8RkVVZxwybgNp1ZKxWixT9mYMmLfJgWZ99hzSMLbjBTKq8cyTXAkr1x88FtZoHQtk8MAg3ETur2AgEry3J4",
  "key41": "W5Y1RF86vZok8ogFxdB12mUwJbWLhjxqyVCYUf6ZSzZfsxzwVo9FAbsDMehXkuakwm9nCuc1rqqkdtdvJCzAYCe",
  "key42": "3cNxxmUfEHM85BKHKQcXuoXd5uVBeS7o3XvDuzG2Fy7hdSQUSgj4ecosVWegBiB37rRtkL361GDoXCFi4kYVGEBd",
  "key43": "4CrAE1tvDQijXBhqRTyonouA8fgxxmYKBu93Ju3uTnAnQ5ooeE2ULt5kmFXLCqiWmxrLxg7dBRRsuFS48KoqtS53",
  "key44": "4svBKnip85QnjBD9Gc2ZjEXBTeZJrPsbj3Vs9Nj32H54ootjGNrqDwvc7PByKmuqJntQNCapU8Ema7vXRz84GkTq",
  "key45": "4xC9R2A7V9rXZ7sf4Rfw8kLFBSSAfmY1CJjtMGUVrRNvYJHEEAXoEydziiootHPT3EiGRjqFzHwiJdMQJHGz8qZz",
  "key46": "1QRQWyDrzFESE7Wb5nozEpNfGKp2ATa79Y4Zgs3vHh5xkjuwmu4M6CBRephoD8h8Ph7bkDadHMJjNBZXvuMiS4h",
  "key47": "4QpjkRurnb7Z5HFrWQ7RgHuFyCJbRn2yXMyh1wKkm1fFy4J98LKDrwqDRjd3Tb9Cz16YVVh2ooRfqYzMe4fWSS2c",
  "key48": "Ak5xcgjrYLgmesNzoPEinkoaYr4whxK5Y6oYdhUQyRgax8opW7Hy9Xg6jVdSzaGtEprKRKufiyJtaRrLn7dWiWj",
  "key49": "cdoCSiyTmSWHFhdEbahrs9sGNJsFc6edLZeXsgLgm2XQgKhs8F6wpydjMnj2BYaRYEqnEYMj4xZcQcKDz2GDEmm"
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
