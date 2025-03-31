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
    "5xpVqcD4zL1tDS4BDwAgYPo7WCjhFa1b9AJLnrNBgH3Vtz6sTMxvXYr36efr72AVBiu3iy6GjMN55zQSgfkzqWDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48TGqmoFwizLUFCCDD73S65hKHREnmhPxcdBzSDQimmLaWWfNh5JuBxafNAn5ggxrDRz7jqQefXptfRD8PW7kj76",
  "key1": "4iPn9g6PFtjWjbN1pJAmMb7rcV8NS4VbEU4aZkkh3zUrFYG9gmX9eAEtv8V9ykF2iDhTM9CS1QSuGtkybR3VRW6Q",
  "key2": "2wJ25YQb1CCN73Jakh7Lm9wcmvtQ33Da6QZwFRMT4sfUz4pnXc7sDcgh4gq3G9UCVwYhktLJXmPuZPEQnBb3R1Wz",
  "key3": "2483kQRXjygQNFEx3gJenZJYDbGf4j5JtNYTnXKyHgtw1N5uaADy2koPvMCHMMt7JbNWwgbUeYyMu79FEiRWoQ5S",
  "key4": "pbmM73CX1HCeQWY6Ram5T3VF2T9mw4hypuogPEbw5SxJr5uVbQTBDFdNns7dCVrqZxJdzN7M7B7k3rHDPgcfDSb",
  "key5": "2wkrLf2qfJyayDSJrTXn2GFKizDRaps7UrRaUv6nS14XMfAEhQFsGHeXf5YLrWmJkx3qkV7TmS7UPNsyDn23GCzX",
  "key6": "3XR3VErtCnYf1ByKsHBroaZ6LkPBmRr3QhLBXNMJMuSLzAf1Tox7fb69SnfsDAbQwohELHjnDSyX5912EfYyvish",
  "key7": "5ZdMWPtjcuW1kYDuJJiBV9ZLkzwuqV4ux5BG154etAFqKph5PVNnyhsm47EuoALf8EeromM23ji5VHRAviWuBryV",
  "key8": "3r31e5rD5EYAR3KkEFfai228LdZkn4zkHREezagsAvUj3SxmPKzCjYfdwWVMuM3qG12SZVmtrqTvfCyQuHAQJ4S9",
  "key9": "5wLmwEE9Spzc8Ph1F5e1569XoxVnAAQX18JjTtZ9FLGCZhe6gu2Pe8NaJN8SAMEngJxjMbHwpXjJpFZUTC3VfhB7",
  "key10": "aJFABTqpnJdj3JUVKGmZLk29hAFo5Y2zLx2QWdUjP2ufyq4Shyw84u2YbMj1obNNKAbzYiUy4oXe8gw6BsSpqfm",
  "key11": "3E91RJqvytJmysqzBstfvVPJKgJd8sV2pMt24MACmsA9sNXJcppWyvEnN2hBTUYZn2hVpZWkLg3damunYrtq2WhT",
  "key12": "21AfyEpxmR2acGTtNgBeJ8XX9vGhbKsHEcGjS6r8CqPvaFPuu2BUbwqMLa7dvd6pTK7KRiJ2hAGB84PX2gExfaKV",
  "key13": "2WsCoKFHt2e43GJSjFFNnrBuaQaNthcSzbcznpYRpSjehTd41u7Hqq62ZjbQ3zT94YN4rVJRXx1MJK3AnAz3ypWH",
  "key14": "2gJwpVS6ztv7FA3bWDzXCx42kvYyUu2Qxe9Vx7EY2kPXQPgDLs6oYoHUtak4vN8dg7q8RNcvCwE6zAhH5uayuRNV",
  "key15": "5MNz9FzDDZMy48tXB4ZSyZwWPN9BVEkDLrX2ZW5QkRovoRJ93zoHHcD6dG7cEg5dtCCrzRZy5jP73WW4NTHr5xqW",
  "key16": "4S9Eg4n9fU4u2tGeDK2NSv8PKGzZtduPYoCnv34iHqhLMuBjF7NqQZUpwNEFBjiDUUD3RAHyTtLGCLwmiLzpUkqc",
  "key17": "3FWWZo5P9W8MmD1XdxoVSu5j6faWBVtia8ZEjBNNeYz9uWu1CGJ3bP3EUAe7p3hx53FuKrKdtoS1Guf3A1cuHfLs",
  "key18": "4zScuLYMiJMZHZiC9EDTEhRGGLeDUFkCJjJazyxCh78HPnbDRis1y3aYtBns3njhxtvAd2sJNC9WfKjjBxZCfqGz",
  "key19": "3vZ8KvK3N78BGfWL6xNmDYcgz5Nxczp2UnEGQ4LdFbzeEJrm6dVmiPZeBtjHVchbDbFtif3Ay1mTGqBnQqgU3at3",
  "key20": "5fG4vwnjw3Vbb8zq8vYVBkhUZm28bCoKAtKVgFC1G9HZHNKLiaZqxfaiup6kKpdMhzTzXCLY7vTgAKkmVRQXfsRP",
  "key21": "TW9MDkQGueMpqCQ5CEQLziiN55Ckr176rsWvBw77wEx2CNrQo13fi42Mwfw6ETSvqTjEdtimMfSw52yAHJwhXwA",
  "key22": "4R88ap1gdBFbFm159HYjzYY9MZAmDkKj3AQNR3ryymwcmNUFWA6XmMu9T1MYkgsQioj4yYQvaK1DkBVubyySUuij",
  "key23": "3CchS3SWCP3Rd1jBPC9DsT7CX9FwVW6tmAnTfMpFRTguPpyoxUHhNkwKGrbzFBLswt4S4faeGGtsqTHwmH7ipRSv",
  "key24": "2RADuq9BhYMtqD7Zf2EmUkabH4jfmAW8zy2iVRFVyu4vPyxhfcrcj9UgNF5V3QDswYZpQ9qJ4okvsbmB7dwtc1tS",
  "key25": "5rVxwwCLswUYtucwPofPSFw9dLFkmQVUK6CQc9cH2hZNMWeaa91ezfa5q1HX1ThpcCMxQYn2WkiLXdog9Lc2LVLa",
  "key26": "59C88HLQv6exBbwqCj7obdviDT4yt4doUE6QjpoM66ZBpg1GGYTM3MfhDcVho87BaS4D3ZFBhM1ZMXh26yVP37Bs",
  "key27": "5X8PmToqoeEC8ffbnN1dxvjAFkxXU9SHZn1QAKU8p7hQTkDJyCShbiBXxeassaCk5XD8Z8NDJ6PhomvHh5Eird5K",
  "key28": "vSZuibV4c9G9puKpxE9rgNjA7Q37gdyeCmSjB3rr1GgYYJwvcbqadmWykTMzWvjy7SmChgrEhdNwPK9fsgKUFj9",
  "key29": "4QUYwCRvPFUwAB8dXcsgoWnYsaNgsyPvGhKi6ZgGb96ErXSDnVq3sSSb8mqBRedDFsnKnZGPPG2ajJmtogsMNju6",
  "key30": "2PjGYfK2L9s7fSDZRozKyDizdZLwDL1fNqJfiov8YrXnx6RMMEDF62ob2eEBs6eTPEcvY7QctHP4QJPAcaisvzFS",
  "key31": "rvVSh5eSSUE7igXJjty3JS4NsYtssv5SkrHRdXJ9WVKKLunYHimU6kY4HWbaABC7wf4MDV8SsnDUVwsFE9qVSa5",
  "key32": "4AGEdwiwJrx8PVMJGshBpvMqRoBk7akr4ZcSuHH5tbtL2DNpo5RBZ2c5gVfyMPRyVjtjoPBa2Q4uz5J6YHCWd1uS",
  "key33": "5H4bzdCuG3kSCPh3VHzGTuA2nBRF1HsBQeq9YCgCRJyBJGLMGEJqi9NHZ7apqKuhjb5xKt6Xo5dU81m8nAstvEUv",
  "key34": "2RRmZcB7ZkFjCZ4Darv3BNTod76jh8aTSQuxNGnhksagYhGLKKuuvHiCfB7WqqfH5e4RsySKtoGEqpoSVHgnJ6iV",
  "key35": "64kVQUoSoaCfBujJhy7GQWqcrjSu9ggiWJBgd73aF4iiNsUGdP6WvKPNvPofFVGquS1FkrpqYwuMEU9oFnyMjqip",
  "key36": "VbowFHw7vJqSaS6VGx45R3TxygfPQUbNLF83s7gDUeZs7LDoY9x5Fc7htWMZgKmq2KottHdAF6aUPPrd5dWjezh",
  "key37": "A15niujeTNx9dY2BQrFc8gFjsRMmspYZNJEnpYBvn9cGiCu1WGX6xNZgp7EzjyTn4QgEBNpUHD8hisMBdspqWTD",
  "key38": "2Ftd19Tka7fCTWfbDRjssCM81M2TvzYR85M1KNoMRamE2vN1SNevqnRfVUvgEAAKmWuwMjhYrUHe3jkgUxrsNQ7s",
  "key39": "3m5YAb8gqMsqMEoAbSE6zSsczNkCsWzaYjJvKnvmdmuJusF3kRia1qAgFdcw8Zxk2eRb37gmtJbTKdT9Ea89eZoc",
  "key40": "37Jbe2zSo8UFFU1NZ73y2ihYDanBHJZT3UuSJiwGEcJ7bSRHdkpnhUZoaKHNQ9gLUxJuh2Sqyc3pM77qEkeCMPiL",
  "key41": "2iYDYz9khR4tqx1yE7hAoy5dBqwbRbFQMMWFcKvYMrTsTWhrgw8qkH4kh8jsNifWpRzNDLwpTegu4UWhBz8PYeze"
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
