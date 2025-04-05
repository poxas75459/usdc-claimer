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
    "3gdnJrtvDk9yMKEH3hUNg7HnYbU4KHF8xmdAYrMJAPmjTbCaLcViE1ZXywTSkeq8k7k2zRg5b2UhboQde1QkBvym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nE7eqzwffCegCXtbk4eDZYrQkqW3raaorbiBHqMEzQJw1pwpvXw1kbSJegrtvSy1fMPAtW8bPykww4aiwBCUG9i",
  "key1": "SExLLDVridLMsKKo4cABk9rSN54kT3Lbt3E8pkbgiq3bQ8WwtUi3csBo5Ffc49jcpaUcyb7MRjiJH4GXDpZ6Xx3",
  "key2": "5Gb5YQoDJbmXHax2bSffDkytsyoh9tnRkFDRpieVsUfS1uW6XvFakY6PPHEJtpNNT2QJ6PvJ7b8uKrmhJCwKiKjx",
  "key3": "57ZBpDbRW5E9JGwmyQa4Rr6i3e2XJonipmNVNe9vDf7S96DchkKMEaS8v5zq9KNZpszxq4U2x8ysWmBsE98UEYfz",
  "key4": "fcShxzjjbyDXCojG6QP6gd3AKqhd2U3tEmMS6mLtB5hX7kLrfjBj8LgmkaSj9MjsoipKE4pqp5smy7JCRZEhuue",
  "key5": "439WrXZ5SnqissNNRk5zbT6UYdY13SitNHKukGKfAYCe3ciHAHrdxeBYLscuZt7rpcPVbm2RYNpPwvgvyDnrPRtC",
  "key6": "5ePWcZH4Rr3zGJcgMfZxG31pJhfNRx5sxe9CPf7xSCUw6uTjyvTdt2Taxq1vtLFT233CtwQP6oTeA2LYB7PprJPM",
  "key7": "5HtJiPrAaLXzwwm7CJ7JiJfBXgpKyqsFUE6FduwzFjEzSdunGvPivimDz5XQS65KYSgYw3PwBgUsh8JvBTGU6XAM",
  "key8": "PM9FZVij4iaGaMoyAuDKWm2GzNsz19WNQDrKQGCkAq6XgjTNAFPhXx74mqMZq33ATizLgmGPRtfz848ykcR7z5T",
  "key9": "28KEDZD3KaWpxhQxwtwjwZQs5FRaH9dDUmqEXijciUSFX9M5i4Y1tfNMMqMXSdcKfzrkcgE7k1ghtKzy6rs5e3kD",
  "key10": "3YVwUTCcVFazwF8Us547RwJZCazEWzHfz9UFSiWizYBBtTYZ311CCk4Ti6o3pDhQjHNf56qKKJ4ngM1HXPmWMYXy",
  "key11": "3pUeFBKqRJnZ1jwdQsdXypCvsvarH4zuYo2AC397SuhuAq7yLt53nowQ9PQcu3R66pVwSUWiCA3ekHVUYyy2rZUg",
  "key12": "66P1Y69GrtR2rSjRem1KYmB38FVu2Ezc7yhyuWF933ZoxsQLjqk94RSXMgqNtHqbFaoCUxcgJxELTHhjNn8SGMyk",
  "key13": "3zhPn6GKAGVfRAkemmv8v3ab2AJPPudkz38VLTfN6tyEpqWEqVEAC5PDXUYkHiTz4E99CVVeWynBddMJV1QG6pAr",
  "key14": "4FipeY4WLqvVP1akNPuY85uA2JSqK6eAVSiQ8JYdDYPmAMTUGW6X7uMDRbLYRVzs6UBEH7RcasreK96fUtXcVpd3",
  "key15": "4wKrSCGVdDq3b2Q7geVENivmeUYtjBtikG1vN4VcjQCBmbVK89rxuZkWWwQQJk2cUQB7Pk7rrfLoWMuKDxmyVuE3",
  "key16": "3HRPrZkfZs9qkKyWMmdyApbWYacXRjAtvueTVXpVa6ftEyu36bHFhrLTXGbbzZAmHDHQpr5GTPUaUrtFB7HuYVsW",
  "key17": "4VHUFhW3FaTUEufNpNCuPszxtKTcNAB7LpYLRDFQyRFd7dH7ReTzEwArbZm4US1TfdxaaVMQaD5UoXMjx9mUkN5R",
  "key18": "2PtcYEGgULKANLDpejsYHvzNTWw86etZZTga5bNW4rJmq6Q9Q3fL7nKHxiPDYAfSJeTfYQyp5tHRYMqPadUZ5AUB",
  "key19": "48ZW8MoF7y37nvNPpG3Y39iDtjs4UE1K9L7GoQmAYTUTWRy934BKhTHh1yiqjRVgNFMkWB3ReWM1r16n5mgHoptQ",
  "key20": "3dzzLQchECnaRzi9EPj4sQyDDLc2A21B79shWM6oWCQbrcvmq25RKCkJfbJcEvWshQJxLJBvZzQQntQUtQhSrPUT",
  "key21": "5Uw3MD3fgrGXUUUhT8N1aqh6jVoJWWv541DgBE2HayDee7cZFVX2nttveddLJE65BnrPuHBXgBQjzsLZY3tF5atR",
  "key22": "4GcNzc79cM1Cgw8jQRz835y7HSpz3B3nzr5smkxhHhSapxgYM8w9dGZUU7ecknWPbGADoqxQprhrMo9ZNTGqAooj",
  "key23": "3Lb8SBwagc3McPGY5WFRPvVuNNSXGLqtyThW85QQ4TKd6ZSiQcEBiN2j7yZr72ChcybfuBwL8afEzByhJNdSS5JM",
  "key24": "4GyGZQEAHgg2YB53aDdmQPUJpkBXhiYRewX8E7vi6GEzygc3TuTUU5jVXYe4qqhGspchPFDH34n7QsQNWXib1cjj",
  "key25": "4wSvn8NLYQjXvpv6urs4Z7ELM7nxYfcnaUXUp6N4XNLtj6FLqFciKetcyP3TTnXEJ3jSwYDShpYji6hmwCYgh47V",
  "key26": "N3uWKWec679NV85CkZ4wcqgVhVwKBxN5nwdyaj8ADtK58roGQjj7pwqaWmMpJ7NGfzFaUrYKUFkTyQDHnKHbBC1",
  "key27": "ZXTWHSBAxT8fZeDrMPV65nw1h6o5Wyj6V2HuS461TysWwJLT3fJxMv9gywGd1bPD6XRmDLTRid1MDAGYJGZcZh3"
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
