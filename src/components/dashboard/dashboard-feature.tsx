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
    "3L5zvwVZszyuFuetSKPj1WEgHLf9bE7D9ynvqPbfD7GoeEpbqiLzpAKa1RfGTtCveWyiW4AwK9nmFA41WiVBU25h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqzgkB5fGu3gjxeN5YRbhe4sDGAFvqXTTGcEjUHj6afqpVryzToemvEiqrznEHt5UThVtHdZWnqjXwRd7zMLMp8",
  "key1": "4Zc7A28hXUztS16mtE3C46EeiV7aRXFrzajfA2wxiSVkneK3K5sifa9uqn3BYw5Ch4pxdnhyCSce3L8VH3rrNoYS",
  "key2": "4mceoNJCZ79kL7Pub9FG89TKev3pZeVQyyyJ6jxU6CYhFMksn2LsaagPvFkWT51rxx5TT49VUqBSg8nREiWnb5Ke",
  "key3": "4VeWLDrEgSxsnei8zQyUHZCZrxavgNNp34qPZYWcwZSnEywcjuMXrqKLBLNsnP6HGKVt3nxBGTfQTXC3jE5MDWhs",
  "key4": "4GH1V74qFC3HPz1Rpdwyb1ZHUH2GGE2cQ7KEWCwD6aFV2xYhDJCgBbZ5HeDWqdtoDHDCH6x5v8PGUFZkPhj11kqE",
  "key5": "2DuA9mj7RRz3bnryZx6m7z9rTHvWCuUGy23k6skeo2sa7aXEJ5KcuraV8jg4sZNfji5hLDfyWeL9n4wpPcSwAMfu",
  "key6": "3MEuT8KBhAfQp59wWWSAnCHsj5Dh5RcJYUjJm7d2TnkLuAbPs7HdxuvRyd8PjAQWUpKr8fYyFvrKnVCwWujRuKTg",
  "key7": "31AwtReJWv3ixRoe1sDBwjkY944PqGqS4zymJQuH7TmJzRaiur2zgqyBRZRebuNtgNy6PBvPdBEM6pGyJuiuzHNU",
  "key8": "WUB4MdBViDXnKCNCv1yY31qcT3xzo6zu4iZ4V98XK9GvZiiuLBZLtTNh8rrsLJUMgGe5iZbVEsoKteFChxovBqC",
  "key9": "38dC84MFVFvKQUnvhWPLUVJfb4Z7LYgaXGxSfmFnSUx1SLpN76vDdBs6PtRbnabw1WnMgfWJyREWSVqJ8Y3qupH9",
  "key10": "drFinAPadVfNeFmPXJ7G1icVa8M2JQ4Aq3zU9mgVGfurMwb5xhgSgBdwWNuCVayZqxKZ3EyZZPVVYjUPCmyy3uu",
  "key11": "44RQvzN52nLc5akvMjKDF2qfZGNxFSJv4T6BTkQ5fALDBcuX2rcaVZjJa2SNiEkmLu5zjBzsQ8eS1xNczX4mC3ER",
  "key12": "18UjQB5mdTztfu3Lx9q7fK7EBHK4ZPF68SLdaEu6PaWweUuHKGSU765Emo8MCB6BaJtzJUTnn4eoUNVTFVqUVex",
  "key13": "5K4M8oKJ8YttgUJRvJaJQA6eQjfLY5pRKJFDPG2vGNWzHQe6LzyXWTMEsnhNU1siyi9fxtVZT5fn8XRcSShMpicY",
  "key14": "2AqZScFAvL5YwFgQjWzbTQ4DwfzeDTE4vy6EyJ5bCukrjCvajaNSmUXVY9fQ3QRA5TZDPiQDFng3mmPqYGoxfgqb",
  "key15": "4jeRBQdpJSCRWr7a4KGcTsankjP2FtyCqxSQkJd6nA9ucYqBNKz7KJZ4ayFXx5wZ2AMrSP7iTJgg8BrYVKX9sHXP",
  "key16": "5UaSpVZtAZYb5k9jCkNRJCVK5aNsCXmBtaEV1Swep4mouuvkUk7q9KxQAz1x94HnEZLqDzu6GYrF1pAz69rNcMqT",
  "key17": "E97bq2sKmVNm8K2ZnPQ3Z6WRfPoPYgVrAgWooTApqiAAr5EWw2Co5jRUQgn6NVQRGRR9n7wNhGFJQo1zwfwP4cZ",
  "key18": "25RTX6rPzRwPSUUSe8ayq53AezRV8g7tbSErsSuXoeuwctoHSKjVrRgufRP4Rcj7cjN8UeLBv4RRjn7YhDcjBvFA",
  "key19": "tpKdyPDceaRWqS6jwDvGEqoGPNrTiRfvNniaCsrXumuFEF46x8RC6mBxiocWyCgsYNt2JHFBjFWWbTedcdu8V1S",
  "key20": "4BfdyoAaANumHCeb9xMr2E14bwPgrJdApmwfFLHFSzgDvk15u2GdszkLGb188UG1nmuzcsQ8ujSWvHTxgurpVW9m",
  "key21": "2SeGo6L2ZqBK43jUN9JXQgMnJgHJTt6FLXe8PC97b2cbi8ANoirJNauJ4BagLEBkYBH5MQX46nMZCuBVk8qqftAy",
  "key22": "4EPejyVz5TxLUFHyYFvKkmWj1A5DYgzvVf5bt3mr25VLTJvBQ8iXCuiDdBBDbDZxeB9PihZ1LezR3mNDzuRU9o2X",
  "key23": "47a6hvqYiAipxaMoGENUzp2V2y6MEUatHxanAM1GbDCBb4aJLXTacJ3FP4V5CvWoiG4uiJymoqr89MJ5aEAb3W6p",
  "key24": "5BdnW8EmPJW3H2WV9JVQyJrJHYeSfBrFvoUBUmeaGYVMF9haC63fEeJ6xMHfrSZzZYGVd379QxbBaoEsXYkuEUrc",
  "key25": "23hszYAH2KENCwgE2ms5CXWwU5Aqq1kehss2k8QvSbqG7fbLNE9boE2vAhnSLfohLmskLJMA3Yqodu99qtL2LyJw",
  "key26": "3Mojk96NoSvWUPnsd2a1wWMrVRXXxaTXgGdfmfzkeouC3kyRC8QaHYDSRs7JVHe1MLSgukNkeKaave3KBps2fsQT",
  "key27": "5pbD4PawNtMfk1AhwA4nHgd9qo86Ht5jeDSUasFmLpYuSgr6kjbKC8wWSLndvRas1ePtdDhavhFEsuUKNRMSQmtz"
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
