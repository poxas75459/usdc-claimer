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
    "2ZCdACmVadAu92UKM2VHpcwfRKBtR4raNQYkGZKYiQx4Xh7ASbjKkVN2rTfT8tcaAJE7bGR44k1WdywfFR2djXxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65hHFH3g678Tej8KGUfaLR7aN3rgBGMYFPsfgx328ZUhanU46gq7gkgYSfsteVAJNkV5amXD8Ldsj5JHeE27amJ4",
  "key1": "2B174igeRh8zEUUfcvqi1BYEVnCQ6yr857xqy86fXBsSa4h4xDxM6Ct5bk97v68FKUokkX7gymHJ8mecrno3Kzz5",
  "key2": "212VQHWnxpSrhtCJw7Y9Q8ptxF1wEsLRrEWaEDF56KHZSHYojwCbVfMch9ZouKQf3Q7qyVihTfrSqyj5Vd2mRFb6",
  "key3": "3uFh7i58MyNYNnAVTB8JHkWdzTNLqATmCQDZdGJgKjcVG8yUzYJCxeTiKSdhtXQAP2f3HMRWMcUy1S7dTzX8c4qE",
  "key4": "5ei7bj6DKSL2uRH3eM5xQz4E4BtUPPNisjaHqnZXRtzYUHiNuKMTqhLaNe4a3boCUsrnKtfVBWtMeGGNMAX6DESf",
  "key5": "pDC9Lo7RfDzteEouKHLoZdujmV5ojuS9v9NMUNv4jZRFF76jmEvu63D618D96yp8jQvH7jRx9C1d7HRaW4dAP6B",
  "key6": "3tiMzMtD2mZvEmryviCz1KH6QPs8WzeVcwMPQRUyjjE2eYghkzHQ4mg2HnWNKKtTx7WSwar7CdnRZi4krbakCuC9",
  "key7": "5JBaHBANYb6jCiiwYbxwsGi52yrb3Ac3PrdK1iG6tRU5UNNyBwBsVcba7WMBT7TLYBHX6SSAsphmqNzb6kMLWTLC",
  "key8": "25cBUZMEhjD1q9WUxosbxEQJ7yigjnHciz2RDPcxof9JnEA6VpUrN1xvR7MAoySR2D6LWox7mTN53XxLS2E1J3mR",
  "key9": "iYosTMwpTnmggz9KNbiQtZgLHdQ93HaDHu5dEw5UWWnyExyDyfGw7Wjx9hDTSSK999W1od7dPHezgWQcCGSwimr",
  "key10": "5ivRw4tzTfFzSsVCsUKkAHQzTbfwCxuUQ1yBxrHbeQXtsUHUJCZYbzKPnixjhL1UJH7Kkco65UfZHFjeqa8xLq8p",
  "key11": "4MmZDbAiCBtZPZY1YDDmtxnfSACEpPPikvfxqrK78g7GuT3iwFpPTUVYfCkpgD98qbrSnAqdeDp5Gpcwsmr67zq6",
  "key12": "4kZBP3JzdEBiW6XGKXgaYVLoYFNnFtCb3Z7saKQ123dXs7sb29FD83vzn5xryJ7RmJ6WJezPMXqPA5LTBWbAL9Te",
  "key13": "5CqddJQtdTFrdvKdZjw6KKhc92ePfMbjsByxE5mujSG7nxEVQsutE2femaCAerboCy5QHg4WehPARx3AZN5fMGCH",
  "key14": "2GC15AJ25WZE2z628QdjQHzFwEPSjgVda2DpiEiwq8whhdA9LQFMuLdR2N1Ni2HfbF43zPg6r6z8SZssq9hiqufz",
  "key15": "5PN8S6Np8PtaTszw4CVxkgdrGBBr6roTC1tkDrmfNbPFt3D2oocQwcgjysHnR3T1u1ugJG2CafCALSA4MtBdG1g7",
  "key16": "4cZ2CrMn3KMmsSc8JEKJwoUDpMbwLH5d37vJfWUs5ckhuUrP2KdwJCsrujwGj28MsUhUdKBgaBpygZWxR71XXHC9",
  "key17": "355Co86nkuE2QbVGhUhTSKmz1gFzwps57zxGJyzrdnUyMNroJhGzT8aMHYBny2qGGjRZpEU4fUdgwCwe6uNvhVV",
  "key18": "4s2nBqSHhdP3VdNJwYMbyrVkk4W4yo46SiW7rCAy1rEKJJz3izE5htuLbT1uNNbfbGCmftZdY1UpwCAkQckk373z",
  "key19": "5HD8X9Uf9qenQYan2xyCAr6fyCFKu38Smaitnj1JNGjZpj7o4xdjpxhAqrPtroAdbzjbXr8mzGzTBXGuWszwHWXc",
  "key20": "5mRTn4xx5FxGKYtRAHJYT4Y8viuN8uVLEJe9Mn6KfyAB7QnTT554vLcgS2jFmh7x1RnZhsqA3D6MWMTS92VgSqA6",
  "key21": "2PauXPpT9aD68GCSbizypqTKqtusTQs3k8CpP17trJUbTCLMF1RANAe58ERWDGQ2dTxyQNTxoJk91TQ6ewaZZzxn",
  "key22": "HsUh6veJdmQFfwAWYz6m1i3VDLo6KoW8w85nHBw9CqFQX7LGUo8g3ehce3qUwzvr1qtMxcKu2tgKjaCNcLvf1rp",
  "key23": "urs1dAmMx4hpN2UxhUmYu4DYWzYLzWyUWa2gQRZL3NUop9GN1qpXqDsAJ5ArdmnWnRrLiJkSssXij7Xqmyfe36s",
  "key24": "3v5RJcwCY7XqL9kUkBCoKnRD1MVV5aae5usUs8Q41HXJPo5mBNmdkhaAqtdZxWLiUi9bvZc2t8kB9jHZ8nmDtLrH",
  "key25": "7mFiwDkV2vdWVYvdVWJcX552Tz9qHa1NfEQ9EdjY94MowKWSKqFHVZkU4PsJntck5ZNLtP6VtgvRSimGp1W55sR",
  "key26": "4BxfgpDvehtxts1BVvvrHcVkMRbeVk8sYrpHPHv9eYrenKsMA5HnPcT2xg9Dq7zTS5hYNjb4mhqEEPJCGBScGqJU",
  "key27": "4pWb4mo4U4yFk2ep1ai42Pcq1HMagZBxYo4S9zpSRtiagvMa2oYUZuxXENpwo19EJJY6HhHei9jtH3ZKvJq6d53a",
  "key28": "2Gy96rs9LF7h7eV4ghUgStYVewZJKL2BiCiLFikFpmnoqRzNnXnwitSuSK5a1Q1jG2cE4Ke6xGpBJv2mRgoA9HBc",
  "key29": "qGYM8ZxkMw9EjBqoZyk3uYKj48nzum7BxSEEdjmP27sfX1hMRagv3LZeKQXhYyvdUsTqLfG1bHqxXM4KoNgXbwo",
  "key30": "5faUc7m1NiLAc3MhiBVhUxWJiQ2K3o1UvBvBPj9HUaBDSy8mur1qUtqEyEidf3TR1qCNhxeLarAEmruGbkrUvLPv",
  "key31": "5gT76BF19bKk9vqKDNjde4bsjmQy2dgzbPW74TsSHNUvz5d3ppNYR1FMpLrAXRtWRdGquMaWhYuZPYA3FVrKNCTd",
  "key32": "27dFzG578eQqJXrZU6sk5UJa9JpkXAspxL5CZ4xovLXYc1TrHK5cokKReRBh97q1cpEjsQnpjKSR47EmH4bjEwfq",
  "key33": "3Bo83S95Zp9sPFJ8trsHRzUn2Q6Qkrqoq1CixqXGjqtaPcbLX1zHZ2AsTmkHSFiVJMzByAk8ugbUZeKHsADcv9Sv",
  "key34": "io6auDuKKNJ8vHLsJvfsH4s8KeKMEi4Lm3CSNCgV45avy7FJzBoStZ6MKNU5cxxTBf5uwhZhTuTM6uHH1iwaWij",
  "key35": "7jqJDefNJFs9sQmrS4VFPBUhuUS4r4MgAgQRrg8VvsggpTW93jJ7dV6CBNwQWmK7oXX5EcK5qnPJcRaULK6X9B4",
  "key36": "5WtZUVFoXwZp3fY5UkiVSbj8v79N6PEPUPYfNnSJKtK5nG9Peq9qSA88upbo389bBAgZ3rmvTKt9trF8MZfLjjmi",
  "key37": "25cGJn3LqCAYsifqiba9FA7rqv8buniHC3R15jmfv2FfCR4rCJAAwmAHM6mZN2e4odXA4HbChYv4WpNg7cJrGfqV",
  "key38": "4kEaGthT39iFVug7VHe8vX6edouxSxH6uxFL2uV7vYWWbrnhcmvmuzaZXVbCWFwGWYZu3ZEYAMsFWqGoN3QX86b7",
  "key39": "5irEFLFhu5EF2N1HdG5rLeZE3dH74Q3VdyVWK4QuXgwTo3mFbHhffKZ1JQMFeqhh2W9GsUeBYt86k1UFsY6DpU3h",
  "key40": "3Eia2MQmacwfZ7tEZb8DhzWJvW2pcAnovPASCtC5XihdTsXduQY5yiuoDnDvGi4M7U6hkEFcZkhPy5k5GRnRxoJ1",
  "key41": "3f9FRvhFWHm7L2gSQxukfxfGyhMhzATRD6aDReU1uMumpFPooNA393CGEFrFgn5q1u5yRsdGAuTUiRVQGfLcPjfm"
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
