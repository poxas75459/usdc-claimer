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
    "4bEpabbidPE6zarMi9b7QC6hFUZbZMza1aFpREE4t21wYWCSa4wGX4XUraRvzFzF1EQsrMvQCjfQCYUCKKAkqYpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJdsnW9EXRUcfKMyXbAAjmRfqGYbg2KXKhkt79mh1No8jssgJZN88bwB7kWr6XqjMDkYmRQSdN2K3YnZ1ZuTj1m",
  "key1": "3tXa1tWZTSaoiq5XJXXxSufMZ7ziXBx5qiDaUhv8kgPN9EJ7hiLSwuLHgjZqN1u6E9d6nDPrPeUBUDEqyLWm6S3U",
  "key2": "2my8jb1yRxTeMTB1LeP6BuZDYGqqPbxb7JJDfGhTxCga15KKYi2WcDhe4mDY2p9RyFq1vxzA4YjVWfSP8Kj5zrq7",
  "key3": "2odneXtqKVEcT9oYFVSEeL4nCYUxVWsZqgr3bg2uBQQQECgrvV848nmhh9czhMuZwbEERfgEfRRLMUG4Yq6dagBg",
  "key4": "5x8zNkjAXNgF6LEKznjREEBJYxATPD74n7zJTaLbAgBWZsr33hzWe8pgecG6ZCr7DwoqnidxLPxX7e9R9EMaiEMQ",
  "key5": "51KuBDVfNCjGqbpJBiPp5EMqCi5ErNAf7rYV96dgKBtLP8LK2oh6FPfukk4P1rMHxoR8PWqJ3bvgT4ehoYVtaipC",
  "key6": "4gpviAD9zk9nFsUjcBVZMcfRUvUX8wRjaZAZTUcSvxxfhGwpvknaqwUMYo95Gqb4JtwbXHQAH3YcA6PVVjjmVSHD",
  "key7": "2N3AvvGhDxKWabe69ati1v8HwQGrEGLbRJM6V2TqHu1GsV3nVS9u31o5aHJjEZhUgAmipN73HjPSpPG7vfGhQHkp",
  "key8": "5By3Adu8eDRZmBcwavJyWC4ufdkdzx2GPxRqviS74opqzB1PkYP4AfpRRryYar5AAi8BsnYGRBAs922fbGevbRmS",
  "key9": "61qHfZyc5TP3iKstAbJxx9KfLWVNYEvL7Fq6T2xU2ZJk5Grfj2idxFfHWobLuSccDrE3cLQfEaiqdWggevhGRhpc",
  "key10": "zj4ebaMNqugMqTaG7mLm8UR6tWYiwNXxcadCYCJGTic7rNsfRMTU9818thnEr1mS8qtsWJeZkGUPZiVJvUFm7Yr",
  "key11": "5fCPSdkxLmsLEcPr3HpAPNtbicAKDq719KEFezq7MYZW9N3iCkvid9EFqNvMCoiixQ8uZL5Hje1akkvbaEjbxgC8",
  "key12": "DfbwfvpQd9NVG6469ckLReRhLssPBd4ZWLbHv3R4LahsNtzVAyZb5YJaDR7ESodet9HF1PDagBoFzvp51ZpVfXT",
  "key13": "3YKwu3q3ZJ1H58k8TzTtgNAh9PQPZGZTYUwBL2diHMDLmu4VvmrGks7nwvV1ChSqNEPaS4b7KwWmVoLEPror4tpy",
  "key14": "2Aqi4Q9AEk7XkEJNTDYNGj1NHEdr2U2q4NMFVKpja4c38dVFGdopsjzegsAdcFJPZSM4qa3ornCDMpBhAxbUYc8b",
  "key15": "5QDE8TDLa58wc5sWmYqLJ1cK6T8NWUAgQqLbmnroBJmsnUBC9TaKA4NQrBapu2roXhsWbxmsUL78R3Nf96wZn4wj",
  "key16": "52EhtsdfHVcr61ebF99DcfpCEBzTb3pQEUYhR9yrsNasmHe8en2ZevxnwrRK4YcqiyRo6FEyWWR2QGtTVPBz4iwy",
  "key17": "2pGaP2ctEbG1SrbSgHi3ocB8fP47rgicwDgkMnM2kCVuVeFUx3A5viPYAUkMronq6CobBXoAjE7e1qjPG5b2rZMb",
  "key18": "4ibycLxBkT3qoFJd32ER1GvS3TB7GiMgfxWhPi423SWGtkmjeAp3zdpur5LtuTwqe51EoqtFnqSR5G1nsqpBcjsF",
  "key19": "63pZtQppeiZT3gsEkv2JLoA3XPPnCLBqUxSbew5QPeKZ6SkTfF3aycpoHJ2rYhSXVTjyYqcWccmSRamdbtrR3AQ",
  "key20": "25WTtPzKg7G2UYgFQRBPQDZ4HfaVBWZ3eU53vn2vXPVAGtonopHKPtWX4GPj8tAD1mSV6cpPSAsYYRe4kuoybFke",
  "key21": "3bJuar48VTqWgpiUGMn3xgtnMkGDaEiCJtzq15XJcVsLqbyWALkCFe8Q9Sm6KMMPbAvZKEAUWt5LCGUavHLpFez3",
  "key22": "5ztgjGMKbqZfQu8LTgpNLnGCdraRoCMn9v2PASBngz253fV8bPVdXoXXQtJ8tnPGSYd6hNMV3sQW6jrsc2iLy6zz",
  "key23": "2BY1csZZk1qZtaLhZumoe3AxS9b4GwQeWd6GbRvBv7ZdnUoY9pWzrfoYWW6FtsM8szAH4PhWz2Ee1mB67DU9kUq",
  "key24": "45gPXktq7hB2hhG8jRHk1QSSLhdNdfb6ANcaAndnr1AB2m5SR69tAsBimpbaTj96asnT4gBVxpgtarWubr8bDYt",
  "key25": "sQwRbHp3AtHbykHyP6ZB5msvQew7f2t6gTmUTH8KWTY3w4eUK7Pndi7VUMVTK3aNaPac2Ki5jHfQfmgkX64Hz41",
  "key26": "2ERL18rT2s2pmr8AVXaqWaPquRhckVUpMW3KfhYg3yWVekgNtqEzT852usitH5p7nLMgT4cZMxqrTVMb4v6UcUkx",
  "key27": "3XY5A3qJqK68gr7HyW46RuVEHSuhfbuiagXx7dVj6snmv9hgWhirXNLdDUz9YC3BkRqhw99xuDJAVYKKLPrqMPZn",
  "key28": "25YxDxPGXrddkWwnioRjii5DSdGVTExGwyHdb8ZGE7gfNhhXaxMkaPYvMWGcAsPKVPa8vChpUemKE4ZGeJMuL1rD",
  "key29": "4B9YVqLXJ3xZZnk9SrgB1mZ2PN6Mkk8ybmgHHentR6PsDUoZkA5a81wHv9wWL1Z7ozXhz3AbsctMX68nXepVYCYJ",
  "key30": "5zpMKp93rUALZ2cdZ1pJrAeDavtMHJuHRVxQRjBXvuf6VG1SpTYGJB8MjNxsnmzokoKoF7WJnn8pzYDNdu7noAza",
  "key31": "gPoVPnZgiPD81eCpebvYdjbfkjsfQSGqRx3BcXYe6aHdTZJ4VY3ip4HfJHXgCAGPmKkWC7yxLDdSpnoDdvuFu9R",
  "key32": "3i2msa8hAwdRUty5VADbfoHwNig3Z7tvSUna6QNHT15V2ofdLcuHsnY1YDGxLgLdGZNbmcjLrFFPeyEi7NJzYAy8",
  "key33": "4PvPDUSwmJhgobYMuAwPvE4Kkcjvi3d61tnGW58m9yvtw5A6zbRGnKSgqDFYNtzzzPcaDHJZz5JQALKFwUQKKLX9",
  "key34": "5T2hDRJDHZSogbTD4wasz89qepZJuLLGJCRJn7NoYcZDTNaAuVhQk4X1y3nwaUymcWh5zWYBRaEgA7EUSS26ne1n",
  "key35": "3vK7pCKGhPf2dyG4rJ3umHmPZZV81NFsG77hGXHVxdyEiqtK53oioxPCg1duFTeFiDYXjbcG5VzsjPhcQnb2ww2W",
  "key36": "2awQJbpyqa23ewa3DWj1cjXQMWrQWHnHdBWjQZ68QgacYumvZbzbFuHuZTVha1RhnJzYmr2nxG9ubEFRGTXkdRew",
  "key37": "4vzhotCF1z1fPzTkacwePGinXEDY7QVSGU7xQ9vFQrnuah4XstGYDZKutGPSqMMQBSvqHBX3CbVUt4z5yEwVdj2e",
  "key38": "5K267bqwLXXK6ijgLbf9jgXsjMdNVmNMyqpuWzJNYE7ugenPCzu3yyijiZyM775G7Nqr4YypFcRsUysyoBSAVbm1",
  "key39": "3jX8khcevPSEjHWhouuZG4GeMfTgNSBStqgco8yMqyGFctM6Zn1UeAPvgxqp4Xkf5r7KcA9ewUtEGD1wyonmjj6b",
  "key40": "2Y1vKj1zCENfqb2V4dGBEcAh29fBzCekYRhikPJgJt3sxZfDtigqHbQo4VFBpDrYH38gAantMNH3wF1ERW5Zm1bM"
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
