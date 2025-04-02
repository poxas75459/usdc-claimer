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
    "2cZF8jyZKH1RNUVyqJyijFrq3QgwK7LA7PMCthtoST7iKA1TDh6V9yJwoQofzHrQmzNeAGH4PKTXjMFtoAmZ4KFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tp1ageF3Tp2R9BKL8w1a4muXa9k12W3zekp4Fq4zLk6ajG5mKfyrs4scuEoRpQfSXGvcEFXGsuarwwgpzz45rJQ",
  "key1": "55tzw3SiEZEzQkP38wM6YqLLdtesj8dFTRV9KneZJiuVp5HY5jGrve3c4eG3sfq7BxSAGvpHHnu4pyd29xhopoCG",
  "key2": "5ggRqFmcpnUTEGMugqWjk14vnHdDGjWYNsvqHV3RfWczSCP4gdFR4pj9P2jiRUtuejWoepdchWeH8rmKeUGz1tuD",
  "key3": "2KSxPNY9M3eqAfwqRWQnjinBNyvL4J9UUtLVB5WeJAW4Up9Qg1Pj8BuNxzHJeNxgUe3BWiZwGSroHtP2b5BRU6nd",
  "key4": "Ch24sHfisHpkEG5GEgBGDrNV6ypK8D9Eaxz2T7LEx6fnCcMqTx5NV6cXF2UJpD9eN1pr799p3oU8XEba4cSDXdF",
  "key5": "5FF8FWXgix3VCY9N5HqmfrJnhvL2g2dpD9d9noNa367PQxwDJ54bi7f2gbAnnjQjeft1i8R1XnqCpN4kzUp5j3nn",
  "key6": "2nUYQBuJTv1bPyG3pWkwaT16qe84yHuRcHyDoieH4xvskrgtVmW3AWLdztEoaXgxhQm5zaxCi8n416emmL6v8Grp",
  "key7": "4SS9eMKQZt1NR8Sn1jyB4Ut8rpDxy36mMYJe43JoiU9RLLwuUSzzJVU1okEQCq1wWodmPuXm7sGVN4UJHEpyKhrA",
  "key8": "RPASsoFzhbDnhfcQbhgutYtfxvyPXrRzCgH6332N5JYvWkroBGWuQLA5gxVCgzs5LXLJTgEsLptLUg9mwyBaiDm",
  "key9": "64skSkoyQG4cJVpzo57pEQU6BdAcMEMH4CZ7Y6pLC6psxi9vPa1Av8TPQHsPeoXEfeZkBFhRa16MBW2gThCzkzgH",
  "key10": "59Qk7pdhY5prXP4uUbpVtYtGyBL9YByuUJ7N6RoBqs26maYcjLbpUp9Khqwm3LkQ9fbW4sUga1wGTFALz2ne6xUC",
  "key11": "4eiGZojZcZbtyQuBRCKYQ8NPmwvKf6crwEiAWWYxf4AX2suYoK2ezki2Ha3C3sXcx6UCDYQhxjobzDDZ2nBkDtQU",
  "key12": "1Uvop6UtvUDfijV2HonpgcveayhRptbZ2PVDw52PBzo2ekgMBcXDtFi3HfECxYMc1cjGb35p6eaFr7QiKywPWt8",
  "key13": "J1oPb8VsGAQNpGiSxibkdCK5bTuTfiwBNhtMAbRytK81rTrMWNhusqmHiUBSCCjVFpeFwQcvoVtUW9fdjkm5o2w",
  "key14": "3fMppRP9xpLRyPVFPwDdSaybwWj7TWwUyWKeJ8UAFAeTtZxSP9ex9zQqZAeD1zZspjRNQo38agUbB9dz6eEhMJYq",
  "key15": "47gdXs9jK1XYfUp4Vr1dvK1dgXNSrfXDRqgscSKgiSRgEppoNkXZozutxYh5JvUUgdDijVQPMqKZ839gFvJLas7i",
  "key16": "5b7Y1KmYYanFWG5LGW4NnePk7UjxRDSDd1oHe3Hd69XGBW3Ms3WiHt5SMvbT7Bm1XZcYtiD1MNkxQHQTx7FpafxQ",
  "key17": "zxyKWDJTMTzG29HHRANjKsJtywxFuvRtw5ZdwWpTEREXHeDaPScB1c5VwmAh4XcNYVwtmnA1NwZLooNRMSoY8V3",
  "key18": "5uUQkWuXJmwxD7hxAJYKxGUUqAJM5UmF8vnKwzfDRY6W6begAPUFVNcwk1uwduMwYH5tTWFQZkoAJHVcYVUzfE7V",
  "key19": "341kScSsiyYvefrFGkaunE7YSjE74fx3jTQyYxrfXc2vjpz9EXc3jBjnhpvqQYA8fhNz2nhyramhH6tMmszns9tN",
  "key20": "4B9P2v5x1gKA8CARMF4MAPNpJuh8nvQMTmysVhaGj2Mxasy8fhcCbcvRCdUez5UYgQryiiK1GznCFkGd2BAvBqMi",
  "key21": "5xYjpy4D2gGxRhembr18CFci8WiTYj6EJ12j6rJfZ2WBrFb69Mjf53kvJxwYxuF3qeTVeT9o6nU8jqi98Tq7YHvv",
  "key22": "3pYHev6zZZHcPZUm6f41QNH9BZSdEm1puQXHhSkapmSBo2pViZx14E2pPugHd3Z72Eyuz29iHutEx1cKoags7HtY",
  "key23": "TBVm5JDrtJM8RVZpDCHjGHJn1uyHyG2VJQESVrSa1PDBLMa6JX4JJtLiSnT8MhnvZVr3ANEomQauNsgGMRAxGZA",
  "key24": "Vnq9YgBhvQiaMPSfmEP6B37bzumJcGGhEF183CKLoDxLqyDJYi16rv41HKLQckKdVaa9zArd7HPPjuQjNJcx5YB",
  "key25": "4uKfHwyMW2AMVGf1znMB2Q3KVgyF9jKokRwV5vQRRWff5hUPCS8CnFvW8tySD2bqQrykSJnzpuRL2XDQbemZ9C2D",
  "key26": "43hvGfjK3orARP8C8E4GYKDHuFB5ZNWcoy6d7XrwJmRz94cJiVg6uSQTo1qgWvtBrQemBxrm4fQRuXPZCdcdMEos",
  "key27": "2NpEhNAfCvijcBd4dL1aTeBSd2hnVzKBa8awr5b4h6F6CEsY9iNNdar4wd4ruTUGxzAWd73kc3jBaPS9znhPH5ge"
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
