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
    "4wULcLNMyJULUAyKBKaGY4Tj3zxT4wEtENWmYowUTTTMU25HHqXE3Namp7Ck1jCraK3H2HK3TLCmBEc9Kpk9mxTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F83PpuUouwnBpfEn1zBDJKi77WZm9VvvoxVKKnuqic8rpdibGX7kfnUTHu241tQuKNVrufNg6Zb2Rf7KL8LaRSR",
  "key1": "43gEfRc5DbMpFuxv4VkUPp78SqytHaW6Zr77BQ6Uw7jgUmkCv1VUaPqt1iyQVN5S5B5jf4gMPgqThea7GvZCC1jT",
  "key2": "W5J9sy31B1GgQEWq3faaJ6pXfkKgemfDPzfmyZgyA1698dtrYLMVTrt8h3MjcvPLopH4KLMAapdWdjrHWT5U72H",
  "key3": "5cAfJeo3hKiDmXhfnSbRG1SpQ1V8dTdXAAFGL1FzTzZkFkHhqhbK4sVHeaE4chzcNAuxfVrufMpCo4DXuCtjzA5t",
  "key4": "3xkriE4yEv5HEMmRJHhUhdKsurcue1frshYSD8iRseBqyqr9DQF3xFJCqbQiqSj8FimBUHxh9k1LAKbM2KeqnHeW",
  "key5": "2M3akxNiyxpjoCBVBppYX8piGD6kkdpqocZ5pWSMGmWDkM3BGA2vYid9nMCvNjqCKgPM1GKFGqvzhykDKf3iCABU",
  "key6": "uMMfuXMqkFwjN8x8AXYyuXMJYMiUW6dMyZYfnNHtr2t4BkpxkWLNxLhkTfe39PRfHyA8Ev3j75NVHbsfaFxDb9e",
  "key7": "nCA8ZmrCuNHsRMnbPkzWoHPa9rnU6UesXLDY9FZUMRZ5xsPU6xjkgbux7i37m4EoSKszi5zNZMpMg3pUyGP3tyQ",
  "key8": "pXvQ48LbWkGJkAPQqjMtpNPbqcJe4u1ZkC9A1689mPAztpxnCnR7waUqz2qeoMa8LcmidTLo44S5jsWZKKFXdKV",
  "key9": "qKQb9t8cnMQFqW6NCRfikYqLag4WfhAmJhFK3Z2ghC5vjgCmBwMMSvukRuRihnfw5ZKRPtkcR46K534vDqhTPh9",
  "key10": "2j9oef8VgbZdjTnobCBHZ9i3SyY9FyUwTqSRBNNudeKnW4pYDVSLARZwX9qeZ7aE4qctVdnUcv1ZeT8PLYrh4Bmy",
  "key11": "znnzeTgK3fkdtTSf6ag8CbrF96wph8X1oQRyrLZPTvxFTTfgkcBJHjwqLBa4Y387Gqx8EaEX1X9afGpSuE4y5Nq",
  "key12": "2uL6hAreWSYsCg6W2fjD6EzuAPnV61ZUXZcEtFuzuiawpzRe5porM6d9roCwuQjqCahb6L87jyZGSTv9GtAKVpRD",
  "key13": "2cVY1zedZ4EKUAhVMj7zXbW7WCvnaEA8k7Nv9aUeJWMSFfhV3wffcLvwzSgHN12irqVBT2dx2UfM8phBPEM6u3KH",
  "key14": "4WaguHctiYttJWRDYNkdAGSwpoERxzVQbbrFXEwH5v97UPkosPuwWcCEoV1s7P5vXTaLqkSg3RafQExtV9VrcB9Y",
  "key15": "25MEMZzcfLyonaL2FtTBFuLfegU9vuSntm4VB3GfxSZcNXzBt1MqxsfPBty7yTtjSVA3LRuMuDEKvWAME7wmKurz",
  "key16": "437UmLyvuBU4WTt5GEuReRvEbqXe6ZjBvwWjdapcZHpFAgfq2McZT9azw2QE1SgVg8wsd749vT7rM9ZQMR8zojEd",
  "key17": "22RWL9vBvcKVEwbMK7GK5ZZcqK7MYot93xnp9cR3bTqRNEtZDwoqA8n1aEQTNf36heEa3VMSKPwSe2Cz2NKhinbR",
  "key18": "5nVQU5bhD4dP4XcoxthFDjEFzHVS4TAsSj4tqcVbYsYFnqV5YkUFvYvyRc5aoofYYYXgwWQoUhofDj7XHq4swB5z",
  "key19": "2CtDNSuakTSFPbz2LykvakcgVspAhKodnG9cp8jwrHBaPimFLXxF4vjXv4uKWSXkVYDZ8f8TTKM34WMyo6xErjjD",
  "key20": "UJBciCBYtuBaNY8TiRRSuRCvZDSinhbQJLxZhFVzCag441k4eQFm8thkXmvDwYpvSUokGT5kxGpKxGGnhWWnV4G",
  "key21": "5HAzT7EVJq3ybiFtzzoBrFUTeMAVFxHoWSHebghu256WfZD2NpweCFWvy5jGuXBpTWbMXZecwoPwdweZoLdys7ia",
  "key22": "5nsT68VrvQmSSYFKcWCewvA7TmrAUbvbgyyW2cQJdw5tScbRkpCSgoP5k6Dw2gNbqpai95A2w2fwtxFv8pJb12TC",
  "key23": "2r3b2mpxsPLMZ5pHgZRWQrjsVKT4pL9PdSsZq5QjkpcHLQ6Fk4ssJue7TdyoRAwcpbbYpdRDg9iU9FDFQjEyFy6Y",
  "key24": "2Ux4MxbmiwXB1rQzVRBZSraDobT3FkymPx2PzWwkbHXRDPWwrgTTgrVWg9f4efQwAUTStC8uYcE832z1uWup6g3i"
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
