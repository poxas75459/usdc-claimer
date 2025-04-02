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
    "4euq5BhNvFxNa6qmXWVUm2HY6xdHSCFBWgRYd3vBuLG7REK1LAGLZJHCBNmmKPXobBVJkM2YMs3thTCcnq6pTQud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HQi3Bwi9FUFFrLoAASpjnSFxwiFvNHv2uXmUDfa4o5MLxdiUHobXAcYwi2v2SXMhWXLHJGKQbXqMAU7Xb5fRKTQ",
  "key1": "3tYUFZhm7eM9wE34sGnerJn6tdsPuAwzWsrMXcKG1XQ1anVMutZy1978mGycg4FePih4RB533fLbQRDSKjN8TCak",
  "key2": "4V36bNuaWqKzFex4ttpiQxs3hE8evCQ6ebbZwTr8GUTcQaxKbEPUUk2LSWLvTCZgL7v9bsn6CpYJjQUct1WbiTqr",
  "key3": "2CNPLVkMUWEUdKfTD2FdymMARu9giuw1osicQMpNJcUqPxkJ8LuGsWrXoSGnwPuycwMo7n9c9AmcjyDyebb5Fg6",
  "key4": "3QvhqBop4CvDc6btkBwzL3NyULQU4UTjTxHHVRAbGCPXgbatiiRzVDGFmMoaj2pLk7gX9XNjZfAXQLPDPHsaTaLb",
  "key5": "3hJyak1Dj4HFkjHj2PWWRvH6qxRKm7QGuNE7P2phquuA9K9omWmjf9k5RXMYDGrjbCho7hUsQNiEpZBw7ZYrov9m",
  "key6": "7itDEUU2vks4NjvGS99zAnz3EYbZe6SoWPQHvHocfsWJQrwvnXdYY6x11NEq3ftDG2kNca2sbv7DaD5W4kc5xBM",
  "key7": "2UthuaW8XXAPhDknsupGpanHtgxMN78o1u98Dv1kikXHs9oB2YwuU3YXrZ9AnSk8XzC57RJQQrvqrtBVYEZX5rWV",
  "key8": "xLg6bcMNLzCzpuVg2bj8CdK6vU3q6qXwCDDmRKym5LWvHUhxJQuZz3d5aWBbjDczXQGT6LLfP4obVbRuX9Tp7za",
  "key9": "36a3qpKQzeSG17g8jJbMxnDEmxayK4EPfgRMzH5rPPPbQoQRDm5dLxwLoxUvS4sPZtREzjunRiV63yW2JGZXwWV4",
  "key10": "5UbSjaU58mncSWoRhoPSzET7rG1KQtwUBkZ3BngRn2txQWUz7p1WHzy5G3mqth37d438182svh5U4aibifSpWmD9",
  "key11": "38gaC7qHVMdj7KJ2LPMx1G2BNNWvhdCVNXgdNVDDWmcDuy1Gtp6FLeygZftFyj8KjHJbJy8Whbfoc1HkzJyyCP4v",
  "key12": "3vMzzUGyFmM26gX5fAUjdcWffa59398u4S3LWZbTyxNCpLbUTGAW8RnBBMV4tpJB7P2iq3d4iBTs2VFSD5gvfdmo",
  "key13": "2aUGCusxegWg6XS7rm9eYv4VBi7iLgwWf2FXkXcR9Ei1tNFN155ng2sg1GxQMx6kmU3nEA9ifwbmACSLqgTAGs14",
  "key14": "25ghmH3GmurWKbygLgWSjdf3kSqbWeQbLHMiPdJVKT4FNk6EEABcErvbZbGgDf2RmixkgggU5Ke2pYnmTdjgBruj",
  "key15": "2xHtNgKV3BoEtX6S4Bd3MmAPqGbLSn3brfa1ZHDYrHrPyVFGknNzRNess3occQWCUKgFHa65L1Dqcra1pTpwmaBV",
  "key16": "2sGtnn3qzn96DKayHxuBKSajfCfD5xVQMX4W9K9VTcuPcbw7uCwdTHRW3fQZXrHXrLA4zsHuypdmW9AsQeu4nGJq",
  "key17": "uLhZsEEJmXysw3YJRymhEYUNTqzDyVJSGG7uB6G1ThTkDVajqL3SGANhJH6ardXkNYmJPWy4mGL5G4z5L86BdAU",
  "key18": "2swpqvqb6JyqFekanVEmfF8E5sSMJHRkkHC9vKzquYFEXH4n4aNN4A7zQ7JdBPZ9zuVPQbHNuEqzfE75MRAYafvM",
  "key19": "5671u1jktFQG9HirBkAXzPJTmZHt14qpuBy468yuYUSUxqBAafCPuyoeRmmi1bfRKRhpAaQqXWzzqwsLTpGhqFxz",
  "key20": "4RV62jtdqj2sRpjyaAUx4M2CUd4PQKoAGxKMxAAyHTqDLvrWE4fgD6mmwXMwvGfEsHbYWB28YUtNRZwArbwuvLHQ",
  "key21": "2YSZyRJBrc9G3t9QNrDG5Nco2uKnKXUZhyzPgq2Sf7XKvFvjWNvRBn9v5kK1EohhxSgmEsgmeUBEqhCGYY59J8Nx",
  "key22": "5Xb5i4UseeSYmEQW3XdRs2AoNEYd7pdv5qda4WB2hMhTRrvuSrUiHYB7H4WtS44yu9p35eK88cnEtGLPpCDXWm1f",
  "key23": "55eWudb9comok7ahpocKtega2xW2AUjz7AFi5aANqBdVuiraxmKKNnV2YoCrW4sahrhSEMJvgaUSeuTXsSWZF9BV",
  "key24": "5EzVRpXLdRNdz2ErpzMBTkSDpGvQwdjx5Pk9655XpscGdEG2EdFFH5cyiHyeokDcLmGVK2H935eXLYjVLjW43mng",
  "key25": "5nEpE6jRKYArekuP7BXBJCcoRjaDnqUVyitEdbCo8XKdPJWFuDPwkaQnTFjKmWvzj4v4QZQS5BN1wcXTugpqvc7d",
  "key26": "2e2nh3j1DRdmwuMrMk6GuG6DTr7vMMZEGHBJCw1ubWg4abySq3RGkNv7LFV2w1hGGmTDSWjBoXzyLYRzU2xUB3Na",
  "key27": "4iL6B9sjcTVmJHmEhuWmKWJUGpi8UjU14F9otenddEqF5neiERr5Kha7fiabKMWcqQx33E3hpoqVmU3ZpZXRdUSi",
  "key28": "4wub6GAxNszoJGAcfoB5UgFqzSoJF2PHuCndBfHKPCxyFhPoGDECpGhWr4zDWNi6UUzErFvfWZWDjisT5qE3h4g4",
  "key29": "4N3WNZc1F7xgFiY1ZpUMemFHXVr9teT1iwnjyffKQmPKcHZnp8S9RqJCgXGCfjBuZRVGrdMAdT9ng2hKKGav7j23",
  "key30": "TnWDRKfsGGyt38nsz7yFcuvxnGk6ChTPSA7MSNz7CNi2xwjNGazYd8CQ8ojn4StoVugKDzseuNwvFkT5HZnSK6z",
  "key31": "mQPHo6kXvXkNbTPBnUF3PBruE7jYLcF952MkmWR8TzLcFsUiDraV4VrwyhZEXGBEDbQNZKvtzXMHdavF4uMdL5P",
  "key32": "4s6cHJRqU7a2hrBrTUwERPr8hS2b7mcpeixEJ2jKk6d7XymWAH2GcrBc9ZvzwKuDDH331bYis3m4yWzdg7pDZB9c",
  "key33": "5UEfuN7uGM9nzowFKf5452QDPJsSi4P6TKLErrdPeXYeNdLT5haHoJ8rWVg9ppmzG3kteVa8aVbva34hPPhCJSFa",
  "key34": "5YrVDu94CuLD97oYwJrMLggxV9KGsbJDcoaJEJMKkDyqA2LBLdUDABgWMCSLmq2cr2Rw2F5LmNcRrRtKfGWeth3S",
  "key35": "5EQDcsPSwzXaPNZxS7reZ7Ss92D21qonJaCu2w9t5RJGmUbScwJG3d77PG8GUoqmZ6ez9pKM4HhuhhgSdMUW3yB5",
  "key36": "44mpgfkRbZpe4LycRrFQbJAU9rCk5NhFq41JPYWBqTFHeaz5RkqPymti85jcEsWTeX3pJToosRm6PieagdpqpcRk",
  "key37": "577HejNdiSwEYtGNuE4tSchaNJdSA8EHWD4XY11sXX7omu9yJ7x9eUmjf7Yoe1B7koQNfpNMzCNGhw2Wfr6B5uiB",
  "key38": "3UTQypDVZmzxAkDu5LSjdxyM2UTqQqQ7poCvkHQxWZJe7EJk3MNYED22rYxaNC2ymrjg2X4K9oFEksEnee576FGv"
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
