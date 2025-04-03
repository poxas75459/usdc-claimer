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
    "4fodGLRsWLZ4YVwxrozE6GB4UADAJGJWgkE6yK6DM2kVqPFCMrvP2XY7TJzGTfpQWYqsBkedt9JtCKLSaVUnF53b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pa23fPW2Awskx3AfeBXw4tyPNdoXB3M1Rdk4KGD12tPBwGFpBrwBUFpJvUuvokB92wgbfsbnJtG146GyyNytwK8",
  "key1": "5p3AjDk4pzK1djQmUmdoKPXy9MFaPCG4xkDAKSFGL1sbNu2C75SxSxkVwDWw3sxFt6FxCNxdMnuPpXqkNs7aNFk9",
  "key2": "4VjxW6NFYw2oMcrM8z2PDeU3t6ciuEXBgad5ATZv7cXWei5nryhv4ohmcrJMwDQDkGXvsbdAfXFgoAGjkLWjFw5q",
  "key3": "32VjrsTMtxUdutSwSubscWJxN31H2aUwTcaUKyJin93RwD8BgU8rnHHxZfMfvKXNXfTJpBfEh7tAdr56aSFKcpbN",
  "key4": "3vfcjCLY2MChrdon4jCRKC4W3XEBEshDY7PR3mK2WhKnjeJ6UBpXxMJ5H841vQCnbL4i4isYTAdoi2kUz9JQTSks",
  "key5": "4PuMsHQ2DoywZboNMk8voUAG13qbLJfeaG5jSNZjhwNGYgC7ff464Hewz4pWCoEDXsZ6BdMFfMn6VS14Gu6pEGJ6",
  "key6": "4mYHfZVbx6JkpnqgupCRCCzC6LU4mzCYeAeZGiZTpdJVeBQSRUXmmAyqatpUUEwf98mPJE2KRqth4NEzJ2Km1q2F",
  "key7": "5rpozdikU2fQz4Q3WYQPGYwZVyzgH23L1UhZL4KTZ66KHEfXRGJaew39yiJE3Ya4UMKeHx6TKxtqfai7z6Ba8ox7",
  "key8": "2MaQYnDGrhsA9bEs87FDp2NCj6jEoCT6PphxFyuWVd1h5s7MYcRRwbJiBQfe2WFk1EKvHYwowNM84hRaJBuwpJEg",
  "key9": "2LbGoBgr7qxQ2CPv4DPdUCTa2ht9NiNePwAwtvRNz2eZ1dxBAU9eT852A5bM57g5MYde5gG7rP7pn6o5sQjh5GS7",
  "key10": "2MPg14UCkjFjb3zJGaX9iAgb6ZNGxBzkFnyVbD6kA7B17xK7hdcnTA71oEFCS4aoEWDQaDRcFLKiEX9VugV4DUQY",
  "key11": "2mUGZpwuYEQLMGc4y7wpcSC7obRL5BgUZ2JbD87Jn36DpQyMo1XVoY9eumbwG8HY8iVJU6tMXdAH7moShoNcV13b",
  "key12": "5Dhoc2Y8GcjC3kuE2kkqR51sfYpDBanEtNbGLfVqGvf27Pv9KbegLGV7mYgNcJiHM9nVA4F9oKxNLuNjAQ1RddfG",
  "key13": "nu1YD1Dii6erwGKRA38EtxoFF8fDuEmAGXjgBZhQVBCtDMhk2mBFkssWqJTjD4CdhWvjw9DjcTCRaXBtMwLzxxA",
  "key14": "3b9WWM7ef1UCxgT6kyU6EifRFGnNQPGoH8jxxq87WcQTypsHh2xKFhkzCqgEcXvj4zSJJ79rN6iGjzGKX3mxHrCq",
  "key15": "5FivSEPQDQDz3gq9isZcZ6ez4jCrN9by9T9NTfyQeDJMo7DT1TedLuVkX72uSRqZeSB66o45NCPvXrFwQeFzfqHQ",
  "key16": "5zJVjJBuTj4g6n76GiYMX6tyv5DywvGr7i5KCWEg6Vs6szjgwbW6Lagc7ZZeUhr1m6rRiKGRDSPPwK3ebhWwVxAb",
  "key17": "5D66JiWwnUjr5a8brgw7SNFUhBSmtkt2CqJMwepBgCu66ECxwCFysXT2cLaFP8T5PwErDwsEi8HX2YpTEQ2RXPg",
  "key18": "5RQicz3sowHkTj4Cvi8chf6FtFqrxG4rGpvhANeDyrGjX4dPsrGtHAsikPsw7ZQCthpVkU7DD7d2JXDvR1EtvZ6o",
  "key19": "3DZwnGfhAoKHPztnPU9Tn2hG9Xd19NKdMBqeKUsY827bg4GSpNKWzo7faZbXY7GtztqdTQDEkKHUqw2CYD2c5Jr7",
  "key20": "3iEEZPW3W1x7UX7kuzzpijfuYdFKzjeSUBvCdeR9ADXmBTqFn72dvqCHj2RyNGAfRxVh7krS2VH5FFtkQD6Qqfp",
  "key21": "3VxJbpGYD9H7mbtYrYhx5uf47MMedpwnd9Msthdx4VjCHdVW56HLq2pZfhqN3dFY9uR9HdQhiELqbbToiCRvkgfa",
  "key22": "2NiK5qiwEBdhFvqRNZiDg2oU2PZPcCgm5HqQPv1z8gp8NvAMaZJ7Ljq3bE6nq4J91o7LXD9BPvs9Caqpw1jsgafm",
  "key23": "2Zk6GDZTb5JkEjq8Co3hiiscVRjWF3y74EkdDfojRrQymmheKHLtWA69qz7SimEnRzg8M2bzAQJw18rtgzNkBgQ2",
  "key24": "3Z4nrZrDWt3ybCwYGsgPdVj1CwQGSCb1PUEfm44kMj3ESQqTHVacurT7z9uY6zSyeWM1nrBch1d1NUSM7qiY7kbv",
  "key25": "oHzrNfZSB2fXzfP7ufZffPka27mEsxdVgyHkjNiuMC681fjzpNoPxfa7ryJKgxkXv2NwG4xN9jGBuTuQgF386x9",
  "key26": "4DPVTeccQvxTu1p4DBoMeN3gsfv1fh3aTdoLAZruH8fwEUAuAghcWsuCHuniBKrB2ack8Yj2qJsdja3kHJvmQBGr",
  "key27": "4bZJQje9UuAcx7e35UBGcFe9D5BD2qg7ZpqzAvyLRSXhepXV8cgGUwB1RdQTmBCJ3Xhnz53gwq3HNy8X1UyueXMS",
  "key28": "Rw5kV3KBi4Xq67xeWTupnDfRuudnKbuSbsoAZm65v1ddqyPcHFidKKMYdDRY5T8247sJj56SQoiRQLsKVB8nZdx"
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
