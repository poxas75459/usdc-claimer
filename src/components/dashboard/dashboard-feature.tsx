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
    "3RBdagSFC8GiU2VZMbf1aH97wWzvq37L9Y6qrG7ibrd2NEdGoikiF5BCsS8qaLKXccqz6CaKWpQAxjAhodPjgQh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQr2NKWtR89PB3f9TtVLtGHnHuvimq9xvaWJQ1rgEkL67DTEzYafhMExPVFLAnzpzVDanKNxLpMcpm5usU1VeL3",
  "key1": "3mBTWv7NKPPQ8M7Pt3khduBKLQTA6aYysqQuHXQZ7uae52PKs2YoTypL19zrX8U8vRkCw5ZxEPjT5AdcUWYEQ4oH",
  "key2": "3gc8PU6RBUPMH4P7veGBxHFWQ5Af9JzQjN7US8gYDQWxsoLSWu9wrcPurbaACYraey7LB8Ceq7Q5iED9wkkCVe76",
  "key3": "22wZ8zbTzuvMMH36jofvoE8Gu92k7Z2Yd2g5V3p2VEq3s3QnTKaUMRrYa2sHaRjbwdXTzbp8aYkuMiNptP12JJdb",
  "key4": "624gfhd4gM3ovH5YrTTooJyBcwqNC2BZ9QTTqnRpQ7zapUEAkySC1N9E5WKyna7GgQWpyi4P14jfdnwisstmgBmr",
  "key5": "5bMU6NWE8nJx3MyF4CAUbZZUvq1siRMyoLFN6K32csbgLCCvcN1amyatC882ZDnTC6j9dFLjv1QcQaLgUAxex3p2",
  "key6": "PydyLis2KPLCdCTGSZeHdUHVYeaZX33jzUHcseyQdr4UbBZ6Bb7wujSnvjdUWhJ3MKTiJMaWtqoh5eeo2WRnLAR",
  "key7": "Es7BBEi7RrseYD5bpC9yt5x1s1CL6yqEykuZPZYWwyiKQE7KSvH9LHhLXG6QZwphMRW4NHgHFeekTT7CDtWQegd",
  "key8": "P1yusaV1LqhhXe3mNSVjhmnUxDM4TRzXxKR3pxnRkaE5hFzcLjrD8PaGHzXzYrgGPno1VNFREpmGmFgUq7yJkTV",
  "key9": "GQGDAEox7bvqrcUbf9bKSpA73trH47R24erMLad7tKY6jgteASRLQn9CovSUA6mTUP4xGfsZhh2zND7V3UBf92M",
  "key10": "5QDUvHix4f1Xr2ZohjVq8L3s4NHpvkF1srS2bMwdw8DfxkA777XT948PnHesdsw8VgUuR5s85QbKPLwcokre1pon",
  "key11": "HVdB395REnp87nuQv8Cu2Z5efZurcYs3dAmntBZj6e76oY791beAh9KAvjNEa3HFxm4ptG2TsKMM3VVCLCXrZyT",
  "key12": "26yjheo5bEtAur9RUAJE5fJxC5udVUAwEFmeYdBZNzt98XY22S3CXaVytLhZuJgjh23SPZpN6FUiubut9vuqmN21",
  "key13": "39QfeYy6JN8JAk1oGEzJ8YDCg3Xw52ZtZUHVgMYU1XwUqUFxGAykGSc1NgeDecsN9nQuDwV4Z4amfZnbjNbGiLvF",
  "key14": "Rt9ib3btuDXADZnBscxtHTVnhP6qNop3db2zBWJygfZ1dbg6vWQN1SD12aXCGggUEbM9ngGBDa7McqUwUvPZbn2",
  "key15": "4AczfFjp12QDdyPyce7DkJTeJMdHQ8swydGHzMFV5BhuNcs64YbpDi1c4vnzxiQG9wvyiixxX4syGCCN88RraTJ8",
  "key16": "ZkQqEJyHeYxMRG9G1RSm3osScXsa3yedJLFvduygGAHumkMMJSnkLDiVrgpEYq9XhqNczrWWHdk9j9F2XwzpdSE",
  "key17": "3cpPZUZSo6VApezXEZmdUv26KK4wCdZJ4pLY9ktYvCR93vKeRYCpy5zxSy2Wzyyy61qHeJoz5KWqNWAHDAE8AUPL",
  "key18": "5XNsprH248ziido75v5SXsutCmRf7p4QSSm4ZUczXogmhaQPHycejYKTcZWU1JEuhoVLJjLvBx8GrCkyQd4soA8o",
  "key19": "3tYLzohRmjmftGQ5BT7wBWUxmKugwp3diDtbEkgajbJpWoAQfBpM3gzwuKnSkrZfiaWrSfvVnojJdcsK3YmrgDmx",
  "key20": "3NqJ1ygLYgJDAhWCU2omL2fr4z5XJ4dKXVSxcphhNPBuiPtA63f89FPYmqAVTaUPdFDJdAzuUxSbaPToDR3vMTGV",
  "key21": "2A8eSDivsweGGgCSzw8Xju87a38qdZpU12zdjExkVuXAW5jpeA8fHi6KBDMn87qMXDBHoPbTeBhz7KmrYHUm8AGt",
  "key22": "4qWnXvc3sC18hgAALgfp2ogZ3hi4kHzm3z4NTxXUBSZHp8TzV6eViYprSQrMjQG5w6zFvwGJ5XQebvhjWLMpQLSE",
  "key23": "3M1b1y8qeSmcvtx7YAzLLZcqWPps8T3XTX8xkiHTygp9LRB6sH1gxMNKUXxQyJtKqGKkZbg8AccXxBCt3vdBxEDJ",
  "key24": "5bFm1fG4s3CnkrQcon2tmkLTF1KiEZnhqzeUzQJfzfmjTGTU5ZMoqGDzh5EgPQyAuzVUTKmzNjfcfLc9aZZCqSNz",
  "key25": "51p3aRHtpfUo9YH8n7UdZp6LKrHRq8b8tUAsETeDWqV2JqvcoFzaGUugKUThdhptpArzBG5KXiWVbnCX3AVooxMY",
  "key26": "4HvEjS1dXmDmG9HuDoX86hd8YkEmAMcfMEHFw2Hgd2X7maUkp7JWtcNTdTSz9x75RWNBG5EGkSxmp2jx2BeYjQtG",
  "key27": "odFdaQvvtYEygxKS7mQFH5F9urvVVehiVtwQ3mCR4PhqT4uKpU8iToCvDeuY1jS9UV2EnJShgHz9aZ3MuENzjNR",
  "key28": "51miGdXYDKab8E7Vvyh7JysroXAcks4Tu6raX8kNLrzWRBAoVExBVJiuN8MMfEJ8BLEV57qwLEUbaXyZ9qUjBoBZ",
  "key29": "3deqeyxK7xXARVcSdVYZy5VKLvvBAXaHGbhYBc9CU6Ca7wEpAHaURj36tbYEUtoQCSFAHDBXz68MibDw86c8Pwp7",
  "key30": "5CLfm9WF7vT7Q1zwHwPHiqUf1uwyAvaFnfUEAuJxZ5z8nV1xjaC5F1pnfbYbytkLYr5xGZsMzfp2dt6K1faJxNPG",
  "key31": "4BbVc53w21crZt3pP7km5qL4Fu5ivumLbWQ6xodZy8uVEaYej2fZhu9TjAhekZRnkVpGVN7buYy6GqhgPGNwSvSb",
  "key32": "4Tb47cMrCqReTkpu1EBLwC9cXe9LnXASaXW6AiF7HuQTx1jSREj7dkv3YsDXjk1kf7sVe5MFc65S2K1mVwX6Zvvd",
  "key33": "4mzzfCJ42rRU7wizxxgXyV3AMJpHcWduAWiWiehV5Zz1SErKyQhDT7AB9sSPdnrRHgQG7d6j7JZGVYVdnvKUqtmB",
  "key34": "2YKMxE4cDeCqzTv8AbhPgp29BFyZxXaiMvRUmpKGCBLah2BC1ev3cmGFa3r9BmZ7JHfEgHyqc3jnm481X5CysVDe",
  "key35": "4web3gcxN3pQNw3CsNPYnZEmJ5qSY91qZKAWNMxg82bKY8zzimDrjfDq39qW7Zmmb8hCatCMvfkDL2j1Ut6fhJz3",
  "key36": "4tSRdXLm8EAQHzLbKr8xRBJkT2q7rTij4Cci8pGDr8cyhCKLEc4n6peJstqRMMihKSwBY8sGTKzeoPhFvSUroNui",
  "key37": "3vcGUnSdqj8acfQ8uEPbdUG4xCeSNxeshEJAP5N8bgaSMXYBTjfS4UGp2fcgUEF1SQXhY4d9UczbejpWZmicbKsY"
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
