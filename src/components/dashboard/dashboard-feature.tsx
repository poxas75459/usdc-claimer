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
    "2iBkWXJfhfJNSZGb3vJnJcqCUpUYcPpwK8sEMiRq8PEBBdC7RPLLz9RRRD2Q3N5HizMdskcZNquP5zrWRWFbXSub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RJBCvWuJB91W1h3UenWYpR6Novotckmooekg72QJpVVeL7Rv4R3ecf5gjuuTMRceXkJLtTuzjkdY4xSx8JJvszA",
  "key1": "JjfwLCJDtS42MkRyGQYcKcrVJGRK85bmjrjYpyuqPSe8xMBFoS96R2og8GKScyAmqpKKmgETx72M4PCvJwrBUBp",
  "key2": "CcUVVoohxQaBYgLW7iKnnjuzSfXseK86aFBNpwQx18avT9CXrYUjhxWh8gEh8f24cYrUJoPCKcU5ggDowM9iZGu",
  "key3": "29GeAkbshGcv3fqHwd5taLe9ZagrDXvUsBP5ceWivAFgLquVbpc6mXNMqBnKswKTX2vnqbXH4d7HVuWzWuXo4HBm",
  "key4": "q4fULrsunSHCDHC91saqjAbZBY9EUjPXGuBWscJQLQduLtCPgndzS6jLLEhz7tQG21vavDtUwGKE9EicygR4tXs",
  "key5": "4JySDCWc8pc22DvJ5QMhKz2tn8Pct55LoTu9ScnmsJkxrZiQDuie4eUbVTcP7mNpCEvwn9N51UXFDo6wZCWzcyvU",
  "key6": "5XN7Y4uyd6P8tdjE4Tw5gPi9VmCAX2YKyYuMkRf28ZZ1guCSQ8bJQVQHP2i52dv1EJyi5ThmaH99adCQXuJF1hYy",
  "key7": "4sYBUrDLfdCSyM4a5mgbcVBcQxRr7oVxzxfrERu3biQLN3sEY7gWWc9NiDk6vazdZDqdQNWxsbR6QenfE1iTca8k",
  "key8": "4AvHrXuNhNCntrv5uosfc81k7E22apw1aEwBdcrrqxKvsWQDLynsxhvk2T4mgxXM6HXtHbpzzUZwbXna2TsTNfeG",
  "key9": "3tDQRhUnUx4W96agd3Un2ZMzq9NXUJN7J5VoUMdqFemvEQfCwKKQEmQ1WrGy7FiAE4wGLKaNeKfEbWYfLcTY26ty",
  "key10": "4tGPbrsCPBAwm4QEoLkZiQ5v1fHLButDAm5Vo4VwfVvp9nuA69bf4DFs7NgTaat7cZAiE3bxAgm6fPitPdt8PBww",
  "key11": "2fqGzT8jd8YBjh1HJ57rKfvHGBYAoywjRkXBJaW5jvkh6974pnLzYsR4h2BdxKWZDdoZMnmmPV8FR2LHbUi2KoxW",
  "key12": "25j4YXEHWNvC9R2npJHgPuVeFNanhB4Rz2fJsYL7Aw8whY8hg7Ct64nBkAADgzNYBBveMfwDjZp51hxWDKW6AX1f",
  "key13": "3S75cjfo2BLvfULTorKJyaCLYPFALf2qHaPbB5grFTqkKNTzJbrZkbJS4V2LaVTfjioczqht58h36xRZ2xDSFtU7",
  "key14": "4rqDujn8XWdTsPtmvNybMCfSgKnr8yStMx9TzorMKvh1WkwH4kWo4JHhFh8b7exGHAyrXiep3anX9XwMjVatWt7T",
  "key15": "532LEkzaVSYe1JienUJk7juevQxkyd5WSwmYXDQvuxsdVJDudeYDnKP12eGEH3u6AGyctksSgHqYxHs2ssT5xvaU",
  "key16": "H2XCD5jMaSqnETTsvH5tRuSQFjDey5G1CoacnUuvxEphK3bEX1bTJHuwSD6WEh2RrhTXuLxBuWJwAbC3eaXzG2o",
  "key17": "5U1JqmHWPjZFt5GEsFi3tLJsYZUvKiKKhqADGJZezX7dp6vza5XnoLKNHuomWQCJaffQCgaPK2yLJBLAwL5Ahwk2",
  "key18": "47WnS1G6y8pFrT9BdvX6QnaZACZ2uNHwSMfAmSvSYvDCwTJWXD6JtYNSzssUHqHTY4fLo77TRf1vJXrjmGHvhSWv",
  "key19": "3H4tQdxhw9tVbSs36PexfLu6H8NtJ4TVoobUBVwudaze7Kx99h9r56KS31gnj4Dwg7w4bGA8U9BXgNHs5jDmdWtC",
  "key20": "4pyvK3GM3hzTJ9HJA9bqH8rRNS1xzDGCLR9hQHYGKLcYzt4gtpytCqYLNbSENjPcMyLUBw543SRtwHeWjKqYQUf1",
  "key21": "5BYX3zBxEUrWYbMXeVzXdLh2SaqacX3oBA5r1rGD4PSpLnLB6WLwnKYD7RjxHBX17mbjkaC8fceKvLqYzuSKUWSs",
  "key22": "JWXyC6C4PmA3ToHioKPmUU9gtGJwZkzZv9ugMZ7jfLZMvhySrE5xvmgLsz2Numw5W1Mnkt1EyVuKjkNfriqNVmb",
  "key23": "4SM1mx7NNAuCBjLqm6bzfVgJjuq6rD1PyM1KkKy4wkMBca9JDLZTsfDhGUd3DMQ9tA7wyQ2bodcKxkdiepxnnShw",
  "key24": "3L17mVMMUvgRjyNjuTgkmosziCcvFEtRyBVrmv2zraAVqfN1zQ9kNWPJzEvrtqTbrTLaSUuZKLt3f1HBpg5bWmEB",
  "key25": "i6cSSvd1M5ggTVVDEdoXrMSqM8WVjHR54k1VVwGuh4DMjCkYYLkw1pCdkSNAqUwP8G6QwZ1Ka6vVtJzpij8ntiH",
  "key26": "3LRK3Wr2jtrmWVnJPGsb7eGw1ghLiQKJJD7RDw32fCggpUnZZKtvfmVErfqLag9agB1vPgwhmGjrEDvYL4ebqvuN",
  "key27": "3zqWx1jdb5cPQ262GdQxckCNUFaoftW6xWZVnakAyFG4rRjmFxQySnQsNPjPbPTc2p6expiXqrnHQvj9J3ad8Dz1",
  "key28": "3PMKCGqp7FoDJf45NLo8UoDRUScw2YckpeKF3B7E7PB1f6Tiv53r2obuMXVx3wpCH6yNq5AoNiD9hrru5vq45sDm",
  "key29": "2wziBKj7nSEg3dhTE6oWmsJjPiWdQfqhAhpZdVMwqmMFpzk7rk51U11EyThWS9tdizkTDzPsL9YiWeou27n3yfYZ",
  "key30": "2v8J5sqGEsaxsq46ziUuGfBaDT2fLw9mtkibPcRwDA4MrGWKmHcXTscAatFmgrGVEVpZmZSHAGhGgmG7sxfwTHUe",
  "key31": "2JcaLg6187BsZNeVjjsMoA1X5zfYsvXhGAtbbX9pyRendeJfsME9Tq11oAvoMUZCPwoKbgvZm7qxcQbdtkcPcBVG",
  "key32": "39AiCLn6esmSXsohsK8ucZnie27g6eKLzxUM398MSNfjFwprAfffrVxaR6DE4jcpYVVvGF1XUYxoV9db6jVdeZyU",
  "key33": "2qTibCLrf7zdyYx793rBRD2fqAnQ6fPNDGfcugfQ8nsQRy4jSCFHvaK7Qip2qGyXbs1py1jQwxEZ28SCvBHjeMN1",
  "key34": "3YBoQi35eYm3KL5FBXzDtk6hHwEMEnVBokGaL2KkTHBJQReBnn4LyGyLZcZ5YaFqEQCNH1NZsuho1Jty5YTPBMkF",
  "key35": "39oGtEbaawdEKcDeX8E9P6PVE5qCCwQBdWYTx8gmiY3bDnCnVem8JebTmsZ1itzNtD8aHYovHFicWLjWRAzvb5Vm",
  "key36": "5GhneLrxoTV2bci7EaHQd23uV6jcE8sqcJ7Faqj3ma6JmxJqZd5jCcMNDPcXf5f5a5aNWHie2mdeqUoe6CVRLfEV",
  "key37": "9mspvgVMNPPHPVhw8BfuvjiXinTtMiEuqnKDUk9WRTaXYR5hHupvzB7qp2uLHLpCt9P1UymXHCKZjt9jjYPacYX",
  "key38": "WYqmQYQANM1GjGXxmqvokyWDKGo9WT5VHCTFH9WjNGqi8qXQrwsCpcF9XYwgqE287D3j5uKZvupWFbzmxo1SiqJ",
  "key39": "4Y23RbzGePMZhkCtpipRVnteuctf5uBYZ1iETm3hZpV5pE57427qy4Gcip9YdT2bfNytfsCx3kYv55pWWqaqrneN",
  "key40": "2W4CKnbZVRijtZwFWH5M6BnovchZims8TDz2nDEYSrwFz482f2629ySqgUr15VW3CdoXoPtf5P74Z17JSKGLbaDb"
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
