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
    "5kvtcgJmDLBNKbHR6ALFoCjJdBB9w3ctvtHsb5EYZpi7TgVz28FN4oB3ozY4MdXfYL44oNpsFX6LSmDnJd34RSRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ajWTUQgfwWgCAKTNbcJbUviMNZBRe8uF1uyDU3Mdfz2Z6JaFfxeJ9EKs5yjGK1TvhKZFczoUb9eiTxNATWWVmeN",
  "key1": "ByZZdg7hUKB1zQjQq1qy1N6CcZE6LsSk9wVETUWui7pQ2nSEnFUcd1S6QTSZ56e7F1wwHNgUYHsmWLurqN3sWwj",
  "key2": "2UCMp4TDxnekn6nNvupADqhGv1sTiETxLsMeMpZELCQnmxEGefztiJr86dLzK7Knmv4vpnW6pBDn6dEpmtiQtCKb",
  "key3": "xLGYc7ZYb3rU4thWM3MtfrB2xALTvQpaD5jAwAsXHVQWMJjKSWjLMzZFieBAZDFwSUfBxjMxeoA5KeZjcjEVzMm",
  "key4": "4fWuXVeRyDcb7rfMxmCyrvffVqSg3bLGz1vyfVUwVpNaEBm5SnwguNnG87qE1ctT4gTD1ueRimcaYcvh3j6dAjeH",
  "key5": "3cPRBZwnaT8UYpaemN1taU9uWKc3iAZrXSjwAbFd1HvGCezJuQQGHZVnmgmf5wUckt1aAbwj9fqFBYqDjyXcsacR",
  "key6": "4TSD3FzqT7ACWeHJ1gT8jR8VjjnKhu3yT4CgdDNdywcJJUW6gMiBA6v9Eytz2KDiGafm73Xgggvoy2sdPdpjjhsw",
  "key7": "5r831GpUAdR1wsDiQuoDYHGMqA8JEA3NQwxoJakEwf6Akz9XCRAW3tJgKnmAMSkGRi2g4SBpnuRjXeLAKhbWD43p",
  "key8": "2qg55FqgN5Eu3S3efJ5wxDpGdA8dx37CGA1aBCos7MunhD76vdBJbLcAjdq1o1YA15PFN3NeYcT88r1yvFatPQKA",
  "key9": "3n3qwjsdh4UJZhpcNfYySLbip14p8RwjobhFN9dN89k4wNSoVUhu47z1g8rp4s8Cs6ERjfvkQCXrWSfL5Qikh3m",
  "key10": "33RBCHjd3R1BYGpe2fGDbtDS4VjfLLUPP4mMC6LnYNjBmSE5YM3g34Zk2KRifDma7gYQx9GsRpQJ774VVJ8C6grF",
  "key11": "5cvnp7xXHeWcQkqAD6pZjxhj1ctuM88nyoS7WPqgdt2K93yohEKDioSjx5VhM3w49JM7KvJzes1x1Vw27VavT55p",
  "key12": "5ZeqNfRnRf8VGZvwsQfneYwxzfMvfsBsKTLDhqGFZFuh2FUobru7a4XqEF1mMJD6QtvCBPq5DyLns27GxN46fSca",
  "key13": "dXM2Zg3rwLSH4oxZKL5GLrfTQsk4Zo1thhoxRXySpDLSPGFLcviLXcS7jJ4vSWnNmeU5HNPbX1xJV5P22QNRqP4",
  "key14": "5eqJhJXitJ53MviHBZX5LBm4J7h1cv8TXKnY8jcVfFVweRHkk5jXZjc7jUVPnmjJ6Bm7G5i5iiTNYqXteftbmrPx",
  "key15": "3kWd8iQueRjiK4Lddtbps8fT6H3GWkQHd5SWz5ZMmKgVPfx3ddBYMdkc1ZbwLSCpq1dWEBRLfsTRUhiMqfrqs54f",
  "key16": "4TYEzAuvw4j8Ne27ymqJLPiHfkGjgeQ4xP38654CMypgWArfrJByH1W4iyPRKahV8G9qGtmZGLZ5FjuswRgo4G7m",
  "key17": "3H2Y349JMVWWLmpN12Vw5UqW2wZkXiJ7HmYd6wWR516T9CtViUTcakeZ8U9TagkyP6wQSMyv4e6etLciHUahn2Ev",
  "key18": "5VRJKxgvHLTSmxp6KtZYr2GKxkXY9kiSX6wH4JRiXhxztcAnJfNmM7JHNkC8gaHgo7eyGc2zsQypotRp4LoTkQgF",
  "key19": "66iNWqqRzLsCzSywT25JDAz9qmKa3FXAx3y9mQidGRgDKi6yMREaD7VYM2oECakthZHFzbuiuFHiYKfevRQoU1HX",
  "key20": "4mbXu2Y2v3yGwdz4LmoQ6E8xxHRabNxCbCyZZJnkPe9ZjJRsdatBWbU4Tgy3bCetAxYfu7YukvPJkCkgrujTtqNP",
  "key21": "4RrU2ZpxUDqYuixYoG1nw5qnnum3zDf1zV1e2FP9sVRLBLJDUZqjtvAaa4QFbsQCZcM5qXu6RnfA6HBoHTCSuq9J",
  "key22": "5yna7qsZmVFXf1y9eeURcy8F4b9cJLaUv47yBwrwn7orHqgADTzfU2gQLC1PCTDDx2s4Ki93jLNufV2TidrshU3f",
  "key23": "2uCjjefpcrQkTtn4VfqmkD9SHU6R9uRxXLwkDF2scvoLMQwEQURE1eNcJkpWeTSKS2E5H6y5KuXymGE6YvzE3zAJ",
  "key24": "bsyxF5JVyqC6ZVipPH6AypyoHFHi88baUArHtFdXP7k2PzTDuG464pgZbPCWXgXCiL2Gw6meakL8bpRNb9hWQCD",
  "key25": "2Bm43b3FtUptLW6397JaRD38aQeGE7fThusQbDmTt8yQ4Z8yz6tNbpMJxKLQX6nEoGuCUFzCjcZu7scFgHUTT63m",
  "key26": "5PWE38ADipUjzCJjsJJDnvxPZkUD8VGzZ9ujdMuS67oWETfRoA1S2f3mbAnS2Ng4GZ6VE15e25JbKHR7Dsv9mgpg",
  "key27": "krkeck9AsRDNty2PCT1qDVhyj8hC7Vp5HfpZbXdz4CQ9ceAw8oTWCE8ffWDiih9o9p8mMr6NrctXbyJ9vrpqe5c",
  "key28": "5keGNJUDwF8phmcuQsFf2HA1Ysm3PeadpgPihjQYJiAHPhRqbpSmkpfhx5ukcqCSuY5NkMtwEf7a4E4EsWW2bn21",
  "key29": "43GUYiQrhVkWCDh9DkERThADfCvrGdHEuMUkpzD2RBBZaPqWkwrvThaCDKP6fNoWzVamDT7qw3r4sHdNeVg8pBqA",
  "key30": "22Qyz9QfEQRTbAY3Ghhd7Q4yMfXsryefcrGzh7fHVKTozQxDngjbuG5t2yuXCf6JVV61LYEnLuDUAV7akbagiPXR",
  "key31": "5ViubigQfdp2d64T5Jaa6dKpa58WyD6SwToefNB5asS4g6ctyhN2Sko8g3nKkaBQeMmxd9mvdAhaws9jFGh25PUf",
  "key32": "TsSeXqiPYCg8XP1Ca8R1gA8Bdgpis5XKey98QLqActhxNPKWa28guCRHQm5z177KAc53NtjccdfWt2P8E2Y1KiA"
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
