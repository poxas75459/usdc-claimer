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
    "5BhqE59KtobYbmn3DgZX465XkPuybsv1Qtz4bs2QW45T22wiHB2MbDYhHJ6tNpQSE6NkEp6tv5nAaz42A1w3RLZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HMMFoahCoZ1xUBWVq4wsFUV6c4e9Nsza84Q8w341j2hUetX8uWwjyMP383H1ERG5rGDP8sLscN5BzqAuLi3b8Wz",
  "key1": "2ATrnzZVkcTH9iax5qXYZcS5HGEYf5f3qPho4LWiYgibur995AuXXDHAJ4JTAwbr4hhVPvkZBY6u8My4SzCGp17z",
  "key2": "EXWvCSMfoktZeFS85hpZTvNYzVJapxWcp1MvaWPLuYuxGGe2nYzvDfjqJECHPRrmCULW9w8axpCByzVRk81eJFM",
  "key3": "3Zr5jS1Ciqzrn66KsJQSRYistFcc3B5i8kEHU3cu9TUcuV9F87gGYVrvbTCB1TG3zDwVFKg5TeTbsL9gQ7B7t6Dr",
  "key4": "AMEj12Ew52E5R3APkaYMGjoFFzTKpkDhABL56Sj4rKcu3aUdhWF4wQgxVNDM2z1ATnExu3QLN6pnGTUhdiRWdCj",
  "key5": "28o84ZQpSdKr5ncAmXAS6MQMduj4bD9NnxoGhFxuhywuLFYBRQsyPtviGpMWNn8TYQNcC2WvN2xFM2zYPNxLmiVV",
  "key6": "4NxVq1cHQeCrW41cdggLcNN5bvMoNUBTfwXg7r8qxHKdKuez7RjvA5SJDbKwpWmvYwhGfcZeS6LouZXSgLgmbg8c",
  "key7": "395RfEjvR8tPgiyYUhrD57XByPNoTtcT7VDQoBfkH8ELnPQ1Wnyh2e1SADpwZDFshh6VfNEqUpc1dg6V2tJvBFF5",
  "key8": "5HZozEoEX4AHojKppWHzEyWucAqA5TSnLhtUjn7fcFaK2jXf9X25kbHckVdzsNNya57rKzPkM5mVQx1mHhx6oZaP",
  "key9": "3pBDjgjHgmPXG5jGJLucDAGGj231sCJbWRdMpWcvPuFe3hcnCANbsS74npmweL4S9Si2apCND27ksrvDhnyghcB6",
  "key10": "4SnctgPojoXDWzGTdPSvUWWEzxLYsDMWhZmxaYkxGsqDXudTRA7U1XH3X5gB7A9UyinzzgaHFAojLyscxvS6Knmd",
  "key11": "4j7UEUJEfzcig8uJNjN93N9vD4F1guUQyCWi7b8i8MbnHB7aoWHECC27TxLarq3ZHb4hy1qc7vjW2e1ou5Pyxpbh",
  "key12": "5AbbQu8p2jz9jQSwk5tpuBcWy696tU9zae7HVQ34bX5Ukwzu31h3AHUhXDPsFuND6WxgXyaX813TzuQePXDxM8Rm",
  "key13": "4gftcxJEtuodNM7kNdmfjxDKYtgZp3EPyhwVFZaWCCMhaMaGDp2KpHPYMHqXpS44DRnXjEFN4bb97PJVi1J6bPm4",
  "key14": "2KKv3J75s1f6Wn6ZHKUZh53R2qAvusia5G8q3oP5kecgRH7uHdPq6DrrQVhQYWrbMM3Z5gWj7sfgktJMhXN9nyFR",
  "key15": "54nnPdxSvh51RpRBV1wJvzWfgTWX5pmRKSEiiYw1cjTUWX71WH5jQ4qKSc89BHe8CFgtoyjm6hzwzEXogadASMZH",
  "key16": "29qkDfyqtSaMdJLcVa7fid7u4FHBGB2iE9wC1YcKQhUCAydixmqehFsNFMqnAqR8kbKprkZ6CYrEQGHXW46wrrsa",
  "key17": "2VRGhUi9nA1h65Z7S3gdivokT6TG9jMaw4mL7QpknZ8L9pt8accv7fGuf6D8GfXmoPj6CW6CkXPAQFSjEu47y4Lr",
  "key18": "2UGrQeNx8hEJoC9fbB6Txehf42mABzqwgSkn4bwgS6peF1R6TM9gJAX5sUmkrg8sQEXhBANRUpuWbQn1e7ebwGvc",
  "key19": "3aK1FV6BjDe9QA3mFXKfZ83brA61Y8cfF71LVqnao6DKBggvnJCgqgrP2cDDCVRExa7sYrZM7q9Xu255cLY9P63r",
  "key20": "FHRFEMiPc3QowqMm8L5LzoTq5w88sP1591zucEHByVZGNYuWhawJtvBf8u93qkkmnPYGheCctHoHpBVDMeXQchg",
  "key21": "4RUBsB4r51mjVcw52S8WnzCxGd9Chs2tjKe9XvqKguohtKesqBuAGrqbXgR9xXMKGcwim96956nmwQwN1hmaMb8V",
  "key22": "5zcYqNjTczhtS751ZcSgjQte1EiDQ6QLodNCsypuTHJGbaUZihhQMeWWviwQf9jq1o6H7vcMbWykNuQokHoZ27pb",
  "key23": "65yBRGjGRSWqy3PxYV4vqJdg8rvh1TgfJLxXiNW5kmLtVWENv2UFH3tqST3S7cxvqKAz1KDh2zyETujw1FZyw7Su",
  "key24": "5N8mMtDSd3PNnBp5fD4ziUAsJV3PTfRxTVWyh3iCZqYrEjWnVW52qzGUJx3zGuWE3ta8BBUw7zBrz28hmCUSXqS8",
  "key25": "4ziBfor38Vy5to92NzfL4dZ83kKnf5fmFRfmNp26fY83ZE7LybLnrWmpTE9KbspvsRo3xjaLHgZV4zyt9zLzFvLf",
  "key26": "2bKGk6H1XR4HF318XzDDa7L8S5yi6ezixffswb6iqs8Ua3VnoiZJM9Pipdp3P3nkmt1gJSn81jfoZuKPPEWQAUWk",
  "key27": "3zEkw6BDSqcEkuJoLaTJybZvEVC5ra1kPCrb8STpcDr9C5HMo5D6YUsnukG8TzKMbkht6gscF6tvKRRV2AYCHgwg",
  "key28": "4Y8XvUvGoLH82xsqyHbWYGVDz2hCffTQ1E2MrJbd8KaUCNUP1eAkH7H2qVwvJdT6wxqKaRbdqXfELzpbV64k8MAp",
  "key29": "2VaP3Zu67hBMAupBffpXSLsHcKQ8uuSDmdQXcFAVnctNdYvdZg8nyc7cm8VypMybWz2ZzEfrFwJN3qWuks6bTwkH",
  "key30": "2vZZNFYFVortTc7FCZMCYJe9orbBJdNNoey9Hu9xosghJDuGYm3E2ju6bfjzCgAN5mYeiDJc7Tc2JaQFEBkKoPxn",
  "key31": "5xedDXSqb25XTwwvF37y1DJd2szo8KR7NsvBu4Q6fn9uaUo9rpjoiqEFgF3XPN2pmVrYYLK3DjtPWkf8y2ErW5By",
  "key32": "Ar8JURHkdeQGbrVpnQtLEgD198WkYQmbQzdNva3JVMx5MVkQr9omsxP7TvxLv1YgK8PYSWVY8WPvwcTnXfeKq9q",
  "key33": "5VzczanSvpGYg4Wv8WQgFJLUYAA4egZ4bEnWscCsTUEsin4XyGAqJxkoYpkCtnyFVfa4r2wqdEqNKRYNtyF27krR",
  "key34": "2imaw8xPRDDxEu9XQtW6xaQK4zCxiGAhNLU1z8VNZbYMPyLaePkxEmsZtcTKBHH3WM9N8UzbeiTfBNDzoL9zQDvp",
  "key35": "2gKmp8fjUpk4JYudu4SgAuV9V2avhaDPP5viYAgQT8Qfw7uuS68ZzEhz7TceSYsarkPcnJcBwwzFZrPP1sjBm1qW"
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
