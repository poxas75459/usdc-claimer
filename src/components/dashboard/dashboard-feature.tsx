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
    "aaNuU5Ep1nnZqhihG1f8AkDkQowFZdWj8uaMUcdEfakP5frXB3xnWsqx4GCgJcfQRbJW2HiqQ6S8mDMyVsx16zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wPTjFmDWxDQiktfT4r7QKT6mcNUHrfsbrFfX4bXqgQ9SAEsyL9rRkJ2hwHx1TFWdEcEnWoA2JY9atS4oetUeHsw",
  "key1": "xHW7cpUnH7jRwSCJRf1pThV8Z8hCfTKm2Mh5Zme5EaXVWsn8MPWNLka4qQkns51h5rd91MecXXmEkkhs3NqDhoj",
  "key2": "4fxeYD9hLFeEwCfxMJv5Wpdht1wggnXPStmvnBMfDcrxwKqC4tir8czd8mv3j6waAs7aRcFRAno7Y5CvVC2pGj98",
  "key3": "FmhubaV97LmHdGJBrzKxeD2JBrMVdmdpudpfGUahMgm8YG8TRk5FNroP4iJwXsF7V9rUFqR9HoAVYbNcA94YMki",
  "key4": "23DVFe22whEF55upnSsiMBQGxtD3zro1T8n6JUHQ3nP8w5XobH2tk9GQPonRJ6K1SR44fZYoyUJtQ1cfxDQtdGFD",
  "key5": "q8fnjDoRyGnsNMjQ2cTnUhivBoraX8EjSjpVwVk561yGWp9UAtYXRG9iBHyMR88MvdVwihcGoJkasfTGjR1Av69",
  "key6": "2jGEYRpQBaMVso5ZEWgBjDLZcvCyvPztDcrNkzQoTx6vHGxdR44Mc8Cm6Uh531PQsfY2A8CWo6AX5Et1bRt2RsyB",
  "key7": "4MXierWbDvwLmRGV9zBUChzKurLFxbPKy34jvko9NU8YhMh9xBu41xFEf2zxzTUpEkHZWXBAt2QqZauwpqifS3gL",
  "key8": "H6vqX86ptM6rszE7ehKv6QWJq1ZZ89s3XpgZoiyyDMcy8hieUjx1gWgR1zFpAdc77JQQXbPe6eiUrbdWYXP6KgP",
  "key9": "4cxHyVB3bmLD7qunwqcSyQ96D4Sc1ywaDnZMFde7ha4uqqmzs9UoJA8iK3EKyB3YBiaAEGrxxCm1or2g5XpArptg",
  "key10": "HyewNegLdNnGgt2C2HKmnwFZUDvkMQSNZEJPPKKzTUturNa2H1DYRKt53j8cxEPpis2F8yk1XyRfb8a5P2zBTz3",
  "key11": "3xuoULYR8ssvNNuerxjwAaxUNttPziMsB2zx6odj5vbV9ZZ8WQ8HC7mRwmEHLzTW44Rz68PHwLSDD8zndgFQDbAv",
  "key12": "3shTnAWR42bQjC6W43RrE4rWRFd6FF1A7mvVCmBSuPhJwCXUtwbWKuGQvhQsmM4qwC81rxgseej2CqggbUagxDMj",
  "key13": "2mNRQJyyy1F9Fqahjj12b3BRmQbNY2gmUBEZjDd6gGZ1qcCqqd8t7cLWZm6oiMguB8uKaRkDfkqb267HYmbrYzv",
  "key14": "23kHgsrMAERUyczUjYpVzn9wneCuHaCb2Ptb32cvYW33S8fxcwUcUHTK4L5PJhswZgYQmTzZ6ox8ojmzm7RgDdwj",
  "key15": "4XmuFfPX5MqLdDS1Rvjggapna3HFao66CysnU7acuwAaTRnhECovZJnEw9L3zs4j2uwHg2qLDKuSW7oNv7HtNeN6",
  "key16": "5ifPxA8C6MJCSAUJHeadaMcekcfvxeoZbd5TMXBSQDxWKAv2Bbiw7Gq5mAUrJ8Kr4Ew7MMbAWG9nFgVoLSCkqCYt",
  "key17": "2t1HZRHcKmCKgjVVpSsgAQYwMWXgeKdBQVKgx2GfoiWnb8sNZmF9cW9LvLaVTsLpwRmaSHysko9hdQSBkjG29HF",
  "key18": "4cxsPsxSvcjRHjpVkr3afqeMtdJ7MD1n3t6CgsW8jcMf4dHdGAfqzdGdNHpP8QJCRYfZd3y8BHUGJYcE2Mcc3NGf",
  "key19": "35urPVrXDTRkNQhaVk74a5vxDS5d5V3ChTm52Hi3foPnFrgDRsgKCGFFiKXr6vDKRM2wswMF9zC4yvk6w8CD6AbF",
  "key20": "k6Y5xY7TyG6mivVVvvZuyCE5f7jgkL572o8K1fpHgewzfHBjr4VieA92j2YdHzKEMVZeq1thU1ei3eCciuieWTs",
  "key21": "2UScoW46T4TRui34T8eViKpDAdQFoH3B9yEVyBNP9dwyBXQizsbSKoTZz7GKGy2uCLs3PC4Zux97WeRgZ3LFxMCf",
  "key22": "4UieYs94acThPJCLbd1o3zDMd5mKCof4jRQYoPSPSS17R8Rdt1YXRLxBfdeF9HSu23r1ykDVpxnwiniBsRawx5qm",
  "key23": "58AfXLtLQCbpR3kgUtEoHYLCvRnmn3peVWMeSfmxsyYxVDY4pZ2mGdvV4Qbk1sLrUWdadDsd44swkZDVaT8hEcHy",
  "key24": "5hDdZAPtapBpEd7teUeiHn9GLcgSX6HkVUitWJiJEPcmehxvaTj4ukwJuKKoiVWoWcR8HvwFpjskuKNyff24QJ6p",
  "key25": "5KHzgizKeDXhVojHCk19DUx2Ykfc5e7ooaHxhTm1P6NPfQ4EwcaxPsrcihwTgyhJ85MTCJdhexoyRhkdZGKGTxi6",
  "key26": "3ABirk4JwxhDDiP92232DZjuzejEHj7hEJjS16e5TJdY89aMGgj6y9W3r8pBEZsBi3KfQCGKDDebzGf7tPZJdcfd",
  "key27": "2pm5Cwwd5JcpwKHCDZxvxMyLpTfVs4NLT119SR7FNfZMKVRgbwnv6duo7ux3zjffWUs2VRocZ8fJ4cxTVyKk8tGe",
  "key28": "3wKyMXesh1gtLeMBVBzXCT1mGz57k9tST66D1YmYf5BrT4TW2F2uJRQxfA9H3V9EkrvnRxF5bVzMEmTUxfjCKKVh",
  "key29": "3mmqT3sYX7fzdiFaxd5QFjhqy7X7ezYj9SxwACqkNHPzrjaKg8i3JZMR74AGFZg1FdUjNnM7sUVBS7GBMpuMmnWt",
  "key30": "R2Syot6YQ5HY5EApSanagL3uu3V7VxvufAA97WkYLLX67YUjKfEVLRECRXUfDF3gkFxC6LKL6wGjoDHiRWLCD15"
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
