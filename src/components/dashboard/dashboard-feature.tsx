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
    "3xrvrJHxYP49bQCMQztQWk2hSS9yzRzkWuugA3ZFCkD5fVfi4JJ67Sy5bnEXXiXWk7rjztaGb82oaLTs7CjcZDxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMa5ounLv5xTi3SvaawdeYuJ8s5dTHAWM6S7h3tjehbZ8wBVZZLx3e747PFdFfCUKvvoYoMj2EEJRa4KugCSLm7",
  "key1": "yUEzhcDA3tXdTv1qCSiFDNL1UgpYyZZEU12UVjfc2htTwycZ7ZaTBhQqfYtAFLMXvRbwCW4ZeViiVdZygtbuQPW",
  "key2": "5fxtD9UBXth65ZDdfYgQFmuEVMFMbfZwVzFFACQhShc3CJhqsqv9C9dU79mJ15HvmjWh3937nmNvbPZ8JAhJx2sH",
  "key3": "DYJxcqTAGRGKz8STBhL68tnR9rNBnUbcaRedYPci8RD8RBBFUSUYnQW4f25q8maMHo5w1M7pZWZRRv36BJwxafd",
  "key4": "5CGDHKa8QyhLzVfdubXm4PygpQyX24iUuFSo8DUuLriLUmAci3P17ad2hQpJ9smQz9CMmwYMaEpriLMngj487D5F",
  "key5": "2NyzEwPqWYNvGFdoB4PgJMKQo4NLZx9uKZh78YCp3hj2uDGUNNKvSz3GLsEafXYsvzmvQkfwKuRUXWNAH4P1bNJx",
  "key6": "54aPJHuEtjsyYHSHxTFHfS125ABLezvAWcuQJzxdCRhwupoaogTwQc8zfhntxkhL2Hu9x544fSAZTXjdb3bZWdU3",
  "key7": "5fk5SJksZoRwRk4mmQ2AcHmZL9ws85rzD9oaK4mpJgEvYeaCW5jQhSkJaDJE6aNFfscMvJKhp2PuabzN2uR5hbzV",
  "key8": "26RS2GiES26Uz3CBxd3aqU9FgKtzZeys8H7t96CRR4nzhY9sa9HGo1BFHsN1aUX3gAHfCHo3BZZ9jZZGEPeHUMCZ",
  "key9": "4qdCphNotT3CWQT3XH4eXVdzCUm3oEcbgHPdokT2naaY7FbRTyJbFUnJxcp7ZRkGmXHze5taRBvgqdEH1AxP5eef",
  "key10": "5JvQpRbgAUNPPkpmeNZ5fApjZmXBF8Bk7ADLLbLSK42RTE6TqAbKJwJ84swegH7gQbo1pfLWUK1ak1AnARegemQN",
  "key11": "42bHvUzKn1i9uKJ2ptbCbWTdSxm8Kq3y4eVYxS4RRYeBgkVPm6KUNqBSTJzXKWJgdXsf6xotD6QjXDdCsYqqj7D2",
  "key12": "aDqCbB3QXyf4T2M2AbNzy7cTXAm5HE3tj5QK4vV1qcCtRgwwNLnUvj686Fdfod8NkNei7DKYLjRUoLYsGJzj2qS",
  "key13": "HYjyr6Uqs9yub5whUJftmju7toQ6uUTCg5fP2qbnosdZ1XZBZrXxXJ2ei7chQvJ3U6badQKzegqfpTfnRrxE8HL",
  "key14": "3Km3fS1RKVuwbDLRU4VwmyEndc2pzxNuDSWtx3m5vYt94K74Ngmrd9JeNE5uVTMmqncpijiKvVRgzm6Kov9YM83C",
  "key15": "2T2HG3jXuiwJLzRkfrQRCb8ny6MQ1xR7UaxUsKtSipVzsPcCzdTUX75Z83oAXkdkJKNgXEqxFwd5fabKZsvQNPv9",
  "key16": "2dE25FEPhweFbQVrvtM9fiwLioebHTkdABpPFpyqGepKiagLknXcXKDJ5LiMEKRFr52q2DzGxB8PRh5czf9gvaUo",
  "key17": "2PfkGEWUsQms6JSTWnBi4LFvA6TT3xMx9WcdwYyeov14XyaANMVfVdgpttYxVKPr6zgTThU7CraLjGjh4Exwqcdt",
  "key18": "28v3T6TRVM9hwu2LG2eg4bsJa91yKZFZnx6MYvNt7Vaz8fWwWrQBG2HUyJit4wzgxgGmty9qRqmRt8y536UU9kBo",
  "key19": "2TtDcfZ74bauZkdsKdFk27Y83vTzwci7YA7h7JjyvbvQkjpmXyyGQgPXFkwyeeARbyuoi59Wayq261LM5cdo8NVx",
  "key20": "2Y14GChPDRkYqqjZBhAwBXmRx6TkWb3sRPePLKvK2ZE2sod79XvPXxuW7udYUwMKWrwZKcE1ynxR2CreG2nGjiQw",
  "key21": "4EPjdjp8JNGaFSNg55tibq7zuvFchKLBqereZaNiX1ZV9JRLqmAzt5kkBbuX7LVD6n76LNXTb2Qdbse2GTZZeRKL",
  "key22": "1otKqtJWXC3mWpfasSuHbqZFRvUem31FT71vMMKRnugnaqFPMxkqNzrF3fJcFeJwak775YQyuPPZSqjhJMuWb6K",
  "key23": "3cVgAF6H1z4vNuNayZwTCgcnhc8DBekXqN4JRRr9oqZuj66pXN5eCuw6gbDQbgxCa7U3vce6bTbWEi1MAcfkJJKw",
  "key24": "tFaii5Fj1x9JjFVyWr23nFXYcuSdk3mwTuvZoBh3mF3uLcoX2X9FS8gZ4r7VDLmt26UJqu1j7Vm5vfhnPtvg1cD",
  "key25": "5Gmygq3CafBGHL8iKxdymryGUagaxv8tFAkMRP7DfmacAictL3ZEtRwtqfCQ4TixfdcK5zyi5GLKW65Kdoz1yyTV",
  "key26": "24f18NLRPTZXFigpfr16tvbkryVhui79neYFmoAaUcpyU8bWUvnhwyJWx6p7W5Rv65dgiARcA2RrtaBq17PeUfTQ",
  "key27": "3ZsPFLbN6DpKrWaVGKmBQNAtczdkvp6YQ1ZW2BkCLjD71tDxJphF575vnzFkJkxHCZKEU4ubakA9qbaKCksHrtdb",
  "key28": "BBAfAc7vZjcEBHfmfKs7w9BNnTRZyYMQheFDcEqWeSNvB3tT5BRww9iUYTMFS7pDfGKQnXajYig72RFyVhXFUMV",
  "key29": "9rHhE2aqzFKkbs5RayXfPcvLDLueJPLjrwYdQDDNLwtGYB4MWHDSNYPf2NnM4q41QgN7BTvJ8wP51h1XEGa4ygD",
  "key30": "4DFwb6chgbLDvAp5zNDFdwHG6B1435pZq67RBJ1ZxG7V1BZxFhFeM8Q7y8JPo2fzxxjRoJQCCjAq7RoLD5cJUS8Z",
  "key31": "ozvYMacCXaz3h4gLPDmiM97rZx8oDt2TjaPiFURfWh56wkNsKee34bUHuke4xv31HiA4B4DfeyKqnmvz5SftREJ",
  "key32": "5oLryeMVxYrXjqNAEikAPNALGVYJ1oWZxPbSzKga4Zrs2AB5pWEv8rf9kWRcYTzUtG7MgBT62vakXVxyyHKBH3EW",
  "key33": "Qt379Me9Az5cdHUkdR9wZYHw8ziLKmXvb5wVfNtPMtrPwJFsaCdExqxMa9CptDd3ARoGAgrYYmxfQDDdA6UWzDm",
  "key34": "2qfZAcFtwufRonm6G74XvSqimj7AGEGgKGhLy7n8LNNoVEad2nsDdVPdeppj73BbTmvCah4FN97MMptpm7XE5AW4",
  "key35": "56hf13H1uemeocJmWYdaGoo2smhYuboqCr9hR3WR7xcbdjLUkzD9RTrcpFJUoxqR9G13zRcgKd7vu7T1KN1GRQVZ",
  "key36": "pnMNVGbV7942kmBFYKzdmioMipCWL3dQtVDctmWf8mvvE8doQt1DS8PvisXQGJokPWTNb6qQKXnSRxFyiT7F4Ja",
  "key37": "2oa2QwRjkNyBLEA2PSSmQohpfsi8iREu1MmLX6AhZVLovccNXGxzNt5gTw8EitqRTqpjgvEsPDWJmKWP2JQz8SbK",
  "key38": "VFu9ZMEmiJcnb567zVgvjp9UsbsLAw6rtmX9cYcMxcumSWBjcSFDqEQNSjHc9YdK5s11dWuxPboNa7AxCvhD5U4",
  "key39": "2XW3ULt9S4gDAiUNKwmboAZddY6fVVkPMk1Ugd9uvTqquiTHXEFTCCgdpq1MkwCagxzW8US1ikJBFLhnGp4tooBB",
  "key40": "3vFMAQKCC3AB53KV9AqkCaiJBHmkJMrA6ne6zfUnC9gndvXtMQ4YDkhLcvtDQEK6Z2Ca3HPUApHYk9VpiJo2e9Hf"
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
