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
    "3Jr2de1AgVe277jLTUGjzX5sBF7SmYo2U3zUnaqz6sLBDXujrNB7DD1R4fyA7VRYudZFnKAYJnuVzdK77T1DP4yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56ZMnRejLJkZX3jD8oGkMwzCCDvEEYymakvShVDvU4uFZ6QQhZs6g48hpRQF2HDyDfocMCM8cKJZ7wMG6zTQoTx5",
  "key1": "4eejnYVQGtMHBGpGq1s6sXYA8LNgnK3FBc6fc77FbSUrVUze4bLGRBRkB1gdmE1peNQ6Dfiqx5L2uUHqSMhPVqvv",
  "key2": "QL2a716jkFgbhi8VjHBdqSPyGrYZGVhwQyfAvMS3tYuHx2w14wavbcr4bowvqktiBywGxd3EJ2MDyxSx1huTDPk",
  "key3": "22Y2sm8dMZyVEesp9W1bUSmtCMUKZSxZM379rFa3RGpLC2QDQHc8Ykz9GhF7MFt8H2vRdCzcZ1s4izK3Xcay5njS",
  "key4": "1FVD3QFYso7NCtfjtYRMvRDUZTFuytWi5eE1mBSxzTkeYDy2fLyZMhPy6j1MRNj9yC1ktJWi11jimG4YwygaYp2",
  "key5": "3hp15B5wgXiYbwDGvQgW5zEE3FpmtToe7EXxmox8vmTZigvQg8kYyzhv8tWbryQbqMXu33zqmfBDPRDfGEFAUQhp",
  "key6": "527DzfkeXRCxJVq2pAZVcWV3BUNUgTPjAm1foBHtKYRSL2VP1XPnZ6r3r79vTshyLuDfL5grxiupRY6wioxNEzKa",
  "key7": "4bEUPbLvzYEujsnGX3nHvs28DYQtoqWRAn6A4SCukaFLAk4UTJfapXYrXt9aXwQaU6b4khyCwu7QnoqdkRcc8c6Z",
  "key8": "42WGoRYoYXg8LiRrJkjZM7ZgthpwVa9RCrBJcb2LwWGbjw9oC71wSCc7wKYUuPs7qn9xxwVBUE5TiA7tCBDbyPWo",
  "key9": "5VBZqNcKLaQvCDukPCTCBvpPy1hz3rBX3o9Ld9gxn1mg2fWw1EGFgcWoL6cAHogqgySMktmCrzBzJ5Uzi7i77Z3V",
  "key10": "2YjBKQEbdRiEnamE7Ydsrfon1Pa8YCicEiciSr7245DY9BQA4qT21CAujn9zaoZw1AMtKqJRBQmE4jA9VAZwJAZz",
  "key11": "U5SRZ1rGNs3EXUzAGNV7YetHKJmiSkQG1m3hRYfZs4u4TgQzm1rZqohA82JU8P7aS8NRsynyzQNEBvtN8kiczQk",
  "key12": "5EJngTK69Sd1nxnPj2XEBhs3Z9jLUokEwZYYdiZ5LAynzc7N4sFXAnFcpVebtVH8c5Ku7xAMbZWkKkTmCpxQBMfN",
  "key13": "2gwgQge2mHxKusD43X2W4VwnyL8pdDzXGesVdhRYq8b9aaw4sX26UPgXhJayQuP59dkxafnttxE937LqBxZC5Qhk",
  "key14": "Rj8vUxxL2mvwAmPi92PPHiAf8a34wT9tk5FXfxWFQZtAP5RDBuLkPpLjbuBSuxS6ydzjpooCXSoQ9Nm441DfonM",
  "key15": "44eQm695mnjMR3QqVn3xwfpiQLu43ikdGz9EGSuhhz6iMRock5YspRyFikRtbXetVV7v7XEpHxwwXWgxdQjtfgZH",
  "key16": "49cxjGkJ334EKx38RnjtdUdowRuwHYXAUHLqRX5XHaRg9zLdLtF9z8Ldz4HJHLwjhKZNUQvbLpyJVb7ZrJZVWUH7",
  "key17": "rP8kieZSLoKyB9UBTWQQn4UbGTUcjhqJwaL8Avnz366W67ikvcGTTsU5wzHYoZhQwjVDZYyBBaDqe3AR4edjWZo",
  "key18": "3HfycGiyRUTk3UyJQmr2Wh2x5Qjq98QwGNSi6eozZoDTpwbgxqMg1hKLZgboapuGveLv3SKMqNZ9LJp5FeKMV9Qm",
  "key19": "58PDq2scVWRqMYGp1PWvN2Mcz95xRntENiyReuifaKE3qKS9KkhfPPgXvTPU6zbdPaPt59VkvQ2bizJ8QsGhteB4",
  "key20": "2VFZzoYVMrbLSwqJCHHHb1gPcU1RvvdjqKKhR6a9sYj9oSptgYfqzz7gWcQCz2G7JjczmQXrT55YHo2PVphQo9Mt",
  "key21": "5z59c3ZTkjuoeLJQTR74vsb5sxxistoK5UbYFvkPpsd4tafMWe1gNFoDXSE1GRakBAZ7h1U6axVWiBg1e1w635YJ",
  "key22": "2gtk3JbcwRWPA7HqTed9EhNYTbiwE8NBdDgLPBF2RcdZyMnLfWHHZZTNBPi3CdtNumF55ZZWxsW9pyWeiyucXfK3",
  "key23": "2eRhyrUqkt8355FaLaBx4TmAjK1rsCxxsLeyqA4hVR2scWFQyUTFCd6EsCZLcXqQYhYy2gPGw19hG2rofxZP7FvB",
  "key24": "4WaqbDEioZL6bFcbLYWWD7EJveT2SJKo2FdyvT49d7fbTmHHQDWi11NAQXYi6ERkF4btHJEcvQwGYbCyUgsU37cd",
  "key25": "n749PioyHGhdqH2NwuUbE38znv6xWfgKroWEwxrJwQqj7v1yGjTjFGZyVMvnKAQs2vx7o9AsMPnpgXQNTsJX1ti",
  "key26": "5mCzDo2m3Ra9tPVgEgNNNsAwL57EMUhqRMyojzbQtcuY5wCsRh2YsnkqviZJeeVLQNWMrnAQTmTVDkNxBCQVUtHM",
  "key27": "54AM4hMQnZrwrRrSNNA5mJeSi3d8e21EBaini9SELo1LnToymYmWL2rur2hCeQX74kRieaLMznUA7fck4YUa5n5e"
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
