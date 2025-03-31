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
    "4xQqMUkwMZYnvVTeXzMMGeaTssnNCawt5UWMQ5SfDBQF4bTbCn5TMHGJz3zApLNVcyWo74bYNXLCRBQoRcvyZUqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BQPokWoR38kxBUzmvtjveiDGKzuQweCgw73NNzAJd4k7aa7dquunKUTuZbqPegJLNeAriByw6UaGqCyFzoft8gM",
  "key1": "4SSJgHHKvrXJK9ykm2mULUz4RtyZPkeX112DRahejXNdx16CwphkmCxpT9XFm3Rvcd8D6Eo3ARrwjjLgEf1Q2MKA",
  "key2": "5T9hBtKupZgRu4iozXDWjshzqfNobVzk52dEDH5rwgtTUXfpTDb2ceWj58cWYvzh9CtUpPV1G86sr4kz9bZREDTy",
  "key3": "5nSdLcaLvCCyguCVu9Kqz2nog64XvMVK1sivSq5i1XeXabhARbQtqG2SwFFaFN1Wzm1iSirrqsC3CwNYxcem66aA",
  "key4": "5QBkWap4L8L2HxqdGstxThLNDYCcZCnmMCPRaj4xeTxUm5RyS1cZ7CQmbmEqSWtfv8SFcBFywTW5QQ5eBqPLXkhW",
  "key5": "1RuFUF2UnoUmez8gNr1cHaHGaDdvcSTYyXmta5PuAbxTdNWpEr32vX46rn3j9EsFJEg3iiFvnPkQdYMjnXkdBZm",
  "key6": "4oQBV26oKxcWmSeGskG8uYnzDPtVzVhXUJqdtZnbTuwaEvoqTLNRPwnUeVKvy6w2h2kxGwsXHjqemCAzdCaSHfyg",
  "key7": "3ZnkfCmFuT4nQWekQ31m8Lgv9wKeCpU1VqTigF5NF671Z2La6DG5wYASrmFgzE2c7Wcpg2pfhFpMK8JfKZpagnnP",
  "key8": "3dAGLQ4ZGr9wF1FMg7efKz6SzXFddmTGBus3CXz1yySKc4Sob7GhhbYoWsJKjHy5tt9wfBvzx1DNwMg2YMcAy9zS",
  "key9": "4B6aRHupreFTTnWryZZcXaNDAeF1zMS7YjBuUccJ5ScqJJczdmyqBDGuNpsZqGRgR6M7agBP7o28Brh2CvjY87Cw",
  "key10": "4RmGGLkCZEhwx7FiZk2zgMhUGCUgVgPEZbGgsXuYyJSsvJyYJYnXuCMcLtgDHM1TyveqpajCohc3BMjLJEFkrc9M",
  "key11": "4QjAdYk4SzTVP1xh4rA9rWUZFgtgyegfJvvAEHfCiVA2BmBNsEn27Q6kbXJ7KiLkJPQPMtFoRNZNNgGHPgA9FN97",
  "key12": "u1Lnuer1PEFy1ydEqrLc598AqFD9rou1waLX6KuZSPpssrMpSQUYqsiTkR31WdU5MgW5up146yYFw641BzfWSJC",
  "key13": "x44rmQQMNdckpsbCKzbQgoqLD2mUdjeSgWQhaQjk1Cuu8HafbyxBZHLUbDiiFf2cCAQVkFE4QA1aEN6nkrf8a4C",
  "key14": "3JtPMyuFq2DXmnta7C81HsY9k3fWtzYudM7DNyNd2QYjJZgFAQPss3rDwHAZHQXx4vF2qqHEqcuEGytGBfLZZjjD",
  "key15": "2aoMVnvwAcJcj6G5uRGMRZTmWaRvPRpDNEFPLpqxtd6g8zN2TbEw7cXgTBke8AaNiSDX1bqysv8vxWFzjysgGiNb",
  "key16": "4QuWgsV6g6KjM4VGXK4a3CTBumsoJVKF5wyQZjsmk6kaXwUu6GvhR2ouf3Rs252K1UiazapfUpS8mkfiaoyo2czz",
  "key17": "5BtfanmadAQWZW5aHcxACkGZACJZyJivWQzL2mTHbVgWYQ4CQX5d6zznVWtnHQtWHWN4tU2bS2bxFXRiXoEnFRZe",
  "key18": "623sAc4S7fp7SRky5nMoiWSzM1iGWkZJgBCmHgDCvGCU6xG3sk25NSHsDzyDExKPRTMk9e6uCzngdUFqrP9wAPxw",
  "key19": "3iRqqWNmXhPcGcNEdatYKHPk9opXbKY548iQkzeMgPnpmG9E8mFigA5GeUEZSpQ5r4j6Nf2J5DDt4ipyHtRNV98n",
  "key20": "5LJR5Rodthb1DHkbvjhwWAdgS5TRz53jdy4LxjFRV9UwDwDqasfbFoF8Lp1P6hnErQUjGUdEDSF3Yrrxp1x854qL",
  "key21": "4XJggGZhFBRrbSNCpyuDh5GkHEdxRUYzW8aL6oaDh6kKJ1mnUPKEFZHMhNJWYQAQ27dU6VCtvRrzUR9Ec1y2mf2r",
  "key22": "65EUR4oKjaTRyMxrRg64USnxvwLNFVN9QdmVGJG3QAXt7pTEE16qCHMofRgXxWkkhMAjU9ivk7gufYYDDuLTSM2T",
  "key23": "ETHVR4kTrA8zqHM1DyH7LAwogv2j7V4qgH5bGMY95zUsW5EZ2y6za4oMAhNtDVXJdWh9dM3zWMTqdN8jxGJejWw",
  "key24": "mYfK5VUiLsT1tp1iFt7raCiebQqHnhJxWfWpAeHHqsLcqW2eLGifURuZj9W56jemuctw2cB6YUsUnd3cVQArvAR",
  "key25": "5XPJPpYZU3fzGmHbnExZzunwQBtcUJMetJ6T3jvcck62WBANi1GXcdYDFag66TPtbLPyrL1HtY2nX8SAB9pRVpKD",
  "key26": "3arY9zacMdUddupeiXRDMrbfWuG8gVArkkNW7v2C7GFMouxQFbt6JpXCiB1AhMoHRS93smgMXY2FysDPVsZv5Hzj",
  "key27": "3QNiKdVE3n9VzNfYtR58gEFw6AED9BouUEvf3WQB7gpjyhj5SSq99PeDfo43tEkiZP4eKbc2rrZBhqKi9enDAssw",
  "key28": "2iDdNrhpn17xMTw58XV4hsV5Vg8aU3QWiCC8XhrY4sx9BiofUYKsddhvbRNSfRUuEXftYF2iqqWjFLYvnV281cZ9",
  "key29": "3BKZy8ZtxytuTrhZpeUfB4uZQxNuW7MNZgkWRzWcHHCk89AmFu7JzjLqvRniKHgVHmq4yDBWuEHDjsqnSWCeJaYn",
  "key30": "3uwY98DJtNWQUVJ3qYRAB3G5iwMPfzrdkYk7HnLjxxkqJaD1QxtKhCm1Wjo7RBPXku41kWAJzEe7k3frLQwbw2Wy",
  "key31": "6426fWBUSiVQQzhHjQTttYo2Cd343DkLKuh3vGpZ4J7sZJSZcwTETLjoADg2Q9StANhb3HQ9NDPzQn7ps5pzwjZF",
  "key32": "5cLAm2b3oQnnWYgYE9uTict8gpgxd78Jee238Mxj1FxDjyazxweTbB2f2dagouhjdUAVNKzB1P4kTB968eYmNVM",
  "key33": "3XpsaBpujT3Qm1BMAtARCTpoUxB6k8uLHxsyM1fLctRGzda8NwbvgnL96J3RVwabUmdzdeDy2kZ6Bb7aQuVbSF11",
  "key34": "5oNGoeUY8sxsViQuMRf8N5zJd5kGnuUj5kv5iRr3fs41u3fjEieAxKVXYWmXiYc2Egso4iHJWhsHsTYQ89p9WAeb",
  "key35": "2bySSSycuqc5qThVBNe2MtMA6nbgjv9Qt53GPXTBqZs5ASPhov7CQc5QvR9sHhdJRKeGi6Bv7S7vyN5ydFFTWPVp",
  "key36": "3x3R33H1rFT8PAng5KDGreFPVibYtTmVZTH5DduUWhcBezM2k6FtZgEb3CQWjaGbJraWR9gZpew7xw8n2isqH6dR",
  "key37": "5m3CsoKNM54GBcQNtk5D3EZsVKqF4THtEYuXGGahDSJX8mNoLKxFD5XSmNmRostuzxDmusbEgekPwjNpzNNUhn3H"
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
