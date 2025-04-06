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
    "31jGT6zf16FJakSLWGkBoxTKtvjxRfTa6rHyDB4LAVbkmYQaR4wvhDdtQoVd2zXN3LvN3HxoyUgFVoxU7dMfbUGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bGatMqZBK2rAVZ51SYDNRxQ2njGzgBBndNhE3gu31iVg3BRbbUfKcZgBMWBDixz6bQBvu1RbsGw3qNAere9bB65",
  "key1": "k1Az7sjTLUTNC1tgRGjygDxQoUeqyEm8snfwFdEtj9hXcrgkmCaqHgrAZPQpJrbWBkyX4Hk747Ckc2drvFukNZd",
  "key2": "5fEnNvDkzqhauo3AuGyFErSN6MdPmcJJeVgRcLUJghwzJ2YV67YQTNxyCnTxNbBkbZNEVNUHrzgRJVzHw8Az8Ygu",
  "key3": "5x36BuTcx8o6BED93EP3Kq9yPwUyXJw3YMTFN9K5yPvJMQGu4a8WUSvMDU8uYa3EawYqLXGzQEB4QtVuMJZCGaQs",
  "key4": "5WCE2Z3E4NnsoZktteoBhMj1LDudghfbnt85wNRFJuXaw49QCFo536dE1kvDpBg41oDc2WBxrgphJAcoqpvaon1z",
  "key5": "5x2uV3p78P1oXLJZC1xpZG2bpg2HtG5wjuuTtNNhLfaJzEs5wJvrvSVw2ideLF2EjvAPM7oerNZQkCMo9vLQqiNv",
  "key6": "TdyFrrJkUZeSH8PToonJPhQ6fggcG7Su3ygRpWACobc7GWLeZ7SScrwaMvCMSBbH4tbXDd9XMC8T9ch3tm9kxEC",
  "key7": "62hqu8ApLaZDTt4mG6s3tVpRU3NvZKDLVhZNgnSxmef7SgRJ5iH9o5u99djBGoBeTAbzKq8n63f4ohcfztSkajmb",
  "key8": "dyAVxuaQJ5uCPo4aMpcUA7BRuM8ee6vdcJJtX7Q6ieCuX4T89XbVDom91GCXvXPQArYR47rn44Fc7kCJVQZhBfZ",
  "key9": "3AhAMGfqpyWyTdCAGoE7fSoW9te2o47b4kJEoSL5uoGc5jrTjJ28gnyzgKMLknqgzEmESfLbAaf9UBsd5oj6dLxn",
  "key10": "5XMFtfHpjVwFuu59BvWRTz1jJvFxnHmX9hxKyJ7eN8mQqNC7n4e9CFvnzRaZLRdn6sFJJxvmLRgYvEiuKqcXnAHQ",
  "key11": "g3Dntc1BQVeHuzdas98JRWQqo26cbKurrbLHtQ1LrR4qtHJEM7QmNa7hEafvKLevzc1k3TiF3t2PPbqx8mfu5kx",
  "key12": "2ukfgHCc2yixJ28MnzDYW4u79YpwHJCogx3PaRJPhAhgSP9fnkqaqz1XkbKiCgGg6zrK2upUDBUpUCcR6dt6gVRs",
  "key13": "4GqppwtchGADknHoab7dMX4veBQN7jM4CSXkLuvzfyMvzTDCUyumocLA9LDN8ep8g15n8YbzqHk4PTs2hCxFJuq7",
  "key14": "5TizQWdtcVLsbZxz9hjHSpjc1Er24DCiW6RCnfSwnUfNnPuAkR3UHtgM1r4asH7evzEFVyh6q5SW2CFQNLRwGzsY",
  "key15": "5SA74mKDGiH9NT52xbn7j5y8f1wx8N2g4UGpCLDNs2ytzFWJoJkzWNeM6Nwsas3BVYmfjSokZ2fMLmpHwf9KxLwx",
  "key16": "5dQnGBFZx87RaWPhAZ9XacpcuvrraB1RztWKJPZgULWA2tiDADj4W7oRtZpD8WZK7uiK3WHmczYpXVdLZqojb3eS",
  "key17": "5wpuR4GHUXijDZq5BT7J3wAC8tyq8M1R5o39nLjW24rgZPXiRwuaq31kYwbVcCK4Lc8ZmtR8ZpnkNc7GqQyKRKde",
  "key18": "3QoFZbHxG78bwuikHhbuPaCcp3AfwA2AsrN4pi8CLrj63JWpN3JMQXBuXREn5Xd1u2s1z6tZGqN6czv36ADtQuZ9",
  "key19": "5o31rbWXQjj17oE4zAQG1q1dg1nSYyRuckhKm16sHVmoyquEJ9eHvUET5QanHyJHamQsY9UPPmmZQewAP74khwox",
  "key20": "fqmwfkrWzAyAB76kRvmfmNeYsvsqNrkGX1Ap16BGc57WALLkYrwTMNxtS83tiZRWsR8VnDbguUUCeT7KD6mSXjB",
  "key21": "64NZrGxh61GveYKsfomA7edaxvXd2yn7kfem8i7pkMQM6DGS23APLnSEn9LNMyvzY1bYPSLLG6JmUc4UmyecyrcY",
  "key22": "5KPGHniLmMXE1eHNeBXMwkEDd2vF7PbBPvtdkD8Mb4c8GRoXHXZ8aqeVJWnzFATprQnG1p5n8CVsjwvn8kMTqGdV",
  "key23": "2VmoELBe7ozi3heQx6f18yHeqTFVkSD6yUQMqYqJ9uFsXydGXefG8LFCcF11VeGtmA4Ba2zdSB8PcXjJod4Aeoya",
  "key24": "2FJiHU1oDrUqucKrgw9WFVsahyiNExeaQkBkjFKQsvr6Ji253CDNhdMcFdPyAz1FVbMGKUofyA7XFqkChygSafpV",
  "key25": "66jQNaggCGfkdMhJzL4QwMhpJomSNDBkvrqysv9uh5NUx4wA59cQnKg2La4ymJ4L78d12eWCDRUZgRr8hBcz5tDq",
  "key26": "55pfnB7SobQT9k74Hz2xXDT9YFLSMPMhHMSzJ38TpHtFZ8FE9EehoAErFVQ7wDFxt1TxY5e3ZH8nK4TCCVYkoW56",
  "key27": "2vjwYhdnejfBaY8m9C5DkMXunZQQNv6gb74jxx9ZigRv7TwBRJaeVzSy2PDFgpsyJmoz4DcoWDswhEmR8tyVeAtR",
  "key28": "48H4njjWVe8EbH5wYxAbWXm4i38E2NeWVz7jhPZ5PHcQT5nzHypRY7nyisCczgTyEhXANZSBfdjeHfQuk4EDep5L",
  "key29": "5M9dnVdAFuQ6ModYFbhM3Hz6s9141iFVncqSK25DTK6WYwAzwaVR6aptaohSbG5SNDQimgRfB4EYr6Ej37hPP2Fb",
  "key30": "5uA9oRLD8MJQQRdM5VDwefhpD7kAAYoTdk4f6fot5fMg4FvPm9pdJK5LHYh51hqDzWtM44ZwokhDUvvyFokiVAQ2",
  "key31": "wvpbwG2NEvzUfhbcBpP2Ezf68ZswkjhCGfMcbidisfM4HqB2sAQfvTvcEw4fWnY7i9jX19HSE2GuX4KU7V5PSXr",
  "key32": "2Nj8mZQw49A9Kns1BsMwvneyrENxynEK1ozLM2pR1mx9UPxm7XPY4viqHDCVAjQxG3ruW8yyDJQ26FHDTeF1YA6j",
  "key33": "25c4MQ1s9MuqjKHUuMUkk8TMmTnL3BGST2TCXhvWjng16EtMTkcPnv36xQvzEJ9i2mzH96pbYNrmQJRi3dicGLCx",
  "key34": "2cccg93nGZRusG7CxA4WL9VXd5aZTx1aikxTvQSdZ3a2UhjMwGgVCWXGVAk1bN5e1uitw7UdNCn2PQuq9tFevE8g",
  "key35": "3YWM2X55dAZrhJULNSLqrKPTxDy5AfAzrcLRaTcfHBksAuhwgoGcXbg61uhiJwLH2CAzS5Gase94Z6efTZDEsiCv"
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
