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
    "22fF7ogyqSGT5TTta1r3z2CoVx9BiNnko6rudUrjbs4j2BcxNr4YhrRhdtS6e7yj3HJ8vFJfLFmxGAhjWLtDabbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iss8VMBGzyQUXFEXVzP1BLW7D6vyhEoVHZMULdEiRDEvzQhvLSwe4WCksbK6e3trusVZGH2EWGoX2qGzef1bziX",
  "key1": "2i2EeFHfo8EnNiBQtjEeFoQPHnS3MUAz1HvWX89T2x1Qb9SCmGELVpVrKgHxoECw64txLMtdYfQrxmVs6PZCNgFu",
  "key2": "29ADipehuVKPUoZPBeWxg5D1YCEx6vDhEfe3wRndFMGYdSrUSnkASXkAvEt8uWr1XqWVVhQYGJSwW6qcw7MDg4k3",
  "key3": "3xUwqEdAo9zWbSSoDGEoiP68dXnXjmU3SYctGM469wbZLApR136bvJrfkep2dWFFHqTxKmrbY1H5og2SwRLcKcZd",
  "key4": "43yqgkPDqpLp6V5atqJYXRHSXhrqSyKsoQAA7pDxdkdZkHXq2awyMqVRzJHNtHe5p81e4YqUM9FWjo1iZPBStrAd",
  "key5": "Z3X5zGeTFJszmNcnwb6efigCc7niQM4tUPzsPSTqgazQXGq5QatYBJhQeFf3eHPABq9JeagvbVApoQcAJ3WGNpF",
  "key6": "2sd8TuK6z7MBg5zNdFzYKqB21cvZtYkrQWbo9hpx65AjgqYEGWi7WQAznKVZfDvRzX8pExgx4sP4muPYW8ighNig",
  "key7": "wi41JnUfXnJu67dk8PY9pBLccbpmEhN67L5WVnWTqeAM2LXQY8bEDA3ZZCq8YB6Tgh7dniP4ib12Y4hc4QSZKg2",
  "key8": "3rcUqDrneBp6nXriQM5YkYUkUwwyoEkwsu3b5zHdEzG7vpzVwpvt3JX97o1svCniK6rbrisTwHHD82a3Gh7eHArV",
  "key9": "5PPJtptDYLwteJ9usQ6VHWa1Yy6p5joG21mygmA8SuMF68nDANc7Vk2uJGLxQz7vyDG91XPn2V6nAK2JLN2BVhyb",
  "key10": "4PaZgxMc6onSxaVoyv1zgzA4ys4FfCYquwDUuJEntqb6rd9QFUEvLxUmLDT8YdSPtE2YdstVjktymDbM5NLVGFBE",
  "key11": "4iLzijRg3ddau7jirHb2i5YmhqZiuHfk9iGJKrRyqPV8WdxnAdg1TASDKQVEafXSTcMDrSCbCjQvro2FqfcmV733",
  "key12": "2RDFSCzjQfmnnoJuuJex3H5FKNGYQa1MwArT1FNFkDi98KgTXGeLVXUaE4reWgZiEL45FbhjnsWRsrHkr8AxHLxZ",
  "key13": "5mGruY57enztbZvgPxxbCyAFfwj1s2XQZbn9w2q9VaP7bvP1mx3LB7gPJvfjMGBxN5gwtjTyuS38ucJ31f8WUEv2",
  "key14": "5tx4Pi48HoXcsvVAEfTSPKzN7TpSfKG8925uBMRd6RknG6LB4wytwLv3nT5WBht8FvEJB1BZH9yGkLZQWMiKu81w",
  "key15": "jusmXGs7ceJm52sW714GfVZ5FmawFXtDjbydxiQSJx5WeRzFPU6RT99PuyTzKLsAd6jw4CcV3ZgANaZfQ6AqWdk",
  "key16": "ShN5tLhfgCkTmqNqV7sxtnKBtKAP3ozavwi8MhVVJ2mneYg1wgRmUoQzaNhRdxKkVsFFDrtNHECp79KdUPhoikG",
  "key17": "4ptLwgus5frHrCeqg4iNSj2ojo28J31a493Df7pbdHkJG6ZLKqc8mqf8JZQEdYhaFbkZoTX2kcVSFHGfkXqSvTV2",
  "key18": "2bRDNcNwnj6ygB4zdBupx1gY7am5ZyE9jYnwAZiX9yBSU2BjYaYa7vhepRXzN8mBjB7MqMNDUzVsS3RcCr7M5qaw",
  "key19": "PP6HmZfjTXwUYr4TzukFP4Tpo2EuLhvdFEtdLgW9AfvgDxFd7yEFex8HEk3MMDYa7gZmkoNNLp8UBFCFa84acJu",
  "key20": "uRZa7Mx3iRe7HQr9CTj9in2KmtsY7G7G8ko7FcbGv18dvooziNQtRpEcfqTYjNJVj7uoMpEWXsxBzfNgxWqZLd5",
  "key21": "2YKZdHyWmH6R6KnKpsona1T6yBNzWyRKNPQeoh7TyXZEGjAXaiBD9uia6rHuQetvUfMZe5gv2vZKwqavw8VGhTfG",
  "key22": "2ss7xsQUPhoCkeTAKdYK3moMpVmpxABX6pAQUUEwzoG1VXDqotjLiYUmhvJJkAXsw4bmgqkhZvAndLENrnSFqfxc",
  "key23": "9LgPDhiBMsJvfK6XfchUiqnEkL9k9kAoyhhrgGi8hLSqS4j7CJaYm6aqxZDNRNm4qGKDz4ExXrB6xAooysZjpXW",
  "key24": "Q53iiiUATLPmZDKT8ikAkQn6DB9AA4paFbWED1XTFEhDexjkGNK7iNvi8S13g6ko6BrDhhL79KE7CLwTqHC1RxR",
  "key25": "33ktZ24ZB3jzXr2fhRjZe51Wx4zf6NBY6LErRCcYSZJX2QdrspvcyTXrNXpEZLohp1pzsEeSgfcbJtJwCiSVyEsU",
  "key26": "4L8Z6ghBwzKP4mrxnrHUCpJFZMW4aWrfcQfznbMSqDQrHJoJWkZdMAxh5NBoSXXSV1y55VGw7btsVqgc1UpKAFQT",
  "key27": "218C73hDfpq2qtrnDt6FyFC9oTpqCa5j2Kh5axTMtubrBewX8HVsd21U7YbNQjjRxjXe3Xh4kRVVds4VRM7mRg5P"
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
