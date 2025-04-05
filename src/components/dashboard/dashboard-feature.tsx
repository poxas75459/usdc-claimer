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
    "ZnKvG7VqLJCbrivCWGdcNRGxzoZeBYzNRP2nTtNkDEB4VX4r5aorZ5vrDsET5KASV5yVtRhyBoxL9KRg5uMCfsZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bd6MojkFNKHp3DBfPdtQ99YmEFQcMLXDHQPHpAnLkXrgEqFWtv6gh1jszcyR8rkwSNsahUjT3JczuvNKFNR3BUy",
  "key1": "D6aYGLwN9ZfvWpEsXdsvWD3zvEwYGZAxZ9iDFrqiqwEFa24EeaPStHeEPYXRTu8KX9qrhstQ81w9Ubv3LJntvio",
  "key2": "5D1o3eEUAaE1Gq25fuy7gLXfm3GvGFMgpQdrr9oJ9fhLut1t1HbJ9bj2WX7qarZYQ35GC5BayEFfwxXc8odsfgpc",
  "key3": "6Fb1QECmfiN7LUDo3NXwVbB53v37yCWQXXbXooHuQ2LtyFC3BmAReYJuv3Dy7VSGmkYADYiwiUQ5NWEbhhCsjEW",
  "key4": "5jkFJLMw4Y3SzScoosdZDtHSTpvRqQj7PhL4vHzKQaMjd4qSKYMfUdRy16JcrsNjbQHxyvqMLanLWBRAverN1zSs",
  "key5": "3mkKPgHjfRYgcvLfoScRREPSLUetzE8R4Wa6mGAau5f1uNc8kd9GYJGLc9M3frQUgMbrFhdeoz44tzztQfMFtiAF",
  "key6": "8smVFnDGscqAp4wct1at1KNbsMuPKKkLAxEBhcyYqnd5sZ42NB4i6e6yaZjk3NEintRCMk92G8KdwsDBA7r8K3V",
  "key7": "64S9StN4x4SoonJTXp91chvqM6W63iZUp4wWH3YWB1vTtt4JsaCBmB3BH2C2eqvXPBeUZhFgYyHJDAdcSuY5Tbes",
  "key8": "CPRmpgC1MPVKwy8mgS98HpDvKauX9hxeZbqA6TyXTVjTkkVw9PJ3zPCPpbMZNPWZvprDd5WwuoLH1q2UkKvTnaw",
  "key9": "5bLfS6wNzjFDtKX9773jz5CL9VWCk2UKkpVTw9Ds1Qy3Au64AckBrNhhornqpT9jbiL2CuGsFG7xVaVpETxCn86p",
  "key10": "3AUzZbK54dq27f7BkCq5pUwPDpt3ej8CPEreBif9gUJx255eFtEf8rygXLgZZsLC9Pi92dmxkrtBDKN6RhvkEdSJ",
  "key11": "2mGv3QedEYVgAQTZ35NK1XbibSnPTQMHvyGQzhtLZRE3kkpdp72PCLM4YKfMrccPA4ToJVS8Sc31wrH4AmNZJpQG",
  "key12": "65af4gdtJqdxiXAK6JUw163AnemZ16tS2kccR1uYqfCq5adVmPNoE1bad5MxvttKjTw9wkMZ6YHcLtULSymyVrMz",
  "key13": "4uvSj2gGpDjgpoNvPzmaL3PUHpXTr4ouhRDLHiphx98qQPB22waKJBfE7ehFXoBJCR5dMjoSUjfCJrptZjfMMVdR",
  "key14": "4yRJ2xsunoW8Nw7Thee45QJ1TwJpDJZjxJUiTKxjDS2E4GZrvgF4o55VEimayV3qan5gmppdjhmmNjYqSiF8nSFY",
  "key15": "2Z4n9yr8qMa5k2T2ZJWC54qqypqaMDB9etjMui67L2eKZ8gP6ZBFvjbVKfKstaqwVNHzgDKvymucVSaAeUH28icX",
  "key16": "4wwFTRYujuu6MxmPSNEPx91GtkRUU8MAeZnUeH5u25m2GtzPJqJxNZvrowaDXmfxQbq4eM4iNLXDb7e4p979DCWb",
  "key17": "4TDACAMRrW7EhJzXKyPkfLhesHAs9NroXa9RKSGQGMaGRRmxE7qpHWghp1yaSJPK7fN1cTBow64qpEoBSuiPUTxF",
  "key18": "5XGYkzA5wdH5mMgwpxYWhzMzNx1YkaCNC7n8p7XcgxTE8BLSnpSPQTtLErg8yoQPzVtvkutxPn5LsnMHst7KBwra",
  "key19": "3HWpW6B2tUz56RL7QzqHrFr5hAh3FgoVikj9PUot1j77thvtjZWYAAth2XnruEGqoeQ5kUePWnEjoN5GRbjRGSj",
  "key20": "2c7mdj9QgZ1vsitMRnCzSx3ivmjvHEDPpnQ7NUNyVapZnvLWk5yisz7uGadnZz8QCoKGM49e1nN9EoxV8GAALcSB",
  "key21": "FYiMrEqK6B52eVR9HVNsXmptB2D7qcrd1VidZNWiLnukKhoK8HfoG4RZZ8nba7wky8dLnyxdZyLFfEzCfeydSuE",
  "key22": "5EWGX43ndSYASQGQnRRjDppVmFHWM6sk5dEETRc8K5w7S7jmAne7enuxTktQ1nttNH39L3Hb1GGafCfgzpqXFdmw",
  "key23": "PUQP1Etmt6aRpJRhWcWsRWWqaXeZgk4fXbQ7zAPECqsQCJ6fMuXuK1Kfi9HwAQf8z6xqWQN1BjvZotN5vw9sHLp",
  "key24": "JAyuTyp6ayimu8ag5XVn63B7gtSLNy8RRJqxvbmwzK1DdnHJ3qqg5oTvT1NQtnaQXrthBkgGVzhYRQoHao2kxGH",
  "key25": "2Nqa9sVNfZH33LPQ4tERoMrQuRP7gR1nGUpDWNQSoXbfE3FwyNXKwu8MVarLjeUVSMCp1ZmkmRLcoYSgTtFYo9QD",
  "key26": "fnoppguVcV7RFV3wuEmRwdxxT6kxjxNmFUUXmqTS91d63vzdh12Zk5JkRJLXASR9isNtPq5Kq7iV8gDssRcuQmD",
  "key27": "35qiWrT9PvtaB9RwyqmxGchdZetd6a4r7zcJaz7tLHCPyP3u7FQSvXU31GXGN43XoJwmcJiwufbbL7q3uHTmdACT",
  "key28": "4GLiWoCs7GfXUtaqNYNphsR3AcfY34ScJhamydB7B1JoPWNPknLuueDvWEhvcfU1cXjJzzMhpLqKVJHdFhjexH9m",
  "key29": "4turhVqPssbz8kdnmFWCtZCp5iumcU8DbSwx5Z2Ac5iYYaGtrT9nZFMZoj3uhTdpjkcWXXPrFospbNciXwjdTc4y",
  "key30": "5kS4vF2FKZax7vnosstudyH1xbGxixhYCEBK4yrga6GPfuQgtTFDaR2wjfQcrw889653j49s4jec94v61JbnV18",
  "key31": "5DMWdR65Kyd9nGSWZ37b73ynw9psT8xYkvUNUWMwXvBmaKodRRVAH7htkeqDGZmLrroT5xyzN1Qyc8o9RTFMbLqs",
  "key32": "22iXZeSU1bTkZXLjV2kiRi4FU4szQ6yhkvGCLm21DYYVhafJrcbHNkpcb3vW9EsgXsZ22NnSqkDKbx2Pc9Zjy1TL",
  "key33": "4kDNEjrwksDpMunKJudzfhoH3SBtgQKBqboiwtdHrHJTyVqgNqGy1jiFZsBFr26otiEVJQ6NqZqcnvcdr11vAZsa",
  "key34": "5guhXJHmxNCLWEiYtzRrST81pjqMjR9TaxiaZst98AXEeejhjutK6qh4kqCCk2YPTgD9hJPujGtfEsFiFbsXRMn1",
  "key35": "wjvGq4R2kqTWWo7snBQDTxbQB1Zuxi5DyvW4ZFFzDHy3FJzzNGJ26yV4bDHz6ZJ74LD8XtqTx81hCypqyd2h6L7",
  "key36": "3uT3nxT7mwhx3qUCif3F5aSetKz6cd7czWnN3sw3Gqy3vovYpMMKWDqxMVVFGXyrCSV8Xhed75T77nbDqfaAA5V"
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
