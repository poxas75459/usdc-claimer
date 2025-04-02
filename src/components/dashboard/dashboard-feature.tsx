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
    "255Uw5zqTkwspSpkXk22jAyun517jDeQydXR1C5oqsJpVGFR9ZdkzmEjBhVFpiFiTv3WpuYh7eNauJ7WJWbD9EuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5amYdGHpxMRkbXnBPqvgavvG7XWMgQNdkFhnuRBG3gbKVxH3eVAfNUjwHJ22MjZcnZjKnGWV47iPhQC7UbFmg6PY",
  "key1": "2UP7aahggcHGEQFd2XzEJ1VbJfn5MVDbWd4x4Kkx8oZfNa3FUoBYJcJv2hu2UExszHBvCm3m2htmkmGNMWPNaBDE",
  "key2": "45i6KeBx7t18KN9Fb6Q4WLh9PiV44BJqb8tiPb8u5n3jpH76mQv6s9tNyLGzoNZhhegeM6p6i7dVxmw9TZUNHanw",
  "key3": "5usy3fVkhXyy3TbBBTH2Bj9uRSSuNfTfGpR8pqVmhewbEbf3LNvZpkuwBLP9AhQ6pgafbEugX1YYukrFiJB3xQtw",
  "key4": "43SCSLWLQKDFatZPtMiatPmz4G68wgoXpiQWvR1Cc6573TrHqbm4Y4mEh1wdTtTbCFhgVd1yyNeCgedMaHnGZpJd",
  "key5": "4q1Cct9rNvoUSJVm4v1F9yCAASYPqUxQdq1XWJamLvyrrU2wHN2jKSqyK8hB4ghrApzapZVjDkRzWYoW4sijCqjs",
  "key6": "4HxapiRTfAyBeAaymNbQNRLXh6sVwtwBHzdqXNDv7ALDPQKzkM3DTpKa4RRXNhiAtaBnkqsqQgVPR3JLDzk5c9ad",
  "key7": "C1rSM3Ey6P4cBqkd4PeWnL8cdnBiiUxJTRWpxTRiHApNp8mW9BN9AzvjUqjE5JuQFAajqmd2QxeQfLY1LXhVTCG",
  "key8": "5RNURzndrAksUeFcKgBt8R7qrmbJwCTAYQve7Fn6zjA6VcuzdVLgBsoFa3k6WnceKXaQZufTzSGnBRsE5d3icDJX",
  "key9": "5cD5DSa66y5fniQnnq3611mELjV73t8HgAjxFagMuESUnyAgzCGkNiQxhZtr9tCABGtTJmNc2RWfhR3Jds4kX6mq",
  "key10": "28vPV6HzPikhhZ9e2zqGLbpEnAWiAtLsv7hxea5VpjyZH2C5o6JFmWssWRX1M9BJEERwShRSbEiwmMtbTv27izxf",
  "key11": "2YVzxt1scP3ynsiqnmW86fLTton9VF3HLV9xvdw2zgjUE2tpWxHKUMPjU2gTgKtFicbwdSmRgWzo9PwxeUUR2QDs",
  "key12": "2wBT1uHkZ2JsUPWfyKnkDiWUfpjunNdtgmJX2Va3bkhK9KrTNXiWT3Rdz98YGfoMkpmtexeeDBG5kLMwiNV2pQ2R",
  "key13": "3qdC4EPfYawb9e7dbatHTwdrSBqQoT2gkQFgBv8Gmx6gKMsk5NpcoQvb2U3Wkn3jfKu43Fe7suYYBRtzqpxwUpsu",
  "key14": "qCnAf9kQpMtWcqZfDZ7QiNHn1zCU4LaH7RcG7sQRgwVoRHsvpvSdLAzY6iYPfdzDcVBrpa2U4anSyF4mZ2PTTji",
  "key15": "2nJdcw6XHNMHkJVfJwhf3LxeEynRcfxFWrWxw63FzS5MJ4v4XquFisEpvLvZMzC18bSEi6wfsgPC8GCJiSrEthkC",
  "key16": "3RbhtfZTTyoNE9XpiyKhCiKFBX8JBQwq2wnKBPvdombe58rwYPp91XdNS2gnzGNSiDMk6gRLdPPg6qAQ5NzpyMXq",
  "key17": "26zAtYaSCD6b8nkwYtC7ePFQCvmV9y4Jmh36422xQ2etbkBG1vuWj7Woij1HBEMub3MRo625D9eEmHoGQBFjxYMa",
  "key18": "Yg6pgqWCDkYLf21M9sXbRSSH1GHNwEdBgjrgbkpA6t6N9kwRDga3tkQkmbHeiL6eopPXDuVALtrV1RDTQXgA4M6",
  "key19": "5y6dSrBVo3sRz6cwjg9Y4ChAkeY9yQB8yLAcig2XtFU6b3UpEArjndMPCEebL8ekivvRb12VSGMewdsrrkZbRDBw",
  "key20": "5WreMx74R54L4azFGcwUP8kaeo3TMShBp9m1CCeZ8F91K3xFsCSFb9YVV2Ga6mLXUyFyPjotgcVjyqLBHkDaVMd7",
  "key21": "2LxzL6GAMngk7nmzDJswdvC84HVxw9djoc6CotKZLY88Z2bAgHLBNiACUAoitjjL8oFKBbgRsyykwqWpLEFYXLWf",
  "key22": "aBaLDmBQpa6BrUf5U9sq13ncEg3iaF3gqdZ6Zs8UtHSfq5WR1XVMXpDJzoJj7E34kfo7ZyzZbvZdchTkTqhX4pK",
  "key23": "3GddLs8psHcjcKBVasAfxxfZu8Y38k98AvNBsij18KstBobaDZBTy36CxvS6AdcKDd9CPMKmbRRrusNHaUuiENez",
  "key24": "4vFNNgnxppRiR2umWU2AG9a76gosjCYyh4d2QCWdfyG2hpBQ5YfMAFCA7nDnCMHNAmAQX4k6i6MXyyCBUETZ1f4S",
  "key25": "4B5aKygQ4L39pnQWirS1Ykd3cd6u6gv3dFcvh7GHNnKg8i7zhP3V3LJ4CoL6rD16sw3gh6ps8WK41Bq1wwuWL11c",
  "key26": "D7hQ1LGF2bZny7yiKf6QBqz1jSfpMSaYdzBAsGktK5MPQuuDmJ7fMm3BtoKo46N5gW8CCdt42M84WPj4qJpRaB2",
  "key27": "2ujTxkpapzz8QYLC7s7UTUuYseLtmKDJRRb7MuWJJsg9Zw4QMqWsrMWnFVMjDmmWQpKDUcoToJDyAnZ45CrmBzw7",
  "key28": "64QBX35SWKUvh2Rrp3AJkYTnzUd54vmABsvzVeFaR9xAEjo5yPH7C4KcJabUr6dFcaR7Yne41onxLF9fzzKibXdd",
  "key29": "GLe9GPT7UBLqyp2dEkjC9mmzEyUm8CQawYwYgxXvCD3EQKtzTbY9BkJFT4P3XQ4m7xd9DPwxNiFncgGb5x3v2op",
  "key30": "4krtCS2TzXEE2ZMshSTzNCk2t3KbSA9BJJgvk2uP2D3C8gFDS5CH8eJEr3SegBgDpDDpWkKaB3VuNVn4RAmZLjBw",
  "key31": "4hS8T82Quutu5QMAjMHJ7p1oXM5t6HpDRXom2qYrTpscvc1kZAZLixA7n5TjvgwoMhh1ZbdPddt11JZARDsNw8iF",
  "key32": "3UJMmh6y8TZRwZWunkYe3YmQk8XjwnUmponMEuJBCrgUwv9jUDMovvymMEru8qiVXY4qBpZnrR5pJMUfDquLt4cZ",
  "key33": "5ZxraCE99xCKnB3anQ17dQSGXV63asxW16WdR9y71qyridSa2iKeuqTXwkF8P1yC7Rn4hGcCMFkX9BGfcThUUfWS",
  "key34": "Hy6eU3RLUhYg1r27hzcH33fCpHvdggxLuMfiegx2VQCKvo3k2CU1ViVVgn8tgYADQ9aj8W2HNgSYWeZy64KQqro",
  "key35": "ieyw5aiFWYUq6Cy75iQhoyTFmcWyqPFh3ZcYnzgbGsXcy5KxfwctGHGR9gTABNQeyZFVyeGnBdEetJ2TapVgUgU",
  "key36": "5K7ACDwhzackAPoeharQAQydnB7AUefUeph53KkuEbdq4sBQppmU9JMuUQiyAG6C4Ugq484ZZpfHitFEHt9unr9B",
  "key37": "2irzcggt6hCM69YNtmHDRnxuf2AqX1yJA5R5J9w6C1CQaCc9YyAbHQ1Z3ij3yAx5GY8gDT5FEQ9rhohCUB7dy5S",
  "key38": "dhbJYKruFe3F75t7an6EH6fNpbmAXSWa78hjRzmj1sURidntq7Bb3DV1RahVuvoYGwm3rPhiXadrZjqGV6U6dJ1",
  "key39": "5aYjis4D81HxTRCLN6BXQs8261YMSF4HpeJWgTBYpG8NfRBnSsXjFUvKwuQDjk4uJyDQRqHZTE3MnwGJwDcC7M8u",
  "key40": "3AgP4uXhCRvqH6CSMmQFseFFqnU7YktN1PHgedgTyzf8W334FGJsJoU4FfjZwfHT319Rv5gubd34cRW6dquTEBn1",
  "key41": "2kvs4LE4W5yV6FNMPA5rcMkT9gneVfNhsqcN9SkrqASvfRLQpxzEuHxhniQEcMvP3znnZqdcoVfHX7VzFWh8n7a2",
  "key42": "PjHGzZKWboM7QgNHZqR8MgmzZ4MmXhc5HcTkGUH8WYUa5mXVckDvVbiprNu89zUzynPPVb9abQi2oHKE8QmZ3Ez",
  "key43": "17u48Gw5DaJDeaPatgtg2jgq9Ddh9Wb4bbFpHPQh48zFTFQLdEeTQA8dfG478hxxqqwjXsQeEHx6Upw2ADCaqNX",
  "key44": "DvFRwVFPtMoeVbC8uTngbVzMzMdRmetUdTP9dbzkfNyGsR7DReVHk8h8GaoZ7BEa9BzSavnJaY9aUorBXzfzKt1"
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
