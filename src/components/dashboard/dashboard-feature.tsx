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
    "4HQYwjRTAUUcKZC2gX7rBfEnCmMMQuxjTtzJaT6i8T9w89HTt7AQeagE4u3ZUSCbiQxgRKa9M1WL86gkm8t8Vwvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NA1xs4zBsgWTMmYDRqtyVfrHyXC1EC5YrY2LmBPRrDpou7W1WhsLpZHV4FeTVoKp1urtgPoC2bVHAkAkW42RMfz",
  "key1": "4WgPbokUvz67xvPmSsCDHgFQtDB39Q6be3zEpmaxQJLdStBXFhbsLWPPCg4TVndDLnj5RaUK5ZTPxfAwJg3d7nQo",
  "key2": "5SPULgPj4GiypYrvbjdp5Y4Lw7iov9hWNQrxD5hMXMesvqVvjipbC6ecP3dchn3EDRTRRikFB7rb1PQnhU3D7hfc",
  "key3": "2dQ71QohtofwjyAoaumbWUfaKo2iYQTa8j2MNjALTiR8L5GCm8gtWq8XN9juP87w797n7Cz35zgvmjbXfF8N89zq",
  "key4": "4PCDwrS5miE7uGzPk6VsYGsthT7wbSFpL8s3CtKrJ36kgr6A8TYn5CohRARwALNgRnrn7rZBNkeDvsTPLnVYvY6G",
  "key5": "3GDQUkF8TCywmG9bfU9Szm4ef8BE1c6wPcuVYeoKMHNtioHuTeLizemsDPkLEkM6upxzgVbJK7CA3e7zk19zW2bn",
  "key6": "3KbqQMSNh5H9yas11qFHhzmhWHfbgJA34p8N2qzWGjmr9YJRJkbxwnDkwFAJ1QTBBUxKQHSKMU5Ap3yAEfuy7rtg",
  "key7": "dT6MiaMWWGLXQK8iKA9T64MWJZohPoRyvdJLqKdZGMGzyp9yVa9hQjEwwcDVJprXJDcN9XGnxPGhYMiqTTDzCup",
  "key8": "4mMquG3ht9ZKxs7TqH5tBZUFQ9szWyeWi1XjDe9mmdL2jLMbEWCSgbYd2ygWdW8KNisAPhFZbFbAkTidWdWuRJue",
  "key9": "2dR9QWF8jWTuCBmHJ8c5sQCeyQY18SH5sTsJoBCPTCk1jZoaG2AL2gqpeaejgaUyHfrHn3WL82qWLgAkmZaXpTBN",
  "key10": "2wp7cmMCtBEWg1r4WWbWMBfj3DbMNgU8TrJ5QmoJbJYAHK1PFXddiTPPrJPZxXyZw6ZanhYwS3CtEt4CjPycTLvt",
  "key11": "36gdi3CPyUioPwFfCKVKNFd71ASaMRBjwyUapzo5JCAUup3HsqMsePorbJG3ufxiSXFGiqMydttjboMeHpZ5jEzy",
  "key12": "5y9nS4LX8mn974TfvoYu51Q367ZqYdxoQZtbvfwGig68eCjbFaoaExxYikDg2gaYBvr7qLYhtUAgJaB99rmbbvZr",
  "key13": "2i8mxda6HuAsHrGPAdqiTYVg5V47RwofDR2aUcsQCbopJ3NoQBR9Wz6Ywgkin6iGUgNQyEqAioNKF55uocuvBCQB",
  "key14": "4sYn3YqZSQwGpSvmBxqw6jojTam8YPwvCKNVDEjqP4dNipbRKrtY9X85yJWLb8JhZz81ek8VNh773wkkpXFATLu6",
  "key15": "2xK8GPG5LYWMwGa4fnQssCPrRjD89xPGSTfZ7UrxC7rgn2QuVSq1wBoVQR5eFx6MWW5LVSgNxsK77VYKu2rDLLiT",
  "key16": "2LRT2e9e5WGusXjQDSGfKkP6uczkrae53Mq4eYcYejmZZAUX2HA3ronXJoUSbfVAxsipuUwJ6gakSnfZCv7y52UM",
  "key17": "3cD9Yhjdoiej2eoGiCgzYyETyhouovhmueUUk6HehjZaXUKUgh5f9n9ZQ1sHa1fvCmAiPhedhcJBpdijnqjj4oV",
  "key18": "Q9qERsSMV5JBqLJWgG9yCETBsv7rydSDFpgz4PsqWNH9XLmW5uWWg8MSjbNNy1py5m41J7RL8xbnaK9KadTCpkx",
  "key19": "3Dfm4qU7yksMyBuSY6NFq2fN5U3QQW8kekAdtM6MieU3MaebCEsisPddQd8GHBBHitJCiUjhvqa22L1n5URtHJMG",
  "key20": "5PnD4T9uwbhjX3xC6eG3AWLiy1rU9AaGygQv8vQagxxLww73snd8aphzn9ifLsdwD8FuyzqbPL9G2khDWYR66dfE",
  "key21": "29813jAbokFVVgeRgiLanDHErp34DT8iyGiwnny8PQi7fePck9KpaEpCFq5a6P5rVK6fJ6uyDg7dRwTjTe1gSPUs",
  "key22": "4eVCf4iJrZpsUTDk3aYzB4CskFEa1kujCLQj8qpNX54YZxSsakBCT2Ed5SH3U3341Jb9B8NvCEk4uBECsAzM9HVp",
  "key23": "3rPZcc6W7jUT6zZK259QeuLX57ynhCePTG6RrgoALds5sQ1zuycZoxQorRqQTM7Vz5av21zEAht65bj48WsweGwh",
  "key24": "21tAR27CMZHvr2YM6ZtGRRUwe5QEW1ktGhk8dxu5C1EQPf12EpoU8vdhTSmRbFrYBnPrpZNtQHt2Q7PMG1ZEXzac",
  "key25": "43BvpbPaAk4k7AdaZH7hfnP2yXeMMeJZQYMUBYEyxZ36kq3JJ854LaZ4qMEMytxdD1UnAPKjkaXnxQfESkR6ifw7",
  "key26": "5zrLtm1u7WALrvK3mdEJefepRCAM9kuv2cZvCgJFqxsCsX9eGL8Je8fB9yZmL7pHz7RkwN74JuboybGcBJ8ouA5b",
  "key27": "3UhnqVqmHPnV9pywrTPJE8Ys2uT1nx1EvSEuTvWxJtU63s4Vb6XWvcJFsbeVd1Heh4BtUoBv68FAj5U5RtD7xJHP",
  "key28": "57TKkZMaGRZisNKTnopwPxaCUwTZn9aLXK4qSFPL114edj4uoZ9RTh4CaGNfJGsYJFH2uDQ6EGwfRtXyRHv3YUak",
  "key29": "4WQmRp2dt3hzoejR2xiaxuoub32UqhGu2QgwkyVwtpFEJqXrcndqcwYwsn3XGVki63Yz7vKq7UzrNMTAH4i4nzsC",
  "key30": "4fCRYXUK73VroRTxP3uB9BWZWvtn1HbpkYAh9riUVCpnVsFW2icGDPQisXZi7W1r3kiTsQnyABH3M7vJk1GbVeEv",
  "key31": "4fVpvqJmTYsnQpmKP15VsdFbLyEny6xcCtGyuVx2zU1RaAWLyiK14sxyTx65yHgTVbDk7fKvrGRevMnsyc1K8A73",
  "key32": "3HrPPS49ty8QFPF1dKVb4PsotL4RHYEqPdfLAe9YJ2f8Be9KbVhB5A3jvTMmQ4fkojywCS3c3TLBtGLjcw25p2jJ",
  "key33": "56qWTvGoZzCgu3JV8QWKgmAGB6ytQFpzxMW7i9KBT7eQ8J8fmML25JSLZMXiMPmwcyguTQaasJXuntTqQYgPWftB",
  "key34": "Biw7QAyn3BK2t9sffaaJgPW3u6h9NB7XXRWLVxUi7hQ2JLxWHp9PogByCc2rV56mJyMYte6xbvWKNBWHAjGcPcD",
  "key35": "4FSeKfoEQTHPeMQq3M34sX9Y9ZnRoxe8HfagxBFDhAW5TwSz3FaY87TfocdVkt1ox6rgsQvoL3CfVDBXYuahaBTM",
  "key36": "5RTKYX77r2kEecqdQZbCKt9zZW8yoeogP6PFqND7BfwhuytuHmfLX3D7uDkGNpmqFaHoMzisrFhrAoyXFuwyaYLH",
  "key37": "2xssshLeUmZMbAe48tmDGWzQVpyRT6bMbZP8U1YsCsHwtEWAPap96RxinHqfJFNzW5TD5ydw2wNPfoXM57BYt7B9",
  "key38": "XNGae3tBPwkgrPRfw4hb9uMsxZCApmQx1jZkJRkfVJQZEGSSPvUimAYvt9Syfv5Vqo5cjQWNqMgk97jUKPwiZiX",
  "key39": "2eznTzYKuEnzvTuQp48yKVNLgx7X25Bc5nc3FvHPhHUBnYhH9SEdPyp9Ufsp9RK6ijo6H5UuG3S4JcSEzDge53xb",
  "key40": "3LZ3sjJVLjNaVrqnJpcZ3pUgJdzhfd864hRGLJuQHShnBCuv2S3EzgdKjQpMr9bfiDZVeTPTZ6Zkr6ofkroBE9ar",
  "key41": "TDmbRaFsGh4fGWiJMxjEmgmqRuNRMuAazvYF7jUn6Hc4aiZjsKgzy6hu5zCy79uE9FSW9diJWi7LdPZDBsp84W5",
  "key42": "5di4qWBcYv9vvzN8FnkBbRWXbccyhPYLhFY3KDGkaqGoerwtEkH5Uo6o4h9mqTKTiYvxw9GSfRbWW1PHD166U3rL",
  "key43": "3voP36o2ddoBFhC4ST9WpUqkvPEDD7eR4FiDDbaeRc3EaYceXd8MTctpSuQWND8WN9kD5jGwGoyf9tXUH4t8ieC3",
  "key44": "4NrT5W4xKH8EF8j5dBpC8jCfDkCsoUNgRB8zPdZEv9jqnupMn4kRwkQ1nxLp7q13HQeh5Hao8Qykh2uiWKx1rweZ",
  "key45": "3Pd5CXT3P5imjZGfPXxr7npUvDhgGuCntr1STsh2Wng29zNF9gBMvRYgAaAYFoQHuVErVt9VAQc65Nczqb68i3MV",
  "key46": "jutssBTdXk9ZGudXGF4weBo9QzTfZHi8wDfyW6S4ZpgSef6bDp8mVBYLPmQxYHCJJD6h2Z3LHA5TJxhiT8rUSRs"
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
