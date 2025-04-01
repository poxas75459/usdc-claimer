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
    "2k1N9P1uiPMG3k6B2sUQEXFfi8Ng9X1iR3Nr8h5Gp4P29gQHM3vrmNL2SueLDmjsNi257RzPkBpZhghCuHrBPbhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AL9osqFhmv9Pw73Un24asNF6PUhBfrxEGwnNG2cqWcA5bLseRFQmqp9Bht5gaqeLaDSNBze9pJ7yv6nLFoeKiSB",
  "key1": "X6KaZGMHormbnVBKyLASGRDCvwFcfxpV9Ur4xmhuhZR4oCy2wMg3gtmfHSJGTuQpfzq3tE5SMnjywECUazYeaBC",
  "key2": "4XaBw5HYXpS2SUS762X1tZr6kLjEQA4K54k8zEz5MECQvHYBDdtqEVMpky5vBckpUmW81yqVJEEgqSQW5zXJC5mP",
  "key3": "5Gm8N7ANg2YvSYsXDyLomV3dxywqCJ8StAtRp3XX4J8UfGmJs23VduNSMCF74a2vBGf8vsiiDVYTSiJpuEdSjoDp",
  "key4": "4kud7ZtcFT5cHfB9gqvisLbXoqSS6qHHg2FZueHvdGry1TvP4oBeSrKuAStf3DtMp7VDKQLMXukUoMgzxEg3GJCk",
  "key5": "2DXhMMhV6838BtxuKXybF9R8pvcjc8Be3a8L9zBP8gHytUwK748Wv6EpoLikRjaHtY6TfBtawxCFrHHm1pz9iDNe",
  "key6": "5XvGbUdjTRq2EnvvTAPn3vWBT1acs4UPzJrgc9hFkr4xfjfP13VVqosEGCCqk3vZvykkWaEAHEsrg6WkKM29WJ6U",
  "key7": "3aLNwxWAGshqNsiJhWBi9KahBu7XJrqgL1FF9zizeB7RS5uuBzuwFjbM9J1RGprFRBNLoVeWVGv1XKn8JeTuMdTC",
  "key8": "64iMabn74vs3AmDs3KHqiCKRSMtTwEMf9EutwT5g8kAXnjNQnTLxcwr64BHUbXxhUTghVqzK24P6J18VoEMgaYap",
  "key9": "4DJfZYz6jjoVRDHZAvrkTf9hMWmZrwWfLm1rD5YDwVTovpgdtdGcYi4afjG9b52qJYknwQVkZ9MZrxu47sCxZgrF",
  "key10": "5s4husXR7MdM3hi7QJmtyUZmpb1czzEUXR4utcjkzodb3t3R7sS2U4AeuVTEhndbppP1vEtLDAv8UdjBb5PwTfR3",
  "key11": "4hprZbBkW9vBH8NkcepoLVbjChtWn1Y9BY1GnTJAN2XGXDPMnBJQPQ4kJGAop9SggnXM8PurZC3nub5MAUSjCU7F",
  "key12": "52KyfDYrg7RqkiYAfGBgVHduvfvZ1e9hw5LkYjjXVP9FC1NqgtMm2UKEmn6uBi7VqyyrhdXGGKdjQxYeirzKxtpD",
  "key13": "2fXUg4LaYsx6nacHf8PQGP3UAWTp99R4PC6EeSeZcwWGGbDrv8LN4hC8NvoXuFGKoYmkDMYYhkeqPzYRn6BmEWFb",
  "key14": "3KXGLnd9YJyYiAy3ZqGwt6cXhHaxx5XRXkyojSjpFCenvYAGGLmLTPx1o3jYuFxyWV5Bsfx5g3p8krxui2USbYVy",
  "key15": "VrUbzB7zuUuubneAUU8VLkhqK4V9nQi2vt9QcurQBwbQLYFmWH38W6wLFx1HDhcSnoxv1fSFWLmtyT8nSAs6w6g",
  "key16": "3jwYXEY8mbRokounmBtEcyZ2qX4kHi1jSCc7EGxqHSQugfazfZvsZ7VF3HwWkcnSAYvVFaHtZuATYtNPxChRKKu5",
  "key17": "dKCGVS2ShjnFZKaNX7WnaZTcwNmVX3gk8HXw7FNxUsbHFpJS8C1YtTojgAjWMPC9uqSzSXDgrU85n84QxaejYUg",
  "key18": "4Zvr1UB7sAQEBFaxshvNPjrxZrK8TAPKFcnHi2P8qNZsLy9EdWKe8MgfAXafXs9LgMmM3CVnmSBsjVZsGDDYEzpy",
  "key19": "2s7G9rBBmki4PgVEmwMiu2yjDcSxkF8vw7FxQpYsFoqKRn1van5vpQ6FbWmFv5hLjALQ1nu6tSuGzmcYvn2cUktp",
  "key20": "nnDbk9YJYSeHgYmFMNwaRyTupUBkUP6ZrvmGyQPsNXtxP4AE4eYzRWErzRhsUoaSfWtVMZugiCYWgJLqZqxGy2F",
  "key21": "3Jz81QVVRBeTaXN75wcXqEsQ7bZvnaTvn79eKjhCM4agnaSHZa14gzTFo2PjwoFaqhFDheMCjL1K8VgnugQBuH99",
  "key22": "2pBUFpccGKUtQQWVsC99pNLqPgngyweYWz2nUR45JKCob3Ffje9WBEsTMgNTTj8YJvafssrXNxkFS75hRkbWreRz",
  "key23": "3oQmpPYS6rLhYShXPitC3YJ67SSskjrTKzb6Eg4rNqpsMGC1rsc5R1bnEacWUHbyZBNGBdZUh6XJJZNBmidHfWoe",
  "key24": "3WP7z8tYxjDjmE6WfydLydEk1gbMQ7Lakqr4xhMqsRNtB21Thb1X9JDcwehijpNBCWgXPmbrKZSyKHHXNSuiywV2",
  "key25": "3EdtCqZVQACb5uBqPoyv9DrzyvDpY45sMBMLR38U8k8gnqZ7awjn6sitR7JSCdM2jknQzTr7gH1nguLbHtswqNkS",
  "key26": "2knPd15CMPqECJV5LosM51p6UAtCyxggG1N7hrvcvihxixfdXoSRsdgPwexxxkn3mzu9UtkR8J8XQqT1mvRhFxHk",
  "key27": "4XPT2spNFDh8irPggrH6zYUyy5AqXxtCN1PqkzzaiXSFHnfLUVF3mW98JsFcLtg1bTGPY2Lwb8eMxNkeYCaJcy7C",
  "key28": "2AgQVgJtctbETzxfX5P2DyvaHA8eX2B5piv16go7z9UYwWZKAC6o45HTSb5oSYaH6zo2bawyYc1ef97bqndm4rz6",
  "key29": "4qE5WyGTvBUPzccWdF5aL3ppnGckLsXz1vFvZwjPSZFKq5tNmUqBvUvn3UJiA6hsjSQUy3Xx5sTHD6wf97DLNanK",
  "key30": "3QYsTBP9RtK8NPfrCKFWTeFpY7UrNmsDZEfLcuT5kdLPnisnBVSkUvjeLWG3VRyDesniFnymUQLWHnxz7VUY9UZD",
  "key31": "2bCuKRhuK6mTaLh9Q1RgKrciohCfVPqMz3a65wp3GPEwknFYsa2b9n8BD1LiWzrQGGfoHdcUkMQYNxbp8q9z9rNS",
  "key32": "5V3q6mA7dzBNHsahYRd1qN8aTAPMJw4YiY2krLxcYz5uJbZ6x5BoJ1qQKuNiQvsV7g8dqLhYa3PfHxgw5x7VEcKM",
  "key33": "425gQg8AzesbDVKZAtPqa5KEm3mAmcP7wBceCbB5a3ggtqhG3mooZ4LU2XZ8TAB7yBiBufseL3312xTwh1kv85wQ",
  "key34": "ENStfJc8P6Xcir2MV1cAErj2198HMMxuMXjLJsDVVPhcBY4oaThmvgAuviY7mky7X5xUcdaDCDoWQHhWDXyTrwm",
  "key35": "2qSk1oimnL1uQFneQCkKWrHdaeRyS3jzyhDPXax7F3JWj8dj4MJGrrgc2fujuhVg3yaZfUGDeJmu3JrMabvhLwMa",
  "key36": "2U9VtScBDNkoGo5j9PiDErNd3GpSnrB6Yh2bDWCdpc76LFhEMMRKHiJRqDAB9DBPXbRKD4WDgpnDCXpWgj4EqS9R",
  "key37": "fqBr9p4UvQUTyBHPP1NWUeCuiCRDBzre8S4XAL15JAB332x9e1zmFc8TJTy1CPnE4kqHoB6JJoupfnVW5HiujuS",
  "key38": "NhpwUePEEb6XheJLqwLAdwY5UqU4KQnECuTnPCdsPCACe5na5x74PRXnmtsnZovq9Bu4FTJ9ujT2jRtKSEgiTSD",
  "key39": "3Kg6SkEA1JzsRHmfANk2sndeowHY274cQ2fL66rLKmHiMJHvLBghhyejrvmgorT8aL96y8bAti8UjiGQMsmmrwB6",
  "key40": "5qtnFfPBwUu8ADjUCCVdVFPYPFsXMU4oR1R8mD6AtKjCwoSeXRAuQun2ygtkEV9nQrLVAoVqmP6UvH7jZz8Dfi9U"
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
