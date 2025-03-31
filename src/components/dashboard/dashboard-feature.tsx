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
    "4ddrhxJq3DftnHhWTwctTWiTHNiscRMzPJ2LdHDM3mF5gZB4eMVnnD1aWMpcMyG72Mz3qnooTN3FHZLjWJz1GcCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LendMhwRki3QKcc9xvSTjfFHV8VQd2mdEchxu2K6RwCJJ1ZHKtGdrMbV4PuHDsPCdhXi1WqWN8VsLNMbWRJ3LPn",
  "key1": "533myfaQUhRL1b5LU631FqirAwsvbGTCRQnUc6AcdkEUnRBZi7TmHNjQSXPVxjyCV3Mnn6saYSSTeJSqeVTPpsn9",
  "key2": "3FQwg7HEESmwjEmUVf25qEGVtGp2bNV5t6LmNJhNtHfWzCpFzphffnD4MUzRHCF1m68CfWqgUbe7avQb18MSjEVY",
  "key3": "3Afk1qS3r1jnBdX8LX6EuuZaLTTkPSUxbujVUhkF1xvK9QQycoSsnquX6hG4oPRcwFRensLiMiXGHWKyLW7jzHUA",
  "key4": "4Gfj95919QxVcQFYjvG7LtD6jbnh1yj1YAGVYKMJQ5hAd4wKU9fQnYrheBhrBU69KDzEKQKw3AULW7UTg19tYRgs",
  "key5": "3EHXSWQhxhpnyHVhHvXLC11myEDkEwX4Ga5c5oqQ84CnYVQsxoVpwxevghyXNNtGLRX2gexPBse4iX6SxTKc9SuY",
  "key6": "2q6cL7AjcTzy9kiMAEMZZsrqZByReKXrht46TB9aBJJ68AyK1k4rfwEeXkrgXMj48jQsRtJqdEKZX2uZap5uqNoh",
  "key7": "oHBTuNXB18vqxL3eRZYBkxP12DGFmHWJBfRASr2xMdKLhQfo9fGirYfM2rNWwMmDiSqEKCrgonjXqc1gSkDrcV6",
  "key8": "UxPVTr3ogDBV4cP5RJVpvGzsZNvPgzBijDkjKuYmXwfL36ehU8Hq2mjhqkYmvRQNisBHm6vtShgMG2FGWtKSTy6",
  "key9": "3AgsGq19ahU2TrfJxqSnT1bk3NriEu4tRpjJ3AH5fHUr3UePcF2BitkNkSgUsLe87VLUhVQZLH7wpuoMYVfePAA5",
  "key10": "26jjmLzA4a31nudcvTM6MBsgDBc3PmfnbtdeQM1uBJjLP3XKcQ63L3bpyzHYPrbbbvYLz8d6yB3r7xcDZwT4BjnT",
  "key11": "3Qwbnovn7LWZuEqQdAzoMVt5xCwiMLsRosZKTfBMqCWUfVejbL1N5qtThQ3P8ZBmDgDQXSiek4To34TxiX3EvCrQ",
  "key12": "Bpv8xfrNKtAHXbgJtUTVXvHfMH8sANJzkhtq3hd7qmsYFh3otXg5w2tTYEXP7xWG4iZzXC144jxdzje5VNB5ZCL",
  "key13": "2L3Ph1tW7Q6DQgKVQXbMjmhrHgWxv4GcYeiVT8k4f88nTk3xKa5445Lk95vy4r56QkiX4BSjXzYS4anZR2AvQjCH",
  "key14": "46suFJCtvmvzgN2aYxtma9WYZZwqGQE1tw2oP3XA5aPGZA5YkXboYJMbqQ7adzBQE5E2WskkUdHDpvBKUkAKL6MT",
  "key15": "33csqk61J3c5U8prJYpG19RdAkoHNMoRuu4MjakyJ1QbFygtUzjrbNpxqxmWy2PcJVCfXj3wDHkB2DbbiaVV2qUv",
  "key16": "5raApDSf8Fz19Aao7PT3eNoDkbtcXv7hbBGNu5TUhpxx42ocAeYhviR5q9nqxX2GZd3QhGt6f6KrvgxGjrT9DKkw",
  "key17": "4kmn5qzittYKhN8oAMyVWpmy2tizeUdAQ9NqWyKRRT6oVoTGM31qeWtLioDBz42M4cd4bUbpvc2TtU2h8JxFbvVU",
  "key18": "5AP8ux2xCGVwb3mNh7ixBMeMoY9qXq5YQHekm1s2BsAuFy7JQC3dmBiv9R6Yd4pFF8k89YKdUETjKGT33VnxbMhc",
  "key19": "3RuBqerZkT3M5F6uqJhHwAkHL4JGN73m3mxQGd8Fns5FgykshGmb2fVULbP5owDrLEMBDE3TzLeDBNioW7tGXZpL",
  "key20": "3XjPWDG6iAdySxcr7ESZpkYRhRNi7fA41JtUk68MSdpRmRrzzdzvufccb9mhb86fqLH8aQrANLWfQfGPfeQRL4Ev",
  "key21": "3ZSEBbUbbU24MLEEzUaQZc4qE9g1VnvarobgC6WEQikE5KXhgxyQDyFRQgpTWNmuhZSkJcyrhKB6nCu2FBKvkNHU",
  "key22": "2QMM5jEumAKwGBdbwajezuZ744UnPAjfp2ADMv4r1ALAyZWoowQs8DbzooxwESfqt4nWEyyhiJJMcCotGA8xFi4j",
  "key23": "EhjvcTkDrspyt3gYzjqk8FEzkDwcHwHyxpwXFqefNbFs2WUS8s7cUPEvqkYiZhqeXZRguewf5YM4abqrqrU7meK",
  "key24": "5kqegiJw8c3utAHGFuu7Aj7c9hEdHj3JMQRSLsqAHDJqszqvvRZ9bkCUg4MuEbehjpDnFDdvozn5xAXgpGBttzzK",
  "key25": "25w3FVB9rjMJusBYu3McjiceR7EAZjx9L93LJHnZxzK69iH7XxKhcSSwYk8eviD76GLkZ8Scb5LGmyBYigDL4j12",
  "key26": "5XnFPvVjQbkf4SC59YFeeh2p2BgRMKQ2E2Z53BZr9sHkjy98JXDk5v4vRxXiRaJRRtT1t42He2xe44sJVmbPLUte",
  "key27": "5CwqwdSrFLGBzRYMKgtmjHg1BA8wYG8jaAi9hLmLYTMRjpXFmhDDQE5qxJvWavmUANkU3bgLHWReYxXyhxZjwcFY",
  "key28": "66saYGo2q3oWz3MsUYRtanrW1ErRngjzzicULqSKeqY2BmqVeBR2BghJqtMtyLxg8iVvzfU48Pf5AaLFMVWtH6Db",
  "key29": "39MeZHQBSEUsqvRNEheRa6Vf3rwfoPMQ5JwCLnYqEjf4cENxuNCvuczHXCKWEF8hyUPQv5ZSrvdqmoXNuxGCxYBt",
  "key30": "46LBhBwdCXow6RwGWa4jDDMuBeazLy3KB61SVizHP8gEEprTXu31Cf7KWUVmsbTyNSSSKhoBYu3KHpn14pGw92kp",
  "key31": "5JfPQYTzmyCx5fk6xG6F7ADWQro5MBTY7zdN2KR94VmrWULp8YmRC6eXW2vGnNzrMHcj4XuxK5QeQGKgvd7dRVjU",
  "key32": "5pAxLMT17xhSBibgPeM9sB2Se6eRhAhQ1QLMVXVj4ts29FWLTMkySu1fsDm5uiuxSXT8VktZ5kwYNfctXi4emUQK",
  "key33": "WuUkDB1aA5fwUSjvMFyxi5QbsjpBZPrynqbsvDvPJp8WHEhHPQ1SES8SJckCauoZC6Yw4mXN2KFYzsmkTqJzPsg",
  "key34": "4h7HihDyy6VmhXGDgngn2a6TJ8S8pfsK49CCTagLdCrWhKs7QsjE4WkUDPHzxLmUMx7u5ytGWyA7Nk8GwdJ9Bnuc",
  "key35": "5k4RekcyMg6yZL3DRXXiqtH1YZ6h5pPqECDhYBe4jS8KA49oFJ4NBK1qbi1y7YXMnKRwuza8EYTGdC8EVn1zPuAi",
  "key36": "2mPQkwjVDi72Fj5FgB1xHRg9jnr1yBXW2hdpV9QNp5eEugPxqE28fJZW6orh4WRAXPkypday1NBzVK1cYBKF8rxt"
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
