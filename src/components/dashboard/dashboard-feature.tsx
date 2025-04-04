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
    "2AsQnshyQ3H2n25Z9z3YfPuZrVefGpWWjHtTrEbrGaFPpYvibvz4ijoi2rtt2wGyVm7TWTvMFX7JobQZ1dwtxTAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCN7AEfDz7bkct1igTQMWHVyshbxRiuL7QM1xVmmgA9bw2Qpax1YogKe29sHiieXvPkuxYxpvGagEphtZz81WSk",
  "key1": "4RsJM8dthNpvrRsYDZyUviH3YxsbkqJnBQZUNCpu9cX3XAU2qM5zKquCDmyRGPvqDBDqgWtXjqG9LvqJF7dzY9zZ",
  "key2": "3CWsFscyW5FxTVMjJw3znHKVkcyu6WsBNpQRweRvHbCaYPaKrDRhR9sQTujrCUCqEdLVfmcjhQcgLrqYZXqsD4TE",
  "key3": "47GFv1eQGmYGtZrYF8qLh1gMT5CrMV6Sf8HAxTZA5uSzXzMD79M8YYFokfQaggpHRsU5pXj6jEcCa8PY9CUanw67",
  "key4": "pkGZmU9RRP7ZNDfyENZwCrMhjhg4KUdK87Rqh1mNgrZUoZUTAPADnZCH3XLA73uv1oQZsWU17CYM86AwYzZKLHt",
  "key5": "53Qxv447dZQudPBoqpWNJdUTH1CJT2r8irQLHR8C3rh8zQP6CYAnK7GDzC2mQPVD2DLMhr4AnMmV7RXE8zHYkb4B",
  "key6": "DfBjFBcnMrcu7nE4RPPcu3cv6EduPtS8kpTYPAX2S5C3PFpzQC7hrfkExqkRB6NUNEa65mHwFhJbrJgwdtGFi2U",
  "key7": "4GUzfLf6NnkvGfyyESAEzTzXzgvYZzNVHuWYZb2hysYuKxSKvnxXqZtheR8XEASP79CeHYQzqsw7hcKLp9fawEGj",
  "key8": "5dNEPZheJ2VdAaiNZdkZbsgpA38H5nnKuqAqywJQb1SHmW2XeCLuuoViKTAzv47z9mnzSqHRx5m1YZfgN3kdG2m",
  "key9": "23LscVq5e1xSoJYpZkEhBD7v6Xi3SGXd4La2xWr39aL1DNBD5NYkMh6uhdn5GnwwqpKgGEvbQDr9ZTting9ShxZV",
  "key10": "qzn3oQSsy9aSdWmt3Fi6DXE1oyoTtaqG6YYykKo4FcWxSRcdwjincy9AH78h9R7DotwXKVCVdwPdwZwkhyja2j6",
  "key11": "4DK8snTLsYzhvZ1VmmGfnBEVa3mCSbKtJXW5LW54vu651kHbELSgCF4GHPs2wRAjReEMsoFeutYkaVu141hLbVPj",
  "key12": "3rpkaZa7h2aKZ6q6XFP1TbmskBGqEfkR6568j9ENchaqnBfWsCFi8BxHvxNKeYTqufvx8Spb4UPFoSM74vbzVJzi",
  "key13": "3XMEuznhGJRpyzXphzW5uJMcVizy1WZHfjmD5Gc2XJJK916SVLzQidATKQrm3LfKLm9sqrhK3wqBvG5k6fRYvdLo",
  "key14": "3eNK8fDK1jC7rJoRCQ5DRjfpb8Ka8tE3tQEBPACGrS5YF3p1LGThZrpWxsNLYPawMDcEYncfUcqrQEEVh6hLi82F",
  "key15": "5yaoArfDWtJzGJqkqJovJCxC4kPCmzmu7UkMGpg1CDgwhcSdfHeRWZRhMC4gUvLujQFUmR1vLGL4JUSyXFYYm8pr",
  "key16": "2NLEw65GchYw2rocPGbKNWKT3NuwJGyUw81xun75tzhiHKG8W4wvBmdwmqL2F7Y8Lxb3QgrWQAPYMdcf6aZuooSW",
  "key17": "5Gto7e2fQXMcXDFnYNJqngmRzLhLwPiNSACqyWboYsG5gD8qBfnhFYpuojdR13xEYsnCeyQUCQ4anqeM5f7dp4EH",
  "key18": "4ayPMgc7PR712e8udR9qegZQABfozaLELTChaDnnwBkBn1hU1tivGkwjQbuwve6NJKWYCGhGNmnAEVJLk3vbh2Yq",
  "key19": "3gwv9A2FshtepivRr5AVuMfmuQ17f8fsqUVhMtxVBSxkzj77ULdW9KNyFNAofNXqu12otzccAAcZrrnHfFCNKdrV",
  "key20": "536f59ocPnbzrQSsZrrKkf3aq9sYgCxMiDipXFd3wsatXJ7AFKggzE937EajV6PTCbcjUaLniuktf89XjERfceKM",
  "key21": "5MzKsB8yfh6qNT6YeUJLbEWDg9SgsXuU51bviBUu3is7rMET6dDeUKLaTVUpY5rwue6PySdGDEuGKcv5vNA29Dcs",
  "key22": "ewqf6zmBWXVq1fo2YUtioQXYRKGZhLUELqQmgdztDZN4ekDQBk53rLmQqheHSzCA66YQHo9WcAUWewA1Bht1h64",
  "key23": "df3k8df5TDsCx5QrQ23Ukpyp8BixZRjXnjXMFqgKuhehrbD5htX8JCfpodc37Qj3iRGq2M8iMCw1tXqTsS1exCB",
  "key24": "4TjuomzxaUMj5F33ganP7TDKXmPXJyPEfqUvW4t4sgQz7qfemmLSjYSoShG8C33MNcJBFV176Wj9rbqHbi82eXNE",
  "key25": "2tn4L5MXznmpKo1cDgrLtZ7JmhiLEnvdNQhBBqwEFrrv9wqNs3vA8G5RDk3kf5Rb8qzupZqj6FFjcc44a8uarSRK",
  "key26": "41oaQXSKt5U6mVRmHcgNd4hKsCiAq4KREazWnNhVx5648qV3yhJtPjp1f391qYEjW8r782PgGyBsQF2yBpFntp3c",
  "key27": "38Twgoz7RXXUNtnQUsH3t7YR5sKJDz2pt6CE36xLYq6FVgUbAoxyTWDMSpqQJTENfgrpXq9FGkwvV2LcCevY4hwx",
  "key28": "5XSHdKMLq5CJEmLj3v58cfqWVvzEUJ1Fwx9tsdSbpijNqDeWjKyvzjsqE188apMMmpimpSDtixvvdk3Pocnwb4E9",
  "key29": "62rmL6KRGtCsKNfd5tBpV1Hh8HfeHD4Kmv71bxWjaBZSfnfYErPbn3sc5scmx12utMxqcZ3cGam2Hj6H2yabMgij",
  "key30": "2aqiu3R9doA8rAKPZu9haLQ9tZ7LU7bFHna3rWYEodVwZCwn4Q5YHqT1a4HT6x6cWVCpXeijGrwSZqDoe9V591bc",
  "key31": "23gHvZkdPLTHNhbjx9oSU6dUVC8odvgF9V2N5FYirUku3FSAJWM67WnwS4GNbntsqgGA15rumrFyL6Pc4DARATEx",
  "key32": "5Ne4UXhJhH36MLMPwfyhfRmHCj4dNP33t47vQmupX3EqVCkQRLpyeosqbTK8UVqTdcpgjfsUHpJ3fSwEyYinBQQN",
  "key33": "4pABRy5FJwLxTz51TS2xQbJNr4fB2JjK4LNteX6NJSHH6PefjuqpozurVihqBPeX2BeNJQQNFLnQrQWZXCUJwWyR",
  "key34": "4GJWEn1QMSvbh6UqU95zp8ufTNVhg7AnT7FX6vqtatYnxY7j1Cn1z52ir428p4uSYNwxjJ4Hfkk7qXCPLGViXhG3",
  "key35": "63U9QEWUPryMDHD2WjTFQTukeXtwoy2ixeKrpvvynsK8wXhmoL97VkyZNvFbEtvzfvWhb5TSZoGxP8qdimqbCoWU",
  "key36": "384KmEacGZrhqesjNv3WxgaLwECauo7uT17SwdviRn8tYtmKRjuRb2gmoLF8i75KfN9dTnwe7wh4nramhfUcdGNe"
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
