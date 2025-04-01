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
    "4wTTDwUsRJpnouybcEyjqbdCaB7gNkAhJpgytT7AK7jLR9y6aTCYQJ4h4oMehozSQqgC67fgY8YGp9C5wdLKCs1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AkKHVYFgDGo6K2UL3GvwsjEkEFBXhaiyddSbXqpjn3LzXcoDuxzUvGFkygEd822igBKnBn95ZNsZJP2dzjpCgCR",
  "key1": "4poxcth7MCco7Yunn73ER8sfe1jbSGjb73pCQ2ABAHndkkrubBQmnmjp5Lyz29EKurx25WTdt6ukkmdNNWfb97aE",
  "key2": "2i7vRehAsy66kiGoNiZWgxy5QyGbYVjrq3bdWdTyUB1Wut9fqqRj3hgBWRxuAjwHST5nXRaL2RrP2c8Ufjgnyurs",
  "key3": "4LP8pCA65pcqfeSb1Cnks9JjjQAkS1cjWCv15UF6Bmmyna3EXUDtkVVvSie9pKfyMBtTxNYBxhcrGhcan7peNKSx",
  "key4": "2vfrxy2TBnVdj8pkGdqr1Pdy95eYhKsjaZErhLVpWo22koTwkbWLfNqrPVwr7mAgWhjRFRMUo7y5JgrERLp6umKP",
  "key5": "4WLszi8PxjaJ6k2yyLLW9jzJucaG253ZCtJGPHH3o6jEcLYWJKuoStvjsUyEBye6n3rqhzCnhVUewMB3a264veeK",
  "key6": "3z4WQGZ56HFx3WGKSz4VgUNyJM92xXrvHGZgz9i1gEY5dVzAiPRU2GWCko5VxRYmE3G5u5LoLz4rbS4BQvgjsa9m",
  "key7": "4yPwrbAA51Ykrzs6e9ctyC8K8cqYSBbeQbomCSCP5dfdX4rG3vssp7vd1Vtct97JBK5mQLvt4XPUV7Vs6fBeiBNz",
  "key8": "5XiVc9RRNfAcdbakv4f4CzevuSrKMYpwhvX7SqF6tj2TznYzyTPGaBP3hgCffUKtb6sS4A11fVVZsfsANuuuXsmv",
  "key9": "3uVjhC1M4HPP1qX7DoEqqdvRGCVfnuKXKb7MHCugEciaH1ZgFMakoreyhuPFJ11aMqfNcaT4ChxE9qUGemgEhYSZ",
  "key10": "21mePMNoyha65SafWo1QyPZ6WUg9R1wsj5ESmKRmiAg8iXq2yvZvAjwTAfcx7WaQbNYhvfFJbabsNnfNCffFHQa5",
  "key11": "22cj9HKEciZv3dVj9CG82AxRW8PZbmyZK8qULaTsAQNeiYwt2HKsVJ6GPoJrSVhVtB4UFv5GSDZP75X2K5fF62qU",
  "key12": "65DThkRXAHJAvMpRqiADkHSSuvDyFKUK9KavHDZ76pVS2RNzpdq4qEmGCpVYsxCPkQiAhMuugoqXNBd7wS6GiRdh",
  "key13": "hpitTTduXz6cR2LccegVKDPnisGZKNotSoNksjzbx7Le5ufMa9VeSsiJMRsQNuLQpMiLmLJV54ASwg6VyH5hJtx",
  "key14": "2QCgWHwKmAcP2KZnaREzKFfPrPpUcuzzvybJUvtoW38eZoAyF7idrZ1bEza1ZgqVgBxDZN9YDhFvGg1QJ4fiWpKf",
  "key15": "5WRvcHqje7Q2RbojtAUwWGzR4vvcukN7r2FXf8QoryWrt3webohTkoejFHj16Vj8wkGaJt4c5H3p5eEdUk49fPib",
  "key16": "56T9SZn4rKjSDUgQVt1jyoinJxDx5SEw8sB3DeSWpntACJSBjJi2Ep3VdhwRYg775rNH4D7Nq8mu8Fp5UaRygZMQ",
  "key17": "2k8y4wRxci5h5TLWsVB8sVqp3q9gX93EWTFy1jWdNwQBDHpyNmhfNbK1jDviSLrxBv3kuVjzt2AS2bSF9BVhcBWS",
  "key18": "2QWzGEPX6o4naYwU5ZMw9y3jA6f2GYVE66objFmUD81i6BCKmoVuBEUHgwFYtqvqcV7wgUHdh2mL9oP7uwfsYBbX",
  "key19": "2QRGHucxRNi6qaDLrHTeuZqJVTR98rbFZbB6qvV3Bs6HzE2fK7xwx65Vk75yU1sMvrChFMZe2B1jLMRTuKGFj7Qy",
  "key20": "3LhFV1p4WM7FTpAiQMtS9ydW5owwmo6LFiMmJwRpjk19igWG2qCD26rcZe1g63EWbSXiejg3Tgs1h8oguo6aeh6o",
  "key21": "4bLcUN8nZBDRWSHJMHM5jZvDNYKBMXUQFAzxubayuDCzB12k3KeycgeJAuvB6sFatH68GdBrZn3WcD1xLSZYvQHw",
  "key22": "2XFaUrbEuYjb3bUoZmesQDGHh89nxdfBAUTUghMcWXJcY6ubqawWBKnx6cyCLi41rK2ws8A5vDuFs9fLwYNoqPXB",
  "key23": "5MFibx71yMYfAdTpwqjzoMJPePRuZA3tN635P7n1J39cXxT22U5An4rvffzcxMFGEEksJnyeeKrJyHcL7qzfjSEx",
  "key24": "3edi3sRAixSDo3k5zLggnC2LegvNRjxBTSgfjSeAgfvbiHUw4zgrydcMJ1gFKwTCBK83xc3WKhkQuT7xP9Fjd8Ts",
  "key25": "3hzYhQVagYRqVAAVXyjmAvUhe9nZ1u5gDtvS8aEBHvqkdwH7CM8mT2KGnU21uiXsMtaKhiz3LPczkDzQbbidpNhb",
  "key26": "DBX3ttYiEupauMf9MvG94XdTFP9KyMNXWfDLc6NJWMa7ByhvMXGsSuwCuxHBXarkpL7csu29GwBrsMSNW6mQ2Rv",
  "key27": "v1645rqQqu7FQJJnhqP3xdAEb128mTQJyDogQ29asaVwkcHf7Uy3f7hb6EY42uKzp6rAGuiBFkwejGXJzmrRDWD",
  "key28": "3RTwMX41urAJNcuzWJbBP3WQKZECENzTf8LG2gAivAigoV9TRzMFx97U6tCoymyS5BTo5mFFB85bMe8XjAo4gA66",
  "key29": "3p1j21gSPPnTFNwwDEaTZNXiN6X1rsjT6XKbDdtub4jbsQspoZjSaJ4Pe2Jirwqnbc6guopiDRd7BVUoP5o4BPRN",
  "key30": "vsdm8WK9PhyrWedDUrVuGdPmWzB5xtq2NQJW7xEZUW8DU5rjP3Ya6VfpakduyBLXxqqf3enhYP1gh3hsQ1WnCM1",
  "key31": "5MAgaW1TBWLqCnmR5pxhTKB5dFV7EPGs71scKwpsHpQVgbwtmfYyhdTWEJg9cQ9NYJMtSKJhYhBFEBEeqjTBa3Tq",
  "key32": "2U2yiJMdVujS78HNYXWuBAJ3DTKFJ3efVq6NU6eEc4cqTt9ZNphHi61w5XGG37rBfru59d5gDyCaTZhrpXEzvfF3",
  "key33": "62RMwvCajxCdUFyJ88YuXoF73e27B4L4yWMb1VB43aAqvThFKTxiyrQxQheqpZurRRny4iJ7PDp3WEm5zQHo2TDz",
  "key34": "2vAwD9MvzAx7yHHmffaA27ZUGSscJJ2NeediQeLAoXWggviaKcVKDWynyF47u7stNNX5Jo83yV8GSiQwxoDJuFwu",
  "key35": "3d9T4v5wenR91uhfgv8UxGV5CN9gLZvddGpwGvwuFKJjekWLTQ4T6QJmrJGHqQPYT7bzE71EuKtrGXYY3ZVWvEJb"
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
