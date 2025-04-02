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
    "4EM5METReZeftEvkEkV5QehXoAYyYJLdnuTXrdpBrrQ178jKYjcJaDGxVgoikfm9dkXvEsMz7zqeHGvHbqswiFL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JCfP6TXUmtLECFQgkVWB7wxniaMwyWPsAg4Lvmvx4Uf2xGSwAXjey8SPu6tpYY4Shh2zKgFp7zH3bKz1ocrtqKx",
  "key1": "5YLFgdQAE88ocFrLbyvjhw1Qfs8RAjVpXfhTGXfCx88v8GKLnwcvin3JjuSBk8Eqma8ax32dejpEgrVT47fQKCUe",
  "key2": "5B2az9rRvgKzuN4b429xvm6udDnJ9QYLq59B88mTMKBfb37xe7ujybcodYHGFYGeurNuSHxoPYae212UJooLdWmc",
  "key3": "YseRBnFC1oNDPsdgVL4Purmoyz4RfjQbeUda3SbUjycka3Pz3c4vS2PHgrqs4WAoCCShgBUgdXX47x64Lw2TGky",
  "key4": "3rcKWPa32VVFngabSZK7CJe3BM8u41t5QXPNiy8tUWCRyaezAXf8ZLdN4m6igN3MzKTGNqpmPaCifVzDMDncTzyc",
  "key5": "MYf4UJXGnGkz1LeZuybftbtQhHzMz2JsWoPfDNA5PCPaidngSikJ4juJDZwjgzY2Xr43cN9CqdFsY5T1tj85RWc",
  "key6": "2QgscVyadyUZjuXtjCjwrZmPr55T9oUiwN1xo4hfmE6CEFCw8fx8FLDWnpgUzJtY8gx8paqyy76h3d8JQEnZFCyN",
  "key7": "tsfG64o4gUR79LAthCKnYxE6bZJqqzNH1ZTEuB6ceoKWvjNaXkFdGMGGxy5ChQSM2AAbVp227BAuENiPmCM3QhJ",
  "key8": "3TTb5grhddLH4rrtPyWkTg3HEhLNTCeGSsUbqVv3YshUr9dvkqwXiyKtc9gRGRzmNCjyUUF6BFghNkGhkd5BXAY2",
  "key9": "4oZ7TzjH9hXu4jNNLu7VWZBqSs5S6qPzcKmKWq17Ykwpi2Q1gDCuDVBGZrVcD8AFpziBAEUDJCGiZ8pDwNxb9GYa",
  "key10": "42E5Kfb7EEwLdD8TVpTT2HDVjkWyEn94zSBsK3mScuF9S5pETxQhqGWDdaQ6c1SxNMLY13z7pNCrescwvWBvuku1",
  "key11": "5chUVkSTUbZoSNX3LqZkkySBFcvAnNC9migdrhaadG4j9ZDDc4mg1mSo9NKdavNSDbrebv438DmYs1fuR4F3ryE9",
  "key12": "5ecNAWfoPAfnA8BQRmoQjthJWztjLPiyaN22STTj1dzuR1d1QjLQnJRbbPLhsefhBnFf2KXnDbQSGUKgv9DjhwWK",
  "key13": "3gDVD6YNTVgGr7MrWQQDS1KqwXB7GpdgnJiZzFzEineruPEYu3pQnawZad32kgGc9JQBCH5dhXTH7UyrfTod22Uk",
  "key14": "49LhjqcbWv3nci262MT8PaQYq9zuYftnkWnqUbodcdycvkwtuZRG6Jap81YBF73UkcaXuS1DQtbKk33yQoTmihaE",
  "key15": "2rGmPj1XYVyScM3PxMisZQPYtYSZYhkt8iCFzLWvW6E3Pu6phNDgiH3TnqJMQ71tayN99UUQAZuNHjCJDz37UWQT",
  "key16": "4RijmcJkBHvsoHZB8NsU9TWR2TVm46n3dbqZRFuytk9ApfLX6hQhNphJZyVbmutVM4fdUwBisiL4hEE8z9z1mjEb",
  "key17": "3jkJxmvPtSZKZ4E5UgDhToDqpqGZj9Dr7nWxnAMkUo4ZPGjNEsBL7h9UfDxvcBTwt92fYkwtVU9XUpebnUphxgEo",
  "key18": "X33oYgeRsHaErgLJKaT2Z2mLQQSrN7wARZw8CfT7KNHQAQH2mUjB1DssN1BMVfv9kMV4r3CZAbVNyudJzSnqUWg",
  "key19": "mBT549GJVbWhuURuEVwt6gZDoSoBGYutJj7HKASJGhvFKBjsMZ9GHJmp4jSjPDS7QR3uEhrbc6tSHy5idqSA5B1",
  "key20": "2SY9Lm6H59pSjcrP2MPC37MsvDDTe4QTaqDrrw2hLgn72R9h3KE9TQZp2nGCYuX7MgP864eBnF6kuSggWFsHNDof",
  "key21": "2gcawbDhzhRVRL4SDcnEd5uwba5tUyGVLkZzYZDsj2Qkz6ExQXGjZkn4WJXAaV6yCQVBRXWirCDpMro13UMjngCZ",
  "key22": "4Rh8na6zKxTJtzBB1HsjcMmq5nJZqZPePKbo4Bx68A2A7ok7d8M5wNkNzYUiBB2aDRjm15fPRqNnKUPrvNXosujf",
  "key23": "Raptwq8XL7wKp8KhG7EJDXQNKupMwPQeYd8VDR2HNq4dAhrDkUKnmzSXejUbBybvazNYDVGdxvNhLrDwb3zimUT",
  "key24": "39BioiB2Hdfxbz9YVfV67nH7BKcMM7KG6vacdPsNC8yNK1VsaSpSTQMBcnr3DEQgk6sRqzB2ZoxoByXLKQDsRDnZ",
  "key25": "3vtmRufbnG9CmFZiFx4nPR8LaiQgvNQLybxH9gKZuUhuJ2pNEW9ov5BQjN5sKFu1rJfVMn5ECrMkJWJFtKZFiqBc",
  "key26": "643XA1dVag63wtV5vP9Nqa37S5aFqiJCevABRGDzKB9UE3yafLErx54vfh2xwJYMD2kBJeEztaJVju4qRqpYL3GY",
  "key27": "42ta9oYTr5GEBfCXumtnYqdgf7BJ4785dBNsfw19EkdUxVytmY1ZbxC7C8KonU9YDx58q3XAH3dFL4humFHBYXfH",
  "key28": "5bUV5K3TndimyoUKv3oz5M7h28BHGxrD8um1KhFCk1birKDfZRmZYyms1NoL7H9bLAPdwfQR1GghMReH73BW4J5F",
  "key29": "7sAG2wXK77qg4wUysTFdfRHv1iX7XkWKShoU6AGCDBq3ngURAfHsXfzjtHgpSVziDWBiXNGtcKiozq45C673v5y",
  "key30": "3q1AhmNMLYy9NzxT2H9YsfmSkyCz1itTF4yMMs3eNPV62WJ1uAM8orHkXb5v21ohUe4Mrzze3EgD5Q6KGDiAqNjW",
  "key31": "SsisBLb3uRumCbtnph1G6BDFYwe9R1EH4wgbhReLn96Ha7D1XgaxEBmfmcLiwx1ftRstUmkPye6nnp7WVYvAVFd",
  "key32": "2DnJ9ykNJ8NJ632dQZc3oHFXej95kdz1Y9dfNVq8ZhCaNPQ2Tg3Ukf8hPeDjhX7D36GLD4iDZKCGd4nCbEGZArKv",
  "key33": "5Nb3t44LBbbKxUwYPsHAKue2bmT1AoL1TT6HqXKHMTPSEsK5PrKqqb44o3Sshi3o1tv1CLCFSgt6JjjsUkZARCqr",
  "key34": "3TL22jUHZsY85WuAF4MdVQ4eu6mFc2JF5Y1nEA87B4QKsCXnrs9j6xQUrd99Bcz7UTzEo2ZYqdkGXjZ5NLLyEVJp",
  "key35": "2bvhQx3zavnxVu4aNh8sUv3UadY2CodcnaGaDxyNp7tVTwQFV5YEV8NhrspBV1qvUH8htVrmRfpqz2a1o2oVb9PL",
  "key36": "649Rqf7pNrSxtchg59M7Mii9PExpEJGwtr4cKWroZEM5ZXnbix4v3nhsNRgsg8gzAvLw96WLdq2ej1NCVW3KKfog",
  "key37": "5hZArm3E8cH8FGzrDtstZ81wstcigDKXmVkwGcpjHW1mfdgNY1E7PXvXhR4ipmP5YU4FLJ2KgChDtDcuAVeUmCQo"
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
