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
    "3qEwTCkoePac2Nk94YaeHNAKBEuofmf5wVPn5wGoa1tMYnznyiKD6E6CKJbC2THBpcXWrj6vAMXoix1o8ondvU7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNJq23NeksHQvkx3WPnwbFPo8wZePmiYMJkTfsRnwjQ5xRWWetTxfst9dy86LvaarbeH6KNeWthntGf8RgY9fS7",
  "key1": "28XVFJyHP7ANCumTmYxGh5gXcy61whsPDGXJJ6Lmt2uoWvvCkNi9Pc9pPmfoQWAeq7bVu3xgMrw8n9VkfQ5QRVUP",
  "key2": "kRYfJq6h7JXKKejUK55RUNsTUjnYuy7CjJHruJhZ758kqPubjyUnM6sCxTaFpSukWNojdFQotBRCEehi9LttAoR",
  "key3": "3mF8QcHmCGhGoGb3N8sPFa5Z8RJjAfPsBdTU8F9Pbd9cPAQuZBDoCDbVjD8U4u64ijFAUooCdp12DvYnEt9wGgWZ",
  "key4": "24qV3vHtgE68uscrG1bp4jiAT1XufmQMcZMkiysJV9bRCG7uJm7VA73m3YGNDo7h2XznNTKFyfQS87Q1FCRKQ3B6",
  "key5": "35dLBPfcq4bXVhz14pz8fYHG6ocnvUbqgqUTt7zKnhsVnbAT69CBUakQpDUZbSj4GggzDhVj4ETZEwhUZ2N35BPM",
  "key6": "5u1TMu7X3oq9Qz8fvxwWjtJowV3yper2aXvzuRdvnHn1X3sCVwUJjn5zLvRo17kZ4U2bfGe9RQiJEPjNH6R2oDv2",
  "key7": "3gx5XnvPZzXzzNX7Ynstd8uYRauK3dkkBswfuwH7V9QrKoq3MkEL9wyiTWwkHKemD6XoUuMfZ4vCLpLhTWGxqJrt",
  "key8": "22nXcs9WrHZZrmqXqMf6tQv53hs56brC8qT6h5KU4Q6xzhnapPH2fmAZNeRfTV8M3seLVHksZaivoRA8ygVkN66F",
  "key9": "4QKTVu5AMe3rJZWCdp9RxnyPWrK5NTXgPX4dsuvAQFC8Xrm1YJhk2kH2dTbtuyJZiAVjqmTdrfnxg8vGomoQk7gw",
  "key10": "5XtpaAXC5tjHiQ8LRaofD3B5Hn9nBxtS6L8o6MZrUMpuWBTz7KqjP6UxTCzrVUWP8H5nyxJComd2oz9AJuUDxs1d",
  "key11": "MrafkcmGwWRWaXokx6jeMECStY995WZDigomDHC9coLbJWWiNQA8B3FVGgpfXX9GZA8hWE8PTGW2UWHKpdYqUZk",
  "key12": "3HCqgC1Woc8bsbpdHe8jJ9skRRjofRsMvKu392dVqc7D7u5xbQMtKbBa5WySh2GneRZQXhzB4ymTAY8njhikKqLA",
  "key13": "AhDLYDoHj62DXkJXnXYoNnMKnBtGaS6i2Q35UbWAycP7VzVtaCytEAnJpUt66nSfoBH2rBSpWsHiEC5MPtXHx6r",
  "key14": "3iZkPRRoZ4y5Csr6ngmGzLJyMJ2TCmTSccJ7iyJGAoc9eFoMfRD2hwYt5dwwon7cxiBaCjHaBLC2Crm9YWhNAUJJ",
  "key15": "2qwALA4HaUbbMwTqooBRxR8kSHKqbdsGzW1Kq945Ntr63Jg8rj6rDde9wR5wQfjMDhar2ai44aFvNGtCnjrEEcfu",
  "key16": "4DZJZgJW3VPhFFyD7v7v1s9GMcjKY3qTEq4u1wXcMYw7h62dQeNwzT8ar4hw2Sw4XxXvnjx1LzrPaMP4HUH4awy1",
  "key17": "461CWx34KQwqo43btBiDXtQeFxdLry6GKTNHNZi4ziZhcfSFmm6S4vgruu6PHiC8ogAM3m6CG8t1WKso2bNNt18c",
  "key18": "2VTV3upD3cEhmsbTZVKa3qcm5wpRyJWBADQvTX9urU9QeP1DidDFErAfW5zJCY4o2ZALqGPmu4CbhCxPTAKrjGQU",
  "key19": "5cpNnH76Q2HDwvec4hWa6wLrkZXtubbvXehkjSytKQiEJBjJMXqNp7P44yYFWsMYPp52mwR74UKkxWbnGpg98vfG",
  "key20": "NRvk4YiGAPRUj2Egwsbpin1ngR73TXoxHUMtVcG9KqhwVJpn5FV4guisPR1S2oUNA4JQ9uHjCTdHzzVdH8VzJem",
  "key21": "5S7z23TpEfu4LWPoVbQv16JzP8sXeQEsd9SuNDG4oeazocoUPWNaSZ1j4mz8q2amKcbsD9DSsVF4p7NBCKP9ZBX5",
  "key22": "3Q5KkBLWJEuAczYQPPEmN7T5gqAf9q8BbSCWmoDyh6HxEthds5jso7rt93NZ7jkTRX223EvDT3RhfrQe1VALo7Mo",
  "key23": "342taoTc7uyxDLaLyJW635KjydRbZyYRvLpFPwdXdePh7r9ZkLquALzP97o3P9eLyPBTBkjDPsoUUad8JmX2xdSM",
  "key24": "4pvwQueBKXwdqM9VZdY2HsCymaoAy3AaCsFttfgxx5GcWr7atuj7qdV1KzC4KaL14bVo1Kr7RD89Dk9FwJZS37qm",
  "key25": "66oyscLFCDRsQMYnrhybG9F44HQZxzsWrNofXzdR59tPhbMBBh2ziZ5bSQbr6kpMKotXMQJvLGNdamLBKy11776K",
  "key26": "5HojHtcuJJoGG64LttAzj4AciZpxzpd521UBJ6zYZKkrMkCqtZq1Y7bb2QunRSgx4M8Fp6gHbA6mjkAbwB65Gq86",
  "key27": "4ZVuapJCNBpxXkcyBraUTkzrUHu7t8x2tadPcoBniGbQisyK3cAzLznUVXRcWaHquT5fyXaiAND1xFYKXCz9rMLW",
  "key28": "3ytyFFitY7JK5Yim1mJyFFNSN9Qon2EnbDJGSsTcx3F8gxqWfPUmoEFgwuJTgaRpxVDpqRvSDrKRiQD1tTxhnc2y",
  "key29": "5z6t3Px6tZRFw6Lj6UuqK5q6HtFqJr5ESvqeua1EPiDG5UzcSmFJ9s1Ync8UG1cc5YHhuiowAbobMQ19nDqxvLgC",
  "key30": "3axNrTqGjvawo2oXtjKTmVwhunf8PAhqMLXUWhnMZQNK9cNRAA8M8L2Z8BTvmTyZDkuLNAmxj1b1XmqVBtcumFGa",
  "key31": "4rZ9MWpFszbmB9H9ZRxaT6iXHHsCdPwSg6Zeh7ZdCSXBX46JP2s3RYEopw1VgitRh7vA1TSZmuP7gZXmTnRJrAXe",
  "key32": "4PP9Ze9ngGfm7jkVDhZeGQF8vvWL5vvPKwQjdA4ZkBBEQ2n3kSqhbpM3VfboB6QDaJqUJyTTWvB957jND1qbQTz6",
  "key33": "5q6ukFFwrDi3GcGbhLSzxbqJ7dCWspfk1mXRHLZjz3hECykgRabM6G8PK6ivHbBQXhixDTb2TaZzguSS16RPhiSw",
  "key34": "24rW4k1uLPqbzSW6FNCZcTY8UFnDzvKyjdr2nmMZ4sbL1fqv5eqMk6oyPLg4KZDvpMKQdbDkSJvQfJqqp355S3tp",
  "key35": "4uSrnrTwPvMe5dhMkwwKEEnPZ2Q86njjzBTTwAdB5JG4wF6UAMpCx38xN9oxMXzjLW3e3cNdpGPCoHnPUE7fs1xh",
  "key36": "7VdYwbTCrPdBs4PpvBZxkSzHBU1QGT7YvhdDCJAa2ygivA2f8pcu5hxL9Td9riGpQqvcQ2XUfpEaoapuh76xCqA",
  "key37": "4t23vgjD5gd7GtYbKBpvqUFCfDKWNw27y2AhENvQiPTumCVpBCu8SxVXAkcLioeQaXfAAFb484NGsXJWW4STNSE3",
  "key38": "59RQMotAeXx3ozRQGbcD155sWYt3aZqdFZ6nzD7tqqzhkVokESFoQ6dmRANE4vN82mk4KFqH5QpvByUizz3CHfz3",
  "key39": "3QJKjj7s5q4eAsKWMkwof63qAkdt1EPhNqTvrJW3WVEWHCSqsuEUYsg9vxmj5NRXX1mUMuYyXVRbTJ5UZB4TyyyC"
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
