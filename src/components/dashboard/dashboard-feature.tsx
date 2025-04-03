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
    "28wPf9xJbJWBGnTE5MYgN5Zj4M3r2yzvLxuuDLUyEnezwQNV6WGXxAPdojd5YDfGNrzEt2fHpHLBb4iH7gn4BhYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iaQDprj3Htvq5rWRpVUnnqC73ij6GvWaGiHJbA1geS4W6wpBJdXfoyaDNcDxdacE3kTZ4GDKcu8vcx1ZcYFSnzE",
  "key1": "dinBzk7gyd96T2WVHbFhuHKhMizWtm3JuNgfKH6BbjCjCiQ4ZAyTMyNApUKjyFy4hXQixMXutSPy45pKcAJuege",
  "key2": "5X2XmGiVaYiRtJRAmLhMXWP4Zdo9GcEXmZ8ncfYxs2UeB1HnqhSwr3FTRHCH95FqSmxBkBDz8irHai1t6ZngbNnx",
  "key3": "4JzdQcWku7R9TkNzZd4kRPW4du3pVzqapQCGKSfEr5m1HhBMCiCE2kNFxRaQvtNFFcKh2xVCjWZwGNbhJzEdkF3a",
  "key4": "3NZF1Ej7bZk5LE8A7enWpvSzGYv9jaUaCHR3uVZuhs9eoudxatmP2uhH3zU99mSPTB1cMbeGzfGyXWvGJ4kTckrT",
  "key5": "3EPcuLyTGiQoyYRtgFn41AnwQsnBxvb791JGr119ntXfQGpo4DTVeTPe72GPU73PJLerJWEYZPHA2FJ3NnHhA4a1",
  "key6": "2BDFrML3BWSvqDZnTBCmfzNpRgfpKmyW89Cs1i8VGo5ML5pCz5phXshVr8K7hKkeMGhiZN7GRSBGsxymCjSTdrZk",
  "key7": "3o4aokAXG1rUWwvBKEcrLvU9qvKoPJoehogpeo7tSkPKkpNCQiWSwYK9bCD1JhHUDryLtnjncVHJeVzHnsYYquWc",
  "key8": "42CKr1gaLWrZKjX1GNPCCHVfWjxDivntUFQMw4MVz6qp4ZwQRKvy29zfRQEdR47d2oWmUGfXq1mNUtt2JoaaPa6w",
  "key9": "3GeRXUQoxMnWjDtMpmwUaMovZK4Xzq9YBx15CxXuFecVNw8rmAEyYzXuLUpXEDi7doueFdW9ypLJHmoxnhXH8eyn",
  "key10": "2ycEeqV7vuaquULEuTgM9YKdemV8cfAKRxB3tDZF61kzpJ7o1NxEHqksPqDV94tm9yCMA8ekYizKEfaZVhuhPops",
  "key11": "47j8GGSEncHUsTThAHkhmSd2S7wNDVA1LR8aeAjJZZBcidSWTAZ8kLi112YLeVLgW4E2iyPUBQNT2TaTQLhW3aix",
  "key12": "4vTmNuyaSHqHQK7CGvSm5LugzP8VKLy9MphVLF72BmnRaiCLrG6LFj5LiwgaRtTvZA1GstCR9tccxPEN7UFAT61N",
  "key13": "3ee1ritqtTGFotZXt5sDcmRDxuDiEuc2yTiQxpWe7kAzVcq2ugHpXUCASC3zym3pPYc4t43tR4x8K7y37R7MNZpY",
  "key14": "39JkJ2Kvs9p8eRsrGweLakANaWZgcMVeK2EURCddkHCG8LXfqZDsxhHbeRf2xQLkR6r9UKZBRdyYYWJtGheF9Hg1",
  "key15": "4ZDSuUff7qR98kWYhbhwBDpRhJeNApEYZ8u6qt1vGigpGW5T7YHNRihNabeU2SWEGJRU1QFdkt2RuYHF32guEjUX",
  "key16": "1x8V9YAAA9dtzsdpur2LmYSXi4NrimpmSBVCsxaVSUMq39CQbbuKJqRP31WdaNjNYoMzcEQZpuGeonZXizTbLhW",
  "key17": "3CZWU7bpPszD9z7vco42vBiAk1fyZay9AECAbEMcZK8pDV3defdkYEJyQYZeEzqae5cGqaEPqu8CJGXxpt8PFu2G",
  "key18": "3P71DhBvsuJ8aGYqESgdJssv7nMG1YCvWmtTJPbvnP5rDYfbzC5ssbk6yv8RDshn8y2RfHgwEZkCJpLAL8CCLrDB",
  "key19": "4aTHhsYHe1BMyNNcs1Z9LZu7LjBnGvszB2Y2DKso76aWpkKxSLXV3RNRJ9NxfHer1BUiz3WphFdcc3iwqhx3VFrf",
  "key20": "3ktQcdRnMmdNm6XgtAnby2Lg3v7pfVPmLdkdsqBHDFvua3EiVmmvpGY5CK5dAoqUAkjm9pT7cFChLsZ5PyFVpMK7",
  "key21": "4LNwEsxWJGduET2hh2fyWptcHYoz8zmEaXAHC57xmxy6yQVqTz4YHx6cU3ViNp8bFesg1QPA5usqmYX1GCZEtoy6",
  "key22": "sq8XoHr14VTX6Wf3DJCos4Nw9AdB6hZZAgZsVLxVetjhqAf4P8FDcD2CxQX52UXLr1cdGrUUv312a7n3Pa7VqR5",
  "key23": "4ySriU5gjVyLSGizuTpvsiLeqHqrXMUz1ma53Udg61dsyMctrp231HY22LgU4cV3aHcrZo4d1YULY39d3Y7VRnzh",
  "key24": "7hrvgD6Tn2NQVXdG6XAHdWyoaf1kY3efbwKWUniqcUk2x9n7e2JFkt7c1D7QgRBfxHseWNBdoheQU6VGq15PPP8",
  "key25": "v4kxKn7tRRWVNLnmR3ccizRz4mMeGoAfSvaQ87LGhbDpxsvuPaCbEfkaUtMapn4yRvZ1rfgLQS84Lz7yUaWUUDR",
  "key26": "4ewTu5EqS1BYxQfAnFrjE8SRmHESmVkDRhezXKAZ7ybU8fyyQdF7t6CB9DSARUvgpKYigrzuArH4EEqvPqzEFdmA",
  "key27": "2i6nat9cDoLduhNwCCmX1yU8T7yfoT7q6LEFbNGnihhyuQ2gssutkj4KBVUqEesoeYCUZkMvfM3bWKtTijMjyRFT",
  "key28": "3q3gWyb8xRbQiKL99h3GVvb8zsQdKJzxfEC82sPFqxk72Fo9ARB2gJVjPwxfbooSFSWE9eicUQhFqB1yEfQQ1TRY",
  "key29": "3wJn55qLL9TuQX1Fhn9kX2Lv8DyB62qC8FKeyYLcDwU5if1FxFMdVS28gZi7NsqdgBm5E138eT4GCgCn335Buxbw",
  "key30": "Zf5UhJz1tHb8aYnbrF7UYBLrRryUnfgb3xqkR9xuaKZPgr6wfANvMcyL9HsCxX9eX5tjgAjSrMT5wxCaUtii35V",
  "key31": "2vMeGjDtbXE8F21jWAu8LAC8BuKbA4fvVSNtWbbZmFYYPj1u4J4xWJ3t424t3qfRjtUqj8DD89555V7JUAip6ziH",
  "key32": "48pbboAzbpZprahqw3vpcKg966uP6QWu5hEbgpER3GyK1Uhad7MByTLJP674YMTvzUaWXkMkwLHmSk8YpsY2FGDD",
  "key33": "3tDFh5bGPDvyV85rET3e5zLUn88hyGgfztZ2Eyysjteq2fF7dShL6i9zXwRXb5YjywMAxZzLBxCthTZnxnRLNwUW",
  "key34": "4aKWKqRFLYN8HhNLPFW4CE7Mvp2U68bba4mPPT3D3FRXHyRmABSXHZdqaH5p4vGz9LuRjNh1mryXZrTeKMPFJ1p",
  "key35": "qqbcwevEbR5qYkqKfJuMSbRdpYZkTEgAUBhN4BQnVSgPGv1xbn6aQYET3fQ8g7Sm8bw5ZYefLfT9TGhUE3mRMo7",
  "key36": "5ijL24wHEQbg9WSgj16rx5zxfqb8bJJpdZkmp2jLV7binVCn2fVPYpxS9vfJxtFXrR6KDGuTPJJ9m8nUuX4TZkVA",
  "key37": "4uCzqYZhhMKe1SQjWtgtzcTbKcCk5tvNQnhVU24e3VByMQEHrxbNdkTqUXajHDwxKNNMKQNuRXZJcMkYEg5ccd3",
  "key38": "26zqNgMaCK8KBBkTnywUwMdTiXyCBBVH4fsrKrTi2gXZxPn6LLCsZanP4MtHRbM3kdGxtrvJvjDyXiMtGFC2Jpy2",
  "key39": "XWuruR22pRsUe5rxre8XjXTcT9W6mQ1su3ZxpXpvYHdksbLpGpEgFZAEDSuxNeXWWCxbX7RZX4nT6wg4EdZY6KP",
  "key40": "4qdoXordrqn6kmhwzdWDAAoeSL3SLPMhVuTcZQSfsVfChfzhYTd9TgCotYNCXHVjt3wzWFwavpZMBf7YrffjHKBx"
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
