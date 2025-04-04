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
    "2jiSUCUM3sJc2zugVcF9e3X3pxjW6id1uqp2A38NtoW8WhNNz7DCX9MqS6QHTFbA1mVVPaSxMFevJQvEt99uPhyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iL9qgnj8YZt3Rr66QVz6V6hqDECgjihidk33dKK8iF5rvQKfVxVTouMYjyedCtrDZRsXWrmJ3FZX4AfkdmPbUHU",
  "key1": "4vy2m2yKgw4ywt6Rzp566zKyFWyCtwCfTLBW5aJa1FThTHCAjNKyUxZSMZmAM9vEfSHYbuJwfQmp9PyUK4gkvdsC",
  "key2": "22bVUqNyzj6Rd12ikhg9YfCi7s7zZ8yyzqVaX1EK9eEja82vE8UadfQ77VsrD2YguVWr9SwAjFsmhTTYaKvffLG6",
  "key3": "5Aixf5fHo8CW1VasoRgs564xTeoLsNtdMxJfKGRtEwVTjRZJGed45H46HtzqDrduaX3cx3LL1JZJJBkHEJrsjrVK",
  "key4": "4NpZtpYMASw8FdiuDZih6nsqGArusaU84TxDdp3L9U111jgTmbsJkzX3x5xVpCYWTedXabepGGnfa949oKGE7tae",
  "key5": "42qWy5v5jy1tDJiQudqH9cVrXwybfM2tHNejSiV8ePsNVmZFhR2nPVmLWLPQsgtmsE3UJiH863xN8wAQX6wnBKTr",
  "key6": "36K1UhZyzGgfk6c3cd8rG6gKgcE1Mk98eVVyxBt95MGcciL1tq3oRLgaqv6AEvxdUi6EckUoYv5aHrCLAehMCpmp",
  "key7": "467wa46DALuPGLpemXAbG1WHUG1iiZzr6Wd7aZ4NajiJmsNDsH9K2SpVga5oFLHTQ6QDahGDrfb32czMet1CXHF2",
  "key8": "4WWQypDDdjhtZoZevFrhQaBsTvn1z2T8M1geJHwFCLzMe4oPrnDNKDR1fMHtgvr6VTCQpowpfc7tuLBPf3udJkGN",
  "key9": "3ya75c8CJzrWNf4Q2awM5B2EjnxLt9GM7H5sGc1pbK8jgPjobejRQYb1vvShveiGMhB9QG7xN7JJEHtG881pPVqo",
  "key10": "2P9XQ8tFR7W92kR7Z8tnaxZJwChdQnqe1AhBjJ15XKYZqsRsVe2r8YSnmfcTMtR5bGmbqhGAm56LFksmR6wwWU1i",
  "key11": "27FVfC4TK1Ynj7CywuRopEybduPpjp6YzJB8PNUdXFnk6nLq7QkuMaRpRpSa9tFqDoSgjUyMo2fmmJFddsAtvegG",
  "key12": "2vHQ1y4sG3CbGP2nXcNqQUzb6Qk3TCrAJPmSLnoMzqhFDkYFaTr9SbjAWc5pCEoQvWPoDYc3Cu8nTp6EpWiZtkik",
  "key13": "3bkMt8fAKGMeEAg9W9kZ6WSYEkuhtkNx8EH1nKbRuWp9HebXhJpLTQ5vJQ7Svat65dFnHziUTnQuxWNd8esUcydL",
  "key14": "mivStqTfQSmbYMLpQzLiaFAiQDMfC5fh7DjLytaVK6XV4LB9o9kTQW8PLearskfd7kj1nxeDX8fGeDhWHMF8Hsi",
  "key15": "14Az8dqr2BdLf5tZVmMuU4V9deBhkNGEEQc6bLdw57nbW5DJWA8VRP4YsdGBMtrY6H5GCmqmpqk1u2UdpLL1tXR",
  "key16": "5yDE5WDLJ8C8SRVHfYpuGYqxCnBCwd9x9eEf4KabAnNuu7TAsi99tVD6XxEY5dEjVh7PutgjJCYopn2HiCQsFEVQ",
  "key17": "3eipqN7dVY2fogiYRyJvfvcBCPGJN6ym6om3N3pMUR5QXgGFdGqy3RTLFKvqmGtPKMxjGFxgDxmSWo6Az5rhrXyA",
  "key18": "3PMFAjEnRzsjqmjy5qGGjh7mGwP9HXpdv6wb67JX9KpHnrnn8DV2BXcTHkRqHWvDVXbpqUFCpQChuvCb317dMssz",
  "key19": "42bha1kS7EKGjjkgHSAKssa4RSgBxYrjXzCM2AMvt1psSTQZqjkUzpGH9ue94Ej4WPumzmjNvvHry4zLNF1NFx8f",
  "key20": "3jLmffqdu99n2GWn7LuE8pb4FNnNa267FB6JgJmzrUQuXzkLHmq3dvotSbGHj89oz2ABjrSmHpS7vp31e4gQg6Hg",
  "key21": "3TrHv2Q3w6Q9K8Xr7DTNujSqxLuibFpTwFTtrQgsJN7PMQncF1ZanaDYQQmFDLmtsqzeiX7igunoBJsywEW1bxXv",
  "key22": "LWXtcLDm68M3hXxx2uyLZKvAPmeqFZnVzGxnHgehR9hv8Vz5VUkcUfxq65FfiUyTnHTc8YHFuKYfDbWuqYPsimU",
  "key23": "HKG4WmBvfk94qMe87CWP9R3kR8G86xz28yNXTLSLe5P29WDG2W4YtFLRZgVAVk2ZzjbyBtwvMLyMWDvpsnWWm7b",
  "key24": "655avHGLGiomi49Bzb1aUSccWCW6gVB7eZScbLFCYnEgUT4BFWP2ijnKQ1uom6c6PJ9kyrPBX2qBcbx8yn7Xt8HX",
  "key25": "oDVSRBpeVHbVXvt98zDKsXEKFMLizDtwJ4fchzGAyS8k2Zdf2vDKMtVpW48CHJCbjtyVu3wEP3maQ8aUcMBHZ6i",
  "key26": "4Ueekgjz8YJKWUUf2AwtvLpN5eQ6DTk32W8ZjewMMnK3iPyt6Me2SVERbVhtgK6ZG1c2Vk3f3HC7UALYevwcq4sN",
  "key27": "5cBaxoQ7tchPMfSeQMC45NGpK61n3GjH7CT6xqnRR91xKqp6FzFn8prBd3CVenE8yDPF91FJ13BWSuvtH2vYpfbX",
  "key28": "34WrbYa5c6sc5kCN924ZCvQ2q4544PMk7rs3deA9sR35zTy8ekVW8o2svFWsB5qa1Sc8m4coioBzPpPbr83mBgE8",
  "key29": "jV5dkgvomGCrkPZuwRRXzrcMhaFzHzeXtLiso7XCixY7Bm7MCC4C2NgztXNJdXTcvFCkm7y8XBiYcEM3enuy5cK",
  "key30": "4Qnu5eBxvAFhZUUoyC4ZRahz88258jymKZFhmt9LXYgQ28UDUExcypz9G2zBq7fxh9JhBNKF9i5n9AULMTbE9beP",
  "key31": "2sFvKxuYoVEFZmWoMcaxRbT1WRVtsBwuLUdhq5bMGkinu1gwK8eEpR1pdKFD2HkoaqFgM9eg9T1E2AUvs6NrAoff",
  "key32": "49kh8ijJrrqa9t7qm6W2y76zULeLJ2ZR1aFtCAvxgxSJoPBJoVwi19YvvKL8UBjLjpdUCgT1re3jMkWcTUiCZX1j",
  "key33": "4r37zaQUQ55HQ3HnxE6qNLTdDSbP7h3oYf5KzJerD15m4Wo6EvNTJzKM16PzGfzfnkY9Z1HwuR5LXkVtqpiotrT4",
  "key34": "46xfb6AYCGWyRadCmebio2NCkrYBhaPadT7inRJUmGH7zVzk14vLUdVXbA164S3KCD86LMn7wdZCiuHDkdVh5F1R",
  "key35": "oRrZ121voTyb8M7UivsWoSNhTTnt6PDY2Cn6djrzYe6TJZxzEbGwbbyBo2BkZm5QZULSKvvaeKotgrCbMJktKbF",
  "key36": "3uFf4x5hRUT9a53VNxRRqh6p3zGDR4UZj85R7fk8KUvjSsLwT3HpgtNpMrRt18s3RL5DEx9HMVon6x8Q5q1T8Tj6",
  "key37": "58r8r4yqhtMKZageivqjwRCHuD4kYGLXhdbdoZRiCYjYac8tAXtYc1oahxfYAi8gWHNt6UUsnNPYTGS47R1jrxS8",
  "key38": "4HaLqSEDt69Gprh4Ad61jFwdpe2L9rNBWWRpfBZQLjgSC4tHu7zD3HoufsKYm5nZNVpLX33QduuCPNsBLvUNXoGp",
  "key39": "2JcLYJMUAuivzjWxD4D84NfxQ2UnvbKxhrhd6mu66XQyG2oLjr3afv5MhGpFFwQoLNCDpAp67mrbwHTbK6tnN41N",
  "key40": "2njS1FvK8zALn3QnfoAvuyWEB9DMErF6Uh9RnRM9QnQWaXiG3UeZpoL9vQP7KkFuH3PcV4iVKxQRKivWE6CGtce1",
  "key41": "3o7u6kN7Jb1G8pXxk4TmzP3FCfDbVpDdPWFmfK9s25owszFWtDwEu7gBjRwn8hovKaik1J3puLBiLM1bKLrvWAVf",
  "key42": "2rxrgsz1ucqf7Nt9hbs8RNPAQmjK78tTxJASy484LTSM8umrnbHUMhn6UTXoKC6YN63aUfCs2jSWxqicb25gdARW",
  "key43": "4gegDtzSyUTwV4RWkvBaJriDL4yymwVhjSjrKjKiedyzgpPCJvEUNUt8RG2m6xdpkobb6vhGUPDKiN2cYk2dFKq",
  "key44": "5Nxbtt5P71djr3hZUdhYPNJ4Ub1j5XBhAAmy8d2rHVFx3iiS8EysiKCmmd1Ay9gbM4dgSVkFf5cgL491JfQ3uUCT",
  "key45": "49kNCpLKQL9TRLJu8ur9VoAmiuotFzT9sCbyq3bXcHG5a91p7hLY9KGqLeBvJPppVERQrC6picD79FZNV7eogifX",
  "key46": "4qBiFFpcMQgUGL4Tz5mhEEUt8QSJ7unTKozjgj6yR9VgTVEX9gNdVpN7XCMmGCu3jeokVwiKWnZbLMDPQV6t6ebt"
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
