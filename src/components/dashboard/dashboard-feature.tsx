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
    "4dny3CiRY7pj2gaVLMCzZh6wg9ByuVVAGcLzYBSf6YXKk49HfA5EEupP3gVh9CQAz27yJuE6VYkiPPgamGrb4URu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dfusVsCRcHsVbmkHYVetQsJcEGZB7rXC1H4fMHvQnqeYZv67QKFLx8neYrQVBzdP1b7UXqgVMGc7kq8TXyGvKc2",
  "key1": "4aMbGqXco5rbMM1FKMLyqunrXnBJD25uPZunXt6J8hVkE6omcVFJZZvZpDaXEKRNcyCA9Jm1bqyZUYBJj6b2uaGs",
  "key2": "4LwEXBVZTL7wAdzvSNMcKffm1vu3XRoTdm6T4HhYG3y7RyvzqXZDSc3o3mj4ywVhS19GS1GBKSWQsKNpxYMN3B6",
  "key3": "4PBdwqV8MNLCeuABMVUCoszVTknBkrdN4k13jFszVzy56RifPBdqoZ3e5z3VJsxeVRzvZf5FdexUpUR9qnjEJ1Nu",
  "key4": "54sVa1tPcH1oMT5qRhgydkTv4tuMqjafkeBSmvCJgCie7Cy996yS8MTNFiR6V1G2mnKvX1T36eNLyiZWiMdsejQ4",
  "key5": "3kWxgyT1jcKmoFxsq2cZJn2x8k2pu8wHMon8HFS5vJGLaac4RnHHioXx5ERsEiBALjHCCqVEZ9AupjwB2WpjbJSz",
  "key6": "cvAMCP6cfbVt61wC3gLSvy1Y8Ug6S9m8a1VxZij36ZzyXZHYicbL1G5GWoGtoXA8LQXv2ArYkSciWP7GHpMBYN2",
  "key7": "3YpbjykdJ1wnkz1YkMpSWVcYcher2ZYTN39atKSnAfm34zoSHHHiCWUXmq9acQZgJxw6h5kGkSj3RY42Pb7xe62y",
  "key8": "2etGs9wK4rBtwnQNjM8ZNa5GWRKVq2MExpkdZ9x536YFz4N7A2PyTdujxuuX95JJeji1TZ1wn4SrTmKRebaQ4LhV",
  "key9": "2UztkQMzYUK4cr5XBikXU5GvhLeKq7kiCbaUWRz6j6yS8gtDRfc5wtD6B3vGxaR4viQJ6C4HYdPM7eaJiRDuVtAZ",
  "key10": "3MNBAfokhhJ7aqZRU3ukisjYswcbCcuLwiC1T8FsVtPAXGLTNSxvVKZ7g9m3968iTWM1mxTv3JkzitHomhY5j5vt",
  "key11": "4nvEf6cRzJZMGNNsNWdouwJ3dQPhtjhdjNVpaNRtVUA4Jn2fkPFmiNwhsaS5Z5wXKF8ayKMX4qacXhAZ5tKdj1tK",
  "key12": "28yNjYDCCwKWKFQVAxEXrzXn3wtfjUNGRPTjwJDY1x3nJegTAbQQHWS2wbnj943C42Jy7DVYEJ9f2MLU2Q8rYvP3",
  "key13": "2Vdyqbt68K6yzPm6brCLPSvrJZd1D6dggxE3Anf4F49bJVVpuJXBaWvFHxWVaEdRvLSUxvBLgMaXpSwbNE9kSHrW",
  "key14": "5vDdNgPeqmDmiKsdkFL2w1yQ1AJzEN2PGtKmFhVHj2LhRVX2n3h5aGz1XLwkxrd5Hxv3mCpFAVnMiJuU6Hs3cNFG",
  "key15": "ZDQ4kn6obEcbjX6zh7v458WYBybZ411wEeq6ABUchnfRSwFDBEpj7MuymbqmYbDwDpDW52kXNnxjPRURyvyyYFi",
  "key16": "oStBTx14LRiyNJbugiRKxvyYYYc5Drf4xb3gUpM7o8LCyi5eeUzKW6c78Vb8hC4m5N9TQ9YhrTcckznYvrkbCL9",
  "key17": "3Bhnd88JvQPHWdBj4RMdnpuTjkgcP9Ctsi1hHErnDrZWDzKd3bxFEPp5AaYQ7Mz77b3nAjJrFyJ6kush8o4nW7iw",
  "key18": "5aBeXsEhYgihUy8EbRKedFzT3p4NtQPdxGxpK8RS6pZmAYKFMjeCt14xBdeFTazUXJrpMMeYwk5cGRkwyWp5KMED",
  "key19": "4RSXcrbXU6jVCpn3RwqZmyYBybJkRPZ1fKSyvy8ts9FRhhiQzGydhBVAimATuBHadRqF2dV4NQYzGLiap3qXk5PP",
  "key20": "rrv5qKcYwZgPGA6vqyBafXp3Qyij3B76XH45XS6UkcdUVAE9UUECkbSaRKKuWhXQyeEfJz5SY2bteY9PY3Y27wr",
  "key21": "5dhRy7P53wVvSzKhTLMn5q4RbTug59ZKhaqWmGRvxAmTtSwH7caeonTfQCpAcaPCjj74Kr67ExmNfwxXWbzRTTsz",
  "key22": "2AngSaV4FbDPzbNzzjdUXQeneUjaUE5mMioQdYBNz8rkRbz4TYRnisRDfaFiZxpLHpMVKLaEieokCo5Mxut3n2dK",
  "key23": "64PSjrwQhZnCsUGz6KzffZds2bxsBL6cG5gUsg3d8qzHXNtfoibrYZDr5WBFuTJboZCHijWSFhbEhC4CET5FTWE5",
  "key24": "5BEJ1SCYhEKtHzRkTiW7dr3fXcAPVt4ttEtGbttbSyqw7uFFuvwHXHp4CBGbghyn3RrtGxRMYbhu8AUA98oh6CT5",
  "key25": "3an1kAtY5N38CS4YVo16Hj46wv85dqt7vRLr6zg8GcysX6REpPdUfFxBAckDGhyd5guBAbKaKYkxh4uN6Cd6ew8W",
  "key26": "Jj1Sua6AVPv48odVjyCSR9Cv4gTHR5dzqhDUWkFvTTpzp6mqYoNpYeeJh4EKwUYMoaivguDXmH6PksbDdL21NDD",
  "key27": "2iWq4Xxm5kuWy3JCTKG7puJNPcVvW6LmmDkqLQ2hQ5Fv8thXv9DmD4KbUXcK8mrvRsozEQrmE5dy1yHvvFW7Q4z6",
  "key28": "5zrY1DRFB8prVgzmSb1zFK33d459To7m27RjmmTXfcacLum49m2Ye4tCEGzsVi7y1KxTit4evj9AQE1LPe5N7Wf2",
  "key29": "ZyEmmCWoXo45e7S4aD6oGnHucJFQDvhqMrUcZqEDLMEiNfPq1Eg6G4n1NNjFxmhZmqze2qzT74cyFooMuadaixd",
  "key30": "4o2dGehPvaBCLJF6MigovKNDWJ4uFxq6Mk2B77ZSyhFbjjGJsMPZ7pMoxSQtWC9SsFGXKHkzkyZBePdX8XVxz6XX",
  "key31": "L8m53QtM7476bkF9fvZfiYXq4h5K19paxhfuUTVZHuPanRGRoLBoKhZ2UxbdvfNc9RZpuHvZAXqARauT4RvoXBg",
  "key32": "3rD5RRx6fdisHeVi48NUwHDYXmH6Ss8YYRwAkvfEmYBSEJmTPmH332PfBfkUEF7wHAHFwBrmgnJToTYZj4s5oxLN",
  "key33": "5J8dPu1gE2WgC5Xyu4yarApJaPmzZ3MLHqbQogh7RGyQpTasAGQeR17MqDrSwZQMYKrE3aD5ox4zQdNKzErA7XyL",
  "key34": "2BKESu5fT5r2DPShfXTX8wmVKUGk7WaAQ6ihjMsX3rKxFvTL7RL4jq2YrdNLBitMEiv8mVh68ZxRRbrDi7VngC5Q",
  "key35": "4xYQuJnjrkRcCmsHnsh63f3wyrNk6XyLTjsCMUQRhJi3xzpXkEpWC6hPsGwtAHj9duSc8i51pe7tMqzDNwJmbrdS",
  "key36": "5Q4VgNkWzpWvyqnWSGupQqd5u9xVx2RfVn1ufV3LAVM5Q3SxEqXfwWk66DarBgLeHvF72gnEoFzWSvxHZ5sD5wpe",
  "key37": "bAWaw6tL9rsCNBwZour8kd7ojBDcFCY6a6EB2fn7rRM52FFKuCfoxRNV9VK2hft8WumUccAYeGQa4P1RG12k55R"
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
