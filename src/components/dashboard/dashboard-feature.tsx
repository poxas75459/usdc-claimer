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
    "4NVMWTSfJMucsWMMdaRir4fA3hFp72TZ1HXb86UEpdbF2z3n5tbiSkcGzN7LsH2HLhEHKTQtzTXpDhbaG97YTZjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qk4h4aHHkLsYhJfLje5mfThinivo7Ju5vKvT21mzGfGWiV2doYZLby83jSX8tBRUvsn1ApxP8vJk2a8M4WfrFf7",
  "key1": "5NG9EZaCLfo1FnukLSPbGpQkLHfYg8VWGvDUwxxLsxshAKGzzjUQEJiAYvr3X4Bed4r2fkBtD9AW3SKWiXsCSpYJ",
  "key2": "5crq1GguLt6MMBDAyUg3wGVhDuZEMWXi7UNmQ5aSRjLFNtemY4et7NQMXUBqWEt4Gbz6ERQtgSKhxURqCpE4pyL4",
  "key3": "3UEF9wNE822577R13ZdagSWMZmmjcYJrnhPVVnyFZgJeFjn5Y6yduo4HshKi7YPcd6MwDBeotNz3kwJK86fEPj4U",
  "key4": "5VAtXCmcJdibMcQjsA5gnQx7o5iFbWje41VA9U9KGzeGCZufHS4Y3o39ZrQxSBoQUHWXmF1mW8Vu6GHQ6XyG1BW8",
  "key5": "2gmy2CaDncB4qmDjyr2XqBqRc2PT5xrvbajuBRGQeQyjRcJ6dtuPMJSwmGYZSD7YSANvvwc3FwRuTtoET5itQkTS",
  "key6": "49AvLZdK62iijijGBEiVBGafP4cg5F8v6Kc9Zz6Yk9vHzVYeMtHoQ5yoQ8LsArA8VzDk7Bonb3hDv3kYWQDoF15E",
  "key7": "3oGXm1Ep6FELv3vpg2AL1dVxD5r67FLG89D3yTgJHrDpBwHBTiYgJLPhrTnrX6XpVVyZ3MqfrWUVXBJj5Cpf8JnW",
  "key8": "5qUpdnLSfw8DNZCB9wXnKqn6CU2MsQhUVuqE6hQ3jgnJEJtCaM7keTguETv7385gLc71mqa5UxhjJnUtz6H1ckcJ",
  "key9": "62wzhgyC9vF3jwpzdwd9Rd82fWzVFEujiHr8Cef5DjYf99RmbaDJVFGpo1xH68u2xYTAyKBNKAKCYQ6Ke3PUQYQQ",
  "key10": "3esaBKTHX5jVphWmdTe4s5iXxL3pxKmym6K1twZqQo4XJSjpMyd2AzbmC8azcwoZcYjkVngvz58WRJCm91NWd1Gw",
  "key11": "TijihzG2Vko5pQYv8oqPBXBiFSJKMkkbsrVWmZZzbvqoCtkkVq8Eh51Cp19XyeZbDdNZ8i6L5YUxsSvwvrnkTLH",
  "key12": "3vxUKBgLPpZpYTCGVKxNFNiDKb4r6vVATnJyaDQjUuviHT2j4sG4pwpedZjP9V9tcAd8wTmQ2QyyZ95SCrZvejBS",
  "key13": "44Mfjrjroa9Y64LmTW5qgVXcDhmbwRqo6Xm8PPoh3wyaw419KPfsY6qifaAp45GJ6rAfxJbJUwaxgDxW2MDDZoKj",
  "key14": "4LfeifVUQvnUrWoPdJ7eGB1CKnqqWkQoVmEt2WtseSgwxKQXmH5b1ck3B61rNP3VyA4okvrpYcc24RbySUeLhu9A",
  "key15": "61TAeUViCK2T8qiw1kMSbBdpBTyd7iGhWy1t228L5u75BVfqmnf8GU6KCzKaLzScCHuhFhSE3GMVxhjNSC2cUi6p",
  "key16": "5xrbQvH6vmNafWVdEHPtRka8yAUCZsopmnYLZrEBrNaMgANMpP12fMxKzJp7rTFzWFiGzjDfjNA9BUrqaPAjYfux",
  "key17": "4AAMBscP7b4sAKFERp4FQ7ggNPw6BKrsW1EX4JKERFQ3rBMJ5Qisuscnipxw5fkaJcPuDyAyuNyeJrh4tVG4yeBA",
  "key18": "2fsyKV2UuDjqyZu79kzNk22Ag9csfSYyXu4hcetd6VzCTwaQfCDE7DY9THn8NyEwxUGmyKRuX35fPJcm8mGP5hCG",
  "key19": "XdEFohYmWzUF6GQus7PcqbHcfGEMfoNPuPhDZELDejtzS1kognuThRGXGndtGkw3KD2LY1h6dBSgR87yRXhePBT",
  "key20": "4SrEknesQd5LXpcsP1Nmhes3rAvvrXEevT9Mx2wp2hmoXBFctsHDWJgdw2gZDX7k9SEs5M7Rm77dPwJWdRK1QKcG",
  "key21": "2iyv714JfTiqxkbkYC3YzYagZGCWFUpfv5UEFquaeD6svtYsV8GDDULovzMK87c5rZQoMWt3L89TD4dvuzgBvtob",
  "key22": "2YfjbEFxkTv8yJ2jwqHw2qmX6KUjT9cktQ8g2EVxz7fcusBogwvVwgdN5z9rCMgQJfZjCZCHZzVx2Anpo9UHqx5m",
  "key23": "k25G6WQ1tvioQgQmN36e21Cx6WmXttwHKhVQwCLXy4eX7LQi8ZtHcfAAVHyViNZWfd2JZVqkpPzPoXt78FUTGUp",
  "key24": "3N95EecTyX5xSV4GJfC11Prq51xkQ3XyvA9pJgufC79UmLryNXHGx4pCgtCjMtRDTjTVBwkGJja5h9ev5Ym4BR7n",
  "key25": "21PaA8quFCh9M4A4NLQk2Uw93s7Ce9LuUdnhohqj2Gn8UqLZ7ttaZEExAV3KwLMt4E4J7Pu132oyvZ163D4ne3yz",
  "key26": "5ZAZHt8sujnPMZoPBSoo2vaQ8QQazxMbZJVBdhonvBjnJFJLWnA9T6jStBKEVWF3jaSCr8gxasCkwcDkVT5xzziX",
  "key27": "3TUBA1unMbHcB4Yih7tA7iSAwKdwiHeqxNifbGPBn17EzPGdbzvdBakxvVe1JkfGsZcRzx24GEUzQftXoJf8Qq7g",
  "key28": "2QtQwTjSyJFJg5bL9csTD9PPmSkCUdb1sJq49b9EUA4vPnceJiwdDV6k4uhhrjxy3Znr2SgT3KFpBbFqLhsWBnJ9",
  "key29": "5oKLHjv5o9ZNggbLqSK3LTMai9fEfUbLLAS5HUDKcn9K2hWpTrmttfyqBzCDUAaqB9Pj5LWKC89tDoKD14katNyz",
  "key30": "2Wrjd6FGAzdYDzhW74s7Z8Pj7VZBcExZNEkJXVxK2iTE9Tc4Z7bLcGZpVgJ2PyeWRNiC3bt4fatpD1ZhQSmhomtT",
  "key31": "4ruBTqSW6WJPhjh4wh9ZtkoJVMCEFWqyBdrYkbrDb66BeNFFtiWoPYNt4uWAJbDZrghnomvU62NzGUQEpCttdvaW",
  "key32": "4So9CtM6YbpZFxRwZact8CEacb9yKkAdmFraPUku48nbQqf58s9u7GQ7nUhfYzQT92UWa2ZoTH7GyXZqrrKwvM7",
  "key33": "3bUziAcDwm5zr6wEnnop6NKsFaag2xQxXtUFhGxMEY7fZLzK4o5d3JHYLYy586ruH17j43L7JjdKCGM67EoNZbcr",
  "key34": "4nVWrzbpaHbBSDgKJdRGu5Zgs57L325dFtFiygoSgeKP1imtfEAPBcVLUAtYsffYr5DiL1tvUiP8j2QeE4TmXHTH",
  "key35": "owYfBzZi7EZtZEBBkmJjGRppArp6QCmA27rCnT6fhrEnXJjaSyWirsfsgLku156iXqd99wtGXJY6yEQsJzrVCBS",
  "key36": "5RADdEsx3NwuoUs4ZUoGEswQ7tKh736Dup1eAxF6U7HLxh9NTBq2cJa75mJYRs5FaBdbgcuVcRsLRs91KUJZc5sc",
  "key37": "EccyHPAnav5cmzsJmUBKdChLqLAk7hTeLvLgzp8YjvVC5We83RZ5mkqGsUMCJJ8Ggwn7wuC7aGL91rFStKLZkoc",
  "key38": "5XrQWVEM1wkar5qGEshsG3g3ho2o9GKB8PFNdc5mJQELoMxCbpmMf5dqosd7hTNNkEtaqMZvTbpZqUWhi5w51F7z",
  "key39": "5PeEKSnBk8M9PLjj6rhiY28mFtbYTfUrXHYqvUuQrqiP91itFzsEP3NcC74LguMLAHA2gVEvjCd9EvvNpJAKhUq7",
  "key40": "PLRB9tW9fY4g5EuYmVR11J5tWH74kzDXY1aWPCheZbNYCSPUrXd8SAY7BB2nsQqeuSMAe4am4dxf9xFBuaKe5KK",
  "key41": "5ZNam5XiE7UTu4PGgnwbpuZ3ftbz9QcDZMHLC9xh3hxqbPHB2guyDKanzBAqSfEsFUbSWa4YbFuFD6f9roSqRZyd"
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
